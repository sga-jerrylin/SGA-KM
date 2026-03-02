import { n as r } from './@babel-IS4qnvsE.js';
var e,
  t = {};
const a = r(
  (e ||
    ((e = 1),
    (t.__esModule = !0),
    (t.default = function (r, e) {
      if (r && e) {
        var t = Array.isArray(e) ? e : e.split(',');
        if (0 === t.length) return !0;
        var a = r.name || '',
          n = (r.type || '').toLowerCase(),
          o = n.replace(/\/.*$/, '');
        return t.some(function (r) {
          var e = r.trim().toLowerCase();
          return '.' === e.charAt(0)
            ? a.toLowerCase().endsWith(e)
            : e.endsWith('/*')
              ? o === e.replace(/\/.*$/, '')
              : n === e;
        });
      }
      return !0;
    })),
  t),
);
export { a as _ };
//# sourceMappingURL=attr-accept-D6lXYxuF.js.map
