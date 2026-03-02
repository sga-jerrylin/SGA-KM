var e = new WeakMap(),
  r = new WeakMap(),
  t = {},
  n = 0,
  a = function (e) {
    return e && (e.host || a(e.parentNode));
  },
  u = function (u, o, i, c) {
    var f = (function (e, r) {
      return r
        .map(function (r) {
          if (e.contains(r)) return r;
          var t = a(r);
          return t && e.contains(t) ? t : null;
        })
        .filter(function (e) {
          return Boolean(e);
        });
    })(o, Array.isArray(u) ? u : [u]);
    t[i] || (t[i] = new WeakMap());
    var s = t[i],
      l = [],
      p = new Set(),
      d = new Set(f),
      h = function (e) {
        e && !p.has(e) && (p.add(e), h(e.parentNode));
      };
    f.forEach(h);
    var y = function (t) {
      t &&
        !d.has(t) &&
        Array.prototype.forEach.call(t.children, function (t) {
          if (p.has(t)) y(t);
          else
            try {
              var n = t.getAttribute(c),
                a = null !== n && 'false' !== n,
                u = (e.get(t) || 0) + 1,
                o = (s.get(t) || 0) + 1;
              (e.set(t, u),
                s.set(t, o),
                l.push(t),
                1 === u && a && r.set(t, !0),
                1 === o && t.setAttribute(i, 'true'),
                a || t.setAttribute(c, 'true'));
            } catch (f) {}
        });
    };
    return (
      y(o),
      p.clear(),
      n++,
      function () {
        (l.forEach(function (t) {
          var n = e.get(t) - 1,
            a = s.get(t) - 1;
          (e.set(t, n),
            s.set(t, a),
            n || (r.has(t) || t.removeAttribute(c), r.delete(t)),
            a || t.removeAttribute(i));
        }),
          --n ||
            ((e = new WeakMap()),
            (e = new WeakMap()),
            (r = new WeakMap()),
            (t = {})));
      }
    );
  },
  o = function (e, r, t) {
    void 0 === t && (t = 'data-aria-hidden');
    var n = Array.from(Array.isArray(e) ? e : [e]),
      a = (function (e) {
        return 'undefined' == typeof document
          ? null
          : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
      })(e);
    return a
      ? (n.push.apply(n, Array.from(a.querySelectorAll('[aria-live], script'))),
        u(n, a, t, 'aria-hidden'))
      : function () {
          return null;
        };
  };
export { o as h };
//# sourceMappingURL=aria-hidden-B0YqPW3N.js.map
