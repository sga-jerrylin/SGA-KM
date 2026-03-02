var e = Object.defineProperty,
  a = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  l = (a, r, s) =>
    r in a
      ? e(a, r, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (a[r] = s),
  f = (e, f) => {
    for (var t in f || (f = {})) r.call(f, t) && l(e, t, f[t]);
    if (a) for (var t of a(f)) s.call(f, t) && l(e, t, f[t]);
    return e;
  },
  t = (e, l) => {
    var f = {};
    for (var t in e) r.call(e, t) && l.indexOf(t) < 0 && (f[t] = e[t]);
    if (null != e && a)
      for (var t of a(e)) l.indexOf(t) < 0 && s.call(e, t) && (f[t] = e[t]);
    return f;
  };
import { c as u } from '../../entry/js/index-DO2-PIoQ.js';
import { M as c, K as i, L as m } from './@radix-ui-BedUPMi8.js';
import { j as n, r as o } from './react-Clxusn8M.js';
const d = o.forwardRef((e, a) => {
  var r = e,
    { className: s } = r,
    l = t(r, ['className']);
  return n.jsx(
    i,
    f(
      {
        ref: a,
        className: u(
          'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
          s,
        ),
      },
      l,
    ),
  );
});
d.displayName = i.displayName;
const p = o.forwardRef((e, a) => {
  var r = e,
    { className: s } = r,
    l = t(r, ['className']);
  return n.jsx(
    m,
    f({ ref: a, className: u('aspect-square h-full w-full', s) }, l),
  );
});
p.displayName = m.displayName;
const y = o.forwardRef((e, a) => {
  var r = e,
    { className: s } = r,
    l = t(r, ['className']);
  return n.jsx(
    c,
    f(
      {
        ref: a,
        className: u(
          'flex h-full w-full items-center justify-center rounded-full bg-bg-member',
          s,
        ),
      },
      l,
    ),
  );
});
y.displayName = c.displayName;
export { d as A, p as a, y as b };
//# sourceMappingURL=avatar-xKBhUsOM.js.map
