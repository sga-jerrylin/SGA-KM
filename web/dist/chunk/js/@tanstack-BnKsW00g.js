var e,
  t,
  n,
  o,
  i,
  l,
  s,
  r,
  a,
  u,
  d,
  c,
  g,
  h,
  p,
  f,
  m,
  v,
  b,
  w,
  y,
  S,
  C,
  R,
  F,
  M,
  P,
  x,
  I,
  O,
  E,
  V,
  _,
  A,
  D,
  k,
  G,
  L,
  H,
  q,
  z,
  T,
  j,
  U,
  W,
  B,
  Q,
  K,
  N,
  $,
  X,
  J,
  Y,
  Z,
  ee,
  te,
  ne,
  oe,
  ie,
  le,
  se,
  re,
  ae,
  ue,
  de,
  ce,
  ge,
  he,
  pe,
  fe,
  me,
  ve,
  be,
  we,
  ye,
  Se,
  Ce,
  Re,
  Fe,
  Me = Object.defineProperty,
  Pe = Object.defineProperties,
  xe = Object.getOwnPropertyDescriptors,
  Ie = Object.getOwnPropertySymbols,
  Oe = Object.prototype.hasOwnProperty,
  Ee = Object.prototype.propertyIsEnumerable,
  Ve = (e) => {
    throw TypeError(e);
  },
  _e = Math.pow,
  Ae = (e, t, n) =>
    t in e
      ? Me(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  De = (e, t) => {
    for (var n in t || (t = {})) Oe.call(t, n) && Ae(e, n, t[n]);
    if (Ie) for (var n of Ie(t)) Ee.call(t, n) && Ae(e, n, t[n]);
    return e;
  },
  ke = (e, t) => Pe(e, xe(t)),
  Ge = (e) => ('symbol' == typeof e ? e : e + ''),
  Le = (e, t) => {
    var n = {};
    for (var o in e) Oe.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
    if (null != e && Ie)
      for (var o of Ie(e)) t.indexOf(o) < 0 && Ee.call(e, o) && (n[o] = e[o]);
    return n;
  },
  He = (e, t, n) => t.has(e) || Ve('Cannot ' + n),
  qe = (e, t, n) => (
    He(e, t, 'read from private field'),
    n ? n.call(e) : t.get(e)
  ),
  ze = (e, t, n) =>
    t.has(e)
      ? Ve('Cannot add the same private member more than once')
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, n),
  Te = (e, t, n, o) => (
    He(e, t, 'write to private field'),
    o ? o.call(e, n) : t.set(e, n),
    n
  ),
  je = (e, t, n) => (He(e, t, 'access private method'), n),
  Ue = (e, t, n, o) => ({
    set _(o) {
      Te(e, t, o, n);
    },
    get _() {
      return qe(e, t, o);
    },
  }),
  We = (e, t, n) =>
    new Promise((o, i) => {
      var l = (e) => {
          try {
            r(n.next(e));
          } catch (t) {
            i(t);
          }
        },
        s = (e) => {
          try {
            r(n.throw(e));
          } catch (t) {
            i(t);
          }
        },
        r = (e) => (e.done ? o(e.value) : Promise.resolve(e.value).then(l, s));
      r((n = n.apply(e, t)).next());
    });
import { r as Be, j as Qe } from './react-Clxusn8M.js';
var Ke = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Ne = {
    setTimeout: (e, t) => setTimeout(e, t),
    clearTimeout: (e) => clearTimeout(e),
    setInterval: (e, t) => setInterval(e, t),
    clearInterval: (e) => clearInterval(e),
  },
  $e = new ((n = class {
    constructor() {
      (ze(this, e, Ne), ze(this, t, !1));
    }
    setTimeoutProvider(t) {
      Te(this, e, t);
    }
    setTimeout(t, n) {
      return qe(this, e).setTimeout(t, n);
    }
    clearTimeout(t) {
      qe(this, e).clearTimeout(t);
    }
    setInterval(t, n) {
      return qe(this, e).setInterval(t, n);
    }
    clearInterval(t) {
      qe(this, e).clearInterval(t);
    }
  }),
  (e = new WeakMap()),
  (t = new WeakMap()),
  n)();
var Xe = 'undefined' == typeof window || 'Deno' in globalThis;
function Je() {}
function Ye(e) {
  return 'number' == typeof e && e >= 0 && e !== 1 / 0;
}
function Ze(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function et(e, t) {
  return 'function' == typeof e ? e(t) : e;
}
function tt(e, t) {
  return 'function' == typeof e ? e(t) : e;
}
function nt(e, t) {
  const {
    type: n = 'all',
    exact: o,
    fetchStatus: i,
    predicate: l,
    queryKey: s,
    stale: r,
  } = e;
  if (s)
    if (o) {
      if (t.queryHash !== it(s, t.options)) return !1;
    } else if (!st(t.queryKey, s)) return !1;
  if ('all' !== n) {
    const e = t.isActive();
    if ('active' === n && !e) return !1;
    if ('inactive' === n && e) return !1;
  }
  return (
    ('boolean' != typeof r || t.isStale() === r) &&
    (!i || i === t.state.fetchStatus) &&
    !(l && !l(t))
  );
}
function ot(e, t) {
  const { exact: n, status: o, predicate: i, mutationKey: l } = e;
  if (l) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (lt(t.options.mutationKey) !== lt(l)) return !1;
    } else if (!st(t.options.mutationKey, l)) return !1;
  }
  return (!o || t.state.status === o) && !(i && !i(t));
}
function it(e, t) {
  return ((null == t ? void 0 : t.queryKeyHashFn) || lt)(e);
}
function lt(e) {
  return JSON.stringify(e, (e, t) =>
    ct(t)
      ? Object.keys(t)
          .sort()
          .reduce((e, n) => ((e[n] = t[n]), e), {})
      : t,
  );
}
function st(e, t) {
  return (
    e === t ||
    (typeof e == typeof t &&
      !(!e || !t || 'object' != typeof e || 'object' != typeof t) &&
      Object.keys(t).every((n) => st(e[n], t[n])))
  );
}
var rt = Object.prototype.hasOwnProperty;
function at(e, t) {
  if (e === t) return e;
  const n = dt(e) && dt(t);
  if (!(n || (ct(e) && ct(t)))) return t;
  const o = (n ? e : Object.keys(e)).length,
    i = n ? t : Object.keys(t),
    l = i.length,
    s = n ? new Array(l) : {};
  let r = 0;
  for (let a = 0; a < l; a++) {
    const l = n ? a : i[a],
      u = e[l],
      d = t[l];
    if (u === d) {
      ((s[l] = u), (n ? a < o : rt.call(e, l)) && r++);
      continue;
    }
    if (
      null === u ||
      null === d ||
      'object' != typeof u ||
      'object' != typeof d
    ) {
      s[l] = d;
      continue;
    }
    const c = at(u, d);
    ((s[l] = c), c === u && r++);
  }
  return o === l && r === o ? e : s;
}
function ut(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function dt(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function ct(e) {
  if (!gt(e)) return !1;
  const t = e.constructor;
  if (void 0 === t) return !0;
  const n = t.prototype;
  return (
    !!gt(n) &&
    !!n.hasOwnProperty('isPrototypeOf') &&
    Object.getPrototypeOf(e) === Object.prototype
  );
}
function gt(e) {
  return '[object Object]' === Object.prototype.toString.call(e);
}
function ht(e, t, n) {
  return 'function' == typeof n.structuralSharing
    ? n.structuralSharing(e, t)
    : !1 !== n.structuralSharing
      ? at(e, t)
      : t;
}
function pt(e) {
  return e;
}
function ft(e, t, n = 0) {
  const o = [...e, t];
  return n && o.length > n ? o.slice(1) : o;
}
function mt(e, t, n = 0) {
  const o = [t, ...e];
  return n && o.length > n ? o.slice(0, -1) : o;
}
var vt = Symbol();
function bt(e, t) {
  return !e.queryFn && (null == t ? void 0 : t.initialPromise)
    ? () => t.initialPromise
    : e.queryFn && e.queryFn !== vt
      ? e.queryFn
      : () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`));
}
function wt(e, t) {
  return 'function' == typeof e ? e(...t) : !!e;
}
var yt = new ((s = class extends Ke {
  constructor() {
    (super(),
      ze(this, o),
      ze(this, i),
      ze(this, l),
      Te(this, l, (e) => {
        if (!Xe && window.addEventListener) {
          const t = () => e();
          return (
            window.addEventListener('visibilitychange', t, !1),
            () => {
              window.removeEventListener('visibilitychange', t);
            }
          );
        }
      }));
  }
  onSubscribe() {
    qe(this, i) || this.setEventListener(qe(this, l));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() ||
      (null == (e = qe(this, i)) || e.call(this), Te(this, i, void 0));
  }
  setEventListener(e) {
    var t;
    (Te(this, l, e),
      null == (t = qe(this, i)) || t.call(this),
      Te(
        this,
        i,
        e((e) => {
          'boolean' == typeof e ? this.setFocused(e) : this.onFocus();
        }),
      ));
  }
  setFocused(e) {
    qe(this, o) !== e && (Te(this, o, e), this.onFocus());
  }
  onFocus() {
    const e = this.isFocused();
    this.listeners.forEach((t) => {
      t(e);
    });
  }
  isFocused() {
    var e;
    return 'boolean' == typeof qe(this, o)
      ? qe(this, o)
      : 'hidden' !==
          (null == (e = globalThis.document) ? void 0 : e.visibilityState);
  }
}),
(o = new WeakMap()),
(i = new WeakMap()),
(l = new WeakMap()),
s)();
function St() {
  let e, t;
  const n = new Promise((n, o) => {
    ((e = n), (t = o));
  });
  function o(e) {
    (Object.assign(n, e), delete n.resolve, delete n.reject);
  }
  return (
    (n.status = 'pending'),
    n.catch(() => {}),
    (n.resolve = (t) => {
      (o({ status: 'fulfilled', value: t }), e(t));
    }),
    (n.reject = (e) => {
      (o({ status: 'rejected', reason: e }), t(e));
    }),
    n
  );
}
var Ct = function (e) {
  setTimeout(e, 0);
};
var Rt = (function () {
    let e = [],
      t = 0,
      n = (e) => {
        e();
      },
      o = (e) => {
        e();
      },
      i = Ct;
    const l = (o) => {
      t
        ? e.push(o)
        : i(() => {
            n(o);
          });
    };
    return {
      batch: (l) => {
        let s;
        t++;
        try {
          s = l();
        } finally {
          (t--,
            t ||
              (() => {
                const t = e;
                ((e = []),
                  t.length &&
                    i(() => {
                      o(() => {
                        t.forEach((e) => {
                          n(e);
                        });
                      });
                    }));
              })());
        }
        return s;
      },
      batchCalls:
        (e) =>
        (...t) => {
          l(() => {
            e(...t);
          });
        },
      schedule: l,
      setNotifyFunction: (e) => {
        n = e;
      },
      setBatchNotifyFunction: (e) => {
        o = e;
      },
      setScheduler: (e) => {
        i = e;
      },
    };
  })(),
  Ft = new ((d = class extends Ke {
    constructor() {
      (super(),
        ze(this, r, !0),
        ze(this, a),
        ze(this, u),
        Te(this, u, (e) => {
          if (!Xe && window.addEventListener) {
            const t = () => e(!0),
              n = () => e(!1);
            return (
              window.addEventListener('online', t, !1),
              window.addEventListener('offline', n, !1),
              () => {
                (window.removeEventListener('online', t),
                  window.removeEventListener('offline', n));
              }
            );
          }
        }));
    }
    onSubscribe() {
      qe(this, a) || this.setEventListener(qe(this, u));
    }
    onUnsubscribe() {
      var e;
      this.hasListeners() ||
        (null == (e = qe(this, a)) || e.call(this), Te(this, a, void 0));
    }
    setEventListener(e) {
      var t;
      (Te(this, u, e),
        null == (t = qe(this, a)) || t.call(this),
        Te(this, a, e(this.setOnline.bind(this))));
    }
    setOnline(e) {
      qe(this, r) !== e &&
        (Te(this, r, e),
        this.listeners.forEach((t) => {
          t(e);
        }));
    }
    isOnline() {
      return qe(this, r);
    }
  }),
  (r = new WeakMap()),
  (a = new WeakMap()),
  (u = new WeakMap()),
  d)();
function Mt(e) {
  return Math.min(1e3 * _e(2, e), 3e4);
}
function Pt(e) {
  return 'online' !== (null != e ? e : 'online') || Ft.isOnline();
}
var xt = class extends Error {
  constructor(e) {
    (super('CancelledError'),
      (this.revert = null == e ? void 0 : e.revert),
      (this.silent = null == e ? void 0 : e.silent));
  }
};
function It(e) {
  let t,
    n = !1,
    o = 0;
  const i = St(),
    l = () => 'pending' !== i.status,
    s = () =>
      yt.isFocused() &&
      ('always' === e.networkMode || Ft.isOnline()) &&
      e.canRun(),
    r = () => Pt(e.networkMode) && e.canRun(),
    a = (e) => {
      l() || (null == t || t(), i.resolve(e));
    },
    u = (e) => {
      l() || (null == t || t(), i.reject(e));
    },
    d = () =>
      new Promise((n) => {
        var o;
        ((t = (e) => {
          (l() || s()) && n(e);
        }),
          null == (o = e.onPause) || o.call(e));
      }).then(() => {
        var n;
        ((t = void 0), l() || null == (n = e.onContinue) || n.call(e));
      }),
    c = () => {
      if (l()) return;
      let t;
      const i = 0 === o ? e.initialPromise : void 0;
      try {
        t = null != i ? i : e.fn();
      } catch (r) {
        t = Promise.reject(r);
      }
      Promise.resolve(t)
        .then(a)
        .catch((t) => {
          var i, r, a;
          if (l()) return;
          const g = null != (i = e.retry) ? i : Xe ? 0 : 3,
            h = null != (r = e.retryDelay) ? r : Mt,
            p = 'function' == typeof h ? h(o, t) : h,
            f =
              !0 === g ||
              ('number' == typeof g && o < g) ||
              ('function' == typeof g && g(o, t));
          var m;
          !n && f
            ? (o++,
              null == (a = e.onFail) || a.call(e, o, t),
              ((m = p),
              new Promise((e) => {
                $e.setTimeout(e, m);
              }))
                .then(() => (s() ? void 0 : d()))
                .then(() => {
                  n ? u(t) : c();
                }))
            : u(t);
        });
    };
  return {
    promise: i,
    status: () => i.status,
    cancel: (t) => {
      var n;
      if (!l()) {
        const o = new xt(t);
        (u(o), null == (n = e.onCancel) || n.call(e, o));
      }
    },
    continue: () => (null == t || t(), i),
    cancelRetry: () => {
      n = !0;
    },
    continueRetry: () => {
      n = !1;
    },
    canStart: r,
    start: () => (r() ? c() : d().then(c), i),
  };
}
var Ot =
    ((g = class {
      constructor() {
        ze(this, c);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        (this.clearGcTimeout(),
          Ye(this.gcTime) &&
            Te(
              this,
              c,
              $e.setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime),
            ));
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          null != e ? e : Xe ? 1 / 0 : 3e5,
        );
      }
      clearGcTimeout() {
        qe(this, c) && ($e.clearTimeout(qe(this, c)), Te(this, c, void 0));
      }
    }),
    (c = new WeakMap()),
    g),
  Et =
    ((C = class extends Ot {
      constructor(e) {
        var t;
        (super(),
          ze(this, y),
          ze(this, h),
          ze(this, p),
          ze(this, f),
          ze(this, m),
          ze(this, v),
          ze(this, b),
          ze(this, w),
          Te(this, w, !1),
          Te(this, b, e.defaultOptions),
          this.setOptions(e.options),
          (this.observers = []),
          Te(this, m, e.client),
          Te(this, f, qe(this, m).getQueryCache()),
          (this.queryKey = e.queryKey),
          (this.queryHash = e.queryHash),
          Te(this, h, At(this.options)),
          (this.state = null != (t = e.state) ? t : qe(this, h)),
          this.scheduleGc());
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var e;
        return null == (e = qe(this, v)) ? void 0 : e.promise;
      }
      setOptions(e) {
        if (
          ((this.options = De(De({}, qe(this, b)), e)),
          this.updateGcTime(this.options.gcTime),
          this.state && void 0 === this.state.data)
        ) {
          const e = At(this.options);
          void 0 !== e.data &&
            (this.setState(_t(e.data, e.dataUpdatedAt)), Te(this, h, e));
        }
      }
      optionalRemove() {
        this.observers.length ||
          'idle' !== this.state.fetchStatus ||
          qe(this, f).remove(this);
      }
      setData(e, t) {
        const n = ht(this.state.data, e, this.options);
        return (
          je(this, y, S).call(this, {
            data: n,
            type: 'success',
            dataUpdatedAt: null == t ? void 0 : t.updatedAt,
            manual: null == t ? void 0 : t.manual,
          }),
          n
        );
      }
      setState(e, t) {
        je(this, y, S).call(this, {
          type: 'setState',
          state: e,
          setStateOptions: t,
        });
      }
      cancel(e) {
        var t, n;
        const o = null == (t = qe(this, v)) ? void 0 : t.promise;
        return (
          null == (n = qe(this, v)) || n.cancel(e),
          o ? o.then(Je).catch(Je) : Promise.resolve()
        );
      }
      destroy() {
        (super.destroy(), this.cancel({ silent: !0 }));
      }
      reset() {
        (this.destroy(), this.setState(qe(this, h)));
      }
      isActive() {
        return this.observers.some((e) => !1 !== tt(e.options.enabled, this));
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === vt ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return (
          this.getObserversCount() > 0 &&
          this.observers.some((e) => 'static' === et(e.options.staleTime, this))
        );
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((e) => e.getCurrentResult().isStale)
          : void 0 === this.state.data || this.state.isInvalidated;
      }
      isStaleByTime(e = 0) {
        return (
          void 0 === this.state.data ||
          ('static' !== e &&
            (!!this.state.isInvalidated || !Ze(this.state.dataUpdatedAt, e)))
        );
      }
      onFocus() {
        var e;
        const t = this.observers.find((e) => e.shouldFetchOnWindowFocus());
        (null == t || t.refetch({ cancelRefetch: !1 }),
          null == (e = qe(this, v)) || e.continue());
      }
      onOnline() {
        var e;
        const t = this.observers.find((e) => e.shouldFetchOnReconnect());
        (null == t || t.refetch({ cancelRefetch: !1 }),
          null == (e = qe(this, v)) || e.continue());
      }
      addObserver(e) {
        this.observers.includes(e) ||
          (this.observers.push(e),
          this.clearGcTimeout(),
          qe(this, f).notify({
            type: 'observerAdded',
            query: this,
            observer: e,
          }));
      }
      removeObserver(e) {
        this.observers.includes(e) &&
          ((this.observers = this.observers.filter((t) => t !== e)),
          this.observers.length ||
            (qe(this, v) &&
              (qe(this, w)
                ? qe(this, v).cancel({ revert: !0 })
                : qe(this, v).cancelRetry()),
            this.scheduleGc()),
          qe(this, f).notify({
            type: 'observerRemoved',
            query: this,
            observer: e,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          je(this, y, S).call(this, { type: 'invalidate' });
      }
      fetch(e, t) {
        return We(this, null, function* () {
          var n, o, i, l, s, r, a, u, d, c, g, h;
          if (
            'idle' !== this.state.fetchStatus &&
            'rejected' !== (null == (n = qe(this, v)) ? void 0 : n.status())
          )
            if (
              void 0 !== this.state.data &&
              (null == t ? void 0 : t.cancelRefetch)
            )
              this.cancel({ silent: !0 });
            else if (qe(this, v))
              return (qe(this, v).continueRetry(), qe(this, v).promise);
          if ((e && this.setOptions(e), !this.options.queryFn)) {
            const e = this.observers.find((e) => e.options.queryFn);
            e && this.setOptions(e.options);
          }
          const b = new AbortController(),
            C = (e) => {
              Object.defineProperty(e, 'signal', {
                enumerable: !0,
                get: () => (Te(this, w, !0), b.signal),
              });
            },
            R = () => {
              const e = bt(this.options, t),
                n = (() => {
                  const e = {
                    client: qe(this, m),
                    queryKey: this.queryKey,
                    meta: this.meta,
                  };
                  return (C(e), e);
                })();
              return (
                Te(this, w, !1),
                this.options.persister
                  ? this.options.persister(e, n, this)
                  : e(n)
              );
            },
            F = (() => {
              const e = {
                fetchOptions: t,
                options: this.options,
                queryKey: this.queryKey,
                client: qe(this, m),
                state: this.state,
                fetchFn: R,
              };
              return (C(e), e);
            })();
          (null == (o = this.options.behavior) || o.onFetch(F, this),
            Te(this, p, this.state),
            ('idle' !== this.state.fetchStatus &&
              this.state.fetchMeta ===
                (null == (i = F.fetchOptions) ? void 0 : i.meta)) ||
              je(this, y, S).call(this, {
                type: 'fetch',
                meta: null == (l = F.fetchOptions) ? void 0 : l.meta,
              }),
            Te(
              this,
              v,
              It({
                initialPromise: null == t ? void 0 : t.initialPromise,
                fn: F.fetchFn,
                onCancel: (e) => {
                  (e instanceof xt &&
                    e.revert &&
                    this.setState(
                      ke(De({}, qe(this, p)), { fetchStatus: 'idle' }),
                    ),
                    b.abort());
                },
                onFail: (e, t) => {
                  je(this, y, S).call(this, {
                    type: 'failed',
                    failureCount: e,
                    error: t,
                  });
                },
                onPause: () => {
                  je(this, y, S).call(this, { type: 'pause' });
                },
                onContinue: () => {
                  je(this, y, S).call(this, { type: 'continue' });
                },
                retry: F.options.retry,
                retryDelay: F.options.retryDelay,
                networkMode: F.options.networkMode,
                canRun: () => !0,
              }),
            ));
          try {
            const e = yield qe(this, v).start();
            if (void 0 === e)
              throw new Error(`${this.queryHash} data is undefined`);
            return (
              this.setData(e),
              null == (r = (s = qe(this, f).config).onSuccess) ||
                r.call(s, e, this),
              null == (u = (a = qe(this, f).config).onSettled) ||
                u.call(a, e, this.state.error, this),
              e
            );
          } catch (M) {
            if (M instanceof xt) {
              if (M.silent) return qe(this, v).promise;
              if (M.revert) {
                if (void 0 === this.state.data) throw M;
                return this.state.data;
              }
            }
            throw (
              je(this, y, S).call(this, { type: 'error', error: M }),
              null == (c = (d = qe(this, f).config).onError) ||
                c.call(d, M, this),
              null == (h = (g = qe(this, f).config).onSettled) ||
                h.call(g, this.state.data, M, this),
              M
            );
          } finally {
            this.scheduleGc();
          }
        });
      }
    }),
    (h = new WeakMap()),
    (p = new WeakMap()),
    (f = new WeakMap()),
    (m = new WeakMap()),
    (v = new WeakMap()),
    (b = new WeakMap()),
    (w = new WeakMap()),
    (y = new WeakSet()),
    (S = function (e) {
      ((this.state = ((t) => {
        var n;
        switch (e.type) {
          case 'failed':
            return ke(De({}, t), {
              fetchFailureCount: e.failureCount,
              fetchFailureReason: e.error,
            });
          case 'pause':
            return ke(De({}, t), { fetchStatus: 'paused' });
          case 'continue':
            return ke(De({}, t), { fetchStatus: 'fetching' });
          case 'fetch':
            return ke(De(De({}, t), Vt(t.data, this.options)), {
              fetchMeta: null != (n = e.meta) ? n : null,
            });
          case 'success':
            const o = De(
              ke(De(De({}, t), _t(e.data, e.dataUpdatedAt)), {
                dataUpdateCount: t.dataUpdateCount + 1,
              }),
              !e.manual && {
                fetchStatus: 'idle',
                fetchFailureCount: 0,
                fetchFailureReason: null,
              },
            );
            return (Te(this, p, e.manual ? o : void 0), o);
          case 'error':
            const i = e.error;
            return ke(De({}, t), {
              error: i,
              errorUpdateCount: t.errorUpdateCount + 1,
              errorUpdatedAt: Date.now(),
              fetchFailureCount: t.fetchFailureCount + 1,
              fetchFailureReason: i,
              fetchStatus: 'idle',
              status: 'error',
            });
          case 'invalidate':
            return ke(De({}, t), { isInvalidated: !0 });
          case 'setState':
            return De(De({}, t), e.state);
        }
      })(this.state)),
        Rt.batch(() => {
          (this.observers.forEach((e) => {
            e.onQueryUpdate();
          }),
            qe(this, f).notify({ query: this, type: 'updated', action: e }));
        }));
    }),
    C);
function Vt(e, t) {
  return De(
    {
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchStatus: Pt(t.networkMode) ? 'fetching' : 'paused',
    },
    void 0 === e && { error: null, status: 'pending' },
  );
}
function _t(e, t) {
  return {
    data: e,
    dataUpdatedAt: null != t ? t : Date.now(),
    error: null,
    isInvalidated: !1,
    status: 'success',
  };
}
function At(e) {
  const t =
      'function' == typeof e.initialData ? e.initialData() : e.initialData,
    n = void 0 !== t,
    o = n
      ? 'function' == typeof e.initialDataUpdatedAt
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (null != o ? o : Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? 'success' : 'pending',
    fetchStatus: 'idle',
  };
}
var Dt =
  ((N = class extends Ke {
    constructor(e, t) {
      (super(),
        ze(this, H),
        ze(this, R),
        ze(this, F),
        ze(this, M),
        ze(this, P),
        ze(this, x),
        ze(this, I),
        ze(this, O),
        ze(this, E),
        ze(this, V),
        ze(this, _),
        ze(this, A),
        ze(this, D),
        ze(this, k),
        ze(this, G),
        ze(this, L, new Set()),
        (this.options = t),
        Te(this, R, e),
        Te(this, E, null),
        Te(this, O, St()),
        this.bindMethods(),
        this.setOptions(t));
    }
    bindMethods() {
      this.refetch = this.refetch.bind(this);
    }
    onSubscribe() {
      1 === this.listeners.size &&
        (qe(this, F).addObserver(this),
        kt(qe(this, F), this.options)
          ? je(this, H, q).call(this)
          : this.updateResult(),
        je(this, H, U).call(this));
    }
    onUnsubscribe() {
      this.hasListeners() || this.destroy();
    }
    shouldFetchOnReconnect() {
      return Gt(qe(this, F), this.options, this.options.refetchOnReconnect);
    }
    shouldFetchOnWindowFocus() {
      return Gt(qe(this, F), this.options, this.options.refetchOnWindowFocus);
    }
    destroy() {
      ((this.listeners = new Set()),
        je(this, H, W).call(this),
        je(this, H, B).call(this),
        qe(this, F).removeObserver(this));
    }
    setOptions(e) {
      const t = this.options,
        n = qe(this, F);
      if (
        ((this.options = qe(this, R).defaultQueryOptions(e)),
        void 0 !== this.options.enabled &&
          'boolean' != typeof this.options.enabled &&
          'function' != typeof this.options.enabled &&
          'boolean' != typeof tt(this.options.enabled, qe(this, F)))
      )
        throw new Error(
          'Expected enabled to be a boolean or a callback that returns a boolean',
        );
      (je(this, H, Q).call(this),
        qe(this, F).setOptions(this.options),
        t._defaulted &&
          !ut(this.options, t) &&
          qe(this, R)
            .getQueryCache()
            .notify({
              type: 'observerOptionsUpdated',
              query: qe(this, F),
              observer: this,
            }));
      const o = this.hasListeners();
      (o && Lt(qe(this, F), n, this.options, t) && je(this, H, q).call(this),
        this.updateResult(),
        !o ||
          (qe(this, F) === n &&
            tt(this.options.enabled, qe(this, F)) ===
              tt(t.enabled, qe(this, F)) &&
            et(this.options.staleTime, qe(this, F)) ===
              et(t.staleTime, qe(this, F))) ||
          je(this, H, z).call(this));
      const i = je(this, H, T).call(this);
      !o ||
        (qe(this, F) === n &&
          tt(this.options.enabled, qe(this, F)) ===
            tt(t.enabled, qe(this, F)) &&
          i === qe(this, G)) ||
        je(this, H, j).call(this, i);
    }
    getOptimisticResult(e) {
      const t = qe(this, R).getQueryCache().build(qe(this, R), e),
        n = this.createResult(t, e);
      return (
        (function (e, t) {
          if (!ut(e.getCurrentResult(), t)) return !0;
          return !1;
        })(this, n) &&
          (Te(this, P, n),
          Te(this, I, this.options),
          Te(this, x, qe(this, F).state)),
        n
      );
    }
    getCurrentResult() {
      return qe(this, P);
    }
    trackResult(e, t) {
      return new Proxy(e, {
        get: (e, n) => (
          this.trackProp(n),
          null == t || t(n),
          'promise' === n &&
            (this.trackProp('data'),
            this.options.experimental_prefetchInRender ||
              'pending' !== qe(this, O).status ||
              qe(this, O).reject(
                new Error(
                  'experimental_prefetchInRender feature flag is not enabled',
                ),
              )),
          Reflect.get(e, n)
        ),
      });
    }
    trackProp(e) {
      qe(this, L).add(e);
    }
    getCurrentQuery() {
      return qe(this, F);
    }
    refetch(e = {}) {
      var t = Le(e, []);
      return this.fetch(De({}, t));
    }
    fetchOptimistic(e) {
      const t = qe(this, R).defaultQueryOptions(e),
        n = qe(this, R).getQueryCache().build(qe(this, R), t);
      return n.fetch().then(() => this.createResult(n, t));
    }
    fetch(e) {
      var t;
      return je(this, H, q)
        .call(
          this,
          ke(De({}, e), { cancelRefetch: null == (t = e.cancelRefetch) || t }),
        )
        .then(() => (this.updateResult(), qe(this, P)));
    }
    createResult(e, t) {
      var n;
      const o = qe(this, F),
        i = this.options,
        l = qe(this, P),
        s = qe(this, x),
        r = qe(this, I),
        a = e !== o ? e.state : qe(this, M),
        { state: u } = e;
      let d,
        c = De({}, u),
        g = !1;
      if (t._optimisticResults) {
        const n = this.hasListeners(),
          l = !n && kt(e, t),
          s = n && Lt(e, o, t, i);
        ((l || s) && (c = De(De({}, c), Vt(u.data, e.options))),
          'isRestoring' === t._optimisticResults && (c.fetchStatus = 'idle'));
      }
      let { error: h, errorUpdatedAt: p, status: f } = c;
      d = c.data;
      let m = !1;
      if (void 0 !== t.placeholderData && void 0 === d && 'pending' === f) {
        let e;
        ((null == l ? void 0 : l.isPlaceholderData) &&
        t.placeholderData === (null == r ? void 0 : r.placeholderData)
          ? ((e = l.data), (m = !0))
          : (e =
              'function' == typeof t.placeholderData
                ? t.placeholderData(
                    null == (n = qe(this, A)) ? void 0 : n.state.data,
                    qe(this, A),
                  )
                : t.placeholderData),
          void 0 !== e &&
            ((f = 'success'),
            (d = ht(null == l ? void 0 : l.data, e, t)),
            (g = !0)));
      }
      if (t.select && void 0 !== d && !m)
        if (
          l &&
          d === (null == s ? void 0 : s.data) &&
          t.select === qe(this, V)
        )
          d = qe(this, _);
        else
          try {
            (Te(this, V, t.select),
              (d = t.select(d)),
              (d = ht(null == l ? void 0 : l.data, d, t)),
              Te(this, _, d),
              Te(this, E, null));
          } catch (R) {
            Te(this, E, R);
          }
      qe(this, E) &&
        ((h = qe(this, E)), (d = qe(this, _)), (p = Date.now()), (f = 'error'));
      const v = 'fetching' === c.fetchStatus,
        b = 'pending' === f,
        w = 'error' === f,
        y = b && v,
        S = void 0 !== d,
        C = {
          status: f,
          fetchStatus: c.fetchStatus,
          isPending: b,
          isSuccess: 'success' === f,
          isError: w,
          isInitialLoading: y,
          isLoading: y,
          data: d,
          dataUpdatedAt: c.dataUpdatedAt,
          error: h,
          errorUpdatedAt: p,
          failureCount: c.fetchFailureCount,
          failureReason: c.fetchFailureReason,
          errorUpdateCount: c.errorUpdateCount,
          isFetched: c.dataUpdateCount > 0 || c.errorUpdateCount > 0,
          isFetchedAfterMount:
            c.dataUpdateCount > a.dataUpdateCount ||
            c.errorUpdateCount > a.errorUpdateCount,
          isFetching: v,
          isRefetching: v && !b,
          isLoadingError: w && !S,
          isPaused: 'paused' === c.fetchStatus,
          isPlaceholderData: g,
          isRefetchError: w && S,
          isStale: Ht(e, t),
          refetch: this.refetch,
          promise: qe(this, O),
          isEnabled: !1 !== tt(t.enabled, e),
        };
      if (this.options.experimental_prefetchInRender) {
        const t = (e) => {
            'error' === C.status
              ? e.reject(C.error)
              : void 0 !== C.data && e.resolve(C.data);
          },
          n = () => {
            const e = Te(this, O, (C.promise = St()));
            t(e);
          },
          i = qe(this, O);
        switch (i.status) {
          case 'pending':
            e.queryHash === o.queryHash && t(i);
            break;
          case 'fulfilled':
            ('error' !== C.status && C.data === i.value) || n();
            break;
          case 'rejected':
            ('error' === C.status && C.error === i.reason) || n();
        }
      }
      return C;
    }
    updateResult() {
      const e = qe(this, P),
        t = this.createResult(qe(this, F), this.options);
      if (
        (Te(this, x, qe(this, F).state),
        Te(this, I, this.options),
        void 0 !== qe(this, x).data && Te(this, A, qe(this, F)),
        ut(t, e))
      )
        return;
      Te(this, P, t);
      je(this, H, K).call(this, {
        listeners: (() => {
          if (!e) return !0;
          const { notifyOnChangeProps: t } = this.options,
            n = 'function' == typeof t ? t() : t;
          if ('all' === n || (!n && !qe(this, L).size)) return !0;
          const o = new Set(null != n ? n : qe(this, L));
          return (
            this.options.throwOnError && o.add('error'),
            Object.keys(qe(this, P)).some((t) => {
              const n = t;
              return qe(this, P)[n] !== e[n] && o.has(n);
            })
          );
        })(),
      });
    }
    onQueryUpdate() {
      (this.updateResult(), this.hasListeners() && je(this, H, U).call(this));
    }
  }),
  (R = new WeakMap()),
  (F = new WeakMap()),
  (M = new WeakMap()),
  (P = new WeakMap()),
  (x = new WeakMap()),
  (I = new WeakMap()),
  (O = new WeakMap()),
  (E = new WeakMap()),
  (V = new WeakMap()),
  (_ = new WeakMap()),
  (A = new WeakMap()),
  (D = new WeakMap()),
  (k = new WeakMap()),
  (G = new WeakMap()),
  (L = new WeakMap()),
  (H = new WeakSet()),
  (q = function (e) {
    je(this, H, Q).call(this);
    let t = qe(this, F).fetch(this.options, e);
    return ((null == e ? void 0 : e.throwOnError) || (t = t.catch(Je)), t);
  }),
  (z = function () {
    je(this, H, W).call(this);
    const e = et(this.options.staleTime, qe(this, F));
    if (Xe || qe(this, P).isStale || !Ye(e)) return;
    const t = Ze(qe(this, P).dataUpdatedAt, e) + 1;
    Te(
      this,
      D,
      $e.setTimeout(() => {
        qe(this, P).isStale || this.updateResult();
      }, t),
    );
  }),
  (T = function () {
    var e;
    return (
      null !=
        (e =
          'function' == typeof this.options.refetchInterval
            ? this.options.refetchInterval(qe(this, F))
            : this.options.refetchInterval) && e
    );
  }),
  (j = function (e) {
    (je(this, H, B).call(this),
      Te(this, G, e),
      !Xe &&
        !1 !== tt(this.options.enabled, qe(this, F)) &&
        Ye(qe(this, G)) &&
        0 !== qe(this, G) &&
        Te(
          this,
          k,
          $e.setInterval(
            () => {
              (this.options.refetchIntervalInBackground || yt.isFocused()) &&
                je(this, H, q).call(this);
            },
            qe(this, G),
          ),
        ));
  }),
  (U = function () {
    (je(this, H, z).call(this),
      je(this, H, j).call(this, je(this, H, T).call(this)));
  }),
  (W = function () {
    qe(this, D) && ($e.clearTimeout(qe(this, D)), Te(this, D, void 0));
  }),
  (B = function () {
    qe(this, k) && ($e.clearInterval(qe(this, k)), Te(this, k, void 0));
  }),
  (Q = function () {
    const e = qe(this, R).getQueryCache().build(qe(this, R), this.options);
    if (e === qe(this, F)) return;
    const t = qe(this, F);
    (Te(this, F, e),
      Te(this, M, e.state),
      this.hasListeners() &&
        (null == t || t.removeObserver(this), e.addObserver(this)));
  }),
  (K = function (e) {
    Rt.batch(() => {
      (e.listeners &&
        this.listeners.forEach((e) => {
          e(qe(this, P));
        }),
        qe(this, R)
          .getQueryCache()
          .notify({ query: qe(this, F), type: 'observerResultsUpdated' }));
    });
  }),
  N);
function kt(e, t) {
  return (
    (function (e, t) {
      return (
        !1 !== tt(t.enabled, e) &&
        void 0 === e.state.data &&
        !('error' === e.state.status && !1 === t.retryOnMount)
      );
    })(e, t) ||
    (void 0 !== e.state.data && Gt(e, t, t.refetchOnMount))
  );
}
function Gt(e, t, n) {
  if (!1 !== tt(t.enabled, e) && 'static' !== et(t.staleTime, e)) {
    const o = 'function' == typeof n ? n(e) : n;
    return 'always' === o || (!1 !== o && Ht(e, t));
  }
  return !1;
}
function Lt(e, t, n, o) {
  return (
    (e !== t || !1 === tt(o.enabled, e)) &&
    (!n.suspense || 'error' !== e.state.status) &&
    Ht(e, n)
  );
}
function Ht(e, t) {
  return !1 !== tt(t.enabled, e) && e.isStaleByTime(et(t.staleTime, e));
}
function qt(e) {
  return {
    onFetch: (t, n) => {
      var o, i, l, s, r;
      const a = t.options,
        u =
          null ==
          (l =
            null == (i = null == (o = t.fetchOptions) ? void 0 : o.meta)
              ? void 0
              : i.fetchMore)
            ? void 0
            : l.direction,
        d = (null == (s = t.state.data) ? void 0 : s.pages) || [],
        c = (null == (r = t.state.data) ? void 0 : r.pageParams) || [];
      let g = { pages: [], pageParams: [] },
        h = 0;
      const p = () =>
        We(null, null, function* () {
          var n;
          let o = !1;
          const i = (e) => {
              !(function (e, t, n) {
                let o,
                  i = !1;
                Object.defineProperty(e, 'signal', {
                  enumerable: !0,
                  get: () => (
                    null != o || (o = t()),
                    i ||
                      ((i = !0),
                      o.aborted
                        ? n()
                        : o.addEventListener('abort', n, { once: !0 })),
                    o
                  ),
                });
              })(
                e,
                () => t.signal,
                () => (o = !0),
              );
            },
            l = bt(t.options, t.fetchOptions),
            s = (e, n, s) =>
              We(null, null, function* () {
                if (o) return Promise.reject();
                if (null == n && e.pages.length) return Promise.resolve(e);
                const r = (() => {
                    const e = {
                      client: t.client,
                      queryKey: t.queryKey,
                      pageParam: n,
                      direction: s ? 'backward' : 'forward',
                      meta: t.options.meta,
                    };
                    return (i(e), e);
                  })(),
                  a = yield l(r),
                  { maxPages: u } = t.options,
                  d = s ? mt : ft;
                return {
                  pages: d(e.pages, a, u),
                  pageParams: d(e.pageParams, n, u),
                };
              });
          if (u && d.length) {
            const e = 'backward' === u,
              t = { pages: d, pageParams: c },
              n = (e ? Tt : zt)(a, t);
            g = yield s(t, n, e);
          } else {
            const t = null != e ? e : d.length;
            do {
              const e =
                0 === h
                  ? null != (n = c[0])
                    ? n
                    : a.initialPageParam
                  : zt(a, g);
              if (h > 0 && null == e) break;
              ((g = yield s(g, e)), h++);
            } while (h < t);
          }
          return g;
        });
      t.options.persister
        ? (t.fetchFn = () => {
            var e, o;
            return null == (o = (e = t.options).persister)
              ? void 0
              : o.call(
                  e,
                  p,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n,
                );
          })
        : (t.fetchFn = p);
    },
  };
}
function zt(e, { pages: t, pageParams: n }) {
  const o = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[o], t, n[o], n) : void 0;
}
function Tt(e, { pages: t, pageParams: n }) {
  var o;
  return t.length > 0
    ? null == (o = e.getPreviousPageParam)
      ? void 0
      : o.call(e, t[0], t, n[0], n)
    : void 0;
}
var jt =
  ((te = class extends Ot {
    constructor(e) {
      (super(),
        ze(this, Z),
        ze(this, $),
        ze(this, X),
        ze(this, J),
        ze(this, Y),
        Te(this, $, e.client),
        (this.mutationId = e.mutationId),
        Te(this, J, e.mutationCache),
        Te(this, X, []),
        (this.state = e.state || {
          context: void 0,
          data: void 0,
          error: null,
          failureCount: 0,
          failureReason: null,
          isPaused: !1,
          status: 'idle',
          variables: void 0,
          submittedAt: 0,
        }),
        this.setOptions(e.options),
        this.scheduleGc());
    }
    setOptions(e) {
      ((this.options = e), this.updateGcTime(this.options.gcTime));
    }
    get meta() {
      return this.options.meta;
    }
    addObserver(e) {
      qe(this, X).includes(e) ||
        (qe(this, X).push(e),
        this.clearGcTimeout(),
        qe(this, J).notify({
          type: 'observerAdded',
          mutation: this,
          observer: e,
        }));
    }
    removeObserver(e) {
      (Te(
        this,
        X,
        qe(this, X).filter((t) => t !== e),
      ),
        this.scheduleGc(),
        qe(this, J).notify({
          type: 'observerRemoved',
          mutation: this,
          observer: e,
        }));
    }
    optionalRemove() {
      qe(this, X).length ||
        ('pending' === this.state.status
          ? this.scheduleGc()
          : qe(this, J).remove(this));
    }
    continue() {
      var e, t;
      return null != (t = null == (e = qe(this, Y)) ? void 0 : e.continue())
        ? t
        : this.execute(this.state.variables);
    }
    execute(e) {
      return We(this, null, function* () {
        var t, n, o, i, l, s, r, a, u, d, c, g, h, p, f, m, v, b, w, y, S;
        const C = () => {
            je(this, Z, ee).call(this, { type: 'continue' });
          },
          R = {
            client: qe(this, $),
            meta: this.options.meta,
            mutationKey: this.options.mutationKey,
          };
        Te(
          this,
          Y,
          It({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(e, R)
                : Promise.reject(new Error('No mutationFn found')),
            onFail: (e, t) => {
              je(this, Z, ee).call(this, {
                type: 'failed',
                failureCount: e,
                error: t,
              });
            },
            onPause: () => {
              je(this, Z, ee).call(this, { type: 'pause' });
            },
            onContinue: C,
            retry: null != (t = this.options.retry) ? t : 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => qe(this, J).canRun(this),
          }),
        );
        const F = 'pending' === this.state.status,
          M = !qe(this, Y).canStart();
        try {
          if (F) C();
          else {
            (je(this, Z, ee).call(this, {
              type: 'pending',
              variables: e,
              isPaused: M,
            }),
              yield null == (o = (n = qe(this, J).config).onMutate)
                ? void 0
                : o.call(n, e, this, R));
            const t = yield null == (l = (i = this.options).onMutate)
              ? void 0
              : l.call(i, e, R);
            t !== this.state.context &&
              je(this, Z, ee).call(this, {
                type: 'pending',
                context: t,
                variables: e,
                isPaused: M,
              });
          }
          const t = yield qe(this, Y).start();
          return (
            yield null == (r = (s = qe(this, J).config).onSuccess)
              ? void 0
              : r.call(s, t, e, this.state.context, this, R),
            yield null == (u = (a = this.options).onSuccess)
              ? void 0
              : u.call(a, t, e, this.state.context, R),
            yield null == (c = (d = qe(this, J).config).onSettled)
              ? void 0
              : c.call(
                  d,
                  t,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                  R,
                ),
            yield null == (h = (g = this.options).onSettled)
              ? void 0
              : h.call(g, t, null, e, this.state.context, R),
            je(this, Z, ee).call(this, { type: 'success', data: t }),
            t
          );
        } catch (P) {
          try {
            throw (
              yield null == (f = (p = qe(this, J).config).onError)
                ? void 0
                : f.call(p, P, e, this.state.context, this, R),
              yield null == (v = (m = this.options).onError)
                ? void 0
                : v.call(m, P, e, this.state.context, R),
              yield null == (w = (b = qe(this, J).config).onSettled)
                ? void 0
                : w.call(
                    b,
                    void 0,
                    P,
                    this.state.variables,
                    this.state.context,
                    this,
                    R,
                  ),
              yield null == (S = (y = this.options).onSettled)
                ? void 0
                : S.call(y, void 0, P, e, this.state.context, R),
              P
            );
          } finally {
            je(this, Z, ee).call(this, { type: 'error', error: P });
          }
        } finally {
          qe(this, J).runNext(this);
        }
      });
    }
  }),
  ($ = new WeakMap()),
  (X = new WeakMap()),
  (J = new WeakMap()),
  (Y = new WeakMap()),
  (Z = new WeakSet()),
  (ee = function (e) {
    ((this.state = ((t) => {
      switch (e.type) {
        case 'failed':
          return ke(De({}, t), {
            failureCount: e.failureCount,
            failureReason: e.error,
          });
        case 'pause':
          return ke(De({}, t), { isPaused: !0 });
        case 'continue':
          return ke(De({}, t), { isPaused: !1 });
        case 'pending':
          return ke(De({}, t), {
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: e.isPaused,
            status: 'pending',
            variables: e.variables,
            submittedAt: Date.now(),
          });
        case 'success':
          return ke(De({}, t), {
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: 'success',
            isPaused: !1,
          });
        case 'error':
          return ke(De({}, t), {
            data: void 0,
            error: e.error,
            failureCount: t.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: 'error',
          });
      }
    })(this.state)),
      Rt.batch(() => {
        (qe(this, X).forEach((t) => {
          t.onMutationUpdate(e);
        }),
          qe(this, J).notify({ mutation: this, type: 'updated', action: e }));
      }));
  }),
  te);
var Ut =
  ((le = class extends Ke {
    constructor(e = {}) {
      (super(),
        ze(this, ne),
        ze(this, oe),
        ze(this, ie),
        (this.config = e),
        Te(this, ne, new Set()),
        Te(this, oe, new Map()),
        Te(this, ie, 0));
    }
    build(e, t, n) {
      const o = new jt({
        client: e,
        mutationCache: this,
        mutationId: ++Ue(this, ie)._,
        options: e.defaultMutationOptions(t),
        state: n,
      });
      return (this.add(o), o);
    }
    add(e) {
      qe(this, ne).add(e);
      const t = Wt(e);
      if ('string' == typeof t) {
        const n = qe(this, oe).get(t);
        n ? n.push(e) : qe(this, oe).set(t, [e]);
      }
      this.notify({ type: 'added', mutation: e });
    }
    remove(e) {
      if (qe(this, ne).delete(e)) {
        const t = Wt(e);
        if ('string' == typeof t) {
          const n = qe(this, oe).get(t);
          if (n)
            if (n.length > 1) {
              const t = n.indexOf(e);
              -1 !== t && n.splice(t, 1);
            } else n[0] === e && qe(this, oe).delete(t);
        }
      }
      this.notify({ type: 'removed', mutation: e });
    }
    canRun(e) {
      const t = Wt(e);
      if ('string' == typeof t) {
        const n = qe(this, oe).get(t),
          o = null == n ? void 0 : n.find((e) => 'pending' === e.state.status);
        return !o || o === e;
      }
      return !0;
    }
    runNext(e) {
      var t, n;
      const o = Wt(e);
      if ('string' == typeof o) {
        const i =
          null == (t = qe(this, oe).get(o))
            ? void 0
            : t.find((t) => t !== e && t.state.isPaused);
        return null != (n = null == i ? void 0 : i.continue())
          ? n
          : Promise.resolve();
      }
      return Promise.resolve();
    }
    clear() {
      Rt.batch(() => {
        (qe(this, ne).forEach((e) => {
          this.notify({ type: 'removed', mutation: e });
        }),
          qe(this, ne).clear(),
          qe(this, oe).clear());
      });
    }
    getAll() {
      return Array.from(qe(this, ne));
    }
    find(e) {
      const t = De({ exact: !0 }, e);
      return this.getAll().find((e) => ot(t, e));
    }
    findAll(e = {}) {
      return this.getAll().filter((t) => ot(e, t));
    }
    notify(e) {
      Rt.batch(() => {
        this.listeners.forEach((t) => {
          t(e);
        });
      });
    }
    resumePausedMutations() {
      const e = this.getAll().filter((e) => e.state.isPaused);
      return Rt.batch(() => Promise.all(e.map((e) => e.continue().catch(Je))));
    }
  }),
  (ne = new WeakMap()),
  (oe = new WeakMap()),
  (ie = new WeakMap()),
  le);
function Wt(e) {
  var t;
  return null == (t = e.options.scope) ? void 0 : t.id;
}
var Bt =
    ((he = class extends Ke {
      constructor(e, t) {
        (super(),
          ze(this, de),
          ze(this, se),
          ze(this, re),
          ze(this, ae),
          ze(this, ue),
          Te(this, se, e),
          this.setOptions(t),
          this.bindMethods(),
          je(this, de, ce).call(this));
      }
      bindMethods() {
        ((this.mutate = this.mutate.bind(this)),
          (this.reset = this.reset.bind(this)));
      }
      setOptions(e) {
        var t;
        const n = this.options;
        ((this.options = qe(this, se).defaultMutationOptions(e)),
          ut(this.options, n) ||
            qe(this, se)
              .getMutationCache()
              .notify({
                type: 'observerOptionsUpdated',
                mutation: qe(this, ae),
                observer: this,
              }),
          (null == n ? void 0 : n.mutationKey) &&
          this.options.mutationKey &&
          lt(n.mutationKey) !== lt(this.options.mutationKey)
            ? this.reset()
            : 'pending' ===
                (null == (t = qe(this, ae)) ? void 0 : t.state.status) &&
              qe(this, ae).setOptions(this.options));
      }
      onUnsubscribe() {
        var e;
        this.hasListeners() ||
          null == (e = qe(this, ae)) ||
          e.removeObserver(this);
      }
      onMutationUpdate(e) {
        (je(this, de, ce).call(this), je(this, de, ge).call(this, e));
      }
      getCurrentResult() {
        return qe(this, re);
      }
      reset() {
        var e;
        (null == (e = qe(this, ae)) || e.removeObserver(this),
          Te(this, ae, void 0),
          je(this, de, ce).call(this),
          je(this, de, ge).call(this));
      }
      mutate(e, t) {
        var n;
        return (
          Te(this, ue, t),
          null == (n = qe(this, ae)) || n.removeObserver(this),
          Te(
            this,
            ae,
            qe(this, se).getMutationCache().build(qe(this, se), this.options),
          ),
          qe(this, ae).addObserver(this),
          qe(this, ae).execute(e)
        );
      }
    }),
    (se = new WeakMap()),
    (re = new WeakMap()),
    (ae = new WeakMap()),
    (ue = new WeakMap()),
    (de = new WeakSet()),
    (ce = function () {
      var e, t;
      const n =
        null != (t = null == (e = qe(this, ae)) ? void 0 : e.state)
          ? t
          : {
              context: void 0,
              data: void 0,
              error: null,
              failureCount: 0,
              failureReason: null,
              isPaused: !1,
              status: 'idle',
              variables: void 0,
              submittedAt: 0,
            };
      Te(
        this,
        re,
        ke(De({}, n), {
          isPending: 'pending' === n.status,
          isSuccess: 'success' === n.status,
          isError: 'error' === n.status,
          isIdle: 'idle' === n.status,
          mutate: this.mutate,
          reset: this.reset,
        }),
      );
    }),
    (ge = function (e) {
      Rt.batch(() => {
        var t, n, o, i, l, s, r, a;
        if (qe(this, ue) && this.hasListeners()) {
          const u = qe(this, re).variables,
            d = qe(this, re).context,
            c = {
              client: qe(this, se),
              meta: this.options.meta,
              mutationKey: this.options.mutationKey,
            };
          'success' === (null == e ? void 0 : e.type)
            ? (null == (n = (t = qe(this, ue)).onSuccess) ||
                n.call(t, e.data, u, d, c),
              null == (i = (o = qe(this, ue)).onSettled) ||
                i.call(o, e.data, null, u, d, c))
            : 'error' === (null == e ? void 0 : e.type) &&
              (null == (s = (l = qe(this, ue)).onError) ||
                s.call(l, e.error, u, d, c),
              null == (a = (r = qe(this, ue)).onSettled) ||
                a.call(r, void 0, e.error, u, d, c));
        }
        this.listeners.forEach((e) => {
          e(qe(this, re));
        });
      });
    }),
    he),
  Qt =
    ((fe = class extends Ke {
      constructor(e = {}) {
        (super(), ze(this, pe), (this.config = e), Te(this, pe, new Map()));
      }
      build(e, t, n) {
        var o;
        const i = t.queryKey,
          l = null != (o = t.queryHash) ? o : it(i, t);
        let s = this.get(l);
        return (
          s ||
            ((s = new Et({
              client: e,
              queryKey: i,
              queryHash: l,
              options: e.defaultQueryOptions(t),
              state: n,
              defaultOptions: e.getQueryDefaults(i),
            })),
            this.add(s)),
          s
        );
      }
      add(e) {
        qe(this, pe).has(e.queryHash) ||
          (qe(this, pe).set(e.queryHash, e),
          this.notify({ type: 'added', query: e }));
      }
      remove(e) {
        const t = qe(this, pe).get(e.queryHash);
        t &&
          (e.destroy(),
          t === e && qe(this, pe).delete(e.queryHash),
          this.notify({ type: 'removed', query: e }));
      }
      clear() {
        Rt.batch(() => {
          this.getAll().forEach((e) => {
            this.remove(e);
          });
        });
      }
      get(e) {
        return qe(this, pe).get(e);
      }
      getAll() {
        return [...qe(this, pe).values()];
      }
      find(e) {
        const t = De({ exact: !0 }, e);
        return this.getAll().find((e) => nt(t, e));
      }
      findAll(e = {}) {
        const t = this.getAll();
        return Object.keys(e).length > 0 ? t.filter((t) => nt(e, t)) : t;
      }
      notify(e) {
        Rt.batch(() => {
          this.listeners.forEach((t) => {
            t(e);
          });
        });
      }
      onFocus() {
        Rt.batch(() => {
          this.getAll().forEach((e) => {
            e.onFocus();
          });
        });
      }
      onOnline() {
        Rt.batch(() => {
          this.getAll().forEach((e) => {
            e.onOnline();
          });
        });
      }
    }),
    (pe = new WeakMap()),
    fe),
  Kt =
    ((Fe = class {
      constructor(e = {}) {
        (ze(this, me),
          ze(this, ve),
          ze(this, be),
          ze(this, we),
          ze(this, ye),
          ze(this, Se),
          ze(this, Ce),
          ze(this, Re),
          Te(this, me, e.queryCache || new Qt()),
          Te(this, ve, e.mutationCache || new Ut()),
          Te(this, be, e.defaultOptions || {}),
          Te(this, we, new Map()),
          Te(this, ye, new Map()),
          Te(this, Se, 0));
      }
      mount() {
        (Ue(this, Se)._++,
          1 === qe(this, Se) &&
            (Te(
              this,
              Ce,
              yt.subscribe((e) =>
                We(this, null, function* () {
                  e &&
                    (yield this.resumePausedMutations(),
                    qe(this, me).onFocus());
                }),
              ),
            ),
            Te(
              this,
              Re,
              Ft.subscribe((e) =>
                We(this, null, function* () {
                  e &&
                    (yield this.resumePausedMutations(),
                    qe(this, me).onOnline());
                }),
              ),
            )));
      }
      unmount() {
        var e, t;
        (Ue(this, Se)._--,
          0 === qe(this, Se) &&
            (null == (e = qe(this, Ce)) || e.call(this),
            Te(this, Ce, void 0),
            null == (t = qe(this, Re)) || t.call(this),
            Te(this, Re, void 0)));
      }
      isFetching(e) {
        return qe(this, me).findAll(ke(De({}, e), { fetchStatus: 'fetching' }))
          .length;
      }
      isMutating(e) {
        return qe(this, ve).findAll(ke(De({}, e), { status: 'pending' }))
          .length;
      }
      getQueryData(e) {
        var t;
        const n = this.defaultQueryOptions({ queryKey: e });
        return null == (t = qe(this, me).get(n.queryHash))
          ? void 0
          : t.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = qe(this, me).build(this, t),
          o = n.state.data;
        return void 0 === o
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              n.isStaleByTime(et(t.staleTime, n)) &&
              this.prefetchQuery(t),
            Promise.resolve(o));
      }
      getQueriesData(e) {
        return qe(this, me)
          .findAll(e)
          .map(({ queryKey: e, state: t }) => [e, t.data]);
      }
      setQueryData(e, t, n) {
        const o = this.defaultQueryOptions({ queryKey: e }),
          i = qe(this, me).get(o.queryHash),
          l = (function (e, t) {
            return 'function' == typeof e ? e(t) : e;
          })(t, null == i ? void 0 : i.state.data);
        if (void 0 !== l)
          return qe(this, me)
            .build(this, o)
            .setData(l, ke(De({}, n), { manual: !0 }));
      }
      setQueriesData(e, t, n) {
        return Rt.batch(() =>
          qe(this, me)
            .findAll(e)
            .map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)]),
        );
      }
      getQueryState(e) {
        var t;
        const n = this.defaultQueryOptions({ queryKey: e });
        return null == (t = qe(this, me).get(n.queryHash)) ? void 0 : t.state;
      }
      removeQueries(e) {
        const t = qe(this, me);
        Rt.batch(() => {
          t.findAll(e).forEach((e) => {
            t.remove(e);
          });
        });
      }
      resetQueries(e, t) {
        const n = qe(this, me);
        return Rt.batch(
          () => (
            n.findAll(e).forEach((e) => {
              e.reset();
            }),
            this.refetchQueries(De({ type: 'active' }, e), t)
          ),
        );
      }
      cancelQueries(e, t = {}) {
        const n = De({ revert: !0 }, t),
          o = Rt.batch(() =>
            qe(this, me)
              .findAll(e)
              .map((e) => e.cancel(n)),
          );
        return Promise.all(o).then(Je).catch(Je);
      }
      invalidateQueries(e, t = {}) {
        return Rt.batch(() => {
          var n, o;
          return (
            qe(this, me)
              .findAll(e)
              .forEach((e) => {
                e.invalidate();
              }),
            'none' === (null == e ? void 0 : e.refetchType)
              ? Promise.resolve()
              : this.refetchQueries(
                  ke(De({}, e), {
                    type:
                      null !=
                      (o =
                        null != (n = null == e ? void 0 : e.refetchType)
                          ? n
                          : null == e
                            ? void 0
                            : e.type)
                        ? o
                        : 'active',
                  }),
                  t,
                )
          );
        });
      }
      refetchQueries(e, t = {}) {
        var n;
        const o = ke(De({}, t), {
            cancelRefetch: null == (n = t.cancelRefetch) || n,
          }),
          i = Rt.batch(() =>
            qe(this, me)
              .findAll(e)
              .filter((e) => !e.isDisabled() && !e.isStatic())
              .map((e) => {
                let t = e.fetch(void 0, o);
                return (
                  o.throwOnError || (t = t.catch(Je)),
                  'paused' === e.state.fetchStatus ? Promise.resolve() : t
                );
              }),
          );
        return Promise.all(i).then(Je);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        void 0 === t.retry && (t.retry = !1);
        const n = qe(this, me).build(this, t);
        return n.isStaleByTime(et(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(Je).catch(Je);
      }
      fetchInfiniteQuery(e) {
        return ((e.behavior = qt(e.pages)), this.fetchQuery(e));
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Je).catch(Je);
      }
      ensureInfiniteQueryData(e) {
        return ((e.behavior = qt(e.pages)), this.ensureQueryData(e));
      }
      resumePausedMutations() {
        return Ft.isOnline()
          ? qe(this, ve).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return qe(this, me);
      }
      getMutationCache() {
        return qe(this, ve);
      }
      getDefaultOptions() {
        return qe(this, be);
      }
      setDefaultOptions(e) {
        Te(this, be, e);
      }
      setQueryDefaults(e, t) {
        qe(this, we).set(lt(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...qe(this, we).values()],
          n = {};
        return (
          t.forEach((t) => {
            st(e, t.queryKey) && Object.assign(n, t.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        qe(this, ye).set(lt(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...qe(this, ye).values()],
          n = {};
        return (
          t.forEach((t) => {
            st(e, t.mutationKey) && Object.assign(n, t.defaultOptions);
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = ke(
          De(
            De(De({}, qe(this, be).queries), this.getQueryDefaults(e.queryKey)),
            e,
          ),
          { _defaulted: !0 },
        );
        return (
          t.queryHash || (t.queryHash = it(t.queryKey, t)),
          void 0 === t.refetchOnReconnect &&
            (t.refetchOnReconnect = 'always' !== t.networkMode),
          void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = 'offlineFirst'),
          t.queryFn === vt && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return (null == e ? void 0 : e._defaulted)
          ? e
          : ke(
              De(
                De(
                  De({}, qe(this, be).mutations),
                  (null == e ? void 0 : e.mutationKey) &&
                    this.getMutationDefaults(e.mutationKey),
                ),
                e,
              ),
              { _defaulted: !0 },
            );
      }
      clear() {
        (qe(this, me).clear(), qe(this, ve).clear());
      }
    }),
    (me = new WeakMap()),
    (ve = new WeakMap()),
    (be = new WeakMap()),
    (we = new WeakMap()),
    (ye = new WeakMap()),
    (Se = new WeakMap()),
    (Ce = new WeakMap()),
    (Re = new WeakMap()),
    Fe),
  Nt = Be.createContext(void 0),
  $t = (e) => {
    const t = Be.useContext(Nt);
    if (e) return e;
    if (!t)
      throw new Error('No QueryClient set, use QueryClientProvider to set one');
    return t;
  },
  Xt = ({ client: e, children: t }) => (
    Be.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    Qe.jsx(Nt.Provider, { value: e, children: t })
  ),
  Jt = Be.createContext(!1);
Jt.Provider;
var Yt = Be.createContext(
    (function () {
      let e = !1;
      return {
        clearReset: () => {
          e = !1;
        },
        reset: () => {
          e = !0;
        },
        isReset: () => e,
      };
    })(),
  ),
  Zt = (e, t, n) =>
    t.fetchOptimistic(e).catch(() => {
      n.clearReset();
    });
function en(e, t, n) {
  var o, i, l, s, r;
  const a = Be.useContext(Jt),
    u = Be.useContext(Yt),
    d = $t(n),
    c = d.defaultQueryOptions(e);
  (null ==
    (i =
      null == (o = d.getDefaultOptions().queries)
        ? void 0
        : o._experimental_beforeQuery) || i.call(o, c),
    (c._optimisticResults = a ? 'isRestoring' : 'optimistic'),
    ((e) => {
      if (e.suspense) {
        const t = 1e3,
          n = (e) => ('static' === e ? e : Math.max(null != e ? e : t, t)),
          o = e.staleTime;
        ((e.staleTime = 'function' == typeof o ? (...e) => n(o(...e)) : n(o)),
          'number' == typeof e.gcTime && (e.gcTime = Math.max(e.gcTime, t)));
      }
    })(c),
    ((e, t) => {
      (e.suspense || e.throwOnError || e.experimental_prefetchInRender) &&
        (t.isReset() || (e.retryOnMount = !1));
    })(c, u),
    ((e) => {
      Be.useEffect(() => {
        e.clearReset();
      }, [e]);
    })(u));
  const g = !d.getQueryCache().get(c.queryHash),
    [h] = Be.useState(() => new t(d, c)),
    p = h.getOptimisticResult(c),
    f = !a && !1 !== e.subscribed;
  if (
    (Be.useSyncExternalStore(
      Be.useCallback(
        (e) => {
          const t = f ? h.subscribe(Rt.batchCalls(e)) : Je;
          return (h.updateResult(), t);
        },
        [h, f],
      ),
      () => h.getCurrentResult(),
      () => h.getCurrentResult(),
    ),
    Be.useEffect(() => {
      h.setOptions(c);
    }, [c, h]),
    ((e, t) => (null == e ? void 0 : e.suspense) && t.isPending)(c, p))
  )
    throw Zt(c, h, u);
  if (
    (({
      result: e,
      errorResetBoundary: t,
      throwOnError: n,
      query: o,
      suspense: i,
    }) =>
      e.isError &&
      !t.isReset() &&
      !e.isFetching &&
      o &&
      ((i && void 0 === e.data) || wt(n, [e.error, o])))({
      result: p,
      errorResetBoundary: u,
      throwOnError: c.throwOnError,
      query: d.getQueryCache().get(c.queryHash),
      suspense: c.suspense,
    })
  )
    throw p.error;
  if (
    (null ==
      (s =
        null == (l = d.getDefaultOptions().queries)
          ? void 0
          : l._experimental_afterQuery) || s.call(l, c, p),
    c.experimental_prefetchInRender &&
      !Xe &&
      ((e, t) => e.isLoading && e.isFetching && !t)(p, a))
  ) {
    const e = g
      ? Zt(c, h, u)
      : null == (r = d.getQueryCache().get(c.queryHash))
        ? void 0
        : r.promise;
    null == e ||
      e.catch(Je).finally(() => {
        h.updateResult();
      });
  }
  return c.notifyOnChangeProps ? p : h.trackResult(p);
}
function tn(e, t) {
  return en(e, Dt, t);
}
function nn(e, t) {
  const n = $t(t);
  return ln({ filters: ke(De({}, e), { status: 'pending' }) }, n).length;
}
function on(e, t) {
  return e.findAll(t.filters).map((e) => (t.select ? t.select(e) : e.state));
}
function ln(e = {}, t) {
  const n = $t(t).getMutationCache(),
    o = Be.useRef(e),
    i = Be.useRef(null);
  return (
    null === i.current && (i.current = on(n, e)),
    Be.useEffect(() => {
      o.current = e;
    }),
    Be.useSyncExternalStore(
      Be.useCallback(
        (e) =>
          n.subscribe(() => {
            const t = at(i.current, on(n, o.current));
            i.current !== t && ((i.current = t), Rt.schedule(e));
          }),
        [n],
      ),
      () => i.current,
      () => i.current,
    )
  );
}
function sn(e, t) {
  const n = $t(t),
    [o] = Be.useState(() => new Bt(n, e));
  Be.useEffect(() => {
    o.setOptions(e);
  }, [o, e]);
  const i = Be.useSyncExternalStore(
      Be.useCallback((e) => o.subscribe(Rt.batchCalls(e)), [o]),
      () => o.getCurrentResult(),
      () => o.getCurrentResult(),
    ),
    l = Be.useCallback(
      (e, t) => {
        o.mutate(e, t).catch(Je);
      },
      [o],
    );
  if (i.error && wt(o.options.throwOnError, [i.error])) throw i.error;
  return ke(De({}, i), { mutate: l, mutateAsync: i.mutate });
}
function rn() {
  return {
    accessor: (e, t) =>
      ke(
        De({}, t),
        'function' == typeof e ? { accessorFn: e } : { accessorKey: e },
      ),
    display: (e) => e,
    group: (e) => e,
  };
}
function an(e, t) {
  return 'function' == typeof e ? e(t) : e;
}
function un(e, t) {
  return (n) => {
    t.setState((t) => ke(De({}, t), { [e]: an(n, t[e]) }));
  };
}
function dn(e) {
  return e instanceof Function;
}
function cn(e, t, n) {
  let o,
    i = [];
  return (l) => {
    let s;
    n.key && n.debug && (s = Date.now());
    const r = e(l);
    if (!(r.length !== i.length || r.some((e, t) => i[t] !== e))) return o;
    let a;
    if (
      ((i = r),
      n.key && n.debug && (a = Date.now()),
      (o = t(...r)),
      null == n || null == n.onChange || n.onChange(o),
      n.key && n.debug && null != n && n.debug())
    ) {
      (Math.round(100 * (Date.now() - s)), Math.round(100 * (Date.now() - a)));
    }
    return o;
  };
}
function gn(e, t, n, o) {
  return {
    debug: () => {
      var n;
      return null != (n = null == e ? void 0 : e.debugAll) ? n : e[t];
    },
    key: !1,
    onChange: o,
  };
}
const hn = 'debugHeaders';
function pn(e, t, n) {
  var o;
  let i = {
    id: null != (o = n.id) ? o : t.id,
    column: t,
    index: n.index,
    isPlaceholder: !!n.isPlaceholder,
    placeholderId: n.placeholderId,
    depth: n.depth,
    subHeaders: [],
    colSpan: 0,
    rowSpan: 0,
    headerGroup: null,
    getLeafHeaders: () => {
      const e = [],
        t = (n) => {
          (n.subHeaders && n.subHeaders.length && n.subHeaders.map(t),
            e.push(n));
        };
      return (t(i), e);
    },
    getContext: () => ({ table: e, header: i, column: t }),
  };
  return (
    e._features.forEach((t) => {
      null == t.createHeader || t.createHeader(i, e);
    }),
    i
  );
}
const fn = {
  createTable: (e) => {
    ((e.getHeaderGroups = cn(
      () => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right,
      ],
      (t, n, o, i) => {
        var l, s;
        const r =
            null !=
            (l =
              null == o
                ? void 0
                : o.map((e) => n.find((t) => t.id === e)).filter(Boolean))
              ? l
              : [],
          a =
            null !=
            (s =
              null == i
                ? void 0
                : i.map((e) => n.find((t) => t.id === e)).filter(Boolean))
              ? s
              : [];
        return mn(
          t,
          [
            ...r,
            ...n.filter(
              (e) =>
                !(
                  (null != o && o.includes(e.id)) ||
                  (null != i && i.includes(e.id))
                ),
            ),
            ...a,
          ],
          e,
        );
      },
      gn(e.options, hn),
    )),
      (e.getCenterHeaderGroups = cn(
        () => [
          e.getAllColumns(),
          e.getVisibleLeafColumns(),
          e.getState().columnPinning.left,
          e.getState().columnPinning.right,
        ],
        (t, n, o, i) =>
          mn(
            t,
            (n = n.filter(
              (e) =>
                !(
                  (null != o && o.includes(e.id)) ||
                  (null != i && i.includes(e.id))
                ),
            )),
            e,
            'center',
          ),
        gn(e.options, hn),
      )),
      (e.getLeftHeaderGroups = cn(
        () => [
          e.getAllColumns(),
          e.getVisibleLeafColumns(),
          e.getState().columnPinning.left,
        ],
        (t, n, o) => {
          var i;
          return mn(
            t,
            null !=
              (i =
                null == o
                  ? void 0
                  : o.map((e) => n.find((t) => t.id === e)).filter(Boolean))
              ? i
              : [],
            e,
            'left',
          );
        },
        gn(e.options, hn),
      )),
      (e.getRightHeaderGroups = cn(
        () => [
          e.getAllColumns(),
          e.getVisibleLeafColumns(),
          e.getState().columnPinning.right,
        ],
        (t, n, o) => {
          var i;
          return mn(
            t,
            null !=
              (i =
                null == o
                  ? void 0
                  : o.map((e) => n.find((t) => t.id === e)).filter(Boolean))
              ? i
              : [],
            e,
            'right',
          );
        },
        gn(e.options, hn),
      )),
      (e.getFooterGroups = cn(
        () => [e.getHeaderGroups()],
        (e) => [...e].reverse(),
        gn(e.options, hn),
      )),
      (e.getLeftFooterGroups = cn(
        () => [e.getLeftHeaderGroups()],
        (e) => [...e].reverse(),
        gn(e.options, hn),
      )),
      (e.getCenterFooterGroups = cn(
        () => [e.getCenterHeaderGroups()],
        (e) => [...e].reverse(),
        gn(e.options, hn),
      )),
      (e.getRightFooterGroups = cn(
        () => [e.getRightHeaderGroups()],
        (e) => [...e].reverse(),
        gn(e.options, hn),
      )),
      (e.getFlatHeaders = cn(
        () => [e.getHeaderGroups()],
        (e) => e.map((e) => e.headers).flat(),
        gn(e.options, hn),
      )),
      (e.getLeftFlatHeaders = cn(
        () => [e.getLeftHeaderGroups()],
        (e) => e.map((e) => e.headers).flat(),
        gn(e.options, hn),
      )),
      (e.getCenterFlatHeaders = cn(
        () => [e.getCenterHeaderGroups()],
        (e) => e.map((e) => e.headers).flat(),
        gn(e.options, hn),
      )),
      (e.getRightFlatHeaders = cn(
        () => [e.getRightHeaderGroups()],
        (e) => e.map((e) => e.headers).flat(),
        gn(e.options, hn),
      )),
      (e.getCenterLeafHeaders = cn(
        () => [e.getCenterFlatHeaders()],
        (e) =>
          e.filter((e) => {
            var t;
            return !(null != (t = e.subHeaders) && t.length);
          }),
        gn(e.options, hn),
      )),
      (e.getLeftLeafHeaders = cn(
        () => [e.getLeftFlatHeaders()],
        (e) =>
          e.filter((e) => {
            var t;
            return !(null != (t = e.subHeaders) && t.length);
          }),
        gn(e.options, hn),
      )),
      (e.getRightLeafHeaders = cn(
        () => [e.getRightFlatHeaders()],
        (e) =>
          e.filter((e) => {
            var t;
            return !(null != (t = e.subHeaders) && t.length);
          }),
        gn(e.options, hn),
      )),
      (e.getLeafHeaders = cn(
        () => [
          e.getLeftHeaderGroups(),
          e.getCenterHeaderGroups(),
          e.getRightHeaderGroups(),
        ],
        (e, t, n) => {
          var o, i, l, s, r, a;
          return [
            ...(null != (o = null == (i = e[0]) ? void 0 : i.headers) ? o : []),
            ...(null != (l = null == (s = t[0]) ? void 0 : s.headers) ? l : []),
            ...(null != (r = null == (a = n[0]) ? void 0 : a.headers) ? r : []),
          ]
            .map((e) => e.getLeafHeaders())
            .flat();
        },
        gn(e.options, hn),
      )));
  },
};
function mn(e, t, n, o) {
  var i, l;
  let s = 0;
  const r = function (e, t) {
    (void 0 === t && (t = 1),
      (s = Math.max(s, t)),
      e
        .filter((e) => e.getIsVisible())
        .forEach((e) => {
          var n;
          null != (n = e.columns) && n.length && r(e.columns, t + 1);
        }, 0));
  };
  r(e);
  let a = [];
  const u = (e, t) => {
      const i = {
          depth: t,
          id: [o, `${t}`].filter(Boolean).join('_'),
          headers: [],
        },
        l = [];
      (e.forEach((e) => {
        const s = [...l].reverse()[0];
        let r,
          a = !1;
        if (
          (e.column.depth === i.depth && e.column.parent
            ? (r = e.column.parent)
            : ((r = e.column), (a = !0)),
          s && (null == s ? void 0 : s.column) === r)
        )
          s.subHeaders.push(e);
        else {
          const i = pn(n, r, {
            id: [o, t, r.id, null == e ? void 0 : e.id]
              .filter(Boolean)
              .join('_'),
            isPlaceholder: a,
            placeholderId: a
              ? `${l.filter((e) => e.column === r).length}`
              : void 0,
            depth: t,
            index: l.length,
          });
          (i.subHeaders.push(e), l.push(i));
        }
        (i.headers.push(e), (e.headerGroup = i));
      }),
        a.push(i),
        t > 0 && u(l, t - 1));
    },
    d = t.map((e, t) => pn(n, e, { depth: s, index: t }));
  (u(d, s - 1), a.reverse());
  const c = (e) =>
    e
      .filter((e) => e.column.getIsVisible())
      .map((e) => {
        let t = 0,
          n = 0,
          o = [0];
        e.subHeaders && e.subHeaders.length
          ? ((o = []),
            c(e.subHeaders).forEach((e) => {
              let { colSpan: n, rowSpan: i } = e;
              ((t += n), o.push(i));
            }))
          : (t = 1);
        return (
          (n += Math.min(...o)),
          (e.colSpan = t),
          (e.rowSpan = n),
          { colSpan: t, rowSpan: n }
        );
      });
  return (c(null != (i = null == (l = a[0]) ? void 0 : l.headers) ? i : []), a);
}
const vn = (e, t, n, o, i, l, s) => {
    let r = {
      id: t,
      index: o,
      original: n,
      depth: i,
      parentId: s,
      _valuesCache: {},
      _uniqueValuesCache: {},
      getValue: (t) => {
        if (r._valuesCache.hasOwnProperty(t)) return r._valuesCache[t];
        const n = e.getColumn(t);
        return null != n && n.accessorFn
          ? ((r._valuesCache[t] = n.accessorFn(r.original, o)),
            r._valuesCache[t])
          : void 0;
      },
      getUniqueValues: (t) => {
        if (r._uniqueValuesCache.hasOwnProperty(t))
          return r._uniqueValuesCache[t];
        const n = e.getColumn(t);
        return null != n && n.accessorFn
          ? n.columnDef.getUniqueValues
            ? ((r._uniqueValuesCache[t] = n.columnDef.getUniqueValues(
                r.original,
                o,
              )),
              r._uniqueValuesCache[t])
            : ((r._uniqueValuesCache[t] = [r.getValue(t)]),
              r._uniqueValuesCache[t])
          : void 0;
      },
      renderValue: (t) => {
        var n;
        return null != (n = r.getValue(t)) ? n : e.options.renderFallbackValue;
      },
      subRows: [],
      getLeafRows: () =>
        (function (e, t) {
          const n = [],
            o = (e) => {
              e.forEach((e) => {
                n.push(e);
                const i = t(e);
                null != i && i.length && o(i);
              });
            };
          return (o(e), n);
        })(r.subRows, (e) => e.subRows),
      getParentRow: () => (r.parentId ? e.getRow(r.parentId, !0) : void 0),
      getParentRows: () => {
        let e = [],
          t = r;
        for (;;) {
          const n = t.getParentRow();
          if (!n) break;
          (e.push(n), (t = n));
        }
        return e.reverse();
      },
      getAllCells: cn(
        () => [e.getAllLeafColumns()],
        (t) =>
          t.map((t) =>
            (function (e, t, n, o) {
              const i = {
                id: `${t.id}_${n.id}`,
                row: t,
                column: n,
                getValue: () => t.getValue(o),
                renderValue: () => {
                  var t;
                  return null != (t = i.getValue())
                    ? t
                    : e.options.renderFallbackValue;
                },
                getContext: cn(
                  () => [e, n, t, i],
                  (e, t, n, o) => ({
                    table: e,
                    column: t,
                    row: n,
                    cell: o,
                    getValue: o.getValue,
                    renderValue: o.renderValue,
                  }),
                  gn(e.options, 'debugCells'),
                ),
              };
              return (
                e._features.forEach((o) => {
                  null == o.createCell || o.createCell(i, n, t, e);
                }, {}),
                i
              );
            })(e, r, t, t.id),
          ),
        gn(e.options, 'debugRows'),
      ),
      _getAllCellsByColumnId: cn(
        () => [r.getAllCells()],
        (e) => e.reduce((e, t) => ((e[t.column.id] = t), e), {}),
        gn(e.options, 'debugRows'),
      ),
    };
    for (let a = 0; a < e._features.length; a++) {
      const t = e._features[a];
      null == t || null == t.createRow || t.createRow(r, e);
    }
    return r;
  },
  bn = {
    createColumn: (e, t) => {
      ((e._getFacetedRowModel =
        t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id)),
        (e.getFacetedRowModel = () =>
          e._getFacetedRowModel
            ? e._getFacetedRowModel()
            : t.getPreFilteredRowModel()),
        (e._getFacetedUniqueValues =
          t.options.getFacetedUniqueValues &&
          t.options.getFacetedUniqueValues(t, e.id)),
        (e.getFacetedUniqueValues = () =>
          e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : new Map()),
        (e._getFacetedMinMaxValues =
          t.options.getFacetedMinMaxValues &&
          t.options.getFacetedMinMaxValues(t, e.id)),
        (e.getFacetedMinMaxValues = () => {
          if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues();
        }));
    },
  },
  wn = (e, t, n) => {
    var o, i;
    const l =
      null == n || null == (o = n.toString()) ? void 0 : o.toLowerCase();
    return Boolean(
      null == (i = e.getValue(t)) ||
        null == (i = i.toString()) ||
        null == (i = i.toLowerCase())
        ? void 0
        : i.includes(l),
    );
  };
wn.autoRemove = (e) => On(e);
const yn = (e, t, n) => {
  var o;
  return Boolean(
    null == (o = e.getValue(t)) || null == (o = o.toString())
      ? void 0
      : o.includes(n),
  );
};
yn.autoRemove = (e) => On(e);
const Sn = (e, t, n) => {
  var o;
  return (
    (null == (o = e.getValue(t)) || null == (o = o.toString())
      ? void 0
      : o.toLowerCase()) === (null == n ? void 0 : n.toLowerCase())
  );
};
Sn.autoRemove = (e) => On(e);
const Cn = (e, t, n) => {
  var o;
  return null == (o = e.getValue(t)) ? void 0 : o.includes(n);
};
Cn.autoRemove = (e) => On(e);
const Rn = (e, t, n) =>
  !n.some((n) => {
    var o;
    return !(null != (o = e.getValue(t)) && o.includes(n));
  });
Rn.autoRemove = (e) => On(e) || !(null != e && e.length);
const Fn = (e, t, n) =>
  n.some((n) => {
    var o;
    return null == (o = e.getValue(t)) ? void 0 : o.includes(n);
  });
Fn.autoRemove = (e) => On(e) || !(null != e && e.length);
const Mn = (e, t, n) => e.getValue(t) === n;
Mn.autoRemove = (e) => On(e);
const Pn = (e, t, n) => e.getValue(t) == n;
Pn.autoRemove = (e) => On(e);
const xn = (e, t, n) => {
  let [o, i] = n;
  const l = e.getValue(t);
  return l >= o && l <= i;
};
((xn.resolveFilterValue = (e) => {
  let [t, n] = e,
    o = 'number' != typeof t ? parseFloat(t) : t,
    i = 'number' != typeof n ? parseFloat(n) : n,
    l = null === t || Number.isNaN(o) ? -1 / 0 : o,
    s = null === n || Number.isNaN(i) ? 1 / 0 : i;
  if (l > s) {
    const e = l;
    ((l = s), (s = e));
  }
  return [l, s];
}),
  (xn.autoRemove = (e) => On(e) || (On(e[0]) && On(e[1]))));
const In = {
  includesString: wn,
  includesStringSensitive: yn,
  equalsString: Sn,
  arrIncludes: Cn,
  arrIncludesAll: Rn,
  arrIncludesSome: Fn,
  equals: Mn,
  weakEquals: Pn,
  inNumberRange: xn,
};
function On(e) {
  return null == e || '' === e;
}
const En = {
  getDefaultColumnDef: () => ({ filterFn: 'auto' }),
  getInitialState: (e) => De({ columnFilters: [] }, e),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: un('columnFilters', e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100,
  }),
  createColumn: (e, t) => {
    ((e.getAutoFilterFn = () => {
      const n = t.getCoreRowModel().flatRows[0],
        o = null == n ? void 0 : n.getValue(e.id);
      return 'string' == typeof o
        ? In.includesString
        : 'number' == typeof o
          ? In.inNumberRange
          : 'boolean' == typeof o || (null !== o && 'object' == typeof o)
            ? In.equals
            : Array.isArray(o)
              ? In.arrIncludes
              : In.weakEquals;
    }),
      (e.getFilterFn = () => {
        var n, o;
        return dn(e.columnDef.filterFn)
          ? e.columnDef.filterFn
          : 'auto' === e.columnDef.filterFn
            ? e.getAutoFilterFn()
            : null !=
                (n =
                  null == (o = t.options.filterFns)
                    ? void 0
                    : o[e.columnDef.filterFn])
              ? n
              : In[e.columnDef.filterFn];
      }),
      (e.getCanFilter = () => {
        var n, o, i;
        return (
          (null == (n = e.columnDef.enableColumnFilter) || n) &&
          (null == (o = t.options.enableColumnFilters) || o) &&
          (null == (i = t.options.enableFilters) || i) &&
          !!e.accessorFn
        );
      }),
      (e.getIsFiltered = () => e.getFilterIndex() > -1),
      (e.getFilterValue = () => {
        var n;
        return null == (n = t.getState().columnFilters) ||
          null == (n = n.find((t) => t.id === e.id))
          ? void 0
          : n.value;
      }),
      (e.getFilterIndex = () => {
        var n, o;
        return null !=
          (n =
            null == (o = t.getState().columnFilters)
              ? void 0
              : o.findIndex((t) => t.id === e.id))
          ? n
          : -1;
      }),
      (e.setFilterValue = (n) => {
        t.setColumnFilters((t) => {
          const o = e.getFilterFn(),
            i = null == t ? void 0 : t.find((t) => t.id === e.id),
            l = an(n, i ? i.value : void 0);
          var s;
          if (Vn(o, l, e))
            return null !=
              (s = null == t ? void 0 : t.filter((t) => t.id !== e.id))
              ? s
              : [];
          const r = { id: e.id, value: l };
          var a;
          return i
            ? null !=
              (a = null == t ? void 0 : t.map((t) => (t.id === e.id ? r : t)))
              ? a
              : []
            : null != t && t.length
              ? [...t, r]
              : [r];
        });
      }));
  },
  createRow: (e, t) => {
    ((e.columnFilters = {}), (e.columnFiltersMeta = {}));
  },
  createTable: (e) => {
    ((e.setColumnFilters = (t) => {
      const n = e.getAllLeafColumns();
      null == e.options.onColumnFiltersChange ||
        e.options.onColumnFiltersChange((e) => {
          var o;
          return null == (o = an(t, e))
            ? void 0
            : o.filter((e) => {
                const t = n.find((t) => t.id === e.id);
                if (t) {
                  if (Vn(t.getFilterFn(), e.value, t)) return !1;
                }
                return !0;
              });
        });
    }),
      (e.resetColumnFilters = (t) => {
        var n, o;
        e.setColumnFilters(
          t
            ? []
            : null !=
                (n = null == (o = e.initialState) ? void 0 : o.columnFilters)
              ? n
              : [],
        );
      }),
      (e.getPreFilteredRowModel = () => e.getCoreRowModel()),
      (e.getFilteredRowModel = () => (
        !e._getFilteredRowModel &&
          e.options.getFilteredRowModel &&
          (e._getFilteredRowModel = e.options.getFilteredRowModel(e)),
        e.options.manualFiltering || !e._getFilteredRowModel
          ? e.getPreFilteredRowModel()
          : e._getFilteredRowModel()
      )));
  },
};
function Vn(e, t, n) {
  return (
    (!(!e || !e.autoRemove) && e.autoRemove(t, n)) ||
    void 0 === t ||
    ('string' == typeof t && !t)
  );
}
const _n = {
    sum: (e, t, n) =>
      n.reduce((t, n) => {
        const o = n.getValue(e);
        return t + ('number' == typeof o ? o : 0);
      }, 0),
    min: (e, t, n) => {
      let o;
      return (
        n.forEach((t) => {
          const n = t.getValue(e);
          null != n && (o > n || (void 0 === o && n >= n)) && (o = n);
        }),
        o
      );
    },
    max: (e, t, n) => {
      let o;
      return (
        n.forEach((t) => {
          const n = t.getValue(e);
          null != n && (o < n || (void 0 === o && n >= n)) && (o = n);
        }),
        o
      );
    },
    extent: (e, t, n) => {
      let o, i;
      return (
        n.forEach((t) => {
          const n = t.getValue(e);
          null != n &&
            (void 0 === o
              ? n >= n && (o = i = n)
              : (o > n && (o = n), i < n && (i = n)));
        }),
        [o, i]
      );
    },
    mean: (e, t) => {
      let n = 0,
        o = 0;
      if (
        (t.forEach((t) => {
          let i = t.getValue(e);
          null != i && (i = +i) >= i && (++n, (o += i));
        }),
        n)
      )
        return o / n;
    },
    median: (e, t) => {
      if (!t.length) return;
      const n = t.map((t) => t.getValue(e));
      if (((o = n), !Array.isArray(o) || !o.every((e) => 'number' == typeof e)))
        return;
      var o;
      if (1 === n.length) return n[0];
      const i = Math.floor(n.length / 2),
        l = n.sort((e, t) => e - t);
      return n.length % 2 != 0 ? l[i] : (l[i - 1] + l[i]) / 2;
    },
    unique: (e, t) => Array.from(new Set(t.map((t) => t.getValue(e))).values()),
    uniqueCount: (e, t) => new Set(t.map((t) => t.getValue(e))).size,
    count: (e, t) => t.length,
  },
  An = {
    getDefaultColumnDef: () => ({
      aggregatedCell: (e) => {
        var t, n;
        return null !=
          (t =
            null == (n = e.getValue()) || null == n.toString
              ? void 0
              : n.toString())
          ? t
          : null;
      },
      aggregationFn: 'auto',
    }),
    getInitialState: (e) => De({ grouping: [] }, e),
    getDefaultOptions: (e) => ({
      onGroupingChange: un('grouping', e),
      groupedColumnMode: 'reorder',
    }),
    createColumn: (e, t) => {
      ((e.toggleGrouping = () => {
        t.setGrouping((t) =>
          null != t && t.includes(e.id)
            ? t.filter((t) => t !== e.id)
            : [...(null != t ? t : []), e.id],
        );
      }),
        (e.getCanGroup = () => {
          var n, o;
          return (
            (null == (n = e.columnDef.enableGrouping) || n) &&
            (null == (o = t.options.enableGrouping) || o) &&
            (!!e.accessorFn || !!e.columnDef.getGroupingValue)
          );
        }),
        (e.getIsGrouped = () => {
          var n;
          return null == (n = t.getState().grouping)
            ? void 0
            : n.includes(e.id);
        }),
        (e.getGroupedIndex = () => {
          var n;
          return null == (n = t.getState().grouping) ? void 0 : n.indexOf(e.id);
        }),
        (e.getToggleGroupingHandler = () => {
          const t = e.getCanGroup();
          return () => {
            t && e.toggleGrouping();
          };
        }),
        (e.getAutoAggregationFn = () => {
          const n = t.getCoreRowModel().flatRows[0],
            o = null == n ? void 0 : n.getValue(e.id);
          return 'number' == typeof o
            ? _n.sum
            : '[object Date]' === Object.prototype.toString.call(o)
              ? _n.extent
              : void 0;
        }),
        (e.getAggregationFn = () => {
          var n, o;
          if (!e) throw new Error();
          return dn(e.columnDef.aggregationFn)
            ? e.columnDef.aggregationFn
            : 'auto' === e.columnDef.aggregationFn
              ? e.getAutoAggregationFn()
              : null !=
                  (n =
                    null == (o = t.options.aggregationFns)
                      ? void 0
                      : o[e.columnDef.aggregationFn])
                ? n
                : _n[e.columnDef.aggregationFn];
        }));
    },
    createTable: (e) => {
      ((e.setGrouping = (t) =>
        null == e.options.onGroupingChange
          ? void 0
          : e.options.onGroupingChange(t)),
        (e.resetGrouping = (t) => {
          var n, o;
          e.setGrouping(
            t
              ? []
              : null != (n = null == (o = e.initialState) ? void 0 : o.grouping)
                ? n
                : [],
          );
        }),
        (e.getPreGroupedRowModel = () => e.getFilteredRowModel()),
        (e.getGroupedRowModel = () => (
          !e._getGroupedRowModel &&
            e.options.getGroupedRowModel &&
            (e._getGroupedRowModel = e.options.getGroupedRowModel(e)),
          e.options.manualGrouping || !e._getGroupedRowModel
            ? e.getPreGroupedRowModel()
            : e._getGroupedRowModel()
        )));
    },
    createRow: (e, t) => {
      ((e.getIsGrouped = () => !!e.groupingColumnId),
        (e.getGroupingValue = (n) => {
          if (e._groupingValuesCache.hasOwnProperty(n))
            return e._groupingValuesCache[n];
          const o = t.getColumn(n);
          return null != o && o.columnDef.getGroupingValue
            ? ((e._groupingValuesCache[n] = o.columnDef.getGroupingValue(
                e.original,
              )),
              e._groupingValuesCache[n])
            : e.getValue(n);
        }),
        (e._groupingValuesCache = {}));
    },
    createCell: (e, t, n, o) => {
      ((e.getIsGrouped = () => t.getIsGrouped() && t.id === n.groupingColumnId),
        (e.getIsPlaceholder = () => !e.getIsGrouped() && t.getIsGrouped()),
        (e.getIsAggregated = () => {
          var t;
          return (
            !e.getIsGrouped() &&
            !e.getIsPlaceholder() &&
            !(null == (t = n.subRows) || !t.length)
          );
        }));
    },
  };
const Dn = {
    getInitialState: (e) => De({ columnOrder: [] }, e),
    getDefaultOptions: (e) => ({ onColumnOrderChange: un('columnOrder', e) }),
    createColumn: (e, t) => {
      ((e.getIndex = cn(
        (e) => [zn(t, e)],
        (t) => t.findIndex((t) => t.id === e.id),
        gn(t.options, 'debugColumns'),
      )),
        (e.getIsFirstColumn = (n) => {
          var o;
          return (null == (o = zn(t, n)[0]) ? void 0 : o.id) === e.id;
        }),
        (e.getIsLastColumn = (n) => {
          var o;
          const i = zn(t, n);
          return (null == (o = i[i.length - 1]) ? void 0 : o.id) === e.id;
        }));
    },
    createTable: (e) => {
      ((e.setColumnOrder = (t) =>
        null == e.options.onColumnOrderChange
          ? void 0
          : e.options.onColumnOrderChange(t)),
        (e.resetColumnOrder = (t) => {
          var n;
          e.setColumnOrder(
            t ? [] : null != (n = e.initialState.columnOrder) ? n : [],
          );
        }),
        (e._getOrderColumnsFn = cn(
          () => [
            e.getState().columnOrder,
            e.getState().grouping,
            e.options.groupedColumnMode,
          ],
          (e, t, n) => (o) => {
            let i = [];
            if (null != e && e.length) {
              const t = [...e],
                n = [...o];
              for (; n.length && t.length; ) {
                const e = t.shift(),
                  o = n.findIndex((t) => t.id === e);
                o > -1 && i.push(n.splice(o, 1)[0]);
              }
              i = [...i, ...n];
            } else i = o;
            return (function (e, t, n) {
              if (null == t || !t.length || !n) return e;
              const o = e.filter((e) => !t.includes(e.id));
              return 'remove' === n
                ? o
                : [
                    ...t.map((t) => e.find((e) => e.id === t)).filter(Boolean),
                    ...o,
                  ];
            })(i, t, n);
          },
          gn(e.options, 'debugTable'),
        )));
    },
  },
  kn = {
    getInitialState: (e) => De({ columnPinning: { left: [], right: [] } }, e),
    getDefaultOptions: (e) => ({
      onColumnPinningChange: un('columnPinning', e),
    }),
    createColumn: (e, t) => {
      ((e.pin = (n) => {
        const o = e
          .getLeafColumns()
          .map((e) => e.id)
          .filter(Boolean);
        t.setColumnPinning((e) => {
          var t, i, l, s, r, a;
          return 'right' === n
            ? {
                left: (null != (l = null == e ? void 0 : e.left)
                  ? l
                  : []
                ).filter((e) => !(null != o && o.includes(e))),
                right: [
                  ...(null != (s = null == e ? void 0 : e.right)
                    ? s
                    : []
                  ).filter((e) => !(null != o && o.includes(e))),
                  ...o,
                ],
              }
            : 'left' === n
              ? {
                  left: [
                    ...(null != (r = null == e ? void 0 : e.left)
                      ? r
                      : []
                    ).filter((e) => !(null != o && o.includes(e))),
                    ...o,
                  ],
                  right: (null != (a = null == e ? void 0 : e.right)
                    ? a
                    : []
                  ).filter((e) => !(null != o && o.includes(e))),
                }
              : {
                  left: (null != (t = null == e ? void 0 : e.left)
                    ? t
                    : []
                  ).filter((e) => !(null != o && o.includes(e))),
                  right: (null != (i = null == e ? void 0 : e.right)
                    ? i
                    : []
                  ).filter((e) => !(null != o && o.includes(e))),
                };
        });
      }),
        (e.getCanPin = () =>
          e.getLeafColumns().some((e) => {
            var n, o, i;
            return (
              (null == (n = e.columnDef.enablePinning) || n) &&
              (null ==
                (o =
                  null != (i = t.options.enableColumnPinning)
                    ? i
                    : t.options.enablePinning) ||
                o)
            );
          })),
        (e.getIsPinned = () => {
          const n = e.getLeafColumns().map((e) => e.id),
            { left: o, right: i } = t.getState().columnPinning,
            l = n.some((e) => (null == o ? void 0 : o.includes(e))),
            s = n.some((e) => (null == i ? void 0 : i.includes(e)));
          return l ? 'left' : !!s && 'right';
        }),
        (e.getPinnedIndex = () => {
          var n, o;
          const i = e.getIsPinned();
          return i
            ? null !=
              (n =
                null == (o = t.getState().columnPinning) || null == (o = o[i])
                  ? void 0
                  : o.indexOf(e.id))
              ? n
              : -1
            : 0;
        }));
    },
    createRow: (e, t) => {
      ((e.getCenterVisibleCells = cn(
        () => [
          e._getAllVisibleCells(),
          t.getState().columnPinning.left,
          t.getState().columnPinning.right,
        ],
        (e, t, n) => {
          const o = [...(null != t ? t : []), ...(null != n ? n : [])];
          return e.filter((e) => !o.includes(e.column.id));
        },
        gn(t.options, 'debugRows'),
      )),
        (e.getLeftVisibleCells = cn(
          () => [e._getAllVisibleCells(), t.getState().columnPinning.left],
          (e, t) =>
            (null != t ? t : [])
              .map((t) => e.find((e) => e.column.id === t))
              .filter(Boolean)
              .map((e) => ke(De({}, e), { position: 'left' })),
          gn(t.options, 'debugRows'),
        )),
        (e.getRightVisibleCells = cn(
          () => [e._getAllVisibleCells(), t.getState().columnPinning.right],
          (e, t) =>
            (null != t ? t : [])
              .map((t) => e.find((e) => e.column.id === t))
              .filter(Boolean)
              .map((e) => ke(De({}, e), { position: 'right' })),
          gn(t.options, 'debugRows'),
        )));
    },
    createTable: (e) => {
      ((e.setColumnPinning = (t) =>
        null == e.options.onColumnPinningChange
          ? void 0
          : e.options.onColumnPinningChange(t)),
        (e.resetColumnPinning = (t) => {
          var n, o;
          return e.setColumnPinning(
            t
              ? { left: [], right: [] }
              : null !=
                  (n = null == (o = e.initialState) ? void 0 : o.columnPinning)
                ? n
                : { left: [], right: [] },
          );
        }),
        (e.getIsSomeColumnsPinned = (t) => {
          var n;
          const o = e.getState().columnPinning;
          var i, l;
          return t
            ? Boolean(null == (n = o[t]) ? void 0 : n.length)
            : Boolean(
                (null == (i = o.left) ? void 0 : i.length) ||
                (null == (l = o.right) ? void 0 : l.length),
              );
        }),
        (e.getLeftLeafColumns = cn(
          () => [e.getAllLeafColumns(), e.getState().columnPinning.left],
          (e, t) =>
            (null != t ? t : [])
              .map((t) => e.find((e) => e.id === t))
              .filter(Boolean),
          gn(e.options, 'debugColumns'),
        )),
        (e.getRightLeafColumns = cn(
          () => [e.getAllLeafColumns(), e.getState().columnPinning.right],
          (e, t) =>
            (null != t ? t : [])
              .map((t) => e.find((e) => e.id === t))
              .filter(Boolean),
          gn(e.options, 'debugColumns'),
        )),
        (e.getCenterLeafColumns = cn(
          () => [
            e.getAllLeafColumns(),
            e.getState().columnPinning.left,
            e.getState().columnPinning.right,
          ],
          (e, t, n) => {
            const o = [...(null != t ? t : []), ...(null != n ? n : [])];
            return e.filter((e) => !o.includes(e.id));
          },
          gn(e.options, 'debugColumns'),
        )));
    },
  };
const Gn = { size: 150, minSize: 20, maxSize: Number.MAX_SAFE_INTEGER },
  Ln = {
    getDefaultColumnDef: () => Gn,
    getInitialState: (e) =>
      De(
        {
          columnSizing: {},
          columnSizingInfo: {
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            isResizingColumn: !1,
            columnSizingStart: [],
          },
        },
        e,
      ),
    getDefaultOptions: (e) => ({
      columnResizeMode: 'onEnd',
      columnResizeDirection: 'ltr',
      onColumnSizingChange: un('columnSizing', e),
      onColumnSizingInfoChange: un('columnSizingInfo', e),
    }),
    createColumn: (e, t) => {
      ((e.getSize = () => {
        var n, o, i;
        const l = t.getState().columnSizing[e.id];
        return Math.min(
          Math.max(
            null != (n = e.columnDef.minSize) ? n : Gn.minSize,
            null != (o = null != l ? l : e.columnDef.size) ? o : Gn.size,
          ),
          null != (i = e.columnDef.maxSize) ? i : Gn.maxSize,
        );
      }),
        (e.getStart = cn(
          (e) => [e, zn(t, e), t.getState().columnSizing],
          (t, n) =>
            n.slice(0, e.getIndex(t)).reduce((e, t) => e + t.getSize(), 0),
          gn(t.options, 'debugColumns'),
        )),
        (e.getAfter = cn(
          (e) => [e, zn(t, e), t.getState().columnSizing],
          (t, n) =>
            n.slice(e.getIndex(t) + 1).reduce((e, t) => e + t.getSize(), 0),
          gn(t.options, 'debugColumns'),
        )),
        (e.resetSize = () => {
          t.setColumnSizing((t) => {
            var n;
            let o = t,
              { [(n = e.id)]: i } = o;
            return Le(o, [Ge(n)]);
          });
        }),
        (e.getCanResize = () => {
          var n, o;
          return (
            (null == (n = e.columnDef.enableResizing) || n) &&
            (null == (o = t.options.enableColumnResizing) || o)
          );
        }),
        (e.getIsResizing = () =>
          t.getState().columnSizingInfo.isResizingColumn === e.id));
    },
    createHeader: (e, t) => {
      ((e.getSize = () => {
        let t = 0;
        const n = (e) => {
          var o;
          e.subHeaders.length
            ? e.subHeaders.forEach(n)
            : (t += null != (o = e.column.getSize()) ? o : 0);
        };
        return (n(e), t);
      }),
        (e.getStart = () => {
          if (e.index > 0) {
            const t = e.headerGroup.headers[e.index - 1];
            return t.getStart() + t.getSize();
          }
          return 0;
        }),
        (e.getResizeHandler = (n) => {
          const o = t.getColumn(e.column.id),
            i = null == o ? void 0 : o.getCanResize();
          return (l) => {
            if (!o || !i) return;
            if (
              (null == l.persist || l.persist(),
              qn(l) && l.touches && l.touches.length > 1)
            )
              return;
            const s = e.getSize(),
              r = e
                ? e
                    .getLeafHeaders()
                    .map((e) => [e.column.id, e.column.getSize()])
                : [[o.id, o.getSize()]],
              a = qn(l) ? Math.round(l.touches[0].clientX) : l.clientX,
              u = {},
              d = (e, n) => {
                'number' == typeof n &&
                  (t.setColumnSizingInfo((e) => {
                    var o, i;
                    const l =
                        'rtl' === t.options.columnResizeDirection ? -1 : 1,
                      s =
                        (n -
                          (null != (o = null == e ? void 0 : e.startOffset)
                            ? o
                            : 0)) *
                        l,
                      r = Math.max(
                        s /
                          (null != (i = null == e ? void 0 : e.startSize)
                            ? i
                            : 0),
                        -0.999999,
                      );
                    return (
                      e.columnSizingStart.forEach((e) => {
                        let [t, n] = e;
                        u[t] = Math.round(100 * Math.max(n + n * r, 0)) / 100;
                      }),
                      ke(De({}, e), { deltaOffset: s, deltaPercentage: r })
                    );
                  }),
                  ('onChange' !== t.options.columnResizeMode && 'end' !== e) ||
                    t.setColumnSizing((e) => De(De({}, e), u)));
              },
              c = (e) => d('move', e),
              g = (e) => {
                (d('end', e),
                  t.setColumnSizingInfo((e) =>
                    ke(De({}, e), {
                      isResizingColumn: !1,
                      startOffset: null,
                      startSize: null,
                      deltaOffset: null,
                      deltaPercentage: null,
                      columnSizingStart: [],
                    }),
                  ));
              },
              h = n || ('undefined' != typeof document ? document : null);
            const p = {
                moveHandler: (e) => c(e.clientX),
                upHandler: (e) => {
                  (null == h ||
                    h.removeEventListener('mousemove', p.moveHandler),
                    null == h || h.removeEventListener('mouseup', p.upHandler),
                    g(e.clientX));
                },
              },
              f = {
                moveHandler: (e) => (
                  e.cancelable && (e.preventDefault(), e.stopPropagation()),
                  c(e.touches[0].clientX),
                  !1
                ),
                upHandler: (e) => {
                  var t;
                  (null == h ||
                    h.removeEventListener('touchmove', f.moveHandler),
                    null == h || h.removeEventListener('touchend', f.upHandler),
                    e.cancelable && (e.preventDefault(), e.stopPropagation()),
                    g(null == (t = e.touches[0]) ? void 0 : t.clientX));
                },
              },
              m = !!(function () {
                if ('boolean' == typeof Hn) return Hn;
                let e = !1;
                try {
                  const t = {
                      get passive() {
                        return ((e = !0), !1);
                      },
                    },
                    n = () => {};
                  (window.addEventListener('test', n, t),
                    window.removeEventListener('test', n));
                } catch (t) {
                  e = !1;
                }
                return ((Hn = e), Hn);
              })() && { passive: !1 };
            (qn(l)
              ? (null == h || h.addEventListener('touchmove', f.moveHandler, m),
                null == h || h.addEventListener('touchend', f.upHandler, m))
              : (null == h || h.addEventListener('mousemove', p.moveHandler, m),
                null == h || h.addEventListener('mouseup', p.upHandler, m)),
              t.setColumnSizingInfo((e) =>
                ke(De({}, e), {
                  startOffset: a,
                  startSize: s,
                  deltaOffset: 0,
                  deltaPercentage: 0,
                  columnSizingStart: r,
                  isResizingColumn: o.id,
                }),
              ));
          };
        }));
    },
    createTable: (e) => {
      ((e.setColumnSizing = (t) =>
        null == e.options.onColumnSizingChange
          ? void 0
          : e.options.onColumnSizingChange(t)),
        (e.setColumnSizingInfo = (t) =>
          null == e.options.onColumnSizingInfoChange
            ? void 0
            : e.options.onColumnSizingInfoChange(t)),
        (e.resetColumnSizing = (t) => {
          var n;
          e.setColumnSizing(
            t ? {} : null != (n = e.initialState.columnSizing) ? n : {},
          );
        }),
        (e.resetHeaderSizeInfo = (t) => {
          var n;
          e.setColumnSizingInfo(
            t
              ? {
                  startOffset: null,
                  startSize: null,
                  deltaOffset: null,
                  deltaPercentage: null,
                  isResizingColumn: !1,
                  columnSizingStart: [],
                }
              : null != (n = e.initialState.columnSizingInfo)
                ? n
                : {
                    startOffset: null,
                    startSize: null,
                    deltaOffset: null,
                    deltaPercentage: null,
                    isResizingColumn: !1,
                    columnSizingStart: [],
                  },
          );
        }),
        (e.getTotalSize = () => {
          var t, n;
          return null !=
            (t =
              null == (n = e.getHeaderGroups()[0])
                ? void 0
                : n.headers.reduce((e, t) => e + t.getSize(), 0))
            ? t
            : 0;
        }),
        (e.getLeftTotalSize = () => {
          var t, n;
          return null !=
            (t =
              null == (n = e.getLeftHeaderGroups()[0])
                ? void 0
                : n.headers.reduce((e, t) => e + t.getSize(), 0))
            ? t
            : 0;
        }),
        (e.getCenterTotalSize = () => {
          var t, n;
          return null !=
            (t =
              null == (n = e.getCenterHeaderGroups()[0])
                ? void 0
                : n.headers.reduce((e, t) => e + t.getSize(), 0))
            ? t
            : 0;
        }),
        (e.getRightTotalSize = () => {
          var t, n;
          return null !=
            (t =
              null == (n = e.getRightHeaderGroups()[0])
                ? void 0
                : n.headers.reduce((e, t) => e + t.getSize(), 0))
            ? t
            : 0;
        }));
    },
  };
let Hn = null;
function qn(e) {
  return 'touchstart' === e.type;
}
function zn(e, t) {
  return t
    ? 'center' === t
      ? e.getCenterVisibleLeafColumns()
      : 'left' === t
        ? e.getLeftVisibleLeafColumns()
        : e.getRightVisibleLeafColumns()
    : e.getVisibleLeafColumns();
}
const Tn = {
    getInitialState: (e) => De({ rowSelection: {} }, e),
    getDefaultOptions: (e) => ({
      onRowSelectionChange: un('rowSelection', e),
      enableRowSelection: !0,
      enableMultiRowSelection: !0,
      enableSubRowSelection: !0,
    }),
    createTable: (e) => {
      ((e.setRowSelection = (t) =>
        null == e.options.onRowSelectionChange
          ? void 0
          : e.options.onRowSelectionChange(t)),
        (e.resetRowSelection = (t) => {
          var n;
          return e.setRowSelection(
            t ? {} : null != (n = e.initialState.rowSelection) ? n : {},
          );
        }),
        (e.toggleAllRowsSelected = (t) => {
          e.setRowSelection((n) => {
            t = void 0 !== t ? t : !e.getIsAllRowsSelected();
            const o = De({}, n),
              i = e.getPreGroupedRowModel().flatRows;
            return (
              t
                ? i.forEach((e) => {
                    e.getCanSelect() && (o[e.id] = !0);
                  })
                : i.forEach((e) => {
                    delete o[e.id];
                  }),
              o
            );
          });
        }),
        (e.toggleAllPageRowsSelected = (t) =>
          e.setRowSelection((n) => {
            const o = void 0 !== t ? t : !e.getIsAllPageRowsSelected(),
              i = De({}, n);
            return (
              e.getRowModel().rows.forEach((t) => {
                jn(i, t.id, o, !0, e);
              }),
              i
            );
          })),
        (e.getPreSelectedRowModel = () => e.getCoreRowModel()),
        (e.getSelectedRowModel = cn(
          () => [e.getState().rowSelection, e.getCoreRowModel()],
          (t, n) =>
            Object.keys(t).length
              ? Un(e, n)
              : { rows: [], flatRows: [], rowsById: {} },
          gn(e.options, 'debugTable'),
        )),
        (e.getFilteredSelectedRowModel = cn(
          () => [e.getState().rowSelection, e.getFilteredRowModel()],
          (t, n) =>
            Object.keys(t).length
              ? Un(e, n)
              : { rows: [], flatRows: [], rowsById: {} },
          gn(e.options, 'debugTable'),
        )),
        (e.getGroupedSelectedRowModel = cn(
          () => [e.getState().rowSelection, e.getSortedRowModel()],
          (t, n) =>
            Object.keys(t).length
              ? Un(e, n)
              : { rows: [], flatRows: [], rowsById: {} },
          gn(e.options, 'debugTable'),
        )),
        (e.getIsAllRowsSelected = () => {
          const t = e.getFilteredRowModel().flatRows,
            { rowSelection: n } = e.getState();
          let o = Boolean(t.length && Object.keys(n).length);
          return (
            o && t.some((e) => e.getCanSelect() && !n[e.id]) && (o = !1),
            o
          );
        }),
        (e.getIsAllPageRowsSelected = () => {
          const t = e
              .getPaginationRowModel()
              .flatRows.filter((e) => e.getCanSelect()),
            { rowSelection: n } = e.getState();
          let o = !!t.length;
          return (o && t.some((e) => !n[e.id]) && (o = !1), o);
        }),
        (e.getIsSomeRowsSelected = () => {
          var t;
          const n = Object.keys(
            null != (t = e.getState().rowSelection) ? t : {},
          ).length;
          return n > 0 && n < e.getFilteredRowModel().flatRows.length;
        }),
        (e.getIsSomePageRowsSelected = () => {
          const t = e.getPaginationRowModel().flatRows;
          return (
            !e.getIsAllPageRowsSelected() &&
            t
              .filter((e) => e.getCanSelect())
              .some((e) => e.getIsSelected() || e.getIsSomeSelected())
          );
        }),
        (e.getToggleAllRowsSelectedHandler = () => (t) => {
          e.toggleAllRowsSelected(t.target.checked);
        }),
        (e.getToggleAllPageRowsSelectedHandler = () => (t) => {
          e.toggleAllPageRowsSelected(t.target.checked);
        }));
    },
    createRow: (e, t) => {
      ((e.toggleSelected = (n, o) => {
        const i = e.getIsSelected();
        t.setRowSelection((l) => {
          var s;
          if (((n = void 0 !== n ? n : !i), e.getCanSelect() && i === n))
            return l;
          const r = De({}, l);
          return (
            jn(
              r,
              e.id,
              n,
              null == (s = null == o ? void 0 : o.selectChildren) || s,
              t,
            ),
            r
          );
        });
      }),
        (e.getIsSelected = () => {
          const { rowSelection: n } = t.getState();
          return Wn(e, n);
        }),
        (e.getIsSomeSelected = () => {
          const { rowSelection: n } = t.getState();
          return 'some' === Bn(e, n);
        }),
        (e.getIsAllSubRowsSelected = () => {
          const { rowSelection: n } = t.getState();
          return 'all' === Bn(e, n);
        }),
        (e.getCanSelect = () => {
          var n;
          return 'function' == typeof t.options.enableRowSelection
            ? t.options.enableRowSelection(e)
            : null == (n = t.options.enableRowSelection) || n;
        }),
        (e.getCanSelectSubRows = () => {
          var n;
          return 'function' == typeof t.options.enableSubRowSelection
            ? t.options.enableSubRowSelection(e)
            : null == (n = t.options.enableSubRowSelection) || n;
        }),
        (e.getCanMultiSelect = () => {
          var n;
          return 'function' == typeof t.options.enableMultiRowSelection
            ? t.options.enableMultiRowSelection(e)
            : null == (n = t.options.enableMultiRowSelection) || n;
        }),
        (e.getToggleSelectedHandler = () => {
          const t = e.getCanSelect();
          return (n) => {
            var o;
            t && e.toggleSelected(null == (o = n.target) ? void 0 : o.checked);
          };
        }));
    },
  },
  jn = (e, t, n, o, i) => {
    var l;
    const s = i.getRow(t, !0);
    (n
      ? (s.getCanMultiSelect() || Object.keys(e).forEach((t) => delete e[t]),
        s.getCanSelect() && (e[t] = !0))
      : delete e[t],
      o &&
        null != (l = s.subRows) &&
        l.length &&
        s.getCanSelectSubRows() &&
        s.subRows.forEach((t) => jn(e, t.id, n, o, i)));
  };
function Un(e, t) {
  const n = e.getState().rowSelection,
    o = [],
    i = {},
    l = function (e, t) {
      return e
        .map((e) => {
          var t;
          const s = Wn(e, n);
          if (
            (s && (o.push(e), (i[e.id] = e)),
            null != (t = e.subRows) &&
              t.length &&
              (e = ke(De({}, e), { subRows: l(e.subRows) })),
            s)
          )
            return e;
        })
        .filter(Boolean);
    };
  return { rows: l(t.rows), flatRows: o, rowsById: i };
}
function Wn(e, t) {
  var n;
  return null != (n = t[e.id]) && n;
}
function Bn(e, t, n) {
  var o;
  if (null == (o = e.subRows) || !o.length) return !1;
  let i = !0,
    l = !1;
  return (
    e.subRows.forEach((e) => {
      if (
        (!l || i) &&
        (e.getCanSelect() && (Wn(e, t) ? (l = !0) : (i = !1)),
        e.subRows && e.subRows.length)
      ) {
        const n = Bn(e, t);
        'all' === n ? (l = !0) : 'some' === n ? ((l = !0), (i = !1)) : (i = !1);
      }
    }),
    i ? 'all' : !!l && 'some'
  );
}
const Qn = /([0-9]+)/gm;
function Kn(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function Nn(e) {
  return 'number' == typeof e
    ? isNaN(e) || e === 1 / 0 || e === -1 / 0
      ? ''
      : String(e)
    : 'string' == typeof e
      ? e
      : '';
}
function $n(e, t) {
  const n = e.split(Qn).filter(Boolean),
    o = t.split(Qn).filter(Boolean);
  for (; n.length && o.length; ) {
    const e = n.shift(),
      t = o.shift(),
      i = parseInt(e, 10),
      l = parseInt(t, 10),
      s = [i, l].sort();
    if (isNaN(s[0])) {
      if (e > t) return 1;
      if (t > e) return -1;
    } else {
      if (isNaN(s[1])) return isNaN(i) ? -1 : 1;
      if (i > l) return 1;
      if (l > i) return -1;
    }
  }
  return n.length - o.length;
}
const Xn = {
    alphanumeric: (e, t, n) =>
      $n(Nn(e.getValue(n)).toLowerCase(), Nn(t.getValue(n)).toLowerCase()),
    alphanumericCaseSensitive: (e, t, n) =>
      $n(Nn(e.getValue(n)), Nn(t.getValue(n))),
    text: (e, t, n) =>
      Kn(Nn(e.getValue(n)).toLowerCase(), Nn(t.getValue(n)).toLowerCase()),
    textCaseSensitive: (e, t, n) => Kn(Nn(e.getValue(n)), Nn(t.getValue(n))),
    datetime: (e, t, n) => {
      const o = e.getValue(n),
        i = t.getValue(n);
      return o > i ? 1 : o < i ? -1 : 0;
    },
    basic: (e, t, n) => Kn(e.getValue(n), t.getValue(n)),
  },
  Jn = [
    fn,
    {
      getInitialState: (e) => De({ columnVisibility: {} }, e),
      getDefaultOptions: (e) => ({
        onColumnVisibilityChange: un('columnVisibility', e),
      }),
      createColumn: (e, t) => {
        ((e.toggleVisibility = (n) => {
          e.getCanHide() &&
            t.setColumnVisibility((t) =>
              ke(De({}, t), { [e.id]: null != n ? n : !e.getIsVisible() }),
            );
        }),
          (e.getIsVisible = () => {
            var n, o;
            const i = e.columns;
            return (
              null ==
                (n = i.length
                  ? i.some((e) => e.getIsVisible())
                  : null == (o = t.getState().columnVisibility)
                    ? void 0
                    : o[e.id]) || n
            );
          }),
          (e.getCanHide = () => {
            var n, o;
            return (
              (null == (n = e.columnDef.enableHiding) || n) &&
              (null == (o = t.options.enableHiding) || o)
            );
          }),
          (e.getToggleVisibilityHandler = () => (t) => {
            null == e.toggleVisibility || e.toggleVisibility(t.target.checked);
          }));
      },
      createRow: (e, t) => {
        ((e._getAllVisibleCells = cn(
          () => [e.getAllCells(), t.getState().columnVisibility],
          (e) => e.filter((e) => e.column.getIsVisible()),
          gn(t.options, 'debugRows'),
        )),
          (e.getVisibleCells = cn(
            () => [
              e.getLeftVisibleCells(),
              e.getCenterVisibleCells(),
              e.getRightVisibleCells(),
            ],
            (e, t, n) => [...e, ...t, ...n],
            gn(t.options, 'debugRows'),
          )));
      },
      createTable: (e) => {
        const t = (t, n) =>
          cn(
            () => [
              n(),
              n()
                .filter((e) => e.getIsVisible())
                .map((e) => e.id)
                .join('_'),
            ],
            (e) =>
              e.filter((e) =>
                null == e.getIsVisible ? void 0 : e.getIsVisible(),
              ),
            gn(e.options, 'debugColumns'),
          );
        ((e.getVisibleFlatColumns = t(0, () => e.getAllFlatColumns())),
          (e.getVisibleLeafColumns = t(0, () => e.getAllLeafColumns())),
          (e.getLeftVisibleLeafColumns = t(0, () => e.getLeftLeafColumns())),
          (e.getRightVisibleLeafColumns = t(0, () => e.getRightLeafColumns())),
          (e.getCenterVisibleLeafColumns = t(0, () =>
            e.getCenterLeafColumns(),
          )),
          (e.setColumnVisibility = (t) =>
            null == e.options.onColumnVisibilityChange
              ? void 0
              : e.options.onColumnVisibilityChange(t)),
          (e.resetColumnVisibility = (t) => {
            var n;
            e.setColumnVisibility(
              t ? {} : null != (n = e.initialState.columnVisibility) ? n : {},
            );
          }),
          (e.toggleAllColumnsVisible = (t) => {
            var n;
            ((t = null != (n = t) ? n : !e.getIsAllColumnsVisible()),
              e.setColumnVisibility(
                e
                  .getAllLeafColumns()
                  .reduce(
                    (e, n) =>
                      ke(De({}, e), {
                        [n.id]: t || !(null != n.getCanHide && n.getCanHide()),
                      }),
                    {},
                  ),
              ));
          }),
          (e.getIsAllColumnsVisible = () =>
            !e
              .getAllLeafColumns()
              .some((e) => !(null != e.getIsVisible && e.getIsVisible()))),
          (e.getIsSomeColumnsVisible = () =>
            e
              .getAllLeafColumns()
              .some((e) =>
                null == e.getIsVisible ? void 0 : e.getIsVisible(),
              )),
          (e.getToggleAllColumnsVisibilityHandler = () => (t) => {
            var n;
            e.toggleAllColumnsVisible(
              null == (n = t.target) ? void 0 : n.checked,
            );
          }));
      },
    },
    Dn,
    kn,
    bn,
    En,
    {
      createTable: (e) => {
        ((e._getGlobalFacetedRowModel =
          e.options.getFacetedRowModel &&
          e.options.getFacetedRowModel(e, '__global__')),
          (e.getGlobalFacetedRowModel = () =>
            e.options.manualFiltering || !e._getGlobalFacetedRowModel
              ? e.getPreFilteredRowModel()
              : e._getGlobalFacetedRowModel()),
          (e._getGlobalFacetedUniqueValues =
            e.options.getFacetedUniqueValues &&
            e.options.getFacetedUniqueValues(e, '__global__')),
          (e.getGlobalFacetedUniqueValues = () =>
            e._getGlobalFacetedUniqueValues
              ? e._getGlobalFacetedUniqueValues()
              : new Map()),
          (e._getGlobalFacetedMinMaxValues =
            e.options.getFacetedMinMaxValues &&
            e.options.getFacetedMinMaxValues(e, '__global__')),
          (e.getGlobalFacetedMinMaxValues = () => {
            if (e._getGlobalFacetedMinMaxValues)
              return e._getGlobalFacetedMinMaxValues();
          }));
      },
    },
    {
      getInitialState: (e) => De({ globalFilter: void 0 }, e),
      getDefaultOptions: (e) => ({
        onGlobalFilterChange: un('globalFilter', e),
        globalFilterFn: 'auto',
        getColumnCanGlobalFilter: (t) => {
          var n;
          const o =
            null == (n = e.getCoreRowModel().flatRows[0]) ||
            null == (n = n._getAllCellsByColumnId()[t.id])
              ? void 0
              : n.getValue();
          return 'string' == typeof o || 'number' == typeof o;
        },
      }),
      createColumn: (e, t) => {
        e.getCanGlobalFilter = () => {
          var n, o, i, l;
          return (
            (null == (n = e.columnDef.enableGlobalFilter) || n) &&
            (null == (o = t.options.enableGlobalFilter) || o) &&
            (null == (i = t.options.enableFilters) || i) &&
            (null ==
              (l =
                null == t.options.getColumnCanGlobalFilter
                  ? void 0
                  : t.options.getColumnCanGlobalFilter(e)) ||
              l) &&
            !!e.accessorFn
          );
        };
      },
      createTable: (e) => {
        ((e.getGlobalAutoFilterFn = () => In.includesString),
          (e.getGlobalFilterFn = () => {
            var t, n;
            const { globalFilterFn: o } = e.options;
            return dn(o)
              ? o
              : 'auto' === o
                ? e.getGlobalAutoFilterFn()
                : null !=
                    (t = null == (n = e.options.filterFns) ? void 0 : n[o])
                  ? t
                  : In[o];
          }),
          (e.setGlobalFilter = (t) => {
            null == e.options.onGlobalFilterChange ||
              e.options.onGlobalFilterChange(t);
          }),
          (e.resetGlobalFilter = (t) => {
            e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
          }));
      },
    },
    {
      getInitialState: (e) => De({ sorting: [] }, e),
      getDefaultColumnDef: () => ({ sortingFn: 'auto', sortUndefined: 1 }),
      getDefaultOptions: (e) => ({
        onSortingChange: un('sorting', e),
        isMultiSortEvent: (e) => e.shiftKey,
      }),
      createColumn: (e, t) => {
        ((e.getAutoSortingFn = () => {
          const n = t.getFilteredRowModel().flatRows.slice(10);
          let o = !1;
          for (const t of n) {
            const n = null == t ? void 0 : t.getValue(e.id);
            if ('[object Date]' === Object.prototype.toString.call(n))
              return Xn.datetime;
            if ('string' == typeof n && ((o = !0), n.split(Qn).length > 1))
              return Xn.alphanumeric;
          }
          return o ? Xn.text : Xn.basic;
        }),
          (e.getAutoSortDir = () => {
            const n = t.getFilteredRowModel().flatRows[0];
            return 'string' == typeof (null == n ? void 0 : n.getValue(e.id))
              ? 'asc'
              : 'desc';
          }),
          (e.getSortingFn = () => {
            var n, o;
            if (!e) throw new Error();
            return dn(e.columnDef.sortingFn)
              ? e.columnDef.sortingFn
              : 'auto' === e.columnDef.sortingFn
                ? e.getAutoSortingFn()
                : null !=
                    (n =
                      null == (o = t.options.sortingFns)
                        ? void 0
                        : o[e.columnDef.sortingFn])
                  ? n
                  : Xn[e.columnDef.sortingFn];
          }),
          (e.toggleSorting = (n, o) => {
            const i = e.getNextSortingOrder(),
              l = null != n;
            t.setSorting((s) => {
              const r = null == s ? void 0 : s.find((t) => t.id === e.id),
                a = null == s ? void 0 : s.findIndex((t) => t.id === e.id);
              let u,
                d = [],
                c = l ? n : 'desc' === i;
              var g;
              ((u =
                null != s && s.length && e.getCanMultiSort() && o
                  ? r
                    ? 'toggle'
                    : 'add'
                  : null != s && s.length && a !== s.length - 1
                    ? 'replace'
                    : r
                      ? 'toggle'
                      : 'replace'),
              'toggle' === u && (l || i || (u = 'remove')),
              'add' === u)
                ? ((d = [...s, { id: e.id, desc: c }]),
                  d.splice(
                    0,
                    d.length -
                      (null != (g = t.options.maxMultiSortColCount)
                        ? g
                        : Number.MAX_SAFE_INTEGER),
                  ))
                : (d =
                    'toggle' === u
                      ? s.map((t) =>
                          t.id === e.id ? ke(De({}, t), { desc: c }) : t,
                        )
                      : 'remove' === u
                        ? s.filter((t) => t.id !== e.id)
                        : [{ id: e.id, desc: c }]);
              return d;
            });
          }),
          (e.getFirstSortDir = () => {
            var n, o;
            return (
              null !=
              (n =
                null != (o = e.columnDef.sortDescFirst)
                  ? o
                  : t.options.sortDescFirst)
                ? n
                : 'desc' === e.getAutoSortDir()
            )
              ? 'desc'
              : 'asc';
          }),
          (e.getNextSortingOrder = (n) => {
            var o, i;
            const l = e.getFirstSortDir(),
              s = e.getIsSorted();
            return s
              ? !!(
                  s === l ||
                  (null != (o = t.options.enableSortingRemoval) && !o) ||
                  (n && null != (i = t.options.enableMultiRemove) && !i)
                ) && ('desc' === s ? 'asc' : 'desc')
              : l;
          }),
          (e.getCanSort = () => {
            var n, o;
            return (
              (null == (n = e.columnDef.enableSorting) || n) &&
              (null == (o = t.options.enableSorting) || o) &&
              !!e.accessorFn
            );
          }),
          (e.getCanMultiSort = () => {
            var n, o;
            return null !=
              (n =
                null != (o = e.columnDef.enableMultiSort)
                  ? o
                  : t.options.enableMultiSort)
              ? n
              : !!e.accessorFn;
          }),
          (e.getIsSorted = () => {
            var n;
            const o =
              null == (n = t.getState().sorting)
                ? void 0
                : n.find((t) => t.id === e.id);
            return !!o && (o.desc ? 'desc' : 'asc');
          }),
          (e.getSortIndex = () => {
            var n, o;
            return null !=
              (n =
                null == (o = t.getState().sorting)
                  ? void 0
                  : o.findIndex((t) => t.id === e.id))
              ? n
              : -1;
          }),
          (e.clearSorting = () => {
            t.setSorting((t) =>
              null != t && t.length ? t.filter((t) => t.id !== e.id) : [],
            );
          }),
          (e.getToggleSortingHandler = () => {
            const n = e.getCanSort();
            return (o) => {
              n &&
                (null == o.persist || o.persist(),
                null == e.toggleSorting ||
                  e.toggleSorting(
                    void 0,
                    !!e.getCanMultiSort() &&
                      (null == t.options.isMultiSortEvent
                        ? void 0
                        : t.options.isMultiSortEvent(o)),
                  ));
            };
          }));
      },
      createTable: (e) => {
        ((e.setSorting = (t) =>
          null == e.options.onSortingChange
            ? void 0
            : e.options.onSortingChange(t)),
          (e.resetSorting = (t) => {
            var n, o;
            e.setSorting(
              t
                ? []
                : null !=
                    (n = null == (o = e.initialState) ? void 0 : o.sorting)
                  ? n
                  : [],
            );
          }),
          (e.getPreSortedRowModel = () => e.getGroupedRowModel()),
          (e.getSortedRowModel = () => (
            !e._getSortedRowModel &&
              e.options.getSortedRowModel &&
              (e._getSortedRowModel = e.options.getSortedRowModel(e)),
            e.options.manualSorting || !e._getSortedRowModel
              ? e.getPreSortedRowModel()
              : e._getSortedRowModel()
          )));
      },
    },
    An,
    {
      getInitialState: (e) => De({ expanded: {} }, e),
      getDefaultOptions: (e) => ({
        onExpandedChange: un('expanded', e),
        paginateExpandedRows: !0,
      }),
      createTable: (e) => {
        let t = !1,
          n = !1;
        ((e._autoResetExpanded = () => {
          var o, i;
          if (t) {
            if (
              null !=
              (o =
                null != (i = e.options.autoResetAll)
                  ? i
                  : e.options.autoResetExpanded)
                ? o
                : !e.options.manualExpanding
            ) {
              if (n) return;
              ((n = !0),
                e._queue(() => {
                  (e.resetExpanded(), (n = !1));
                }));
            }
          } else
            e._queue(() => {
              t = !0;
            });
        }),
          (e.setExpanded = (t) =>
            null == e.options.onExpandedChange
              ? void 0
              : e.options.onExpandedChange(t)),
          (e.toggleAllRowsExpanded = (t) => {
            (null != t ? t : !e.getIsAllRowsExpanded())
              ? e.setExpanded(!0)
              : e.setExpanded({});
          }),
          (e.resetExpanded = (t) => {
            var n, o;
            e.setExpanded(
              t
                ? {}
                : null !=
                    (n = null == (o = e.initialState) ? void 0 : o.expanded)
                  ? n
                  : {},
            );
          }),
          (e.getCanSomeRowsExpand = () =>
            e
              .getPrePaginationRowModel()
              .flatRows.some((e) => e.getCanExpand())),
          (e.getToggleAllRowsExpandedHandler = () => (t) => {
            (null == t.persist || t.persist(), e.toggleAllRowsExpanded());
          }),
          (e.getIsSomeRowsExpanded = () => {
            const t = e.getState().expanded;
            return !0 === t || Object.values(t).some(Boolean);
          }),
          (e.getIsAllRowsExpanded = () => {
            const t = e.getState().expanded;
            return 'boolean' == typeof t
              ? !0 === t
              : !!Object.keys(t).length &&
                  !e.getRowModel().flatRows.some((e) => !e.getIsExpanded());
          }),
          (e.getExpandedDepth = () => {
            let t = 0;
            return (
              (!0 === e.getState().expanded
                ? Object.keys(e.getRowModel().rowsById)
                : Object.keys(e.getState().expanded)
              ).forEach((e) => {
                const n = e.split('.');
                t = Math.max(t, n.length);
              }),
              t
            );
          }),
          (e.getPreExpandedRowModel = () => e.getSortedRowModel()),
          (e.getExpandedRowModel = () => (
            !e._getExpandedRowModel &&
              e.options.getExpandedRowModel &&
              (e._getExpandedRowModel = e.options.getExpandedRowModel(e)),
            e.options.manualExpanding || !e._getExpandedRowModel
              ? e.getPreExpandedRowModel()
              : e._getExpandedRowModel()
          )));
      },
      createRow: (e, t) => {
        ((e.toggleExpanded = (n) => {
          t.setExpanded((o) => {
            var i, l;
            const s = !0 === o || !(null == o || !o[e.id]);
            let r = {};
            if (
              (!0 === o
                ? Object.keys(t.getRowModel().rowsById).forEach((e) => {
                    r[e] = !0;
                  })
                : (r = o),
              (n = null != (l = n) ? l : !s),
              !s && n)
            )
              return ke(De({}, r), { [e.id]: !0 });
            if (s && !n) {
              const t = r,
                { [(i = e.id)]: n } = t;
              return Le(t, [Ge(i)]);
            }
            return o;
          });
        }),
          (e.getIsExpanded = () => {
            var n;
            const o = t.getState().expanded;
            return !!(null !=
            (n =
              null == t.options.getIsRowExpanded
                ? void 0
                : t.options.getIsRowExpanded(e))
              ? n
              : !0 === o || (null == o ? void 0 : o[e.id]));
          }),
          (e.getCanExpand = () => {
            var n, o, i;
            return null !=
              (n =
                null == t.options.getRowCanExpand
                  ? void 0
                  : t.options.getRowCanExpand(e))
              ? n
              : (null == (o = t.options.enableExpanding) || o) &&
                  !(null == (i = e.subRows) || !i.length);
          }),
          (e.getIsAllParentsExpanded = () => {
            let n = !0,
              o = e;
            for (; n && o.parentId; )
              ((o = t.getRow(o.parentId, !0)), (n = o.getIsExpanded()));
            return n;
          }),
          (e.getToggleExpandedHandler = () => {
            const t = e.getCanExpand();
            return () => {
              t && e.toggleExpanded();
            };
          }));
      },
    },
    {
      getInitialState: (e) =>
        ke(De({}, e), {
          pagination: De(
            De({}, { pageIndex: 0, pageSize: 10 }),
            null == e ? void 0 : e.pagination,
          ),
        }),
      getDefaultOptions: (e) => ({ onPaginationChange: un('pagination', e) }),
      createTable: (e) => {
        let t = !1,
          n = !1;
        ((e._autoResetPageIndex = () => {
          var o, i;
          if (t) {
            if (
              null !=
              (o =
                null != (i = e.options.autoResetAll)
                  ? i
                  : e.options.autoResetPageIndex)
                ? o
                : !e.options.manualPagination
            ) {
              if (n) return;
              ((n = !0),
                e._queue(() => {
                  (e.resetPageIndex(), (n = !1));
                }));
            }
          } else
            e._queue(() => {
              t = !0;
            });
        }),
          (e.setPagination = (t) =>
            null == e.options.onPaginationChange
              ? void 0
              : e.options.onPaginationChange((e) => an(t, e))),
          (e.resetPagination = (t) => {
            var n;
            e.setPagination(
              t
                ? { pageIndex: 0, pageSize: 10 }
                : null != (n = e.initialState.pagination)
                  ? n
                  : { pageIndex: 0, pageSize: 10 },
            );
          }),
          (e.setPageIndex = (t) => {
            e.setPagination((n) => {
              let o = an(t, n.pageIndex);
              const i =
                void 0 === e.options.pageCount || -1 === e.options.pageCount
                  ? Number.MAX_SAFE_INTEGER
                  : e.options.pageCount - 1;
              return (
                (o = Math.max(0, Math.min(o, i))),
                ke(De({}, n), { pageIndex: o })
              );
            });
          }),
          (e.resetPageIndex = (t) => {
            var n, o;
            e.setPageIndex(
              t
                ? 0
                : null !=
                    (n =
                      null == (o = e.initialState) || null == (o = o.pagination)
                        ? void 0
                        : o.pageIndex)
                  ? n
                  : 0,
            );
          }),
          (e.resetPageSize = (t) => {
            var n, o;
            e.setPageSize(
              t
                ? 10
                : null !=
                    (n =
                      null == (o = e.initialState) || null == (o = o.pagination)
                        ? void 0
                        : o.pageSize)
                  ? n
                  : 10,
            );
          }),
          (e.setPageSize = (t) => {
            e.setPagination((e) => {
              const n = Math.max(1, an(t, e.pageSize)),
                o = e.pageSize * e.pageIndex,
                i = Math.floor(o / n);
              return ke(De({}, e), { pageIndex: i, pageSize: n });
            });
          }),
          (e.setPageCount = (t) =>
            e.setPagination((n) => {
              var o;
              let i = an(t, null != (o = e.options.pageCount) ? o : -1);
              return (
                'number' == typeof i && (i = Math.max(-1, i)),
                ke(De({}, n), { pageCount: i })
              );
            })),
          (e.getPageOptions = cn(
            () => [e.getPageCount()],
            (e) => {
              let t = [];
              return (
                e &&
                  e > 0 &&
                  (t = [...new Array(e)].fill(null).map((e, t) => t)),
                t
              );
            },
            gn(e.options, 'debugTable'),
          )),
          (e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0),
          (e.getCanNextPage = () => {
            const { pageIndex: t } = e.getState().pagination,
              n = e.getPageCount();
            return -1 === n || (0 !== n && t < n - 1);
          }),
          (e.previousPage = () => e.setPageIndex((e) => e - 1)),
          (e.nextPage = () => e.setPageIndex((e) => e + 1)),
          (e.firstPage = () => e.setPageIndex(0)),
          (e.lastPage = () => e.setPageIndex(e.getPageCount() - 1)),
          (e.getPrePaginationRowModel = () => e.getExpandedRowModel()),
          (e.getPaginationRowModel = () => (
            !e._getPaginationRowModel &&
              e.options.getPaginationRowModel &&
              (e._getPaginationRowModel = e.options.getPaginationRowModel(e)),
            e.options.manualPagination || !e._getPaginationRowModel
              ? e.getPrePaginationRowModel()
              : e._getPaginationRowModel()
          )),
          (e.getPageCount = () => {
            var t;
            return null != (t = e.options.pageCount)
              ? t
              : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize);
          }),
          (e.getRowCount = () => {
            var t;
            return null != (t = e.options.rowCount)
              ? t
              : e.getPrePaginationRowModel().rows.length;
          }));
      },
    },
    {
      getInitialState: (e) => De({ rowPinning: { top: [], bottom: [] } }, e),
      getDefaultOptions: (e) => ({ onRowPinningChange: un('rowPinning', e) }),
      createRow: (e, t) => {
        ((e.pin = (n, o, i) => {
          const l = o
              ? e.getLeafRows().map((e) => {
                  let { id: t } = e;
                  return t;
                })
              : [],
            s = i
              ? e.getParentRows().map((e) => {
                  let { id: t } = e;
                  return t;
                })
              : [],
            r = new Set([...s, e.id, ...l]);
          t.setRowPinning((e) => {
            var t, o, i, l, s, a;
            return 'bottom' === n
              ? {
                  top: (null != (i = null == e ? void 0 : e.top)
                    ? i
                    : []
                  ).filter((e) => !(null != r && r.has(e))),
                  bottom: [
                    ...(null != (l = null == e ? void 0 : e.bottom)
                      ? l
                      : []
                    ).filter((e) => !(null != r && r.has(e))),
                    ...Array.from(r),
                  ],
                }
              : 'top' === n
                ? {
                    top: [
                      ...(null != (s = null == e ? void 0 : e.top)
                        ? s
                        : []
                      ).filter((e) => !(null != r && r.has(e))),
                      ...Array.from(r),
                    ],
                    bottom: (null != (a = null == e ? void 0 : e.bottom)
                      ? a
                      : []
                    ).filter((e) => !(null != r && r.has(e))),
                  }
                : {
                    top: (null != (t = null == e ? void 0 : e.top)
                      ? t
                      : []
                    ).filter((e) => !(null != r && r.has(e))),
                    bottom: (null != (o = null == e ? void 0 : e.bottom)
                      ? o
                      : []
                    ).filter((e) => !(null != r && r.has(e))),
                  };
          });
        }),
          (e.getCanPin = () => {
            var n;
            const { enableRowPinning: o, enablePinning: i } = t.options;
            return 'function' == typeof o
              ? o(e)
              : null == (n = null != o ? o : i) || n;
          }),
          (e.getIsPinned = () => {
            const n = [e.id],
              { top: o, bottom: i } = t.getState().rowPinning,
              l = n.some((e) => (null == o ? void 0 : o.includes(e))),
              s = n.some((e) => (null == i ? void 0 : i.includes(e)));
            return l ? 'top' : !!s && 'bottom';
          }),
          (e.getPinnedIndex = () => {
            var n, o;
            const i = e.getIsPinned();
            if (!i) return -1;
            const l =
              null == (n = 'top' === i ? t.getTopRows() : t.getBottomRows())
                ? void 0
                : n.map((e) => {
                    let { id: t } = e;
                    return t;
                  });
            return null != (o = null == l ? void 0 : l.indexOf(e.id)) ? o : -1;
          }));
      },
      createTable: (e) => {
        ((e.setRowPinning = (t) =>
          null == e.options.onRowPinningChange
            ? void 0
            : e.options.onRowPinningChange(t)),
          (e.resetRowPinning = (t) => {
            var n, o;
            return e.setRowPinning(
              t
                ? { top: [], bottom: [] }
                : null !=
                    (n = null == (o = e.initialState) ? void 0 : o.rowPinning)
                  ? n
                  : { top: [], bottom: [] },
            );
          }),
          (e.getIsSomeRowsPinned = (t) => {
            var n;
            const o = e.getState().rowPinning;
            var i, l;
            return t
              ? Boolean(null == (n = o[t]) ? void 0 : n.length)
              : Boolean(
                  (null == (i = o.top) ? void 0 : i.length) ||
                  (null == (l = o.bottom) ? void 0 : l.length),
                );
          }),
          (e._getPinnedRows = (t, n, o) => {
            var i;
            return (
              null == (i = e.options.keepPinnedRows) || i
                ? (null != n ? n : []).map((t) => {
                    const n = e.getRow(t, !0);
                    return n.getIsAllParentsExpanded() ? n : null;
                  })
                : (null != n ? n : []).map((e) => t.find((t) => t.id === e))
            )
              .filter(Boolean)
              .map((e) => ke(De({}, e), { position: o }));
          }),
          (e.getTopRows = cn(
            () => [e.getRowModel().rows, e.getState().rowPinning.top],
            (t, n) => e._getPinnedRows(t, n, 'top'),
            gn(e.options, 'debugRows'),
          )),
          (e.getBottomRows = cn(
            () => [e.getRowModel().rows, e.getState().rowPinning.bottom],
            (t, n) => e._getPinnedRows(t, n, 'bottom'),
            gn(e.options, 'debugRows'),
          )),
          (e.getCenterRows = cn(
            () => [
              e.getRowModel().rows,
              e.getState().rowPinning.top,
              e.getState().rowPinning.bottom,
            ],
            (e, t, n) => {
              const o = new Set([
                ...(null != t ? t : []),
                ...(null != n ? n : []),
              ]);
              return e.filter((e) => !o.has(e.id));
            },
            gn(e.options, 'debugRows'),
          )));
      },
    },
    Tn,
    Ln,
  ];
function Yn(e) {
  var t, n;
  const o = [...Jn, ...(null != (t = e._features) ? t : [])];
  let i = { _features: o };
  const l = i._features.reduce(
    (e, t) =>
      Object.assign(
        e,
        null == t.getDefaultOptions ? void 0 : t.getDefaultOptions(i),
      ),
    {},
  );
  let s = De(De({}, {}), null != (n = e.initialState) ? n : {});
  i._features.forEach((e) => {
    var t;
    s =
      null != (t = null == e.getInitialState ? void 0 : e.getInitialState(s))
        ? t
        : s;
  });
  const r = [];
  let a = !1;
  const u = {
    _features: o,
    options: De(De({}, l), e),
    initialState: s,
    _queue: (e) => {
      (r.push(e),
        a ||
          ((a = !0),
          Promise.resolve()
            .then(() => {
              for (; r.length; ) r.shift()();
              a = !1;
            })
            .catch((e) =>
              setTimeout(() => {
                throw e;
              }),
            )));
    },
    reset: () => {
      i.setState(i.initialState);
    },
    setOptions: (e) => {
      const t = an(e, i.options);
      var n;
      i.options =
        ((n = t),
        i.options.mergeOptions
          ? i.options.mergeOptions(l, n)
          : De(De({}, l), n));
    },
    getState: () => i.options.state,
    setState: (e) => {
      null == i.options.onStateChange || i.options.onStateChange(e);
    },
    _getRowId: (e, t, n) => {
      var o;
      return null !=
        (o = null == i.options.getRowId ? void 0 : i.options.getRowId(e, t, n))
        ? o
        : `${n ? [n.id, t].join('.') : t}`;
    },
    getCoreRowModel: () => (
      i._getCoreRowModel || (i._getCoreRowModel = i.options.getCoreRowModel(i)),
      i._getCoreRowModel()
    ),
    getRowModel: () => i.getPaginationRowModel(),
    getRow: (e, t) => {
      let n = (t ? i.getPrePaginationRowModel() : i.getRowModel()).rowsById[e];
      if (!n && ((n = i.getCoreRowModel().rowsById[e]), !n)) throw new Error();
      return n;
    },
    _getDefaultColumnDef: cn(
      () => [i.options.defaultColumn],
      (e) => {
        var t;
        return (
          (e = null != (t = e) ? t : {}),
          De(
            De(
              {
                header: (e) => {
                  const t = e.header.column.columnDef;
                  return t.accessorKey
                    ? t.accessorKey
                    : t.accessorFn
                      ? t.id
                      : null;
                },
                cell: (e) => {
                  var t, n;
                  return null !=
                    (t =
                      null == (n = e.renderValue()) || null == n.toString
                        ? void 0
                        : n.toString())
                    ? t
                    : null;
                },
              },
              i._features.reduce(
                (e, t) =>
                  Object.assign(
                    e,
                    null == t.getDefaultColumnDef
                      ? void 0
                      : t.getDefaultColumnDef(),
                  ),
                {},
              ),
            ),
            e,
          )
        );
      },
      gn(e, 'debugColumns'),
    ),
    _getColumnDefs: () => i.options.columns,
    getAllColumns: cn(
      () => [i._getColumnDefs()],
      (e) => {
        const t = function (e, n, o) {
          return (
            void 0 === o && (o = 0),
            e.map((e) => {
              const l = (function (e, t, n, o) {
                  var i, l;
                  const s = e._getDefaultColumnDef(),
                    r = De(De({}, s), t),
                    a = r.accessorKey;
                  let u,
                    d =
                      null !=
                      (i =
                        null != (l = r.id)
                          ? l
                          : a
                            ? 'function' == typeof String.prototype.replaceAll
                              ? a.replaceAll('.', '_')
                              : a.replace(/\./g, '_')
                            : void 0)
                        ? i
                        : 'string' == typeof r.header
                          ? r.header
                          : void 0;
                  if (
                    (r.accessorFn
                      ? (u = r.accessorFn)
                      : a &&
                        (u = a.includes('.')
                          ? (e) => {
                              let t = e;
                              for (const o of a.split('.')) {
                                var n;
                                t = null == (n = t) ? void 0 : n[o];
                              }
                              return t;
                            }
                          : (e) => e[r.accessorKey]),
                    !d)
                  )
                    throw new Error();
                  let c = {
                    id: `${String(d)}`,
                    accessorFn: u,
                    parent: o,
                    depth: n,
                    columnDef: r,
                    columns: [],
                    getFlatColumns: cn(
                      () => [!0],
                      () => {
                        var e;
                        return [
                          c,
                          ...(null == (e = c.columns)
                            ? void 0
                            : e.flatMap((e) => e.getFlatColumns())),
                        ];
                      },
                      gn(e.options, 'debugColumns'),
                    ),
                    getLeafColumns: cn(
                      () => [e._getOrderColumnsFn()],
                      (e) => {
                        var t;
                        return null != (t = c.columns) && t.length
                          ? e(c.columns.flatMap((e) => e.getLeafColumns()))
                          : [c];
                      },
                      gn(e.options, 'debugColumns'),
                    ),
                  };
                  for (const g of e._features)
                    null == g.createColumn || g.createColumn(c, e);
                  return c;
                })(i, e, o, n),
                s = e;
              return ((l.columns = s.columns ? t(s.columns, l, o + 1) : []), l);
            })
          );
        };
        return t(e);
      },
      gn(e, 'debugColumns'),
    ),
    getAllFlatColumns: cn(
      () => [i.getAllColumns()],
      (e) => e.flatMap((e) => e.getFlatColumns()),
      gn(e, 'debugColumns'),
    ),
    _getAllFlatColumnsById: cn(
      () => [i.getAllFlatColumns()],
      (e) => e.reduce((e, t) => ((e[t.id] = t), e), {}),
      gn(e, 'debugColumns'),
    ),
    getAllLeafColumns: cn(
      () => [i.getAllColumns(), i._getOrderColumnsFn()],
      (e, t) => t(e.flatMap((e) => e.getLeafColumns())),
      gn(e, 'debugColumns'),
    ),
    getColumn: (e) => i._getAllFlatColumnsById()[e],
  };
  Object.assign(i, u);
  for (let d = 0; d < i._features.length; d++) {
    const e = i._features[d];
    null == e || null == e.createTable || e.createTable(i);
  }
  return i;
}
function Zn() {
  return (e) =>
    cn(
      () => [e.options.data],
      (t) => {
        const n = { rows: [], flatRows: [], rowsById: {} },
          o = function (t, i, l) {
            void 0 === i && (i = 0);
            const s = [];
            for (let a = 0; a < t.length; a++) {
              const u = vn(
                e,
                e._getRowId(t[a], a, l),
                t[a],
                a,
                i,
                0,
                null == l ? void 0 : l.id,
              );
              var r;
              if (
                (n.flatRows.push(u),
                (n.rowsById[u.id] = u),
                s.push(u),
                e.options.getSubRows)
              )
                ((u.originalSubRows = e.options.getSubRows(t[a], a)),
                  null != (r = u.originalSubRows) &&
                    r.length &&
                    (u.subRows = o(u.originalSubRows, i + 1, u)));
            }
            return s;
          };
        return ((n.rows = o(t)), n);
      },
      gn(e.options, 'debugTable', 0, () => e._autoResetPageIndex()),
    );
}
function eo() {
  return (e) =>
    cn(
      () => [
        e.getState().expanded,
        e.getPreExpandedRowModel(),
        e.options.paginateExpandedRows,
      ],
      (e, t, n) =>
        !t.rows.length || (!0 !== e && !Object.keys(null != e ? e : {}).length)
          ? t
          : n
            ? to(t)
            : t,
      gn(e.options, 'debugTable'),
    );
}
function to(e) {
  const t = [],
    n = (e) => {
      var o;
      (t.push(e),
        null != (o = e.subRows) &&
          o.length &&
          e.getIsExpanded() &&
          e.subRows.forEach(n));
    };
  return (
    e.rows.forEach(n),
    { rows: t, flatRows: e.flatRows, rowsById: e.rowsById }
  );
}
function no(e, t, n) {
  return n.options.filterFromLeafRows
    ? (function (e, t, n) {
        var o;
        const i = [],
          l = {},
          s = null != (o = n.options.maxLeafRowFilterDepth) ? o : 100,
          r = function (e, o) {
            void 0 === o && (o = 0);
            const a = [];
            for (let d = 0; d < e.length; d++) {
              var u;
              let c = e[d];
              const g = vn(
                n,
                c.id,
                c.original,
                c.index,
                c.depth,
                0,
                c.parentId,
              );
              if (
                ((g.columnFilters = c.columnFilters),
                null != (u = c.subRows) && u.length && o < s)
              ) {
                if (
                  ((g.subRows = r(c.subRows, o + 1)),
                  (c = g),
                  t(c) && !g.subRows.length)
                ) {
                  (a.push(c), (l[c.id] = c), i.push(c));
                  continue;
                }
                if (t(c) || g.subRows.length) {
                  (a.push(c), (l[c.id] = c), i.push(c));
                  continue;
                }
              } else ((c = g), t(c) && (a.push(c), (l[c.id] = c), i.push(c)));
            }
            return a;
          };
        return { rows: r(e), flatRows: i, rowsById: l };
      })(e, t, n)
    : (function (e, t, n) {
        var o;
        const i = [],
          l = {},
          s = null != (o = n.options.maxLeafRowFilterDepth) ? o : 100,
          r = function (e, o) {
            void 0 === o && (o = 0);
            const a = [];
            for (let d = 0; d < e.length; d++) {
              let c = e[d];
              if (t(c)) {
                var u;
                if (null != (u = c.subRows) && u.length && o < s) {
                  const e = vn(
                    n,
                    c.id,
                    c.original,
                    c.index,
                    c.depth,
                    0,
                    c.parentId,
                  );
                  ((e.subRows = r(c.subRows, o + 1)), (c = e));
                }
                (a.push(c), i.push(c), (l[c.id] = c));
              }
            }
            return a;
          };
        return { rows: r(e), flatRows: i, rowsById: l };
      })(e, t, n);
}
function oo() {
  return (e) =>
    cn(
      () => [
        e.getPreFilteredRowModel(),
        e.getState().columnFilters,
        e.getState().globalFilter,
      ],
      (t, n, o) => {
        if (!t.rows.length || ((null == n || !n.length) && !o)) {
          for (let e = 0; e < t.flatRows.length; e++)
            ((t.flatRows[e].columnFilters = {}),
              (t.flatRows[e].columnFiltersMeta = {}));
          return t;
        }
        const i = [],
          l = [];
        (null != n ? n : []).forEach((t) => {
          var n;
          const o = e.getColumn(t.id);
          if (!o) return;
          const l = o.getFilterFn();
          l &&
            i.push({
              id: t.id,
              filterFn: l,
              resolvedValue:
                null !=
                (n =
                  null == l.resolveFilterValue
                    ? void 0
                    : l.resolveFilterValue(t.value))
                  ? n
                  : t.value,
            });
        });
        const s = (null != n ? n : []).map((e) => e.id),
          r = e.getGlobalFilterFn(),
          a = e.getAllLeafColumns().filter((e) => e.getCanGlobalFilter());
        let u, d;
        o &&
          r &&
          a.length &&
          (s.push('__global__'),
          a.forEach((e) => {
            var t;
            l.push({
              id: e.id,
              filterFn: r,
              resolvedValue:
                null !=
                (t =
                  null == r.resolveFilterValue
                    ? void 0
                    : r.resolveFilterValue(o))
                  ? t
                  : o,
            });
          }));
        for (let e = 0; e < t.flatRows.length; e++) {
          const n = t.flatRows[e];
          if (((n.columnFilters = {}), i.length))
            for (let e = 0; e < i.length; e++) {
              u = i[e];
              const t = u.id;
              n.columnFilters[t] = u.filterFn(n, t, u.resolvedValue, (e) => {
                n.columnFiltersMeta[t] = e;
              });
            }
          if (l.length) {
            for (let e = 0; e < l.length; e++) {
              d = l[e];
              const t = d.id;
              if (
                d.filterFn(n, t, d.resolvedValue, (e) => {
                  n.columnFiltersMeta[t] = e;
                })
              ) {
                n.columnFilters.__global__ = !0;
                break;
              }
            }
            !0 !== n.columnFilters.__global__ &&
              (n.columnFilters.__global__ = !1);
          }
        }
        return no(
          t.rows,
          (e) => {
            for (let t = 0; t < s.length; t++)
              if (!1 === e.columnFilters[s[t]]) return !1;
            return !0;
          },
          e,
        );
      },
      gn(e.options, 'debugTable', 0, () => e._autoResetPageIndex()),
    );
}
function io(e) {
  return (e) =>
    cn(
      () => [
        e.getState().pagination,
        e.getPrePaginationRowModel(),
        e.options.paginateExpandedRows ? void 0 : e.getState().expanded,
      ],
      (t, n) => {
        if (!n.rows.length) return n;
        const { pageSize: o, pageIndex: i } = t;
        let { rows: l, flatRows: s, rowsById: r } = n;
        const a = o * i,
          u = a + o;
        let d;
        ((l = l.slice(a, u)),
          (d = e.options.paginateExpandedRows
            ? { rows: l, flatRows: s, rowsById: r }
            : to({ rows: l, flatRows: s, rowsById: r })),
          (d.flatRows = []));
        const c = (e) => {
          (d.flatRows.push(e), e.subRows.length && e.subRows.forEach(c));
        };
        return (d.rows.forEach(c), d);
      },
      gn(e.options, 'debugTable'),
    );
}
function lo() {
  return (e) =>
    cn(
      () => [e.getState().sorting, e.getPreSortedRowModel()],
      (t, n) => {
        if (!n.rows.length || null == t || !t.length) return n;
        const o = e.getState().sorting,
          i = [],
          l = o.filter((t) => {
            var n;
            return null == (n = e.getColumn(t.id)) ? void 0 : n.getCanSort();
          }),
          s = {};
        l.forEach((t) => {
          const n = e.getColumn(t.id);
          n &&
            (s[t.id] = {
              sortUndefined: n.columnDef.sortUndefined,
              invertSorting: n.columnDef.invertSorting,
              sortingFn: n.getSortingFn(),
            });
        });
        const r = (e) => {
          const t = e.map((e) => De({}, e));
          return (
            t.sort((e, t) => {
              for (let o = 0; o < l.length; o += 1) {
                var n;
                const i = l[o],
                  r = s[i.id],
                  a = r.sortUndefined,
                  u = null != (n = null == i ? void 0 : i.desc) && n;
                let d = 0;
                if (a) {
                  const n = void 0 === e.getValue(i.id),
                    o = void 0 === t.getValue(i.id);
                  if (n || o) {
                    if ('first' === a) return n ? -1 : 1;
                    if ('last' === a) return n ? 1 : -1;
                    d = n && o ? 0 : n ? a : -a;
                  }
                }
                if ((0 === d && (d = r.sortingFn(e, t, i.id)), 0 !== d))
                  return (u && (d *= -1), r.invertSorting && (d *= -1), d);
              }
              return e.index - t.index;
            }),
            t.forEach((e) => {
              var t;
              (i.push(e),
                null != (t = e.subRows) &&
                  t.length &&
                  (e.subRows = r(e.subRows)));
            }),
            t
          );
        };
        return { rows: r(n.rows), flatRows: i, rowsById: n.rowsById };
      },
      gn(e.options, 'debugTable', 0, () => e._autoResetPageIndex()),
    );
}
function so(e, t) {
  return e
    ? (function (e) {
        return (
          'function' == typeof e &&
          (() => {
            const t = Object.getPrototypeOf(e);
            return t.prototype && t.prototype.isReactComponent;
          })()
        );
      })((n = e)) ||
      'function' == typeof n ||
      (function (e) {
        return (
          'object' == typeof e &&
          'symbol' == typeof e.$$typeof &&
          ['react.memo', 'react.forward_ref'].includes(e.$$typeof.description)
        );
      })(n)
      ? Be.createElement(e, t)
      : e
    : null;
  var n;
}
function ro(e) {
  const t = De(
      { state: {}, onStateChange: () => {}, renderFallbackValue: null },
      e,
    ),
    [n] = Be.useState(() => ({ current: Yn(t) })),
    [o, i] = Be.useState(() => n.current.initialState);
  return (
    n.current.setOptions((t) =>
      ke(De(De({}, t), e), {
        state: De(De({}, o), e.state),
        onStateChange: (t) => {
          (i(t), null == e.onStateChange || e.onStateChange(t));
        },
      }),
    ),
    n.current
  );
}
export {
  Xt as a,
  $t as b,
  rn as c,
  ro as d,
  eo as e,
  so as f,
  oo as g,
  lo as h,
  io as i,
  Zn as j,
  sn as k,
  ln as l,
  nn as m,
  pt as n,
  Kt as Q,
  tn as u,
};
//# sourceMappingURL=@tanstack-BnKsW00g.js.map
