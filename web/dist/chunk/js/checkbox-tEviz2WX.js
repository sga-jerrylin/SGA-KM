var e = Object.defineProperty,
  r = Object.defineProperties,
  t = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  i = (r, t, a) =>
    t in r
      ? e(r, t, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (r[t] = a);
import { c as b } from '../../entry/js/index-DO2-PIoQ.js';
import { F as d, G as n } from './@radix-ui-BedUPMi8.js';
import { u as f } from './lucide-react-B0vpjdIH.js';
import { r as c, j as l } from './react-Clxusn8M.js';
const p = c.forwardRef((e, c) => {
  var p,
    m,
    u = e,
    { className: j } = u,
    y = ((e, r) => {
      var t = {};
      for (var i in e) o.call(e, i) && r.indexOf(i) < 0 && (t[i] = e[i]);
      if (null != e && a)
        for (var i of a(e)) r.indexOf(i) < 0 && s.call(e, i) && (t[i] = e[i]);
      return t;
    })(u, ['className']);
  return l.jsx(
    d,
    ((p = ((e, r) => {
      for (var t in r || (r = {})) o.call(r, t) && i(e, t, r[t]);
      if (a) for (var t of a(r)) s.call(r, t) && i(e, t, r[t]);
      return e;
    })(
      {
        ref: c,
        className: b(
          'peer size-4 shrink-0 rounded-sm border border-text-secondary outline-0 transition-colors bg-bg-component',
          'hover:border-border-default hover:bg-border-button',
          'focus-visible:border-border-default focus-visible:bg-border-default',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'data-[state=checked]:text-text-primary data-[state=checked]:border-text-primary',
          j,
        ),
      },
      y,
    )),
    (m = {
      children: l.jsx(n, {
        className: b('flex items-center justify-center text-current'),
        children: l.jsx(f, { className: 'size-3' }),
      }),
    }),
    r(p, t(m))),
  );
});
p.displayName = d.displayName;
export { p as C };
//# sourceMappingURL=checkbox-tEviz2WX.js.map
