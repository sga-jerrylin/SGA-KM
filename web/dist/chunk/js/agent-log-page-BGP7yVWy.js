var t = Object.defineProperty,
  e = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  s = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  a = (e, r, s) =>
    r in e
      ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[r] = s),
  m = (t, e) => {
    for (var r in e || (e = {})) o.call(e, r) && a(t, r, e[r]);
    if (s) for (var r of s(e)) i.call(e, r) && a(t, r, e[r]);
    return t;
  },
  l = (t, s) => e(t, r(s)),
  n = (t, e) => {
    var r = {};
    for (var a in t) o.call(t, a) && e.indexOf(a) < 0 && (r[a] = t[a]);
    if (null != t && s)
      for (var a of s(t)) e.indexOf(a) < 0 && i.call(t, a) && (r[a] = t[a]);
    return r;
  };
import { a as d, l as f, c as u } from '../../entry/js/index-DO2-PIoQ.js';
import './@ant-design-BlpkamhZ.js';
import './@babel-IS4qnvsE.js';
import './@date-fns-CjeJQIF-.js';
import './@emotion-Czw0TW3x.js';
import './@floating-ui-DbqYuhjb.js';
import './@hookform-DslUCabo.js';
import './@js-preview-CVTdhFIQ.js';
import './@radix-ui-BedUPMi8.js';
import './@rc-component-DFLSjlpm.js';
import { b as Q } from './@tanstack-BnKsW00g.js';
import './@ungap-DadG6O39.js';
import './@xyflow-CgeW3TgY.js';
import './agent-DNsAG7Cr.js';
import './ahooks-BX8tM3M6.js';
import './antd-B0kpwJle.js';
import './api-B2FJ7mR_.js';
import './aria-hidden-B0YqPW3N.js';
import './avatar-xKBhUsOM.js';
import './bail-gCPcOVbC.js';
import './base64-js-mkwfWz5L.js';
import './bluebird-B9J5FSPx.js';
import {
  a as _,
  B as O,
  b as P,
  d as q,
  c as R,
  e as T,
} from './breadcrumb-DEYDDySY.js';
import './call-bind-apply-helpers-BLJ8ANo7.js';
import './call-bound-yZJavau3.js';
import './card-Doa30pA9.js';
import './ccount-D181NsKZ.js';
import { b as tt } from './chat-vfAgVoQX.js';
import './class-variance-authority-UGtKN88q.js';
import './classcat-Dkggfwne.js';
import './classnames-D-HEXvIh.js';
import './clsx-BeLtu-UY.js';
import './cmdk-D2SBCHIh.js';
import './comma-separated-tokens-f0Pmd_FW.js';
import './command-CJnVeIcS.js';
import { M as U } from './common-hooks-xISUJ5g6.js';
import './component-util-vaeYxGsA.js';
import './constant-CwPpQw2x.js';
import './copy-to-clipboard-D2tJMt9e.js';
import './copy-to-clipboard-qJJXPUVn.js';
import './d3-B60hq4JP.js';
import './dagre-CLusReMt.js';
import './date-BVxu4jao.js';
import './decode-named-character-reference-C-EXV6yX.js';
import './devlop-Cl3hj7Sz.js';
import './dialog-CLuhOWWa.js';
import './dingbat-to-unicode-BaxqMaTm.js';
import './dommatrix-CtBfPIXF.js';
import './dompurify-CM4-pTv8.js';
import './dunder-proto-DQtCUrgC.js';
import './echarts-BIsv_8Yd.js';
import './embla-carousel-B8ffWQHD.js';
import './embla-carousel-react-DXO58Oqv.js';
import './embla-carousel-reactive-utils-P2_yCQ-B.js';
import './es-define-property-F0aoeP8o.js';
import './es-errors-DTEWvbA_.js';
import './es-object-atoms-CyiuHMUS.js';
import './estree-util-is-identifier-name-0h9-8Xae.js';
import './eventsource-parser-Cq35dZ0N.js';
import './extend-BGN_BksZ.js';
import './fault-B9NM2TdK.js';
import './file-util-CmHTVgph.js';
import './form-C5k0V4LU.js';
import './form-DX7T_blT.js';
import './format-D1yhUpzL.js';
import './function-bind-DrnB-baK.js';
import './get-intrinsic-iZnpcNmZ.js';
import './get-nonce-BYiZHLe3.js';
import './get-proto--l4mVsOE.js';
import './gopd-BudZp56J.js';
import './graphlib-An6UvCQF.js';
import './has-symbols-CRskrF1U.js';
import './hasown-DDRZFPNQ.js';
import './hast-util-from-dom-7xrwq65K.js';
import './hast-util-from-html-isomorphic--CV7WcQp.js';
import './hast-util-from-parse5-BuHJElF4.js';
import './hast-util-is-element-Djts9Lmg.js';
import './hast-util-parse-selector-j38Qpric.js';
import './hast-util-raw-BzJDkJ7L.js';
import './hast-util-to-jsx-runtime-BDJvvUl9.js';
import './hast-util-to-parse5-BfzBiKil.js';
import './hast-util-to-text-D3ClGNMi.js';
import './hast-util-whitespace-DlJMGLAz.js';
import './hastscript-DsAXXzZv.js';
import './highlight.js-C_8E0oZX.js';
import './hooks-m2apBidI.js';
import './hotkeys-js-C2-TXS9N.js';
import './hover-card-BDGPv4jB.js';
import './html-parse-stringify-iSz5dG3R.js';
import './html-url-attributes-BA_i5Yxb.js';
import './html-void-elements-Co0z0ClG.js';
import './human-id-DNcHECP6.js';
import './i18next-DnPY2Eh-.js';
import './i18next-browser-languagedetector-DrNbJIFn.js';
import './icon-font-CLTOOrgZ.js';
import './immer-DqD9HV6_.js';
import { M as X } from './index-BCOACp_r.js';
import './index-BRbIhg1L.js';
import './index-SNI4nMVq.js';
import { C as j } from './index-X20fuQs5.js';
import './index-rbg8cEXT.js';
import './inline-style-parser-D8_Zmyug.js';
import './internmap-B8oPgqVZ.js';
import './is-plain-obj-DeEdtHJQ.js';
import './isomorphic-fetch-CoSiLcnf.js';
import './jszip-DTOwhxH_.js';
import './katex-mb6KXHQQ.js';
import './knowledge-Dd5ClXAK.js';
import './knowledge-service-C7bGPLFK.js';
import './label-CZQfd38B.js';
import './lodash.debounce-3fqos5ds.js';
import './logic-hooks-CYSawLJ0.js';
import './longest-streak-2qYzcRvv.js';
import './lop-DEsHaoHz.js';
import './lowlight-DfT14fvQ.js';
import { N as L } from './lucide-react-B0vpjdIH.js';
import './mammoth-BkBXvAa2.js';
import './markdown-table-qiBROtQo.js';
import './math-intrinsics-pM-JTNwN.js';
import './mdast-util-find-and-replace-C3m2c7IZ.js';
import './mdast-util-from-markdown-1sArKEnM.js';
import './mdast-util-gfm-DK6c7sZz.js';
import './mdast-util-gfm-autolink-literal-CD6pVNAA.js';
import './mdast-util-gfm-footnote-BafgiHuT.js';
import './mdast-util-gfm-strikethrough-Dr3Az_nC.js';
import './mdast-util-gfm-table-DXb6KfJ3.js';
import './mdast-util-gfm-task-list-item-BlBb99O1.js';
import './mdast-util-math-CbeIcHjs.js';
import './mdast-util-phrasing-Bu1DMNL2.js';
import './mdast-util-to-hast-C4YPV4CC.js';
import './mdast-util-to-markdown-CCZn3glO.js';
import './mdast-util-to-string-Ck87fAyN.js';
import './micromark-DCrlOZOm.js';
import './micromark-core-commonmark-CnlW_e4A.js';
import './micromark-extension-gfm-CKTn-ZJY.js';
import './micromark-extension-gfm-autolink-literal-B3srAAs6.js';
import './micromark-extension-gfm-footnote-BE784Qy7.js';
import './micromark-extension-gfm-strikethrough-nxJWcXv1.js';
import './micromark-extension-gfm-table-DB3VKh-v.js';
import './micromark-extension-gfm-task-list-item-k3Z_kiff.js';
import './micromark-extension-math-C-HBbACm.js';
import './micromark-factory-destination-CoON6DSP.js';
import './micromark-factory-label-BYB7_Fqd.js';
import './micromark-factory-space-Cej2jX3D.js';
import './micromark-factory-title-D8tpe90Q.js';
import './micromark-factory-whitespace-vLZgvXJT.js';
import './micromark-util-character-pNPn7wjp.js';
import './micromark-util-chunked-3k3e5hER.js';
import './micromark-util-classify-character-kPHsAyyr.js';
import './micromark-util-combine-extensions-DQ8C0oVl.js';
import './micromark-util-decode-numeric-character-reference-DA7xEauU.js';
import './micromark-util-decode-string-DnyHiccs.js';
import './micromark-util-html-tag-name-DbKNfynz.js';
import './micromark-util-normalize-identifier-CzKtq1sx.js';
import './micromark-util-resolve-all-U8fstr8o.js';
import './micromark-util-sanitize-uri-BuPr_CK3.js';
import './micromark-util-subtokenize-DnrM7FhC.js';
import { u as M } from './navigate-hooks-DCA2uWDS.js';
import './next-icon-BTk8M6XE.js';
import './next-themes-BzPgbrvp.js';
import './object-inspect-DgXF7U1q.js';
import './openai-speech-stream-player-XlxITneK.js';
import './option-BKG9YKap.js';
import { P as I } from './page-header-D9c5Gt1e.js';
import './papaparse-BKbXQz66.js';
import './parse5-DCKhIlH5.js';
import './pdfjs-dist-2zK7-Fs3.js';
import { b as g, P as h, a as x } from './popover-hyEkLMFD.js';
import './pptx-preview-CmobgNVe.js';
import './prompt-dialog-1O12T4QP.js';
import './prop-types-DSFElajw.js';
import './property-information-tlBUl7Ly.js';
import './qs-ehMBe6WW.js';
import './ragflow-avatar-CcbNLvr2.js';
import './ragflow-form-Cdwsmcxy.js';
import { R as E } from './ragflow-pagination-D2Ba4l0Q.js';
import './rc-checkbox-DP08vn5g.js';
import './rc-dialog-CaZ5Sk3j.js';
import './rc-dropdown-DddtjOXM.js';
import './rc-field-form-BGTpwivZ.js';
import './rc-input-znNCn9j4.js';
import './rc-menu-BS1CQ8HZ.js';
import './rc-motion-B_ehnZXo.js';
import './rc-notification-CYPAXrGL.js';
import './rc-overflow-Bi6cAXQN.js';
import './rc-pagination-0UaRqrY4.js';
import './rc-picker-DrGInh_3.js';
import './rc-resize-observer-B5u_oc92.js';
import './rc-segmented-HcleQ4Tz.js';
import './rc-select-CAl124Sr.js';
import './rc-tabs-B8xFWZaO.js';
import './rc-textarea-BVzGktRk.js';
import './rc-tooltip-DIrPEQ-t.js';
import './rc-util-OBz8bXRN.js';
import './rc-virtual-list-DUfPaMmP.js';
import './re-resizable-B-ShxtWH.js';
import { j as c, r as p } from './react-Clxusn8M.js';
import './react-audio-voice-recorder-L9CXX1UT.js';
import './react-copy-to-clipboard-DZhHZ3FL.js';
import './react-day-picker-D7mwn53q.js';
import './react-dev-inspector-N2KFfPiN.js';
import './react-dev-utils-g7F4YVlx.js';
import './react-dom-VOJ15Ct0.js';
import './react-draggable-D0FUtMA_.js';
import './react-hook-form-CznKnBye.js';
import './react-i18next-BMfXCA5U.js';
import './react-markdown-BzGW-bD4.js';
import './react-pdf-highlighter-DoC7Sie-.js';
import './react-photo-view-CpcX2QSH.js';
import './react-remove-scroll-AUELm4Rd.js';
import './react-remove-scroll-bar-BGIxhZJV.js';
import './react-rnd-Cxun7SDp.js';
import { b as Y } from './react-router-BrN_DTYY.js';
import './react-string-replace-So4JPHrI.js';
import './react-style-singleton-Bp1nAfue.js';
import './react-syntax-highlighter-B6GunJ7o.js';
import './react18-json-view-CSFLR6iy.js';
import './refractor-BxCETNwH.js';
import './rehype-katex-F6V3eK7v.js';
import './rehype-raw-DXvCHr2H.js';
import './remark-gfm-BHvwoCZ2.js';
import './remark-math-B47F-B90.js';
import './remark-parse-DzmvAPAU.js';
import './remark-rehype-oWJv6Jzo.js';
import './request-Cuuz14pb.js';
import './resize-observer-polyfill-C7U_o75s.js';
import './route-hook-DMKDlFkZ.js';
import './scheduler-CNpwfz3n.js';
import './select-DNgN9m3E.js';
import './select-with-search-Dcm0VCnv.js';
import './side-channel-CTOeWMY-.js';
import './side-channel-list-DtNe9EIe.js';
import './side-channel-map-CuL55P4N.js';
import './side-channel-weakmap-DtKTESOx.js';
import './simple-history-util-Ho-Forcd.js';
import './sonner-TueGljap.js';
import './space-separated-tokens-DO9R2H4G.js';
import { S as A } from './spin-Bdnf2V7y.js';
import './store-2MgiTscL.js';
import './style-to-js-D1jSkQCD.js';
import './style-to-object-BQtMOu5m.js';
import './stylis-C44NkLFc.js';
import './svg-icon-Dz0zcZY8.js';
import './switch-CY9Wp7P2.js';
import {
  T as B,
  a as G,
  c as J,
  b as K,
  d as W,
  e as Z,
} from './table-BZEAlElj.js';
import './tailwind-merge-Ctsig7Qs.js';
import './textarea-BTGVRqXQ.js';
import './throttle-debounce-w9OM8Bxz.js';
import './toggle-selection-CKa2ZqsB.js';
import './trim-lines-C03Dth7Y.js';
import './trough-zzWXwSIo.js';
import './tslib-CQfpvJUa.js';
import './txt-preview-BBaIIaku.js';
import './umi-request-CdNvjMLJ.js';
import './underscore-C_b-f4qw.js';
import './unified-DAOEaPQg.js';
import './unist-util-find-after-C_kEohSO.js';
import './unist-util-is-C5Jwnfs7.js';
import './unist-util-position-CVUg9P9R.js';
import './unist-util-stringify-position-CvSG9YTx.js';
import './unist-util-visit-B8kpuXze.js';
import './unist-util-visit-parents-BOqXQeqN.js';
import { k as F, l as H } from './use-agent-request-CZJ4cPbP.js';
import './use-callback-ref-Dsx2f-yX.js';
import './use-document-request-Dj6rxTR0.js';
import { u as $ } from './use-fetch-data-oYVyEVHm.js';
import './use-handle-filter-submit-Ch1X8WIr.js';
import './use-llm-request-CEg4uBkM.js';
import './use-send-message-CTYCQsJf.js';
import './use-send-shared-message-BRADND46.js';
import './use-sidecar-DxNf7YG0.js';
import './use-sync-external-store-Dj3ABchY.js';
import { a as V } from './use-user-setting-request-DRiTjvUt.js';
import './user-service-DitbEBFg.js';
import {
  ah as b,
  aR as C,
  al as D,
  S as k,
  a0 as N,
  aQ as S,
  aO as v,
  aj as w,
  aP as y,
  a2 as z,
} from './utils-Czs-Tae-.js';
import './uuid-P-OY1HC2.js';
import './vfile-BH-0XMDo.js';
import './vfile-location-7nBZzz4A.js';
import './vfile-message-C6hwY52p.js';
import './void-elements-xgovsPPv.js';
import './web-namespaces-bsVAaBS1.js';
import './web-streams-polyfill-BNK98mjY.js';
import './whatwg-fetch-CqgKm_v_.js';
import './xml-js-DBcGwRrj.js';
import './xmlbuilder-Czz4uvbC.js';
import './xtend-Bx3ujlEJ.js';
import './zod-a4Wy0Jq2.js';
import './zrender-CT8WMwWL.js';
import './zustand-tTi0qCP2.js';
import './zwitch-SYkMgdDi.js';
const et = (t) => {
    var e = t,
      { selectDateRange: r, onSelect: s } = e,
      o = n(e, ['selectDateRange', 'onSelect']);
    const i = new Date(),
      a = { from: b(y(i, 1)), to: v(y(i, 1)) },
      l = { from: b(y(i, 6)), to: v(i) },
      u = [
        { key: 'yestday', value: a },
        { key: 'last7Days', value: l },
        { key: 'last30Days', value: { from: b(y(i, 29)), to: v(i) } },
        { key: 'monthToDate', value: { from: w(i), to: v(i) } },
        { key: 'lastMonth', value: { from: w(S(i)), to: N(S(i)) } },
        { key: 'yearToDate', value: { from: D(i), to: v(i) } },
        { key: 'lastYear', value: { from: D(C(i)), to: z(C(i)) } },
      ],
      [f, h] = p.useState(i),
      [x, g] = p.useState(r || l);
    return c.jsx('div', {
      children: c.jsx('div', {
        className: 'rounded-md border',
        children: c.jsxs('div', {
          className: 'flex max-sm:flex-col',
          children: [
            c.jsx('div', {
              className: 'relative py-4 max-sm:order-1 max-sm:border-t sm:w-32',
              children: c.jsx('div', {
                className: 'h-full sm:border-e',
                children: c.jsxs('div', {
                  className: 'flex flex-col px-2 gap-2',
                  children: [
                    c.jsx(d, {
                      variant: 'ghost',
                      size: 'sm',
                      className: 'w-full justify-start',
                      onClick: () => {
                        const t = { from: b(i), to: v(i) };
                        (g(t), h(i), null == s || s(t));
                      },
                      children: 'Today',
                    }),
                    u.map((t) =>
                      c.jsx(
                        d,
                        {
                          variant: 'ghost',
                          size: 'sm',
                          className: 'w-full justify-start',
                          onClick: () => {
                            (g(t.value),
                              h(t.value.to),
                              null == s || s(t.value));
                          },
                          children: t.key,
                        },
                        t.key,
                      ),
                    ),
                  ],
                }),
              }),
            }),
            c.jsx(
              j,
              m(
                {
                  mode: 'range',
                  selected: x,
                  onSelect: (t) => {
                    if (t) {
                      const e = t,
                        r = { from: b(e.from), to: e.to ? v(e.to) : void 0 };
                      (g(r), null == s || s(r));
                    }
                  },
                  month: f,
                  onMonthChange: h,
                  className: 'p-2',
                },
                o,
              ),
            ),
          ],
        }),
      }),
    });
  },
  rt = (t) => {
    var e = t,
      { onSelect: r, selectDateRange: s } = e,
      o = n(e, ['onSelect', 'selectDateRange']);
    const i = p.useId(),
      a = new Date(),
      [l, j] = p.useState(
        s
          ? { from: b(s.from), to: s.to ? v(s.to) : void 0 }
          : { from: b(a), to: v(a) },
      );
    p.useEffect(() => {
      if (s && s.from)
        try {
          const t = new Date(s.from),
            e = s.to ? new Date(s.to) : void 0;
          if (isNaN(t.getTime())) return;
          if (e && isNaN(e.getTime())) return;
          j({ from: b(t), to: e ? v(e) : void 0 });
        } catch (t) {}
    }, [s]);
    return c.jsxs(h, {
      children: [
        c.jsx(x, {
          asChild: !0,
          children: c.jsxs(d, {
            id: i,
            variant: 'outline',
            className:
              'group bg-muted-foreground/10 hover:bg-muted-foreground/10 border-input w-full justify-between px-3 font-normal outline-offset-0 outline-none focus-visible:outline-[3px]',
            children: [
              c.jsx('span', {
                className: u('truncate', !l && 'text-muted-foreground'),
                children: (null == l ? void 0 : l.from)
                  ? l.to
                    ? c.jsxs(c.Fragment, {
                        children: [
                          k(l.from, 'LLL dd, y'),
                          ' -',
                          ' ',
                          k(l.to, 'LLL dd, y'),
                        ],
                      })
                    : k(l.from, 'LLL dd, y')
                  : 'Pick a date range',
              }),
              c.jsx(L, {
                size: 16,
                className:
                  'text-muted-foreground/80 group-hover:text-foreground shrink-0 transition-colors',
                'aria-hidden': 'true',
              }),
            ],
          }),
        }),
        c.jsx(g, {
          className: 'w-auto p-2',
          align: 'start',
          children: c.jsx(
            et,
            m(
              {
                selectDateRange: l,
                onSelect: (t) => {
                  t && (j(t), null == r || r(t));
                },
              },
              o,
            ),
          ),
        }),
      ],
    });
  },
  st = ({ isOpen: t, onClose: e, message: r, reference: s }) => {
    const { data: o } = V(),
      { data: i } = F(),
      a = p.useMemo(() => {
        var t;
        if (null == r ? void 0 : r.length) {
          const e = (null == (t = r[0]) ? void 0 : t.content) || '',
            s = (e.match(/[\u4e00-\u9fa5]/g) || []).length,
            o = e.length;
          if (s > 0) {
            if (o > 15) return e.substring(0, 15) + '...';
          } else if (o > 30) return e.substring(0, 30) + '...';
          return e;
        }
        return '';
      }, [r]);
    return c.jsx(U, {
      open: t,
      onCancel: e,
      showfooter: !1,
      footer: null,
      title: a || '',
      className: '!w-[900px]',
      children: c.jsx('div', {
        className: 'flex items-start mb-4 flex-col gap-4 justify-start',
        children: c.jsx('div', {
          className: 'w-full',
          children:
            null == r
              ? void 0
              : r.map((t, e) =>
                  c.jsx(
                    X,
                    {
                      nickname: o.nickname,
                      avatar: o.avatar,
                      avatarDialog: i.avatar,
                      item: t,
                      reference: s,
                      index: e,
                      showLikeButton: !1,
                      showLog: !1,
                    },
                    tt(t),
                  ),
                ),
        }),
      }),
    });
  },
  ot = () => {
    const t = new Date();
    return (t.setHours(0, 0, 0, 0), t);
  },
  it = () => {
    const t = new Date();
    return (t.setHours(23, 59, 59, 999), t);
  },
  at = () => {
    const { navigateToAgents: t, navigateToAgent: e } = M(),
      { flowDetail: r } = $(),
      { id: s } = Y(),
      o = Q(),
      i = {
        keywords: '',
        from_date: ot(),
        to_date: it(),
        orderby: 'create_time',
        desc: !1,
        page: 1,
        page_size: 10,
      },
      [a, n] = p.useState(i),
      j = [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
          render: (t, e) => {
            var r, s;
            return c.jsx('span', {
              children: (
                null == (r = null == e ? void 0 : e.message) ? void 0 : r.length
              )
                ? null == (s = null == e ? void 0 : e.message[0])
                  ? void 0
                  : s.content
                : '',
            });
          },
        },
        {
          title: 'State',
          dataIndex: 'state',
          key: 'state',
          render: (t, e) =>
            c.jsx('div', {
              className: 'size-2 rounded-full',
              style: { backgroundColor: e.errors ? 'red' : 'green' },
            }),
        },
        { title: 'Number', dataIndex: 'round', key: 'round' },
        {
          title: 'Latest Date',
          dataIndex: 'update_date',
          key: 'update_date',
          sortable: !0,
        },
        {
          title: 'Create Date',
          dataIndex: 'create_date',
          key: 'create_date',
          sortable: !0,
        },
      ],
      { data: d, loading: u } = H(a),
      { sessions: h, total: x } = d || {},
      [g, v] = p.useState({ from: a.from_date, to: a.to_date }),
      [b, k] = p.useState(a.keywords),
      [y, w] = p.useState({ current: 1, pageSize: 10, total: x });
    p.useEffect(() => {
      w((t) => l(m({}, t), { total: x }));
    }, [x]);
    const [N, S] = p.useState({ orderby: i.orderby, desc: !!i.desc }),
      D = () => {
        n((t) =>
          l(m({}, t), {
            from_date: g.from,
            to_date: g.to,
            page: y.current,
            page_size: y.pageSize,
            orderby: (null == N ? void 0 : N.orderby) || '',
            desc: null == N ? void 0 : N.desc,
            keywords: b,
          }),
        );
      };
    p.useEffect(() => {
      D();
    }, [y.current, y.pageSize, N]);
    const [z, C] = p.useState(!1),
      [L, F] = p.useState();
    return c.jsxs('div', {
      className: ' text-white',
      children: [
        c.jsx(I, {
          children: c.jsx(O, {
            children: c.jsxs(_, {
              children: [
                c.jsx(P, {
                  children: c.jsx(R, { onClick: t, children: 'Agent' }),
                }),
                c.jsx(q, {}),
                c.jsx(P, {
                  children: c.jsx(R, { onClick: e(s), children: r.title }),
                }),
                c.jsx(q, {}),
                c.jsx(P, { children: c.jsx(T, { children: 'Log' }) }),
              ],
            }),
          }),
        }),
        c.jsxs('div', {
          className: 'p-4',
          children: [
            c.jsxs('div', {
              className: 'flex justify-between items-center',
              children: [
                c.jsx('h1', {
                  className: 'text-2xl font-bold mb-4',
                  children: 'Log',
                }),
                c.jsxs('div', {
                  className: 'flex justify-end space-x-2 mb-4 text-foreground',
                  children: [
                    c.jsxs('div', {
                      className: 'flex items-center space-x-2',
                      children: [
                        c.jsx('span', { children: 'ID/Title' }),
                        c.jsx(f, {
                          value: b,
                          onChange: (t) => {
                            k(t.target.value);
                          },
                          className: 'w-32',
                        }),
                      ],
                    }),
                    c.jsxs('div', {
                      className: 'flex items-center space-x-2',
                      children: [
                        c.jsx('span', {
                          className: 'whitespace-nowrap',
                          children: 'Latest Date',
                        }),
                        c.jsx(rt, {
                          onSelect: ({ from: t, to: e }) => {
                            v({ from: t, to: e });
                          },
                          selectDateRange: g,
                        }),
                      ],
                    }),
                    c.jsx('button', {
                      type: 'button',
                      className:
                        'bg-foreground  text-text-title-invert  px-4 py-1 rounded',
                      onClick: () => {
                        (w(l(m({}, y), { current: 1 })),
                          D(),
                          o.invalidateQueries({ queryKey: ['fetchAgentLog'] }));
                      },
                      children: 'Search',
                    }),
                    c.jsx('button', {
                      type: 'button',
                      className:
                        'bg-transparent text-foreground px-4 py-1 rounded border',
                      onClick: () => (
                        n(i),
                        k(i.keywords),
                        void v({ from: i.from_date, to: i.to_date })
                      ),
                      children: 'Reset',
                    }),
                  ],
                }),
              ],
            }),
            c.jsx('div', {
              className: 'border rounded-md overflow-auto',
              children: c.jsxs(B, {
                rootClassName: 'max-h-[calc(100vh-200px)]',
                children: [
                  c.jsx(G, {
                    className: 'sticky top-0 bg-background z-10 shadow-sm',
                    children: c.jsx(K, {
                      children: j.map((t) =>
                        c.jsx(
                          J,
                          {
                            onClick: t.sortable
                              ? () =>
                                  ((t) => {
                                    let e = !1;
                                    (N && N.orderby === t && (e = !N.desc),
                                      S({ orderby: t, desc: e }));
                                  })(t.dataIndex)
                              : void 0,
                            className: t.sortable
                              ? 'cursor-pointer hover:bg-muted/50'
                              : '',
                            children: c.jsxs('div', {
                              className: 'flex items-center',
                              children: [
                                t.title,
                                t.sortable &&
                                  (null == N ? void 0 : N.orderby) ===
                                    t.dataIndex &&
                                  c.jsx('span', {
                                    className: 'ml-1',
                                    children: N.desc ? '↓' : '↑',
                                  }),
                              ],
                            }),
                          },
                          t.dataIndex,
                        ),
                      ),
                    }),
                  }),
                  c.jsxs(W, {
                    children: [
                      u &&
                        c.jsx(K, {
                          children: c.jsx(Z, {
                            colSpan: j.length,
                            className: 'h-24 text-center',
                            children: c.jsx(A, {
                              size: 'large',
                              children: c.jsx('span', {
                                className: 'sr-only',
                                children: 'Loading...',
                              }),
                            }),
                          }),
                        }),
                      !u &&
                        (null == h
                          ? void 0
                          : h.map((t) =>
                              c.jsx(
                                K,
                                {
                                  onClick: () => {
                                    ((t) => {
                                      (null == t ? void 0 : t.round) &&
                                        (F(t), C(!0));
                                    })(t);
                                  },
                                  children: j.map((e) =>
                                    c.jsx(
                                      Z,
                                      {
                                        children: e.render
                                          ? e.render(t[e.dataIndex], t)
                                          : t[e.dataIndex],
                                      },
                                      e.dataIndex,
                                    ),
                                  ),
                                },
                                t.id,
                              ),
                            )),
                      !u &&
                        (!h || 0 === h.length) &&
                        c.jsx(K, {
                          children: c.jsx(Z, {
                            colSpan: j.length,
                            className: 'h-24 text-center',
                            children: 'No data',
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            }),
            c.jsx('div', {
              className: 'flex justify-end mt-4 w-full',
              children: c.jsx('div', {
                className: 'space-x-2',
                children: c.jsx(
                  E,
                  l(m({}, y), {
                    total: y.total,
                    onChange: (t, e) => {
                      ((t, e) => {
                        let r = t || 1;
                        (y.pageSize !== e && (r = 1),
                          w(l(m({}, y), { current: r, pageSize: e || 10 })));
                      })(t, e);
                    },
                  }),
                ),
              }),
            }),
          ],
        }),
        c.jsx(st, {
          isOpen: z,
          message: null == L ? void 0 : L.message,
          reference: null == L ? void 0 : L.reference,
          onClose: () => C(!1),
        }),
      ],
    });
  };
export { at as default };
//# sourceMappingURL=agent-log-page-BGP7yVWy.js.map
