import hashlib

system_id = "AIKMP"
password = "Itg@AIKMP#20251125"
timestamp = "20260113173204"
target_md5 = "b734c80cdedce48bf70fc6a116378676"

candidates = [
    f"{system_id}{password}{timestamp}",
    f"{system_id}{timestamp}{password}",
    f"{password}{system_id}{timestamp}",
    f"{timestamp}{password}{system_id}",
]

print(f"Target: {target_md5}")
for c in candidates:
    m = hashlib.md5(c.encode('utf-8')).hexdigest()
    print(f"Str: {c[:20]}... -> {m} {'[MATCH]' if m == target_md5 else ''}")
