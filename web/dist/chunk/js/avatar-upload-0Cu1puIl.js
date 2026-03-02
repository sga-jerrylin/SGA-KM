var e = Object.defineProperty,
  t = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  s = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  i = (t, r, s) =>
    r in t
      ? e(t, r, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[r] = s);
import { a as m, I as p } from '../../entry/js/index-DO2-PIoQ.js';
import { a as d, b as h, A as u } from './avatar-xKBhUsOM.js';
import { M as x } from './common-hooks-xISUJ5g6.js';
import { t as c } from './file-util-CmHTVgph.js';
import { Y as b, P as g, X as v } from './lucide-react-B0vpjdIH.js';
import { r as l, j as o } from './react-Clxusn8M.js';
import { u as f } from './react-i18next-BMfXCA5U.js';
const j = l.forwardRef(function ({ value: e, onChange: j, tips: y }, w) {
  const { t: N } = f(),
    [z, C] = l.useState(''),
    [k, M] = l.useState(!1),
    [O, R] = l.useState(null),
    [E, P] = l.useState({ x: 0, y: 0, size: 200 }),
    L = l.useRef(null),
    S = l.useRef(null),
    $ = l.useRef(null),
    D = l.useRef(!1),
    I = l.useRef({ x: 0, y: 0 }),
    [T, Y] = l.useState(1),
    [A, B] = l.useState({ x: 0, y: 0 }),
    H = l.useCallback(
      (e) => {
        return (
          (t = null),
          (r = null),
          (s = function* () {
            var t, r, s;
            const n =
              null == (r = null == (t = e.target) ? void 0 : t.files)
                ? void 0
                : r[0];
            if (
              /\.(jpg|jpeg|png|webp|bmp)$/i.test(
                null != (s = null == n ? void 0 : n.name) ? s : '',
              )
            ) {
              const e = yield c(n, 1e3);
              (R(e), M(!0));
            }
            e.target.value = '';
          }),
          new Promise((e, n) => {
            var a = (e) => {
                try {
                  l(s.next(e));
                } catch (t) {
                  n(t);
                }
              },
              i = (e) => {
                try {
                  l(s.throw(e));
                } catch (t) {
                  n(t);
                }
              },
              l = (t) =>
                t.done ? e(t.value) : Promise.resolve(t.value).then(a, i);
            l((s = s.apply(t, r)).next());
          })
        );
        var t, r, s;
      },
      [j],
    ),
    W = l.useCallback(() => {
      (C(''), null == j || j(''));
    }, [j]),
    X = l.useCallback(() => {
      if (!L.current || !S.current) return;
      const e = S.current,
        t = e.getContext('2d'),
        r = L.current;
      if (!t) return;
      ((e.width = 64),
        (e.height = 64),
        t.drawImage(r, E.x, E.y, E.size, E.size, 0, 0, 64, 64));
      const s = e.toDataURL('image/png');
      (C(s), null == j || j(s), M(!1));
    }, [E, j]),
    U = l.useCallback(() => {
      (M(!1), R(null));
    }, []),
    q = l.useCallback(() => {
      if (!L.current || !$.current) return;
      const e = L.current,
        t = $.current,
        r = Math.min(t.clientWidth / e.width, t.clientHeight / e.height);
      Y(r);
      const s = e.width * r,
        n = e.height * r,
        a = (t.clientWidth - s) / 2,
        i = (t.clientHeight - n) / 2;
      B({ x: a, y: i });
      const l = 0.8 * Math.min(s, n),
        o = (e.width - l / r) / 2,
        c = (e.height - l / r) / 2;
      P({ x: o, y: c, size: l / r });
    }, []),
    F = l.useCallback(
      (e) => {
        if (!D.current || !L.current || !$.current) return;
        const l = L.current,
          o = $.current.getBoundingClientRect(),
          c = e.clientX - o.left,
          u = e.clientY - o.top,
          d = (c - A.x) / T,
          h = (u - A.y) / T;
        let m = d - I.current.x,
          p = h - I.current.y;
        ((m = Math.max(0, Math.min(m, l.width - E.size))),
          (p = Math.max(0, Math.min(p, l.height - E.size))),
          P((e) => {
            return (
              (l = ((e, t) => {
                for (var r in t || (t = {})) n.call(t, r) && i(e, r, t[r]);
                if (s) for (var r of s(t)) a.call(t, r) && i(e, r, t[r]);
                return e;
              })({}, e)),
              t(l, r({ x: m, y: p }))
            );
            var l;
          }));
      },
      [E.size, T, A],
    ),
    G = l.useCallback(() => {
      ((D.current = !1),
        document.removeEventListener('mousemove', F),
        document.removeEventListener('mouseup', G));
    }, [F]),
    J = l.useCallback(
      (e) => {
        if (
          (e.preventDefault(),
          e.stopPropagation(),
          (D.current = !0),
          L.current && $.current)
        ) {
          const t = $.current.getBoundingClientRect(),
            r = e.clientX - t.left,
            s = e.clientY - t.top,
            n = (r - A.x) / T,
            a = (s - A.y) / T;
          I.current = { x: n - E.x, y: a - E.y };
        }
        (document.addEventListener('mousemove', F),
          document.addEventListener('mouseup', G));
      },
      [E, T, A],
    ),
    K = l.useCallback((e) => {
      if (!L.current) return;
      e.preventDefault();
      const t = L.current,
        r = e.deltaY > 0 ? 0.9 : 1.1;
      P((e) => {
        const s = Math.max(
            20,
            Math.min(e.size * r, Math.min(t.width, t.height)),
          ),
          n = (e.x + e.size / 2) / t.width,
          a = (e.y + e.size / 2) / t.height,
          i = n * t.width - s / 2,
          l = a * t.height - s / 2;
        return {
          x: Math.max(0, Math.min(i, t.width - s)),
          y: Math.max(0, Math.min(l, t.height - s)),
          size: s,
        };
      });
    }, []);
  return (
    l.useEffect(() => {
      e && C(e);
    }, [e]),
    l.useEffect(() => {
      const e = $.current;
      setTimeout(() => {
        if (O && e && k)
          return (
            e.addEventListener('wheel', K, { passive: !1 }),
            () => {
              e.removeEventListener('wheel', K);
            }
          );
      }, 100);
    }, [K, $.current]),
    o.jsxs('div', {
      className: 'flex justify-start items-end space-x-2',
      children: [
        o.jsxs('div', {
          className: 'relative group',
          children: [
            z
              ? o.jsxs('div', {
                  className:
                    'w-[64px] h-[64px] relative grid place-content-center',
                  children: [
                    o.jsxs(u, {
                      className: 'w-[64px] h-[64px] rounded-md',
                      children: [
                        o.jsx(d, { className: 'block', src: z, alt: '' }),
                        o.jsx(h, {}),
                      ],
                    }),
                    o.jsx('div', {
                      className:
                        'absolute inset-0 bg-[#000]/20 group-hover:bg-[#000]/60',
                      children: o.jsx(b, {
                        size: 20,
                        className:
                          'absolute right-2 bottom-0 opacity-50 hidden group-hover:block',
                      }),
                    }),
                    o.jsx(m, {
                      onClick: W,
                      size: 'icon',
                      className:
                        'border-background focus-visible:border-background absolute -top-2 -right-2 size-6 rounded-full border-2 shadow-none z-10',
                      'aria-label': 'Remove image',
                      type: 'button',
                      children: o.jsx(v, { className: 'size-3.5' }),
                    }),
                  ],
                })
              : o.jsx('div', {
                  className:
                    'w-[64px] h-[64px] grid place-content-center border border-dashed bg-bg-input rounded-md',
                  children: o.jsxs('div', {
                    className: 'flex flex-col items-center',
                    children: [
                      o.jsx(g, {}),
                      o.jsx('p', { children: N('common.upload') }),
                    ],
                  }),
                }),
            o.jsx(p, {
              placeholder: '',
              type: 'file',
              title: '',
              accept: 'image/*',
              className:
                'absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer',
              onChange: H,
              ref: w,
            }),
          ],
        }),
        o.jsx('div', {
          className: 'margin-1 text-text-secondary',
          children: null != y ? y : N('knowledgeConfiguration.photoTip'),
        }),
        o.jsx(x, {
          open: k,
          onOpenChange: (e) => {
            (M(e), e || R(null));
          },
          title: N('setting.cropImage'),
          size: 'small',
          onCancel: U,
          onOk: X,
          children: o.jsx('div', {
            className: 'flex flex-col items-center p-4',
            children:
              O &&
              o.jsxs('div', {
                className: 'w-full',
                children: [
                  o.jsxs('div', {
                    ref: $,
                    className:
                      'relative overflow-hidden border border-border rounded-md mx-auto bg-bg-card',
                    style: {
                      width: '300px',
                      height: '300px',
                      touchAction: 'none',
                    },
                    children: [
                      o.jsx('img', {
                        ref: L,
                        src: O,
                        alt: 'To crop',
                        className: 'absolute block',
                        style: {
                          transform: `scale(${T})`,
                          transformOrigin: 'top left',
                          left: `${A.x}px`,
                          top: `${A.y}px`,
                        },
                        onLoad: q,
                      }),
                      L.current &&
                        o.jsx('div', {
                          className:
                            'absolute border-2 border-white border-dashed cursor-move',
                          style: {
                            left: `${A.x + E.x * T}px`,
                            top: `${A.y + E.y * T}px`,
                            width: E.size * T + 'px',
                            height: E.size * T + 'px',
                            boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.5)',
                          },
                          onMouseDown: J,
                        }),
                    ],
                  }),
                  o.jsx('div', {
                    className: 'flex justify-center mt-4',
                    children: o.jsx('p', {
                      className: 'text-sm text-text-secondary',
                      children: N('setting.cropTip'),
                    }),
                  }),
                  o.jsx('canvas', { ref: S, className: 'hidden' }),
                ],
              }),
          }),
        }),
      ],
    })
  );
});
export { j as A };
//# sourceMappingURL=avatar-upload-0Cu1puIl.js.map
