var t = Object.defineProperty,
  e = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  s = (e, n, o) =>
    n in e
      ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[n] = o),
  a = (t, e) => {
    for (var n in e || (e = {})) i.call(e, n) && s(t, n, e[n]);
    if (o) for (var n of o(e)) r.call(e, n) && s(t, n, e[n]);
    return t;
  },
  l = (t, o) => e(t, n(o));
const c = {},
  p = {};
function h(t, e) {
  try {
    const n = (
      c[t] ||
      (c[t] = new Intl.DateTimeFormat('en-US', {
        timeZone: t,
        timeZoneName: 'longOffset',
      }).format)
    )(e).split('GMT')[1];
    return n in p ? p[n] : m(n, n.split(':'));
  } catch (n) {
    if (t in p) return p[t];
    const e = null == t ? void 0 : t.match(u);
    return e ? m(t, e.slice(1)) : NaN;
  }
}
const u = /([+-]\d\d):?(\d\d)?/;
function m(t, e) {
  const n = +(e[0] || 0),
    o = +(e[1] || 0),
    i = +(e[2] || 0) / 60;
  return (p[t] = 60 * n + o > 0 ? 60 * n + o + i : 60 * n - o - i);
}
class g extends Date {
  constructor(...t) {
    (super(),
      t.length > 1 &&
        'string' == typeof t[t.length - 1] &&
        (this.timeZone = t.pop()),
      (this.internal = new Date()),
      isNaN(h(this.timeZone, this))
        ? this.setTime(NaN)
        : t.length
          ? 'number' == typeof t[0] &&
            (1 === t.length || (2 === t.length && 'number' != typeof t[1]))
            ? this.setTime(t[0])
            : 'string' == typeof t[0]
              ? this.setTime(+new Date(t[0]))
              : t[0] instanceof Date
                ? this.setTime(+t[0])
                : (this.setTime(+new Date(...t)), D(this), f(this))
          : this.setTime(Date.now()));
  }
  static tz(t, ...e) {
    return e.length ? new g(...e, t) : new g(Date.now(), t);
  }
  withTimeZone(t) {
    return new g(+this, t);
  }
  getTimezoneOffset() {
    const t = -h(this.timeZone, this);
    return t > 0 ? Math.floor(t) : Math.ceil(t);
  }
  setTime(t) {
    return (Date.prototype.setTime.apply(this, arguments), f(this), +this);
  }
  [Symbol.for('constructDateFrom')](t) {
    return new g(+new Date(t), this.timeZone);
  }
}
const T = /^(get|set)(?!UTC)/;
function f(t) {
  (t.internal.setTime(+t),
    t.internal.setUTCSeconds(
      t.internal.getUTCSeconds() - Math.round(60 * -h(t.timeZone, t)),
    ));
}
function D(t) {
  const e = h(t.timeZone, t),
    n = e > 0 ? Math.floor(e) : Math.ceil(e),
    o = new Date(+t);
  o.setUTCHours(o.getUTCHours() - 1);
  const i = -new Date(+t).getTimezoneOffset(),
    r = i - -new Date(+o).getTimezoneOffset(),
    s = Date.prototype.getHours.apply(t) !== t.internal.getUTCHours();
  r && s && t.internal.setUTCMinutes(t.internal.getUTCMinutes() + r);
  const a = i - n;
  a &&
    Date.prototype.setUTCMinutes.call(
      t,
      Date.prototype.getUTCMinutes.call(t) + a,
    );
  const l = new Date(+t);
  l.setUTCSeconds(0);
  const c = i > 0 ? l.getSeconds() : (l.getSeconds() - 60) % 60,
    p = Math.round(-60 * h(t.timeZone, t)) % 60;
  (p || c) &&
    (t.internal.setUTCSeconds(t.internal.getUTCSeconds() + p),
    Date.prototype.setUTCSeconds.call(
      t,
      Date.prototype.getUTCSeconds.call(t) + p + c,
    ));
  const u = h(t.timeZone, t),
    m = u > 0 ? Math.floor(u) : Math.ceil(u),
    g = -new Date(+t).getTimezoneOffset() - m - a;
  if (m !== n && g) {
    Date.prototype.setUTCMinutes.call(
      t,
      Date.prototype.getUTCMinutes.call(t) + g,
    );
    const e = h(t.timeZone, t),
      n = m - (e > 0 ? Math.floor(e) : Math.ceil(e));
    n &&
      (t.internal.setUTCMinutes(t.internal.getUTCMinutes() + n),
      Date.prototype.setUTCMinutes.call(
        t,
        Date.prototype.getUTCMinutes.call(t) + n,
      ));
  }
}
Object.getOwnPropertyNames(Date.prototype).forEach((t) => {
  if (!T.test(t)) return;
  const e = t.replace(T, '$1UTC');
  g.prototype[e] &&
    (t.startsWith('get')
      ? (g.prototype[t] = function () {
          return this.internal[e]();
        })
      : ((g.prototype[t] = function () {
          var t;
          return (
            Date.prototype[e].apply(this.internal, arguments),
            (t = this),
            Date.prototype.setFullYear.call(
              t,
              t.internal.getUTCFullYear(),
              t.internal.getUTCMonth(),
              t.internal.getUTCDate(),
            ),
            Date.prototype.setHours.call(
              t,
              t.internal.getUTCHours(),
              t.internal.getUTCMinutes(),
              t.internal.getUTCSeconds(),
              t.internal.getUTCMilliseconds(),
            ),
            D(t),
            +this
          );
        }),
        (g.prototype[e] = function () {
          return (Date.prototype[e].apply(this, arguments), f(this), +this);
        })));
});
class y extends g {
  static tz(t, ...e) {
    return e.length ? new y(...e, t) : new y(Date.now(), t);
  }
  toISOString() {
    const [t, e, n] = this.tzComponents(),
      o = `${t}${e}:${n}`;
    return this.internal.toISOString().slice(0, -1) + o;
  }
  toString() {
    return `${this.toDateString()} ${this.toTimeString()}`;
  }
  toDateString() {
    const [t, e, n, o] = this.internal.toUTCString().split(' ');
    return `${null == t ? void 0 : t.slice(0, -1)} ${n} ${e} ${o}`;
  }
  toTimeString() {
    const t = this.internal.toUTCString().split(' ')[4],
      [e, n, o] = this.tzComponents();
    return `${t} GMT${e}${n}${o} (${(function (t, e, n = 'long') {
      return new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        timeZone: t,
        timeZoneName: n,
      })
        .format(e)
        .split(/\s/g)
        .slice(2)
        .join(' ');
    })(this.timeZone, this)})`;
  }
  toLocaleString(t, e) {
    return Date.prototype.toLocaleString.call(
      this,
      t,
      l(a({}, e), {
        timeZone: (null == e ? void 0 : e.timeZone) || this.timeZone,
      }),
    );
  }
  toLocaleDateString(t, e) {
    return Date.prototype.toLocaleDateString.call(
      this,
      t,
      l(a({}, e), {
        timeZone: (null == e ? void 0 : e.timeZone) || this.timeZone,
      }),
    );
  }
  toLocaleTimeString(t, e) {
    return Date.prototype.toLocaleTimeString.call(
      this,
      t,
      l(a({}, e), {
        timeZone: (null == e ? void 0 : e.timeZone) || this.timeZone,
      }),
    );
  }
  tzComponents() {
    const t = this.getTimezoneOffset();
    return [
      t > 0 ? '-' : '+',
      String(Math.floor(Math.abs(t) / 60)).padStart(2, '0'),
      String(Math.abs(t) % 60).padStart(2, '0'),
    ];
  }
  withTimeZone(t) {
    return new y(+this, t);
  }
  [Symbol.for('constructDateFrom')](t) {
    return new y(+new Date(t), this.timeZone);
  }
}
export { y as T };
//# sourceMappingURL=@date-fns-CjeJQIF-.js.map
