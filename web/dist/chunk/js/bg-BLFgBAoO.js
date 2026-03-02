import { U as s } from '../../entry/js/index-DO2-PIoQ.js';
import { r as e, j as o } from './react-Clxusn8M.js';
import { u as i, a as r } from './react-router-BrN_DTYY.js';
import { m as t } from './request-Cuuz14pb.js';
const l = () => {
    const o = (() => {
        const [o, l] = r(),
          a = o.get('error'),
          h = e.useMemo(() => new URLSearchParams(o.toString()), [o]),
          n = i();
        return (
          e.useEffect(() => {
            if (a)
              return (
                t.error(a),
                void setTimeout(() => {
                  (n('/login'), h.delete('error'), l(h));
                }, 1e3)
              );
            const e = o.get('auth');
            e && (s.setAuthorization(e), h.delete('auth'), l(h), n('/'));
          }, [a, o, h, n, l]),
          o.get('auth')
        );
      })(),
      [l, a] = e.useState(null);
    return (
      e.useEffect(() => {
        a(!!s.getAuthorization() || !!o);
      }, [o]),
      { isLogin: l }
    );
  },
  a = { top: 240, middle: 466, bottom: 704 },
  h = ({ isPaused: t = !1 }) => {
    const s = t ? 'paused' : '',
      e = (t, s = '', e) =>
        o.jsxs('svg', {
          className: 'w-full h-full',
          preserveAspectRatio: 'none',
          viewBox: `0 0 1440 ${a[e]}`,
          xmlns: 'http://www.w3.org/2000/svg',
          children: [
            o.jsxs('defs', {
              children: [
                o.jsxs('linearGradient', {
                  id: `glow${s}`,
                  x1: '0%',
                  y1: '0%',
                  x2: '100%',
                  y2: '0%',
                  children: [
                    o.jsx('stop', {
                      offset: '0%',
                      stopColor: '#80FFF8',
                      stopOpacity: '0',
                    }),
                    o.jsx('stop', {
                      offset: '50%',
                      stopColor: '#80FFF8',
                      stopOpacity: '1',
                    }),
                    o.jsx('stop', {
                      offset: '100%',
                      stopColor: '#80FFF8',
                      stopOpacity: '0',
                    }),
                  ],
                }),
                o.jsxs('linearGradient', {
                  id: 'strokeWidthGradient',
                  x1: '0%',
                  y1: '0%',
                  x2: '100%',
                  y2: '0%',
                  children: [
                    o.jsx('stop', { offset: '0%', stopColor: '#000' }),
                    o.jsx('stop', { offset: '10%', stopColor: '#fff' }),
                    o.jsx('stop', { offset: '50%', stopColor: '#fff' }),
                    o.jsx('stop', { offset: '90%', stopColor: '#fff' }),
                    o.jsx('stop', { offset: '100%', stopColor: '#000' }),
                  ],
                }),
                o.jsxs('linearGradient', {
                  id: `highlight${s}`,
                  x1: '0%',
                  y1: '0%',
                  x2: '100%',
                  y2: '0%',
                  children: [
                    o.jsx('stop', {
                      offset: '45%',
                      stopColor: '#FFF',
                      stopOpacity: '0.2',
                    }),
                    o.jsx('stop', {
                      offset: '48%',
                      stopColor: '#FFD700',
                      stopOpacity: '0.3',
                    }),
                  ],
                }),
                o.jsx('filter', {
                  id: `glowFilter${s}`,
                  x: '-10%',
                  y: '-10%',
                  width: '120%',
                  height: '120%',
                  children: o.jsx('feGaussianBlur', {
                    in: 'SourceGraphic',
                    stdDeviation: '5.2',
                  }),
                }),
                o.jsx('filter', {
                  id: `highlightFilter${s}`,
                  x: '-5%',
                  y: '-5%',
                  width: '110%',
                  height: '110%',
                  children: o.jsx('feGaussianBlur', {
                    in: 'SourceGraphic',
                    stdDeviation: '5.5',
                  }),
                }),
                o.jsxs('mask', {
                  id: `glowMask${s}`,
                  children: [
                    o.jsx('rect', {
                      width: '100%',
                      height: '100%',
                      fill: 'transparent',
                    }),
                    o.jsx('path', {
                      d: t,
                      fill: 'none',
                      stroke: 'url(#strokeWidthGradient)',
                      strokeWidth: '1',
                      strokeDasharray: '50,600',
                      strokeDashoffset: '0',
                      filter: `url(#glowFilter${s})`,
                      className: 'animate-glow mask-path',
                    }),
                    o.jsx('path', {
                      d: t,
                      fill: 'none',
                      stroke: `url(#highlight${s})`,
                      strokeWidth: '0.5',
                      strokeDasharray: '50,600',
                      strokeDashoffset: '16',
                      filter: `url(#highlightFilter${s})`,
                      className: 'animate-highlight mask-path',
                    }),
                  ],
                }),
              ],
            }),
            o.jsx('path', {
              d: t,
              stroke: '#00BEB4',
              strokeWidth: '1',
              fill: 'none',
              opacity: '0.1',
            }),
            o.jsx('path', {
              d: t,
              stroke: `url(#glow${s})`,
              strokeWidth: '2',
              fill: 'none',
              opacity: '0.8',
              mask: `url(#glowMask${s})`,
            }),
          ],
        });
    return o.jsx('div', {
      className: 'absolute inset-0 overflow-hidden pointer-events-none ',
      children: o.jsxs('div', {
        className: 'absolute top-0 left-0 right-0 w-full',
        children: [
          o.jsx('div', {
            className: `w-full ml-10 ${s}`,
            style: { height: a.top + 'px' },
            children: e(
              'M1282.81 -45L999.839 147.611C988.681 155.206 975.496 159.267 961.999 159.267H746.504H330.429C317.253 159.267 304.368 155.397 293.373 148.137L0.88623 -45',
              0,
              'top',
            ),
          }),
          o.jsx('div', {
            className: `w-full -mt-48 ${s}`,
            style: { height: a.middle + 'px' },
            children: e(
              'M0 1L203.392 203.181C215.992 215.705 233.036 222.736 250.802 222.736H287.103C305.94 222.736 323.913 230.636 336.649 244.514L425.401 341.222C438.137 355.1 456.11 363 474.947 363H976.902C996.333 363 1014.81 354.595 1027.59 339.95L1104.79 251.424C1116.14 238.4 1132.08 230.248 1149.29 228.659L1191.13 224.796C1205.62 223.458 1219.28 217.461 1230.06 207.704L1440 17.7981',
              1,
              'middle',
            ),
          }),
          o.jsx('div', {
            className: `w-full -mt-72 ${s}`,
            style: { height: a.bottom + 'px' },
            children: e(
              'M-10 1L57.1932 71.1509C67.7929 82.2171 74.2953 96.5714 75.6239 111.837L79.8042 159.87C81.3312 177.416 89.68 193.662 103.057 205.117L399.311 458.829C411.497 469.265 427.011 475 443.054 475H972.606C988.463 475 1003.81 469.396 1015.94 459.179L1310.78 210.75C1323.01 200.451 1331.16 186.136 1333.79 170.369L1341.87 121.837C1344.06 108.691 1350.11 96.492 1359.24 86.7885L1440 1',
              2,
              'bottom',
            ),
          }),
        ],
      }),
    });
  };
export { h as B, l as u };
//# sourceMappingURL=bg-BLFgBAoO.js.map
