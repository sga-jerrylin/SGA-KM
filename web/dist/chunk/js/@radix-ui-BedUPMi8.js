var e = Object.defineProperty,
  n = Object.defineProperties,
  t = Object.getOwnPropertyDescriptors,
  r = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  a = (n, t, r) =>
    t in n
      ? e(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (n[t] = r),
  s = (e, n) => {
    for (var t in n || (n = {})) o.call(n, t) && a(e, t, n[t]);
    if (r) for (var t of r(n)) i.call(n, t) && a(e, t, n[t]);
    return e;
  },
  l = (e, r) => n(e, t(r)),
  c = (e, n) => {
    var t = {};
    for (var a in e) o.call(e, a) && n.indexOf(a) < 0 && (t[a] = e[a]);
    if (null != e && r)
      for (var a of r(e)) n.indexOf(a) < 0 && i.call(e, a) && (t[a] = e[a]);
    return t;
  };
import {
  f as _,
  o as b,
  a as C,
  l as E,
  c as P,
  b as R,
  h as S,
  s as x,
  u as y,
} from './@floating-ui-DbqYuhjb.js';
import { h as g } from './aria-hidden-B0YqPW3N.js';
import { j as d, R as f, T as p, r as u } from './react-Clxusn8M.js';
import { R as h, r as v } from './react-dom-VOJ15Ct0.js';
import { R as m } from './react-remove-scroll-AUELm4Rd.js';
import { s as w } from './use-sync-external-store-Dj3ABchY.js';
function j(e, n, { checkForDefaultPrevented: t = !0 } = {}) {
  return function (r) {
    if ((null == e || e(r), !1 === t || !r.defaultPrevented))
      return null == n ? void 0 : n(r);
  };
}
function D(e, n) {
  if ('function' == typeof e) return e(n);
  null != e && (e.current = n);
}
function T(...e) {
  return (n) => {
    let t = !1;
    const r = e.map((e) => {
      const r = D(e, n);
      return (t || 'function' != typeof r || (t = !0), r);
    });
    if (t)
      return () => {
        for (let n = 0; n < r.length; n++) {
          const t = r[n];
          'function' == typeof t ? t() : D(e[n], null);
        }
      };
  };
}
function N(...e) {
  return u.useCallback(T(...e), e);
}
function A(e, n) {
  const t = u.createContext(n),
    r = (e) => {
      const n = e,
        { children: r } = n,
        o = c(n, ['children']),
        i = u.useMemo(() => o, Object.values(o));
      return d.jsx(t.Provider, { value: i, children: r });
    };
  return (
    (r.displayName = e + 'Provider'),
    [
      r,
      function (r) {
        const o = u.useContext(t);
        if (o) return o;
        if (void 0 !== n) return n;
        throw new Error(`\`${r}\` must be used within \`${e}\``);
      },
    ]
  );
}
function O(e, n = []) {
  let t = [];
  const r = () => {
    const n = t.map((e) => u.createContext(e));
    return function (t) {
      const r = (null == t ? void 0 : t[e]) || n;
      return u.useMemo(
        () => ({ [`__scope${e}`]: l(s({}, t), { [e]: r }) }),
        [t, r],
      );
    };
  };
  return (
    (r.scopeName = e),
    [
      function (n, r) {
        const o = u.createContext(r),
          i = t.length;
        t = [...t, r];
        const a = (n) => {
          var t;
          const r = n,
            { scope: a, children: s } = r,
            l = c(r, ['scope', 'children']),
            p = (null == (t = null == a ? void 0 : a[e]) ? void 0 : t[i]) || o,
            f = u.useMemo(() => l, Object.values(l));
          return d.jsx(p.Provider, { value: f, children: s });
        };
        return (
          (a.displayName = n + 'Provider'),
          [
            a,
            function (t, a) {
              var s;
              const l =
                  (null == (s = null == a ? void 0 : a[e]) ? void 0 : s[i]) ||
                  o,
                c = u.useContext(l);
              if (c) return c;
              if (void 0 !== r) return r;
              throw new Error(`\`${t}\` must be used within \`${n}\``);
            },
          ]
        );
      },
      M(r, ...n),
    ]
  );
}
function M(...e) {
  const n = e[0];
  if (1 === e.length) return n;
  const t = () => {
    const t = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
    return function (e) {
      const r = t.reduce((n, { useScope: t, scopeName: r }) => {
        const o = t(e)[`__scope${r}`];
        return s(s({}, n), o);
      }, {});
      return u.useMemo(() => ({ [`__scope${n.scopeName}`]: r }), [r]);
    };
  };
  return ((t.scopeName = n.scopeName), t);
}
function I(e) {
  const n = k(e),
    t = u.forwardRef((e, t) => {
      const r = e,
        { children: o } = r,
        i = c(r, ['children']),
        a = u.Children.toArray(o),
        p = a.find(L);
      if (p) {
        const e = p.props.children,
          r = a.map((n) =>
            n === p
              ? u.Children.count(e) > 1
                ? u.Children.only(null)
                : u.isValidElement(e)
                  ? e.props.children
                  : null
              : n,
          );
        return d.jsx(
          n,
          l(s({}, i), {
            ref: t,
            children: u.isValidElement(e) ? u.cloneElement(e, void 0, r) : null,
          }),
        );
      }
      return d.jsx(n, l(s({}, i), { ref: t, children: o }));
    });
  return ((t.displayName = `${e}.Slot`), t);
}
function k(e) {
  const n = u.forwardRef((e, n) => {
    const t = e,
      { children: r } = t,
      o = c(t, ['children']);
    if (u.isValidElement(r)) {
      const e = (function (e) {
          var n, t;
          let r =
              null == (n = Object.getOwnPropertyDescriptor(e.props, 'ref'))
                ? void 0
                : n.get,
            o = r && 'isReactWarning' in r && r.isReactWarning;
          if (o) return e.ref;
          if (
            ((r =
              null == (t = Object.getOwnPropertyDescriptor(e, 'ref'))
                ? void 0
                : t.get),
            (o = r && 'isReactWarning' in r && r.isReactWarning),
            o)
          )
            return e.props.ref;
          return e.props.ref || e.ref;
        })(r),
        t = (function (e, n) {
          const t = s({}, n);
          for (const r in n) {
            const o = e[r],
              i = n[r];
            /^on[A-Z]/.test(r)
              ? o && i
                ? (t[r] = (...e) => {
                    const n = i(...e);
                    return (o(...e), n);
                  })
                : o && (t[r] = o)
              : 'style' === r
                ? (t[r] = s(s({}, o), i))
                : 'className' === r &&
                  (t[r] = [o, i].filter(Boolean).join(' '));
          }
          return s(s({}, e), t);
        })(o, r.props);
      return (
        r.type !== u.Fragment && (t.ref = n ? T(n, e) : e),
        u.cloneElement(r, t)
      );
    }
    return u.Children.count(r) > 1 ? u.Children.only(null) : null;
  });
  return ((n.displayName = `${e}.SlotClone`), n);
}
var F = Symbol('radix.slottable');
function L(e) {
  return (
    u.isValidElement(e) &&
    'function' == typeof e.type &&
    '__radixId' in e.type &&
    e.type.__radixId === F
  );
}
function $(e) {
  const n = e + 'CollectionProvider',
    [t, r] = O(n),
    [o, i] = t(n, { collectionRef: { current: null }, itemMap: new Map() }),
    a = (e) => {
      const { scope: n, children: t } = e,
        r = p.useRef(null),
        i = p.useRef(new Map()).current;
      return d.jsx(o, { scope: n, itemMap: i, collectionRef: r, children: t });
    };
  a.displayName = n;
  const u = e + 'CollectionSlot',
    f = I(u),
    v = p.forwardRef((e, n) => {
      const { scope: t, children: r } = e,
        o = N(n, i(u, t).collectionRef);
      return d.jsx(f, { ref: o, children: r });
    });
  v.displayName = u;
  const h = e + 'CollectionItemSlot',
    m = 'data-radix-collection-item',
    g = I(h),
    w = p.forwardRef((e, n) => {
      const t = e,
        { scope: r, children: o } = t,
        a = c(t, ['scope', 'children']),
        u = p.useRef(null),
        f = N(n, u),
        v = i(h, r);
      return (
        p.useEffect(
          () => (
            v.itemMap.set(u, s({ ref: u }, a)),
            () => {
              v.itemMap.delete(u);
            }
          ),
        ),
        d.jsx(g, l(s({}, { [m]: '' }), { ref: f, children: o }))
      );
    });
  return (
    (w.displayName = h),
    [
      { Provider: a, Slot: v, ItemSlot: w },
      function (n) {
        const t = i(e + 'CollectionConsumer', n);
        return p.useCallback(() => {
          const e = t.collectionRef.current;
          if (!e) return [];
          const n = Array.from(e.querySelectorAll(`[${m}]`));
          return Array.from(t.itemMap.values()).sort(
            (e, t) => n.indexOf(e.ref.current) - n.indexOf(t.ref.current),
          );
        }, [t.collectionRef, t.itemMap]);
      },
      r,
    ]
  );
}
function W(e, n, { checkForDefaultPrevented: t = !0 } = {}) {
  return function (r) {
    if ((null == e || e(r), !1 === t || !r.defaultPrevented))
      return null == n ? void 0 : n(r);
  };
}
function V(e, n) {
  if ('function' == typeof e) return e(n);
  null != e && (e.current = n);
}
function K(...e) {
  return (n) => {
    let t = !1;
    const r = e.map((e) => {
      const r = V(e, n);
      return (t || 'function' != typeof r || (t = !0), r);
    });
    if (t)
      return () => {
        for (let n = 0; n < r.length; n++) {
          const t = r[n];
          'function' == typeof t ? t() : V(e[n], null);
        }
      };
  };
}
function H(...e) {
  return u.useCallback(K(...e), e);
}
var B = u.forwardRef((e, n) => {
  const t = e,
    { children: r } = t,
    o = c(t, ['children']),
    i = u.Children.toArray(r),
    a = i.find(G);
  if (a) {
    const e = a.props.children,
      t = i.map((n) =>
        n === a
          ? u.Children.count(e) > 1
            ? u.Children.only(null)
            : u.isValidElement(e)
              ? e.props.children
              : null
          : n,
      );
    return d.jsx(
      U,
      l(s({}, o), {
        ref: n,
        children: u.isValidElement(e) ? u.cloneElement(e, void 0, t) : null,
      }),
    );
  }
  return d.jsx(U, l(s({}, o), { ref: n, children: r }));
});
B.displayName = 'Slot';
var U = u.forwardRef((e, n) => {
  const t = e,
    { children: r } = t,
    o = c(t, ['children']);
  if (u.isValidElement(r)) {
    const e = (function (e) {
      var n, t;
      let r =
          null == (n = Object.getOwnPropertyDescriptor(e.props, 'ref'))
            ? void 0
            : n.get,
        o = r && 'isReactWarning' in r && r.isReactWarning;
      if (o) return e.ref;
      if (
        ((r =
          null == (t = Object.getOwnPropertyDescriptor(e, 'ref'))
            ? void 0
            : t.get),
        (o = r && 'isReactWarning' in r && r.isReactWarning),
        o)
      )
        return e.props.ref;
      return e.props.ref || e.ref;
    })(r);
    return u.cloneElement(
      r,
      l(
        s(
          {},
          (function (e, n) {
            const t = s({}, n);
            for (const r in n) {
              const o = e[r],
                i = n[r];
              /^on[A-Z]/.test(r)
                ? o && i
                  ? (t[r] = (...e) => {
                      (i(...e), o(...e));
                    })
                  : o && (t[r] = o)
                : 'style' === r
                  ? (t[r] = s(s({}, o), i))
                  : 'className' === r &&
                    (t[r] = [o, i].filter(Boolean).join(' '));
            }
            return s(s({}, e), t);
          })(o, r.props),
        ),
        { ref: n ? K(n, e) : e },
      ),
    );
  }
  return u.Children.count(r) > 1 ? u.Children.only(null) : null;
});
U.displayName = 'SlotClone';
var z = ({ children: e }) => d.jsx(d.Fragment, { children: e });
function G(e) {
  return u.isValidElement(e) && e.type === z;
}
var X = [
  'a',
  'button',
  'div',
  'form',
  'h2',
  'h3',
  'img',
  'input',
  'label',
  'li',
  'nav',
  'ol',
  'p',
  'span',
  'svg',
  'ul',
].reduce((e, n) => {
  const t = u.forwardRef((e, t) => {
    const r = e,
      { asChild: o } = r,
      i = c(r, ['asChild']),
      a = o ? B : n;
    return (
      'undefined' != typeof window && (window[Symbol.for('radix-ui')] = !0),
      d.jsx(a, l(s({}, i), { ref: t }))
    );
  });
  return ((t.displayName = `Primitive.${n}`), l(s({}, e), { [n]: t }));
}, {});
function Y(e) {
  const n = u.useRef(e);
  return (
    u.useEffect(() => {
      n.current = e;
    }),
    u.useMemo(
      () =>
        (...e) => {
          var t;
          return null == (t = n.current) ? void 0 : t.call(n, ...e);
        },
      [],
    )
  );
}
function q(e, n = null == globalThis ? void 0 : globalThis.document) {
  const t = (function (e) {
    const n = u.useRef(e);
    return (
      u.useEffect(() => {
        n.current = e;
      }),
      u.useMemo(
        () =>
          (...e) => {
            var t;
            return null == (t = n.current) ? void 0 : t.call(n, ...e);
          },
        [],
      )
    );
  })(e);
  u.useEffect(() => {
    const e = (e) => {
      'Escape' === e.key && t(e);
    };
    return (
      n.addEventListener('keydown', e, { capture: !0 }),
      () => n.removeEventListener('keydown', e, { capture: !0 })
    );
  }, [t, n]);
}
var Z,
  J = 'dismissableLayer.update',
  Q = 'dismissableLayer.pointerDownOutside',
  ee = 'dismissableLayer.focusOutside',
  ne = u.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  te = u.forwardRef((e, n) => {
    var t;
    const r = e,
      {
        disableOutsidePointerEvents: o = !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: a,
        onFocusOutside: p,
        onInteractOutside: f,
        onDismiss: v,
      } = r,
      h = c(r, [
        'disableOutsidePointerEvents',
        'onEscapeKeyDown',
        'onPointerDownOutside',
        'onFocusOutside',
        'onInteractOutside',
        'onDismiss',
      ]),
      m = u.useContext(ne),
      [g, w] = u.useState(null),
      y =
        null != (t = null == g ? void 0 : g.ownerDocument)
          ? t
          : null == globalThis
            ? void 0
            : globalThis.document,
      [, b] = u.useState({}),
      x = H(n, (e) => w(e)),
      _ = Array.from(m.layers),
      [C] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1),
      R = _.indexOf(C),
      S = g ? _.indexOf(g) : -1,
      E = m.layersWithOutsidePointerEventsDisabled.size > 0,
      P = S >= R,
      j = (function (e, n = null == globalThis ? void 0 : globalThis.document) {
        const t = Y(e),
          r = u.useRef(!1),
          o = u.useRef(() => {});
        return (
          u.useEffect(() => {
            const e = (e) => {
                if (e.target && !r.current) {
                  let r = function () {
                    ie(Q, t, i, { discrete: !0 });
                  };
                  const i = { originalEvent: e };
                  'touch' === e.pointerType
                    ? (n.removeEventListener('click', o.current),
                      (o.current = r),
                      n.addEventListener('click', o.current, { once: !0 }))
                    : r();
                } else n.removeEventListener('click', o.current);
                r.current = !1;
              },
              i = window.setTimeout(() => {
                n.addEventListener('pointerdown', e);
              }, 0);
            return () => {
              (window.clearTimeout(i),
                n.removeEventListener('pointerdown', e),
                n.removeEventListener('click', o.current));
            };
          }, [n, t]),
          { onPointerDownCapture: () => (r.current = !0) }
        );
      })((e) => {
        const n = e.target,
          t = [...m.branches].some((e) => e.contains(n));
        P &&
          !t &&
          (null == a || a(e),
          null == f || f(e),
          e.defaultPrevented || null == v || v());
      }, y),
      D = (function (e, n = null == globalThis ? void 0 : globalThis.document) {
        const t = Y(e),
          r = u.useRef(!1);
        return (
          u.useEffect(() => {
            const e = (e) => {
              if (e.target && !r.current) {
                ie(ee, t, { originalEvent: e }, { discrete: !1 });
              }
            };
            return (
              n.addEventListener('focusin', e),
              () => n.removeEventListener('focusin', e)
            );
          }, [n, t]),
          {
            onFocusCapture: () => (r.current = !0),
            onBlurCapture: () => (r.current = !1),
          }
        );
      })((e) => {
        const n = e.target;
        [...m.branches].some((e) => e.contains(n)) ||
          (null == p || p(e),
          null == f || f(e),
          e.defaultPrevented || null == v || v());
      }, y);
    return (
      q((e) => {
        S === m.layers.size - 1 &&
          (null == i || i(e),
          !e.defaultPrevented && v && (e.preventDefault(), v()));
      }, y),
      u.useEffect(() => {
        if (g)
          return (
            o &&
              (0 === m.layersWithOutsidePointerEventsDisabled.size &&
                ((Z = y.body.style.pointerEvents),
                (y.body.style.pointerEvents = 'none')),
              m.layersWithOutsidePointerEventsDisabled.add(g)),
            m.layers.add(g),
            oe(),
            () => {
              o &&
                1 === m.layersWithOutsidePointerEventsDisabled.size &&
                (y.body.style.pointerEvents = Z);
            }
          );
      }, [g, y, o, m]),
      u.useEffect(
        () => () => {
          g &&
            (m.layers.delete(g),
            m.layersWithOutsidePointerEventsDisabled.delete(g),
            oe());
        },
        [g, m],
      ),
      u.useEffect(() => {
        const e = () => b({});
        return (
          document.addEventListener(J, e),
          () => document.removeEventListener(J, e)
        );
      }, []),
      d.jsx(
        X.div,
        l(s({}, h), {
          ref: x,
          style: s(
            { pointerEvents: E ? (P ? 'auto' : 'none') : void 0 },
            e.style,
          ),
          onFocusCapture: W(e.onFocusCapture, D.onFocusCapture),
          onBlurCapture: W(e.onBlurCapture, D.onBlurCapture),
          onPointerDownCapture: W(
            e.onPointerDownCapture,
            j.onPointerDownCapture,
          ),
        }),
      )
    );
  });
te.displayName = 'DismissableLayer';
var re = u.forwardRef((e, n) => {
  const t = u.useContext(ne),
    r = u.useRef(null),
    o = H(n, r);
  return (
    u.useEffect(() => {
      const e = r.current;
      if (e)
        return (
          t.branches.add(e),
          () => {
            t.branches.delete(e);
          }
        );
    }, [t.branches]),
    d.jsx(X.div, l(s({}, e), { ref: o }))
  );
});
function oe() {
  const e = new CustomEvent(J);
  document.dispatchEvent(e);
}
function ie(e, n, t, { discrete: r }) {
  const o = t.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: t });
  (n && o.addEventListener(e, n, { once: !0 }),
    r
      ? (function (e, n) {
          e && v.flushSync(() => e.dispatchEvent(n));
        })(o, i)
      : o.dispatchEvent(i));
}
re.displayName = 'DismissableLayerBranch';
var ae = te,
  se = re;
function le(e) {
  const n = ce(e),
    t = u.forwardRef((e, t) => {
      const r = e,
        { children: o } = r,
        i = c(r, ['children']),
        a = u.Children.toArray(o),
        p = a.find(de);
      if (p) {
        const e = p.props.children,
          r = a.map((n) =>
            n === p
              ? u.Children.count(e) > 1
                ? u.Children.only(null)
                : u.isValidElement(e)
                  ? e.props.children
                  : null
              : n,
          );
        return d.jsx(
          n,
          l(s({}, i), {
            ref: t,
            children: u.isValidElement(e) ? u.cloneElement(e, void 0, r) : null,
          }),
        );
      }
      return d.jsx(n, l(s({}, i), { ref: t, children: o }));
    });
  return ((t.displayName = `${e}.Slot`), t);
}
function ce(e) {
  const n = u.forwardRef((e, n) => {
    const t = e,
      { children: r } = t,
      o = c(t, ['children']);
    if (u.isValidElement(r)) {
      const e = (function (e) {
          var n, t;
          let r =
              null == (n = Object.getOwnPropertyDescriptor(e.props, 'ref'))
                ? void 0
                : n.get,
            o = r && 'isReactWarning' in r && r.isReactWarning;
          if (o) return e.ref;
          if (
            ((r =
              null == (t = Object.getOwnPropertyDescriptor(e, 'ref'))
                ? void 0
                : t.get),
            (o = r && 'isReactWarning' in r && r.isReactWarning),
            o)
          )
            return e.props.ref;
          return e.props.ref || e.ref;
        })(r),
        t = (function (e, n) {
          const t = s({}, n);
          for (const r in n) {
            const o = e[r],
              i = n[r];
            /^on[A-Z]/.test(r)
              ? o && i
                ? (t[r] = (...e) => {
                    const n = i(...e);
                    return (o(...e), n);
                  })
                : o && (t[r] = o)
              : 'style' === r
                ? (t[r] = s(s({}, o), i))
                : 'className' === r &&
                  (t[r] = [o, i].filter(Boolean).join(' '));
          }
          return s(s({}, e), t);
        })(o, r.props);
      return (
        r.type !== u.Fragment && (t.ref = n ? T(n, e) : e),
        u.cloneElement(r, t)
      );
    }
    return u.Children.count(r) > 1 ? u.Children.only(null) : null;
  });
  return ((n.displayName = `${e}.SlotClone`), n);
}
var ue = Symbol('radix.slottable');
function de(e) {
  return (
    u.isValidElement(e) &&
    'function' == typeof e.type &&
    '__radixId' in e.type &&
    e.type.__radixId === ue
  );
}
var pe = [
  'a',
  'button',
  'div',
  'form',
  'h2',
  'h3',
  'img',
  'input',
  'label',
  'li',
  'nav',
  'ol',
  'p',
  'select',
  'span',
  'svg',
  'ul',
].reduce((e, n) => {
  const t = le(`Primitive.${n}`),
    r = u.forwardRef((e, r) => {
      const o = e,
        { asChild: i } = o,
        a = c(o, ['asChild']),
        u = i ? t : n;
      return (
        'undefined' != typeof window && (window[Symbol.for('radix-ui')] = !0),
        d.jsx(u, l(s({}, a), { ref: r }))
      );
    });
  return ((r.displayName = `Primitive.${n}`), l(s({}, e), { [n]: r }));
}, {});
var fe = (null == globalThis ? void 0 : globalThis.document)
    ? u.useLayoutEffect
    : () => {},
  ve = u.forwardRef((e, n) => {
    var t;
    const r = e,
      { container: o } = r,
      i = c(r, ['container']),
      [a, p] = u.useState(!1);
    fe(() => p(!0), []);
    const f =
      o ||
      (a &&
        (null == (t = null == globalThis ? void 0 : globalThis.document)
          ? void 0
          : t.body));
    return f ? h.createPortal(d.jsx(pe.div, l(s({}, i), { ref: n })), f) : null;
  });
ve.displayName = 'Portal';
var he = (e) => {
  const { present: n, children: t } = e,
    r = (function (e) {
      const [n, t] = u.useState(),
        r = u.useRef(null),
        o = u.useRef(e),
        i = u.useRef('none'),
        a = e ? 'mounted' : 'unmounted',
        [s, l] = (function (e, n) {
          return u.useReducer((e, t) => {
            const r = n[e][t];
            return null != r ? r : e;
          }, e);
        })(a, {
          mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
          unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
          unmounted: { MOUNT: 'mounted' },
        });
      return (
        u.useEffect(() => {
          const e = me(r.current);
          i.current = 'mounted' === s ? e : 'none';
        }, [s]),
        fe(() => {
          const n = r.current,
            t = o.current;
          if (t !== e) {
            const r = i.current,
              a = me(n);
            if (e) l('MOUNT');
            else if (
              'none' === a ||
              'none' === (null == n ? void 0 : n.display)
            )
              l('UNMOUNT');
            else {
              l(t && r !== a ? 'ANIMATION_OUT' : 'UNMOUNT');
            }
            o.current = e;
          }
        }, [e, l]),
        fe(() => {
          var e;
          if (n) {
            let t;
            const a = null != (e = n.ownerDocument.defaultView) ? e : window,
              s = (e) => {
                const i = me(r.current).includes(CSS.escape(e.animationName));
                if (e.target === n && i && (l('ANIMATION_END'), !o.current)) {
                  const e = n.style.animationFillMode;
                  ((n.style.animationFillMode = 'forwards'),
                    (t = a.setTimeout(() => {
                      'forwards' === n.style.animationFillMode &&
                        (n.style.animationFillMode = e);
                    })));
                }
              },
              c = (e) => {
                e.target === n && (i.current = me(r.current));
              };
            return (
              n.addEventListener('animationstart', c),
              n.addEventListener('animationcancel', s),
              n.addEventListener('animationend', s),
              () => {
                (a.clearTimeout(t),
                  n.removeEventListener('animationstart', c),
                  n.removeEventListener('animationcancel', s),
                  n.removeEventListener('animationend', s));
              }
            );
          }
          l('ANIMATION_END');
        }, [n, l]),
        {
          isPresent: ['mounted', 'unmountSuspended'].includes(s),
          ref: u.useCallback((e) => {
            ((r.current = e ? getComputedStyle(e) : null), t(e));
          }, []),
        }
      );
    })(n),
    o =
      'function' == typeof t ? t({ present: r.isPresent }) : u.Children.only(t),
    i = N(
      r.ref,
      (function (e) {
        var n, t;
        let r =
            null == (n = Object.getOwnPropertyDescriptor(e.props, 'ref'))
              ? void 0
              : n.get,
          o = r && 'isReactWarning' in r && r.isReactWarning;
        if (o) return e.ref;
        if (
          ((r =
            null == (t = Object.getOwnPropertyDescriptor(e, 'ref'))
              ? void 0
              : t.get),
          (o = r && 'isReactWarning' in r && r.isReactWarning),
          o)
        )
          return e.props.ref;
        return e.props.ref || e.ref;
      })(o),
    );
  return 'function' == typeof t || r.isPresent
    ? u.cloneElement(o, { ref: i })
    : null;
};
function me(e) {
  return (null == e ? void 0 : e.animationName) || 'none';
}
function ge(e) {
  const n = u.useRef(e);
  return (
    u.useEffect(() => {
      n.current = e;
    }),
    u.useMemo(
      () =>
        (...e) => {
          var t;
          return null == (t = n.current) ? void 0 : t.call(n, ...e);
        },
      [],
    )
  );
}
he.displayName = 'Presence';
var we = f[' useInsertionEffect '.trim().toString()] || fe;
function ye({ prop: e, defaultProp: n, onChange: t = () => {}, caller: r }) {
  const [o, i, a] = (function ({ defaultProp: e, onChange: n }) {
      const [t, r] = u.useState(e),
        o = u.useRef(t),
        i = u.useRef(n);
      return (
        we(() => {
          i.current = n;
        }, [n]),
        u.useEffect(() => {
          var e;
          o.current !== t &&
            (null == (e = i.current) || e.call(i, t), (o.current = t));
        }, [t, o]),
        [t, r, i]
      );
    })({ defaultProp: n, onChange: t }),
    s = void 0 !== e,
    l = s ? e : o;
  {
    const n = u.useRef(void 0 !== e);
    u.useEffect(() => {
      const e = n.current;
      if (e !== s) {
      }
      n.current = s;
    }, [s, r]);
  }
  const c = u.useCallback(
    (n) => {
      var t;
      if (s) {
        const r = (function (e) {
          return 'function' == typeof e;
        })(n)
          ? n(e)
          : n;
        r !== e && (null == (t = a.current) || t.call(a, r));
      } else i(n);
    },
    [s, e, i, a],
  );
  return [l, c];
}
var be = Object.freeze({
    position: 'absolute',
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    wordWrap: 'normal',
  }),
  xe = u.forwardRef((e, n) =>
    d.jsx(pe.span, l(s({}, e), { ref: n, style: s(s({}, be), e.style) })),
  );
xe.displayName = 'VisuallyHidden';
var _e = xe,
  Ce = 'ToastProvider',
  [Re, Se, Ee] = $('Toast'),
  [Pe] = O('Toast', [Ee]),
  [je, De] = Pe(Ce),
  Te = (e) => {
    const {
        __scopeToast: n,
        label: t = 'Notification',
        duration: r = 5e3,
        swipeDirection: o = 'right',
        swipeThreshold: i = 50,
        children: a,
      } = e,
      [s, l] = u.useState(null),
      [c, p] = u.useState(0),
      f = u.useRef(!1),
      v = u.useRef(!1);
    return (
      t.trim(),
      d.jsx(Re.Provider, {
        scope: n,
        children: d.jsx(je, {
          scope: n,
          label: t,
          duration: r,
          swipeDirection: o,
          swipeThreshold: i,
          toastCount: c,
          viewport: s,
          onViewportChange: l,
          onToastAdd: u.useCallback(() => p((e) => e + 1), []),
          onToastRemove: u.useCallback(() => p((e) => e - 1), []),
          isFocusedToastEscapeKeyDownRef: f,
          isClosePausedRef: v,
          children: a,
        }),
      })
    );
  };
Te.displayName = Ce;
var Ne = 'ToastViewport',
  Ae = ['F8'],
  Oe = 'toast.viewportPause',
  Me = 'toast.viewportResume',
  Ie = u.forwardRef((e, n) => {
    const t = e,
      {
        __scopeToast: r,
        hotkey: o = Ae,
        label: i = 'Notifications ({hotkey})',
      } = t,
      a = c(t, ['__scopeToast', 'hotkey', 'label']),
      p = De(Ne, r),
      f = Se(r),
      v = u.useRef(null),
      h = u.useRef(null),
      m = u.useRef(null),
      g = u.useRef(null),
      w = N(n, g, p.onViewportChange),
      y = o.join('+').replace(/Key/g, '').replace(/Digit/g, ''),
      b = p.toastCount > 0;
    (u.useEffect(() => {
      const e = (e) => {
        var n;
        0 !== o.length &&
          o.every((n) => e[n] || e.code === n) &&
          (null == (n = g.current) || n.focus());
      };
      return (
        document.addEventListener('keydown', e),
        () => document.removeEventListener('keydown', e)
      );
    }, [o]),
      u.useEffect(() => {
        const e = v.current,
          n = g.current;
        if (b && e && n) {
          const t = () => {
              if (!p.isClosePausedRef.current) {
                const e = new CustomEvent(Oe);
                (n.dispatchEvent(e), (p.isClosePausedRef.current = !0));
              }
            },
            r = () => {
              if (p.isClosePausedRef.current) {
                const e = new CustomEvent(Me);
                (n.dispatchEvent(e), (p.isClosePausedRef.current = !1));
              }
            },
            o = (n) => {
              !e.contains(n.relatedTarget) && r();
            },
            i = () => {
              e.contains(document.activeElement) || r();
            };
          return (
            e.addEventListener('focusin', t),
            e.addEventListener('focusout', o),
            e.addEventListener('pointermove', t),
            e.addEventListener('pointerleave', i),
            window.addEventListener('blur', t),
            window.addEventListener('focus', r),
            () => {
              (e.removeEventListener('focusin', t),
                e.removeEventListener('focusout', o),
                e.removeEventListener('pointermove', t),
                e.removeEventListener('pointerleave', i),
                window.removeEventListener('blur', t),
                window.removeEventListener('focus', r));
            }
          );
        }
      }, [b, p.isClosePausedRef]));
    const x = u.useCallback(
      ({ tabbingDirection: e }) => {
        const n = f().map((n) => {
          const t = n.ref.current,
            r = [t, ...Qe(t)];
          return 'forwards' === e ? r : r.reverse();
        });
        return ('forwards' === e ? n.reverse() : n).flat();
      },
      [f],
    );
    return (
      u.useEffect(() => {
        const e = g.current;
        if (e) {
          const n = (n) => {
            var t, r, o;
            const i = n.altKey || n.ctrlKey || n.metaKey;
            if ('Tab' === n.key && !i) {
              const i = document.activeElement,
                a = n.shiftKey;
              if (n.target === e && a)
                return void (null == (t = h.current) || t.focus());
              const s = x({ tabbingDirection: a ? 'backwards' : 'forwards' }),
                l = s.findIndex((e) => e === i);
              en(s.slice(l + 1))
                ? n.preventDefault()
                : a
                  ? null == (r = h.current) || r.focus()
                  : null == (o = m.current) || o.focus();
            }
          };
          return (
            e.addEventListener('keydown', n),
            () => e.removeEventListener('keydown', n)
          );
        }
      }, [f, x]),
      d.jsxs(se, {
        ref: v,
        role: 'region',
        'aria-label': i.replace('{hotkey}', y),
        tabIndex: -1,
        style: { pointerEvents: b ? void 0 : 'none' },
        children: [
          b &&
            d.jsx(Fe, {
              ref: h,
              onFocusFromOutsideViewport: () => {
                en(x({ tabbingDirection: 'forwards' }));
              },
            }),
          d.jsx(Re.Slot, {
            scope: r,
            children: d.jsx(pe.ol, l(s({ tabIndex: -1 }, a), { ref: w })),
          }),
          b &&
            d.jsx(Fe, {
              ref: m,
              onFocusFromOutsideViewport: () => {
                en(x({ tabbingDirection: 'backwards' }));
              },
            }),
        ],
      })
    );
  });
Ie.displayName = Ne;
var ke = 'ToastFocusProxy',
  Fe = u.forwardRef((e, n) => {
    const t = e,
      { __scopeToast: r, onFocusFromOutsideViewport: o } = t,
      i = c(t, ['__scopeToast', 'onFocusFromOutsideViewport']),
      a = De(ke, r);
    return d.jsx(
      xe,
      l(s({ tabIndex: 0 }, i), {
        ref: n,
        style: { position: 'fixed' },
        onFocus: (e) => {
          var n;
          const t = e.relatedTarget;
          !(null == (n = a.viewport) ? void 0 : n.contains(t)) && o();
        },
      }),
    );
  });
Fe.displayName = ke;
var Le = 'Toast',
  $e = u.forwardRef((e, n) => {
    const t = e,
      { forceMount: r, open: o, defaultOpen: i, onOpenChange: a } = t,
      u = c(t, ['forceMount', 'open', 'defaultOpen', 'onOpenChange']),
      [p, f] = ye({
        prop: o,
        defaultProp: null == i || i,
        onChange: a,
        caller: Le,
      });
    return d.jsx(he, {
      present: r || p,
      children: d.jsx(
        Ke,
        l(s({ open: p }, u), {
          ref: n,
          onClose: () => f(!1),
          onPause: ge(e.onPause),
          onResume: ge(e.onResume),
          onSwipeStart: j(e.onSwipeStart, (e) => {
            e.currentTarget.setAttribute('data-swipe', 'start');
          }),
          onSwipeMove: j(e.onSwipeMove, (e) => {
            const { x: n, y: t } = e.detail.delta;
            (e.currentTarget.setAttribute('data-swipe', 'move'),
              e.currentTarget.style.setProperty(
                '--radix-toast-swipe-move-x',
                `${n}px`,
              ),
              e.currentTarget.style.setProperty(
                '--radix-toast-swipe-move-y',
                `${t}px`,
              ));
          }),
          onSwipeCancel: j(e.onSwipeCancel, (e) => {
            (e.currentTarget.setAttribute('data-swipe', 'cancel'),
              e.currentTarget.style.removeProperty(
                '--radix-toast-swipe-move-x',
              ),
              e.currentTarget.style.removeProperty(
                '--radix-toast-swipe-move-y',
              ),
              e.currentTarget.style.removeProperty('--radix-toast-swipe-end-x'),
              e.currentTarget.style.removeProperty(
                '--radix-toast-swipe-end-y',
              ));
          }),
          onSwipeEnd: j(e.onSwipeEnd, (e) => {
            const { x: n, y: t } = e.detail.delta;
            (e.currentTarget.setAttribute('data-swipe', 'end'),
              e.currentTarget.style.removeProperty(
                '--radix-toast-swipe-move-x',
              ),
              e.currentTarget.style.removeProperty(
                '--radix-toast-swipe-move-y',
              ),
              e.currentTarget.style.setProperty(
                '--radix-toast-swipe-end-x',
                `${n}px`,
              ),
              e.currentTarget.style.setProperty(
                '--radix-toast-swipe-end-y',
                `${t}px`,
              ),
              f(!1));
          }),
        }),
      ),
    });
  });
$e.displayName = Le;
var [We, Ve] = Pe(Le, { onClose() {} }),
  Ke = u.forwardRef((e, n) => {
    const t = e,
      {
        __scopeToast: r,
        type: o = 'foreground',
        duration: i,
        open: a,
        onClose: p,
        onEscapeKeyDown: f,
        onPause: h,
        onResume: m,
        onSwipeStart: g,
        onSwipeMove: w,
        onSwipeCancel: y,
        onSwipeEnd: b,
      } = t,
      x = c(t, [
        '__scopeToast',
        'type',
        'duration',
        'open',
        'onClose',
        'onEscapeKeyDown',
        'onPause',
        'onResume',
        'onSwipeStart',
        'onSwipeMove',
        'onSwipeCancel',
        'onSwipeEnd',
      ]),
      _ = De(Le, r),
      [C, R] = u.useState(null),
      S = N(n, (e) => R(e)),
      E = u.useRef(null),
      P = u.useRef(null),
      D = i || _.duration,
      T = u.useRef(0),
      A = u.useRef(D),
      O = u.useRef(0),
      { onToastAdd: M, onToastRemove: I } = _,
      k = ge(() => {
        var e;
        ((null == C ? void 0 : C.contains(document.activeElement)) &&
          (null == (e = _.viewport) || e.focus()),
          p());
      }),
      F = u.useCallback(
        (e) => {
          e &&
            e !== 1 / 0 &&
            (window.clearTimeout(O.current),
            (T.current = new Date().getTime()),
            (O.current = window.setTimeout(k, e)));
        },
        [k],
      );
    (u.useEffect(() => {
      const e = _.viewport;
      if (e) {
        const n = () => {
            (F(A.current), null == m || m());
          },
          t = () => {
            const e = new Date().getTime() - T.current;
            ((A.current = A.current - e),
              window.clearTimeout(O.current),
              null == h || h());
          };
        return (
          e.addEventListener(Oe, t),
          e.addEventListener(Me, n),
          () => {
            (e.removeEventListener(Oe, t), e.removeEventListener(Me, n));
          }
        );
      }
    }, [_.viewport, D, h, m, F]),
      u.useEffect(() => {
        a && !_.isClosePausedRef.current && F(D);
      }, [a, D, _.isClosePausedRef, F]),
      u.useEffect(() => (M(), () => I()), [M, I]));
    const L = u.useMemo(() => (C ? qe(C) : null), [C]);
    return _.viewport
      ? d.jsxs(d.Fragment, {
          children: [
            L &&
              d.jsx(He, {
                __scopeToast: r,
                role: 'status',
                'aria-live': 'foreground' === o ? 'assertive' : 'polite',
                children: L,
              }),
            d.jsx(We, {
              scope: r,
              onClose: k,
              children: v.createPortal(
                d.jsx(Re.ItemSlot, {
                  scope: r,
                  children: d.jsx(ae, {
                    asChild: !0,
                    onEscapeKeyDown: j(f, () => {
                      (_.isFocusedToastEscapeKeyDownRef.current || k(),
                        (_.isFocusedToastEscapeKeyDownRef.current = !1));
                    }),
                    children: d.jsx(
                      pe.li,
                      l(
                        s(
                          {
                            tabIndex: 0,
                            'data-state': a ? 'open' : 'closed',
                            'data-swipe-direction': _.swipeDirection,
                          },
                          x,
                        ),
                        {
                          ref: S,
                          style: s(
                            { userSelect: 'none', touchAction: 'none' },
                            e.style,
                          ),
                          onKeyDown: j(e.onKeyDown, (e) => {
                            'Escape' === e.key &&
                              (null == f || f(e.nativeEvent),
                              e.nativeEvent.defaultPrevented ||
                                ((_.isFocusedToastEscapeKeyDownRef.current =
                                  !0),
                                k()));
                          }),
                          onPointerDown: j(e.onPointerDown, (e) => {
                            0 === e.button &&
                              (E.current = { x: e.clientX, y: e.clientY });
                          }),
                          onPointerMove: j(e.onPointerMove, (e) => {
                            if (!E.current) return;
                            const n = e.clientX - E.current.x,
                              t = e.clientY - E.current.y,
                              r = Boolean(P.current),
                              o = ['left', 'right'].includes(_.swipeDirection),
                              i = ['left', 'up'].includes(_.swipeDirection)
                                ? Math.min
                                : Math.max,
                              a = o ? i(0, n) : 0,
                              s = o ? 0 : i(0, t),
                              l = 'touch' === e.pointerType ? 10 : 2,
                              c = { x: a, y: s },
                              u = { originalEvent: e, delta: c };
                            r
                              ? ((P.current = c),
                                Ze('toast.swipeMove', w, u, { discrete: !1 }))
                              : Je(c, _.swipeDirection, l)
                                ? ((P.current = c),
                                  Ze('toast.swipeStart', g, u, {
                                    discrete: !1,
                                  }),
                                  e.target.setPointerCapture(e.pointerId))
                                : (Math.abs(n) > l || Math.abs(t) > l) &&
                                  (E.current = null);
                          }),
                          onPointerUp: j(e.onPointerUp, (e) => {
                            const n = P.current,
                              t = e.target;
                            if (
                              (t.hasPointerCapture(e.pointerId) &&
                                t.releasePointerCapture(e.pointerId),
                              (P.current = null),
                              (E.current = null),
                              n)
                            ) {
                              const t = e.currentTarget,
                                r = { originalEvent: e, delta: n };
                              (Je(n, _.swipeDirection, _.swipeThreshold)
                                ? Ze('toast.swipeEnd', b, r, { discrete: !0 })
                                : Ze('toast.swipeCancel', y, r, {
                                    discrete: !0,
                                  }),
                                t.addEventListener(
                                  'click',
                                  (e) => e.preventDefault(),
                                  { once: !0 },
                                ));
                            }
                          }),
                        },
                      ),
                    ),
                  }),
                }),
                _.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  He = (e) => {
    const n = e,
      { __scopeToast: t, children: r } = n,
      o = c(n, ['__scopeToast', 'children']),
      i = De(Le, t),
      [a, p] = u.useState(!1),
      [f, v] = u.useState(!1);
    return (
      (function (e = () => {}) {
        const n = ge(e);
        fe(() => {
          let e = 0,
            t = 0;
          return (
            (e = window.requestAnimationFrame(
              () => (t = window.requestAnimationFrame(n)),
            )),
            () => {
              (window.cancelAnimationFrame(e), window.cancelAnimationFrame(t));
            }
          );
        }, [n]);
      })(() => p(!0)),
      u.useEffect(() => {
        const e = window.setTimeout(() => v(!0), 1e3);
        return () => window.clearTimeout(e);
      }, []),
      f
        ? null
        : d.jsx(ve, {
            asChild: !0,
            children: d.jsx(
              xe,
              l(s({}, o), {
                children:
                  a && d.jsxs(d.Fragment, { children: [i.label, ' ', r] }),
              }),
            ),
          })
    );
  },
  Be = u.forwardRef((e, n) => {
    const t = e,
      { __scopeToast: r } = t,
      o = c(t, ['__scopeToast']);
    return d.jsx(pe.div, l(s({}, o), { ref: n }));
  });
Be.displayName = 'ToastTitle';
var Ue = u.forwardRef((e, n) => {
  const t = e,
    { __scopeToast: r } = t,
    o = c(t, ['__scopeToast']);
  return d.jsx(pe.div, l(s({}, o), { ref: n }));
});
Ue.displayName = 'ToastDescription';
var ze = u.forwardRef((e, n) => {
  const t = e,
    { altText: r } = t,
    o = c(t, ['altText']);
  return r.trim()
    ? d.jsx(Ye, {
        altText: r,
        asChild: !0,
        children: d.jsx(Xe, l(s({}, o), { ref: n })),
      })
    : null;
});
ze.displayName = 'ToastAction';
var Ge = 'ToastClose',
  Xe = u.forwardRef((e, n) => {
    const t = e,
      { __scopeToast: r } = t,
      o = c(t, ['__scopeToast']),
      i = Ve(Ge, r);
    return d.jsx(Ye, {
      asChild: !0,
      children: d.jsx(
        pe.button,
        l(s({ type: 'button' }, o), {
          ref: n,
          onClick: j(e.onClick, i.onClose),
        }),
      ),
    });
  });
Xe.displayName = Ge;
var Ye = u.forwardRef((e, n) => {
  const t = e,
    { __scopeToast: r, altText: o } = t,
    i = c(t, ['__scopeToast', 'altText']);
  return d.jsx(
    pe.div,
    l(
      s(
        {
          'data-radix-toast-announce-exclude': '',
          'data-radix-toast-announce-alt': o || void 0,
        },
        i,
      ),
      { ref: n },
    ),
  );
});
function qe(e) {
  const n = [];
  return (
    Array.from(e.childNodes).forEach((e) => {
      if (
        (e.nodeType === e.TEXT_NODE && e.textContent && n.push(e.textContent),
        (function (e) {
          return e.nodeType === e.ELEMENT_NODE;
        })(e))
      ) {
        const t = e.ariaHidden || e.hidden || 'none' === e.style.display,
          r = '' === e.dataset.radixToastAnnounceExclude;
        if (!t)
          if (r) {
            const t = e.dataset.radixToastAnnounceAlt;
            t && n.push(t);
          } else n.push(...qe(e));
      }
    }),
    n
  );
}
function Ze(e, n, t, { discrete: r }) {
  const o = t.originalEvent.currentTarget,
    i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: t });
  (n && o.addEventListener(e, n, { once: !0 }),
    r
      ? (function (e, n) {
          e && v.flushSync(() => e.dispatchEvent(n));
        })(o, i)
      : o.dispatchEvent(i));
}
var Je = (e, n, t = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    i = r > o;
  return 'left' === n || 'right' === n ? i && r > t : !i && o > t;
};
function Qe(e) {
  const n = [],
    t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (e) => {
        const n = 'INPUT' === e.tagName && 'hidden' === e.type;
        return e.disabled || e.hidden || n
          ? NodeFilter.FILTER_SKIP
          : e.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; t.nextNode(); ) n.push(t.currentNode);
  return n;
}
function en(e) {
  const n = document.activeElement;
  return e.some((e) => e === n || (e.focus(), document.activeElement !== n));
}
var nn = Te,
  tn = Ie,
  rn = $e,
  on = Be,
  an = Ue,
  sn = ze,
  ln = Xe,
  cn = Symbol.for('react.lazy'),
  un = f[' use '.trim().toString()];
function dn(e) {
  return (
    null != e &&
    'object' == typeof e &&
    '$$typeof' in e &&
    e.$$typeof === cn &&
    '_payload' in e &&
    'object' == typeof (n = e._payload) &&
    null !== n &&
    'then' in n
  );
  var n;
}
function pn(e) {
  const n = vn(e),
    t = u.forwardRef((e, t) => {
      let r = e,
        { children: o } = r,
        i = c(r, ['children']);
      dn(o) && 'function' == typeof un && (o = un(o._payload));
      const a = u.Children.toArray(o),
        p = a.find(wn);
      if (p) {
        const e = p.props.children,
          r = a.map((n) =>
            n === p
              ? u.Children.count(e) > 1
                ? u.Children.only(null)
                : u.isValidElement(e)
                  ? e.props.children
                  : null
              : n,
          );
        return d.jsx(
          n,
          l(s({}, i), {
            ref: t,
            children: u.isValidElement(e) ? u.cloneElement(e, void 0, r) : null,
          }),
        );
      }
      return d.jsx(n, l(s({}, i), { ref: t, children: o }));
    });
  return ((t.displayName = `${e}.Slot`), t);
}
var fn = pn('Slot');
function vn(e) {
  const n = u.forwardRef((e, n) => {
    let t = e,
      { children: r } = t,
      o = c(t, ['children']);
    if (
      (dn(r) && 'function' == typeof un && (r = un(r._payload)),
      u.isValidElement(r))
    ) {
      const e = (function (e) {
          var n, t;
          let r =
              null == (n = Object.getOwnPropertyDescriptor(e.props, 'ref'))
                ? void 0
                : n.get,
            o = r && 'isReactWarning' in r && r.isReactWarning;
          if (o) return e.ref;
          if (
            ((r =
              null == (t = Object.getOwnPropertyDescriptor(e, 'ref'))
                ? void 0
                : t.get),
            (o = r && 'isReactWarning' in r && r.isReactWarning),
            o)
          )
            return e.props.ref;
          return e.props.ref || e.ref;
        })(r),
        t = (function (e, n) {
          const t = s({}, n);
          for (const r in n) {
            const o = e[r],
              i = n[r];
            /^on[A-Z]/.test(r)
              ? o && i
                ? (t[r] = (...e) => {
                    const n = i(...e);
                    return (o(...e), n);
                  })
                : o && (t[r] = o)
              : 'style' === r
                ? (t[r] = s(s({}, o), i))
                : 'className' === r &&
                  (t[r] = [o, i].filter(Boolean).join(' '));
          }
          return s(s({}, e), t);
        })(o, r.props);
      return (
        r.type !== u.Fragment && (t.ref = n ? T(n, e) : e),
        u.cloneElement(r, t)
      );
    }
    return u.Children.count(r) > 1 ? u.Children.only(null) : null;
  });
  return ((n.displayName = `${e}.SlotClone`), n);
}
var hn = Symbol('radix.slottable');
function mn(e) {
  const n = ({ children: e }) => d.jsx(d.Fragment, { children: e });
  return ((n.displayName = `${e}.Slottable`), (n.__radixId = hn), n);
}
var gn = mn('Slottable');
function wn(e) {
  return (
    u.isValidElement(e) &&
    'function' == typeof e.type &&
    '__radixId' in e.type &&
    e.type.__radixId === hn
  );
}
var yn = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'select',
    'span',
    'svg',
    'ul',
  ].reduce((e, n) => {
    const t = pn(`Primitive.${n}`),
      r = u.forwardRef((e, r) => {
        const o = e,
          { asChild: i } = o,
          a = c(o, ['asChild']),
          u = i ? t : n;
        return (
          'undefined' != typeof window && (window[Symbol.for('radix-ui')] = !0),
          d.jsx(u, l(s({}, a), { ref: r }))
        );
      });
    return ((r.displayName = `Primitive.${n}`), l(s({}, e), { [n]: r }));
  }, {}),
  bn = 'horizontal',
  xn = ['horizontal', 'vertical'],
  _n = u.forwardRef((e, n) => {
    const t = e,
      { decorative: r, orientation: o = bn } = t,
      i = c(t, ['decorative', 'orientation']),
      a = (function (e) {
        return xn.includes(e);
      })(o)
        ? o
        : bn,
      u = r
        ? { role: 'none' }
        : {
            'aria-orientation': 'vertical' === a ? a : void 0,
            role: 'separator',
          };
    return d.jsx(yn.div, l(s(s({ 'data-orientation': a }, u), i), { ref: n }));
  });
_n.displayName = 'Separator';
var Cn = _n;
function Rn(e, n, { checkForDefaultPrevented: t = !0 } = {}) {
  return function (r) {
    if ((null == e || e(r), !1 === t || !r.defaultPrevented))
      return null == n ? void 0 : n(r);
  };
}
function Sn(e, n) {
  if ('function' == typeof e) return e(n);
  null != e && (e.current = n);
}
function En(...e) {
  return (n) => {
    let t = !1;
    const r = e.map((e) => {
      const r = Sn(e, n);
      return (t || 'function' != typeof r || (t = !0), r);
    });
    if (t)
      return () => {
        for (let n = 0; n < r.length; n++) {
          const t = r[n];
          'function' == typeof t ? t() : Sn(e[n], null);
        }
      };
  };
}
function Pn(...e) {
  return u.useCallback(En(...e), e);
}
function jn(...e) {
  const n = e[0];
  if (1 === e.length) return n;
  const t = () => {
    const t = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
    return function (e) {
      const r = t.reduce((n, { useScope: t, scopeName: r }) => {
        const o = t(e)[`__scope${r}`];
        return s(s({}, n), o);
      }, {});
      return u.useMemo(() => ({ [`__scope${n.scopeName}`]: r }), [r]);
    };
  };
  return ((t.scopeName = n.scopeName), t);
}
var Dn = Boolean(null == globalThis ? void 0 : globalThis.document)
    ? u.useLayoutEffect
    : () => {},
  Tn = f['useId'.toString()] || (() => {}),
  Nn = 0;
function An(e) {
  const [n, t] = u.useState(Tn());
  return (
    Dn(() => {
      t((e) => (null != e ? e : String(Nn++)));
    }, [e]),
    e || (n ? `radix-${n}` : '')
  );
}
function On(e) {
  const n = u.useRef(e);
  return (
    u.useEffect(() => {
      n.current = e;
    }),
    u.useMemo(
      () =>
        (...e) => {
          var t;
          return null == (t = n.current) ? void 0 : t.call(n, ...e);
        },
      [],
    )
  );
}
function Mn({ prop: e, defaultProp: n, onChange: t = () => {} }) {
  const [r, o] = (function ({ defaultProp: e, onChange: n }) {
      const t = u.useState(e),
        [r] = t,
        o = u.useRef(r),
        i = On(n);
      return (
        u.useEffect(() => {
          o.current !== r && (i(r), (o.current = r));
        }, [r, o, i]),
        t
      );
    })({ defaultProp: n, onChange: t }),
    i = void 0 !== e,
    a = i ? e : r,
    s = On(t);
  return [
    a,
    u.useCallback(
      (n) => {
        if (i) {
          const t = 'function' == typeof n ? n(e) : n;
          t !== e && s(t);
        } else o(n);
      },
      [i, e, o, s],
    ),
  ];
}
function In(e, n) {
  if ('function' == typeof e) return e(n);
  null != e && (e.current = n);
}
function kn(...e) {
  return (n) => {
    let t = !1;
    const r = e.map((e) => {
      const r = In(e, n);
      return (t || 'function' != typeof r || (t = !0), r);
    });
    if (t)
      return () => {
        for (let n = 0; n < r.length; n++) {
          const t = r[n];
          'function' == typeof t ? t() : In(e[n], null);
        }
      };
  };
}
var Fn = u.forwardRef((e, n) => {
  const t = e,
    { children: r } = t,
    o = c(t, ['children']),
    i = u.Children.toArray(r),
    a = i.find(Wn);
  if (a) {
    const e = a.props.children,
      t = i.map((n) =>
        n === a
          ? u.Children.count(e) > 1
            ? u.Children.only(null)
            : u.isValidElement(e)
              ? e.props.children
              : null
          : n,
      );
    return d.jsx(
      Ln,
      l(s({}, o), {
        ref: n,
        children: u.isValidElement(e) ? u.cloneElement(e, void 0, t) : null,
      }),
    );
  }
  return d.jsx(Ln, l(s({}, o), { ref: n, children: r }));
});
Fn.displayName = 'Slot';
var Ln = u.forwardRef((e, n) => {
  const t = e,
    { children: r } = t,
    o = c(t, ['children']);
  if (u.isValidElement(r)) {
    const e = (function (e) {
      var n, t;
      let r =
          null == (n = Object.getOwnPropertyDescriptor(e.props, 'ref'))
            ? void 0
            : n.get,
        o = r && 'isReactWarning' in r && r.isReactWarning;
      if (o) return e.ref;
      if (
        ((r =
          null == (t = Object.getOwnPropertyDescriptor(e, 'ref'))
            ? void 0
            : t.get),
        (o = r && 'isReactWarning' in r && r.isReactWarning),
        o)
      )
        return e.props.ref;
      return e.props.ref || e.ref;
    })(r);
    return u.cloneElement(
      r,
      l(
        s(
          {},
          (function (e, n) {
            const t = s({}, n);
            for (const r in n) {
              const o = e[r],
                i = n[r];
              /^on[A-Z]/.test(r)
                ? o && i
                  ? (t[r] = (...e) => {
                      (i(...e), o(...e));
                    })
                  : o && (t[r] = o)
                : 'style' === r
                  ? (t[r] = s(s({}, o), i))
                  : 'className' === r &&
                    (t[r] = [o, i].filter(Boolean).join(' '));
            }
            return s(s({}, e), t);
          })(o, r.props),
        ),
        { ref: n ? kn(n, e) : e },
      ),
    );
  }
  return u.Children.count(r) > 1 ? u.Children.only(null) : null;
});
Ln.displayName = 'SlotClone';
var $n = ({ children: e }) => d.jsx(d.Fragment, { children: e });
function Wn(e) {
  return u.isValidElement(e) && e.type === $n;
}
var Vn = [
  'a',
  'button',
  'div',
  'form',
  'h2',
  'h3',
  'img',
  'input',
  'label',
  'li',
  'nav',
  'ol',
  'p',
  'span',
  'svg',
  'ul',
].reduce((e, n) => {
  const t = u.forwardRef((e, t) => {
    const r = e,
      { asChild: o } = r,
      i = c(r, ['asChild']),
      a = o ? Fn : n;
    return (
      'undefined' != typeof window && (window[Symbol.for('radix-ui')] = !0),
      d.jsx(a, l(s({}, i), { ref: t }))
    );
  });
  return ((t.displayName = `Primitive.${n}`), l(s({}, e), { [n]: t }));
}, {});
function Kn(e) {
  const n = u.useRef(e);
  return (
    u.useEffect(() => {
      n.current = e;
    }),
    u.useMemo(
      () =>
        (...e) => {
          var t;
          return null == (t = n.current) ? void 0 : t.call(n, ...e);
        },
      [],
    )
  );
}
var Hn = 'focusScope.autoFocusOnMount',
  Bn = 'focusScope.autoFocusOnUnmount',
  Un = { bubbles: !1, cancelable: !0 },
  zn = u.forwardRef((e, n) => {
    const t = e,
      {
        loop: r = !1,
        trapped: o = !1,
        onMountAutoFocus: i,
        onUnmountAutoFocus: a,
      } = t,
      p = c(t, ['loop', 'trapped', 'onMountAutoFocus', 'onUnmountAutoFocus']),
      [f, v] = u.useState(null),
      h = Kn(i),
      m = Kn(a),
      g = u.useRef(null),
      w = (function (...e) {
        return u.useCallback(kn(...e), e);
      })(n, (e) => v(e)),
      y = u.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    (u.useEffect(() => {
      if (o) {
        let e = function (e) {
            if (y.paused || !f) return;
            const n = e.target;
            f.contains(n) ? (g.current = n) : qn(g.current, { select: !0 });
          },
          n = function (e) {
            if (y.paused || !f) return;
            const n = e.relatedTarget;
            null !== n && (f.contains(n) || qn(g.current, { select: !0 }));
          },
          t = function (e) {
            if (document.activeElement === document.body)
              for (const n of e) n.removedNodes.length > 0 && qn(f);
          };
        (document.addEventListener('focusin', e),
          document.addEventListener('focusout', n));
        const r = new MutationObserver(t);
        return (
          f && r.observe(f, { childList: !0, subtree: !0 }),
          () => {
            (document.removeEventListener('focusin', e),
              document.removeEventListener('focusout', n),
              r.disconnect());
          }
        );
      }
    }, [o, f, y.paused]),
      u.useEffect(() => {
        if (f) {
          Zn.add(y);
          const n = document.activeElement;
          if (!f.contains(n)) {
            const t = new CustomEvent(Hn, Un);
            (f.addEventListener(Hn, h),
              f.dispatchEvent(t),
              t.defaultPrevented ||
                (!(function (e, { select: n = !1 } = {}) {
                  const t = document.activeElement;
                  for (const r of e)
                    if ((qn(r, { select: n }), document.activeElement !== t))
                      return;
                })(((e = Gn(f)), e.filter((e) => 'A' !== e.tagName)), {
                  select: !0,
                }),
                document.activeElement === n && qn(f)));
          }
          return () => {
            (f.removeEventListener(Hn, h),
              setTimeout(() => {
                const e = new CustomEvent(Bn, Un);
                (f.addEventListener(Bn, m),
                  f.dispatchEvent(e),
                  e.defaultPrevented ||
                    qn(null != n ? n : document.body, { select: !0 }),
                  f.removeEventListener(Bn, m),
                  Zn.remove(y));
              }, 0));
          };
        }
        var e;
      }, [f, h, m, y]));
    const b = u.useCallback(
      (e) => {
        if (!r && !o) return;
        if (y.paused) return;
        const n = 'Tab' === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
          t = document.activeElement;
        if (n && t) {
          const n = e.currentTarget,
            [o, i] = (function (e) {
              const n = Gn(e),
                t = Xn(n, e),
                r = Xn(n.reverse(), e);
              return [t, r];
            })(n);
          o && i
            ? e.shiftKey || t !== i
              ? e.shiftKey &&
                t === o &&
                (e.preventDefault(), r && qn(i, { select: !0 }))
              : (e.preventDefault(), r && qn(o, { select: !0 }))
            : t === n && e.preventDefault();
        }
      },
      [r, o, y.paused],
    );
    return d.jsx(Vn.div, l(s({ tabIndex: -1 }, p), { ref: w, onKeyDown: b }));
  });
function Gn(e) {
  const n = [],
    t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (e) => {
        const n = 'INPUT' === e.tagName && 'hidden' === e.type;
        return e.disabled || e.hidden || n
          ? NodeFilter.FILTER_SKIP
          : e.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; t.nextNode(); ) n.push(t.currentNode);
  return n;
}
function Xn(e, n) {
  for (const t of e) if (!Yn(t, { upTo: n })) return t;
}
function Yn(e, { upTo: n }) {
  if ('hidden' === getComputedStyle(e).visibility) return !0;
  for (; e; ) {
    if (void 0 !== n && e === n) return !1;
    if ('none' === getComputedStyle(e).display) return !0;
    e = e.parentElement;
  }
  return !1;
}
function qn(e, { select: n = !1 } = {}) {
  if (e && e.focus) {
    const t = document.activeElement;
    (e.focus({ preventScroll: !0 }),
      e !== t &&
        (function (e) {
          return e instanceof HTMLInputElement && 'select' in e;
        })(e) &&
        n &&
        e.select());
  }
}
zn.displayName = 'FocusScope';
var Zn = (function () {
  let e = [];
  return {
    add(n) {
      const t = e[0];
      (n !== t && (null == t || t.pause()), (e = Jn(e, n)), e.unshift(n));
    },
    remove(n) {
      var t;
      ((e = Jn(e, n)), null == (t = e[0]) || t.resume());
    },
  };
})();
function Jn(e, n) {
  const t = [...e],
    r = t.indexOf(n);
  return (-1 !== r && t.splice(r, 1), t);
}
function Qn(e, n) {
  if ('function' == typeof e) return e(n);
  null != e && (e.current = n);
}
function et(...e) {
  return (n) => {
    let t = !1;
    const r = e.map((e) => {
      const r = Qn(e, n);
      return (t || 'function' != typeof r || (t = !0), r);
    });
    if (t)
      return () => {
        for (let n = 0; n < r.length; n++) {
          const t = r[n];
          'function' == typeof t ? t() : Qn(e[n], null);
        }
      };
  };
}
var nt = u.forwardRef((e, n) => {
  const t = e,
    { children: r } = t,
    o = c(t, ['children']),
    i = u.Children.toArray(r),
    a = i.find(ot);
  if (a) {
    const e = a.props.children,
      t = i.map((n) =>
        n === a
          ? u.Children.count(e) > 1
            ? u.Children.only(null)
            : u.isValidElement(e)
              ? e.props.children
              : null
          : n,
      );
    return d.jsx(
      tt,
      l(s({}, o), {
        ref: n,
        children: u.isValidElement(e) ? u.cloneElement(e, void 0, t) : null,
      }),
    );
  }
  return d.jsx(tt, l(s({}, o), { ref: n, children: r }));
});
nt.displayName = 'Slot';
var tt = u.forwardRef((e, n) => {
  const t = e,
    { children: r } = t,
    o = c(t, ['children']);
  if (u.isValidElement(r)) {
    const e = (function (e) {
      var n, t;
      let r =
          null == (n = Object.getOwnPropertyDescriptor(e.props, 'ref'))
            ? void 0
            : n.get,
        o = r && 'isReactWarning' in r && r.isReactWarning;
      if (o) return e.ref;
      if (
        ((r =
          null == (t = Object.getOwnPropertyDescriptor(e, 'ref'))
            ? void 0
            : t.get),
        (o = r && 'isReactWarning' in r && r.isReactWarning),
        o)
      )
        return e.props.ref;
      return e.props.ref || e.ref;
    })(r);
    return u.cloneElement(
      r,
      l(
        s(
          {},
          (function (e, n) {
            const t = s({}, n);
            for (const r in n) {
              const o = e[r],
                i = n[r];
              /^on[A-Z]/.test(r)
                ? o && i
                  ? (t[r] = (...e) => {
                      (i(...e), o(...e));
                    })
                  : o && (t[r] = o)
                : 'style' === r
                  ? (t[r] = s(s({}, o), i))
                  : 'className' === r &&
                    (t[r] = [o, i].filter(Boolean).join(' '));
            }
            return s(s({}, e), t);
          })(o, r.props),
        ),
        { ref: n ? et(n, e) : e },
      ),
    );
  }
  return u.Children.count(r) > 1 ? u.Children.only(null) : null;
});
tt.displayName = 'SlotClone';
var rt = ({ children: e }) => d.jsx(d.Fragment, { children: e });
function ot(e) {
  return u.isValidElement(e) && e.type === rt;
}
var it = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'span',
    'svg',
    'ul',
  ].reduce((e, n) => {
    const t = u.forwardRef((e, t) => {
      const r = e,
        { asChild: o } = r,
        i = c(r, ['asChild']),
        a = o ? nt : n;
      return (
        'undefined' != typeof window && (window[Symbol.for('radix-ui')] = !0),
        d.jsx(a, l(s({}, i), { ref: t }))
      );
    });
    return ((t.displayName = `Primitive.${n}`), l(s({}, e), { [n]: t }));
  }, {}),
  at = Boolean(null == globalThis ? void 0 : globalThis.document)
    ? u.useLayoutEffect
    : () => {},
  st = u.forwardRef((e, n) => {
    var t;
    const r = e,
      { container: o } = r,
      i = c(r, ['container']),
      [a, p] = u.useState(!1);
    at(() => p(!0), []);
    const f =
      o ||
      (a &&
        (null == (t = null == globalThis ? void 0 : globalThis.document)
          ? void 0
          : t.body));
    return f ? h.createPortal(d.jsx(it.div, l(s({}, i), { ref: n })), f) : null;
  });
st.displayName = 'Portal';
var lt = (e) => {
  const { present: n, children: t } = e,
    r = (function (e) {
      const [n, t] = u.useState(),
        r = u.useRef({}),
        o = u.useRef(e),
        i = u.useRef('none'),
        a = e ? 'mounted' : 'unmounted',
        [s, l] = (function (e, n) {
          return u.useReducer((e, t) => {
            const r = n[e][t];
            return null != r ? r : e;
          }, e);
        })(a, {
          mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
          unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
          unmounted: { MOUNT: 'mounted' },
        });
      return (
        u.useEffect(() => {
          const e = ct(r.current);
          i.current = 'mounted' === s ? e : 'none';
        }, [s]),
        Dn(() => {
          const n = r.current,
            t = o.current;
          if (t !== e) {
            const r = i.current,
              a = ct(n);
            if (e) l('MOUNT');
            else if (
              'none' === a ||
              'none' === (null == n ? void 0 : n.display)
            )
              l('UNMOUNT');
            else {
              l(t && r !== a ? 'ANIMATION_OUT' : 'UNMOUNT');
            }
            o.current = e;
          }
        }, [e, l]),
        Dn(() => {
          var e;
          if (n) {
            let t;
            const a = null != (e = n.ownerDocument.defaultView) ? e : window,
              s = (e) => {
                const i = ct(r.current).includes(e.animationName);
                if (e.target === n && i && (l('ANIMATION_END'), !o.current)) {
                  const e = n.style.animationFillMode;
                  ((n.style.animationFillMode = 'forwards'),
                    (t = a.setTimeout(() => {
                      'forwards' === n.style.animationFillMode &&
                        (n.style.animationFillMode = e);
                    })));
                }
              },
              c = (e) => {
                e.target === n && (i.current = ct(r.current));
              };
            return (
              n.addEventListener('animationstart', c),
              n.addEventListener('animationcancel', s),
              n.addEventListener('animationend', s),
              () => {
                (a.clearTimeout(t),
                  n.removeEventListener('animationstart', c),
                  n.removeEventListener('animationcancel', s),
                  n.removeEventListener('animationend', s));
              }
            );
          }
          l('ANIMATION_END');
        }, [n, l]),
        {
          isPresent: ['mounted', 'unmountSuspended'].includes(s),
          ref: u.useCallback((e) => {
            (e && (r.current = getComputedStyle(e)), t(e));
          }, []),
        }
      );
    })(n),
    o =
      'function' == typeof t ? t({ present: r.isPresent }) : u.Children.only(t),
    i = Pn(
      r.ref,
      (function (e) {
        var n, t;
        let r =
            null == (n = Object.getOwnPropertyDescriptor(e.props, 'ref'))
              ? void 0
              : n.get,
          o = r && 'isReactWarning' in r && r.isReactWarning;
        if (o) return e.ref;
        if (
          ((r =
            null == (t = Object.getOwnPropertyDescriptor(e, 'ref'))
              ? void 0
              : t.get),
          (o = r && 'isReactWarning' in r && r.isReactWarning),
          o)
        )
          return e.props.ref;
        return e.props.ref || e.ref;
      })(o),
    );
  return 'function' == typeof t || r.isPresent
    ? u.cloneElement(o, { ref: i })
    : null;
};
function ct(e) {
  return (null == e ? void 0 : e.animationName) || 'none';
}
lt.displayName = 'Presence';
var ut = u.forwardRef((e, n) => {
  const t = e,
    { children: r } = t,
    o = c(t, ['children']),
    i = u.Children.toArray(r),
    a = i.find(ft);
  if (a) {
    const e = a.props.children,
      t = i.map((n) =>
        n === a
          ? u.Children.count(e) > 1
            ? u.Children.only(null)
            : u.isValidElement(e)
              ? e.props.children
              : null
          : n,
      );
    return d.jsx(
      dt,
      l(s({}, o), {
        ref: n,
        children: u.isValidElement(e) ? u.cloneElement(e, void 0, t) : null,
      }),
    );
  }
  return d.jsx(dt, l(s({}, o), { ref: n, children: r }));
});
ut.displayName = 'Slot';
var dt = u.forwardRef((e, n) => {
  const t = e,
    { children: r } = t,
    o = c(t, ['children']);
  if (u.isValidElement(r)) {
    const e = (function (e) {
      var n, t;
      let r =
          null == (n = Object.getOwnPropertyDescriptor(e.props, 'ref'))
            ? void 0
            : n.get,
        o = r && 'isReactWarning' in r && r.isReactWarning;
      if (o) return e.ref;
      if (
        ((r =
          null == (t = Object.getOwnPropertyDescriptor(e, 'ref'))
            ? void 0
            : t.get),
        (o = r && 'isReactWarning' in r && r.isReactWarning),
        o)
      )
        return e.props.ref;
      return e.props.ref || e.ref;
    })(r);
    return u.cloneElement(
      r,
      l(
        s(
          {},
          (function (e, n) {
            const t = s({}, n);
            for (const r in n) {
              const o = e[r],
                i = n[r];
              /^on[A-Z]/.test(r)
                ? o && i
                  ? (t[r] = (...e) => {
                      (i(...e), o(...e));
                    })
                  : o && (t[r] = o)
                : 'style' === r
                  ? (t[r] = s(s({}, o), i))
                  : 'className' === r &&
                    (t[r] = [o, i].filter(Boolean).join(' '));
            }
            return s(s({}, e), t);
          })(o, r.props),
        ),
        { ref: n ? En(n, e) : e },
      ),
    );
  }
  return u.Children.count(r) > 1 ? u.Children.only(null) : null;
});
dt.displayName = 'SlotClone';
var pt = ({ children: e }) => d.jsx(d.Fragment, { children: e });
function ft(e) {
  return u.isValidElement(e) && e.type === pt;
}
var vt = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'span',
    'svg',
    'ul',
  ].reduce((e, n) => {
    const t = u.forwardRef((e, t) => {
      const r = e,
        { asChild: o } = r,
        i = c(r, ['asChild']),
        a = o ? ut : n;
      return (
        'undefined' != typeof window && (window[Symbol.for('radix-ui')] = !0),
        d.jsx(a, l(s({}, i), { ref: t }))
      );
    });
    return ((t.displayName = `Primitive.${n}`), l(s({}, e), { [n]: t }));
  }, {}),
  ht = 0;
function mt() {
  u.useEffect(() => {
    var e, n;
    const t = document.querySelectorAll('[data-radix-focus-guard]');
    return (
      document.body.insertAdjacentElement(
        'afterbegin',
        null != (e = t[0]) ? e : gt(),
      ),
      document.body.insertAdjacentElement(
        'beforeend',
        null != (n = t[1]) ? n : gt(),
      ),
      ht++,
      () => {
        (1 === ht &&
          document
            .querySelectorAll('[data-radix-focus-guard]')
            .forEach((e) => e.remove()),
          ht--);
      }
    );
  }, []);
}
function gt() {
  const e = document.createElement('span');
  return (
    e.setAttribute('data-radix-focus-guard', ''),
    (e.tabIndex = 0),
    (e.style.outline = 'none'),
    (e.style.opacity = '0'),
    (e.style.position = 'fixed'),
    (e.style.pointerEvents = 'none'),
    e
  );
}
var wt = 'Dialog',
  [yt] = (function (e, n = []) {
    let t = [];
    const r = () => {
      const n = t.map((e) => u.createContext(e));
      return function (t) {
        const r = (null == t ? void 0 : t[e]) || n;
        return u.useMemo(
          () => ({ [`__scope${e}`]: l(s({}, t), { [e]: r }) }),
          [t, r],
        );
      };
    };
    return (
      (r.scopeName = e),
      [
        function (n, r) {
          const o = u.createContext(r),
            i = t.length;
          t = [...t, r];
          const a = (n) => {
            var t;
            const r = n,
              { scope: a, children: s } = r,
              l = c(r, ['scope', 'children']),
              p =
                (null == (t = null == a ? void 0 : a[e]) ? void 0 : t[i]) || o,
              f = u.useMemo(() => l, Object.values(l));
            return d.jsx(p.Provider, { value: f, children: s });
          };
          return (
            (a.displayName = n + 'Provider'),
            [
              a,
              function (t, a) {
                var s;
                const l =
                    (null == (s = null == a ? void 0 : a[e]) ? void 0 : s[i]) ||
                    o,
                  c = u.useContext(l);
                if (c) return c;
                if (void 0 !== r) return r;
                throw new Error(`\`${t}\` must be used within \`${n}\``);
              },
            ]
          );
        },
        jn(r, ...n),
      ]
    );
  })(wt),
  [bt, xt] = yt(wt),
  _t = (e) => {
    const {
        __scopeDialog: n,
        children: t,
        open: r,
        defaultOpen: o,
        onOpenChange: i,
        modal: a = !0,
      } = e,
      s = u.useRef(null),
      l = u.useRef(null),
      [c = !1, p] = Mn({ prop: r, defaultProp: o, onChange: i });
    return d.jsx(bt, {
      scope: n,
      triggerRef: s,
      contentRef: l,
      contentId: An(),
      titleId: An(),
      descriptionId: An(),
      open: c,
      onOpenChange: p,
      onOpenToggle: u.useCallback(() => p((e) => !e), [p]),
      modal: a,
      children: t,
    });
  };
_t.displayName = wt;
var Ct = 'DialogTrigger',
  Rt = u.forwardRef((e, n) => {
    const t = e,
      { __scopeDialog: r } = t,
      o = c(t, ['__scopeDialog']),
      i = xt(Ct, r),
      a = Pn(n, i.triggerRef);
    return d.jsx(
      vt.button,
      l(
        s(
          {
            type: 'button',
            'aria-haspopup': 'dialog',
            'aria-expanded': i.open,
            'aria-controls': i.contentId,
            'data-state': Ht(i.open),
          },
          o,
        ),
        { ref: a, onClick: Rn(e.onClick, i.onOpenToggle) },
      ),
    );
  });
Rt.displayName = Ct;
var St = 'DialogPortal',
  [Et, Pt] = yt(St, { forceMount: void 0 }),
  jt = (e) => {
    const { __scopeDialog: n, forceMount: t, children: r, container: o } = e,
      i = xt(St, n);
    return d.jsx(Et, {
      scope: n,
      forceMount: t,
      children: u.Children.map(r, (e) =>
        d.jsx(lt, {
          present: t || i.open,
          children: d.jsx(st, { asChild: !0, container: o, children: e }),
        }),
      ),
    });
  };
jt.displayName = St;
var Dt = 'DialogOverlay',
  Tt = u.forwardRef((e, n) => {
    const t = Pt(Dt, e.__scopeDialog),
      r = e,
      { forceMount: o = t.forceMount } = r,
      i = c(r, ['forceMount']),
      a = xt(Dt, e.__scopeDialog);
    return a.modal
      ? d.jsx(lt, {
          present: o || a.open,
          children: d.jsx(Nt, l(s({}, i), { ref: n })),
        })
      : null;
  });
Tt.displayName = Dt;
var Nt = u.forwardRef((e, n) => {
    const t = e,
      { __scopeDialog: r } = t,
      o = c(t, ['__scopeDialog']),
      i = xt(Dt, r);
    return d.jsx(m, {
      as: ut,
      allowPinchZoom: !0,
      shards: [i.contentRef],
      children: d.jsx(
        vt.div,
        l(s({ 'data-state': Ht(i.open) }, o), {
          ref: n,
          style: s({ pointerEvents: 'auto' }, o.style),
        }),
      ),
    });
  }),
  At = 'DialogContent',
  Ot = u.forwardRef((e, n) => {
    const t = Pt(At, e.__scopeDialog),
      r = e,
      { forceMount: o = t.forceMount } = r,
      i = c(r, ['forceMount']),
      a = xt(At, e.__scopeDialog);
    return d.jsx(lt, {
      present: o || a.open,
      children: a.modal
        ? d.jsx(Mt, l(s({}, i), { ref: n }))
        : d.jsx(It, l(s({}, i), { ref: n })),
    });
  });
Ot.displayName = At;
var Mt = u.forwardRef((e, n) => {
    const t = xt(At, e.__scopeDialog),
      r = u.useRef(null),
      o = Pn(n, t.contentRef, r);
    return (
      u.useEffect(() => {
        const e = r.current;
        if (e) return g(e);
      }, []),
      d.jsx(
        kt,
        l(s({}, e), {
          ref: o,
          trapFocus: t.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: Rn(e.onCloseAutoFocus, (e) => {
            var n;
            (e.preventDefault(),
              null == (n = t.triggerRef.current) || n.focus());
          }),
          onPointerDownOutside: Rn(e.onPointerDownOutside, (e) => {
            const n = e.detail.originalEvent,
              t = 0 === n.button && !0 === n.ctrlKey;
            (2 === n.button || t) && e.preventDefault();
          }),
          onFocusOutside: Rn(e.onFocusOutside, (e) => e.preventDefault()),
        }),
      )
    );
  }),
  It = u.forwardRef((e, n) => {
    const t = xt(At, e.__scopeDialog),
      r = u.useRef(!1),
      o = u.useRef(!1);
    return d.jsx(
      kt,
      l(s({}, e), {
        ref: n,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (n) => {
          var i, a;
          (null == (i = e.onCloseAutoFocus) || i.call(e, n),
            n.defaultPrevented ||
              (r.current || null == (a = t.triggerRef.current) || a.focus(),
              n.preventDefault()),
            (r.current = !1),
            (o.current = !1));
        },
        onInteractOutside: (n) => {
          var i, a;
          (null == (i = e.onInteractOutside) || i.call(e, n),
            n.defaultPrevented ||
              ((r.current = !0),
              'pointerdown' === n.detail.originalEvent.type &&
                (o.current = !0)));
          const s = n.target;
          ((null == (a = t.triggerRef.current) ? void 0 : a.contains(s)) &&
            n.preventDefault(),
            'focusin' === n.detail.originalEvent.type &&
              o.current &&
              n.preventDefault());
        },
      }),
    );
  }),
  kt = u.forwardRef((e, n) => {
    const t = e,
      {
        __scopeDialog: r,
        trapFocus: o,
        onOpenAutoFocus: i,
        onCloseAutoFocus: a,
      } = t,
      p = c(t, [
        '__scopeDialog',
        'trapFocus',
        'onOpenAutoFocus',
        'onCloseAutoFocus',
      ]),
      f = xt(At, r),
      v = u.useRef(null),
      h = Pn(n, v);
    return (
      mt(),
      d.jsxs(d.Fragment, {
        children: [
          d.jsx(zn, {
            asChild: !0,
            loop: !0,
            trapped: o,
            onMountAutoFocus: i,
            onUnmountAutoFocus: a,
            children: d.jsx(
              te,
              l(
                s(
                  {
                    role: 'dialog',
                    id: f.contentId,
                    'aria-describedby': f.descriptionId,
                    'aria-labelledby': f.titleId,
                    'data-state': Ht(f.open),
                  },
                  p,
                ),
                { ref: h, onDismiss: () => f.onOpenChange(!1) },
              ),
            ),
          }),
          d.jsxs(d.Fragment, {
            children: [
              d.jsx(Gt, { titleId: f.titleId }),
              d.jsx(Xt, { contentRef: v, descriptionId: f.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  Ft = 'DialogTitle',
  Lt = u.forwardRef((e, n) => {
    const t = e,
      { __scopeDialog: r } = t,
      o = c(t, ['__scopeDialog']),
      i = xt(Ft, r);
    return d.jsx(vt.h2, l(s({ id: i.titleId }, o), { ref: n }));
  });
Lt.displayName = Ft;
var $t = 'DialogDescription',
  Wt = u.forwardRef((e, n) => {
    const t = e,
      { __scopeDialog: r } = t,
      o = c(t, ['__scopeDialog']),
      i = xt($t, r);
    return d.jsx(vt.p, l(s({ id: i.descriptionId }, o), { ref: n }));
  });
Wt.displayName = $t;
var Vt = 'DialogClose',
  Kt = u.forwardRef((e, n) => {
    const t = e,
      { __scopeDialog: r } = t,
      o = c(t, ['__scopeDialog']),
      i = xt(Vt, r);
    return d.jsx(
      vt.button,
      l(s({ type: 'button' }, o), {
        ref: n,
        onClick: Rn(e.onClick, () => i.onOpenChange(!1)),
      }),
    );
  });
function Ht(e) {
  return e ? 'open' : 'closed';
}
Kt.displayName = Vt;
var Bt = 'DialogTitleWarning',
  [Ut, zt] = (function (e, n) {
    const t = u.createContext(n),
      r = (e) => {
        const n = e,
          { children: r } = n,
          o = c(n, ['children']),
          i = u.useMemo(() => o, Object.values(o));
        return d.jsx(t.Provider, { value: i, children: r });
      };
    return (
      (r.displayName = e + 'Provider'),
      [
        r,
        function (r) {
          const o = u.useContext(t);
          if (o) return o;
          if (void 0 !== n) return n;
          throw new Error(`\`${r}\` must be used within \`${e}\``);
        },
      ]
    );
  })(Bt, { contentName: At, titleName: Ft, docsSlug: 'dialog' }),
  Gt = ({ titleId: e }) => {
    const n = zt(Bt),
      t = `\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;
    return (
      u.useEffect(() => {
        if (e) {
          document.getElementById(e);
        }
      }, [t, e]),
      null
    );
  },
  Xt = ({ contentRef: e, descriptionId: n }) => {
    const t = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${zt('DialogDescriptionWarning').contentName}}.`;
    return (
      u.useEffect(() => {
        var t;
        const r =
          null == (t = e.current) ? void 0 : t.getAttribute('aria-describedby');
        if (n && r) {
          document.getElementById(n);
        }
      }, [t, e, n]),
      null
    );
  },
  Yt = _t,
  qt = Rt,
  Zt = jt,
  Jt = Tt,
  Qt = Ot,
  er = Lt,
  nr = Wt,
  tr = Kt,
  rr = f[' useId '.trim().toString()] || (() => {}),
  or = 0;
function ir(e) {
  const [n, t] = u.useState(rr());
  return (
    fe(() => {
      t((e) => (null != e ? e : String(or++)));
    }, [e]),
    n ? `radix-${n}` : ''
  );
}
var ar = u.forwardRef((e, n) => {
  const t = e,
    { children: r, width: o = 10, height: i = 5 } = t,
    a = c(t, ['children', 'width', 'height']);
  return d.jsx(
    pe.svg,
    l(s({}, a), {
      ref: n,
      width: o,
      height: i,
      viewBox: '0 0 30 10',
      preserveAspectRatio: 'none',
      children: e.asChild ? r : d.jsx('polygon', { points: '0,0 30,0 15,10' }),
    }),
  );
});
ar.displayName = 'Arrow';
var sr = ar;
function lr(e) {
  const [n, t] = u.useState(void 0);
  return (
    fe(() => {
      if (e) {
        t({ width: e.offsetWidth, height: e.offsetHeight });
        const n = new ResizeObserver((n) => {
          if (!Array.isArray(n)) return;
          if (!n.length) return;
          const r = n[0];
          let o, i;
          if ('borderBoxSize' in r) {
            const e = r.borderBoxSize,
              n = Array.isArray(e) ? e[0] : e;
            ((o = n.inlineSize), (i = n.blockSize));
          } else ((o = e.offsetWidth), (i = e.offsetHeight));
          t({ width: o, height: i });
        });
        return (n.observe(e, { box: 'border-box' }), () => n.unobserve(e));
      }
      t(void 0);
    }, [e]),
    n
  );
}
var cr = 'Popper',
  [ur, dr] = O(cr),
  [pr, fr] = ur(cr),
  vr = (e) => {
    const { __scopePopper: n, children: t } = e,
      [r, o] = u.useState(null);
    return d.jsx(pr, { scope: n, anchor: r, onAnchorChange: o, children: t });
  };
vr.displayName = cr;
var hr = 'PopperAnchor',
  mr = u.forwardRef((e, n) => {
    const t = e,
      { __scopePopper: r, virtualRef: o } = t,
      i = c(t, ['__scopePopper', 'virtualRef']),
      a = fr(hr, r),
      p = u.useRef(null),
      f = N(n, p),
      v = u.useRef(null);
    return (
      u.useEffect(() => {
        const e = v.current;
        ((v.current = (null == o ? void 0 : o.current) || p.current),
          e !== v.current && a.onAnchorChange(v.current));
      }),
      o ? null : d.jsx(pe.div, l(s({}, i), { ref: f }))
    );
  });
mr.displayName = hr;
var gr = 'PopperContent',
  [wr, yr] = ur(gr),
  br = u.forwardRef((e, n) => {
    var t, r, o, i, a, p, f, v;
    const h = e,
      {
        __scopePopper: m,
        side: g = 'bottom',
        sideOffset: w = 0,
        align: j = 'center',
        alignOffset: D = 0,
        arrowPadding: T = 0,
        avoidCollisions: A = !0,
        collisionBoundary: O = [],
        collisionPadding: M = 0,
        sticky: I = 'partial',
        hideWhenDetached: k = !1,
        updatePositionStrategy: F = 'optimized',
        onPlaced: L,
      } = h,
      $ = c(h, [
        '__scopePopper',
        'side',
        'sideOffset',
        'align',
        'alignOffset',
        'arrowPadding',
        'avoidCollisions',
        'collisionBoundary',
        'collisionPadding',
        'sticky',
        'hideWhenDetached',
        'updatePositionStrategy',
        'onPlaced',
      ]),
      W = fr(gr, m),
      [V, K] = u.useState(null),
      H = N(n, (e) => K(e)),
      [B, U] = u.useState(null),
      z = lr(B),
      G = null != (t = null == z ? void 0 : z.width) ? t : 0,
      X = null != (r = null == z ? void 0 : z.height) ? r : 0,
      Y = g + ('center' !== j ? '-' + j : ''),
      q =
        'number' == typeof M
          ? M
          : s({ top: 0, right: 0, bottom: 0, left: 0 }, M),
      Z = Array.isArray(O) ? O : [O],
      J = Z.length > 0,
      Q = { padding: q, boundary: Z.filter(Rr), altBoundary: J },
      {
        refs: ee,
        floatingStyles: ne,
        placement: te,
        isPositioned: re,
        middlewareData: oe,
      } = y({
        strategy: 'fixed',
        placement: Y,
        whileElementsMounted: (...e) =>
          P(...e, { animationFrame: 'always' === F }),
        elements: { reference: W.anchor },
        middleware: [
          b({ mainAxis: w + X, alignmentAxis: D }),
          A &&
            x(
              s(
                {
                  mainAxis: !0,
                  crossAxis: !1,
                  limiter: 'partial' === I ? E() : void 0,
                },
                Q,
              ),
            ),
          A && _(s({}, Q)),
          C(
            l(s({}, Q), {
              apply: ({
                elements: e,
                rects: n,
                availableWidth: t,
                availableHeight: r,
              }) => {
                const { width: o, height: i } = n.reference,
                  a = e.floating.style;
                (a.setProperty('--radix-popper-available-width', `${t}px`),
                  a.setProperty('--radix-popper-available-height', `${r}px`),
                  a.setProperty('--radix-popper-anchor-width', `${o}px`),
                  a.setProperty('--radix-popper-anchor-height', `${i}px`));
              },
            }),
          ),
          B && R({ element: B, padding: T }),
          Sr({ arrowWidth: G, arrowHeight: X }),
          k && S(s({ strategy: 'referenceHidden' }, Q)),
        ],
      }),
      [ie, ae] = Er(te),
      se = ge(L);
    fe(() => {
      re && (null == se || se());
    }, [re, se]);
    const le = null == (o = oe.arrow) ? void 0 : o.x,
      ce = null == (i = oe.arrow) ? void 0 : i.y,
      ue = 0 !== (null == (a = oe.arrow) ? void 0 : a.centerOffset),
      [de, ve] = u.useState();
    return (
      fe(() => {
        V && ve(window.getComputedStyle(V).zIndex);
      }, [V]),
      d.jsx('div', {
        ref: ee.setFloating,
        'data-radix-popper-content-wrapper': '',
        style: s(
          l(s({}, ne), {
            transform: re ? ne.transform : 'translate(0, -200%)',
            minWidth: 'max-content',
            zIndex: de,
            '--radix-popper-transform-origin': [
              null == (p = oe.transformOrigin) ? void 0 : p.x,
              null == (f = oe.transformOrigin) ? void 0 : f.y,
            ].join(' '),
          }),
          (null == (v = oe.hide) ? void 0 : v.referenceHidden) && {
            visibility: 'hidden',
            pointerEvents: 'none',
          },
        ),
        dir: e.dir,
        children: d.jsx(wr, {
          scope: m,
          placedSide: ie,
          onArrowChange: U,
          arrowX: le,
          arrowY: ce,
          shouldHideArrow: ue,
          children: d.jsx(
            pe.div,
            l(s({ 'data-side': ie, 'data-align': ae }, $), {
              ref: H,
              style: l(s({}, $.style), { animation: re ? void 0 : 'none' }),
            }),
          ),
        }),
      })
    );
  });
br.displayName = gr;
var xr = 'PopperArrow',
  _r = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
  Cr = u.forwardRef(function (e, n) {
    const t = e,
      { __scopePopper: r } = t,
      o = c(t, ['__scopePopper']),
      i = yr(xr, r),
      a = _r[i.placedSide];
    return d.jsx('span', {
      ref: i.onArrowChange,
      style: {
        position: 'absolute',
        left: i.arrowX,
        top: i.arrowY,
        [a]: 0,
        transformOrigin: {
          top: '',
          right: '0 0',
          bottom: 'center 0',
          left: '100% 0',
        }[i.placedSide],
        transform: {
          top: 'translateY(100%)',
          right: 'translateY(50%) rotate(90deg) translateX(-50%)',
          bottom: 'rotate(180deg)',
          left: 'translateY(50%) rotate(-90deg) translateX(50%)',
        }[i.placedSide],
        visibility: i.shouldHideArrow ? 'hidden' : void 0,
      },
      children: d.jsx(
        sr,
        l(s({}, o), { ref: n, style: l(s({}, o.style), { display: 'block' }) }),
      ),
    });
  });
function Rr(e) {
  return null !== e;
}
Cr.displayName = xr;
var Sr = (e) => ({
  name: 'transformOrigin',
  options: e,
  fn(n) {
    var t, r, o, i, a;
    const { placement: s, rects: l, middlewareData: c } = n,
      u = 0 !== (null == (t = c.arrow) ? void 0 : t.centerOffset),
      d = u ? 0 : e.arrowWidth,
      p = u ? 0 : e.arrowHeight,
      [f, v] = Er(s),
      h = { start: '0%', center: '50%', end: '100%' }[v],
      m = (null != (o = null == (r = c.arrow) ? void 0 : r.x) ? o : 0) + d / 2,
      g = (null != (a = null == (i = c.arrow) ? void 0 : i.y) ? a : 0) + p / 2;
    let w = '',
      y = '';
    return (
      'bottom' === f
        ? ((w = u ? h : `${m}px`), (y = -p + 'px'))
        : 'top' === f
          ? ((w = u ? h : `${m}px`), (y = `${l.floating.height + p}px`))
          : 'right' === f
            ? ((w = -p + 'px'), (y = u ? h : `${g}px`))
            : 'left' === f &&
              ((w = `${l.floating.width + p}px`), (y = u ? h : `${g}px`)),
      { data: { x: w, y: y } }
    );
  },
});
function Er(e) {
  const [n, t = 'center'] = e.split('-');
  return [n, t];
}
var Pr = vr,
  jr = mr,
  Dr = br,
  Tr = Cr,
  Nr = Symbol('radix.slottable');
function Ar(e) {
  const n = ({ children: e }) => d.jsx(d.Fragment, { children: e });
  return ((n.displayName = `${e}.Slottable`), (n.__radixId = Nr), n);
}
var [Or] = O('Tooltip', [dr]),
  Mr = dr(),
  Ir = 'TooltipProvider',
  kr = 700,
  Fr = 'tooltip.open',
  [Lr, $r] = Or(Ir),
  Wr = (e) => {
    const {
        __scopeTooltip: n,
        delayDuration: t = kr,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = !1,
        children: i,
      } = e,
      a = u.useRef(!0),
      s = u.useRef(!1),
      l = u.useRef(0);
    return (
      u.useEffect(() => {
        const e = l.current;
        return () => window.clearTimeout(e);
      }, []),
      d.jsx(Lr, {
        scope: n,
        isOpenDelayedRef: a,
        delayDuration: t,
        onOpen: u.useCallback(() => {
          (window.clearTimeout(l.current), (a.current = !1));
        }, []),
        onClose: u.useCallback(() => {
          (window.clearTimeout(l.current),
            (l.current = window.setTimeout(() => (a.current = !0), r)));
        }, [r]),
        isPointerInTransitRef: s,
        onPointerInTransitChange: u.useCallback((e) => {
          s.current = e;
        }, []),
        disableHoverableContent: o,
        children: i,
      })
    );
  };
Wr.displayName = Ir;
var Vr = 'Tooltip',
  [Kr, Hr] = Or(Vr),
  Br = (e) => {
    const {
        __scopeTooltip: n,
        children: t,
        open: r,
        defaultOpen: o,
        onOpenChange: i,
        disableHoverableContent: a,
        delayDuration: c,
      } = e,
      p = $r(Vr, e.__scopeTooltip),
      f = Mr(n),
      [v, h] = u.useState(null),
      m = ir(),
      g = u.useRef(0),
      w = null != a ? a : p.disableHoverableContent,
      y = null != c ? c : p.delayDuration,
      b = u.useRef(!1),
      [x, _] = ye({
        prop: r,
        defaultProp: null != o && o,
        onChange: (e) => {
          (e
            ? (p.onOpen(), document.dispatchEvent(new CustomEvent(Fr)))
            : p.onClose(),
            null == i || i(e));
        },
        caller: Vr,
      }),
      C = u.useMemo(
        () => (x ? (b.current ? 'delayed-open' : 'instant-open') : 'closed'),
        [x],
      ),
      R = u.useCallback(() => {
        (window.clearTimeout(g.current),
          (g.current = 0),
          (b.current = !1),
          _(!0));
      }, [_]),
      S = u.useCallback(() => {
        (window.clearTimeout(g.current), (g.current = 0), _(!1));
      }, [_]),
      E = u.useCallback(() => {
        (window.clearTimeout(g.current),
          (g.current = window.setTimeout(() => {
            ((b.current = !0), _(!0), (g.current = 0));
          }, y)));
      }, [y, _]);
    return (
      u.useEffect(
        () => () => {
          g.current && (window.clearTimeout(g.current), (g.current = 0));
        },
        [],
      ),
      d.jsx(
        Pr,
        l(s({}, f), {
          children: d.jsx(Kr, {
            scope: n,
            contentId: m,
            open: x,
            stateAttribute: C,
            trigger: v,
            onTriggerChange: h,
            onTriggerEnter: u.useCallback(() => {
              p.isOpenDelayedRef.current ? E() : R();
            }, [p.isOpenDelayedRef, E, R]),
            onTriggerLeave: u.useCallback(() => {
              w ? S() : (window.clearTimeout(g.current), (g.current = 0));
            }, [S, w]),
            onOpen: R,
            onClose: S,
            disableHoverableContent: w,
            children: t,
          }),
        }),
      )
    );
  };
Br.displayName = Vr;
var Ur = 'TooltipTrigger',
  zr = u.forwardRef((e, n) => {
    const t = e,
      { __scopeTooltip: r } = t,
      o = c(t, ['__scopeTooltip']),
      i = Hr(Ur, r),
      a = $r(Ur, r),
      p = Mr(r),
      f = N(n, u.useRef(null), i.onTriggerChange),
      v = u.useRef(!1),
      h = u.useRef(!1),
      m = u.useCallback(() => (v.current = !1), []);
    return (
      u.useEffect(
        () => () => document.removeEventListener('pointerup', m),
        [m],
      ),
      d.jsx(
        jr,
        l(s({ asChild: !0 }, p), {
          children: d.jsx(
            pe.button,
            l(
              s(
                {
                  'aria-describedby': i.open ? i.contentId : void 0,
                  'data-state': i.stateAttribute,
                },
                o,
              ),
              {
                ref: f,
                onPointerMove: j(e.onPointerMove, (e) => {
                  'touch' !== e.pointerType &&
                    (h.current ||
                      a.isPointerInTransitRef.current ||
                      (i.onTriggerEnter(), (h.current = !0)));
                }),
                onPointerLeave: j(e.onPointerLeave, () => {
                  (i.onTriggerLeave(), (h.current = !1));
                }),
                onPointerDown: j(e.onPointerDown, () => {
                  (i.open && i.onClose(),
                    (v.current = !0),
                    document.addEventListener('pointerup', m, { once: !0 }));
                }),
                onFocus: j(e.onFocus, () => {
                  v.current || i.onOpen();
                }),
                onBlur: j(e.onBlur, i.onClose),
                onClick: j(e.onClick, i.onClose),
              },
            ),
          ),
        }),
      )
    );
  });
zr.displayName = Ur;
var [Gr, Xr] = Or('TooltipPortal', { forceMount: void 0 }),
  Yr = 'TooltipContent',
  qr = u.forwardRef((e, n) => {
    const t = Xr(Yr, e.__scopeTooltip),
      r = e,
      { forceMount: o = t.forceMount, side: i = 'top' } = r,
      a = c(r, ['forceMount', 'side']),
      u = Hr(Yr, e.__scopeTooltip);
    return d.jsx(he, {
      present: o || u.open,
      children: u.disableHoverableContent
        ? d.jsx(no, l(s({ side: i }, a), { ref: n }))
        : d.jsx(Zr, l(s({ side: i }, a), { ref: n })),
    });
  }),
  Zr = u.forwardRef((e, n) => {
    const t = Hr(Yr, e.__scopeTooltip),
      r = $r(Yr, e.__scopeTooltip),
      o = u.useRef(null),
      i = N(n, o),
      [a, c] = u.useState(null),
      { trigger: p, onClose: f } = t,
      v = o.current,
      { onPointerInTransitChange: h } = r,
      m = u.useCallback(() => {
        (c(null), h(!1));
      }, [h]),
      g = u.useCallback(
        (e, n) => {
          const t = e.currentTarget,
            r = { x: e.clientX, y: e.clientY },
            o = (function (e, n, t = 5) {
              const r = [];
              switch (n) {
                case 'top':
                  r.push(
                    { x: e.x - t, y: e.y + t },
                    { x: e.x + t, y: e.y + t },
                  );
                  break;
                case 'bottom':
                  r.push(
                    { x: e.x - t, y: e.y - t },
                    { x: e.x + t, y: e.y - t },
                  );
                  break;
                case 'left':
                  r.push(
                    { x: e.x + t, y: e.y - t },
                    { x: e.x + t, y: e.y + t },
                  );
                  break;
                case 'right':
                  r.push(
                    { x: e.x - t, y: e.y - t },
                    { x: e.x - t, y: e.y + t },
                  );
              }
              return r;
            })(
              r,
              (function (e, n) {
                const t = Math.abs(n.top - e.y),
                  r = Math.abs(n.bottom - e.y),
                  o = Math.abs(n.right - e.x),
                  i = Math.abs(n.left - e.x);
                switch (Math.min(t, r, o, i)) {
                  case i:
                    return 'left';
                  case o:
                    return 'right';
                  case t:
                    return 'top';
                  case r:
                    return 'bottom';
                  default:
                    throw new Error('unreachable');
                }
              })(r, t.getBoundingClientRect()),
            ),
            i = (function (e) {
              const n = e.slice();
              return (
                n.sort((e, n) =>
                  e.x < n.x
                    ? -1
                    : e.x > n.x
                      ? 1
                      : e.y < n.y
                        ? -1
                        : e.y > n.y
                          ? 1
                          : 0,
                ),
                (function (e) {
                  if (e.length <= 1) return e.slice();
                  const n = [];
                  for (let r = 0; r < e.length; r++) {
                    const t = e[r];
                    for (; n.length >= 2; ) {
                      const e = n[n.length - 1],
                        r = n[n.length - 2];
                      if (
                        !(
                          (e.x - r.x) * (t.y - r.y) >=
                          (e.y - r.y) * (t.x - r.x)
                        )
                      )
                        break;
                      n.pop();
                    }
                    n.push(t);
                  }
                  n.pop();
                  const t = [];
                  for (let r = e.length - 1; r >= 0; r--) {
                    const n = e[r];
                    for (; t.length >= 2; ) {
                      const e = t[t.length - 1],
                        r = t[t.length - 2];
                      if (
                        !(
                          (e.x - r.x) * (n.y - r.y) >=
                          (e.y - r.y) * (n.x - r.x)
                        )
                      )
                        break;
                      t.pop();
                    }
                    t.push(n);
                  }
                  return (
                    t.pop(),
                    1 === n.length &&
                    1 === t.length &&
                    n[0].x === t[0].x &&
                    n[0].y === t[0].y
                      ? n
                      : n.concat(t)
                  );
                })(n)
              );
            })([
              ...o,
              ...(function (e) {
                const { top: n, right: t, bottom: r, left: o } = e;
                return [
                  { x: o, y: n },
                  { x: t, y: n },
                  { x: t, y: r },
                  { x: o, y: r },
                ];
              })(n.getBoundingClientRect()),
            ]);
          (c(i), h(!0));
        },
        [h],
      );
    return (
      u.useEffect(() => () => m(), [m]),
      u.useEffect(() => {
        if (p && v) {
          const e = (e) => g(e, v),
            n = (e) => g(e, p);
          return (
            p.addEventListener('pointerleave', e),
            v.addEventListener('pointerleave', n),
            () => {
              (p.removeEventListener('pointerleave', e),
                v.removeEventListener('pointerleave', n));
            }
          );
        }
      }, [p, v, g, m]),
      u.useEffect(() => {
        if (a) {
          const e = (e) => {
            const n = e.target,
              t = { x: e.clientX, y: e.clientY },
              r =
                (null == p ? void 0 : p.contains(n)) ||
                (null == v ? void 0 : v.contains(n)),
              o = !(function (e, n) {
                const { x: t, y: r } = e;
                let o = !1;
                for (let i = 0, a = n.length - 1; i < n.length; a = i++) {
                  const e = n[i],
                    s = n[a],
                    l = e.x,
                    c = e.y,
                    u = s.x,
                    d = s.y;
                  c > r != d > r &&
                    t < ((u - l) * (r - c)) / (d - c) + l &&
                    (o = !o);
                }
                return o;
              })(t, a);
            r ? m() : o && (m(), f());
          };
          return (
            document.addEventListener('pointermove', e),
            () => document.removeEventListener('pointermove', e)
          );
        }
      }, [p, v, a, f, m]),
      d.jsx(no, l(s({}, e), { ref: i }))
    );
  }),
  [Jr, Qr] = Or(Vr, { isInside: !1 }),
  eo = Ar('TooltipContent'),
  no = u.forwardRef((e, n) => {
    const t = e,
      {
        __scopeTooltip: r,
        children: o,
        'aria-label': i,
        onEscapeKeyDown: a,
        onPointerDownOutside: p,
      } = t,
      f = c(t, [
        '__scopeTooltip',
        'children',
        'aria-label',
        'onEscapeKeyDown',
        'onPointerDownOutside',
      ]),
      v = Hr(Yr, r),
      h = Mr(r),
      { onClose: m } = v;
    return (
      u.useEffect(
        () => (
          document.addEventListener(Fr, m),
          () => document.removeEventListener(Fr, m)
        ),
        [m],
      ),
      u.useEffect(() => {
        if (v.trigger) {
          const e = (e) => {
            const n = e.target;
            (null == n ? void 0 : n.contains(v.trigger)) && m();
          };
          return (
            window.addEventListener('scroll', e, { capture: !0 }),
            () => window.removeEventListener('scroll', e, { capture: !0 })
          );
        }
      }, [v.trigger, m]),
      d.jsx(te, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: p,
        onFocusOutside: (e) => e.preventDefault(),
        onDismiss: m,
        children: d.jsxs(
          Dr,
          l(s(s({ 'data-state': v.stateAttribute }, h), f), {
            ref: n,
            style: s(s({}, f.style), {
              '--radix-tooltip-content-transform-origin':
                'var(--radix-popper-transform-origin)',
              '--radix-tooltip-content-available-width':
                'var(--radix-popper-available-width)',
              '--radix-tooltip-content-available-height':
                'var(--radix-popper-available-height)',
              '--radix-tooltip-trigger-width':
                'var(--radix-popper-anchor-width)',
              '--radix-tooltip-trigger-height':
                'var(--radix-popper-anchor-height)',
            }),
            children: [
              d.jsx(eo, { children: o }),
              d.jsx(Jr, {
                scope: r,
                isInside: !0,
                children: d.jsx(_e, {
                  id: v.contentId,
                  role: 'tooltip',
                  children: i || o,
                }),
              }),
            ],
          }),
        ),
      })
    );
  });
qr.displayName = Yr;
var to = 'TooltipArrow';
u.forwardRef((e, n) => {
  const t = e,
    { __scopeTooltip: r } = t,
    o = c(t, ['__scopeTooltip']),
    i = Mr(r);
  return Qr(to, r).isInside ? null : d.jsx(Tr, l(s(s({}, i), o), { ref: n }));
}).displayName = to;
var ro = Wr,
  oo = Br,
  io = zr,
  ao = qr;
function so(...e) {
  const n = e[0];
  if (1 === e.length) return n;
  const t = () => {
    const t = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
    return function (e) {
      const r = t.reduce((n, { useScope: t, scopeName: r }) => {
        const o = t(e)[`__scope${r}`];
        return s(s({}, n), o);
      }, {});
      return u.useMemo(() => ({ [`__scope${n.scopeName}`]: r }), [r]);
    };
  };
  return ((t.scopeName = n.scopeName), t);
}
var lo = [
  'a',
  'button',
  'div',
  'form',
  'h2',
  'h3',
  'img',
  'input',
  'label',
  'li',
  'nav',
  'ol',
  'p',
  'select',
  'span',
  'svg',
  'ul',
].reduce((e, n) => {
  const t = pn(`Primitive.${n}`),
    r = u.forwardRef((e, r) => {
      const o = e,
        { asChild: i } = o,
        a = c(o, ['asChild']),
        u = i ? t : n;
      return (
        'undefined' != typeof window && (window[Symbol.for('radix-ui')] = !0),
        d.jsx(u, l(s({}, a), { ref: r }))
      );
    });
  return ((r.displayName = `Primitive.${n}`), l(s({}, e), { [n]: r }));
}, {});
function co() {
  return () => {};
}
var uo = 'Avatar',
  [po] = (function (e, n = []) {
    let t = [];
    const r = () => {
      const n = t.map((e) => u.createContext(e));
      return function (t) {
        const r = (null == t ? void 0 : t[e]) || n;
        return u.useMemo(
          () => ({ [`__scope${e}`]: l(s({}, t), { [e]: r }) }),
          [t, r],
        );
      };
    };
    return (
      (r.scopeName = e),
      [
        function (n, r) {
          const o = u.createContext(r);
          o.displayName = n + 'Context';
          const i = t.length;
          t = [...t, r];
          const a = (n) => {
            var t;
            const r = n,
              { scope: a, children: s } = r,
              l = c(r, ['scope', 'children']),
              p =
                (null == (t = null == a ? void 0 : a[e]) ? void 0 : t[i]) || o,
              f = u.useMemo(() => l, Object.values(l));
            return d.jsx(p.Provider, { value: f, children: s });
          };
          return (
            (a.displayName = n + 'Provider'),
            [
              a,
              function (t, a) {
                var s;
                const l =
                    (null == (s = null == a ? void 0 : a[e]) ? void 0 : s[i]) ||
                    o,
                  c = u.useContext(l);
                if (c) return c;
                if (void 0 !== r) return r;
                throw new Error(`\`${t}\` must be used within \`${n}\``);
              },
            ]
          );
        },
        so(r, ...n),
      ]
    );
  })(uo),
  [fo, vo] = po(uo),
  ho = u.forwardRef((e, n) => {
    const t = e,
      { __scopeAvatar: r } = t,
      o = c(t, ['__scopeAvatar']),
      [i, a] = u.useState('idle');
    return d.jsx(fo, {
      scope: r,
      imageLoadingStatus: i,
      onImageLoadingStatusChange: a,
      children: d.jsx(lo.span, l(s({}, o), { ref: n })),
    });
  });
ho.displayName = uo;
var mo = 'AvatarImage',
  go = u.forwardRef((e, n) => {
    const t = e,
      { __scopeAvatar: r, src: o, onLoadingStatusChange: i = () => {} } = t,
      a = c(t, ['__scopeAvatar', 'src', 'onLoadingStatusChange']),
      p = vo(mo, r),
      f = (function (e, { referrerPolicy: n, crossOrigin: t }) {
        const r = w.useSyncExternalStore(
            co,
            () => !0,
            () => !1,
          ),
          o = u.useRef(null),
          i = r
            ? (o.current || (o.current = new window.Image()), o.current)
            : null,
          [a, s] = u.useState(() => bo(i, e));
        return (
          fe(() => {
            s(bo(i, e));
          }, [i, e]),
          fe(() => {
            const e = (e) => () => {
              s(e);
            };
            if (!i) return;
            const r = e('loaded'),
              o = e('error');
            return (
              i.addEventListener('load', r),
              i.addEventListener('error', o),
              n && (i.referrerPolicy = n),
              'string' == typeof t && (i.crossOrigin = t),
              () => {
                (i.removeEventListener('load', r),
                  i.removeEventListener('error', o));
              }
            );
          }, [i, t, n]),
          a
        );
      })(o, a),
      v = ge((e) => {
        (i(e), p.onImageLoadingStatusChange(e));
      });
    return (
      fe(() => {
        'idle' !== f && v(f);
      }, [f, v]),
      'loaded' === f ? d.jsx(lo.img, l(s({}, a), { ref: n, src: o })) : null
    );
  });
go.displayName = mo;
var wo = 'AvatarFallback',
  yo = u.forwardRef((e, n) => {
    const t = e,
      { __scopeAvatar: r, delayMs: o } = t,
      i = c(t, ['__scopeAvatar', 'delayMs']),
      a = vo(wo, r),
      [p, f] = u.useState(void 0 === o);
    return (
      u.useEffect(() => {
        if (void 0 !== o) {
          const e = window.setTimeout(() => f(!0), o);
          return () => window.clearTimeout(e);
        }
      }, [o]),
      p && 'loaded' !== a.imageLoadingStatus
        ? d.jsx(lo.span, l(s({}, i), { ref: n }))
        : null
    );
  });
function bo(e, n) {
  return e
    ? n
      ? (e.src !== n && (e.src = n),
        e.complete && e.naturalWidth > 0 ? 'loaded' : 'loading')
      : 'error'
    : 'idle';
}
yo.displayName = wo;
var xo = ho,
  _o = go,
  Co = yo;
function Ro(e) {
  const n = u.useRef({ value: e, previous: e });
  return u.useMemo(
    () => (
      n.current.value !== e &&
        ((n.current.previous = n.current.value), (n.current.value = e)),
      n.current.previous
    ),
    [e],
  );
}
var So = 'Checkbox',
  [Eo] = O(So),
  [Po, jo] = Eo(So);
function Do(e) {
  const {
      __scopeCheckbox: n,
      checked: t,
      children: r,
      defaultChecked: o,
      disabled: i,
      form: a,
      name: c,
      onCheckedChange: p,
      required: f,
      value: v = 'on',
      internal_do_not_use_render: h,
    } = e,
    [m, g] = ye({
      prop: t,
      defaultProp: null != o && o,
      onChange: p,
      caller: So,
    }),
    [w, y] = u.useState(null),
    [b, x] = u.useState(null),
    _ = u.useRef(!1),
    C = !w || !!a || !!w.closest('form'),
    R = {
      checked: m,
      disabled: i,
      setChecked: g,
      control: w,
      setControl: y,
      name: c,
      form: a,
      value: v,
      hasConsumerStoppedPropagationRef: _,
      required: f,
      defaultChecked: !Lo(o) && o,
      isFormControl: C,
      bubbleInput: b,
      setBubbleInput: x,
    };
  return d.jsx(Po, l(s({ scope: n }, R), { children: Fo(h) ? h(R) : r }));
}
var To = 'CheckboxTrigger',
  No = u.forwardRef((e, n) => {
    var t = e,
      { __scopeCheckbox: r, onKeyDown: o, onClick: i } = t,
      a = c(t, ['__scopeCheckbox', 'onKeyDown', 'onClick']);
    const {
        control: p,
        value: f,
        disabled: v,
        checked: h,
        required: m,
        setControl: g,
        setChecked: w,
        hasConsumerStoppedPropagationRef: y,
        isFormControl: b,
        bubbleInput: x,
      } = jo(To, r),
      _ = N(n, g),
      C = u.useRef(h);
    return (
      u.useEffect(() => {
        const e = null == p ? void 0 : p.form;
        if (e) {
          const n = () => w(C.current);
          return (
            e.addEventListener('reset', n),
            () => e.removeEventListener('reset', n)
          );
        }
      }, [p, w]),
      d.jsx(
        pe.button,
        l(
          s(
            {
              type: 'button',
              role: 'checkbox',
              'aria-checked': Lo(h) ? 'mixed' : h,
              'aria-required': m,
              'data-state': $o(h),
              'data-disabled': v ? '' : void 0,
              disabled: v,
              value: f,
            },
            a,
          ),
          {
            ref: _,
            onKeyDown: j(o, (e) => {
              'Enter' === e.key && e.preventDefault();
            }),
            onClick: j(i, (e) => {
              (w((e) => !!Lo(e) || !e),
                x &&
                  b &&
                  ((y.current = e.isPropagationStopped()),
                  y.current || e.stopPropagation()));
            }),
          },
        ),
      )
    );
  });
No.displayName = To;
var Ao = u.forwardRef((e, n) => {
  const t = e,
    {
      __scopeCheckbox: r,
      name: o,
      checked: i,
      defaultChecked: a,
      required: u,
      disabled: p,
      value: f,
      onCheckedChange: v,
      form: h,
    } = t,
    m = c(t, [
      '__scopeCheckbox',
      'name',
      'checked',
      'defaultChecked',
      'required',
      'disabled',
      'value',
      'onCheckedChange',
      'form',
    ]);
  return d.jsx(Do, {
    __scopeCheckbox: r,
    checked: i,
    defaultChecked: a,
    disabled: p,
    required: u,
    onCheckedChange: v,
    name: o,
    form: h,
    value: f,
    internal_do_not_use_render: ({ isFormControl: e }) =>
      d.jsxs(d.Fragment, {
        children: [
          d.jsx(No, l(s({}, m), { ref: n, __scopeCheckbox: r })),
          e && d.jsx(ko, { __scopeCheckbox: r }),
        ],
      }),
  });
});
Ao.displayName = So;
var Oo = 'CheckboxIndicator',
  Mo = u.forwardRef((e, n) => {
    const t = e,
      { __scopeCheckbox: r, forceMount: o } = t,
      i = c(t, ['__scopeCheckbox', 'forceMount']),
      a = jo(Oo, r);
    return d.jsx(he, {
      present: o || Lo(a.checked) || !0 === a.checked,
      children: d.jsx(
        pe.span,
        l(
          s(
            {
              'data-state': $o(a.checked),
              'data-disabled': a.disabled ? '' : void 0,
            },
            i,
          ),
          { ref: n, style: s({ pointerEvents: 'none' }, e.style) },
        ),
      ),
    });
  });
Mo.displayName = Oo;
var Io = 'CheckboxBubbleInput',
  ko = u.forwardRef((e, n) => {
    var t = e,
      { __scopeCheckbox: r } = t,
      o = c(t, ['__scopeCheckbox']);
    const {
        control: i,
        hasConsumerStoppedPropagationRef: a,
        checked: p,
        defaultChecked: f,
        required: v,
        disabled: h,
        name: m,
        value: g,
        form: w,
        bubbleInput: y,
        setBubbleInput: b,
      } = jo(Io, r),
      x = N(n, b),
      _ = Ro(p),
      C = lr(i);
    u.useEffect(() => {
      const e = y;
      if (!e) return;
      const n = window.HTMLInputElement.prototype,
        t = Object.getOwnPropertyDescriptor(n, 'checked').set,
        r = !a.current;
      if (_ !== p && t) {
        const n = new Event('click', { bubbles: r });
        ((e.indeterminate = Lo(p)), t.call(e, !Lo(p) && p), e.dispatchEvent(n));
      }
    }, [y, _, p, a]);
    const R = u.useRef(!Lo(p) && p);
    return d.jsx(
      pe.input,
      l(
        s(
          {
            type: 'checkbox',
            'aria-hidden': !0,
            defaultChecked: null != f ? f : R.current,
            required: v,
            disabled: h,
            name: m,
            value: g,
            form: w,
          },
          o,
        ),
        {
          tabIndex: -1,
          ref: x,
          style: l(s(s({}, o.style), C), {
            position: 'absolute',
            pointerEvents: 'none',
            opacity: 0,
            margin: 0,
            transform: 'translateX(-100%)',
          }),
        },
      ),
    );
  });
function Fo(e) {
  return 'function' == typeof e;
}
function Lo(e) {
  return 'indeterminate' === e;
}
function $o(e) {
  return Lo(e) ? 'indeterminate' : e ? 'checked' : 'unchecked';
}
ko.displayName = Io;
var Wo = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'select',
    'span',
    'svg',
    'ul',
  ].reduce((e, n) => {
    const t = pn(`Primitive.${n}`),
      r = u.forwardRef((e, r) => {
        const o = e,
          { asChild: i } = o,
          a = c(o, ['asChild']),
          u = i ? t : n;
        return (
          'undefined' != typeof window && (window[Symbol.for('radix-ui')] = !0),
          d.jsx(u, l(s({}, a), { ref: r }))
        );
      });
    return ((r.displayName = `Primitive.${n}`), l(s({}, e), { [n]: r }));
  }, {}),
  Vo = u.forwardRef((e, n) =>
    d.jsx(
      Wo.label,
      l(s({}, e), {
        ref: n,
        onMouseDown: (n) => {
          var t;
          n.target.closest('button, input, select, textarea') ||
            (null == (t = e.onMouseDown) || t.call(e, n),
            !n.defaultPrevented && n.detail > 1 && n.preventDefault());
        },
      }),
    ),
  );
Vo.displayName = 'Label';
var Ko = Vo;
function Ho(e, n, { checkForDefaultPrevented: t = !0 } = {}) {
  return function (r) {
    if ((null == e || e(r), !1 === t || !r.defaultPrevented))
      return null == n ? void 0 : n(r);
  };
}
function Bo(e, n) {
  if ('function' == typeof e) return e(n);
  null != e && (e.current = n);
}
function Uo(...e) {
  return (n) => {
    let t = !1;
    const r = e.map((e) => {
      const r = Bo(e, n);
      return (t || 'function' != typeof r || (t = !0), r);
    });
    if (t)
      return () => {
        for (let n = 0; n < r.length; n++) {
          const t = r[n];
          'function' == typeof t ? t() : Bo(e[n], null);
        }
      };
  };
}
function zo(...e) {
  return u.useCallback(Uo(...e), e);
}
function Go(e, n = []) {
  let t = [];
  const r = () => {
    const n = t.map((e) => u.createContext(e));
    return function (t) {
      const r = (null == t ? void 0 : t[e]) || n;
      return u.useMemo(
        () => ({ [`__scope${e}`]: l(s({}, t), { [e]: r }) }),
        [t, r],
      );
    };
  };
  return (
    (r.scopeName = e),
    [
      function (n, r) {
        const o = u.createContext(r),
          i = t.length;
        t = [...t, r];
        const a = (n) => {
          var t;
          const r = n,
            { scope: a, children: s } = r,
            l = c(r, ['scope', 'children']),
            p = (null == (t = null == a ? void 0 : a[e]) ? void 0 : t[i]) || o,
            f = u.useMemo(() => l, Object.values(l));
          return d.jsx(p.Provider, { value: f, children: s });
        };
        return (
          (a.displayName = n + 'Provider'),
          [
            a,
            function (t, a) {
              var s;
              const l =
                  (null == (s = null == a ? void 0 : a[e]) ? void 0 : s[i]) ||
                  o,
                c = u.useContext(l);
              if (c) return c;
              if (void 0 !== r) return r;
              throw new Error(`\`${t}\` must be used within \`${n}\``);
            },
          ]
        );
      },
      Xo(r, ...n),
    ]
  );
}
function Xo(...e) {
  const n = e[0];
  if (1 === e.length) return n;
  const t = () => {
    const t = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
    return function (e) {
      const r = t.reduce((n, { useScope: t, scopeName: r }) => {
        const o = t(e)[`__scope${r}`];
        return s(s({}, n), o);
      }, {});
      return u.useMemo(() => ({ [`__scope${n.scopeName}`]: r }), [r]);
    };
  };
  return ((t.scopeName = n.scopeName), t);
}
var Yo = Boolean(null == globalThis ? void 0 : globalThis.document)
    ? u.useLayoutEffect
    : () => {},
  qo = f['useId'.toString()] || (() => {}),
  Zo = 0;
function Jo(e) {
  const [n, t] = u.useState(qo());
  return (
    Yo(() => {
      t((e) => (null != e ? e : String(Zo++)));
    }, [e]),
    e || (n ? `radix-${n}` : '')
  );
}
var Qo = u.forwardRef((e, n) => {
  const t = e,
    { children: r } = t,
    o = c(t, ['children']),
    i = u.Children.toArray(r),
    a = i.find(ti);
  if (a) {
    const e = a.props.children,
      t = i.map((n) =>
        n === a
          ? u.Children.count(e) > 1
            ? u.Children.only(null)
            : u.isValidElement(e)
              ? e.props.children
              : null
          : n,
      );
    return d.jsx(
      ei,
      l(s({}, o), {
        ref: n,
        children: u.isValidElement(e) ? u.cloneElement(e, void 0, t) : null,
      }),
    );
  }
  return d.jsx(ei, l(s({}, o), { ref: n, children: r }));
});
Qo.displayName = 'Slot';
var ei = u.forwardRef((e, n) => {
  const t = e,
    { children: r } = t,
    o = c(t, ['children']);
  if (u.isValidElement(r)) {
    const e = (function (e) {
      var n, t;
      let r =
          null == (n = Object.getOwnPropertyDescriptor(e.props, 'ref'))
            ? void 0
            : n.get,
        o = r && 'isReactWarning' in r && r.isReactWarning;
      if (o) return e.ref;
      if (
        ((r =
          null == (t = Object.getOwnPropertyDescriptor(e, 'ref'))
            ? void 0
            : t.get),
        (o = r && 'isReactWarning' in r && r.isReactWarning),
        o)
      )
        return e.props.ref;
      return e.props.ref || e.ref;
    })(r);
    return u.cloneElement(
      r,
      l(
        s(
          {},
          (function (e, n) {
            const t = s({}, n);
            for (const r in n) {
              const o = e[r],
                i = n[r];
              /^on[A-Z]/.test(r)
                ? o && i
                  ? (t[r] = (...e) => {
                      (i(...e), o(...e));
                    })
                  : o && (t[r] = o)
                : 'style' === r
                  ? (t[r] = s(s({}, o), i))
                  : 'className' === r &&
                    (t[r] = [o, i].filter(Boolean).join(' '));
            }
            return s(s({}, e), t);
          })(o, r.props),
        ),
        { ref: n ? Uo(n, e) : e },
      ),
    );
  }
  return u.Children.count(r) > 1 ? u.Children.only(null) : null;
});
ei.displayName = 'SlotClone';
var ni = ({ children: e }) => d.jsx(d.Fragment, { children: e });
function ti(e) {
  return u.isValidElement(e) && e.type === ni;
}
var ri = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'span',
    'svg',
    'ul',
  ].reduce((e, n) => {
    const t = u.forwardRef((e, t) => {
      const r = e,
        { asChild: o } = r,
        i = c(r, ['asChild']),
        a = o ? Qo : n;
      return (
        'undefined' != typeof window && (window[Symbol.for('radix-ui')] = !0),
        d.jsx(a, l(s({}, i), { ref: t }))
      );
    });
    return ((t.displayName = `Primitive.${n}`), l(s({}, e), { [n]: t }));
  }, {}),
  oi = u.forwardRef((e, n) => {
    const t = e,
      { children: r, width: o = 10, height: i = 5 } = t,
      a = c(t, ['children', 'width', 'height']);
    return d.jsx(
      ri.svg,
      l(s({}, a), {
        ref: n,
        width: o,
        height: i,
        viewBox: '0 0 30 10',
        preserveAspectRatio: 'none',
        children: e.asChild
          ? r
          : d.jsx('polygon', { points: '0,0 30,0 15,10' }),
      }),
    );
  });
oi.displayName = 'Arrow';
var ii = oi;
function ai(e) {
  const n = u.useRef(e);
  return (
    u.useEffect(() => {
      n.current = e;
    }),
    u.useMemo(
      () =>
        (...e) => {
          var t;
          return null == (t = n.current) ? void 0 : t.call(n, ...e);
        },
      [],
    )
  );
}
var si = 'Popper',
  [li, ci] = Go(si),
  [ui, di] = li(si),
  pi = (e) => {
    const { __scopePopper: n, children: t } = e,
      [r, o] = u.useState(null);
    return d.jsx(ui, { scope: n, anchor: r, onAnchorChange: o, children: t });
  };
pi.displayName = si;
var fi = 'PopperAnchor',
  vi = u.forwardRef((e, n) => {
    const t = e,
      { __scopePopper: r, virtualRef: o } = t,
      i = c(t, ['__scopePopper', 'virtualRef']),
      a = di(fi, r),
      p = u.useRef(null),
      f = zo(n, p);
    return (
      u.useEffect(() => {
        a.onAnchorChange((null == o ? void 0 : o.current) || p.current);
      }),
      o ? null : d.jsx(ri.div, l(s({}, i), { ref: f }))
    );
  });
vi.displayName = fi;
var hi = 'PopperContent',
  [mi, gi] = li(hi),
  wi = u.forwardRef((e, n) => {
    var t, r, o, i, a, p, f, v;
    const h = e,
      {
        __scopePopper: m,
        side: g = 'bottom',
        sideOffset: w = 0,
        align: j = 'center',
        alignOffset: D = 0,
        arrowPadding: T = 0,
        avoidCollisions: N = !0,
        collisionBoundary: A = [],
        collisionPadding: O = 0,
        sticky: M = 'partial',
        hideWhenDetached: I = !1,
        updatePositionStrategy: k = 'optimized',
        onPlaced: F,
      } = h,
      L = c(h, [
        '__scopePopper',
        'side',
        'sideOffset',
        'align',
        'alignOffset',
        'arrowPadding',
        'avoidCollisions',
        'collisionBoundary',
        'collisionPadding',
        'sticky',
        'hideWhenDetached',
        'updatePositionStrategy',
        'onPlaced',
      ]),
      $ = di(hi, m),
      [W, V] = u.useState(null),
      K = zo(n, (e) => V(e)),
      [H, B] = u.useState(null),
      U = (function (e) {
        const [n, t] = u.useState(void 0);
        return (
          Yo(() => {
            if (e) {
              t({ width: e.offsetWidth, height: e.offsetHeight });
              const n = new ResizeObserver((n) => {
                if (!Array.isArray(n)) return;
                if (!n.length) return;
                const r = n[0];
                let o, i;
                if ('borderBoxSize' in r) {
                  const e = r.borderBoxSize,
                    n = Array.isArray(e) ? e[0] : e;
                  ((o = n.inlineSize), (i = n.blockSize));
                } else ((o = e.offsetWidth), (i = e.offsetHeight));
                t({ width: o, height: i });
              });
              return (
                n.observe(e, { box: 'border-box' }),
                () => n.unobserve(e)
              );
            }
            t(void 0);
          }, [e]),
          n
        );
      })(H),
      z = null != (t = null == U ? void 0 : U.width) ? t : 0,
      G = null != (r = null == U ? void 0 : U.height) ? r : 0,
      X = g + ('center' !== j ? '-' + j : ''),
      Y =
        'number' == typeof O
          ? O
          : s({ top: 0, right: 0, bottom: 0, left: 0 }, O),
      q = Array.isArray(A) ? A : [A],
      Z = q.length > 0,
      J = { padding: Y, boundary: q.filter(_i), altBoundary: Z },
      {
        refs: Q,
        floatingStyles: ee,
        placement: ne,
        isPositioned: te,
        middlewareData: re,
      } = y({
        strategy: 'fixed',
        placement: X,
        whileElementsMounted: (...e) =>
          P(...e, { animationFrame: 'always' === k }),
        elements: { reference: $.anchor },
        middleware: [
          b({ mainAxis: w + G, alignmentAxis: D }),
          N &&
            x(
              s(
                {
                  mainAxis: !0,
                  crossAxis: !1,
                  limiter: 'partial' === M ? E() : void 0,
                },
                J,
              ),
            ),
          N && _(s({}, J)),
          C(
            l(s({}, J), {
              apply: ({
                elements: e,
                rects: n,
                availableWidth: t,
                availableHeight: r,
              }) => {
                const { width: o, height: i } = n.reference,
                  a = e.floating.style;
                (a.setProperty('--radix-popper-available-width', `${t}px`),
                  a.setProperty('--radix-popper-available-height', `${r}px`),
                  a.setProperty('--radix-popper-anchor-width', `${o}px`),
                  a.setProperty('--radix-popper-anchor-height', `${i}px`));
              },
            }),
          ),
          H && R({ element: H, padding: T }),
          Ci({ arrowWidth: z, arrowHeight: G }),
          I && S(s({ strategy: 'referenceHidden' }, J)),
        ],
      }),
      [oe, ie] = Ri(ne),
      ae = ai(F);
    Yo(() => {
      te && (null == ae || ae());
    }, [te, ae]);
    const se = null == (o = re.arrow) ? void 0 : o.x,
      le = null == (i = re.arrow) ? void 0 : i.y,
      ce = 0 !== (null == (a = re.arrow) ? void 0 : a.centerOffset),
      [ue, de] = u.useState();
    return (
      Yo(() => {
        W && de(window.getComputedStyle(W).zIndex);
      }, [W]),
      d.jsx('div', {
        ref: Q.setFloating,
        'data-radix-popper-content-wrapper': '',
        style: s(
          l(s({}, ee), {
            transform: te ? ee.transform : 'translate(0, -200%)',
            minWidth: 'max-content',
            zIndex: ue,
            '--radix-popper-transform-origin': [
              null == (p = re.transformOrigin) ? void 0 : p.x,
              null == (f = re.transformOrigin) ? void 0 : f.y,
            ].join(' '),
          }),
          (null == (v = re.hide) ? void 0 : v.referenceHidden) && {
            visibility: 'hidden',
            pointerEvents: 'none',
          },
        ),
        dir: e.dir,
        children: d.jsx(mi, {
          scope: m,
          placedSide: oe,
          onArrowChange: B,
          arrowX: se,
          arrowY: le,
          shouldHideArrow: ce,
          children: d.jsx(
            ri.div,
            l(s({ 'data-side': oe, 'data-align': ie }, L), {
              ref: K,
              style: l(s({}, L.style), { animation: te ? void 0 : 'none' }),
            }),
          ),
        }),
      })
    );
  });
wi.displayName = hi;
var yi = 'PopperArrow',
  bi = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
  xi = u.forwardRef(function (e, n) {
    const t = e,
      { __scopePopper: r } = t,
      o = c(t, ['__scopePopper']),
      i = gi(yi, r),
      a = bi[i.placedSide];
    return d.jsx('span', {
      ref: i.onArrowChange,
      style: {
        position: 'absolute',
        left: i.arrowX,
        top: i.arrowY,
        [a]: 0,
        transformOrigin: {
          top: '',
          right: '0 0',
          bottom: 'center 0',
          left: '100% 0',
        }[i.placedSide],
        transform: {
          top: 'translateY(100%)',
          right: 'translateY(50%) rotate(90deg) translateX(-50%)',
          bottom: 'rotate(180deg)',
          left: 'translateY(50%) rotate(-90deg) translateX(50%)',
        }[i.placedSide],
        visibility: i.shouldHideArrow ? 'hidden' : void 0,
      },
      children: d.jsx(
        ii,
        l(s({}, o), { ref: n, style: l(s({}, o.style), { display: 'block' }) }),
      ),
    });
  });
function _i(e) {
  return null !== e;
}
xi.displayName = yi;
var Ci = (e) => ({
  name: 'transformOrigin',
  options: e,
  fn(n) {
    var t, r, o, i, a;
    const { placement: s, rects: l, middlewareData: c } = n,
      u = 0 !== (null == (t = c.arrow) ? void 0 : t.centerOffset),
      d = u ? 0 : e.arrowWidth,
      p = u ? 0 : e.arrowHeight,
      [f, v] = Ri(s),
      h = { start: '0%', center: '50%', end: '100%' }[v],
      m = (null != (o = null == (r = c.arrow) ? void 0 : r.x) ? o : 0) + d / 2,
      g = (null != (a = null == (i = c.arrow) ? void 0 : i.y) ? a : 0) + p / 2;
    let w = '',
      y = '';
    return (
      'bottom' === f
        ? ((w = u ? h : `${m}px`), (y = -p + 'px'))
        : 'top' === f
          ? ((w = u ? h : `${m}px`), (y = `${l.floating.height + p}px`))
          : 'right' === f
            ? ((w = -p + 'px'), (y = u ? h : `${g}px`))
            : 'left' === f &&
              ((w = `${l.floating.width + p}px`), (y = u ? h : `${g}px`)),
      { data: { x: w, y: y } }
    );
  },
});
function Ri(e) {
  const [n, t = 'center'] = e.split('-');
  return [n, t];
}
var Si = pi,
  Ei = vi,
  Pi = wi,
  ji = xi;
var Di = (e) => {
  const { present: n, children: t } = e,
    r = (function (e) {
      const [n, t] = u.useState(),
        r = u.useRef({}),
        o = u.useRef(e),
        i = u.useRef('none'),
        a = e ? 'mounted' : 'unmounted',
        [s, l] = (function (e, n) {
          return u.useReducer((e, t) => {
            const r = n[e][t];
            return null != r ? r : e;
          }, e);
        })(a, {
          mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
          unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
          unmounted: { MOUNT: 'mounted' },
        });
      return (
        u.useEffect(() => {
          const e = Ti(r.current);
          i.current = 'mounted' === s ? e : 'none';
        }, [s]),
        Yo(() => {
          const n = r.current,
            t = o.current;
          if (t !== e) {
            const r = i.current,
              a = Ti(n);
            if (e) l('MOUNT');
            else if (
              'none' === a ||
              'none' === (null == n ? void 0 : n.display)
            )
              l('UNMOUNT');
            else {
              l(t && r !== a ? 'ANIMATION_OUT' : 'UNMOUNT');
            }
            o.current = e;
          }
        }, [e, l]),
        Yo(() => {
          var e;
          if (n) {
            let t;
            const a = null != (e = n.ownerDocument.defaultView) ? e : window,
              s = (e) => {
                const i = Ti(r.current).includes(e.animationName);
                if (e.target === n && i && (l('ANIMATION_END'), !o.current)) {
                  const e = n.style.animationFillMode;
                  ((n.style.animationFillMode = 'forwards'),
                    (t = a.setTimeout(() => {
                      'forwards' === n.style.animationFillMode &&
                        (n.style.animationFillMode = e);
                    })));
                }
              },
              c = (e) => {
                e.target === n && (i.current = Ti(r.current));
              };
            return (
              n.addEventListener('animationstart', c),
              n.addEventListener('animationcancel', s),
              n.addEventListener('animationend', s),
              () => {
                (a.clearTimeout(t),
                  n.removeEventListener('animationstart', c),
                  n.removeEventListener('animationcancel', s),
                  n.removeEventListener('animationend', s));
              }
            );
          }
          l('ANIMATION_END');
        }, [n, l]),
        {
          isPresent: ['mounted', 'unmountSuspended'].includes(s),
          ref: u.useCallback((e) => {
            (e && (r.current = getComputedStyle(e)), t(e));
          }, []),
        }
      );
    })(n),
    o =
      'function' == typeof t ? t({ present: r.isPresent }) : u.Children.only(t),
    i = zo(
      r.ref,
      (function (e) {
        var n, t;
        let r =
            null == (n = Object.getOwnPropertyDescriptor(e.props, 'ref'))
              ? void 0
              : n.get,
          o = r && 'isReactWarning' in r && r.isReactWarning;
        if (o) return e.ref;
        if (
          ((r =
            null == (t = Object.getOwnPropertyDescriptor(e, 'ref'))
              ? void 0
              : t.get),
          (o = r && 'isReactWarning' in r && r.isReactWarning),
          o)
        )
          return e.props.ref;
        return e.props.ref || e.ref;
      })(o),
    );
  return 'function' == typeof t || r.isPresent
    ? u.cloneElement(o, { ref: i })
    : null;
};
function Ti(e) {
  return (null == e ? void 0 : e.animationName) || 'none';
}
function Ni({ prop: e, defaultProp: n, onChange: t = () => {} }) {
  const [r, o] = (function ({ defaultProp: e, onChange: n }) {
      const t = u.useState(e),
        [r] = t,
        o = u.useRef(r),
        i = ai(n);
      return (
        u.useEffect(() => {
          o.current !== r && (i(r), (o.current = r));
        }, [r, o, i]),
        t
      );
    })({ defaultProp: n, onChange: t }),
    i = void 0 !== e,
    a = i ? e : r,
    s = ai(t);
  return [
    a,
    u.useCallback(
      (n) => {
        if (i) {
          const t = 'function' == typeof n ? n(e) : n;
          t !== e && s(t);
        } else o(n);
      },
      [i, e, o, s],
    ),
  ];
}
Di.displayName = 'Presence';
var Ai = 'Popover',
  [Oi] = Go(Ai, [ci]),
  Mi = ci(),
  [Ii, ki] = Oi(Ai),
  Fi = (e) => {
    const {
        __scopePopover: n,
        children: t,
        open: r,
        defaultOpen: o,
        onOpenChange: i,
        modal: a = !1,
      } = e,
      c = Mi(n),
      p = u.useRef(null),
      [f, v] = u.useState(!1),
      [h = !1, m] = Ni({ prop: r, defaultProp: o, onChange: i });
    return d.jsx(
      Si,
      l(s({}, c), {
        children: d.jsx(Ii, {
          scope: n,
          contentId: Jo(),
          triggerRef: p,
          open: h,
          onOpenChange: m,
          onOpenToggle: u.useCallback(() => m((e) => !e), [m]),
          hasCustomAnchor: f,
          onCustomAnchorAdd: u.useCallback(() => v(!0), []),
          onCustomAnchorRemove: u.useCallback(() => v(!1), []),
          modal: a,
          children: t,
        }),
      }),
    );
  };
Fi.displayName = Ai;
var Li = 'PopoverAnchor';
u.forwardRef((e, n) => {
  const t = e,
    { __scopePopover: r } = t,
    o = c(t, ['__scopePopover']),
    i = ki(Li, r),
    a = Mi(r),
    { onCustomAnchorAdd: p, onCustomAnchorRemove: f } = i;
  return (
    u.useEffect(() => (p(), () => f()), [p, f]),
    d.jsx(Ei, l(s(s({}, a), o), { ref: n }))
  );
}).displayName = Li;
var $i = 'PopoverTrigger',
  Wi = u.forwardRef((e, n) => {
    const t = e,
      { __scopePopover: r } = t,
      o = c(t, ['__scopePopover']),
      i = ki($i, r),
      a = Mi(r),
      u = zo(n, i.triggerRef),
      p = d.jsx(
        ri.button,
        l(
          s(
            {
              type: 'button',
              'aria-haspopup': 'dialog',
              'aria-expanded': i.open,
              'aria-controls': i.contentId,
              'data-state': Zi(i.open),
            },
            o,
          ),
          { ref: u, onClick: Ho(e.onClick, i.onOpenToggle) },
        ),
      );
    return i.hasCustomAnchor
      ? p
      : d.jsx(Ei, l(s({ asChild: !0 }, a), { children: p }));
  });
Wi.displayName = $i;
var Vi = 'PopoverPortal',
  [Ki, Hi] = Oi(Vi, { forceMount: void 0 }),
  Bi = (e) => {
    const { __scopePopover: n, forceMount: t, children: r, container: o } = e,
      i = ki(Vi, n);
    return d.jsx(Ki, {
      scope: n,
      forceMount: t,
      children: d.jsx(Di, {
        present: t || i.open,
        children: d.jsx(st, { asChild: !0, container: o, children: r }),
      }),
    });
  };
Bi.displayName = Vi;
var Ui = 'PopoverContent',
  zi = u.forwardRef((e, n) => {
    const t = Hi(Ui, e.__scopePopover),
      r = e,
      { forceMount: o = t.forceMount } = r,
      i = c(r, ['forceMount']),
      a = ki(Ui, e.__scopePopover);
    return d.jsx(Di, {
      present: o || a.open,
      children: a.modal
        ? d.jsx(Gi, l(s({}, i), { ref: n }))
        : d.jsx(Xi, l(s({}, i), { ref: n })),
    });
  });
zi.displayName = Ui;
var Gi = u.forwardRef((e, n) => {
    const t = ki(Ui, e.__scopePopover),
      r = u.useRef(null),
      o = zo(n, r),
      i = u.useRef(!1);
    return (
      u.useEffect(() => {
        const e = r.current;
        if (e) return g(e);
      }, []),
      d.jsx(m, {
        as: Qo,
        allowPinchZoom: !0,
        children: d.jsx(
          Yi,
          l(s({}, e), {
            ref: o,
            trapFocus: t.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: Ho(e.onCloseAutoFocus, (e) => {
              var n;
              (e.preventDefault(),
                i.current || null == (n = t.triggerRef.current) || n.focus());
            }),
            onPointerDownOutside: Ho(
              e.onPointerDownOutside,
              (e) => {
                const n = e.detail.originalEvent,
                  t = 0 === n.button && !0 === n.ctrlKey,
                  r = 2 === n.button || t;
                i.current = r;
              },
              { checkForDefaultPrevented: !1 },
            ),
            onFocusOutside: Ho(e.onFocusOutside, (e) => e.preventDefault(), {
              checkForDefaultPrevented: !1,
            }),
          }),
        ),
      })
    );
  }),
  Xi = u.forwardRef((e, n) => {
    const t = ki(Ui, e.__scopePopover),
      r = u.useRef(!1),
      o = u.useRef(!1);
    return d.jsx(
      Yi,
      l(s({}, e), {
        ref: n,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (n) => {
          var i, a;
          (null == (i = e.onCloseAutoFocus) || i.call(e, n),
            n.defaultPrevented ||
              (r.current || null == (a = t.triggerRef.current) || a.focus(),
              n.preventDefault()),
            (r.current = !1),
            (o.current = !1));
        },
        onInteractOutside: (n) => {
          var i, a;
          (null == (i = e.onInteractOutside) || i.call(e, n),
            n.defaultPrevented ||
              ((r.current = !0),
              'pointerdown' === n.detail.originalEvent.type &&
                (o.current = !0)));
          const s = n.target;
          ((null == (a = t.triggerRef.current) ? void 0 : a.contains(s)) &&
            n.preventDefault(),
            'focusin' === n.detail.originalEvent.type &&
              o.current &&
              n.preventDefault());
        },
      }),
    );
  }),
  Yi = u.forwardRef((e, n) => {
    const t = e,
      {
        __scopePopover: r,
        trapFocus: o,
        onOpenAutoFocus: i,
        onCloseAutoFocus: a,
        disableOutsidePointerEvents: u,
        onEscapeKeyDown: p,
        onPointerDownOutside: f,
        onFocusOutside: v,
        onInteractOutside: h,
      } = t,
      m = c(t, [
        '__scopePopover',
        'trapFocus',
        'onOpenAutoFocus',
        'onCloseAutoFocus',
        'disableOutsidePointerEvents',
        'onEscapeKeyDown',
        'onPointerDownOutside',
        'onFocusOutside',
        'onInteractOutside',
      ]),
      g = ki(Ui, r),
      w = Mi(r);
    return (
      mt(),
      d.jsx(zn, {
        asChild: !0,
        loop: !0,
        trapped: o,
        onMountAutoFocus: i,
        onUnmountAutoFocus: a,
        children: d.jsx(te, {
          asChild: !0,
          disableOutsidePointerEvents: u,
          onInteractOutside: h,
          onEscapeKeyDown: p,
          onPointerDownOutside: f,
          onFocusOutside: v,
          onDismiss: () => g.onOpenChange(!1),
          children: d.jsx(
            Pi,
            l(
              s(
                s(
                  { 'data-state': Zi(g.open), role: 'dialog', id: g.contentId },
                  w,
                ),
                m,
              ),
              {
                ref: n,
                style: s(s({}, m.style), {
                  '--radix-popover-content-transform-origin':
                    'var(--radix-popper-transform-origin)',
                  '--radix-popover-content-available-width':
                    'var(--radix-popper-available-width)',
                  '--radix-popover-content-available-height':
                    'var(--radix-popper-available-height)',
                  '--radix-popover-trigger-width':
                    'var(--radix-popper-anchor-width)',
                  '--radix-popover-trigger-height':
                    'var(--radix-popper-anchor-height)',
                }),
              },
            ),
          ),
        }),
      })
    );
  }),
  qi = 'PopoverClose';
u.forwardRef((e, n) => {
  const t = e,
    { __scopePopover: r } = t,
    o = c(t, ['__scopePopover']),
    i = ki(qi, r);
  return d.jsx(
    ri.button,
    l(s({ type: 'button' }, o), {
      ref: n,
      onClick: Ho(e.onClick, () => i.onOpenChange(!1)),
    }),
  );
}).displayName = qi;
function Zi(e) {
  return e ? 'open' : 'closed';
}
u.forwardRef((e, n) => {
  const t = e,
    { __scopePopover: r } = t,
    o = c(t, ['__scopePopover']),
    i = Mi(r);
  return d.jsx(ji, l(s(s({}, i), o), { ref: n }));
}).displayName = 'PopoverArrow';
var Ji,
  Qi = Fi,
  ea = Wi,
  na = Bi,
  ta = zi,
  ra = 'HoverCard',
  [oa] = O(ra, [dr]),
  ia = dr(),
  [aa, sa] = oa(ra),
  la = (e) => {
    const {
        __scopeHoverCard: n,
        children: t,
        open: r,
        defaultOpen: o,
        onOpenChange: i,
        openDelay: a = 700,
        closeDelay: c = 300,
      } = e,
      p = ia(n),
      f = u.useRef(0),
      v = u.useRef(0),
      h = u.useRef(!1),
      m = u.useRef(!1),
      [g, w] = ye({
        prop: r,
        defaultProp: null != o && o,
        onChange: i,
        caller: ra,
      }),
      y = u.useCallback(() => {
        (clearTimeout(v.current),
          (f.current = window.setTimeout(() => w(!0), a)));
      }, [a, w]),
      b = u.useCallback(() => {
        (clearTimeout(f.current),
          h.current ||
            m.current ||
            (v.current = window.setTimeout(() => w(!1), c)));
      }, [c, w]),
      x = u.useCallback(() => w(!1), [w]);
    return (
      u.useEffect(
        () => () => {
          (clearTimeout(f.current), clearTimeout(v.current));
        },
        [],
      ),
      d.jsx(aa, {
        scope: n,
        open: g,
        onOpenChange: w,
        onOpen: y,
        onClose: b,
        onDismiss: x,
        hasSelectionRef: h,
        isPointerDownOnContentRef: m,
        children: d.jsx(Pr, l(s({}, p), { children: t })),
      })
    );
  };
la.displayName = ra;
var ca = 'HoverCardTrigger',
  ua = u.forwardRef((e, n) => {
    const t = e,
      { __scopeHoverCard: r } = t,
      o = c(t, ['__scopeHoverCard']),
      i = sa(ca, r),
      a = ia(r);
    return d.jsx(
      jr,
      l(s({ asChild: !0 }, a), {
        children: d.jsx(
          pe.a,
          l(s({ 'data-state': i.open ? 'open' : 'closed' }, o), {
            ref: n,
            onPointerEnter: j(e.onPointerEnter, ma(i.onOpen)),
            onPointerLeave: j(e.onPointerLeave, ma(i.onClose)),
            onFocus: j(e.onFocus, i.onOpen),
            onBlur: j(e.onBlur, i.onClose),
            onTouchStart: j(e.onTouchStart, (e) => e.preventDefault()),
          }),
        ),
      }),
    );
  });
ua.displayName = ca;
var [da, pa] = oa('HoverCardPortal', { forceMount: void 0 }),
  fa = 'HoverCardContent',
  va = u.forwardRef((e, n) => {
    const t = pa(fa, e.__scopeHoverCard),
      r = e,
      { forceMount: o = t.forceMount } = r,
      i = c(r, ['forceMount']),
      a = sa(fa, e.__scopeHoverCard);
    return d.jsx(he, {
      present: o || a.open,
      children: d.jsx(
        ha,
        l(s({ 'data-state': a.open ? 'open' : 'closed' }, i), {
          onPointerEnter: j(e.onPointerEnter, ma(a.onOpen)),
          onPointerLeave: j(e.onPointerLeave, ma(a.onClose)),
          ref: n,
        }),
      ),
    });
  });
va.displayName = fa;
var ha = u.forwardRef((e, n) => {
  const t = e,
    {
      __scopeHoverCard: r,
      onEscapeKeyDown: o,
      onPointerDownOutside: i,
      onFocusOutside: a,
      onInteractOutside: p,
    } = t,
    f = c(t, [
      '__scopeHoverCard',
      'onEscapeKeyDown',
      'onPointerDownOutside',
      'onFocusOutside',
      'onInteractOutside',
    ]),
    v = sa(fa, r),
    h = ia(r),
    m = u.useRef(null),
    g = N(n, m),
    [w, y] = u.useState(!1);
  return (
    u.useEffect(() => {
      if (w) {
        const e = document.body;
        return (
          (Ji = e.style.userSelect || e.style.webkitUserSelect),
          (e.style.userSelect = 'none'),
          (e.style.webkitUserSelect = 'none'),
          () => {
            ((e.style.userSelect = Ji), (e.style.webkitUserSelect = Ji));
          }
        );
      }
    }, [w]),
    u.useEffect(() => {
      if (m.current) {
        const e = () => {
          (y(!1),
            (v.isPointerDownOnContentRef.current = !1),
            setTimeout(() => {
              var e;
              '' !==
                (null == (e = document.getSelection())
                  ? void 0
                  : e.toString()) && (v.hasSelectionRef.current = !0);
            }));
        };
        return (
          document.addEventListener('pointerup', e),
          () => {
            (document.removeEventListener('pointerup', e),
              (v.hasSelectionRef.current = !1),
              (v.isPointerDownOnContentRef.current = !1));
          }
        );
      }
    }, [v.isPointerDownOnContentRef, v.hasSelectionRef]),
    u.useEffect(() => {
      if (m.current) {
        (function (e) {
          const n = [],
            t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
              acceptNode: (e) =>
                e.tabIndex >= 0
                  ? NodeFilter.FILTER_ACCEPT
                  : NodeFilter.FILTER_SKIP,
            });
          for (; t.nextNode(); ) n.push(t.currentNode);
          return n;
        })(m.current).forEach((e) => e.setAttribute('tabindex', '-1'));
      }
    }),
    d.jsx(te, {
      asChild: !0,
      disableOutsidePointerEvents: !1,
      onInteractOutside: p,
      onEscapeKeyDown: o,
      onPointerDownOutside: i,
      onFocusOutside: j(a, (e) => {
        e.preventDefault();
      }),
      onDismiss: v.onDismiss,
      children: d.jsx(
        Dr,
        l(s(s({}, h), f), {
          onPointerDown: j(f.onPointerDown, (e) => {
            (e.currentTarget.contains(e.target) && y(!0),
              (v.hasSelectionRef.current = !1),
              (v.isPointerDownOnContentRef.current = !0));
          }),
          ref: g,
          style: s(
            l(s({}, f.style), {
              userSelect: w ? 'text' : void 0,
              WebkitUserSelect: w ? 'text' : void 0,
            }),
            {
              '--radix-hover-card-content-transform-origin':
                'var(--radix-popper-transform-origin)',
              '--radix-hover-card-content-available-width':
                'var(--radix-popper-available-width)',
              '--radix-hover-card-content-available-height':
                'var(--radix-popper-available-height)',
              '--radix-hover-card-trigger-width':
                'var(--radix-popper-anchor-width)',
              '--radix-hover-card-trigger-height':
                'var(--radix-popper-anchor-height)',
            },
          ),
        }),
      ),
    })
  );
});
function ma(e) {
  return (n) => ('touch' === n.pointerType ? void 0 : e());
}
u.forwardRef((e, n) => {
  const t = e,
    { __scopeHoverCard: r } = t,
    o = c(t, ['__scopeHoverCard']),
    i = ia(r);
  return d.jsx(Tr, l(s(s({}, i), o), { ref: n }));
}).displayName = 'HoverCardArrow';
var ga = la,
  wa = ua,
  ya = va;
function ba(e, [n, t]) {
  return Math.min(t, Math.max(n, e));
}
var xa = u.createContext(void 0);
function _a(e) {
  const n = u.useContext(xa);
  return e || n || 'ltr';
}
var Ca = ['PageUp', 'PageDown'],
  Ra = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'],
  Sa = {
    'from-left': ['Home', 'PageDown', 'ArrowDown', 'ArrowLeft'],
    'from-right': ['Home', 'PageDown', 'ArrowDown', 'ArrowRight'],
    'from-bottom': ['Home', 'PageDown', 'ArrowDown', 'ArrowLeft'],
    'from-top': ['Home', 'PageDown', 'ArrowUp', 'ArrowLeft'],
  },
  Ea = 'Slider',
  [Pa, ja, Da] = $(Ea),
  [Ta] = O(Ea, [Da]),
  [Na, Aa] = Ta(Ea),
  Oa = u.forwardRef((e, n) => {
    const t = e,
      {
        name: r,
        min: o = 0,
        max: i = 100,
        step: a = 1,
        orientation: p = 'horizontal',
        disabled: f = !1,
        minStepsBetweenThumbs: v = 0,
        defaultValue: h = [o],
        value: m,
        onValueChange: g = () => {},
        onValueCommit: w = () => {},
        inverted: y = !1,
        form: b,
      } = t,
      x = c(t, [
        'name',
        'min',
        'max',
        'step',
        'orientation',
        'disabled',
        'minStepsBetweenThumbs',
        'defaultValue',
        'value',
        'onValueChange',
        'onValueCommit',
        'inverted',
        'form',
      ]),
      _ = u.useRef(new Set()),
      C = u.useRef(0),
      R = 'horizontal' === p ? ka : Fa,
      [S = [], E] = ye({
        prop: m,
        defaultProp: h,
        onChange: (e) => {
          var n;
          (null == (n = [..._.current][C.current]) || n.focus(), g(e));
        },
      }),
      P = u.useRef(S);
    function D(e, n, { commit: t } = { commit: !1 }) {
      const r = (function (e) {
          return (String(e).split('.')[1] || '').length;
        })(a),
        s = (function (e, n) {
          const t = Math.pow(10, n);
          return Math.round(e * t) / t;
        })(Math.round((e - o) / a) * a + o, r),
        l = ba(s, [o, i]);
      E((e = []) => {
        const r = (function (e = [], n, t) {
          const r = [...e];
          return ((r[t] = n), r.sort((e, n) => e - n));
        })(e, l, n);
        if (
          (function (e, n) {
            if (n > 0) {
              const t = (function (e) {
                return e.slice(0, -1).map((n, t) => e[t + 1] - n);
              })(e);
              return Math.min(...t) >= n;
            }
            return !0;
          })(r, v * a)
        ) {
          C.current = r.indexOf(l);
          const n = String(r) !== String(e);
          return (n && t && w(r), n ? r : e);
        }
        return e;
      });
    }
    return d.jsx(Na, {
      scope: e.__scopeSlider,
      name: r,
      disabled: f,
      min: o,
      max: i,
      valueIndexToChangeRef: C,
      thumbs: _.current,
      values: S,
      orientation: p,
      form: b,
      children: d.jsx(Pa.Provider, {
        scope: e.__scopeSlider,
        children: d.jsx(Pa.Slot, {
          scope: e.__scopeSlider,
          children: d.jsx(
            R,
            l(s({ 'aria-disabled': f, 'data-disabled': f ? '' : void 0 }, x), {
              ref: n,
              onPointerDown: j(x.onPointerDown, () => {
                f || (P.current = S);
              }),
              min: o,
              max: i,
              inverted: y,
              onSlideStart: f
                ? void 0
                : function (e) {
                    const n = (function (e, n) {
                      if (1 === e.length) return 0;
                      const t = e.map((e) => Math.abs(e - n)),
                        r = Math.min(...t);
                      return t.indexOf(r);
                    })(S, e);
                    D(e, n);
                  },
              onSlideMove: f
                ? void 0
                : function (e) {
                    D(e, C.current);
                  },
              onSlideEnd: f
                ? void 0
                : function () {
                    const e = P.current[C.current];
                    S[C.current] !== e && w(S);
                  },
              onHomeKeyDown: () => !f && D(o, 0, { commit: !0 }),
              onEndKeyDown: () => !f && D(i, S.length - 1, { commit: !0 }),
              onStepKeyDown: ({ event: e, direction: n }) => {
                if (!f) {
                  const t =
                      Ca.includes(e.key) || (e.shiftKey && Ra.includes(e.key))
                        ? 10
                        : 1,
                    r = C.current;
                  D(S[r] + a * t * n, r, { commit: !0 });
                }
              },
            }),
          ),
        }),
      }),
    });
  });
Oa.displayName = Ea;
var [Ma, Ia] = Ta(Ea, {
    startEdge: 'left',
    endEdge: 'right',
    size: 'width',
    direction: 1,
  }),
  ka = u.forwardRef((e, n) => {
    const t = e,
      {
        min: r,
        max: o,
        dir: i,
        inverted: a,
        onSlideStart: p,
        onSlideMove: f,
        onSlideEnd: v,
        onStepKeyDown: h,
      } = t,
      m = c(t, [
        'min',
        'max',
        'dir',
        'inverted',
        'onSlideStart',
        'onSlideMove',
        'onSlideEnd',
        'onStepKeyDown',
      ]),
      [g, w] = u.useState(null),
      y = N(n, (e) => w(e)),
      b = u.useRef(void 0),
      x = _a(i),
      _ = 'ltr' === x,
      C = (_ && !a) || (!_ && a);
    function R(e) {
      const n = b.current || g.getBoundingClientRect(),
        t = Xa([0, n.width], C ? [r, o] : [o, r]);
      return ((b.current = n), t(e - n.left));
    }
    return d.jsx(Ma, {
      scope: e.__scopeSlider,
      startEdge: C ? 'left' : 'right',
      endEdge: C ? 'right' : 'left',
      direction: C ? 1 : -1,
      size: 'width',
      children: d.jsx(
        La,
        l(s({ dir: x, 'data-orientation': 'horizontal' }, m), {
          ref: y,
          style: l(s({}, m.style), {
            '--radix-slider-thumb-transform': 'translateX(-50%)',
          }),
          onSlideStart: (e) => {
            const n = R(e.clientX);
            null == p || p(n);
          },
          onSlideMove: (e) => {
            const n = R(e.clientX);
            null == f || f(n);
          },
          onSlideEnd: () => {
            ((b.current = void 0), null == v || v());
          },
          onStepKeyDown: (e) => {
            const n = Sa[C ? 'from-left' : 'from-right'].includes(e.key);
            null == h || h({ event: e, direction: n ? -1 : 1 });
          },
        }),
      ),
    });
  }),
  Fa = u.forwardRef((e, n) => {
    const t = e,
      {
        min: r,
        max: o,
        inverted: i,
        onSlideStart: a,
        onSlideMove: p,
        onSlideEnd: f,
        onStepKeyDown: v,
      } = t,
      h = c(t, [
        'min',
        'max',
        'inverted',
        'onSlideStart',
        'onSlideMove',
        'onSlideEnd',
        'onStepKeyDown',
      ]),
      m = u.useRef(null),
      g = N(n, m),
      w = u.useRef(void 0),
      y = !i;
    function b(e) {
      const n = w.current || m.current.getBoundingClientRect(),
        t = Xa([0, n.height], y ? [o, r] : [r, o]);
      return ((w.current = n), t(e - n.top));
    }
    return d.jsx(Ma, {
      scope: e.__scopeSlider,
      startEdge: y ? 'bottom' : 'top',
      endEdge: y ? 'top' : 'bottom',
      size: 'height',
      direction: y ? 1 : -1,
      children: d.jsx(
        La,
        l(s({ 'data-orientation': 'vertical' }, h), {
          ref: g,
          style: l(s({}, h.style), {
            '--radix-slider-thumb-transform': 'translateY(50%)',
          }),
          onSlideStart: (e) => {
            const n = b(e.clientY);
            null == a || a(n);
          },
          onSlideMove: (e) => {
            const n = b(e.clientY);
            null == p || p(n);
          },
          onSlideEnd: () => {
            ((w.current = void 0), null == f || f());
          },
          onStepKeyDown: (e) => {
            const n = Sa[y ? 'from-bottom' : 'from-top'].includes(e.key);
            null == v || v({ event: e, direction: n ? -1 : 1 });
          },
        }),
      ),
    });
  }),
  La = u.forwardRef((e, n) => {
    const t = e,
      {
        __scopeSlider: r,
        onSlideStart: o,
        onSlideMove: i,
        onSlideEnd: a,
        onHomeKeyDown: u,
        onEndKeyDown: p,
        onStepKeyDown: f,
      } = t,
      v = c(t, [
        '__scopeSlider',
        'onSlideStart',
        'onSlideMove',
        'onSlideEnd',
        'onHomeKeyDown',
        'onEndKeyDown',
        'onStepKeyDown',
      ]),
      h = Aa(Ea, r);
    return d.jsx(
      pe.span,
      l(s({}, v), {
        ref: n,
        onKeyDown: j(e.onKeyDown, (e) => {
          'Home' === e.key
            ? (u(e), e.preventDefault())
            : 'End' === e.key
              ? (p(e), e.preventDefault())
              : Ca.concat(Ra).includes(e.key) && (f(e), e.preventDefault());
        }),
        onPointerDown: j(e.onPointerDown, (e) => {
          const n = e.target;
          (n.setPointerCapture(e.pointerId),
            e.preventDefault(),
            h.thumbs.has(n) ? n.focus() : o(e));
        }),
        onPointerMove: j(e.onPointerMove, (e) => {
          e.target.hasPointerCapture(e.pointerId) && i(e);
        }),
        onPointerUp: j(e.onPointerUp, (e) => {
          const n = e.target;
          n.hasPointerCapture(e.pointerId) &&
            (n.releasePointerCapture(e.pointerId), a(e));
        }),
      }),
    );
  }),
  $a = 'SliderTrack',
  Wa = u.forwardRef((e, n) => {
    const t = e,
      { __scopeSlider: r } = t,
      o = c(t, ['__scopeSlider']),
      i = Aa($a, r);
    return d.jsx(
      pe.span,
      l(
        s(
          {
            'data-disabled': i.disabled ? '' : void 0,
            'data-orientation': i.orientation,
          },
          o,
        ),
        { ref: n },
      ),
    );
  });
Wa.displayName = $a;
var Va = 'SliderRange',
  Ka = u.forwardRef((e, n) => {
    const t = e,
      { __scopeSlider: r } = t,
      o = c(t, ['__scopeSlider']),
      i = Aa(Va, r),
      a = Ia(Va, r),
      p = N(n, u.useRef(null)),
      f = i.values.length,
      v = i.values.map((e) => Ga(e, i.min, i.max)),
      h = f > 1 ? Math.min(...v) : 0,
      m = 100 - Math.max(...v);
    return d.jsx(
      pe.span,
      l(
        s(
          {
            'data-orientation': i.orientation,
            'data-disabled': i.disabled ? '' : void 0,
          },
          o,
        ),
        {
          ref: p,
          style: l(s({}, e.style), {
            [a.startEdge]: h + '%',
            [a.endEdge]: m + '%',
          }),
        },
      ),
    );
  });
Ka.displayName = Va;
var Ha = 'SliderThumb',
  Ba = u.forwardRef((e, n) => {
    const t = ja(e.__scopeSlider),
      [r, o] = u.useState(null),
      i = N(n, (e) => o(e)),
      a = u.useMemo(
        () => (r ? t().findIndex((e) => e.ref.current === r) : -1),
        [t, r],
      );
    return d.jsx(Ua, l(s({}, e), { ref: i, index: a }));
  }),
  Ua = u.forwardRef((e, n) => {
    const t = e,
      { __scopeSlider: r, index: o, name: i } = t,
      a = c(t, ['__scopeSlider', 'index', 'name']),
      p = Aa(Ha, r),
      f = Ia(Ha, r),
      [v, h] = u.useState(null),
      m = N(n, (e) => h(e)),
      g = !v || p.form || !!v.closest('form'),
      w = lr(v),
      y = p.values[o],
      b = void 0 === y ? 0 : Ga(y, p.min, p.max),
      x = (function (e, n) {
        return n > 2
          ? `Value ${e + 1} of ${n}`
          : 2 === n
            ? ['Minimum', 'Maximum'][e]
            : void 0;
      })(o, p.values.length),
      _ = null == w ? void 0 : w[f.size],
      C = _
        ? (function (e, n, t) {
            const r = e / 2,
              o = Xa([0, 50], [0, r]);
            return (r - o(n) * t) * t;
          })(_, b, f.direction)
        : 0;
    return (
      u.useEffect(() => {
        if (v)
          return (
            p.thumbs.add(v),
            () => {
              p.thumbs.delete(v);
            }
          );
      }, [v, p.thumbs]),
      d.jsxs('span', {
        style: {
          transform: 'var(--radix-slider-thumb-transform)',
          position: 'absolute',
          [f.startEdge]: `calc(${b}% + ${C}px)`,
        },
        children: [
          d.jsx(Pa.ItemSlot, {
            scope: e.__scopeSlider,
            children: d.jsx(
              pe.span,
              l(
                s(
                  {
                    role: 'slider',
                    'aria-label': e['aria-label'] || x,
                    'aria-valuemin': p.min,
                    'aria-valuenow': y,
                    'aria-valuemax': p.max,
                    'aria-orientation': p.orientation,
                    'data-orientation': p.orientation,
                    'data-disabled': p.disabled ? '' : void 0,
                    tabIndex: p.disabled ? void 0 : 0,
                  },
                  a,
                ),
                {
                  ref: m,
                  style: void 0 === y ? { display: 'none' } : e.style,
                  onFocus: j(e.onFocus, () => {
                    p.valueIndexToChangeRef.current = o;
                  }),
                },
              ),
            ),
          }),
          g &&
            d.jsx(
              za,
              {
                name:
                  null != i
                    ? i
                    : p.name
                      ? p.name + (p.values.length > 1 ? '[]' : '')
                      : void 0,
                form: p.form,
                value: y,
              },
              o,
            ),
        ],
      })
    );
  });
Ba.displayName = Ha;
var za = u.forwardRef((e, n) => {
  var t = e,
    { __scopeSlider: r, value: o } = t,
    i = c(t, ['__scopeSlider', 'value']);
  const a = u.useRef(null),
    p = N(a, n),
    f = Ro(o);
  return (
    u.useEffect(() => {
      const e = a.current;
      if (!e) return;
      const n = window.HTMLInputElement.prototype,
        t = Object.getOwnPropertyDescriptor(n, 'value').set;
      if (f !== o && t) {
        const n = new Event('input', { bubbles: !0 });
        (t.call(e, o), e.dispatchEvent(n));
      }
    }, [f, o]),
    d.jsx(
      pe.input,
      l(s({ style: { display: 'none' } }, i), { ref: p, defaultValue: o }),
    )
  );
});
function Ga(e, n, t) {
  return ba((100 / (t - n)) * (e - n), [0, 100]);
}
function Xa(e, n) {
  return (t) => {
    if (e[0] === e[1] || n[0] === n[1]) return n[0];
    const r = (n[1] - n[0]) / (e[1] - e[0]);
    return n[0] + r * (t - e[0]);
  };
}
za.displayName = 'RadioBubbleInput';
var Ya = Oa,
  qa = Wa,
  Za = Ka,
  Ja = Ba;
function Qa(e, [n, t]) {
  return Math.min(t, Math.max(n, e));
}
function es(e, n, { checkForDefaultPrevented: t = !0 } = {}) {
  return function (r) {
    if ((null == e || e(r), !1 === t || !r.defaultPrevented))
      return null == n ? void 0 : n(r);
  };
}
function ns(e, n = []) {
  let t = [];
  const r = () => {
    const n = t.map((e) => u.createContext(e));
    return function (t) {
      const r = (null == t ? void 0 : t[e]) || n;
      return u.useMemo(
        () => ({ [`__scope${e}`]: l(s({}, t), { [e]: r }) }),
        [t, r],
      );
    };
  };
  return (
    (r.scopeName = e),
    [
      function (n, r) {
        const o = u.createContext(r),
          i = t.length;
        t = [...t, r];
        const a = (n) => {
          var t;
          const r = n,
            { scope: a, children: s } = r,
            l = c(r, ['scope', 'children']),
            p = (null == (t = null == a ? void 0 : a[e]) ? void 0 : t[i]) || o,
            f = u.useMemo(() => l, Object.values(l));
          return d.jsx(p.Provider, { value: f, children: s });
        };
        return (
          (a.displayName = n + 'Provider'),
          [
            a,
            function (t, a) {
              var s;
              const l =
                  (null == (s = null == a ? void 0 : a[e]) ? void 0 : s[i]) ||
                  o,
                c = u.useContext(l);
              if (c) return c;
              if (void 0 !== r) return r;
              throw new Error(`\`${t}\` must be used within \`${n}\``);
            },
          ]
        );
      },
      ts(r, ...n),
    ]
  );
}
function ts(...e) {
  const n = e[0];
  if (1 === e.length) return n;
  const t = () => {
    const t = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
    return function (e) {
      const r = t.reduce((n, { useScope: t, scopeName: r }) => {
        const o = t(e)[`__scope${r}`];
        return s(s({}, n), o);
      }, {});
      return u.useMemo(() => ({ [`__scope${n.scopeName}`]: r }), [r]);
    };
  };
  return ((t.scopeName = n.scopeName), t);
}
function rs(e, n) {
  if ('function' == typeof e) return e(n);
  null != e && (e.current = n);
}
function os(...e) {
  return (n) => {
    let t = !1;
    const r = e.map((e) => {
      const r = rs(e, n);
      return (t || 'function' != typeof r || (t = !0), r);
    });
    if (t)
      return () => {
        for (let n = 0; n < r.length; n++) {
          const t = r[n];
          'function' == typeof t ? t() : rs(e[n], null);
        }
      };
  };
}
function is(...e) {
  return u.useCallback(os(...e), e);
}
var as = u.forwardRef((e, n) => {
  const t = e,
    { children: r } = t,
    o = c(t, ['children']),
    i = u.Children.toArray(r),
    a = i.find(cs);
  if (a) {
    const e = a.props.children,
      t = i.map((n) =>
        n === a
          ? u.Children.count(e) > 1
            ? u.Children.only(null)
            : u.isValidElement(e)
              ? e.props.children
              : null
          : n,
      );
    return d.jsx(
      ss,
      l(s({}, o), {
        ref: n,
        children: u.isValidElement(e) ? u.cloneElement(e, void 0, t) : null,
      }),
    );
  }
  return d.jsx(ss, l(s({}, o), { ref: n, children: r }));
});
as.displayName = 'Slot';
var ss = u.forwardRef((e, n) => {
  const t = e,
    { children: r } = t,
    o = c(t, ['children']);
  if (u.isValidElement(r)) {
    const e = (function (e) {
      var n, t;
      let r =
          null == (n = Object.getOwnPropertyDescriptor(e.props, 'ref'))
            ? void 0
            : n.get,
        o = r && 'isReactWarning' in r && r.isReactWarning;
      if (o) return e.ref;
      if (
        ((r =
          null == (t = Object.getOwnPropertyDescriptor(e, 'ref'))
            ? void 0
            : t.get),
        (o = r && 'isReactWarning' in r && r.isReactWarning),
        o)
      )
        return e.props.ref;
      return e.props.ref || e.ref;
    })(r);
    return u.cloneElement(
      r,
      l(
        s(
          {},
          (function (e, n) {
            const t = s({}, n);
            for (const r in n) {
              const o = e[r],
                i = n[r];
              /^on[A-Z]/.test(r)
                ? o && i
                  ? (t[r] = (...e) => {
                      (i(...e), o(...e));
                    })
                  : o && (t[r] = o)
                : 'style' === r
                  ? (t[r] = s(s({}, o), i))
                  : 'className' === r &&
                    (t[r] = [o, i].filter(Boolean).join(' '));
            }
            return s(s({}, e), t);
          })(o, r.props),
        ),
        { ref: n ? os(n, e) : e },
      ),
    );
  }
  return u.Children.count(r) > 1 ? u.Children.only(null) : null;
});
ss.displayName = 'SlotClone';
var ls = ({ children: e }) => d.jsx(d.Fragment, { children: e });
function cs(e) {
  return u.isValidElement(e) && e.type === ls;
}
var us = u.createContext(void 0);
var ds = Boolean(null == globalThis ? void 0 : globalThis.document)
    ? u.useLayoutEffect
    : () => {},
  ps = f['useId'.toString()] || (() => {}),
  fs = 0;
function vs(e) {
  const [n, t] = u.useState(ps());
  return (
    ds(() => {
      t((e) => (null != e ? e : String(fs++)));
    }, [e]),
    e || (n ? `radix-${n}` : '')
  );
}
var hs = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'span',
    'svg',
    'ul',
  ].reduce((e, n) => {
    const t = u.forwardRef((e, t) => {
      const r = e,
        { asChild: o } = r,
        i = c(r, ['asChild']),
        a = o ? as : n;
      return (
        'undefined' != typeof window && (window[Symbol.for('radix-ui')] = !0),
        d.jsx(a, l(s({}, i), { ref: t }))
      );
    });
    return ((t.displayName = `Primitive.${n}`), l(s({}, e), { [n]: t }));
  }, {}),
  ms = u.forwardRef((e, n) => {
    const t = e,
      { children: r, width: o = 10, height: i = 5 } = t,
      a = c(t, ['children', 'width', 'height']);
    return d.jsx(
      hs.svg,
      l(s({}, a), {
        ref: n,
        width: o,
        height: i,
        viewBox: '0 0 30 10',
        preserveAspectRatio: 'none',
        children: e.asChild
          ? r
          : d.jsx('polygon', { points: '0,0 30,0 15,10' }),
      }),
    );
  });
ms.displayName = 'Arrow';
var gs = ms;
function ws(e) {
  const n = u.useRef(e);
  return (
    u.useEffect(() => {
      n.current = e;
    }),
    u.useMemo(
      () =>
        (...e) => {
          var t;
          return null == (t = n.current) ? void 0 : t.call(n, ...e);
        },
      [],
    )
  );
}
var ys = 'Popper',
  [bs, xs] = ns(ys),
  [_s, Cs] = bs(ys),
  Rs = (e) => {
    const { __scopePopper: n, children: t } = e,
      [r, o] = u.useState(null);
    return d.jsx(_s, { scope: n, anchor: r, onAnchorChange: o, children: t });
  };
Rs.displayName = ys;
var Ss = 'PopperAnchor',
  Es = u.forwardRef((e, n) => {
    const t = e,
      { __scopePopper: r, virtualRef: o } = t,
      i = c(t, ['__scopePopper', 'virtualRef']),
      a = Cs(Ss, r),
      p = u.useRef(null),
      f = is(n, p);
    return (
      u.useEffect(() => {
        a.onAnchorChange((null == o ? void 0 : o.current) || p.current);
      }),
      o ? null : d.jsx(hs.div, l(s({}, i), { ref: f }))
    );
  });
Es.displayName = Ss;
var Ps = 'PopperContent',
  [js, Ds] = bs(Ps),
  Ts = u.forwardRef((e, n) => {
    var t, r, o, i, a, p, f, v;
    const h = e,
      {
        __scopePopper: m,
        side: g = 'bottom',
        sideOffset: w = 0,
        align: j = 'center',
        alignOffset: D = 0,
        arrowPadding: T = 0,
        avoidCollisions: N = !0,
        collisionBoundary: A = [],
        collisionPadding: O = 0,
        sticky: M = 'partial',
        hideWhenDetached: I = !1,
        updatePositionStrategy: k = 'optimized',
        onPlaced: F,
      } = h,
      L = c(h, [
        '__scopePopper',
        'side',
        'sideOffset',
        'align',
        'alignOffset',
        'arrowPadding',
        'avoidCollisions',
        'collisionBoundary',
        'collisionPadding',
        'sticky',
        'hideWhenDetached',
        'updatePositionStrategy',
        'onPlaced',
      ]),
      $ = Cs(Ps, m),
      [W, V] = u.useState(null),
      K = is(n, (e) => V(e)),
      [H, B] = u.useState(null),
      U = (function (e) {
        const [n, t] = u.useState(void 0);
        return (
          ds(() => {
            if (e) {
              t({ width: e.offsetWidth, height: e.offsetHeight });
              const n = new ResizeObserver((n) => {
                if (!Array.isArray(n)) return;
                if (!n.length) return;
                const r = n[0];
                let o, i;
                if ('borderBoxSize' in r) {
                  const e = r.borderBoxSize,
                    n = Array.isArray(e) ? e[0] : e;
                  ((o = n.inlineSize), (i = n.blockSize));
                } else ((o = e.offsetWidth), (i = e.offsetHeight));
                t({ width: o, height: i });
              });
              return (
                n.observe(e, { box: 'border-box' }),
                () => n.unobserve(e)
              );
            }
            t(void 0);
          }, [e]),
          n
        );
      })(H),
      z = null != (t = null == U ? void 0 : U.width) ? t : 0,
      G = null != (r = null == U ? void 0 : U.height) ? r : 0,
      X = g + ('center' !== j ? '-' + j : ''),
      Y =
        'number' == typeof O
          ? O
          : s({ top: 0, right: 0, bottom: 0, left: 0 }, O),
      q = Array.isArray(A) ? A : [A],
      Z = q.length > 0,
      J = { padding: Y, boundary: q.filter(Ms), altBoundary: Z },
      {
        refs: Q,
        floatingStyles: ee,
        placement: ne,
        isPositioned: te,
        middlewareData: re,
      } = y({
        strategy: 'fixed',
        placement: X,
        whileElementsMounted: (...e) =>
          P(...e, { animationFrame: 'always' === k }),
        elements: { reference: $.anchor },
        middleware: [
          b({ mainAxis: w + G, alignmentAxis: D }),
          N &&
            x(
              s(
                {
                  mainAxis: !0,
                  crossAxis: !1,
                  limiter: 'partial' === M ? E() : void 0,
                },
                J,
              ),
            ),
          N && _(s({}, J)),
          C(
            l(s({}, J), {
              apply: ({
                elements: e,
                rects: n,
                availableWidth: t,
                availableHeight: r,
              }) => {
                const { width: o, height: i } = n.reference,
                  a = e.floating.style;
                (a.setProperty('--radix-popper-available-width', `${t}px`),
                  a.setProperty('--radix-popper-available-height', `${r}px`),
                  a.setProperty('--radix-popper-anchor-width', `${o}px`),
                  a.setProperty('--radix-popper-anchor-height', `${i}px`));
              },
            }),
          ),
          H && R({ element: H, padding: T }),
          Is({ arrowWidth: z, arrowHeight: G }),
          I && S(s({ strategy: 'referenceHidden' }, J)),
        ],
      }),
      [oe, ie] = ks(ne),
      ae = ws(F);
    ds(() => {
      te && (null == ae || ae());
    }, [te, ae]);
    const se = null == (o = re.arrow) ? void 0 : o.x,
      le = null == (i = re.arrow) ? void 0 : i.y,
      ce = 0 !== (null == (a = re.arrow) ? void 0 : a.centerOffset),
      [ue, de] = u.useState();
    return (
      ds(() => {
        W && de(window.getComputedStyle(W).zIndex);
      }, [W]),
      d.jsx('div', {
        ref: Q.setFloating,
        'data-radix-popper-content-wrapper': '',
        style: s(
          l(s({}, ee), {
            transform: te ? ee.transform : 'translate(0, -200%)',
            minWidth: 'max-content',
            zIndex: ue,
            '--radix-popper-transform-origin': [
              null == (p = re.transformOrigin) ? void 0 : p.x,
              null == (f = re.transformOrigin) ? void 0 : f.y,
            ].join(' '),
          }),
          (null == (v = re.hide) ? void 0 : v.referenceHidden) && {
            visibility: 'hidden',
            pointerEvents: 'none',
          },
        ),
        dir: e.dir,
        children: d.jsx(js, {
          scope: m,
          placedSide: oe,
          onArrowChange: B,
          arrowX: se,
          arrowY: le,
          shouldHideArrow: ce,
          children: d.jsx(
            hs.div,
            l(s({ 'data-side': oe, 'data-align': ie }, L), {
              ref: K,
              style: l(s({}, L.style), { animation: te ? void 0 : 'none' }),
            }),
          ),
        }),
      })
    );
  });
Ts.displayName = Ps;
var Ns = 'PopperArrow',
  As = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
  Os = u.forwardRef(function (e, n) {
    const t = e,
      { __scopePopper: r } = t,
      o = c(t, ['__scopePopper']),
      i = Ds(Ns, r),
      a = As[i.placedSide];
    return d.jsx('span', {
      ref: i.onArrowChange,
      style: {
        position: 'absolute',
        left: i.arrowX,
        top: i.arrowY,
        [a]: 0,
        transformOrigin: {
          top: '',
          right: '0 0',
          bottom: 'center 0',
          left: '100% 0',
        }[i.placedSide],
        transform: {
          top: 'translateY(100%)',
          right: 'translateY(50%) rotate(90deg) translateX(-50%)',
          bottom: 'rotate(180deg)',
          left: 'translateY(50%) rotate(-90deg) translateX(50%)',
        }[i.placedSide],
        visibility: i.shouldHideArrow ? 'hidden' : void 0,
      },
      children: d.jsx(
        gs,
        l(s({}, o), { ref: n, style: l(s({}, o.style), { display: 'block' }) }),
      ),
    });
  });
function Ms(e) {
  return null !== e;
}
Os.displayName = Ns;
var Is = (e) => ({
  name: 'transformOrigin',
  options: e,
  fn(n) {
    var t, r, o, i, a;
    const { placement: s, rects: l, middlewareData: c } = n,
      u = 0 !== (null == (t = c.arrow) ? void 0 : t.centerOffset),
      d = u ? 0 : e.arrowWidth,
      p = u ? 0 : e.arrowHeight,
      [f, v] = ks(s),
      h = { start: '0%', center: '50%', end: '100%' }[v],
      m = (null != (o = null == (r = c.arrow) ? void 0 : r.x) ? o : 0) + d / 2,
      g = (null != (a = null == (i = c.arrow) ? void 0 : i.y) ? a : 0) + p / 2;
    let w = '',
      y = '';
    return (
      'bottom' === f
        ? ((w = u ? h : `${m}px`), (y = -p + 'px'))
        : 'top' === f
          ? ((w = u ? h : `${m}px`), (y = `${l.floating.height + p}px`))
          : 'right' === f
            ? ((w = -p + 'px'), (y = u ? h : `${g}px`))
            : 'left' === f &&
              ((w = `${l.floating.width + p}px`), (y = u ? h : `${g}px`)),
      { data: { x: w, y: y } }
    );
  },
});
function ks(e) {
  const [n, t = 'center'] = e.split('-');
  return [n, t];
}
var Fs = Rs,
  Ls = Es,
  $s = Ts,
  Ws = Os;
function Vs({ prop: e, defaultProp: n, onChange: t = () => {} }) {
  const [r, o] = (function ({ defaultProp: e, onChange: n }) {
      const t = u.useState(e),
        [r] = t,
        o = u.useRef(r),
        i = ws(n);
      return (
        u.useEffect(() => {
          o.current !== r && (i(r), (o.current = r));
        }, [r, o, i]),
        t
      );
    })({ defaultProp: n, onChange: t }),
    i = void 0 !== e,
    a = i ? e : r,
    s = ws(t);
  return [
    a,
    u.useCallback(
      (n) => {
        if (i) {
          const t = 'function' == typeof n ? n(e) : n;
          t !== e && s(t);
        } else o(n);
      },
      [i, e, o, s],
    ),
  ];
}
var Ks = u.forwardRef((e, n) =>
  d.jsx(
    hs.span,
    l(s({}, e), {
      ref: n,
      style: s(
        {
          position: 'absolute',
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          wordWrap: 'normal',
        },
        e.style,
      ),
    }),
  ),
);
Ks.displayName = 'VisuallyHidden';
var Hs = [' ', 'Enter', 'ArrowUp', 'ArrowDown'],
  Bs = [' ', 'Enter'],
  Us = 'Select',
  [zs, Gs, Xs] = (function (e) {
    const n = e + 'CollectionProvider',
      [t, r] = ns(n),
      [o, i] = t(n, { collectionRef: { current: null }, itemMap: new Map() }),
      a = (e) => {
        const { scope: n, children: t } = e,
          r = p.useRef(null),
          i = p.useRef(new Map()).current;
        return d.jsx(o, {
          scope: n,
          itemMap: i,
          collectionRef: r,
          children: t,
        });
      };
    a.displayName = n;
    const u = e + 'CollectionSlot',
      f = p.forwardRef((e, n) => {
        const { scope: t, children: r } = e,
          o = is(n, i(u, t).collectionRef);
        return d.jsx(as, { ref: o, children: r });
      });
    f.displayName = u;
    const v = e + 'CollectionItemSlot',
      h = 'data-radix-collection-item',
      m = p.forwardRef((e, n) => {
        const t = e,
          { scope: r, children: o } = t,
          a = c(t, ['scope', 'children']),
          u = p.useRef(null),
          f = is(n, u),
          m = i(v, r);
        return (
          p.useEffect(
            () => (
              m.itemMap.set(u, s({ ref: u }, a)),
              () => {
                m.itemMap.delete(u);
              }
            ),
          ),
          d.jsx(as, l(s({}, { [h]: '' }), { ref: f, children: o }))
        );
      });
    return (
      (m.displayName = v),
      [
        { Provider: a, Slot: f, ItemSlot: m },
        function (n) {
          const t = i(e + 'CollectionConsumer', n);
          return p.useCallback(() => {
            const e = t.collectionRef.current;
            if (!e) return [];
            const n = Array.from(e.querySelectorAll(`[${h}]`));
            return Array.from(t.itemMap.values()).sort(
              (e, t) => n.indexOf(e.ref.current) - n.indexOf(t.ref.current),
            );
          }, [t.collectionRef, t.itemMap]);
        },
        r,
      ]
    );
  })(Us),
  [Ys] = ns(Us, [Xs, xs]),
  qs = xs(),
  [Zs, Js] = Ys(Us),
  [Qs, el] = Ys(Us),
  nl = (e) => {
    const {
        __scopeSelect: n,
        children: t,
        open: r,
        defaultOpen: o,
        onOpenChange: i,
        value: a,
        defaultValue: c,
        onValueChange: p,
        dir: f,
        name: v,
        autoComplete: h,
        disabled: m,
        required: g,
        form: w,
      } = e,
      y = qs(n),
      [b, x] = u.useState(null),
      [_, C] = u.useState(null),
      [R, S] = u.useState(!1),
      E = (function (e) {
        const n = u.useContext(us);
        return e || n || 'ltr';
      })(f),
      [P = !1, j] = Vs({ prop: r, defaultProp: o, onChange: i }),
      [D, T] = Vs({ prop: a, defaultProp: c, onChange: p }),
      N = u.useRef(null),
      A = !b || w || !!b.closest('form'),
      [O, M] = u.useState(new Set()),
      I = Array.from(O)
        .map((e) => e.props.value)
        .join(';');
    return d.jsx(
      Fs,
      l(s({}, y), {
        children: d.jsxs(Zs, {
          required: g,
          scope: n,
          trigger: b,
          onTriggerChange: x,
          valueNode: _,
          onValueNodeChange: C,
          valueNodeHasChildren: R,
          onValueNodeHasChildrenChange: S,
          contentId: vs(),
          value: D,
          onValueChange: T,
          open: P,
          onOpenChange: j,
          dir: E,
          triggerPointerDownPosRef: N,
          disabled: m,
          children: [
            d.jsx(zs.Provider, {
              scope: n,
              children: d.jsx(Qs, {
                scope: e.__scopeSelect,
                onNativeOptionAdd: u.useCallback((e) => {
                  M((n) => new Set(n).add(e));
                }, []),
                onNativeOptionRemove: u.useCallback((e) => {
                  M((n) => {
                    const t = new Set(n);
                    return (t.delete(e), t);
                  });
                }, []),
                children: t,
              }),
            }),
            A
              ? d.jsxs(
                  Kl,
                  {
                    'aria-hidden': !0,
                    required: g,
                    tabIndex: -1,
                    name: v,
                    autoComplete: h,
                    value: D,
                    onChange: (e) => T(e.target.value),
                    disabled: m,
                    form: w,
                    children: [
                      void 0 === D ? d.jsx('option', { value: '' }) : null,
                      Array.from(O),
                    ],
                  },
                  I,
                )
              : null,
          ],
        }),
      }),
    );
  };
nl.displayName = Us;
var tl = 'SelectTrigger',
  rl = u.forwardRef((e, n) => {
    const t = e,
      { __scopeSelect: r, disabled: o = !1 } = t,
      i = c(t, ['__scopeSelect', 'disabled']),
      a = qs(r),
      p = Js(tl, r),
      f = p.disabled || o,
      v = is(n, p.onTriggerChange),
      h = Gs(r),
      m = u.useRef('touch'),
      [g, w, y] = Hl((e) => {
        const n = h().filter((e) => !e.disabled),
          t = n.find((e) => e.value === p.value),
          r = Bl(n, e, t);
        void 0 !== r && p.onValueChange(r.value);
      }),
      b = (e) => {
        (f || (p.onOpenChange(!0), y()),
          e &&
            (p.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY),
            }));
      };
    return d.jsx(
      Ls,
      l(s({ asChild: !0 }, a), {
        children: d.jsx(
          hs.button,
          l(
            s(
              {
                type: 'button',
                role: 'combobox',
                'aria-controls': p.contentId,
                'aria-expanded': p.open,
                'aria-required': p.required,
                'aria-autocomplete': 'none',
                dir: p.dir,
                'data-state': p.open ? 'open' : 'closed',
                disabled: f,
                'data-disabled': f ? '' : void 0,
                'data-placeholder': Vl(p.value) ? '' : void 0,
              },
              i,
            ),
            {
              ref: v,
              onClick: es(i.onClick, (e) => {
                (e.currentTarget.focus(), 'mouse' !== m.current && b(e));
              }),
              onPointerDown: es(i.onPointerDown, (e) => {
                m.current = e.pointerType;
                const n = e.target;
                (n.hasPointerCapture(e.pointerId) &&
                  n.releasePointerCapture(e.pointerId),
                  0 === e.button &&
                    !1 === e.ctrlKey &&
                    'mouse' === e.pointerType &&
                    (b(e), e.preventDefault()));
              }),
              onKeyDown: es(i.onKeyDown, (e) => {
                const n = '' !== g.current;
                (e.ctrlKey ||
                  e.altKey ||
                  e.metaKey ||
                  1 !== e.key.length ||
                  w(e.key),
                  (n && ' ' === e.key) ||
                    (Hs.includes(e.key) && (b(), e.preventDefault())));
              }),
            },
          ),
        ),
      }),
    );
  });
rl.displayName = tl;
var ol = 'SelectValue',
  il = u.forwardRef((e, n) => {
    const t = e,
      {
        __scopeSelect: r,
        className: o,
        style: i,
        children: a,
        placeholder: u = '',
      } = t,
      p = c(t, [
        '__scopeSelect',
        'className',
        'style',
        'children',
        'placeholder',
      ]),
      f = Js(ol, r),
      { onValueNodeHasChildrenChange: v } = f,
      h = void 0 !== a,
      m = is(n, f.onValueNodeChange);
    return (
      ds(() => {
        v(h);
      }, [v, h]),
      d.jsx(
        hs.span,
        l(s({}, p), {
          ref: m,
          style: { pointerEvents: 'none' },
          children: Vl(f.value) ? d.jsx(d.Fragment, { children: u }) : a,
        }),
      )
    );
  });
il.displayName = ol;
var al = u.forwardRef((e, n) => {
  const t = e,
    { __scopeSelect: r, children: o } = t,
    i = c(t, ['__scopeSelect', 'children']);
  return d.jsx(
    hs.span,
    l(s({ 'aria-hidden': !0 }, i), { ref: n, children: o || '▼' }),
  );
});
al.displayName = 'SelectIcon';
var sl = (e) => d.jsx(st, s({ asChild: !0 }, e));
sl.displayName = 'SelectPortal';
var ll = 'SelectContent',
  cl = u.forwardRef((e, n) => {
    const t = Js(ll, e.__scopeSelect),
      [r, o] = u.useState();
    if (
      (ds(() => {
        o(new DocumentFragment());
      }, []),
      !t.open)
    ) {
      const n = r;
      return n
        ? v.createPortal(
            d.jsx(dl, {
              scope: e.__scopeSelect,
              children: d.jsx(zs.Slot, {
                scope: e.__scopeSelect,
                children: d.jsx('div', { children: e.children }),
              }),
            }),
            n,
          )
        : null;
    }
    return d.jsx(fl, l(s({}, e), { ref: n }));
  });
cl.displayName = ll;
var ul = 10,
  [dl, pl] = Ys(ll),
  fl = u.forwardRef((e, n) => {
    const t = e,
      {
        __scopeSelect: r,
        position: o = 'item-aligned',
        onCloseAutoFocus: i,
        onEscapeKeyDown: a,
        onPointerDownOutside: p,
        side: f,
        sideOffset: v,
        align: h,
        alignOffset: w,
        arrowPadding: y,
        collisionBoundary: b,
        collisionPadding: x,
        sticky: _,
        hideWhenDetached: C,
        avoidCollisions: R,
      } = t,
      S = c(t, [
        '__scopeSelect',
        'position',
        'onCloseAutoFocus',
        'onEscapeKeyDown',
        'onPointerDownOutside',
        'side',
        'sideOffset',
        'align',
        'alignOffset',
        'arrowPadding',
        'collisionBoundary',
        'collisionPadding',
        'sticky',
        'hideWhenDetached',
        'avoidCollisions',
      ]),
      E = Js(ll, r),
      [P, j] = u.useState(null),
      [D, T] = u.useState(null),
      N = is(n, (e) => j(e)),
      [A, O] = u.useState(null),
      [M, I] = u.useState(null),
      k = Gs(r),
      [F, L] = u.useState(!1),
      $ = u.useRef(!1);
    (u.useEffect(() => {
      if (P) return g(P);
    }, [P]),
      mt());
    const W = u.useCallback(
        (e) => {
          const [n, ...t] = k().map((e) => e.ref.current),
            [r] = t.slice(-1),
            o = document.activeElement;
          for (const i of e) {
            if (i === o) return;
            if (
              (null == i || i.scrollIntoView({ block: 'nearest' }),
              i === n && D && (D.scrollTop = 0),
              i === r && D && (D.scrollTop = D.scrollHeight),
              null == i || i.focus(),
              document.activeElement !== o)
            )
              return;
          }
        },
        [k, D],
      ),
      V = u.useCallback(() => W([A, P]), [W, A, P]);
    u.useEffect(() => {
      F && V();
    }, [F, V]);
    const { onOpenChange: K, triggerPointerDownPosRef: H } = E;
    (u.useEffect(() => {
      if (P) {
        let e = { x: 0, y: 0 };
        const n = (n) => {
            var t, r, o, i;
            e = {
              x: Math.abs(
                Math.round(n.pageX) -
                  (null != (r = null == (t = H.current) ? void 0 : t.x)
                    ? r
                    : 0),
              ),
              y: Math.abs(
                Math.round(n.pageY) -
                  (null != (i = null == (o = H.current) ? void 0 : o.y)
                    ? i
                    : 0),
              ),
            };
          },
          t = (t) => {
            (e.x <= 10 && e.y <= 10
              ? t.preventDefault()
              : P.contains(t.target) || K(!1),
              document.removeEventListener('pointermove', n),
              (H.current = null));
          };
        return (
          null !== H.current &&
            (document.addEventListener('pointermove', n),
            document.addEventListener('pointerup', t, {
              capture: !0,
              once: !0,
            })),
          () => {
            (document.removeEventListener('pointermove', n),
              document.removeEventListener('pointerup', t, { capture: !0 }));
          }
        );
      }
    }, [P, K, H]),
      u.useEffect(() => {
        const e = () => K(!1);
        return (
          window.addEventListener('blur', e),
          window.addEventListener('resize', e),
          () => {
            (window.removeEventListener('blur', e),
              window.removeEventListener('resize', e));
          }
        );
      }, [K]));
    const [B, U] = Hl((e) => {
        const n = k().filter((e) => !e.disabled),
          t = n.find((e) => e.ref.current === document.activeElement),
          r = Bl(n, e, t);
        r && setTimeout(() => r.ref.current.focus());
      }),
      z = u.useCallback(
        (e, n, t) => {
          const r = !$.current && !t;
          ((void 0 !== E.value && E.value === n) || r) &&
            (O(e), r && ($.current = !0));
        },
        [E.value],
      ),
      G = u.useCallback(() => (null == P ? void 0 : P.focus()), [P]),
      X = u.useCallback(
        (e, n, t) => {
          const r = !$.current && !t;
          ((void 0 !== E.value && E.value === n) || r) && I(e);
        },
        [E.value],
      ),
      Y = 'popper' === o ? hl : vl,
      q =
        Y === hl
          ? {
              side: f,
              sideOffset: v,
              align: h,
              alignOffset: w,
              arrowPadding: y,
              collisionBoundary: b,
              collisionPadding: x,
              sticky: _,
              hideWhenDetached: C,
              avoidCollisions: R,
            }
          : {};
    return d.jsx(dl, {
      scope: r,
      content: P,
      viewport: D,
      onViewportChange: T,
      itemRefCallback: z,
      selectedItem: A,
      onItemLeave: G,
      itemTextRefCallback: X,
      focusSelectedItem: V,
      selectedItemText: M,
      position: o,
      isPositioned: F,
      searchRef: B,
      children: d.jsx(m, {
        as: as,
        allowPinchZoom: !0,
        children: d.jsx(zn, {
          asChild: !0,
          trapped: E.open,
          onMountAutoFocus: (e) => {
            e.preventDefault();
          },
          onUnmountAutoFocus: es(i, (e) => {
            var n;
            (null == (n = E.trigger) || n.focus({ preventScroll: !0 }),
              e.preventDefault());
          }),
          children: d.jsx(te, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: a,
            onPointerDownOutside: p,
            onFocusOutside: (e) => e.preventDefault(),
            onDismiss: () => E.onOpenChange(!1),
            children: d.jsx(
              Y,
              l(
                s(
                  s(
                    {
                      role: 'listbox',
                      id: E.contentId,
                      'data-state': E.open ? 'open' : 'closed',
                      dir: E.dir,
                      onContextMenu: (e) => e.preventDefault(),
                    },
                    S,
                  ),
                  q,
                ),
                {
                  onPlaced: () => L(!0),
                  ref: N,
                  style: s(
                    {
                      display: 'flex',
                      flexDirection: 'column',
                      outline: 'none',
                    },
                    S.style,
                  ),
                  onKeyDown: es(S.onKeyDown, (e) => {
                    const n = e.ctrlKey || e.altKey || e.metaKey;
                    if (
                      ('Tab' === e.key && e.preventDefault(),
                      n || 1 !== e.key.length || U(e.key),
                      ['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(e.key))
                    ) {
                      let n = k()
                        .filter((e) => !e.disabled)
                        .map((e) => e.ref.current);
                      if (
                        (['ArrowUp', 'End'].includes(e.key) &&
                          (n = n.slice().reverse()),
                        ['ArrowUp', 'ArrowDown'].includes(e.key))
                      ) {
                        const t = e.target,
                          r = n.indexOf(t);
                        n = n.slice(r + 1);
                      }
                      (setTimeout(() => W(n)), e.preventDefault());
                    }
                  }),
                },
              ),
            ),
          }),
        }),
      }),
    });
  });
fl.displayName = 'SelectContentImpl';
var vl = u.forwardRef((e, n) => {
  const t = e,
    { __scopeSelect: r, onPlaced: o } = t,
    i = c(t, ['__scopeSelect', 'onPlaced']),
    a = Js(ll, r),
    p = pl(ll, r),
    [f, v] = u.useState(null),
    [h, m] = u.useState(null),
    g = is(n, (e) => m(e)),
    w = Gs(r),
    y = u.useRef(!1),
    b = u.useRef(!0),
    {
      viewport: x,
      selectedItem: _,
      selectedItemText: C,
      focusSelectedItem: R,
    } = p,
    S = u.useCallback(() => {
      if (a.trigger && a.valueNode && f && h && x && _ && C) {
        const e = a.trigger.getBoundingClientRect(),
          n = h.getBoundingClientRect(),
          t = a.valueNode.getBoundingClientRect(),
          r = C.getBoundingClientRect();
        if ('rtl' !== a.dir) {
          const o = r.left - n.left,
            i = t.left - o,
            a = e.left - i,
            s = e.width + a,
            l = Math.max(s, n.width),
            c = window.innerWidth - ul,
            u = Qa(i, [ul, Math.max(ul, c - l)]);
          ((f.style.minWidth = s + 'px'), (f.style.left = u + 'px'));
        } else {
          const o = n.right - r.right,
            i = window.innerWidth - t.right - o,
            a = window.innerWidth - e.right - i,
            s = e.width + a,
            l = Math.max(s, n.width),
            c = window.innerWidth - ul,
            u = Qa(i, [ul, Math.max(ul, c - l)]);
          ((f.style.minWidth = s + 'px'), (f.style.right = u + 'px'));
        }
        const i = w(),
          s = window.innerHeight - 2 * ul,
          l = x.scrollHeight,
          c = window.getComputedStyle(h),
          u = parseInt(c.borderTopWidth, 10),
          d = parseInt(c.paddingTop, 10),
          p = parseInt(c.borderBottomWidth, 10),
          v = u + d + l + parseInt(c.paddingBottom, 10) + p,
          m = Math.min(5 * _.offsetHeight, v),
          g = window.getComputedStyle(x),
          b = parseInt(g.paddingTop, 10),
          R = parseInt(g.paddingBottom, 10),
          S = e.top + e.height / 2 - ul,
          E = s - S,
          P = _.offsetHeight / 2,
          j = u + d + (_.offsetTop + P),
          D = v - j;
        if (j <= S) {
          const e = i.length > 0 && _ === i[i.length - 1].ref.current;
          f.style.bottom = '0px';
          const n = h.clientHeight - x.offsetTop - x.offsetHeight,
            t = j + Math.max(E, P + (e ? R : 0) + n + p);
          f.style.height = t + 'px';
        } else {
          const e = i.length > 0 && _ === i[0].ref.current;
          f.style.top = '0px';
          const n = Math.max(S, u + x.offsetTop + (e ? b : 0) + P) + D;
          ((f.style.height = n + 'px'), (x.scrollTop = j - S + x.offsetTop));
        }
        ((f.style.margin = `${ul}px 0`),
          (f.style.minHeight = m + 'px'),
          (f.style.maxHeight = s + 'px'),
          null == o || o(),
          requestAnimationFrame(() => (y.current = !0)));
      }
    }, [w, a.trigger, a.valueNode, f, h, x, _, C, a.dir, o]);
  ds(() => S(), [S]);
  const [E, P] = u.useState();
  ds(() => {
    h && P(window.getComputedStyle(h).zIndex);
  }, [h]);
  const j = u.useCallback(
    (e) => {
      e && !0 === b.current && (S(), null == R || R(), (b.current = !1));
    },
    [S, R],
  );
  return d.jsx(ml, {
    scope: r,
    contentWrapper: f,
    shouldExpandOnScrollRef: y,
    onScrollButtonChange: j,
    children: d.jsx('div', {
      ref: v,
      style: {
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        zIndex: E,
      },
      children: d.jsx(
        hs.div,
        l(s({}, i), {
          ref: g,
          style: s({ boxSizing: 'border-box', maxHeight: '100%' }, i.style),
        }),
      ),
    }),
  });
});
vl.displayName = 'SelectItemAlignedPosition';
var hl = u.forwardRef((e, n) => {
  const t = e,
    { __scopeSelect: r, align: o = 'start', collisionPadding: i = ul } = t,
    a = c(t, ['__scopeSelect', 'align', 'collisionPadding']),
    u = qs(r);
  return d.jsx(
    $s,
    l(s(s({}, u), a), {
      ref: n,
      align: o,
      collisionPadding: i,
      style: s(s({ boxSizing: 'border-box' }, a.style), {
        '--radix-select-content-transform-origin':
          'var(--radix-popper-transform-origin)',
        '--radix-select-content-available-width':
          'var(--radix-popper-available-width)',
        '--radix-select-content-available-height':
          'var(--radix-popper-available-height)',
        '--radix-select-trigger-width': 'var(--radix-popper-anchor-width)',
        '--radix-select-trigger-height': 'var(--radix-popper-anchor-height)',
      }),
    }),
  );
});
hl.displayName = 'SelectPopperPosition';
var [ml, gl] = Ys(ll, {}),
  wl = 'SelectViewport',
  yl = u.forwardRef((e, n) => {
    const t = e,
      { __scopeSelect: r, nonce: o } = t,
      i = c(t, ['__scopeSelect', 'nonce']),
      a = pl(wl, r),
      p = gl(wl, r),
      f = is(n, a.onViewportChange),
      v = u.useRef(0);
    return d.jsxs(d.Fragment, {
      children: [
        d.jsx('style', {
          dangerouslySetInnerHTML: {
            __html:
              '[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}',
          },
          nonce: o,
        }),
        d.jsx(zs.Slot, {
          scope: r,
          children: d.jsx(
            hs.div,
            l(
              s({ 'data-radix-select-viewport': '', role: 'presentation' }, i),
              {
                ref: f,
                style: s(
                  { position: 'relative', flex: 1, overflow: 'hidden auto' },
                  i.style,
                ),
                onScroll: es(i.onScroll, (e) => {
                  const n = e.currentTarget,
                    { contentWrapper: t, shouldExpandOnScrollRef: r } = p;
                  if ((null == r ? void 0 : r.current) && t) {
                    const e = Math.abs(v.current - n.scrollTop);
                    if (e > 0) {
                      const r = window.innerHeight - 2 * ul,
                        o = parseFloat(t.style.minHeight),
                        i = parseFloat(t.style.height),
                        a = Math.max(o, i);
                      if (a < r) {
                        const o = a + e,
                          i = Math.min(r, o),
                          s = o - i;
                        ((t.style.height = i + 'px'),
                          '0px' === t.style.bottom &&
                            ((n.scrollTop = s > 0 ? s : 0),
                            (t.style.justifyContent = 'flex-end')));
                      }
                    }
                  }
                  v.current = n.scrollTop;
                }),
              },
            ),
          ),
        }),
      ],
    });
  });
yl.displayName = wl;
var bl = 'SelectGroup',
  [xl, _l] = Ys(bl),
  Cl = u.forwardRef((e, n) => {
    const t = e,
      { __scopeSelect: r } = t,
      o = c(t, ['__scopeSelect']),
      i = vs();
    return d.jsx(xl, {
      scope: r,
      id: i,
      children: d.jsx(
        hs.div,
        l(s({ role: 'group', 'aria-labelledby': i }, o), { ref: n }),
      ),
    });
  });
Cl.displayName = bl;
var Rl = 'SelectLabel',
  Sl = u.forwardRef((e, n) => {
    const t = e,
      { __scopeSelect: r } = t,
      o = c(t, ['__scopeSelect']),
      i = _l(Rl, r);
    return d.jsx(hs.div, l(s({ id: i.id }, o), { ref: n }));
  });
Sl.displayName = Rl;
var El = 'SelectItem',
  [Pl, jl] = Ys(El),
  Dl = u.forwardRef((e, n) => {
    const t = e,
      { __scopeSelect: r, value: o, disabled: i = !1, textValue: a } = t,
      p = c(t, ['__scopeSelect', 'value', 'disabled', 'textValue']),
      f = Js(El, r),
      v = pl(El, r),
      h = f.value === o,
      [m, g] = u.useState(null != a ? a : ''),
      [w, y] = u.useState(!1),
      b = is(n, (e) => {
        var n;
        return null == (n = v.itemRefCallback) ? void 0 : n.call(v, e, o, i);
      }),
      x = vs(),
      _ = u.useRef('touch'),
      C = () => {
        i || (f.onValueChange(o), f.onOpenChange(!1));
      };
    if ('' === o)
      throw new Error(
        'A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.',
      );
    return d.jsx(Pl, {
      scope: r,
      value: o,
      disabled: i,
      textId: x,
      isSelected: h,
      onItemTextChange: u.useCallback((e) => {
        g((n) => {
          var t;
          return (
            n ||
            (null != (t = null == e ? void 0 : e.textContent) ? t : '').trim()
          );
        });
      }, []),
      children: d.jsx(zs.ItemSlot, {
        scope: r,
        value: o,
        disabled: i,
        textValue: m,
        children: d.jsx(
          hs.div,
          l(
            s(
              {
                role: 'option',
                'aria-labelledby': x,
                'data-highlighted': w ? '' : void 0,
                'aria-selected': h && w,
                'data-state': h ? 'checked' : 'unchecked',
                'aria-disabled': i || void 0,
                'data-disabled': i ? '' : void 0,
                tabIndex: i ? void 0 : -1,
              },
              p,
            ),
            {
              ref: b,
              onFocus: es(p.onFocus, () => y(!0)),
              onBlur: es(p.onBlur, () => y(!1)),
              onClick: es(p.onClick, () => {
                'mouse' !== _.current && C();
              }),
              onPointerUp: es(p.onPointerUp, () => {
                'mouse' === _.current && C();
              }),
              onPointerDown: es(p.onPointerDown, (e) => {
                _.current = e.pointerType;
              }),
              onPointerMove: es(p.onPointerMove, (e) => {
                var n;
                ((_.current = e.pointerType),
                  i
                    ? null == (n = v.onItemLeave) || n.call(v)
                    : 'mouse' === _.current &&
                      e.currentTarget.focus({ preventScroll: !0 }));
              }),
              onPointerLeave: es(p.onPointerLeave, (e) => {
                var n;
                e.currentTarget === document.activeElement &&
                  (null == (n = v.onItemLeave) || n.call(v));
              }),
              onKeyDown: es(p.onKeyDown, (e) => {
                var n;
                ('' !== (null == (n = v.searchRef) ? void 0 : n.current) &&
                  ' ' === e.key) ||
                  (Bs.includes(e.key) && C(),
                  ' ' === e.key && e.preventDefault());
              }),
            },
          ),
        ),
      }),
    });
  });
Dl.displayName = El;
var Tl = 'SelectItemText',
  Nl = u.forwardRef((e, n) => {
    const t = e,
      { __scopeSelect: r, className: o, style: i } = t,
      a = c(t, ['__scopeSelect', 'className', 'style']),
      p = Js(Tl, r),
      f = pl(Tl, r),
      h = jl(Tl, r),
      m = el(Tl, r),
      [g, w] = u.useState(null),
      y = is(
        n,
        (e) => w(e),
        h.onItemTextChange,
        (e) => {
          var n;
          return null == (n = f.itemTextRefCallback)
            ? void 0
            : n.call(f, e, h.value, h.disabled);
        },
      ),
      b = null == g ? void 0 : g.textContent,
      x = u.useMemo(
        () =>
          d.jsx(
            'option',
            { value: h.value, disabled: h.disabled, children: b },
            h.value,
          ),
        [h.disabled, h.value, b],
      ),
      { onNativeOptionAdd: _, onNativeOptionRemove: C } = m;
    return (
      ds(() => (_(x), () => C(x)), [_, C, x]),
      d.jsxs(d.Fragment, {
        children: [
          d.jsx(hs.span, l(s({ id: h.textId }, a), { ref: y })),
          h.isSelected && p.valueNode && !p.valueNodeHasChildren
            ? v.createPortal(a.children, p.valueNode)
            : null,
        ],
      })
    );
  });
Nl.displayName = Tl;
var Al = 'SelectItemIndicator',
  Ol = u.forwardRef((e, n) => {
    const t = e,
      { __scopeSelect: r } = t,
      o = c(t, ['__scopeSelect']);
    return jl(Al, r).isSelected
      ? d.jsx(hs.span, l(s({ 'aria-hidden': !0 }, o), { ref: n }))
      : null;
  });
Ol.displayName = Al;
var Ml = 'SelectScrollUpButton',
  Il = u.forwardRef((e, n) => {
    const t = pl(Ml, e.__scopeSelect),
      r = gl(Ml, e.__scopeSelect),
      [o, i] = u.useState(!1),
      a = is(n, r.onScrollButtonChange);
    return (
      ds(() => {
        if (t.viewport && t.isPositioned) {
          let e = function () {
            const e = n.scrollTop > 0;
            i(e);
          };
          const n = t.viewport;
          return (
            e(),
            n.addEventListener('scroll', e),
            () => n.removeEventListener('scroll', e)
          );
        }
      }, [t.viewport, t.isPositioned]),
      o
        ? d.jsx(
            Ll,
            l(s({}, e), {
              ref: a,
              onAutoScroll: () => {
                const { viewport: e, selectedItem: n } = t;
                e && n && (e.scrollTop = e.scrollTop - n.offsetHeight);
              },
            }),
          )
        : null
    );
  });
Il.displayName = Ml;
var kl = 'SelectScrollDownButton',
  Fl = u.forwardRef((e, n) => {
    const t = pl(kl, e.__scopeSelect),
      r = gl(kl, e.__scopeSelect),
      [o, i] = u.useState(!1),
      a = is(n, r.onScrollButtonChange);
    return (
      ds(() => {
        if (t.viewport && t.isPositioned) {
          let e = function () {
            const e = n.scrollHeight - n.clientHeight,
              t = Math.ceil(n.scrollTop) < e;
            i(t);
          };
          const n = t.viewport;
          return (
            e(),
            n.addEventListener('scroll', e),
            () => n.removeEventListener('scroll', e)
          );
        }
      }, [t.viewport, t.isPositioned]),
      o
        ? d.jsx(
            Ll,
            l(s({}, e), {
              ref: a,
              onAutoScroll: () => {
                const { viewport: e, selectedItem: n } = t;
                e && n && (e.scrollTop = e.scrollTop + n.offsetHeight);
              },
            }),
          )
        : null
    );
  });
Fl.displayName = kl;
var Ll = u.forwardRef((e, n) => {
    const t = e,
      { __scopeSelect: r, onAutoScroll: o } = t,
      i = c(t, ['__scopeSelect', 'onAutoScroll']),
      a = pl('SelectScrollButton', r),
      p = u.useRef(null),
      f = Gs(r),
      v = u.useCallback(() => {
        null !== p.current &&
          (window.clearInterval(p.current), (p.current = null));
      }, []);
    return (
      u.useEffect(() => () => v(), [v]),
      ds(() => {
        var e;
        const n = f().find((e) => e.ref.current === document.activeElement);
        null == (e = null == n ? void 0 : n.ref.current) ||
          e.scrollIntoView({ block: 'nearest' });
      }, [f]),
      d.jsx(
        hs.div,
        l(s({ 'aria-hidden': !0 }, i), {
          ref: n,
          style: s({ flexShrink: 0 }, i.style),
          onPointerDown: es(i.onPointerDown, () => {
            null === p.current && (p.current = window.setInterval(o, 50));
          }),
          onPointerMove: es(i.onPointerMove, () => {
            var e;
            (null == (e = a.onItemLeave) || e.call(a),
              null === p.current && (p.current = window.setInterval(o, 50)));
          }),
          onPointerLeave: es(i.onPointerLeave, () => {
            v();
          }),
        }),
      )
    );
  }),
  $l = u.forwardRef((e, n) => {
    const t = e,
      { __scopeSelect: r } = t,
      o = c(t, ['__scopeSelect']);
    return d.jsx(hs.div, l(s({ 'aria-hidden': !0 }, o), { ref: n }));
  });
$l.displayName = 'SelectSeparator';
var Wl = 'SelectArrow';
function Vl(e) {
  return '' === e || void 0 === e;
}
u.forwardRef((e, n) => {
  const t = e,
    { __scopeSelect: r } = t,
    o = c(t, ['__scopeSelect']),
    i = qs(r),
    a = Js(Wl, r),
    u = pl(Wl, r);
  return a.open && 'popper' === u.position
    ? d.jsx(Ws, l(s(s({}, i), o), { ref: n }))
    : null;
}).displayName = Wl;
var Kl = u.forwardRef((e, n) => {
  const t = e,
    { value: r } = t,
    o = c(t, ['value']),
    i = u.useRef(null),
    a = is(n, i),
    p = (function (e) {
      const n = u.useRef({ value: e, previous: e });
      return u.useMemo(
        () => (
          n.current.value !== e &&
            ((n.current.previous = n.current.value), (n.current.value = e)),
          n.current.previous
        ),
        [e],
      );
    })(r);
  return (
    u.useEffect(() => {
      const e = i.current,
        n = window.HTMLSelectElement.prototype,
        t = Object.getOwnPropertyDescriptor(n, 'value').set;
      if (p !== r && t) {
        const n = new Event('change', { bubbles: !0 });
        (t.call(e, r), e.dispatchEvent(n));
      }
    }, [p, r]),
    d.jsx(Ks, {
      asChild: !0,
      children: d.jsx('select', l(s({}, o), { ref: a, defaultValue: r })),
    })
  );
});
function Hl(e) {
  const n = ws(e),
    t = u.useRef(''),
    r = u.useRef(0),
    o = u.useCallback(
      (e) => {
        const o = t.current + e;
        (n(o),
          (function e(n) {
            ((t.current = n),
              window.clearTimeout(r.current),
              '' !== n && (r.current = window.setTimeout(() => e(''), 1e3)));
          })(o));
      },
      [n],
    ),
    i = u.useCallback(() => {
      ((t.current = ''), window.clearTimeout(r.current));
    }, []);
  return (
    u.useEffect(() => () => window.clearTimeout(r.current), []),
    [t, o, i]
  );
}
function Bl(e, n, t) {
  const r = n.length > 1 && Array.from(n).every((e) => e === n[0]) ? n[0] : n,
    o = t ? e.indexOf(t) : -1;
  let i =
    ((a = e), (s = Math.max(o, 0)), a.map((e, n) => a[(s + n) % a.length]));
  var a, s;
  1 === r.length && (i = i.filter((e) => e !== t));
  const l = i.find((e) =>
    e.textValue.toLowerCase().startsWith(r.toLowerCase()),
  );
  return l !== t ? l : void 0;
}
Kl.displayName = 'BubbleSelect';
var Ul = nl,
  zl = rl,
  Gl = il,
  Xl = al,
  Yl = sl,
  ql = cl,
  Zl = yl,
  Jl = Cl,
  Ql = Sl,
  ec = Dl,
  nc = Nl,
  tc = Ol,
  rc = Il,
  oc = Fl,
  ic = $l,
  ac = 'Switch',
  [sc] = O(ac),
  [lc, cc] = sc(ac),
  uc = u.forwardRef((e, n) => {
    const t = e,
      {
        __scopeSwitch: r,
        name: o,
        checked: i,
        defaultChecked: a,
        required: p,
        disabled: f,
        value: v = 'on',
        onCheckedChange: h,
        form: m,
      } = t,
      g = c(t, [
        '__scopeSwitch',
        'name',
        'checked',
        'defaultChecked',
        'required',
        'disabled',
        'value',
        'onCheckedChange',
        'form',
      ]),
      [w, y] = u.useState(null),
      b = N(n, (e) => y(e)),
      x = u.useRef(!1),
      _ = !w || m || !!w.closest('form'),
      [C, R] = ye({
        prop: i,
        defaultProp: null != a && a,
        onChange: h,
        caller: ac,
      });
    return d.jsxs(lc, {
      scope: r,
      checked: C,
      disabled: f,
      children: [
        d.jsx(
          pe.button,
          l(
            s(
              {
                type: 'button',
                role: 'switch',
                'aria-checked': C,
                'aria-required': p,
                'data-state': vc(C),
                'data-disabled': f ? '' : void 0,
                disabled: f,
                value: v,
              },
              g,
            ),
            {
              ref: b,
              onClick: j(e.onClick, (e) => {
                (R((e) => !e),
                  _ &&
                    ((x.current = e.isPropagationStopped()),
                    x.current || e.stopPropagation()));
              }),
            },
          ),
        ),
        _ &&
          d.jsx(fc, {
            control: w,
            bubbles: !x.current,
            name: o,
            value: v,
            checked: C,
            required: p,
            disabled: f,
            form: m,
            style: { transform: 'translateX(-100%)' },
          }),
      ],
    });
  });
uc.displayName = ac;
var dc = 'SwitchThumb',
  pc = u.forwardRef((e, n) => {
    const t = e,
      { __scopeSwitch: r } = t,
      o = c(t, ['__scopeSwitch']),
      i = cc(dc, r);
    return d.jsx(
      pe.span,
      l(
        s(
          {
            'data-state': vc(i.checked),
            'data-disabled': i.disabled ? '' : void 0,
          },
          o,
        ),
        { ref: n },
      ),
    );
  });
pc.displayName = dc;
var fc = u.forwardRef((e, n) => {
  var t = e,
    { __scopeSwitch: r, control: o, checked: i, bubbles: a = !0 } = t,
    p = c(t, ['__scopeSwitch', 'control', 'checked', 'bubbles']);
  const f = u.useRef(null),
    v = N(f, n),
    h = Ro(i),
    m = lr(o);
  return (
    u.useEffect(() => {
      const e = f.current;
      if (!e) return;
      const n = window.HTMLInputElement.prototype,
        t = Object.getOwnPropertyDescriptor(n, 'checked').set;
      if (h !== i && t) {
        const n = new Event('click', { bubbles: a });
        (t.call(e, i), e.dispatchEvent(n));
      }
    }, [h, i, a]),
    d.jsx(
      'input',
      l(s({ type: 'checkbox', 'aria-hidden': !0, defaultChecked: i }, p), {
        tabIndex: -1,
        ref: v,
        style: l(s(s({}, p.style), m), {
          position: 'absolute',
          pointerEvents: 'none',
          opacity: 0,
          margin: 0,
        }),
      }),
    )
  );
});
function vc(e) {
  return e ? 'checked' : 'unchecked';
}
fc.displayName = 'SwitchBubbleInput';
var hc = uc,
  mc = pc,
  gc = 'Collapsible',
  [wc, yc] = O(gc),
  [bc, xc] = wc(gc),
  _c = u.forwardRef((e, n) => {
    const t = e,
      {
        __scopeCollapsible: r,
        open: o,
        defaultOpen: i,
        disabled: a,
        onOpenChange: p,
      } = t,
      f = c(t, [
        '__scopeCollapsible',
        'open',
        'defaultOpen',
        'disabled',
        'onOpenChange',
      ]),
      [v, h] = ye({
        prop: o,
        defaultProp: null != i && i,
        onChange: p,
        caller: gc,
      });
    return d.jsx(bc, {
      scope: r,
      disabled: a,
      contentId: ir(),
      open: v,
      onOpenToggle: u.useCallback(() => h((e) => !e), [h]),
      children: d.jsx(
        pe.div,
        l(s({ 'data-state': jc(v), 'data-disabled': a ? '' : void 0 }, f), {
          ref: n,
        }),
      ),
    });
  });
_c.displayName = gc;
var Cc = 'CollapsibleTrigger',
  Rc = u.forwardRef((e, n) => {
    const t = e,
      { __scopeCollapsible: r } = t,
      o = c(t, ['__scopeCollapsible']),
      i = xc(Cc, r);
    return d.jsx(
      pe.button,
      l(
        s(
          {
            type: 'button',
            'aria-controls': i.contentId,
            'aria-expanded': i.open || !1,
            'data-state': jc(i.open),
            'data-disabled': i.disabled ? '' : void 0,
            disabled: i.disabled,
          },
          o,
        ),
        { ref: n, onClick: j(e.onClick, i.onOpenToggle) },
      ),
    );
  });
Rc.displayName = Cc;
var Sc = 'CollapsibleContent',
  Ec = u.forwardRef((e, n) => {
    const t = e,
      { forceMount: r } = t,
      o = c(t, ['forceMount']),
      i = xc(Sc, e.__scopeCollapsible);
    return d.jsx(he, {
      present: r || i.open,
      children: ({ present: e }) =>
        d.jsx(Pc, l(s({}, o), { ref: n, present: e })),
    });
  });
Ec.displayName = Sc;
var Pc = u.forwardRef((e, n) => {
  const t = e,
    { __scopeCollapsible: r, present: o, children: i } = t,
    a = c(t, ['__scopeCollapsible', 'present', 'children']),
    p = xc(Sc, r),
    [f, v] = u.useState(o),
    h = u.useRef(null),
    m = N(n, h),
    g = u.useRef(0),
    w = g.current,
    y = u.useRef(0),
    b = y.current,
    x = p.open || f,
    _ = u.useRef(x),
    C = u.useRef(void 0);
  return (
    u.useEffect(() => {
      const e = requestAnimationFrame(() => (_.current = !1));
      return () => cancelAnimationFrame(e);
    }, []),
    fe(() => {
      const e = h.current;
      if (e) {
        ((C.current = C.current || {
          transitionDuration: e.style.transitionDuration,
          animationName: e.style.animationName,
        }),
          (e.style.transitionDuration = '0s'),
          (e.style.animationName = 'none'));
        const n = e.getBoundingClientRect();
        ((g.current = n.height),
          (y.current = n.width),
          _.current ||
            ((e.style.transitionDuration = C.current.transitionDuration),
            (e.style.animationName = C.current.animationName)),
          v(o));
      }
    }, [p.open, o]),
    d.jsx(
      pe.div,
      l(
        s(
          {
            'data-state': jc(p.open),
            'data-disabled': p.disabled ? '' : void 0,
            id: p.contentId,
            hidden: !x,
          },
          a,
        ),
        {
          ref: m,
          style: s(
            {
              '--radix-collapsible-content-height': w ? `${w}px` : void 0,
              '--radix-collapsible-content-width': b ? `${b}px` : void 0,
            },
            e.style,
          ),
          children: x && i,
        },
      ),
    )
  );
});
function jc(e) {
  return e ? 'open' : 'closed';
}
var Dc = _c,
  Tc = Rc,
  Nc = Ec,
  Ac = 'Accordion',
  Oc = ['Home', 'End', 'ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'],
  [Mc, Ic, kc] = $(Ac),
  [Fc] = O(Ac, [kc, yc]),
  Lc = yc(),
  $c = p.forwardRef((e, n) => {
    const t = e,
      { type: r } = t,
      o = c(t, ['type']),
      i = o,
      a = o;
    return d.jsx(Mc.Provider, {
      scope: e.__scopeAccordion,
      children:
        'multiple' === r
          ? d.jsx(Uc, l(s({}, a), { ref: n }))
          : d.jsx(Bc, l(s({}, i), { ref: n })),
    });
  });
$c.displayName = Ac;
var [Wc, Vc] = Fc(Ac),
  [Kc, Hc] = Fc(Ac, { collapsible: !1 }),
  Bc = p.forwardRef((e, n) => {
    const t = e,
      {
        value: r,
        defaultValue: o,
        onValueChange: i = () => {},
        collapsible: a = !1,
      } = t,
      u = c(t, ['value', 'defaultValue', 'onValueChange', 'collapsible']),
      [f, v] = ye({
        prop: r,
        defaultProp: null != o ? o : '',
        onChange: i,
        caller: Ac,
      });
    return d.jsx(Wc, {
      scope: e.__scopeAccordion,
      value: p.useMemo(() => (f ? [f] : []), [f]),
      onItemOpen: v,
      onItemClose: p.useCallback(() => a && v(''), [a, v]),
      children: d.jsx(Kc, {
        scope: e.__scopeAccordion,
        collapsible: a,
        children: d.jsx(Xc, l(s({}, u), { ref: n })),
      }),
    });
  }),
  Uc = p.forwardRef((e, n) => {
    const t = e,
      { value: r, defaultValue: o, onValueChange: i = () => {} } = t,
      a = c(t, ['value', 'defaultValue', 'onValueChange']),
      [u, f] = ye({
        prop: r,
        defaultProp: null != o ? o : [],
        onChange: i,
        caller: Ac,
      }),
      v = p.useCallback((e) => f((n = []) => [...n, e]), [f]),
      h = p.useCallback((e) => f((n = []) => n.filter((n) => n !== e)), [f]);
    return d.jsx(Wc, {
      scope: e.__scopeAccordion,
      value: u,
      onItemOpen: v,
      onItemClose: h,
      children: d.jsx(Kc, {
        scope: e.__scopeAccordion,
        collapsible: !0,
        children: d.jsx(Xc, l(s({}, a), { ref: n })),
      }),
    });
  }),
  [zc, Gc] = Fc(Ac),
  Xc = p.forwardRef((e, n) => {
    const t = e,
      {
        __scopeAccordion: r,
        disabled: o,
        dir: i,
        orientation: a = 'vertical',
      } = t,
      u = c(t, ['__scopeAccordion', 'disabled', 'dir', 'orientation']),
      f = N(p.useRef(null), n),
      v = Ic(r),
      h = 'ltr' === _a(i),
      m = j(e.onKeyDown, (e) => {
        var n;
        if (!Oc.includes(e.key)) return;
        const t = e.target,
          r = v().filter((e) => {
            var n;
            return !(null == (n = e.ref.current) ? void 0 : n.disabled);
          }),
          o = r.findIndex((e) => e.ref.current === t),
          i = r.length;
        if (-1 === o) return;
        e.preventDefault();
        let s = o;
        const l = i - 1,
          c = () => {
            ((s = o + 1), s > l && (s = 0));
          },
          u = () => {
            ((s = o - 1), s < 0 && (s = l));
          };
        switch (e.key) {
          case 'Home':
            s = 0;
            break;
          case 'End':
            s = l;
            break;
          case 'ArrowRight':
            'horizontal' === a && (h ? c() : u());
            break;
          case 'ArrowDown':
            'vertical' === a && c();
            break;
          case 'ArrowLeft':
            'horizontal' === a && (h ? u() : c());
            break;
          case 'ArrowUp':
            'vertical' === a && u();
        }
        null == (n = r[s % i].ref.current) || n.focus();
      });
    return d.jsx(zc, {
      scope: r,
      disabled: o,
      direction: i,
      orientation: a,
      children: d.jsx(Mc.Slot, {
        scope: r,
        children: d.jsx(
          pe.div,
          l(s({}, u), {
            'data-orientation': a,
            ref: f,
            onKeyDown: o ? void 0 : m,
          }),
        ),
      }),
    });
  }),
  Yc = 'AccordionItem',
  [qc, Zc] = Fc(Yc),
  Jc = p.forwardRef((e, n) => {
    const t = e,
      { __scopeAccordion: r, value: o } = t,
      i = c(t, ['__scopeAccordion', 'value']),
      a = Gc(Yc, r),
      u = Vc(Yc, r),
      p = Lc(r),
      f = ir(),
      v = (o && u.value.includes(o)) || !1,
      h = a.disabled || e.disabled;
    return d.jsx(qc, {
      scope: r,
      open: v,
      disabled: h,
      triggerId: f,
      children: d.jsx(
        Dc,
        l(
          s(
            s({ 'data-orientation': a.orientation, 'data-state': iu(v) }, p),
            i,
          ),
          {
            ref: n,
            disabled: h,
            open: v,
            onOpenChange: (e) => {
              e ? u.onItemOpen(o) : u.onItemClose(o);
            },
          },
        ),
      ),
    });
  });
Jc.displayName = Yc;
var Qc = 'AccordionHeader',
  eu = p.forwardRef((e, n) => {
    const t = e,
      { __scopeAccordion: r } = t,
      o = c(t, ['__scopeAccordion']),
      i = Gc(Ac, r),
      a = Zc(Qc, r);
    return d.jsx(
      pe.h3,
      l(
        s(
          {
            'data-orientation': i.orientation,
            'data-state': iu(a.open),
            'data-disabled': a.disabled ? '' : void 0,
          },
          o,
        ),
        { ref: n },
      ),
    );
  });
eu.displayName = Qc;
var nu = 'AccordionTrigger',
  tu = p.forwardRef((e, n) => {
    const t = e,
      { __scopeAccordion: r } = t,
      o = c(t, ['__scopeAccordion']),
      i = Gc(Ac, r),
      a = Zc(nu, r),
      u = Hc(nu, r),
      p = Lc(r);
    return d.jsx(Mc.ItemSlot, {
      scope: r,
      children: d.jsx(
        Tc,
        l(
          s(
            s(
              {
                'aria-disabled': (a.open && !u.collapsible) || void 0,
                'data-orientation': i.orientation,
                id: a.triggerId,
              },
              p,
            ),
            o,
          ),
          { ref: n },
        ),
      ),
    });
  });
tu.displayName = nu;
var ru = 'AccordionContent',
  ou = p.forwardRef((e, n) => {
    const t = e,
      { __scopeAccordion: r } = t,
      o = c(t, ['__scopeAccordion']),
      i = Gc(Ac, r),
      a = Zc(ru, r),
      u = Lc(r);
    return d.jsx(
      Nc,
      l(
        s(
          s(
            {
              role: 'region',
              'aria-labelledby': a.triggerId,
              'data-orientation': i.orientation,
            },
            u,
          ),
          o,
        ),
        {
          ref: n,
          style: s(
            {
              '--radix-accordion-content-height':
                'var(--radix-collapsible-content-height)',
              '--radix-accordion-content-width':
                'var(--radix-collapsible-content-width)',
            },
            e.style,
          ),
        },
      ),
    );
  });
function iu(e) {
  return e ? 'open' : 'closed';
}
ou.displayName = ru;
var au = $c,
  su = Jc,
  lu = eu,
  cu = tu,
  uu = ou,
  du = 'rovingFocusGroup.onEntryFocus',
  pu = { bubbles: !1, cancelable: !0 },
  fu = 'RovingFocusGroup',
  [vu, hu, mu] = $(fu),
  [gu, wu] = O(fu, [mu]),
  [yu, bu] = gu(fu),
  xu = u.forwardRef((e, n) =>
    d.jsx(vu.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: d.jsx(vu.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: d.jsx(_u, l(s({}, e), { ref: n })),
      }),
    }),
  );
xu.displayName = fu;
var _u = u.forwardRef((e, n) => {
    const t = e,
      {
        __scopeRovingFocusGroup: r,
        orientation: o,
        loop: i = !1,
        dir: a,
        currentTabStopId: p,
        defaultCurrentTabStopId: f,
        onCurrentTabStopIdChange: v,
        onEntryFocus: h,
        preventScrollOnEntryFocus: m = !1,
      } = t,
      g = c(t, [
        '__scopeRovingFocusGroup',
        'orientation',
        'loop',
        'dir',
        'currentTabStopId',
        'defaultCurrentTabStopId',
        'onCurrentTabStopIdChange',
        'onEntryFocus',
        'preventScrollOnEntryFocus',
      ]),
      w = u.useRef(null),
      y = N(n, w),
      b = _a(a),
      [x, _] = ye({
        prop: p,
        defaultProp: null != f ? f : null,
        onChange: v,
        caller: fu,
      }),
      [C, R] = u.useState(!1),
      S = ge(h),
      E = hu(r),
      P = u.useRef(!1),
      [D, T] = u.useState(0);
    return (
      u.useEffect(() => {
        const e = w.current;
        if (e)
          return (
            e.addEventListener(du, S),
            () => e.removeEventListener(du, S)
          );
      }, [S]),
      d.jsx(yu, {
        scope: r,
        orientation: o,
        dir: b,
        loop: i,
        currentTabStopId: x,
        onItemFocus: u.useCallback((e) => _(e), [_]),
        onItemShiftTab: u.useCallback(() => R(!0), []),
        onFocusableItemAdd: u.useCallback(() => T((e) => e + 1), []),
        onFocusableItemRemove: u.useCallback(() => T((e) => e - 1), []),
        children: d.jsx(
          pe.div,
          l(s({ tabIndex: C || 0 === D ? -1 : 0, 'data-orientation': o }, g), {
            ref: y,
            style: s({ outline: 'none' }, e.style),
            onMouseDown: j(e.onMouseDown, () => {
              P.current = !0;
            }),
            onFocus: j(e.onFocus, (e) => {
              const n = !P.current;
              if (e.target === e.currentTarget && n && !C) {
                const n = new CustomEvent(du, pu);
                if ((e.currentTarget.dispatchEvent(n), !n.defaultPrevented)) {
                  const e = E().filter((e) => e.focusable);
                  Eu(
                    [e.find((e) => e.active), e.find((e) => e.id === x), ...e]
                      .filter(Boolean)
                      .map((e) => e.ref.current),
                    m,
                  );
                }
              }
              P.current = !1;
            }),
            onBlur: j(e.onBlur, () => R(!1)),
          }),
        ),
      })
    );
  }),
  Cu = 'RovingFocusGroupItem',
  Ru = u.forwardRef((e, n) => {
    const t = e,
      {
        __scopeRovingFocusGroup: r,
        focusable: o = !0,
        active: i = !1,
        tabStopId: a,
        children: p,
      } = t,
      f = c(t, [
        '__scopeRovingFocusGroup',
        'focusable',
        'active',
        'tabStopId',
        'children',
      ]),
      v = ir(),
      h = a || v,
      m = bu(Cu, r),
      g = m.currentTabStopId === h,
      w = hu(r),
      {
        onFocusableItemAdd: y,
        onFocusableItemRemove: b,
        currentTabStopId: x,
      } = m;
    return (
      u.useEffect(() => {
        if (o) return (y(), () => b());
      }, [o, y, b]),
      d.jsx(vu.ItemSlot, {
        scope: r,
        id: h,
        focusable: o,
        active: i,
        children: d.jsx(
          pe.span,
          l(s({ tabIndex: g ? 0 : -1, 'data-orientation': m.orientation }, f), {
            ref: n,
            onMouseDown: j(e.onMouseDown, (e) => {
              o ? m.onItemFocus(h) : e.preventDefault();
            }),
            onFocus: j(e.onFocus, () => m.onItemFocus(h)),
            onKeyDown: j(e.onKeyDown, (e) => {
              if ('Tab' === e.key && e.shiftKey) return void m.onItemShiftTab();
              if (e.target !== e.currentTarget) return;
              const n = (function (e, n, t) {
                const r = (function (e, n) {
                  return 'rtl' !== n
                    ? e
                    : 'ArrowLeft' === e
                      ? 'ArrowRight'
                      : 'ArrowRight' === e
                        ? 'ArrowLeft'
                        : e;
                })(e.key, t);
                return ('vertical' === n &&
                  ['ArrowLeft', 'ArrowRight'].includes(r)) ||
                  ('horizontal' === n && ['ArrowUp', 'ArrowDown'].includes(r))
                  ? void 0
                  : Su[r];
              })(e, m.orientation, m.dir);
              if (void 0 !== n) {
                if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                e.preventDefault();
                let o = w()
                  .filter((e) => e.focusable)
                  .map((e) => e.ref.current);
                if ('last' === n) o.reverse();
                else if ('prev' === n || 'next' === n) {
                  'prev' === n && o.reverse();
                  const i = o.indexOf(e.currentTarget);
                  o = m.loop
                    ? ((r = i + 1),
                      (t = o).map((e, n) => t[(r + n) % t.length]))
                    : o.slice(i + 1);
                }
                setTimeout(() => Eu(o));
              }
              var t, r;
            }),
            children:
              'function' == typeof p
                ? p({ isCurrentTabStop: g, hasTabStop: null != x })
                : p,
          }),
        ),
      })
    );
  });
Ru.displayName = Cu;
var Su = {
  ArrowLeft: 'prev',
  ArrowUp: 'prev',
  ArrowRight: 'next',
  ArrowDown: 'next',
  PageUp: 'first',
  Home: 'first',
  PageDown: 'last',
  End: 'last',
};
function Eu(e, n = !1) {
  const t = document.activeElement;
  for (const r of e) {
    if (r === t) return;
    if ((r.focus({ preventScroll: n }), document.activeElement !== t)) return;
  }
}
var Pu = xu,
  ju = Ru,
  Du = 'Toggle',
  Tu = u.forwardRef((e, n) => {
    const t = e,
      { pressed: r, defaultPressed: o, onPressedChange: i } = t,
      a = c(t, ['pressed', 'defaultPressed', 'onPressedChange']),
      [u, p] = ye({
        prop: r,
        onChange: i,
        defaultProp: null != o && o,
        caller: Du,
      });
    return d.jsx(
      pe.button,
      l(
        s(
          {
            type: 'button',
            'aria-pressed': u,
            'data-state': u ? 'on' : 'off',
            'data-disabled': e.disabled ? '' : void 0,
          },
          a,
        ),
        {
          ref: n,
          onClick: j(e.onClick, () => {
            e.disabled || p(!u);
          }),
        },
      ),
    );
  });
Tu.displayName = Du;
var Nu = 'ToggleGroup',
  [Au] = O(Nu, [wu]),
  Ou = wu(),
  Mu = p.forwardRef((e, n) => {
    const t = e,
      { type: r } = t,
      o = c(t, ['type']);
    if ('single' === r) {
      const e = o;
      return d.jsx(Fu, l(s({}, e), { ref: n }));
    }
    if ('multiple' === r) {
      const e = o;
      return d.jsx(Lu, l(s({}, e), { ref: n }));
    }
    throw new Error(`Missing prop \`type\` expected on \`${Nu}\``);
  });
Mu.displayName = Nu;
var [Iu, ku] = Au(Nu),
  Fu = p.forwardRef((e, n) => {
    const t = e,
      { value: r, defaultValue: o, onValueChange: i = () => {} } = t,
      a = c(t, ['value', 'defaultValue', 'onValueChange']),
      [u, f] = ye({
        prop: r,
        defaultProp: null != o ? o : '',
        onChange: i,
        caller: Nu,
      });
    return d.jsx(Iu, {
      scope: e.__scopeToggleGroup,
      type: 'single',
      value: p.useMemo(() => (u ? [u] : []), [u]),
      onItemActivate: f,
      onItemDeactivate: p.useCallback(() => f(''), [f]),
      children: d.jsx(Vu, l(s({}, a), { ref: n })),
    });
  }),
  Lu = p.forwardRef((e, n) => {
    const t = e,
      { value: r, defaultValue: o, onValueChange: i = () => {} } = t,
      a = c(t, ['value', 'defaultValue', 'onValueChange']),
      [u, f] = ye({
        prop: r,
        defaultProp: null != o ? o : [],
        onChange: i,
        caller: Nu,
      }),
      v = p.useCallback((e) => f((n = []) => [...n, e]), [f]),
      h = p.useCallback((e) => f((n = []) => n.filter((n) => n !== e)), [f]);
    return d.jsx(Iu, {
      scope: e.__scopeToggleGroup,
      type: 'multiple',
      value: u,
      onItemActivate: v,
      onItemDeactivate: h,
      children: d.jsx(Vu, l(s({}, a), { ref: n })),
    });
  });
Mu.displayName = Nu;
var [$u, Wu] = Au(Nu),
  Vu = p.forwardRef((e, n) => {
    const t = e,
      {
        __scopeToggleGroup: r,
        disabled: o = !1,
        rovingFocus: i = !0,
        orientation: a,
        dir: u,
        loop: p = !0,
      } = t,
      f = c(t, [
        '__scopeToggleGroup',
        'disabled',
        'rovingFocus',
        'orientation',
        'dir',
        'loop',
      ]),
      v = Ou(r),
      h = _a(u),
      m = s({ role: 'group', dir: h }, f);
    return d.jsx($u, {
      scope: r,
      rovingFocus: i,
      disabled: o,
      children: i
        ? d.jsx(
            Pu,
            l(s({ asChild: !0 }, v), {
              orientation: a,
              dir: h,
              loop: p,
              children: d.jsx(pe.div, l(s({}, m), { ref: n })),
            }),
          )
        : d.jsx(pe.div, l(s({}, m), { ref: n })),
    });
  }),
  Ku = 'ToggleGroupItem',
  Hu = p.forwardRef((e, n) => {
    const t = ku(Ku, e.__scopeToggleGroup),
      r = Wu(Ku, e.__scopeToggleGroup),
      o = Ou(e.__scopeToggleGroup),
      i = t.value.includes(e.value),
      a = r.disabled || e.disabled,
      c = l(s({}, e), { pressed: i, disabled: a }),
      u = p.useRef(null);
    return r.rovingFocus
      ? d.jsx(
          ju,
          l(s({ asChild: !0 }, o), {
            focusable: !a,
            active: i,
            ref: u,
            children: d.jsx(Bu, l(s({}, c), { ref: n })),
          }),
        )
      : d.jsx(Bu, l(s({}, c), { ref: n }));
  });
Hu.displayName = Ku;
var Bu = p.forwardRef((e, n) => {
    const t = e,
      { __scopeToggleGroup: r, value: o } = t,
      i = c(t, ['__scopeToggleGroup', 'value']),
      a = ku(Ku, r),
      u = { role: 'radio', 'aria-checked': e.pressed, 'aria-pressed': void 0 },
      p = 'single' === a.type ? u : void 0;
    return d.jsx(
      Tu,
      l(s(s({}, p), i), {
        ref: n,
        onPressedChange: (e) => {
          e ? a.onItemActivate(o) : a.onItemDeactivate(o);
        },
      }),
    );
  }),
  Uu = Mu,
  zu = Hu;
function Gu(e, n, { checkForDefaultPrevented: t = !0 } = {}) {
  return function (r) {
    if ((null == e || e(r), !1 === t || !r.defaultPrevented))
      return null == n ? void 0 : n(r);
  };
}
function Xu(e, n) {
  if ('function' == typeof e) return e(n);
  null != e && (e.current = n);
}
function Yu(...e) {
  return (n) => {
    let t = !1;
    const r = e.map((e) => {
      const r = Xu(e, n);
      return (t || 'function' != typeof r || (t = !0), r);
    });
    if (t)
      return () => {
        for (let n = 0; n < r.length; n++) {
          const t = r[n];
          'function' == typeof t ? t() : Xu(e[n], null);
        }
      };
  };
}
function qu(...e) {
  const n = e[0];
  if (1 === e.length) return n;
  const t = () => {
    const t = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
    return function (e) {
      const r = t.reduce((n, { useScope: t, scopeName: r }) => {
        const o = t(e)[`__scope${r}`];
        return s(s({}, n), o);
      }, {});
      return u.useMemo(() => ({ [`__scope${n.scopeName}`]: r }), [r]);
    };
  };
  return ((t.scopeName = n.scopeName), t);
}
function Zu(e) {
  const n = u.useRef(e);
  return (
    u.useEffect(() => {
      n.current = e;
    }),
    u.useMemo(
      () =>
        (...e) => {
          var t;
          return null == (t = n.current) ? void 0 : t.call(n, ...e);
        },
      [],
    )
  );
}
function Ju({ prop: e, defaultProp: n, onChange: t = () => {} }) {
  const [r, o] = (function ({ defaultProp: e, onChange: n }) {
      const t = u.useState(e),
        [r] = t,
        o = u.useRef(r),
        i = Zu(n);
      return (
        u.useEffect(() => {
          o.current !== r && (i(r), (o.current = r));
        }, [r, o, i]),
        t
      );
    })({ defaultProp: n, onChange: t }),
    i = void 0 !== e,
    a = i ? e : r,
    s = Zu(t);
  return [
    a,
    u.useCallback(
      (n) => {
        if (i) {
          const t = 'function' == typeof n ? n(e) : n;
          t !== e && s(t);
        } else o(n);
      },
      [i, e, o, s],
    ),
  ];
}
var Qu = u.forwardRef((e, n) => {
  const t = e,
    { children: r } = t,
    o = c(t, ['children']),
    i = u.Children.toArray(r),
    a = i.find(td);
  if (a) {
    const e = a.props.children,
      t = i.map((n) =>
        n === a
          ? u.Children.count(e) > 1
            ? u.Children.only(null)
            : u.isValidElement(e)
              ? e.props.children
              : null
          : n,
      );
    return d.jsx(
      ed,
      l(s({}, o), {
        ref: n,
        children: u.isValidElement(e) ? u.cloneElement(e, void 0, t) : null,
      }),
    );
  }
  return d.jsx(ed, l(s({}, o), { ref: n, children: r }));
});
Qu.displayName = 'Slot';
var ed = u.forwardRef((e, n) => {
  const t = e,
    { children: r } = t,
    o = c(t, ['children']);
  if (u.isValidElement(r)) {
    const e = (function (e) {
      var n, t;
      let r =
          null == (n = Object.getOwnPropertyDescriptor(e.props, 'ref'))
            ? void 0
            : n.get,
        o = r && 'isReactWarning' in r && r.isReactWarning;
      if (o) return e.ref;
      if (
        ((r =
          null == (t = Object.getOwnPropertyDescriptor(e, 'ref'))
            ? void 0
            : t.get),
        (o = r && 'isReactWarning' in r && r.isReactWarning),
        o)
      )
        return e.props.ref;
      return e.props.ref || e.ref;
    })(r);
    return u.cloneElement(
      r,
      l(
        s(
          {},
          (function (e, n) {
            const t = s({}, n);
            for (const r in n) {
              const o = e[r],
                i = n[r];
              /^on[A-Z]/.test(r)
                ? o && i
                  ? (t[r] = (...e) => {
                      (i(...e), o(...e));
                    })
                  : o && (t[r] = o)
                : 'style' === r
                  ? (t[r] = s(s({}, o), i))
                  : 'className' === r &&
                    (t[r] = [o, i].filter(Boolean).join(' '));
            }
            return s(s({}, e), t);
          })(o, r.props),
        ),
        { ref: n ? Yu(n, e) : e },
      ),
    );
  }
  return u.Children.count(r) > 1 ? u.Children.only(null) : null;
});
ed.displayName = 'SlotClone';
var nd = ({ children: e }) => d.jsx(d.Fragment, { children: e });
function td(e) {
  return u.isValidElement(e) && e.type === nd;
}
var rd = [
  'a',
  'button',
  'div',
  'form',
  'h2',
  'h3',
  'img',
  'input',
  'label',
  'li',
  'nav',
  'ol',
  'p',
  'span',
  'svg',
  'ul',
].reduce((e, n) => {
  const t = u.forwardRef((e, t) => {
    const r = e,
      { asChild: o } = r,
      i = c(r, ['asChild']),
      a = o ? Qu : n;
    return (
      'undefined' != typeof window && (window[Symbol.for('radix-ui')] = !0),
      d.jsx(a, l(s({}, i), { ref: t }))
    );
  });
  return ((t.displayName = `Primitive.${n}`), l(s({}, e), { [n]: t }));
}, {});
function od(e, n, { checkForDefaultPrevented: t = !0 } = {}) {
  return function (r) {
    if ((null == e || e(r), !1 === t || !r.defaultPrevented))
      return null == n ? void 0 : n(r);
  };
}
function id(e, n = []) {
  let t = [];
  const r = () => {
    const n = t.map((e) => u.createContext(e));
    return function (t) {
      const r = (null == t ? void 0 : t[e]) || n;
      return u.useMemo(
        () => ({ [`__scope${e}`]: l(s({}, t), { [e]: r }) }),
        [t, r],
      );
    };
  };
  return (
    (r.scopeName = e),
    [
      function (n, r) {
        const o = u.createContext(r),
          i = t.length;
        t = [...t, r];
        const a = (n) => {
          var t;
          const r = n,
            { scope: a, children: s } = r,
            l = c(r, ['scope', 'children']),
            p = (null == (t = null == a ? void 0 : a[e]) ? void 0 : t[i]) || o,
            f = u.useMemo(() => l, Object.values(l));
          return d.jsx(p.Provider, { value: f, children: s });
        };
        return (
          (a.displayName = n + 'Provider'),
          [
            a,
            function (t, a) {
              var s;
              const l =
                  (null == (s = null == a ? void 0 : a[e]) ? void 0 : s[i]) ||
                  o,
                c = u.useContext(l);
              if (c) return c;
              if (void 0 !== r) return r;
              throw new Error(`\`${t}\` must be used within \`${n}\``);
            },
          ]
        );
      },
      ad(r, ...n),
    ]
  );
}
function ad(...e) {
  const n = e[0];
  if (1 === e.length) return n;
  const t = () => {
    const t = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
    return function (e) {
      const r = t.reduce((n, { useScope: t, scopeName: r }) => {
        const o = t(e)[`__scope${r}`];
        return s(s({}, n), o);
      }, {});
      return u.useMemo(() => ({ [`__scope${n.scopeName}`]: r }), [r]);
    };
  };
  return ((t.scopeName = n.scopeName), t);
}
function sd(e, n) {
  if ('function' == typeof e) return e(n);
  null != e && (e.current = n);
}
function ld(...e) {
  return (n) => {
    let t = !1;
    const r = e.map((e) => {
      const r = sd(e, n);
      return (t || 'function' != typeof r || (t = !0), r);
    });
    if (t)
      return () => {
        for (let n = 0; n < r.length; n++) {
          const t = r[n];
          'function' == typeof t ? t() : sd(e[n], null);
        }
      };
  };
}
function cd(...e) {
  return u.useCallback(ld(...e), e);
}
var ud = u.forwardRef((e, n) => {
  const t = e,
    { children: r } = t,
    o = c(t, ['children']),
    i = u.Children.toArray(r),
    a = i.find(fd);
  if (a) {
    const e = a.props.children,
      t = i.map((n) =>
        n === a
          ? u.Children.count(e) > 1
            ? u.Children.only(null)
            : u.isValidElement(e)
              ? e.props.children
              : null
          : n,
      );
    return d.jsx(
      dd,
      l(s({}, o), {
        ref: n,
        children: u.isValidElement(e) ? u.cloneElement(e, void 0, t) : null,
      }),
    );
  }
  return d.jsx(dd, l(s({}, o), { ref: n, children: r }));
});
ud.displayName = 'Slot';
var dd = u.forwardRef((e, n) => {
  const t = e,
    { children: r } = t,
    o = c(t, ['children']);
  if (u.isValidElement(r)) {
    const e = (function (e) {
      var n, t;
      let r =
          null == (n = Object.getOwnPropertyDescriptor(e.props, 'ref'))
            ? void 0
            : n.get,
        o = r && 'isReactWarning' in r && r.isReactWarning;
      if (o) return e.ref;
      if (
        ((r =
          null == (t = Object.getOwnPropertyDescriptor(e, 'ref'))
            ? void 0
            : t.get),
        (o = r && 'isReactWarning' in r && r.isReactWarning),
        o)
      )
        return e.props.ref;
      return e.props.ref || e.ref;
    })(r);
    return u.cloneElement(
      r,
      l(
        s(
          {},
          (function (e, n) {
            const t = s({}, n);
            for (const r in n) {
              const o = e[r],
                i = n[r];
              /^on[A-Z]/.test(r)
                ? o && i
                  ? (t[r] = (...e) => {
                      (i(...e), o(...e));
                    })
                  : o && (t[r] = o)
                : 'style' === r
                  ? (t[r] = s(s({}, o), i))
                  : 'className' === r &&
                    (t[r] = [o, i].filter(Boolean).join(' '));
            }
            return s(s({}, e), t);
          })(o, r.props),
        ),
        { ref: n ? ld(n, e) : e },
      ),
    );
  }
  return u.Children.count(r) > 1 ? u.Children.only(null) : null;
});
dd.displayName = 'SlotClone';
var pd = ({ children: e }) => d.jsx(d.Fragment, { children: e });
function fd(e) {
  return u.isValidElement(e) && e.type === pd;
}
var vd = u.createContext(void 0);
var hd = Boolean(null == globalThis ? void 0 : globalThis.document)
    ? u.useLayoutEffect
    : () => {},
  md = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'span',
    'svg',
    'ul',
  ].reduce((e, n) => {
    const t = u.forwardRef((e, t) => {
      const r = e,
        { asChild: o } = r,
        i = c(r, ['asChild']),
        a = o ? ud : n;
      return (
        'undefined' != typeof window && (window[Symbol.for('radix-ui')] = !0),
        d.jsx(a, l(s({}, i), { ref: t }))
      );
    });
    return ((t.displayName = `Primitive.${n}`), l(s({}, e), { [n]: t }));
  }, {});
var gd = u.forwardRef((e, n) => {
  const t = e,
    { children: r, width: o = 10, height: i = 5 } = t,
    a = c(t, ['children', 'width', 'height']);
  return d.jsx(
    md.svg,
    l(s({}, a), {
      ref: n,
      width: o,
      height: i,
      viewBox: '0 0 30 10',
      preserveAspectRatio: 'none',
      children: e.asChild ? r : d.jsx('polygon', { points: '0,0 30,0 15,10' }),
    }),
  );
});
gd.displayName = 'Arrow';
var wd = gd;
function yd(e) {
  const n = u.useRef(e);
  return (
    u.useEffect(() => {
      n.current = e;
    }),
    u.useMemo(
      () =>
        (...e) => {
          var t;
          return null == (t = n.current) ? void 0 : t.call(n, ...e);
        },
      [],
    )
  );
}
var bd = 'Popper',
  [xd, _d] = id(bd),
  [Cd, Rd] = xd(bd),
  Sd = (e) => {
    const { __scopePopper: n, children: t } = e,
      [r, o] = u.useState(null);
    return d.jsx(Cd, { scope: n, anchor: r, onAnchorChange: o, children: t });
  };
Sd.displayName = bd;
var Ed = 'PopperAnchor',
  Pd = u.forwardRef((e, n) => {
    const t = e,
      { __scopePopper: r, virtualRef: o } = t,
      i = c(t, ['__scopePopper', 'virtualRef']),
      a = Rd(Ed, r),
      p = u.useRef(null),
      f = cd(n, p);
    return (
      u.useEffect(() => {
        a.onAnchorChange((null == o ? void 0 : o.current) || p.current);
      }),
      o ? null : d.jsx(md.div, l(s({}, i), { ref: f }))
    );
  });
Pd.displayName = Ed;
var jd = 'PopperContent',
  [Dd, Td] = xd(jd),
  Nd = u.forwardRef((e, n) => {
    var t, r, o, i, a, p, f, v;
    const h = e,
      {
        __scopePopper: m,
        side: g = 'bottom',
        sideOffset: w = 0,
        align: j = 'center',
        alignOffset: D = 0,
        arrowPadding: T = 0,
        avoidCollisions: N = !0,
        collisionBoundary: A = [],
        collisionPadding: O = 0,
        sticky: M = 'partial',
        hideWhenDetached: I = !1,
        updatePositionStrategy: k = 'optimized',
        onPlaced: F,
      } = h,
      L = c(h, [
        '__scopePopper',
        'side',
        'sideOffset',
        'align',
        'alignOffset',
        'arrowPadding',
        'avoidCollisions',
        'collisionBoundary',
        'collisionPadding',
        'sticky',
        'hideWhenDetached',
        'updatePositionStrategy',
        'onPlaced',
      ]),
      $ = Rd(jd, m),
      [W, V] = u.useState(null),
      K = cd(n, (e) => V(e)),
      [H, B] = u.useState(null),
      U = (function (e) {
        const [n, t] = u.useState(void 0);
        return (
          hd(() => {
            if (e) {
              t({ width: e.offsetWidth, height: e.offsetHeight });
              const n = new ResizeObserver((n) => {
                if (!Array.isArray(n)) return;
                if (!n.length) return;
                const r = n[0];
                let o, i;
                if ('borderBoxSize' in r) {
                  const e = r.borderBoxSize,
                    n = Array.isArray(e) ? e[0] : e;
                  ((o = n.inlineSize), (i = n.blockSize));
                } else ((o = e.offsetWidth), (i = e.offsetHeight));
                t({ width: o, height: i });
              });
              return (
                n.observe(e, { box: 'border-box' }),
                () => n.unobserve(e)
              );
            }
            t(void 0);
          }, [e]),
          n
        );
      })(H),
      z = null != (t = null == U ? void 0 : U.width) ? t : 0,
      G = null != (r = null == U ? void 0 : U.height) ? r : 0,
      X = g + ('center' !== j ? '-' + j : ''),
      Y =
        'number' == typeof O
          ? O
          : s({ top: 0, right: 0, bottom: 0, left: 0 }, O),
      q = Array.isArray(A) ? A : [A],
      Z = q.length > 0,
      J = { padding: Y, boundary: q.filter(Id), altBoundary: Z },
      {
        refs: Q,
        floatingStyles: ee,
        placement: ne,
        isPositioned: te,
        middlewareData: re,
      } = y({
        strategy: 'fixed',
        placement: X,
        whileElementsMounted: (...e) =>
          P(...e, { animationFrame: 'always' === k }),
        elements: { reference: $.anchor },
        middleware: [
          b({ mainAxis: w + G, alignmentAxis: D }),
          N &&
            x(
              s(
                {
                  mainAxis: !0,
                  crossAxis: !1,
                  limiter: 'partial' === M ? E() : void 0,
                },
                J,
              ),
            ),
          N && _(s({}, J)),
          C(
            l(s({}, J), {
              apply: ({
                elements: e,
                rects: n,
                availableWidth: t,
                availableHeight: r,
              }) => {
                const { width: o, height: i } = n.reference,
                  a = e.floating.style;
                (a.setProperty('--radix-popper-available-width', `${t}px`),
                  a.setProperty('--radix-popper-available-height', `${r}px`),
                  a.setProperty('--radix-popper-anchor-width', `${o}px`),
                  a.setProperty('--radix-popper-anchor-height', `${i}px`));
              },
            }),
          ),
          H && R({ element: H, padding: T }),
          kd({ arrowWidth: z, arrowHeight: G }),
          I && S(s({ strategy: 'referenceHidden' }, J)),
        ],
      }),
      [oe, ie] = Fd(ne),
      ae = yd(F);
    hd(() => {
      te && (null == ae || ae());
    }, [te, ae]);
    const se = null == (o = re.arrow) ? void 0 : o.x,
      le = null == (i = re.arrow) ? void 0 : i.y,
      ce = 0 !== (null == (a = re.arrow) ? void 0 : a.centerOffset),
      [ue, de] = u.useState();
    return (
      hd(() => {
        W && de(window.getComputedStyle(W).zIndex);
      }, [W]),
      d.jsx('div', {
        ref: Q.setFloating,
        'data-radix-popper-content-wrapper': '',
        style: s(
          l(s({}, ee), {
            transform: te ? ee.transform : 'translate(0, -200%)',
            minWidth: 'max-content',
            zIndex: ue,
            '--radix-popper-transform-origin': [
              null == (p = re.transformOrigin) ? void 0 : p.x,
              null == (f = re.transformOrigin) ? void 0 : f.y,
            ].join(' '),
          }),
          (null == (v = re.hide) ? void 0 : v.referenceHidden) && {
            visibility: 'hidden',
            pointerEvents: 'none',
          },
        ),
        dir: e.dir,
        children: d.jsx(Dd, {
          scope: m,
          placedSide: oe,
          onArrowChange: B,
          arrowX: se,
          arrowY: le,
          shouldHideArrow: ce,
          children: d.jsx(
            md.div,
            l(s({ 'data-side': oe, 'data-align': ie }, L), {
              ref: K,
              style: l(s({}, L.style), { animation: te ? void 0 : 'none' }),
            }),
          ),
        }),
      })
    );
  });
Nd.displayName = jd;
var Ad = 'PopperArrow',
  Od = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
  Md = u.forwardRef(function (e, n) {
    const t = e,
      { __scopePopper: r } = t,
      o = c(t, ['__scopePopper']),
      i = Td(Ad, r),
      a = Od[i.placedSide];
    return d.jsx('span', {
      ref: i.onArrowChange,
      style: {
        position: 'absolute',
        left: i.arrowX,
        top: i.arrowY,
        [a]: 0,
        transformOrigin: {
          top: '',
          right: '0 0',
          bottom: 'center 0',
          left: '100% 0',
        }[i.placedSide],
        transform: {
          top: 'translateY(100%)',
          right: 'translateY(50%) rotate(90deg) translateX(-50%)',
          bottom: 'rotate(180deg)',
          left: 'translateY(50%) rotate(-90deg) translateX(50%)',
        }[i.placedSide],
        visibility: i.shouldHideArrow ? 'hidden' : void 0,
      },
      children: d.jsx(
        wd,
        l(s({}, o), { ref: n, style: l(s({}, o.style), { display: 'block' }) }),
      ),
    });
  });
function Id(e) {
  return null !== e;
}
Md.displayName = Ad;
var kd = (e) => ({
  name: 'transformOrigin',
  options: e,
  fn(n) {
    var t, r, o, i, a;
    const { placement: s, rects: l, middlewareData: c } = n,
      u = 0 !== (null == (t = c.arrow) ? void 0 : t.centerOffset),
      d = u ? 0 : e.arrowWidth,
      p = u ? 0 : e.arrowHeight,
      [f, v] = Fd(s),
      h = { start: '0%', center: '50%', end: '100%' }[v],
      m = (null != (o = null == (r = c.arrow) ? void 0 : r.x) ? o : 0) + d / 2,
      g = (null != (a = null == (i = c.arrow) ? void 0 : i.y) ? a : 0) + p / 2;
    let w = '',
      y = '';
    return (
      'bottom' === f
        ? ((w = u ? h : `${m}px`), (y = -p + 'px'))
        : 'top' === f
          ? ((w = u ? h : `${m}px`), (y = `${l.floating.height + p}px`))
          : 'right' === f
            ? ((w = -p + 'px'), (y = u ? h : `${g}px`))
            : 'left' === f &&
              ((w = `${l.floating.width + p}px`), (y = u ? h : `${g}px`)),
      { data: { x: w, y: y } }
    );
  },
});
function Fd(e) {
  const [n, t = 'center'] = e.split('-');
  return [n, t];
}
var Ld = Sd,
  $d = Pd,
  Wd = Nd,
  Vd = Md;
var Kd = (e) => {
  const { present: n, children: t } = e,
    r = (function (e) {
      const [n, t] = u.useState(),
        r = u.useRef({}),
        o = u.useRef(e),
        i = u.useRef('none'),
        a = e ? 'mounted' : 'unmounted',
        [s, l] = (function (e, n) {
          return u.useReducer((e, t) => {
            const r = n[e][t];
            return null != r ? r : e;
          }, e);
        })(a, {
          mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
          unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
          unmounted: { MOUNT: 'mounted' },
        });
      return (
        u.useEffect(() => {
          const e = Hd(r.current);
          i.current = 'mounted' === s ? e : 'none';
        }, [s]),
        hd(() => {
          const n = r.current,
            t = o.current;
          if (t !== e) {
            const r = i.current,
              a = Hd(n);
            if (e) l('MOUNT');
            else if (
              'none' === a ||
              'none' === (null == n ? void 0 : n.display)
            )
              l('UNMOUNT');
            else {
              l(t && r !== a ? 'ANIMATION_OUT' : 'UNMOUNT');
            }
            o.current = e;
          }
        }, [e, l]),
        hd(() => {
          var e;
          if (n) {
            let t;
            const a = null != (e = n.ownerDocument.defaultView) ? e : window,
              s = (e) => {
                const i = Hd(r.current).includes(e.animationName);
                if (e.target === n && i && (l('ANIMATION_END'), !o.current)) {
                  const e = n.style.animationFillMode;
                  ((n.style.animationFillMode = 'forwards'),
                    (t = a.setTimeout(() => {
                      'forwards' === n.style.animationFillMode &&
                        (n.style.animationFillMode = e);
                    })));
                }
              },
              c = (e) => {
                e.target === n && (i.current = Hd(r.current));
              };
            return (
              n.addEventListener('animationstart', c),
              n.addEventListener('animationcancel', s),
              n.addEventListener('animationend', s),
              () => {
                (a.clearTimeout(t),
                  n.removeEventListener('animationstart', c),
                  n.removeEventListener('animationcancel', s),
                  n.removeEventListener('animationend', s));
              }
            );
          }
          l('ANIMATION_END');
        }, [n, l]),
        {
          isPresent: ['mounted', 'unmountSuspended'].includes(s),
          ref: u.useCallback((e) => {
            (e && (r.current = getComputedStyle(e)), t(e));
          }, []),
        }
      );
    })(n),
    o =
      'function' == typeof t ? t({ present: r.isPresent }) : u.Children.only(t),
    i = cd(
      r.ref,
      (function (e) {
        var n, t;
        let r =
            null == (n = Object.getOwnPropertyDescriptor(e.props, 'ref'))
              ? void 0
              : n.get,
          o = r && 'isReactWarning' in r && r.isReactWarning;
        if (o) return e.ref;
        if (
          ((r =
            null == (t = Object.getOwnPropertyDescriptor(e, 'ref'))
              ? void 0
              : t.get),
          (o = r && 'isReactWarning' in r && r.isReactWarning),
          o)
        )
          return e.props.ref;
        return e.props.ref || e.ref;
      })(o),
    );
  return 'function' == typeof t || r.isPresent
    ? u.cloneElement(o, { ref: i })
    : null;
};
function Hd(e) {
  return (null == e ? void 0 : e.animationName) || 'none';
}
function Bd(e, n, { checkForDefaultPrevented: t = !0 } = {}) {
  return function (r) {
    if ((null == e || e(r), !1 === t || !r.defaultPrevented))
      return null == n ? void 0 : n(r);
  };
}
function Ud(e, n = []) {
  let t = [];
  const r = () => {
    const n = t.map((e) => u.createContext(e));
    return function (t) {
      const r = (null == t ? void 0 : t[e]) || n;
      return u.useMemo(
        () => ({ [`__scope${e}`]: l(s({}, t), { [e]: r }) }),
        [t, r],
      );
    };
  };
  return (
    (r.scopeName = e),
    [
      function (n, r) {
        const o = u.createContext(r),
          i = t.length;
        t = [...t, r];
        const a = (n) => {
          var t;
          const r = n,
            { scope: a, children: s } = r,
            l = c(r, ['scope', 'children']),
            p = (null == (t = null == a ? void 0 : a[e]) ? void 0 : t[i]) || o,
            f = u.useMemo(() => l, Object.values(l));
          return d.jsx(p.Provider, { value: f, children: s });
        };
        return (
          (a.displayName = n + 'Provider'),
          [
            a,
            function (t, a) {
              var s;
              const l =
                  (null == (s = null == a ? void 0 : a[e]) ? void 0 : s[i]) ||
                  o,
                c = u.useContext(l);
              if (c) return c;
              if (void 0 !== r) return r;
              throw new Error(`\`${t}\` must be used within \`${n}\``);
            },
          ]
        );
      },
      zd(r, ...n),
    ]
  );
}
function zd(...e) {
  const n = e[0];
  if (1 === e.length) return n;
  const t = () => {
    const t = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
    return function (e) {
      const r = t.reduce((n, { useScope: t, scopeName: r }) => {
        const o = t(e)[`__scope${r}`];
        return s(s({}, n), o);
      }, {});
      return u.useMemo(() => ({ [`__scope${n.scopeName}`]: r }), [r]);
    };
  };
  return ((t.scopeName = n.scopeName), t);
}
function Gd(e, n) {
  if ('function' == typeof e) return e(n);
  null != e && (e.current = n);
}
function Xd(...e) {
  return (n) => {
    let t = !1;
    const r = e.map((e) => {
      const r = Gd(e, n);
      return (t || 'function' != typeof r || (t = !0), r);
    });
    if (t)
      return () => {
        for (let n = 0; n < r.length; n++) {
          const t = r[n];
          'function' == typeof t ? t() : Gd(e[n], null);
        }
      };
  };
}
function Yd(...e) {
  return u.useCallback(Xd(...e), e);
}
Kd.displayName = 'Presence';
var qd = u.forwardRef((e, n) => {
  const t = e,
    { children: r } = t,
    o = c(t, ['children']),
    i = u.Children.toArray(r),
    a = i.find(Qd);
  if (a) {
    const e = a.props.children,
      t = i.map((n) =>
        n === a
          ? u.Children.count(e) > 1
            ? u.Children.only(null)
            : u.isValidElement(e)
              ? e.props.children
              : null
          : n,
      );
    return d.jsx(
      Zd,
      l(s({}, o), {
        ref: n,
        children: u.isValidElement(e) ? u.cloneElement(e, void 0, t) : null,
      }),
    );
  }
  return d.jsx(Zd, l(s({}, o), { ref: n, children: r }));
});
qd.displayName = 'Slot';
var Zd = u.forwardRef((e, n) => {
  const t = e,
    { children: r } = t,
    o = c(t, ['children']);
  if (u.isValidElement(r)) {
    const e = (function (e) {
      var n, t;
      let r =
          null == (n = Object.getOwnPropertyDescriptor(e.props, 'ref'))
            ? void 0
            : n.get,
        o = r && 'isReactWarning' in r && r.isReactWarning;
      if (o) return e.ref;
      if (
        ((r =
          null == (t = Object.getOwnPropertyDescriptor(e, 'ref'))
            ? void 0
            : t.get),
        (o = r && 'isReactWarning' in r && r.isReactWarning),
        o)
      )
        return e.props.ref;
      return e.props.ref || e.ref;
    })(r);
    return u.cloneElement(
      r,
      l(
        s(
          {},
          (function (e, n) {
            const t = s({}, n);
            for (const r in n) {
              const o = e[r],
                i = n[r];
              /^on[A-Z]/.test(r)
                ? o && i
                  ? (t[r] = (...e) => {
                      (i(...e), o(...e));
                    })
                  : o && (t[r] = o)
                : 'style' === r
                  ? (t[r] = s(s({}, o), i))
                  : 'className' === r &&
                    (t[r] = [o, i].filter(Boolean).join(' '));
            }
            return s(s({}, e), t);
          })(o, r.props),
        ),
        { ref: n ? Xd(n, e) : e },
      ),
    );
  }
  return u.Children.count(r) > 1 ? u.Children.only(null) : null;
});
Zd.displayName = 'SlotClone';
var Jd = ({ children: e }) => d.jsx(d.Fragment, { children: e });
function Qd(e) {
  return u.isValidElement(e) && e.type === Jd;
}
var ep = Boolean(null == globalThis ? void 0 : globalThis.document)
    ? u.useLayoutEffect
    : () => {},
  np = f['useId'.toString()] || (() => {}),
  tp = 0;
var rp = [
  'a',
  'button',
  'div',
  'form',
  'h2',
  'h3',
  'img',
  'input',
  'label',
  'li',
  'nav',
  'ol',
  'p',
  'span',
  'svg',
  'ul',
].reduce((e, n) => {
  const t = u.forwardRef((e, t) => {
    const r = e,
      { asChild: o } = r,
      i = c(r, ['asChild']),
      a = o ? qd : n;
    return (
      'undefined' != typeof window && (window[Symbol.for('radix-ui')] = !0),
      d.jsx(a, l(s({}, i), { ref: t }))
    );
  });
  return ((t.displayName = `Primitive.${n}`), l(s({}, e), { [n]: t }));
}, {});
function op(e) {
  const n = u.useRef(e);
  return (
    u.useEffect(() => {
      n.current = e;
    }),
    u.useMemo(
      () =>
        (...e) => {
          var t;
          return null == (t = n.current) ? void 0 : t.call(n, ...e);
        },
      [],
    )
  );
}
function ip({ prop: e, defaultProp: n, onChange: t = () => {} }) {
  const [r, o] = (function ({ defaultProp: e, onChange: n }) {
      const t = u.useState(e),
        [r] = t,
        o = u.useRef(r),
        i = op(n);
      return (
        u.useEffect(() => {
          o.current !== r && (i(r), (o.current = r));
        }, [r, o, i]),
        t
      );
    })({ defaultProp: n, onChange: t }),
    i = void 0 !== e,
    a = i ? e : r,
    s = op(t);
  return [
    a,
    u.useCallback(
      (n) => {
        if (i) {
          const t = 'function' == typeof n ? n(e) : n;
          t !== e && s(t);
        } else o(n);
      },
      [i, e, o, s],
    ),
  ];
}
var ap = u.createContext(void 0);
var sp = 'rovingFocusGroup.onEntryFocus',
  lp = { bubbles: !1, cancelable: !0 },
  cp = 'RovingFocusGroup',
  [up, dp, pp] = (function (e) {
    const n = e + 'CollectionProvider',
      [t, r] = Ud(n),
      [o, i] = t(n, { collectionRef: { current: null }, itemMap: new Map() }),
      a = (e) => {
        const { scope: n, children: t } = e,
          r = p.useRef(null),
          i = p.useRef(new Map()).current;
        return d.jsx(o, {
          scope: n,
          itemMap: i,
          collectionRef: r,
          children: t,
        });
      };
    a.displayName = n;
    const u = e + 'CollectionSlot',
      f = p.forwardRef((e, n) => {
        const { scope: t, children: r } = e,
          o = Yd(n, i(u, t).collectionRef);
        return d.jsx(qd, { ref: o, children: r });
      });
    f.displayName = u;
    const v = e + 'CollectionItemSlot',
      h = 'data-radix-collection-item',
      m = p.forwardRef((e, n) => {
        const t = e,
          { scope: r, children: o } = t,
          a = c(t, ['scope', 'children']),
          u = p.useRef(null),
          f = Yd(n, u),
          m = i(v, r);
        return (
          p.useEffect(
            () => (
              m.itemMap.set(u, s({ ref: u }, a)),
              () => {
                m.itemMap.delete(u);
              }
            ),
          ),
          d.jsx(qd, l(s({}, { [h]: '' }), { ref: f, children: o }))
        );
      });
    return (
      (m.displayName = v),
      [
        { Provider: a, Slot: f, ItemSlot: m },
        function (n) {
          const t = i(e + 'CollectionConsumer', n);
          return p.useCallback(() => {
            const e = t.collectionRef.current;
            if (!e) return [];
            const n = Array.from(e.querySelectorAll(`[${h}]`));
            return Array.from(t.itemMap.values()).sort(
              (e, t) => n.indexOf(e.ref.current) - n.indexOf(t.ref.current),
            );
          }, [t.collectionRef, t.itemMap]);
        },
        r,
      ]
    );
  })(cp),
  [fp, vp] = Ud(cp, [pp]),
  [hp, mp] = fp(cp),
  gp = u.forwardRef((e, n) =>
    d.jsx(up.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: d.jsx(up.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: d.jsx(wp, l(s({}, e), { ref: n })),
      }),
    }),
  );
gp.displayName = cp;
var wp = u.forwardRef((e, n) => {
    const t = e,
      {
        __scopeRovingFocusGroup: r,
        orientation: o,
        loop: i = !1,
        dir: a,
        currentTabStopId: p,
        defaultCurrentTabStopId: f,
        onCurrentTabStopIdChange: v,
        onEntryFocus: h,
        preventScrollOnEntryFocus: m = !1,
      } = t,
      g = c(t, [
        '__scopeRovingFocusGroup',
        'orientation',
        'loop',
        'dir',
        'currentTabStopId',
        'defaultCurrentTabStopId',
        'onCurrentTabStopIdChange',
        'onEntryFocus',
        'preventScrollOnEntryFocus',
      ]),
      w = u.useRef(null),
      y = Yd(n, w),
      b = (function (e) {
        const n = u.useContext(ap);
        return e || n || 'ltr';
      })(a),
      [x = null, _] = ip({ prop: p, defaultProp: f, onChange: v }),
      [C, R] = u.useState(!1),
      S = op(h),
      E = dp(r),
      P = u.useRef(!1),
      [j, D] = u.useState(0);
    return (
      u.useEffect(() => {
        const e = w.current;
        if (e)
          return (
            e.addEventListener(sp, S),
            () => e.removeEventListener(sp, S)
          );
      }, [S]),
      d.jsx(hp, {
        scope: r,
        orientation: o,
        dir: b,
        loop: i,
        currentTabStopId: x,
        onItemFocus: u.useCallback((e) => _(e), [_]),
        onItemShiftTab: u.useCallback(() => R(!0), []),
        onFocusableItemAdd: u.useCallback(() => D((e) => e + 1), []),
        onFocusableItemRemove: u.useCallback(() => D((e) => e - 1), []),
        children: d.jsx(
          rp.div,
          l(s({ tabIndex: C || 0 === j ? -1 : 0, 'data-orientation': o }, g), {
            ref: y,
            style: s({ outline: 'none' }, e.style),
            onMouseDown: Bd(e.onMouseDown, () => {
              P.current = !0;
            }),
            onFocus: Bd(e.onFocus, (e) => {
              const n = !P.current;
              if (e.target === e.currentTarget && n && !C) {
                const n = new CustomEvent(sp, lp);
                if ((e.currentTarget.dispatchEvent(n), !n.defaultPrevented)) {
                  const e = E().filter((e) => e.focusable);
                  _p(
                    [e.find((e) => e.active), e.find((e) => e.id === x), ...e]
                      .filter(Boolean)
                      .map((e) => e.ref.current),
                    m,
                  );
                }
              }
              P.current = !1;
            }),
            onBlur: Bd(e.onBlur, () => R(!1)),
          }),
        ),
      })
    );
  }),
  yp = 'RovingFocusGroupItem',
  bp = u.forwardRef((e, n) => {
    const t = e,
      {
        __scopeRovingFocusGroup: r,
        focusable: o = !0,
        active: i = !1,
        tabStopId: a,
      } = t,
      p = c(t, ['__scopeRovingFocusGroup', 'focusable', 'active', 'tabStopId']),
      f = (function (e) {
        const [n, t] = u.useState(np());
        return (
          ep(() => {
            t((e) => (null != e ? e : String(tp++)));
          }, [e]),
          n ? `radix-${n}` : ''
        );
      })(),
      v = a || f,
      h = mp(yp, r),
      m = h.currentTabStopId === v,
      g = dp(r),
      { onFocusableItemAdd: w, onFocusableItemRemove: y } = h;
    return (
      u.useEffect(() => {
        if (o) return (w(), () => y());
      }, [o, w, y]),
      d.jsx(up.ItemSlot, {
        scope: r,
        id: v,
        focusable: o,
        active: i,
        children: d.jsx(
          rp.span,
          l(s({ tabIndex: m ? 0 : -1, 'data-orientation': h.orientation }, p), {
            ref: n,
            onMouseDown: Bd(e.onMouseDown, (e) => {
              o ? h.onItemFocus(v) : e.preventDefault();
            }),
            onFocus: Bd(e.onFocus, () => h.onItemFocus(v)),
            onKeyDown: Bd(e.onKeyDown, (e) => {
              if ('Tab' === e.key && e.shiftKey) return void h.onItemShiftTab();
              if (e.target !== e.currentTarget) return;
              const n = (function (e, n, t) {
                const r = (function (e, n) {
                  return 'rtl' !== n
                    ? e
                    : 'ArrowLeft' === e
                      ? 'ArrowRight'
                      : 'ArrowRight' === e
                        ? 'ArrowLeft'
                        : e;
                })(e.key, t);
                return ('vertical' === n &&
                  ['ArrowLeft', 'ArrowRight'].includes(r)) ||
                  ('horizontal' === n && ['ArrowUp', 'ArrowDown'].includes(r))
                  ? void 0
                  : xp[r];
              })(e, h.orientation, h.dir);
              if (void 0 !== n) {
                if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                e.preventDefault();
                let o = g()
                  .filter((e) => e.focusable)
                  .map((e) => e.ref.current);
                if ('last' === n) o.reverse();
                else if ('prev' === n || 'next' === n) {
                  'prev' === n && o.reverse();
                  const i = o.indexOf(e.currentTarget);
                  o = h.loop
                    ? ((r = i + 1),
                      (t = o).map((e, n) => t[(r + n) % t.length]))
                    : o.slice(i + 1);
                }
                setTimeout(() => _p(o));
              }
              var t, r;
            }),
          }),
        ),
      })
    );
  });
bp.displayName = yp;
var xp = {
  ArrowLeft: 'prev',
  ArrowUp: 'prev',
  ArrowRight: 'next',
  ArrowDown: 'next',
  PageUp: 'first',
  Home: 'first',
  PageDown: 'last',
  End: 'last',
};
function _p(e, n = !1) {
  const t = document.activeElement;
  for (const r of e) {
    if (r === t) return;
    if ((r.focus({ preventScroll: n }), document.activeElement !== t)) return;
  }
}
var Cp = gp,
  Rp = bp,
  Sp = ['Enter', ' '],
  Ep = ['ArrowUp', 'PageDown', 'End'],
  Pp = ['ArrowDown', 'PageUp', 'Home', ...Ep],
  jp = { ltr: [...Sp, 'ArrowRight'], rtl: [...Sp, 'ArrowLeft'] },
  Dp = { ltr: ['ArrowLeft'], rtl: ['ArrowRight'] },
  Tp = 'Menu',
  [Np, Ap, Op] = (function (e) {
    const n = e + 'CollectionProvider',
      [t, r] = id(n),
      [o, i] = t(n, { collectionRef: { current: null }, itemMap: new Map() }),
      a = (e) => {
        const { scope: n, children: t } = e,
          r = p.useRef(null),
          i = p.useRef(new Map()).current;
        return d.jsx(o, {
          scope: n,
          itemMap: i,
          collectionRef: r,
          children: t,
        });
      };
    a.displayName = n;
    const u = e + 'CollectionSlot',
      f = p.forwardRef((e, n) => {
        const { scope: t, children: r } = e,
          o = cd(n, i(u, t).collectionRef);
        return d.jsx(ud, { ref: o, children: r });
      });
    f.displayName = u;
    const v = e + 'CollectionItemSlot',
      h = 'data-radix-collection-item',
      m = p.forwardRef((e, n) => {
        const t = e,
          { scope: r, children: o } = t,
          a = c(t, ['scope', 'children']),
          u = p.useRef(null),
          f = cd(n, u),
          m = i(v, r);
        return (
          p.useEffect(
            () => (
              m.itemMap.set(u, s({ ref: u }, a)),
              () => {
                m.itemMap.delete(u);
              }
            ),
          ),
          d.jsx(ud, l(s({}, { [h]: '' }), { ref: f, children: o }))
        );
      });
    return (
      (m.displayName = v),
      [
        { Provider: a, Slot: f, ItemSlot: m },
        function (n) {
          const t = i(e + 'CollectionConsumer', n);
          return p.useCallback(() => {
            const e = t.collectionRef.current;
            if (!e) return [];
            const n = Array.from(e.querySelectorAll(`[${h}]`));
            return Array.from(t.itemMap.values()).sort(
              (e, t) => n.indexOf(e.ref.current) - n.indexOf(t.ref.current),
            );
          }, [t.collectionRef, t.itemMap]);
        },
        r,
      ]
    );
  })(Tp),
  [Mp, Ip] = id(Tp, [Op, _d, vp]),
  kp = _d(),
  Fp = vp(),
  [Lp, $p] = Mp(Tp),
  [Wp, Vp] = Mp(Tp),
  Kp = (e) => {
    const {
        __scopeMenu: n,
        open: t = !1,
        children: r,
        dir: o,
        onOpenChange: i,
        modal: a = !0,
      } = e,
      c = kp(n),
      [p, f] = u.useState(null),
      v = u.useRef(!1),
      h = yd(i),
      m = (function (e) {
        const n = u.useContext(vd);
        return e || n || 'ltr';
      })(o);
    return (
      u.useEffect(() => {
        const e = () => {
            ((v.current = !0),
              document.addEventListener('pointerdown', n, {
                capture: !0,
                once: !0,
              }),
              document.addEventListener('pointermove', n, {
                capture: !0,
                once: !0,
              }));
          },
          n = () => (v.current = !1);
        return (
          document.addEventListener('keydown', e, { capture: !0 }),
          () => {
            (document.removeEventListener('keydown', e, { capture: !0 }),
              document.removeEventListener('pointerdown', n, { capture: !0 }),
              document.removeEventListener('pointermove', n, { capture: !0 }));
          }
        );
      }, []),
      d.jsx(
        Ld,
        l(s({}, c), {
          children: d.jsx(Lp, {
            scope: n,
            open: t,
            onOpenChange: h,
            content: p,
            onContentChange: f,
            children: d.jsx(Wp, {
              scope: n,
              onClose: u.useCallback(() => h(!1), [h]),
              isUsingKeyboardRef: v,
              dir: m,
              modal: a,
              children: r,
            }),
          }),
        }),
      )
    );
  };
Kp.displayName = Tp;
var Hp = u.forwardRef((e, n) => {
  const t = e,
    { __scopeMenu: r } = t,
    o = c(t, ['__scopeMenu']),
    i = kp(r);
  return d.jsx($d, l(s(s({}, i), o), { ref: n }));
});
Hp.displayName = 'MenuAnchor';
var Bp = 'MenuPortal',
  [Up, zp] = Mp(Bp, { forceMount: void 0 }),
  Gp = (e) => {
    const { __scopeMenu: n, forceMount: t, children: r, container: o } = e,
      i = $p(Bp, n);
    return d.jsx(Up, {
      scope: n,
      forceMount: t,
      children: d.jsx(Kd, {
        present: t || i.open,
        children: d.jsx(st, { asChild: !0, container: o, children: r }),
      }),
    });
  };
Gp.displayName = Bp;
var Xp = 'MenuContent',
  [Yp, qp] = Mp(Xp),
  Zp = u.forwardRef((e, n) => {
    const t = zp(Xp, e.__scopeMenu),
      r = e,
      { forceMount: o = t.forceMount } = r,
      i = c(r, ['forceMount']),
      a = $p(Xp, e.__scopeMenu),
      u = Vp(Xp, e.__scopeMenu);
    return d.jsx(Np.Provider, {
      scope: e.__scopeMenu,
      children: d.jsx(Kd, {
        present: o || a.open,
        children: d.jsx(Np.Slot, {
          scope: e.__scopeMenu,
          children: u.modal
            ? d.jsx(Jp, l(s({}, i), { ref: n }))
            : d.jsx(Qp, l(s({}, i), { ref: n })),
        }),
      }),
    });
  }),
  Jp = u.forwardRef((e, n) => {
    const t = $p(Xp, e.__scopeMenu),
      r = u.useRef(null),
      o = cd(n, r);
    return (
      u.useEffect(() => {
        const e = r.current;
        if (e) return g(e);
      }, []),
      d.jsx(
        ef,
        l(s({}, e), {
          ref: o,
          trapFocus: t.open,
          disableOutsidePointerEvents: t.open,
          disableOutsideScroll: !0,
          onFocusOutside: od(e.onFocusOutside, (e) => e.preventDefault(), {
            checkForDefaultPrevented: !1,
          }),
          onDismiss: () => t.onOpenChange(!1),
        }),
      )
    );
  }),
  Qp = u.forwardRef((e, n) => {
    const t = $p(Xp, e.__scopeMenu);
    return d.jsx(
      ef,
      l(s({}, e), {
        ref: n,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        onDismiss: () => t.onOpenChange(!1),
      }),
    );
  }),
  ef = u.forwardRef((e, n) => {
    const t = e,
      {
        __scopeMenu: r,
        loop: o = !1,
        trapFocus: i,
        onOpenAutoFocus: a,
        onCloseAutoFocus: p,
        disableOutsidePointerEvents: f,
        onEntryFocus: v,
        onEscapeKeyDown: h,
        onPointerDownOutside: g,
        onFocusOutside: w,
        onInteractOutside: y,
        onDismiss: b,
        disableOutsideScroll: x,
      } = t,
      _ = c(t, [
        '__scopeMenu',
        'loop',
        'trapFocus',
        'onOpenAutoFocus',
        'onCloseAutoFocus',
        'disableOutsidePointerEvents',
        'onEntryFocus',
        'onEscapeKeyDown',
        'onPointerDownOutside',
        'onFocusOutside',
        'onInteractOutside',
        'onDismiss',
        'disableOutsideScroll',
      ]),
      C = $p(Xp, r),
      R = Vp(Xp, r),
      S = kp(r),
      E = Fp(r),
      P = Ap(r),
      [j, D] = u.useState(null),
      T = u.useRef(null),
      N = cd(n, T, C.onContentChange),
      A = u.useRef(0),
      O = u.useRef(''),
      M = u.useRef(0),
      I = u.useRef(null),
      k = u.useRef('right'),
      F = u.useRef(0),
      L = x ? m : u.Fragment,
      $ = x ? { as: ud, allowPinchZoom: !0 } : void 0,
      W = (e) => {
        var n, t;
        const r = O.current + e,
          o = P().filter((e) => !e.disabled),
          i = document.activeElement,
          a =
            null == (n = o.find((e) => e.ref.current === i))
              ? void 0
              : n.textValue,
          s = (function (e, n, t) {
            const r = n.length > 1 && Array.from(n).every((e) => e === n[0]),
              o = r ? n[0] : n,
              i = t ? e.indexOf(t) : -1;
            let a =
              ((s = e),
              (l = Math.max(i, 0)),
              s.map((e, n) => s[(l + n) % s.length]));
            var s, l;
            1 === o.length && (a = a.filter((e) => e !== t));
            const c = a.find((e) =>
              e.toLowerCase().startsWith(o.toLowerCase()),
            );
            return c !== t ? c : void 0;
          })(
            o.map((e) => e.textValue),
            r,
            a,
          ),
          l =
            null == (t = o.find((e) => e.textValue === s))
              ? void 0
              : t.ref.current;
        (!(function e(n) {
          ((O.current = n),
            window.clearTimeout(A.current),
            '' !== n && (A.current = window.setTimeout(() => e(''), 1e3)));
        })(r),
          l && setTimeout(() => l.focus()));
      };
    (u.useEffect(() => () => window.clearTimeout(A.current), []), mt());
    const V = u.useCallback((e) => {
      var n, t;
      return (
        k.current === (null == (n = I.current) ? void 0 : n.side) &&
        (function (e, n) {
          if (!n) return !1;
          const t = { x: e.clientX, y: e.clientY };
          return (function (e, n) {
            const { x: t, y: r } = e;
            let o = !1;
            for (let i = 0, a = n.length - 1; i < n.length; a = i++) {
              const e = n[i].x,
                s = n[i].y,
                l = n[a].x,
                c = n[a].y;
              s > r != c > r &&
                t < ((l - e) * (r - s)) / (c - s) + e &&
                (o = !o);
            }
            return o;
          })(t, n);
        })(e, null == (t = I.current) ? void 0 : t.area)
      );
    }, []);
    return d.jsx(Yp, {
      scope: r,
      searchRef: O,
      onItemEnter: u.useCallback(
        (e) => {
          V(e) && e.preventDefault();
        },
        [V],
      ),
      onItemLeave: u.useCallback(
        (e) => {
          var n;
          V(e) || (null == (n = T.current) || n.focus(), D(null));
        },
        [V],
      ),
      onTriggerLeave: u.useCallback(
        (e) => {
          V(e) && e.preventDefault();
        },
        [V],
      ),
      pointerGraceTimerRef: M,
      onPointerGraceIntentChange: u.useCallback((e) => {
        I.current = e;
      }, []),
      children: d.jsx(
        L,
        l(s({}, $), {
          children: d.jsx(zn, {
            asChild: !0,
            trapped: i,
            onMountAutoFocus: od(a, (e) => {
              var n;
              (e.preventDefault(),
                null == (n = T.current) || n.focus({ preventScroll: !0 }));
            }),
            onUnmountAutoFocus: p,
            children: d.jsx(te, {
              asChild: !0,
              disableOutsidePointerEvents: f,
              onEscapeKeyDown: h,
              onPointerDownOutside: g,
              onFocusOutside: w,
              onInteractOutside: y,
              onDismiss: b,
              children: d.jsx(
                Cp,
                l(s({ asChild: !0 }, E), {
                  dir: R.dir,
                  orientation: 'vertical',
                  loop: o,
                  currentTabStopId: j,
                  onCurrentTabStopIdChange: D,
                  onEntryFocus: od(v, (e) => {
                    R.isUsingKeyboardRef.current || e.preventDefault();
                  }),
                  preventScrollOnEntryFocus: !0,
                  children: d.jsx(
                    Wd,
                    l(
                      s(
                        s(
                          {
                            role: 'menu',
                            'aria-orientation': 'vertical',
                            'data-state': Pf(C.open),
                            'data-radix-menu-content': '',
                            dir: R.dir,
                          },
                          S,
                        ),
                        _,
                      ),
                      {
                        ref: N,
                        style: s({ outline: 'none' }, _.style),
                        onKeyDown: od(_.onKeyDown, (e) => {
                          const n =
                              e.target.closest('[data-radix-menu-content]') ===
                              e.currentTarget,
                            t = e.ctrlKey || e.altKey || e.metaKey,
                            r = 1 === e.key.length;
                          n &&
                            ('Tab' === e.key && e.preventDefault(),
                            !t && r && W(e.key));
                          const o = T.current;
                          if (e.target !== o) return;
                          if (!Pp.includes(e.key)) return;
                          e.preventDefault();
                          const i = P()
                            .filter((e) => !e.disabled)
                            .map((e) => e.ref.current);
                          (Ep.includes(e.key) && i.reverse(),
                            (function (e) {
                              const n = document.activeElement;
                              for (const t of e) {
                                if (t === n) return;
                                if ((t.focus(), document.activeElement !== n))
                                  return;
                              }
                            })(i));
                        }),
                        onBlur: od(e.onBlur, (e) => {
                          e.currentTarget.contains(e.target) ||
                            (window.clearTimeout(A.current), (O.current = ''));
                        }),
                        onPointerMove: od(
                          e.onPointerMove,
                          Tf((e) => {
                            const n = e.target,
                              t = F.current !== e.clientX;
                            if (e.currentTarget.contains(n) && t) {
                              const n =
                                e.clientX > F.current ? 'right' : 'left';
                              ((k.current = n), (F.current = e.clientX));
                            }
                          }),
                        ),
                      },
                    ),
                  ),
                }),
              ),
            }),
          }),
        }),
      ),
    });
  });
Zp.displayName = Xp;
var nf = u.forwardRef((e, n) => {
  const t = e,
    { __scopeMenu: r } = t,
    o = c(t, ['__scopeMenu']);
  return d.jsx(md.div, l(s({ role: 'group' }, o), { ref: n }));
});
nf.displayName = 'MenuGroup';
var tf = u.forwardRef((e, n) => {
  const t = e,
    { __scopeMenu: r } = t,
    o = c(t, ['__scopeMenu']);
  return d.jsx(md.div, l(s({}, o), { ref: n }));
});
tf.displayName = 'MenuLabel';
var rf = 'MenuItem',
  of = 'menu.itemSelect',
  af = u.forwardRef((e, n) => {
    const t = e,
      { disabled: r = !1, onSelect: o } = t,
      i = c(t, ['disabled', 'onSelect']),
      a = u.useRef(null),
      p = Vp(rf, e.__scopeMenu),
      f = qp(rf, e.__scopeMenu),
      h = cd(n, a),
      m = u.useRef(!1);
    return d.jsx(
      sf,
      l(s({}, i), {
        ref: h,
        disabled: r,
        onClick: od(e.onClick, () => {
          const e = a.current;
          if (!r && e) {
            const r = new CustomEvent(of, { bubbles: !0, cancelable: !0 });
            (e.addEventListener(of, (e) => (null == o ? void 0 : o(e)), {
              once: !0,
            }),
              (t = r),
              (n = e) && v.flushSync(() => n.dispatchEvent(t)),
              r.defaultPrevented ? (m.current = !1) : p.onClose());
          }
          var n, t;
        }),
        onPointerDown: (n) => {
          var t;
          (null == (t = e.onPointerDown) || t.call(e, n), (m.current = !0));
        },
        onPointerUp: od(e.onPointerUp, (e) => {
          var n;
          m.current || null == (n = e.currentTarget) || n.click();
        }),
        onKeyDown: od(e.onKeyDown, (e) => {
          const n = '' !== f.searchRef.current;
          r ||
            (n && ' ' === e.key) ||
            (Sp.includes(e.key) &&
              (e.currentTarget.click(), e.preventDefault()));
        }),
      }),
    );
  });
af.displayName = rf;
var sf = u.forwardRef((e, n) => {
    const t = e,
      { __scopeMenu: r, disabled: o = !1, textValue: i } = t,
      a = c(t, ['__scopeMenu', 'disabled', 'textValue']),
      p = qp(rf, r),
      f = Fp(r),
      v = u.useRef(null),
      h = cd(n, v),
      [m, g] = u.useState(!1),
      [w, y] = u.useState('');
    return (
      u.useEffect(() => {
        var e;
        const n = v.current;
        n && y((null != (e = n.textContent) ? e : '').trim());
      }, [a.children]),
      d.jsx(Np.ItemSlot, {
        scope: r,
        disabled: o,
        textValue: null != i ? i : w,
        children: d.jsx(
          Rp,
          l(s({ asChild: !0 }, f), {
            focusable: !o,
            children: d.jsx(
              md.div,
              l(
                s(
                  {
                    role: 'menuitem',
                    'data-highlighted': m ? '' : void 0,
                    'aria-disabled': o || void 0,
                    'data-disabled': o ? '' : void 0,
                  },
                  a,
                ),
                {
                  ref: h,
                  onPointerMove: od(
                    e.onPointerMove,
                    Tf((e) => {
                      if (o) p.onItemLeave(e);
                      else if ((p.onItemEnter(e), !e.defaultPrevented)) {
                        e.currentTarget.focus({ preventScroll: !0 });
                      }
                    }),
                  ),
                  onPointerLeave: od(
                    e.onPointerLeave,
                    Tf((e) => p.onItemLeave(e)),
                  ),
                  onFocus: od(e.onFocus, () => g(!0)),
                  onBlur: od(e.onBlur, () => g(!1)),
                },
              ),
            ),
          }),
        ),
      })
    );
  }),
  lf = u.forwardRef((e, n) => {
    const t = e,
      { checked: r = !1, onCheckedChange: o } = t,
      i = c(t, ['checked', 'onCheckedChange']);
    return d.jsx(mf, {
      scope: e.__scopeMenu,
      checked: r,
      children: d.jsx(
        af,
        l(
          s(
            { role: 'menuitemcheckbox', 'aria-checked': jf(r) ? 'mixed' : r },
            i,
          ),
          {
            ref: n,
            'data-state': Df(r),
            onSelect: od(
              i.onSelect,
              () => (null == o ? void 0 : o(!!jf(r) || !r)),
              { checkForDefaultPrevented: !1 },
            ),
          },
        ),
      ),
    });
  });
lf.displayName = 'MenuCheckboxItem';
var cf = 'MenuRadioGroup',
  [uf, df] = Mp(cf, { value: void 0, onValueChange: () => {} }),
  pf = u.forwardRef((e, n) => {
    const t = e,
      { value: r, onValueChange: o } = t,
      i = c(t, ['value', 'onValueChange']),
      a = yd(o);
    return d.jsx(uf, {
      scope: e.__scopeMenu,
      value: r,
      onValueChange: a,
      children: d.jsx(nf, l(s({}, i), { ref: n })),
    });
  });
pf.displayName = cf;
var ff = 'MenuRadioItem',
  vf = u.forwardRef((e, n) => {
    const t = e,
      { value: r } = t,
      o = c(t, ['value']),
      i = df(ff, e.__scopeMenu),
      a = r === i.value;
    return d.jsx(mf, {
      scope: e.__scopeMenu,
      checked: a,
      children: d.jsx(
        af,
        l(s({ role: 'menuitemradio', 'aria-checked': a }, o), {
          ref: n,
          'data-state': Df(a),
          onSelect: od(
            o.onSelect,
            () => {
              var e;
              return null == (e = i.onValueChange) ? void 0 : e.call(i, r);
            },
            { checkForDefaultPrevented: !1 },
          ),
        }),
      ),
    });
  });
vf.displayName = ff;
var hf = 'MenuItemIndicator',
  [mf, gf] = Mp(hf, { checked: !1 }),
  wf = u.forwardRef((e, n) => {
    const t = e,
      { __scopeMenu: r, forceMount: o } = t,
      i = c(t, ['__scopeMenu', 'forceMount']),
      a = gf(hf, r);
    return d.jsx(Kd, {
      present: o || jf(a.checked) || !0 === a.checked,
      children: d.jsx(
        md.span,
        l(s({}, i), { ref: n, 'data-state': Df(a.checked) }),
      ),
    });
  });
wf.displayName = hf;
var yf = u.forwardRef((e, n) => {
  const t = e,
    { __scopeMenu: r } = t,
    o = c(t, ['__scopeMenu']);
  return d.jsx(
    md.div,
    l(s({ role: 'separator', 'aria-orientation': 'horizontal' }, o), {
      ref: n,
    }),
  );
});
yf.displayName = 'MenuSeparator';
var bf = u.forwardRef((e, n) => {
  const t = e,
    { __scopeMenu: r } = t,
    o = c(t, ['__scopeMenu']),
    i = kp(r);
  return d.jsx(Vd, l(s(s({}, i), o), { ref: n }));
});
bf.displayName = 'MenuArrow';
var [xf, _f] = Mp('MenuSub'),
  Cf = 'MenuSubTrigger',
  Rf = u.forwardRef((e, n) => {
    const t = $p(Cf, e.__scopeMenu),
      r = Vp(Cf, e.__scopeMenu),
      o = _f(Cf, e.__scopeMenu),
      i = qp(Cf, e.__scopeMenu),
      a = u.useRef(null),
      { pointerGraceTimerRef: c, onPointerGraceIntentChange: p } = i,
      f = { __scopeMenu: e.__scopeMenu },
      v = u.useCallback(() => {
        (a.current && window.clearTimeout(a.current), (a.current = null));
      }, []);
    return (
      u.useEffect(() => v, [v]),
      u.useEffect(() => {
        const e = c.current;
        return () => {
          (window.clearTimeout(e), p(null));
        };
      }, [c, p]),
      d.jsx(
        Hp,
        l(s({ asChild: !0 }, f), {
          children: d.jsx(
            sf,
            l(
              s(
                {
                  id: o.triggerId,
                  'aria-haspopup': 'menu',
                  'aria-expanded': t.open,
                  'aria-controls': o.contentId,
                  'data-state': Pf(t.open),
                },
                e,
              ),
              {
                ref: ld(n, o.onTriggerChange),
                onClick: (n) => {
                  var r;
                  (null == (r = e.onClick) || r.call(e, n),
                    e.disabled ||
                      n.defaultPrevented ||
                      (n.currentTarget.focus(), t.open || t.onOpenChange(!0)));
                },
                onPointerMove: od(
                  e.onPointerMove,
                  Tf((n) => {
                    (i.onItemEnter(n),
                      n.defaultPrevented ||
                        e.disabled ||
                        t.open ||
                        a.current ||
                        (i.onPointerGraceIntentChange(null),
                        (a.current = window.setTimeout(() => {
                          (t.onOpenChange(!0), v());
                        }, 100))));
                  }),
                ),
                onPointerLeave: od(
                  e.onPointerLeave,
                  Tf((e) => {
                    var n, r;
                    v();
                    const o =
                      null == (n = t.content)
                        ? void 0
                        : n.getBoundingClientRect();
                    if (o) {
                      const n =
                          null == (r = t.content) ? void 0 : r.dataset.side,
                        a = 'right' === n,
                        s = a ? -5 : 5,
                        l = o[a ? 'left' : 'right'],
                        u = o[a ? 'right' : 'left'];
                      (i.onPointerGraceIntentChange({
                        area: [
                          { x: e.clientX + s, y: e.clientY },
                          { x: l, y: o.top },
                          { x: u, y: o.top },
                          { x: u, y: o.bottom },
                          { x: l, y: o.bottom },
                        ],
                        side: n,
                      }),
                        window.clearTimeout(c.current),
                        (c.current = window.setTimeout(
                          () => i.onPointerGraceIntentChange(null),
                          300,
                        )));
                    } else {
                      if ((i.onTriggerLeave(e), e.defaultPrevented)) return;
                      i.onPointerGraceIntentChange(null);
                    }
                  }),
                ),
                onKeyDown: od(e.onKeyDown, (n) => {
                  var o;
                  const a = '' !== i.searchRef.current;
                  e.disabled ||
                    (a && ' ' === n.key) ||
                    (jp[r.dir].includes(n.key) &&
                      (t.onOpenChange(!0),
                      null == (o = t.content) || o.focus(),
                      n.preventDefault()));
                }),
              },
            ),
          ),
        }),
      )
    );
  });
Rf.displayName = Cf;
var Sf = 'MenuSubContent',
  Ef = u.forwardRef((e, n) => {
    const t = zp(Xp, e.__scopeMenu),
      r = e,
      { forceMount: o = t.forceMount } = r,
      i = c(r, ['forceMount']),
      a = $p(Xp, e.__scopeMenu),
      p = Vp(Xp, e.__scopeMenu),
      f = _f(Sf, e.__scopeMenu),
      v = u.useRef(null),
      h = cd(n, v);
    return d.jsx(Np.Provider, {
      scope: e.__scopeMenu,
      children: d.jsx(Kd, {
        present: o || a.open,
        children: d.jsx(Np.Slot, {
          scope: e.__scopeMenu,
          children: d.jsx(
            ef,
            l(s({ id: f.contentId, 'aria-labelledby': f.triggerId }, i), {
              ref: h,
              align: 'start',
              side: 'rtl' === p.dir ? 'left' : 'right',
              disableOutsidePointerEvents: !1,
              disableOutsideScroll: !1,
              trapFocus: !1,
              onOpenAutoFocus: (e) => {
                var n;
                (p.isUsingKeyboardRef.current &&
                  (null == (n = v.current) || n.focus()),
                  e.preventDefault());
              },
              onCloseAutoFocus: (e) => e.preventDefault(),
              onFocusOutside: od(e.onFocusOutside, (e) => {
                e.target !== f.trigger && a.onOpenChange(!1);
              }),
              onEscapeKeyDown: od(e.onEscapeKeyDown, (e) => {
                (p.onClose(), e.preventDefault());
              }),
              onKeyDown: od(e.onKeyDown, (e) => {
                var n;
                const t = e.currentTarget.contains(e.target),
                  r = Dp[p.dir].includes(e.key);
                t &&
                  r &&
                  (a.onOpenChange(!1),
                  null == (n = f.trigger) || n.focus(),
                  e.preventDefault());
              }),
            }),
          ),
        }),
      }),
    });
  });
function Pf(e) {
  return e ? 'open' : 'closed';
}
function jf(e) {
  return 'indeterminate' === e;
}
function Df(e) {
  return jf(e) ? 'indeterminate' : e ? 'checked' : 'unchecked';
}
function Tf(e) {
  return (n) => ('mouse' === n.pointerType ? e(n) : void 0);
}
Ef.displayName = Sf;
var Nf = Kp,
  Af = Hp,
  Of = Gp,
  Mf = Zp,
  If = nf,
  kf = tf,
  Ff = af,
  Lf = lf,
  $f = pf,
  Wf = vf,
  Vf = wf,
  Kf = yf,
  Hf = bf,
  Bf = Rf,
  Uf = Ef,
  zf = Boolean(null == globalThis ? void 0 : globalThis.document)
    ? u.useLayoutEffect
    : () => {},
  Gf = f['useId'.toString()] || (() => {}),
  Xf = 0;
function Yf(e) {
  const [n, t] = u.useState(Gf());
  return (
    zf(() => {
      t((e) => (null != e ? e : String(Xf++)));
    }, [e]),
    e || (n ? `radix-${n}` : '')
  );
}
var qf = 'DropdownMenu',
  [Zf] = (function (e, n = []) {
    let t = [];
    const r = () => {
      const n = t.map((e) => u.createContext(e));
      return function (t) {
        const r = (null == t ? void 0 : t[e]) || n;
        return u.useMemo(
          () => ({ [`__scope${e}`]: l(s({}, t), { [e]: r }) }),
          [t, r],
        );
      };
    };
    return (
      (r.scopeName = e),
      [
        function (n, r) {
          const o = u.createContext(r),
            i = t.length;
          t = [...t, r];
          const a = (n) => {
            var t;
            const r = n,
              { scope: a, children: s } = r,
              l = c(r, ['scope', 'children']),
              p =
                (null == (t = null == a ? void 0 : a[e]) ? void 0 : t[i]) || o,
              f = u.useMemo(() => l, Object.values(l));
            return d.jsx(p.Provider, { value: f, children: s });
          };
          return (
            (a.displayName = n + 'Provider'),
            [
              a,
              function (t, a) {
                var s;
                const l =
                    (null == (s = null == a ? void 0 : a[e]) ? void 0 : s[i]) ||
                    o,
                  c = u.useContext(l);
                if (c) return c;
                if (void 0 !== r) return r;
                throw new Error(`\`${t}\` must be used within \`${n}\``);
              },
            ]
          );
        },
        qu(r, ...n),
      ]
    );
  })(qf, [Ip]),
  Jf = Ip(),
  [Qf, ev] = Zf(qf),
  nv = (e) => {
    const {
        __scopeDropdownMenu: n,
        children: t,
        dir: r,
        open: o,
        defaultOpen: i,
        onOpenChange: a,
        modal: c = !0,
      } = e,
      p = Jf(n),
      f = u.useRef(null),
      [v = !1, h] = Ju({ prop: o, defaultProp: i, onChange: a });
    return d.jsx(Qf, {
      scope: n,
      triggerId: Yf(),
      triggerRef: f,
      contentId: Yf(),
      open: v,
      onOpenChange: h,
      onOpenToggle: u.useCallback(() => h((e) => !e), [h]),
      modal: c,
      children: d.jsx(
        Nf,
        l(s({}, p), {
          open: v,
          onOpenChange: h,
          dir: r,
          modal: c,
          children: t,
        }),
      ),
    });
  };
nv.displayName = qf;
var tv = 'DropdownMenuTrigger',
  rv = u.forwardRef((e, n) => {
    const t = e,
      { __scopeDropdownMenu: r, disabled: o = !1 } = t,
      i = c(t, ['__scopeDropdownMenu', 'disabled']),
      a = ev(tv, r),
      u = Jf(r);
    return d.jsx(
      Af,
      l(s({ asChild: !0 }, u), {
        children: d.jsx(
          rd.button,
          l(
            s(
              {
                type: 'button',
                id: a.triggerId,
                'aria-haspopup': 'menu',
                'aria-expanded': a.open,
                'aria-controls': a.open ? a.contentId : void 0,
                'data-state': a.open ? 'open' : 'closed',
                'data-disabled': o ? '' : void 0,
                disabled: o,
              },
              i,
            ),
            {
              ref: Yu(n, a.triggerRef),
              onPointerDown: Gu(e.onPointerDown, (e) => {
                o ||
                  0 !== e.button ||
                  !1 !== e.ctrlKey ||
                  (a.onOpenToggle(), a.open || e.preventDefault());
              }),
              onKeyDown: Gu(e.onKeyDown, (e) => {
                o ||
                  (['Enter', ' '].includes(e.key) && a.onOpenToggle(),
                  'ArrowDown' === e.key && a.onOpenChange(!0),
                  ['Enter', ' ', 'ArrowDown'].includes(e.key) &&
                    e.preventDefault());
              }),
            },
          ),
        ),
      }),
    );
  });
rv.displayName = tv;
var ov = (e) => {
  const n = e,
    { __scopeDropdownMenu: t } = n,
    r = c(n, ['__scopeDropdownMenu']),
    o = Jf(t);
  return d.jsx(Of, s(s({}, o), r));
};
ov.displayName = 'DropdownMenuPortal';
var iv = 'DropdownMenuContent',
  av = u.forwardRef((e, n) => {
    const t = e,
      { __scopeDropdownMenu: r } = t,
      o = c(t, ['__scopeDropdownMenu']),
      i = ev(iv, r),
      a = Jf(r),
      p = u.useRef(!1);
    return d.jsx(
      Mf,
      l(s(s({ id: i.contentId, 'aria-labelledby': i.triggerId }, a), o), {
        ref: n,
        onCloseAutoFocus: Gu(e.onCloseAutoFocus, (e) => {
          var n;
          (p.current || null == (n = i.triggerRef.current) || n.focus(),
            (p.current = !1),
            e.preventDefault());
        }),
        onInteractOutside: Gu(e.onInteractOutside, (e) => {
          const n = e.detail.originalEvent,
            t = 0 === n.button && !0 === n.ctrlKey,
            r = 2 === n.button || t;
          (i.modal && !r) || (p.current = !0);
        }),
        style: s(s({}, e.style), {
          '--radix-dropdown-menu-content-transform-origin':
            'var(--radix-popper-transform-origin)',
          '--radix-dropdown-menu-content-available-width':
            'var(--radix-popper-available-width)',
          '--radix-dropdown-menu-content-available-height':
            'var(--radix-popper-available-height)',
          '--radix-dropdown-menu-trigger-width':
            'var(--radix-popper-anchor-width)',
          '--radix-dropdown-menu-trigger-height':
            'var(--radix-popper-anchor-height)',
        }),
      }),
    );
  });
av.displayName = iv;
u.forwardRef((e, n) => {
  const t = e,
    { __scopeDropdownMenu: r } = t,
    o = c(t, ['__scopeDropdownMenu']),
    i = Jf(r);
  return d.jsx(If, l(s(s({}, i), o), { ref: n }));
}).displayName = 'DropdownMenuGroup';
var sv = u.forwardRef((e, n) => {
  const t = e,
    { __scopeDropdownMenu: r } = t,
    o = c(t, ['__scopeDropdownMenu']),
    i = Jf(r);
  return d.jsx(kf, l(s(s({}, i), o), { ref: n }));
});
sv.displayName = 'DropdownMenuLabel';
var lv = u.forwardRef((e, n) => {
  const t = e,
    { __scopeDropdownMenu: r } = t,
    o = c(t, ['__scopeDropdownMenu']),
    i = Jf(r);
  return d.jsx(Ff, l(s(s({}, i), o), { ref: n }));
});
lv.displayName = 'DropdownMenuItem';
var cv = u.forwardRef((e, n) => {
  const t = e,
    { __scopeDropdownMenu: r } = t,
    o = c(t, ['__scopeDropdownMenu']),
    i = Jf(r);
  return d.jsx(Lf, l(s(s({}, i), o), { ref: n }));
});
cv.displayName = 'DropdownMenuCheckboxItem';
u.forwardRef((e, n) => {
  const t = e,
    { __scopeDropdownMenu: r } = t,
    o = c(t, ['__scopeDropdownMenu']),
    i = Jf(r);
  return d.jsx($f, l(s(s({}, i), o), { ref: n }));
}).displayName = 'DropdownMenuRadioGroup';
var uv = u.forwardRef((e, n) => {
  const t = e,
    { __scopeDropdownMenu: r } = t,
    o = c(t, ['__scopeDropdownMenu']),
    i = Jf(r);
  return d.jsx(Wf, l(s(s({}, i), o), { ref: n }));
});
uv.displayName = 'DropdownMenuRadioItem';
var dv = u.forwardRef((e, n) => {
  const t = e,
    { __scopeDropdownMenu: r } = t,
    o = c(t, ['__scopeDropdownMenu']),
    i = Jf(r);
  return d.jsx(Vf, l(s(s({}, i), o), { ref: n }));
});
dv.displayName = 'DropdownMenuItemIndicator';
var pv = u.forwardRef((e, n) => {
  const t = e,
    { __scopeDropdownMenu: r } = t,
    o = c(t, ['__scopeDropdownMenu']),
    i = Jf(r);
  return d.jsx(Kf, l(s(s({}, i), o), { ref: n }));
});
pv.displayName = 'DropdownMenuSeparator';
u.forwardRef((e, n) => {
  const t = e,
    { __scopeDropdownMenu: r } = t,
    o = c(t, ['__scopeDropdownMenu']),
    i = Jf(r);
  return d.jsx(Hf, l(s(s({}, i), o), { ref: n }));
}).displayName = 'DropdownMenuArrow';
var fv = u.forwardRef((e, n) => {
  const t = e,
    { __scopeDropdownMenu: r } = t,
    o = c(t, ['__scopeDropdownMenu']),
    i = Jf(r);
  return d.jsx(Bf, l(s(s({}, i), o), { ref: n }));
});
fv.displayName = 'DropdownMenuSubTrigger';
var vv = u.forwardRef((e, n) => {
  const t = e,
    { __scopeDropdownMenu: r } = t,
    o = c(t, ['__scopeDropdownMenu']),
    i = Jf(r);
  return d.jsx(
    Uf,
    l(s(s({}, i), o), {
      ref: n,
      style: s(s({}, e.style), {
        '--radix-dropdown-menu-content-transform-origin':
          'var(--radix-popper-transform-origin)',
        '--radix-dropdown-menu-content-available-width':
          'var(--radix-popper-available-width)',
        '--radix-dropdown-menu-content-available-height':
          'var(--radix-popper-available-height)',
        '--radix-dropdown-menu-trigger-width':
          'var(--radix-popper-anchor-width)',
        '--radix-dropdown-menu-trigger-height':
          'var(--radix-popper-anchor-height)',
      }),
    }),
  );
});
vv.displayName = 'DropdownMenuSubContent';
var hv = nv,
  mv = rv,
  gv = ov,
  wv = av,
  yv = sv,
  bv = lv,
  xv = cv,
  _v = uv,
  Cv = dv,
  Rv = pv,
  Sv = fv,
  Ev = vv,
  Pv = 'focusScope.autoFocusOnMount',
  jv = 'focusScope.autoFocusOnUnmount',
  Dv = { bubbles: !1, cancelable: !0 },
  Tv = u.forwardRef((e, n) => {
    const t = e,
      {
        loop: r = !1,
        trapped: o = !1,
        onMountAutoFocus: i,
        onUnmountAutoFocus: a,
      } = t,
      p = c(t, ['loop', 'trapped', 'onMountAutoFocus', 'onUnmountAutoFocus']),
      [f, v] = u.useState(null),
      h = ge(i),
      m = ge(a),
      g = u.useRef(null),
      w = N(n, (e) => v(e)),
      y = u.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    (u.useEffect(() => {
      if (o) {
        let e = function (e) {
            if (y.paused || !f) return;
            const n = e.target;
            f.contains(n) ? (g.current = n) : Mv(g.current, { select: !0 });
          },
          n = function (e) {
            if (y.paused || !f) return;
            const n = e.relatedTarget;
            null !== n && (f.contains(n) || Mv(g.current, { select: !0 }));
          },
          t = function (e) {
            if (document.activeElement === document.body)
              for (const n of e) n.removedNodes.length > 0 && Mv(f);
          };
        (document.addEventListener('focusin', e),
          document.addEventListener('focusout', n));
        const r = new MutationObserver(t);
        return (
          f && r.observe(f, { childList: !0, subtree: !0 }),
          () => {
            (document.removeEventListener('focusin', e),
              document.removeEventListener('focusout', n),
              r.disconnect());
          }
        );
      }
    }, [o, f, y.paused]),
      u.useEffect(() => {
        if (f) {
          Iv.add(y);
          const n = document.activeElement;
          if (!f.contains(n)) {
            const t = new CustomEvent(Pv, Dv);
            (f.addEventListener(Pv, h),
              f.dispatchEvent(t),
              t.defaultPrevented ||
                (!(function (e, { select: n = !1 } = {}) {
                  const t = document.activeElement;
                  for (const r of e)
                    if ((Mv(r, { select: n }), document.activeElement !== t))
                      return;
                })(((e = Nv(f)), e.filter((e) => 'A' !== e.tagName)), {
                  select: !0,
                }),
                document.activeElement === n && Mv(f)));
          }
          return () => {
            (f.removeEventListener(Pv, h),
              setTimeout(() => {
                const e = new CustomEvent(jv, Dv);
                (f.addEventListener(jv, m),
                  f.dispatchEvent(e),
                  e.defaultPrevented ||
                    Mv(null != n ? n : document.body, { select: !0 }),
                  f.removeEventListener(jv, m),
                  Iv.remove(y));
              }, 0));
          };
        }
        var e;
      }, [f, h, m, y]));
    const b = u.useCallback(
      (e) => {
        if (!r && !o) return;
        if (y.paused) return;
        const n = 'Tab' === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
          t = document.activeElement;
        if (n && t) {
          const n = e.currentTarget,
            [o, i] = (function (e) {
              const n = Nv(e),
                t = Av(n, e),
                r = Av(n.reverse(), e);
              return [t, r];
            })(n);
          o && i
            ? e.shiftKey || t !== i
              ? e.shiftKey &&
                t === o &&
                (e.preventDefault(), r && Mv(i, { select: !0 }))
              : (e.preventDefault(), r && Mv(o, { select: !0 }))
            : t === n && e.preventDefault();
        }
      },
      [r, o, y.paused],
    );
    return d.jsx(pe.div, l(s({ tabIndex: -1 }, p), { ref: w, onKeyDown: b }));
  });
function Nv(e) {
  const n = [],
    t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (e) => {
        const n = 'INPUT' === e.tagName && 'hidden' === e.type;
        return e.disabled || e.hidden || n
          ? NodeFilter.FILTER_SKIP
          : e.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; t.nextNode(); ) n.push(t.currentNode);
  return n;
}
function Av(e, n) {
  for (const t of e) if (!Ov(t, { upTo: n })) return t;
}
function Ov(e, { upTo: n }) {
  if ('hidden' === getComputedStyle(e).visibility) return !0;
  for (; e; ) {
    if (void 0 !== n && e === n) return !1;
    if ('none' === getComputedStyle(e).display) return !0;
    e = e.parentElement;
  }
  return !1;
}
function Mv(e, { select: n = !1 } = {}) {
  if (e && e.focus) {
    const t = document.activeElement;
    (e.focus({ preventScroll: !0 }),
      e !== t &&
        (function (e) {
          return e instanceof HTMLInputElement && 'select' in e;
        })(e) &&
        n &&
        e.select());
  }
}
Tv.displayName = 'FocusScope';
var Iv = (function () {
  let e = [];
  return {
    add(n) {
      const t = e[0];
      (n !== t && (null == t || t.pause()), (e = kv(e, n)), e.unshift(n));
    },
    remove(n) {
      var t;
      ((e = kv(e, n)), null == (t = e[0]) || t.resume());
    },
  };
})();
function kv(e, n) {
  const t = [...e],
    r = t.indexOf(n);
  return (-1 !== r && t.splice(r, 1), t);
}
var Fv = u.forwardRef((e, n) => {
  var t;
  const r = e,
    { container: o } = r,
    i = c(r, ['container']),
    [a, p] = u.useState(!1);
  fe(() => p(!0), []);
  const f =
    o ||
    (a &&
      (null == (t = null == globalThis ? void 0 : globalThis.document)
        ? void 0
        : t.body));
  return f ? h.createPortal(d.jsx(pe.div, l(s({}, i), { ref: n })), f) : null;
});
Fv.displayName = 'Portal';
var Lv = 0;
function $v() {
  const e = document.createElement('span');
  return (
    e.setAttribute('data-radix-focus-guard', ''),
    (e.tabIndex = 0),
    (e.style.outline = 'none'),
    (e.style.opacity = '0'),
    (e.style.position = 'fixed'),
    (e.style.pointerEvents = 'none'),
    e
  );
}
function Wv(e) {
  const n = Vv(e),
    t = u.forwardRef((e, t) => {
      const r = e,
        { children: o } = r,
        i = c(r, ['children']),
        a = u.Children.toArray(o),
        p = a.find(Bv);
      if (p) {
        const e = p.props.children,
          r = a.map((n) =>
            n === p
              ? u.Children.count(e) > 1
                ? u.Children.only(null)
                : u.isValidElement(e)
                  ? e.props.children
                  : null
              : n,
          );
        return d.jsx(
          n,
          l(s({}, i), {
            ref: t,
            children: u.isValidElement(e) ? u.cloneElement(e, void 0, r) : null,
          }),
        );
      }
      return d.jsx(n, l(s({}, i), { ref: t, children: o }));
    });
  return ((t.displayName = `${e}.Slot`), t);
}
function Vv(e) {
  const n = u.forwardRef((e, n) => {
    const t = e,
      { children: r } = t,
      o = c(t, ['children']);
    if (u.isValidElement(r)) {
      const e = (function (e) {
          var n, t;
          let r =
              null == (n = Object.getOwnPropertyDescriptor(e.props, 'ref'))
                ? void 0
                : n.get,
            o = r && 'isReactWarning' in r && r.isReactWarning;
          if (o) return e.ref;
          if (
            ((r =
              null == (t = Object.getOwnPropertyDescriptor(e, 'ref'))
                ? void 0
                : t.get),
            (o = r && 'isReactWarning' in r && r.isReactWarning),
            o)
          )
            return e.props.ref;
          return e.props.ref || e.ref;
        })(r),
        t = (function (e, n) {
          const t = s({}, n);
          for (const r in n) {
            const o = e[r],
              i = n[r];
            /^on[A-Z]/.test(r)
              ? o && i
                ? (t[r] = (...e) => {
                    const n = i(...e);
                    return (o(...e), n);
                  })
                : o && (t[r] = o)
              : 'style' === r
                ? (t[r] = s(s({}, o), i))
                : 'className' === r &&
                  (t[r] = [o, i].filter(Boolean).join(' '));
          }
          return s(s({}, e), t);
        })(o, r.props);
      return (
        r.type !== u.Fragment && (t.ref = n ? T(n, e) : e),
        u.cloneElement(r, t)
      );
    }
    return u.Children.count(r) > 1 ? u.Children.only(null) : null;
  });
  return ((n.displayName = `${e}.SlotClone`), n);
}
var Kv = Symbol('radix.slottable');
function Hv(e) {
  const n = ({ children: e }) => d.jsx(d.Fragment, { children: e });
  return ((n.displayName = `${e}.Slottable`), (n.__radixId = Kv), n);
}
function Bv(e) {
  return (
    u.isValidElement(e) &&
    'function' == typeof e.type &&
    '__radixId' in e.type &&
    e.type.__radixId === Kv
  );
}
var Uv = 'Dialog',
  [zv, Gv] = O(Uv),
  [Xv, Yv] = zv(Uv),
  qv = (e) => {
    const {
        __scopeDialog: n,
        children: t,
        open: r,
        defaultOpen: o,
        onOpenChange: i,
        modal: a = !0,
      } = e,
      s = u.useRef(null),
      l = u.useRef(null),
      [c, p] = ye({
        prop: r,
        defaultProp: null != o && o,
        onChange: i,
        caller: Uv,
      });
    return d.jsx(Xv, {
      scope: n,
      triggerRef: s,
      contentRef: l,
      contentId: ir(),
      titleId: ir(),
      descriptionId: ir(),
      open: c,
      onOpenChange: p,
      onOpenToggle: u.useCallback(() => p((e) => !e), [p]),
      modal: a,
      children: t,
    });
  };
qv.displayName = Uv;
var Zv = 'DialogTrigger',
  Jv = u.forwardRef((e, n) => {
    const t = e,
      { __scopeDialog: r } = t,
      o = c(t, ['__scopeDialog']),
      i = Yv(Zv, r),
      a = N(n, i.triggerRef);
    return d.jsx(
      pe.button,
      l(
        s(
          {
            type: 'button',
            'aria-haspopup': 'dialog',
            'aria-expanded': i.open,
            'aria-controls': i.contentId,
            'data-state': wh(i.open),
          },
          o,
        ),
        { ref: a, onClick: j(e.onClick, i.onOpenToggle) },
      ),
    );
  });
Jv.displayName = Zv;
var Qv = 'DialogPortal',
  [eh, nh] = zv(Qv, { forceMount: void 0 }),
  th = (e) => {
    const { __scopeDialog: n, forceMount: t, children: r, container: o } = e,
      i = Yv(Qv, n);
    return d.jsx(eh, {
      scope: n,
      forceMount: t,
      children: u.Children.map(r, (e) =>
        d.jsx(he, {
          present: t || i.open,
          children: d.jsx(Fv, { asChild: !0, container: o, children: e }),
        }),
      ),
    });
  };
th.displayName = Qv;
var rh = 'DialogOverlay',
  oh = u.forwardRef((e, n) => {
    const t = nh(rh, e.__scopeDialog),
      r = e,
      { forceMount: o = t.forceMount } = r,
      i = c(r, ['forceMount']),
      a = Yv(rh, e.__scopeDialog);
    return a.modal
      ? d.jsx(he, {
          present: o || a.open,
          children: d.jsx(ah, l(s({}, i), { ref: n })),
        })
      : null;
  });
oh.displayName = rh;
var ih = Wv('DialogOverlay.RemoveScroll'),
  ah = u.forwardRef((e, n) => {
    const t = e,
      { __scopeDialog: r } = t,
      o = c(t, ['__scopeDialog']),
      i = Yv(rh, r);
    return d.jsx(m, {
      as: ih,
      allowPinchZoom: !0,
      shards: [i.contentRef],
      children: d.jsx(
        pe.div,
        l(s({ 'data-state': wh(i.open) }, o), {
          ref: n,
          style: s({ pointerEvents: 'auto' }, o.style),
        }),
      ),
    });
  }),
  sh = 'DialogContent',
  lh = u.forwardRef((e, n) => {
    const t = nh(sh, e.__scopeDialog),
      r = e,
      { forceMount: o = t.forceMount } = r,
      i = c(r, ['forceMount']),
      a = Yv(sh, e.__scopeDialog);
    return d.jsx(he, {
      present: o || a.open,
      children: a.modal
        ? d.jsx(ch, l(s({}, i), { ref: n }))
        : d.jsx(uh, l(s({}, i), { ref: n })),
    });
  });
lh.displayName = sh;
var ch = u.forwardRef((e, n) => {
    const t = Yv(sh, e.__scopeDialog),
      r = u.useRef(null),
      o = N(n, t.contentRef, r);
    return (
      u.useEffect(() => {
        const e = r.current;
        if (e) return g(e);
      }, []),
      d.jsx(
        dh,
        l(s({}, e), {
          ref: o,
          trapFocus: t.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: j(e.onCloseAutoFocus, (e) => {
            var n;
            (e.preventDefault(),
              null == (n = t.triggerRef.current) || n.focus());
          }),
          onPointerDownOutside: j(e.onPointerDownOutside, (e) => {
            const n = e.detail.originalEvent,
              t = 0 === n.button && !0 === n.ctrlKey;
            (2 === n.button || t) && e.preventDefault();
          }),
          onFocusOutside: j(e.onFocusOutside, (e) => e.preventDefault()),
        }),
      )
    );
  }),
  uh = u.forwardRef((e, n) => {
    const t = Yv(sh, e.__scopeDialog),
      r = u.useRef(!1),
      o = u.useRef(!1);
    return d.jsx(
      dh,
      l(s({}, e), {
        ref: n,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (n) => {
          var i, a;
          (null == (i = e.onCloseAutoFocus) || i.call(e, n),
            n.defaultPrevented ||
              (r.current || null == (a = t.triggerRef.current) || a.focus(),
              n.preventDefault()),
            (r.current = !1),
            (o.current = !1));
        },
        onInteractOutside: (n) => {
          var i, a;
          (null == (i = e.onInteractOutside) || i.call(e, n),
            n.defaultPrevented ||
              ((r.current = !0),
              'pointerdown' === n.detail.originalEvent.type &&
                (o.current = !0)));
          const s = n.target;
          ((null == (a = t.triggerRef.current) ? void 0 : a.contains(s)) &&
            n.preventDefault(),
            'focusin' === n.detail.originalEvent.type &&
              o.current &&
              n.preventDefault());
        },
      }),
    );
  }),
  dh = u.forwardRef((e, n) => {
    const t = e,
      {
        __scopeDialog: r,
        trapFocus: o,
        onOpenAutoFocus: i,
        onCloseAutoFocus: a,
      } = t,
      p = c(t, [
        '__scopeDialog',
        'trapFocus',
        'onOpenAutoFocus',
        'onCloseAutoFocus',
      ]),
      f = Yv(sh, r),
      v = u.useRef(null),
      h = N(n, v);
    return (
      u.useEffect(() => {
        var e, n;
        const t = document.querySelectorAll('[data-radix-focus-guard]');
        return (
          document.body.insertAdjacentElement(
            'afterbegin',
            null != (e = t[0]) ? e : $v(),
          ),
          document.body.insertAdjacentElement(
            'beforeend',
            null != (n = t[1]) ? n : $v(),
          ),
          Lv++,
          () => {
            (1 === Lv &&
              document
                .querySelectorAll('[data-radix-focus-guard]')
                .forEach((e) => e.remove()),
              Lv--);
          }
        );
      }, []),
      d.jsxs(d.Fragment, {
        children: [
          d.jsx(Tv, {
            asChild: !0,
            loop: !0,
            trapped: o,
            onMountAutoFocus: i,
            onUnmountAutoFocus: a,
            children: d.jsx(
              te,
              l(
                s(
                  {
                    role: 'dialog',
                    id: f.contentId,
                    'aria-describedby': f.descriptionId,
                    'aria-labelledby': f.titleId,
                    'data-state': wh(f.open),
                  },
                  p,
                ),
                { ref: h, onDismiss: () => f.onOpenChange(!1) },
              ),
            ),
          }),
          d.jsxs(d.Fragment, {
            children: [
              d.jsx(_h, { titleId: f.titleId }),
              d.jsx(Ch, { contentRef: v, descriptionId: f.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  ph = 'DialogTitle',
  fh = u.forwardRef((e, n) => {
    const t = e,
      { __scopeDialog: r } = t,
      o = c(t, ['__scopeDialog']),
      i = Yv(ph, r);
    return d.jsx(pe.h2, l(s({ id: i.titleId }, o), { ref: n }));
  });
fh.displayName = ph;
var vh = 'DialogDescription',
  hh = u.forwardRef((e, n) => {
    const t = e,
      { __scopeDialog: r } = t,
      o = c(t, ['__scopeDialog']),
      i = Yv(vh, r);
    return d.jsx(pe.p, l(s({ id: i.descriptionId }, o), { ref: n }));
  });
hh.displayName = vh;
var mh = 'DialogClose',
  gh = u.forwardRef((e, n) => {
    const t = e,
      { __scopeDialog: r } = t,
      o = c(t, ['__scopeDialog']),
      i = Yv(mh, r);
    return d.jsx(
      pe.button,
      l(s({ type: 'button' }, o), {
        ref: n,
        onClick: j(e.onClick, () => i.onOpenChange(!1)),
      }),
    );
  });
function wh(e) {
  return e ? 'open' : 'closed';
}
gh.displayName = mh;
var yh = 'DialogTitleWarning',
  [bh, xh] = A(yh, { contentName: sh, titleName: ph, docsSlug: 'dialog' }),
  _h = ({ titleId: e }) => {
    const n = xh(yh),
      t = `\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;
    return (
      u.useEffect(() => {
        if (e) {
          document.getElementById(e);
        }
      }, [t, e]),
      null
    );
  },
  Ch = ({ contentRef: e, descriptionId: n }) => {
    const t = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${xh('DialogDescriptionWarning').contentName}}.`;
    return (
      u.useEffect(() => {
        var t;
        const r =
          null == (t = e.current) ? void 0 : t.getAttribute('aria-describedby');
        if (n && r) {
          document.getElementById(n);
        }
      }, [t, e, n]),
      null
    );
  },
  Rh = qv,
  Sh = Jv,
  Eh = th,
  Ph = oh,
  jh = lh,
  Dh = fh,
  Th = hh,
  Nh = gh,
  Ah = 'AlertDialog',
  [Oh] = O(Ah, [Gv]),
  Mh = Gv(),
  Ih = (e) => {
    const n = e,
      { __scopeAlertDialog: t } = n,
      r = c(n, ['__scopeAlertDialog']),
      o = Mh(t);
    return d.jsx(Rh, l(s(s({}, o), r), { modal: !0 }));
  };
Ih.displayName = Ah;
var kh = u.forwardRef((e, n) => {
  const t = e,
    { __scopeAlertDialog: r } = t,
    o = c(t, ['__scopeAlertDialog']),
    i = Mh(r);
  return d.jsx(Sh, l(s(s({}, i), o), { ref: n }));
});
kh.displayName = 'AlertDialogTrigger';
var Fh = (e) => {
  const n = e,
    { __scopeAlertDialog: t } = n,
    r = c(n, ['__scopeAlertDialog']),
    o = Mh(t);
  return d.jsx(Eh, s(s({}, o), r));
};
Fh.displayName = 'AlertDialogPortal';
var Lh = u.forwardRef((e, n) => {
  const t = e,
    { __scopeAlertDialog: r } = t,
    o = c(t, ['__scopeAlertDialog']),
    i = Mh(r);
  return d.jsx(Ph, l(s(s({}, i), o), { ref: n }));
});
Lh.displayName = 'AlertDialogOverlay';
var $h = 'AlertDialogContent',
  [Wh, Vh] = Oh($h),
  Kh = Hv('AlertDialogContent'),
  Hh = u.forwardRef((e, n) => {
    const t = e,
      { __scopeAlertDialog: r, children: o } = t,
      i = c(t, ['__scopeAlertDialog', 'children']),
      a = Mh(r),
      p = u.useRef(null),
      f = N(n, p),
      v = u.useRef(null);
    return d.jsx(bh, {
      contentName: $h,
      titleName: Bh,
      docsSlug: 'alert-dialog',
      children: d.jsx(Wh, {
        scope: r,
        cancelRef: v,
        children: d.jsxs(
          jh,
          l(s(s({ role: 'alertdialog' }, a), i), {
            ref: f,
            onOpenAutoFocus: j(i.onOpenAutoFocus, (e) => {
              var n;
              (e.preventDefault(),
                null == (n = v.current) || n.focus({ preventScroll: !0 }));
            }),
            onPointerDownOutside: (e) => e.preventDefault(),
            onInteractOutside: (e) => e.preventDefault(),
            children: [
              d.jsx(Kh, { children: o }),
              d.jsx(Zh, { contentRef: p }),
            ],
          }),
        ),
      }),
    });
  });
Hh.displayName = $h;
var Bh = 'AlertDialogTitle',
  Uh = u.forwardRef((e, n) => {
    const t = e,
      { __scopeAlertDialog: r } = t,
      o = c(t, ['__scopeAlertDialog']),
      i = Mh(r);
    return d.jsx(Dh, l(s(s({}, i), o), { ref: n }));
  });
Uh.displayName = Bh;
var zh = 'AlertDialogDescription',
  Gh = u.forwardRef((e, n) => {
    const t = e,
      { __scopeAlertDialog: r } = t,
      o = c(t, ['__scopeAlertDialog']),
      i = Mh(r);
    return d.jsx(Th, l(s(s({}, i), o), { ref: n }));
  });
Gh.displayName = zh;
var Xh = u.forwardRef((e, n) => {
  const t = e,
    { __scopeAlertDialog: r } = t,
    o = c(t, ['__scopeAlertDialog']),
    i = Mh(r);
  return d.jsx(Nh, l(s(s({}, i), o), { ref: n }));
});
Xh.displayName = 'AlertDialogAction';
var Yh = 'AlertDialogCancel',
  qh = u.forwardRef((e, n) => {
    const t = e,
      { __scopeAlertDialog: r } = t,
      o = c(t, ['__scopeAlertDialog']),
      { cancelRef: i } = Vh(Yh, r),
      a = Mh(r),
      u = N(n, i);
    return d.jsx(Nh, l(s(s({}, a), o), { ref: u }));
  });
qh.displayName = Yh;
var Zh = ({ contentRef: e }) => {
    const n = `\`${$h}\` requires a description for the component to be accessible for screen reader users.\n\nYou can add a description to the \`${$h}\` by passing a \`${zh}\` component as a child, which also benefits sighted users by adding visible context to the dialog.\n\nAlternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${$h}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
    return (
      u.useEffect(() => {
        var n;
        document.getElementById(
          null == (n = e.current) ? void 0 : n.getAttribute('aria-describedby'),
        );
      }, [n, e]),
      null
    );
  },
  Jh = Ih,
  Qh = kh,
  em = Fh,
  nm = Lh,
  tm = Hh,
  rm = Xh,
  om = qh,
  im = Uh,
  am = Gh;
function sm(...e) {
  const n = e[0];
  if (1 === e.length) return n;
  const t = () => {
    const t = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
    return function (e) {
      const r = t.reduce((n, { useScope: t, scopeName: r }) => {
        const o = t(e)[`__scope${r}`];
        return s(s({}, n), o);
      }, {});
      return u.useMemo(() => ({ [`__scope${n.scopeName}`]: r }), [r]);
    };
  };
  return ((t.scopeName = n.scopeName), t);
}
var lm = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'select',
    'span',
    'svg',
    'ul',
  ].reduce((e, n) => {
    const t = pn(`Primitive.${n}`),
      r = u.forwardRef((e, r) => {
        const o = e,
          { asChild: i } = o,
          a = c(o, ['asChild']),
          u = i ? t : n;
        return (
          'undefined' != typeof window && (window[Symbol.for('radix-ui')] = !0),
          d.jsx(u, l(s({}, a), { ref: r }))
        );
      });
    return ((r.displayName = `Primitive.${n}`), l(s({}, e), { [n]: r }));
  }, {}),
  cm = 'Progress',
  [um] = (function (e, n = []) {
    let t = [];
    const r = () => {
      const n = t.map((e) => u.createContext(e));
      return function (t) {
        const r = (null == t ? void 0 : t[e]) || n;
        return u.useMemo(
          () => ({ [`__scope${e}`]: l(s({}, t), { [e]: r }) }),
          [t, r],
        );
      };
    };
    return (
      (r.scopeName = e),
      [
        function (n, r) {
          const o = u.createContext(r);
          o.displayName = n + 'Context';
          const i = t.length;
          t = [...t, r];
          const a = (n) => {
            var t;
            const r = n,
              { scope: a, children: s } = r,
              l = c(r, ['scope', 'children']),
              p =
                (null == (t = null == a ? void 0 : a[e]) ? void 0 : t[i]) || o,
              f = u.useMemo(() => l, Object.values(l));
            return d.jsx(p.Provider, { value: f, children: s });
          };
          return (
            (a.displayName = n + 'Provider'),
            [
              a,
              function (t, a) {
                var s;
                const l =
                    (null == (s = null == a ? void 0 : a[e]) ? void 0 : s[i]) ||
                    o,
                  c = u.useContext(l);
                if (c) return c;
                if (void 0 !== r) return r;
                throw new Error(`\`${t}\` must be used within \`${n}\``);
              },
            ]
          );
        },
        sm(r, ...n),
      ]
    );
  })(cm),
  [dm, pm] = um(cm),
  fm = u.forwardRef((e, n) => {
    const t = e,
      {
        __scopeProgress: r,
        value: o = null,
        max: i,
        getValueLabel: a = mm,
      } = t,
      u = c(t, ['__scopeProgress', 'value', 'max', 'getValueLabel']);
    (i || 0 === i) && ym(i);
    const p = ym(i) ? i : 100;
    null !== o && bm(o, p);
    const f = bm(o, p) ? o : null,
      v = wm(f) ? a(f, p) : void 0;
    return d.jsx(dm, {
      scope: r,
      value: f,
      max: p,
      children: d.jsx(
        lm.div,
        l(
          s(
            {
              'aria-valuemax': p,
              'aria-valuemin': 0,
              'aria-valuenow': wm(f) ? f : void 0,
              'aria-valuetext': v,
              role: 'progressbar',
              'data-state': gm(f, p),
              'data-value': null != f ? f : void 0,
              'data-max': p,
            },
            u,
          ),
          { ref: n },
        ),
      ),
    });
  });
fm.displayName = cm;
var vm = 'ProgressIndicator',
  hm = u.forwardRef((e, n) => {
    var t;
    const r = e,
      { __scopeProgress: o } = r,
      i = c(r, ['__scopeProgress']),
      a = pm(vm, o);
    return d.jsx(
      lm.div,
      l(
        s(
          {
            'data-state': gm(a.value, a.max),
            'data-value': null != (t = a.value) ? t : void 0,
            'data-max': a.max,
          },
          i,
        ),
        { ref: n },
      ),
    );
  });
function mm(e, n) {
  return `${Math.round((e / n) * 100)}%`;
}
function gm(e, n) {
  return null == e ? 'indeterminate' : e === n ? 'complete' : 'loading';
}
function wm(e) {
  return 'number' == typeof e;
}
function ym(e) {
  return wm(e) && !isNaN(e) && e > 0;
}
function bm(e, n) {
  return wm(e) && !isNaN(e) && e <= n && e >= 0;
}
hm.displayName = vm;
var xm = fm,
  _m = hm,
  Cm = 'rovingFocusGroup.onEntryFocus',
  Rm = { bubbles: !1, cancelable: !0 },
  Sm = 'RovingFocusGroup',
  [Em, Pm, jm] = $(Sm),
  [Dm, Tm] = O(Sm, [jm]),
  [Nm, Am] = Dm(Sm),
  Om = u.forwardRef((e, n) =>
    d.jsx(Em.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: d.jsx(Em.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: d.jsx(Mm, l(s({}, e), { ref: n })),
      }),
    }),
  );
Om.displayName = Sm;
var Mm = u.forwardRef((e, n) => {
    const t = e,
      {
        __scopeRovingFocusGroup: r,
        orientation: o,
        loop: i = !1,
        dir: a,
        currentTabStopId: p,
        defaultCurrentTabStopId: f,
        onCurrentTabStopIdChange: v,
        onEntryFocus: h,
        preventScrollOnEntryFocus: m = !1,
      } = t,
      g = c(t, [
        '__scopeRovingFocusGroup',
        'orientation',
        'loop',
        'dir',
        'currentTabStopId',
        'defaultCurrentTabStopId',
        'onCurrentTabStopIdChange',
        'onEntryFocus',
        'preventScrollOnEntryFocus',
      ]),
      w = u.useRef(null),
      y = N(n, w),
      b = _a(a),
      [x, _] = ye({
        prop: p,
        defaultProp: null != f ? f : null,
        onChange: v,
        caller: Sm,
      }),
      [C, R] = u.useState(!1),
      S = ge(h),
      E = Pm(r),
      P = u.useRef(!1),
      [D, T] = u.useState(0);
    return (
      u.useEffect(() => {
        const e = w.current;
        if (e)
          return (
            e.addEventListener(Cm, S),
            () => e.removeEventListener(Cm, S)
          );
      }, [S]),
      d.jsx(Nm, {
        scope: r,
        orientation: o,
        dir: b,
        loop: i,
        currentTabStopId: x,
        onItemFocus: u.useCallback((e) => _(e), [_]),
        onItemShiftTab: u.useCallback(() => R(!0), []),
        onFocusableItemAdd: u.useCallback(() => T((e) => e + 1), []),
        onFocusableItemRemove: u.useCallback(() => T((e) => e - 1), []),
        children: d.jsx(
          pe.div,
          l(s({ tabIndex: C || 0 === D ? -1 : 0, 'data-orientation': o }, g), {
            ref: y,
            style: s({ outline: 'none' }, e.style),
            onMouseDown: j(e.onMouseDown, () => {
              P.current = !0;
            }),
            onFocus: j(e.onFocus, (e) => {
              const n = !P.current;
              if (e.target === e.currentTarget && n && !C) {
                const n = new CustomEvent(Cm, Rm);
                if ((e.currentTarget.dispatchEvent(n), !n.defaultPrevented)) {
                  const e = E().filter((e) => e.focusable);
                  Lm(
                    [e.find((e) => e.active), e.find((e) => e.id === x), ...e]
                      .filter(Boolean)
                      .map((e) => e.ref.current),
                    m,
                  );
                }
              }
              P.current = !1;
            }),
            onBlur: j(e.onBlur, () => R(!1)),
          }),
        ),
      })
    );
  }),
  Im = 'RovingFocusGroupItem',
  km = u.forwardRef((e, n) => {
    const t = e,
      {
        __scopeRovingFocusGroup: r,
        focusable: o = !0,
        active: i = !1,
        tabStopId: a,
        children: p,
      } = t,
      f = c(t, [
        '__scopeRovingFocusGroup',
        'focusable',
        'active',
        'tabStopId',
        'children',
      ]),
      v = ir(),
      h = a || v,
      m = Am(Im, r),
      g = m.currentTabStopId === h,
      w = Pm(r),
      {
        onFocusableItemAdd: y,
        onFocusableItemRemove: b,
        currentTabStopId: x,
      } = m;
    return (
      u.useEffect(() => {
        if (o) return (y(), () => b());
      }, [o, y, b]),
      d.jsx(Em.ItemSlot, {
        scope: r,
        id: h,
        focusable: o,
        active: i,
        children: d.jsx(
          pe.span,
          l(s({ tabIndex: g ? 0 : -1, 'data-orientation': m.orientation }, f), {
            ref: n,
            onMouseDown: j(e.onMouseDown, (e) => {
              o ? m.onItemFocus(h) : e.preventDefault();
            }),
            onFocus: j(e.onFocus, () => m.onItemFocus(h)),
            onKeyDown: j(e.onKeyDown, (e) => {
              if ('Tab' === e.key && e.shiftKey) return void m.onItemShiftTab();
              if (e.target !== e.currentTarget) return;
              const n = (function (e, n, t) {
                const r = (function (e, n) {
                  return 'rtl' !== n
                    ? e
                    : 'ArrowLeft' === e
                      ? 'ArrowRight'
                      : 'ArrowRight' === e
                        ? 'ArrowLeft'
                        : e;
                })(e.key, t);
                return ('vertical' === n &&
                  ['ArrowLeft', 'ArrowRight'].includes(r)) ||
                  ('horizontal' === n && ['ArrowUp', 'ArrowDown'].includes(r))
                  ? void 0
                  : Fm[r];
              })(e, m.orientation, m.dir);
              if (void 0 !== n) {
                if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                e.preventDefault();
                let o = w()
                  .filter((e) => e.focusable)
                  .map((e) => e.ref.current);
                if ('last' === n) o.reverse();
                else if ('prev' === n || 'next' === n) {
                  'prev' === n && o.reverse();
                  const i = o.indexOf(e.currentTarget);
                  o = m.loop
                    ? ((r = i + 1),
                      (t = o).map((e, n) => t[(r + n) % t.length]))
                    : o.slice(i + 1);
                }
                setTimeout(() => Lm(o));
              }
              var t, r;
            }),
            children:
              'function' == typeof p
                ? p({ isCurrentTabStop: g, hasTabStop: null != x })
                : p,
          }),
        ),
      })
    );
  });
km.displayName = Im;
var Fm = {
  ArrowLeft: 'prev',
  ArrowUp: 'prev',
  ArrowRight: 'next',
  ArrowDown: 'next',
  PageUp: 'first',
  Home: 'first',
  PageDown: 'last',
  End: 'last',
};
function Lm(e, n = !1) {
  const t = document.activeElement;
  for (const r of e) {
    if (r === t) return;
    if ((r.focus({ preventScroll: n }), document.activeElement !== t)) return;
  }
}
var $m = Om,
  Wm = km,
  Vm = 'Tabs',
  [Km] = O(Vm, [Tm]),
  Hm = Tm(),
  [Bm, Um] = Km(Vm),
  zm = u.forwardRef((e, n) => {
    const t = e,
      {
        __scopeTabs: r,
        value: o,
        onValueChange: i,
        defaultValue: a,
        orientation: u = 'horizontal',
        dir: p,
        activationMode: f = 'automatic',
      } = t,
      v = c(t, [
        '__scopeTabs',
        'value',
        'onValueChange',
        'defaultValue',
        'orientation',
        'dir',
        'activationMode',
      ]),
      h = _a(p),
      [m, g] = ye({
        prop: o,
        onChange: i,
        defaultProp: null != a ? a : '',
        caller: Vm,
      });
    return d.jsx(Bm, {
      scope: r,
      baseId: ir(),
      value: m,
      onValueChange: g,
      orientation: u,
      dir: h,
      activationMode: f,
      children: d.jsx(
        pe.div,
        l(s({ dir: h, 'data-orientation': u }, v), { ref: n }),
      ),
    });
  });
zm.displayName = Vm;
var Gm = 'TabsList',
  Xm = u.forwardRef((e, n) => {
    const t = e,
      { __scopeTabs: r, loop: o = !0 } = t,
      i = c(t, ['__scopeTabs', 'loop']),
      a = Um(Gm, r),
      u = Hm(r);
    return d.jsx(
      $m,
      l(s({ asChild: !0 }, u), {
        orientation: a.orientation,
        dir: a.dir,
        loop: o,
        children: d.jsx(
          pe.div,
          l(s({ role: 'tablist', 'aria-orientation': a.orientation }, i), {
            ref: n,
          }),
        ),
      }),
    );
  });
Xm.displayName = Gm;
var Ym = 'TabsTrigger',
  qm = u.forwardRef((e, n) => {
    const t = e,
      { __scopeTabs: r, value: o, disabled: i = !1 } = t,
      a = c(t, ['__scopeTabs', 'value', 'disabled']),
      u = Um(Ym, r),
      p = Hm(r),
      f = Qm(u.baseId, o),
      v = eg(u.baseId, o),
      h = o === u.value;
    return d.jsx(
      Wm,
      l(s({ asChild: !0 }, p), {
        focusable: !i,
        active: h,
        children: d.jsx(
          pe.button,
          l(
            s(
              {
                type: 'button',
                role: 'tab',
                'aria-selected': h,
                'aria-controls': v,
                'data-state': h ? 'active' : 'inactive',
                'data-disabled': i ? '' : void 0,
                disabled: i,
                id: f,
              },
              a,
            ),
            {
              ref: n,
              onMouseDown: j(e.onMouseDown, (e) => {
                i || 0 !== e.button || !1 !== e.ctrlKey
                  ? e.preventDefault()
                  : u.onValueChange(o);
              }),
              onKeyDown: j(e.onKeyDown, (e) => {
                [' ', 'Enter'].includes(e.key) && u.onValueChange(o);
              }),
              onFocus: j(e.onFocus, () => {
                const e = 'manual' !== u.activationMode;
                h || i || !e || u.onValueChange(o);
              }),
            },
          ),
        ),
      }),
    );
  });
qm.displayName = Ym;
var Zm = 'TabsContent',
  Jm = u.forwardRef((e, n) => {
    const t = e,
      { __scopeTabs: r, value: o, forceMount: i, children: a } = t,
      p = c(t, ['__scopeTabs', 'value', 'forceMount', 'children']),
      f = Um(Zm, r),
      v = Qm(f.baseId, o),
      h = eg(f.baseId, o),
      m = o === f.value,
      g = u.useRef(m);
    return (
      u.useEffect(() => {
        const e = requestAnimationFrame(() => (g.current = !1));
        return () => cancelAnimationFrame(e);
      }, []),
      d.jsx(he, {
        present: i || m,
        children: ({ present: t }) =>
          d.jsx(
            pe.div,
            l(
              s(
                {
                  'data-state': m ? 'active' : 'inactive',
                  'data-orientation': f.orientation,
                  role: 'tabpanel',
                  'aria-labelledby': v,
                  hidden: !t,
                  id: h,
                  tabIndex: 0,
                },
                p,
              ),
              {
                ref: n,
                style: l(s({}, e.style), {
                  animationDuration: g.current ? '0s' : void 0,
                }),
                children: t && a,
              },
            ),
          ),
      })
    );
  });
function Qm(e, n) {
  return `${e}-trigger-${n}`;
}
function eg(e, n) {
  return `${e}-content-${n}`;
}
Jm.displayName = Zm;
var ng = zm,
  tg = Xm,
  rg = qm,
  og = Jm,
  ig = 'rovingFocusGroup.onEntryFocus',
  ag = { bubbles: !1, cancelable: !0 },
  sg = 'RovingFocusGroup',
  [lg, cg, ug] = $(sg),
  [dg, pg] = O(sg, [ug]),
  [fg, vg] = dg(sg),
  hg = u.forwardRef((e, n) =>
    d.jsx(lg.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: d.jsx(lg.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: d.jsx(mg, l(s({}, e), { ref: n })),
      }),
    }),
  );
hg.displayName = sg;
var mg = u.forwardRef((e, n) => {
    const t = e,
      {
        __scopeRovingFocusGroup: r,
        orientation: o,
        loop: i = !1,
        dir: a,
        currentTabStopId: p,
        defaultCurrentTabStopId: f,
        onCurrentTabStopIdChange: v,
        onEntryFocus: h,
        preventScrollOnEntryFocus: m = !1,
      } = t,
      g = c(t, [
        '__scopeRovingFocusGroup',
        'orientation',
        'loop',
        'dir',
        'currentTabStopId',
        'defaultCurrentTabStopId',
        'onCurrentTabStopIdChange',
        'onEntryFocus',
        'preventScrollOnEntryFocus',
      ]),
      w = u.useRef(null),
      y = N(n, w),
      b = _a(a),
      [x, _] = ye({
        prop: p,
        defaultProp: null != f ? f : null,
        onChange: v,
        caller: sg,
      }),
      [C, R] = u.useState(!1),
      S = ge(h),
      E = cg(r),
      P = u.useRef(!1),
      [D, T] = u.useState(0);
    return (
      u.useEffect(() => {
        const e = w.current;
        if (e)
          return (
            e.addEventListener(ig, S),
            () => e.removeEventListener(ig, S)
          );
      }, [S]),
      d.jsx(fg, {
        scope: r,
        orientation: o,
        dir: b,
        loop: i,
        currentTabStopId: x,
        onItemFocus: u.useCallback((e) => _(e), [_]),
        onItemShiftTab: u.useCallback(() => R(!0), []),
        onFocusableItemAdd: u.useCallback(() => T((e) => e + 1), []),
        onFocusableItemRemove: u.useCallback(() => T((e) => e - 1), []),
        children: d.jsx(
          pe.div,
          l(s({ tabIndex: C || 0 === D ? -1 : 0, 'data-orientation': o }, g), {
            ref: y,
            style: s({ outline: 'none' }, e.style),
            onMouseDown: j(e.onMouseDown, () => {
              P.current = !0;
            }),
            onFocus: j(e.onFocus, (e) => {
              const n = !P.current;
              if (e.target === e.currentTarget && n && !C) {
                const n = new CustomEvent(ig, ag);
                if ((e.currentTarget.dispatchEvent(n), !n.defaultPrevented)) {
                  const e = E().filter((e) => e.focusable);
                  bg(
                    [e.find((e) => e.active), e.find((e) => e.id === x), ...e]
                      .filter(Boolean)
                      .map((e) => e.ref.current),
                    m,
                  );
                }
              }
              P.current = !1;
            }),
            onBlur: j(e.onBlur, () => R(!1)),
          }),
        ),
      })
    );
  }),
  gg = 'RovingFocusGroupItem',
  wg = u.forwardRef((e, n) => {
    const t = e,
      {
        __scopeRovingFocusGroup: r,
        focusable: o = !0,
        active: i = !1,
        tabStopId: a,
        children: p,
      } = t,
      f = c(t, [
        '__scopeRovingFocusGroup',
        'focusable',
        'active',
        'tabStopId',
        'children',
      ]),
      v = ir(),
      h = a || v,
      m = vg(gg, r),
      g = m.currentTabStopId === h,
      w = cg(r),
      {
        onFocusableItemAdd: y,
        onFocusableItemRemove: b,
        currentTabStopId: x,
      } = m;
    return (
      u.useEffect(() => {
        if (o) return (y(), () => b());
      }, [o, y, b]),
      d.jsx(lg.ItemSlot, {
        scope: r,
        id: h,
        focusable: o,
        active: i,
        children: d.jsx(
          pe.span,
          l(s({ tabIndex: g ? 0 : -1, 'data-orientation': m.orientation }, f), {
            ref: n,
            onMouseDown: j(e.onMouseDown, (e) => {
              o ? m.onItemFocus(h) : e.preventDefault();
            }),
            onFocus: j(e.onFocus, () => m.onItemFocus(h)),
            onKeyDown: j(e.onKeyDown, (e) => {
              if ('Tab' === e.key && e.shiftKey) return void m.onItemShiftTab();
              if (e.target !== e.currentTarget) return;
              const n = (function (e, n, t) {
                const r = (function (e, n) {
                  return 'rtl' !== n
                    ? e
                    : 'ArrowLeft' === e
                      ? 'ArrowRight'
                      : 'ArrowRight' === e
                        ? 'ArrowLeft'
                        : e;
                })(e.key, t);
                return ('vertical' === n &&
                  ['ArrowLeft', 'ArrowRight'].includes(r)) ||
                  ('horizontal' === n && ['ArrowUp', 'ArrowDown'].includes(r))
                  ? void 0
                  : yg[r];
              })(e, m.orientation, m.dir);
              if (void 0 !== n) {
                if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                e.preventDefault();
                let o = w()
                  .filter((e) => e.focusable)
                  .map((e) => e.ref.current);
                if ('last' === n) o.reverse();
                else if ('prev' === n || 'next' === n) {
                  'prev' === n && o.reverse();
                  const i = o.indexOf(e.currentTarget);
                  o = m.loop
                    ? ((r = i + 1),
                      (t = o).map((e, n) => t[(r + n) % t.length]))
                    : o.slice(i + 1);
                }
                setTimeout(() => bg(o));
              }
              var t, r;
            }),
            children:
              'function' == typeof p
                ? p({ isCurrentTabStop: g, hasTabStop: null != x })
                : p,
          }),
        ),
      })
    );
  });
wg.displayName = gg;
var yg = {
  ArrowLeft: 'prev',
  ArrowUp: 'prev',
  ArrowRight: 'next',
  ArrowDown: 'next',
  PageUp: 'first',
  Home: 'first',
  PageDown: 'last',
  End: 'last',
};
function bg(e, n = !1) {
  const t = document.activeElement;
  for (const r of e) {
    if (r === t) return;
    if ((r.focus({ preventScroll: n }), document.activeElement !== t)) return;
  }
}
var xg = hg,
  _g = wg,
  Cg = 'Radio',
  [Rg, Sg] = O(Cg),
  [Eg, Pg] = Rg(Cg),
  jg = u.forwardRef((e, n) => {
    const t = e,
      {
        __scopeRadio: r,
        name: o,
        checked: i = !1,
        required: a,
        disabled: p,
        value: f = 'on',
        onCheck: v,
        form: h,
      } = t,
      m = c(t, [
        '__scopeRadio',
        'name',
        'checked',
        'required',
        'disabled',
        'value',
        'onCheck',
        'form',
      ]),
      [g, w] = u.useState(null),
      y = N(n, (e) => w(e)),
      b = u.useRef(!1),
      x = !g || h || !!g.closest('form');
    return d.jsxs(Eg, {
      scope: r,
      checked: i,
      disabled: p,
      children: [
        d.jsx(
          pe.button,
          l(
            s(
              {
                type: 'button',
                role: 'radio',
                'aria-checked': i,
                'data-state': Ag(i),
                'data-disabled': p ? '' : void 0,
                disabled: p,
                value: f,
              },
              m,
            ),
            {
              ref: y,
              onClick: j(e.onClick, (e) => {
                (i || null == v || v(),
                  x &&
                    ((b.current = e.isPropagationStopped()),
                    b.current || e.stopPropagation()));
              }),
            },
          ),
        ),
        x &&
          d.jsx(Ng, {
            control: g,
            bubbles: !b.current,
            name: o,
            value: f,
            checked: i,
            required: a,
            disabled: p,
            form: h,
            style: { transform: 'translateX(-100%)' },
          }),
      ],
    });
  });
jg.displayName = Cg;
var Dg = 'RadioIndicator',
  Tg = u.forwardRef((e, n) => {
    const t = e,
      { __scopeRadio: r, forceMount: o } = t,
      i = c(t, ['__scopeRadio', 'forceMount']),
      a = Pg(Dg, r);
    return d.jsx(he, {
      present: o || a.checked,
      children: d.jsx(
        pe.span,
        l(
          s(
            {
              'data-state': Ag(a.checked),
              'data-disabled': a.disabled ? '' : void 0,
            },
            i,
          ),
          { ref: n },
        ),
      ),
    });
  });
Tg.displayName = Dg;
var Ng = u.forwardRef((e, n) => {
  var t = e,
    { __scopeRadio: r, control: o, checked: i, bubbles: a = !0 } = t,
    p = c(t, ['__scopeRadio', 'control', 'checked', 'bubbles']);
  const f = u.useRef(null),
    v = N(f, n),
    h = Ro(i),
    m = lr(o);
  return (
    u.useEffect(() => {
      const e = f.current;
      if (!e) return;
      const n = window.HTMLInputElement.prototype,
        t = Object.getOwnPropertyDescriptor(n, 'checked').set;
      if (h !== i && t) {
        const n = new Event('click', { bubbles: a });
        (t.call(e, i), e.dispatchEvent(n));
      }
    }, [h, i, a]),
    d.jsx(
      pe.input,
      l(s({ type: 'radio', 'aria-hidden': !0, defaultChecked: i }, p), {
        tabIndex: -1,
        ref: v,
        style: l(s(s({}, p.style), m), {
          position: 'absolute',
          pointerEvents: 'none',
          opacity: 0,
          margin: 0,
        }),
      }),
    )
  );
});
function Ag(e) {
  return e ? 'checked' : 'unchecked';
}
Ng.displayName = 'RadioBubbleInput';
var Og = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'],
  Mg = 'RadioGroup',
  [Ig] = O(Mg, [pg, Sg]),
  kg = pg(),
  Fg = Sg(),
  [Lg, $g] = Ig(Mg),
  Wg = u.forwardRef((e, n) => {
    const t = e,
      {
        __scopeRadioGroup: r,
        name: o,
        defaultValue: i,
        value: a,
        required: u = !1,
        disabled: p = !1,
        orientation: f,
        dir: v,
        loop: h = !0,
        onValueChange: m,
      } = t,
      g = c(t, [
        '__scopeRadioGroup',
        'name',
        'defaultValue',
        'value',
        'required',
        'disabled',
        'orientation',
        'dir',
        'loop',
        'onValueChange',
      ]),
      w = kg(r),
      y = _a(v),
      [b, x] = ye({
        prop: a,
        defaultProp: null != i ? i : null,
        onChange: m,
        caller: Mg,
      });
    return d.jsx(Lg, {
      scope: r,
      name: o,
      required: u,
      disabled: p,
      value: b,
      onValueChange: x,
      children: d.jsx(
        xg,
        l(s({ asChild: !0 }, w), {
          orientation: f,
          dir: y,
          loop: h,
          children: d.jsx(
            pe.div,
            l(
              s(
                {
                  role: 'radiogroup',
                  'aria-required': u,
                  'aria-orientation': f,
                  'data-disabled': p ? '' : void 0,
                  dir: y,
                },
                g,
              ),
              { ref: n },
            ),
          ),
        }),
      ),
    });
  });
Wg.displayName = Mg;
var Vg = 'RadioGroupItem',
  Kg = u.forwardRef((e, n) => {
    const t = e,
      { __scopeRadioGroup: r, disabled: o } = t,
      i = c(t, ['__scopeRadioGroup', 'disabled']),
      a = $g(Vg, r),
      p = a.disabled || o,
      f = kg(r),
      v = Fg(r),
      h = u.useRef(null),
      m = N(n, h),
      g = a.value === i.value,
      w = u.useRef(!1);
    return (
      u.useEffect(() => {
        const e = (e) => {
            Og.includes(e.key) && (w.current = !0);
          },
          n = () => (w.current = !1);
        return (
          document.addEventListener('keydown', e),
          document.addEventListener('keyup', n),
          () => {
            (document.removeEventListener('keydown', e),
              document.removeEventListener('keyup', n));
          }
        );
      }, []),
      d.jsx(
        _g,
        l(s({ asChild: !0 }, f), {
          focusable: !p,
          active: g,
          children: d.jsx(
            jg,
            l(s(s({ disabled: p, required: a.required, checked: g }, v), i), {
              name: a.name,
              ref: m,
              onCheck: () => a.onValueChange(i.value),
              onKeyDown: j((e) => {
                'Enter' === e.key && e.preventDefault();
              }),
              onFocus: j(i.onFocus, () => {
                var e;
                w.current && (null == (e = h.current) || e.click());
              }),
            }),
          ),
        }),
      )
    );
  });
Kg.displayName = Vg;
var Hg = u.forwardRef((e, n) => {
  const t = e,
    { __scopeRadioGroup: r } = t,
    o = c(t, ['__scopeRadioGroup']),
    i = Fg(r);
  return d.jsx(Tg, l(s(s({}, i), o), { ref: n }));
});
Hg.displayName = 'RadioGroupIndicator';
var Bg = Wg,
  Ug = Kg,
  zg = Hg;
var Gg = 'ScrollArea',
  [Xg] = O(Gg),
  [Yg, qg] = Xg(Gg),
  Zg = u.forwardRef((e, n) => {
    const t = e,
      {
        __scopeScrollArea: r,
        type: o = 'hover',
        dir: i,
        scrollHideDelay: a = 600,
      } = t,
      p = c(t, ['__scopeScrollArea', 'type', 'dir', 'scrollHideDelay']),
      [f, v] = u.useState(null),
      [h, m] = u.useState(null),
      [g, w] = u.useState(null),
      [y, b] = u.useState(null),
      [x, _] = u.useState(null),
      [C, R] = u.useState(0),
      [S, E] = u.useState(0),
      [P, j] = u.useState(!1),
      [D, T] = u.useState(!1),
      A = N(n, (e) => v(e)),
      O = _a(i);
    return d.jsx(Yg, {
      scope: r,
      type: o,
      dir: O,
      scrollHideDelay: a,
      scrollArea: f,
      viewport: h,
      onViewportChange: m,
      content: g,
      onContentChange: w,
      scrollbarX: y,
      onScrollbarXChange: b,
      scrollbarXEnabled: P,
      onScrollbarXEnabledChange: j,
      scrollbarY: x,
      onScrollbarYChange: _,
      scrollbarYEnabled: D,
      onScrollbarYEnabledChange: T,
      onCornerWidthChange: R,
      onCornerHeightChange: E,
      children: d.jsx(
        pe.div,
        l(s({ dir: O }, p), {
          ref: A,
          style: s(
            {
              position: 'relative',
              '--radix-scroll-area-corner-width': C + 'px',
              '--radix-scroll-area-corner-height': S + 'px',
            },
            e.style,
          ),
        }),
      ),
    });
  });
Zg.displayName = Gg;
var Jg = 'ScrollAreaViewport',
  Qg = u.forwardRef((e, n) => {
    const t = e,
      { __scopeScrollArea: r, children: o, nonce: i } = t,
      a = c(t, ['__scopeScrollArea', 'children', 'nonce']),
      p = qg(Jg, r),
      f = N(n, u.useRef(null), p.onViewportChange);
    return d.jsxs(d.Fragment, {
      children: [
        d.jsx('style', {
          dangerouslySetInnerHTML: {
            __html:
              '[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}',
          },
          nonce: i,
        }),
        d.jsx(
          pe.div,
          l(s({ 'data-radix-scroll-area-viewport': '' }, a), {
            ref: f,
            style: s(
              {
                overflowX: p.scrollbarXEnabled ? 'scroll' : 'hidden',
                overflowY: p.scrollbarYEnabled ? 'scroll' : 'hidden',
              },
              e.style,
            ),
            children: d.jsx('div', {
              ref: p.onContentChange,
              style: { minWidth: '100%', display: 'table' },
              children: o,
            }),
          }),
        ),
      ],
    });
  });
Qg.displayName = Jg;
var ew = 'ScrollAreaScrollbar',
  nw = u.forwardRef((e, n) => {
    const t = e,
      { forceMount: r } = t,
      o = c(t, ['forceMount']),
      i = qg(ew, e.__scopeScrollArea),
      { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: p } = i,
      f = 'horizontal' === e.orientation;
    return (
      u.useEffect(
        () => (
          f ? a(!0) : p(!0),
          () => {
            f ? a(!1) : p(!1);
          }
        ),
        [f, a, p],
      ),
      'hover' === i.type
        ? d.jsx(tw, l(s({}, o), { ref: n, forceMount: r }))
        : 'scroll' === i.type
          ? d.jsx(rw, l(s({}, o), { ref: n, forceMount: r }))
          : 'auto' === i.type
            ? d.jsx(ow, l(s({}, o), { ref: n, forceMount: r }))
            : 'always' === i.type
              ? d.jsx(iw, l(s({}, o), { ref: n }))
              : null
    );
  });
nw.displayName = ew;
var tw = u.forwardRef((e, n) => {
    const t = e,
      { forceMount: r } = t,
      o = c(t, ['forceMount']),
      i = qg(ew, e.__scopeScrollArea),
      [a, p] = u.useState(!1);
    return (
      u.useEffect(() => {
        const e = i.scrollArea;
        let n = 0;
        if (e) {
          const t = () => {
              (window.clearTimeout(n), p(!0));
            },
            r = () => {
              n = window.setTimeout(() => p(!1), i.scrollHideDelay);
            };
          return (
            e.addEventListener('pointerenter', t),
            e.addEventListener('pointerleave', r),
            () => {
              (window.clearTimeout(n),
                e.removeEventListener('pointerenter', t),
                e.removeEventListener('pointerleave', r));
            }
          );
        }
      }, [i.scrollArea, i.scrollHideDelay]),
      d.jsx(he, {
        present: r || a,
        children: d.jsx(
          ow,
          l(s({ 'data-state': a ? 'visible' : 'hidden' }, o), { ref: n }),
        ),
      })
    );
  }),
  rw = u.forwardRef((e, n) => {
    const t = e,
      { forceMount: r } = t,
      o = c(t, ['forceMount']),
      i = qg(ew, e.__scopeScrollArea),
      a = 'horizontal' === e.orientation,
      p = Rw(() => v('SCROLL_END'), 100),
      [f, v] =
        ((h = 'hidden'),
        (m = {
          hidden: { SCROLL: 'scrolling' },
          scrolling: { SCROLL_END: 'idle', POINTER_ENTER: 'interacting' },
          interacting: { SCROLL: 'interacting', POINTER_LEAVE: 'idle' },
          idle: {
            HIDE: 'hidden',
            SCROLL: 'scrolling',
            POINTER_ENTER: 'interacting',
          },
        }),
        u.useReducer((e, n) => {
          const t = m[e][n];
          return null != t ? t : e;
        }, h));
    var h, m;
    return (
      u.useEffect(() => {
        if ('idle' === f) {
          const e = window.setTimeout(() => v('HIDE'), i.scrollHideDelay);
          return () => window.clearTimeout(e);
        }
      }, [f, i.scrollHideDelay, v]),
      u.useEffect(() => {
        const e = i.viewport,
          n = a ? 'scrollLeft' : 'scrollTop';
        if (e) {
          let t = e[n];
          const r = () => {
            const r = e[n];
            (t !== r && (v('SCROLL'), p()), (t = r));
          };
          return (
            e.addEventListener('scroll', r),
            () => e.removeEventListener('scroll', r)
          );
        }
      }, [i.viewport, a, v, p]),
      d.jsx(he, {
        present: r || 'hidden' !== f,
        children: d.jsx(
          iw,
          l(s({ 'data-state': 'hidden' === f ? 'hidden' : 'visible' }, o), {
            ref: n,
            onPointerEnter: j(e.onPointerEnter, () => v('POINTER_ENTER')),
            onPointerLeave: j(e.onPointerLeave, () => v('POINTER_LEAVE')),
          }),
        ),
      })
    );
  }),
  ow = u.forwardRef((e, n) => {
    const t = qg(ew, e.__scopeScrollArea),
      r = e,
      { forceMount: o } = r,
      i = c(r, ['forceMount']),
      [a, p] = u.useState(!1),
      f = 'horizontal' === e.orientation,
      v = Rw(() => {
        if (t.viewport) {
          const e = t.viewport.offsetWidth < t.viewport.scrollWidth,
            n = t.viewport.offsetHeight < t.viewport.scrollHeight;
          p(f ? e : n);
        }
      }, 10);
    return (
      Sw(t.viewport, v),
      Sw(t.content, v),
      d.jsx(he, {
        present: o || a,
        children: d.jsx(
          iw,
          l(s({ 'data-state': a ? 'visible' : 'hidden' }, i), { ref: n }),
        ),
      })
    );
  }),
  iw = u.forwardRef((e, n) => {
    const t = e,
      { orientation: r = 'vertical' } = t,
      o = c(t, ['orientation']),
      i = qg(ew, e.__scopeScrollArea),
      a = u.useRef(null),
      p = u.useRef(0),
      [f, v] = u.useState({
        content: 0,
        viewport: 0,
        scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
      }),
      h = ww(f.viewport, f.content),
      m = l(s({}, o), {
        sizes: f,
        onSizesChange: v,
        hasThumb: Boolean(h > 0 && h < 1),
        onThumbChange: (e) => (a.current = e),
        onThumbPointerUp: () => (p.current = 0),
        onThumbPointerDown: (e) => (p.current = e),
      });
    function g(e, n) {
      return (function (e, n, t, r = 'ltr') {
        const o = yw(t),
          i = o / 2,
          a = n || i,
          s = o - a,
          l = t.scrollbar.paddingStart + a,
          c = t.scrollbar.size - t.scrollbar.paddingEnd - s,
          u = t.content - t.viewport,
          d = 'ltr' === r ? [0, u] : [-1 * u, 0];
        return xw([l, c], d)(e);
      })(e, p.current, f, n);
    }
    return 'horizontal' === r
      ? d.jsx(
          aw,
          l(s({}, m), {
            ref: n,
            onThumbPositionChange: () => {
              if (i.viewport && a.current) {
                const e = bw(i.viewport.scrollLeft, f, i.dir);
                a.current.style.transform = `translate3d(${e}px, 0, 0)`;
              }
            },
            onWheelScroll: (e) => {
              i.viewport && (i.viewport.scrollLeft = e);
            },
            onDragScroll: (e) => {
              i.viewport && (i.viewport.scrollLeft = g(e, i.dir));
            },
          }),
        )
      : 'vertical' === r
        ? d.jsx(
            sw,
            l(s({}, m), {
              ref: n,
              onThumbPositionChange: () => {
                if (i.viewport && a.current) {
                  const e = bw(i.viewport.scrollTop, f);
                  a.current.style.transform = `translate3d(0, ${e}px, 0)`;
                }
              },
              onWheelScroll: (e) => {
                i.viewport && (i.viewport.scrollTop = e);
              },
              onDragScroll: (e) => {
                i.viewport && (i.viewport.scrollTop = g(e));
              },
            }),
          )
        : null;
  }),
  aw = u.forwardRef((e, n) => {
    const t = e,
      { sizes: r, onSizesChange: o } = t,
      i = c(t, ['sizes', 'onSizesChange']),
      a = qg(ew, e.__scopeScrollArea),
      [p, f] = u.useState(),
      v = u.useRef(null),
      h = N(n, v, a.onScrollbarXChange);
    return (
      u.useEffect(() => {
        v.current && f(getComputedStyle(v.current));
      }, [v]),
      d.jsx(
        uw,
        l(s({ 'data-orientation': 'horizontal' }, i), {
          ref: h,
          sizes: r,
          style: s(
            {
              bottom: 0,
              left:
                'rtl' === a.dir ? 'var(--radix-scroll-area-corner-width)' : 0,
              right:
                'ltr' === a.dir ? 'var(--radix-scroll-area-corner-width)' : 0,
              '--radix-scroll-area-thumb-width': yw(r) + 'px',
            },
            e.style,
          ),
          onThumbPointerDown: (n) => e.onThumbPointerDown(n.x),
          onDragScroll: (n) => e.onDragScroll(n.x),
          onWheelScroll: (n, t) => {
            if (a.viewport) {
              const r = a.viewport.scrollLeft + n.deltaX;
              (e.onWheelScroll(r), _w(r, t) && n.preventDefault());
            }
          },
          onResize: () => {
            v.current &&
              a.viewport &&
              p &&
              o({
                content: a.viewport.scrollWidth,
                viewport: a.viewport.offsetWidth,
                scrollbar: {
                  size: v.current.clientWidth,
                  paddingStart: gw(p.paddingLeft),
                  paddingEnd: gw(p.paddingRight),
                },
              });
          },
        }),
      )
    );
  }),
  sw = u.forwardRef((e, n) => {
    const t = e,
      { sizes: r, onSizesChange: o } = t,
      i = c(t, ['sizes', 'onSizesChange']),
      a = qg(ew, e.__scopeScrollArea),
      [p, f] = u.useState(),
      v = u.useRef(null),
      h = N(n, v, a.onScrollbarYChange);
    return (
      u.useEffect(() => {
        v.current && f(getComputedStyle(v.current));
      }, [v]),
      d.jsx(
        uw,
        l(s({ 'data-orientation': 'vertical' }, i), {
          ref: h,
          sizes: r,
          style: s(
            {
              top: 0,
              right: 'ltr' === a.dir ? 0 : void 0,
              left: 'rtl' === a.dir ? 0 : void 0,
              bottom: 'var(--radix-scroll-area-corner-height)',
              '--radix-scroll-area-thumb-height': yw(r) + 'px',
            },
            e.style,
          ),
          onThumbPointerDown: (n) => e.onThumbPointerDown(n.y),
          onDragScroll: (n) => e.onDragScroll(n.y),
          onWheelScroll: (n, t) => {
            if (a.viewport) {
              const r = a.viewport.scrollTop + n.deltaY;
              (e.onWheelScroll(r), _w(r, t) && n.preventDefault());
            }
          },
          onResize: () => {
            v.current &&
              a.viewport &&
              p &&
              o({
                content: a.viewport.scrollHeight,
                viewport: a.viewport.offsetHeight,
                scrollbar: {
                  size: v.current.clientHeight,
                  paddingStart: gw(p.paddingTop),
                  paddingEnd: gw(p.paddingBottom),
                },
              });
          },
        }),
      )
    );
  }),
  [lw, cw] = Xg(ew),
  uw = u.forwardRef((e, n) => {
    const t = e,
      {
        __scopeScrollArea: r,
        sizes: o,
        hasThumb: i,
        onThumbChange: a,
        onThumbPointerUp: p,
        onThumbPointerDown: f,
        onThumbPositionChange: v,
        onDragScroll: h,
        onWheelScroll: m,
        onResize: g,
      } = t,
      w = c(t, [
        '__scopeScrollArea',
        'sizes',
        'hasThumb',
        'onThumbChange',
        'onThumbPointerUp',
        'onThumbPointerDown',
        'onThumbPositionChange',
        'onDragScroll',
        'onWheelScroll',
        'onResize',
      ]),
      y = qg(ew, r),
      [b, x] = u.useState(null),
      _ = N(n, (e) => x(e)),
      C = u.useRef(null),
      R = u.useRef(''),
      S = y.viewport,
      E = o.content - o.viewport,
      P = ge(m),
      D = ge(v),
      T = Rw(g, 10);
    function A(e) {
      if (C.current) {
        const n = e.clientX - C.current.left,
          t = e.clientY - C.current.top;
        h({ x: n, y: t });
      }
    }
    return (
      u.useEffect(() => {
        const e = (e) => {
          const n = e.target;
          (null == b ? void 0 : b.contains(n)) && P(e, E);
        };
        return (
          document.addEventListener('wheel', e, { passive: !1 }),
          () => document.removeEventListener('wheel', e, { passive: !1 })
        );
      }, [S, b, E, P]),
      u.useEffect(D, [o, D]),
      Sw(b, T),
      Sw(y.content, T),
      d.jsx(lw, {
        scope: r,
        scrollbar: b,
        hasThumb: i,
        onThumbChange: ge(a),
        onThumbPointerUp: ge(p),
        onThumbPositionChange: D,
        onThumbPointerDown: ge(f),
        children: d.jsx(
          pe.div,
          l(s({}, w), {
            ref: _,
            style: s({ position: 'absolute' }, w.style),
            onPointerDown: j(e.onPointerDown, (e) => {
              if (0 === e.button) {
                (e.target.setPointerCapture(e.pointerId),
                  (C.current = b.getBoundingClientRect()),
                  (R.current = document.body.style.webkitUserSelect),
                  (document.body.style.webkitUserSelect = 'none'),
                  y.viewport && (y.viewport.style.scrollBehavior = 'auto'),
                  A(e));
              }
            }),
            onPointerMove: j(e.onPointerMove, A),
            onPointerUp: j(e.onPointerUp, (e) => {
              const n = e.target;
              (n.hasPointerCapture(e.pointerId) &&
                n.releasePointerCapture(e.pointerId),
                (document.body.style.webkitUserSelect = R.current),
                y.viewport && (y.viewport.style.scrollBehavior = ''),
                (C.current = null));
            }),
          }),
        ),
      })
    );
  }),
  dw = 'ScrollAreaThumb',
  pw = u.forwardRef((e, n) => {
    const t = e,
      { forceMount: r } = t,
      o = c(t, ['forceMount']),
      i = cw(dw, e.__scopeScrollArea);
    return d.jsx(he, {
      present: r || i.hasThumb,
      children: d.jsx(fw, s({ ref: n }, o)),
    });
  }),
  fw = u.forwardRef((e, n) => {
    const t = e,
      { __scopeScrollArea: r, style: o } = t,
      i = c(t, ['__scopeScrollArea', 'style']),
      a = qg(dw, r),
      p = cw(dw, r),
      { onThumbPositionChange: f } = p,
      v = N(n, (e) => p.onThumbChange(e)),
      h = u.useRef(void 0),
      m = Rw(() => {
        h.current && (h.current(), (h.current = void 0));
      }, 100);
    return (
      u.useEffect(() => {
        const e = a.viewport;
        if (e) {
          const n = () => {
            if ((m(), !h.current)) {
              const n = Cw(e, f);
              ((h.current = n), f());
            }
          };
          return (
            f(),
            e.addEventListener('scroll', n),
            () => e.removeEventListener('scroll', n)
          );
        }
      }, [a.viewport, m, f]),
      d.jsx(
        pe.div,
        l(s({ 'data-state': p.hasThumb ? 'visible' : 'hidden' }, i), {
          ref: v,
          style: s(
            {
              width: 'var(--radix-scroll-area-thumb-width)',
              height: 'var(--radix-scroll-area-thumb-height)',
            },
            o,
          ),
          onPointerDownCapture: j(e.onPointerDownCapture, (e) => {
            const n = e.target.getBoundingClientRect(),
              t = e.clientX - n.left,
              r = e.clientY - n.top;
            p.onThumbPointerDown({ x: t, y: r });
          }),
          onPointerUp: j(e.onPointerUp, p.onThumbPointerUp),
        }),
      )
    );
  });
pw.displayName = dw;
var vw = 'ScrollAreaCorner',
  hw = u.forwardRef((e, n) => {
    const t = qg(vw, e.__scopeScrollArea),
      r = Boolean(t.scrollbarX && t.scrollbarY);
    return 'scroll' !== t.type && r ? d.jsx(mw, l(s({}, e), { ref: n })) : null;
  });
hw.displayName = vw;
var mw = u.forwardRef((e, n) => {
  const t = e,
    { __scopeScrollArea: r } = t,
    o = c(t, ['__scopeScrollArea']),
    i = qg(vw, r),
    [a, p] = u.useState(0),
    [f, v] = u.useState(0),
    h = Boolean(a && f);
  return (
    Sw(i.scrollbarX, () => {
      var e;
      const n = (null == (e = i.scrollbarX) ? void 0 : e.offsetHeight) || 0;
      (i.onCornerHeightChange(n), v(n));
    }),
    Sw(i.scrollbarY, () => {
      var e;
      const n = (null == (e = i.scrollbarY) ? void 0 : e.offsetWidth) || 0;
      (i.onCornerWidthChange(n), p(n));
    }),
    h
      ? d.jsx(
          pe.div,
          l(s({}, o), {
            ref: n,
            style: s(
              {
                width: a,
                height: f,
                position: 'absolute',
                right: 'ltr' === i.dir ? 0 : void 0,
                left: 'rtl' === i.dir ? 0 : void 0,
                bottom: 0,
              },
              e.style,
            ),
          }),
        )
      : null
  );
});
function gw(e) {
  return e ? parseInt(e, 10) : 0;
}
function ww(e, n) {
  const t = e / n;
  return isNaN(t) ? 0 : t;
}
function yw(e) {
  const n = ww(e.viewport, e.content),
    t = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
    r = (e.scrollbar.size - t) * n;
  return Math.max(r, 18);
}
function bw(e, n, t = 'ltr') {
  const r = yw(n),
    o = n.scrollbar.paddingStart + n.scrollbar.paddingEnd,
    i = n.scrollbar.size - o,
    a = n.content - n.viewport,
    s = i - r,
    l = ba(e, 'ltr' === t ? [0, a] : [-1 * a, 0]);
  return xw([0, a], [0, s])(l);
}
function xw(e, n) {
  return (t) => {
    if (e[0] === e[1] || n[0] === n[1]) return n[0];
    const r = (n[1] - n[0]) / (e[1] - e[0]);
    return n[0] + r * (t - e[0]);
  };
}
function _w(e, n) {
  return e > 0 && e < n;
}
var Cw = (e, n = () => {}) => {
  let t = { left: e.scrollLeft, top: e.scrollTop },
    r = 0;
  return (
    (function o() {
      const i = { left: e.scrollLeft, top: e.scrollTop },
        a = t.left !== i.left,
        s = t.top !== i.top;
      ((a || s) && n(), (t = i), (r = window.requestAnimationFrame(o)));
    })(),
    () => window.cancelAnimationFrame(r)
  );
};
function Rw(e, n) {
  const t = ge(e),
    r = u.useRef(0);
  return (
    u.useEffect(() => () => window.clearTimeout(r.current), []),
    u.useCallback(() => {
      (window.clearTimeout(r.current), (r.current = window.setTimeout(t, n)));
    }, [t, n])
  );
}
function Sw(e, n) {
  const t = ge(n);
  fe(() => {
    let n = 0;
    if (e) {
      const r = new ResizeObserver(() => {
        (cancelAnimationFrame(n), (n = window.requestAnimationFrame(t)));
      });
      return (
        r.observe(e),
        () => {
          (window.cancelAnimationFrame(n), r.unobserve(e));
        }
      );
    }
  }, [e, t]);
}
var Ew = Zg,
  Pw = Qg,
  jw = hw;
export {
  ga as $,
  ta as _,
  sn as A,
  N as a,
  wa as a0,
  ya as a1,
  qt as a2,
  Ul as a3,
  Gl as a4,
  Jl as a5,
  zl as a6,
  Xl as a7,
  Yl as a8,
  ql as a9,
  pw as a_,
  im as aA,
  Zl as aa,
  om as aB,
  ec as ab,
  am as aC,
  tc as ac,
  rm as aD,
  nc as ad,
  nm as aE,
  Ql as ae,
  Lh as aF,
  rc as af,
  xm as aG,
  oc as ag,
  _m as aH,
  ic as ah,
  ng as aI,
  hc as ai,
  tg as aJ,
  mc as aj,
  rg as aK,
  hv as ak,
  og as aL,
  mv as al,
  gn as aM,
  gv as am,
  Bg as aN,
  wv as an,
  Ug as aO,
  bv as ao,
  zg as aP,
  Rv as ap,
  Dc as aQ,
  yv as aq,
  Rc as aR,
  Sv as ar,
  Ec as aS,
  Ev as as,
  la as aT,
  xv as at,
  ua as aU,
  Cv as au,
  va as aV,
  _v as av,
  Ew as aW,
  Jh as aw,
  Pw as aX,
  Qh as ax,
  jw as aY,
  em as ay,
  nw as aZ,
  tm as az,
  Uu as B,
  fe as b,
  ln as C,
  T as c,
  te as D,
  ye as d,
  zu as E,
  O as e,
  Ao as F,
  ir as f,
  Mo as G,
  he as g,
  lu as H,
  j as h,
  su as I,
  A as i,
  Ko as J,
  an as j,
  xo as K,
  nn as k,
  _o as L,
  Cn as l,
  Co as M,
  Zt as m,
  Ya as N,
  Qt as n,
  Jt as O,
  tr as o,
  pe as P,
  er as p,
  qa as Q,
  nr as q,
  rn as R,
  Yt as r,
  fn as S,
  ao as s,
  on as T,
  ro as t,
  Za as U,
  ge as u,
  tn as V,
  oo as v,
  Ja as W,
  io as w,
  ea as X,
  au as x,
  Qi as Y,
  cu as y,
  na as Z,
  uu as z,
};
//# sourceMappingURL=@radix-ui-BedUPMi8.js.map
