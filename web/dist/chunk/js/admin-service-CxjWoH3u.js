var e = Object.defineProperty,
  s = Object.defineProperties,
  t = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  i = (s, t, a) =>
    t in s
      ? e(s, t, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (s[t] = a);
import {
  U as c,
  y as g,
  Y as p,
  A as u,
  R as v,
} from '../../entry/js/index-DO2-PIoQ.js';
import { b as f } from './api-B2FJ7mR_.js';
import { i as y } from './i18next-DnPY2Eh-.js';
import { m as l, R as m } from './request-Cuuz14pb.js';
import { h as n } from './simple-history-util-Ho-Forcd.js';
import { aW as d } from './utils-Czs-Tae-.js';
const S = d.create({ timeout: 3e5 });
(S.interceptors.request.use((e) => {
  const n = p(e.data),
    d = p(e.params),
    l =
      ((m = ((e, s) => {
        for (var t in s || (s = {})) o.call(s, t) && i(e, t, s[t]);
        if (a) for (var t of a(s)) r.call(s, t) && i(e, t, s[t]);
        return e;
      })({}, e)),
      s(m, t({ data: n, params: d })));
  var m;
  return (l.skipToken || l.headers.set(u, g()), l);
}),
  S.interceptors.response.use(
    (e) => {
      if ('blob' === e.config.responseType) return e;
      const { data: s } = null != e ? e : {};
      return (
        100 === (null == s ? void 0 : s.code)
          ? l.error(null == s ? void 0 : s.message)
          : 401 === (null == s ? void 0 : s.code)
            ? (l.error(null == s ? void 0 : s.message, {
                description: null == s ? void 0 : s.message,
              }),
              c.removeAll(),
              n.push(v.Admin),
              window.location.reload())
            : (null == s ? void 0 : s.code) &&
              0 !== s.code &&
              l.error(
                `${y.t('message.hint')}: ${null == s ? void 0 : s.code}`,
                { description: null == s ? void 0 : s.message },
              ),
        e
      );
    },
    (e) => {
      const { response: s } = e,
        { data: t } = null != s ? s : {};
      throw (
        'Failed to fetch' === e.message
          ? l.error({
              description: y.t('message.networkAnomalyDescription'),
              message: y.t('message.networkAnomaly'),
            })
          : 100 === (null == t ? void 0 : t.code)
            ? l.error(null == t ? void 0 : t.message)
            : 401 === s.status || 401 === (null == t ? void 0 : t.code)
              ? (l.error({
                  message: (null == t ? void 0 : t.message) || s.statusText,
                  description:
                    (null == t ? void 0 : t.message) ||
                    m[null == s ? void 0 : s.status],
                  duration: 3,
                }),
                c.removeAll(),
                n.push(v.Admin),
                window.location.reload())
              : (null == t ? void 0 : t.code) && 0 !== t.code
                ? l.error({
                    message: `${y.t('message.hint')}: ${null == t ? void 0 : t.code}`,
                    description: null == t ? void 0 : t.message,
                    duration: 3,
                  })
                : s.status
                  ? l.error({
                      message: `${y.t('message.requestError')} ${s.status}: ${s.config.url}`,
                      description: m[s.status] || s.statusText,
                    })
                  : (413 !== s.status &&
                      504 !== (null == s ? void 0 : s.status)) ||
                    l.error(m[null == s ? void 0 : s.status]),
        e
      );
    },
  ));
const {
    adminLogin: b,
    adminLogout: w,
    adminListUsers: U,
    adminCreateUser: j,
    adminGetUserDetails: h,
    adminUpdateUserStatus: x,
    adminUpdateUserPassword: L,
    adminDeleteUser: O,
    adminListUserDatasets: A,
    adminListUserAgents: P,
    adminListServices: T,
    adminShowServiceDetails: k,
    adminListRoles: D,
    adminUpdateUserRole: G,
    adminGetSystemVersion: $,
    adminGetSystemSettings: B,
    adminUpdateSystemSettings: C,
    adminGetBranding: R,
    adminUpdateBranding: _,
    adminUploadBrandingLogo: q,
    adminDeleteBrandingLogo: E,
    adminGetBrandingLogo: z,
    adminListSandboxProviders: F,
    adminGetSandboxProviderSchema: I,
    adminGetSandboxConfig: V,
    adminSetSandboxConfig: W,
    adminTestSandboxConnection: Y,
  } = f,
  H = (e) => S.post(b, e),
  J = () => S.get(w),
  K = () => S.get(U, {}),
  M = (e, s) => S.post(j, { username: e, password: s }),
  N = (e) => S.put(f.adminSetSuperuser(e)),
  Q = (e) => S.delete(f.adminSetSuperuser(e)),
  X = (e) => S.get(h(e)),
  Z = (e) => S.get(A(e)),
  ee = (e) => S.get(P(e)),
  se = (e, s) => S.put(x(e), { activate_status: s }),
  te = (e, s) => S.put(L(e), { new_password: s }),
  ae = (e) => S.delete(O(e)),
  oe = () => S.get(T),
  re = (e) => S.get(k(String(e))),
  ie = () => S.get(D),
  ne = (e, s) => S.put(G(e), { role_name: s }),
  de = () => S.get($),
  le = () => S.get(B),
  me = (e) => S.put(C, e),
  pe = () => S.get(F),
  ue = (e) => S.get(I(e)),
  ge = () => S.get(V),
  ce = (e) => S.post(W, { provider_type: e.providerType, config: e.config }),
  ve = (e) => S.post(Y, { provider_type: e.providerType, config: e.config }),
  fe = () => S.get(R, { skipToken: !0 }),
  ye = (e) => S.put(_, e),
  Se = (e, s) => S.post(q(e), { logo: s }),
  be = (e) => S.delete(E(e)),
  we = (e) => z(e);
export {
  me as A,
  fe as a,
  be as B,
  X as b,
  le as C,
  Z as c,
  ee as d,
  J as e,
  de as f,
  we as g,
  oe as h,
  ie as i,
  N as j,
  ne as k,
  H as l,
  ae as m,
  te as n,
  M as o,
  K as p,
  ce as q,
  Q as r,
  re as s,
  ve as t,
  se as u,
  pe as v,
  ge as w,
  ue as x,
  ye as y,
  Se as z,
};
//# sourceMappingURL=admin-service-CxjWoH3u.js.map
