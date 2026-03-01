# KM-CUSTOM

from __future__ import annotations

import re
from typing import Any


class DLPService:
    """
    v1: lightweight regex-based PII scanning hook.
    This is intentionally conservative; upgrade to a real DLP engine later.
    """

    _PATTERNS: list[tuple[str, re.Pattern]] = [
        ("email", re.compile(r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}")),
        ("phone", re.compile(r"(?:(?:\\+?\\d{1,3})?[\\s-]?)?(?:\\(\\d{2,4}\\)|\\d{2,4})[\\s-]?\\d{3,4}[\\s-]?\\d{4}")),
        ("ipv4", re.compile(r"\\b(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\b")),
        ("aws_key", re.compile(r"\\bAKIA[0-9A-Z]{16}\\b")),
    ]

    @classmethod
    def scan_text(cls, text: str, *, max_findings: int = 50) -> dict[str, Any]:
        if not text:
            return {"ok": True, "findings": []}
        findings = []
        for name, pat in cls._PATTERNS:
            for m in pat.finditer(text):
                findings.append({"type": name, "match": m.group(0), "start": m.start(), "end": m.end()})
                if len(findings) >= max_findings:
                    return {"ok": True, "findings": findings, "truncated": True}
        return {"ok": True, "findings": findings}

