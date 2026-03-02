var r = Object.defineProperty,
  e = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  s = Object.getOwnPropertySymbols,
  t = Object.prototype.hasOwnProperty,
  l = Object.prototype.propertyIsEnumerable,
  o = (e, a, s) =>
    a in e
      ? r(e, a, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[a] = s),
  c = (r, e) => {
    for (var a in e || (e = {})) t.call(e, a) && o(r, a, e[a]);
    if (s) for (var a of s(e)) l.call(e, a) && o(r, a, e[a]);
    return r;
  },
  n = (r, e) => {
    var a = {};
    for (var o in r) t.call(r, o) && e.indexOf(o) < 0 && (a[o] = r[o]);
    if (null != r && s)
      for (var o of s(r)) e.indexOf(o) < 0 && l.call(r, o) && (a[o] = r[o]);
    return a;
  };
import { c as f } from '../../entry/js/index-DO2-PIoQ.js';
import { S as d } from './@radix-ui-BedUPMi8.js';
import { o as p } from './lucide-react-B0vpjdIH.js';
import { r as i, j as m } from './react-Clxusn8M.js';
const u = i.forwardRef((r, e) => {
  var a = n(r, []);
  return m.jsx('nav', c({ ref: e, 'aria-label': 'breadcrumb' }, a));
});
u.displayName = 'Breadcrumb';
const b = i.forwardRef((r, e) => {
  var a = r,
    { className: s } = a,
    t = n(a, ['className']);
  return m.jsx(
    'ol',
    c(
      {
        ref: e,
        className: f(
          'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5',
          s,
        ),
      },
      t,
    ),
  );
});
b.displayName = 'BreadcrumbList';
const x = i.forwardRef((r, e) => {
  var a = r,
    { className: s } = a,
    t = n(a, ['className']);
  return m.jsx(
    'li',
    c(
      {
        ref: e,
        className: f('inline-flex items-center gap-1.5 text-text-secondary', s),
      },
      t,
    ),
  );
});
x.displayName = 'BreadcrumbItem';
const N = i.forwardRef((r, e) => {
  var a = r,
    { asChild: s, className: t } = a,
    l = n(a, ['asChild', 'className']);
  const o = s ? d : 'a';
  return m.jsx(
    o,
    c(
      { ref: e, className: f('transition-colors hover:text-foreground', t) },
      l,
    ),
  );
});
N.displayName = 'BreadcrumbLink';
const j = i.forwardRef((r, e) => {
  var a = r,
    { className: s } = a,
    t = n(a, ['className']);
  return m.jsx(
    'span',
    c(
      {
        ref: e,
        role: 'link',
        'aria-disabled': 'true',
        'aria-current': 'page',
        className: f('font-normal text-foreground truncate max-w-40', s),
      },
      t,
    ),
  );
});
j.displayName = 'BreadcrumbPage';
const v = (r) => {
  var s,
    t = r,
    { children: l, className: o } = t,
    i = n(t, ['children', 'className']);
  return m.jsx(
    'li',
    ((s = c(
      {
        role: 'presentation',
        'aria-hidden': 'true',
        className: f('[&>svg]:w-3.5 [&>svg]:h-3.5', o),
      },
      i,
    )),
    e(s, a({ children: null != l ? l : m.jsx(p, {}) }))),
  );
};
v.displayName = 'BreadcrumbSeparator';
export { b as a, u as B, x as b, N as c, v as d, j as e };
//# sourceMappingURL=breadcrumb-DEYDDySY.js.map
