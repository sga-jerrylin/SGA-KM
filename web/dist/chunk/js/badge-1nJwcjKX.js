var r = Object.defineProperty,
  e = Object.getOwnPropertySymbols,
  t = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  n = (e, t, a) =>
    t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (e[t] = a);
import { c as i } from '../../entry/js/index-DO2-PIoQ.js';
import { c as s } from './class-variance-authority-UGtKN88q.js';
import { j as o } from './react-Clxusn8M.js';
const c = s(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors outline-none focus:outline-none',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-bg-primary text-text-primary hover:bg-primary/80',
        secondary:
          'border-transparent bg-bg-card text-text-secondary rounded-md',
        success:
          'border-transparent bg-state-success/5 text-state-success rounded-md',
        destructive:
          'border-transparent bg-state-error/5 text-state-error rounded-md',
        outline: 'text-foreground',
      },
    },
    defaultVariants: { variant: 'default' },
  },
);
function l(r) {
  var s = r,
    { className: l, variant: d } = s,
    u = ((r, n) => {
      var o = {};
      for (var s in r) t.call(r, s) && n.indexOf(s) < 0 && (o[s] = r[s]);
      if (null != r && e)
        for (var s of e(r)) n.indexOf(s) < 0 && a.call(r, s) && (o[s] = r[s]);
      return o;
    })(s, ['className', 'variant']);
  return o.jsx(
    'div',
    ((r, o) => {
      for (var s in o || (o = {})) t.call(o, s) && n(r, s, o[s]);
      if (e) for (var s of e(o)) a.call(o, s) && n(r, s, o[s]);
      return r;
    })({ className: i(c({ variant: d }), l) }, u),
  );
}
export { l as B };
//# sourceMappingURL=badge-1nJwcjKX.js.map
