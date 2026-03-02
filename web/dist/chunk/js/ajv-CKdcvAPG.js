var e = Object.defineProperty,
  t = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  o = Math.pow,
  i = (t, r, a) =>
    r in t
      ? e(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (t[r] = a),
  c = (e, t) => {
    for (var r in t || (t = {})) n.call(t, r) && i(e, r, t[r]);
    if (a) for (var r of a(t)) s.call(t, r) && i(e, r, t[r]);
    return e;
  },
  d = (e, a) => t(e, r(a)),
  u = (e, t, r) =>
    new Promise((a, n) => {
      var s = (e) => {
          try {
            i(r.next(e));
          } catch (t) {
            n(t);
          }
        },
        o = (e) => {
          try {
            i(r.throw(e));
          } catch (t) {
            n(t);
          }
        },
        i = (e) => (e.done ? a(e.value) : Promise.resolve(e.value).then(s, o));
      i((r = r.apply(e, t)).next());
    });
import { n as l } from './@babel-IS4qnvsE.js';
import { r as f } from './fast-deep-equal-BAFRue17.js';
import { r as h } from './fast-uri-DQFWYZOE.js';
import { r as m } from './json-schema-traverse-BHxOLD4P.js';
var p,
  y = { exports: {} },
  $ = {},
  v = {},
  g = {},
  _ = {},
  w = {},
  b = {};
function P() {
  return (
    p ||
      ((p = 1),
      (function (e) {
        (Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.regexpCode =
            e.getEsmExportName =
            e.getProperty =
            e.safeStringify =
            e.stringify =
            e.strConcat =
            e.addCodeArg =
            e.str =
            e._ =
            e.nil =
            e._Code =
            e.Name =
            e.IDENTIFIER =
            e._CodeOrName =
              void 0));
        class t {}
        ((e._CodeOrName = t), (e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i));
        class r extends t {
          constructor(t) {
            if ((super(), !e.IDENTIFIER.test(t)))
              throw new Error('CodeGen: name must be a valid identifier');
            this.str = t;
          }
          toString() {
            return this.str;
          }
          emptyStr() {
            return !1;
          }
          get names() {
            return { [this.str]: 1 };
          }
        }
        e.Name = r;
        class a extends t {
          constructor(e) {
            (super(), (this._items = 'string' == typeof e ? [e] : e));
          }
          toString() {
            return this.str;
          }
          emptyStr() {
            if (this._items.length > 1) return !1;
            const e = this._items[0];
            return '' === e || '""' === e;
          }
          get str() {
            var e;
            return null !== (e = this._str) && void 0 !== e
              ? e
              : (this._str = this._items.reduce((e, t) => `${e}${t}`, ''));
          }
          get names() {
            var e;
            return null !== (e = this._names) && void 0 !== e
              ? e
              : (this._names = this._items.reduce(
                  (e, t) => (
                    t instanceof r && (e[t.str] = (e[t.str] || 0) + 1),
                    e
                  ),
                  {},
                ));
          }
        }
        function n(e, ...t) {
          const r = [e[0]];
          let n = 0;
          for (; n < t.length; ) (i(r, t[n]), r.push(e[++n]));
          return new a(r);
        }
        ((e._Code = a), (e.nil = new a('')), (e._ = n));
        const s = new a('+');
        function o(e, ...t) {
          const r = [d(e[0])];
          let n = 0;
          for (; n < t.length; ) (r.push(s), i(r, t[n]), r.push(s, d(e[++n])));
          return (
            (function (e) {
              let t = 1;
              for (; t < e.length - 1; ) {
                if (e[t] === s) {
                  const r = c(e[t - 1], e[t + 1]);
                  if (void 0 !== r) {
                    e.splice(t - 1, 3, r);
                    continue;
                  }
                  e[t++] = '+';
                }
                t++;
              }
            })(r),
            new a(r)
          );
        }
        function i(e, t) {
          var n;
          t instanceof a
            ? e.push(...t._items)
            : t instanceof r
              ? e.push(t)
              : e.push(
                  'number' == typeof (n = t) ||
                    'boolean' == typeof n ||
                    null === n
                    ? n
                    : d(Array.isArray(n) ? n.join(',') : n),
                );
        }
        function c(e, t) {
          if ('""' === t) return e;
          if ('""' === e) return t;
          if ('string' == typeof e) {
            if (t instanceof r || '"' !== e[e.length - 1]) return;
            return 'string' != typeof t
              ? `${e.slice(0, -1)}${t}"`
              : '"' === t[0]
                ? e.slice(0, -1) + t.slice(1)
                : void 0;
          }
          return 'string' != typeof t || '"' !== t[0] || e instanceof r
            ? void 0
            : `"${e}${t.slice(1)}`;
        }
        function d(e) {
          return JSON.stringify(e)
            .replace(/\u2028/g, '\\u2028')
            .replace(/\u2029/g, '\\u2029');
        }
        ((e.str = o),
          (e.addCodeArg = i),
          (e.strConcat = function (e, t) {
            return t.emptyStr() ? e : e.emptyStr() ? t : o`${e}${t}`;
          }),
          (e.stringify = function (e) {
            return new a(d(e));
          }),
          (e.safeStringify = d),
          (e.getProperty = function (t) {
            return 'string' == typeof t && e.IDENTIFIER.test(t)
              ? new a(`.${t}`)
              : n`[${t}]`;
          }),
          (e.getEsmExportName = function (t) {
            if ('string' == typeof t && e.IDENTIFIER.test(t))
              return new a(`${t}`);
            throw new Error(
              `CodeGen: invalid export name: ${t}, use explicit $id name mapping`,
            );
          }),
          (e.regexpCode = function (e) {
            return new a(e.toString());
          }));
      })(b)),
    b
  );
}
var E,
  S,
  k = {};
function N() {
  return (
    E ||
      ((E = 1),
      (function (e) {
        (Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.ValueScope =
            e.ValueScopeName =
            e.Scope =
            e.varKinds =
            e.UsedValueState =
              void 0));
        const t = P();
        class r extends Error {
          constructor(e) {
            (super(`CodeGen: "code" for ${e} not defined`),
              (this.value = e.value));
          }
        }
        var a, n;
        (((n = a || (e.UsedValueState = a = {}))[(n.Started = 0)] = 'Started'),
          (n[(n.Completed = 1)] = 'Completed'),
          (e.varKinds = {
            const: new t.Name('const'),
            let: new t.Name('let'),
            var: new t.Name('var'),
          }));
        class s {
          constructor({ prefixes: e, parent: t } = {}) {
            ((this._names = {}), (this._prefixes = e), (this._parent = t));
          }
          toName(e) {
            return e instanceof t.Name ? e : this.name(e);
          }
          name(e) {
            return new t.Name(this._newName(e));
          }
          _newName(e) {
            return `${e}${(this._names[e] || this._nameGroup(e)).index++}`;
          }
          _nameGroup(e) {
            var t, r;
            if (
              (null ===
                (r =
                  null === (t = this._parent) || void 0 === t
                    ? void 0
                    : t._prefixes) || void 0 === r
                ? void 0
                : r.has(e)) ||
              (this._prefixes && !this._prefixes.has(e))
            )
              throw new Error(
                `CodeGen: prefix "${e}" is not allowed in this scope`,
              );
            return (this._names[e] = { prefix: e, index: 0 });
          }
        }
        e.Scope = s;
        class o extends t.Name {
          constructor(e, t) {
            (super(t), (this.prefix = e));
          }
          setValue(e, { property: r, itemIndex: a }) {
            ((this.value = e), (this.scopePath = t._`.${new t.Name(r)}[${a}]`));
          }
        }
        e.ValueScopeName = o;
        const i = t._`\n`;
        e.ValueScope = class extends s {
          constructor(e) {
            (super(e),
              (this._values = {}),
              (this._scope = e.scope),
              (this.opts = d(c({}, e), { _n: e.lines ? i : t.nil })));
          }
          get() {
            return this._scope;
          }
          name(e) {
            return new o(e, this._newName(e));
          }
          value(e, t) {
            var r;
            if (void 0 === t.ref)
              throw new Error('CodeGen: ref must be passed in value');
            const a = this.toName(e),
              { prefix: n } = a,
              s = null !== (r = t.key) && void 0 !== r ? r : t.ref;
            let o = this._values[n];
            if (o) {
              const e = o.get(s);
              if (e) return e;
            } else o = this._values[n] = new Map();
            o.set(s, a);
            const i = this._scope[n] || (this._scope[n] = []),
              c = i.length;
            return (
              (i[c] = t.ref),
              a.setValue(t, { property: n, itemIndex: c }),
              a
            );
          }
          getValue(e, t) {
            const r = this._values[e];
            if (r) return r.get(t);
          }
          scopeRefs(e, r = this._values) {
            return this._reduceValues(r, (r) => {
              if (void 0 === r.scopePath)
                throw new Error(`CodeGen: name "${r}" has no value`);
              return t._`${e}${r.scopePath}`;
            });
          }
          scopeCode(e = this._values, t, r) {
            return this._reduceValues(
              e,
              (e) => {
                if (void 0 === e.value)
                  throw new Error(`CodeGen: name "${e}" has no value`);
                return e.value.code;
              },
              t,
              r,
            );
          }
          _reduceValues(n, s, o = {}, i) {
            let c = t.nil;
            for (const d in n) {
              const u = n[d];
              if (!u) continue;
              const l = (o[d] = o[d] || new Map());
              u.forEach((n) => {
                if (l.has(n)) return;
                l.set(n, a.Started);
                let o = s(n);
                if (o) {
                  const r = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
                  c = t._`${c}${r} ${n} = ${o};${this.opts._n}`;
                } else {
                  if (!(o = null == i ? void 0 : i(n))) throw new r(n);
                  c = t._`${c}${o}${this.opts._n}`;
                }
                l.set(n, a.Completed);
              });
            }
            return c;
          }
        };
      })(k)),
    k
  );
}
function j() {
  return (
    S ||
      ((S = 1),
      (function (e) {
        (Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.or =
            e.and =
            e.not =
            e.CodeGen =
            e.operators =
            e.varKinds =
            e.ValueScopeName =
            e.ValueScope =
            e.Scope =
            e.Name =
            e.regexpCode =
            e.stringify =
            e.getProperty =
            e.nil =
            e.strConcat =
            e.str =
            e._ =
              void 0));
        const t = P(),
          r = N();
        var a = P();
        (Object.defineProperty(e, '_', {
          enumerable: !0,
          get: function () {
            return a._;
          },
        }),
          Object.defineProperty(e, 'str', {
            enumerable: !0,
            get: function () {
              return a.str;
            },
          }),
          Object.defineProperty(e, 'strConcat', {
            enumerable: !0,
            get: function () {
              return a.strConcat;
            },
          }),
          Object.defineProperty(e, 'nil', {
            enumerable: !0,
            get: function () {
              return a.nil;
            },
          }),
          Object.defineProperty(e, 'getProperty', {
            enumerable: !0,
            get: function () {
              return a.getProperty;
            },
          }),
          Object.defineProperty(e, 'stringify', {
            enumerable: !0,
            get: function () {
              return a.stringify;
            },
          }),
          Object.defineProperty(e, 'regexpCode', {
            enumerable: !0,
            get: function () {
              return a.regexpCode;
            },
          }),
          Object.defineProperty(e, 'Name', {
            enumerable: !0,
            get: function () {
              return a.Name;
            },
          }));
        var n = N();
        (Object.defineProperty(e, 'Scope', {
          enumerable: !0,
          get: function () {
            return n.Scope;
          },
        }),
          Object.defineProperty(e, 'ValueScope', {
            enumerable: !0,
            get: function () {
              return n.ValueScope;
            },
          }),
          Object.defineProperty(e, 'ValueScopeName', {
            enumerable: !0,
            get: function () {
              return n.ValueScopeName;
            },
          }),
          Object.defineProperty(e, 'varKinds', {
            enumerable: !0,
            get: function () {
              return n.varKinds;
            },
          }),
          (e.operators = {
            GT: new t._Code('>'),
            GTE: new t._Code('>='),
            LT: new t._Code('<'),
            LTE: new t._Code('<='),
            EQ: new t._Code('==='),
            NEQ: new t._Code('!=='),
            NOT: new t._Code('!'),
            OR: new t._Code('||'),
            AND: new t._Code('&&'),
            ADD: new t._Code('+'),
          }));
        class s {
          optimizeNodes() {
            return this;
          }
          optimizeNames(e, t) {
            return this;
          }
        }
        class o extends s {
          constructor(e, t, r) {
            (super(), (this.varKind = e), (this.name = t), (this.rhs = r));
          }
          render({ es5: e, _n: t }) {
            const a = e ? r.varKinds.var : this.varKind,
              n = void 0 === this.rhs ? '' : ` = ${this.rhs}`;
            return `${a} ${this.name}${n};` + t;
          }
          optimizeNames(e, t) {
            if (e[this.name.str])
              return (this.rhs && (this.rhs = R(this.rhs, e, t)), this);
          }
          get names() {
            return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
          }
        }
        class i extends s {
          constructor(e, t, r) {
            (super(), (this.lhs = e), (this.rhs = t), (this.sideEffects = r));
          }
          render({ _n: e }) {
            return `${this.lhs} = ${this.rhs};` + e;
          }
          optimizeNames(e, r) {
            if (
              !(this.lhs instanceof t.Name) ||
              e[this.lhs.str] ||
              this.sideEffects
            )
              return ((this.rhs = R(this.rhs, e, r)), this);
          }
          get names() {
            return C(
              this.lhs instanceof t.Name ? {} : c({}, this.lhs.names),
              this.rhs,
            );
          }
        }
        class u extends i {
          constructor(e, t, r, a) {
            (super(e, r, a), (this.op = t));
          }
          render({ _n: e }) {
            return `${this.lhs} ${this.op}= ${this.rhs};` + e;
          }
        }
        class l extends s {
          constructor(e) {
            (super(), (this.label = e), (this.names = {}));
          }
          render({ _n: e }) {
            return `${this.label}:` + e;
          }
        }
        class f extends s {
          constructor(e) {
            (super(), (this.label = e), (this.names = {}));
          }
          render({ _n: e }) {
            return `break${this.label ? ` ${this.label}` : ''};` + e;
          }
        }
        class m extends s {
          constructor(e) {
            (super(), (this.error = e));
          }
          render({ _n: e }) {
            return `throw ${this.error};` + e;
          }
          get names() {
            return this.error.names;
          }
        }
        class h extends s {
          constructor(e) {
            (super(), (this.code = e));
          }
          render({ _n: e }) {
            return `${this.code};` + e;
          }
          optimizeNodes() {
            return `${this.code}` ? this : void 0;
          }
          optimizeNames(e, t) {
            return ((this.code = R(this.code, e, t)), this);
          }
          get names() {
            return this.code instanceof t._CodeOrName ? this.code.names : {};
          }
        }
        class p extends s {
          constructor(e = []) {
            (super(), (this.nodes = e));
          }
          render(e) {
            return this.nodes.reduce((t, r) => t + r.render(e), '');
          }
          optimizeNodes() {
            const { nodes: e } = this;
            let t = e.length;
            for (; t--; ) {
              const r = e[t].optimizeNodes();
              Array.isArray(r)
                ? e.splice(t, 1, ...r)
                : r
                  ? (e[t] = r)
                  : e.splice(t, 1);
            }
            return e.length > 0 ? this : void 0;
          }
          optimizeNames(e, t) {
            const { nodes: r } = this;
            let a = r.length;
            for (; a--; ) {
              const n = r[a];
              n.optimizeNames(e, t) || (I(e, n.names), r.splice(a, 1));
            }
            return r.length > 0 ? this : void 0;
          }
          get names() {
            return this.nodes.reduce((e, t) => T(e, t.names), {});
          }
        }
        class y extends p {
          render(e) {
            return '{' + e._n + super.render(e) + '}' + e._n;
          }
        }
        class $ extends p {}
        class v extends y {}
        v.kind = 'else';
        class g extends y {
          constructor(e, t) {
            (super(t), (this.condition = e));
          }
          render(e) {
            let t = `if(${this.condition})` + super.render(e);
            return (this.else && (t += 'else ' + this.else.render(e)), t);
          }
          optimizeNodes() {
            super.optimizeNodes();
            const e = this.condition;
            if (!0 === e) return this.nodes;
            let t = this.else;
            if (t) {
              const e = t.optimizeNodes();
              t = this.else = Array.isArray(e) ? new v(e) : e;
            }
            return t
              ? !1 === e
                ? t instanceof g
                  ? t
                  : t.nodes
                : this.nodes.length
                  ? this
                  : new g(M(e), t instanceof g ? [t] : t.nodes)
              : !1 !== e && this.nodes.length
                ? this
                : void 0;
          }
          optimizeNames(e, t) {
            var r;
            if (
              ((this.else =
                null === (r = this.else) || void 0 === r
                  ? void 0
                  : r.optimizeNames(e, t)),
              super.optimizeNames(e, t) || this.else)
            )
              return ((this.condition = R(this.condition, e, t)), this);
          }
          get names() {
            const e = super.names;
            return (
              C(e, this.condition),
              this.else && T(e, this.else.names),
              e
            );
          }
        }
        g.kind = 'if';
        class _ extends y {}
        _.kind = 'for';
        class w extends _ {
          constructor(e) {
            (super(), (this.iteration = e));
          }
          render(e) {
            return `for(${this.iteration})` + super.render(e);
          }
          optimizeNames(e, t) {
            if (super.optimizeNames(e, t))
              return ((this.iteration = R(this.iteration, e, t)), this);
          }
          get names() {
            return T(super.names, this.iteration.names);
          }
        }
        class b extends _ {
          constructor(e, t, r, a) {
            (super(),
              (this.varKind = e),
              (this.name = t),
              (this.from = r),
              (this.to = a));
          }
          render(e) {
            const t = e.es5 ? r.varKinds.var : this.varKind,
              { name: a, from: n, to: s } = this;
            return `for(${t} ${a}=${n}; ${a}<${s}; ${a}++)` + super.render(e);
          }
          get names() {
            const e = C(super.names, this.from);
            return C(e, this.to);
          }
        }
        class E extends _ {
          constructor(e, t, r, a) {
            (super(),
              (this.loop = e),
              (this.varKind = t),
              (this.name = r),
              (this.iterable = a));
          }
          render(e) {
            return (
              `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` +
              super.render(e)
            );
          }
          optimizeNames(e, t) {
            if (super.optimizeNames(e, t))
              return ((this.iterable = R(this.iterable, e, t)), this);
          }
          get names() {
            return T(super.names, this.iterable.names);
          }
        }
        class S extends y {
          constructor(e, t, r) {
            (super(), (this.name = e), (this.args = t), (this.async = r));
          }
          render(e) {
            return (
              `${this.async ? 'async ' : ''}function ${this.name}(${this.args})` +
              super.render(e)
            );
          }
        }
        S.kind = 'func';
        class k extends p {
          render(e) {
            return 'return ' + super.render(e);
          }
        }
        k.kind = 'return';
        class j extends y {
          render(e) {
            let t = 'try' + super.render(e);
            return (
              this.catch && (t += this.catch.render(e)),
              this.finally && (t += this.finally.render(e)),
              t
            );
          }
          optimizeNodes() {
            var e, t;
            return (
              super.optimizeNodes(),
              null === (e = this.catch) || void 0 === e || e.optimizeNodes(),
              null === (t = this.finally) || void 0 === t || t.optimizeNodes(),
              this
            );
          }
          optimizeNames(e, t) {
            var r, a;
            return (
              super.optimizeNames(e, t),
              null === (r = this.catch) ||
                void 0 === r ||
                r.optimizeNames(e, t),
              null === (a = this.finally) ||
                void 0 === a ||
                a.optimizeNames(e, t),
              this
            );
          }
          get names() {
            const e = super.names;
            return (
              this.catch && T(e, this.catch.names),
              this.finally && T(e, this.finally.names),
              e
            );
          }
        }
        class O extends y {
          constructor(e) {
            (super(), (this.error = e));
          }
          render(e) {
            return `catch(${this.error})` + super.render(e);
          }
        }
        O.kind = 'catch';
        class x extends y {
          render(e) {
            return 'finally' + super.render(e);
          }
        }
        x.kind = 'finally';
        function T(e, t) {
          for (const r in t) e[r] = (e[r] || 0) + (t[r] || 0);
          return e;
        }
        function C(e, r) {
          return r instanceof t._CodeOrName ? T(e, r.names) : e;
        }
        function R(e, r, a) {
          return e instanceof t.Name
            ? s(e)
            : (n = e) instanceof t._Code &&
                n._items.some(
                  (e) =>
                    e instanceof t.Name &&
                    1 === r[e.str] &&
                    void 0 !== a[e.str],
                )
              ? new t._Code(
                  e._items.reduce(
                    (e, r) => (
                      r instanceof t.Name && (r = s(r)),
                      r instanceof t._Code ? e.push(...r._items) : e.push(r),
                      e
                    ),
                    [],
                  ),
                )
              : e;
          var n;
          function s(e) {
            const t = a[e.str];
            return void 0 === t || 1 !== r[e.str] ? e : (delete r[e.str], t);
          }
        }
        function I(e, t) {
          for (const r in t) e[r] = (e[r] || 0) - (t[r] || 0);
        }
        function M(e) {
          return 'boolean' == typeof e || 'number' == typeof e || null === e
            ? !e
            : t._`!${V(e)}`;
        }
        ((e.CodeGen = class {
          constructor(e, t = {}) {
            ((this._values = {}),
              (this._blockStarts = []),
              (this._constants = {}),
              (this.opts = d(c({}, t), { _n: t.lines ? '\n' : '' })),
              (this._extScope = e),
              (this._scope = new r.Scope({ parent: e })),
              (this._nodes = [new $()]));
          }
          toString() {
            return this._root.render(this.opts);
          }
          name(e) {
            return this._scope.name(e);
          }
          scopeName(e) {
            return this._extScope.name(e);
          }
          scopeValue(e, t) {
            const r = this._extScope.value(e, t);
            return (
              (
                this._values[r.prefix] || (this._values[r.prefix] = new Set())
              ).add(r),
              r
            );
          }
          getScopeValue(e, t) {
            return this._extScope.getValue(e, t);
          }
          scopeRefs(e) {
            return this._extScope.scopeRefs(e, this._values);
          }
          scopeCode() {
            return this._extScope.scopeCode(this._values);
          }
          _def(e, t, r, a) {
            const n = this._scope.toName(t);
            return (
              void 0 !== r && a && (this._constants[n.str] = r),
              this._leafNode(new o(e, n, r)),
              n
            );
          }
          const(e, t, a) {
            return this._def(r.varKinds.const, e, t, a);
          }
          let(e, t, a) {
            return this._def(r.varKinds.let, e, t, a);
          }
          var(e, t, a) {
            return this._def(r.varKinds.var, e, t, a);
          }
          assign(e, t, r) {
            return this._leafNode(new i(e, t, r));
          }
          add(t, r) {
            return this._leafNode(new u(t, e.operators.ADD, r));
          }
          code(e) {
            return (
              'function' == typeof e
                ? e()
                : e !== t.nil && this._leafNode(new h(e)),
              this
            );
          }
          object(...e) {
            const r = ['{'];
            for (const [a, n] of e)
              (r.length > 1 && r.push(','),
                r.push(a),
                (a !== n || this.opts.es5) &&
                  (r.push(':'), (0, t.addCodeArg)(r, n)));
            return (r.push('}'), new t._Code(r));
          }
          if(e, t, r) {
            if ((this._blockNode(new g(e)), t && r))
              this.code(t).else().code(r).endIf();
            else if (t) this.code(t).endIf();
            else if (r)
              throw new Error('CodeGen: "else" body without "then" body');
            return this;
          }
          elseIf(e) {
            return this._elseNode(new g(e));
          }
          else() {
            return this._elseNode(new v());
          }
          endIf() {
            return this._endBlockNode(g, v);
          }
          _for(e, t) {
            return (this._blockNode(e), t && this.code(t).endFor(), this);
          }
          for(e, t) {
            return this._for(new w(e), t);
          }
          forRange(
            e,
            t,
            a,
            n,
            s = this.opts.es5 ? r.varKinds.var : r.varKinds.let,
          ) {
            const o = this._scope.toName(e);
            return this._for(new b(s, o, t, a), () => n(o));
          }
          forOf(e, a, n, s = r.varKinds.const) {
            const o = this._scope.toName(e);
            if (this.opts.es5) {
              const e = a instanceof t.Name ? a : this.var('_arr', a);
              return this.forRange('_i', 0, t._`${e}.length`, (r) => {
                (this.var(o, t._`${e}[${r}]`), n(o));
              });
            }
            return this._for(new E('of', s, o, a), () => n(o));
          }
          forIn(
            e,
            a,
            n,
            s = this.opts.es5 ? r.varKinds.var : r.varKinds.const,
          ) {
            if (this.opts.ownProperties)
              return this.forOf(e, t._`Object.keys(${a})`, n);
            const o = this._scope.toName(e);
            return this._for(new E('in', s, o, a), () => n(o));
          }
          endFor() {
            return this._endBlockNode(_);
          }
          label(e) {
            return this._leafNode(new l(e));
          }
          break(e) {
            return this._leafNode(new f(e));
          }
          return(e) {
            const t = new k();
            if ((this._blockNode(t), this.code(e), 1 !== t.nodes.length))
              throw new Error('CodeGen: "return" should have one node');
            return this._endBlockNode(k);
          }
          try(e, t, r) {
            if (!t && !r)
              throw new Error('CodeGen: "try" without "catch" and "finally"');
            const a = new j();
            if ((this._blockNode(a), this.code(e), t)) {
              const e = this.name('e');
              ((this._currNode = a.catch = new O(e)), t(e));
            }
            return (
              r && ((this._currNode = a.finally = new x()), this.code(r)),
              this._endBlockNode(O, x)
            );
          }
          throw(e) {
            return this._leafNode(new m(e));
          }
          block(e, t) {
            return (
              this._blockStarts.push(this._nodes.length),
              e && this.code(e).endBlock(t),
              this
            );
          }
          endBlock(e) {
            const t = this._blockStarts.pop();
            if (void 0 === t)
              throw new Error('CodeGen: not in self-balancing block');
            const r = this._nodes.length - t;
            if (r < 0 || (void 0 !== e && r !== e))
              throw new Error(
                `CodeGen: wrong number of nodes: ${r} vs ${e} expected`,
              );
            return ((this._nodes.length = t), this);
          }
          func(e, r = t.nil, a, n) {
            return (
              this._blockNode(new S(e, r, a)),
              n && this.code(n).endFunc(),
              this
            );
          }
          endFunc() {
            return this._endBlockNode(S);
          }
          optimize(e = 1) {
            for (; e-- > 0; )
              (this._root.optimizeNodes(),
                this._root.optimizeNames(this._root.names, this._constants));
          }
          _leafNode(e) {
            return (this._currNode.nodes.push(e), this);
          }
          _blockNode(e) {
            (this._currNode.nodes.push(e), this._nodes.push(e));
          }
          _endBlockNode(e, t) {
            const r = this._currNode;
            if (r instanceof e || (t && r instanceof t))
              return (this._nodes.pop(), this);
            throw new Error(
              `CodeGen: not in block "${t ? `${e.kind}/${t.kind}` : e.kind}"`,
            );
          }
          _elseNode(e) {
            const t = this._currNode;
            if (!(t instanceof g))
              throw new Error('CodeGen: "else" without "if"');
            return ((this._currNode = t.else = e), this);
          }
          get _root() {
            return this._nodes[0];
          }
          get _currNode() {
            const e = this._nodes;
            return e[e.length - 1];
          }
          set _currNode(e) {
            const t = this._nodes;
            t[t.length - 1] = e;
          }
        }),
          (e.not = M));
        const D = z(e.operators.AND);
        e.and = function (...e) {
          return e.reduce(D);
        };
        const A = z(e.operators.OR);
        function z(e) {
          return (r, a) =>
            r === t.nil ? a : a === t.nil ? r : t._`${V(r)} ${e} ${V(a)}`;
        }
        function V(e) {
          return e instanceof t.Name ? e : t._`(${e})`;
        }
        e.or = function (...e) {
          return e.reduce(A);
        };
      })(w)),
    w
  );
}
var O,
  x = {};
function T() {
  if (O) return x;
  ((O = 1),
    Object.defineProperty(x, '__esModule', { value: !0 }),
    (x.checkStrictMode =
      x.getErrorPath =
      x.Type =
      x.useFunc =
      x.setEvaluated =
      x.evaluatedPropsToName =
      x.mergeEvaluated =
      x.eachItem =
      x.unescapeJsonPointer =
      x.escapeJsonPointer =
      x.escapeFragment =
      x.unescapeFragment =
      x.schemaRefOrVal =
      x.schemaHasRulesButRef =
      x.schemaHasRules =
      x.checkUnknownRules =
      x.alwaysValidSchema =
      x.toHash =
        void 0));
  const e = j(),
    t = P();
  function r(e, t = e.schema) {
    const { opts: r, self: a } = e;
    if (!r.strictSchema) return;
    if ('boolean' == typeof t) return;
    const n = a.RULES.keywords;
    for (const s in t) n[s] || m(e, `unknown keyword: "${s}"`);
  }
  function a(e, t) {
    if ('boolean' == typeof e) return !e;
    for (const r in e) if (t[r]) return !0;
    return !1;
  }
  function n(e) {
    return 'number' == typeof e
      ? `${e}`
      : e.replace(/~/g, '~0').replace(/\//g, '~1');
  }
  function s(e) {
    return e.replace(/~1/g, '/').replace(/~0/g, '~');
  }
  function o({
    mergeNames: t,
    mergeToName: r,
    mergeValues: a,
    resultToName: n,
  }) {
    return (s, o, i, c) => {
      const d =
        void 0 === i
          ? o
          : i instanceof e.Name
            ? (o instanceof e.Name ? t(s, o, i) : r(s, o, i), i)
            : o instanceof e.Name
              ? (r(s, i, o), o)
              : a(o, i);
      return c !== e.Name || d instanceof e.Name ? d : n(s, d);
    };
  }
  function i(t, r) {
    if (!0 === r) return t.var('props', !0);
    const a = t.var('props', e._`{}`);
    return (void 0 !== r && d(t, a, r), a);
  }
  function d(t, r, a) {
    Object.keys(a).forEach((a) =>
      t.assign(e._`${r}${(0, e.getProperty)(a)}`, !0),
    );
  }
  ((x.toHash = function (e) {
    const t = {};
    for (const r of e) t[r] = !0;
    return t;
  }),
    (x.alwaysValidSchema = function (e, t) {
      return 'boolean' == typeof t
        ? t
        : 0 === Object.keys(t).length || (r(e, t), !a(t, e.self.RULES.all));
    }),
    (x.checkUnknownRules = r),
    (x.schemaHasRules = a),
    (x.schemaHasRulesButRef = function (e, t) {
      if ('boolean' == typeof e) return !e;
      for (const r in e) if ('$ref' !== r && t.all[r]) return !0;
      return !1;
    }),
    (x.schemaRefOrVal = function ({ topSchemaRef: t, schemaPath: r }, a, n, s) {
      if (!s) {
        if ('number' == typeof a || 'boolean' == typeof a) return a;
        if ('string' == typeof a) return e._`${a}`;
      }
      return e._`${t}${r}${(0, e.getProperty)(n)}`;
    }),
    (x.unescapeFragment = function (e) {
      return s(decodeURIComponent(e));
    }),
    (x.escapeFragment = function (e) {
      return encodeURIComponent(n(e));
    }),
    (x.escapeJsonPointer = n),
    (x.unescapeJsonPointer = s),
    (x.eachItem = function (e, t) {
      if (Array.isArray(e)) for (const r of e) t(r);
      else t(e);
    }),
    (x.mergeEvaluated = {
      props: o({
        mergeNames: (t, r, a) =>
          t.if(e._`${a} !== true && ${r} !== undefined`, () => {
            t.if(
              e._`${r} === true`,
              () => t.assign(a, !0),
              () =>
                t
                  .assign(a, e._`${a} || {}`)
                  .code(e._`Object.assign(${a}, ${r})`),
            );
          }),
        mergeToName: (t, r, a) =>
          t.if(e._`${a} !== true`, () => {
            !0 === r
              ? t.assign(a, !0)
              : (t.assign(a, e._`${a} || {}`), d(t, a, r));
          }),
        mergeValues: (e, t) => !0 === e || c(c({}, e), t),
        resultToName: i,
      }),
      items: o({
        mergeNames: (t, r, a) =>
          t.if(e._`${a} !== true && ${r} !== undefined`, () =>
            t.assign(a, e._`${r} === true ? true : ${a} > ${r} ? ${a} : ${r}`),
          ),
        mergeToName: (t, r, a) =>
          t.if(e._`${a} !== true`, () =>
            t.assign(a, !0 === r || e._`${a} > ${r} ? ${a} : ${r}`),
          ),
        mergeValues: (e, t) => !0 === e || Math.max(e, t),
        resultToName: (e, t) => e.var('items', t),
      }),
    }),
    (x.evaluatedPropsToName = i),
    (x.setEvaluated = d));
  const u = {};
  var l, f;
  function m(e, t, r = e.opts.strictSchema) {
    if (r) {
      if (((t = `strict mode: ${t}`), !0 === r)) throw new Error(t);
      e.self.logger.warn(t);
    }
  }
  return (
    (x.useFunc = function (e, r) {
      return e.scopeValue('func', {
        ref: r,
        code: u[r.code] || (u[r.code] = new t._Code(r.code)),
      });
    }),
    ((f = l || (x.Type = l = {}))[(f.Num = 0)] = 'Num'),
    (f[(f.Str = 1)] = 'Str'),
    (x.getErrorPath = function (t, r, a) {
      if (t instanceof e.Name) {
        const n = r === l.Num;
        return a
          ? n
            ? e._`"[" + ${t} + "]"`
            : e._`"['" + ${t} + "']"`
          : n
            ? e._`"/" + ${t}`
            : e._`"/" + ${t}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
      }
      return a ? (0, e.getProperty)(t).toString() : '/' + n(t);
    }),
    (x.checkStrictMode = m),
    x
  );
}
var C,
  R,
  I,
  M = {};
function D() {
  if (C) return M;
  ((C = 1), Object.defineProperty(M, '__esModule', { value: !0 }));
  const e = j(),
    t = {
      data: new e.Name('data'),
      valCxt: new e.Name('valCxt'),
      instancePath: new e.Name('instancePath'),
      parentData: new e.Name('parentData'),
      parentDataProperty: new e.Name('parentDataProperty'),
      rootData: new e.Name('rootData'),
      dynamicAnchors: new e.Name('dynamicAnchors'),
      vErrors: new e.Name('vErrors'),
      errors: new e.Name('errors'),
      this: new e.Name('this'),
      self: new e.Name('self'),
      scope: new e.Name('scope'),
      json: new e.Name('json'),
      jsonPos: new e.Name('jsonPos'),
      jsonLen: new e.Name('jsonLen'),
      jsonPart: new e.Name('jsonPart'),
    };
  return ((M.default = t), M);
}
function A() {
  return (
    R ||
      ((R = 1),
      (function (e) {
        (Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.extendErrors =
            e.resetErrorsCount =
            e.reportExtraError =
            e.reportError =
            e.keyword$DataError =
            e.keywordError =
              void 0));
        const t = j(),
          r = T(),
          a = D();
        function n(e, r) {
          const n = e.const('err', r);
          (e.if(
            t._`${a.default.vErrors} === null`,
            () => e.assign(a.default.vErrors, t._`[${n}]`),
            t._`${a.default.vErrors}.push(${n})`,
          ),
            e.code(t._`${a.default.errors}++`));
        }
        function s(e, r) {
          const { gen: a, validateName: n, schemaEnv: s } = e;
          s.$async
            ? a.throw(t._`new ${e.ValidationError}(${r})`)
            : (a.assign(t._`${n}.errors`, r), a.return(!1));
        }
        ((e.keywordError = {
          message: ({ keyword: e }) =>
            t.str`must pass "${e}" keyword validation`,
        }),
          (e.keyword$DataError = {
            message: ({ keyword: e, schemaType: r }) =>
              r
                ? t.str`"${e}" keyword must be ${r} ($data)`
                : t.str`"${e}" keyword is invalid ($data)`,
          }),
          (e.reportError = function (r, a = e.keywordError, o, c) {
            const { it: d } = r,
              { gen: u, compositeRule: l, allErrors: f } = d,
              m = i(r, a, o);
            (null != c ? c : l || f) ? n(u, m) : s(d, t._`[${m}]`);
          }),
          (e.reportExtraError = function (t, r = e.keywordError, o) {
            const { it: c } = t,
              { gen: d, compositeRule: u, allErrors: l } = c;
            (n(d, i(t, r, o)), u || l || s(c, a.default.vErrors));
          }),
          (e.resetErrorsCount = function (e, r) {
            (e.assign(a.default.errors, r),
              e.if(t._`${a.default.vErrors} !== null`, () =>
                e.if(
                  r,
                  () => e.assign(t._`${a.default.vErrors}.length`, r),
                  () => e.assign(a.default.vErrors, null),
                ),
              ));
          }),
          (e.extendErrors = function ({
            gen: e,
            keyword: r,
            schemaValue: n,
            data: s,
            errsCount: o,
            it: i,
          }) {
            if (void 0 === o) throw new Error('ajv implementation error');
            const c = e.name('err');
            e.forRange('i', o, a.default.errors, (o) => {
              (e.const(c, t._`${a.default.vErrors}[${o}]`),
                e.if(t._`${c}.instancePath === undefined`, () =>
                  e.assign(
                    t._`${c}.instancePath`,
                    (0, t.strConcat)(a.default.instancePath, i.errorPath),
                  ),
                ),
                e.assign(t._`${c}.schemaPath`, t.str`${i.errSchemaPath}/${r}`),
                i.opts.verbose &&
                  (e.assign(t._`${c}.schema`, n), e.assign(t._`${c}.data`, s)));
            });
          }));
        const o = {
          keyword: new t.Name('keyword'),
          schemaPath: new t.Name('schemaPath'),
          params: new t.Name('params'),
          propertyName: new t.Name('propertyName'),
          message: new t.Name('message'),
          schema: new t.Name('schema'),
          parentSchema: new t.Name('parentSchema'),
        };
        function i(e, r, n) {
          const { createErrors: s } = e.it;
          return !1 === s
            ? t._`{}`
            : (function (e, r, n = {}) {
                const { gen: s, it: i } = e,
                  u = [c(i, n), d(e, n)];
                return (
                  (function (e, { params: r, message: n }, s) {
                    const { keyword: i, data: c, schemaValue: d, it: u } = e,
                      {
                        opts: l,
                        propertyName: f,
                        topSchemaRef: m,
                        schemaPath: h,
                      } = u;
                    (s.push(
                      [o.keyword, i],
                      [o.params, 'function' == typeof r ? r(e) : r || t._`{}`],
                    ),
                      l.messages &&
                        s.push([o.message, 'function' == typeof n ? n(e) : n]));
                    l.verbose &&
                      s.push(
                        [o.schema, d],
                        [o.parentSchema, t._`${m}${h}`],
                        [a.default.data, c],
                      );
                    f && s.push([o.propertyName, f]);
                  })(e, r, u),
                  s.object(...u)
                );
              })(e, r, n);
        }
        function c({ errorPath: e }, { instancePath: n }) {
          const s = n ? t.str`${e}${(0, r.getErrorPath)(n, r.Type.Str)}` : e;
          return [
            a.default.instancePath,
            (0, t.strConcat)(a.default.instancePath, s),
          ];
        }
        function d(
          { keyword: e, it: { errSchemaPath: a } },
          { schemaPath: n, parentSchema: s },
        ) {
          let i = s ? a : t.str`${a}/${e}`;
          return (
            n && (i = t.str`${i}${(0, r.getErrorPath)(n, r.Type.Str)}`),
            [o.schemaPath, i]
          );
        }
      })(_)),
    _
  );
}
var z,
  V = {},
  F = {};
function K() {
  if (z) return F;
  ((z = 1),
    Object.defineProperty(F, '__esModule', { value: !0 }),
    (F.getRules = F.isJSONType = void 0));
  const e = new Set([
    'string',
    'number',
    'integer',
    'boolean',
    'null',
    'object',
    'array',
  ]);
  return (
    (F.isJSONType = function (t) {
      return 'string' == typeof t && e.has(t);
    }),
    (F.getRules = function () {
      const e = {
        number: { type: 'number', rules: [] },
        string: { type: 'string', rules: [] },
        array: { type: 'array', rules: [] },
        object: { type: 'object', rules: [] },
      };
      return {
        types: d(c({}, e), { integer: !0, boolean: !0, null: !0 }),
        rules: [{ rules: [] }, e.number, e.string, e.array, e.object],
        post: { rules: [] },
        all: {},
        keywords: {},
      };
    }),
    F
  );
}
var U,
  L,
  q = {};
function G() {
  if (U) return q;
  function e(e, r) {
    return r.rules.some((r) => t(e, r));
  }
  function t(e, t) {
    var r;
    return (
      void 0 !== e[t.keyword] ||
      (null === (r = t.definition.implements) || void 0 === r
        ? void 0
        : r.some((t) => void 0 !== e[t]))
    );
  }
  return (
    (U = 1),
    Object.defineProperty(q, '__esModule', { value: !0 }),
    (q.shouldUseRule = q.shouldUseGroup = q.schemaHasRulesForType = void 0),
    (q.schemaHasRulesForType = function ({ schema: t, self: r }, a) {
      const n = r.RULES.types[a];
      return n && !0 !== n && e(t, n);
    }),
    (q.shouldUseGroup = e),
    (q.shouldUseRule = t),
    q
  );
}
function J() {
  if (L) return V;
  ((L = 1),
    Object.defineProperty(V, '__esModule', { value: !0 }),
    (V.reportTypeError =
      V.checkDataTypes =
      V.checkDataType =
      V.coerceAndCheckDataType =
      V.getJSONTypes =
      V.getSchemaTypes =
      V.DataType =
        void 0));
  const e = K(),
    t = G(),
    r = A(),
    a = j(),
    n = T();
  var s, o;
  function i(t) {
    const r = Array.isArray(t) ? t : t ? [t] : [];
    if (r.every(e.isJSONType)) return r;
    throw new Error('type must be JSONType or JSONType[]: ' + r.join(','));
  }
  (((o = s || (V.DataType = s = {}))[(o.Correct = 0)] = 'Correct'),
    (o[(o.Wrong = 1)] = 'Wrong'),
    (V.getSchemaTypes = function (e) {
      const t = i(e.type);
      if (t.includes('null')) {
        if (!1 === e.nullable)
          throw new Error('type: null contradicts nullable: false');
      } else {
        if (!t.length && void 0 !== e.nullable)
          throw new Error('"nullable" cannot be used without "type"');
        !0 === e.nullable && t.push('null');
      }
      return t;
    }),
    (V.getJSONTypes = i),
    (V.coerceAndCheckDataType = function (e, r) {
      const { gen: n, data: o, opts: i } = e,
        d = (function (e, t) {
          return t
            ? e.filter((e) => c.has(e) || ('array' === t && 'array' === e))
            : [];
        })(r, i.coerceTypes),
        l =
          r.length > 0 &&
          !(
            0 === d.length &&
            1 === r.length &&
            (0, t.schemaHasRulesForType)(e, r[0])
          );
      if (l) {
        const t = u(r, o, i.strictNumbers, s.Wrong);
        n.if(t, () => {
          d.length
            ? (function (e, t, r) {
                const { gen: n, data: s, opts: o } = e,
                  i = n.let('dataType', a._`typeof ${s}`),
                  d = n.let('coerced', a._`undefined`);
                'array' === o.coerceTypes &&
                  n.if(
                    a._`${i} == 'object' && Array.isArray(${s}) && ${s}.length == 1`,
                    () =>
                      n
                        .assign(s, a._`${s}[0]`)
                        .assign(i, a._`typeof ${s}`)
                        .if(u(t, s, o.strictNumbers), () => n.assign(d, s)),
                  );
                n.if(a._`${d} !== undefined`);
                for (const a of r)
                  (c.has(a) || ('array' === a && 'array' === o.coerceTypes)) &&
                    l(a);
                function l(e) {
                  switch (e) {
                    case 'string':
                      return void n
                        .elseIf(a._`${i} == "number" || ${i} == "boolean"`)
                        .assign(d, a._`"" + ${s}`)
                        .elseIf(a._`${s} === null`)
                        .assign(d, a._`""`);
                    case 'number':
                      return void n
                        .elseIf(
                          a._`${i} == "boolean" || ${s} === null
              || (${i} == "string" && ${s} && ${s} == +${s})`,
                        )
                        .assign(d, a._`+${s}`);
                    case 'integer':
                      return void n
                        .elseIf(
                          a._`${i} === "boolean" || ${s} === null
              || (${i} === "string" && ${s} && ${s} == +${s} && !(${s} % 1))`,
                        )
                        .assign(d, a._`+${s}`);
                    case 'boolean':
                      return void n
                        .elseIf(
                          a._`${s} === "false" || ${s} === 0 || ${s} === null`,
                        )
                        .assign(d, !1)
                        .elseIf(a._`${s} === "true" || ${s} === 1`)
                        .assign(d, !0);
                    case 'null':
                      return (
                        n.elseIf(
                          a._`${s} === "" || ${s} === 0 || ${s} === false`,
                        ),
                        void n.assign(d, null)
                      );
                    case 'array':
                      n.elseIf(
                        a._`${i} === "string" || ${i} === "number"
              || ${i} === "boolean" || ${s} === null`,
                      ).assign(d, a._`[${s}]`);
                  }
                }
                (n.else(),
                  f(e),
                  n.endIf(),
                  n.if(a._`${d} !== undefined`, () => {
                    (n.assign(s, d),
                      (function (
                        { gen: e, parentData: t, parentDataProperty: r },
                        n,
                      ) {
                        e.if(a._`${t} !== undefined`, () =>
                          e.assign(a._`${t}[${r}]`, n),
                        );
                      })(e, d));
                  }));
              })(e, r, d)
            : f(e);
        });
      }
      return l;
    }));
  const c = new Set(['string', 'number', 'integer', 'boolean', 'null']);
  function d(e, t, r, n = s.Correct) {
    const o = n === s.Correct ? a.operators.EQ : a.operators.NEQ;
    let i;
    switch (e) {
      case 'null':
        return a._`${t} ${o} null`;
      case 'array':
        i = a._`Array.isArray(${t})`;
        break;
      case 'object':
        i = a._`${t} && typeof ${t} == "object" && !Array.isArray(${t})`;
        break;
      case 'integer':
        i = c(a._`!(${t} % 1) && !isNaN(${t})`);
        break;
      case 'number':
        i = c();
        break;
      default:
        return a._`typeof ${t} ${o} ${e}`;
    }
    return n === s.Correct ? i : (0, a.not)(i);
    function c(e = a.nil) {
      return (0, a.and)(
        a._`typeof ${t} == "number"`,
        e,
        r ? a._`isFinite(${t})` : a.nil,
      );
    }
  }
  function u(e, t, r, s) {
    if (1 === e.length) return d(e[0], t, r, s);
    let o;
    const i = (0, n.toHash)(e);
    if (i.array && i.object) {
      const e = a._`typeof ${t} != "object"`;
      ((o = i.null ? e : a._`!${t} || ${e}`),
        delete i.null,
        delete i.array,
        delete i.object);
    } else o = a.nil;
    i.number && delete i.integer;
    for (const n in i) o = (0, a.and)(o, d(n, t, r, s));
    return o;
  }
  ((V.checkDataType = d), (V.checkDataTypes = u));
  const l = {
    message: ({ schema: e }) => `must be ${e}`,
    params: ({ schema: e, schemaValue: t }) =>
      'string' == typeof e ? a._`{type: ${e}}` : a._`{type: ${t}}`,
  };
  function f(e) {
    const t = (function (e) {
      const { gen: t, data: r, schema: a } = e,
        s = (0, n.schemaRefOrVal)(e, a, 'type');
      return {
        gen: t,
        keyword: 'type',
        data: r,
        schema: a.type,
        schemaCode: s,
        schemaValue: s,
        parentSchema: a,
        params: {},
        it: e,
      };
    })(e);
    (0, r.reportError)(t, l);
  }
  return ((V.reportTypeError = f), V);
}
var B,
  H = {};
var W,
  Q,
  Z = {},
  Y = {};
function X() {
  if (W) return Y;
  ((W = 1),
    Object.defineProperty(Y, '__esModule', { value: !0 }),
    (Y.validateUnion =
      Y.validateArray =
      Y.usePattern =
      Y.callValidateCode =
      Y.schemaProperties =
      Y.allSchemaProperties =
      Y.noPropertyInData =
      Y.propertyInData =
      Y.isOwnProperty =
      Y.hasPropFunc =
      Y.reportMissingProp =
      Y.checkMissingProp =
      Y.checkReportMissingProp =
        void 0));
  const e = j(),
    t = T(),
    r = D(),
    a = T();
  function n(t) {
    return t.scopeValue('func', {
      ref: Object.prototype.hasOwnProperty,
      code: e._`Object.prototype.hasOwnProperty`,
    });
  }
  function s(t, r, a) {
    return e._`${n(t)}.call(${r}, ${a})`;
  }
  function o(t, r, a, n) {
    const o = e._`${r}${(0, e.getProperty)(a)} === undefined`;
    return n ? (0, e.or)(o, (0, e.not)(s(t, r, a))) : o;
  }
  function i(e) {
    return e ? Object.keys(e).filter((e) => '__proto__' !== e) : [];
  }
  ((Y.checkReportMissingProp = function (t, r) {
    const { gen: a, data: n, it: s } = t;
    a.if(o(a, n, r, s.opts.ownProperties), () => {
      (t.setParams({ missingProperty: e._`${r}` }, !0), t.error());
    });
  }),
    (Y.checkMissingProp = function (
      { gen: t, data: r, it: { opts: a } },
      n,
      s,
    ) {
      return (0, e.or)(
        ...n.map((n) =>
          (0, e.and)(o(t, r, n, a.ownProperties), e._`${s} = ${n}`),
        ),
      );
    }),
    (Y.reportMissingProp = function (e, t) {
      (e.setParams({ missingProperty: t }, !0), e.error());
    }),
    (Y.hasPropFunc = n),
    (Y.isOwnProperty = s),
    (Y.propertyInData = function (t, r, a, n) {
      const o = e._`${r}${(0, e.getProperty)(a)} !== undefined`;
      return n ? e._`${o} && ${s(t, r, a)}` : o;
    }),
    (Y.noPropertyInData = o),
    (Y.allSchemaProperties = i),
    (Y.schemaProperties = function (e, r) {
      return i(r).filter((a) => !(0, t.alwaysValidSchema)(e, r[a]));
    }),
    (Y.callValidateCode = function (
      {
        schemaCode: t,
        data: a,
        it: { gen: n, topSchemaRef: s, schemaPath: o, errorPath: i },
        it: c,
      },
      d,
      u,
      l,
    ) {
      const f = l ? e._`${t}, ${a}, ${s}${o}` : a,
        m = [
          [r.default.instancePath, (0, e.strConcat)(r.default.instancePath, i)],
          [r.default.parentData, c.parentData],
          [r.default.parentDataProperty, c.parentDataProperty],
          [r.default.rootData, r.default.rootData],
        ];
      c.opts.dynamicRef &&
        m.push([r.default.dynamicAnchors, r.default.dynamicAnchors]);
      const h = e._`${f}, ${n.object(...m)}`;
      return u !== e.nil ? e._`${d}.call(${u}, ${h})` : e._`${d}(${h})`;
    }));
  const c = e._`new RegExp`;
  return (
    (Y.usePattern = function ({ gen: t, it: { opts: r } }, n) {
      const s = r.unicodeRegExp ? 'u' : '',
        { regExp: o } = r.code,
        i = o(n, s);
      return t.scopeValue('pattern', {
        key: i.toString(),
        ref: i,
        code: e._`${'new RegExp' === o.code ? c : (0, a.useFunc)(t, o)}(${n}, ${s})`,
      });
    }),
    (Y.validateArray = function (r) {
      const { gen: a, data: n, keyword: s, it: o } = r,
        i = a.name('valid');
      if (o.allErrors) {
        const e = a.let('valid', !0);
        return (c(() => a.assign(e, !1)), e);
      }
      return (a.var(i, !0), c(() => a.break()), i);
      function c(o) {
        const c = a.const('len', e._`${n}.length`);
        a.forRange('i', 0, c, (n) => {
          (r.subschema(
            { keyword: s, dataProp: n, dataPropType: t.Type.Num },
            i,
          ),
            a.if((0, e.not)(i), o));
        });
      }
    }),
    (Y.validateUnion = function (r) {
      const { gen: a, schema: n, keyword: s, it: o } = r;
      if (!Array.isArray(n)) throw new Error('ajv implementation error');
      if (n.some((e) => (0, t.alwaysValidSchema)(o, e)) && !o.opts.unevaluated)
        return;
      const i = a.let('valid', !1),
        c = a.name('_valid');
      (a.block(() =>
        n.forEach((t, n) => {
          const o = r.subschema(
            { keyword: s, schemaProp: n, compositeRule: !0 },
            c,
          );
          a.assign(i, e._`${i} || ${c}`);
          r.mergeValidEvaluated(o, c) || a.if((0, e.not)(i));
        }),
      ),
        r.result(
          i,
          () => r.reset(),
          () => r.error(!0),
        ));
    }),
    Y
  );
}
function ee() {
  if (Q) return Z;
  ((Q = 1),
    Object.defineProperty(Z, '__esModule', { value: !0 }),
    (Z.validateKeywordUsage =
      Z.validSchemaType =
      Z.funcKeywordCode =
      Z.macroKeywordCode =
        void 0));
  const e = j(),
    t = D(),
    r = X(),
    a = A();
  function n(t) {
    const { gen: r, data: a, it: n } = t;
    r.if(n.parentData, () =>
      r.assign(a, e._`${n.parentData}[${n.parentDataProperty}]`),
    );
  }
  function s(t, r, a) {
    if (void 0 === a) throw new Error(`keyword "${r}" failed to compile`);
    return t.scopeValue(
      'keyword',
      'function' == typeof a
        ? { ref: a }
        : { ref: a, code: (0, e.stringify)(a) },
    );
  }
  return (
    (Z.macroKeywordCode = function (t, r) {
      const { gen: a, keyword: n, schema: o, parentSchema: i, it: c } = t,
        d = r.macro.call(c.self, o, i, c),
        u = s(a, n, d);
      !1 !== c.opts.validateSchema && c.self.validateSchema(d, !0);
      const l = a.name('valid');
      (t.subschema(
        {
          schema: d,
          schemaPath: e.nil,
          errSchemaPath: `${c.errSchemaPath}/${n}`,
          topSchemaRef: u,
          compositeRule: !0,
        },
        l,
      ),
        t.pass(l, () => t.error(!0)));
    }),
    (Z.funcKeywordCode = function (o, i) {
      var c;
      const {
        gen: d,
        keyword: u,
        schema: l,
        parentSchema: f,
        $data: m,
        it: h,
      } = o;
      !(function ({ schemaEnv: e }, t) {
        if (t.async && !e.$async)
          throw new Error('async keyword in sync schema');
      })(h, i);
      const p = !m && i.compile ? i.compile.call(h.self, l, f, h) : i.validate,
        y = s(d, u, p),
        $ = d.let('valid');
      function v(a = i.async ? e._`await ` : e.nil) {
        const n = h.opts.passContext ? t.default.this : t.default.self,
          s = !(('compile' in i && !m) || !1 === i.schema);
        d.assign(
          $,
          e._`${a}${(0, r.callValidateCode)(o, y, n, s)}`,
          i.modifying,
        );
      }
      function g(t) {
        var r;
        d.if((0, e.not)(null !== (r = i.valid) && void 0 !== r ? r : $), t);
      }
      (o.block$data($, function () {
        if (!1 === i.errors) (v(), i.modifying && n(o), g(() => o.error()));
        else {
          const r = i.async
            ? (function () {
                const t = d.let('ruleErrs', null);
                return (
                  d.try(
                    () => v(e._`await `),
                    (r) =>
                      d.assign($, !1).if(
                        e._`${r} instanceof ${h.ValidationError}`,
                        () => d.assign(t, e._`${r}.errors`),
                        () => d.throw(r),
                      ),
                  ),
                  t
                );
              })()
            : (function () {
                const t = e._`${y}.errors`;
                return (d.assign(t, null), v(e.nil), t);
              })();
          (i.modifying && n(o),
            g(() =>
              (function (r, n) {
                const { gen: s } = r;
                s.if(
                  e._`Array.isArray(${n})`,
                  () => {
                    (s
                      .assign(
                        t.default.vErrors,
                        e._`${t.default.vErrors} === null ? ${n} : ${t.default.vErrors}.concat(${n})`,
                      )
                      .assign(
                        t.default.errors,
                        e._`${t.default.vErrors}.length`,
                      ),
                      (0, a.extendErrors)(r));
                  },
                  () => r.error(),
                );
              })(o, r),
            ));
        }
      }),
        o.ok(null !== (c = i.valid) && void 0 !== c ? c : $));
    }),
    (Z.validSchemaType = function (e, t, r = !1) {
      return (
        !t.length ||
        t.some((t) =>
          'array' === t
            ? Array.isArray(e)
            : 'object' === t
              ? e && 'object' == typeof e && !Array.isArray(e)
              : typeof e == t || (r && void 0 === e),
        )
      );
    }),
    (Z.validateKeywordUsage = function (
      { schema: e, opts: t, self: r, errSchemaPath: a },
      n,
      s,
    ) {
      if (Array.isArray(n.keyword) ? !n.keyword.includes(s) : n.keyword !== s)
        throw new Error('ajv implementation error');
      const o = n.dependencies;
      if (
        null == o
          ? void 0
          : o.some((t) => !Object.prototype.hasOwnProperty.call(e, t))
      )
        throw new Error(
          `parent schema must have dependencies of ${s}: ${o.join(',')}`,
        );
      if (n.validateSchema) {
        if (!n.validateSchema(e[s])) {
          const e =
            `keyword "${s}" value is invalid at path "${a}": ` +
            r.errorsText(n.validateSchema.errors);
          if ('log' !== t.validateSchema) throw new Error(e);
          r.logger.error(e);
        }
      }
    }),
    Z
  );
}
var te,
  re = {};
var ae,
  ne,
  se = {};
function oe() {
  if (ae) return se;
  ((ae = 1),
    Object.defineProperty(se, '__esModule', { value: !0 }),
    (se.getSchemaRefs =
      se.resolveUrl =
      se.normalizeId =
      se._getFullPath =
      se.getFullPath =
      se.inlineRef =
        void 0));
  const e = T(),
    t = f(),
    r = m(),
    a = new Set([
      'type',
      'format',
      'pattern',
      'maxLength',
      'minLength',
      'maxProperties',
      'minProperties',
      'maxItems',
      'minItems',
      'maximum',
      'minimum',
      'uniqueItems',
      'multipleOf',
      'required',
      'enum',
      'const',
    ]);
  se.inlineRef = function (e, t = !0) {
    return 'boolean' == typeof e || (!0 === t ? !s(e) : !!t && o(e) <= t);
  };
  const n = new Set([
    '$ref',
    '$recursiveRef',
    '$recursiveAnchor',
    '$dynamicRef',
    '$dynamicAnchor',
  ]);
  function s(e) {
    for (const t in e) {
      if (n.has(t)) return !0;
      const r = e[t];
      if (Array.isArray(r) && r.some(s)) return !0;
      if ('object' == typeof r && s(r)) return !0;
    }
    return !1;
  }
  function o(t) {
    let r = 0;
    for (const n in t) {
      if ('$ref' === n) return 1 / 0;
      if (
        (r++,
        !a.has(n) &&
          ('object' == typeof t[n] && (0, e.eachItem)(t[n], (e) => (r += o(e))),
          r === 1 / 0))
      )
        return 1 / 0;
    }
    return r;
  }
  function i(e, t = '', r) {
    !1 !== r && (t = u(t));
    const a = e.parse(t);
    return c(e, a);
  }
  function c(e, t) {
    return e.serialize(t).split('#')[0] + '#';
  }
  ((se.getFullPath = i), (se._getFullPath = c));
  const d = /#\/?$/;
  function u(e) {
    return e ? e.replace(d, '') : '';
  }
  ((se.normalizeId = u),
    (se.resolveUrl = function (e, t, r) {
      return ((r = u(r)), e.resolve(t, r));
    }));
  const l = /^[a-z_][-a-z0-9._]*$/i;
  return (
    (se.getSchemaRefs = function (e, a) {
      if ('boolean' == typeof e) return {};
      const { schemaId: n, uriResolver: s } = this.opts,
        o = u(e[n] || a),
        c = { '': o },
        d = i(s, o, !1),
        f = {},
        m = new Set();
      return (
        r(e, { allKeys: !0 }, (e, t, r, a) => {
          if (void 0 === a) return;
          const s = d + t;
          let o = c[a];
          function i(t) {
            const r = this.opts.uriResolver.resolve;
            if (((t = u(o ? r(o, t) : t)), m.has(t))) throw p(t);
            m.add(t);
            let a = this.refs[t];
            return (
              'string' == typeof a && (a = this.refs[a]),
              'object' == typeof a
                ? h(e, a.schema, t)
                : t !== u(s) &&
                  ('#' === t[0]
                    ? (h(e, f[t], t), (f[t] = e))
                    : (this.refs[t] = s)),
              t
            );
          }
          function y(e) {
            if ('string' == typeof e) {
              if (!l.test(e)) throw new Error(`invalid anchor "${e}"`);
              i.call(this, `#${e}`);
            }
          }
          ('string' == typeof e[n] && (o = i.call(this, e[n])),
            y.call(this, e.$anchor),
            y.call(this, e.$dynamicAnchor),
            (c[t] = o));
        }),
        f
      );
      function h(e, r, a) {
        if (void 0 !== r && !t(e, r)) throw p(a);
      }
      function p(e) {
        return new Error(`reference "${e}" resolves to more than one schema`);
      }
    }),
    se
  );
}
function ie() {
  if (ne) return v;
  ((ne = 1),
    Object.defineProperty(v, '__esModule', { value: !0 }),
    (v.getData = v.KeywordCxt = v.validateFunctionCode = void 0));
  const e = (function () {
      if (I) return g;
      ((I = 1),
        Object.defineProperty(g, '__esModule', { value: !0 }),
        (g.boolOrEmptySchema = g.topBoolOrEmptySchema = void 0));
      const e = A(),
        t = j(),
        r = D(),
        a = { message: 'boolean schema is false' };
      function n(t, r) {
        const { gen: n, data: s } = t,
          o = {
            gen: n,
            keyword: 'false schema',
            data: s,
            schema: !1,
            schemaCode: !1,
            schemaValue: !1,
            params: {},
            it: t,
          };
        (0, e.reportError)(o, a, void 0, r);
      }
      return (
        (g.topBoolOrEmptySchema = function (e) {
          const { gen: a, schema: s, validateName: o } = e;
          !1 === s
            ? n(e, !1)
            : 'object' == typeof s && !0 === s.$async
              ? a.return(r.default.data)
              : (a.assign(t._`${o}.errors`, null), a.return(!0));
        }),
        (g.boolOrEmptySchema = function (e, t) {
          const { gen: r, schema: a } = e;
          !1 === a ? (r.var(t, !1), n(e)) : r.var(t, !0);
        }),
        g
      );
    })(),
    t = J(),
    r = G(),
    a = J(),
    n = (function () {
      if (B) return H;
      ((B = 1),
        Object.defineProperty(H, '__esModule', { value: !0 }),
        (H.assignDefaults = void 0));
      const e = j(),
        t = T();
      function r(r, a, n) {
        const { gen: s, compositeRule: o, data: i, opts: c } = r;
        if (void 0 === n) return;
        const d = e._`${i}${(0, e.getProperty)(a)}`;
        if (o)
          return void (0, t.checkStrictMode)(r, `default is ignored for: ${d}`);
        let u = e._`${d} === undefined`;
        ('empty' === c.useDefaults &&
          (u = e._`${u} || ${d} === null || ${d} === ""`),
          s.if(u, e._`${d} = ${(0, e.stringify)(n)}`));
      }
      return (
        (H.assignDefaults = function (e, t) {
          const { properties: a, items: n } = e.schema;
          if ('object' === t && a) for (const s in a) r(e, s, a[s].default);
          else
            'array' === t &&
              Array.isArray(n) &&
              n.forEach((t, a) => r(e, a, t.default));
        }),
        H
      );
    })(),
    s = ee(),
    o = (function () {
      if (te) return re;
      ((te = 1),
        Object.defineProperty(re, '__esModule', { value: !0 }),
        (re.extendSubschemaMode =
          re.extendSubschemaData =
          re.getSubschema =
            void 0));
      const e = j(),
        t = T();
      return (
        (re.getSubschema = function (
          r,
          {
            keyword: a,
            schemaProp: n,
            schema: s,
            schemaPath: o,
            errSchemaPath: i,
            topSchemaRef: c,
          },
        ) {
          if (void 0 !== a && void 0 !== s)
            throw new Error(
              'both "keyword" and "schema" passed, only one allowed',
            );
          if (void 0 !== a) {
            const s = r.schema[a];
            return void 0 === n
              ? {
                  schema: s,
                  schemaPath: e._`${r.schemaPath}${(0, e.getProperty)(a)}`,
                  errSchemaPath: `${r.errSchemaPath}/${a}`,
                }
              : {
                  schema: s[n],
                  schemaPath: e._`${r.schemaPath}${(0, e.getProperty)(a)}${(0, e.getProperty)(n)}`,
                  errSchemaPath: `${r.errSchemaPath}/${a}/${(0, t.escapeFragment)(n)}`,
                };
          }
          if (void 0 !== s) {
            if (void 0 === o || void 0 === i || void 0 === c)
              throw new Error(
                '"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"',
              );
            return {
              schema: s,
              schemaPath: o,
              topSchemaRef: c,
              errSchemaPath: i,
            };
          }
          throw new Error('either "keyword" or "schema" must be passed');
        }),
        (re.extendSubschemaData = function (
          r,
          a,
          {
            dataProp: n,
            dataPropType: s,
            data: o,
            dataTypes: i,
            propertyName: c,
          },
        ) {
          if (void 0 !== o && void 0 !== n)
            throw new Error(
              'both "data" and "dataProp" passed, only one allowed',
            );
          const { gen: d } = a;
          if (void 0 !== n) {
            const { errorPath: o, dataPathArr: i, opts: c } = a;
            (u(d.let('data', e._`${a.data}${(0, e.getProperty)(n)}`, !0)),
              (r.errorPath = e.str`${o}${(0, t.getErrorPath)(n, s, c.jsPropertySyntax)}`),
              (r.parentDataProperty = e._`${n}`),
              (r.dataPathArr = [...i, r.parentDataProperty]));
          }
          function u(e) {
            ((r.data = e),
              (r.dataLevel = a.dataLevel + 1),
              (r.dataTypes = []),
              (a.definedProperties = new Set()),
              (r.parentData = a.data),
              (r.dataNames = [...a.dataNames, e]));
          }
          (void 0 !== o &&
            (u(o instanceof e.Name ? o : d.let('data', o, !0)),
            void 0 !== c && (r.propertyName = c)),
            i && (r.dataTypes = i));
        }),
        (re.extendSubschemaMode = function (
          e,
          {
            jtdDiscriminator: t,
            jtdMetadata: r,
            compositeRule: a,
            createErrors: n,
            allErrors: s,
          },
        ) {
          (void 0 !== a && (e.compositeRule = a),
            void 0 !== n && (e.createErrors = n),
            void 0 !== s && (e.allErrors = s),
            (e.jtdDiscriminator = t),
            (e.jtdMetadata = r));
        }),
        re
      );
    })(),
    i = j(),
    u = D(),
    l = oe(),
    f = T(),
    m = A();
  function h({ gen: e, validateName: t, schema: r, schemaEnv: a, opts: n }, s) {
    n.code.es5
      ? e.func(t, i._`${u.default.data}, ${u.default.valCxt}`, a.$async, () => {
          (e.code(i._`"use strict"; ${p(r, n)}`),
            (function (e, t) {
              e.if(
                u.default.valCxt,
                () => {
                  (e.var(
                    u.default.instancePath,
                    i._`${u.default.valCxt}.${u.default.instancePath}`,
                  ),
                    e.var(
                      u.default.parentData,
                      i._`${u.default.valCxt}.${u.default.parentData}`,
                    ),
                    e.var(
                      u.default.parentDataProperty,
                      i._`${u.default.valCxt}.${u.default.parentDataProperty}`,
                    ),
                    e.var(
                      u.default.rootData,
                      i._`${u.default.valCxt}.${u.default.rootData}`,
                    ),
                    t.dynamicRef &&
                      e.var(
                        u.default.dynamicAnchors,
                        i._`${u.default.valCxt}.${u.default.dynamicAnchors}`,
                      ));
                },
                () => {
                  (e.var(u.default.instancePath, i._`""`),
                    e.var(u.default.parentData, i._`undefined`),
                    e.var(u.default.parentDataProperty, i._`undefined`),
                    e.var(u.default.rootData, u.default.data),
                    t.dynamicRef && e.var(u.default.dynamicAnchors, i._`{}`));
                },
              );
            })(e, n),
            e.code(s));
        })
      : e.func(
          t,
          i._`${u.default.data}, ${(function (e) {
            return i._`{${u.default.instancePath}="", ${u.default.parentData}, ${u.default.parentDataProperty}, ${u.default.rootData}=${u.default.data}${e.dynamicRef ? i._`, ${u.default.dynamicAnchors}={}` : i.nil}}={}`;
          })(n)}`,
          a.$async,
          () => e.code(p(r, n)).code(s),
        );
  }
  function p(e, t) {
    const r = 'object' == typeof e && e[t.schemaId];
    return r && (t.code.source || t.code.process)
      ? i._`/*# sourceURL=${r} */`
      : i.nil;
  }
  function y(t, r) {
    _(t) && (w(t), $(t))
      ? (function (e, t) {
          const { schema: r, gen: a, opts: n } = e;
          n.$comment && r.$comment && P(e);
          ((function (e) {
            const t = e.schema[e.opts.schemaId];
            t &&
              (e.baseId = (0, l.resolveUrl)(e.opts.uriResolver, e.baseId, t));
          })(e),
            (function (e) {
              if (e.schema.$async && !e.schemaEnv.$async)
                throw new Error('async schema in sync schema');
            })(e));
          const s = a.const('_errs', u.default.errors);
          (b(e, s), a.var(t, i._`${s} === ${u.default.errors}`));
        })(t, r)
      : (0, e.boolOrEmptySchema)(t, r);
  }
  function $({ schema: e, self: t }) {
    if ('boolean' == typeof e) return !e;
    for (const r in e) if (t.RULES.all[r]) return !0;
    return !1;
  }
  function _(e) {
    return 'boolean' != typeof e.schema;
  }
  function w(e) {
    ((0, f.checkUnknownRules)(e),
      (function (e) {
        const { schema: t, errSchemaPath: r, opts: a, self: n } = e;
        t.$ref &&
          a.ignoreKeywordsWithRef &&
          (0, f.schemaHasRulesButRef)(t, n.RULES) &&
          n.logger.warn(`$ref: keywords ignored in schema at path "${r}"`);
      })(e));
  }
  function b(e, r) {
    if (e.opts.jtd) return E(e, [], !1, r);
    const a = (0, t.getSchemaTypes)(e.schema);
    E(e, a, !(0, t.coerceAndCheckDataType)(e, a), r);
  }
  function P({ gen: e, schemaEnv: t, schema: r, errSchemaPath: a, opts: n }) {
    const s = r.$comment;
    if (!0 === n.$comment) e.code(i._`${u.default.self}.logger.log(${s})`);
    else if ('function' == typeof n.$comment) {
      const r = i.str`${a}/$comment`,
        n = e.scopeValue('root', { ref: t.root });
      e.code(i._`${u.default.self}.opts.$comment(${s}, ${r}, ${n}.schema)`);
    }
  }
  function E(e, t, n, s) {
    const { gen: o, schema: c, data: d, allErrors: l, opts: m, self: h } = e,
      { RULES: p } = h;
    function y(f) {
      (0, r.shouldUseGroup)(c, f) &&
        (f.type
          ? (o.if((0, a.checkDataType)(f.type, d, m.strictNumbers)),
            S(e, f),
            1 === t.length &&
              t[0] === f.type &&
              n &&
              (o.else(), (0, a.reportTypeError)(e)),
            o.endIf())
          : S(e, f),
        l || o.if(i._`${u.default.errors} === ${s || 0}`));
    }
    !c.$ref || (!m.ignoreKeywordsWithRef && (0, f.schemaHasRulesButRef)(c, p))
      ? (m.jtd ||
          (function (e, t) {
            if (e.schemaEnv.meta || !e.opts.strictTypes) return;
            ((function (e, t) {
              if (!t.length) return;
              if (!e.dataTypes.length) return void (e.dataTypes = t);
              (t.forEach((t) => {
                N(e.dataTypes, t) ||
                  O(
                    e,
                    `type "${t}" not allowed by context "${e.dataTypes.join(',')}"`,
                  );
              }),
                (function (e, t) {
                  const r = [];
                  for (const a of e.dataTypes)
                    N(t, a)
                      ? r.push(a)
                      : t.includes('integer') &&
                        'number' === a &&
                        r.push('integer');
                  e.dataTypes = r;
                })(e, t));
            })(e, t),
              e.opts.allowUnionTypes ||
                (function (e, t) {
                  t.length > 1 &&
                    (2 !== t.length || !t.includes('null')) &&
                    O(e, 'use allowUnionTypes to allow union type keyword');
                })(e, t));
            !(function (e, t) {
              const a = e.self.RULES.all;
              for (const n in a) {
                const s = a[n];
                if ('object' == typeof s && (0, r.shouldUseRule)(e.schema, s)) {
                  const { type: r } = s.definition;
                  r.length &&
                    !r.some((e) => k(t, e)) &&
                    O(e, `missing type "${r.join(',')}" for keyword "${n}"`);
                }
              }
            })(e, e.dataTypes);
          })(e, t),
        o.block(() => {
          for (const e of p.rules) y(e);
          y(p.post);
        }))
      : o.block(() => C(e, '$ref', p.all.$ref.definition));
  }
  function S(e, t) {
    const {
      gen: a,
      schema: s,
      opts: { useDefaults: o },
    } = e;
    (o && (0, n.assignDefaults)(e, t.type),
      a.block(() => {
        for (const a of t.rules)
          (0, r.shouldUseRule)(s, a) && C(e, a.keyword, a.definition, t.type);
      }));
  }
  function k(e, t) {
    return e.includes(t) || ('number' === t && e.includes('integer'));
  }
  function N(e, t) {
    return e.includes(t) || ('integer' === t && e.includes('number'));
  }
  function O(e, t) {
    ((t += ` at "${e.schemaEnv.baseId + e.errSchemaPath}" (strictTypes)`),
      (0, f.checkStrictMode)(e, t, e.opts.strictTypes));
  }
  v.validateFunctionCode = function (t) {
    _(t) && (w(t), $(t))
      ? (function (e) {
          const { schema: t, opts: r, gen: a } = e;
          h(e, () => {
            (r.$comment && t.$comment && P(e),
              (function (e) {
                const { schema: t, opts: r } = e;
                void 0 !== t.default &&
                  r.useDefaults &&
                  r.strictSchema &&
                  (0, f.checkStrictMode)(
                    e,
                    'default is ignored in the schema root',
                  );
              })(e),
              a.let(u.default.vErrors, null),
              a.let(u.default.errors, 0),
              r.unevaluated &&
                (function (e) {
                  const { gen: t, validateName: r } = e;
                  ((e.evaluated = t.const('evaluated', i._`${r}.evaluated`)),
                    t.if(i._`${e.evaluated}.dynamicProps`, () =>
                      t.assign(i._`${e.evaluated}.props`, i._`undefined`),
                    ),
                    t.if(i._`${e.evaluated}.dynamicItems`, () =>
                      t.assign(i._`${e.evaluated}.items`, i._`undefined`),
                    ));
                })(e),
              b(e),
              (function (e) {
                const {
                  gen: t,
                  schemaEnv: r,
                  validateName: a,
                  ValidationError: n,
                  opts: s,
                } = e;
                r.$async
                  ? t.if(
                      i._`${u.default.errors} === 0`,
                      () => t.return(u.default.data),
                      () => t.throw(i._`new ${n}(${u.default.vErrors})`),
                    )
                  : (t.assign(i._`${a}.errors`, u.default.vErrors),
                    s.unevaluated &&
                      (function ({ gen: e, evaluated: t, props: r, items: a }) {
                        r instanceof i.Name && e.assign(i._`${t}.props`, r);
                        a instanceof i.Name && e.assign(i._`${t}.items`, a);
                      })(e),
                    t.return(i._`${u.default.errors} === 0`));
              })(e));
          });
        })(t)
      : h(t, () => (0, e.topBoolOrEmptySchema)(t));
  };
  class x {
    constructor(e, t, r) {
      if (
        ((0, s.validateKeywordUsage)(e, t, r),
        (this.gen = e.gen),
        (this.allErrors = e.allErrors),
        (this.keyword = r),
        (this.data = e.data),
        (this.schema = e.schema[r]),
        (this.$data =
          t.$data && e.opts.$data && this.schema && this.schema.$data),
        (this.schemaValue = (0, f.schemaRefOrVal)(
          e,
          this.schema,
          r,
          this.$data,
        )),
        (this.schemaType = t.schemaType),
        (this.parentSchema = e.schema),
        (this.params = {}),
        (this.it = e),
        (this.def = t),
        this.$data)
      )
        this.schemaCode = e.gen.const('vSchema', z(this.$data, e));
      else if (
        ((this.schemaCode = this.schemaValue),
        !(0, s.validSchemaType)(this.schema, t.schemaType, t.allowUndefined))
      )
        throw new Error(`${r} value must be ${JSON.stringify(t.schemaType)}`);
      ('code' in t ? t.trackErrors : !1 !== t.errors) &&
        (this.errsCount = e.gen.const('_errs', u.default.errors));
    }
    result(e, t, r) {
      this.failResult((0, i.not)(e), t, r);
    }
    failResult(e, t, r) {
      (this.gen.if(e),
        r ? r() : this.error(),
        t
          ? (this.gen.else(), t(), this.allErrors && this.gen.endIf())
          : this.allErrors
            ? this.gen.endIf()
            : this.gen.else());
    }
    pass(e, t) {
      this.failResult((0, i.not)(e), void 0, t);
    }
    fail(e) {
      if (void 0 === e)
        return (this.error(), void (this.allErrors || this.gen.if(!1)));
      (this.gen.if(e),
        this.error(),
        this.allErrors ? this.gen.endIf() : this.gen.else());
    }
    fail$data(e) {
      if (!this.$data) return this.fail(e);
      const { schemaCode: t } = this;
      this.fail(
        i._`${t} !== undefined && (${(0, i.or)(this.invalid$data(), e)})`,
      );
    }
    error(e, t, r) {
      if (t)
        return (this.setParams(t), this._error(e, r), void this.setParams({}));
      this._error(e, r);
    }
    _error(e, t) {
      (e ? m.reportExtraError : m.reportError)(this, this.def.error, t);
    }
    $dataError() {
      (0, m.reportError)(this, this.def.$dataError || m.keyword$DataError);
    }
    reset() {
      if (void 0 === this.errsCount)
        throw new Error('add "trackErrors" to keyword definition');
      (0, m.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(e) {
      this.allErrors || this.gen.if(e);
    }
    setParams(e, t) {
      t ? Object.assign(this.params, e) : (this.params = e);
    }
    block$data(e, t, r = i.nil) {
      this.gen.block(() => {
        (this.check$data(e, r), t());
      });
    }
    check$data(e = i.nil, t = i.nil) {
      if (!this.$data) return;
      const { gen: r, schemaCode: a, schemaType: n, def: s } = this;
      (r.if((0, i.or)(i._`${a} === undefined`, t)),
        e !== i.nil && r.assign(e, !0),
        (n.length || s.validateSchema) &&
          (r.elseIf(this.invalid$data()),
          this.$dataError(),
          e !== i.nil && r.assign(e, !1)),
        r.else());
    }
    invalid$data() {
      const { gen: e, schemaCode: t, schemaType: r, def: n, it: s } = this;
      return (0, i.or)(
        (function () {
          if (r.length) {
            if (!(t instanceof i.Name))
              throw new Error('ajv implementation error');
            const e = Array.isArray(r) ? r : [r];
            return i._`${(0, a.checkDataTypes)(e, t, s.opts.strictNumbers, a.DataType.Wrong)}`;
          }
          return i.nil;
        })(),
        (function () {
          if (n.validateSchema) {
            const r = e.scopeValue('validate$data', { ref: n.validateSchema });
            return i._`!${r}(${t})`;
          }
          return i.nil;
        })(),
      );
    }
    subschema(e, t) {
      const r = (0, o.getSubschema)(this.it, e);
      ((0, o.extendSubschemaData)(r, this.it, e),
        (0, o.extendSubschemaMode)(r, e));
      const a = d(c(c({}, this.it), r), { items: void 0, props: void 0 });
      return (y(a, t), a);
    }
    mergeEvaluated(e, t) {
      const { it: r, gen: a } = this;
      r.opts.unevaluated &&
        (!0 !== r.props &&
          void 0 !== e.props &&
          (r.props = f.mergeEvaluated.props(a, e.props, r.props, t)),
        !0 !== r.items &&
          void 0 !== e.items &&
          (r.items = f.mergeEvaluated.items(a, e.items, r.items, t)));
    }
    mergeValidEvaluated(e, t) {
      const { it: r, gen: a } = this;
      if (r.opts.unevaluated && (!0 !== r.props || !0 !== r.items))
        return (a.if(t, () => this.mergeEvaluated(e, i.Name)), !0);
    }
  }
  function C(e, t, r, a) {
    const n = new x(e, r, t);
    'code' in r
      ? r.code(n, a)
      : n.$data && r.validate
        ? (0, s.funcKeywordCode)(n, r)
        : 'macro' in r
          ? (0, s.macroKeywordCode)(n, r)
          : (r.compile || r.validate) && (0, s.funcKeywordCode)(n, r);
  }
  v.KeywordCxt = x;
  const R = /^\/(?:[^~]|~0|~1)*$/,
    M = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function z(e, { dataLevel: t, dataNames: r, dataPathArr: a }) {
    let n, s;
    if ('' === e) return u.default.rootData;
    if ('/' === e[0]) {
      if (!R.test(e)) throw new Error(`Invalid JSON-pointer: ${e}`);
      ((n = e), (s = u.default.rootData));
    } else {
      const o = M.exec(e);
      if (!o) throw new Error(`Invalid JSON-pointer: ${e}`);
      const i = +o[1];
      if (((n = o[2]), '#' === n)) {
        if (i >= t) throw new Error(d('property/index', i));
        return a[t - i];
      }
      if (i > t) throw new Error(d('data', i));
      if (((s = r[t - i]), !n)) return s;
    }
    let o = s;
    const c = n.split('/');
    for (const u of c)
      u &&
        ((s = i._`${s}${(0, i.getProperty)((0, f.unescapeJsonPointer)(u))}`),
        (o = i._`${o} && ${s}`));
    return o;
    function d(e, r) {
      return `Cannot access ${e} ${r} levels up, current level is ${t}`;
    }
  }
  return ((v.getData = z), v);
}
var ce,
  de = {};
function ue() {
  if (ce) return de;
  ((ce = 1), Object.defineProperty(de, '__esModule', { value: !0 }));
  class e extends Error {
    constructor(e) {
      (super('validation failed'),
        (this.errors = e),
        (this.ajv = this.validation = !0));
    }
  }
  return ((de.default = e), de);
}
var le,
  fe = {};
function me() {
  if (le) return fe;
  ((le = 1), Object.defineProperty(fe, '__esModule', { value: !0 }));
  const e = oe();
  class t extends Error {
    constructor(t, r, a, n) {
      (super(n || `can't resolve reference ${a} from id ${r}`),
        (this.missingRef = (0, e.resolveUrl)(t, r, a)),
        (this.missingSchema = (0, e.normalizeId)(
          (0, e.getFullPath)(t, this.missingRef),
        )));
    }
  }
  return ((fe.default = t), fe);
}
var he,
  pe = {};
function ye() {
  if (he) return pe;
  ((he = 1),
    Object.defineProperty(pe, '__esModule', { value: !0 }),
    (pe.resolveSchema =
      pe.getCompilingSchema =
      pe.resolveRef =
      pe.compileSchema =
      pe.SchemaEnv =
        void 0));
  const e = j(),
    t = ue(),
    r = D(),
    a = oe(),
    n = T(),
    s = ie();
  class o {
    constructor(e) {
      var t;
      let r;
      ((this.refs = {}),
        (this.dynamicAnchors = {}),
        'object' == typeof e.schema && (r = e.schema),
        (this.schema = e.schema),
        (this.schemaId = e.schemaId),
        (this.root = e.root || this),
        (this.baseId =
          null !== (t = e.baseId) && void 0 !== t
            ? t
            : (0, a.normalizeId)(null == r ? void 0 : r[e.schemaId || '$id'])),
        (this.schemaPath = e.schemaPath),
        (this.localRefs = e.localRefs),
        (this.meta = e.meta),
        (this.$async = null == r ? void 0 : r.$async),
        (this.refs = {}));
    }
  }
  function i(n) {
    const o = d.call(this, n);
    if (o) return o;
    const i = (0, a.getFullPath)(this.opts.uriResolver, n.root.baseId),
      { es5: c, lines: u } = this.opts.code,
      { ownProperties: l } = this.opts,
      f = new e.CodeGen(this.scope, { es5: c, lines: u, ownProperties: l });
    let m;
    n.$async &&
      (m = f.scopeValue('Error', {
        ref: t.default,
        code: e._`require("ajv/dist/runtime/validation_error").default`,
      }));
    const h = f.scopeName('validate');
    n.validateName = h;
    const p = {
      gen: f,
      allErrors: this.opts.allErrors,
      data: r.default.data,
      parentData: r.default.parentData,
      parentDataProperty: r.default.parentDataProperty,
      dataNames: [r.default.data],
      dataPathArr: [e.nil],
      dataLevel: 0,
      dataTypes: [],
      definedProperties: new Set(),
      topSchemaRef: f.scopeValue(
        'schema',
        !0 === this.opts.code.source
          ? { ref: n.schema, code: (0, e.stringify)(n.schema) }
          : { ref: n.schema },
      ),
      validateName: h,
      ValidationError: m,
      schema: n.schema,
      schemaEnv: n,
      rootId: i,
      baseId: n.baseId || i,
      schemaPath: e.nil,
      errSchemaPath: n.schemaPath || (this.opts.jtd ? '' : '#'),
      errorPath: e._`""`,
      opts: this.opts,
      self: this,
    };
    let y;
    try {
      (this._compilations.add(n),
        (0, s.validateFunctionCode)(p),
        f.optimize(this.opts.code.optimize));
      const t = f.toString();
      ((y = `${f.scopeRefs(r.default.scope)}return ${t}`),
        this.opts.code.process && (y = this.opts.code.process(y, n)));
      const a = new Function(`${r.default.self}`, `${r.default.scope}`, y)(
        this,
        this.scope.get(),
      );
      if (
        (this.scope.value(h, { ref: a }),
        (a.errors = null),
        (a.schema = n.schema),
        (a.schemaEnv = n),
        n.$async && (a.$async = !0),
        !0 === this.opts.code.source &&
          (a.source = {
            validateName: h,
            validateCode: t,
            scopeValues: f._values,
          }),
        this.opts.unevaluated)
      ) {
        const { props: t, items: r } = p;
        ((a.evaluated = {
          props: t instanceof e.Name ? void 0 : t,
          items: r instanceof e.Name ? void 0 : r,
          dynamicProps: t instanceof e.Name,
          dynamicItems: r instanceof e.Name,
        }),
          a.source && (a.source.evaluated = (0, e.stringify)(a.evaluated)));
      }
      return ((n.validate = a), n);
    } catch ($) {
      throw (
        delete n.validate,
        delete n.validateName,
        y && this.logger.error('Error compiling schema, function code:', y),
        $
      );
    } finally {
      this._compilations.delete(n);
    }
  }
  function c(e) {
    return (0, a.inlineRef)(e.schema, this.opts.inlineRefs)
      ? e.schema
      : e.validate
        ? e
        : i.call(this, e);
  }
  function d(e) {
    for (const t of this._compilations) if (u(t, e)) return t;
  }
  function u(e, t) {
    return e.schema === t.schema && e.root === t.root && e.baseId === t.baseId;
  }
  function l(e, t) {
    let r;
    for (; 'string' == typeof (r = this.refs[t]); ) t = r;
    return r || this.schemas[t] || f.call(this, e, t);
  }
  function f(e, t) {
    const r = this.opts.uriResolver.parse(t),
      n = (0, a._getFullPath)(this.opts.uriResolver, r);
    let s = (0, a.getFullPath)(this.opts.uriResolver, e.baseId, void 0);
    if (Object.keys(e.schema).length > 0 && n === s) return h.call(this, r, e);
    const c = (0, a.normalizeId)(n),
      d = this.refs[c] || this.schemas[c];
    if ('string' == typeof d) {
      const t = f.call(this, e, d);
      if ('object' != typeof (null == t ? void 0 : t.schema)) return;
      return h.call(this, r, t);
    }
    if ('object' == typeof (null == d ? void 0 : d.schema)) {
      if ((d.validate || i.call(this, d), c === (0, a.normalizeId)(t))) {
        const { schema: t } = d,
          { schemaId: r } = this.opts,
          n = t[r];
        return (
          n && (s = (0, a.resolveUrl)(this.opts.uriResolver, s, n)),
          new o({ schema: t, schemaId: r, root: e, baseId: s })
        );
      }
      return h.call(this, r, d);
    }
  }
  ((pe.SchemaEnv = o),
    (pe.compileSchema = i),
    (pe.resolveRef = function (e, t, r) {
      var n;
      r = (0, a.resolveUrl)(this.opts.uriResolver, t, r);
      const s = e.refs[r];
      if (s) return s;
      let i = l.call(this, e, r);
      if (void 0 === i) {
        const a = null === (n = e.localRefs) || void 0 === n ? void 0 : n[r],
          { schemaId: s } = this.opts;
        a && (i = new o({ schema: a, schemaId: s, root: e, baseId: t }));
      }
      return void 0 !== i ? (e.refs[r] = c.call(this, i)) : void 0;
    }),
    (pe.getCompilingSchema = d),
    (pe.resolveSchema = f));
  const m = new Set([
    'properties',
    'patternProperties',
    'enum',
    'dependencies',
    'definitions',
  ]);
  function h(e, { baseId: t, schema: r, root: s }) {
    var i;
    if ('/' !== (null === (i = e.fragment) || void 0 === i ? void 0 : i[0]))
      return;
    for (const o of e.fragment.slice(1).split('/')) {
      if ('boolean' == typeof r) return;
      const e = r[(0, n.unescapeFragment)(o)];
      if (void 0 === e) return;
      const s = 'object' == typeof (r = e) && r[this.opts.schemaId];
      !m.has(o) && s && (t = (0, a.resolveUrl)(this.opts.uriResolver, t, s));
    }
    let c;
    if (
      'boolean' != typeof r &&
      r.$ref &&
      !(0, n.schemaHasRulesButRef)(r, this.RULES)
    ) {
      const e = (0, a.resolveUrl)(this.opts.uriResolver, t, r.$ref);
      c = f.call(this, s, e);
    }
    const { schemaId: d } = this.opts;
    return (
      (c = c || new o({ schema: r, schemaId: d, root: s, baseId: t })),
      c.schema !== c.root.schema ? c : void 0
    );
  }
  return pe;
}
const $e = {
  $id: 'https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#',
  description:
    'Meta-schema for $data reference (JSON AnySchema extension proposal)',
  type: 'object',
  required: ['$data'],
  properties: {
    $data: {
      type: 'string',
      anyOf: [{ format: 'relative-json-pointer' }, { format: 'json-pointer' }],
    },
  },
  additionalProperties: !1,
};
var ve,
  ge,
  _e = {};
function we() {
  return (
    ge ||
      ((ge = 1),
      (function (e) {
        (Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.CodeGen =
            e.Name =
            e.nil =
            e.stringify =
            e.str =
            e._ =
            e.KeywordCxt =
              void 0));
        var t = ie();
        Object.defineProperty(e, 'KeywordCxt', {
          enumerable: !0,
          get: function () {
            return t.KeywordCxt;
          },
        });
        var r = j();
        (Object.defineProperty(e, '_', {
          enumerable: !0,
          get: function () {
            return r._;
          },
        }),
          Object.defineProperty(e, 'str', {
            enumerable: !0,
            get: function () {
              return r.str;
            },
          }),
          Object.defineProperty(e, 'stringify', {
            enumerable: !0,
            get: function () {
              return r.stringify;
            },
          }),
          Object.defineProperty(e, 'nil', {
            enumerable: !0,
            get: function () {
              return r.nil;
            },
          }),
          Object.defineProperty(e, 'Name', {
            enumerable: !0,
            get: function () {
              return r.Name;
            },
          }),
          Object.defineProperty(e, 'CodeGen', {
            enumerable: !0,
            get: function () {
              return r.CodeGen;
            },
          }));
        const a = ue(),
          n = me(),
          s = K(),
          o = ye(),
          i = j(),
          l = oe(),
          f = J(),
          m = T(),
          p = $e,
          y = (function () {
            if (ve) return _e;
            ((ve = 1), Object.defineProperty(_e, '__esModule', { value: !0 }));
            const e = h();
            return (
              (e.code = 'require("ajv/dist/runtime/uri").default'),
              (_e.default = e),
              _e
            );
          })(),
          $ = (e, t) => new RegExp(e, t);
        $.code = 'new RegExp';
        const v = ['removeAdditional', 'useDefaults', 'coerceTypes'],
          g = new Set([
            'validate',
            'serialize',
            'parse',
            'wrapper',
            'root',
            'schema',
            'keyword',
            'pattern',
            'formats',
            'validate$data',
            'func',
            'obj',
            'Error',
          ]),
          _ = {
            errorDataPath: '',
            format: '`validateFormats: false` can be used instead.',
            nullable: '"nullable" keyword is supported by default.',
            jsonPointers: 'Deprecated jsPropertySyntax can be used instead.',
            extendRefs: 'Deprecated ignoreKeywordsWithRef can be used instead.',
            missingRefs:
              'Pass empty schema with $id that should be ignored to ajv.addSchema.',
            processCode:
              'Use option `code: {process: (code, schemaEnv: object) => string}`',
            sourceCode: 'Use option `code: {source: true}`',
            strictDefaults: 'It is default now, see option `strict`.',
            strictKeywords: 'It is default now, see option `strict`.',
            uniqueItems: '"uniqueItems" keyword is always validated.',
            unknownFormats:
              'Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).',
            cache: 'Map is used as cache, schema object as key.',
            serialize: 'Map is used as cache, schema object as key.',
            ajvErrors: 'It is default now.',
          },
          w = {
            ignoreKeywordsWithRef: '',
            jsPropertySyntax: '',
            unicode:
              '"minLength"/"maxLength" account for unicode characters by default.',
          };
        class b {
          constructor(e = {}) {
            ((this.schemas = {}),
              (this.refs = {}),
              (this.formats = {}),
              (this._compilations = new Set()),
              (this._loading = {}),
              (this._cache = new Map()),
              (e = this.opts =
                c(
                  c({}, e),
                  (function (e) {
                    var t,
                      r,
                      a,
                      n,
                      s,
                      o,
                      i,
                      u,
                      l,
                      f,
                      m,
                      h,
                      p,
                      v,
                      g,
                      _,
                      w,
                      b,
                      P,
                      E,
                      S,
                      k,
                      N,
                      j,
                      O;
                    const x = e.strict,
                      T =
                        null === (t = e.code) || void 0 === t
                          ? void 0
                          : t.optimize,
                      C = !0 === T || void 0 === T ? 1 : T || 0,
                      R =
                        null !==
                          (a =
                            null === (r = e.code) || void 0 === r
                              ? void 0
                              : r.regExp) && void 0 !== a
                          ? a
                          : $,
                      I =
                        null !== (n = e.uriResolver) && void 0 !== n
                          ? n
                          : y.default;
                    return {
                      strictSchema:
                        null ===
                          (o =
                            null !== (s = e.strictSchema) && void 0 !== s
                              ? s
                              : x) ||
                        void 0 === o ||
                        o,
                      strictNumbers:
                        null ===
                          (u =
                            null !== (i = e.strictNumbers) && void 0 !== i
                              ? i
                              : x) ||
                        void 0 === u ||
                        u,
                      strictTypes:
                        null !==
                          (f =
                            null !== (l = e.strictTypes) && void 0 !== l
                              ? l
                              : x) && void 0 !== f
                          ? f
                          : 'log',
                      strictTuples:
                        null !==
                          (h =
                            null !== (m = e.strictTuples) && void 0 !== m
                              ? m
                              : x) && void 0 !== h
                          ? h
                          : 'log',
                      strictRequired:
                        null !==
                          (v =
                            null !== (p = e.strictRequired) && void 0 !== p
                              ? p
                              : x) &&
                        void 0 !== v &&
                        v,
                      code: e.code
                        ? d(c({}, e.code), { optimize: C, regExp: R })
                        : { optimize: C, regExp: R },
                      loopRequired:
                        null !== (g = e.loopRequired) && void 0 !== g ? g : 200,
                      loopEnum:
                        null !== (_ = e.loopEnum) && void 0 !== _ ? _ : 200,
                      meta: null === (w = e.meta) || void 0 === w || w,
                      messages: null === (b = e.messages) || void 0 === b || b,
                      inlineRefs:
                        null === (P = e.inlineRefs) || void 0 === P || P,
                      schemaId:
                        null !== (E = e.schemaId) && void 0 !== E ? E : '$id',
                      addUsedSchema:
                        null === (S = e.addUsedSchema) || void 0 === S || S,
                      validateSchema:
                        null === (k = e.validateSchema) || void 0 === k || k,
                      validateFormats:
                        null === (N = e.validateFormats) || void 0 === N || N,
                      unicodeRegExp:
                        null === (j = e.unicodeRegExp) || void 0 === j || j,
                      int32range:
                        null === (O = e.int32range) || void 0 === O || O,
                      uriResolver: I,
                    };
                  })(e),
                )));
            const { es5: t, lines: r } = this.opts.code;
            ((this.scope = new i.ValueScope({
              scope: {},
              prefixes: g,
              es5: t,
              lines: r,
            })),
              (this.logger = (function (e) {
                if (!1 === e) return x;
                if (void 0 === e) return console;
                if (e.log && e.warn && e.error) return e;
                throw new Error(
                  'logger must implement log, warn and error methods',
                );
              })(e.logger)));
            const a = e.validateFormats;
            ((e.validateFormats = !1),
              (this.RULES = (0, s.getRules)()),
              P.call(this, _, e, 'NOT SUPPORTED'),
              P.call(this, w, e, 'DEPRECATED', 'warn'),
              (this._metaOpts = O.call(this)),
              e.formats && k.call(this),
              this._addVocabularies(),
              this._addDefaultMetaSchema(),
              e.keywords && N.call(this, e.keywords),
              'object' == typeof e.meta && this.addMetaSchema(e.meta),
              S.call(this),
              (e.validateFormats = a));
          }
          _addVocabularies() {
            this.addKeyword('$async');
          }
          _addDefaultMetaSchema() {
            const { $data: e, meta: t, schemaId: r } = this.opts;
            let a = p;
            ('id' === r && ((a = c({}, p)), (a.id = a.$id), delete a.$id),
              t && e && this.addMetaSchema(a, a[r], !1));
          }
          defaultMeta() {
            const { meta: e, schemaId: t } = this.opts;
            return (this.opts.defaultMeta =
              'object' == typeof e ? e[t] || e : void 0);
          }
          validate(e, t) {
            let r;
            if ('string' == typeof e) {
              if (((r = this.getSchema(e)), !r))
                throw new Error(`no schema with key or ref "${e}"`);
            } else r = this.compile(e);
            const a = r(t);
            return ('$async' in r || (this.errors = r.errors), a);
          }
          compile(e, t) {
            const r = this._addSchema(e, t);
            return r.validate || this._compileSchemaEnv(r);
          }
          compileAsync(e, t) {
            if ('function' != typeof this.opts.loadSchema)
              throw new Error('options.loadSchema should be a function');
            const { loadSchema: r } = this.opts;
            return a.call(this, e, t);
            function a(e, t) {
              return u(this, null, function* () {
                yield s.call(this, e.$schema);
                const r = this._addSchema(e, t);
                return r.validate || o.call(this, r);
              });
            }
            function s(e) {
              return u(this, null, function* () {
                e &&
                  !this.getSchema(e) &&
                  (yield a.call(this, { $ref: e }, !0));
              });
            }
            function o(e) {
              return u(this, null, function* () {
                try {
                  return this._compileSchemaEnv(e);
                } catch (t) {
                  if (!(t instanceof n.default)) throw t;
                  return (
                    i.call(this, t),
                    yield c.call(this, t.missingSchema),
                    o.call(this, e)
                  );
                }
              });
            }
            function i({ missingSchema: e, missingRef: t }) {
              if (this.refs[e])
                throw new Error(
                  `AnySchema ${e} is loaded but ${t} cannot be resolved`,
                );
            }
            function c(e) {
              return u(this, null, function* () {
                const r = yield d.call(this, e);
                (this.refs[e] || (yield s.call(this, r.$schema)),
                  this.refs[e] || this.addSchema(r, e, t));
              });
            }
            function d(e) {
              return u(this, null, function* () {
                const t = this._loading[e];
                if (t) return t;
                try {
                  return yield (this._loading[e] = r(e));
                } finally {
                  delete this._loading[e];
                }
              });
            }
          }
          addSchema(e, t, r, a = this.opts.validateSchema) {
            if (Array.isArray(e)) {
              for (const t of e) this.addSchema(t, void 0, r, a);
              return this;
            }
            let n;
            if ('object' == typeof e) {
              const { schemaId: t } = this.opts;
              if (((n = e[t]), void 0 !== n && 'string' != typeof n))
                throw new Error(`schema ${t} must be string`);
            }
            return (
              (t = (0, l.normalizeId)(t || n)),
              this._checkUnique(t),
              (this.schemas[t] = this._addSchema(e, r, t, a, !0)),
              this
            );
          }
          addMetaSchema(e, t, r = this.opts.validateSchema) {
            return (this.addSchema(e, t, !0, r), this);
          }
          validateSchema(e, t) {
            if ('boolean' == typeof e) return !0;
            let r;
            if (((r = e.$schema), void 0 !== r && 'string' != typeof r))
              throw new Error('$schema must be a string');
            if (((r = r || this.opts.defaultMeta || this.defaultMeta()), !r))
              return (
                this.logger.warn('meta-schema not available'),
                (this.errors = null),
                !0
              );
            const a = this.validate(r, e);
            if (!a && t) {
              const e = 'schema is invalid: ' + this.errorsText();
              if ('log' !== this.opts.validateSchema) throw new Error(e);
              this.logger.error(e);
            }
            return a;
          }
          getSchema(e) {
            let t;
            for (; 'string' == typeof (t = E.call(this, e)); ) e = t;
            if (void 0 === t) {
              const { schemaId: r } = this.opts,
                a = new o.SchemaEnv({ schema: {}, schemaId: r });
              if (((t = o.resolveSchema.call(this, a, e)), !t)) return;
              this.refs[e] = t;
            }
            return t.validate || this._compileSchemaEnv(t);
          }
          removeSchema(e) {
            if (e instanceof RegExp)
              return (
                this._removeAllSchemas(this.schemas, e),
                this._removeAllSchemas(this.refs, e),
                this
              );
            switch (typeof e) {
              case 'undefined':
                return (
                  this._removeAllSchemas(this.schemas),
                  this._removeAllSchemas(this.refs),
                  this._cache.clear(),
                  this
                );
              case 'string': {
                const t = E.call(this, e);
                return (
                  'object' == typeof t && this._cache.delete(t.schema),
                  delete this.schemas[e],
                  delete this.refs[e],
                  this
                );
              }
              case 'object': {
                const t = e;
                this._cache.delete(t);
                let r = e[this.opts.schemaId];
                return (
                  r &&
                    ((r = (0, l.normalizeId)(r)),
                    delete this.schemas[r],
                    delete this.refs[r]),
                  this
                );
              }
              default:
                throw new Error('ajv.removeSchema: invalid parameter');
            }
          }
          addVocabulary(e) {
            for (const t of e) this.addKeyword(t);
            return this;
          }
          addKeyword(e, t) {
            let r;
            if ('string' == typeof e)
              ((r = e),
                'object' == typeof t &&
                  (this.logger.warn(
                    'these parameters are deprecated, see docs for addKeyword',
                  ),
                  (t.keyword = r)));
            else {
              if ('object' != typeof e || void 0 !== t)
                throw new Error('invalid addKeywords parameters');
              if (((r = (t = e).keyword), Array.isArray(r) && !r.length))
                throw new Error(
                  'addKeywords: keyword must be string or non-empty array',
                );
            }
            if ((R.call(this, r, t), !t))
              return ((0, m.eachItem)(r, (e) => I.call(this, e)), this);
            D.call(this, t);
            const a = d(c({}, t), {
              type: (0, f.getJSONTypes)(t.type),
              schemaType: (0, f.getJSONTypes)(t.schemaType),
            });
            return (
              (0, m.eachItem)(
                r,
                0 === a.type.length
                  ? (e) => I.call(this, e, a)
                  : (e) => a.type.forEach((t) => I.call(this, e, a, t)),
              ),
              this
            );
          }
          getKeyword(e) {
            const t = this.RULES.all[e];
            return 'object' == typeof t ? t.definition : !!t;
          }
          removeKeyword(e) {
            const { RULES: t } = this;
            (delete t.keywords[e], delete t.all[e]);
            for (const r of t.rules) {
              const t = r.rules.findIndex((t) => t.keyword === e);
              t >= 0 && r.rules.splice(t, 1);
            }
            return this;
          }
          addFormat(e, t) {
            return (
              'string' == typeof t && (t = new RegExp(t)),
              (this.formats[e] = t),
              this
            );
          }
          errorsText(
            e = this.errors,
            { separator: t = ', ', dataVar: r = 'data' } = {},
          ) {
            return e && 0 !== e.length
              ? e
                  .map((e) => `${r}${e.instancePath} ${e.message}`)
                  .reduce((e, r) => e + t + r)
              : 'No errors';
          }
          $dataMetaSchema(e, t) {
            const r = this.RULES.all;
            e = JSON.parse(JSON.stringify(e));
            for (const a of t) {
              const t = a.split('/').slice(1);
              let n = e;
              for (const e of t) n = n[e];
              for (const e in r) {
                const t = r[e];
                if ('object' != typeof t) continue;
                const { $data: a } = t.definition,
                  s = n[e];
                a && s && (n[e] = z(s));
              }
            }
            return e;
          }
          _removeAllSchemas(e, t) {
            for (const r in e) {
              const a = e[r];
              (t && !t.test(r)) ||
                ('string' == typeof a
                  ? delete e[r]
                  : a &&
                    !a.meta &&
                    (this._cache.delete(a.schema), delete e[r]));
            }
          }
          _addSchema(
            e,
            t,
            r,
            a = this.opts.validateSchema,
            n = this.opts.addUsedSchema,
          ) {
            let s;
            const { schemaId: i } = this.opts;
            if ('object' == typeof e) s = e[i];
            else {
              if (this.opts.jtd) throw new Error('schema must be object');
              if ('boolean' != typeof e)
                throw new Error('schema must be object or boolean');
            }
            let c = this._cache.get(e);
            if (void 0 !== c) return c;
            r = (0, l.normalizeId)(s || r);
            const d = l.getSchemaRefs.call(this, e, r);
            return (
              (c = new o.SchemaEnv({
                schema: e,
                schemaId: i,
                meta: t,
                baseId: r,
                localRefs: d,
              })),
              this._cache.set(c.schema, c),
              n &&
                !r.startsWith('#') &&
                (r && this._checkUnique(r), (this.refs[r] = c)),
              a && this.validateSchema(e, !0),
              c
            );
          }
          _checkUnique(e) {
            if (this.schemas[e] || this.refs[e])
              throw new Error(`schema with key or id "${e}" already exists`);
          }
          _compileSchemaEnv(e) {
            if (
              (e.meta
                ? this._compileMetaSchema(e)
                : o.compileSchema.call(this, e),
              !e.validate)
            )
              throw new Error('ajv implementation error');
            return e.validate;
          }
          _compileMetaSchema(e) {
            const t = this.opts;
            this.opts = this._metaOpts;
            try {
              o.compileSchema.call(this, e);
            } finally {
              this.opts = t;
            }
          }
        }
        function P(e, t, r, a = 'error') {
          for (const n in e) {
            const s = n;
            s in t && this.logger[a](`${r}: option ${n}. ${e[s]}`);
          }
        }
        function E(e) {
          return ((e = (0, l.normalizeId)(e)), this.schemas[e] || this.refs[e]);
        }
        function S() {
          const e = this.opts.schemas;
          if (e)
            if (Array.isArray(e)) this.addSchema(e);
            else for (const t in e) this.addSchema(e[t], t);
        }
        function k() {
          for (const e in this.opts.formats) {
            const t = this.opts.formats[e];
            t && this.addFormat(e, t);
          }
        }
        function N(e) {
          if (Array.isArray(e)) this.addVocabulary(e);
          else {
            this.logger.warn(
              'keywords option as map is deprecated, pass array',
            );
            for (const t in e) {
              const r = e[t];
              (r.keyword || (r.keyword = t), this.addKeyword(r));
            }
          }
        }
        function O() {
          const e = c({}, this.opts);
          for (const t of v) delete e[t];
          return e;
        }
        ((b.ValidationError = a.default),
          (b.MissingRefError = n.default),
          (e.default = b));
        const x = { log() {}, warn() {}, error() {} };
        const C = /^[a-z_$][a-z0-9_$:-]*$/i;
        function R(e, t) {
          const { RULES: r } = this;
          if (
            ((0, m.eachItem)(e, (e) => {
              if (r.keywords[e])
                throw new Error(`Keyword ${e} is already defined`);
              if (!C.test(e)) throw new Error(`Keyword ${e} has invalid name`);
            }),
            t && t.$data && !('code' in t) && !('validate' in t))
          )
            throw new Error(
              '$data keyword must have "code" or "validate" function',
            );
        }
        function I(e, t, r) {
          var a;
          const n = null == t ? void 0 : t.post;
          if (r && n)
            throw new Error('keyword with "post" flag cannot have "type"');
          const { RULES: s } = this;
          let o = n ? s.post : s.rules.find(({ type: e }) => e === r);
          if (
            (o || ((o = { type: r, rules: [] }), s.rules.push(o)),
            (s.keywords[e] = !0),
            !t)
          )
            return;
          const i = {
            keyword: e,
            definition: d(c({}, t), {
              type: (0, f.getJSONTypes)(t.type),
              schemaType: (0, f.getJSONTypes)(t.schemaType),
            }),
          };
          (t.before ? M.call(this, o, i, t.before) : o.rules.push(i),
            (s.all[e] = i),
            null === (a = t.implements) ||
              void 0 === a ||
              a.forEach((e) => this.addKeyword(e)));
        }
        function M(e, t, r) {
          const a = e.rules.findIndex((e) => e.keyword === r);
          a >= 0
            ? e.rules.splice(a, 0, t)
            : (e.rules.push(t), this.logger.warn(`rule ${r} is not defined`));
        }
        function D(e) {
          let { metaSchema: t } = e;
          void 0 !== t &&
            (e.$data && this.opts.$data && (t = z(t)),
            (e.validateSchema = this.compile(t, !0)));
        }
        const A = {
          $ref: 'https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#',
        };
        function z(e) {
          return { anyOf: [e, A] };
        }
      })($)),
    $
  );
}
var be,
  Pe = {},
  Ee = {},
  Se = {};
var ke,
  Ne,
  je = {};
function Oe() {
  if (Ne) return Ee;
  ((Ne = 1), Object.defineProperty(Ee, '__esModule', { value: !0 }));
  const e = (function () {
      if (be) return Se;
      ((be = 1), Object.defineProperty(Se, '__esModule', { value: !0 }));
      const e = {
        keyword: 'id',
        code() {
          throw new Error(
            'NOT SUPPORTED: keyword "id", use "$id" for schema ID',
          );
        },
      };
      return ((Se.default = e), Se);
    })(),
    t = (function () {
      if (ke) return je;
      ((ke = 1),
        Object.defineProperty(je, '__esModule', { value: !0 }),
        (je.callRef = je.getValidate = void 0));
      const e = me(),
        t = X(),
        r = j(),
        a = D(),
        n = ye(),
        s = T(),
        o = {
          keyword: '$ref',
          schemaType: 'string',
          code(t) {
            const { gen: a, schema: s, it: o } = t,
              {
                baseId: d,
                schemaEnv: u,
                validateName: l,
                opts: f,
                self: m,
              } = o,
              { root: h } = u;
            if (('#' === s || '#/' === s) && d === h.baseId)
              return (function () {
                if (u === h) return c(t, l, u, u.$async);
                const e = a.scopeValue('root', { ref: h });
                return c(t, r._`${e}.validate`, h, h.$async);
              })();
            const p = n.resolveRef.call(m, h, d, s);
            if (void 0 === p) throw new e.default(o.opts.uriResolver, d, s);
            return p instanceof n.SchemaEnv
              ? (function (e) {
                  const r = i(t, e);
                  c(t, r, e, e.$async);
                })(p)
              : (function (e) {
                  const n = a.scopeValue(
                      'schema',
                      !0 === f.code.source
                        ? { ref: e, code: (0, r.stringify)(e) }
                        : { ref: e },
                    ),
                    o = a.name('valid'),
                    i = t.subschema(
                      {
                        schema: e,
                        dataTypes: [],
                        schemaPath: r.nil,
                        topSchemaRef: n,
                        errSchemaPath: s,
                      },
                      o,
                    );
                  (t.mergeEvaluated(i), t.ok(o));
                })(p);
          },
        };
      function i(e, t) {
        const { gen: a } = e;
        return t.validate
          ? a.scopeValue('validate', { ref: t.validate })
          : r._`${a.scopeValue('wrapper', { ref: t })}.validate`;
      }
      function c(e, n, o, i) {
        const { gen: c, it: d } = e,
          { allErrors: u, schemaEnv: l, opts: f } = d,
          m = f.passContext ? a.default.this : r.nil;
        function h(e) {
          const t = r._`${e}.errors`;
          (c.assign(
            a.default.vErrors,
            r._`${a.default.vErrors} === null ? ${t} : ${a.default.vErrors}.concat(${t})`,
          ),
            c.assign(a.default.errors, r._`${a.default.vErrors}.length`));
        }
        function p(e) {
          var t;
          if (!d.opts.unevaluated) return;
          const a =
            null === (t = null == o ? void 0 : o.validate) || void 0 === t
              ? void 0
              : t.evaluated;
          if (!0 !== d.props)
            if (a && !a.dynamicProps)
              void 0 !== a.props &&
                (d.props = s.mergeEvaluated.props(c, a.props, d.props));
            else {
              const t = c.var('props', r._`${e}.evaluated.props`);
              d.props = s.mergeEvaluated.props(c, t, d.props, r.Name);
            }
          if (!0 !== d.items)
            if (a && !a.dynamicItems)
              void 0 !== a.items &&
                (d.items = s.mergeEvaluated.items(c, a.items, d.items));
            else {
              const t = c.var('items', r._`${e}.evaluated.items`);
              d.items = s.mergeEvaluated.items(c, t, d.items, r.Name);
            }
        }
        i
          ? (function () {
              if (!l.$async)
                throw new Error('async schema referenced by sync schema');
              const a = c.let('valid');
              (c.try(
                () => {
                  (c.code(r._`await ${(0, t.callValidateCode)(e, n, m)}`),
                    p(n),
                    u || c.assign(a, !0));
                },
                (e) => {
                  (c.if(r._`!(${e} instanceof ${d.ValidationError})`, () =>
                    c.throw(e),
                  ),
                    h(e),
                    u || c.assign(a, !1));
                },
              ),
                e.ok(a));
            })()
          : e.result(
              (0, t.callValidateCode)(e, n, m),
              () => p(n),
              () => h(n),
            );
      }
      return ((je.getValidate = i), (je.callRef = c), (je.default = o), je);
    })(),
    r = [
      '$schema',
      '$id',
      '$defs',
      '$vocabulary',
      { keyword: '$comment' },
      'definitions',
      e.default,
      t.default,
    ];
  return ((Ee.default = r), Ee);
}
var xe,
  Te = {},
  Ce = {};
var Re,
  Ie = {};
var Me,
  De,
  Ae = {},
  ze = {};
function Ve() {
  if (De) return Ae;
  ((De = 1), Object.defineProperty(Ae, '__esModule', { value: !0 }));
  const e = j(),
    t = T(),
    r = (function () {
      if (Me) return ze;
      function e(e) {
        const t = e.length;
        let r,
          a = 0,
          n = 0;
        for (; n < t; )
          (a++,
            (r = e.charCodeAt(n++)),
            r >= 55296 &&
              r <= 56319 &&
              n < t &&
              ((r = e.charCodeAt(n)), 56320 == (64512 & r) && n++));
        return a;
      }
      return (
        (Me = 1),
        Object.defineProperty(ze, '__esModule', { value: !0 }),
        (ze.default = e),
        (e.code = 'require("ajv/dist/runtime/ucs2length").default'),
        ze
      );
    })(),
    a = {
      keyword: ['maxLength', 'minLength'],
      type: 'string',
      schemaType: 'number',
      $data: !0,
      error: {
        message({ keyword: t, schemaCode: r }) {
          const a = 'maxLength' === t ? 'more' : 'fewer';
          return e.str`must NOT have ${a} than ${r} characters`;
        },
        params: ({ schemaCode: t }) => e._`{limit: ${t}}`,
      },
      code(a) {
        const { keyword: n, data: s, schemaCode: o, it: i } = a,
          c = 'maxLength' === n ? e.operators.GT : e.operators.LT,
          d =
            !1 === i.opts.unicode
              ? e._`${s}.length`
              : e._`${(0, t.useFunc)(a.gen, r.default)}(${s})`;
        a.fail$data(e._`${d} ${c} ${o}`);
      },
    };
  return ((Ae.default = a), Ae);
}
var Fe,
  Ke = {};
var Ue,
  Le = {};
var qe,
  Ge = {};
function Je() {
  if (qe) return Ge;
  ((qe = 1), Object.defineProperty(Ge, '__esModule', { value: !0 }));
  const e = X(),
    t = j(),
    r = T(),
    a = {
      keyword: 'required',
      type: 'object',
      schemaType: 'array',
      $data: !0,
      error: {
        message: ({ params: { missingProperty: e } }) =>
          t.str`must have required property '${e}'`,
        params: ({ params: { missingProperty: e } }) =>
          t._`{missingProperty: ${e}}`,
      },
      code(a) {
        const {
            gen: n,
            schema: s,
            schemaCode: o,
            data: i,
            $data: c,
            it: d,
          } = a,
          { opts: u } = d;
        if (!c && 0 === s.length) return;
        const l = s.length >= u.loopRequired;
        if (
          (d.allErrors
            ? (function () {
                if (l || c) a.block$data(t.nil, f);
                else for (const t of s) (0, e.checkReportMissingProp)(a, t);
              })()
            : (function () {
                const r = n.let('missing');
                if (l || c) {
                  const s = n.let('valid', !0);
                  (a.block$data(s, () =>
                    (function (r, s) {
                      (a.setParams({ missingProperty: r }),
                        n.forOf(
                          r,
                          o,
                          () => {
                            (n.assign(
                              s,
                              (0, e.propertyInData)(n, i, r, u.ownProperties),
                            ),
                              n.if((0, t.not)(s), () => {
                                (a.error(), n.break());
                              }));
                          },
                          t.nil,
                        ));
                    })(r, s),
                  ),
                    a.ok(s));
                } else
                  (n.if((0, e.checkMissingProp)(a, s, r)),
                    (0, e.reportMissingProp)(a, r),
                    n.else());
              })(),
          u.strictRequired)
        ) {
          const e = a.parentSchema.properties,
            { definedProperties: t } = a.it;
          for (const a of s)
            if (void 0 === (null == e ? void 0 : e[a]) && !t.has(a)) {
              const e = `required property "${a}" is not defined at "${d.schemaEnv.baseId + d.errSchemaPath}" (strictRequired)`;
              (0, r.checkStrictMode)(d, e, d.opts.strictRequired);
            }
        }
        function f() {
          n.forOf('prop', o, (t) => {
            (a.setParams({ missingProperty: t }),
              n.if((0, e.noPropertyInData)(n, i, t, u.ownProperties), () =>
                a.error(),
              ));
          });
        }
      },
    };
  return ((Ge.default = a), Ge);
}
var Be,
  He = {};
var We,
  Qe,
  Ze = {},
  Ye = {};
function Xe() {
  if (We) return Ye;
  ((We = 1), Object.defineProperty(Ye, '__esModule', { value: !0 }));
  const e = f();
  return (
    (e.code = 'require("ajv/dist/runtime/equal").default'),
    (Ye.default = e),
    Ye
  );
}
function et() {
  if (Qe) return Ze;
  ((Qe = 1), Object.defineProperty(Ze, '__esModule', { value: !0 }));
  const e = J(),
    t = j(),
    r = T(),
    a = Xe(),
    n = {
      keyword: 'uniqueItems',
      type: 'array',
      schemaType: 'boolean',
      $data: !0,
      error: {
        message: ({ params: { i: e, j: r } }) =>
          t.str`must NOT have duplicate items (items ## ${r} and ${e} are identical)`,
        params: ({ params: { i: e, j: r } }) => t._`{i: ${e}, j: ${r}}`,
      },
      code(n) {
        const {
          gen: s,
          data: o,
          $data: i,
          schema: c,
          parentSchema: d,
          schemaCode: u,
          it: l,
        } = n;
        if (!i && !c) return;
        const f = s.let('valid'),
          m = d.items ? (0, e.getSchemaTypes)(d.items) : [];
        function h(r, a) {
          const i = s.name('item'),
            c = (0, e.checkDataTypes)(
              m,
              i,
              l.opts.strictNumbers,
              e.DataType.Wrong,
            ),
            d = s.const('indices', t._`{}`);
          s.for(t._`;${r}--;`, () => {
            (s.let(i, t._`${o}[${r}]`),
              s.if(c, t._`continue`),
              m.length > 1 &&
                s.if(t._`typeof ${i} == "string"`, t._`${i} += "_"`),
              s
                .if(t._`typeof ${d}[${i}] == "number"`, () => {
                  (s.assign(a, t._`${d}[${i}]`),
                    n.error(),
                    s.assign(f, !1).break());
                })
                .code(t._`${d}[${i}] = ${r}`));
          });
        }
        function p(e, i) {
          const c = (0, r.useFunc)(s, a.default),
            d = s.name('outer');
          s.label(d).for(t._`;${e}--;`, () =>
            s.for(t._`${i} = ${e}; ${i}--;`, () =>
              s.if(t._`${c}(${o}[${e}], ${o}[${i}])`, () => {
                (n.error(), s.assign(f, !1).break(d));
              }),
            ),
          );
        }
        (n.block$data(
          f,
          function () {
            const e = s.let('i', t._`${o}.length`),
              r = s.let('j');
            (n.setParams({ i: e, j: r }),
              s.assign(f, !0),
              s.if(t._`${e} > 1`, () =>
                (m.length > 0 && !m.some((e) => 'object' === e || 'array' === e)
                  ? h
                  : p)(e, r),
              ));
          },
          t._`${u} === false`,
        ),
          n.ok(f));
      },
    };
  return ((Ze.default = n), Ze);
}
var tt,
  rt = {};
var at,
  nt,
  st = {};
function ot() {
  if (at) return st;
  ((at = 1), Object.defineProperty(st, '__esModule', { value: !0 }));
  const e = j(),
    t = T(),
    r = Xe(),
    a = {
      keyword: 'enum',
      schemaType: 'array',
      $data: !0,
      error: {
        message: 'must be equal to one of the allowed values',
        params: ({ schemaCode: t }) => e._`{allowedValues: ${t}}`,
      },
      code(a) {
        const {
          gen: n,
          data: s,
          $data: o,
          schema: i,
          schemaCode: c,
          it: d,
        } = a;
        if (!o && 0 === i.length)
          throw new Error('enum must have non-empty array');
        const u = i.length >= d.opts.loopEnum;
        let l;
        const f = () => (null != l ? l : (l = (0, t.useFunc)(n, r.default)));
        let m;
        if (u || o)
          ((m = n.let('valid')),
            a.block$data(m, function () {
              (n.assign(m, !1),
                n.forOf('v', c, (t) =>
                  n.if(e._`${f()}(${s}, ${t})`, () => n.assign(m, !0).break()),
                ));
            }));
        else {
          if (!Array.isArray(i)) throw new Error('ajv implementation error');
          const t = n.const('vSchema', c);
          m = (0, e.or)(
            ...i.map((r, a) =>
              (function (t, r) {
                const a = i[r];
                return 'object' == typeof a && null !== a
                  ? e._`${f()}(${s}, ${t}[${r}])`
                  : e._`${s} === ${a}`;
              })(t, a),
            ),
          );
        }
        a.pass(m);
      },
    };
  return ((st.default = a), st);
}
function it() {
  if (nt) return Te;
  ((nt = 1), Object.defineProperty(Te, '__esModule', { value: !0 }));
  const e = (function () {
      if (xe) return Ce;
      ((xe = 1), Object.defineProperty(Ce, '__esModule', { value: !0 }));
      const e = j(),
        t = e.operators,
        r = {
          maximum: { okStr: '<=', ok: t.LTE, fail: t.GT },
          minimum: { okStr: '>=', ok: t.GTE, fail: t.LT },
          exclusiveMaximum: { okStr: '<', ok: t.LT, fail: t.GTE },
          exclusiveMinimum: { okStr: '>', ok: t.GT, fail: t.LTE },
        },
        a = {
          message: ({ keyword: t, schemaCode: a }) =>
            e.str`must be ${r[t].okStr} ${a}`,
          params: ({ keyword: t, schemaCode: a }) =>
            e._`{comparison: ${r[t].okStr}, limit: ${a}}`,
        },
        n = {
          keyword: Object.keys(r),
          type: 'number',
          schemaType: 'number',
          $data: !0,
          error: a,
          code(t) {
            const { keyword: a, data: n, schemaCode: s } = t;
            t.fail$data(e._`${n} ${r[a].fail} ${s} || isNaN(${n})`);
          },
        };
      return ((Ce.default = n), Ce);
    })(),
    t = (function () {
      if (Re) return Ie;
      ((Re = 1), Object.defineProperty(Ie, '__esModule', { value: !0 }));
      const e = j(),
        t = {
          keyword: 'multipleOf',
          type: 'number',
          schemaType: 'number',
          $data: !0,
          error: {
            message: ({ schemaCode: t }) => e.str`must be multiple of ${t}`,
            params: ({ schemaCode: t }) => e._`{multipleOf: ${t}}`,
          },
          code(t) {
            const { gen: r, data: a, schemaCode: n, it: s } = t,
              o = s.opts.multipleOfPrecision,
              i = r.let('res'),
              c = o
                ? e._`Math.abs(Math.round(${i}) - ${i}) > 1e-${o}`
                : e._`${i} !== parseInt(${i})`;
            t.fail$data(e._`(${n} === 0 || (${i} = ${a}/${n}, ${c}))`);
          },
        };
      return ((Ie.default = t), Ie);
    })(),
    r = Ve(),
    a = (function () {
      if (Fe) return Ke;
      ((Fe = 1), Object.defineProperty(Ke, '__esModule', { value: !0 }));
      const e = X(),
        t = j(),
        r = {
          keyword: 'pattern',
          type: 'string',
          schemaType: 'string',
          $data: !0,
          error: {
            message: ({ schemaCode: e }) => t.str`must match pattern "${e}"`,
            params: ({ schemaCode: e }) => t._`{pattern: ${e}}`,
          },
          code(r) {
            const { data: a, $data: n, schema: s, schemaCode: o, it: i } = r,
              c = i.opts.unicodeRegExp ? 'u' : '',
              d = n ? t._`(new RegExp(${o}, ${c}))` : (0, e.usePattern)(r, s);
            r.fail$data(t._`!${d}.test(${a})`);
          },
        };
      return ((Ke.default = r), Ke);
    })(),
    n = (function () {
      if (Ue) return Le;
      ((Ue = 1), Object.defineProperty(Le, '__esModule', { value: !0 }));
      const e = j(),
        t = {
          keyword: ['maxProperties', 'minProperties'],
          type: 'object',
          schemaType: 'number',
          $data: !0,
          error: {
            message({ keyword: t, schemaCode: r }) {
              const a = 'maxProperties' === t ? 'more' : 'fewer';
              return e.str`must NOT have ${a} than ${r} properties`;
            },
            params: ({ schemaCode: t }) => e._`{limit: ${t}}`,
          },
          code(t) {
            const { keyword: r, data: a, schemaCode: n } = t,
              s = 'maxProperties' === r ? e.operators.GT : e.operators.LT;
            t.fail$data(e._`Object.keys(${a}).length ${s} ${n}`);
          },
        };
      return ((Le.default = t), Le);
    })(),
    s = Je(),
    o = (function () {
      if (Be) return He;
      ((Be = 1), Object.defineProperty(He, '__esModule', { value: !0 }));
      const e = j(),
        t = {
          keyword: ['maxItems', 'minItems'],
          type: 'array',
          schemaType: 'number',
          $data: !0,
          error: {
            message({ keyword: t, schemaCode: r }) {
              const a = 'maxItems' === t ? 'more' : 'fewer';
              return e.str`must NOT have ${a} than ${r} items`;
            },
            params: ({ schemaCode: t }) => e._`{limit: ${t}}`,
          },
          code(t) {
            const { keyword: r, data: a, schemaCode: n } = t,
              s = 'maxItems' === r ? e.operators.GT : e.operators.LT;
            t.fail$data(e._`${a}.length ${s} ${n}`);
          },
        };
      return ((He.default = t), He);
    })(),
    i = et(),
    c = (function () {
      if (tt) return rt;
      ((tt = 1), Object.defineProperty(rt, '__esModule', { value: !0 }));
      const e = j(),
        t = T(),
        r = Xe(),
        a = {
          keyword: 'const',
          $data: !0,
          error: {
            message: 'must be equal to constant',
            params: ({ schemaCode: t }) => e._`{allowedValue: ${t}}`,
          },
          code(a) {
            const { gen: n, data: s, $data: o, schemaCode: i, schema: c } = a;
            o || (c && 'object' == typeof c)
              ? a.fail$data(e._`!${(0, t.useFunc)(n, r.default)}(${s}, ${i})`)
              : a.fail(e._`${c} !== ${s}`);
          },
        };
      return ((rt.default = a), rt);
    })(),
    d = ot(),
    u = [
      e.default,
      t.default,
      r.default,
      a.default,
      n.default,
      s.default,
      o.default,
      i.default,
      { keyword: 'type', schemaType: ['string', 'array'] },
      { keyword: 'nullable', schemaType: 'boolean' },
      c.default,
      d.default,
    ];
  return ((Te.default = u), Te);
}
var ct,
  dt = {},
  ut = {};
function lt() {
  if (ct) return ut;
  ((ct = 1),
    Object.defineProperty(ut, '__esModule', { value: !0 }),
    (ut.validateAdditionalItems = void 0));
  const e = j(),
    t = T(),
    r = {
      keyword: 'additionalItems',
      type: 'array',
      schemaType: ['boolean', 'object'],
      before: 'uniqueItems',
      error: {
        message: ({ params: { len: t } }) =>
          e.str`must NOT have more than ${t} items`,
        params: ({ params: { len: t } }) => e._`{limit: ${t}}`,
      },
      code(e) {
        const { parentSchema: r, it: n } = e,
          { items: s } = r;
        Array.isArray(s)
          ? a(e, s)
          : (0, t.checkStrictMode)(
              n,
              '"additionalItems" is ignored when "items" is not an array of schemas',
            );
      },
    };
  function a(r, a) {
    const { gen: n, schema: s, data: o, keyword: i, it: c } = r;
    c.items = !0;
    const d = n.const('len', e._`${o}.length`);
    if (!1 === s)
      (r.setParams({ len: a.length }), r.pass(e._`${d} <= ${a.length}`));
    else if ('object' == typeof s && !(0, t.alwaysValidSchema)(c, s)) {
      const s = n.var('valid', e._`${d} <= ${a.length}`);
      (n.if((0, e.not)(s), () =>
        (function (s) {
          n.forRange('i', a.length, d, (a) => {
            (r.subschema(
              { keyword: i, dataProp: a, dataPropType: t.Type.Num },
              s,
            ),
              c.allErrors || n.if((0, e.not)(s), () => n.break()));
          });
        })(s),
      ),
        r.ok(s));
    }
  }
  return ((ut.validateAdditionalItems = a), (ut.default = r), ut);
}
var ft,
  mt,
  ht = {},
  pt = {};
function yt() {
  if (ft) return pt;
  ((ft = 1),
    Object.defineProperty(pt, '__esModule', { value: !0 }),
    (pt.validateTuple = void 0));
  const e = j(),
    t = T(),
    r = X(),
    a = {
      keyword: 'items',
      type: 'array',
      schemaType: ['object', 'array', 'boolean'],
      before: 'uniqueItems',
      code(e) {
        const { schema: a, it: s } = e;
        if (Array.isArray(a)) return n(e, 'additionalItems', a);
        ((s.items = !0),
          (0, t.alwaysValidSchema)(s, a) || e.ok((0, r.validateArray)(e)));
      },
    };
  function n(r, a, n = r.schema) {
    const { gen: s, parentSchema: o, data: i, keyword: c, it: d } = r;
    (!(function (e) {
      const { opts: r, errSchemaPath: s } = d,
        o = n.length,
        i = o === e.minItems && (o === e.maxItems || !1 === e[a]);
      if (r.strictTuples && !i) {
        const e = `"${c}" is ${o}-tuple, but minItems or maxItems/${a} are not specified or different at path "${s}"`;
        (0, t.checkStrictMode)(d, e, r.strictTuples);
      }
    })(o),
      d.opts.unevaluated &&
        n.length &&
        !0 !== d.items &&
        (d.items = t.mergeEvaluated.items(s, n.length, d.items)));
    const u = s.name('valid'),
      l = s.const('len', e._`${i}.length`);
    n.forEach((a, n) => {
      (0, t.alwaysValidSchema)(d, a) ||
        (s.if(e._`${l} > ${n}`, () =>
          r.subschema({ keyword: c, schemaProp: n, dataProp: n }, u),
        ),
        r.ok(u));
    });
  }
  return ((pt.validateTuple = n), (pt.default = a), pt);
}
var $t,
  vt = {};
var gt,
  _t = {};
function wt() {
  if (gt) return _t;
  ((gt = 1), Object.defineProperty(_t, '__esModule', { value: !0 }));
  const e = j(),
    t = T(),
    r = {
      keyword: 'contains',
      type: 'array',
      schemaType: ['object', 'boolean'],
      before: 'uniqueItems',
      trackErrors: !0,
      error: {
        message: ({ params: { min: t, max: r } }) =>
          void 0 === r
            ? e.str`must contain at least ${t} valid item(s)`
            : e.str`must contain at least ${t} and no more than ${r} valid item(s)`,
        params: ({ params: { min: t, max: r } }) =>
          void 0 === r
            ? e._`{minContains: ${t}}`
            : e._`{minContains: ${t}, maxContains: ${r}}`,
      },
      code(r) {
        const { gen: a, schema: n, parentSchema: s, data: o, it: i } = r;
        let c, d;
        const { minContains: u, maxContains: l } = s;
        i.opts.next ? ((c = void 0 === u ? 1 : u), (d = l)) : (c = 1);
        const f = a.const('len', e._`${o}.length`);
        if ((r.setParams({ min: c, max: d }), void 0 === d && 0 === c))
          return void (0, t.checkStrictMode)(
            i,
            '"minContains" == 0 without "maxContains": "contains" keyword ignored',
          );
        if (void 0 !== d && c > d)
          return (
            (0, t.checkStrictMode)(
              i,
              '"minContains" > "maxContains" is always invalid',
            ),
            void r.fail()
          );
        if ((0, t.alwaysValidSchema)(i, n)) {
          let t = e._`${f} >= ${c}`;
          return (
            void 0 !== d && (t = e._`${t} && ${f} <= ${d}`),
            void r.pass(t)
          );
        }
        i.items = !0;
        const m = a.name('valid');
        function h() {
          const t = a.name('_valid'),
            r = a.let('count', 0);
          p(t, () =>
            a.if(t, () =>
              (function (t) {
                (a.code(e._`${t}++`),
                  void 0 === d
                    ? a.if(e._`${t} >= ${c}`, () => a.assign(m, !0).break())
                    : (a.if(e._`${t} > ${d}`, () => a.assign(m, !1).break()),
                      1 === c
                        ? a.assign(m, !0)
                        : a.if(e._`${t} >= ${c}`, () => a.assign(m, !0))));
              })(r),
            ),
          );
        }
        function p(e, n) {
          a.forRange('i', 0, f, (a) => {
            (r.subschema(
              {
                keyword: 'contains',
                dataProp: a,
                dataPropType: t.Type.Num,
                compositeRule: !0,
              },
              e,
            ),
              n());
          });
        }
        (void 0 === d && 1 === c
          ? p(m, () => a.if(m, () => a.break()))
          : 0 === c
            ? (a.let(m, !0), void 0 !== d && a.if(e._`${o}.length > 0`, h))
            : (a.let(m, !1), h()),
          r.result(m, () => r.reset()));
      },
    };
  return ((_t.default = r), _t);
}
var bt,
  Pt = {};
function Et() {
  return (
    bt ||
      ((bt = 1),
      (function (e) {
        (Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0));
        const t = j(),
          r = T(),
          a = X();
        e.error = {
          message: ({ params: { property: e, depsCount: r, deps: a } }) => {
            const n = 1 === r ? 'property' : 'properties';
            return t.str`must have ${n} ${a} when property ${e} is present`;
          },
          params: ({
            params: { property: e, depsCount: r, deps: a, missingProperty: n },
          }) => t._`{property: ${e},
    missingProperty: ${n},
    depsCount: ${r},
    deps: ${a}}`,
        };
        const n = {
          keyword: 'dependencies',
          type: 'object',
          schemaType: 'object',
          error: e.error,
          code(e) {
            const [t, r] = (function ({ schema: e }) {
              const t = {},
                r = {};
              for (const a in e) {
                if ('__proto__' === a) continue;
                (Array.isArray(e[a]) ? t : r)[a] = e[a];
              }
              return [t, r];
            })(e);
            (s(e, t), o(e, r));
          },
        };
        function s(e, r = e.schema) {
          const { gen: n, data: s, it: o } = e;
          if (0 === Object.keys(r).length) return;
          const i = n.let('missing');
          for (const c in r) {
            const d = r[c];
            if (0 === d.length) continue;
            const u = (0, a.propertyInData)(n, s, c, o.opts.ownProperties);
            (e.setParams({
              property: c,
              depsCount: d.length,
              deps: d.join(', '),
            }),
              o.allErrors
                ? n.if(u, () => {
                    for (const t of d) (0, a.checkReportMissingProp)(e, t);
                  })
                : (n.if(t._`${u} && (${(0, a.checkMissingProp)(e, d, i)})`),
                  (0, a.reportMissingProp)(e, i),
                  n.else()));
          }
        }
        function o(e, t = e.schema) {
          const { gen: n, data: s, keyword: o, it: i } = e,
            c = n.name('valid');
          for (const d in t)
            (0, r.alwaysValidSchema)(i, t[d]) ||
              (n.if(
                (0, a.propertyInData)(n, s, d, i.opts.ownProperties),
                () => {
                  const t = e.subschema({ keyword: o, schemaProp: d }, c);
                  e.mergeValidEvaluated(t, c);
                },
                () => n.var(c, !0),
              ),
              e.ok(c));
        }
        ((e.validatePropertyDeps = s),
          (e.validateSchemaDeps = o),
          (e.default = n));
      })(Pt)),
    Pt
  );
}
var St,
  kt = {};
var Nt,
  jt = {};
function Ot() {
  if (Nt) return jt;
  ((Nt = 1), Object.defineProperty(jt, '__esModule', { value: !0 }));
  const e = X(),
    t = j(),
    r = D(),
    a = T(),
    n = {
      keyword: 'additionalProperties',
      type: ['object'],
      schemaType: ['boolean', 'object'],
      allowUndefined: !0,
      trackErrors: !0,
      error: {
        message: 'must NOT have additional properties',
        params: ({ params: e }) =>
          t._`{additionalProperty: ${e.additionalProperty}}`,
      },
      code(n) {
        const {
          gen: s,
          schema: o,
          parentSchema: i,
          data: c,
          errsCount: d,
          it: u,
        } = n;
        if (!d) throw new Error('ajv implementation error');
        const { allErrors: l, opts: f } = u;
        if (
          ((u.props = !0),
          'all' !== f.removeAdditional && (0, a.alwaysValidSchema)(u, o))
        )
          return;
        const m = (0, e.allSchemaProperties)(i.properties),
          h = (0, e.allSchemaProperties)(i.patternProperties);
        function p(e) {
          s.code(t._`delete ${c}[${e}]`);
        }
        function y(e) {
          if ('all' === f.removeAdditional || (f.removeAdditional && !1 === o))
            p(e);
          else {
            if (!1 === o)
              return (
                n.setParams({ additionalProperty: e }),
                n.error(),
                void (l || s.break())
              );
            if ('object' == typeof o && !(0, a.alwaysValidSchema)(u, o)) {
              const r = s.name('valid');
              'failing' === f.removeAdditional
                ? ($(e, r, !1),
                  s.if((0, t.not)(r), () => {
                    (n.reset(), p(e));
                  }))
                : ($(e, r), l || s.if((0, t.not)(r), () => s.break()));
            }
          }
        }
        function $(e, t, r) {
          const s = {
            keyword: 'additionalProperties',
            dataProp: e,
            dataPropType: a.Type.Str,
          };
          (!1 === r &&
            Object.assign(s, {
              compositeRule: !0,
              createErrors: !1,
              allErrors: !1,
            }),
            n.subschema(s, t));
        }
        (s.forIn('key', c, (r) => {
          m.length || h.length
            ? s.if(
                (function (r) {
                  let o;
                  if (m.length > 8) {
                    const t = (0, a.schemaRefOrVal)(
                      u,
                      i.properties,
                      'properties',
                    );
                    o = (0, e.isOwnProperty)(s, t, r);
                  } else
                    o = m.length
                      ? (0, t.or)(...m.map((e) => t._`${r} === ${e}`))
                      : t.nil;
                  return (
                    h.length &&
                      (o = (0, t.or)(
                        o,
                        ...h.map(
                          (a) => t._`${(0, e.usePattern)(n, a)}.test(${r})`,
                        ),
                      )),
                    (0, t.not)(o)
                  );
                })(r),
                () => y(r),
              )
            : y(r);
        }),
          n.ok(t._`${d} === ${r.default.errors}`));
      },
    };
  return ((jt.default = n), jt);
}
var xt,
  Tt = {};
var Ct,
  Rt = {};
var It,
  Mt = {};
var Dt,
  At = {};
var zt,
  Vt = {};
var Ft,
  Kt = {};
var Ut,
  Lt = {};
var qt,
  Gt,
  Jt = {};
function Bt() {
  if (Gt) return dt;
  ((Gt = 1), Object.defineProperty(dt, '__esModule', { value: !0 }));
  const e = lt(),
    t = (function () {
      if (mt) return ht;
      ((mt = 1), Object.defineProperty(ht, '__esModule', { value: !0 }));
      const e = yt(),
        t = {
          keyword: 'prefixItems',
          type: 'array',
          schemaType: ['array'],
          before: 'uniqueItems',
          code: (t) => (0, e.validateTuple)(t, 'items'),
        };
      return ((ht.default = t), ht);
    })(),
    r = yt(),
    a = (function () {
      if ($t) return vt;
      (($t = 1), Object.defineProperty(vt, '__esModule', { value: !0 }));
      const e = j(),
        t = T(),
        r = X(),
        a = lt(),
        n = {
          keyword: 'items',
          type: 'array',
          schemaType: ['object', 'boolean'],
          before: 'uniqueItems',
          error: {
            message: ({ params: { len: t } }) =>
              e.str`must NOT have more than ${t} items`,
            params: ({ params: { len: t } }) => e._`{limit: ${t}}`,
          },
          code(e) {
            const { schema: n, parentSchema: s, it: o } = e,
              { prefixItems: i } = s;
            ((o.items = !0),
              (0, t.alwaysValidSchema)(o, n) ||
                (i
                  ? (0, a.validateAdditionalItems)(e, i)
                  : e.ok((0, r.validateArray)(e))));
          },
        };
      return ((vt.default = n), vt);
    })(),
    n = wt(),
    s = Et(),
    o = (function () {
      if (St) return kt;
      ((St = 1), Object.defineProperty(kt, '__esModule', { value: !0 }));
      const e = j(),
        t = T(),
        r = {
          keyword: 'propertyNames',
          type: 'object',
          schemaType: ['object', 'boolean'],
          error: {
            message: 'property name must be valid',
            params: ({ params: t }) => e._`{propertyName: ${t.propertyName}}`,
          },
          code(r) {
            const { gen: a, schema: n, data: s, it: o } = r;
            if ((0, t.alwaysValidSchema)(o, n)) return;
            const i = a.name('valid');
            (a.forIn('key', s, (t) => {
              (r.setParams({ propertyName: t }),
                r.subschema(
                  {
                    keyword: 'propertyNames',
                    data: t,
                    dataTypes: ['string'],
                    propertyName: t,
                    compositeRule: !0,
                  },
                  i,
                ),
                a.if((0, e.not)(i), () => {
                  (r.error(!0), o.allErrors || a.break());
                }));
            }),
              r.ok(i));
          },
        };
      return ((kt.default = r), kt);
    })(),
    i = Ot(),
    c = (function () {
      if (xt) return Tt;
      ((xt = 1), Object.defineProperty(Tt, '__esModule', { value: !0 }));
      const e = ie(),
        t = X(),
        r = T(),
        a = Ot(),
        n = {
          keyword: 'properties',
          type: 'object',
          schemaType: 'object',
          code(n) {
            const { gen: s, schema: o, parentSchema: i, data: c, it: d } = n;
            'all' === d.opts.removeAdditional &&
              void 0 === i.additionalProperties &&
              a.default.code(
                new e.KeywordCxt(d, a.default, 'additionalProperties'),
              );
            const u = (0, t.allSchemaProperties)(o);
            for (const e of u) d.definedProperties.add(e);
            d.opts.unevaluated &&
              u.length &&
              !0 !== d.props &&
              (d.props = r.mergeEvaluated.props(s, (0, r.toHash)(u), d.props));
            const l = u.filter((e) => !(0, r.alwaysValidSchema)(d, o[e]));
            if (0 === l.length) return;
            const f = s.name('valid');
            for (const e of l)
              (m(e)
                ? h(e)
                : (s.if((0, t.propertyInData)(s, c, e, d.opts.ownProperties)),
                  h(e),
                  d.allErrors || s.else().var(f, !0),
                  s.endIf()),
                n.it.definedProperties.add(e),
                n.ok(f));
            function m(e) {
              return (
                d.opts.useDefaults &&
                !d.compositeRule &&
                void 0 !== o[e].default
              );
            }
            function h(e) {
              n.subschema(
                { keyword: 'properties', schemaProp: e, dataProp: e },
                f,
              );
            }
          },
        };
      return ((Tt.default = n), Tt);
    })(),
    d = (function () {
      if (Ct) return Rt;
      ((Ct = 1), Object.defineProperty(Rt, '__esModule', { value: !0 }));
      const e = X(),
        t = j(),
        r = T(),
        a = T(),
        n = {
          keyword: 'patternProperties',
          type: 'object',
          schemaType: 'object',
          code(n) {
            const { gen: s, schema: o, data: i, parentSchema: c, it: d } = n,
              { opts: u } = d,
              l = (0, e.allSchemaProperties)(o),
              f = l.filter((e) => (0, r.alwaysValidSchema)(d, o[e]));
            if (
              0 === l.length ||
              (f.length === l.length && (!d.opts.unevaluated || !0 === d.props))
            )
              return;
            const m =
                u.strictSchema && !u.allowMatchingProperties && c.properties,
              h = s.name('valid');
            !0 === d.props ||
              d.props instanceof t.Name ||
              (d.props = (0, a.evaluatedPropsToName)(s, d.props));
            const { props: p } = d;
            function y(e) {
              for (const t in m)
                new RegExp(e).test(t) &&
                  (0, r.checkStrictMode)(
                    d,
                    `property ${t} matches pattern ${e} (use allowMatchingProperties)`,
                  );
            }
            function $(r) {
              s.forIn('key', i, (o) => {
                s.if(t._`${(0, e.usePattern)(n, r)}.test(${o})`, () => {
                  const e = f.includes(r);
                  (e ||
                    n.subschema(
                      {
                        keyword: 'patternProperties',
                        schemaProp: r,
                        dataProp: o,
                        dataPropType: a.Type.Str,
                      },
                      h,
                    ),
                    d.opts.unevaluated && !0 !== p
                      ? s.assign(t._`${p}[${o}]`, !0)
                      : e ||
                        d.allErrors ||
                        s.if((0, t.not)(h), () => s.break()));
                });
              });
            }
            !(function () {
              for (const e of l)
                (m && y(e), d.allErrors ? $(e) : (s.var(h, !0), $(e), s.if(h)));
            })();
          },
        };
      return ((Rt.default = n), Rt);
    })(),
    u = (function () {
      if (It) return Mt;
      ((It = 1), Object.defineProperty(Mt, '__esModule', { value: !0 }));
      const e = T(),
        t = {
          keyword: 'not',
          schemaType: ['object', 'boolean'],
          trackErrors: !0,
          code(t) {
            const { gen: r, schema: a, it: n } = t;
            if ((0, e.alwaysValidSchema)(n, a)) return void t.fail();
            const s = r.name('valid');
            (t.subschema(
              {
                keyword: 'not',
                compositeRule: !0,
                createErrors: !1,
                allErrors: !1,
              },
              s,
            ),
              t.failResult(
                s,
                () => t.reset(),
                () => t.error(),
              ));
          },
          error: { message: 'must NOT be valid' },
        };
      return ((Mt.default = t), Mt);
    })(),
    l = (function () {
      if (Dt) return At;
      ((Dt = 1), Object.defineProperty(At, '__esModule', { value: !0 }));
      const e = {
        keyword: 'anyOf',
        schemaType: 'array',
        trackErrors: !0,
        code: X().validateUnion,
        error: { message: 'must match a schema in anyOf' },
      };
      return ((At.default = e), At);
    })(),
    f = (function () {
      if (zt) return Vt;
      ((zt = 1), Object.defineProperty(Vt, '__esModule', { value: !0 }));
      const e = j(),
        t = T(),
        r = {
          keyword: 'oneOf',
          schemaType: 'array',
          trackErrors: !0,
          error: {
            message: 'must match exactly one schema in oneOf',
            params: ({ params: t }) => e._`{passingSchemas: ${t.passing}}`,
          },
          code(r) {
            const { gen: a, schema: n, parentSchema: s, it: o } = r;
            if (!Array.isArray(n)) throw new Error('ajv implementation error');
            if (o.opts.discriminator && s.discriminator) return;
            const i = n,
              c = a.let('valid', !1),
              d = a.let('passing', null),
              u = a.name('_valid');
            (r.setParams({ passing: d }),
              a.block(function () {
                i.forEach((n, s) => {
                  let i;
                  ((0, t.alwaysValidSchema)(o, n)
                    ? a.var(u, !0)
                    : (i = r.subschema(
                        { keyword: 'oneOf', schemaProp: s, compositeRule: !0 },
                        u,
                      )),
                    s > 0 &&
                      a
                        .if(e._`${u} && ${c}`)
                        .assign(c, !1)
                        .assign(d, e._`[${d}, ${s}]`)
                        .else(),
                    a.if(u, () => {
                      (a.assign(c, !0),
                        a.assign(d, s),
                        i && r.mergeEvaluated(i, e.Name));
                    }));
                });
              }),
              r.result(
                c,
                () => r.reset(),
                () => r.error(!0),
              ));
          },
        };
      return ((Vt.default = r), Vt);
    })(),
    m = (function () {
      if (Ft) return Kt;
      ((Ft = 1), Object.defineProperty(Kt, '__esModule', { value: !0 }));
      const e = T(),
        t = {
          keyword: 'allOf',
          schemaType: 'array',
          code(t) {
            const { gen: r, schema: a, it: n } = t;
            if (!Array.isArray(a)) throw new Error('ajv implementation error');
            const s = r.name('valid');
            a.forEach((r, a) => {
              if ((0, e.alwaysValidSchema)(n, r)) return;
              const o = t.subschema({ keyword: 'allOf', schemaProp: a }, s);
              (t.ok(s), t.mergeEvaluated(o));
            });
          },
        };
      return ((Kt.default = t), Kt);
    })(),
    h = (function () {
      if (Ut) return Lt;
      ((Ut = 1), Object.defineProperty(Lt, '__esModule', { value: !0 }));
      const e = j(),
        t = T(),
        r = {
          keyword: 'if',
          schemaType: ['object', 'boolean'],
          trackErrors: !0,
          error: {
            message: ({ params: t }) =>
              e.str`must match "${t.ifClause}" schema`,
            params: ({ params: t }) => e._`{failingKeyword: ${t.ifClause}}`,
          },
          code(r) {
            const { gen: n, parentSchema: s, it: o } = r;
            void 0 === s.then &&
              void 0 === s.else &&
              (0, t.checkStrictMode)(
                o,
                '"if" without "then" and "else" is ignored',
              );
            const i = a(o, 'then'),
              c = a(o, 'else');
            if (!i && !c) return;
            const d = n.let('valid', !0),
              u = n.name('_valid');
            if (
              ((function () {
                const e = r.subschema(
                  {
                    keyword: 'if',
                    compositeRule: !0,
                    createErrors: !1,
                    allErrors: !1,
                  },
                  u,
                );
                r.mergeEvaluated(e);
              })(),
              r.reset(),
              i && c)
            ) {
              const e = n.let('ifClause');
              (r.setParams({ ifClause: e }),
                n.if(u, l('then', e), l('else', e)));
            } else i ? n.if(u, l('then')) : n.if((0, e.not)(u), l('else'));
            function l(t, a) {
              return () => {
                const s = r.subschema({ keyword: t }, u);
                (n.assign(d, u),
                  r.mergeValidEvaluated(s, d),
                  a ? n.assign(a, e._`${t}`) : r.setParams({ ifClause: t }));
              };
            }
            r.pass(d, () => r.error(!0));
          },
        };
      function a(e, r) {
        const a = e.schema[r];
        return void 0 !== a && !(0, t.alwaysValidSchema)(e, a);
      }
      return ((Lt.default = r), Lt);
    })(),
    p = (function () {
      if (qt) return Jt;
      ((qt = 1), Object.defineProperty(Jt, '__esModule', { value: !0 }));
      const e = T(),
        t = {
          keyword: ['then', 'else'],
          schemaType: ['object', 'boolean'],
          code({ keyword: t, parentSchema: r, it: a }) {
            void 0 === r.if &&
              (0, e.checkStrictMode)(a, `"${t}" without "if" is ignored`);
          },
        };
      return ((Jt.default = t), Jt);
    })();
  return (
    (dt.default = function (y = !1) {
      const $ = [
        u.default,
        l.default,
        f.default,
        m.default,
        h.default,
        p.default,
        o.default,
        i.default,
        s.default,
        c.default,
        d.default,
      ];
      return (
        y ? $.push(t.default, a.default) : $.push(e.default, r.default),
        $.push(n.default),
        $
      );
    }),
    dt
  );
}
var Ht,
  Wt,
  Qt = {},
  Zt = {};
function Yt() {
  if (Wt) return Qt;
  ((Wt = 1), Object.defineProperty(Qt, '__esModule', { value: !0 }));
  const e = (function () {
      if (Ht) return Zt;
      ((Ht = 1), Object.defineProperty(Zt, '__esModule', { value: !0 }));
      const e = j(),
        t = {
          keyword: 'format',
          type: ['number', 'string'],
          schemaType: 'string',
          $data: !0,
          error: {
            message: ({ schemaCode: t }) => e.str`must match format "${t}"`,
            params: ({ schemaCode: t }) => e._`{format: ${t}}`,
          },
          code(t, r) {
            const {
                gen: a,
                data: n,
                $data: s,
                schema: o,
                schemaCode: i,
                it: c,
              } = t,
              { opts: d, errSchemaPath: u, schemaEnv: l, self: f } = c;
            d.validateFormats &&
              (s
                ? (function () {
                    const s = a.scopeValue('formats', {
                        ref: f.formats,
                        code: d.code.formats,
                      }),
                      o = a.const('fDef', e._`${s}[${i}]`),
                      c = a.let('fType'),
                      u = a.let('format');
                    (a.if(
                      e._`typeof ${o} == "object" && !(${o} instanceof RegExp)`,
                      () =>
                        a
                          .assign(c, e._`${o}.type || "string"`)
                          .assign(u, e._`${o}.validate`),
                      () => a.assign(c, e._`"string"`).assign(u, o),
                    ),
                      t.fail$data(
                        (0, e.or)(
                          !1 === d.strictSchema ? e.nil : e._`${i} && !${u}`,
                          (function () {
                            const t = l.$async
                                ? e._`(${o}.async ? await ${u}(${n}) : ${u}(${n}))`
                                : e._`${u}(${n})`,
                              a = e._`(typeof ${u} == "function" ? ${t} : ${u}.test(${n}))`;
                            return e._`${u} && ${u} !== true && ${c} === ${r} && !${a}`;
                          })(),
                        ),
                      ));
                  })()
                : (function () {
                    const s = f.formats[o];
                    if (!s)
                      return void (function () {
                        if (!1 !== d.strictSchema) throw new Error(e());
                        function e() {
                          return `unknown format "${o}" ignored in schema at path "${u}"`;
                        }
                        f.logger.warn(e());
                      })();
                    if (!0 === s) return;
                    const [i, c, m] = (function (t) {
                      const r =
                          t instanceof RegExp
                            ? (0, e.regexpCode)(t)
                            : d.code.formats
                              ? e._`${d.code.formats}${(0, e.getProperty)(o)}`
                              : void 0,
                        n = a.scopeValue('formats', {
                          key: o,
                          ref: t,
                          code: r,
                        });
                      return 'object' != typeof t || t instanceof RegExp
                        ? ['string', t, n]
                        : [t.type || 'string', t.validate, e._`${n}.validate`];
                    })(s);
                    i === r &&
                      t.pass(
                        (function () {
                          if (
                            'object' == typeof s &&
                            !(s instanceof RegExp) &&
                            s.async
                          ) {
                            if (!l.$async)
                              throw new Error('async format in sync schema');
                            return e._`await ${m}(${n})`;
                          }
                          return 'function' == typeof c
                            ? e._`${m}(${n})`
                            : e._`${m}.test(${n})`;
                        })(),
                      );
                  })());
          },
        };
      return ((Zt.default = t), Zt);
    })(),
    t = [e.default];
  return ((Qt.default = t), Qt);
}
var Xt,
  er,
  tr = {};
function rr() {
  if (er) return Pe;
  ((er = 1), Object.defineProperty(Pe, '__esModule', { value: !0 }));
  const e = Oe(),
    t = it(),
    r = Bt(),
    a = Yt(),
    n =
      (Xt ||
        ((Xt = 1),
        Object.defineProperty(tr, '__esModule', { value: !0 }),
        (tr.contentVocabulary = tr.metadataVocabulary = void 0),
        (tr.metadataVocabulary = [
          'title',
          'description',
          'default',
          'deprecated',
          'readOnly',
          'writeOnly',
          'examples',
        ]),
        (tr.contentVocabulary = [
          'contentMediaType',
          'contentEncoding',
          'contentSchema',
        ])),
      tr),
    s = [
      e.default,
      t.default,
      (0, r.default)(),
      a.default,
      n.metadataVocabulary,
      n.contentVocabulary,
    ];
  return ((Pe.default = s), Pe);
}
var ar,
  nr,
  sr = {},
  or = {};
function ir() {
  if (nr) return sr;
  ((nr = 1), Object.defineProperty(sr, '__esModule', { value: !0 }));
  const e = j(),
    t =
      (ar ||
        ((ar = 1),
        Object.defineProperty(or, '__esModule', { value: !0 }),
        (or.DiscrError = void 0),
        ((a = r || (or.DiscrError = r = {})).Tag = 'tag'),
        (a.Mapping = 'mapping')),
      or);
  var r, a;
  const n = ye(),
    s = me(),
    o = T(),
    i = {
      keyword: 'discriminator',
      type: 'object',
      schemaType: 'object',
      error: {
        message: ({ params: { discrError: e, tagName: r } }) =>
          e === t.DiscrError.Tag
            ? `tag "${r}" must be string`
            : `value of tag "${r}" must be in oneOf`,
        params: ({ params: { discrError: t, tag: r, tagName: a } }) =>
          e._`{error: ${t}, tag: ${a}, tagValue: ${r}}`,
      },
      code(r) {
        const { gen: a, data: i, schema: c, parentSchema: d, it: u } = r,
          { oneOf: l } = d;
        if (!u.opts.discriminator)
          throw new Error('discriminator: requires discriminator option');
        const f = c.propertyName;
        if ('string' != typeof f)
          throw new Error('discriminator: requires propertyName');
        if (c.mapping)
          throw new Error('discriminator: mapping is not supported');
        if (!l) throw new Error('discriminator: requires oneOf keyword');
        const m = a.let('valid', !1),
          h = a.const('tag', e._`${i}${(0, e.getProperty)(f)}`);
        function p(t) {
          const n = a.name('valid'),
            s = r.subschema({ keyword: 'oneOf', schemaProp: t }, n);
          return (r.mergeEvaluated(s, e.Name), n);
        }
        (a.if(
          e._`typeof ${h} == "string"`,
          () =>
            (function () {
              const i = (function () {
                var e;
                const t = {},
                  r = i(d);
                let a = !0;
                for (let d = 0; d < l.length; d++) {
                  let t = l[d];
                  if (
                    (null == t ? void 0 : t.$ref) &&
                    !(0, o.schemaHasRulesButRef)(t, u.self.RULES)
                  ) {
                    const e = t.$ref;
                    if (
                      ((t = n.resolveRef.call(
                        u.self,
                        u.schemaEnv.root,
                        u.baseId,
                        e,
                      )),
                      t instanceof n.SchemaEnv && (t = t.schema),
                      void 0 === t)
                    )
                      throw new s.default(u.opts.uriResolver, u.baseId, e);
                  }
                  const m =
                    null === (e = null == t ? void 0 : t.properties) ||
                    void 0 === e
                      ? void 0
                      : e[f];
                  if ('object' != typeof m)
                    throw new Error(
                      `discriminator: oneOf subschemas (or referenced schemas) must have "properties/${f}"`,
                    );
                  ((a = a && (r || i(t))), c(m, d));
                }
                if (!a)
                  throw new Error(`discriminator: "${f}" must be required`);
                return t;
                function i({ required: e }) {
                  return Array.isArray(e) && e.includes(f);
                }
                function c(e, t) {
                  if (e.const) m(e.const, t);
                  else {
                    if (!e.enum)
                      throw new Error(
                        `discriminator: "properties/${f}" must have "const" or "enum"`,
                      );
                    for (const r of e.enum) m(r, t);
                  }
                }
                function m(e, r) {
                  if ('string' != typeof e || e in t)
                    throw new Error(
                      `discriminator: "${f}" values must be unique strings`,
                    );
                  t[e] = r;
                }
              })();
              a.if(!1);
              for (const t in i)
                (a.elseIf(e._`${h} === ${t}`), a.assign(m, p(i[t])));
              (a.else(),
                r.error(!1, {
                  discrError: t.DiscrError.Mapping,
                  tag: h,
                  tagName: f,
                }),
                a.endIf());
            })(),
          () =>
            r.error(!1, { discrError: t.DiscrError.Tag, tag: h, tagName: f }),
        ),
          r.ok(m));
      },
    };
  return ((sr.default = i), sr);
}
const cr = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  $id: 'http://json-schema.org/draft-07/schema#',
  title: 'Core schema meta-schema',
  definitions: {
    schemaArray: { type: 'array', minItems: 1, items: { $ref: '#' } },
    nonNegativeInteger: { type: 'integer', minimum: 0 },
    nonNegativeIntegerDefault0: {
      allOf: [{ $ref: '#/definitions/nonNegativeInteger' }, { default: 0 }],
    },
    simpleTypes: {
      enum: [
        'array',
        'boolean',
        'integer',
        'null',
        'number',
        'object',
        'string',
      ],
    },
    stringArray: {
      type: 'array',
      items: { type: 'string' },
      uniqueItems: !0,
      default: [],
    },
  },
  type: ['object', 'boolean'],
  properties: {
    $id: { type: 'string', format: 'uri-reference' },
    $schema: { type: 'string', format: 'uri' },
    $ref: { type: 'string', format: 'uri-reference' },
    $comment: { type: 'string' },
    title: { type: 'string' },
    description: { type: 'string' },
    default: !0,
    readOnly: { type: 'boolean', default: !1 },
    examples: { type: 'array', items: !0 },
    multipleOf: { type: 'number', exclusiveMinimum: 0 },
    maximum: { type: 'number' },
    exclusiveMaximum: { type: 'number' },
    minimum: { type: 'number' },
    exclusiveMinimum: { type: 'number' },
    maxLength: { $ref: '#/definitions/nonNegativeInteger' },
    minLength: { $ref: '#/definitions/nonNegativeIntegerDefault0' },
    pattern: { type: 'string', format: 'regex' },
    additionalItems: { $ref: '#' },
    items: {
      anyOf: [{ $ref: '#' }, { $ref: '#/definitions/schemaArray' }],
      default: !0,
    },
    maxItems: { $ref: '#/definitions/nonNegativeInteger' },
    minItems: { $ref: '#/definitions/nonNegativeIntegerDefault0' },
    uniqueItems: { type: 'boolean', default: !1 },
    contains: { $ref: '#' },
    maxProperties: { $ref: '#/definitions/nonNegativeInteger' },
    minProperties: { $ref: '#/definitions/nonNegativeIntegerDefault0' },
    required: { $ref: '#/definitions/stringArray' },
    additionalProperties: { $ref: '#' },
    definitions: {
      type: 'object',
      additionalProperties: { $ref: '#' },
      default: {},
    },
    properties: {
      type: 'object',
      additionalProperties: { $ref: '#' },
      default: {},
    },
    patternProperties: {
      type: 'object',
      additionalProperties: { $ref: '#' },
      propertyNames: { format: 'regex' },
      default: {},
    },
    dependencies: {
      type: 'object',
      additionalProperties: {
        anyOf: [{ $ref: '#' }, { $ref: '#/definitions/stringArray' }],
      },
    },
    propertyNames: { $ref: '#' },
    const: !0,
    enum: { type: 'array', items: !0, minItems: 1, uniqueItems: !0 },
    type: {
      anyOf: [
        { $ref: '#/definitions/simpleTypes' },
        {
          type: 'array',
          items: { $ref: '#/definitions/simpleTypes' },
          minItems: 1,
          uniqueItems: !0,
        },
      ],
    },
    format: { type: 'string' },
    contentMediaType: { type: 'string' },
    contentEncoding: { type: 'string' },
    if: { $ref: '#' },
    then: { $ref: '#' },
    else: { $ref: '#' },
    allOf: { $ref: '#/definitions/schemaArray' },
    anyOf: { $ref: '#/definitions/schemaArray' },
    oneOf: { $ref: '#/definitions/schemaArray' },
    not: { $ref: '#' },
  },
  default: !0,
};
var dr;
function ur() {
  return (
    dr ||
      ((dr = 1),
      (function (e, t) {
        (Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.MissingRefError =
            t.ValidationError =
            t.CodeGen =
            t.Name =
            t.nil =
            t.stringify =
            t.str =
            t._ =
            t.KeywordCxt =
            t.Ajv =
              void 0));
        const r = we(),
          a = rr(),
          n = ir(),
          s = cr,
          o = ['/properties'],
          i = 'http://json-schema.org/draft-07/schema';
        class c extends r.default {
          _addVocabularies() {
            (super._addVocabularies(),
              a.default.forEach((e) => this.addVocabulary(e)),
              this.opts.discriminator && this.addKeyword(n.default));
          }
          _addDefaultMetaSchema() {
            if ((super._addDefaultMetaSchema(), !this.opts.meta)) return;
            const e = this.opts.$data ? this.$dataMetaSchema(s, o) : s;
            (this.addMetaSchema(e, i, !1),
              (this.refs['http://json-schema.org/schema'] = i));
          }
          defaultMeta() {
            return (this.opts.defaultMeta =
              super.defaultMeta() || (this.getSchema(i) ? i : void 0));
          }
        }
        ((t.Ajv = c),
          (e.exports = t = c),
          (e.exports.Ajv = c),
          Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = c));
        var d = ie();
        Object.defineProperty(t, 'KeywordCxt', {
          enumerable: !0,
          get: function () {
            return d.KeywordCxt;
          },
        });
        var u = j();
        (Object.defineProperty(t, '_', {
          enumerable: !0,
          get: function () {
            return u._;
          },
        }),
          Object.defineProperty(t, 'str', {
            enumerable: !0,
            get: function () {
              return u.str;
            },
          }),
          Object.defineProperty(t, 'stringify', {
            enumerable: !0,
            get: function () {
              return u.stringify;
            },
          }),
          Object.defineProperty(t, 'nil', {
            enumerable: !0,
            get: function () {
              return u.nil;
            },
          }),
          Object.defineProperty(t, 'Name', {
            enumerable: !0,
            get: function () {
              return u.Name;
            },
          }),
          Object.defineProperty(t, 'CodeGen', {
            enumerable: !0,
            get: function () {
              return u.CodeGen;
            },
          }));
        var l = ue();
        Object.defineProperty(t, 'ValidationError', {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        });
        var f = me();
        Object.defineProperty(t, 'MissingRefError', {
          enumerable: !0,
          get: function () {
            return f.default;
          },
        });
      })(y, y.exports)),
    y.exports
  );
}
const lr = l(ur());
var fr,
  mr = { exports: {} },
  hr = {};
var pr,
  yr,
  $r = {};
const vr = l(
  (yr ||
    ((yr = 1),
    (function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const r =
          (fr ||
            ((fr = 1),
            (function (e) {
              function t(e, t) {
                return { validate: e, compare: t };
              }
              (Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.formatNames = e.fastFormats = e.fullFormats = void 0),
                (e.fullFormats = {
                  date: t(n, s),
                  time: t(u(!0), l),
                  'date-time': t(h(!0), p),
                  'iso-time': t(u(), f),
                  'iso-date-time': t(h(), y),
                  duration:
                    /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
                  uri: function (e) {
                    return $.test(e) && v.test(e);
                  },
                  'uri-reference':
                    /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
                  'uri-template':
                    /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
                  url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
                  email:
                    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
                  hostname:
                    /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
                  ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,
                  ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
                  regex: function (e) {
                    if (P.test(e)) return !1;
                    try {
                      return (new RegExp(e), !0);
                    } catch (t) {
                      return !1;
                    }
                  },
                  uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
                  'json-pointer': /^(?:\/(?:[^~/]|~0|~1)*)*$/,
                  'json-pointer-uri-fragment':
                    /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
                  'relative-json-pointer':
                    /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
                  byte: function (e) {
                    return ((g.lastIndex = 0), g.test(e));
                  },
                  int32: {
                    type: 'number',
                    validate: function (e) {
                      return Number.isInteger(e) && e <= w && e >= _;
                    },
                  },
                  int64: {
                    type: 'number',
                    validate: function (e) {
                      return Number.isInteger(e);
                    },
                  },
                  float: { type: 'number', validate: b },
                  double: { type: 'number', validate: b },
                  password: !0,
                  binary: !0,
                }),
                (e.fastFormats = d(c({}, e.fullFormats), {
                  date: t(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, s),
                  time: t(
                    /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,
                    l,
                  ),
                  'date-time': t(
                    /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,
                    p,
                  ),
                  'iso-time': t(
                    /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,
                    f,
                  ),
                  'iso-date-time': t(
                    /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,
                    y,
                  ),
                  uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
                  'uri-reference':
                    /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
                  email:
                    /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
                })),
                (e.formatNames = Object.keys(e.fullFormats)));
              const r = /^(\d\d\d\d)-(\d\d)-(\d\d)$/,
                a = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
              function n(e) {
                const t = r.exec(e);
                if (!t) return !1;
                const n = +t[1],
                  s = +t[2],
                  o = +t[3];
                return (
                  s >= 1 &&
                  s <= 12 &&
                  o >= 1 &&
                  o <=
                    (2 === s &&
                    (function (e) {
                      return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
                    })(n)
                      ? 29
                      : a[s])
                );
              }
              function s(e, t) {
                if (e && t) return e > t ? 1 : e < t ? -1 : 0;
              }
              const i =
                /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
              function u(e) {
                return function (t) {
                  const r = i.exec(t);
                  if (!r) return !1;
                  const a = +r[1],
                    n = +r[2],
                    s = +r[3],
                    o = r[4],
                    c = '-' === r[5] ? -1 : 1,
                    d = +(r[6] || 0),
                    u = +(r[7] || 0);
                  if (d > 23 || u > 59 || (e && !o)) return !1;
                  if (a <= 23 && n <= 59 && s < 60) return !0;
                  const l = n - u * c,
                    f = a - d * c - (l < 0 ? 1 : 0);
                  return (
                    (23 === f || -1 === f) && (59 === l || -1 === l) && s < 61
                  );
                };
              }
              function l(e, t) {
                if (!e || !t) return;
                const r = new Date('2020-01-01T' + e).valueOf(),
                  a = new Date('2020-01-01T' + t).valueOf();
                return r && a ? r - a : void 0;
              }
              function f(e, t) {
                if (!e || !t) return;
                const r = i.exec(e),
                  a = i.exec(t);
                return r && a
                  ? (e = r[1] + r[2] + r[3]) > (t = a[1] + a[2] + a[3])
                    ? 1
                    : e < t
                      ? -1
                      : 0
                  : void 0;
              }
              const m = /t|\s/i;
              function h(e) {
                const t = u(e);
                return function (e) {
                  const r = e.split(m);
                  return 2 === r.length && n(r[0]) && t(r[1]);
                };
              }
              function p(e, t) {
                if (!e || !t) return;
                const r = new Date(e).valueOf(),
                  a = new Date(t).valueOf();
                return r && a ? r - a : void 0;
              }
              function y(e, t) {
                if (!e || !t) return;
                const [r, a] = e.split(m),
                  [n, o] = t.split(m),
                  i = s(r, n);
                return void 0 !== i ? i || l(a, o) : void 0;
              }
              const $ = /\/|:/,
                v =
                  /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
                g =
                  /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm,
                _ = -2147483648,
                w = o(2, 31) - 1;
              function b() {
                return !0;
              }
              const P = /[^\\]\\Z/;
            })(hr)),
          hr),
        a =
          (pr ||
            ((pr = 1),
            (function (e) {
              (Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.formatLimitDefinition = void 0));
              const t = ur(),
                r = j(),
                a = r.operators,
                n = {
                  formatMaximum: { okStr: '<=', ok: a.LTE, fail: a.GT },
                  formatMinimum: { okStr: '>=', ok: a.GTE, fail: a.LT },
                  formatExclusiveMaximum: { okStr: '<', ok: a.LT, fail: a.GTE },
                  formatExclusiveMinimum: { okStr: '>', ok: a.GT, fail: a.LTE },
                },
                s = {
                  message: ({ keyword: e, schemaCode: t }) =>
                    r.str`should be ${n[e].okStr} ${t}`,
                  params: ({ keyword: e, schemaCode: t }) =>
                    r._`{comparison: ${n[e].okStr}, limit: ${t}}`,
                };
              ((e.formatLimitDefinition = {
                keyword: Object.keys(n),
                type: 'string',
                schemaType: 'string',
                $data: !0,
                error: s,
                code(e) {
                  const {
                      gen: a,
                      data: s,
                      schemaCode: o,
                      keyword: i,
                      it: c,
                    } = e,
                    { opts: d, self: u } = c;
                  if (!d.validateFormats) return;
                  const l = new t.KeywordCxt(
                    c,
                    u.RULES.all.format.definition,
                    'format',
                  );
                  function f(e) {
                    return r._`${e}.compare(${s}, ${o}) ${n[i].fail} 0`;
                  }
                  l.$data
                    ? (function () {
                        const t = a.scopeValue('formats', {
                            ref: u.formats,
                            code: d.code.formats,
                          }),
                          n = a.const('fmt', r._`${t}[${l.schemaCode}]`);
                        e.fail$data(
                          (0, r.or)(
                            r._`typeof ${n} != "object"`,
                            r._`${n} instanceof RegExp`,
                            r._`typeof ${n}.compare != "function"`,
                            f(n),
                          ),
                        );
                      })()
                    : (function () {
                        const t = l.schema,
                          n = u.formats[t];
                        if (!n || !0 === n) return;
                        if (
                          'object' != typeof n ||
                          n instanceof RegExp ||
                          'function' != typeof n.compare
                        )
                          throw new Error(
                            `"${i}": format "${t}" does not define "compare" function`,
                          );
                        const s = a.scopeValue('formats', {
                          key: t,
                          ref: n,
                          code: d.code.formats
                            ? r._`${d.code.formats}${(0, r.getProperty)(t)}`
                            : void 0,
                        });
                        e.fail$data(f(s));
                      })();
                },
                dependencies: ['format'],
              }),
                (e.default = (t) => (
                  t.addKeyword(e.formatLimitDefinition),
                  t
                )));
            })($r)),
          $r),
        n = j(),
        s = new n.Name('fullFormats'),
        i = new n.Name('fastFormats'),
        u = (e, t = { keywords: !0 }) => {
          if (Array.isArray(t)) return (l(e, t, r.fullFormats, s), e);
          const [n, o] =
            'fast' === t.mode ? [r.fastFormats, i] : [r.fullFormats, s];
          return (
            l(e, t.formats || r.formatNames, n, o),
            t.keywords && (0, a.default)(e),
            e
          );
        };
      function l(e, t, r, a) {
        var s, o;
        (null !== (s = (o = e.opts.code).formats) && void 0 !== s) ||
          (o.formats = n._`require("ajv-formats/dist/formats").${a}`);
        for (const n of t) e.addFormat(n, r[n]);
      }
      ((u.get = (e, t = 'full') => {
        const a = ('fast' === t ? r.fastFormats : r.fullFormats)[e];
        if (!a) throw new Error(`Unknown format "${e}"`);
        return a;
      }),
        (e.exports = t = u),
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = u));
    })(mr, mr.exports)),
  mr.exports),
);
export { lr as A, vr as a };
//# sourceMappingURL=ajv-CKdcvAPG.js.map
