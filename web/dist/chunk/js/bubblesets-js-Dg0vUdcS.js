function t(t, e, i, s, r, h) {
  const n = i - t,
    o = s - e;
  let a = r - t,
    c = h - e,
    u = a * n + c * o,
    l = 0;
  u <= 0
    ? (l = 0)
    : ((a = n - a),
      (c = o - c),
      (u = a * n + c * o),
      (l = u <= 0 ? 0 : (u * u) / (n * n + o * o)));
  const x = a * a + c * c - l;
  return x < 0 ? 0 : x;
}
function e(t, e, i, s) {
  return (t - i) * (t - i) + (e - s) * (e - s);
}
function i(t, i, s, r, h) {
  return e(t, i, s, r) < h * h;
}
function s(t) {
  const e = Math.min(t.x1, t.x2),
    i = Math.max(t.x1, t.x2),
    s = Math.min(t.y1, t.y2),
    r = Math.max(t.y1, t.y2);
  return { x: e, y: s, x2: i, y2: r, width: i - e, height: r - s };
}
class r {
  constructor(t, e, i, s) {
    ((this.x1 = t), (this.y1 = e), (this.x2 = i), (this.y2 = s));
  }
  equals(t) {
    return (
      this.x1 === t.x1 &&
      this.y1 === t.y1 &&
      this.x2 === t.x2 &&
      this.y2 === t.y2
    );
  }
  draw(t) {
    (t.moveTo(this.x1, this.y1), t.lineTo(this.x2, this.y2));
  }
  toString() {
    return `Line(from=(${this.x1},${this.y1}),to=(${this.x2},${this.y2}))`;
  }
  static from(t) {
    return new r(t.x1, t.y1, t.x2, t.y2);
  }
  cuts(t, e) {
    if (this.y1 === this.y2) return !1;
    if ((e < this.y1 && e <= this.y2) || (e > this.y1 && e >= this.y2))
      return !1;
    if (t > this.x1 && t >= this.x2) return !1;
    if (t < this.x1 && t <= this.x2) return !0;
    return (
      t <= this.x1 + ((e - this.y1) * (this.x2 - this.x1)) / (this.y2 - this.y1)
    );
  }
  distSquare(e, i) {
    return t(this.x1, this.y1, this.x2, this.y2, e, i);
  }
  ptClose(t, e, i) {
    if (this.x1 < this.x2) {
      if (t < this.x1 - i || t > this.x2 + i) return !1;
    } else if (t < this.x2 - i || t > this.x1 + i) return !1;
    if (this.y1 < this.y2) {
      if (e < this.y1 - i || e > this.y2 + i) return !1;
    } else if (e < this.y2 - i || e > this.y1 + i) return !1;
    return !0;
  }
}
var h, n, o, a;
(((n = h || (h = {}))[(n.POINT = 1)] = 'POINT'),
  (n[(n.PARALLEL = 2)] = 'PARALLEL'),
  (n[(n.COINCIDENT = 3)] = 'COINCIDENT'),
  (n[(n.NONE = 4)] = 'NONE'));
class c {
  constructor(t, e = 0, i = 0) {
    ((this.state = t), (this.x = e), (this.y = i));
  }
}
function u(t, e) {
  const i = (e.x2 - e.x1) * (t.y1 - e.y1) - (e.y2 - e.y1) * (t.x1 - e.x1),
    s = (t.x2 - t.x1) * (t.y1 - e.y1) - (t.y2 - t.y1) * (t.x1 - e.x1),
    r = (e.y2 - e.y1) * (t.x2 - t.x1) - (e.x2 - e.x1) * (t.y2 - t.y1);
  if (r) {
    const e = i / r,
      n = s / r;
    return 0 <= e && e <= 1 && 0 <= n && n <= 1
      ? new c(h.POINT, t.x1 + e * (t.x2 - t.x1), t.y1 + e * (t.y2 - t.y1))
      : new c(h.NONE);
  }
  return new c(0 === i || 0 === s ? h.COINCIDENT : h.PARALLEL);
}
function l(t, e) {
  const i = (e.x2 - e.x1) * (t.y1 - e.y1) - (e.y2 - e.y1) * (t.x1 - e.x1),
    s = (t.x2 - t.x1) * (t.y1 - e.y1) - (t.y2 - t.y1) * (t.x1 - e.x1),
    r = (e.y2 - e.y1) * (t.x2 - t.x1) - (e.x2 - e.x1) * (t.y2 - t.y1);
  if (r) {
    const t = i / r,
      e = s / r;
    if (0 <= t && t <= 1 && 0 <= e && e <= 1) return t;
  }
  return Number.POSITIVE_INFINITY;
}
function x(t, e, i) {
  const s = new Set();
  return (
    t.width <= 0
      ? (s.add(o.LEFT), s.add(o.RIGHT))
      : e < t.x
        ? s.add(o.LEFT)
        : e > t.x + t.width && s.add(o.RIGHT),
    t.height <= 0
      ? (s.add(o.TOP), s.add(o.BOTTOM))
      : i < t.y
        ? s.add(o.TOP)
        : i > t.y + t.height && s.add(o.BOTTOM),
    s
  );
}
function f(t, e) {
  let i = e.x1,
    s = e.y1;
  const r = e.x2,
    h = e.y2,
    n = Array.from(x(t, r, h));
  if (0 === n.length) return !0;
  let a = x(t, i, s);
  for (; 0 !== a.size; ) {
    for (const t of n) if (a.has(t)) return !1;
    if (a.has(o.RIGHT) || a.has(o.LEFT)) {
      let e = t.x;
      (a.has(o.RIGHT) && (e += t.width),
        (s += ((e - i) * (h - s)) / (r - i)),
        (i = e));
    } else {
      let e = t.y;
      (a.has(o.BOTTOM) && (e += t.height),
        (i += ((e - s) * (r - i)) / (h - s)),
        (s = e));
    }
    a = x(t, i, s);
  }
  return !0;
}
function y(t, e) {
  let i = Number.POSITIVE_INFINITY,
    s = 0;
  function h(t, h, n, o) {
    let a = l(e, new r(t, h, n, o));
    ((a = Math.abs(a - 0.5)), a >= 0 && a <= 1 && (s++, a < i && (i = a)));
  }
  return (
    h(t.x, t.y, t.x2, t.y),
    h(t.x, t.y, t.x, t.y2),
    s > 1
      ? i
      : (h(t.x, t.y2, t.x2, t.y2),
        s > 1 ? i : (h(t.x2, t.y, t.x2, t.y2), 0 === s ? -1 : i))
  );
}
function d(t, e) {
  let i = 0;
  const s = u(t, new r(e.x, e.y, e.x2, e.y));
  i += s.state === h.POINT ? 1 : 0;
  const n = u(t, new r(e.x, e.y, e.x, e.y2));
  i += n.state === h.POINT ? 1 : 0;
  const o = u(t, new r(e.x, e.y2, e.x2, e.y2));
  i += o.state === h.POINT ? 1 : 0;
  const a = u(t, new r(e.x2, e.y, e.x2, e.y2));
  return (
    (i += a.state === h.POINT ? 1 : 0),
    { top: s, left: n, bottom: o, right: a, count: i }
  );
}
(((a = o || (o = {}))[(a.LEFT = 0)] = 'LEFT'),
  (a[(a.TOP = 1)] = 'TOP'),
  (a[(a.RIGHT = 2)] = 'RIGHT'),
  (a[(a.BOTTOM = 3)] = 'BOTTOM'));
class g {
  constructor(t, e, i, s) {
    ((this.x = t), (this.y = e), (this.width = i), (this.height = s));
  }
  get x2() {
    return this.x + this.width;
  }
  get y2() {
    return this.y + this.height;
  }
  get cx() {
    return this.x + this.width / 2;
  }
  get cy() {
    return this.y + this.height / 2;
  }
  get radius() {
    return Math.max(this.width, this.height) / 2;
  }
  static from(t) {
    return new g(t.x, t.y, t.width, t.height);
  }
  equals(t) {
    return (
      this.x === t.x &&
      this.y === t.y &&
      this.width === t.width &&
      this.height === t.height
    );
  }
  clone() {
    return new g(this.x, this.y, this.width, this.height);
  }
  add(t) {
    const e = Math.min(this.x, t.x),
      i = Math.min(this.y, t.y),
      s = Math.max(this.x2, t.x + t.width),
      r = Math.max(this.y2, t.y + t.height);
    ((this.x = e), (this.y = i), (this.width = s - e), (this.height = r - i));
  }
  addPoint(t) {
    const e = Math.min(this.x, t.x),
      i = Math.min(this.y, t.y),
      s = Math.max(this.x2, t.x),
      r = Math.max(this.y2, t.y);
    ((this.x = e), (this.y = i), (this.width = s - e), (this.height = r - i));
  }
  toString() {
    return `Rectangle[x=${this.x}, y=${this.y}, w=${this.width}, h=${this.height}]`;
  }
  draw(t) {
    t.rect(this.x, this.y, this.width, this.height);
  }
  containsPt(t, e) {
    return t >= this.x && t <= this.x2 && e >= this.y && e <= this.y2;
  }
  get area() {
    return this.width * this.height;
  }
  intersects(t) {
    return (
      !(this.area <= 0 || t.width <= 0 || t.height <= 0) &&
      t.x + t.width > this.x &&
      t.y + t.height > this.y &&
      t.x < this.x2 &&
      t.y < this.y2
    );
  }
  distSquare(t, i) {
    if (this.containsPt(t, i)) return 0;
    const s = x(this, t, i);
    return s.has(o.TOP)
      ? s.has(o.LEFT)
        ? e(t, i, this.x, this.y)
        : s.has(o.RIGHT)
          ? e(t, i, this.x2, this.y)
          : (this.y - i) * (this.y - i)
      : s.has(o.BOTTOM)
        ? s.has(o.LEFT)
          ? e(t, i, this.x, this.y2)
          : s.has(o.RIGHT)
            ? e(t, i, this.x2, this.y2)
            : (i - this.y2) * (i - this.y2)
        : s.has(o.LEFT)
          ? (this.x - t) * (this.x - t)
          : s.has(o.RIGHT)
            ? (t - this.x2) * (t - this.x2)
            : 0;
  }
}
class p {
  constructor(t, e, i) {
    ((this.cx = t), (this.cy = e), (this.radius = i));
  }
  get x() {
    return this.cx - this.radius;
  }
  get x2() {
    return this.cx + this.radius;
  }
  get width() {
    return 2 * this.radius;
  }
  get y() {
    return this.cy - this.radius;
  }
  get y2() {
    return this.cy + this.radius;
  }
  get height() {
    return 2 * this.radius;
  }
  static from(t) {
    return new p(t.cx, t.cy, t.radius);
  }
  containsPt(t, i) {
    return e(this.cx, this.cy, t, i) < this.radius * this.radius;
  }
  distSquare(t, i) {
    const s = e(this.cx, this.cy, t, i);
    if (s < this.radius * this.radius) return 0;
    const r = Math.sqrt(s) - this.radius;
    return r * r;
  }
  draw(t) {
    t.ellipse(this.cx, this.cy, this.radius, this.radius, 0, 0, 2 * Math.PI);
  }
}
class w {
  constructor(
    t,
    e = 0,
    i = 0,
    s = 0,
    r = 0,
    h = 10,
    n = 10,
    o = new Float32Array(Math.max(0, h * n)).fill(0),
  ) {
    ((this.pixelGroup = t),
      (this.i = e),
      (this.j = i),
      (this.pixelX = s),
      (this.pixelY = r),
      (this.width = h),
      (this.height = n),
      (this.area = o));
  }
  createSub(t, e) {
    return new w(this.pixelGroup, t.x, t.y, e.x, e.y, t.width, t.height);
  }
  static fromPixelRegion(t, e) {
    return new w(
      e,
      0,
      0,
      t.x,
      t.y,
      Math.ceil(t.width / e),
      Math.ceil(t.height / e),
    );
  }
  copy(t, e) {
    return new w(
      this.pixelGroup,
      this.scaleX(e.x),
      this.scaleY(e.y),
      e.x,
      e.y,
      t.width,
      t.height,
      t.area,
    );
  }
  boundX(t) {
    return t < this.i ? this.i : t >= this.width ? this.width - 1 : t;
  }
  boundY(t) {
    return t < this.j ? this.j : t >= this.height ? this.height - 1 : t;
  }
  scaleX(t) {
    return this.boundX(Math.floor((t - this.pixelX) / this.pixelGroup));
  }
  scaleY(t) {
    return this.boundY(Math.floor((t - this.pixelY) / this.pixelGroup));
  }
  scale(t) {
    const e = this.scaleX(t.x),
      i = this.scaleY(t.y),
      s = this.boundX(
        Math.ceil((t.x + t.width - this.pixelX) / this.pixelGroup),
      ),
      r = this.boundY(
        Math.ceil((t.y + t.height - this.pixelY) / this.pixelGroup),
      );
    return new g(e, i, s - e, r - i);
  }
  invertScaleX(t) {
    return Math.round(t * this.pixelGroup + this.pixelX);
  }
  invertScaleY(t) {
    return Math.round(t * this.pixelGroup + this.pixelY);
  }
  addPadding(t, e) {
    const i = Math.ceil(e / this.pixelGroup),
      s = this.boundX(t.x - i),
      r = this.boundY(t.y - i),
      h = this.boundX(t.x2 + i),
      n = this.boundY(t.y2 + i);
    return new g(s, r, h - s, n - r);
  }
  get(t, e) {
    return t < 0 || e < 0 || t >= this.width || e >= this.height
      ? Number.NaN
      : this.area[t + e * this.width];
  }
  inc(t, e, i) {
    t < 0 ||
      e < 0 ||
      t >= this.width ||
      e >= this.height ||
      (this.area[t + e * this.width] += i);
  }
  set(t, e, i) {
    t < 0 ||
      e < 0 ||
      t >= this.width ||
      e >= this.height ||
      (this.area[t + e * this.width] = i);
  }
  incArea(t, e) {
    if (t.width <= 0 || t.height <= 0 || 0 === e) return;
    const i = this.width,
      s = t.width,
      r = Math.max(0, t.i),
      h = Math.max(0, t.j),
      n = Math.min(t.i + t.width, i),
      o = Math.min(t.j + t.height, this.height);
    if (!(o <= 0 || n <= 0 || r >= i || o >= this.height))
      for (let a = h; a < o; a++) {
        const h = (a - t.j) * s,
          o = a * i;
        for (let i = r; i < n; i++) {
          const s = t.area[i - t.i + h];
          0 !== s && (this.area[i + o] += e * s);
        }
      }
  }
  fill(t) {
    this.area.fill(t);
  }
  fillArea(t, e) {
    const i = t.x + t.y * this.width;
    for (let s = 0; s < t.height; s++) {
      const r = i + s * this.width;
      this.area.fill(e, r, r + t.width);
    }
  }
  fillHorizontalLine(t, e, i, s) {
    const r = t + e * this.width;
    this.area.fill(s, r, r + i);
  }
  fillVerticalLine(t, e, i, s) {
    const r = t + e * this.width;
    for (let h = 0; h < i; h++) this.area[r + h * this.width] = s;
  }
  clear() {
    this.area.fill(0);
  }
  toString() {
    let t = '';
    for (let e = 0; e < this.height; e++) {
      const i = e * this.width;
      for (let e = 0; e < this.width; e++) {
        ((t += this.area[i + e].toFixed(1).padStart(6)), (t += ' '));
      }
      t += '\n';
    }
    return t;
  }
  draw(t, e = !0) {
    if (this.width <= 0 || this.height <= 0) return;
    (t.save(), e && t.translate(this.pixelX, this.pixelY));
    const i = this.area.reduce(
        (t, e) => Math.min(t, e),
        Number.POSITIVE_INFINITY,
      ),
      s = this.area.reduce((t, e) => Math.max(t, e), Number.NEGATIVE_INFINITY),
      r = (t) => (t - i) / (s - i);
    t.scale(this.pixelGroup, this.pixelGroup);
    for (let h = 0; h < this.width; h++)
      for (let e = 0; e < this.height; e++) {
        const i = this.area[h + e * this.width];
        ((t.fillStyle = `rgba(0, 0, 0, ${r(i)})`), t.fillRect(h, e, 1, 1));
      }
    t.restore();
  }
  drawThreshold(t, e, i = !0) {
    if (!(this.width <= 0 || this.height <= 0)) {
      (t.save(),
        i && t.translate(this.pixelX, this.pixelY),
        t.scale(this.pixelGroup, this.pixelGroup));
      for (let i = 0; i < this.width; i++)
        for (let s = 0; s < this.height; s++) {
          const r = this.area[i + s * this.width];
          ((t.fillStyle = r > e ? 'black' : 'white'), t.fillRect(i, s, 1, 1));
        }
      t.restore();
    }
  }
}
function m(t, e) {
  const i = (t) => ({
    x: t.x - e,
    y: t.y - e,
    width: t.width + 2 * e,
    height: t.height + 2 * e,
  });
  return Array.isArray(t) ? t.map(i) : i(t);
}
function b(e, i, r) {
  return M(
    Object.assign(s(e), {
      distSquare: (i, s) => t(e.x1, e.y1, e.x2, e.y2, i, s),
    }),
    i,
    r,
  );
}
function M(t, e, i) {
  const s = m(t, i),
    r = e.scale(s),
    h = e.createSub(r, s);
  return (
    (function (t, e, i, s) {
      const r = i * i;
      for (let h = 0; h < t.height; h++)
        for (let n = 0; n < t.width; n++) {
          const o = s(e.invertScaleX(t.i + n), e.invertScaleY(t.j + h));
          if (0 !== o) {
            if (o < r) {
              const e = i - Math.sqrt(o);
              t.set(n, h, e * e);
            }
          } else t.set(n, h, r);
        }
    })(h, e, i, (e, i) => t.distSquare(e, i)),
    h
  );
}
function E(t, e) {
  return { x: t, y: e };
}
function I(t, i, s, h) {
  if (0 === t.length) return [];
  const n = (function (t) {
    if (t.length < 2) return t;
    let e = 0,
      i = 0;
    return (
      t.forEach((t) => {
        ((e += t.cx), (i += t.cy));
      }),
      (e /= t.length),
      (i /= t.length),
      t
        .map((t) => {
          const s = e - t.cx,
            r = i - t.cy;
          return [t, s * s + r * r];
        })
        .sort((t, e) => t[1] - e[1])
        .map((t) => t[0])
    );
  })(t);
  return n
    .map((t, o) => {
      const a = n.slice(0, o);
      return (function (t, i, s, h, n) {
        const o = E(i.cx, i.cy),
          a = (function (t, i, s) {
            let h = Number.POSITIVE_INFINITY;
            return i.reduce((i, n) => {
              const o = e(t.x, t.y, n.cx, n.cy);
              if (o > h) return i;
              const a = new r(t.x, t.y, n.cx, n.cy),
                c = (function (t, e) {
                  return t.reduce(
                    (t, i) =>
                      f(i, e) &&
                      (function (t, e) {
                        function i(t, i, s, h) {
                          let n = l(e, new r(t, i, s, h));
                          return (
                            (n = Math.abs(n - 0.5)),
                            n >= 0 && n <= 1 ? 1 : 0
                          );
                        }
                        let s = i(t.x, t.y, t.x2, t.y);
                        return (
                          (s += i(t.x, t.y, t.x, t.y2)),
                          s > 1 ||
                            ((s += i(t.x, t.y2, t.x2, t.y2)),
                            s > 1 || ((s += i(t.x2, t.y, t.x2, t.y2)), s > 0))
                        );
                      })(i, e)
                        ? t + 1
                        : t,
                    0,
                  );
                })(s, a);
              return (
                o * (c + 1) * (c + 1) < h &&
                  ((i = n), (h = o * (c + 1) * (c + 1))),
                i
              );
            }, null);
          })(o, s, t);
        if (null == a) return [];
        const c = (function (t, e, i, s) {
          const h = [],
            n = [];
          n.push(t);
          let o = !0;
          for (let a = 0; a < i && o; a++)
            for (o = !1; !o && n.length > 0; ) {
              const t = n.pop(),
                i = R(e, t),
                a = i ? d(t, i) : null;
              if (!i || !a || 2 !== a.count) {
                o || h.push(t);
                continue;
              }
              let c = s,
                u = O(i, c, a, !0),
                l = T(u, n) || T(u, h),
                x = N(u, e);
              for (; !l && x && c >= 1; )
                ((c /= 1.5),
                  (u = O(i, c, a, !0)),
                  (l = T(u, n) || T(u, h)),
                  (x = N(u, e)));
              if (
                (!u ||
                  l ||
                  x ||
                  (n.push(new r(t.x1, t.y1, u.x, u.y)),
                  n.push(new r(u.x, u.y, t.x2, t.y2)),
                  (o = !0)),
                o)
              )
                continue;
              ((c = s), (u = O(i, c, a, !1)));
              let f = T(u, n) || T(u, h);
              for (x = N(u, e); !f && x && c >= 1; )
                ((c /= 1.5),
                  (u = O(i, c, a, !1)),
                  (f = T(u, n) || T(u, h)),
                  (x = N(u, e)));
              (u &&
                !f &&
                (n.push(new r(t.x1, t.y1, u.x, u.y)),
                n.push(new r(u.x, u.y, t.x2, t.y2)),
                (o = !0)),
                o || h.push(t));
            }
          for (; n.length > 0; ) h.push(n.pop());
          return h;
        })(new r(o.x, o.y, a.cx, a.cy), t, h, n);
        return (function (t, e) {
          const i = [];
          for (; t.length > 0; ) {
            const s = t.pop();
            if (0 === t.length) {
              i.push(s);
              break;
            }
            const h = t.pop(),
              n = new r(s.x1, s.y1, h.x2, h.y2);
            R(e, n) ? (i.push(s), t.push(h)) : t.push(n);
          }
          return i;
        })(c, t);
      })(i, t, a, s, h);
    })
    .flat();
}
function N(t, e) {
  return e.some((e) => e.containsPt(t.x, t.y));
}
function T(t, e) {
  return e.some(
    (e) => !!i(e.x1, e.y1, t.x, t.y, 0.001) || !!i(e.x2, e.y2, t.x, t.y, 0.001),
  );
}
function R(t, e) {
  let i = Number.POSITIVE_INFINITY,
    s = null;
  for (const r of t) {
    if (!f(r, e)) continue;
    const t = y(r, e);
    t >= 0 && t < i && ((s = r), (i = t));
  }
  return s;
}
function O(t, e, i, s) {
  const r = i.top,
    n = i.left,
    o = i.bottom,
    a = i.right;
  if (s) {
    if (n.state === h.POINT) {
      if (r.state === h.POINT) return E(t.x - e, t.y - e);
      if (o.state === h.POINT) return E(t.x - e, t.y2 + e);
      const i = t.width * t.height;
      return t.width * (0.5 * (n.y - t.y + (a.y - t.y))) < 0.5 * i
        ? n.y > a.y
          ? E(t.x - e, t.y - e)
          : E(t.x2 + e, t.y - e)
        : n.y < a.y
          ? E(t.x - e, t.y2 + e)
          : E(t.x2 + e, t.y2 + e);
    }
    if (a.state === h.POINT) {
      if (r.state === h.POINT) return E(t.x2 + e, t.y - e);
      if (o.state === h.POINT) return E(t.x2 + e, t.y2 + e);
    }
    const i = t.height * t.width;
    return t.height * (0.5 * (r.x - t.x + (a.x - t.x))) < 0.5 * i
      ? r.x > o.x
        ? E(t.x - e, t.y - e)
        : E(t.x - e, t.y2 + e)
      : r.x < o.x
        ? E(t.x2 + e, t.y - e)
        : E(t.x2 + e, t.y2 + e);
  }
  if (n.state === h.POINT) {
    if (r.state === h.POINT) return E(t.x2 + e, t.y2 + e);
    if (o.state === h.POINT) return E(t.x2 + e, t.y - e);
    const i = t.height * t.width;
    return t.width * (0.5 * (n.y - t.y + (a.y - t.y))) < 0.5 * i
      ? n.y > a.y
        ? E(t.x2 + e, t.y2 + e)
        : E(t.x - e, t.y2 + e)
      : n.y < a.y
        ? E(t.x2 + e, t.y - e)
        : E(t.x - e, t.y - e);
  }
  if (a.state === h.POINT) {
    if (r.state === h.POINT) return E(t.x - e, t.y2 + e);
    if (o.state === h.POINT) return E(t.x - e, t.y - e);
  }
  const c = t.height * t.width;
  return t.height * (0.5 * (r.x - t.x + (a.x - t.x))) < 0.5 * c
    ? r.x > o.x
      ? E(t.x2 + e, t.y2 + e)
      : E(t.x2 + e, t.y - e)
    : r.x < o.x
      ? E(t.x - e, t.y2 + e)
      : E(t.x - e, t.y - e);
}
function S(e, i, s, r) {
  if (!(e.closed ? s < e.length : s < e.length - 1)) return !1;
  const h = e.get(i),
    n = e.get(s + 1);
  for (let o = i + 1; o <= s; o++) {
    const i = e.get(o);
    if (t(h.x, h.y, n.x, n.y, i.x, i.y) > r) return !1;
  }
  return !0;
}
function P(t, e) {
  switch (t) {
    case -2:
      return (((3 - e) * e - 3) * e + 1) / 6;
    case -1:
      return ((3 * e - 6) * e * e + 4) / 6;
    case 0:
      return (((-3 * e + 3) * e + 3) * e + 1) / 6;
    case 1:
      return (e * e * e) / 6;
    default:
      throw new Error('unknown error');
  }
}
class v {
  constructor(t = [], e = !0) {
    ((this.points = t), (this.closed = e));
  }
  get(t) {
    const e = t,
      i = this.points.length;
    return t < 0
      ? this.closed
        ? this.get(t + i)
        : this.points[0]
      : t >= i
        ? this.closed
          ? this.get(t - i)
          : this.points[i - 1]
        : this.points[e];
  }
  get length() {
    return this.points.length;
  }
  toString(t = 1 / 0) {
    const e = this.points;
    if (0 === e.length) return '';
    const i =
      'function' == typeof t
        ? t
        : (function (t) {
            if (!Number.isFinite(t)) return (t) => t;
            if (0 === t) return Math.round;
            const e = Math.pow(10, t);
            return (t) => Math.round(t * e) / e;
          })(t);
    let s = 'M';
    for (const r of e) s += `${i(r.x)},${i(r.y)} L`;
    return ((s = s.slice(0, -1)), this.closed && (s += ' Z'), s);
  }
  draw(t) {
    const e = this.points;
    if (0 !== e.length) {
      (t.beginPath(), t.moveTo(e[0].x, e[0].y));
      for (const i of e) t.lineTo(i.x, i.y);
      this.closed && t.closePath();
    }
  }
  sample(t) {
    return (function (t = 8) {
      return (e) => {
        let i = t,
          s = e.length;
        if (i > 1)
          for (s = Math.floor(e.length / i); s < 3 && i > 1; )
            ((i -= 1), (s = Math.floor(e.length / i)));
        const r = [];
        for (let t = 0, h = 0; h < s; h++, t += i) r.push(e.get(t));
        return new v(r);
      };
    })(t)(this);
  }
  simplify(t) {
    return (function (t = 0) {
      return (e) => {
        if (t < 0 || e.length < 3) return e;
        const i = [];
        let s = 0;
        const r = t * t;
        for (; s < e.length; ) {
          let t = s + 1;
          for (; S(e, s, t, r); ) t++;
          (i.push(e.get(s)), (s = t));
        }
        return new v(i);
      };
    })(t)(this);
  }
  bSplines(t) {
    return (function (t = 6) {
      function e(t, e, i) {
        let s = 0,
          r = 0;
        for (let h = -2; h <= 1; h++) {
          const n = t.get(e + h),
            o = P(h, i);
          ((s += o * n.x), (r += o * n.y));
        }
        return { x: s, y: r };
      }
      return (i) => {
        if (i.length < 3) return i;
        const s = [],
          r = i.closed,
          h = i.length + 3 - 1 + (r ? 0 : 2);
        s.push(e(i, 2 - (r ? 0 : 2), 0));
        for (let n = 2 - (r ? 0 : 2); n < h; n++)
          for (let r = 1; r <= t; r++) s.push(e(i, n, r / t));
        return new v(s);
      };
    })(t)(this);
  }
  apply(t) {
    return t(this);
  }
  containsElements(t) {
    const e = (function (t) {
      if (0 === t.length) return null;
      const e = t[0],
        i = new g(e.x, e.y, 0, 0);
      for (const s of t) i.addPoint(s);
      return i;
    })(this.points);
    return (
      !!e &&
      t.every((t) => e.containsPt(t.cx, t.cy) && this.withinArea(t.cx, t.cy))
    );
  }
  withinArea(t, e) {
    if (0 === this.length) return !1;
    let i = 0;
    const s = this.points[0],
      h = new r(s.x, s.y, s.x, s.y);
    for (let r = 1; r < this.points.length; r++) {
      const s = this.points[r];
      ((h.x1 = h.x2),
        (h.y1 = h.y2),
        (h.x2 = s.x),
        (h.y2 = s.y),
        h.cuts(t, e) && i++);
    }
    return (
      (h.x1 = h.x2),
      (h.y1 = h.y2),
      (h.x2 = s.x),
      (h.y2 = s.y),
      h.cuts(t, e) && i++,
      i % 2 == 1
    );
  }
}
class j {
  constructor(t = 0) {
    ((this.count = 0),
      (this.arr = []),
      (this.set = new Set()),
      (this.arr.length = t));
  }
  add(t) {
    (this.set.add(`${t.x}x${t.y}`), (this.arr[this.count++] = t));
  }
  contains(t) {
    return this.set.has(`${t.x}x${t.y}`);
  }
  isFirst(t) {
    if (0 === this.count) return !1;
    const e = this.arr[0];
    return null != e && e.x === t.x && e.y === t.y;
  }
  path() {
    return new v(this.arr.slice(0, this.count));
  }
  clear() {
    (this.set.clear(), (this.count = 0));
  }
  get(t) {
    return this.arr[t];
  }
  get length() {
    return this.count;
  }
}
function G(t, e) {
  const i = 2 * (Math.floor(t.width) + Math.floor(t.height)),
    s = new j(i);
  function r(i, s, r, h) {
    const n = t.get(i, s);
    return Number.isNaN(n) ? Number.NaN : n > e ? r + h : r;
  }
  function h(t, e) {
    let i = 0;
    return (
      (i = r(t, e, i, 1)),
      (i = r(t + 1, e, i, 2)),
      (i = r(t, e + 1, i, 4)),
      (i = r(t + 1, e + 1, i, 8)),
      Number.isNaN(i) ? -1 : i
    );
  }
  let n = 1;
  function o(e, i) {
    let r = e,
      o = i,
      a = t.invertScaleX(r),
      c = t.invertScaleY(o);
    for (let u = 0; u < t.width * t.height; u++) {
      const e = { x: a, y: c };
      if (s.contains(e)) {
        if (s.isFirst(e)) return !0;
      } else s.add(e);
      switch (h(r, o)) {
        case -1:
          return !0;
        case 0:
        case 3:
        case 2:
        case 7:
          n = 2;
          break;
        case 12:
        case 14:
        case 4:
          n = 3;
          break;
        case 6:
          n = 0 === n ? 3 : 2;
          break;
        case 1:
        case 13:
        case 5:
          n = 0;
          break;
        case 9:
          n = 2 === n ? 0 : 1;
          break;
        case 10:
        case 8:
        case 11:
          n = 1;
          break;
        default:
          return !0;
      }
      switch (n) {
        case 0:
          (o--, (c -= t.pixelGroup));
          break;
        case 1:
          (o++, (c += t.pixelGroup));
          break;
        case 3:
          (r--, (a -= t.pixelGroup));
          break;
        case 2:
          (r++, (a += t.pixelGroup));
          break;
        default:
          return !0;
      }
    }
    return !0;
  }
  for (let a = 0; a < t.width; a++)
    for (let i = 0; i < t.height; i++) {
      if (t.get(a, i) <= e) continue;
      const r = h(a, i);
      if (!(r < 0 || 15 === r) && o(a, i)) return s.path();
    }
  return null;
}
const A = {
  maxRoutingIterations: 100,
  maxMarchingIterations: 20,
  pixelGroup: 4,
  edgeR0: 10,
  edgeR1: 20,
  nodeR0: 15,
  nodeR1: 50,
  morphBuffer: 10,
  threshold: 1,
  memberInfluenceFactor: 1,
  edgeInfluenceFactor: 1,
  nonMemberInfluenceFactor: -0.8,
  virtualEdges: !0,
};
function L(t) {
  return null != t && 'number' == typeof t.radius;
}
function Y(t, e) {
  if (L(t) !== L(e)) return !1;
  if (L(t)) {
    const i = e;
    return t.cx === i.cx && t.cy === i.cy && t.radius === i.radius;
  }
  const i = e;
  return (
    t.x === i.x && t.y === i.y && t.width === i.width && t.height === i.height
  );
}
var F, B;
(((B = F || (F = {}))[(B.MEMBERS = 0)] = 'MEMBERS'),
  (B[(B.NON_MEMBERS = 1)] = 'NON_MEMBERS'),
  (B[(B.EDGES = 2)] = 'EDGES'));
let $ = class {
  constructor(t = {}) {
    ((this.dirty = new Set()),
      (this.members = []),
      (this.nonMembers = []),
      (this.virtualEdges = []),
      (this.edges = []),
      (this.activeRegion = new g(0, 0, 0, 0)),
      (this.potentialArea = new w(1, 0, 0, 0, 0, 0, 0)),
      (this.o = Object.assign({}, A, t)));
  }
  pushMember(...t) {
    if (0 !== t.length) {
      this.dirty.add(F.MEMBERS);
      for (const e of t)
        this.members.push({
          raw: e,
          obj: L(e) ? p.from(e) : g.from(e),
          area: null,
        });
    }
  }
  removeMember(t) {
    const e = this.members.findIndex((e) => Y(e.raw, t));
    return (
      !(e < 0) && (this.members.splice(e, 1), this.dirty.add(F.MEMBERS), !0)
    );
  }
  removeNonMember(t) {
    const e = this.nonMembers.findIndex((e) => Y(e.raw, t));
    return (
      !(e < 0) &&
      (this.nonMembers.splice(e, 1), this.dirty.add(F.NON_MEMBERS), !0)
    );
  }
  removeEdge(t) {
    const e = this.edges.findIndex((e) => e.obj.equals(t));
    return (
      !(e < 0) && (this.edges.splice(e, 1), this.dirty.add(F.NON_MEMBERS), !0)
    );
  }
  pushNonMember(...t) {
    if (0 !== t.length) {
      this.dirty.add(F.NON_MEMBERS);
      for (const e of t)
        this.nonMembers.push({
          raw: e,
          obj: L(e) ? p.from(e) : g.from(e),
          area: null,
        });
    }
  }
  pushEdge(...t) {
    if (0 !== t.length) {
      this.dirty.add(F.EDGES);
      for (const e of t)
        this.edges.push({ raw: e, obj: r.from(e), area: null });
    }
  }
  update() {
    const t = this.dirty.has(F.MEMBERS),
      e = this.dirty.has(F.NON_MEMBERS);
    let i = this.dirty.has(F.EDGES);
    this.dirty.clear();
    const r = this.members.map((t) => t.obj);
    if (this.o.virtualEdges && (t || e)) {
      const t = I(
          r,
          this.nonMembers.map((t) => t.obj),
          this.o.maxRoutingIterations,
          this.o.morphBuffer,
        ),
        e = new Map(this.virtualEdges.map((t) => [t.obj.toString(), t.area]));
      ((this.virtualEdges = t.map((t) => {
        var i;
        return {
          raw: t,
          obj: t,
          area: null !== (i = e.get(t.toString())) && void 0 !== i ? i : null,
        };
      })),
        (i = !0));
    }
    let h = !1;
    if (t || i) {
      const t = (function (t, e) {
          if (0 === t.length) return new g(0, 0, 0, 0);
          const i = g.from(t[0]);
          for (const s of t) i.add(s);
          for (const r of e) i.add(s(r));
          return i;
        })(
          r,
          this.virtualEdges.concat(this.edges).map((t) => t.obj),
        ),
        e = Math.max(this.o.edgeR1, this.o.nodeR1) + this.o.morphBuffer,
        i = g.from(m(t, e));
      i.equals(this.activeRegion) || ((h = !0), (this.activeRegion = i));
    }
    if (h) {
      const t = Math.ceil(this.activeRegion.width / this.o.pixelGroup),
        e = Math.ceil(this.activeRegion.height / this.o.pixelGroup);
      this.activeRegion.x !== this.potentialArea.pixelX ||
      this.activeRegion.y !== this.potentialArea.pixelY
        ? ((this.potentialArea = w.fromPixelRegion(
            this.activeRegion,
            this.o.pixelGroup,
          )),
          this.members.forEach((t) => (t.area = null)),
          this.nonMembers.forEach((t) => (t.area = null)),
          this.edges.forEach((t) => (t.area = null)),
          this.virtualEdges.forEach((t) => (t.area = null)))
        : (t === this.potentialArea.width && e === this.potentialArea.height) ||
          (this.potentialArea = w.fromPixelRegion(
            this.activeRegion,
            this.o.pixelGroup,
          ));
    }
    const n = new Map(),
      o = (t) => {
        if (t.area) {
          const e = `${t.obj.width}x${t.obj.height}x${t.obj instanceof g ? 'R' : 'C'}`;
          n.set(e, t.area);
        }
      },
      a = (t) => {
        if (t.area) return;
        const e = `${t.obj.width}x${t.obj.height}x${t.obj instanceof g ? 'R' : 'C'}`;
        if (n.has(e)) {
          const i = n.get(e);
          return void (t.area = this.potentialArea.copy(i, {
            x: t.obj.x - this.o.nodeR1,
            y: t.obj.y - this.o.nodeR1,
          }));
        }
        const i =
          t.obj instanceof g
            ? (function (t, e, i) {
                const s = e.scale(t),
                  r = e.addPadding(s, i),
                  h = e.createSub(r, { x: t.x - i, y: t.y - i }),
                  n = s.x - r.x,
                  o = s.y - r.y,
                  a = r.x2 - s.x2,
                  c = r.y2 - s.y2,
                  u = r.width - n - a,
                  l = r.height - o - c,
                  x = i * i;
                h.fillArea({ x: n, y: o, width: u + 1, height: l + 1 }, x);
                const f = [0],
                  y = Math.max(o, n, a, c);
                {
                  const r = e.invertScaleX(s.x + s.width / 2);
                  for (let h = 1; h < y; h++) {
                    const n = e.invertScaleY(s.y - h),
                      o = t.distSquare(r, n);
                    if (!(o < x)) break;
                    {
                      const t = i - Math.sqrt(o);
                      f.push(t * t);
                    }
                  }
                }
                const d = [],
                  g = Math.max(n, a),
                  p = Math.max(o, a);
                for (let w = 1; w < g; w++) {
                  const r = e.invertScaleX(s.x - w),
                    h = [];
                  for (let n = 1; n < p; n++) {
                    const o = e.invertScaleY(s.y - n),
                      a = t.distSquare(r, o);
                    if (a < x) {
                      const t = i - Math.sqrt(a);
                      h.push(t * t);
                    } else h.push(0);
                  }
                  d.push(h);
                }
                for (let w = 1; w < Math.min(o, f.length); w++) {
                  const t = f[w];
                  h.fillHorizontalLine(n, o - w, u + 1, t);
                }
                for (let w = 1; w < Math.min(c, f.length); w++) {
                  const t = f[w];
                  h.fillHorizontalLine(n, o + l + w, u + 1, t);
                }
                for (let w = 1; w < Math.min(n, f.length); w++) {
                  const t = f[w];
                  h.fillVerticalLine(n - w, o, l + 1, t);
                }
                for (let w = 1; w < Math.min(c, f.length); w++) {
                  const t = f[w];
                  h.fillVerticalLine(n + u + w, o, l + 1, t);
                }
                for (let w = 1; w < n; w++) {
                  const t = d[w - 1],
                    e = n - w;
                  for (let i = 1; i < o; i++) h.set(e, o - i, t[i - 1]);
                  for (let i = 1; i < c; i++) h.set(e, o + l + i, t[i - 1]);
                }
                for (let w = 1; w < a; w++) {
                  const t = d[w - 1],
                    e = n + u + w;
                  for (let i = 1; i < o; i++) h.set(e, o - i, t[i - 1]);
                  for (let i = 1; i < c; i++) h.set(e, o + l + i, t[i - 1]);
                }
                return h;
              })(t.obj, this.potentialArea, this.o.nodeR1)
            : M(t.obj, this.potentialArea, this.o.nodeR1);
        ((t.area = i), n.set(e, i));
      };
    (this.members.forEach(o),
      this.nonMembers.forEach(o),
      this.members.forEach(a),
      this.nonMembers.forEach((t) => {
        this.activeRegion.intersects(t.obj) ? a(t) : (t.area = null);
      }),
      this.edges.forEach((t) => {
        t.area || (t.area = b(t.obj, this.potentialArea, this.o.edgeR1));
      }),
      this.virtualEdges.forEach((t) => {
        t.area || (t.area = b(t.obj, this.potentialArea, this.o.edgeR1));
      }));
  }
  drawMembers(t) {
    for (const e of this.members) e.obj.draw(t);
  }
  drawNonMembers(t) {
    for (const e of this.nonMembers) e.obj.draw(t);
  }
  drawEdges(t) {
    for (const e of this.edges) e.obj.draw(t);
  }
  drawPotentialArea(t, e = !0) {
    this.potentialArea.draw(t, e);
  }
  compute() {
    if (0 === this.members.length) return new v([]);
    this.dirty.size > 0 && this.update();
    const { o: t, potentialArea: e } = this,
      i = this.members.map((t) => t.area),
      s = this.virtualEdges.concat(this.edges).map((t) => t.area),
      r = this.nonMembers.filter((t) => null != t.area).map((t) => t.area),
      h = this.members.map((t) => t.obj);
    return (function (t, e, i, s, r, h = {}) {
      const n = Object.assign({}, A, h);
      let o = n.threshold,
        a = n.memberInfluenceFactor,
        c = n.edgeInfluenceFactor,
        u = n.nonMemberInfluenceFactor;
      const l = (n.nodeR0 - n.nodeR1) * (n.nodeR0 - n.nodeR1),
        x = (n.edgeR0 - n.edgeR1) * (n.edgeR0 - n.edgeR1);
      for (let f = 0; f < n.maxMarchingIterations; f++) {
        if ((t.clear(), 0 !== a)) {
          const i = a / l;
          for (const s of e) t.incArea(s, i);
        }
        if (0 !== c) {
          const e = c / x;
          for (const s of i) t.incArea(s, e);
        }
        if (0 !== u) {
          const e = u / l;
          for (const i of s) t.incArea(i, e);
        }
        const h = G(t, o);
        if (h && r(h)) return h;
        if (((o *= 0.95), f <= 0.5 * n.maxMarchingIterations))
          ((a *= 1.2), (c *= 1.2));
        else {
          if (!(0 !== u && s.length > 0)) break;
          u *= 0.8;
        }
      }
      return new v([]);
    })(e, i, s, r, (t) => t.containsElements(h), t);
  }
};
export { $ as B, r as L, g as R, A as d };
//# sourceMappingURL=bubblesets-js-Dg0vUdcS.js.map
