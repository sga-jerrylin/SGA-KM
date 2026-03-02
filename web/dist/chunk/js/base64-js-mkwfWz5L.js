var r,
  t = {};
function n() {
  if (r) return t;
  ((r = 1),
    (t.byteLength = function (r) {
      var t = h(r),
        n = t[0],
        e = t[1];
      return (3 * (n + e)) / 4 - e;
    }),
    (t.toByteArray = function (r) {
      var t,
        n,
        a = h(r),
        u = a[0],
        c = a[1],
        f = new o(
          (function (r, t, n) {
            return (3 * (t + n)) / 4 - n;
          })(0, u, c),
        ),
        i = 0,
        A = c > 0 ? u - 4 : u;
      for (n = 0; n < A; n += 4)
        ((t =
          (e[r.charCodeAt(n)] << 18) |
          (e[r.charCodeAt(n + 1)] << 12) |
          (e[r.charCodeAt(n + 2)] << 6) |
          e[r.charCodeAt(n + 3)]),
          (f[i++] = (t >> 16) & 255),
          (f[i++] = (t >> 8) & 255),
          (f[i++] = 255 & t));
      2 === c &&
        ((t = (e[r.charCodeAt(n)] << 2) | (e[r.charCodeAt(n + 1)] >> 4)),
        (f[i++] = 255 & t));
      1 === c &&
        ((t =
          (e[r.charCodeAt(n)] << 10) |
          (e[r.charCodeAt(n + 1)] << 4) |
          (e[r.charCodeAt(n + 2)] >> 2)),
        (f[i++] = (t >> 8) & 255),
        (f[i++] = 255 & t));
      return f;
    }),
    (t.fromByteArray = function (r) {
      for (
        var t, e = r.length, o = e % 3, a = [], u = 16383, h = 0, c = e - o;
        h < c;
        h += u
      )
        a.push(f(r, h, h + u > c ? c : h + u));
      1 === o
        ? ((t = r[e - 1]), a.push(n[t >> 2] + n[(t << 4) & 63] + '=='))
        : 2 === o &&
          ((t = (r[e - 2] << 8) + r[e - 1]),
          a.push(n[t >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + '='));
      return a.join('');
    }));
  for (
    var n = [],
      e = [],
      o = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
      a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
      u = 0;
    u < 64;
    ++u
  )
    ((n[u] = a[u]), (e[a.charCodeAt(u)] = u));
  function h(r) {
    var t = r.length;
    if (t % 4 > 0)
      throw new Error('Invalid string. Length must be a multiple of 4');
    var n = r.indexOf('=');
    return (-1 === n && (n = t), [n, n === t ? 0 : 4 - (n % 4)]);
  }
  function c(r) {
    return n[(r >> 18) & 63] + n[(r >> 12) & 63] + n[(r >> 6) & 63] + n[63 & r];
  }
  function f(r, t, n) {
    for (var e, o = [], a = t; a < n; a += 3)
      ((e =
        ((r[a] << 16) & 16711680) +
        ((r[a + 1] << 8) & 65280) +
        (255 & r[a + 2])),
        o.push(c(e)));
    return o.join('');
  }
  return ((e['-'.charCodeAt(0)] = 62), (e['_'.charCodeAt(0)] = 63), t);
}
export { n as r };
//# sourceMappingURL=base64-js-mkwfWz5L.js.map
