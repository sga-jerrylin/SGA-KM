var a = Object.defineProperty,
  e = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  t = (e, r, s) =>
    r in e
      ? a(e, r, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[r] = s),
  o = (a, o) => {
    for (var l in o || (o = {})) r.call(o, l) && t(a, l, o[l]);
    if (e) for (var l of e(o)) s.call(o, l) && t(a, l, o[l]);
    return a;
  },
  l = (a, t) => {
    var o = {};
    for (var l in a) r.call(a, l) && t.indexOf(l) < 0 && (o[l] = a[l]);
    if (null != a && e)
      for (var l of e(a)) t.indexOf(l) < 0 && s.call(a, l) && (o[l] = a[l]);
    return o;
  };
import { c } from '../../entry/js/index-DO2-PIoQ.js';
import { j as d, r as n } from './react-Clxusn8M.js';
const i = n.forwardRef((a, e) => {
  var r = a,
    { className: s } = r,
    t = l(r, ['className']);
  return d.jsx(
    'div',
    o(
      {
        ref: e,
        className: c(
          'rounded-lg border-border-button border-0.5 shadow-sm bg-bg-input transition-shadow',
          s,
        ),
      },
      t,
    ),
  );
});
i.displayName = 'Card';
const f = n.forwardRef((a, e) => {
  var r = a,
    { className: s } = r,
    t = l(r, ['className']);
  return d.jsx(
    'div',
    o({ ref: e, className: c('flex flex-col space-y-1.5 p-6', s) }, t),
  );
});
f.displayName = 'CardHeader';
const m = n.forwardRef((a, e) => {
  var r = a,
    { className: s } = r,
    t = l(r, ['className']);
  return d.jsx(
    'div',
    o(
      {
        ref: e,
        className: c('text-2xl font-semibold leading-none tracking-tight', s),
      },
      t,
    ),
  );
});
m.displayName = 'CardTitle';
const p = n.forwardRef((a, e) => {
  var r = a,
    { className: s } = r,
    t = l(r, ['className']);
  return d.jsx(
    'div',
    o({ ref: e, className: c('text-sm text-muted-foreground', s) }, t),
  );
});
p.displayName = 'CardDescription';
const N = n.forwardRef((a, e) => {
  var r = a,
    { className: s } = r,
    t = l(r, ['className']);
  return d.jsx(
    'div',
    o({ ref: e, className: c('p-6 pt-0 transition-shadow', s) }, t),
  );
});
N.displayName = 'CardContent';
const v = n.forwardRef((a, e) => {
  var r = a,
    { className: s } = r,
    t = l(r, ['className']);
  return d.jsx(
    'div',
    o({ ref: e, className: c('flex items-center p-6 pt-0', s) }, t),
  );
});
v.displayName = 'CardFooter';
export { N as a, f as b, i as C, m as c, p as d, v as e };
//# sourceMappingURL=card-Doa30pA9.js.map
