import {
  j as A,
  e as B,
  k as D,
  c as E,
  i as F,
  o as G,
  R as H,
  b as I,
  z as J,
  t as K,
  h as L,
  I as M,
  f as N,
  g as O,
  d as P,
  x as Q,
  K as R,
  F as S,
  m as T,
  v as U,
  s as V,
  l as W,
  r as X,
  w as Y,
  y as Z,
  n as _,
  H as ae,
  A as ee,
  G as ie,
  u as j,
  p as k,
  D as ne,
  C as oe,
  q,
  E as re,
  B as te,
  a as w,
  S as z,
} from './@ant-design-BlpkamhZ.js';
import {
  a as He,
  _ as Me,
  n as Re,
  r as Te,
  f as ze,
} from './@babel-IS4qnvsE.js';
import { C as Be } from './@rc-component-DFLSjlpm.js';
import { c as de } from './classnames-D-HEXvIh.js';
import { c as nt } from './copy-to-clipboard-qJJXPUVn.js';
import { C as ge } from './rc-checkbox-DP08vn5g.js';
import { P as Le, D as Ne } from './rc-dialog-CaZ5Sk3j.js';
import './rc-field-form-BGTpwivZ.js';
import { t as Ae, I as Fe } from './rc-input-znNCn9j4.js';
import './rc-menu-BS1CQ8HZ.js';
import { C as me, M as pe } from './rc-motion-B_ehnZXo.js';
import { a as Je, N as Qe, u as Ze } from './rc-notification-CYPAXrGL.js';
import './rc-overflow-Bi6cAXQN.js';
import {
  l as De,
  a as Ge,
  e as Ke,
  f as Ue,
  d as Ve,
  P as We,
  c as Xe,
  r as _e,
  b as qe,
} from './rc-pagination-0UaRqrY4.js';
import {
  g as $e,
  d as Ce,
  f as Oe,
  e as Se,
  l as be,
  R as fe,
  a as he,
  h as ke,
  r as ve,
  c as xe,
  b as ye,
} from './rc-picker-DrGInh_3.js';
import { R as ue } from './rc-resize-observer-B5u_oc92.js';
import { T as Pe } from './rc-segmented-HcleQ4Tz.js';
import { T as Ee, a as Ie, O as je } from './rc-select-CAl124Sr.js';
import { T as we } from './rc-tabs-B8xFWZaO.js';
import { T as ot } from './rc-textarea-BVzGktRk.js';
import { P as et, T as tt } from './rc-tooltip-DIrPEQ-t.js';
import {
  B as $,
  D as C,
  v as a,
  d as b,
  f as c,
  j as d,
  c as e,
  u as f,
  z as g,
  A as h,
  t as i,
  x as l,
  l as m,
  p as n,
  o,
  i as p,
  q as r,
  y as s,
  a as t,
  s as u,
  C as v,
  n as x,
  K as y,
} from './rc-util-OBz8bXRN.js';
import './rc-virtual-list-DUfPaMmP.js';
import { R as ce, r as le, T as se } from './react-Clxusn8M.js';
import './react-dom-VOJ15Ct0.js';
import './resize-observer-polyfill-C7U_o75s.js';
import { d as Ye } from './throttle-debounce-w9OM8Bxz.js';
function rt() {}
const it = le.createContext({}),
  at = () => {
    const e = () => {};
    return ((e.deprecated = rt), e);
  },
  lt = le.createContext(void 0),
  st = {
    placeholder: 'Select time',
    rangePlaceholder: ['Start time', 'End time'],
  },
  ct = {
    lang: Object.assign(
      {
        placeholder: 'Select date',
        yearPlaceholder: 'Select year',
        quarterPlaceholder: 'Select quarter',
        monthPlaceholder: 'Select month',
        weekPlaceholder: 'Select week',
        rangePlaceholder: ['Start date', 'End date'],
        rangeYearPlaceholder: ['Start year', 'End year'],
        rangeQuarterPlaceholder: ['Start quarter', 'End quarter'],
        rangeMonthPlaceholder: ['Start month', 'End month'],
        rangeWeekPlaceholder: ['Start week', 'End week'],
      },
      be,
    ),
    timePickerLocale: Object.assign({}, st),
  },
  dt = '${label} is not a valid ${type}',
  ut = {
    locale: 'en',
    Pagination: De,
    DatePicker: ct,
    TimePicker: st,
    Calendar: ct,
    global: { placeholder: 'Please select', close: 'Close' },
    Table: {
      filterTitle: 'Filter menu',
      filterConfirm: 'OK',
      filterReset: 'Reset',
      filterEmptyText: 'No filters',
      filterCheckAll: 'Select all items',
      filterSearchPlaceholder: 'Search in filters',
      emptyText: 'No data',
      selectAll: 'Select current page',
      selectInvert: 'Invert current page',
      selectNone: 'Clear all data',
      selectionAll: 'Select all data',
      sortTitle: 'Sort',
      expand: 'Expand row',
      collapse: 'Collapse row',
      triggerDesc: 'Click to sort descending',
      triggerAsc: 'Click to sort ascending',
      cancelSort: 'Click to cancel sorting',
    },
    Tour: { Next: 'Next', Previous: 'Previous', Finish: 'Finish' },
    Modal: { okText: 'OK', cancelText: 'Cancel', justOkText: 'OK' },
    Popconfirm: { okText: 'OK', cancelText: 'Cancel' },
    Transfer: {
      titles: ['', ''],
      searchPlaceholder: 'Search here',
      itemUnit: 'item',
      itemsUnit: 'items',
      remove: 'Remove',
      selectCurrent: 'Select current page',
      removeCurrent: 'Remove current page',
      selectAll: 'Select all data',
      deselectAll: 'Deselect all data',
      removeAll: 'Remove all data',
      selectInvert: 'Invert current page',
    },
    Upload: {
      uploading: 'Uploading...',
      removeFile: 'Remove file',
      uploadError: 'Upload error',
      previewFile: 'Preview file',
      downloadFile: 'Download file',
    },
    Empty: { description: 'No data' },
    Icon: { icon: 'icon' },
    Text: {
      edit: 'Edit',
      copy: 'Copy',
      copied: 'Copied',
      expand: 'Expand',
      collapse: 'Collapse',
    },
    Form: {
      optional: '(optional)',
      defaultValidateMessages: {
        default: 'Field validation error for ${label}',
        required: 'Please enter ${label}',
        enum: '${label} must be one of [${enum}]',
        whitespace: '${label} cannot be a blank character',
        date: {
          format: '${label} date format is invalid',
          parse: '${label} cannot be converted to a date',
          invalid: '${label} is an invalid date',
        },
        types: {
          string: dt,
          method: dt,
          array: dt,
          object: dt,
          number: dt,
          date: dt,
          boolean: dt,
          integer: dt,
          float: dt,
          regexp: dt,
          email: dt,
          url: dt,
          hex: dt,
        },
        string: {
          len: '${label} must be ${len} characters',
          min: '${label} must be at least ${min} characters',
          max: '${label} must be up to ${max} characters',
          range: '${label} must be between ${min}-${max} characters',
        },
        number: {
          len: '${label} must be equal to ${len}',
          min: '${label} must be minimum ${min}',
          max: '${label} must be maximum ${max}',
          range: '${label} must be between ${min}-${max}',
        },
        array: {
          len: 'Must be ${len} ${label}',
          min: 'At least ${min} ${label}',
          max: 'At most ${max} ${label}',
          range: 'The amount of ${label} must be between ${min}-${max}',
        },
        pattern: { mismatch: '${label} does not match the pattern ${pattern}' },
      },
    },
    Image: { preview: 'Preview' },
    QRCode: {
      expired: 'QR code expired',
      refresh: 'Refresh',
      scanned: 'Scanned',
    },
    ColorPicker: {
      presetEmpty: 'Empty',
      transparent: 'Transparent',
      singleColor: 'Single',
      gradientColor: 'Gradient',
    },
  };
let pt = Object.assign({}, ut.Modal),
  mt = [];
const gt = () =>
  mt.reduce((e, t) => Object.assign(Object.assign({}, e), t), ut.Modal);
function bt() {
  return pt;
}
const ft = le.createContext(void 0),
  ht = (e, t) => {
    const o = le.useContext(ft);
    return [
      le.useMemo(() => {
        var n;
        const r = t || ut[e],
          i = null !== (n = null == o ? void 0 : o[e]) && void 0 !== n ? n : {};
        return Object.assign(
          Object.assign({}, 'function' == typeof r ? r() : r),
          i || {},
        );
      }, [e, t, o]),
      le.useMemo(() => {
        const e = null == o ? void 0 : o.locale;
        return (null == o ? void 0 : o.exist) && !e ? ut.locale : e;
      }, [o]),
    ];
  },
  $t = (e) => {
    const { locale: t = {}, children: o, _ANT_MARK__: n } = e;
    le.useEffect(() => {
      const e = (function (e) {
        if (e) {
          const t = Object.assign({}, e);
          return (
            mt.push(t),
            (pt = gt()),
            () => {
              ((mt = mt.filter((e) => e !== t)), (pt = gt()));
            }
          );
        }
        pt = Object.assign({}, ut.Modal);
      })(null == t ? void 0 : t.Modal);
      return e;
    }, [t]);
    const r = le.useMemo(
      () => Object.assign(Object.assign({}, t), { exist: !0 }),
      [t],
    );
    return le.createElement(ft.Provider, { value: r }, o);
  },
  vt = {
    blue: '#1677FF',
    purple: '#722ED1',
    cyan: '#13C2C2',
    green: '#52C41A',
    magenta: '#EB2F96',
    pink: '#EB2F96',
    red: '#F5222D',
    orange: '#FA8C16',
    yellow: '#FADB14',
    volcano: '#FA541C',
    geekblue: '#2F54EB',
    gold: '#FAAD14',
    lime: '#A0D911',
  },
  yt = Object.assign(Object.assign({}, vt), {
    colorPrimary: '#1677ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#1677ff',
    colorLink: '',
    colorTextBase: '',
    colorBgBase: '',
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,\n'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\n'Noto Color Emoji'",
    fontFamilyCode:
      "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    fontSize: 14,
    lineWidth: 1,
    lineType: 'solid',
    motionUnit: 0.1,
    motionBase: 0,
    motionEaseOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
    motionEaseInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
    motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    motionEaseOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
    motionEaseInBack: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
    motionEaseInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    motionEaseOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
    borderRadius: 6,
    sizeUnit: 4,
    sizeStep: 4,
    sizePopupArrow: 16,
    controlHeight: 32,
    zIndexBase: 0,
    zIndexPopupBase: 1e3,
    opacityImage: 1,
    wireframe: !1,
    motion: !0,
  });
function xt(e, { generateColorPalettes: t, generateNeutralColorPalettes: o }) {
  const {
      colorSuccess: n,
      colorWarning: r,
      colorError: i,
      colorInfo: a,
      colorPrimary: l,
      colorBgBase: s,
      colorTextBase: c,
    } = e,
    d = t(l),
    u = t(n),
    p = t(r),
    m = t(i),
    g = t(a),
    b = o(s, c),
    f = t(e.colorLink || e.colorInfo),
    h = new S(m[1]).mix(new S(m[3]), 50).toHexString();
  return Object.assign(Object.assign({}, b), {
    colorPrimaryBg: d[1],
    colorPrimaryBgHover: d[2],
    colorPrimaryBorder: d[3],
    colorPrimaryBorderHover: d[4],
    colorPrimaryHover: d[5],
    colorPrimary: d[6],
    colorPrimaryActive: d[7],
    colorPrimaryTextHover: d[8],
    colorPrimaryText: d[9],
    colorPrimaryTextActive: d[10],
    colorSuccessBg: u[1],
    colorSuccessBgHover: u[2],
    colorSuccessBorder: u[3],
    colorSuccessBorderHover: u[4],
    colorSuccessHover: u[4],
    colorSuccess: u[6],
    colorSuccessActive: u[7],
    colorSuccessTextHover: u[8],
    colorSuccessText: u[9],
    colorSuccessTextActive: u[10],
    colorErrorBg: m[1],
    colorErrorBgHover: m[2],
    colorErrorBgFilledHover: h,
    colorErrorBgActive: m[3],
    colorErrorBorder: m[3],
    colorErrorBorderHover: m[4],
    colorErrorHover: m[5],
    colorError: m[6],
    colorErrorActive: m[7],
    colorErrorTextHover: m[8],
    colorErrorText: m[9],
    colorErrorTextActive: m[10],
    colorWarningBg: p[1],
    colorWarningBgHover: p[2],
    colorWarningBorder: p[3],
    colorWarningBorderHover: p[4],
    colorWarningHover: p[4],
    colorWarning: p[6],
    colorWarningActive: p[7],
    colorWarningTextHover: p[8],
    colorWarningText: p[9],
    colorWarningTextActive: p[10],
    colorInfoBg: g[1],
    colorInfoBgHover: g[2],
    colorInfoBorder: g[3],
    colorInfoBorderHover: g[4],
    colorInfoHover: g[4],
    colorInfo: g[6],
    colorInfoActive: g[7],
    colorInfoTextHover: g[8],
    colorInfoText: g[9],
    colorInfoTextActive: g[10],
    colorLinkHover: f[4],
    colorLink: f[6],
    colorLinkActive: f[7],
    colorBgMask: new S('#000').setA(0.45).toRgbString(),
    colorWhite: '#fff',
  });
}
function Ct(e) {
  return (e + 8) / e;
}
const St = (e) => {
  const t = (function (e) {
      const t = Array.from({ length: 10 }).map((t, o) => {
        const n = o - 1,
          r = e * Math.pow(Math.E, n / 5),
          i = o > 1 ? Math.floor(r) : Math.ceil(r);
        return 2 * Math.floor(i / 2);
      });
      return ((t[1] = e), t.map((e) => ({ size: e, lineHeight: Ct(e) })));
    })(e),
    o = t.map((e) => e.size),
    n = t.map((e) => e.lineHeight),
    r = o[1],
    i = o[0],
    a = o[2],
    l = n[1],
    s = n[0],
    c = n[2];
  return {
    fontSizeSM: i,
    fontSize: r,
    fontSizeLG: a,
    fontSizeXL: o[3],
    fontSizeHeading1: o[6],
    fontSizeHeading2: o[5],
    fontSizeHeading3: o[4],
    fontSizeHeading4: o[3],
    fontSizeHeading5: o[2],
    lineHeight: l,
    lineHeightLG: c,
    lineHeightSM: s,
    fontHeight: Math.round(l * r),
    fontHeightLG: Math.round(c * a),
    fontHeightSM: Math.round(s * i),
    lineHeightHeading1: n[6],
    lineHeightHeading2: n[5],
    lineHeightHeading3: n[4],
    lineHeightHeading4: n[3],
    lineHeightHeading5: n[2],
  };
};
const Ot = (e, t) => new S(e).setA(t).toRgbString(),
  kt = (e, t) => new S(e).darken(t).toHexString(),
  wt = (e) => {
    const t = O(e);
    return {
      1: t[0],
      2: t[1],
      3: t[2],
      4: t[3],
      5: t[4],
      6: t[5],
      7: t[6],
      8: t[4],
      9: t[5],
      10: t[6],
    };
  },
  Et = (e, t) => {
    const o = e || '#fff',
      n = t || '#000';
    return {
      colorBgBase: o,
      colorTextBase: n,
      colorText: Ot(n, 0.88),
      colorTextSecondary: Ot(n, 0.65),
      colorTextTertiary: Ot(n, 0.45),
      colorTextQuaternary: Ot(n, 0.25),
      colorFill: Ot(n, 0.15),
      colorFillSecondary: Ot(n, 0.06),
      colorFillTertiary: Ot(n, 0.04),
      colorFillQuaternary: Ot(n, 0.02),
      colorBgSolid: Ot(n, 1),
      colorBgSolidHover: Ot(n, 0.75),
      colorBgSolidActive: Ot(n, 0.95),
      colorBgLayout: kt(o, 4),
      colorBgContainer: kt(o, 0),
      colorBgElevated: kt(o, 0),
      colorBgSpotlight: Ot(n, 0.85),
      colorBgBlur: 'transparent',
      colorBorder: kt(o, 15),
      colorBorderSecondary: kt(o, 6),
    };
  };
function jt(e) {
  ((k.pink = k.magenta), (w.pink = w.magenta));
  const t = Object.keys(vt)
    .map((t) => {
      const o = e[t] === k[t] ? w[t] : O(e[t]);
      return Array.from({ length: 10 }, () => 1).reduce(
        (e, n, r) => (
          (e[`${t}-${r + 1}`] = o[r]),
          (e[`${t}${r + 1}`] = o[r]),
          e
        ),
        {},
      );
    })
    .reduce((e, t) => (e = Object.assign(Object.assign({}, e), t)), {});
  return Object.assign(
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(Object.assign({}, e), t),
            xt(e, {
              generateColorPalettes: wt,
              generateNeutralColorPalettes: Et,
            }),
          ),
          St(e.fontSize),
        ),
        (function (e) {
          const { sizeUnit: t, sizeStep: o } = e;
          return {
            sizeXXL: t * (o + 8),
            sizeXL: t * (o + 4),
            sizeLG: t * (o + 2),
            sizeMD: t * (o + 1),
            sizeMS: t * o,
            size: t * o,
            sizeSM: t * (o - 1),
            sizeXS: t * (o - 2),
            sizeXXS: t * (o - 3),
          };
        })(e),
      ),
      ((e) => {
        const { controlHeight: t } = e;
        return {
          controlHeightSM: 0.75 * t,
          controlHeightXS: 0.5 * t,
          controlHeightLG: 1.25 * t,
        };
      })(e),
    ),
    (function (e) {
      const { motionUnit: t, motionBase: o, borderRadius: n, lineWidth: r } = e;
      return Object.assign(
        {
          motionDurationFast: `${(o + t).toFixed(1)}s`,
          motionDurationMid: `${(o + 2 * t).toFixed(1)}s`,
          motionDurationSlow: `${(o + 3 * t).toFixed(1)}s`,
          lineWidthBold: r + 1,
        },
        ((e) => {
          let t = e,
            o = e,
            n = e,
            r = e;
          return (
            e < 6 && e >= 5
              ? (t = e + 1)
              : e < 16 && e >= 6
                ? (t = e + 2)
                : e >= 16 && (t = 16),
            e < 7 && e >= 5
              ? (o = 4)
              : e < 8 && e >= 7
                ? (o = 5)
                : e < 14 && e >= 8
                  ? (o = 6)
                  : e < 16 && e >= 14
                    ? (o = 7)
                    : e >= 16 && (o = 8),
            e < 6 && e >= 2 ? (n = 1) : e >= 6 && (n = 2),
            e > 4 && e < 8 ? (r = 4) : e >= 8 && (r = 6),
            {
              borderRadius: e,
              borderRadiusXS: n,
              borderRadiusSM: o,
              borderRadiusLG: t,
              borderRadiusOuter: r,
            }
          );
        })(n),
      );
    })(e),
  );
}
const It = E(jt),
  Pt = { token: yt, override: { override: yt }, hashed: !0 },
  Bt = se.createContext(Pt),
  zt = 'ant',
  Mt = 'anticon',
  Ht = ['outlined', 'borderless', 'filled', 'underlined'],
  Tt = le.createContext({
    getPrefixCls: (e, t) => t || (e ? `${zt}-${e}` : zt),
    iconPrefixCls: Mt,
  }),
  { Consumer: Rt } = Tt,
  Nt = {};
function Lt(e) {
  const t = le.useContext(Tt),
    { getPrefixCls: o, direction: n, getPopupContainer: r } = t,
    i = t[e];
  return Object.assign(Object.assign({ classNames: Nt, styles: Nt }, i), {
    getPrefixCls: o,
    direction: n,
    getPopupContainer: r,
  });
}
const Ft = `-ant-${Date.now()}-${Math.random()}`;
function At(o, n) {
  const r = (function (e, t) {
    const o = {},
      n = (e, t) => {
        let o = e.clone();
        return ((o = (null == t ? void 0 : t(o)) || o), o.toRgbString());
      },
      r = (e, t) => {
        const r = new S(e),
          i = O(r.toRgbString());
        ((o[`${t}-color`] = n(r)),
          (o[`${t}-color-disabled`] = i[1]),
          (o[`${t}-color-hover`] = i[4]),
          (o[`${t}-color-active`] = i[6]),
          (o[`${t}-color-outline`] = r.clone().setA(0.2).toRgbString()),
          (o[`${t}-color-deprecated-bg`] = i[0]),
          (o[`${t}-color-deprecated-border`] = i[2]));
      };
    if (t.primaryColor) {
      r(t.primaryColor, 'primary');
      const e = new S(t.primaryColor),
        i = O(e.toRgbString());
      (i.forEach((e, t) => {
        o[`primary-${t + 1}`] = e;
      }),
        (o['primary-color-deprecated-l-35'] = n(e, (e) => e.lighten(35))),
        (o['primary-color-deprecated-l-20'] = n(e, (e) => e.lighten(20))),
        (o['primary-color-deprecated-t-20'] = n(e, (e) => e.tint(20))),
        (o['primary-color-deprecated-t-50'] = n(e, (e) => e.tint(50))),
        (o['primary-color-deprecated-f-12'] = n(e, (e) => e.setA(0.12 * e.a))));
      const a = new S(i[0]);
      ((o['primary-color-active-deprecated-f-30'] = n(a, (e) =>
        e.setA(0.3 * e.a),
      )),
        (o['primary-color-active-deprecated-d-02'] = n(a, (e) => e.darken(2))));
    }
    return (
      t.successColor && r(t.successColor, 'success'),
      t.warningColor && r(t.warningColor, 'warning'),
      t.errorColor && r(t.errorColor, 'error'),
      t.infoColor && r(t.infoColor, 'info'),
      `\n  :root {\n    ${Object.keys(o)
        .map((t) => `--${e}-${t}: ${o[t]};`)
        .join('\n')}\n  }\n  `.trim()
    );
  })(o, n);
  e() && t(r, `${Ft}-dynamic-theme`);
}
const Dt = le.createContext(!1),
  Wt = ({ children: e, disabled: t }) => {
    const o = le.useContext(Dt);
    return le.createElement(Dt.Provider, { value: null != t ? t : o }, e);
  },
  _t = le.createContext(void 0),
  Gt = ({ children: e, size: t }) => {
    const o = le.useContext(_t);
    return le.createElement(_t.Provider, { value: t || o }, e);
  };
const qt = [
  'blue',
  'purple',
  'cyan',
  'green',
  'magenta',
  'pink',
  'red',
  'orange',
  'yellow',
  'volcano',
  'geekblue',
  'lime',
  'gold',
];
function Xt(e) {
  return e >= 0 && e <= 255;
}
function Vt(e, t) {
  const { r: o, g: n, b: r, a: i } = new S(e).toRgb();
  if (i < 1) return e;
  const { r: a, g: l, b: s } = new S(t).toRgb();
  for (let c = 0.01; c <= 1; c += 0.01) {
    const e = Math.round((o - a * (1 - c)) / c),
      t = Math.round((n - l * (1 - c)) / c),
      i = Math.round((r - s * (1 - c)) / c);
    if (Xt(e) && Xt(t) && Xt(i))
      return new S({
        r: e,
        g: t,
        b: i,
        a: Math.round(100 * c) / 100,
      }).toRgbString();
  }
  return new S({ r: o, g: n, b: r, a: 1 }).toRgbString();
}
function Kt(e) {
  const { override: t } = e,
    o = (function (e, t) {
      var o = {};
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) &&
          t.indexOf(n) < 0 &&
          (o[n] = e[n]);
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var r = 0;
        for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
          t.indexOf(n[r]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
            (o[n[r]] = e[n[r]]);
      }
      return o;
    })(e, ['override']),
    n = Object.assign({}, t);
  Object.keys(yt).forEach((e) => {
    delete n[e];
  });
  const r = Object.assign(Object.assign({}, o), n),
    i = 1200,
    a = 1600;
  if (!1 === r.motion) {
    const e = '0s';
    ((r.motionDurationFast = e),
      (r.motionDurationMid = e),
      (r.motionDurationSlow = e));
  }
  return Object.assign(
    Object.assign(Object.assign({}, r), {
      colorFillContent: r.colorFillSecondary,
      colorFillContentHover: r.colorFill,
      colorFillAlter: r.colorFillQuaternary,
      colorBgContainerDisabled: r.colorFillTertiary,
      colorBorderBg: r.colorBgContainer,
      colorSplit: Vt(r.colorBorderSecondary, r.colorBgContainer),
      colorTextPlaceholder: r.colorTextQuaternary,
      colorTextDisabled: r.colorTextQuaternary,
      colorTextHeading: r.colorText,
      colorTextLabel: r.colorTextSecondary,
      colorTextDescription: r.colorTextTertiary,
      colorTextLightSolid: r.colorWhite,
      colorHighlight: r.colorError,
      colorBgTextHover: r.colorFillSecondary,
      colorBgTextActive: r.colorFill,
      colorIcon: r.colorTextTertiary,
      colorIconHover: r.colorText,
      colorErrorOutline: Vt(r.colorErrorBg, r.colorBgContainer),
      colorWarningOutline: Vt(r.colorWarningBg, r.colorBgContainer),
      fontSizeIcon: r.fontSizeSM,
      lineWidthFocus: 3 * r.lineWidth,
      lineWidth: r.lineWidth,
      controlOutlineWidth: 2 * r.lineWidth,
      controlInteractiveSize: r.controlHeight / 2,
      controlItemBgHover: r.colorFillTertiary,
      controlItemBgActive: r.colorPrimaryBg,
      controlItemBgActiveHover: r.colorPrimaryBgHover,
      controlItemBgActiveDisabled: r.colorFill,
      controlTmpOutline: r.colorFillQuaternary,
      controlOutline: Vt(r.colorPrimaryBg, r.colorBgContainer),
      lineType: r.lineType,
      borderRadius: r.borderRadius,
      borderRadiusXS: r.borderRadiusXS,
      borderRadiusSM: r.borderRadiusSM,
      borderRadiusLG: r.borderRadiusLG,
      fontWeightStrong: 600,
      opacityLoading: 0.65,
      linkDecoration: 'none',
      linkHoverDecoration: 'none',
      linkFocusDecoration: 'none',
      controlPaddingHorizontal: 12,
      controlPaddingHorizontalSM: 8,
      paddingXXS: r.sizeXXS,
      paddingXS: r.sizeXS,
      paddingSM: r.sizeSM,
      padding: r.size,
      paddingMD: r.sizeMD,
      paddingLG: r.sizeLG,
      paddingXL: r.sizeXL,
      paddingContentHorizontalLG: r.sizeLG,
      paddingContentVerticalLG: r.sizeMS,
      paddingContentHorizontal: r.sizeMS,
      paddingContentVertical: r.sizeSM,
      paddingContentHorizontalSM: r.size,
      paddingContentVerticalSM: r.sizeXS,
      marginXXS: r.sizeXXS,
      marginXS: r.sizeXS,
      marginSM: r.sizeSM,
      margin: r.size,
      marginMD: r.sizeMD,
      marginLG: r.sizeLG,
      marginXL: r.sizeXL,
      marginXXL: r.sizeXXL,
      boxShadow:
        '\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ',
      boxShadowSecondary:
        '\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ',
      boxShadowTertiary:
        '\n      0 1px 2px 0 rgba(0, 0, 0, 0.03),\n      0 1px 6px -1px rgba(0, 0, 0, 0.02),\n      0 2px 4px 0 rgba(0, 0, 0, 0.02)\n    ',
      screenXS: 480,
      screenXSMin: 480,
      screenXSMax: 575,
      screenSM: 576,
      screenSMMin: 576,
      screenSMMax: 767,
      screenMD: 768,
      screenMDMin: 768,
      screenMDMax: 991,
      screenLG: 992,
      screenLGMin: 992,
      screenLGMax: 1199,
      screenXL: i,
      screenXLMin: i,
      screenXLMax: 1599,
      screenXXL: a,
      screenXXLMin: a,
      boxShadowPopoverArrow: '2px 2px 5px rgba(0, 0, 0, 0.05)',
      boxShadowCard: `\n      0 1px 2px -2px ${new S('rgba(0, 0, 0, 0.16)').toRgbString()},\n      0 3px 6px 0 ${new S('rgba(0, 0, 0, 0.12)').toRgbString()},\n      0 5px 12px 4px ${new S('rgba(0, 0, 0, 0.09)').toRgbString()}\n    `,
      boxShadowDrawerRight:
        '\n      -6px 0 16px 0 rgba(0, 0, 0, 0.08),\n      -3px 0 6px -4px rgba(0, 0, 0, 0.12),\n      -9px 0 28px 8px rgba(0, 0, 0, 0.05)\n    ',
      boxShadowDrawerLeft:
        '\n      6px 0 16px 0 rgba(0, 0, 0, 0.08),\n      3px 0 6px -4px rgba(0, 0, 0, 0.12),\n      9px 0 28px 8px rgba(0, 0, 0, 0.05)\n    ',
      boxShadowDrawerUp:
        '\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ',
      boxShadowDrawerDown:
        '\n      0 -6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 -3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 -9px 28px 8px rgba(0, 0, 0, 0.05)\n    ',
      boxShadowTabsOverflowLeft: 'inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)',
      boxShadowTabsOverflowRight: 'inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)',
      boxShadowTabsOverflowTop: 'inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)',
      boxShadowTabsOverflowBottom: 'inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)',
    }),
    n,
  );
}
var Ut = function (e, t) {
  var o = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (o[n] = e[n]);
  if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
    var r = 0;
    for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
      t.indexOf(n[r]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
        (o[n[r]] = e[n[r]]);
  }
  return o;
};
const Yt = {
    lineHeight: !0,
    lineHeightSM: !0,
    lineHeightLG: !0,
    lineHeightHeading1: !0,
    lineHeightHeading2: !0,
    lineHeightHeading3: !0,
    lineHeightHeading4: !0,
    lineHeightHeading5: !0,
    opacityLoading: !0,
    fontWeightStrong: !0,
    zIndexPopupBase: !0,
    zIndexBase: !0,
    opacityImage: !0,
  },
  Qt = { motionBase: !0, motionUnit: !0 },
  Zt = {
    screenXS: !0,
    screenXSMin: !0,
    screenXSMax: !0,
    screenSM: !0,
    screenSMMin: !0,
    screenSMMax: !0,
    screenMD: !0,
    screenMDMin: !0,
    screenMDMax: !0,
    screenLG: !0,
    screenLGMin: !0,
    screenLGMax: !0,
    screenXL: !0,
    screenXLMin: !0,
    screenXLMax: !0,
    screenXXL: !0,
    screenXXLMin: !0,
  },
  Jt = (e, t, o) => {
    const n = o.getDerivativeToken(e),
      { override: r } = t,
      i = Ut(t, ['override']);
    let a = Object.assign(Object.assign({}, n), { override: r });
    return (
      (a = Kt(a)),
      i &&
        Object.entries(i).forEach(([e, t]) => {
          const { theme: o } = t,
            n = Ut(t, ['theme']);
          let r = n;
          (o &&
            (r = Jt(
              Object.assign(Object.assign({}, a), n),
              { override: n },
              o,
            )),
            (a[e] = r));
        }),
      a
    );
  };
function eo() {
  const {
      token: e,
      hashed: t,
      theme: o,
      override: n,
      cssVar: r,
    } = se.useContext(Bt),
    i = `5.29.3-${t || ''}`,
    a = o || It,
    [l, s, c] = j(a, [yt, e], {
      salt: i,
      override: n,
      getComputedToken: Jt,
      formatToken: Kt,
      cssVar: r && {
        prefix: r.prefix,
        key: r.key,
        unitless: Yt,
        ignore: Qt,
        preserve: Zt,
      },
    });
  return [a, c, t ? s : '', l, r];
}
const to = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  oo = (e, t = !1) => ({
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    color: e.colorText,
    fontSize: e.fontSize,
    lineHeight: e.lineHeight,
    listStyle: 'none',
    fontFamily: t ? 'inherit' : e.fontFamily,
  }),
  no = (e, t) => ({
    outline: `${I(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
    outlineOffset: null != t ? t : 1,
    transition: 'outline-offset 0s, outline 0s',
  }),
  ro = (e, t) => ({ '&:focus-visible': no(e, t) }),
  io = (e) => ({
    [`.${e}`]: Object.assign(
      Object.assign(
        {},
        {
          display: 'inline-flex',
          alignItems: 'center',
          color: 'inherit',
          fontStyle: 'normal',
          lineHeight: 0,
          textAlign: 'center',
          textTransform: 'none',
          verticalAlign: '-0.125em',
          textRendering: 'optimizeLegibility',
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
          '> *': { lineHeight: 1 },
          svg: { display: 'inline-block' },
        },
      ),
      { [`.${e} .${e}-icon`]: { display: 'block' } },
    ),
  }),
  ao = (e) =>
    Object.assign(
      Object.assign(
        {
          color: e.colorLink,
          textDecoration: e.linkDecoration,
          outline: 'none',
          cursor: 'pointer',
          transition: `all ${e.motionDurationSlow}`,
          border: 0,
          padding: 0,
          background: 'none',
          userSelect: 'none',
        },
        ro(e),
      ),
      {
        '&:hover': {
          color: e.colorLinkHover,
          textDecoration: e.linkHoverDecoration,
        },
        '&:focus': {
          color: e.colorLinkHover,
          textDecoration: e.linkFocusDecoration,
        },
        '&:active': {
          color: e.colorLinkActive,
          textDecoration: e.linkHoverDecoration,
        },
      },
    ),
  {
    genStyleHooks: lo,
    genComponentStyleHook: so,
    genSubStyleComponent: co,
  } = P({
    usePrefix: () => {
      const { getPrefixCls: e, iconPrefixCls: t } = le.useContext(Tt);
      return { rootPrefixCls: e(), iconPrefixCls: t };
    },
    useToken: () => {
      const [e, t, o, n, r] = eo();
      return { theme: e, realToken: t, hashId: o, token: n, cssVar: r };
    },
    useCSP: () => {
      const { csp: e } = le.useContext(Tt);
      return null != e ? e : {};
    },
    getResetStyles: (e, t) => {
      var o;
      const n = ((e) => ({
        a: {
          color: e.colorLink,
          textDecoration: e.linkDecoration,
          backgroundColor: 'transparent',
          outline: 'none',
          cursor: 'pointer',
          transition: `color ${e.motionDurationSlow}`,
          '-webkit-text-decoration-skip': 'objects',
          '&:hover': { color: e.colorLinkHover },
          '&:active': { color: e.colorLinkActive },
          '&:active, &:hover': {
            textDecoration: e.linkHoverDecoration,
            outline: 0,
          },
          '&:focus': { textDecoration: e.linkFocusDecoration, outline: 0 },
          '&[disabled]': { color: e.colorTextDisabled, cursor: 'not-allowed' },
        },
      }))(e);
      return [
        n,
        { '&': n },
        io(
          null !== (o = null == t ? void 0 : t.prefix.iconPrefixCls) &&
            void 0 !== o
            ? o
            : Mt,
        ),
      ];
    },
    getCommonStyle: (e, t, o, n) => {
      const r = `[class^="${t}"], [class*=" ${t}"]`,
        i = o ? `.${o}` : r,
        a = {
          boxSizing: 'border-box',
          '&::before, &::after': { boxSizing: 'border-box' },
        };
      let l = {};
      return (
        !1 !== n && (l = { fontFamily: e.fontFamily, fontSize: e.fontSize }),
        {
          [i]: Object.assign(Object.assign(Object.assign({}, l), a), {
            [r]: a,
          }),
        }
      );
    },
    getCompUnitless: () => Yt,
  });
function uo(e, t) {
  return qt.reduce((o, n) => {
    const r = e[`${n}1`],
      i = e[`${n}3`],
      a = e[`${n}6`],
      l = e[`${n}7`];
    return Object.assign(
      Object.assign({}, o),
      t(n, { lightColor: r, lightBorderColor: i, darkColor: a, textColor: l }),
    );
  }, {});
}
const po = Object.assign({}, ce),
  { useId: mo } = po,
  go = void 0 === mo ? () => '' : mo;
const bo = le.createContext(!0);
function fo(e) {
  const t = le.useContext(bo),
    { children: o } = e,
    [, n] = eo(),
    { motion: r } = n,
    i = le.useRef(!1);
  return (
    i.current || (i.current = t !== r),
    i.current
      ? le.createElement(
          bo.Provider,
          { value: r },
          le.createElement(pe, { motion: r }, o),
        )
      : o
  );
}
const ho = () => null;
const $o = [
  'getTargetContainer',
  'getPopupContainer',
  'renderEmpty',
  'input',
  'pagination',
  'form',
  'select',
  'button',
];
let vo, yo, xo, Co;
function So() {
  return vo || zt;
}
function Oo() {
  return yo || Mt;
}
const ko = () => ({
    getPrefixCls: (e, t) => t || (e ? `${So()}-${e}` : So()),
    getIconPrefixCls: Oo,
    getRootPrefixCls: () => vo || So(),
    getTheme: () => xo,
    holderRender: Co,
  }),
  wo = (e) => {
    const {
        children: t,
        csp: i,
        autoInsertSpaceInButton: a,
        alert: l,
        anchor: s,
        form: c,
        locale: d,
        componentSize: u,
        direction: p,
        space: m,
        splitter: g,
        virtual: b,
        dropdownMatchSelectWidth: f,
        popupMatchSelectWidth: h,
        popupOverflow: $,
        legacyLocale: v,
        parentContext: y,
        iconPrefixCls: x,
        theme: C,
        componentDisabled: S,
        segmented: O,
        statistic: k,
        spin: w,
        calendar: j,
        carousel: I,
        cascader: P,
        collapse: H,
        typography: T,
        checkbox: R,
        descriptions: N,
        divider: L,
        drawer: F,
        skeleton: A,
        steps: D,
        image: W,
        layout: _,
        list: G,
        mentions: q,
        modal: X,
        progress: V,
        result: K,
        slider: U,
        breadcrumb: Y,
        menu: Q,
        pagination: Z,
        input: J,
        textArea: ee,
        empty: te,
        badge: oe,
        radio: ne,
        rate: re,
        switch: ie,
        transfer: ae,
        avatar: se,
        message: ce,
        tag: de,
        table: ue,
        card: pe,
        tabs: me,
        timeline: ge,
        timePicker: be,
        upload: fe,
        notification: he,
        tree: $e,
        colorPicker: ve,
        datePicker: ye,
        rangePicker: xe,
        flex: Ce,
        wave: Se,
        dropdown: Oe,
        warning: ke,
        tour: we,
        tooltip: Ee,
        popover: je,
        popconfirm: Ie,
        floatButton: Pe,
        floatButtonGroup: Be,
        variant: ze,
        inputNumber: Me,
        treeSelect: He,
      } = e,
      Te = le.useCallback(
        (t, o) => {
          const { prefixCls: n } = e;
          if (o) return o;
          const r = n || y.getPrefixCls('');
          return t ? `${r}-${t}` : r;
        },
        [y.getPrefixCls, e.prefixCls],
      ),
      Re = x || y.iconPrefixCls || Mt,
      Ne = i || y.csp;
    ((e, t) => {
      const [o, n] = eo();
      B(
        {
          token: n,
          hashId: '',
          path: ['ant-design-icons', e],
          nonce: () => (null == t ? void 0 : t.nonce),
          layer: { name: 'antd' },
        },
        () => io(e),
      );
    })(Re, Ne);
    const Le = (function (e, t, r) {
        var i;
        at();
        const a = e || {},
          l =
            !1 !== a.inherit && t
              ? t
              : Object.assign(Object.assign({}, Pt), {
                  hashed:
                    null !== (i = null == t ? void 0 : t.hashed) && void 0 !== i
                      ? i
                      : Pt.hashed,
                  cssVar: null == t ? void 0 : t.cssVar,
                }),
          s = go();
        return o(
          () => {
            var o, n;
            if (!e) return t;
            const i = Object.assign({}, l.components);
            Object.keys(e.components || {}).forEach((t) => {
              i[t] = Object.assign(Object.assign({}, i[t]), e.components[t]);
            });
            const c = `css-var-${s.replace(/:/g, '')}`,
              d =
                (null !== (o = a.cssVar) && void 0 !== o ? o : l.cssVar) &&
                Object.assign(
                  Object.assign(
                    Object.assign(
                      { prefix: null == r ? void 0 : r.prefixCls },
                      'object' == typeof l.cssVar ? l.cssVar : {},
                    ),
                    'object' == typeof a.cssVar ? a.cssVar : {},
                  ),
                  {
                    key:
                      ('object' == typeof a.cssVar &&
                        (null === (n = a.cssVar) || void 0 === n
                          ? void 0
                          : n.key)) ||
                      c,
                  },
                );
            return Object.assign(Object.assign(Object.assign({}, l), a), {
              token: Object.assign(Object.assign({}, l.token), a.token),
              components: i,
              cssVar: d,
            });
          },
          [a, l],
          (e, t) =>
            e.some((e, o) => {
              const r = t[o];
              return !n(e, r, !0);
            }),
        );
      })(C, y.theme, { prefixCls: Te('') }),
      Fe = {
        csp: Ne,
        autoInsertSpaceInButton: a,
        alert: l,
        anchor: s,
        locale: d || v,
        direction: p,
        space: m,
        splitter: g,
        virtual: b,
        popupMatchSelectWidth: null != h ? h : f,
        popupOverflow: $,
        getPrefixCls: Te,
        iconPrefixCls: Re,
        theme: Le,
        segmented: O,
        statistic: k,
        spin: w,
        calendar: j,
        carousel: I,
        cascader: P,
        collapse: H,
        typography: T,
        checkbox: R,
        descriptions: N,
        divider: L,
        drawer: F,
        skeleton: A,
        steps: D,
        image: W,
        input: J,
        textArea: ee,
        layout: _,
        list: G,
        mentions: q,
        modal: X,
        progress: V,
        result: K,
        slider: U,
        breadcrumb: Y,
        menu: Q,
        pagination: Z,
        empty: te,
        badge: oe,
        radio: ne,
        rate: re,
        switch: ie,
        transfer: ae,
        avatar: se,
        message: ce,
        tag: de,
        table: ue,
        card: pe,
        tabs: me,
        timeline: ge,
        timePicker: be,
        upload: fe,
        notification: he,
        tree: $e,
        colorPicker: ve,
        datePicker: ye,
        rangePicker: xe,
        flex: Ce,
        wave: Se,
        dropdown: Oe,
        warning: ke,
        tour: we,
        tooltip: Ee,
        popover: je,
        popconfirm: Ie,
        floatButton: Pe,
        floatButtonGroup: Be,
        variant: ze,
        inputNumber: Me,
        treeSelect: He,
      },
      Ae = Object.assign({}, y);
    (Object.keys(Fe).forEach((e) => {
      void 0 !== Fe[e] && (Ae[e] = Fe[e]);
    }),
      $o.forEach((t) => {
        const o = e[t];
        o && (Ae[t] = o);
      }),
      void 0 !== a &&
        (Ae.button = Object.assign({ autoInsertSpace: a }, Ae.button)));
    const De = o(
        () => Ae,
        Ae,
        (e, t) => {
          const o = Object.keys(e),
            n = Object.keys(t);
          return o.length !== n.length || o.some((o) => e[o] !== t[o]);
        },
      ),
      { layer: We } = le.useContext(z),
      _e = le.useMemo(
        () => ({ prefixCls: Re, csp: Ne, layer: We ? 'antd' : void 0 }),
        [Re, Ne, We],
      );
    let Ge = le.createElement(
      le.Fragment,
      null,
      le.createElement(ho, { dropdownMatchSelectWidth: f }),
      t,
    );
    const qe = le.useMemo(() => {
      var e, t, o, n;
      return r(
        (null === (e = ut.Form) || void 0 === e
          ? void 0
          : e.defaultValidateMessages) || {},
        (null ===
          (o = null === (t = De.locale) || void 0 === t ? void 0 : t.Form) ||
        void 0 === o
          ? void 0
          : o.defaultValidateMessages) || {},
        (null === (n = De.form) || void 0 === n
          ? void 0
          : n.validateMessages) || {},
        (null == c ? void 0 : c.validateMessages) || {},
      );
    }, [De, null == c ? void 0 : c.validateMessages]);
    (Object.keys(qe).length > 0 &&
      (Ge = le.createElement(lt.Provider, { value: qe }, Ge)),
      d &&
        (Ge = le.createElement(
          $t,
          { locale: d, _ANT_MARK__: 'internalMark' },
          Ge,
        )),
      (Ge = le.createElement(M.Provider, { value: _e }, Ge)),
      u && (Ge = le.createElement(Gt, { size: u }, Ge)),
      (Ge = le.createElement(fo, null, Ge)));
    const Xe = le.useMemo(() => {
      const e = Le || {},
        { algorithm: t, token: o, components: n, cssVar: r } = e,
        i = (function (e, t) {
          var o = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (o[n] = e[n]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
              t.indexOf(n[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                (o[n[r]] = e[n[r]]);
          }
          return o;
        })(e, ['algorithm', 'token', 'components', 'cssVar']),
        a = t && (!Array.isArray(t) || t.length > 0) ? E(t) : It,
        l = {};
      Object.entries(n || {}).forEach(([e, t]) => {
        const o = Object.assign({}, t);
        ('algorithm' in o &&
          (!0 === o.algorithm
            ? (o.theme = a)
            : (Array.isArray(o.algorithm) ||
                'function' == typeof o.algorithm) &&
              (o.theme = E(o.algorithm)),
          delete o.algorithm),
          (l[e] = o));
      });
      const s = Object.assign(Object.assign({}, yt), o);
      return Object.assign(Object.assign({}, i), {
        theme: a,
        token: s,
        components: l,
        override: Object.assign({ override: s }, l),
        cssVar: r,
      });
    }, [Le]);
    return (
      C && (Ge = le.createElement(Bt.Provider, { value: Xe }, Ge)),
      De.warning &&
        (Ge = le.createElement(it.Provider, { value: De.warning }, Ge)),
      void 0 !== S && (Ge = le.createElement(Wt, { disabled: S }, Ge)),
      le.createElement(Tt.Provider, { value: De }, Ge)
    );
  },
  Eo = (e) => {
    const t = le.useContext(Tt),
      o = le.useContext(ft);
    return le.createElement(
      wo,
      Object.assign({ parentContext: t, legacyLocale: o }, e),
    );
  };
function jo(e) {
  return e && se.isValidElement(e) && e.type === se.Fragment;
}
((Eo.ConfigContext = Tt),
  (Eo.SizeContext = _t),
  (Eo.config = (e) => {
    const { prefixCls: t, iconPrefixCls: o, theme: n, holderRender: r } = e;
    (void 0 !== t && (vo = t),
      void 0 !== o && (yo = o),
      'holderRender' in e && (Co = r),
      n &&
        (!(function (e) {
          return Object.keys(e).some((e) => e.endsWith('Color'));
        })(n)
          ? (xo = n)
          : At(So(), n)));
  }),
  (Eo.useConfig = function () {
    return {
      componentDisabled: le.useContext(Dt),
      componentSize: le.useContext(_t),
    };
  }),
  Object.defineProperty(Eo, 'SizeContext', { get: () => _t }));
const Io = (e, t, o) =>
  se.isValidElement(e)
    ? se.cloneElement(e, 'function' == typeof o ? o(e.props || {}) : o)
    : t;
function Po(e, t) {
  return Io(e, e, t);
}
const Bo = (e) => {
  const [, , , , t] = eo();
  return t ? `${e}-css-var` : '';
};
function zo(...e) {
  const t = {};
  return (
    e.forEach((e) => {
      e &&
        Object.keys(e).forEach((o) => {
          void 0 !== e[o] && (t[o] = e[o]);
        });
    }),
    t
  );
}
function Mo(e) {
  if (!e) return;
  const { closable: t, closeIcon: o } = e;
  return { closable: t, closeIcon: o };
}
function Ho(e) {
  const { closable: t, closeIcon: o } = e || {};
  return se.useMemo(() => {
    if (!t && (!1 === t || !1 === o || null === o)) return !1;
    if (void 0 === t && void 0 === o) return null;
    let e = { closeIcon: 'boolean' != typeof o && null !== o ? o : void 0 };
    return (
      t && 'object' == typeof t && (e = Object.assign(Object.assign({}, e), t)),
      e
    );
  }, [t, o]);
}
const To = {},
  Ro = (e, t, o = To) => {
    const n = Ho(e),
      r = Ho(t),
      [a] = ht('global', ut.global),
      l = 'boolean' != typeof n && !!(null == n ? void 0 : n.disabled),
      s = se.useMemo(
        () => Object.assign({ closeIcon: se.createElement(H, null) }, o),
        [o],
      ),
      c = se.useMemo(
        () =>
          !1 !== n &&
          (n ? zo(s, r, n) : !1 !== r && (r ? zo(s, r) : !!s.closable && s)),
        [n, r, s],
      );
    return se.useMemo(() => {
      var e, t;
      if (!1 === c) return [!1, null, l, {}];
      const { closeIconRender: o } = s,
        { closeIcon: n } = c;
      let r = n;
      const d = i(c, !0);
      return (
        null != r &&
          (o && (r = o(n)),
          (r = se.isValidElement(r)
            ? se.cloneElement(
                r,
                Object.assign(
                  Object.assign(Object.assign({}, r.props), {
                    'aria-label':
                      null !==
                        (t =
                          null === (e = r.props) || void 0 === e
                            ? void 0
                            : e['aria-label']) && void 0 !== t
                        ? t
                        : a.close,
                  }),
                  d,
                ),
              )
            : se.createElement(
                'span',
                Object.assign({ 'aria-label': a.close }, d),
                r,
              ))),
        [!0, r, l, d]
      );
    }, [l, a.close, c, s]);
  };
function No(e, ...t) {
  const o = e || {};
  return t.reduce(
    (e, t) => (
      Object.keys(t || {}).forEach((n) => {
        const r = o[n],
          i = t[n];
        if (r && 'object' == typeof r)
          if (i && 'object' == typeof i) e[n] = No(r, e[n], i);
          else {
            const { _default: t } = r;
            t && ((e[n] = e[n] || {}), (e[n][t] = de(e[n][t], i)));
          }
        else e[n] = de(e[n], i);
      }),
      e
    ),
    {},
  );
}
function Lo(e, ...t) {
  return le.useMemo(() => No.apply(void 0, [e].concat(t)), [t, e]);
}
function Fo(...e) {
  return le.useMemo(
    () =>
      e.reduce(
        (e, t = {}) => (
          Object.keys(t).forEach((o) => {
            e[o] = Object.assign(Object.assign({}, e[o]), t[o]);
          }),
          e
        ),
        {},
      ),
    [e],
  );
}
function Ao(e, t) {
  const o = Object.assign({}, e);
  return (
    Object.keys(t).forEach((e) => {
      if ('_default' !== e) {
        const n = t[e],
          r = o[e] || {};
        o[e] = n ? Ao(r, n) : r;
      }
    }),
    o
  );
}
const Do = (e, t, o) => {
    const n = Lo.apply(void 0, [o].concat(ze(e))),
      r = Fo.apply(void 0, ze(t));
    return le.useMemo(() => [Ao(n, o), Ao(r, o)], [n, r, o]);
  },
  Wo = se.createContext(void 0),
  _o = 100,
  Go = 1e3,
  qo = {
    Modal: _o,
    Drawer: _o,
    Popover: _o,
    Popconfirm: _o,
    Tooltip: _o,
    Tour: _o,
    FloatButton: _o,
  },
  Xo = {
    SelectLike: 50,
    Dropdown: 50,
    DatePicker: 50,
    Menu: 50,
    ImagePreview: 1,
  };
const Vo = (e, t) => {
    const [, o] = eo(),
      n = se.useContext(Wo),
      r = e in qo;
    let i;
    if (void 0 !== t) i = [t, t];
    else {
      let a = null != n ? n : 0;
      ((a += r ? (n ? 0 : o.zIndexPopupBase) + qo[e] : Xo[e]),
        (i = [void 0 === n ? t : a, a]));
    }
    return i;
  },
  Ko = lo(
    'Message',
    (e) =>
      ((e) => {
        const {
            componentCls: t,
            iconCls: o,
            boxShadow: n,
            colorText: r,
            colorSuccess: i,
            colorError: a,
            colorWarning: l,
            colorInfo: s,
            fontSizeLG: c,
            motionEaseInOutCirc: d,
            motionDurationSlow: u,
            marginXS: p,
            paddingXS: m,
            borderRadiusLG: g,
            zIndexPopup: b,
            contentPadding: f,
            contentBg: h,
          } = e,
          $ = `${t}-notice`,
          v = new R('MessageMoveIn', {
            '0%': { padding: 0, transform: 'translateY(-100%)', opacity: 0 },
            '100%': { padding: m, transform: 'translateY(0)', opacity: 1 },
          }),
          y = new R('MessageMoveOut', {
            '0%': { maxHeight: e.height, padding: m, opacity: 1 },
            '100%': { maxHeight: 0, padding: 0, opacity: 0 },
          }),
          x = {
            padding: m,
            textAlign: 'center',
            [`${t}-custom-content`]: { display: 'flex', alignItems: 'center' },
            [`${t}-custom-content > ${o}`]: { marginInlineEnd: p, fontSize: c },
            [`${$}-content`]: {
              display: 'inline-block',
              padding: f,
              background: h,
              borderRadius: g,
              boxShadow: n,
              pointerEvents: 'all',
            },
            [`${t}-success > ${o}`]: { color: i },
            [`${t}-error > ${o}`]: { color: a },
            [`${t}-warning > ${o}`]: { color: l },
            [`${t}-info > ${o},\n      ${t}-loading > ${o}`]: { color: s },
          };
        return [
          {
            [t]: Object.assign(Object.assign({}, oo(e)), {
              color: r,
              position: 'fixed',
              top: p,
              width: '100%',
              pointerEvents: 'none',
              zIndex: b,
              [`${t}-move-up`]: { animationFillMode: 'forwards' },
              [`\n        ${t}-move-up-appear,\n        ${t}-move-up-enter\n      `]:
                {
                  animationName: v,
                  animationDuration: u,
                  animationPlayState: 'paused',
                  animationTimingFunction: d,
                },
              [`\n        ${t}-move-up-appear${t}-move-up-appear-active,\n        ${t}-move-up-enter${t}-move-up-enter-active\n      `]:
                { animationPlayState: 'running' },
              [`${t}-move-up-leave`]: {
                animationName: y,
                animationDuration: u,
                animationPlayState: 'paused',
                animationTimingFunction: d,
              },
              [`${t}-move-up-leave${t}-move-up-leave-active`]: {
                animationPlayState: 'running',
              },
              '&-rtl': { direction: 'rtl', span: { direction: 'rtl' } },
            }),
          },
          { [t]: { [`${$}-wrapper`]: Object.assign({}, x) } },
          {
            [`${t}-notice-pure-panel`]: Object.assign(Object.assign({}, x), {
              padding: 0,
              textAlign: 'start',
            }),
          },
        ];
      })(T(e, { height: 150 })),
    (e) => ({
      zIndexPopup: e.zIndexPopupBase + Go + 10,
      contentBg: e.colorBgElevated,
      contentPadding: `${(e.controlHeightLG - e.fontSize * e.lineHeight) / 2}px ${e.paddingSM}px`,
    }),
  );
const Uo = {
    info: le.createElement(D, null),
    success: le.createElement(A, null),
    error: le.createElement(F, null),
    warning: le.createElement(L, null),
    loading: le.createElement(N, null),
  },
  Yo = ({ prefixCls: e, type: t, icon: o, children: n }) =>
    le.createElement(
      'div',
      { className: de(`${e}-custom-content`, `${e}-${t}`) },
      o || Uo[t],
      le.createElement('span', null, n),
    );
function Qo(e) {
  let t;
  const o = new Promise((o) => {
      t = e(() => {
        o(!0);
      });
    }),
    n = () => {
      null == t || t();
    };
  return ((n.then = (e, t) => o.then(e, t)), (n.promise = o), n);
}
const Zo = 3,
  Jo = ({ children: e, prefixCls: t }) => {
    const o = Bo(t),
      [n, r, i] = Ko(t, o);
    return n(le.createElement(Je, { classNames: { list: de(r, i, o) } }, e));
  },
  en = (e, { prefixCls: t, key: o }) =>
    le.createElement(Jo, { prefixCls: t, key: o }, e),
  tn = le.forwardRef((e, t) => {
    const {
        top: o,
        prefixCls: n,
        getContainer: r,
        maxCount: i,
        duration: a = Zo,
        rtl: l,
        transitionName: s,
        onAllRemoved: c,
      } = e,
      {
        getPrefixCls: d,
        getPopupContainer: u,
        message: p,
        direction: m,
      } = le.useContext(Tt),
      g = n || d('message'),
      b = le.createElement(
        'span',
        { className: `${g}-close-x` },
        le.createElement(H, { className: `${g}-close-icon` }),
      ),
      [f, h] = Ze({
        prefixCls: g,
        style: () => ({
          left: '50%',
          transform: 'translateX(-50%)',
          top: null != o ? o : 8,
        }),
        className: () => de({ [`${g}-rtl`]: null != l ? l : 'rtl' === m }),
        motion: () =>
          (function (e, t) {
            return { motionName: null != t ? t : `${e}-move-up` };
          })(g, s),
        closable: !1,
        closeIcon: b,
        duration: a,
        getContainer: () =>
          (null == r ? void 0 : r()) ||
          (null == u ? void 0 : u()) ||
          document.body,
        maxCount: i,
        onAllRemoved: c,
        renderNotifications: en,
      });
    return (
      le.useImperativeHandle(t, () =>
        Object.assign(Object.assign({}, f), { prefixCls: g, message: p }),
      ),
      h
    );
  });
let on = 0;
function nn(e) {
  const t = le.useRef(null);
  at();
  return [
    le.useMemo(() => {
      const e = (e) => {
          var o;
          null === (o = t.current) || void 0 === o || o.close(e);
        },
        o = (o) => {
          if (!t.current) {
            const e = () => {};
            return ((e.then = () => {}), e);
          }
          const { open: n, prefixCls: r, message: i } = t.current,
            a = `${r}-notice`,
            {
              content: l,
              icon: s,
              type: c,
              key: d,
              className: u,
              style: p,
              onClose: m,
            } = o,
            g = (function (e, t) {
              var o = {};
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) &&
                  t.indexOf(n) < 0 &&
                  (o[n] = e[n]);
              if (
                null != e &&
                'function' == typeof Object.getOwnPropertySymbols
              ) {
                var r = 0;
                for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                  t.indexOf(n[r]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                    (o[n[r]] = e[n[r]]);
              }
              return o;
            })(o, [
              'content',
              'icon',
              'type',
              'key',
              'className',
              'style',
              'onClose',
            ]);
          let b = d;
          return (
            null == b && ((on += 1), (b = `antd-message-${on}`)),
            Qo(
              (t) => (
                n(
                  Object.assign(Object.assign({}, g), {
                    key: b,
                    content: le.createElement(
                      Yo,
                      { prefixCls: r, type: c, icon: s },
                      l,
                    ),
                    placement: 'top',
                    className: de(
                      c && `${a}-${c}`,
                      u,
                      null == i ? void 0 : i.className,
                    ),
                    style: Object.assign(
                      Object.assign({}, null == i ? void 0 : i.style),
                      p,
                    ),
                    onClose: () => {
                      (null == m || m(), t());
                    },
                  }),
                ),
                () => {
                  e(b);
                }
              ),
            )
          );
        },
        n = {
          open: o,
          destroy: (o) => {
            var n;
            void 0 !== o
              ? e(o)
              : null === (n = t.current) || void 0 === n || n.destroy();
          },
        };
      return (
        ['info', 'success', 'warning', 'error', 'loading'].forEach((e) => {
          n[e] = (t, n, r) => {
            let i, a, l;
            ((i =
              t && 'object' == typeof t && 'content' in t ? t : { content: t }),
              'function' == typeof n ? (l = n) : ((a = n), (l = r)));
            const s = Object.assign(
              Object.assign({ onClose: l, duration: a }, i),
              { type: e },
            );
            return o(s);
          };
        }),
        n
      );
    }, []),
    le.createElement(
      tn,
      Object.assign({ key: 'message-holder' }, e, { ref: t }),
    ),
  ];
}
function rn(e) {
  return nn(e);
}
let an = (e, t) => (a(e, t), () => l(t));
function ln(e) {
  return an;
}
const sn = (e, t, o) => (void 0 !== o ? o : `${e}-${t}`),
  cn = so('Wave', (e) => {
    const { componentCls: t, colorPrimary: o } = e;
    return {
      [t]: {
        position: 'absolute',
        background: 'transparent',
        pointerEvents: 'none',
        boxSizing: 'border-box',
        color: `var(--wave-color, ${o})`,
        boxShadow: '0 0 0 0 currentcolor',
        opacity: 0.2,
        '&.wave-motion-appear': {
          transition: [
            `box-shadow 0.4s ${e.motionEaseOutCirc}`,
            `opacity 2s ${e.motionEaseOutCirc}`,
          ].join(','),
          '&-active': { boxShadow: '0 0 0 6px currentcolor', opacity: 0 },
          '&.wave-quick': {
            transition: [
              `box-shadow ${e.motionDurationSlow} ${e.motionEaseInOut}`,
              `opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,
            ].join(','),
          },
        },
      },
    };
  }),
  dn = `${zt}-wave-target`;
function un(e) {
  return (
    e &&
    '#fff' !== e &&
    '#ffffff' !== e &&
    'rgb(255, 255, 255)' !== e &&
    'rgba(255, 255, 255, 1)' !== e &&
    !/rgba\((?:\d*, ){3}0\)/.test(e) &&
    'transparent' !== e &&
    'canvastext' !== e
  );
}
function pn(e) {
  return Number.isNaN(e) ? 0 : e;
}
const mn = (e) => {
    const { className: t, target: o, component: n, registerUnmount: r } = e,
      i = le.useRef(null),
      a = le.useRef(null);
    le.useEffect(() => {
      a.current = r();
    }, []);
    const [l, d] = le.useState(null),
      [u, p] = le.useState([]),
      [m, g] = le.useState(0),
      [b, f] = le.useState(0),
      [h, $] = le.useState(0),
      [v, y] = le.useState(0),
      [x, C] = le.useState(!1),
      S = {
        left: m,
        top: b,
        width: h,
        height: v,
        borderRadius: u.map((e) => `${e}px`).join(' '),
      };
    function O() {
      const e = getComputedStyle(o);
      d(
        (function (e) {
          var t;
          const {
            borderTopColor: o,
            borderColor: n,
            backgroundColor: r,
          } = getComputedStyle(e);
          return null !== (t = [o, n, r].find(un)) && void 0 !== t ? t : null;
        })(o),
      );
      const t = 'static' === e.position,
        { borderLeftWidth: n, borderTopWidth: r } = e;
      (g(t ? o.offsetLeft : pn(-Number.parseFloat(n))),
        f(t ? o.offsetTop : pn(-Number.parseFloat(r))),
        $(o.offsetWidth),
        y(o.offsetHeight));
      const {
        borderTopLeftRadius: i,
        borderTopRightRadius: a,
        borderBottomLeftRadius: l,
        borderBottomRightRadius: s,
      } = e;
      p([i, a, s, l].map((e) => pn(Number.parseFloat(e))));
    }
    if (
      (l && (S['--wave-color'] = l),
      le.useEffect(() => {
        if (o) {
          const e = s(() => {
            (O(), C(!0));
          });
          let t;
          return (
            'undefined' != typeof ResizeObserver &&
              ((t = new ResizeObserver(O)), t.observe(o)),
            () => {
              (s.cancel(e), null == t || t.disconnect());
            }
          );
        }
      }, [o]),
      !x)
    )
      return null;
    const k =
      ('Checkbox' === n || 'Radio' === n) &&
      (null == o ? void 0 : o.classList.contains(dn));
    return le.createElement(
      me,
      {
        visible: !0,
        motionAppear: !0,
        motionName: 'wave-motion',
        motionDeadline: 5e3,
        onAppearEnd: (e, t) => {
          var o, n;
          if (t.deadline || 'opacity' === t.propertyName) {
            const e =
              null === (o = i.current) || void 0 === o
                ? void 0
                : o.parentElement;
            null === (n = a.current) ||
              void 0 === n ||
              n.call(a).then(() => {
                null == e || e.remove();
              });
          }
          return !1;
        },
      },
      ({ className: e }, o) =>
        le.createElement('div', {
          ref: c(i, o),
          className: de(t, e, { 'wave-quick': k }),
          style: S,
        }),
    );
  },
  gn = (e, t) => {
    var o;
    const { component: n } = t;
    if (
      'Checkbox' === n &&
      !(null === (o = e.querySelector('input')) || void 0 === o
        ? void 0
        : o.checked)
    )
      return;
    const r = document.createElement('div');
    ((r.style.position = 'absolute'),
      (r.style.left = '0px'),
      (r.style.top = '0px'),
      null == e || e.insertBefore(r, null == e ? void 0 : e.firstChild));
    const i = ln();
    let a = null;
    a = i(
      le.createElement(
        mn,
        Object.assign({}, t, {
          target: e,
          registerUnmount: function () {
            return a;
          },
        }),
      ),
      r,
    );
  },
  bn = (e, t, o) => {
    const { wave: n } = le.useContext(Tt),
      [, r, i] = eo(),
      a = d((a) => {
        const l = e.current;
        if ((null == n ? void 0 : n.disabled) || !l) return;
        const s = l.querySelector(`.${dn}`) || l,
          { showEffect: c } = n || {};
        (c || gn)(s, {
          className: t,
          token: r,
          component: o,
          event: a,
          hashId: i,
        });
      }),
      l = le.useRef(null);
    return (e) => {
      (s.cancel(l.current),
        (l.current = s(() => {
          a(e);
        })));
    };
  },
  fn = (e) => {
    const { children: t, disabled: o, component: n } = e,
      { getPrefixCls: r } = le.useContext(Tt),
      i = le.useRef(null),
      a = r('wave'),
      [, l] = cn(a),
      s = bn(i, de(a, l), n);
    if (
      (se.useEffect(() => {
        const e = i.current;
        if (!e || e.nodeType !== window.Node.ELEMENT_NODE || o) return;
        const t = (t) => {
          !m(t.target) ||
            !e.getAttribute ||
            e.getAttribute('disabled') ||
            e.disabled ||
            (e.className.includes('disabled') &&
              !e.className.includes('disabled:')) ||
            'true' === e.getAttribute('aria-disabled') ||
            e.className.includes('-leave') ||
            s(t);
        };
        return (
          e.addEventListener('click', t, !0),
          () => {
            e.removeEventListener('click', t, !0);
          }
        );
      }, [o]),
      !se.isValidElement(t))
    )
      return null != t ? t : null;
    return Po(t, { ref: u(t) ? c(p(t), i) : i });
  },
  hn = (e) => {
    const t = se.useContext(_t);
    return se.useMemo(
      () =>
        e
          ? 'string' == typeof e
            ? null != e
              ? e
              : t
            : 'function' == typeof e
              ? e(t)
              : t
          : t,
      [e, t],
    );
  },
  $n = (e) => {
    const { componentCls: t } = e;
    return {
      [t]: {
        display: 'inline-flex',
        '&-block': { display: 'flex', width: '100%' },
        '&-vertical': { flexDirection: 'column' },
        '&-rtl': { direction: 'rtl' },
      },
    };
  },
  vn = lo(
    ['Space', 'Compact'],
    (e) => [$n(e)],
    () => ({}),
    { resetStyle: !1 },
  );
var yn = function (e, t) {
  var o = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (o[n] = e[n]);
  if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
    var r = 0;
    for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
      t.indexOf(n[r]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
        (o[n[r]] = e[n[r]]);
  }
  return o;
};
const xn = le.createContext(null),
  Cn = (e, t) => {
    const o = le.useContext(xn),
      n = le.useMemo(() => {
        if (!o) return '';
        const { compactDirection: n, isFirstItem: r, isLastItem: i } = o,
          a = 'vertical' === n ? '-vertical-' : '-';
        return de(`${e}-compact${a}item`, {
          [`${e}-compact${a}first-item`]: r,
          [`${e}-compact${a}last-item`]: i,
          [`${e}-compact${a}item-rtl`]: 'rtl' === t,
        });
      }, [e, t, o]);
    return {
      compactSize: null == o ? void 0 : o.compactSize,
      compactDirection: null == o ? void 0 : o.compactDirection,
      compactItemClassnames: n,
    };
  },
  Sn = (e) => {
    const { children: t } = e;
    return le.createElement(xn.Provider, { value: null }, t);
  },
  On = (e) => {
    const { children: t } = e,
      o = yn(e, ['children']);
    return le.createElement(
      xn.Provider,
      { value: le.useMemo(() => o, [o]) },
      t,
    );
  };
const kn = le.createContext(void 0),
  wn = /^[\u4E00-\u9FA5]{2}$/,
  En = wn.test.bind(wn);
function jn(e) {
  return 'danger' === e ? { danger: !0 } : { type: e };
}
function In(e) {
  return 'string' == typeof e;
}
function Pn(e) {
  return 'text' === e || 'link' === e;
}
function Bn(e, t) {
  let o = !1;
  const n = [];
  return (
    se.Children.forEach(e, (e) => {
      const t = typeof e,
        r = 'string' === t || 'number' === t;
      if (o && r) {
        const t = n.length - 1,
          o = n[t];
        n[t] = `${o}${e}`;
      } else n.push(e);
      o = r;
    }),
    se.Children.map(n, (e) =>
      (function (e, t) {
        if (null == e) return;
        const o = t ? ' ' : '';
        return 'string' != typeof e &&
          'number' != typeof e &&
          In(e.type) &&
          En(e.props.children)
          ? Po(e, { children: e.props.children.split('').join(o) })
          : In(e)
            ? En(e)
              ? se.createElement('span', null, e.split('').join(o))
              : se.createElement('span', null, e)
            : jo(e)
              ? se.createElement('span', null, e)
              : e;
      })(e, t),
    )
  );
}
['default', 'primary', 'danger'].concat(ze(qt));
const zn = le.forwardRef((e, t) => {
    const { className: o, style: n, children: r, prefixCls: i } = e,
      a = de(`${i}-icon`, o);
    return se.createElement('span', { ref: t, className: a, style: n }, r);
  }),
  Mn = le.forwardRef((e, t) => {
    const { prefixCls: o, className: n, style: r, iconClassName: i } = e,
      a = de(`${o}-loading-icon`, n);
    return se.createElement(
      zn,
      { prefixCls: o, className: a, style: r, ref: t },
      se.createElement(N, { className: i }),
    );
  }),
  Hn = () => ({ width: 0, opacity: 0, transform: 'scale(0)' }),
  Tn = (e) => ({ width: e.scrollWidth, opacity: 1, transform: 'scale(1)' }),
  Rn = (e) => {
    const {
        prefixCls: t,
        loading: o,
        existIcon: n,
        className: r,
        style: i,
        mount: a,
      } = e,
      l = !!o;
    return n
      ? se.createElement(Mn, { prefixCls: t, className: r, style: i })
      : se.createElement(
          me,
          {
            visible: l,
            motionName: `${t}-loading-icon-motion`,
            motionAppear: !a,
            motionEnter: !a,
            motionLeave: !a,
            removeOnLeave: !0,
            onAppearStart: Hn,
            onAppearActive: Tn,
            onEnterStart: Hn,
            onEnterActive: Tn,
            onLeaveStart: Tn,
            onLeaveActive: Hn,
          },
          ({ className: e, style: o }, n) => {
            const a = Object.assign(Object.assign({}, i), o);
            return se.createElement(Mn, {
              prefixCls: t,
              className: de(r, e),
              style: a,
              ref: n,
            });
          },
        );
  },
  Nn = (e, t) => ({
    [`> span, > ${e}`]: {
      '&:not(:last-child)': {
        [`&, & > ${e}`]: { '&:not(:disabled)': { borderInlineEndColor: t } },
      },
      '&:not(:first-child)': {
        [`&, & > ${e}`]: { '&:not(:disabled)': { borderInlineStartColor: t } },
      },
    },
  }),
  Ln = (e) => {
    const {
      componentCls: t,
      fontSize: o,
      lineWidth: n,
      groupBorderColor: r,
      colorErrorHover: i,
    } = e;
    return {
      [`${t}-group`]: [
        {
          position: 'relative',
          display: 'inline-flex',
          [`> span, > ${t}`]: {
            '&:not(:last-child)': {
              [`&, & > ${t}`]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0,
              },
            },
            '&:not(:first-child)': {
              marginInlineStart: e.calc(n).mul(-1).equal(),
              [`&, & > ${t}`]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0,
              },
            },
          },
          [t]: {
            position: 'relative',
            zIndex: 1,
            '&:hover, &:focus, &:active': { zIndex: 2 },
            '&[disabled]': { zIndex: 0 },
          },
          [`${t}-icon-only`]: { fontSize: o },
        },
        Nn(`${t}-primary`, r),
        Nn(`${t}-danger`, i),
      ],
    };
  };
let Fn = (function () {
  return Me(
    function e(t) {
      var o;
      if ((He(this, e), (this.cleared = !1), t instanceof e))
        return (
          (this.metaColor = t.metaColor.clone()),
          (this.colors =
            null === (o = t.colors) || void 0 === o
              ? void 0
              : o.map((t) => ({ color: new e(t.color), percent: t.percent }))),
          void (this.cleared = t.cleared)
        );
      const n = Array.isArray(t);
      (n && t.length
        ? ((this.colors = t.map(({ color: t, percent: o }) => ({
            color: new e(t),
            percent: o,
          }))),
          (this.metaColor = new Be(this.colors[0].color.metaColor)))
        : (this.metaColor = new Be(n ? '' : t)),
        (!t || (n && !this.colors)) &&
          ((this.metaColor = this.metaColor.setA(0)), (this.cleared = !0)));
    },
    [
      {
        key: 'toHsb',
        value: function () {
          return this.metaColor.toHsb();
        },
      },
      {
        key: 'toHsbString',
        value: function () {
          return this.metaColor.toHsbString();
        },
      },
      {
        key: 'toHex',
        value: function () {
          return (
            (e = this.toHexString()),
            (t = this.metaColor.a < 1),
            e
              ? ((e, t) =>
                  (null == e
                    ? void 0
                    : e.replace(/[^\w/]/g, '').slice(0, t ? 8 : 6)) || '')(e, t)
              : ''
          );
          var e, t;
        },
      },
      {
        key: 'toHexString',
        value: function () {
          return this.metaColor.toHexString();
        },
      },
      {
        key: 'toRgb',
        value: function () {
          return this.metaColor.toRgb();
        },
      },
      {
        key: 'toRgbString',
        value: function () {
          return this.metaColor.toRgbString();
        },
      },
      {
        key: 'isGradient',
        value: function () {
          return !!this.colors && !this.cleared;
        },
      },
      {
        key: 'getColors',
        value: function () {
          return this.colors || [{ color: this, percent: 0 }];
        },
      },
      {
        key: 'toCssString',
        value: function () {
          const { colors: e } = this;
          if (e) {
            return `linear-gradient(90deg, ${e.map((e) => `${e.color.toRgbString()} ${e.percent}%`).join(', ')})`;
          }
          return this.metaColor.toRgbString();
        },
      },
      {
        key: 'equals',
        value: function (e) {
          return (
            !(!e || this.isGradient() !== e.isGradient()) &&
            (this.isGradient()
              ? this.colors.length === e.colors.length &&
                this.colors.every((t, o) => {
                  const n = e.colors[o];
                  return t.percent === n.percent && t.color.equals(n.color);
                })
              : this.toHexString() === e.toHexString())
          );
        },
      },
    ],
  );
})();
const An = (e) => ({ animationDuration: e, animationFillMode: 'both' }),
  Dn = (e) => ({ animationDuration: e, animationFillMode: 'both' }),
  Wn = (e, t, o, n, r = !1) => {
    const i = r ? '&' : '';
    return {
      [`\n      ${i}${e}-enter,\n      ${i}${e}-appear\n    `]: Object.assign(
        Object.assign({}, An(n)),
        { animationPlayState: 'paused' },
      ),
      [`${i}${e}-leave`]: Object.assign(Object.assign({}, Dn(n)), {
        animationPlayState: 'paused',
      }),
      [`\n      ${i}${e}-enter${e}-enter-active,\n      ${i}${e}-appear${e}-appear-active\n    `]:
        { animationName: t, animationPlayState: 'running' },
      [`${i}${e}-leave${e}-leave-active`]: {
        animationName: o,
        animationPlayState: 'running',
        pointerEvents: 'none',
      },
    };
  },
  _n = new R('antFadeIn', { '0%': { opacity: 0 }, '100%': { opacity: 1 } }),
  Gn = new R('antFadeOut', { '0%': { opacity: 1 }, '100%': { opacity: 0 } }),
  qn = (e, t = !1) => {
    const { antCls: o } = e,
      n = `${o}-fade`,
      r = t ? '&' : '';
    return [
      Wn(n, _n, Gn, e.motionDurationMid, t),
      {
        [`\n        ${r}${n}-enter,\n        ${r}${n}-appear\n      `]: {
          opacity: 0,
          animationTimingFunction: 'linear',
        },
        [`${r}${n}-leave`]: { animationTimingFunction: 'linear' },
      },
    ];
  },
  Xn = new R('antMoveDownIn', {
    '0%': {
      transform: 'translate3d(0, 100%, 0)',
      transformOrigin: '0 0',
      opacity: 0,
    },
    '100%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1,
    },
  }),
  Vn = new R('antMoveDownOut', {
    '0%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1,
    },
    '100%': {
      transform: 'translate3d(0, 100%, 0)',
      transformOrigin: '0 0',
      opacity: 0,
    },
  }),
  Kn = new R('antMoveLeftIn', {
    '0%': {
      transform: 'translate3d(-100%, 0, 0)',
      transformOrigin: '0 0',
      opacity: 0,
    },
    '100%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1,
    },
  }),
  Un = new R('antMoveLeftOut', {
    '0%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1,
    },
    '100%': {
      transform: 'translate3d(-100%, 0, 0)',
      transformOrigin: '0 0',
      opacity: 0,
    },
  }),
  Yn = new R('antMoveRightIn', {
    '0%': {
      transform: 'translate3d(100%, 0, 0)',
      transformOrigin: '0 0',
      opacity: 0,
    },
    '100%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1,
    },
  }),
  Qn = new R('antMoveRightOut', {
    '0%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1,
    },
    '100%': {
      transform: 'translate3d(100%, 0, 0)',
      transformOrigin: '0 0',
      opacity: 0,
    },
  }),
  Zn = {
    'move-up': {
      inKeyframes: new R('antMoveUpIn', {
        '0%': {
          transform: 'translate3d(0, -100%, 0)',
          transformOrigin: '0 0',
          opacity: 0,
        },
        '100%': {
          transform: 'translate3d(0, 0, 0)',
          transformOrigin: '0 0',
          opacity: 1,
        },
      }),
      outKeyframes: new R('antMoveUpOut', {
        '0%': {
          transform: 'translate3d(0, 0, 0)',
          transformOrigin: '0 0',
          opacity: 1,
        },
        '100%': {
          transform: 'translate3d(0, -100%, 0)',
          transformOrigin: '0 0',
          opacity: 0,
        },
      }),
    },
    'move-down': { inKeyframes: Xn, outKeyframes: Vn },
    'move-left': { inKeyframes: Kn, outKeyframes: Un },
    'move-right': { inKeyframes: Yn, outKeyframes: Qn },
  },
  Jn = (e, t) => {
    const { antCls: o } = e,
      n = `${o}-${t}`,
      { inKeyframes: r, outKeyframes: i } = Zn[t];
    return [
      Wn(n, r, i, e.motionDurationMid),
      {
        [`\n        ${n}-enter,\n        ${n}-appear\n      `]: {
          opacity: 0,
          animationTimingFunction: e.motionEaseOutCirc,
        },
        [`${n}-leave`]: { animationTimingFunction: e.motionEaseInOutCirc },
      },
    ];
  },
  er = new R('antSlideUpIn', {
    '0%': { transform: 'scaleY(0.8)', transformOrigin: '0% 0%', opacity: 0 },
    '100%': { transform: 'scaleY(1)', transformOrigin: '0% 0%', opacity: 1 },
  }),
  tr = new R('antSlideUpOut', {
    '0%': { transform: 'scaleY(1)', transformOrigin: '0% 0%', opacity: 1 },
    '100%': { transform: 'scaleY(0.8)', transformOrigin: '0% 0%', opacity: 0 },
  }),
  or = new R('antSlideDownIn', {
    '0%': {
      transform: 'scaleY(0.8)',
      transformOrigin: '100% 100%',
      opacity: 0,
    },
    '100%': {
      transform: 'scaleY(1)',
      transformOrigin: '100% 100%',
      opacity: 1,
    },
  }),
  nr = new R('antSlideDownOut', {
    '0%': { transform: 'scaleY(1)', transformOrigin: '100% 100%', opacity: 1 },
    '100%': {
      transform: 'scaleY(0.8)',
      transformOrigin: '100% 100%',
      opacity: 0,
    },
  }),
  rr = new R('antSlideLeftIn', {
    '0%': { transform: 'scaleX(0.8)', transformOrigin: '0% 0%', opacity: 0 },
    '100%': { transform: 'scaleX(1)', transformOrigin: '0% 0%', opacity: 1 },
  }),
  ir = new R('antSlideLeftOut', {
    '0%': { transform: 'scaleX(1)', transformOrigin: '0% 0%', opacity: 1 },
    '100%': { transform: 'scaleX(0.8)', transformOrigin: '0% 0%', opacity: 0 },
  }),
  ar = new R('antSlideRightIn', {
    '0%': { transform: 'scaleX(0.8)', transformOrigin: '100% 0%', opacity: 0 },
    '100%': { transform: 'scaleX(1)', transformOrigin: '100% 0%', opacity: 1 },
  }),
  lr = new R('antSlideRightOut', {
    '0%': { transform: 'scaleX(1)', transformOrigin: '100% 0%', opacity: 1 },
    '100%': {
      transform: 'scaleX(0.8)',
      transformOrigin: '100% 0%',
      opacity: 0,
    },
  }),
  sr = {
    'slide-up': { inKeyframes: er, outKeyframes: tr },
    'slide-down': { inKeyframes: or, outKeyframes: nr },
    'slide-left': { inKeyframes: rr, outKeyframes: ir },
    'slide-right': { inKeyframes: ar, outKeyframes: lr },
  },
  cr = (e, t) => {
    const { antCls: o } = e,
      n = `${o}-${t}`,
      { inKeyframes: r, outKeyframes: i } = sr[t];
    return [
      Wn(n, r, i, e.motionDurationMid),
      {
        [`\n      ${n}-enter,\n      ${n}-appear\n    `]: {
          transform: 'scale(0)',
          transformOrigin: '0% 0%',
          opacity: 0,
          animationTimingFunction: e.motionEaseOutQuint,
          '&-prepare': { transform: 'scale(1)' },
        },
        [`${n}-leave`]: { animationTimingFunction: e.motionEaseInQuint },
      },
    ];
  },
  dr = new R('antZoomIn', {
    '0%': { transform: 'scale(0.2)', opacity: 0 },
    '100%': { transform: 'scale(1)', opacity: 1 },
  }),
  ur = new R('antZoomOut', {
    '0%': { transform: 'scale(1)' },
    '100%': { transform: 'scale(0.2)', opacity: 0 },
  }),
  pr = new R('antZoomBigIn', {
    '0%': { transform: 'scale(0.8)', opacity: 0 },
    '100%': { transform: 'scale(1)', opacity: 1 },
  }),
  mr = new R('antZoomBigOut', {
    '0%': { transform: 'scale(1)' },
    '100%': { transform: 'scale(0.8)', opacity: 0 },
  }),
  gr = new R('antZoomUpIn', {
    '0%': { transform: 'scale(0.8)', transformOrigin: '50% 0%', opacity: 0 },
    '100%': { transform: 'scale(1)', transformOrigin: '50% 0%' },
  }),
  br = new R('antZoomUpOut', {
    '0%': { transform: 'scale(1)', transformOrigin: '50% 0%' },
    '100%': { transform: 'scale(0.8)', transformOrigin: '50% 0%', opacity: 0 },
  }),
  fr = {
    zoom: { inKeyframes: dr, outKeyframes: ur },
    'zoom-big': { inKeyframes: pr, outKeyframes: mr },
    'zoom-big-fast': { inKeyframes: pr, outKeyframes: mr },
    'zoom-left': {
      inKeyframes: new R('antZoomLeftIn', {
        '0%': {
          transform: 'scale(0.8)',
          transformOrigin: '0% 50%',
          opacity: 0,
        },
        '100%': { transform: 'scale(1)', transformOrigin: '0% 50%' },
      }),
      outKeyframes: new R('antZoomLeftOut', {
        '0%': { transform: 'scale(1)', transformOrigin: '0% 50%' },
        '100%': {
          transform: 'scale(0.8)',
          transformOrigin: '0% 50%',
          opacity: 0,
        },
      }),
    },
    'zoom-right': {
      inKeyframes: new R('antZoomRightIn', {
        '0%': {
          transform: 'scale(0.8)',
          transformOrigin: '100% 50%',
          opacity: 0,
        },
        '100%': { transform: 'scale(1)', transformOrigin: '100% 50%' },
      }),
      outKeyframes: new R('antZoomRightOut', {
        '0%': { transform: 'scale(1)', transformOrigin: '100% 50%' },
        '100%': {
          transform: 'scale(0.8)',
          transformOrigin: '100% 50%',
          opacity: 0,
        },
      }),
    },
    'zoom-up': { inKeyframes: gr, outKeyframes: br },
    'zoom-down': {
      inKeyframes: new R('antZoomDownIn', {
        '0%': {
          transform: 'scale(0.8)',
          transformOrigin: '50% 100%',
          opacity: 0,
        },
        '100%': { transform: 'scale(1)', transformOrigin: '50% 100%' },
      }),
      outKeyframes: new R('antZoomDownOut', {
        '0%': { transform: 'scale(1)', transformOrigin: '50% 100%' },
        '100%': {
          transform: 'scale(0.8)',
          transformOrigin: '50% 100%',
          opacity: 0,
        },
      }),
    },
  },
  hr = (e, t) => {
    const { antCls: o } = e,
      n = `${o}-${t}`,
      { inKeyframes: r, outKeyframes: i } = fr[t];
    return [
      Wn(
        n,
        r,
        i,
        'zoom-big-fast' === t ? e.motionDurationFast : e.motionDurationMid,
      ),
      {
        [`\n        ${n}-enter,\n        ${n}-appear\n      `]: {
          transform: 'scale(0)',
          opacity: 0,
          animationTimingFunction: e.motionEaseOutCirc,
          '&-prepare': { transform: 'none' },
        },
        [`${n}-leave`]: { animationTimingFunction: e.motionEaseInOutCirc },
      },
    ];
  },
  $r = (e) => {
    const { paddingInline: t, onlyIconSize: o } = e;
    return T(e, {
      buttonPaddingHorizontal: t,
      buttonPaddingVertical: 0,
      buttonIconOnlyFontSize: o,
    });
  },
  vr = (e) => {
    var t, o, n, r, i, a;
    const l = null !== (t = e.contentFontSize) && void 0 !== t ? t : e.fontSize,
      s = null !== (o = e.contentFontSizeSM) && void 0 !== o ? o : e.fontSize,
      c = null !== (n = e.contentFontSizeLG) && void 0 !== n ? n : e.fontSizeLG,
      d = null !== (r = e.contentLineHeight) && void 0 !== r ? r : Ct(l),
      u = null !== (i = e.contentLineHeightSM) && void 0 !== i ? i : Ct(s),
      p = null !== (a = e.contentLineHeightLG) && void 0 !== a ? a : Ct(c),
      m = ((e, t) => {
        const { r: o, g: n, b: r, a: i } = e.toRgb(),
          a = new Be(e.toRgbString()).onBackground(t).toHsv();
        return i <= 0.5 ? a.v > 0.5 : 0.299 * o + 0.587 * n + 0.114 * r > 192;
      })(new Fn(e.colorBgSolid), '#fff')
        ? '#000'
        : '#fff',
      g = qt.reduce(
        (t, o) =>
          Object.assign(Object.assign({}, t), {
            [`${o}ShadowColor`]: `0 ${I(e.controlOutlineWidth)} 0 ${Vt(e[`${o}1`], e.colorBgContainer)}`,
          }),
        {},
      );
    return Object.assign(Object.assign({}, g), {
      fontWeight: 400,
      iconGap: e.marginXS,
      defaultShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,
      primaryShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,
      dangerShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,
      primaryColor: e.colorTextLightSolid,
      dangerColor: e.colorTextLightSolid,
      borderColorDisabled: e.colorBorder,
      defaultGhostColor: e.colorBgContainer,
      ghostBg: 'transparent',
      defaultGhostBorderColor: e.colorBgContainer,
      paddingInline: e.paddingContentHorizontal - e.lineWidth,
      paddingInlineLG: e.paddingContentHorizontal - e.lineWidth,
      paddingInlineSM: 8 - e.lineWidth,
      onlyIconSize: 'inherit',
      onlyIconSizeSM: 'inherit',
      onlyIconSizeLG: 'inherit',
      groupBorderColor: e.colorPrimaryHover,
      linkHoverBg: 'transparent',
      textTextColor: e.colorText,
      textTextHoverColor: e.colorText,
      textTextActiveColor: e.colorText,
      textHoverBg: e.colorFillTertiary,
      defaultColor: e.colorText,
      defaultBg: e.colorBgContainer,
      defaultBorderColor: e.colorBorder,
      defaultBorderColorDisabled: e.colorBorder,
      defaultHoverBg: e.colorBgContainer,
      defaultHoverColor: e.colorPrimaryHover,
      defaultHoverBorderColor: e.colorPrimaryHover,
      defaultActiveBg: e.colorBgContainer,
      defaultActiveColor: e.colorPrimaryActive,
      defaultActiveBorderColor: e.colorPrimaryActive,
      solidTextColor: m,
      contentFontSize: l,
      contentFontSizeSM: s,
      contentFontSizeLG: c,
      contentLineHeight: d,
      contentLineHeightSM: u,
      contentLineHeightLG: p,
      paddingBlock: Math.max((e.controlHeight - l * d) / 2 - e.lineWidth, 0),
      paddingBlockSM: Math.max(
        (e.controlHeightSM - s * u) / 2 - e.lineWidth,
        0,
      ),
      paddingBlockLG: Math.max(
        (e.controlHeightLG - c * p) / 2 - e.lineWidth,
        0,
      ),
    });
  },
  yr = (e) => {
    const {
      componentCls: t,
      iconCls: o,
      fontWeight: n,
      opacityLoading: r,
      motionDurationSlow: i,
      motionEaseInOut: a,
      iconGap: l,
      calc: s,
    } = e;
    return {
      [t]: {
        outline: 'none',
        position: 'relative',
        display: 'inline-flex',
        gap: l,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: n,
        whiteSpace: 'nowrap',
        textAlign: 'center',
        backgroundImage: 'none',
        background: 'transparent',
        border: `${I(e.lineWidth)} ${e.lineType} transparent`,
        cursor: 'pointer',
        transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
        userSelect: 'none',
        touchAction: 'manipulation',
        color: e.colorText,
        '&:disabled > *': { pointerEvents: 'none' },
        [`${t}-icon > svg`]: {
          display: 'inline-flex',
          alignItems: 'center',
          color: 'inherit',
          fontStyle: 'normal',
          lineHeight: 0,
          textAlign: 'center',
          textTransform: 'none',
          verticalAlign: '-0.125em',
          textRendering: 'optimizeLegibility',
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
          '> *': { lineHeight: 1 },
          svg: { display: 'inline-block' },
        },
        '> a': { color: 'currentColor' },
        '&:not(:disabled)': ro(e),
        [`&${t}-two-chinese-chars::first-letter`]: { letterSpacing: '0.34em' },
        [`&${t}-two-chinese-chars > *:not(${o})`]: {
          marginInlineEnd: '-0.34em',
          letterSpacing: '0.34em',
        },
        [`&${t}-icon-only`]: {
          paddingInline: 0,
          [`&${t}-compact-item`]: { flex: 'none' },
        },
        [`&${t}-loading`]: { opacity: r, cursor: 'default' },
        [`${t}-loading-icon`]: {
          transition: ['width', 'opacity', 'margin']
            .map((e) => `${e} ${i} ${a}`)
            .join(','),
        },
        [`&:not(${t}-icon-end)`]: {
          [`${t}-loading-icon-motion`]: {
            '&-appear-start, &-enter-start': {
              marginInlineEnd: s(l).mul(-1).equal(),
            },
            '&-appear-active, &-enter-active': { marginInlineEnd: 0 },
            '&-leave-start': { marginInlineEnd: 0 },
            '&-leave-active': { marginInlineEnd: s(l).mul(-1).equal() },
          },
        },
        '&-icon-end': {
          flexDirection: 'row-reverse',
          [`${t}-loading-icon-motion`]: {
            '&-appear-start, &-enter-start': {
              marginInlineStart: s(l).mul(-1).equal(),
            },
            '&-appear-active, &-enter-active': { marginInlineStart: 0 },
            '&-leave-start': { marginInlineStart: 0 },
            '&-leave-active': { marginInlineStart: s(l).mul(-1).equal() },
          },
        },
      },
    };
  },
  xr = (e, t, o) => ({
    [`&:not(:disabled):not(${e}-disabled)`]: { '&:hover': t, '&:active': o },
  }),
  Cr = (e) => ({
    minWidth: e.controlHeight,
    paddingInline: 0,
    borderRadius: '50%',
  }),
  Sr = (e) => ({
    cursor: 'not-allowed',
    borderColor: e.borderColorDisabled,
    color: e.colorTextDisabled,
    background: e.colorBgContainerDisabled,
    boxShadow: 'none',
  }),
  Or = (e, t, o, n, r, i, a, l) => ({
    [`&${e}-background-ghost`]: Object.assign(
      Object.assign(
        {
          color: o || void 0,
          background: t,
          borderColor: n || void 0,
          boxShadow: 'none',
        },
        xr(
          e,
          Object.assign({ background: t }, a),
          Object.assign({ background: t }, l),
        ),
      ),
      {
        '&:disabled': {
          cursor: 'not-allowed',
          color: r || void 0,
          borderColor: i || void 0,
        },
      },
    ),
  }),
  kr = (e) => ({
    [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, Sr(e)),
  }),
  wr = (e) => ({
    [`&:disabled, &${e.componentCls}-disabled`]: {
      cursor: 'not-allowed',
      color: e.colorTextDisabled,
    },
  }),
  Er = (e, t, o, n) => {
    const r = n && ['link', 'text'].includes(n) ? wr : kr;
    return Object.assign(Object.assign({}, r(e)), xr(e.componentCls, t, o));
  },
  jr = (e, t, o, n, r) => ({
    [`&${e.componentCls}-variant-solid`]: Object.assign(
      { color: t, background: o },
      Er(e, n, r),
    ),
  }),
  Ir = (e, t, o, n, r) => ({
    [`&${e.componentCls}-variant-outlined, &${e.componentCls}-variant-dashed`]:
      Object.assign({ borderColor: t, background: o }, Er(e, n, r)),
  }),
  Pr = (e) => ({
    [`&${e.componentCls}-variant-dashed`]: { borderStyle: 'dashed' },
  }),
  Br = (e, t, o, n) => ({
    [`&${e.componentCls}-variant-filled`]: Object.assign(
      { boxShadow: 'none', background: t },
      Er(e, o, n),
    ),
  }),
  zr = (e, t, o, n, r) => ({
    [`&${e.componentCls}-variant-${o}`]: Object.assign(
      { color: t, boxShadow: 'none' },
      Er(e, n, r, o),
    ),
  }),
  Mr = (e) =>
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              { color: e.defaultColor, boxShadow: e.defaultShadow },
              jr(
                e,
                e.solidTextColor,
                e.colorBgSolid,
                { color: e.solidTextColor, background: e.colorBgSolidHover },
                { color: e.solidTextColor, background: e.colorBgSolidActive },
              ),
            ),
            Pr(e),
          ),
          Br(
            e,
            e.colorFillTertiary,
            { color: e.defaultColor, background: e.colorFillSecondary },
            { color: e.defaultColor, background: e.colorFill },
          ),
        ),
        Or(
          e.componentCls,
          e.ghostBg,
          e.defaultGhostColor,
          e.defaultGhostBorderColor,
          e.colorTextDisabled,
          e.colorBorder,
        ),
      ),
      zr(
        e,
        e.textTextColor,
        'link',
        { color: e.colorLinkHover, background: e.linkHoverBg },
        { color: e.colorLinkActive },
      ),
    ),
  Hr = (e) =>
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                { color: e.colorPrimary, boxShadow: e.primaryShadow },
                Ir(
                  e,
                  e.colorPrimary,
                  e.colorBgContainer,
                  {
                    color: e.colorPrimaryTextHover,
                    borderColor: e.colorPrimaryHover,
                    background: e.colorBgContainer,
                  },
                  {
                    color: e.colorPrimaryTextActive,
                    borderColor: e.colorPrimaryActive,
                    background: e.colorBgContainer,
                  },
                ),
              ),
              Pr(e),
            ),
            Br(
              e,
              e.colorPrimaryBg,
              { color: e.colorPrimary, background: e.colorPrimaryBgHover },
              { color: e.colorPrimary, background: e.colorPrimaryBorder },
            ),
          ),
          zr(
            e,
            e.colorPrimaryText,
            'text',
            { color: e.colorPrimaryTextHover, background: e.colorPrimaryBg },
            {
              color: e.colorPrimaryTextActive,
              background: e.colorPrimaryBorder,
            },
          ),
        ),
        zr(
          e,
          e.colorPrimaryText,
          'link',
          { color: e.colorPrimaryTextHover, background: e.linkHoverBg },
          { color: e.colorPrimaryTextActive },
        ),
      ),
      Or(
        e.componentCls,
        e.ghostBg,
        e.colorPrimary,
        e.colorPrimary,
        e.colorTextDisabled,
        e.colorBorder,
        { color: e.colorPrimaryHover, borderColor: e.colorPrimaryHover },
        { color: e.colorPrimaryActive, borderColor: e.colorPrimaryActive },
      ),
    ),
  Tr = (e) =>
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  { color: e.colorError, boxShadow: e.dangerShadow },
                  jr(
                    e,
                    e.dangerColor,
                    e.colorError,
                    { background: e.colorErrorHover },
                    { background: e.colorErrorActive },
                  ),
                ),
                Ir(
                  e,
                  e.colorError,
                  e.colorBgContainer,
                  {
                    color: e.colorErrorHover,
                    borderColor: e.colorErrorBorderHover,
                  },
                  {
                    color: e.colorErrorActive,
                    borderColor: e.colorErrorActive,
                  },
                ),
              ),
              Pr(e),
            ),
            Br(
              e,
              e.colorErrorBg,
              { color: e.colorError, background: e.colorErrorBgFilledHover },
              { color: e.colorError, background: e.colorErrorBgActive },
            ),
          ),
          zr(
            e,
            e.colorError,
            'text',
            { color: e.colorErrorHover, background: e.colorErrorBg },
            { color: e.colorErrorHover, background: e.colorErrorBgActive },
          ),
        ),
        zr(
          e,
          e.colorError,
          'link',
          { color: e.colorErrorHover },
          { color: e.colorErrorActive },
        ),
      ),
      Or(
        e.componentCls,
        e.ghostBg,
        e.colorError,
        e.colorError,
        e.colorTextDisabled,
        e.colorBorder,
        { color: e.colorErrorHover, borderColor: e.colorErrorHover },
        { color: e.colorErrorActive, borderColor: e.colorErrorActive },
      ),
    ),
  Rr = (e) =>
    Object.assign(
      Object.assign(
        {},
        zr(
          e,
          e.colorLink,
          'link',
          { color: e.colorLinkHover },
          { color: e.colorLinkActive },
        ),
      ),
      Or(
        e.componentCls,
        e.ghostBg,
        e.colorInfo,
        e.colorInfo,
        e.colorTextDisabled,
        e.colorBorder,
        { color: e.colorInfoHover, borderColor: e.colorInfoHover },
        { color: e.colorInfoActive, borderColor: e.colorInfoActive },
      ),
    ),
  Nr = (e) => {
    const { componentCls: t } = e;
    return Object.assign(
      {
        [`${t}-color-default`]: Mr(e),
        [`${t}-color-primary`]: Hr(e),
        [`${t}-color-dangerous`]: Tr(e),
        [`${t}-color-link`]: Rr(e),
      },
      ((e) => {
        const { componentCls: t } = e;
        return qt.reduce((o, n) => {
          const r = e[`${n}6`],
            i = e[`${n}1`],
            a = e[`${n}5`],
            l = e[`${n}2`],
            s = e[`${n}3`],
            c = e[`${n}7`];
          return Object.assign(Object.assign({}, o), {
            [`&${t}-color-${n}`]: Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        { color: r, boxShadow: e[`${n}ShadowColor`] },
                        jr(
                          e,
                          e.colorTextLightSolid,
                          r,
                          { background: a },
                          { background: c },
                        ),
                      ),
                      Ir(
                        e,
                        r,
                        e.colorBgContainer,
                        {
                          color: a,
                          borderColor: a,
                          background: e.colorBgContainer,
                        },
                        {
                          color: c,
                          borderColor: c,
                          background: e.colorBgContainer,
                        },
                      ),
                    ),
                    Pr(e),
                  ),
                  Br(
                    e,
                    i,
                    { color: r, background: l },
                    { color: r, background: s },
                  ),
                ),
                zr(e, r, 'link', { color: a }, { color: c }),
              ),
              zr(
                e,
                r,
                'text',
                { color: a, background: i },
                { color: c, background: s },
              ),
            ),
          });
        }, {});
      })(e),
    );
  },
  Lr = (e) =>
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            {},
            Ir(
              e,
              e.defaultBorderColor,
              e.defaultBg,
              {
                color: e.defaultHoverColor,
                borderColor: e.defaultHoverBorderColor,
                background: e.defaultHoverBg,
              },
              {
                color: e.defaultActiveColor,
                borderColor: e.defaultActiveBorderColor,
                background: e.defaultActiveBg,
              },
            ),
          ),
          zr(
            e,
            e.textTextColor,
            'text',
            { color: e.textTextHoverColor, background: e.textHoverBg },
            { color: e.textTextActiveColor, background: e.colorBgTextActive },
          ),
        ),
        jr(
          e,
          e.primaryColor,
          e.colorPrimary,
          { background: e.colorPrimaryHover, color: e.primaryColor },
          { background: e.colorPrimaryActive, color: e.primaryColor },
        ),
      ),
      zr(
        e,
        e.colorLink,
        'link',
        { color: e.colorLinkHover, background: e.linkHoverBg },
        { color: e.colorLinkActive },
      ),
    ),
  Fr = (e, t = '') => {
    const {
      componentCls: o,
      controlHeight: n,
      fontSize: r,
      borderRadius: i,
      buttonPaddingHorizontal: a,
      iconCls: l,
      buttonPaddingVertical: s,
      buttonIconOnlyFontSize: c,
    } = e;
    return [
      {
        [t]: {
          fontSize: r,
          height: n,
          padding: `${I(s)} ${I(a)}`,
          borderRadius: i,
          [`&${o}-icon-only`]: { width: n, [l]: { fontSize: c } },
        },
      },
      { [`${o}${o}-circle${t}`]: Cr(e) },
      {
        [`${o}${o}-round${t}`]: {
          borderRadius: e.controlHeight,
          [`&:not(${o}-icon-only)`]: {
            paddingInline: e.buttonPaddingHorizontal,
          },
        },
      },
    ];
  },
  Ar = (e) => {
    const t = T(e, { fontSize: e.contentFontSize });
    return Fr(t, e.componentCls);
  },
  Dr = (e) => {
    const t = T(e, {
      controlHeight: e.controlHeightSM,
      fontSize: e.contentFontSizeSM,
      padding: e.paddingXS,
      buttonPaddingHorizontal: e.paddingInlineSM,
      buttonPaddingVertical: 0,
      borderRadius: e.borderRadiusSM,
      buttonIconOnlyFontSize: e.onlyIconSizeSM,
    });
    return Fr(t, `${e.componentCls}-sm`);
  },
  Wr = (e) => {
    const t = T(e, {
      controlHeight: e.controlHeightLG,
      fontSize: e.contentFontSizeLG,
      buttonPaddingHorizontal: e.paddingInlineLG,
      buttonPaddingVertical: 0,
      borderRadius: e.borderRadiusLG,
      buttonIconOnlyFontSize: e.onlyIconSizeLG,
    });
    return Fr(t, `${e.componentCls}-lg`);
  },
  _r = (e) => {
    const { componentCls: t } = e;
    return { [t]: { [`&${t}-block`]: { width: '100%' } } };
  },
  Gr = lo(
    'Button',
    (e) => {
      const t = $r(e);
      return [yr(t), Ar(t), Dr(t), Wr(t), _r(t), Nr(t), Lr(t), Ln(t)];
    },
    vr,
    {
      unitless: {
        fontWeight: !0,
        contentLineHeight: !0,
        contentLineHeightSM: !0,
        contentLineHeightLG: !0,
      },
    },
  );
function qr(e, t, o, n) {
  const { focusElCls: r, focus: i, borderElCls: a } = o,
    l = a ? '> *' : '',
    s = ['hover', i ? 'focus' : null, 'active']
      .filter(Boolean)
      .map((e) => `&:${e} ${l}`)
      .join(',');
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
    },
    [`&-item:not(${n}-status-success)`]: { zIndex: 2 },
    '&-item': Object.assign(
      Object.assign(
        { [s]: { zIndex: 3 } },
        r ? { [`&${r}`]: { zIndex: 3 } } : {},
      ),
      { [`&[disabled] ${l}`]: { zIndex: 0 } },
    ),
  };
}
function Xr(e, t, o) {
  const { borderElCls: n } = o,
    r = n ? `> ${n}` : '';
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${r}`]: {
      borderRadius: 0,
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${r}, &${e}-sm ${r}, &${e}-lg ${r}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
      },
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${r}, &${e}-sm ${r}, &${e}-lg ${r}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0,
      },
    },
  };
}
function Vr(e, t = { focus: !0 }) {
  const { componentCls: o } = e,
    { componentCls: n } = t,
    r = n || o,
    i = `${r}-compact`;
  return { [i]: Object.assign(Object.assign({}, qr(e, i, t, r)), Xr(r, i, t)) };
}
function Kr(e, t, o) {
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginBottom: e.calc(e.lineWidth).mul(-1).equal(),
    },
    [`&-item:not(${o}-status-success)`]: { zIndex: 2 },
    '&-item': {
      '&:hover,&:focus,&:active': { zIndex: 3 },
      '&[disabled]': { zIndex: 0 },
    },
  };
}
function Ur(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(
      Object.assign({}, Kr(e, t, e.componentCls)),
      ((o = e.componentCls),
      (n = t),
      {
        [`&-item:not(${n}-first-item):not(${n}-last-item)`]: {
          borderRadius: 0,
        },
        [`&-item${n}-first-item:not(${n}-last-item)`]: {
          [`&, &${o}-sm, &${o}-lg`]: {
            borderEndEndRadius: 0,
            borderEndStartRadius: 0,
          },
        },
        [`&-item${n}-last-item:not(${n}-first-item)`]: {
          [`&, &${o}-sm, &${o}-lg`]: {
            borderStartStartRadius: 0,
            borderStartEndRadius: 0,
          },
        },
      }),
    ),
  };
  var o, n;
}
const Yr = (e) => {
    const { componentCls: t, colorPrimaryHover: o, lineWidth: n, calc: r } = e,
      i = r(n).mul(-1).equal(),
      a = (e) => {
        const r = `${t}-compact${e ? '-vertical' : ''}-item${t}-primary:not([disabled])`;
        return {
          [`${r} + ${r}::before`]: {
            position: 'absolute',
            top: e ? i : 0,
            insetInlineStart: e ? 0 : i,
            backgroundColor: o,
            content: '""',
            width: e ? '100%' : n,
            height: e ? n : '100%',
          },
        };
      };
    return Object.assign(Object.assign({}, a()), a(!0));
  },
  Qr = co(
    ['Button', 'compact'],
    (e) => {
      const t = $r(e);
      return [Vr(t), Ur(t), Yr(t)];
    },
    vr,
  );
const Zr = {
    default: ['default', 'outlined'],
    primary: ['primary', 'solid'],
    dashed: ['default', 'dashed'],
    link: ['link', 'link'],
    text: ['default', 'text'],
  },
  Jr = se.forwardRef((e, t) => {
    var o, n;
    const {
        loading: r = !1,
        prefixCls: i,
        color: a,
        variant: l,
        type: s,
        danger: c = !1,
        shape: d,
        size: u,
        styles: p,
        disabled: m,
        className: g,
        rootClassName: $,
        children: v,
        icon: y,
        iconPosition: x = 'start',
        ghost: C = !1,
        block: S = !1,
        htmlType: O = 'button',
        classNames: k,
        style: w = {},
        autoInsertSpace: E,
        autoFocus: j,
      } = e,
      I = (function (e, t) {
        var o = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (o[n] = e[n]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            t.indexOf(n[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
              (o[n[r]] = e[n[r]]);
        }
        return o;
      })(e, [
        'loading',
        'prefixCls',
        'color',
        'variant',
        'type',
        'danger',
        'shape',
        'size',
        'styles',
        'disabled',
        'className',
        'rootClassName',
        'children',
        'icon',
        'iconPosition',
        'ghost',
        'block',
        'htmlType',
        'classNames',
        'style',
        'autoInsertSpace',
        'autoFocus',
      ]),
      P = s || 'default',
      { button: B } = se.useContext(Tt),
      z = d || (null == B ? void 0 : B.shape) || 'default',
      [M, H] = le.useMemo(() => {
        if (a && l) return [a, l];
        if (s || c) {
          const e = Zr[P] || [];
          return c ? ['danger', e[1]] : e;
        }
        return (null == B ? void 0 : B.color) &&
          (null == B ? void 0 : B.variant)
          ? [B.color, B.variant]
          : ['default', 'outlined'];
      }, [
        a,
        l,
        s,
        c,
        null == B ? void 0 : B.color,
        null == B ? void 0 : B.variant,
        P,
      ]),
      T = 'danger' === M ? 'dangerous' : M,
      {
        getPrefixCls: R,
        direction: N,
        autoInsertSpace: L,
        className: F,
        style: A,
        classNames: D,
        styles: W,
      } = Lt('button'),
      _ = null === (o = null != E ? E : L) || void 0 === o || o,
      G = R('btn', i),
      [q, X, V] = Gr(G),
      K = le.useContext(Dt),
      U = null != m ? m : K,
      Y = le.useContext(kn),
      Q = le.useMemo(
        () =>
          (function (e) {
            if ('object' == typeof e && e) {
              let t = null == e ? void 0 : e.delay;
              return (
                (t = Number.isNaN(t) || 'number' != typeof t ? 0 : t),
                { loading: t <= 0, delay: t }
              );
            }
            return { loading: !!e, delay: 0 };
          })(r),
        [r],
      ),
      [Z, J] = le.useState(Q.loading),
      [ee, te] = le.useState(!1),
      oe = le.useRef(null),
      ne = b(t, oe),
      re = 1 === le.Children.count(v) && !y && !Pn(H),
      ie = le.useRef(!0);
    (se.useEffect(
      () => (
        (ie.current = !1),
        () => {
          ie.current = !0;
        }
      ),
      [],
    ),
      f(() => {
        let e = null;
        return (
          Q.delay > 0
            ? (e = setTimeout(() => {
                ((e = null), J(!0));
              }, Q.delay))
            : J(Q.loading),
          function () {
            e && (clearTimeout(e), (e = null));
          }
        );
      }, [Q.delay, Q.loading]),
      le.useEffect(() => {
        if (!oe.current || !_) return;
        const e = oe.current.textContent || '';
        re && En(e) ? ee || te(!0) : ee && te(!1);
      }),
      le.useEffect(() => {
        j && oe.current && oe.current.focus();
      }, []));
    const ae = se.useCallback(
        (t) => {
          var o;
          Z || U
            ? t.preventDefault()
            : null === (o = e.onClick) || void 0 === o || o.call(e, t);
        },
        [e.onClick, Z, U],
      ),
      { compactSize: ce, compactItemClassnames: ue } = Cn(G, N),
      pe = hn((e) => {
        var t, o;
        return null !==
          (o = null !== (t = null != u ? u : ce) && void 0 !== t ? t : Y) &&
          void 0 !== o
          ? o
          : e;
      }),
      me =
        pe &&
        null !== (n = { large: 'lg', small: 'sm', middle: void 0 }[pe]) &&
        void 0 !== n
          ? n
          : '',
      ge = Z ? 'loading' : y,
      be = h(I, ['navigate']),
      fe = de(
        G,
        X,
        V,
        {
          [`${G}-${z}`]: 'default' !== z && z,
          [`${G}-${P}`]: P,
          [`${G}-dangerous`]: c,
          [`${G}-color-${T}`]: T,
          [`${G}-variant-${H}`]: H,
          [`${G}-${me}`]: me,
          [`${G}-icon-only`]: !v && 0 !== v && !!ge,
          [`${G}-background-ghost`]: C && !Pn(H),
          [`${G}-loading`]: Z,
          [`${G}-two-chinese-chars`]: ee && _ && !Z,
          [`${G}-block`]: S,
          [`${G}-rtl`]: 'rtl' === N,
          [`${G}-icon-end`]: 'end' === x,
        },
        ue,
        g,
        $,
        F,
      ),
      he = Object.assign(Object.assign({}, A), w),
      $e = de(null == k ? void 0 : k.icon, D.icon),
      ve = Object.assign(
        Object.assign({}, (null == p ? void 0 : p.icon) || {}),
        W.icon || {},
      ),
      ye = (e) =>
        se.createElement(zn, { prefixCls: G, className: $e, style: ve }, e);
    let xe;
    xe =
      y && !Z
        ? ye(y)
        : r && 'object' == typeof r && r.icon
          ? ye(r.icon)
          : se.createElement(Rn, {
              existIcon: !!y,
              prefixCls: G,
              loading: Z,
              mount: ie.current,
            });
    const Ce = v || 0 === v ? Bn(v, re && _) : null;
    if (void 0 !== be.href)
      return q(
        se.createElement(
          'a',
          Object.assign({}, be, {
            className: de(fe, { [`${G}-disabled`]: U }),
            href: U ? void 0 : be.href,
            style: he,
            onClick: ae,
            ref: ne,
            tabIndex: U ? -1 : 0,
            'aria-disabled': U,
          }),
          xe,
          Ce,
        ),
      );
    let Se = se.createElement(
      'button',
      Object.assign({}, I, {
        type: O,
        className: fe,
        style: he,
        onClick: ae,
        disabled: U,
        ref: ne,
      }),
      xe,
      Ce,
      ue && se.createElement(Qr, { prefixCls: G }),
    );
    return (
      Pn(H) ||
        (Se = se.createElement(fn, { component: 'Button', disabled: Z }, Se)),
      q(Se)
    );
  });
((Jr.Group = (e) => {
  const { getPrefixCls: t, direction: o } = le.useContext(Tt),
    { prefixCls: n, size: r, className: i } = e,
    a = (function (e, t) {
      var o = {};
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) &&
          t.indexOf(n) < 0 &&
          (o[n] = e[n]);
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var r = 0;
        for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
          t.indexOf(n[r]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
            (o[n[r]] = e[n[r]]);
      }
      return o;
    })(e, ['prefixCls', 'size', 'className']),
    l = t('btn-group', n),
    [, , s] = eo(),
    c = le.useMemo(() => {
      switch (r) {
        case 'large':
          return 'lg';
        case 'small':
          return 'sm';
        default:
          return '';
      }
    }, [r]),
    d = de(l, { [`${l}-${c}`]: c, [`${l}-rtl`]: 'rtl' === o }, i, s);
  return le.createElement(
    kn.Provider,
    { value: r },
    le.createElement('div', Object.assign({}, a, { className: d })),
  );
}),
  (Jr.__ANT_BUTTON = !0));
const ei = (e) => 'function' == typeof (null == e ? void 0 : e.then),
  ti = (e) => {
    const {
        type: t,
        children: o,
        prefixCls: n,
        buttonProps: r,
        close: i,
        autoFocus: a,
        emitEvent: l,
        isSilent: s,
        quitOnNullishReturnValue: c,
        actionFn: d,
      } = e,
      u = le.useRef(!1),
      p = le.useRef(null),
      [m, g] = $(!1),
      b = (...e) => {
        null == i || i.apply(void 0, e);
      };
    le.useEffect(() => {
      let e = null;
      return (
        a &&
          (e = setTimeout(() => {
            var e;
            null === (e = p.current) ||
              void 0 === e ||
              e.focus({ preventScroll: !0 });
          })),
        () => {
          e && clearTimeout(e);
        }
      );
    }, [a]);
    return le.createElement(
      Jr,
      Object.assign(
        {},
        jn(t),
        {
          onClick: (e) => {
            if (u.current) return;
            if (((u.current = !0), !d)) return void b();
            let t;
            if (l) {
              if (((t = d(e)), c && !ei(t)))
                return ((u.current = !1), void b(e));
            } else if (d.length) ((t = d(i)), (u.current = !1));
            else if (((t = d()), !ei(t))) return void b();
            ((e) => {
              ei(e) &&
                (g(!0),
                e.then(
                  (...e) => {
                    (g(!1, !0), b.apply(void 0, e), (u.current = !1));
                  },
                  (e) => {
                    if (
                      (g(!1, !0), (u.current = !1), !(null == s ? void 0 : s()))
                    )
                      return Promise.reject(e);
                  },
                ));
            })(t);
          },
          loading: m,
          prefixCls: n,
        },
        r,
        { ref: p },
      ),
      o,
    );
  },
  oi = se.createContext({}),
  { Provider: ni } = oi,
  ri = () => {
    const {
      autoFocusButton: e,
      cancelButtonProps: t,
      cancelTextLocale: o,
      isSilent: n,
      mergedOkCancel: r,
      rootPrefixCls: i,
      close: a,
      onCancel: l,
      onConfirm: s,
    } = le.useContext(oi);
    return r
      ? se.createElement(
          ti,
          {
            isSilent: n,
            actionFn: l,
            close: (...e) => {
              (null == a || a.apply(void 0, e), null == s || s(!1));
            },
            autoFocus: 'cancel' === e,
            buttonProps: t,
            prefixCls: `${i}-btn`,
          },
          o,
        )
      : null;
  },
  ii = () => {
    const {
      autoFocusButton: e,
      close: t,
      isSilent: o,
      okButtonProps: n,
      rootPrefixCls: r,
      okTextLocale: i,
      okType: a,
      onConfirm: l,
      onOk: s,
    } = le.useContext(oi);
    return se.createElement(
      ti,
      {
        isSilent: o,
        type: a || 'primary',
        actionFn: s,
        close: (...e) => {
          (null == t || t.apply(void 0, e), null == l || l(!0));
        },
        autoFocus: 'ok' === e,
        buttonProps: n,
        prefixCls: `${r}-btn`,
      },
      i,
    );
  },
  ai = le.createContext({}),
  li = ({ children: e, status: t, override: o }) => {
    const n = le.useContext(ai),
      r = le.useMemo(() => {
        const e = Object.assign({}, n);
        return (
          o && delete e.isFormItemInput,
          t && (delete e.status, delete e.hasFeedback, delete e.feedbackIcon),
          e
        );
      }, [t, o, n]);
    return le.createElement(ai.Provider, { value: r }, e);
  },
  si = le.createContext(void 0),
  ci = (e) => {
    const { space: t, form: o, children: n } = e;
    if (null == n) return null;
    let r = n;
    return (
      o && (r = se.createElement(li, { override: !0, status: !0 }, r)),
      t && (r = se.createElement(Sn, null, r)),
      r
    );
  },
  di = (e) => {
    const { prefixCls: t, className: o, style: n, size: r, shape: i } = e,
      a = de({ [`${t}-lg`]: 'large' === r, [`${t}-sm`]: 'small' === r }),
      l = de({
        [`${t}-circle`]: 'circle' === i,
        [`${t}-square`]: 'square' === i,
        [`${t}-round`]: 'round' === i,
      }),
      s = le.useMemo(
        () =>
          'number' == typeof r
            ? { width: r, height: r, lineHeight: `${r}px` }
            : {},
        [r],
      );
    return le.createElement('span', {
      className: de(t, a, l, o),
      style: Object.assign(Object.assign({}, s), n),
    });
  },
  ui = new R('ant-skeleton-loading', {
    '0%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0 50%' },
  }),
  pi = (e) => ({ height: e, lineHeight: I(e) }),
  mi = (e) => Object.assign({ width: e }, pi(e)),
  gi = (e) => ({
    background: e.skeletonLoadingBackground,
    backgroundSize: '400% 100%',
    animationName: ui,
    animationDuration: e.skeletonLoadingMotionDuration,
    animationTimingFunction: 'ease',
    animationIterationCount: 'infinite',
  }),
  bi = (e, t) =>
    Object.assign(
      { width: t(e).mul(5).equal(), minWidth: t(e).mul(5).equal() },
      pi(e),
    ),
  fi = (e) => {
    const {
      skeletonAvatarCls: t,
      gradientFromColor: o,
      controlHeight: n,
      controlHeightLG: r,
      controlHeightSM: i,
    } = e;
    return {
      [t]: Object.assign(
        { display: 'inline-block', verticalAlign: 'top', background: o },
        mi(n),
      ),
      [`${t}${t}-circle`]: { borderRadius: '50%' },
      [`${t}${t}-lg`]: Object.assign({}, mi(r)),
      [`${t}${t}-sm`]: Object.assign({}, mi(i)),
    };
  },
  hi = (e) => {
    const {
      controlHeight: t,
      borderRadiusSM: o,
      skeletonInputCls: n,
      controlHeightLG: r,
      controlHeightSM: i,
      gradientFromColor: a,
      calc: l,
    } = e;
    return {
      [n]: Object.assign(
        {
          display: 'inline-block',
          verticalAlign: 'top',
          background: a,
          borderRadius: o,
        },
        bi(t, l),
      ),
      [`${n}-lg`]: Object.assign({}, bi(r, l)),
      [`${n}-sm`]: Object.assign({}, bi(i, l)),
    };
  },
  $i = (e) => Object.assign({ width: e }, pi(e)),
  vi = (e) => {
    const {
      skeletonImageCls: t,
      imageSizeBase: o,
      gradientFromColor: n,
      borderRadiusSM: r,
      calc: i,
    } = e;
    return {
      [t]: Object.assign(
        Object.assign(
          {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            verticalAlign: 'middle',
            background: n,
            borderRadius: r,
          },
          $i(i(o).mul(2).equal()),
        ),
        {
          [`${t}-path`]: { fill: '#bfbfbf' },
          [`${t}-svg`]: Object.assign(Object.assign({}, $i(o)), {
            maxWidth: i(o).mul(4).equal(),
            maxHeight: i(o).mul(4).equal(),
          }),
          [`${t}-svg${t}-svg-circle`]: { borderRadius: '50%' },
        },
      ),
      [`${t}${t}-circle`]: { borderRadius: '50%' },
    };
  },
  yi = (e, t, o) => {
    const { skeletonButtonCls: n } = e;
    return {
      [`${o}${n}-circle`]: { width: t, minWidth: t, borderRadius: '50%' },
      [`${o}${n}-round`]: { borderRadius: t },
    };
  },
  xi = (e, t) =>
    Object.assign(
      { width: t(e).mul(2).equal(), minWidth: t(e).mul(2).equal() },
      pi(e),
    ),
  Ci = (e) => {
    const {
      borderRadiusSM: t,
      skeletonButtonCls: o,
      controlHeight: n,
      controlHeightLG: r,
      controlHeightSM: i,
      gradientFromColor: a,
      calc: l,
    } = e;
    return Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              {
                [o]: Object.assign(
                  {
                    display: 'inline-block',
                    verticalAlign: 'top',
                    background: a,
                    borderRadius: t,
                    width: l(n).mul(2).equal(),
                    minWidth: l(n).mul(2).equal(),
                  },
                  xi(n, l),
                ),
              },
              yi(e, n, o),
            ),
            { [`${o}-lg`]: Object.assign({}, xi(r, l)) },
          ),
          yi(e, r, `${o}-lg`),
        ),
        { [`${o}-sm`]: Object.assign({}, xi(i, l)) },
      ),
      yi(e, i, `${o}-sm`),
    );
  },
  Si = lo(
    'Skeleton',
    (e) => {
      const { componentCls: t, calc: o } = e;
      return ((e) => {
        const {
          componentCls: t,
          skeletonAvatarCls: o,
          skeletonTitleCls: n,
          skeletonParagraphCls: r,
          skeletonButtonCls: i,
          skeletonInputCls: a,
          skeletonImageCls: l,
          controlHeight: s,
          controlHeightLG: c,
          controlHeightSM: d,
          gradientFromColor: u,
          padding: p,
          marginSM: m,
          borderRadius: g,
          titleHeight: b,
          blockRadius: f,
          paragraphLiHeight: h,
          controlHeightXS: $,
          paragraphMarginTop: v,
        } = e;
        return {
          [t]: {
            display: 'table',
            width: '100%',
            [`${t}-header`]: {
              display: 'table-cell',
              paddingInlineEnd: p,
              verticalAlign: 'top',
              [o]: Object.assign(
                {
                  display: 'inline-block',
                  verticalAlign: 'top',
                  background: u,
                },
                mi(s),
              ),
              [`${o}-circle`]: { borderRadius: '50%' },
              [`${o}-lg`]: Object.assign({}, mi(c)),
              [`${o}-sm`]: Object.assign({}, mi(d)),
            },
            [`${t}-content`]: {
              display: 'table-cell',
              width: '100%',
              verticalAlign: 'top',
              [n]: {
                width: '100%',
                height: b,
                background: u,
                borderRadius: f,
                [`+ ${r}`]: { marginBlockStart: d },
              },
              [r]: {
                padding: 0,
                '> li': {
                  width: '100%',
                  height: h,
                  listStyle: 'none',
                  background: u,
                  borderRadius: f,
                  '+ li': { marginBlockStart: $ },
                },
              },
              [`${r}> li:last-child:not(:first-child):not(:nth-child(2))`]: {
                width: '61%',
              },
            },
            [`&-round ${t}-content`]: {
              [`${n}, ${r} > li`]: { borderRadius: g },
            },
          },
          [`${t}-with-avatar ${t}-content`]: {
            [n]: { marginBlockStart: m, [`+ ${r}`]: { marginBlockStart: v } },
          },
          [`${t}${t}-element`]: Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  { display: 'inline-block', width: 'auto' },
                  Ci(e),
                ),
                fi(e),
              ),
              hi(e),
            ),
            vi(e),
          ),
          [`${t}${t}-block`]: {
            width: '100%',
            [i]: { width: '100%' },
            [a]: { width: '100%' },
          },
          [`${t}${t}-active`]: {
            [`\n        ${n},\n        ${r} > li,\n        ${o},\n        ${i},\n        ${a},\n        ${l}\n      `]:
              Object.assign({}, gi(e)),
          },
        };
      })(
        T(e, {
          skeletonAvatarCls: `${t}-avatar`,
          skeletonTitleCls: `${t}-title`,
          skeletonParagraphCls: `${t}-paragraph`,
          skeletonButtonCls: `${t}-button`,
          skeletonInputCls: `${t}-input`,
          skeletonImageCls: `${t}-image`,
          imageSizeBase: o(e.controlHeight).mul(1.5).equal(),
          borderRadius: 100,
          skeletonLoadingBackground: `linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,
          skeletonLoadingMotionDuration: '1.4s',
        }),
      );
    },
    (e) => {
      const { colorFillContent: t, colorFill: o } = e;
      return {
        color: t,
        colorGradientEnd: o,
        gradientFromColor: t,
        gradientToColor: o,
        titleHeight: e.controlHeight / 2,
        blockRadius: e.borderRadiusSM,
        paragraphMarginTop: e.marginLG + e.marginXXS,
        paragraphLiHeight: e.controlHeight / 2,
      };
    },
    {
      deprecatedTokens: [
        ['color', 'gradientFromColor'],
        ['colorGradientEnd', 'gradientToColor'],
      ],
    },
  ),
  Oi = (e, t) => {
    const { width: o, rows: n = 2 } = t;
    return Array.isArray(o) ? o[e] : n - 1 === e ? o : void 0;
  },
  ki = (e) => {
    const { prefixCls: t, className: o, style: n, rows: r = 0 } = e,
      i = Array.from({ length: r }).map((t, o) =>
        le.createElement('li', { key: o, style: { width: Oi(o, e) } }),
      );
    return le.createElement('ul', { className: de(t, o), style: n }, i);
  },
  wi = ({ prefixCls: e, className: t, width: o, style: n }) =>
    le.createElement('h3', {
      className: de(e, t),
      style: Object.assign({ width: o }, n),
    });
function Ei(e) {
  return e && 'object' == typeof e ? e : {};
}
const ji = (e) => {
  const {
      prefixCls: t,
      loading: o,
      className: n,
      rootClassName: r,
      style: i,
      children: a,
      avatar: l = !1,
      title: s = !0,
      paragraph: c = !0,
      active: d,
      round: u,
    } = e,
    { getPrefixCls: p, direction: m, className: g, style: b } = Lt('skeleton'),
    f = p('skeleton', t),
    [h, $, v] = Si(f);
  if (o || !('loading' in e)) {
    const e = !!l,
      t = !!s,
      o = !!c;
    let a, p;
    if (e) {
      const e = Object.assign(
        Object.assign(
          { prefixCls: `${f}-avatar` },
          (function (e, t) {
            return e && !t
              ? { size: 'large', shape: 'square' }
              : { size: 'large', shape: 'circle' };
          })(t, o),
        ),
        Ei(l),
      );
      a = le.createElement(
        'div',
        { className: `${f}-header` },
        le.createElement(di, Object.assign({}, e)),
      );
    }
    if (t || o) {
      let n, r;
      if (t) {
        const t = Object.assign(
          Object.assign(
            { prefixCls: `${f}-title` },
            (function (e, t) {
              return !e && t
                ? { width: '38%' }
                : e && t
                  ? { width: '50%' }
                  : {};
            })(e, o),
          ),
          Ei(s),
        );
        n = le.createElement(wi, Object.assign({}, t));
      }
      if (o) {
        const o = Object.assign(
          Object.assign(
            { prefixCls: `${f}-paragraph` },
            (function (e, t) {
              const o = {};
              return (
                (e && t) || (o.width = '61%'),
                (o.rows = !e && t ? 3 : 2),
                o
              );
            })(e, t),
          ),
          Ei(c),
        );
        r = le.createElement(ki, Object.assign({}, o));
      }
      p = le.createElement('div', { className: `${f}-content` }, n, r);
    }
    const y = de(
      f,
      {
        [`${f}-with-avatar`]: e,
        [`${f}-active`]: d,
        [`${f}-rtl`]: 'rtl' === m,
        [`${f}-round`]: u,
      },
      g,
      n,
      r,
      $,
      v,
    );
    return h(
      le.createElement(
        'div',
        { className: y, style: Object.assign(Object.assign({}, b), i) },
        a,
        p,
      ),
    );
  }
  return null != a ? a : null;
};
function Ii() {}
((ji.Button = (e) => {
  const {
      prefixCls: t,
      className: o,
      rootClassName: n,
      active: r,
      block: i = !1,
      size: a = 'default',
    } = e,
    { getPrefixCls: l } = le.useContext(Tt),
    s = l('skeleton', t),
    [c, d, u] = Si(s),
    p = h(e, ['prefixCls']),
    m = de(
      s,
      `${s}-element`,
      { [`${s}-active`]: r, [`${s}-block`]: i },
      o,
      n,
      d,
      u,
    );
  return c(
    le.createElement(
      'div',
      { className: m },
      le.createElement(
        di,
        Object.assign({ prefixCls: `${s}-button`, size: a }, p),
      ),
    ),
  );
}),
  (ji.Avatar = (e) => {
    const {
        prefixCls: t,
        className: o,
        rootClassName: n,
        active: r,
        shape: i = 'circle',
        size: a = 'default',
      } = e,
      { getPrefixCls: l } = le.useContext(Tt),
      s = l('skeleton', t),
      [c, d, u] = Si(s),
      p = h(e, ['prefixCls', 'className']),
      m = de(s, `${s}-element`, { [`${s}-active`]: r }, o, n, d, u);
    return c(
      le.createElement(
        'div',
        { className: m },
        le.createElement(
          di,
          Object.assign({ prefixCls: `${s}-avatar`, shape: i, size: a }, p),
        ),
      ),
    );
  }),
  (ji.Input = (e) => {
    const {
        prefixCls: t,
        className: o,
        rootClassName: n,
        active: r,
        block: i,
        size: a = 'default',
      } = e,
      { getPrefixCls: l } = le.useContext(Tt),
      s = l('skeleton', t),
      [c, d, u] = Si(s),
      p = h(e, ['prefixCls']),
      m = de(
        s,
        `${s}-element`,
        { [`${s}-active`]: r, [`${s}-block`]: i },
        o,
        n,
        d,
        u,
      );
    return c(
      le.createElement(
        'div',
        { className: m },
        le.createElement(
          di,
          Object.assign({ prefixCls: `${s}-input`, size: a }, p),
        ),
      ),
    );
  }),
  (ji.Image = (e) => {
    const {
        prefixCls: t,
        className: o,
        rootClassName: n,
        style: r,
        active: i,
      } = e,
      { getPrefixCls: a } = le.useContext(Tt),
      l = a('skeleton', t),
      [s, c, d] = Si(l),
      u = de(l, `${l}-element`, { [`${l}-active`]: i }, o, n, c, d);
    return s(
      le.createElement(
        'div',
        { className: u },
        le.createElement(
          'div',
          { className: de(`${l}-image`, o), style: r },
          le.createElement(
            'svg',
            {
              viewBox: '0 0 1098 1024',
              xmlns: 'http://www.w3.org/2000/svg',
              className: `${l}-image-svg`,
            },
            le.createElement('title', null, 'Image placeholder'),
            le.createElement('path', {
              d: 'M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z',
              className: `${l}-image-path`,
            }),
          ),
        ),
      ),
    );
  }),
  (ji.Node = (e) => {
    const {
        prefixCls: t,
        className: o,
        rootClassName: n,
        style: r,
        active: i,
        children: a,
      } = e,
      { getPrefixCls: l } = le.useContext(Tt),
      s = l('skeleton', t),
      [c, d, u] = Si(s),
      p = de(s, `${s}-element`, { [`${s}-active`]: i }, d, o, n, u);
    return c(
      le.createElement(
        'div',
        { className: p },
        le.createElement(
          'div',
          { className: de(`${s}-image`, o), style: r },
          a,
        ),
      ),
    );
  }));
const Pi = le.createContext({ add: Ii, remove: Ii });
const Bi = () => {
    const {
      cancelButtonProps: e,
      cancelTextLocale: t,
      onCancel: o,
    } = le.useContext(oi);
    return se.createElement(Jr, Object.assign({ onClick: o }, e), t);
  },
  zi = () => {
    const {
      confirmLoading: e,
      okButtonProps: t,
      okType: o,
      okTextLocale: n,
      onOk: r,
    } = le.useContext(oi);
    return se.createElement(
      Jr,
      Object.assign({}, jn(o), { loading: e, onClick: r }, t),
      n,
    );
  };
function Mi(e, t) {
  return se.createElement(
    'span',
    { className: `${e}-close-x` },
    t || se.createElement(H, { className: `${e}-close-icon` }),
  );
}
const Hi = (e) => {
    const {
        okText: t,
        okType: o = 'primary',
        cancelText: n,
        confirmLoading: r,
        onOk: i,
        onCancel: a,
        okButtonProps: l,
        cancelButtonProps: s,
        footer: c,
      } = e,
      [d] = ht('Modal', bt()),
      u = t || (null == d ? void 0 : d.okText),
      p = n || (null == d ? void 0 : d.cancelText),
      m = se.useMemo(
        () => ({
          confirmLoading: r,
          okButtonProps: l,
          cancelButtonProps: s,
          okTextLocale: u,
          cancelTextLocale: p,
          okType: o,
          onOk: i,
          onCancel: a,
        }),
        [r, l, s, u, p, o, i, a],
      );
    let g;
    return (
      'function' == typeof c || void 0 === c
        ? ((g = se.createElement(
            se.Fragment,
            null,
            se.createElement(Bi, null),
            se.createElement(zi, null),
          )),
          'function' == typeof c && (g = c(g, { OkBtn: zi, CancelBtn: Bi })),
          (g = se.createElement(ni, { value: m }, g)))
        : (g = c),
      se.createElement(Wt, { disabled: !1 }, g)
    );
  },
  Ti = (e) => {
    const { componentCls: t } = e;
    return { [t]: { position: 'relative', maxWidth: '100%', minHeight: 1 } };
  },
  Ri = (e, t) =>
    ((e, t) => {
      const { prefixCls: o, componentCls: n, gridColumns: r } = e,
        i = {};
      for (let a = r; a >= 0; a--)
        0 === a
          ? ((i[`${n}${t}-${a}`] = { display: 'none' }),
            (i[`${n}-push-${a}`] = { insetInlineStart: 'auto' }),
            (i[`${n}-pull-${a}`] = { insetInlineEnd: 'auto' }),
            (i[`${n}${t}-push-${a}`] = { insetInlineStart: 'auto' }),
            (i[`${n}${t}-pull-${a}`] = { insetInlineEnd: 'auto' }),
            (i[`${n}${t}-offset-${a}`] = { marginInlineStart: 0 }),
            (i[`${n}${t}-order-${a}`] = { order: 0 }))
          : ((i[`${n}${t}-${a}`] = [
              { '--ant-display': 'block', display: 'block' },
              {
                display: 'var(--ant-display)',
                flex: `0 0 ${(a / r) * 100}%`,
                maxWidth: (a / r) * 100 + '%',
              },
            ]),
            (i[`${n}${t}-push-${a}`] = {
              insetInlineStart: (a / r) * 100 + '%',
            }),
            (i[`${n}${t}-pull-${a}`] = { insetInlineEnd: (a / r) * 100 + '%' }),
            (i[`${n}${t}-offset-${a}`] = {
              marginInlineStart: (a / r) * 100 + '%',
            }),
            (i[`${n}${t}-order-${a}`] = { order: a }));
      return ((i[`${n}${t}-flex`] = { flex: `var(--${o}${t}-flex)` }), i);
    })(e, t),
  Ni = lo(
    'Grid',
    (e) => {
      const { componentCls: t } = e;
      return {
        [t]: {
          display: 'flex',
          flexFlow: 'row wrap',
          minWidth: 0,
          '&::before, &::after': { display: 'flex' },
          '&-no-wrap': { flexWrap: 'nowrap' },
          '&-start': { justifyContent: 'flex-start' },
          '&-center': { justifyContent: 'center' },
          '&-end': { justifyContent: 'flex-end' },
          '&-space-between': { justifyContent: 'space-between' },
          '&-space-around': { justifyContent: 'space-around' },
          '&-space-evenly': { justifyContent: 'space-evenly' },
          '&-top': { alignItems: 'flex-start' },
          '&-middle': { alignItems: 'center' },
          '&-bottom': { alignItems: 'flex-end' },
        },
      };
    },
    () => ({}),
  ),
  Li = (e) => ({
    xs: e.screenXSMin,
    sm: e.screenSMMin,
    md: e.screenMDMin,
    lg: e.screenLGMin,
    xl: e.screenXLMin,
    xxl: e.screenXXLMin,
  }),
  Fi = lo(
    'Grid',
    (e) => {
      const t = T(e, { gridColumns: 24 }),
        o = Li(t);
      return (
        delete o.xs,
        [
          Ti(t),
          Ri(t, ''),
          Ri(t, '-xs'),
          Object.keys(o)
            .map((e) =>
              ((e, t, o) => ({
                [`@media (min-width: ${I(t)})`]: Object.assign({}, Ri(e, o)),
              }))(t, o[e], `-${e}`),
            )
            .reduce((e, t) => Object.assign(Object.assign({}, e), t), {}),
        ]
      );
    },
    () => ({}),
  );
function Ai(e) {
  return { position: e, inset: 0 };
}
const Di = (e) => {
    const { componentCls: t, antCls: o } = e;
    return [
      {
        [`${t}-root`]: {
          [`${t}${o}-zoom-enter, ${t}${o}-zoom-appear`]: {
            transform: 'none',
            opacity: 0,
            animationDuration: e.motionDurationSlow,
            userSelect: 'none',
          },
          [`${t}${o}-zoom-leave ${t}-content`]: { pointerEvents: 'none' },
          [`${t}-mask`]: Object.assign(Object.assign({}, Ai('fixed')), {
            zIndex: e.zIndexPopupBase,
            height: '100%',
            backgroundColor: e.colorBgMask,
            pointerEvents: 'none',
            [`${t}-hidden`]: { display: 'none' },
          }),
          [`${t}-wrap`]: Object.assign(Object.assign({}, Ai('fixed')), {
            zIndex: e.zIndexPopupBase,
            overflow: 'auto',
            outline: 0,
            WebkitOverflowScrolling: 'touch',
          }),
        },
      },
      { [`${t}-root`]: qn(e) },
    ];
  },
  Wi = (e) => {
    const { componentCls: t } = e;
    return [
      {
        [`${t}-root`]: {
          [`${t}-wrap-rtl`]: { direction: 'rtl' },
          [`${t}-centered`]: {
            textAlign: 'center',
            '&::before': {
              display: 'inline-block',
              width: 0,
              height: '100%',
              verticalAlign: 'middle',
              content: '""',
            },
            [t]: {
              top: 0,
              display: 'inline-block',
              paddingBottom: 0,
              textAlign: 'start',
              verticalAlign: 'middle',
            },
          },
          [`@media (max-width: ${e.screenSMMax}px)`]: {
            [t]: {
              maxWidth: 'calc(100vw - 16px)',
              margin: `${I(e.marginXS)} auto`,
            },
            [`${t}-centered`]: { [t]: { flex: 1 } },
          },
        },
      },
      {
        [t]: Object.assign(Object.assign({}, oo(e)), {
          pointerEvents: 'none',
          position: 'relative',
          top: 100,
          width: 'auto',
          maxWidth: `calc(100vw - ${I(e.calc(e.margin).mul(2).equal())})`,
          margin: '0 auto',
          paddingBottom: e.paddingLG,
          [`${t}-title`]: {
            margin: 0,
            color: e.titleColor,
            fontWeight: e.fontWeightStrong,
            fontSize: e.titleFontSize,
            lineHeight: e.titleLineHeight,
            wordWrap: 'break-word',
          },
          [`${t}-content`]: {
            position: 'relative',
            backgroundColor: e.contentBg,
            backgroundClip: 'padding-box',
            border: 0,
            borderRadius: e.borderRadiusLG,
            boxShadow: e.boxShadow,
            pointerEvents: 'auto',
            padding: e.contentPadding,
          },
          [`${t}-close`]: Object.assign(
            {
              position: 'absolute',
              top: e
                .calc(e.modalHeaderHeight)
                .sub(e.modalCloseBtnSize)
                .div(2)
                .equal(),
              insetInlineEnd: e
                .calc(e.modalHeaderHeight)
                .sub(e.modalCloseBtnSize)
                .div(2)
                .equal(),
              zIndex: e.calc(e.zIndexPopupBase).add(10).equal(),
              padding: 0,
              color: e.modalCloseIconColor,
              fontWeight: e.fontWeightStrong,
              lineHeight: 1,
              textDecoration: 'none',
              background: 'transparent',
              borderRadius: e.borderRadiusSM,
              width: e.modalCloseBtnSize,
              height: e.modalCloseBtnSize,
              border: 0,
              outline: 0,
              cursor: 'pointer',
              transition: `color ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,
              '&-x': {
                display: 'flex',
                fontSize: e.fontSizeLG,
                fontStyle: 'normal',
                lineHeight: I(e.modalCloseBtnSize),
                justifyContent: 'center',
                textTransform: 'none',
                textRendering: 'auto',
              },
              '&:disabled': { pointerEvents: 'none' },
              '&:hover': {
                color: e.modalCloseIconHoverColor,
                backgroundColor: e.colorBgTextHover,
                textDecoration: 'none',
              },
              '&:active': { backgroundColor: e.colorBgTextActive },
            },
            ro(e),
          ),
          [`${t}-header`]: {
            color: e.colorText,
            background: e.headerBg,
            borderRadius: `${I(e.borderRadiusLG)} ${I(e.borderRadiusLG)} 0 0`,
            marginBottom: e.headerMarginBottom,
            padding: e.headerPadding,
            borderBottom: e.headerBorderBottom,
          },
          [`${t}-body`]: {
            fontSize: e.fontSize,
            lineHeight: e.lineHeight,
            wordWrap: 'break-word',
            padding: e.bodyPadding,
            [`${t}-body-skeleton`]: {
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: `${I(e.margin)} auto`,
            },
          },
          [`${t}-footer`]: {
            textAlign: 'end',
            background: e.footerBg,
            marginTop: e.footerMarginTop,
            padding: e.footerPadding,
            borderTop: e.footerBorderTop,
            borderRadius: e.footerBorderRadius,
            [`> ${e.antCls}-btn + ${e.antCls}-btn`]: {
              marginInlineStart: e.marginXS,
            },
          },
          [`${t}-open`]: { overflow: 'hidden' },
        }),
      },
      {
        [`${t}-pure-panel`]: {
          top: 'auto',
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          [`${t}-content,\n          ${t}-body,\n          ${t}-confirm-body-wrapper`]:
            { display: 'flex', flexDirection: 'column', flex: 'auto' },
          [`${t}-confirm-body`]: { marginBottom: 'auto' },
        },
      },
    ];
  },
  _i = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-root`]: {
        [`${t}-wrap-rtl`]: {
          direction: 'rtl',
          [`${t}-confirm-body`]: { direction: 'rtl' },
        },
      },
    };
  },
  Gi = (e) => {
    const { componentCls: t } = e,
      o = Li(e),
      n = Object.assign({}, o);
    delete n.xs;
    const r = `--${t.replace('.', '')}-`,
      i = Object.keys(n).map((e) => ({
        [`@media (min-width: ${I(n[e])})`]: { width: `var(${r}${e}-width)` },
      }));
    return {
      [`${t}-root`]: {
        [t]: [].concat(
          ze(
            Object.keys(o).map((e, t) => {
              const n = Object.keys(o)[t - 1];
              return n ? { [`${r}${e}-width`]: `var(${r}${n}-width)` } : null;
            }),
          ),
          [{ width: `var(${r}xs-width)` }],
          ze(i),
        ),
      },
    };
  },
  qi = (e) => {
    const t = e.padding,
      o = e.fontSizeHeading5,
      n = e.lineHeightHeading5;
    return T(e, {
      modalHeaderHeight: e
        .calc(e.calc(n).mul(o).equal())
        .add(e.calc(t).mul(2).equal())
        .equal(),
      modalFooterBorderColorSplit: e.colorSplit,
      modalFooterBorderStyle: e.lineType,
      modalFooterBorderWidth: e.lineWidth,
      modalCloseIconColor: e.colorIcon,
      modalCloseIconHoverColor: e.colorIconHover,
      modalCloseBtnSize: e.controlHeight,
      modalConfirmIconSize: e.fontHeight,
      modalTitleHeight: e.calc(e.titleFontSize).mul(e.titleLineHeight).equal(),
    });
  },
  Xi = (e) => ({
    footerBg: 'transparent',
    headerBg: e.colorBgElevated,
    titleLineHeight: e.lineHeightHeading5,
    titleFontSize: e.fontSizeHeading5,
    contentBg: e.colorBgElevated,
    titleColor: e.colorTextHeading,
    contentPadding: e.wireframe
      ? 0
      : `${I(e.paddingMD)} ${I(e.paddingContentHorizontalLG)}`,
    headerPadding: e.wireframe ? `${I(e.padding)} ${I(e.paddingLG)}` : 0,
    headerBorderBottom: e.wireframe
      ? `${I(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
      : 'none',
    headerMarginBottom: e.wireframe ? 0 : e.marginXS,
    bodyPadding: e.wireframe ? e.paddingLG : 0,
    footerPadding: e.wireframe ? `${I(e.paddingXS)} ${I(e.padding)}` : 0,
    footerBorderTop: e.wireframe
      ? `${I(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
      : 'none',
    footerBorderRadius: e.wireframe
      ? `0 0 ${I(e.borderRadiusLG)} ${I(e.borderRadiusLG)}`
      : 0,
    footerMarginTop: e.wireframe ? 0 : e.marginSM,
    confirmBodyPadding: e.wireframe
      ? `${I(2 * e.padding)} ${I(2 * e.padding)} ${I(e.paddingLG)}`
      : 0,
    confirmIconMarginInlineEnd: e.wireframe ? e.margin : e.marginSM,
    confirmBtnsMarginTop: e.wireframe ? e.marginLG : e.marginSM,
  }),
  Vi = lo(
    'Modal',
    (e) => {
      const t = qi(e);
      return [Wi(t), _i(t), Di(t), hr(t, 'zoom'), Gi(t)];
    },
    Xi,
    { unitless: { titleLineHeight: !0 } },
  );
let Ki;
const Ui = (e) => {
  ((Ki = { x: e.pageX, y: e.pageY }),
    setTimeout(() => {
      Ki = null;
    }, 100));
};
e() &&
  window.document.documentElement &&
  document.documentElement.addEventListener('click', Ui, !0);
const Yi = (e) => {
    const {
        prefixCls: t,
        className: o,
        rootClassName: n,
        open: r,
        wrapClassName: i,
        centered: a,
        getContainer: l,
        focusTriggerAfterClose: s = !0,
        style: u,
        visible: p,
        width: m = 520,
        footer: g,
        classNames: b,
        styles: f,
        children: h,
        loading: $,
        confirmLoading: v,
        zIndex: y,
        mousePosition: x,
        onOk: C,
        onCancel: S,
        destroyOnHidden: O,
        destroyOnClose: k,
        panelRef: w = null,
        modalRender: E,
      } = e,
      j = (function (e, t) {
        var o = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (o[n] = e[n]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            t.indexOf(n[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
              (o[n[r]] = e[n[r]]);
        }
        return o;
      })(e, [
        'prefixCls',
        'className',
        'rootClassName',
        'open',
        'wrapClassName',
        'centered',
        'getContainer',
        'focusTriggerAfterClose',
        'style',
        'visible',
        'width',
        'footer',
        'classNames',
        'styles',
        'children',
        'loading',
        'confirmLoading',
        'zIndex',
        'mousePosition',
        'onOk',
        'onCancel',
        'destroyOnHidden',
        'destroyOnClose',
        'panelRef',
        'modalRender',
      ]),
      {
        getPopupContainer: I,
        getPrefixCls: P,
        direction: B,
        modal: z,
      } = le.useContext(Tt),
      M = (e) => {
        v || null == S || S(e);
      },
      T = P('modal', t),
      R = P(),
      N = Bo(T),
      [L, F, A] = Vi(T, N),
      D = de(i, {
        [`${T}-centered`]: null != a ? a : null == z ? void 0 : z.centered,
        [`${T}-wrap-rtl`]: 'rtl' === B,
      }),
      W =
        null === g || $
          ? null
          : le.createElement(
              Hi,
              Object.assign({}, e, {
                onOk: (e) => {
                  null == C || C(e);
                },
                onCancel: M,
              }),
            ),
      [_, G, q, X] = Ro(Mo(e), Mo(z), {
        closable: !0,
        closeIcon: le.createElement(H, { className: `${T}-close-icon` }),
        closeIconRender: (e) => Mi(T, e),
      }),
      V = E
        ? (e) => le.createElement('div', { className: `${T}-render` }, E(e))
        : void 0,
      K = (function (e) {
        const t = le.useContext(Pi),
          o = le.useRef(null);
        return d((n) => {
          if (n) {
            const r = e ? n.querySelector(e) : n;
            r && (t.add(r), (o.current = r));
          } else t.remove(o.current);
        });
      })(`.${T}-${E ? 'render' : 'content'}`),
      U = c(w, K),
      [Y, Q] = Vo('Modal', y),
      [Z, J] = le.useMemo(
        () => (m && 'object' == typeof m ? [void 0, m] : [m, void 0]),
        [m],
      ),
      ee = le.useMemo(() => {
        const e = {};
        return (
          J &&
            Object.keys(J).forEach((t) => {
              const o = J[t];
              void 0 !== o &&
                (e[`--${T}-${t}-width`] = 'number' == typeof o ? `${o}px` : o);
            }),
          e
        );
      }, [T, J]);
    return L(
      le.createElement(
        ci,
        { form: !0, space: !0 },
        le.createElement(
          Wo.Provider,
          { value: Q },
          le.createElement(
            Ne,
            Object.assign({ width: Z }, j, {
              zIndex: Y,
              getContainer: void 0 === l ? I : l,
              prefixCls: T,
              rootClassName: de(F, n, A, N),
              footer: W,
              visible: null != r ? r : p,
              mousePosition: null != x ? x : Ki,
              onClose: M,
              closable: _ ? Object.assign({ disabled: q, closeIcon: G }, X) : _,
              closeIcon: G,
              focusTriggerAfterClose: s,
              transitionName: sn(R, 'zoom', e.transitionName),
              maskTransitionName: sn(R, 'fade', e.maskTransitionName),
              className: de(F, o, null == z ? void 0 : z.className),
              style: Object.assign(
                Object.assign(
                  Object.assign({}, null == z ? void 0 : z.style),
                  u,
                ),
                ee,
              ),
              classNames: Object.assign(
                Object.assign(
                  Object.assign({}, null == z ? void 0 : z.classNames),
                  b,
                ),
                { wrapper: de(D, null == b ? void 0 : b.wrapper) },
              ),
              styles: Object.assign(
                Object.assign({}, null == z ? void 0 : z.styles),
                f,
              ),
              panelRef: U,
              destroyOnClose: null != O ? O : k,
              modalRender: V,
            }),
            $
              ? le.createElement(ji, {
                  active: !0,
                  title: !1,
                  paragraph: { rows: 4 },
                  className: `${T}-body-skeleton`,
                })
              : h,
          ),
        ),
      ),
    );
  },
  Qi = co(
    ['Modal', 'confirm'],
    (e) =>
      ((e) => {
        const {
            componentCls: t,
            titleFontSize: o,
            titleLineHeight: n,
            modalConfirmIconSize: r,
            fontSize: i,
            lineHeight: a,
            modalTitleHeight: l,
            fontHeight: s,
            confirmBodyPadding: c,
          } = e,
          d = `${t}-confirm`;
        return {
          [d]: {
            '&-rtl': { direction: 'rtl' },
            [`${e.antCls}-modal-header`]: { display: 'none' },
            [`${d}-body-wrapper`]: Object.assign(
              {},
              {
                '&::before': { display: 'table', content: '""' },
                '&::after': { display: 'table', clear: 'both', content: '""' },
              },
            ),
            [`&${t} ${t}-body`]: { padding: c },
            [`${d}-body`]: {
              display: 'flex',
              flexWrap: 'nowrap',
              alignItems: 'start',
              [`> ${e.iconCls}`]: {
                flex: 'none',
                fontSize: r,
                marginInlineEnd: e.confirmIconMarginInlineEnd,
                marginTop: e.calc(e.calc(s).sub(r).equal()).div(2).equal(),
              },
              [`&-has-title > ${e.iconCls}`]: {
                marginTop: e.calc(e.calc(l).sub(r).equal()).div(2).equal(),
              },
            },
            [`${d}-paragraph`]: {
              display: 'flex',
              flexDirection: 'column',
              flex: 'auto',
              rowGap: e.marginXS,
              maxWidth: `calc(100% - ${I(e.marginSM)})`,
            },
            [`${e.iconCls} + ${d}-paragraph`]: {
              maxWidth: `calc(100% - ${I(e.calc(e.modalConfirmIconSize).add(e.marginSM).equal())})`,
            },
            [`${d}-title`]: {
              color: e.colorTextHeading,
              fontWeight: e.fontWeightStrong,
              fontSize: o,
              lineHeight: n,
            },
            [`${d}-content`]: {
              color: e.colorText,
              fontSize: i,
              lineHeight: a,
            },
            [`${d}-btns`]: {
              textAlign: 'end',
              marginTop: e.confirmBtnsMarginTop,
              [`${e.antCls}-btn + ${e.antCls}-btn`]: {
                marginBottom: 0,
                marginInlineStart: e.marginXS,
              },
            },
          },
          [`${d}-error ${d}-body > ${e.iconCls}`]: { color: e.colorError },
          [`${d}-warning ${d}-body > ${e.iconCls},\n        ${d}-confirm ${d}-body > ${e.iconCls}`]:
            { color: e.colorWarning },
          [`${d}-info ${d}-body > ${e.iconCls}`]: { color: e.colorInfo },
          [`${d}-success ${d}-body > ${e.iconCls}`]: { color: e.colorSuccess },
        };
      })(qi(e)),
    Xi,
    { order: -1e3 },
  );
const Zi = (e) => {
    const {
        prefixCls: t,
        icon: o,
        okText: n,
        cancelText: r,
        confirmPrefixCls: i,
        type: a,
        okCancel: l,
        footer: s,
        locale: c,
      } = e,
      d = (function (e, t) {
        var o = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (o[n] = e[n]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            t.indexOf(n[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
              (o[n[r]] = e[n[r]]);
        }
        return o;
      })(e, [
        'prefixCls',
        'icon',
        'okText',
        'cancelText',
        'confirmPrefixCls',
        'type',
        'okCancel',
        'footer',
        'locale',
      ]);
    let u = o;
    if (!o && null !== o)
      switch (a) {
        case 'info':
          u = le.createElement(D, null);
          break;
        case 'success':
          u = le.createElement(A, null);
          break;
        case 'error':
          u = le.createElement(F, null);
          break;
        default:
          u = le.createElement(L, null);
      }
    const p = null != l ? l : 'confirm' === a,
      m = null !== e.autoFocusButton && (e.autoFocusButton || 'ok'),
      [g] = ht('Modal'),
      b = c || g,
      f =
        n ||
        (p
          ? null == b
            ? void 0
            : b.okText
          : null == b
            ? void 0
            : b.justOkText),
      h = r || (null == b ? void 0 : b.cancelText),
      $ = le.useMemo(
        () =>
          Object.assign(
            {
              autoFocusButton: m,
              cancelTextLocale: h,
              okTextLocale: f,
              mergedOkCancel: p,
            },
            d,
          ),
        [m, h, f, p, d],
      ),
      v = le.createElement(
        le.Fragment,
        null,
        le.createElement(ri, null),
        le.createElement(ii, null),
      ),
      y = void 0 !== e.title && null !== e.title,
      x = `${i}-body`;
    return le.createElement(
      'div',
      { className: `${i}-body-wrapper` },
      le.createElement(
        'div',
        { className: de(x, { [`${x}-has-title`]: y }) },
        u,
        le.createElement(
          'div',
          { className: `${i}-paragraph` },
          y && le.createElement('span', { className: `${i}-title` }, e.title),
          le.createElement('div', { className: `${i}-content` }, e.content),
        ),
      ),
      void 0 === s || 'function' == typeof s
        ? le.createElement(
            ni,
            { value: $ },
            le.createElement(
              'div',
              { className: `${i}-btns` },
              'function' == typeof s ? s(v, { OkBtn: ii, CancelBtn: ri }) : v,
            ),
          )
        : s,
      le.createElement(Qi, { prefixCls: t }),
    );
  },
  Ji = (e) => {
    const {
        close: t,
        zIndex: o,
        maskStyle: n,
        direction: r,
        prefixCls: i,
        wrapClassName: a,
        rootPrefixCls: l,
        bodyStyle: s,
        closable: c = !1,
        onConfirm: d,
        styles: u,
        title: p,
      } = e,
      m = `${i}-confirm`,
      g = e.width || 416,
      b = e.style || {},
      f = void 0 === e.mask || e.mask,
      h = void 0 !== e.maskClosable && e.maskClosable,
      $ = de(m, `${m}-${e.type}`, { [`${m}-rtl`]: 'rtl' === r }, e.className),
      [, v] = eo(),
      y = le.useMemo(() => (void 0 !== o ? o : v.zIndexPopupBase + Go), [o, v]);
    return le.createElement(
      Yi,
      Object.assign({}, e, {
        className: $,
        wrapClassName: de({ [`${m}-centered`]: !!e.centered }, a),
        onCancel: () => {
          (null == t || t({ triggerCancel: !0 }), null == d || d(!1));
        },
        title: p,
        footer: null,
        transitionName: sn(l || '', 'zoom', e.transitionName),
        maskTransitionName: sn(l || '', 'fade', e.maskTransitionName),
        mask: f,
        maskClosable: h,
        style: b,
        styles: Object.assign({ body: s, mask: n }, u),
        width: g,
        zIndex: y,
        closable: c,
      }),
      le.createElement(Zi, Object.assign({}, e, { confirmPrefixCls: m })),
    );
  },
  ea = (e) => {
    const { rootPrefixCls: t, iconPrefixCls: o, direction: n, theme: r } = e;
    return le.createElement(
      Eo,
      { prefixCls: t, iconPrefixCls: o, direction: n, theme: r },
      le.createElement(Ji, Object.assign({}, e)),
    );
  },
  ta = [];
let oa = '';
function na() {
  return oa;
}
const ra = (e) => {
  var t, o;
  const { prefixCls: n, getContainer: r, direction: i } = e,
    a = bt(),
    l = le.useContext(Tt),
    s = na() || l.getPrefixCls(),
    c = n || `${s}-modal`;
  let d = r;
  return (
    !1 === d && (d = void 0),
    se.createElement(
      ea,
      Object.assign({}, e, {
        rootPrefixCls: s,
        prefixCls: c,
        iconPrefixCls: l.iconPrefixCls,
        theme: l.theme,
        direction: null != i ? i : l.direction,
        locale:
          null !==
            (o = null === (t = l.locale) || void 0 === t ? void 0 : t.Modal) &&
          void 0 !== o
            ? o
            : a,
        getContainer: d,
      }),
    )
  );
};
function ia(e) {
  const t = ko(),
    o = document.createDocumentFragment();
  let n,
    r,
    i = Object.assign(Object.assign({}, e), { close: s, open: !0 });
  function a(...t) {
    var o;
    var n;
    t.some((e) => (null == e ? void 0 : e.triggerCancel)) &&
      (null === (o = e.onCancel) ||
        void 0 === o ||
        (n = o).call.apply(n, [e, () => {}].concat(ze(t.slice(1)))));
    for (let e = 0; e < ta.length; e++) {
      if (ta[e] === s) {
        ta.splice(e, 1);
        break;
      }
    }
    r();
  }
  const l = (e) => {
    (clearTimeout(n),
      (n = setTimeout(() => {
        const n = t.getPrefixCls(void 0, na()),
          i = t.getIconPrefixCls(),
          a = t.getTheme(),
          l = se.createElement(ra, Object.assign({}, e)),
          s = ln();
        r = s(
          se.createElement(
            Eo,
            { prefixCls: n, iconPrefixCls: i, theme: a },
            'function' == typeof t.holderRender ? t.holderRender(l) : l,
          ),
          o,
        );
      })));
  };
  function s(...t) {
    ((i = Object.assign(Object.assign({}, i), {
      open: !1,
      afterClose: () => {
        ('function' == typeof e.afterClose && e.afterClose(), a.apply(this, t));
      },
    })),
      i.visible && delete i.visible,
      l(i));
  }
  return (
    l(i),
    ta.push(s),
    {
      destroy: s,
      update: function (e) {
        ((i =
          'function' == typeof e
            ? e(i)
            : Object.assign(Object.assign({}, i), e)),
          l(i));
      },
    }
  );
}
function aa(e) {
  return Object.assign(Object.assign({}, e), { type: 'warning' });
}
function la(e) {
  return Object.assign(Object.assign({}, e), { type: 'info' });
}
function sa(e) {
  return Object.assign(Object.assign({}, e), { type: 'success' });
}
function ca(e) {
  return Object.assign(Object.assign({}, e), { type: 'error' });
}
function da(e) {
  return Object.assign(Object.assign({}, e), { type: 'confirm' });
}
const ua = (e, t) => {
    var o,
      { afterClose: n, config: r } = e,
      i = (function (e, t) {
        var o = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (o[n] = e[n]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            t.indexOf(n[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
              (o[n[r]] = e[n[r]]);
        }
        return o;
      })(e, ['afterClose', 'config']);
    const [a, l] = le.useState(!0),
      [s, c] = le.useState(r),
      { direction: d, getPrefixCls: u } = le.useContext(Tt),
      p = u('modal'),
      m = u(),
      g = (...e) => {
        var t;
        l(!1);
        var o;
        e.some((e) => (null == e ? void 0 : e.triggerCancel)) &&
          (null === (t = s.onCancel) ||
            void 0 === t ||
            (o = t).call.apply(o, [s, () => {}].concat(ze(e.slice(1)))));
      };
    le.useImperativeHandle(t, () => ({
      destroy: g,
      update: (e) => {
        c((t) => {
          const o = 'function' == typeof e ? e(t) : e;
          return Object.assign(Object.assign({}, t), o);
        });
      },
    }));
    const b =
        null !== (o = s.okCancel) && void 0 !== o ? o : 'confirm' === s.type,
      [f] = ht('Modal', ut.Modal);
    return le.createElement(
      ea,
      Object.assign(
        { prefixCls: p, rootPrefixCls: m },
        s,
        {
          close: g,
          open: a,
          afterClose: () => {
            var e;
            (n(), null === (e = s.afterClose) || void 0 === e || e.call(s));
          },
          okText:
            s.okText ||
            (b
              ? null == f
                ? void 0
                : f.okText
              : null == f
                ? void 0
                : f.justOkText),
          direction: s.direction || d,
          cancelText: s.cancelText || (null == f ? void 0 : f.cancelText),
        },
        i,
      ),
    );
  },
  pa = le.forwardRef(ua);
let ma = 0;
const ga = le.memo(
  le.forwardRef((e, t) => {
    const [o, n] = (() => {
      const [e, t] = le.useState([]);
      return [
        e,
        le.useCallback(
          (e) => (
            t((t) => [].concat(ze(t), [e])),
            () => {
              t((t) => t.filter((t) => t !== e));
            }
          ),
          [],
        ),
      ];
    })();
    return (
      le.useImperativeHandle(t, () => ({ patchElement: n }), [n]),
      le.createElement(le.Fragment, null, o)
    );
  }),
);
function ba() {
  const e = le.useRef(null),
    [t, o] = le.useState([]);
  le.useEffect(() => {
    if (t.length) {
      (ze(t).forEach((e) => {
        e();
      }),
        o([]));
    }
  }, [t]);
  const n = le.useCallback(
    (t) =>
      function (n) {
        var r;
        ma += 1;
        const i = le.createRef();
        let a;
        const l = new Promise((e) => {
          a = e;
        });
        let s,
          c = !1;
        const d = le.createElement(pa, {
          key: `modal-${ma}`,
          config: t(n),
          ref: i,
          afterClose: () => {
            null == s || s();
          },
          isSilent: () => c,
          onConfirm: (e) => {
            a(e);
          },
        });
        ((s =
          null === (r = e.current) || void 0 === r
            ? void 0
            : r.patchElement(d)),
          s && ta.push(s));
        return {
          destroy: () => {
            function e() {
              var e;
              null === (e = i.current) || void 0 === e || e.destroy();
            }
            i.current ? e() : o((t) => [].concat(ze(t), [e]));
          },
          update: (e) => {
            function t() {
              var t;
              null === (t = i.current) || void 0 === t || t.update(e);
            }
            i.current ? t() : o((e) => [].concat(ze(e), [t]));
          },
          then: (e) => ((c = !0), l.then(e)),
        };
      },
    [],
  );
  return [
    le.useMemo(
      () => ({
        info: n(la),
        success: n(sa),
        error: n(ca),
        warning: n(aa),
        confirm: n(da),
      }),
      [n],
    ),
    le.createElement(ga, { key: 'modal-holder', ref: e }),
  ];
}
const fa = (e) => {
    const {
        componentCls: t,
        notificationMarginEdge: o,
        animationMaxHeight: n,
      } = e,
      r = `${t}-notice`,
      i = new R('antNotificationFadeIn', {
        '0%': { transform: 'translate3d(100%, 0, 0)', opacity: 0 },
        '100%': { transform: 'translate3d(0, 0, 0)', opacity: 1 },
      }),
      a = new R('antNotificationTopFadeIn', {
        '0%': { top: -n, opacity: 0 },
        '100%': { top: 0, opacity: 1 },
      }),
      l = new R('antNotificationBottomFadeIn', {
        '0%': { bottom: e.calc(n).mul(-1).equal(), opacity: 0 },
        '100%': { bottom: 0, opacity: 1 },
      }),
      s = new R('antNotificationLeftFadeIn', {
        '0%': { transform: 'translate3d(-100%, 0, 0)', opacity: 0 },
        '100%': { transform: 'translate3d(0, 0, 0)', opacity: 1 },
      });
    return {
      [t]: {
        [`&${t}-top, &${t}-bottom`]: {
          marginInline: 0,
          [r]: { marginInline: 'auto auto' },
        },
        [`&${t}-top`]: {
          [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:
            { animationName: a },
        },
        [`&${t}-bottom`]: {
          [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:
            { animationName: l },
        },
        [`&${t}-topRight, &${t}-bottomRight`]: {
          [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:
            { animationName: i },
        },
        [`&${t}-topLeft, &${t}-bottomLeft`]: {
          marginRight: { value: 0, _skip_check_: !0 },
          marginLeft: { value: o, _skip_check_: !0 },
          [r]: { marginInlineEnd: 'auto', marginInlineStart: 0 },
          [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:
            { animationName: s },
        },
      },
    };
  },
  ha = ['top', 'topLeft', 'topRight', 'bottom', 'bottomLeft', 'bottomRight'],
  $a = {
    topLeft: 'left',
    topRight: 'right',
    bottomLeft: 'left',
    bottomRight: 'right',
    top: 'left',
    bottom: 'left',
  },
  va = (e) => {
    const t = {};
    for (let o = 1; o < e.notificationStackLayer; o++)
      t[`&:nth-last-child(${o + 1})`] = {
        overflow: 'hidden',
        [`& > ${e.componentCls}-notice`]: {
          opacity: 0,
          transition: `opacity ${e.motionDurationMid}`,
        },
      };
    return Object.assign(
      {
        [`&:not(:nth-last-child(-n+${e.notificationStackLayer}))`]: {
          opacity: 0,
          overflow: 'hidden',
          color: 'transparent',
          pointerEvents: 'none',
        },
      },
      t,
    );
  },
  ya = (e) => {
    const t = {};
    for (let o = 1; o < e.notificationStackLayer; o++)
      t[`&:nth-last-child(${o + 1})`] = {
        background: e.colorBgBlur,
        backdropFilter: 'blur(10px)',
        '-webkit-backdrop-filter': 'blur(10px)',
      };
    return Object.assign({}, t);
  },
  xa = (e) => {
    const { componentCls: t } = e;
    return Object.assign(
      {
        [`${t}-stack`]: {
          [`& > ${t}-notice-wrapper`]: Object.assign(
            {
              transition: `transform ${e.motionDurationSlow}, backdrop-filter 0s`,
              willChange: 'transform, opacity',
              position: 'absolute',
            },
            va(e),
          ),
        },
        [`${t}-stack:not(${t}-stack-expanded)`]: {
          [`& > ${t}-notice-wrapper`]: Object.assign({}, ya(e)),
        },
        [`${t}-stack${t}-stack-expanded`]: {
          [`& > ${t}-notice-wrapper`]: {
            '&:not(:nth-last-child(-n + 1))': {
              opacity: 1,
              overflow: 'unset',
              color: 'inherit',
              pointerEvents: 'auto',
              [`& > ${e.componentCls}-notice`]: { opacity: 1 },
            },
            '&:after': {
              content: '""',
              position: 'absolute',
              height: e.margin,
              width: '100%',
              insetInline: 0,
              bottom: e.calc(e.margin).mul(-1).equal(),
              background: 'transparent',
              pointerEvents: 'auto',
            },
          },
        },
      },
      ha
        .map((t) =>
          ((e, t) => {
            const { componentCls: o } = e;
            return {
              [`${o}-${t}`]: {
                [`&${o}-stack > ${o}-notice-wrapper`]: {
                  [t.startsWith('top') ? 'top' : 'bottom']: 0,
                  [$a[t]]: { value: 0, _skip_check_: !0 },
                },
              },
            };
          })(e, t),
        )
        .reduce((e, t) => Object.assign(Object.assign({}, e), t), {}),
    );
  },
  Ca = (e) => {
    const {
        iconCls: t,
        componentCls: o,
        boxShadow: n,
        fontSizeLG: r,
        notificationMarginBottom: i,
        borderRadiusLG: a,
        colorSuccess: l,
        colorInfo: s,
        colorWarning: c,
        colorError: d,
        colorTextHeading: u,
        notificationBg: p,
        notificationPadding: m,
        notificationMarginEdge: g,
        notificationProgressBg: b,
        notificationProgressHeight: f,
        fontSize: h,
        lineHeight: $,
        width: v,
        notificationIconSize: y,
        colorText: x,
        colorSuccessBg: C,
        colorErrorBg: S,
        colorInfoBg: O,
        colorWarningBg: k,
      } = e,
      w = `${o}-notice`;
    return {
      position: 'relative',
      marginBottom: i,
      marginInlineStart: 'auto',
      background: p,
      borderRadius: a,
      boxShadow: n,
      [w]: {
        padding: m,
        width: v,
        maxWidth: `calc(100vw - ${I(e.calc(g).mul(2).equal())})`,
        lineHeight: $,
        wordWrap: 'break-word',
        borderRadius: a,
        overflow: 'hidden',
        '&-success': C ? { background: C } : {},
        '&-error': S ? { background: S } : {},
        '&-info': O ? { background: O } : {},
        '&-warning': k ? { background: k } : {},
      },
      [`${w}-message`]: { color: u, fontSize: r, lineHeight: e.lineHeightLG },
      [`${w}-description`]: { fontSize: h, color: x, marginTop: e.marginXS },
      [`${w}-closable ${w}-message`]: { paddingInlineEnd: e.paddingLG },
      [`${w}-with-icon ${w}-message`]: {
        marginInlineStart: e.calc(e.marginSM).add(y).equal(),
        fontSize: r,
      },
      [`${w}-with-icon ${w}-description`]: {
        marginInlineStart: e.calc(e.marginSM).add(y).equal(),
        fontSize: h,
      },
      [`${w}-icon`]: {
        position: 'absolute',
        fontSize: y,
        lineHeight: 1,
        [`&-success${t}`]: { color: l },
        [`&-info${t}`]: { color: s },
        [`&-warning${t}`]: { color: c },
        [`&-error${t}`]: { color: d },
      },
      [`${w}-close`]: Object.assign(
        {
          position: 'absolute',
          top: e.notificationPaddingVertical,
          insetInlineEnd: e.notificationPaddingHorizontal,
          color: e.colorIcon,
          outline: 'none',
          width: e.notificationCloseButtonSize,
          height: e.notificationCloseButtonSize,
          borderRadius: e.borderRadiusSM,
          transition: `background-color ${e.motionDurationMid}, color ${e.motionDurationMid}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'none',
          border: 'none',
          '&:hover': {
            color: e.colorIconHover,
            backgroundColor: e.colorBgTextHover,
          },
          '&:active': { backgroundColor: e.colorBgTextActive },
        },
        ro(e),
      ),
      [`${w}-progress`]: {
        position: 'absolute',
        display: 'block',
        appearance: 'none',
        inlineSize: `calc(100% - ${I(a)} * 2)`,
        left: { _skip_check_: !0, value: a },
        right: { _skip_check_: !0, value: a },
        bottom: 0,
        blockSize: f,
        border: 0,
        '&, &::-webkit-progress-bar': {
          borderRadius: a,
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
        },
        '&::-moz-progress-bar': { background: b },
        '&::-webkit-progress-value': { borderRadius: a, background: b },
      },
      [`${w}-actions`]: { float: 'right', marginTop: e.marginSM },
    };
  },
  Sa = (e) => {
    const {
        componentCls: t,
        notificationMarginBottom: o,
        notificationMarginEdge: n,
        motionDurationMid: r,
        motionEaseInOut: i,
      } = e,
      a = `${t}-notice`,
      l = new R('antNotificationFadeOut', {
        '0%': { maxHeight: e.animationMaxHeight, marginBottom: o },
        '100%': {
          maxHeight: 0,
          marginBottom: 0,
          paddingTop: 0,
          paddingBottom: 0,
          opacity: 0,
        },
      });
    return [
      {
        [t]: Object.assign(Object.assign({}, oo(e)), {
          position: 'fixed',
          zIndex: e.zIndexPopup,
          marginRight: { value: n, _skip_check_: !0 },
          [`${t}-hook-holder`]: { position: 'relative' },
          [`${t}-fade-appear-prepare`]: { opacity: '0 !important' },
          [`${t}-fade-enter, ${t}-fade-appear`]: {
            animationDuration: e.motionDurationMid,
            animationTimingFunction: i,
            animationFillMode: 'both',
            opacity: 0,
            animationPlayState: 'paused',
          },
          [`${t}-fade-leave`]: {
            animationTimingFunction: i,
            animationFillMode: 'both',
            animationDuration: r,
            animationPlayState: 'paused',
          },
          [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:
            { animationPlayState: 'running' },
          [`${t}-fade-leave${t}-fade-leave-active`]: {
            animationName: l,
            animationPlayState: 'running',
          },
          '&-rtl': { direction: 'rtl', [`${a}-actions`]: { float: 'left' } },
        }),
      },
      { [t]: { [`${a}-wrapper`]: Ca(e) } },
    ];
  },
  Oa = (e) => ({
    zIndexPopup: e.zIndexPopupBase + Go + 50,
    width: 384,
    colorSuccessBg: void 0,
    colorErrorBg: void 0,
    colorInfoBg: void 0,
    colorWarningBg: void 0,
  }),
  ka = (e) => {
    const t = e.paddingMD,
      o = e.paddingLG;
    return T(e, {
      notificationBg: e.colorBgElevated,
      notificationPaddingVertical: t,
      notificationPaddingHorizontal: o,
      notificationIconSize: e.calc(e.fontSizeLG).mul(e.lineHeightLG).equal(),
      notificationCloseButtonSize: e.calc(e.controlHeightLG).mul(0.55).equal(),
      notificationMarginBottom: e.margin,
      notificationPadding: `${I(e.paddingMD)} ${I(e.paddingContentHorizontalLG)}`,
      notificationMarginEdge: e.marginLG,
      animationMaxHeight: 150,
      notificationStackLayer: 3,
      notificationProgressHeight: 2,
      notificationProgressBg: `linear-gradient(90deg, ${e.colorPrimaryBorderHover}, ${e.colorPrimary})`,
    });
  },
  wa = lo(
    'Notification',
    (e) => {
      const t = ka(e);
      return [Sa(t), fa(t), xa(t)];
    },
    Oa,
  ),
  Ea = co(
    ['Notification', 'PurePanel'],
    (e) => {
      const t = `${e.componentCls}-notice`,
        o = ka(e);
      return {
        [`${t}-pure-panel`]: Object.assign(Object.assign({}, Ca(o)), {
          width: o.width,
          maxWidth: `calc(100vw - ${I(e.calc(o.notificationMarginEdge).mul(2).equal())})`,
          margin: 0,
        }),
      };
    },
    Oa,
  );
function ja(e, t) {
  return null === t || !1 === t
    ? null
    : t || le.createElement(H, { className: `${e}-close-icon` });
}
const Ia = { success: A, info: D, error: F, warning: L },
  Pa = (e) => {
    const {
      prefixCls: t,
      icon: o,
      type: n,
      message: r,
      description: i,
      actions: a,
      role: l = 'alert',
    } = e;
    let s = null;
    return (
      o
        ? (s = le.createElement('span', { className: `${t}-icon` }, o))
        : n &&
          (s = le.createElement(Ia[n] || null, {
            className: de(`${t}-icon`, `${t}-icon-${n}`),
          })),
      le.createElement(
        'div',
        { className: de({ [`${t}-with-icon`]: s }), role: l },
        s,
        le.createElement('div', { className: `${t}-message` }, r),
        i && le.createElement('div', { className: `${t}-description` }, i),
        a && le.createElement('div', { className: `${t}-actions` }, a),
      )
    );
  };
const Ba = ({ children: e, prefixCls: t }) => {
    const o = Bo(t),
      [n, r, i] = wa(t, o);
    return n(se.createElement(Je, { classNames: { list: de(r, i, o) } }, e));
  },
  za = (e, { prefixCls: t, key: o }) =>
    se.createElement(Ba, { prefixCls: t, key: o }, e),
  Ma = se.forwardRef((e, t) => {
    const {
        top: o,
        bottom: n,
        prefixCls: r,
        getContainer: i,
        maxCount: a,
        rtl: l,
        onAllRemoved: s,
        stack: c,
        duration: d,
        pauseOnHover: u = !0,
        showProgress: p,
      } = e,
      {
        getPrefixCls: m,
        getPopupContainer: g,
        notification: b,
        direction: f,
      } = le.useContext(Tt),
      [, h] = eo(),
      $ = r || m('notification'),
      [v, y] = Ze({
        prefixCls: $,
        style: (e) =>
          (function (e, t, o) {
            let n;
            switch (e) {
              case 'top':
                n = {
                  left: '50%',
                  transform: 'translateX(-50%)',
                  right: 'auto',
                  top: t,
                  bottom: 'auto',
                };
                break;
              case 'topLeft':
                n = { left: 0, top: t, bottom: 'auto' };
                break;
              case 'topRight':
                n = { right: 0, top: t, bottom: 'auto' };
                break;
              case 'bottom':
                n = {
                  left: '50%',
                  transform: 'translateX(-50%)',
                  right: 'auto',
                  top: 'auto',
                  bottom: o,
                };
                break;
              case 'bottomLeft':
                n = { left: 0, top: 'auto', bottom: o };
                break;
              default:
                n = { right: 0, top: 'auto', bottom: o };
            }
            return n;
          })(e, null != o ? o : 24, null != n ? n : 24),
        className: () => de({ [`${$}-rtl`]: null != l ? l : 'rtl' === f }),
        motion: () =>
          (function (e) {
            return { motionName: `${e}-fade` };
          })($),
        closable: !0,
        closeIcon: ja($),
        duration: null != d ? d : 4.5,
        getContainer: () =>
          (null == i ? void 0 : i()) ||
          (null == g ? void 0 : g()) ||
          document.body,
        maxCount: a,
        pauseOnHover: u,
        showProgress: p,
        onAllRemoved: s,
        renderNotifications: za,
        stack: !1 !== c && {
          threshold:
            'object' == typeof c ? (null == c ? void 0 : c.threshold) : void 0,
          offset: 8,
          gap: h.margin,
        },
      });
    return (
      se.useImperativeHandle(t, () =>
        Object.assign(Object.assign({}, v), { prefixCls: $, notification: b }),
      ),
      y
    );
  });
function Ha(e) {
  const t = se.useRef(null);
  at();
  return [
    se.useMemo(() => {
      const o = (o) => {
          var n;
          if (!t.current) return;
          const { open: r, prefixCls: i, notification: a } = t.current,
            l = `${i}-notice`,
            {
              message: s,
              description: c,
              icon: d,
              type: u,
              btn: p,
              actions: m,
              className: g,
              style: b,
              role: f = 'alert',
              closeIcon: h,
              closable: $,
            } = o,
            v = (function (e, t) {
              var o = {};
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) &&
                  t.indexOf(n) < 0 &&
                  (o[n] = e[n]);
              if (
                null != e &&
                'function' == typeof Object.getOwnPropertySymbols
              ) {
                var r = 0;
                for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                  t.indexOf(n[r]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                    (o[n[r]] = e[n[r]]);
              }
              return o;
            })(o, [
              'message',
              'description',
              'icon',
              'type',
              'btn',
              'actions',
              'className',
              'style',
              'role',
              'closeIcon',
              'closable',
            ]),
            y = null != m ? m : p,
            x = ja(
              l,
              (function (e, t, o) {
                return void 0 !== e
                  ? e
                  : void 0 !== (null == t ? void 0 : t.closeIcon)
                    ? t.closeIcon
                    : null == o
                      ? void 0
                      : o.closeIcon;
              })(h, e, a),
            );
          return r(
            Object.assign(
              Object.assign(
                {
                  placement:
                    null !== (n = null == e ? void 0 : e.placement) &&
                    void 0 !== n
                      ? n
                      : 'topRight',
                },
                v,
              ),
              {
                content: se.createElement(Pa, {
                  prefixCls: l,
                  icon: d,
                  type: u,
                  message: s,
                  description: c,
                  actions: y,
                  role: f,
                }),
                className: de(
                  u && `${l}-${u}`,
                  g,
                  null == a ? void 0 : a.className,
                ),
                style: Object.assign(
                  Object.assign({}, null == a ? void 0 : a.style),
                  b,
                ),
                closeIcon: x,
                closable: null != $ ? $ : !!x,
              },
            ),
          );
        },
        n = {
          open: o,
          destroy: (e) => {
            var o, n;
            void 0 !== e
              ? null === (o = t.current) || void 0 === o || o.close(e)
              : null === (n = t.current) || void 0 === n || n.destroy();
          },
        };
      return (
        ['success', 'info', 'warning', 'error'].forEach((e) => {
          n[e] = (t) => o(Object.assign(Object.assign({}, t), { type: e }));
        }),
        n
      );
    }, []),
    se.createElement(
      Ma,
      Object.assign({ key: 'notification-holder' }, e, { ref: t }),
    ),
  ];
}
function Ta(e) {
  return Ha(e);
}
const Ra = se.createContext({}),
  Na = se.createContext({ message: {}, notification: {}, modal: {} }),
  La = lo(
    'App',
    (e) => {
      const {
        componentCls: t,
        colorText: o,
        fontSize: n,
        lineHeight: r,
        fontFamily: i,
      } = e;
      return {
        [t]: {
          color: o,
          fontSize: n,
          lineHeight: r,
          fontFamily: i,
          [`&${t}-rtl`]: { direction: 'rtl' },
        },
      };
    },
    () => ({}),
  ),
  Fa = (e) => {
    const {
        prefixCls: t,
        children: o,
        className: n,
        rootClassName: r,
        message: i,
        notification: a,
        style: l,
        component: s = 'div',
      } = e,
      { direction: c, getPrefixCls: d } = le.useContext(Tt),
      u = d('app', t),
      [p, m, g] = La(u),
      b = de(m, u, n, r, g, { [`${u}-rtl`]: 'rtl' === c }),
      f = le.useContext(Ra),
      h = se.useMemo(
        () => ({
          message: Object.assign(Object.assign({}, f.message), i),
          notification: Object.assign(Object.assign({}, f.notification), a),
        }),
        [i, a, f.message, f.notification],
      ),
      [$, v] = rn(h.message),
      [y, x] = Ta(h.notification),
      [C, S] = ba(),
      O = se.useMemo(
        () => ({ message: $, notification: y, modal: C }),
        [$, y, C],
      );
    at()(
      !(g && !1 === s),
      'usage',
      'When using cssVar, ensure `component` is assigned a valid React component string.',
    );
    const k = !1 === s ? se.Fragment : s,
      w = { className: b, style: l };
    return p(
      se.createElement(
        Na.Provider,
        { value: O },
        se.createElement(
          Ra.Provider,
          { value: h },
          se.createElement(
            k,
            Object.assign({}, !1 === s ? void 0 : w),
            S,
            v,
            x,
            o,
          ),
        ),
      ),
    );
  };
function Aa(e) {
  return (t) =>
    le.createElement(
      Eo,
      { theme: { token: { motion: !1, zIndexPopupBase: 0 } } },
      le.createElement(e, Object.assign({}, t)),
    );
}
Fa.useApp = () => se.useContext(Na);
const Da = (e, t, o, n, r) =>
  Aa((o) => {
    const { prefixCls: r, style: i } = o,
      a = le.useRef(null),
      [l, s] = le.useState(0),
      [c, d] = le.useState(0),
      [u, p] = v(!1, { value: o.open }),
      { getPrefixCls: m } = le.useContext(Tt),
      g = m(n || 'select', r);
    le.useEffect(() => {
      if ((p(!0), 'undefined' != typeof ResizeObserver)) {
        const e = new ResizeObserver((e) => {
            const t = e[0].target;
            (s(t.offsetHeight + 8), d(t.offsetWidth));
          }),
          t = setInterval(() => {
            var o;
            const n = `.${g}-dropdown`,
              r =
                null === (o = a.current) || void 0 === o
                  ? void 0
                  : o.querySelector(n);
            r && (clearInterval(t), e.observe(r));
          }, 10);
        return () => {
          (clearInterval(t), e.disconnect());
        };
      }
    }, [g]);
    let b = Object.assign(Object.assign({}, o), {
      style: Object.assign(Object.assign({}, i), { margin: 0 }),
      open: u,
      visible: u,
      getPopupContainer: () => a.current,
    });
    t && Object.assign(b, { [t]: { overflow: { adjustX: !1, adjustY: !1 } } });
    const f = { paddingBottom: l, position: 'relative', minWidth: c };
    return le.createElement(
      'div',
      { ref: a, style: f },
      le.createElement(e, Object.assign({}, b)),
    );
  });
function Wa(e, t, o) {
  return de({
    [`${e}-status-success`]: 'success' === t,
    [`${e}-status-warning`]: 'warning' === t,
    [`${e}-status-error`]: 'error' === t,
    [`${e}-status-validating`]: 'validating' === t,
    [`${e}-has-feedback`]: o,
  });
}
const _a = (e, t) => t || e,
  Ga = () => {
    const [, e] = eo(),
      [t] = ht('Empty'),
      o = new S(e.colorBgBase).toHsl().l < 0.5 ? { opacity: 0.65 } : {};
    return le.createElement(
      'svg',
      {
        style: o,
        width: '184',
        height: '152',
        viewBox: '0 0 184 152',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      le.createElement(
        'title',
        null,
        (null == t ? void 0 : t.description) || 'Empty',
      ),
      le.createElement(
        'g',
        { fill: 'none', fillRule: 'evenodd' },
        le.createElement(
          'g',
          { transform: 'translate(24 31.67)' },
          le.createElement('ellipse', {
            fillOpacity: '.8',
            fill: '#F5F5F7',
            cx: '67.797',
            cy: '106.89',
            rx: '67.797',
            ry: '12.668',
          }),
          le.createElement('path', {
            d: 'M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z',
            fill: '#AEB8C2',
          }),
          le.createElement('path', {
            d: 'M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z',
            fill: 'url(#linearGradient-1)',
            transform: 'translate(13.56)',
          }),
          le.createElement('path', {
            d: 'M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z',
            fill: '#F5F5F7',
          }),
          le.createElement('path', {
            d: 'M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z',
            fill: '#DCE0E6',
          }),
        ),
        le.createElement('path', {
          d: 'M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z',
          fill: '#DCE0E6',
        }),
        le.createElement(
          'g',
          { transform: 'translate(149.65 15.383)', fill: '#FFF' },
          le.createElement('ellipse', {
            cx: '20.654',
            cy: '3.167',
            rx: '2.849',
            ry: '2.815',
          }),
          le.createElement('path', {
            d: 'M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z',
          }),
        ),
      ),
    );
  },
  qa = () => {
    const [, e] = eo(),
      [t] = ht('Empty'),
      {
        colorFill: o,
        colorFillTertiary: n,
        colorFillQuaternary: r,
        colorBgContainer: i,
      } = e,
      {
        borderColor: a,
        shadowColor: l,
        contentColor: s,
      } = le.useMemo(
        () => ({
          borderColor: new S(o).onBackground(i).toHexString(),
          shadowColor: new S(n).onBackground(i).toHexString(),
          contentColor: new S(r).onBackground(i).toHexString(),
        }),
        [o, n, r, i],
      );
    return le.createElement(
      'svg',
      {
        width: '64',
        height: '41',
        viewBox: '0 0 64 41',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      le.createElement(
        'title',
        null,
        (null == t ? void 0 : t.description) || 'Empty',
      ),
      le.createElement(
        'g',
        { transform: 'translate(0 1)', fill: 'none', fillRule: 'evenodd' },
        le.createElement('ellipse', {
          fill: l,
          cx: '32',
          cy: '33',
          rx: '32',
          ry: '7',
        }),
        le.createElement(
          'g',
          { fillRule: 'nonzero', stroke: a },
          le.createElement('path', {
            d: 'M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z',
          }),
          le.createElement('path', {
            d: 'M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z',
            fill: s,
          }),
        ),
      ),
    );
  },
  Xa = lo('Empty', (e) => {
    const { componentCls: t, controlHeightLG: o, calc: n } = e;
    return ((e) => {
      const {
        componentCls: t,
        margin: o,
        marginXS: n,
        marginXL: r,
        fontSize: i,
        lineHeight: a,
      } = e;
      return {
        [t]: {
          marginInline: n,
          fontSize: i,
          lineHeight: a,
          textAlign: 'center',
          [`${t}-image`]: {
            height: e.emptyImgHeight,
            marginBottom: n,
            opacity: e.opacityImage,
            img: { height: '100%' },
            svg: { maxWidth: '100%', height: '100%', margin: 'auto' },
          },
          [`${t}-description`]: { color: e.colorTextDescription },
          [`${t}-footer`]: { marginTop: o },
          '&-normal': {
            marginBlock: r,
            color: e.colorTextDescription,
            [`${t}-description`]: { color: e.colorTextDescription },
            [`${t}-image`]: { height: e.emptyImgHeightMD },
          },
          '&-small': {
            marginBlock: n,
            color: e.colorTextDescription,
            [`${t}-image`]: { height: e.emptyImgHeightSM },
          },
        },
      };
    })(
      T(e, {
        emptyImgCls: `${t}-img`,
        emptyImgHeight: n(o).mul(2.5).equal(),
        emptyImgHeightMD: o,
        emptyImgHeightSM: n(o).mul(0.875).equal(),
      }),
    );
  });
const Va = le.createElement(Ga, null),
  Ka = le.createElement(qa, null),
  Ua = (e) => {
    var t;
    const {
        className: o,
        rootClassName: n,
        prefixCls: r,
        image: i,
        description: a,
        children: l,
        imageStyle: s,
        style: c,
        classNames: d,
        styles: u,
      } = e,
      p = (function (e, t) {
        var o = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (o[n] = e[n]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            t.indexOf(n[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
              (o[n[r]] = e[n[r]]);
        }
        return o;
      })(e, [
        'className',
        'rootClassName',
        'prefixCls',
        'image',
        'description',
        'children',
        'imageStyle',
        'style',
        'classNames',
        'styles',
      ]),
      {
        getPrefixCls: m,
        direction: g,
        className: b,
        style: f,
        classNames: h,
        styles: $,
        image: v,
      } = Lt('empty'),
      y = m('empty', r),
      [x, C, S] = Xa(y),
      [O] = ht('Empty'),
      k = void 0 !== a ? a : null == O ? void 0 : O.description,
      w = 'string' == typeof k ? k : 'empty',
      E = null !== (t = null != i ? i : v) && void 0 !== t ? t : Va;
    let j = null;
    return (
      (j =
        'string' == typeof E
          ? le.createElement('img', { draggable: !1, alt: w, src: E })
          : E),
      x(
        le.createElement(
          'div',
          Object.assign(
            {
              className: de(
                C,
                S,
                y,
                b,
                { [`${y}-normal`]: E === Ka, [`${y}-rtl`]: 'rtl' === g },
                o,
                n,
                h.root,
                null == d ? void 0 : d.root,
              ),
              style: Object.assign(
                Object.assign(
                  Object.assign(Object.assign({}, $.root), f),
                  null == u ? void 0 : u.root,
                ),
                c,
              ),
            },
            p,
          ),
          le.createElement(
            'div',
            {
              className: de(
                `${y}-image`,
                h.image,
                null == d ? void 0 : d.image,
              ),
              style: Object.assign(
                Object.assign(Object.assign({}, s), $.image),
                null == u ? void 0 : u.image,
              ),
            },
            j,
          ),
          k &&
            le.createElement(
              'div',
              {
                className: de(
                  `${y}-description`,
                  h.description,
                  null == d ? void 0 : d.description,
                ),
                style: Object.assign(
                  Object.assign({}, $.description),
                  null == u ? void 0 : u.description,
                ),
              },
              k,
            ),
          l &&
            le.createElement(
              'div',
              {
                className: de(
                  `${y}-footer`,
                  h.footer,
                  null == d ? void 0 : d.footer,
                ),
                style: Object.assign(
                  Object.assign({}, $.footer),
                  null == u ? void 0 : u.footer,
                ),
              },
              l,
            ),
        ),
      )
    );
  };
((Ua.PRESENTED_IMAGE_DEFAULT = Va), (Ua.PRESENTED_IMAGE_SIMPLE = Ka));
const Ya = (e) => {
    const { componentName: t } = e,
      { getPrefixCls: o } = le.useContext(Tt),
      n = o('empty');
    switch (t) {
      case 'Table':
      case 'List':
        return se.createElement(Ua, { image: Ua.PRESENTED_IMAGE_SIMPLE });
      case 'Select':
      case 'TreeSelect':
      case 'Cascader':
      case 'Transfer':
      case 'Mentions':
        return se.createElement(Ua, {
          image: Ua.PRESENTED_IMAGE_SIMPLE,
          className: `${n}-small`,
        });
      case 'Table.filter':
        return null;
      default:
        return se.createElement(Ua, null);
    }
  },
  Qa = (e, t, o) => {
    var n, r;
    const { variant: i, [e]: a } = le.useContext(Tt),
      l = le.useContext(si),
      s = null == a ? void 0 : a.variant;
    let c;
    c =
      void 0 !== t
        ? t
        : !1 === o
          ? 'borderless'
          : null !==
                (r =
                  null !== (n = null != l ? l : s) && void 0 !== n ? n : i) &&
              void 0 !== r
            ? r
            : 'outlined';
    return [c, Ht.includes(c)];
  };
function Za(e, t) {
  return (
    e ||
    ((e) => {
      const t = {
        overflow: { adjustX: !0, adjustY: !0, shiftY: !0 },
        htmlRegion: 'scroll' === e ? 'scroll' : 'visible',
        dynamicInset: !0,
      };
      return {
        bottomLeft: Object.assign(Object.assign({}, t), {
          points: ['tl', 'bl'],
          offset: [0, 4],
        }),
        bottomRight: Object.assign(Object.assign({}, t), {
          points: ['tr', 'br'],
          offset: [0, 4],
        }),
        topLeft: Object.assign(Object.assign({}, t), {
          points: ['bl', 'tl'],
          offset: [0, -4],
        }),
        topRight: Object.assign(Object.assign({}, t), {
          points: ['br', 'tr'],
          offset: [0, -4],
        }),
      };
    })(t)
  );
}
const Ja = (e) => {
    const {
      optionHeight: t,
      optionFontSize: o,
      optionLineHeight: n,
      optionPadding: r,
    } = e;
    return {
      position: 'relative',
      display: 'block',
      minHeight: t,
      padding: r,
      color: e.colorText,
      fontWeight: 'normal',
      fontSize: o,
      lineHeight: n,
      boxSizing: 'border-box',
    };
  },
  el = (e) => {
    const { antCls: t, componentCls: o } = e,
      n = `${o}-item`,
      r = `&${t}-slide-up-enter${t}-slide-up-enter-active`,
      i = `&${t}-slide-up-appear${t}-slide-up-appear-active`,
      a = `&${t}-slide-up-leave${t}-slide-up-leave-active`,
      l = `${o}-dropdown-placement-`,
      s = `${n}-option-selected`;
    return [
      {
        [`${o}-dropdown`]: Object.assign(Object.assign({}, oo(e)), {
          position: 'absolute',
          top: -9999,
          zIndex: e.zIndexPopup,
          boxSizing: 'border-box',
          padding: e.paddingXXS,
          overflow: 'hidden',
          fontSize: e.fontSize,
          fontVariant: 'initial',
          backgroundColor: e.colorBgElevated,
          borderRadius: e.borderRadiusLG,
          outline: 'none',
          boxShadow: e.boxShadowSecondary,
          [`\n          ${r}${l}bottomLeft,\n          ${i}${l}bottomLeft\n        `]:
            { animationName: er },
          [`\n          ${r}${l}topLeft,\n          ${i}${l}topLeft,\n          ${r}${l}topRight,\n          ${i}${l}topRight\n        `]:
            { animationName: or },
          [`${a}${l}bottomLeft`]: { animationName: tr },
          [`\n          ${a}${l}topLeft,\n          ${a}${l}topRight\n        `]:
            { animationName: nr },
          '&-hidden': { display: 'none' },
          [n]: Object.assign(Object.assign({}, Ja(e)), {
            cursor: 'pointer',
            transition: `background ${e.motionDurationSlow} ease`,
            borderRadius: e.borderRadiusSM,
            '&-group': {
              color: e.colorTextDescription,
              fontSize: e.fontSizeSM,
              cursor: 'default',
            },
            '&-option': {
              display: 'flex',
              '&-content': Object.assign({ flex: 'auto' }, to),
              '&-state': {
                flex: 'none',
                display: 'flex',
                alignItems: 'center',
              },
              [`&-active:not(${n}-option-disabled)`]: {
                backgroundColor: e.optionActiveBg,
              },
              [`&-selected:not(${n}-option-disabled)`]: {
                color: e.optionSelectedColor,
                fontWeight: e.optionSelectedFontWeight,
                backgroundColor: e.optionSelectedBg,
                [`${n}-option-state`]: { color: e.colorPrimary },
              },
              '&-disabled': {
                [`&${n}-option-selected`]: {
                  backgroundColor: e.colorBgContainerDisabled,
                },
                color: e.colorTextDisabled,
                cursor: 'not-allowed',
              },
              '&-grouped': {
                paddingInlineStart: e
                  .calc(e.controlPaddingHorizontal)
                  .mul(2)
                  .equal(),
              },
            },
            '&-empty': Object.assign(Object.assign({}, Ja(e)), {
              color: e.colorTextDisabled,
            }),
          }),
          [`${s}:has(+ ${s})`]: {
            borderEndStartRadius: 0,
            borderEndEndRadius: 0,
            [`& + ${s}`]: {
              borderStartStartRadius: 0,
              borderStartEndRadius: 0,
            },
          },
          '&-rtl': { direction: 'rtl' },
        }),
      },
      cr(e, 'slide-up'),
      cr(e, 'slide-down'),
      Jn(e, 'move-up'),
      Jn(e, 'move-down'),
    ];
  },
  tl = (e) => {
    const {
        multipleSelectItemHeight: t,
        paddingXXS: o,
        lineWidth: n,
        INTERNAL_FIXED_ITEM_MARGIN: r,
      } = e,
      i = e.max(e.calc(o).sub(n).equal(), 0);
    return {
      basePadding: i,
      containerPadding: e.max(e.calc(i).sub(r).equal(), 0),
      itemHeight: I(t),
      itemLineHeight: I(e.calc(t).sub(e.calc(e.lineWidth).mul(2)).equal()),
    };
  },
  ol = (e) => {
    const {
        componentCls: t,
        iconCls: o,
        borderRadiusSM: n,
        motionDurationSlow: r,
        paddingXS: i,
        multipleItemColorDisabled: a,
        multipleItemBorderColorDisabled: l,
        colorIcon: s,
        colorIconHover: c,
        INTERNAL_FIXED_ITEM_MARGIN: d,
      } = e,
      u = `${t}-selection-overflow`;
    return {
      [u]: {
        position: 'relative',
        display: 'flex',
        flex: 'auto',
        flexWrap: 'wrap',
        maxWidth: '100%',
        '&-item': {
          flex: 'none',
          alignSelf: 'center',
          maxWidth: 'calc(100% - 4px)',
          display: 'inline-flex',
        },
        [`${t}-selection-item`]: {
          display: 'flex',
          alignSelf: 'center',
          flex: 'none',
          boxSizing: 'border-box',
          maxWidth: '100%',
          marginBlock: d,
          borderRadius: n,
          cursor: 'default',
          transition: `font-size ${r}, line-height ${r}, height ${r}`,
          marginInlineEnd: e.calc(d).mul(2).equal(),
          paddingInlineStart: i,
          paddingInlineEnd: e.calc(i).div(2).equal(),
          [`${t}-disabled&`]: {
            color: a,
            borderColor: l,
            cursor: 'not-allowed',
          },
          '&-content': {
            display: 'inline-block',
            marginInlineEnd: e.calc(i).div(2).equal(),
            overflow: 'hidden',
            whiteSpace: 'pre',
            textOverflow: 'ellipsis',
          },
          '&-remove': Object.assign(
            Object.assign(
              {},
              {
                display: 'inline-flex',
                alignItems: 'center',
                color: 'inherit',
                fontStyle: 'normal',
                lineHeight: 0,
                textAlign: 'center',
                textTransform: 'none',
                verticalAlign: '-0.125em',
                textRendering: 'optimizeLegibility',
                '-webkit-font-smoothing': 'antialiased',
                '-moz-osx-font-smoothing': 'grayscale',
                '> *': { lineHeight: 1 },
                svg: { display: 'inline-block' },
              },
            ),
            {
              display: 'inline-flex',
              alignItems: 'center',
              color: s,
              fontWeight: 'bold',
              fontSize: 10,
              lineHeight: 'inherit',
              cursor: 'pointer',
              [`> ${o}`]: { verticalAlign: '-0.2em' },
              '&:hover': { color: c },
            },
          ),
        },
      },
    };
  },
  nl = (e, t) => {
    const { componentCls: o, INTERNAL_FIXED_ITEM_MARGIN: n } = e,
      r = `${o}-selection-overflow`,
      i = e.multipleSelectItemHeight,
      a = ((e) => {
        const {
          multipleSelectItemHeight: t,
          selectHeight: o,
          lineWidth: n,
        } = e;
        return e.calc(o).sub(t).div(2).sub(n).equal();
      })(e),
      l = t ? `${o}-${t}` : '',
      s = tl(e);
    return {
      [`${o}-multiple${l}`]: Object.assign(Object.assign({}, ol(e)), {
        [`${o}-selector`]: {
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          paddingInline: s.basePadding,
          paddingBlock: s.containerPadding,
          borderRadius: e.borderRadius,
          [`${o}-disabled&`]: {
            background: e.multipleSelectorBgDisabled,
            cursor: 'not-allowed',
          },
          '&:after': {
            display: 'inline-block',
            width: 0,
            margin: `${I(n)} 0`,
            lineHeight: I(i),
            visibility: 'hidden',
            content: '"\\a0"',
          },
        },
        [`${o}-selection-item`]: {
          height: s.itemHeight,
          lineHeight: I(s.itemLineHeight),
        },
        [`${o}-selection-wrap`]: {
          alignSelf: 'flex-start',
          '&:after': { lineHeight: I(i), marginBlock: n },
        },
        [`${o}-prefix`]: {
          marginInlineStart: e
            .calc(e.inputPaddingHorizontalBase)
            .sub(s.basePadding)
            .equal(),
        },
        [`${r}-item + ${r}-item,\n        ${o}-prefix + ${o}-selection-wrap\n      `]:
          {
            [`${o}-selection-search`]: { marginInlineStart: 0 },
            [`${o}-selection-placeholder`]: { insetInlineStart: 0 },
          },
        [`${r}-item-suffix`]: { minHeight: s.itemHeight, marginBlock: n },
        [`${o}-selection-search`]: {
          display: 'inline-flex',
          position: 'relative',
          maxWidth: '100%',
          marginInlineStart: e
            .calc(e.inputPaddingHorizontalBase)
            .sub(a)
            .equal(),
          '\n          &-input,\n          &-mirror\n        ': {
            height: i,
            fontFamily: e.fontFamily,
            lineHeight: I(i),
            transition: `all ${e.motionDurationSlow}`,
          },
          '&-input': { width: '100%', minWidth: 4.1 },
          '&-mirror': {
            position: 'absolute',
            top: 0,
            insetInlineStart: 0,
            insetInlineEnd: 'auto',
            zIndex: 999,
            whiteSpace: 'pre',
            visibility: 'hidden',
          },
        },
        [`${o}-selection-placeholder`]: {
          position: 'absolute',
          top: '50%',
          insetInlineStart: e
            .calc(e.inputPaddingHorizontalBase)
            .sub(s.basePadding)
            .equal(),
          insetInlineEnd: e.inputPaddingHorizontalBase,
          transform: 'translateY(-50%)',
          transition: `all ${e.motionDurationSlow}`,
        },
      }),
    };
  };
function rl(e, t) {
  const { componentCls: o } = e,
    n = t ? `${o}-${t}` : '',
    r = {
      [`${o}-multiple${n}`]: {
        fontSize: e.fontSize,
        [`${o}-selector`]: { [`${o}-show-search&`]: { cursor: 'text' } },
        [`\n        &${o}-show-arrow ${o}-selector,\n        &${o}-allow-clear ${o}-selector\n      `]:
          {
            paddingInlineEnd: e
              .calc(e.fontSizeIcon)
              .add(e.controlPaddingHorizontal)
              .equal(),
          },
      },
    };
  return [nl(e, t), r];
}
const il = (e) => {
  const { componentCls: t } = e,
    o = T(e, {
      selectHeight: e.controlHeightSM,
      multipleSelectItemHeight: e.multipleItemHeightSM,
      borderRadius: e.borderRadiusSM,
      borderRadiusSM: e.borderRadiusXS,
    }),
    n = T(e, {
      fontSize: e.fontSizeLG,
      selectHeight: e.controlHeightLG,
      multipleSelectItemHeight: e.multipleItemHeightLG,
      borderRadius: e.borderRadiusLG,
      borderRadiusSM: e.borderRadius,
    });
  return [
    rl(e),
    rl(o, 'sm'),
    {
      [`${t}-multiple${t}-sm`]: {
        [`${t}-selection-placeholder`]: {
          insetInline: e
            .calc(e.controlPaddingHorizontalSM)
            .sub(e.lineWidth)
            .equal(),
        },
        [`${t}-selection-search`]: { marginInlineStart: 2 },
      },
    },
    rl(n, 'lg'),
  ];
};
function al(e, t) {
  const { componentCls: o, inputPaddingHorizontalBase: n, borderRadius: r } = e,
    i = e.calc(e.controlHeight).sub(e.calc(e.lineWidth).mul(2)).equal(),
    a = t ? `${o}-${t}` : '';
  return {
    [`${o}-single${a}`]: {
      fontSize: e.fontSize,
      height: e.controlHeight,
      [`${o}-selector`]: Object.assign(Object.assign({}, oo(e, !0)), {
        display: 'flex',
        borderRadius: r,
        flex: '1 1 auto',
        [`${o}-selection-wrap:after`]: { lineHeight: I(i) },
        [`${o}-selection-search`]: {
          position: 'absolute',
          inset: 0,
          width: '100%',
          '&-input': { width: '100%', WebkitAppearance: 'textfield' },
        },
        [`\n          ${o}-selection-item,\n          ${o}-selection-placeholder\n        `]:
          {
            display: 'block',
            padding: 0,
            lineHeight: I(i),
            transition: `all ${e.motionDurationSlow}, visibility 0s`,
            alignSelf: 'center',
          },
        [`${o}-selection-placeholder`]: {
          transition: 'none',
          pointerEvents: 'none',
        },
        [[
          '&:after',
          `${o}-selection-item:empty:after`,
          `${o}-selection-placeholder:empty:after`,
        ].join(',')]: {
          display: 'inline-block',
          width: 0,
          visibility: 'hidden',
          content: '"\\a0"',
        },
      }),
      [`\n        &${o}-show-arrow ${o}-selection-item,\n        &${o}-show-arrow ${o}-selection-search,\n        &${o}-show-arrow ${o}-selection-placeholder\n      `]:
        { paddingInlineEnd: e.showArrowPaddingInlineEnd },
      [`&${o}-open ${o}-selection-item`]: { color: e.colorTextPlaceholder },
      [`&:not(${o}-customize-input)`]: {
        [`${o}-selector`]: {
          width: '100%',
          height: '100%',
          alignItems: 'center',
          padding: `0 ${I(n)}`,
          [`${o}-selection-search-input`]: { height: i, fontSize: e.fontSize },
          '&:after': { lineHeight: I(i) },
        },
      },
      [`&${o}-customize-input`]: {
        [`${o}-selector`]: {
          '&:after': { display: 'none' },
          [`${o}-selection-search`]: { position: 'static', width: '100%' },
          [`${o}-selection-placeholder`]: {
            position: 'absolute',
            insetInlineStart: 0,
            insetInlineEnd: 0,
            padding: `0 ${I(n)}`,
            '&:after': { display: 'none' },
          },
        },
      },
    },
  };
}
function ll(e) {
  const { componentCls: t } = e,
    o = e.calc(e.controlPaddingHorizontalSM).sub(e.lineWidth).equal();
  return [
    al(e),
    al(
      T(e, {
        controlHeight: e.controlHeightSM,
        borderRadius: e.borderRadiusSM,
      }),
      'sm',
    ),
    {
      [`${t}-single${t}-sm`]: {
        [`&:not(${t}-customize-input)`]: {
          [`${t}-selector`]: { padding: `0 ${I(o)}` },
          [`&${t}-show-arrow ${t}-selection-search`]: {
            insetInlineEnd: e.calc(o).add(e.calc(e.fontSize).mul(1.5)).equal(),
          },
          [`\n            &${t}-show-arrow ${t}-selection-item,\n            &${t}-show-arrow ${t}-selection-placeholder\n          `]:
            { paddingInlineEnd: e.calc(e.fontSize).mul(1.5).equal() },
        },
      },
    },
    al(
      T(e, {
        controlHeight: e.singleItemHeightLG,
        fontSize: e.fontSizeLG,
        borderRadius: e.borderRadiusLG,
      }),
      'lg',
    ),
  ];
}
const sl = (e, t) => {
    const { componentCls: o, antCls: n, controlOutlineWidth: r } = e;
    return {
      [`&:not(${o}-customize-input) ${o}-selector`]: {
        border: `${I(e.lineWidth)} ${e.lineType} ${t.borderColor}`,
        background: e.selectorBg,
      },
      [`&:not(${o}-disabled):not(${o}-customize-input):not(${n}-pagination-size-changer)`]:
        {
          [`&:hover ${o}-selector`]: { borderColor: t.hoverBorderHover },
          [`${o}-focused& ${o}-selector`]: {
            borderColor: t.activeBorderColor,
            boxShadow: `0 0 0 ${I(r)} ${t.activeOutlineColor}`,
            outline: 0,
          },
          [`${o}-prefix`]: { color: t.color },
        },
    };
  },
  cl = (e, t) => ({
    [`&${e.componentCls}-status-${t.status}`]: Object.assign({}, sl(e, t)),
  }),
  dl = (e) => ({
    '&-outlined': Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            {},
            sl(e, {
              borderColor: e.colorBorder,
              hoverBorderHover: e.hoverBorderColor,
              activeBorderColor: e.activeBorderColor,
              activeOutlineColor: e.activeOutlineColor,
              color: e.colorText,
            }),
          ),
          cl(e, {
            status: 'error',
            borderColor: e.colorError,
            hoverBorderHover: e.colorErrorHover,
            activeBorderColor: e.colorError,
            activeOutlineColor: e.colorErrorOutline,
            color: e.colorError,
          }),
        ),
        cl(e, {
          status: 'warning',
          borderColor: e.colorWarning,
          hoverBorderHover: e.colorWarningHover,
          activeBorderColor: e.colorWarning,
          activeOutlineColor: e.colorWarningOutline,
          color: e.colorWarning,
        }),
      ),
      {
        [`&${e.componentCls}-disabled`]: {
          [`&:not(${e.componentCls}-customize-input) ${e.componentCls}-selector`]:
            {
              background: e.colorBgContainerDisabled,
              color: e.colorTextDisabled,
            },
        },
        [`&${e.componentCls}-multiple ${e.componentCls}-selection-item`]: {
          background: e.multipleItemBg,
          border: `${I(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`,
        },
      },
    ),
  }),
  ul = (e, t) => {
    const { componentCls: o, antCls: n } = e;
    return {
      [`&:not(${o}-customize-input) ${o}-selector`]: {
        background: t.bg,
        border: `${I(e.lineWidth)} ${e.lineType} transparent`,
        color: t.color,
      },
      [`&:not(${o}-disabled):not(${o}-customize-input):not(${n}-pagination-size-changer)`]:
        {
          [`&:hover ${o}-selector`]: { background: t.hoverBg },
          [`${o}-focused& ${o}-selector`]: {
            background: e.selectorBg,
            borderColor: t.activeBorderColor,
            outline: 0,
          },
        },
    };
  },
  pl = (e, t) => ({
    [`&${e.componentCls}-status-${t.status}`]: Object.assign({}, ul(e, t)),
  }),
  ml = (e) => ({
    '&-filled': Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            {},
            ul(e, {
              bg: e.colorFillTertiary,
              hoverBg: e.colorFillSecondary,
              activeBorderColor: e.activeBorderColor,
              color: e.colorText,
            }),
          ),
          pl(e, {
            status: 'error',
            bg: e.colorErrorBg,
            hoverBg: e.colorErrorBgHover,
            activeBorderColor: e.colorError,
            color: e.colorError,
          }),
        ),
        pl(e, {
          status: 'warning',
          bg: e.colorWarningBg,
          hoverBg: e.colorWarningBgHover,
          activeBorderColor: e.colorWarning,
          color: e.colorWarning,
        }),
      ),
      {
        [`&${e.componentCls}-disabled`]: {
          [`&:not(${e.componentCls}-customize-input) ${e.componentCls}-selector`]:
            {
              borderColor: e.colorBorder,
              background: e.colorBgContainerDisabled,
              color: e.colorTextDisabled,
            },
        },
        [`&${e.componentCls}-multiple ${e.componentCls}-selection-item`]: {
          background: e.colorBgContainer,
          border: `${I(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
        },
      },
    ),
  }),
  gl = (e) => ({
    '&-borderless': {
      [`${e.componentCls}-selector`]: {
        background: 'transparent',
        border: `${I(e.lineWidth)} ${e.lineType} transparent`,
      },
      [`&${e.componentCls}-disabled`]: {
        [`&:not(${e.componentCls}-customize-input) ${e.componentCls}-selector`]:
          { color: e.colorTextDisabled },
      },
      [`&${e.componentCls}-multiple ${e.componentCls}-selection-item`]: {
        background: e.multipleItemBg,
        border: `${I(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`,
      },
      [`&${e.componentCls}-status-error`]: {
        [`${e.componentCls}-prefix, ${e.componentCls}-selection-item`]: {
          color: e.colorError,
        },
      },
      [`&${e.componentCls}-status-warning`]: {
        [`${e.componentCls}-prefix, ${e.componentCls}-selection-item`]: {
          color: e.colorWarning,
        },
      },
    },
  }),
  bl = (e, t) => {
    const { componentCls: o, antCls: n } = e;
    return {
      [`&:not(${o}-customize-input) ${o}-selector`]: {
        borderWidth: `${I(e.lineWidth)} 0`,
        borderStyle: `${e.lineType} none`,
        borderColor: `transparent transparent ${t.borderColor} transparent`,
        background: e.selectorBg,
        borderRadius: 0,
      },
      [`&:not(${o}-disabled):not(${o}-customize-input):not(${n}-pagination-size-changer)`]:
        {
          [`&:hover ${o}-selector`]: {
            borderColor: `transparent transparent ${t.hoverBorderHover} transparent`,
          },
          [`${o}-focused& ${o}-selector`]: {
            borderColor: `transparent transparent ${t.activeBorderColor} transparent`,
            outline: 0,
          },
          [`${o}-prefix`]: { color: t.color },
        },
    };
  },
  fl = (e, t) => ({
    [`&${e.componentCls}-status-${t.status}`]: Object.assign({}, bl(e, t)),
  }),
  hl = (e) => ({
    '&-underlined': Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            {},
            bl(e, {
              borderColor: e.colorBorder,
              hoverBorderHover: e.hoverBorderColor,
              activeBorderColor: e.activeBorderColor,
              activeOutlineColor: e.activeOutlineColor,
              color: e.colorText,
            }),
          ),
          fl(e, {
            status: 'error',
            borderColor: e.colorError,
            hoverBorderHover: e.colorErrorHover,
            activeBorderColor: e.colorError,
            activeOutlineColor: e.colorErrorOutline,
            color: e.colorError,
          }),
        ),
        fl(e, {
          status: 'warning',
          borderColor: e.colorWarning,
          hoverBorderHover: e.colorWarningHover,
          activeBorderColor: e.colorWarning,
          activeOutlineColor: e.colorWarningOutline,
          color: e.colorWarning,
        }),
      ),
      {
        [`&${e.componentCls}-disabled`]: {
          [`&:not(${e.componentCls}-customize-input) ${e.componentCls}-selector`]:
            { color: e.colorTextDisabled },
        },
        [`&${e.componentCls}-multiple ${e.componentCls}-selection-item`]: {
          background: e.multipleItemBg,
          border: `${I(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`,
        },
      },
    ),
  }),
  $l = (e) => ({
    [e.componentCls]: Object.assign(
      Object.assign(Object.assign(Object.assign({}, dl(e)), ml(e)), gl(e)),
      hl(e),
    ),
  }),
  vl = (e) => {
    const { componentCls: t } = e;
    return {
      position: 'relative',
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      input: { cursor: 'pointer' },
      [`${t}-show-search&`]: {
        cursor: 'text',
        input: { cursor: 'auto', color: 'inherit', height: '100%' },
      },
      [`${t}-disabled&`]: {
        cursor: 'not-allowed',
        input: { cursor: 'not-allowed' },
      },
    };
  },
  yl = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-selection-search-input`]: {
        margin: 0,
        padding: 0,
        background: 'transparent',
        border: 'none',
        outline: 'none',
        appearance: 'none',
        fontFamily: 'inherit',
        '&::-webkit-search-cancel-button': {
          display: 'none',
          appearance: 'none',
        },
      },
    };
  },
  xl = (e) => {
    const {
        antCls: t,
        componentCls: o,
        inputPaddingHorizontalBase: n,
        iconCls: r,
      } = e,
      i = {
        [`${o}-clear`]: {
          opacity: 1,
          background: e.colorBgBase,
          borderRadius: '50%',
        },
      };
    return {
      [o]: Object.assign(Object.assign({}, oo(e)), {
        position: 'relative',
        display: 'inline-flex',
        cursor: 'pointer',
        [`&:not(${o}-customize-input) ${o}-selector`]: Object.assign(
          Object.assign({}, vl(e)),
          yl(e),
        ),
        [`${o}-selection-item`]: Object.assign(
          Object.assign(
            {
              flex: 1,
              fontWeight: 'normal',
              position: 'relative',
              userSelect: 'none',
            },
            to,
          ),
          { [`> ${t}-typography`]: { display: 'inline' } },
        ),
        [`${o}-selection-placeholder`]: Object.assign(Object.assign({}, to), {
          flex: 1,
          color: e.colorTextPlaceholder,
          pointerEvents: 'none',
        }),
        [`${o}-arrow`]: Object.assign(
          Object.assign(
            {},
            {
              display: 'inline-flex',
              alignItems: 'center',
              color: 'inherit',
              fontStyle: 'normal',
              lineHeight: 0,
              textAlign: 'center',
              textTransform: 'none',
              verticalAlign: '-0.125em',
              textRendering: 'optimizeLegibility',
              '-webkit-font-smoothing': 'antialiased',
              '-moz-osx-font-smoothing': 'grayscale',
              '> *': { lineHeight: 1 },
              svg: { display: 'inline-block' },
            },
          ),
          {
            position: 'absolute',
            top: '50%',
            insetInlineStart: 'auto',
            insetInlineEnd: n,
            height: e.fontSizeIcon,
            marginTop: e.calc(e.fontSizeIcon).mul(-1).div(2).equal(),
            color: e.colorTextQuaternary,
            fontSize: e.fontSizeIcon,
            lineHeight: 1,
            textAlign: 'center',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            transition: `opacity ${e.motionDurationSlow} ease`,
            [r]: {
              verticalAlign: 'top',
              transition: `transform ${e.motionDurationSlow}`,
              '> svg': { verticalAlign: 'top' },
              [`&:not(${o}-suffix)`]: { pointerEvents: 'auto' },
            },
            [`${o}-disabled &`]: { cursor: 'not-allowed' },
            '> *:not(:last-child)': { marginInlineEnd: 8 },
          },
        ),
        [`${o}-selection-wrap`]: {
          display: 'flex',
          width: '100%',
          position: 'relative',
          minWidth: 0,
          '&:after': { content: '"\\a0"', width: 0, overflow: 'hidden' },
        },
        [`${o}-prefix`]: {
          flex: 'none',
          marginInlineEnd: e.selectAffixPadding,
        },
        [`${o}-clear`]: {
          position: 'absolute',
          top: '50%',
          insetInlineStart: 'auto',
          insetInlineEnd: n,
          zIndex: 1,
          display: 'inline-block',
          width: e.fontSizeIcon,
          height: e.fontSizeIcon,
          marginTop: e.calc(e.fontSizeIcon).mul(-1).div(2).equal(),
          color: e.colorTextQuaternary,
          fontSize: e.fontSizeIcon,
          fontStyle: 'normal',
          lineHeight: 1,
          textAlign: 'center',
          textTransform: 'none',
          cursor: 'pointer',
          opacity: 0,
          transition: `color ${e.motionDurationMid} ease, opacity ${e.motionDurationSlow} ease`,
          textRendering: 'auto',
          transform: 'translateZ(0)',
          '&:before': { display: 'block' },
          '&:hover': { color: e.colorIcon },
        },
        '@media(hover:none)': i,
        '&:hover': i,
      }),
      [`${o}-status`]: {
        '&-error, &-warning, &-success, &-validating': {
          [`&${o}-has-feedback`]: {
            [`${o}-clear`]: {
              insetInlineEnd: e
                .calc(n)
                .add(e.fontSize)
                .add(e.paddingXS)
                .equal(),
            },
          },
        },
      },
    };
  },
  Cl = (e) => {
    const { componentCls: t } = e;
    return [
      { [t]: { [`&${t}-in-form-item`]: { width: '100%' } } },
      xl(e),
      ll(e),
      il(e),
      el(e),
      { [`${t}-rtl`]: { direction: 'rtl' } },
      Vr(e, { borderElCls: `${t}-selector`, focusElCls: `${t}-focused` }),
    ];
  },
  Sl = lo(
    'Select',
    (e, { rootPrefixCls: t }) => {
      const o = T(e, {
        rootPrefixCls: t,
        inputPaddingHorizontalBase: e.calc(e.paddingSM).sub(1).equal(),
        multipleSelectItemHeight: e.multipleItemHeight,
        selectHeight: e.controlHeight,
      });
      return [Cl(o), $l(o)];
    },
    (e) => {
      const {
          fontSize: t,
          lineHeight: o,
          lineWidth: n,
          controlHeight: r,
          controlHeightSM: i,
          controlHeightLG: a,
          paddingXXS: l,
          controlPaddingHorizontal: s,
          zIndexPopupBase: c,
          colorText: d,
          fontWeightStrong: u,
          controlItemBgActive: p,
          controlItemBgHover: m,
          colorBgContainer: g,
          colorFillSecondary: b,
          colorBgContainerDisabled: f,
          colorTextDisabled: h,
          colorPrimaryHover: $,
          colorPrimary: v,
          controlOutline: y,
        } = e,
        x = 2 * l,
        C = 2 * n,
        S = Math.min(r - x, r - C),
        O = Math.min(i - x, i - C),
        k = Math.min(a - x, a - C);
      return {
        INTERNAL_FIXED_ITEM_MARGIN: Math.floor(l / 2),
        zIndexPopup: c + 50,
        optionSelectedColor: d,
        optionSelectedFontWeight: u,
        optionSelectedBg: p,
        optionActiveBg: m,
        optionPadding: `${(r - t * o) / 2}px ${s}px`,
        optionFontSize: t,
        optionLineHeight: o,
        optionHeight: r,
        selectorBg: g,
        clearBg: g,
        singleItemHeightLG: a,
        multipleItemBg: b,
        multipleItemBorderColor: 'transparent',
        multipleItemHeight: S,
        multipleItemHeightSM: O,
        multipleItemHeightLG: k,
        multipleSelectorBgDisabled: f,
        multipleItemColorDisabled: h,
        multipleItemBorderColorDisabled: 'transparent',
        showArrowPaddingInlineEnd: Math.ceil(1.25 * e.fontSize),
        hoverBorderColor: $,
        activeBorderColor: v,
        activeOutlineColor: y,
        selectAffixPadding: l,
      };
    },
    { unitless: { optionLineHeight: !0, optionSelectedFontWeight: !0 } },
  );
function Ol({
  suffixIcon: e,
  clearIcon: t,
  menuItemSelectedIcon: o,
  removeIcon: n,
  loading: r,
  multiple: i,
  hasFeedback: a,
  prefixCls: l,
  showSuffixIcon: s,
  feedbackIcon: c,
  showArrow: d,
  componentName: u,
}) {
  const p = null != t ? t : le.createElement(F, null),
    m = (t) =>
      null !== e || a || d
        ? le.createElement(le.Fragment, null, !1 !== s && t, a && c)
        : null;
  let g = null;
  if (void 0 !== e) g = m(e);
  else if (r) g = m(le.createElement(N, { spin: !0 }));
  else {
    const e = `${l}-suffix`;
    g = ({ open: t, showSearch: o }) =>
      m(
        t && o
          ? le.createElement(_, { className: e })
          : le.createElement(G, { className: e }),
      );
  }
  let b = null;
  b = void 0 !== o ? o : i ? le.createElement(W, null) : null;
  let f = null;
  return (
    (f = void 0 !== n ? n : le.createElement(H, null)),
    { clearIcon: p, suffixIcon: g, itemIcon: b, removeIcon: f }
  );
}
const kl = 'SECRET_COMBOBOX_MODE_DO_NOT_USE',
  wl = (e, t) => {
    var o, n, r, i, a;
    const {
        prefixCls: l,
        bordered: s,
        className: c,
        rootClassName: d,
        getPopupContainer: u,
        popupClassName: p,
        dropdownClassName: m,
        listHeight: g = 256,
        placement: b,
        listItemHeight: f,
        size: $,
        disabled: v,
        notFoundContent: y,
        status: x,
        builtinPlacements: C,
        dropdownMatchSelectWidth: S,
        popupMatchSelectWidth: O,
        direction: k,
        style: w,
        allowClear: E,
        variant: j,
        dropdownStyle: I,
        transitionName: P,
        tagRender: B,
        maxCount: z,
        prefix: M,
        dropdownRender: H,
        popupRender: T,
        onDropdownVisibleChange: R,
        onOpenChange: N,
        styles: L,
        classNames: F,
      } = e,
      A = (function (e, t) {
        var o = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (o[n] = e[n]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            t.indexOf(n[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
              (o[n[r]] = e[n[r]]);
        }
        return o;
      })(e, [
        'prefixCls',
        'bordered',
        'className',
        'rootClassName',
        'getPopupContainer',
        'popupClassName',
        'dropdownClassName',
        'listHeight',
        'placement',
        'listItemHeight',
        'size',
        'disabled',
        'notFoundContent',
        'status',
        'builtinPlacements',
        'dropdownMatchSelectWidth',
        'popupMatchSelectWidth',
        'direction',
        'style',
        'allowClear',
        'variant',
        'dropdownStyle',
        'transitionName',
        'tagRender',
        'maxCount',
        'prefix',
        'dropdownRender',
        'popupRender',
        'onDropdownVisibleChange',
        'onOpenChange',
        'styles',
        'classNames',
      ]),
      {
        getPopupContainer: D,
        getPrefixCls: W,
        renderEmpty: _,
        direction: G,
        virtual: q,
        popupMatchSelectWidth: X,
        popupOverflow: V,
      } = le.useContext(Tt),
      {
        showSearch: K,
        style: U,
        styles: Y,
        className: Q,
        classNames: Z,
      } = Lt('select'),
      [, J] = eo(),
      ee = null != f ? f : null == J ? void 0 : J.controlHeight,
      te = W('select', l),
      oe = W(),
      ne = null != k ? k : G,
      { compactSize: re, compactItemClassnames: ie } = Cn(te, ne),
      [ae, ce] = Qa('select', j, s),
      ue = Bo(te),
      [pe, me, ge] = Sl(te, ue),
      be = le.useMemo(() => {
        const { mode: t } = e;
        if ('combobox' !== t) return t === kl ? 'combobox' : t;
      }, [e.mode]),
      fe = 'multiple' === be || 'tags' === be,
      he = (function (e, t) {
        return void 0 !== t ? t : null !== e;
      })(e.suffixIcon, e.showArrow),
      $e = null !== (o = null != O ? O : S) && void 0 !== o ? o : X,
      ve =
        (null === (n = null == L ? void 0 : L.popup) || void 0 === n
          ? void 0
          : n.root) ||
        (null === (r = Y.popup) || void 0 === r ? void 0 : r.root) ||
        I,
      ye =
        ((xe = T || H),
        se.useMemo(() => {
          if (xe)
            return (...e) =>
              se.createElement(ci, { space: !0 }, xe.apply(void 0, e));
        }, [xe]));
    var xe;
    const Ce = N || R,
      {
        status: Se,
        hasFeedback: Oe,
        isFormItemInput: ke,
        feedbackIcon: we,
      } = le.useContext(ai),
      je = _a(Se, x);
    let Ie;
    Ie =
      void 0 !== y
        ? y
        : 'combobox' === be
          ? null
          : (null == _ ? void 0 : _('Select')) ||
            le.createElement(Ya, { componentName: 'Select' });
    const {
        suffixIcon: Pe,
        itemIcon: Be,
        removeIcon: ze,
        clearIcon: Me,
      } = Ol(
        Object.assign(Object.assign({}, A), {
          multiple: fe,
          hasFeedback: Oe,
          feedbackIcon: we,
          showSuffixIcon: he,
          prefixCls: te,
          componentName: 'Select',
        }),
      ),
      He = !0 === E ? { clearIcon: Me } : E,
      Te = h(A, ['suffixIcon', 'itemIcon']),
      Re = de(
        (null === (i = null == F ? void 0 : F.popup) || void 0 === i
          ? void 0
          : i.root) ||
          (null === (a = null == Z ? void 0 : Z.popup) || void 0 === a
            ? void 0
            : a.root) ||
          p ||
          m,
        { [`${te}-dropdown-${ne}`]: 'rtl' === ne },
        d,
        Z.root,
        null == F ? void 0 : F.root,
        ge,
        ue,
        me,
      ),
      Ne = hn((e) => {
        var t;
        return null !== (t = null != $ ? $ : re) && void 0 !== t ? t : e;
      }),
      Le = le.useContext(Dt),
      Fe = null != v ? v : Le,
      Ae = de(
        {
          [`${te}-lg`]: 'large' === Ne,
          [`${te}-sm`]: 'small' === Ne,
          [`${te}-rtl`]: 'rtl' === ne,
          [`${te}-${ae}`]: ce,
          [`${te}-in-form-item`]: ke,
        },
        Wa(te, je, Oe),
        ie,
        Q,
        c,
        Z.root,
        null == F ? void 0 : F.root,
        d,
        ge,
        ue,
        me,
      ),
      De = le.useMemo(
        () => (void 0 !== b ? b : 'rtl' === ne ? 'bottomRight' : 'bottomLeft'),
        [b, ne],
      ),
      [We] = Vo('SelectLike', null == ve ? void 0 : ve.zIndex);
    return pe(
      le.createElement(
        Ee,
        Object.assign({ ref: t, virtual: q, showSearch: K }, Te, {
          style: Object.assign(
            Object.assign(
              Object.assign(
                Object.assign({}, Y.root),
                null == L ? void 0 : L.root,
              ),
              U,
            ),
            w,
          ),
          dropdownMatchSelectWidth: $e,
          transitionName: sn(oe, 'slide-up', P),
          builtinPlacements: Za(C, V),
          listHeight: g,
          listItemHeight: ee,
          mode: be,
          prefixCls: te,
          placement: De,
          direction: ne,
          prefix: M,
          suffixIcon: Pe,
          menuItemSelectedIcon: Be,
          removeIcon: ze,
          allowClear: He,
          notFoundContent: Ie,
          className: Ae,
          getPopupContainer: u || D,
          dropdownClassName: Re,
          disabled: Fe,
          dropdownStyle: Object.assign(Object.assign({}, ve), { zIndex: We }),
          maxCount: fe ? z : void 0,
          tagRender: fe ? B : void 0,
          dropdownRender: ye,
          onDropdownVisibleChange: Ce,
        }),
      ),
    );
  },
  El = le.forwardRef(wl),
  jl = Da(El, 'dropdownAlign');
((El.SECRET_COMBOBOX_MODE_DO_NOT_USE = kl),
  (El.Option = je),
  (El.OptGroup = Ie),
  (El._InternalPanelDoNotUseOrYouWillBeFired = jl));
const Il = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
  Pl = () => {
    const [, e] = eo(),
      t = ((e) => ({
        xs: `(max-width: ${e.screenXSMax}px)`,
        sm: `(min-width: ${e.screenSM}px)`,
        md: `(min-width: ${e.screenMD}px)`,
        lg: `(min-width: ${e.screenLG}px)`,
        xl: `(min-width: ${e.screenXL}px)`,
        xxl: `(min-width: ${e.screenXXL}px)`,
      }))(
        ((e) => {
          const t = e,
            o = [].concat(Il).reverse();
          return (
            o.forEach((e, n) => {
              const r = e.toUpperCase(),
                i = `screen${r}Min`,
                a = `screen${r}`;
              if (!(t[i] <= t[a]))
                throw new Error(`${i}<=${a} fails : !(${t[i]}<=${t[a]})`);
              if (n < o.length - 1) {
                const e = `screen${r}Max`;
                if (!(t[a] <= t[e]))
                  throw new Error(`${a}<=${e} fails : !(${t[a]}<=${t[e]})`);
                const i = `screen${o[n + 1].toUpperCase()}Min`;
                if (!(t[e] <= t[i]))
                  throw new Error(`${e}<=${i} fails : !(${t[e]}<=${t[i]})`);
              }
            }),
            e
          );
        })(e),
      );
    return se.useMemo(() => {
      const e = new Map();
      let o = -1,
        n = {};
      return {
        responsiveMap: t,
        matchHandlers: {},
        dispatch: (t) => ((n = t), e.forEach((e) => e(n)), e.size >= 1),
        subscribe(t) {
          return (e.size || this.register(), (o += 1), e.set(o, t), t(n), o);
        },
        unsubscribe(t) {
          (e.delete(t), e.size || this.unregister());
        },
        register() {
          Object.entries(t).forEach(([e, t]) => {
            const o = ({ matches: t }) => {
                this.dispatch(Object.assign(Object.assign({}, n), { [e]: t }));
              },
              r = window.matchMedia(t);
            (((e, t) => {
              void 0 !== (null == e ? void 0 : e.addEventListener)
                ? e.addEventListener('change', t)
                : void 0 !== (null == e ? void 0 : e.addListener) &&
                  e.addListener(t);
            })(r, o),
              (this.matchHandlers[t] = { mql: r, listener: o }),
              o(r));
          });
        },
        unregister() {
          (Object.values(t).forEach((e) => {
            const t = this.matchHandlers[e];
            ((e, t) => {
              void 0 !== (null == e ? void 0 : e.removeEventListener)
                ? e.removeEventListener('change', t)
                : void 0 !== (null == e ? void 0 : e.removeListener) &&
                  e.removeListener(t);
            })(null == t ? void 0 : t.mql, null == t ? void 0 : t.listener);
          }),
            e.clear());
        },
      };
    }, [t]);
  };
function Bl(e = !0, t = {}) {
  const o = le.useRef(t),
    [, n] = se.useReducer((e) => e + 1, 0),
    r = Pl();
  return (
    f(() => {
      const t = r.subscribe((t) => {
        ((o.current = t), e && n());
      });
      return () => r.unsubscribe(t);
    }, []),
    o.current
  );
}
const zl = (e) => (e ? ('function' == typeof e ? e() : e) : null);
function Ml(e) {
  const { sizePopupArrow: t, borderRadiusXS: o, borderRadiusOuter: n } = e,
    r = t / 2,
    i = r,
    a = (1 * n) / Math.sqrt(2),
    l = r - n * (1 - 1 / Math.sqrt(2)),
    s = r - o * (1 / Math.sqrt(2)),
    c = n * (Math.sqrt(2) - 1) + o * (1 / Math.sqrt(2)),
    d = 2 * r - s,
    u = c,
    p = 2 * r - a,
    m = l,
    g = 2 * r - 0,
    b = i,
    f = r * Math.sqrt(2) + n * (Math.sqrt(2) - 2),
    h = n * (Math.sqrt(2) - 1);
  return {
    arrowShadowWidth: f,
    arrowPath: `path('M 0 ${i} A ${n} ${n} 0 0 0 ${a} ${l} L ${s} ${c} A ${o} ${o} 0 0 1 ${d} ${u} L ${p} ${m} A ${n} ${n} 0 0 0 ${g} ${b} Z')`,
    arrowPolygon: `polygon(${h}px 100%, 50% ${h}px, ${2 * r - h}px 100%, ${h}px 100%)`,
  };
}
const Hl = (e, t, o) => {
  const {
    sizePopupArrow: n,
    arrowPolygon: r,
    arrowPath: i,
    arrowShadowWidth: a,
    borderRadiusXS: l,
    calc: s,
  } = e;
  return {
    pointerEvents: 'none',
    width: n,
    height: n,
    overflow: 'hidden',
    '&::before': {
      position: 'absolute',
      bottom: 0,
      insetInlineStart: 0,
      width: n,
      height: s(n).div(2).equal(),
      background: t,
      clipPath: { _multi_value_: !0, value: [r, i] },
      content: '""',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      width: a,
      height: a,
      bottom: 0,
      insetInline: 0,
      margin: 'auto',
      borderRadius: { _skip_check_: !0, value: `0 0 ${I(l)} 0` },
      transform: 'translateY(50%) rotate(-135deg)',
      boxShadow: o,
      zIndex: 0,
      background: 'transparent',
    },
  };
};
function Tl(e) {
  const { contentRadius: t, limitVerticalRadius: o } = e,
    n = t > 12 ? t + 2 : 12;
  return { arrowOffsetHorizontal: n, arrowOffsetVertical: o ? 8 : n };
}
function Rl(e, t) {
  return e ? t : {};
}
function Nl(e, t, o) {
  const {
      componentCls: n,
      boxShadowPopoverArrow: r,
      arrowOffsetVertical: i,
      arrowOffsetHorizontal: a,
    } = e,
    {
      arrowDistance: l = 0,
      arrowPlacement: s = { left: !0, right: !0, top: !0, bottom: !0 },
    } = {};
  return {
    [n]: Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            {
              [`${n}-arrow`]: [
                Object.assign(
                  Object.assign(
                    { position: 'absolute', zIndex: 1, display: 'block' },
                    Hl(e, t, r),
                  ),
                  { '&:before': { background: t } },
                ),
              ],
            },
            Rl(!!s.top, {
              [[
                `&-placement-top > ${n}-arrow`,
                `&-placement-topLeft > ${n}-arrow`,
                `&-placement-topRight > ${n}-arrow`,
              ].join(',')]: {
                bottom: l,
                transform: 'translateY(100%) rotate(180deg)',
              },
              [`&-placement-top > ${n}-arrow`]: {
                left: { _skip_check_: !0, value: '50%' },
                transform: 'translateX(-50%) translateY(100%) rotate(180deg)',
              },
              '&-placement-topLeft': {
                '--arrow-offset-horizontal': a,
                [`> ${n}-arrow`]: { left: { _skip_check_: !0, value: a } },
              },
              '&-placement-topRight': {
                '--arrow-offset-horizontal': `calc(100% - ${I(a)})`,
                [`> ${n}-arrow`]: { right: { _skip_check_: !0, value: a } },
              },
            }),
          ),
          Rl(!!s.bottom, {
            [[
              `&-placement-bottom > ${n}-arrow`,
              `&-placement-bottomLeft > ${n}-arrow`,
              `&-placement-bottomRight > ${n}-arrow`,
            ].join(',')]: { top: l, transform: 'translateY(-100%)' },
            [`&-placement-bottom > ${n}-arrow`]: {
              left: { _skip_check_: !0, value: '50%' },
              transform: 'translateX(-50%) translateY(-100%)',
            },
            '&-placement-bottomLeft': {
              '--arrow-offset-horizontal': a,
              [`> ${n}-arrow`]: { left: { _skip_check_: !0, value: a } },
            },
            '&-placement-bottomRight': {
              '--arrow-offset-horizontal': `calc(100% - ${I(a)})`,
              [`> ${n}-arrow`]: { right: { _skip_check_: !0, value: a } },
            },
          }),
        ),
        Rl(!!s.left, {
          [[
            `&-placement-left > ${n}-arrow`,
            `&-placement-leftTop > ${n}-arrow`,
            `&-placement-leftBottom > ${n}-arrow`,
          ].join(',')]: {
            right: { _skip_check_: !0, value: l },
            transform: 'translateX(100%) rotate(90deg)',
          },
          [`&-placement-left > ${n}-arrow`]: {
            top: { _skip_check_: !0, value: '50%' },
            transform: 'translateY(-50%) translateX(100%) rotate(90deg)',
          },
          [`&-placement-leftTop > ${n}-arrow`]: { top: i },
          [`&-placement-leftBottom > ${n}-arrow`]: { bottom: i },
        }),
      ),
      Rl(!!s.right, {
        [[
          `&-placement-right > ${n}-arrow`,
          `&-placement-rightTop > ${n}-arrow`,
          `&-placement-rightBottom > ${n}-arrow`,
        ].join(',')]: {
          left: { _skip_check_: !0, value: l },
          transform: 'translateX(-100%) rotate(-90deg)',
        },
        [`&-placement-right > ${n}-arrow`]: {
          top: { _skip_check_: !0, value: '50%' },
          transform: 'translateY(-50%) translateX(-100%) rotate(-90deg)',
        },
        [`&-placement-rightTop > ${n}-arrow`]: { top: i },
        [`&-placement-rightBottom > ${n}-arrow`]: { bottom: i },
      }),
    ),
  };
}
const Ll = {
    left: { points: ['cr', 'cl'] },
    right: { points: ['cl', 'cr'] },
    top: { points: ['bc', 'tc'] },
    bottom: { points: ['tc', 'bc'] },
    topLeft: { points: ['bl', 'tl'] },
    leftTop: { points: ['tr', 'tl'] },
    topRight: { points: ['br', 'tr'] },
    rightTop: { points: ['tl', 'tr'] },
    bottomRight: { points: ['tr', 'br'] },
    rightBottom: { points: ['bl', 'br'] },
    bottomLeft: { points: ['tl', 'bl'] },
    leftBottom: { points: ['br', 'bl'] },
  },
  Fl = {
    topLeft: { points: ['bl', 'tc'] },
    leftTop: { points: ['tr', 'cl'] },
    topRight: { points: ['br', 'tc'] },
    rightTop: { points: ['tl', 'cr'] },
    bottomRight: { points: ['tr', 'bc'] },
    rightBottom: { points: ['bl', 'cr'] },
    bottomLeft: { points: ['tl', 'bc'] },
    leftBottom: { points: ['br', 'cl'] },
  },
  Al = new Set([
    'topLeft',
    'topRight',
    'bottomLeft',
    'bottomRight',
    'leftTop',
    'leftBottom',
    'rightTop',
    'rightBottom',
  ]);
function Dl(e) {
  const {
      arrowWidth: t,
      autoAdjustOverflow: o,
      arrowPointAtCenter: n,
      offset: r,
      borderRadius: i,
    } = e,
    a = t / 2,
    l = {},
    s = Tl({ contentRadius: i, limitVerticalRadius: !0 });
  return (
    Object.keys(Ll).forEach((e) => {
      const i = (n && Fl[e]) || Ll[e],
        c = Object.assign(Object.assign({}, i), {
          offset: [0, 0],
          dynamicInset: !0,
        });
      switch (((l[e] = c), Al.has(e) && (c.autoArrow = !1), e)) {
        case 'top':
        case 'topLeft':
        case 'topRight':
          c.offset[1] = -a - r;
          break;
        case 'bottom':
        case 'bottomLeft':
        case 'bottomRight':
          c.offset[1] = a + r;
          break;
        case 'left':
        case 'leftTop':
        case 'leftBottom':
          c.offset[0] = -a - r;
          break;
        case 'right':
        case 'rightTop':
        case 'rightBottom':
          c.offset[0] = a + r;
      }
      if (n)
        switch (e) {
          case 'topLeft':
          case 'bottomLeft':
            c.offset[0] = -s.arrowOffsetHorizontal - a;
            break;
          case 'topRight':
          case 'bottomRight':
            c.offset[0] = s.arrowOffsetHorizontal + a;
            break;
          case 'leftTop':
          case 'rightTop':
            c.offset[1] = 2 * -s.arrowOffsetHorizontal + a;
            break;
          case 'leftBottom':
          case 'rightBottom':
            c.offset[1] = 2 * s.arrowOffsetHorizontal - a;
        }
      ((c.overflow = (function (e, t, o, n) {
        if (!1 === n) return { adjustX: !1, adjustY: !1 };
        const r = n && 'object' == typeof n ? n : {},
          i = {};
        switch (e) {
          case 'top':
          case 'bottom':
            ((i.shiftX = 2 * t.arrowOffsetHorizontal + o),
              (i.shiftY = !0),
              (i.adjustY = !0));
            break;
          case 'left':
          case 'right':
            ((i.shiftY = 2 * t.arrowOffsetVertical + o),
              (i.shiftX = !0),
              (i.adjustX = !0));
        }
        const a = Object.assign(Object.assign({}, i), r);
        return (a.shiftX || (a.adjustX = !0), a.shiftY || (a.adjustY = !0), a);
      })(e, s, t, o)),
        (c.htmlRegion = 'visibleFirst'));
    }),
    l
  );
}
const Wl = (e) => {
    const {
        calc: t,
        componentCls: o,
        tooltipMaxWidth: n,
        tooltipColor: r,
        tooltipBg: i,
        tooltipBorderRadius: a,
        zIndexPopup: l,
        controlHeight: s,
        boxShadowSecondary: c,
        paddingSM: d,
        paddingXS: u,
        arrowOffsetHorizontal: p,
        sizePopupArrow: m,
      } = e,
      g = t(a).add(m).add(p).equal(),
      b = t(a).mul(2).add(m).equal();
    return [
      {
        [o]: Object.assign(
          Object.assign(
            Object.assign(Object.assign({}, oo(e)), {
              position: 'absolute',
              zIndex: l,
              display: 'block',
              width: 'max-content',
              maxWidth: n,
              visibility: 'visible',
              '--valid-offset-x':
                'var(--arrow-offset-horizontal, var(--arrow-x))',
              transformOrigin: [
                'var(--valid-offset-x, 50%)',
                'var(--arrow-y, 50%)',
              ].join(' '),
              '&-hidden': { display: 'none' },
              '--antd-arrow-background-color': i,
              [`${o}-inner`]: {
                minWidth: b,
                minHeight: s,
                padding: `${I(e.calc(d).div(2).equal())} ${I(u)}`,
                color: `var(--ant-tooltip-color, ${r})`,
                textAlign: 'start',
                textDecoration: 'none',
                wordWrap: 'break-word',
                backgroundColor: i,
                borderRadius: a,
                boxShadow: c,
                boxSizing: 'border-box',
              },
              [[
                '&-placement-topLeft',
                '&-placement-topRight',
                '&-placement-bottomLeft',
                '&-placement-bottomRight',
              ].join(',')]: { minWidth: g },
              [[
                '&-placement-left',
                '&-placement-leftTop',
                '&-placement-leftBottom',
                '&-placement-right',
                '&-placement-rightTop',
                '&-placement-rightBottom',
              ].join(',')]: { [`${o}-inner`]: { borderRadius: e.min(a, 8) } },
              [`${o}-content`]: { position: 'relative' },
            }),
            uo(e, (e, { darkColor: t }) => ({
              [`&${o}-${e}`]: {
                [`${o}-inner`]: { backgroundColor: t },
                [`${o}-arrow`]: { '--antd-arrow-background-color': t },
              },
            })),
          ),
          { '&-rtl': { direction: 'rtl' } },
        ),
      },
      Nl(e, 'var(--antd-arrow-background-color)'),
      {
        [`${o}-pure`]: {
          position: 'relative',
          maxWidth: 'none',
          margin: e.sizePopupArrow,
        },
      },
    ];
  },
  _l = (e) =>
    Object.assign(
      Object.assign(
        { zIndexPopup: e.zIndexPopupBase + 70 },
        Tl({ contentRadius: e.borderRadius, limitVerticalRadius: !0 }),
      ),
      Ml(T(e, { borderRadiusOuter: Math.min(e.borderRadiusOuter, 4) })),
    ),
  Gl = (e, t = !0) =>
    lo(
      'Tooltip',
      (e) => {
        const {
            borderRadius: t,
            colorTextLightSolid: o,
            colorBgSpotlight: n,
          } = e,
          r = T(e, {
            tooltipMaxWidth: 250,
            tooltipColor: o,
            tooltipBorderRadius: t,
            tooltipBg: n,
          });
        return [Wl(r), hr(e, 'zoom-big-fast')];
      },
      _l,
      { resetStyle: !1, injectStyle: t },
    )(e),
  ql = qt.map((e) => `${e}-inverse`),
  Xl = ['success', 'processing', 'error', 'default', 'warning'];
function Vl(e, t = !0) {
  return t ? [].concat(ze(ql), ze(qt)).includes(e) : qt.includes(e);
}
function Kl(e, t) {
  const o = Vl(t),
    n = de({ [`${e}-${t}`]: t && o }),
    r = {},
    i = {},
    a = ((e) => (e instanceof Fn ? e : new Fn(e)))(t).toRgb(),
    l = (0.299 * a.r + 0.587 * a.g + 0.114 * a.b) / 255 < 0.5 ? '#FFF' : '#000';
  return (
    t &&
      !o &&
      ((r.background = t),
      (r['--ant-tooltip-color'] = l),
      (i['--antd-arrow-background-color'] = t)),
    { className: n, overlayStyle: r, arrowStyle: i }
  );
}
const Ul = le.forwardRef((e, t) => {
  var o, n;
  const {
      prefixCls: r,
      openClassName: i,
      getTooltipContainer: a,
      color: l,
      overlayInnerStyle: s,
      children: c,
      afterOpenChange: d,
      afterVisibleChange: u,
      destroyTooltipOnHide: p,
      destroyOnHidden: m,
      arrow: g = !0,
      title: b,
      overlay: f,
      builtinPlacements: h,
      arrowPointAtCenter: $ = !1,
      autoAdjustOverflow: y = !0,
      motion: x,
      getPopupContainer: C,
      placement: S = 'top',
      mouseEnterDelay: O = 0.1,
      mouseLeaveDelay: k = 0.1,
      overlayStyle: w,
      rootClassName: E,
      overlayClassName: j,
      styles: I,
      classNames: P,
    } = e,
    B = (function (e, t) {
      var o = {};
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) &&
          t.indexOf(n) < 0 &&
          (o[n] = e[n]);
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var r = 0;
        for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
          t.indexOf(n[r]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
            (o[n[r]] = e[n[r]]);
      }
      return o;
    })(e, [
      'prefixCls',
      'openClassName',
      'getTooltipContainer',
      'color',
      'overlayInnerStyle',
      'children',
      'afterOpenChange',
      'afterVisibleChange',
      'destroyTooltipOnHide',
      'destroyOnHidden',
      'arrow',
      'title',
      'overlay',
      'builtinPlacements',
      'arrowPointAtCenter',
      'autoAdjustOverflow',
      'motion',
      'getPopupContainer',
      'placement',
      'mouseEnterDelay',
      'mouseLeaveDelay',
      'overlayStyle',
      'rootClassName',
      'overlayClassName',
      'styles',
      'classNames',
    ]),
    z = !!g,
    [, M] = eo(),
    {
      getPopupContainer: H,
      getPrefixCls: T,
      direction: R,
      className: N,
      style: L,
      classNames: F,
      styles: A,
    } = Lt('tooltip'),
    D = at(),
    W = le.useRef(null),
    _ = () => {
      var e;
      null === (e = W.current) || void 0 === e || e.forceAlign();
    };
  le.useImperativeHandle(t, () => {
    var e, t;
    return {
      forceAlign: _,
      forcePopupAlign: () => {
        (D.deprecated(!1, 'forcePopupAlign', 'forceAlign'), _());
      },
      nativeElement:
        null === (e = W.current) || void 0 === e ? void 0 : e.nativeElement,
      popupElement:
        null === (t = W.current) || void 0 === t ? void 0 : t.popupElement,
    };
  });
  const [G, q] = v(!1, {
      value: null !== (o = e.open) && void 0 !== o ? o : e.visible,
      defaultValue:
        null !== (n = e.defaultOpen) && void 0 !== n ? n : e.defaultVisible,
    }),
    X = !b && !f && 0 !== b,
    V = le.useMemo(() => {
      var e, t;
      let o = $;
      return (
        'object' == typeof g &&
          (o =
            null !==
              (t =
                null !== (e = g.pointAtCenter) && void 0 !== e
                  ? e
                  : g.arrowPointAtCenter) && void 0 !== t
              ? t
              : $),
        h ||
          Dl({
            arrowPointAtCenter: o,
            autoAdjustOverflow: y,
            arrowWidth: z ? M.sizePopupArrow : 0,
            borderRadius: M.borderRadius,
            offset: M.marginXXS,
          })
      );
    }, [$, g, h, M]),
    K = le.useMemo(() => (0 === b ? b : f || b || ''), [f, b]),
    U = le.createElement(ci, { space: !0 }, 'function' == typeof K ? K() : K),
    Y = T('tooltip', r),
    Q = T(),
    Z = e['data-popover-inject'];
  let J = G;
  'open' in e || 'visible' in e || !X || (J = !1);
  const ee =
      le.isValidElement(c) && !jo(c) ? c : le.createElement('span', null, c),
    te = ee.props,
    oe =
      te.className && 'string' != typeof te.className
        ? te.className
        : de(te.className, i || `${Y}-open`),
    [ne, re, ie] = Gl(Y, !Z),
    ae = Kl(Y, l),
    se = ae.arrowStyle,
    ce = de(
      j,
      { [`${Y}-rtl`]: 'rtl' === R },
      ae.className,
      E,
      re,
      ie,
      N,
      F.root,
      null == P ? void 0 : P.root,
    ),
    ue = de(F.body, null == P ? void 0 : P.body),
    [pe, me] = Vo('Tooltip', B.zIndex),
    ge = le.createElement(
      tt,
      Object.assign({}, B, {
        zIndex: pe,
        showArrow: z,
        placement: S,
        mouseEnterDelay: O,
        mouseLeaveDelay: k,
        prefixCls: Y,
        classNames: { root: ce, body: ue },
        styles: {
          root: Object.assign(
            Object.assign(
              Object.assign(Object.assign(Object.assign({}, se), A.root), L),
              w,
            ),
            null == I ? void 0 : I.root,
          ),
          body: Object.assign(
            Object.assign(
              Object.assign(Object.assign({}, A.body), s),
              null == I ? void 0 : I.body,
            ),
            ae.overlayStyle,
          ),
        },
        getTooltipContainer: C || a || H,
        ref: W,
        builtinPlacements: V,
        overlay: U,
        visible: J,
        onVisibleChange: (t) => {
          var o, n;
          (q(!X && t),
            X ||
              (null === (o = e.onOpenChange) || void 0 === o || o.call(e, t),
              null === (n = e.onVisibleChange) ||
                void 0 === n ||
                n.call(e, t)));
        },
        afterVisibleChange: null != d ? d : u,
        arrowContent: le.createElement('span', {
          className: `${Y}-arrow-content`,
        }),
        motion: {
          motionName: sn(Q, 'zoom-big-fast', e.transitionName),
          motionDeadline: 1e3,
        },
        destroyTooltipOnHide: null != m ? m : !!p,
      }),
      J ? Po(ee, { className: oe }) : ee,
    );
  return ne(le.createElement(Wo.Provider, { value: me }, ge));
});
Ul._InternalPanelDoNotUseOrYouWillBeFired = (e) => {
  const {
      prefixCls: t,
      className: o,
      placement: n = 'top',
      title: r,
      color: i,
      overlayInnerStyle: a,
    } = e,
    { getPrefixCls: l } = le.useContext(Tt),
    s = l('tooltip', t),
    [c, d, u] = Gl(s),
    p = Kl(s, i),
    m = p.arrowStyle,
    g = Object.assign(Object.assign({}, a), p.overlayStyle),
    b = de(d, u, s, `${s}-pure`, `${s}-placement-${n}`, o, p.className);
  return c(
    le.createElement(
      'div',
      { className: b, style: m },
      le.createElement('div', { className: `${s}-arrow` }),
      le.createElement(
        et,
        Object.assign({}, e, {
          className: d,
          prefixCls: s,
          overlayInnerStyle: g,
        }),
        r,
      ),
    ),
  );
};
const Yl = (e) => {
    const {
      componentCls: t,
      popoverColor: o,
      titleMinWidth: n,
      fontWeightStrong: r,
      innerPadding: i,
      boxShadowSecondary: a,
      colorTextHeading: l,
      borderRadiusLG: s,
      zIndexPopup: c,
      titleMarginBottom: d,
      colorBgElevated: u,
      popoverBg: p,
      titleBorderBottom: m,
      innerContentPadding: g,
      titlePadding: b,
    } = e;
    return [
      {
        [t]: Object.assign(Object.assign({}, oo(e)), {
          position: 'absolute',
          top: 0,
          left: { _skip_check_: !0, value: 0 },
          zIndex: c,
          fontWeight: 'normal',
          whiteSpace: 'normal',
          textAlign: 'start',
          cursor: 'auto',
          userSelect: 'text',
          '--valid-offset-x': 'var(--arrow-offset-horizontal, var(--arrow-x))',
          transformOrigin: [
            'var(--valid-offset-x, 50%)',
            'var(--arrow-y, 50%)',
          ].join(' '),
          '--antd-arrow-background-color': u,
          width: 'max-content',
          maxWidth: '100vw',
          '&-rtl': { direction: 'rtl' },
          '&-hidden': { display: 'none' },
          [`${t}-content`]: { position: 'relative' },
          [`${t}-inner`]: {
            backgroundColor: p,
            backgroundClip: 'padding-box',
            borderRadius: s,
            boxShadow: a,
            padding: i,
          },
          [`${t}-title`]: {
            minWidth: n,
            marginBottom: d,
            color: l,
            fontWeight: r,
            borderBottom: m,
            padding: b,
          },
          [`${t}-inner-content`]: { color: o, padding: g },
        }),
      },
      Nl(e, 'var(--antd-arrow-background-color)'),
      {
        [`${t}-pure`]: {
          position: 'relative',
          maxWidth: 'none',
          margin: e.sizePopupArrow,
          display: 'inline-block',
          [`${t}-content`]: { display: 'inline-block' },
        },
      },
    ];
  },
  Ql = (e) => {
    const { componentCls: t } = e;
    return {
      [t]: qt.map((o) => {
        const n = e[`${o}6`];
        return {
          [`&${t}-${o}`]: {
            '--antd-arrow-background-color': n,
            [`${t}-inner`]: { backgroundColor: n },
            [`${t}-arrow`]: { background: 'transparent' },
          },
        };
      }),
    };
  },
  Zl = lo(
    'Popover',
    (e) => {
      const { colorBgElevated: t, colorText: o } = e,
        n = T(e, { popoverBg: t, popoverColor: o });
      return [Yl(n), Ql(n), hr(n, 'zoom-big')];
    },
    (e) => {
      const {
          lineWidth: t,
          controlHeight: o,
          fontHeight: n,
          padding: r,
          wireframe: i,
          zIndexPopupBase: a,
          borderRadiusLG: l,
          marginXS: s,
          lineType: c,
          colorSplit: d,
          paddingSM: u,
        } = e,
        p = o - n,
        m = p / 2,
        g = p / 2 - t,
        b = r;
      return Object.assign(
        Object.assign(
          Object.assign({ titleMinWidth: 177, zIndexPopup: a + 30 }, Ml(e)),
          Tl({ contentRadius: l, limitVerticalRadius: !0 }),
        ),
        {
          innerPadding: i ? 0 : 12,
          titleMarginBottom: i ? 0 : s,
          titlePadding: i ? `${m}px ${b}px ${g}px` : 0,
          titleBorderBottom: i ? `${t}px ${c} ${d}` : 'none',
          innerContentPadding: i ? `${u}px ${b}px` : 0,
        },
      );
    },
    {
      resetStyle: !1,
      deprecatedTokens: [
        ['width', 'titleMinWidth'],
        ['minWidth', 'titleMinWidth'],
      ],
    },
  );
const Jl = ({ title: e, content: t, prefixCls: o }) =>
    e || t
      ? le.createElement(
          le.Fragment,
          null,
          e && le.createElement('div', { className: `${o}-title` }, e),
          t && le.createElement('div', { className: `${o}-inner-content` }, t),
        )
      : null,
  es = (e) => {
    const {
        hashId: t,
        prefixCls: o,
        className: n,
        style: r,
        placement: i = 'top',
        title: a,
        content: l,
        children: s,
      } = e,
      c = zl(a),
      d = zl(l),
      u = de(t, o, `${o}-pure`, `${o}-placement-${i}`, n);
    return le.createElement(
      'div',
      { className: u, style: r },
      le.createElement('div', { className: `${o}-arrow` }),
      le.createElement(
        et,
        Object.assign({}, e, { className: t, prefixCls: o }),
        s || le.createElement(Jl, { prefixCls: o, title: c, content: d }),
      ),
    );
  },
  ts = (e) => {
    const { prefixCls: t, className: o } = e,
      n = (function (e, t) {
        var o = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (o[n] = e[n]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            t.indexOf(n[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
              (o[n[r]] = e[n[r]]);
        }
        return o;
      })(e, ['prefixCls', 'className']),
      { getPrefixCls: r } = le.useContext(Tt),
      i = r('popover', t),
      [a, l, s] = Zl(i);
    return a(
      le.createElement(
        es,
        Object.assign({}, n, { prefixCls: i, hashId: l, className: de(o, s) }),
      ),
    );
  };
const os = le.forwardRef((e, t) => {
  var o, n;
  const {
      prefixCls: r,
      title: i,
      content: a,
      overlayClassName: l,
      placement: s = 'top',
      trigger: c = 'hover',
      children: d,
      mouseEnterDelay: u = 0.1,
      mouseLeaveDelay: p = 0.1,
      onOpenChange: m,
      overlayStyle: g = {},
      styles: b,
      classNames: f,
    } = e,
    h = (function (e, t) {
      var o = {};
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) &&
          t.indexOf(n) < 0 &&
          (o[n] = e[n]);
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var r = 0;
        for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
          t.indexOf(n[r]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
            (o[n[r]] = e[n[r]]);
      }
      return o;
    })(e, [
      'prefixCls',
      'title',
      'content',
      'overlayClassName',
      'placement',
      'trigger',
      'children',
      'mouseEnterDelay',
      'mouseLeaveDelay',
      'onOpenChange',
      'overlayStyle',
      'styles',
      'classNames',
    ]),
    {
      getPrefixCls: $,
      className: x,
      style: C,
      classNames: S,
      styles: O,
    } = Lt('popover'),
    k = $('popover', r),
    [w, E, j] = Zl(k),
    I = $(),
    P = de(l, E, j, x, S.root, null == f ? void 0 : f.root),
    B = de(S.body, null == f ? void 0 : f.body),
    [z, M] = v(!1, {
      value: null !== (o = e.open) && void 0 !== o ? o : e.visible,
      defaultValue:
        null !== (n = e.defaultOpen) && void 0 !== n ? n : e.defaultVisible,
    }),
    H = (e, t) => {
      (M(e, !0), null == m || m(e, t));
    },
    T = zl(i),
    R = zl(a);
  return w(
    le.createElement(
      Ul,
      Object.assign(
        { placement: s, trigger: c, mouseEnterDelay: u, mouseLeaveDelay: p },
        h,
        {
          prefixCls: k,
          classNames: { root: P, body: B },
          styles: {
            root: Object.assign(
              Object.assign(Object.assign(Object.assign({}, O.root), C), g),
              null == b ? void 0 : b.root,
            ),
            body: Object.assign(
              Object.assign({}, O.body),
              null == b ? void 0 : b.body,
            ),
          },
          ref: t,
          open: z,
          onOpenChange: (e) => {
            H(e);
          },
          overlay:
            T || R
              ? le.createElement(Jl, { prefixCls: k, title: T, content: R })
              : null,
          transitionName: sn(I, 'zoom-big', h.transitionName),
          'data-popover-inject': !0,
        },
      ),
      Po(d, {
        onKeyDown: (e) => {
          var t, o;
          (le.isValidElement(d) &&
            (null === (o = null == d ? void 0 : (t = d.props).onKeyDown) ||
              void 0 === o ||
              o.call(t, e)),
            ((e) => {
              e.keyCode === y.ESC && H(!1, e);
            })(e));
        },
      }),
    ),
  );
});
os._InternalPanelDoNotUseOrYouWillBeFired = ts;
const ns = le.createContext(null),
  rs = ns.Provider,
  is = le.createContext(null),
  as = is.Provider;
const ls = (e) => {
    const { componentCls: t, antCls: o } = e,
      n = `${t}-group`;
    return {
      [n]: Object.assign(Object.assign({}, oo(e)), {
        display: 'inline-block',
        fontSize: 0,
        [`&${n}-rtl`]: { direction: 'rtl' },
        [`&${n}-block`]: { display: 'flex' },
        [`${o}-badge ${o}-badge-count`]: { zIndex: 1 },
        [`> ${o}-badge:not(:first-child) > ${o}-button-wrapper`]: {
          borderInlineStart: 'none',
        },
      }),
    };
  },
  ss = (e) => {
    const {
        componentCls: t,
        wrapperMarginInlineEnd: o,
        colorPrimary: n,
        radioSize: r,
        motionDurationSlow: i,
        motionDurationMid: a,
        motionEaseInOutCirc: l,
        colorBgContainer: s,
        colorBorder: c,
        lineWidth: d,
        colorBgContainerDisabled: u,
        colorTextDisabled: p,
        paddingXS: m,
        dotColorDisabled: g,
        lineType: b,
        radioColor: f,
        radioBgColor: h,
        calc: $,
      } = e,
      v = `${t}-inner`,
      y = $(r).sub($(4).mul(2)),
      x = $(1).mul(r).equal({ unit: !0 });
    return {
      [`${t}-wrapper`]: Object.assign(Object.assign({}, oo(e)), {
        display: 'inline-flex',
        alignItems: 'baseline',
        marginInlineStart: 0,
        marginInlineEnd: o,
        cursor: 'pointer',
        '&:last-child': { marginInlineEnd: 0 },
        [`&${t}-wrapper-rtl`]: { direction: 'rtl' },
        '&-disabled': { cursor: 'not-allowed', color: e.colorTextDisabled },
        '&::after': {
          display: 'inline-block',
          width: 0,
          overflow: 'hidden',
          content: '"\\a0"',
        },
        '&-block': { flex: 1, justifyContent: 'center' },
        [`${t}-checked::after`]: {
          position: 'absolute',
          insetBlockStart: 0,
          insetInlineStart: 0,
          width: '100%',
          height: '100%',
          border: `${I(d)} ${b} ${n}`,
          borderRadius: '50%',
          visibility: 'hidden',
          opacity: 0,
          content: '""',
        },
        [t]: Object.assign(Object.assign({}, oo(e)), {
          position: 'relative',
          display: 'inline-block',
          outline: 'none',
          cursor: 'pointer',
          alignSelf: 'center',
          borderRadius: '50%',
        }),
        [`${t}-wrapper:hover &,\n        &:hover ${v}`]: { borderColor: n },
        [`${t}-input:focus-visible + ${v}`]: no(e),
        [`${t}:hover::after, ${t}-wrapper:hover &::after`]: {
          visibility: 'visible',
        },
        [`${t}-inner`]: {
          '&::after': {
            boxSizing: 'border-box',
            position: 'absolute',
            insetBlockStart: '50%',
            insetInlineStart: '50%',
            display: 'block',
            width: x,
            height: x,
            marginBlockStart: $(1).mul(r).div(-2).equal({ unit: !0 }),
            marginInlineStart: $(1).mul(r).div(-2).equal({ unit: !0 }),
            backgroundColor: f,
            borderBlockStart: 0,
            borderInlineStart: 0,
            borderRadius: x,
            transform: 'scale(0)',
            opacity: 0,
            transition: `all ${i} ${l}`,
            content: '""',
          },
          boxSizing: 'border-box',
          position: 'relative',
          insetBlockStart: 0,
          insetInlineStart: 0,
          display: 'block',
          width: x,
          height: x,
          backgroundColor: s,
          borderColor: c,
          borderStyle: 'solid',
          borderWidth: d,
          borderRadius: '50%',
          transition: `all ${a}`,
        },
        [`${t}-input`]: {
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          cursor: 'pointer',
          opacity: 0,
        },
        [`${t}-checked`]: {
          [v]: {
            borderColor: n,
            backgroundColor: h,
            '&::after': {
              transform: `scale(${e.calc(e.dotSize).div(r).equal()})`,
              opacity: 1,
              transition: `all ${i} ${l}`,
            },
          },
        },
        [`${t}-disabled`]: {
          cursor: 'not-allowed',
          [v]: {
            backgroundColor: u,
            borderColor: c,
            cursor: 'not-allowed',
            '&::after': { backgroundColor: g },
          },
          [`${t}-input`]: { cursor: 'not-allowed' },
          [`${t}-disabled + span`]: { color: p, cursor: 'not-allowed' },
          [`&${t}-checked`]: {
            [v]: { '&::after': { transform: `scale(${$(y).div(r).equal()})` } },
          },
        },
        [`span${t} + *`]: { paddingInlineStart: m, paddingInlineEnd: m },
      }),
    };
  },
  cs = (e) => {
    const {
      buttonColor: t,
      controlHeight: o,
      componentCls: n,
      lineWidth: r,
      lineType: i,
      colorBorder: a,
      motionDurationMid: l,
      buttonPaddingInline: s,
      fontSize: c,
      buttonBg: d,
      fontSizeLG: u,
      controlHeightLG: p,
      controlHeightSM: m,
      paddingXS: g,
      borderRadius: b,
      borderRadiusSM: f,
      borderRadiusLG: h,
      buttonCheckedBg: $,
      buttonSolidCheckedColor: v,
      colorTextDisabled: y,
      colorBgContainerDisabled: x,
      buttonCheckedBgDisabled: C,
      buttonCheckedColorDisabled: S,
      colorPrimary: O,
      colorPrimaryHover: k,
      colorPrimaryActive: w,
      buttonSolidCheckedBg: E,
      buttonSolidCheckedHoverBg: j,
      buttonSolidCheckedActiveBg: P,
      calc: B,
    } = e;
    return {
      [`${n}-button-wrapper`]: {
        position: 'relative',
        display: 'inline-block',
        height: o,
        margin: 0,
        paddingInline: s,
        paddingBlock: 0,
        color: t,
        fontSize: c,
        lineHeight: I(B(o).sub(B(r).mul(2)).equal()),
        background: d,
        border: `${I(r)} ${i} ${a}`,
        borderBlockStartWidth: B(r).add(0.02).equal(),
        borderInlineEndWidth: r,
        cursor: 'pointer',
        transition: [`color ${l}`, `background ${l}`, `box-shadow ${l}`].join(
          ',',
        ),
        a: { color: t },
        [`> ${n}-button`]: {
          position: 'absolute',
          insetBlockStart: 0,
          insetInlineStart: 0,
          zIndex: -1,
          width: '100%',
          height: '100%',
        },
        '&:not(:last-child)': { marginInlineEnd: B(r).mul(-1).equal() },
        '&:first-child': {
          borderInlineStart: `${I(r)} ${i} ${a}`,
          borderStartStartRadius: b,
          borderEndStartRadius: b,
        },
        '&:last-child': { borderStartEndRadius: b, borderEndEndRadius: b },
        '&:first-child:last-child': { borderRadius: b },
        [`${n}-group-large &`]: {
          height: p,
          fontSize: u,
          lineHeight: I(B(p).sub(B(r).mul(2)).equal()),
          '&:first-child': {
            borderStartStartRadius: h,
            borderEndStartRadius: h,
          },
          '&:last-child': { borderStartEndRadius: h, borderEndEndRadius: h },
        },
        [`${n}-group-small &`]: {
          height: m,
          paddingInline: B(g).sub(r).equal(),
          paddingBlock: 0,
          lineHeight: I(B(m).sub(B(r).mul(2)).equal()),
          '&:first-child': {
            borderStartStartRadius: f,
            borderEndStartRadius: f,
          },
          '&:last-child': { borderStartEndRadius: f, borderEndEndRadius: f },
        },
        '&:hover': { position: 'relative', color: O },
        '&:has(:focus-visible)': no(e),
        [`${n}-inner, input[type='checkbox'], input[type='radio']`]: {
          width: 0,
          height: 0,
          opacity: 0,
          pointerEvents: 'none',
        },
        [`&-checked:not(${n}-button-wrapper-disabled)`]: {
          zIndex: 1,
          color: O,
          background: $,
          borderColor: O,
          '&::before': { backgroundColor: O },
          '&:first-child': { borderColor: O },
          '&:hover': {
            color: k,
            borderColor: k,
            '&::before': { backgroundColor: k },
          },
          '&:active': {
            color: w,
            borderColor: w,
            '&::before': { backgroundColor: w },
          },
        },
        [`${n}-group-solid &-checked:not(${n}-button-wrapper-disabled)`]: {
          color: v,
          background: E,
          borderColor: E,
          '&:hover': { color: v, background: j, borderColor: j },
          '&:active': { color: v, background: P, borderColor: P },
        },
        '&-disabled': {
          color: y,
          backgroundColor: x,
          borderColor: a,
          cursor: 'not-allowed',
          '&:first-child, &:hover': {
            color: y,
            backgroundColor: x,
            borderColor: a,
          },
        },
        [`&-disabled${n}-button-wrapper-checked`]: {
          color: S,
          backgroundColor: C,
          borderColor: a,
          boxShadow: 'none',
        },
        '&-block': { flex: 1, textAlign: 'center' },
      },
    };
  },
  ds = lo(
    'Radio',
    (e) => {
      const { controlOutline: t, controlOutlineWidth: o } = e,
        n = `0 0 0 ${I(o)} ${t}`,
        r = T(e, { radioFocusShadow: n, radioButtonFocusShadow: n });
      return [ls(r), ss(r), cs(r)];
    },
    (e) => {
      const {
        wireframe: t,
        padding: o,
        marginXS: n,
        lineWidth: r,
        fontSizeLG: i,
        colorText: a,
        colorBgContainer: l,
        colorTextDisabled: s,
        controlItemBgActiveDisabled: c,
        colorTextLightSolid: d,
        colorPrimary: u,
        colorPrimaryHover: p,
        colorPrimaryActive: m,
        colorWhite: g,
      } = e;
      return {
        radioSize: i,
        dotSize: t ? i - 8 : i - 2 * (4 + r),
        dotColorDisabled: s,
        buttonSolidCheckedColor: d,
        buttonSolidCheckedBg: u,
        buttonSolidCheckedHoverBg: p,
        buttonSolidCheckedActiveBg: m,
        buttonBg: l,
        buttonCheckedBg: l,
        buttonColor: a,
        buttonCheckedBgDisabled: c,
        buttonCheckedColorDisabled: s,
        buttonPaddingInline: o - r,
        wrapperMarginInlineEnd: n,
        radioColor: t ? u : g,
        radioBgColor: t ? l : u,
      };
    },
    { unitless: { radioSize: !0, dotSize: !0 } },
  );
const us = (e, t) => {
    var o, n;
    const r = le.useContext(ns),
      i = le.useContext(is),
      { getPrefixCls: a, direction: l, radio: d } = le.useContext(Tt),
      u = le.useRef(null),
      p = c(t, u),
      { isFormItemInput: m } = le.useContext(ai),
      g = (t) => {
        var o, n;
        (null === (o = e.onChange) || void 0 === o || o.call(e, t),
          null === (n = null == r ? void 0 : r.onChange) ||
            void 0 === n ||
            n.call(r, t));
      },
      {
        prefixCls: b,
        className: f,
        rootClassName: h,
        children: $,
        style: v,
        title: y,
      } = e,
      x = (function (e, t) {
        var o = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (o[n] = e[n]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            t.indexOf(n[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
              (o[n[r]] = e[n[r]]);
        }
        return o;
      })(e, [
        'prefixCls',
        'className',
        'rootClassName',
        'children',
        'style',
        'title',
      ]),
      C = a('radio', b),
      S = 'button' === ((null == r ? void 0 : r.optionType) || i),
      O = S ? `${C}-button` : C,
      k = Bo(C),
      [w, E, j] = ds(C, k),
      I = Object.assign({}, x),
      P = le.useContext(Dt);
    (r &&
      ((I.name = r.name),
      (I.onChange = g),
      (I.checked = e.value === r.value),
      (I.disabled =
        null !== (o = I.disabled) && void 0 !== o ? o : r.disabled)),
      (I.disabled = null !== (n = I.disabled) && void 0 !== n ? n : P));
    const B = de(
        `${O}-wrapper`,
        {
          [`${O}-wrapper-checked`]: I.checked,
          [`${O}-wrapper-disabled`]: I.disabled,
          [`${O}-wrapper-rtl`]: 'rtl' === l,
          [`${O}-wrapper-in-form-item`]: m,
          [`${O}-wrapper-block`]: !!(null == r ? void 0 : r.block),
        },
        null == d ? void 0 : d.className,
        f,
        h,
        E,
        j,
        k,
      ),
      [z, M] = (function (e) {
        const t = se.useRef(null),
          o = () => {
            (s.cancel(t.current), (t.current = null));
          };
        return [
          () => {
            (o(),
              (t.current = s(() => {
                t.current = null;
              })));
          },
          (n) => {
            (t.current && (n.stopPropagation(), o()), null == e || e(n));
          },
        ];
      })(I.onClick);
    return w(
      le.createElement(
        fn,
        { component: 'Radio', disabled: I.disabled },
        le.createElement(
          'label',
          {
            className: B,
            style: Object.assign(
              Object.assign({}, null == d ? void 0 : d.style),
              v,
            ),
            onMouseEnter: e.onMouseEnter,
            onMouseLeave: e.onMouseLeave,
            title: y,
            onClick: z,
          },
          le.createElement(
            ge,
            Object.assign({}, I, {
              className: de(I.className, { [dn]: !S }),
              type: 'radio',
              prefixCls: O,
              ref: p,
              onClick: M,
            }),
          ),
          void 0 !== $
            ? le.createElement('span', { className: `${O}-label` }, $)
            : null,
        ),
      ),
    );
  },
  ps = le.forwardRef(us);
function ms(e) {
  var t;
  return (
    void 0 === (t = e) || !1 === t ? [] : Array.isArray(t) ? t : [t]
  ).join('_');
}
const gs = le.forwardRef((e, t) => {
    const { getPrefixCls: o, direction: n } = le.useContext(Tt),
      { name: r } = le.useContext(ai),
      a = x(ms(r)),
      {
        prefixCls: l,
        className: s,
        rootClassName: c,
        options: d,
        buttonStyle: u = 'outline',
        disabled: p,
        children: m,
        size: g,
        style: b,
        id: f,
        optionType: h,
        name: $ = a,
        defaultValue: y,
        value: C,
        block: S = !1,
        onChange: O,
        onMouseEnter: k,
        onMouseLeave: w,
        onFocus: E,
        onBlur: j,
      } = e,
      [I, P] = v(y, { value: C }),
      B = le.useCallback(
        (t) => {
          const o = I,
            n = t.target.value;
          ('value' in e || P(n), n !== o && (null == O || O(t)));
        },
        [I, P, O],
      ),
      z = o('radio', l),
      M = `${z}-group`,
      H = Bo(z),
      [T, R, N] = ds(z, H);
    let L = m;
    d &&
      d.length > 0 &&
      (L = d.map((e) =>
        'string' == typeof e || 'number' == typeof e
          ? le.createElement(
              ps,
              {
                key: e.toString(),
                prefixCls: z,
                disabled: p,
                value: e,
                checked: I === e,
              },
              e,
            )
          : le.createElement(
              ps,
              {
                key: `radio-group-value-options-${e.value}`,
                prefixCls: z,
                disabled: e.disabled || p,
                value: e.value,
                checked: I === e.value,
                title: e.title,
                style: e.style,
                className: e.className,
                id: e.id,
                required: e.required,
              },
              e.label,
            ),
      ));
    const F = hn(g),
      A = de(
        M,
        `${M}-${u}`,
        { [`${M}-${F}`]: F, [`${M}-rtl`]: 'rtl' === n, [`${M}-block`]: S },
        s,
        c,
        R,
        N,
        H,
      ),
      D = le.useMemo(
        () => ({
          onChange: B,
          value: I,
          disabled: p,
          name: $,
          optionType: h,
          block: S,
        }),
        [B, I, p, $, h, S],
      );
    return T(
      le.createElement(
        'div',
        Object.assign({}, i(e, { aria: !0, data: !0 }), {
          className: A,
          style: b,
          onMouseEnter: k,
          onMouseLeave: w,
          onFocus: E,
          onBlur: j,
          id: f,
          ref: t,
        }),
        le.createElement(rs, { value: D }, L),
      ),
    );
  }),
  bs = le.memo(gs);
const fs = (e, t) => {
    const { getPrefixCls: o } = le.useContext(Tt),
      { prefixCls: n } = e,
      r = (function (e, t) {
        var o = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (o[n] = e[n]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            t.indexOf(n[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
              (o[n[r]] = e[n[r]]);
        }
        return o;
      })(e, ['prefixCls']),
      i = o('radio', n);
    return le.createElement(
      as,
      { value: 'button' },
      le.createElement(
        ps,
        Object.assign({ prefixCls: i }, r, { type: 'radio', ref: t }),
      ),
    );
  },
  hs = le.forwardRef(fs),
  $s = ps;
function vs(e) {
  return T(e, { inputAffixPadding: e.paddingXXS });
}
(($s.Button = hs), ($s.Group = bs), ($s.__ANT_RADIO = !0));
const ys = (e) => {
    const {
        controlHeight: t,
        fontSize: o,
        lineHeight: n,
        lineWidth: r,
        controlHeightSM: i,
        controlHeightLG: a,
        fontSizeLG: l,
        lineHeightLG: s,
        paddingSM: c,
        controlPaddingHorizontalSM: d,
        controlPaddingHorizontal: u,
        colorFillAlter: p,
        colorPrimaryHover: m,
        colorPrimary: g,
        controlOutlineWidth: b,
        controlOutline: f,
        colorErrorOutline: h,
        colorWarningOutline: $,
        colorBgContainer: v,
        inputFontSize: y,
        inputFontSizeLG: x,
        inputFontSizeSM: C,
      } = e,
      S = y || o,
      O = C || S,
      k = x || l,
      w = Math.round(((t - S * n) / 2) * 10) / 10 - r,
      E = Math.round(((i - O * n) / 2) * 10) / 10 - r,
      j = Math.ceil(((a - k * s) / 2) * 10) / 10 - r;
    return {
      paddingBlock: Math.max(w, 0),
      paddingBlockSM: Math.max(E, 0),
      paddingBlockLG: Math.max(j, 0),
      paddingInline: c - r,
      paddingInlineSM: d - r,
      paddingInlineLG: u - r,
      addonBg: p,
      activeBorderColor: g,
      hoverBorderColor: m,
      activeShadow: `0 0 0 ${b}px ${f}`,
      errorActiveShadow: `0 0 0 ${b}px ${h}`,
      warningActiveShadow: `0 0 0 ${b}px ${$}`,
      hoverBg: v,
      activeBg: v,
      inputFontSize: S,
      inputFontSizeLG: k,
      inputFontSizeSM: O,
    };
  },
  xs = (e) => ({ borderColor: e.hoverBorderColor, backgroundColor: e.hoverBg }),
  Cs = (e) => ({
    color: e.colorTextDisabled,
    backgroundColor: e.colorBgContainerDisabled,
    borderColor: e.colorBorder,
    boxShadow: 'none',
    cursor: 'not-allowed',
    opacity: 1,
    'input[disabled], textarea[disabled]': { cursor: 'not-allowed' },
    '&:hover:not([disabled])': Object.assign(
      {},
      xs(
        T(e, {
          hoverBorderColor: e.colorBorder,
          hoverBg: e.colorBgContainerDisabled,
        }),
      ),
    ),
  }),
  Ss = (e, t) => ({
    background: e.colorBgContainer,
    borderWidth: e.lineWidth,
    borderStyle: e.lineType,
    borderColor: t.borderColor,
    '&:hover': { borderColor: t.hoverBorderColor, backgroundColor: e.hoverBg },
    '&:focus, &:focus-within': {
      borderColor: t.activeBorderColor,
      boxShadow: t.activeShadow,
      outline: 0,
      backgroundColor: e.activeBg,
    },
  }),
  Os = (e, t) => ({
    [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]:
      Object.assign(Object.assign({}, Ss(e, t)), {
        [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
          color: t.affixColor,
        },
      }),
    [`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]: {
      borderColor: t.borderColor,
    },
  }),
  ks = (e, t) => ({
    '&-outlined': Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              {},
              Ss(e, {
                borderColor: e.colorBorder,
                hoverBorderColor: e.hoverBorderColor,
                activeBorderColor: e.activeBorderColor,
                activeShadow: e.activeShadow,
              }),
            ),
            {
              [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign(
                {},
                Cs(e),
              ),
            },
          ),
          Os(e, {
            status: 'error',
            borderColor: e.colorError,
            hoverBorderColor: e.colorErrorBorderHover,
            activeBorderColor: e.colorError,
            activeShadow: e.errorActiveShadow,
            affixColor: e.colorError,
          }),
        ),
        Os(e, {
          status: 'warning',
          borderColor: e.colorWarning,
          hoverBorderColor: e.colorWarningBorderHover,
          activeBorderColor: e.colorWarning,
          activeShadow: e.warningActiveShadow,
          affixColor: e.colorWarning,
        }),
      ),
      t,
    ),
  }),
  ws = (e, t) => ({
    [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
      [`${e.componentCls}-group-addon`]: {
        borderColor: t.addonBorderColor,
        color: t.addonColor,
      },
    },
  }),
  Es = (e) => ({
    '&-outlined': Object.assign(
      Object.assign(
        Object.assign(
          {
            [`${e.componentCls}-group`]: {
              '&-addon': {
                background: e.addonBg,
                border: `${I(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
              },
              '&-addon:first-child': { borderInlineEnd: 0 },
              '&-addon:last-child': { borderInlineStart: 0 },
            },
          },
          ws(e, {
            status: 'error',
            addonBorderColor: e.colorError,
            addonColor: e.colorErrorText,
          }),
        ),
        ws(e, {
          status: 'warning',
          addonBorderColor: e.colorWarning,
          addonColor: e.colorWarningText,
        }),
      ),
      {
        [`&${e.componentCls}-group-wrapper-disabled`]: {
          [`${e.componentCls}-group-addon`]: Object.assign({}, Cs(e)),
        },
      },
    ),
  }),
  js = (e, t) => {
    const { componentCls: o } = e;
    return {
      '&-borderless': Object.assign(
        {
          background: 'transparent',
          border: 'none',
          '&:focus, &:focus-within': { outline: 'none' },
          [`&${o}-disabled, &[disabled]`]: {
            color: e.colorTextDisabled,
            cursor: 'not-allowed',
          },
          [`&${o}-status-error`]: {
            '&, & input, & textarea': { color: e.colorError },
          },
          [`&${o}-status-warning`]: {
            '&, & input, & textarea': { color: e.colorWarning },
          },
        },
        t,
      ),
    };
  },
  Is = (e, t) => {
    var o;
    return {
      background: t.bg,
      borderWidth: e.lineWidth,
      borderStyle: e.lineType,
      borderColor: 'transparent',
      'input&, & input, textarea&, & textarea': {
        color:
          null !== (o = null == t ? void 0 : t.inputColor) && void 0 !== o
            ? o
            : 'unset',
      },
      '&:hover': { background: t.hoverBg },
      '&:focus, &:focus-within': {
        outline: 0,
        borderColor: t.activeBorderColor,
        backgroundColor: e.activeBg,
      },
    };
  },
  Ps = (e, t) => ({
    [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]:
      Object.assign(Object.assign({}, Is(e, t)), {
        [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
          color: t.affixColor,
        },
      }),
  }),
  Bs = (e, t) => ({
    '&-filled': Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              {},
              Is(e, {
                bg: e.colorFillTertiary,
                hoverBg: e.colorFillSecondary,
                activeBorderColor: e.activeBorderColor,
              }),
            ),
            {
              [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign(
                {},
                Cs(e),
              ),
            },
          ),
          Ps(e, {
            status: 'error',
            bg: e.colorErrorBg,
            hoverBg: e.colorErrorBgHover,
            activeBorderColor: e.colorError,
            inputColor: e.colorErrorText,
            affixColor: e.colorError,
          }),
        ),
        Ps(e, {
          status: 'warning',
          bg: e.colorWarningBg,
          hoverBg: e.colorWarningBgHover,
          activeBorderColor: e.colorWarning,
          inputColor: e.colorWarningText,
          affixColor: e.colorWarning,
        }),
      ),
      t,
    ),
  }),
  zs = (e, t) => ({
    [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
      [`${e.componentCls}-group-addon`]: {
        background: t.addonBg,
        color: t.addonColor,
      },
    },
  }),
  Ms = (e) => ({
    '&-filled': Object.assign(
      Object.assign(
        Object.assign(
          {
            [`${e.componentCls}-group-addon`]: {
              background: e.colorFillTertiary,
              '&:last-child': { position: 'static' },
            },
          },
          zs(e, {
            status: 'error',
            addonBg: e.colorErrorBg,
            addonColor: e.colorErrorText,
          }),
        ),
        zs(e, {
          status: 'warning',
          addonBg: e.colorWarningBg,
          addonColor: e.colorWarningText,
        }),
      ),
      {
        [`&${e.componentCls}-group-wrapper-disabled`]: {
          [`${e.componentCls}-group`]: {
            '&-addon': {
              background: e.colorFillTertiary,
              color: e.colorTextDisabled,
            },
            '&-addon:first-child': {
              borderInlineStart: `${I(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
              borderTop: `${I(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
              borderBottom: `${I(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
            },
            '&-addon:last-child': {
              borderInlineEnd: `${I(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
              borderTop: `${I(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
              borderBottom: `${I(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
            },
          },
        },
      },
    ),
  }),
  Hs = (e, t) => ({
    background: e.colorBgContainer,
    borderWidth: `${I(e.lineWidth)} 0`,
    borderStyle: `${e.lineType} none`,
    borderColor: `transparent transparent ${t.borderColor} transparent`,
    borderRadius: 0,
    '&:hover': {
      borderColor: `transparent transparent ${t.hoverBorderColor} transparent`,
      backgroundColor: e.hoverBg,
    },
    '&:focus, &:focus-within': {
      borderColor: `transparent transparent ${t.activeBorderColor} transparent`,
      outline: 0,
      backgroundColor: e.activeBg,
    },
  }),
  Ts = (e, t) => ({
    [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]:
      Object.assign(Object.assign({}, Hs(e, t)), {
        [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
          color: t.affixColor,
        },
      }),
    [`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]: {
      borderColor: `transparent transparent ${t.borderColor} transparent`,
    },
  }),
  Rs = (e, t) => ({
    '&-underlined': Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              {},
              Hs(e, {
                borderColor: e.colorBorder,
                hoverBorderColor: e.hoverBorderColor,
                activeBorderColor: e.activeBorderColor,
                activeShadow: e.activeShadow,
              }),
            ),
            {
              [`&${e.componentCls}-disabled, &[disabled]`]: {
                color: e.colorTextDisabled,
                boxShadow: 'none',
                cursor: 'not-allowed',
                '&:hover': {
                  borderColor: `transparent transparent ${e.colorBorder} transparent`,
                },
              },
              'input[disabled], textarea[disabled]': { cursor: 'not-allowed' },
            },
          ),
          Ts(e, {
            status: 'error',
            borderColor: e.colorError,
            hoverBorderColor: e.colorErrorBorderHover,
            activeBorderColor: e.colorError,
            activeShadow: e.errorActiveShadow,
            affixColor: e.colorError,
          }),
        ),
        Ts(e, {
          status: 'warning',
          borderColor: e.colorWarning,
          hoverBorderColor: e.colorWarningBorderHover,
          activeBorderColor: e.colorWarning,
          activeShadow: e.warningActiveShadow,
          affixColor: e.colorWarning,
        }),
      ),
      t,
    ),
  }),
  Ns = (e) => ({
    '&::-moz-placeholder': { opacity: 1 },
    '&::placeholder': { color: e, userSelect: 'none' },
    '&:placeholder-shown': { textOverflow: 'ellipsis' },
  }),
  Ls = (e) => {
    const {
      paddingBlockLG: t,
      lineHeightLG: o,
      borderRadiusLG: n,
      paddingInlineLG: r,
    } = e;
    return {
      padding: `${I(t)} ${I(r)}`,
      fontSize: e.inputFontSizeLG,
      lineHeight: o,
      borderRadius: n,
    };
  },
  Fs = (e) => ({
    padding: `${I(e.paddingBlockSM)} ${I(e.paddingInlineSM)}`,
    fontSize: e.inputFontSizeSM,
    borderRadius: e.borderRadiusSM,
  }),
  As = (e) =>
    Object.assign(
      Object.assign(
        {
          position: 'relative',
          display: 'inline-block',
          width: '100%',
          minWidth: 0,
          padding: `${I(e.paddingBlock)} ${I(e.paddingInline)}`,
          color: e.colorText,
          fontSize: e.inputFontSize,
          lineHeight: e.lineHeight,
          borderRadius: e.borderRadius,
          transition: `all ${e.motionDurationMid}`,
        },
        Ns(e.colorTextPlaceholder),
      ),
      {
        '&-lg': Object.assign({}, Ls(e)),
        '&-sm': Object.assign({}, Fs(e)),
        '&-rtl, &-textarea-rtl': { direction: 'rtl' },
      },
    ),
  Ds = (e) => {
    const { componentCls: t, antCls: o } = e;
    return {
      position: 'relative',
      display: 'table',
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
      "&[class*='col-']": {
        paddingInlineEnd: e.paddingXS,
        '&:last-child': { paddingInlineEnd: 0 },
      },
      [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, Ls(e)),
      [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, Fs(e)),
      [`&-lg ${o}-select-single ${o}-select-selector`]: {
        height: e.controlHeightLG,
      },
      [`&-sm ${o}-select-single ${o}-select-selector`]: {
        height: e.controlHeightSM,
      },
      [`> ${t}`]: {
        display: 'table-cell',
        '&:not(:first-child):not(:last-child)': { borderRadius: 0 },
      },
      [`${t}-group`]: {
        '&-addon, &-wrap': {
          display: 'table-cell',
          width: 1,
          whiteSpace: 'nowrap',
          verticalAlign: 'middle',
          '&:not(:first-child):not(:last-child)': { borderRadius: 0 },
        },
        '&-wrap > *': { display: 'block !important' },
        '&-addon': {
          position: 'relative',
          padding: `0 ${I(e.paddingInline)}`,
          color: e.colorText,
          fontWeight: 'normal',
          fontSize: e.inputFontSize,
          textAlign: 'center',
          borderRadius: e.borderRadius,
          transition: `all ${e.motionDurationSlow}`,
          lineHeight: 1,
          [`${o}-select`]: {
            margin: `${I(e.calc(e.paddingBlock).add(1).mul(-1).equal())} ${I(e.calc(e.paddingInline).mul(-1).equal())}`,
            [`&${o}-select-single:not(${o}-select-customize-input):not(${o}-pagination-size-changer)`]:
              {
                [`${o}-select-selector`]: {
                  backgroundColor: 'inherit',
                  border: `${I(e.lineWidth)} ${e.lineType} transparent`,
                  boxShadow: 'none',
                },
              },
          },
          [`${o}-cascader-picker`]: {
            margin: `-9px ${I(e.calc(e.paddingInline).mul(-1).equal())}`,
            backgroundColor: 'transparent',
            [`${o}-cascader-input`]: {
              textAlign: 'start',
              border: 0,
              boxShadow: 'none',
            },
          },
        },
      },
      [t]: {
        width: '100%',
        marginBottom: 0,
        textAlign: 'inherit',
        '&:focus': { zIndex: 1, borderInlineEndWidth: 1 },
        '&:hover': {
          zIndex: 1,
          borderInlineEndWidth: 1,
          [`${t}-search-with-button &`]: { zIndex: 0 },
        },
      },
      [`> ${t}:first-child, ${t}-group-addon:first-child`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        [`${o}-select ${o}-select-selector`]: {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0,
        },
      },
      [`> ${t}-affix-wrapper`]: {
        [`&:not(:first-child) ${t}`]: {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0,
        },
        [`&:not(:last-child) ${t}`]: {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0,
        },
      },
      [`> ${t}:last-child, ${t}-group-addon:last-child`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0,
        [`${o}-select ${o}-select-selector`]: {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0,
        },
      },
      [`${t}-affix-wrapper`]: {
        '&:not(:last-child)': {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0,
          [`${t}-search &`]: {
            borderStartStartRadius: e.borderRadius,
            borderEndStartRadius: e.borderRadius,
          },
        },
        [`&:not(:first-child), ${t}-search &:not(:first-child)`]: {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0,
        },
      },
      [`&${t}-group-compact`]: Object.assign(
        Object.assign(
          { display: 'block' },
          {
            '&::before': { display: 'table', content: '""' },
            '&::after': { display: 'table', clear: 'both', content: '""' },
          },
        ),
        {
          [`${t}-group-addon, ${t}-group-wrap, > ${t}`]: {
            '&:not(:first-child):not(:last-child)': {
              borderInlineEndWidth: e.lineWidth,
              '&:hover, &:focus': { zIndex: 1 },
            },
          },
          '& > *': {
            display: 'inline-flex',
            float: 'none',
            verticalAlign: 'top',
            borderRadius: 0,
          },
          [`\n        & > ${t}-affix-wrapper,\n        & > ${t}-number-affix-wrapper,\n        & > ${o}-picker-range\n      `]:
            { display: 'inline-flex' },
          '& > *:not(:last-child)': {
            marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
            borderInlineEndWidth: e.lineWidth,
          },
          [t]: { float: 'none' },
          [`& > ${o}-select > ${o}-select-selector,\n      & > ${o}-select-auto-complete ${t},\n      & > ${o}-cascader-picker ${t},\n      & > ${t}-group-wrapper ${t}`]:
            {
              borderInlineEndWidth: e.lineWidth,
              borderRadius: 0,
              '&:hover, &:focus': { zIndex: 1 },
            },
          [`& > ${o}-select-focused`]: { zIndex: 1 },
          [`& > ${o}-select > ${o}-select-arrow`]: { zIndex: 1 },
          [`& > *:first-child,\n      & > ${o}-select:first-child > ${o}-select-selector,\n      & > ${o}-select-auto-complete:first-child ${t},\n      & > ${o}-cascader-picker:first-child ${t}`]:
            {
              borderStartStartRadius: e.borderRadius,
              borderEndStartRadius: e.borderRadius,
            },
          [`& > *:last-child,\n      & > ${o}-select:last-child > ${o}-select-selector,\n      & > ${o}-cascader-picker:last-child ${t},\n      & > ${o}-cascader-picker-focused:last-child ${t}`]:
            {
              borderInlineEndWidth: e.lineWidth,
              borderStartEndRadius: e.borderRadius,
              borderEndEndRadius: e.borderRadius,
            },
          [`& > ${o}-select-auto-complete ${t}`]: { verticalAlign: 'top' },
          [`${t}-group-wrapper + ${t}-group-wrapper`]: {
            marginInlineStart: e.calc(e.lineWidth).mul(-1).equal(),
            [`${t}-affix-wrapper`]: { borderRadius: 0 },
          },
          [`${t}-group-wrapper:not(:last-child)`]: {
            [`&${t}-search > ${t}-group`]: {
              [`& > ${t}-group-addon > ${t}-search-button`]: {
                borderRadius: 0,
              },
              [`& > ${t}`]: {
                borderStartStartRadius: e.borderRadius,
                borderStartEndRadius: 0,
                borderEndEndRadius: 0,
                borderEndStartRadius: e.borderRadius,
              },
            },
          },
        },
      ),
    };
  },
  Ws = (e) => {
    const { componentCls: t, controlHeightSM: o, lineWidth: n, calc: r } = e,
      i = r(o).sub(r(n).mul(2)).sub(16).div(2).equal();
    return {
      [t]: Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(Object.assign({}, oo(e)), As(e)),
                ks(e),
              ),
              Bs(e),
            ),
            js(e),
          ),
          Rs(e),
        ),
        {
          '&[type="color"]': {
            height: e.controlHeight,
            [`&${t}-lg`]: { height: e.controlHeightLG },
            [`&${t}-sm`]: { height: o, paddingTop: i, paddingBottom: i },
          },
          '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration':
            { appearance: 'none' },
        },
      ),
    };
  },
  _s = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-clear-icon`]: {
        margin: 0,
        padding: 0,
        lineHeight: 0,
        color: e.colorTextQuaternary,
        fontSize: e.fontSizeIcon,
        verticalAlign: -1,
        cursor: 'pointer',
        transition: `color ${e.motionDurationSlow}`,
        border: 'none',
        outline: 'none',
        backgroundColor: 'transparent',
        '&:hover': { color: e.colorIcon },
        '&:active': { color: e.colorText },
        '&-hidden': { visibility: 'hidden' },
        '&-has-suffix': { margin: `0 ${I(e.inputAffixPadding)}` },
      },
    };
  },
  Gs = (e) => {
    const {
        componentCls: t,
        inputAffixPadding: o,
        colorTextDescription: n,
        motionDurationSlow: r,
        colorIcon: i,
        colorIconHover: a,
        iconCls: l,
      } = e,
      s = `${t}-affix-wrapper`,
      c = `${t}-affix-wrapper-disabled`;
    return {
      [s]: Object.assign(
        Object.assign(
          Object.assign(Object.assign({}, As(e)), {
            display: 'inline-flex',
            [`&:not(${t}-disabled):hover`]: {
              zIndex: 1,
              [`${t}-search-with-button &`]: { zIndex: 0 },
            },
            '&-focused, &:focus': { zIndex: 1 },
            [`> input${t}`]: { padding: 0 },
            [`> input${t}, > textarea${t}`]: {
              fontSize: 'inherit',
              border: 'none',
              borderRadius: 0,
              outline: 'none',
              background: 'transparent',
              color: 'inherit',
              '&::-ms-reveal': { display: 'none' },
              '&:focus': { boxShadow: 'none !important' },
            },
            '&::before': {
              display: 'inline-block',
              width: 0,
              visibility: 'hidden',
              content: '"\\a0"',
            },
            [t]: {
              '&-prefix, &-suffix': {
                display: 'flex',
                flex: 'none',
                alignItems: 'center',
                '> *:not(:last-child)': { marginInlineEnd: e.paddingXS },
              },
              '&-show-count-suffix': { color: n, direction: 'ltr' },
              '&-show-count-has-suffix': { marginInlineEnd: e.paddingXXS },
              '&-prefix': { marginInlineEnd: o },
              '&-suffix': { marginInlineStart: o },
            },
          }),
          _s(e),
        ),
        {
          [`${l}${t}-password-icon`]: {
            color: i,
            cursor: 'pointer',
            transition: `all ${r}`,
            '&:hover': { color: a },
          },
        },
      ),
      [`${t}-underlined`]: { borderRadius: 0 },
      [c]: {
        [`${l}${t}-password-icon`]: {
          color: i,
          cursor: 'not-allowed',
          '&:hover': { color: i },
        },
      },
    };
  },
  qs = (e) => {
    const { componentCls: t, borderRadiusLG: o, borderRadiusSM: n } = e;
    return {
      [`${t}-group`]: Object.assign(
        Object.assign(Object.assign({}, oo(e)), Ds(e)),
        {
          '&-rtl': { direction: 'rtl' },
          '&-wrapper': Object.assign(
            Object.assign(
              Object.assign(
                {
                  display: 'inline-block',
                  width: '100%',
                  textAlign: 'start',
                  verticalAlign: 'top',
                  '&-rtl': { direction: 'rtl' },
                  '&-lg': {
                    [`${t}-group-addon`]: {
                      borderRadius: o,
                      fontSize: e.inputFontSizeLG,
                    },
                  },
                  '&-sm': { [`${t}-group-addon`]: { borderRadius: n } },
                },
                Es(e),
              ),
              Ms(e),
            ),
            {
              [`&:not(${t}-compact-first-item):not(${t}-compact-last-item)${t}-compact-item`]:
                { [`${t}, ${t}-group-addon`]: { borderRadius: 0 } },
              [`&:not(${t}-compact-last-item)${t}-compact-first-item`]: {
                [`${t}, ${t}-group-addon`]: {
                  borderStartEndRadius: 0,
                  borderEndEndRadius: 0,
                },
              },
              [`&:not(${t}-compact-first-item)${t}-compact-last-item`]: {
                [`${t}, ${t}-group-addon`]: {
                  borderStartStartRadius: 0,
                  borderEndStartRadius: 0,
                },
              },
              [`&:not(${t}-compact-last-item)${t}-compact-item`]: {
                [`${t}-affix-wrapper`]: {
                  borderStartEndRadius: 0,
                  borderEndEndRadius: 0,
                },
              },
              [`&:not(${t}-compact-first-item)${t}-compact-item`]: {
                [`${t}-affix-wrapper`]: {
                  borderStartStartRadius: 0,
                  borderEndStartRadius: 0,
                },
              },
            },
          ),
        },
      ),
    };
  },
  Xs = (e) => {
    const { componentCls: t, antCls: o } = e,
      n = `${t}-search`;
    return {
      [n]: {
        [t]: {
          '&:not([disabled]):hover, &:not([disabled]):focus': {
            [`+ ${t}-group-addon ${n}-button:not(${o}-btn-color-primary):not(${o}-btn-variant-text)`]:
              { borderInlineStartColor: e.colorPrimaryHover },
          },
        },
        [`${t}-affix-wrapper`]: { height: e.controlHeight, borderRadius: 0 },
        [`${t}-lg`]: { lineHeight: e.calc(e.lineHeightLG).sub(2e-4).equal() },
        [`> ${t}-group`]: {
          [`> ${t}-group-addon:last-child`]: {
            insetInlineStart: -1,
            padding: 0,
            border: 0,
            [`${n}-button`]: {
              marginInlineEnd: -1,
              borderStartStartRadius: 0,
              borderEndStartRadius: 0,
              boxShadow: 'none',
            },
            [`${n}-button:not(${o}-btn-color-primary)`]: {
              color: e.colorTextDescription,
              '&:not([disabled]):hover': { color: e.colorPrimaryHover },
              '&:active': { color: e.colorPrimaryActive },
              [`&${o}-btn-loading::before`]: { inset: 0 },
            },
          },
        },
        [`${n}-button`]: {
          height: e.controlHeight,
          '&:hover, &:focus': { zIndex: 1 },
        },
        '&-large': {
          [`${t}-affix-wrapper, ${n}-button`]: { height: e.controlHeightLG },
        },
        '&-small': {
          [`${t}-affix-wrapper, ${n}-button`]: { height: e.controlHeightSM },
        },
        '&-rtl': { direction: 'rtl' },
        [`&${t}-compact-item`]: {
          [`&:not(${t}-compact-last-item)`]: {
            [`${t}-group-addon`]: {
              [`${t}-search-button`]: {
                marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
                borderRadius: 0,
              },
            },
          },
          [`&:not(${t}-compact-first-item)`]: {
            [`${t},${t}-affix-wrapper`]: { borderRadius: 0 },
          },
          [`> ${t}-group-addon ${t}-search-button,\n        > ${t},\n        ${t}-affix-wrapper`]:
            { '&:hover, &:focus, &:active': { zIndex: 2 } },
          [`> ${t}-affix-wrapper-focused`]: { zIndex: 2 },
        },
      },
    };
  },
  Vs = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-out-of-range`]: {
        [`&, & input, & textarea, ${t}-show-count-suffix, ${t}-data-count`]: {
          color: e.colorError,
        },
      },
    };
  },
  Ks = lo(
    ['Input', 'Shared'],
    (e) => {
      const t = T(e, vs(e));
      return [Ws(t), Gs(t)];
    },
    ys,
    { resetFont: !1 },
  ),
  Us = lo(
    ['Input', 'Component'],
    (e) => {
      const t = T(e, vs(e));
      return [qs(t), Xs(t), Vs(t), Vr(t)];
    },
    ys,
    { resetFont: !1 },
  ),
  Ys = (e, t) => {
    const { componentCls: o, controlHeight: n } = e,
      r = t ? `${o}-${t}` : '',
      i = tl(e);
    return [
      {
        [`${o}-multiple${r}`]: {
          paddingBlock: i.containerPadding,
          paddingInlineStart: i.basePadding,
          minHeight: n,
          [`${o}-selection-item`]: {
            height: i.itemHeight,
            lineHeight: I(i.itemLineHeight),
          },
        },
      },
    ];
  },
  Qs = (e) => {
    const { componentCls: t, calc: o, lineWidth: n } = e,
      r = T(e, {
        fontHeight: e.fontSize,
        selectHeight: e.controlHeightSM,
        multipleSelectItemHeight: e.multipleItemHeightSM,
        borderRadius: e.borderRadiusSM,
        borderRadiusSM: e.borderRadiusXS,
        controlHeight: e.controlHeightSM,
      }),
      i = T(e, {
        fontHeight: o(e.multipleItemHeightLG).sub(o(n).mul(2).equal()).equal(),
        fontSize: e.fontSizeLG,
        selectHeight: e.controlHeightLG,
        multipleSelectItemHeight: e.multipleItemHeightLG,
        borderRadius: e.borderRadiusLG,
        borderRadiusSM: e.borderRadius,
        controlHeight: e.controlHeightLG,
      });
    return [
      Ys(r, 'small'),
      Ys(e),
      Ys(i, 'large'),
      {
        [`${t}${t}-multiple`]: Object.assign(
          Object.assign(
            {
              width: '100%',
              cursor: 'text',
              [`${t}-selector`]: {
                flex: 'auto',
                padding: 0,
                position: 'relative',
                '&:after': { margin: 0 },
                [`${t}-selection-placeholder`]: {
                  position: 'absolute',
                  top: '50%',
                  insetInlineStart: e.inputPaddingHorizontalBase,
                  insetInlineEnd: 0,
                  transform: 'translateY(-50%)',
                  transition: `all ${e.motionDurationSlow}`,
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  flex: 1,
                  color: e.colorTextPlaceholder,
                  pointerEvents: 'none',
                },
              },
            },
            ol(e),
          ),
          {
            [`${t}-multiple-input`]: {
              width: 0,
              height: 0,
              border: 0,
              visibility: 'hidden',
              position: 'absolute',
              zIndex: -1,
            },
          },
        ),
      },
    ];
  },
  Zs = (e) => {
    const {
      pickerCellCls: t,
      pickerCellInnerCls: o,
      cellHeight: n,
      borderRadiusSM: r,
      motionDurationMid: i,
      cellHoverBg: a,
      lineWidth: l,
      lineType: s,
      colorPrimary: c,
      cellActiveWithRangeBg: d,
      colorTextLightSolid: u,
      colorTextDisabled: p,
      cellBgDisabled: m,
      colorFillSecondary: g,
    } = e;
    return {
      '&::before': {
        position: 'absolute',
        top: '50%',
        insetInlineStart: 0,
        insetInlineEnd: 0,
        zIndex: 1,
        height: n,
        transform: 'translateY(-50%)',
        content: '""',
        pointerEvents: 'none',
      },
      [o]: {
        position: 'relative',
        zIndex: 2,
        display: 'inline-block',
        minWidth: n,
        height: n,
        lineHeight: I(n),
        borderRadius: r,
        transition: `background ${i}`,
      },
      [`&:hover:not(${t}-in-view):not(${t}-disabled),\n    &:hover:not(${t}-selected):not(${t}-range-start):not(${t}-range-end):not(${t}-disabled)`]:
        { [o]: { background: a } },
      [`&-in-view${t}-today ${o}`]: {
        '&::before': {
          position: 'absolute',
          top: 0,
          insetInlineEnd: 0,
          bottom: 0,
          insetInlineStart: 0,
          zIndex: 1,
          border: `${I(l)} ${s} ${c}`,
          borderRadius: r,
          content: '""',
        },
      },
      [`&-in-view${t}-in-range,\n      &-in-view${t}-range-start,\n      &-in-view${t}-range-end`]:
        {
          position: 'relative',
          [`&:not(${t}-disabled):before`]: { background: d },
        },
      [`&-in-view${t}-selected,\n      &-in-view${t}-range-start,\n      &-in-view${t}-range-end`]:
        {
          [`&:not(${t}-disabled) ${o}`]: { color: u, background: c },
          [`&${t}-disabled ${o}`]: { background: g },
        },
      [`&-in-view${t}-range-start:not(${t}-disabled):before`]: {
        insetInlineStart: '50%',
      },
      [`&-in-view${t}-range-end:not(${t}-disabled):before`]: {
        insetInlineEnd: '50%',
      },
      [`&-in-view${t}-range-start:not(${t}-range-end) ${o}`]: {
        borderStartStartRadius: r,
        borderEndStartRadius: r,
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
      },
      [`&-in-view${t}-range-end:not(${t}-range-start) ${o}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0,
        borderStartEndRadius: r,
        borderEndEndRadius: r,
      },
      '&-disabled': {
        color: p,
        cursor: 'not-allowed',
        [o]: { background: 'transparent' },
        '&::before': { background: m },
      },
      [`&-disabled${t}-today ${o}::before`]: { borderColor: p },
    };
  },
  Js = (e) => {
    const {
        componentCls: t,
        pickerCellCls: o,
        pickerCellInnerCls: n,
        pickerYearMonthCellWidth: r,
        pickerControlIconSize: i,
        cellWidth: a,
        paddingSM: l,
        paddingXS: s,
        paddingXXS: c,
        colorBgContainer: d,
        lineWidth: u,
        lineType: p,
        borderRadiusLG: m,
        colorPrimary: g,
        colorTextHeading: b,
        colorSplit: f,
        pickerControlIconBorderWidth: h,
        colorIcon: $,
        textHeight: v,
        motionDurationMid: y,
        colorIconHover: x,
        fontWeightStrong: C,
        cellHeight: O,
        pickerCellPaddingVertical: k,
        colorTextDisabled: w,
        colorText: E,
        fontSize: j,
        motionDurationSlow: P,
        withoutTimeCellHeight: B,
        pickerQuarterPanelContentHeight: z,
        borderRadiusSM: M,
        colorTextLightSolid: H,
        cellHoverBg: T,
        timeColumnHeight: R,
        timeColumnWidth: N,
        timeCellHeight: L,
        controlItemBgActive: F,
        marginXXS: A,
        pickerDatePanelPaddingHorizontal: D,
        pickerControlIconMargin: W,
      } = e,
      _ = e.calc(a).mul(7).add(e.calc(D).mul(2)).equal();
    return {
      [t]: {
        '&-panel': {
          display: 'inline-flex',
          flexDirection: 'column',
          textAlign: 'center',
          background: d,
          borderRadius: m,
          outline: 'none',
          '&-focused': { borderColor: g },
          '&-rtl': {
            [`${t}-prev-icon,\n              ${t}-super-prev-icon`]: {
              transform: 'rotate(45deg)',
            },
            [`${t}-next-icon,\n              ${t}-super-next-icon`]: {
              transform: 'rotate(-135deg)',
            },
            [`${t}-time-panel`]: {
              [`${t}-content`]: {
                direction: 'ltr',
                '> *': { direction: 'rtl' },
              },
            },
          },
        },
        '&-decade-panel,\n        &-year-panel,\n        &-quarter-panel,\n        &-month-panel,\n        &-week-panel,\n        &-date-panel,\n        &-time-panel':
          { display: 'flex', flexDirection: 'column', width: _ },
        '&-header': {
          display: 'flex',
          padding: `0 ${I(s)}`,
          color: b,
          borderBottom: `${I(u)} ${p} ${f}`,
          '> *': { flex: 'none' },
          button: {
            padding: 0,
            color: $,
            lineHeight: I(v),
            background: 'transparent',
            border: 0,
            cursor: 'pointer',
            transition: `color ${y}`,
            fontSize: 'inherit',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:empty': { display: 'none' },
          },
          '> button': {
            minWidth: '1.6em',
            fontSize: j,
            '&:hover': { color: x },
            '&:disabled': { opacity: 0.25, pointerEvents: 'none' },
          },
          '&-view': {
            flex: 'auto',
            fontWeight: C,
            lineHeight: I(v),
            '> button': {
              color: 'inherit',
              fontWeight: 'inherit',
              verticalAlign: 'top',
              '&:not(:first-child)': { marginInlineStart: s },
              '&:hover': { color: g },
            },
          },
        },
        '&-prev-icon,\n        &-next-icon,\n        &-super-prev-icon,\n        &-super-next-icon':
          {
            position: 'relative',
            width: i,
            height: i,
            '&::before': {
              position: 'absolute',
              top: 0,
              insetInlineStart: 0,
              width: i,
              height: i,
              border: '0 solid currentcolor',
              borderBlockStartWidth: h,
              borderInlineStartWidth: h,
              content: '""',
            },
          },
        '&-super-prev-icon,\n        &-super-next-icon': {
          '&::after': {
            position: 'absolute',
            top: W,
            insetInlineStart: W,
            display: 'inline-block',
            width: i,
            height: i,
            border: '0 solid currentcolor',
            borderBlockStartWidth: h,
            borderInlineStartWidth: h,
            content: '""',
          },
        },
        '&-prev-icon, &-super-prev-icon': { transform: 'rotate(-45deg)' },
        '&-next-icon, &-super-next-icon': { transform: 'rotate(135deg)' },
        '&-content': {
          width: '100%',
          tableLayout: 'fixed',
          borderCollapse: 'collapse',
          'th, td': { position: 'relative', minWidth: O, fontWeight: 'normal' },
          th: {
            height: e.calc(O).add(e.calc(k).mul(2)).equal(),
            color: E,
            verticalAlign: 'middle',
          },
        },
        '&-cell': Object.assign(
          {
            padding: `${I(k)} 0`,
            color: w,
            cursor: 'pointer',
            '&-in-view': { color: E },
          },
          Zs(e),
        ),
        '&-decade-panel,\n        &-year-panel,\n        &-quarter-panel,\n        &-month-panel':
          {
            [`${t}-content`]: { height: e.calc(B).mul(4).equal() },
            [n]: { padding: `0 ${I(s)}` },
          },
        '&-quarter-panel': { [`${t}-content`]: { height: z } },
        '&-decade-panel': {
          [n]: { padding: `0 ${I(e.calc(s).div(2).equal())}` },
          [`${t}-cell::before`]: { display: 'none' },
        },
        '&-year-panel,\n        &-quarter-panel,\n        &-month-panel': {
          [`${t}-body`]: { padding: `0 ${I(s)}` },
          [n]: { width: r },
        },
        '&-date-panel': {
          [`${t}-body`]: { padding: `${I(s)} ${I(D)}` },
          [`${t}-content th`]: { boxSizing: 'border-box', padding: 0 },
        },
        '&-week-panel-row': {
          td: {
            '&:before': { transition: `background ${y}` },
            '&:first-child:before': {
              borderStartStartRadius: M,
              borderEndStartRadius: M,
            },
            '&:last-child:before': {
              borderStartEndRadius: M,
              borderEndEndRadius: M,
            },
          },
          '&:hover td:before': { background: T },
          '&-range-start td, &-range-end td, &-selected td, &-hover td': {
            [`&${o}`]: {
              '&:before': { background: g },
              [`&${t}-cell-week`]: { color: new S(H).setA(0.5).toHexString() },
              [n]: { color: H },
            },
          },
          '&-range-hover td:before': { background: F },
        },
        '&-week-panel, &-date-panel-show-week': {
          [`${t}-body`]: { padding: `${I(s)} ${I(l)}` },
          [`${t}-content th`]: { width: 'auto' },
        },
        '&-datetime-panel': {
          display: 'flex',
          [`${t}-time-panel`]: { borderInlineStart: `${I(u)} ${p} ${f}` },
          [`${t}-date-panel,\n          ${t}-time-panel`]: {
            transition: `opacity ${P}`,
          },
          '&-active': {
            [`${t}-date-panel,\n            ${t}-time-panel`]: {
              opacity: 0.3,
              '&-active': { opacity: 1 },
            },
          },
        },
        '&-time-panel': {
          width: 'auto',
          minWidth: 'auto',
          [`${t}-content`]: { display: 'flex', flex: 'auto', height: R },
          '&-column': {
            flex: '1 0 auto',
            width: N,
            margin: `${I(c)} 0`,
            padding: 0,
            overflowY: 'hidden',
            textAlign: 'start',
            listStyle: 'none',
            transition: `background ${y}`,
            overflowX: 'hidden',
            '&::-webkit-scrollbar': {
              width: 8,
              backgroundColor: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: e.colorTextTertiary,
              borderRadius: e.borderRadiusSM,
            },
            '&': {
              scrollbarWidth: 'thin',
              scrollbarColor: `${e.colorTextTertiary} transparent`,
            },
            '&::after': {
              display: 'block',
              height: `calc(100% - ${I(L)})`,
              content: '""',
            },
            '&:not(:first-child)': { borderInlineStart: `${I(u)} ${p} ${f}` },
            '&-active': { background: new S(F).setA(0.2).toHexString() },
            '&:hover': { overflowY: 'auto' },
            '> li': {
              margin: 0,
              padding: 0,
              [`&${t}-time-panel-cell`]: {
                marginInline: A,
                [`${t}-time-panel-cell-inner`]: {
                  display: 'block',
                  width: e.calc(N).sub(e.calc(A).mul(2)).equal(),
                  height: L,
                  margin: 0,
                  paddingBlock: 0,
                  paddingInlineEnd: 0,
                  paddingInlineStart: e.calc(N).sub(L).div(2).equal(),
                  color: E,
                  lineHeight: I(L),
                  borderRadius: M,
                  cursor: 'pointer',
                  transition: `background ${y}`,
                  '&:hover': { background: T },
                },
                '&-selected': {
                  [`${t}-time-panel-cell-inner`]: { background: F },
                },
                '&-disabled': {
                  [`${t}-time-panel-cell-inner`]: {
                    color: w,
                    background: 'transparent',
                    cursor: 'not-allowed',
                  },
                },
              },
            },
          },
        },
      },
    };
  },
  ec = (e) => {
    const {
      componentCls: t,
      textHeight: o,
      lineWidth: n,
      paddingSM: r,
      antCls: i,
      colorPrimary: a,
      cellActiveWithRangeBg: l,
      colorPrimaryBorder: s,
      lineType: c,
      colorSplit: d,
    } = e;
    return {
      [`${t}-dropdown`]: {
        [`${t}-footer`]: {
          borderTop: `${I(n)} ${c} ${d}`,
          '&-extra': {
            padding: `0 ${I(r)}`,
            lineHeight: I(e.calc(o).sub(e.calc(n).mul(2)).equal()),
            textAlign: 'start',
            '&:not(:last-child)': { borderBottom: `${I(n)} ${c} ${d}` },
          },
        },
        [`${t}-panels + ${t}-footer ${t}-ranges`]: {
          justifyContent: 'space-between',
        },
        [`${t}-ranges`]: {
          marginBlock: 0,
          paddingInline: I(r),
          overflow: 'hidden',
          textAlign: 'start',
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '> li': {
            lineHeight: I(e.calc(o).sub(e.calc(n).mul(2)).equal()),
            display: 'inline-block',
          },
          [`${t}-now-btn-disabled`]: {
            pointerEvents: 'none',
            color: e.colorTextDisabled,
          },
          [`${t}-preset > ${i}-tag-blue`]: {
            color: a,
            background: l,
            borderColor: s,
            cursor: 'pointer',
          },
          [`${t}-ok`]: {
            paddingBlock: e.calc(n).mul(2).equal(),
            marginInlineStart: 'auto',
          },
        },
      },
    };
  },
  tc = (e) => {
    const { componentCls: t } = e;
    return {
      [t]: [
        Object.assign(
          Object.assign(Object.assign(Object.assign({}, ks(e)), Rs(e)), Bs(e)),
          js(e),
        ),
        {
          '&-outlined': {
            [`&${t}-multiple ${t}-selection-item`]: {
              background: e.multipleItemBg,
              border: `${I(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`,
            },
          },
          '&-filled': {
            [`&${t}-multiple ${t}-selection-item`]: {
              background: e.colorBgContainer,
              border: `${I(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
            },
          },
          '&-borderless': {
            [`&${t}-multiple ${t}-selection-item`]: {
              background: e.multipleItemBg,
              border: `${I(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`,
            },
          },
          '&-underlined': {
            [`&${t}-multiple ${t}-selection-item`]: {
              background: e.multipleItemBg,
              border: `${I(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`,
            },
          },
        },
      ],
    };
  },
  oc = (e, t) => ({ padding: `${I(e)} ${I(t)}` }),
  nc = (e) => {
    const { componentCls: t, colorError: o, colorWarning: n } = e;
    return {
      [`${t}:not(${t}-disabled):not([disabled])`]: {
        [`&${t}-status-error`]: { [`${t}-active-bar`]: { background: o } },
        [`&${t}-status-warning`]: { [`${t}-active-bar`]: { background: n } },
      },
    };
  },
  rc = (e) => {
    var t;
    const {
      componentCls: o,
      antCls: n,
      paddingInline: r,
      lineWidth: i,
      lineType: a,
      colorBorder: l,
      borderRadius: s,
      motionDurationMid: c,
      colorTextDisabled: d,
      colorTextPlaceholder: u,
      colorTextQuaternary: p,
      fontSizeLG: m,
      inputFontSizeLG: g,
      fontSizeSM: b,
      inputFontSizeSM: f,
      controlHeightSM: h,
      paddingInlineSM: $,
      paddingXS: v,
      marginXS: y,
      colorIcon: x,
      lineWidthBold: C,
      colorPrimary: S,
      motionDurationSlow: O,
      zIndexPopup: k,
      paddingXXS: w,
      sizePopupArrow: E,
      colorBgElevated: j,
      borderRadiusLG: P,
      boxShadowSecondary: B,
      borderRadiusSM: z,
      colorSplit: M,
      cellHoverBg: H,
      presetsWidth: T,
      presetsMaxWidth: R,
      boxShadowPopoverArrow: N,
      fontHeight: L,
      lineHeightLG: F,
    } = e;
    return [
      {
        [o]: Object.assign(
          Object.assign(
            Object.assign({}, oo(e)),
            oc(e.paddingBlock, e.paddingInline),
          ),
          {
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            lineHeight: 1,
            borderRadius: s,
            transition: `border ${c}, box-shadow ${c}, background ${c}`,
            [`${o}-prefix`]: {
              flex: '0 0 auto',
              marginInlineEnd: e.inputAffixPadding,
            },
            [`${o}-input`]: {
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              width: '100%',
              '> input': Object.assign(
                Object.assign(
                  {
                    position: 'relative',
                    display: 'inline-block',
                    width: '100%',
                    color: 'inherit',
                    fontSize:
                      null !== (t = e.inputFontSize) && void 0 !== t
                        ? t
                        : e.fontSize,
                    lineHeight: e.lineHeight,
                    transition: `all ${c}`,
                  },
                  Ns(u),
                ),
                {
                  flex: 'auto',
                  minWidth: 1,
                  height: 'auto',
                  padding: 0,
                  background: 'transparent',
                  border: 0,
                  fontFamily: 'inherit',
                  '&:focus': { boxShadow: 'none', outline: 0 },
                  '&[disabled]': {
                    background: 'transparent',
                    color: d,
                    cursor: 'not-allowed',
                  },
                },
              ),
              '&-placeholder': { '> input': { color: u } },
            },
            '&-large': Object.assign(
              Object.assign({}, oc(e.paddingBlockLG, e.paddingInlineLG)),
              {
                [`${o}-input > input`]: {
                  fontSize: null != g ? g : m,
                  lineHeight: F,
                },
              },
            ),
            '&-small': Object.assign(
              Object.assign({}, oc(e.paddingBlockSM, e.paddingInlineSM)),
              { [`${o}-input > input`]: { fontSize: null != f ? f : b } },
            ),
            [`${o}-suffix`]: {
              display: 'flex',
              flex: 'none',
              alignSelf: 'center',
              marginInlineStart: e.calc(v).div(2).equal(),
              color: p,
              lineHeight: 1,
              pointerEvents: 'none',
              transition: `opacity ${c}, color ${c}`,
              '> *': {
                verticalAlign: 'top',
                '&:not(:last-child)': { marginInlineEnd: y },
              },
            },
            [`${o}-clear`]: {
              position: 'absolute',
              top: '50%',
              insetInlineEnd: 0,
              color: p,
              lineHeight: 1,
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              opacity: 0,
              transition: `opacity ${c}, color ${c}`,
              '> *': { verticalAlign: 'top' },
              '&:hover': { color: x },
            },
            '&:hover': {
              [`${o}-clear`]: { opacity: 1 },
              [`${o}-suffix:not(:last-child)`]: { opacity: 0 },
            },
            [`${o}-separator`]: {
              position: 'relative',
              display: 'inline-block',
              width: '1em',
              height: m,
              color: p,
              fontSize: m,
              verticalAlign: 'top',
              cursor: 'default',
              [`${o}-focused &`]: { color: x },
              [`${o}-range-separator &`]: {
                [`${o}-disabled &`]: { cursor: 'not-allowed' },
              },
            },
            '&-range': {
              position: 'relative',
              display: 'inline-flex',
              [`${o}-active-bar`]: {
                bottom: e.calc(i).mul(-1).equal(),
                height: C,
                background: S,
                opacity: 0,
                transition: `all ${O} ease-out`,
                pointerEvents: 'none',
              },
              [`&${o}-focused`]: { [`${o}-active-bar`]: { opacity: 1 } },
              [`${o}-range-separator`]: {
                alignItems: 'center',
                padding: `0 ${I(v)}`,
                lineHeight: 1,
              },
            },
            '&-range, &-multiple': {
              [`${o}-clear`]: { insetInlineEnd: r },
              [`&${o}-small`]: { [`${o}-clear`]: { insetInlineEnd: $ } },
            },
            '&-dropdown': Object.assign(
              Object.assign(Object.assign({}, oo(e)), Js(e)),
              {
                pointerEvents: 'none',
                position: 'absolute',
                top: -9999,
                left: { _skip_check_: !0, value: -9999 },
                zIndex: k,
                [`&${o}-dropdown-hidden`]: { display: 'none' },
                '&-rtl': { direction: 'rtl' },
                [`&${o}-dropdown-placement-bottomLeft,\n            &${o}-dropdown-placement-bottomRight`]:
                  {
                    [`${o}-range-arrow`]: {
                      top: 0,
                      display: 'block',
                      transform: 'translateY(-100%)',
                    },
                  },
                [`&${o}-dropdown-placement-topLeft,\n            &${o}-dropdown-placement-topRight`]:
                  {
                    [`${o}-range-arrow`]: {
                      bottom: 0,
                      display: 'block',
                      transform: 'translateY(100%) rotate(180deg)',
                    },
                  },
                [`&${n}-slide-up-appear, &${n}-slide-up-enter`]: {
                  [`${o}-range-arrow${o}-range-arrow`]: { transition: 'none' },
                },
                [`&${n}-slide-up-enter${n}-slide-up-enter-active${o}-dropdown-placement-topLeft,\n          &${n}-slide-up-enter${n}-slide-up-enter-active${o}-dropdown-placement-topRight,\n          &${n}-slide-up-appear${n}-slide-up-appear-active${o}-dropdown-placement-topLeft,\n          &${n}-slide-up-appear${n}-slide-up-appear-active${o}-dropdown-placement-topRight`]:
                  { animationName: or },
                [`&${n}-slide-up-enter${n}-slide-up-enter-active${o}-dropdown-placement-bottomLeft,\n          &${n}-slide-up-enter${n}-slide-up-enter-active${o}-dropdown-placement-bottomRight,\n          &${n}-slide-up-appear${n}-slide-up-appear-active${o}-dropdown-placement-bottomLeft,\n          &${n}-slide-up-appear${n}-slide-up-appear-active${o}-dropdown-placement-bottomRight`]:
                  { animationName: er },
                [`&${n}-slide-up-leave ${o}-panel-container`]: {
                  pointerEvents: 'none',
                },
                [`&${n}-slide-up-leave${n}-slide-up-leave-active${o}-dropdown-placement-topLeft,\n          &${n}-slide-up-leave${n}-slide-up-leave-active${o}-dropdown-placement-topRight`]:
                  { animationName: nr },
                [`&${n}-slide-up-leave${n}-slide-up-leave-active${o}-dropdown-placement-bottomLeft,\n          &${n}-slide-up-leave${n}-slide-up-leave-active${o}-dropdown-placement-bottomRight`]:
                  { animationName: tr },
                [`${o}-panel > ${o}-time-panel`]: { paddingTop: w },
                [`${o}-range-wrapper`]: {
                  display: 'flex',
                  position: 'relative',
                },
                [`${o}-range-arrow`]: Object.assign(
                  Object.assign(
                    {
                      position: 'absolute',
                      zIndex: 1,
                      display: 'none',
                      paddingInline: e.calc(r).mul(1.5).equal(),
                      boxSizing: 'content-box',
                      transition: `all ${O} ease-out`,
                    },
                    Hl(e, j, N),
                  ),
                  {
                    '&:before': {
                      insetInlineStart: e.calc(r).mul(1.5).equal(),
                    },
                  },
                ),
                [`${o}-panel-container`]: {
                  overflow: 'hidden',
                  verticalAlign: 'top',
                  background: j,
                  borderRadius: P,
                  boxShadow: B,
                  transition: `margin ${O}`,
                  display: 'inline-block',
                  pointerEvents: 'auto',
                  [`${o}-panel-layout`]: {
                    display: 'flex',
                    flexWrap: 'nowrap',
                    alignItems: 'stretch',
                  },
                  [`${o}-presets`]: {
                    display: 'flex',
                    flexDirection: 'column',
                    minWidth: T,
                    maxWidth: R,
                    ul: {
                      height: 0,
                      flex: 'auto',
                      listStyle: 'none',
                      overflow: 'auto',
                      margin: 0,
                      padding: v,
                      borderInlineEnd: `${I(i)} ${a} ${M}`,
                      li: Object.assign(Object.assign({}, to), {
                        borderRadius: z,
                        paddingInline: v,
                        paddingBlock: e.calc(h).sub(L).div(2).equal(),
                        cursor: 'pointer',
                        transition: `all ${O}`,
                        '+ li': { marginTop: y },
                        '&:hover': { background: H },
                      }),
                    },
                  },
                  [`${o}-panels`]: {
                    display: 'inline-flex',
                    flexWrap: 'nowrap',
                    '&:last-child': { [`${o}-panel`]: { borderWidth: 0 } },
                  },
                  [`${o}-panel`]: {
                    verticalAlign: 'top',
                    background: 'transparent',
                    borderRadius: 0,
                    borderWidth: 0,
                    [`${o}-content, table`]: { textAlign: 'center' },
                    '&-focused': { borderColor: l },
                  },
                },
              },
            ),
            '&-dropdown-range': {
              padding: `${I(e.calc(E).mul(2).div(3).equal())} 0`,
              '&-hidden': { display: 'none' },
            },
            '&-rtl': {
              direction: 'rtl',
              [`${o}-separator`]: { transform: 'scale(-1, 1)' },
              [`${o}-footer`]: { '&-extra': { direction: 'rtl' } },
            },
          },
        ),
      },
      cr(e, 'slide-up'),
      cr(e, 'slide-down'),
      Jn(e, 'move-up'),
      Jn(e, 'move-down'),
    ];
  },
  ic = lo(
    'DatePicker',
    (e) => {
      const t = T(
        vs(e),
        ((e) => {
          const {
            componentCls: t,
            controlHeightLG: o,
            paddingXXS: n,
            padding: r,
          } = e;
          return {
            pickerCellCls: `${t}-cell`,
            pickerCellInnerCls: `${t}-cell-inner`,
            pickerYearMonthCellWidth: e.calc(o).mul(1.5).equal(),
            pickerQuarterPanelContentHeight: e.calc(o).mul(1.4).equal(),
            pickerCellPaddingVertical: e.calc(n).add(e.calc(n).div(2)).equal(),
            pickerCellBorderGap: 2,
            pickerControlIconSize: 7,
            pickerControlIconMargin: 4,
            pickerControlIconBorderWidth: 1.5,
            pickerDatePanelPaddingHorizontal: e
              .calc(r)
              .add(e.calc(n).div(2))
              .equal(),
          };
        })(e),
        {
          inputPaddingHorizontalBase: e.calc(e.paddingSM).sub(1).equal(),
          multipleSelectItemHeight: e.multipleItemHeight,
          selectHeight: e.controlHeight,
        },
      );
      return [
        ec(t),
        rc(t),
        tc(t),
        nc(t),
        Qs(t),
        Vr(e, { focusElCls: `${e.componentCls}-focused` }),
      ];
    },
    (e) =>
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign({}, ys(e)),
            ((e) => {
              const {
                  colorBgContainerDisabled: t,
                  controlHeight: o,
                  controlHeightSM: n,
                  controlHeightLG: r,
                  paddingXXS: i,
                  lineWidth: a,
                } = e,
                l = 2 * i,
                s = 2 * a,
                c = Math.min(o - l, o - s),
                d = Math.min(n - l, n - s),
                u = Math.min(r - l, r - s);
              return {
                INTERNAL_FIXED_ITEM_MARGIN: Math.floor(i / 2),
                cellHoverBg: e.controlItemBgHover,
                cellActiveWithRangeBg: e.controlItemBgActive,
                cellHoverWithRangeBg: new S(e.colorPrimary)
                  .lighten(35)
                  .toHexString(),
                cellRangeBorderColor: new S(e.colorPrimary)
                  .lighten(20)
                  .toHexString(),
                cellBgDisabled: t,
                timeColumnWidth: 1.4 * r,
                timeColumnHeight: 224,
                timeCellHeight: 28,
                cellWidth: 1.5 * n,
                cellHeight: n,
                textHeight: r,
                withoutTimeCellHeight: 1.65 * r,
                multipleItemBg: e.colorFillSecondary,
                multipleItemBorderColor: 'transparent',
                multipleItemHeight: c,
                multipleItemHeightSM: d,
                multipleItemHeightLG: u,
                multipleSelectorBgDisabled: t,
                multipleItemColorDisabled: e.colorTextDisabled,
                multipleItemBorderColorDisabled: 'transparent',
              };
            })(e),
          ),
          Ml(e),
        ),
        {
          presetsWidth: 120,
          presetsMaxWidth: 200,
          zIndexPopup: e.zIndexPopupBase + 50,
        },
      ),
  ),
  ac = { motionAppear: !1, motionEnter: !0, motionLeave: !0 };
function lc(e, t) {
  if (e)
    return e.map((e) => {
      var t;
      const o =
        null !== (t = e.destroyOnHidden) && void 0 !== t
          ? t
          : e.destroyInactiveTabPane;
      return Object.assign(Object.assign({}, e), { destroyInactiveTabPane: o });
    });
  return (function (e) {
    return e.filter((e) => e);
  })(
    g(t).map((e) => {
      if (le.isValidElement(e)) {
        const { key: t, props: o } = e,
          n = o || {},
          { tab: r } = n,
          i = (function (e, t) {
            var o = {};
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) &&
                t.indexOf(n) < 0 &&
                (o[n] = e[n]);
            if (
              null != e &&
              'function' == typeof Object.getOwnPropertySymbols
            ) {
              var r = 0;
              for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                t.indexOf(n[r]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                  (o[n[r]] = e[n[r]]);
            }
            return o;
          })(n, ['tab']);
        return Object.assign(Object.assign({ key: String(t) }, i), {
          label: r,
        });
      }
      return null;
    }),
  );
}
const sc = (e) => {
    const { componentCls: t, motionDurationSlow: o } = e;
    return [
      {
        [t]: {
          [`${t}-switch`]: {
            '&-appear, &-enter': {
              transition: 'none',
              '&-start': { opacity: 0 },
              '&-active': { opacity: 1, transition: `opacity ${o}` },
            },
            '&-leave': {
              position: 'absolute',
              transition: 'none',
              inset: 0,
              '&-start': { opacity: 1 },
              '&-active': { opacity: 0, transition: `opacity ${o}` },
            },
          },
        },
      },
      [cr(e, 'slide-up'), cr(e, 'slide-down')],
    ];
  },
  cc = (e) => {
    const {
      componentCls: t,
      tabsCardPadding: o,
      cardBg: n,
      cardGutter: r,
      colorBorderSecondary: i,
      itemSelectedColor: a,
    } = e;
    return {
      [`${t}-card`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            margin: 0,
            padding: o,
            background: n,
            border: `${I(e.lineWidth)} ${e.lineType} ${i}`,
            transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`,
          },
          [`${t}-tab-active`]: { color: a, background: e.colorBgContainer },
          [`${t}-tab-focus:has(${t}-tab-btn:focus-visible)`]: no(e, -3),
          [`& ${t}-tab${t}-tab-focus ${t}-tab-btn:focus-visible`]: {
            outline: 'none',
          },
          [`${t}-ink-bar`]: { visibility: 'hidden' },
        },
        [`&${t}-top, &${t}-bottom`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab + ${t}-tab`]: {
              marginLeft: { _skip_check_: !0, value: I(r) },
            },
          },
        },
        [`&${t}-top`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab`]: {
              borderRadius: `${I(e.borderRadiusLG)} ${I(e.borderRadiusLG)} 0 0`,
            },
            [`${t}-tab-active`]: { borderBottomColor: e.colorBgContainer },
          },
        },
        [`&${t}-bottom`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab`]: {
              borderRadius: `0 0 ${I(e.borderRadiusLG)} ${I(e.borderRadiusLG)}`,
            },
            [`${t}-tab-active`]: { borderTopColor: e.colorBgContainer },
          },
        },
        [`&${t}-left, &${t}-right`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab + ${t}-tab`]: { marginTop: I(r) },
          },
        },
        [`&${t}-left`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab`]: {
              borderRadius: {
                _skip_check_: !0,
                value: `${I(e.borderRadiusLG)} 0 0 ${I(e.borderRadiusLG)}`,
              },
            },
            [`${t}-tab-active`]: {
              borderRightColor: { _skip_check_: !0, value: e.colorBgContainer },
            },
          },
        },
        [`&${t}-right`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab`]: {
              borderRadius: {
                _skip_check_: !0,
                value: `0 ${I(e.borderRadiusLG)} ${I(e.borderRadiusLG)} 0`,
              },
            },
            [`${t}-tab-active`]: {
              borderLeftColor: { _skip_check_: !0, value: e.colorBgContainer },
            },
          },
        },
      },
    };
  },
  dc = (e) => {
    const {
      componentCls: t,
      itemHoverColor: o,
      dropdownEdgeChildVerticalPadding: n,
    } = e;
    return {
      [`${t}-dropdown`]: Object.assign(Object.assign({}, oo(e)), {
        position: 'absolute',
        top: -9999,
        left: { _skip_check_: !0, value: -9999 },
        zIndex: e.zIndexPopup,
        display: 'block',
        '&-hidden': { display: 'none' },
        [`${t}-dropdown-menu`]: {
          maxHeight: e.tabsDropdownHeight,
          margin: 0,
          padding: `${I(n)} 0`,
          overflowX: 'hidden',
          overflowY: 'auto',
          textAlign: { _skip_check_: !0, value: 'left' },
          listStyleType: 'none',
          backgroundColor: e.colorBgContainer,
          backgroundClip: 'padding-box',
          borderRadius: e.borderRadiusLG,
          outline: 'none',
          boxShadow: e.boxShadowSecondary,
          '&-item': Object.assign(Object.assign({}, to), {
            display: 'flex',
            alignItems: 'center',
            minWidth: e.tabsDropdownWidth,
            margin: 0,
            padding: `${I(e.paddingXXS)} ${I(e.paddingSM)}`,
            color: e.colorText,
            fontWeight: 'normal',
            fontSize: e.fontSize,
            lineHeight: e.lineHeight,
            cursor: 'pointer',
            transition: `all ${e.motionDurationSlow}`,
            '> span': { flex: 1, whiteSpace: 'nowrap' },
            '&-remove': {
              flex: 'none',
              marginLeft: { _skip_check_: !0, value: e.marginSM },
              color: e.colorIcon,
              fontSize: e.fontSizeSM,
              background: 'transparent',
              border: 0,
              cursor: 'pointer',
              '&:hover': { color: o },
            },
            '&:hover': { background: e.controlItemBgHover },
            '&-disabled': {
              '&, &:hover': {
                color: e.colorTextDisabled,
                background: 'transparent',
                cursor: 'not-allowed',
              },
            },
          }),
        },
      }),
    };
  },
  uc = (e) => {
    const {
      componentCls: t,
      margin: o,
      colorBorderSecondary: n,
      horizontalMargin: r,
      verticalItemPadding: i,
      verticalItemMargin: a,
      calc: l,
    } = e;
    return {
      [`${t}-top, ${t}-bottom`]: {
        flexDirection: 'column',
        [`> ${t}-nav, > div > ${t}-nav`]: {
          margin: r,
          '&::before': {
            position: 'absolute',
            right: { _skip_check_: !0, value: 0 },
            left: { _skip_check_: !0, value: 0 },
            borderBottom: `${I(e.lineWidth)} ${e.lineType} ${n}`,
            content: "''",
          },
          [`${t}-ink-bar`]: {
            height: e.lineWidthBold,
            '&-animated': {
              transition: `width ${e.motionDurationSlow}, left ${e.motionDurationSlow},\n            right ${e.motionDurationSlow}`,
            },
          },
          [`${t}-nav-wrap`]: {
            '&::before, &::after': {
              top: 0,
              bottom: 0,
              width: e.controlHeight,
            },
            '&::before': {
              left: { _skip_check_: !0, value: 0 },
              boxShadow: e.boxShadowTabsOverflowLeft,
            },
            '&::after': {
              right: { _skip_check_: !0, value: 0 },
              boxShadow: e.boxShadowTabsOverflowRight,
            },
            [`&${t}-nav-wrap-ping-left::before`]: { opacity: 1 },
            [`&${t}-nav-wrap-ping-right::after`]: { opacity: 1 },
          },
        },
      },
      [`${t}-top`]: {
        [`> ${t}-nav,\n        > div > ${t}-nav`]: {
          '&::before': { bottom: 0 },
          [`${t}-ink-bar`]: { bottom: 0 },
        },
      },
      [`${t}-bottom`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          order: 1,
          marginTop: o,
          marginBottom: 0,
          '&::before': { top: 0 },
          [`${t}-ink-bar`]: { top: 0 },
        },
        [`> ${t}-content-holder, > div > ${t}-content-holder`]: { order: 0 },
      },
      [`${t}-left, ${t}-right`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          flexDirection: 'column',
          minWidth: l(e.controlHeight).mul(1.25).equal(),
          [`${t}-tab`]: { padding: i, textAlign: 'center' },
          [`${t}-tab + ${t}-tab`]: { margin: a },
          [`${t}-nav-wrap`]: {
            flexDirection: 'column',
            '&::before, &::after': {
              right: { _skip_check_: !0, value: 0 },
              left: { _skip_check_: !0, value: 0 },
              height: e.controlHeight,
            },
            '&::before': { top: 0, boxShadow: e.boxShadowTabsOverflowTop },
            '&::after': { bottom: 0, boxShadow: e.boxShadowTabsOverflowBottom },
            [`&${t}-nav-wrap-ping-top::before`]: { opacity: 1 },
            [`&${t}-nav-wrap-ping-bottom::after`]: { opacity: 1 },
          },
          [`${t}-ink-bar`]: {
            width: e.lineWidthBold,
            '&-animated': {
              transition: `height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`,
            },
          },
          [`${t}-nav-list, ${t}-nav-operations`]: {
            flex: '1 0 auto',
            flexDirection: 'column',
          },
        },
      },
      [`${t}-left`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-ink-bar`]: { right: { _skip_check_: !0, value: 0 } },
        },
        [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
          marginLeft: {
            _skip_check_: !0,
            value: I(l(e.lineWidth).mul(-1).equal()),
          },
          borderLeft: {
            _skip_check_: !0,
            value: `${I(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          },
          [`> ${t}-content > ${t}-tabpane`]: {
            paddingLeft: { _skip_check_: !0, value: e.paddingLG },
          },
        },
      },
      [`${t}-right`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          order: 1,
          [`${t}-ink-bar`]: { left: { _skip_check_: !0, value: 0 } },
        },
        [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
          order: 0,
          marginRight: {
            _skip_check_: !0,
            value: l(e.lineWidth).mul(-1).equal(),
          },
          borderRight: {
            _skip_check_: !0,
            value: `${I(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          },
          [`> ${t}-content > ${t}-tabpane`]: {
            paddingRight: { _skip_check_: !0, value: e.paddingLG },
          },
        },
      },
    };
  },
  pc = (e) => {
    const {
      componentCls: t,
      cardPaddingSM: o,
      cardPaddingLG: n,
      cardHeightSM: r,
      cardHeightLG: i,
      horizontalItemPaddingSM: a,
      horizontalItemPaddingLG: l,
    } = e;
    return {
      [t]: {
        '&-small': {
          [`> ${t}-nav`]: {
            [`${t}-tab`]: { padding: a, fontSize: e.titleFontSizeSM },
          },
        },
        '&-large': {
          [`> ${t}-nav`]: {
            [`${t}-tab`]: {
              padding: l,
              fontSize: e.titleFontSizeLG,
              lineHeight: e.lineHeightLG,
            },
          },
        },
      },
      [`${t}-card`]: {
        [`&${t}-small`]: {
          [`> ${t}-nav`]: {
            [`${t}-tab`]: { padding: o },
            [`${t}-nav-add`]: { minWidth: r, minHeight: r },
          },
          [`&${t}-bottom`]: {
            [`> ${t}-nav ${t}-tab`]: {
              borderRadius: `0 0 ${I(e.borderRadius)} ${I(e.borderRadius)}`,
            },
          },
          [`&${t}-top`]: {
            [`> ${t}-nav ${t}-tab`]: {
              borderRadius: `${I(e.borderRadius)} ${I(e.borderRadius)} 0 0`,
            },
          },
          [`&${t}-right`]: {
            [`> ${t}-nav ${t}-tab`]: {
              borderRadius: {
                _skip_check_: !0,
                value: `0 ${I(e.borderRadius)} ${I(e.borderRadius)} 0`,
              },
            },
          },
          [`&${t}-left`]: {
            [`> ${t}-nav ${t}-tab`]: {
              borderRadius: {
                _skip_check_: !0,
                value: `${I(e.borderRadius)} 0 0 ${I(e.borderRadius)}`,
              },
            },
          },
        },
        [`&${t}-large`]: {
          [`> ${t}-nav`]: {
            [`${t}-tab`]: { padding: n },
            [`${t}-nav-add`]: { minWidth: i, minHeight: i },
          },
        },
      },
    };
  },
  mc = (e) => {
    const {
        componentCls: t,
        itemActiveColor: o,
        itemHoverColor: n,
        iconCls: r,
        tabsHorizontalItemMargin: i,
        horizontalItemPadding: a,
        itemSelectedColor: l,
        itemColor: s,
      } = e,
      c = `${t}-tab`;
    return {
      [c]: {
        position: 'relative',
        WebkitTouchCallout: 'none',
        WebkitTapHighlightColor: 'transparent',
        display: 'inline-flex',
        alignItems: 'center',
        padding: a,
        fontSize: e.titleFontSize,
        background: 'transparent',
        border: 0,
        outline: 'none',
        cursor: 'pointer',
        color: s,
        '&-btn, &-remove': {
          '&:focus:not(:focus-visible), &:active': { color: o },
        },
        '&-btn': {
          outline: 'none',
          transition: `all ${e.motionDurationSlow}`,
          [`${c}-icon:not(:last-child)`]: { marginInlineEnd: e.marginSM },
        },
        '&-remove': Object.assign(
          {
            flex: 'none',
            lineHeight: 1,
            marginRight: {
              _skip_check_: !0,
              value: e.calc(e.marginXXS).mul(-1).equal(),
            },
            marginLeft: { _skip_check_: !0, value: e.marginXS },
            color: e.colorIcon,
            fontSize: e.fontSizeSM,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            transition: `all ${e.motionDurationSlow}`,
            '&:hover': { color: e.colorTextHeading },
          },
          ro(e),
        ),
        '&:hover': { color: n },
        [`&${c}-active ${c}-btn`]: {
          color: l,
          textShadow: e.tabsActiveTextShadow,
        },
        [`&${c}-focus ${c}-btn:focus-visible`]: no(e),
        [`&${c}-disabled`]: {
          color: e.colorTextDisabled,
          cursor: 'not-allowed',
        },
        [`&${c}-disabled ${c}-btn, &${c}-disabled ${t}-remove`]: {
          '&:focus, &:active': { color: e.colorTextDisabled },
        },
        [`& ${c}-remove ${r}`]: { margin: 0, verticalAlign: 'middle' },
        [`${r}:not(:last-child)`]: {
          marginRight: { _skip_check_: !0, value: e.marginSM },
        },
      },
      [`${c} + ${c}`]: { margin: { _skip_check_: !0, value: i } },
    };
  },
  gc = (e) => {
    const {
        componentCls: t,
        tabsHorizontalItemMarginRTL: o,
        iconCls: n,
        cardGutter: r,
        calc: i,
      } = e,
      a = `${t}-rtl`;
    return {
      [a]: {
        direction: 'rtl',
        [`${t}-nav`]: {
          [`${t}-tab`]: {
            margin: { _skip_check_: !0, value: o },
            [`${t}-tab:last-of-type`]: {
              marginLeft: { _skip_check_: !0, value: 0 },
            },
            [n]: {
              marginRight: { _skip_check_: !0, value: 0 },
              marginLeft: { _skip_check_: !0, value: I(e.marginSM) },
            },
            [`${t}-tab-remove`]: {
              marginRight: { _skip_check_: !0, value: I(e.marginXS) },
              marginLeft: {
                _skip_check_: !0,
                value: I(i(e.marginXXS).mul(-1).equal()),
              },
              [n]: { margin: 0 },
            },
          },
        },
        [`&${t}-left`]: {
          [`> ${t}-nav`]: { order: 1 },
          [`> ${t}-content-holder`]: { order: 0 },
        },
        [`&${t}-right`]: {
          [`> ${t}-nav`]: { order: 0 },
          [`> ${t}-content-holder`]: { order: 1 },
        },
        [`&${t}-card${t}-top, &${t}-card${t}-bottom`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab + ${t}-tab`]: {
              marginRight: { _skip_check_: !0, value: r },
              marginLeft: { _skip_check_: !0, value: 0 },
            },
          },
        },
      },
      [`${t}-dropdown-rtl`]: { direction: 'rtl' },
      [`${t}-menu-item`]: {
        [`${t}-dropdown-rtl`]: {
          textAlign: { _skip_check_: !0, value: 'right' },
        },
      },
    };
  },
  bc = (e) => {
    const {
      componentCls: t,
      tabsCardPadding: o,
      cardHeight: n,
      cardGutter: r,
      itemHoverColor: i,
      itemActiveColor: a,
      colorBorderSecondary: l,
    } = e;
    return {
      [t]: Object.assign(
        Object.assign(
          Object.assign(Object.assign({}, oo(e)), {
            display: 'flex',
            [`> ${t}-nav, > div > ${t}-nav`]: {
              position: 'relative',
              display: 'flex',
              flex: 'none',
              alignItems: 'center',
              [`${t}-nav-wrap`]: {
                position: 'relative',
                display: 'flex',
                flex: 'auto',
                alignSelf: 'stretch',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                transform: 'translate(0)',
                '&::before, &::after': {
                  position: 'absolute',
                  zIndex: 1,
                  opacity: 0,
                  transition: `opacity ${e.motionDurationSlow}`,
                  content: "''",
                  pointerEvents: 'none',
                },
              },
              [`${t}-nav-list`]: {
                position: 'relative',
                display: 'flex',
                transition: `opacity ${e.motionDurationSlow}`,
              },
              [`${t}-nav-operations`]: {
                display: 'flex',
                alignSelf: 'stretch',
              },
              [`${t}-nav-operations-hidden`]: {
                position: 'absolute',
                visibility: 'hidden',
                pointerEvents: 'none',
              },
              [`${t}-nav-more`]: {
                position: 'relative',
                padding: o,
                background: 'transparent',
                border: 0,
                color: e.colorText,
                '&::after': {
                  position: 'absolute',
                  right: { _skip_check_: !0, value: 0 },
                  bottom: 0,
                  left: { _skip_check_: !0, value: 0 },
                  height: e.calc(e.controlHeightLG).div(8).equal(),
                  transform: 'translateY(100%)',
                  content: "''",
                },
              },
              [`${t}-nav-add`]: Object.assign(
                {
                  minWidth: n,
                  minHeight: n,
                  marginLeft: { _skip_check_: !0, value: r },
                  background: 'transparent',
                  border: `${I(e.lineWidth)} ${e.lineType} ${l}`,
                  borderRadius: `${I(e.borderRadiusLG)} ${I(e.borderRadiusLG)} 0 0`,
                  outline: 'none',
                  cursor: 'pointer',
                  color: e.colorText,
                  transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`,
                  '&:hover': { color: i },
                  '&:active, &:focus:not(:focus-visible)': { color: a },
                },
                ro(e, -3),
              ),
            },
            [`${t}-extra-content`]: { flex: 'none' },
            [`${t}-ink-bar`]: {
              position: 'absolute',
              background: e.inkBarColor,
              pointerEvents: 'none',
            },
          }),
          mc(e),
        ),
        {
          [`${t}-content`]: { position: 'relative', width: '100%' },
          [`${t}-content-holder`]: { flex: 'auto', minWidth: 0, minHeight: 0 },
          [`${t}-tabpane`]: Object.assign(Object.assign({}, ro(e)), {
            '&-hidden': { display: 'none' },
          }),
        },
      ),
      [`${t}-centered`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-nav-wrap`]: {
            [`&:not([class*='${t}-nav-wrap-ping']) > ${t}-nav-list`]: {
              margin: 'auto',
            },
          },
        },
      },
    };
  },
  fc = lo(
    'Tabs',
    (e) => {
      const t = T(e, {
        tabsCardPadding: e.cardPadding,
        dropdownEdgeChildVerticalPadding: e.paddingXXS,
        tabsActiveTextShadow: '0 0 0.25px currentcolor',
        tabsDropdownHeight: 200,
        tabsDropdownWidth: 120,
        tabsHorizontalItemMargin: `0 0 0 ${I(e.horizontalItemGutter)}`,
        tabsHorizontalItemMarginRTL: `0 0 0 ${I(e.horizontalItemGutter)}`,
      });
      return [pc(t), gc(t), uc(t), dc(t), cc(t), bc(t), sc(t)];
    },
    (e) => {
      const {
          cardHeight: t,
          cardHeightSM: o,
          cardHeightLG: n,
          controlHeight: r,
          controlHeightLG: i,
        } = e,
        a = t || i,
        l = o || r,
        s = n || i + 8;
      return {
        zIndexPopup: e.zIndexPopupBase + 50,
        cardBg: e.colorFillAlter,
        cardHeight: a,
        cardHeightSM: l,
        cardHeightLG: s,
        cardPadding: `${(a - e.fontHeight) / 2 - e.lineWidth}px ${e.padding}px`,
        cardPaddingSM: `${(l - e.fontHeight) / 2 - e.lineWidth}px ${e.paddingXS}px`,
        cardPaddingLG: `${(s - e.fontHeightLG) / 2 - e.lineWidth}px ${e.padding}px`,
        titleFontSize: e.fontSize,
        titleFontSizeLG: e.fontSizeLG,
        titleFontSizeSM: e.fontSize,
        inkBarColor: e.colorPrimary,
        horizontalMargin: `0 0 ${e.margin}px 0`,
        horizontalItemGutter: 32,
        horizontalItemMargin: '',
        horizontalItemMarginRTL: '',
        horizontalItemPadding: `${e.paddingSM}px 0`,
        horizontalItemPaddingSM: `${e.paddingXS}px 0`,
        horizontalItemPaddingLG: `${e.padding}px 0`,
        verticalItemPadding: `${e.paddingXS}px ${e.paddingLG}px`,
        verticalItemMargin: `${e.margin}px 0 0 0`,
        itemColor: e.colorText,
        itemSelectedColor: e.colorPrimary,
        itemHoverColor: e.colorPrimaryHover,
        itemActiveColor: e.colorPrimaryActive,
        cardGutter: e.marginXXS / 2,
      };
    },
  );
const hc = le.forwardRef((e, t) => {
  var o, n, r, i, a, l, s, c, d, u, p;
  const {
      type: m,
      className: g,
      rootClassName: b,
      size: f,
      onEdit: h,
      hideAdd: $,
      centered: v,
      addIcon: y,
      removeIcon: x,
      moreIcon: C,
      more: S,
      popupClassName: O,
      children: k,
      items: w,
      animated: E,
      style: j,
      indicatorSize: I,
      indicator: P,
      destroyInactiveTabPane: B,
      destroyOnHidden: z,
    } = e,
    M = (function (e, t) {
      var o = {};
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) &&
          t.indexOf(n) < 0 &&
          (o[n] = e[n]);
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var r = 0;
        for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
          t.indexOf(n[r]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
            (o[n[r]] = e[n[r]]);
      }
      return o;
    })(e, [
      'type',
      'className',
      'rootClassName',
      'size',
      'onEdit',
      'hideAdd',
      'centered',
      'addIcon',
      'removeIcon',
      'moreIcon',
      'more',
      'popupClassName',
      'children',
      'items',
      'animated',
      'style',
      'indicatorSize',
      'indicator',
      'destroyInactiveTabPane',
      'destroyOnHidden',
    ]),
    { prefixCls: T } = M,
    {
      direction: R,
      tabs: N,
      getPrefixCls: L,
      getPopupContainer: F,
    } = le.useContext(Tt),
    A = L('tabs', T),
    D = Bo(A),
    [W, _, G] = fc(A, D),
    V = le.useRef(null);
  let K;
  (le.useImperativeHandle(t, () => ({ nativeElement: V.current })),
    'editable-card' === m &&
      (K = {
        onEdit: (e, { key: t, event: o }) => {
          null == h || h('add' === e ? o : t, e);
        },
        removeIcon:
          null !== (o = null != x ? x : null == N ? void 0 : N.removeIcon) &&
          void 0 !== o
            ? o
            : le.createElement(H, null),
        addIcon:
          (null != y ? y : null == N ? void 0 : N.addIcon) ||
          le.createElement(q, null),
        showAdd: !0 !== $,
      }));
  const U = L(),
    Y = hn(f),
    Q = lc(w, k),
    Z = (function (e, t = { inkBar: !0, tabPane: !1 }) {
      let o;
      return (
        (o =
          !1 === t
            ? { inkBar: !1, tabPane: !1 }
            : !0 === t
              ? { inkBar: !0, tabPane: !0 }
              : Object.assign({ inkBar: !0 }, 'object' == typeof t ? t : {})),
        o.tabPane &&
          (o.tabPaneMotion = Object.assign(Object.assign({}, ac), {
            motionName: sn(e, 'switch'),
          })),
        o
      );
    })(A, E),
    J = Object.assign(Object.assign({}, null == N ? void 0 : N.style), j),
    ee = {
      align:
        null !== (n = null == P ? void 0 : P.align) && void 0 !== n
          ? n
          : null === (r = null == N ? void 0 : N.indicator) || void 0 === r
            ? void 0
            : r.align,
      size:
        null !==
          (s =
            null !==
              (a =
                null !== (i = null == P ? void 0 : P.size) && void 0 !== i
                  ? i
                  : I) && void 0 !== a
              ? a
              : null === (l = null == N ? void 0 : N.indicator) || void 0 === l
                ? void 0
                : l.size) && void 0 !== s
          ? s
          : null == N
            ? void 0
            : N.indicatorSize,
    };
  return W(
    le.createElement(
      we,
      Object.assign({ ref: V, direction: R, getPopupContainer: F }, M, {
        items: Q,
        className: de(
          {
            [`${A}-${Y}`]: Y,
            [`${A}-card`]: ['card', 'editable-card'].includes(m),
            [`${A}-editable-card`]: 'editable-card' === m,
            [`${A}-centered`]: v,
          },
          null == N ? void 0 : N.className,
          g,
          b,
          _,
          G,
          D,
        ),
        popupClassName: de(O, _, G, D),
        style: J,
        editable: K,
        more: Object.assign(
          {
            icon:
              null !==
                (p =
                  null !==
                    (u =
                      null !==
                        (d =
                          null === (c = null == N ? void 0 : N.more) ||
                          void 0 === c
                            ? void 0
                            : c.icon) && void 0 !== d
                        ? d
                        : null == N
                          ? void 0
                          : N.moreIcon) && void 0 !== u
                    ? u
                    : C) && void 0 !== p
                ? p
                : le.createElement(X, null),
            transitionName: `${U}-slide-up`,
          },
          S,
        ),
        prefixCls: A,
        animated: Z,
        indicator: ee,
        destroyInactiveTabPane: null != z ? z : B,
      }),
    ),
  );
});
hc.TabPane = () => null;
const $c = (e) => {
    var { prefixCls: t, className: o, hoverable: n = !0 } = e,
      r = (function (e, t) {
        var o = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (o[n] = e[n]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            t.indexOf(n[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
              (o[n[r]] = e[n[r]]);
        }
        return o;
      })(e, ['prefixCls', 'className', 'hoverable']);
    const { getPrefixCls: i } = le.useContext(Tt),
      a = i('card', t),
      l = de(`${a}-grid`, o, { [`${a}-grid-hoverable`]: n });
    return le.createElement('div', Object.assign({}, r, { className: l }));
  },
  vc = (e) => {
    const {
      antCls: t,
      componentCls: o,
      headerHeight: n,
      headerPadding: r,
      tabsMarginBottom: i,
    } = e;
    return Object.assign(
      Object.assign(
        {
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          minHeight: n,
          marginBottom: -1,
          padding: `0 ${I(r)}`,
          color: e.colorTextHeading,
          fontWeight: e.fontWeightStrong,
          fontSize: e.headerFontSize,
          background: e.headerBg,
          borderBottom: `${I(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`,
          borderRadius: `${I(e.borderRadiusLG)} ${I(e.borderRadiusLG)} 0 0`,
        },
        {
          '&::before': { display: 'table', content: '""' },
          '&::after': { display: 'table', clear: 'both', content: '""' },
        },
      ),
      {
        '&-wrapper': { width: '100%', display: 'flex', alignItems: 'center' },
        '&-title': Object.assign(
          Object.assign({ display: 'inline-block', flex: 1 }, to),
          {
            [`\n          > ${o}-typography,\n          > ${o}-typography-edit-content\n        `]:
              { insetInlineStart: 0, marginTop: 0, marginBottom: 0 },
          },
        ),
        [`${t}-tabs-top`]: {
          clear: 'both',
          marginBottom: i,
          color: e.colorText,
          fontWeight: 'normal',
          fontSize: e.fontSize,
          '&-bar': {
            borderBottom: `${I(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`,
          },
        },
      },
    );
  },
  yc = (e) => {
    const {
      cardPaddingBase: t,
      colorBorderSecondary: o,
      cardShadow: n,
      lineWidth: r,
    } = e;
    return {
      width: '33.33%',
      padding: t,
      border: 0,
      borderRadius: 0,
      boxShadow: `\n      ${I(r)} 0 0 0 ${o},\n      0 ${I(r)} 0 0 ${o},\n      ${I(r)} ${I(r)} 0 0 ${o},\n      ${I(r)} 0 0 0 ${o} inset,\n      0 ${I(r)} 0 0 ${o} inset;\n    `,
      transition: `all ${e.motionDurationMid}`,
      '&-hoverable:hover': { position: 'relative', zIndex: 1, boxShadow: n },
    };
  },
  xc = (e) => {
    const {
      componentCls: t,
      iconCls: o,
      actionsLiMargin: n,
      cardActionsIconSize: r,
      colorBorderSecondary: i,
      actionsBg: a,
    } = e;
    return Object.assign(
      Object.assign(
        {
          margin: 0,
          padding: 0,
          listStyle: 'none',
          background: a,
          borderTop: `${I(e.lineWidth)} ${e.lineType} ${i}`,
          display: 'flex',
          borderRadius: `0 0 ${I(e.borderRadiusLG)} ${I(e.borderRadiusLG)}`,
        },
        {
          '&::before': { display: 'table', content: '""' },
          '&::after': { display: 'table', clear: 'both', content: '""' },
        },
      ),
      {
        '& > li': {
          margin: n,
          color: e.colorTextDescription,
          textAlign: 'center',
          '> span': {
            position: 'relative',
            display: 'block',
            minWidth: e.calc(e.cardActionsIconSize).mul(2).equal(),
            fontSize: e.fontSize,
            lineHeight: e.lineHeight,
            cursor: 'pointer',
            '&:hover': {
              color: e.colorPrimary,
              transition: `color ${e.motionDurationMid}`,
            },
            [`a:not(${t}-btn), > ${o}`]: {
              display: 'inline-block',
              width: '100%',
              color: e.colorIcon,
              lineHeight: I(e.fontHeight),
              transition: `color ${e.motionDurationMid}`,
              '&:hover': { color: e.colorPrimary },
            },
            [`> ${o}`]: {
              fontSize: r,
              lineHeight: I(e.calc(r).mul(e.lineHeight).equal()),
            },
          },
          '&:not(:last-child)': {
            borderInlineEnd: `${I(e.lineWidth)} ${e.lineType} ${i}`,
          },
        },
      },
    );
  },
  Cc = (e) =>
    Object.assign(
      Object.assign(
        {
          margin: `${I(e.calc(e.marginXXS).mul(-1).equal())} 0`,
          display: 'flex',
        },
        {
          '&::before': { display: 'table', content: '""' },
          '&::after': { display: 'table', clear: 'both', content: '""' },
        },
      ),
      {
        '&-avatar': { paddingInlineEnd: e.padding },
        '&-detail': {
          overflow: 'hidden',
          flex: 1,
          '> div:not(:last-child)': { marginBottom: e.marginXS },
        },
        '&-title': Object.assign(
          {
            color: e.colorTextHeading,
            fontWeight: e.fontWeightStrong,
            fontSize: e.fontSizeLG,
          },
          to,
        ),
        '&-description': { color: e.colorTextDescription },
      },
    ),
  Sc = (e) => {
    const {
      componentCls: t,
      colorFillAlter: o,
      headerPadding: n,
      bodyPadding: r,
    } = e;
    return {
      [`${t}-head`]: {
        padding: `0 ${I(n)}`,
        background: o,
        '&-title': { fontSize: e.fontSize },
      },
      [`${t}-body`]: { padding: `${I(e.padding)} ${I(r)}` },
    };
  },
  Oc = (e) => {
    const { componentCls: t } = e;
    return { overflow: 'hidden', [`${t}-body`]: { userSelect: 'none' } };
  },
  kc = (e) => {
    const {
      componentCls: t,
      cardShadow: o,
      cardHeadPadding: n,
      colorBorderSecondary: r,
      boxShadowTertiary: i,
      bodyPadding: a,
      extraColor: l,
    } = e;
    return {
      [t]: Object.assign(Object.assign({}, oo(e)), {
        position: 'relative',
        background: e.colorBgContainer,
        borderRadius: e.borderRadiusLG,
        [`&:not(${t}-bordered)`]: { boxShadow: i },
        [`${t}-head`]: vc(e),
        [`${t}-extra`]: {
          marginInlineStart: 'auto',
          color: l,
          fontWeight: 'normal',
          fontSize: e.fontSize,
        },
        [`${t}-body`]: {
          padding: a,
          borderRadius: `0 0 ${I(e.borderRadiusLG)} ${I(e.borderRadiusLG)}`,
        },
        [`${t}-grid`]: yc(e),
        [`${t}-cover`]: {
          '> *': {
            display: 'block',
            width: '100%',
            borderRadius: `${I(e.borderRadiusLG)} ${I(e.borderRadiusLG)} 0 0`,
          },
        },
        [`${t}-actions`]: xc(e),
        [`${t}-meta`]: Cc(e),
      }),
      [`${t}-bordered`]: {
        border: `${I(e.lineWidth)} ${e.lineType} ${r}`,
        [`${t}-cover`]: {
          marginTop: -1,
          marginInlineStart: -1,
          marginInlineEnd: -1,
        },
      },
      [`${t}-hoverable`]: {
        cursor: 'pointer',
        transition: `box-shadow ${e.motionDurationMid}, border-color ${e.motionDurationMid}`,
        '&:hover': { borderColor: 'transparent', boxShadow: o },
      },
      [`${t}-contain-grid`]: {
        borderRadius: `${I(e.borderRadiusLG)} ${I(e.borderRadiusLG)} 0 0 `,
        [`${t}-body`]: { display: 'flex', flexWrap: 'wrap' },
        [`&:not(${t}-loading) ${t}-body`]: {
          marginBlockStart: e.calc(e.lineWidth).mul(-1).equal(),
          marginInlineStart: e.calc(e.lineWidth).mul(-1).equal(),
          padding: 0,
        },
      },
      [`${t}-contain-tabs`]: {
        [`> div${t}-head`]: {
          minHeight: 0,
          [`${t}-head-title, ${t}-extra`]: { paddingTop: n },
        },
      },
      [`${t}-type-inner`]: Sc(e),
      [`${t}-loading`]: Oc(e),
      [`${t}-rtl`]: { direction: 'rtl' },
    };
  },
  wc = (e) => {
    const {
      componentCls: t,
      bodyPaddingSM: o,
      headerPaddingSM: n,
      headerHeightSM: r,
      headerFontSizeSM: i,
    } = e;
    return {
      [`${t}-small`]: {
        [`> ${t}-head`]: {
          minHeight: r,
          padding: `0 ${I(n)}`,
          fontSize: i,
          [`> ${t}-head-wrapper`]: {
            [`> ${t}-extra`]: { fontSize: e.fontSize },
          },
        },
        [`> ${t}-body`]: { padding: o },
      },
      [`${t}-small${t}-contain-tabs`]: {
        [`> ${t}-head`]: {
          [`${t}-head-title, ${t}-extra`]: {
            paddingTop: 0,
            display: 'flex',
            alignItems: 'center',
          },
        },
      },
    };
  },
  Ec = lo(
    'Card',
    (e) => {
      const t = T(e, {
        cardShadow: e.boxShadowCard,
        cardHeadPadding: e.padding,
        cardPaddingBase: e.paddingLG,
        cardActionsIconSize: e.fontSize,
      });
      return [kc(t), wc(t)];
    },
    (e) => {
      var t, o;
      return {
        headerBg: 'transparent',
        headerFontSize: e.fontSizeLG,
        headerFontSizeSM: e.fontSize,
        headerHeight: e.fontSizeLG * e.lineHeightLG + 2 * e.padding,
        headerHeightSM: e.fontSize * e.lineHeight + 2 * e.paddingXS,
        actionsBg: e.colorBgContainer,
        actionsLiMargin: `${e.paddingSM}px 0`,
        tabsMarginBottom: -e.padding - e.lineWidth,
        extraColor: e.colorText,
        bodyPaddingSM: 12,
        headerPaddingSM: 12,
        bodyPadding:
          null !== (t = e.bodyPadding) && void 0 !== t ? t : e.paddingLG,
        headerPadding:
          null !== (o = e.headerPadding) && void 0 !== o ? o : e.paddingLG,
      };
    },
  );
var jc = function (e, t) {
  var o = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (o[n] = e[n]);
  if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
    var r = 0;
    for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
      t.indexOf(n[r]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
        (o[n[r]] = e[n[r]]);
  }
  return o;
};
const Ic = (e) => {
  const { actionClasses: t, actions: o = [], actionStyle: n } = e;
  return le.createElement(
    'ul',
    { className: t, style: n },
    o.map((e, t) => {
      const n = `action-${t}`;
      return le.createElement(
        'li',
        { style: { width: 100 / o.length + '%' }, key: n },
        le.createElement('span', null, e),
      );
    }),
  );
};
const Pc = le.forwardRef((e, t) => {
  const {
      prefixCls: o,
      className: n,
      rootClassName: r,
      style: i,
      extra: a,
      headStyle: l = {},
      bodyStyle: s = {},
      title: c,
      loading: d,
      bordered: u,
      variant: p,
      size: m,
      type: g,
      cover: b,
      actions: f,
      tabList: $,
      children: v,
      activeTabKey: y,
      defaultActiveTabKey: x,
      tabBarExtraContent: C,
      hoverable: S,
      tabProps: O = {},
      classNames: k,
      styles: w,
    } = e,
    E = jc(e, [
      'prefixCls',
      'className',
      'rootClassName',
      'style',
      'extra',
      'headStyle',
      'bodyStyle',
      'title',
      'loading',
      'bordered',
      'variant',
      'size',
      'type',
      'cover',
      'actions',
      'tabList',
      'children',
      'activeTabKey',
      'defaultActiveTabKey',
      'tabBarExtraContent',
      'hoverable',
      'tabProps',
      'classNames',
      'styles',
    ]),
    { getPrefixCls: j, direction: I, card: P } = le.useContext(Tt),
    [B] = Qa('card', p, u),
    z = (e) => {
      var t;
      return de(
        null === (t = null == P ? void 0 : P.classNames) || void 0 === t
          ? void 0
          : t[e],
        null == k ? void 0 : k[e],
      );
    },
    M = (e) => {
      var t;
      return Object.assign(
        Object.assign(
          {},
          null === (t = null == P ? void 0 : P.styles) || void 0 === t
            ? void 0
            : t[e],
        ),
        null == w ? void 0 : w[e],
      );
    },
    H = le.useMemo(() => {
      let e = !1;
      return (
        le.Children.forEach(v, (t) => {
          (null == t ? void 0 : t.type) === $c && (e = !0);
        }),
        e
      );
    }, [v]),
    T = j('card', o),
    [R, N, L] = Ec(T),
    F = le.createElement(
      ji,
      { loading: !0, active: !0, paragraph: { rows: 4 }, title: !1 },
      v,
    ),
    A = void 0 !== y,
    D = Object.assign(Object.assign({}, O), {
      [A ? 'activeKey' : 'defaultActiveKey']: A ? y : x,
      tabBarExtraContent: C,
    });
  let W;
  const _ = hn(m),
    G = _ && 'default' !== _ ? _ : 'large',
    q = $
      ? le.createElement(
          hc,
          Object.assign({ size: G }, D, {
            className: `${T}-head-tabs`,
            onChange: (t) => {
              var o;
              null === (o = e.onTabChange) || void 0 === o || o.call(e, t);
            },
            items: $.map((e) => {
              var { tab: t } = e,
                o = jc(e, ['tab']);
              return Object.assign({ label: t }, o);
            }),
          }),
        )
      : null;
  if (c || a || q) {
    const e = de(`${T}-head`, z('header')),
      t = de(`${T}-head-title`, z('title')),
      o = de(`${T}-extra`, z('extra')),
      n = Object.assign(Object.assign({}, l), M('header'));
    W = le.createElement(
      'div',
      { className: e, style: n },
      le.createElement(
        'div',
        { className: `${T}-head-wrapper` },
        c && le.createElement('div', { className: t, style: M('title') }, c),
        a && le.createElement('div', { className: o, style: M('extra') }, a),
      ),
      q,
    );
  }
  const X = de(`${T}-cover`, z('cover')),
    V = b
      ? le.createElement('div', { className: X, style: M('cover') }, b)
      : null,
    K = de(`${T}-body`, z('body')),
    U = Object.assign(Object.assign({}, s), M('body')),
    Y = le.createElement('div', { className: K, style: U }, d ? F : v),
    Q = de(`${T}-actions`, z('actions')),
    Z = (null == f ? void 0 : f.length)
      ? le.createElement(Ic, {
          actionClasses: Q,
          actionStyle: M('actions'),
          actions: f,
        })
      : null,
    J = h(E, ['onTabChange']),
    ee = de(
      T,
      null == P ? void 0 : P.className,
      {
        [`${T}-loading`]: d,
        [`${T}-bordered`]: 'borderless' !== B,
        [`${T}-hoverable`]: S,
        [`${T}-contain-grid`]: H,
        [`${T}-contain-tabs`]: null == $ ? void 0 : $.length,
        [`${T}-${_}`]: _,
        [`${T}-type-${g}`]: !!g,
        [`${T}-rtl`]: 'rtl' === I,
      },
      n,
      r,
      N,
      L,
    ),
    te = Object.assign(Object.assign({}, null == P ? void 0 : P.style), i);
  return R(
    le.createElement(
      'div',
      Object.assign({ ref: t }, J, { className: ee, style: te }),
      W,
      V,
      Y,
      Z,
    ),
  );
});
((Pc.Grid = $c),
  (Pc.Meta = (e) => {
    const {
        prefixCls: t,
        className: o,
        avatar: n,
        title: r,
        description: i,
      } = e,
      a = (function (e, t) {
        var o = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (o[n] = e[n]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            t.indexOf(n[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
              (o[n[r]] = e[n[r]]);
        }
        return o;
      })(e, ['prefixCls', 'className', 'avatar', 'title', 'description']),
      { getPrefixCls: l } = le.useContext(Tt),
      s = l('card', t),
      c = de(`${s}-meta`, o),
      d = n
        ? le.createElement('div', { className: `${s}-meta-avatar` }, n)
        : null,
      u = r
        ? le.createElement('div', { className: `${s}-meta-title` }, r)
        : null,
      p = i
        ? le.createElement('div', { className: `${s}-meta-description` }, i)
        : null,
      m =
        u || p
          ? le.createElement('div', { className: `${s}-meta-detail` }, u, p)
          : null;
    return le.createElement(
      'div',
      Object.assign({}, a, { className: c }),
      d,
      m,
    );
  }));
const Bc = le.createContext({});
function zc(e) {
  return 'auto' === e
    ? '1 1 auto'
    : 'number' == typeof e
      ? `${e} ${e} auto`
      : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e)
        ? `0 0 ${e}`
        : e;
}
const Mc = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
  Hc = le.forwardRef((e, t) => {
    const { getPrefixCls: o, direction: n } = le.useContext(Tt),
      { gutter: r, wrap: i } = le.useContext(Bc),
      {
        prefixCls: a,
        span: l,
        order: s,
        offset: c,
        push: d,
        pull: u,
        className: p,
        children: m,
        flex: g,
        style: b,
      } = e,
      f = (function (e, t) {
        var o = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (o[n] = e[n]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            t.indexOf(n[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
              (o[n[r]] = e[n[r]]);
        }
        return o;
      })(e, [
        'prefixCls',
        'span',
        'order',
        'offset',
        'push',
        'pull',
        'className',
        'children',
        'flex',
        'style',
      ]),
      h = o('col', a),
      [$, v, y] = Fi(h),
      x = {};
    let C = {};
    Mc.forEach((t) => {
      let o = {};
      const r = e[t];
      ('number' == typeof r
        ? (o.span = r)
        : 'object' == typeof r && (o = r || {}),
        delete f[t],
        (C = Object.assign(Object.assign({}, C), {
          [`${h}-${t}-${o.span}`]: void 0 !== o.span,
          [`${h}-${t}-order-${o.order}`]: o.order || 0 === o.order,
          [`${h}-${t}-offset-${o.offset}`]: o.offset || 0 === o.offset,
          [`${h}-${t}-push-${o.push}`]: o.push || 0 === o.push,
          [`${h}-${t}-pull-${o.pull}`]: o.pull || 0 === o.pull,
          [`${h}-rtl`]: 'rtl' === n,
        })),
        o.flex &&
          ((C[`${h}-${t}-flex`] = !0), (x[`--${h}-${t}-flex`] = zc(o.flex))));
    });
    const S = de(
        h,
        {
          [`${h}-${l}`]: void 0 !== l,
          [`${h}-order-${s}`]: s,
          [`${h}-offset-${c}`]: c,
          [`${h}-push-${d}`]: d,
          [`${h}-pull-${u}`]: u,
        },
        p,
        C,
        v,
        y,
      ),
      O = {};
    if (null == r ? void 0 : r[0]) {
      const e = 'number' == typeof r[0] ? r[0] / 2 + 'px' : `calc(${r[0]} / 2)`;
      ((O.paddingLeft = e), (O.paddingRight = e));
    }
    return (
      g && ((O.flex = zc(g)), !1 !== i || O.minWidth || (O.minWidth = 0)),
      $(
        le.createElement(
          'div',
          Object.assign({}, f, {
            style: Object.assign(Object.assign(Object.assign({}, O), b), x),
            className: S,
            ref: t,
          }),
          m,
        ),
      )
    );
  });
function Tc(e, t) {
  const [o, n] = le.useState('string' == typeof e ? e : '');
  return (
    le.useEffect(() => {
      (() => {
        if (('string' == typeof e && n(e), 'object' == typeof e))
          for (let o = 0; o < Il.length; o++) {
            const r = Il[o];
            if (!t || !t[r]) continue;
            const i = e[r];
            if (void 0 !== i) return void n(i);
          }
      })();
    }, [JSON.stringify(e), t]),
    o
  );
}
const Rc = le.forwardRef((e, t) => {
    const {
        prefixCls: o,
        justify: n,
        align: r,
        className: i,
        style: a,
        children: l,
        gutter: s = 0,
        wrap: c,
      } = e,
      d = (function (e, t) {
        var o = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (o[n] = e[n]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            t.indexOf(n[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
              (o[n[r]] = e[n[r]]);
        }
        return o;
      })(e, [
        'prefixCls',
        'justify',
        'align',
        'className',
        'style',
        'children',
        'gutter',
        'wrap',
      ]),
      { getPrefixCls: u, direction: p } = le.useContext(Tt),
      m = Bl(!0, null),
      g = Tc(r, m),
      b = Tc(n, m),
      f = u('row', o),
      [h, $, v] = Ni(f),
      y = (function (e, t) {
        const o = [void 0, void 0],
          n = Array.isArray(e) ? e : [e, void 0],
          r = t || { xs: !0, sm: !0, md: !0, lg: !0, xl: !0, xxl: !0 };
        return (
          n.forEach((e, t) => {
            if ('object' == typeof e && null !== e)
              for (let n = 0; n < Il.length; n++) {
                const i = Il[n];
                if (r[i] && void 0 !== e[i]) {
                  o[t] = e[i];
                  break;
                }
              }
            else o[t] = e;
          }),
          o
        );
      })(s, m),
      x = de(
        f,
        {
          [`${f}-no-wrap`]: !1 === c,
          [`${f}-${b}`]: b,
          [`${f}-${g}`]: g,
          [`${f}-rtl`]: 'rtl' === p,
        },
        i,
        $,
        v,
      ),
      C = {};
    if (null == y ? void 0 : y[0]) {
      const e =
        'number' == typeof y[0] ? y[0] / -2 + 'px' : `calc(${y[0]} / -2)`;
      ((C.marginLeft = e), (C.marginRight = e));
    }
    const [S, O] = y;
    C.rowGap = O;
    const k = le.useMemo(() => ({ gutter: [S, O], wrap: c }), [S, O, c]);
    return h(
      le.createElement(
        Bc.Provider,
        { value: k },
        le.createElement(
          'div',
          Object.assign({}, d, {
            className: x,
            style: Object.assign(Object.assign({}, C), a),
            ref: t,
          }),
          l,
        ),
      ),
    );
  }),
  Nc = (e) => {
    const { componentCls: t } = e;
    return {
      [t]: {
        '&-horizontal': {
          [`&${t}`]: {
            '&-sm': { marginBlock: e.marginXS },
            '&-md': { marginBlock: e.margin },
          },
        },
      },
    };
  },
  Lc = (e) => {
    const {
      componentCls: t,
      sizePaddingEdgeHorizontal: o,
      colorSplit: n,
      lineWidth: r,
      textPaddingInline: i,
      orientationMargin: a,
      verticalMarginInline: l,
    } = e;
    return {
      [t]: Object.assign(Object.assign({}, oo(e)), {
        borderBlockStart: `${I(r)} solid ${n}`,
        '&-vertical': {
          position: 'relative',
          top: '-0.06em',
          display: 'inline-block',
          height: '0.9em',
          marginInline: l,
          marginBlock: 0,
          verticalAlign: 'middle',
          borderTop: 0,
          borderInlineStart: `${I(r)} solid ${n}`,
        },
        '&-horizontal': {
          display: 'flex',
          clear: 'both',
          width: '100%',
          minWidth: '100%',
          margin: `${I(e.marginLG)} 0`,
        },
        [`&-horizontal${t}-with-text`]: {
          display: 'flex',
          alignItems: 'center',
          margin: `${I(e.dividerHorizontalWithTextGutterMargin)} 0`,
          color: e.colorTextHeading,
          fontWeight: 500,
          fontSize: e.fontSizeLG,
          whiteSpace: 'nowrap',
          textAlign: 'center',
          borderBlockStart: `0 ${n}`,
          '&::before, &::after': {
            position: 'relative',
            width: '50%',
            borderBlockStart: `${I(r)} solid transparent`,
            borderBlockStartColor: 'inherit',
            borderBlockEnd: 0,
            transform: 'translateY(50%)',
            content: "''",
          },
        },
        [`&-horizontal${t}-with-text-start`]: {
          '&::before': { width: `calc(${a} * 100%)` },
          '&::after': { width: `calc(100% - ${a} * 100%)` },
        },
        [`&-horizontal${t}-with-text-end`]: {
          '&::before': { width: `calc(100% - ${a} * 100%)` },
          '&::after': { width: `calc(${a} * 100%)` },
        },
        [`${t}-inner-text`]: {
          display: 'inline-block',
          paddingBlock: 0,
          paddingInline: i,
        },
        '&-dashed': {
          background: 'none',
          borderColor: n,
          borderStyle: 'dashed',
          borderWidth: `${I(r)} 0 0`,
        },
        [`&-horizontal${t}-with-text${t}-dashed`]: {
          '&::before, &::after': { borderStyle: 'dashed none none' },
        },
        [`&-vertical${t}-dashed`]: {
          borderInlineStartWidth: r,
          borderInlineEnd: 0,
          borderBlockStart: 0,
          borderBlockEnd: 0,
        },
        '&-dotted': {
          background: 'none',
          borderColor: n,
          borderStyle: 'dotted',
          borderWidth: `${I(r)} 0 0`,
        },
        [`&-horizontal${t}-with-text${t}-dotted`]: {
          '&::before, &::after': { borderStyle: 'dotted none none' },
        },
        [`&-vertical${t}-dotted`]: {
          borderInlineStartWidth: r,
          borderInlineEnd: 0,
          borderBlockStart: 0,
          borderBlockEnd: 0,
        },
        [`&-plain${t}-with-text`]: {
          color: e.colorText,
          fontWeight: 'normal',
          fontSize: e.fontSize,
        },
        [`&-horizontal${t}-with-text-start${t}-no-default-orientation-margin-start`]:
          {
            '&::before': { width: 0 },
            '&::after': { width: '100%' },
            [`${t}-inner-text`]: { paddingInlineStart: o },
          },
        [`&-horizontal${t}-with-text-end${t}-no-default-orientation-margin-end`]:
          {
            '&::before': { width: '100%' },
            '&::after': { width: 0 },
            [`${t}-inner-text`]: { paddingInlineEnd: o },
          },
      }),
    };
  },
  Fc = lo(
    'Divider',
    (e) => {
      const t = T(e, {
        dividerHorizontalWithTextGutterMargin: e.margin,
        sizePaddingEdgeHorizontal: 0,
      });
      return [Lc(t), Nc(t)];
    },
    (e) => ({
      textPaddingInline: '1em',
      orientationMargin: 0.05,
      verticalMarginInline: e.marginXS,
    }),
    { unitless: { orientationMargin: !0 } },
  );
const Ac = { small: 'sm', middle: 'md' },
  Dc = (e) => {
    const {
        getPrefixCls: t,
        direction: o,
        className: n,
        style: r,
      } = Lt('divider'),
      {
        prefixCls: i,
        type: a = 'horizontal',
        orientation: l = 'center',
        orientationMargin: s,
        className: c,
        rootClassName: d,
        children: u,
        dashed: p,
        variant: m = 'solid',
        plain: g,
        style: b,
        size: f,
      } = e,
      h = (function (e, t) {
        var o = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (o[n] = e[n]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            t.indexOf(n[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
              (o[n[r]] = e[n[r]]);
        }
        return o;
      })(e, [
        'prefixCls',
        'type',
        'orientation',
        'orientationMargin',
        'className',
        'rootClassName',
        'children',
        'dashed',
        'variant',
        'plain',
        'style',
        'size',
      ]),
      $ = t('divider', i),
      [v, y, x] = Fc($),
      C = hn(f),
      S = Ac[C],
      O = !!u,
      k = le.useMemo(
        () =>
          'left' === l
            ? 'rtl' === o
              ? 'end'
              : 'start'
            : 'right' === l
              ? 'rtl' === o
                ? 'start'
                : 'end'
              : l,
        [o, l],
      ),
      w = 'start' === k && null != s,
      E = 'end' === k && null != s,
      j = de(
        $,
        n,
        y,
        x,
        `${$}-${a}`,
        {
          [`${$}-with-text`]: O,
          [`${$}-with-text-${k}`]: O,
          [`${$}-dashed`]: !!p,
          [`${$}-${m}`]: 'solid' !== m,
          [`${$}-plain`]: !!g,
          [`${$}-rtl`]: 'rtl' === o,
          [`${$}-no-default-orientation-margin-start`]: w,
          [`${$}-no-default-orientation-margin-end`]: E,
          [`${$}-${S}`]: !!S,
        },
        c,
        d,
      ),
      I = le.useMemo(
        () => ('number' == typeof s ? s : /^\d+$/.test(s) ? Number(s) : s),
        [s],
      ),
      P = {
        marginInlineStart: w ? I : void 0,
        marginInlineEnd: E ? I : void 0,
      };
    return v(
      le.createElement(
        'div',
        Object.assign(
          { className: j, style: Object.assign(Object.assign({}, r), b) },
          h,
          { role: 'separator' },
        ),
        u &&
          'vertical' !== a &&
          le.createElement(
            'span',
            { className: `${$}-inner-text`, style: P },
            u,
          ),
      ),
    );
  };
function Wc(e, t) {
  return {
    [`${e}, ${e}:hover, ${e}:focus`]: {
      color: t.colorTextDisabled,
      cursor: 'not-allowed',
    },
  };
}
function _c(e) {
  return { background: e.itemSelectedBg, boxShadow: e.boxShadowTertiary };
}
const Gc = Object.assign({ overflow: 'hidden' }, to),
  qc = lo(
    'Segmented',
    (e) => {
      const { lineWidth: t, calc: o } = e;
      return ((e) => {
        const { componentCls: t } = e,
          o = e
            .calc(e.controlHeight)
            .sub(e.calc(e.trackPadding).mul(2))
            .equal(),
          n = e
            .calc(e.controlHeightLG)
            .sub(e.calc(e.trackPadding).mul(2))
            .equal(),
          r = e
            .calc(e.controlHeightSM)
            .sub(e.calc(e.trackPadding).mul(2))
            .equal();
        return {
          [t]: Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(Object.assign({}, oo(e)), {
                      display: 'inline-block',
                      padding: e.trackPadding,
                      color: e.itemColor,
                      background: e.trackBg,
                      borderRadius: e.borderRadius,
                      transition: `all ${e.motionDurationMid}`,
                    }),
                    ro(e),
                  ),
                  {
                    [`${t}-group`]: {
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'stretch',
                      justifyItems: 'flex-start',
                      flexDirection: 'row',
                      width: '100%',
                    },
                    [`&${t}-rtl`]: { direction: 'rtl' },
                    [`&${t}-vertical`]: {
                      [`${t}-group`]: { flexDirection: 'column' },
                      [`${t}-thumb`]: {
                        width: '100%',
                        height: 0,
                        padding: `0 ${I(e.paddingXXS)}`,
                      },
                    },
                    [`&${t}-block`]: { display: 'flex' },
                    [`&${t}-block ${t}-item`]: { flex: 1, minWidth: 0 },
                    [`${t}-item`]: {
                      position: 'relative',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: `color ${e.motionDurationMid}`,
                      borderRadius: e.borderRadiusSM,
                      transform: 'translateZ(0)',
                      '&-selected': Object.assign(Object.assign({}, _c(e)), {
                        color: e.itemSelectedColor,
                      }),
                      '&-focused': no(e),
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        zIndex: -1,
                        width: '100%',
                        height: '100%',
                        top: 0,
                        insetInlineStart: 0,
                        borderRadius: 'inherit',
                        opacity: 0,
                        transition: `opacity ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,
                        pointerEvents: 'none',
                      },
                      [`&:not(${t}-item-selected):not(${t}-item-disabled)`]: {
                        '&:hover, &:active': { color: e.itemHoverColor },
                        '&:hover::after': {
                          opacity: 1,
                          backgroundColor: e.itemHoverBg,
                        },
                        '&:active::after': {
                          opacity: 1,
                          backgroundColor: e.itemActiveBg,
                        },
                      },
                      '&-label': Object.assign(
                        {
                          minHeight: o,
                          lineHeight: I(o),
                          padding: `0 ${I(e.segmentedPaddingHorizontal)}`,
                        },
                        Gc,
                      ),
                      '&-icon + *': {
                        marginInlineStart: e.calc(e.marginSM).div(2).equal(),
                      },
                      '&-input': {
                        position: 'absolute',
                        insetBlockStart: 0,
                        insetInlineStart: 0,
                        width: 0,
                        height: 0,
                        opacity: 0,
                        pointerEvents: 'none',
                      },
                    },
                    [`${t}-thumb`]: Object.assign(Object.assign({}, _c(e)), {
                      position: 'absolute',
                      insetBlockStart: 0,
                      insetInlineStart: 0,
                      width: 0,
                      height: '100%',
                      padding: `${I(e.paddingXXS)} 0`,
                      borderRadius: e.borderRadiusSM,
                      [`& ~ ${t}-item:not(${t}-item-selected):not(${t}-item-disabled)::after`]:
                        { backgroundColor: 'transparent' },
                    }),
                    [`&${t}-lg`]: {
                      borderRadius: e.borderRadiusLG,
                      [`${t}-item-label`]: {
                        minHeight: n,
                        lineHeight: I(n),
                        padding: `0 ${I(e.segmentedPaddingHorizontal)}`,
                        fontSize: e.fontSizeLG,
                      },
                      [`${t}-item, ${t}-thumb`]: {
                        borderRadius: e.borderRadius,
                      },
                    },
                    [`&${t}-sm`]: {
                      borderRadius: e.borderRadiusSM,
                      [`${t}-item-label`]: {
                        minHeight: r,
                        lineHeight: I(r),
                        padding: `0 ${I(e.segmentedPaddingHorizontalSM)}`,
                      },
                      [`${t}-item, ${t}-thumb`]: {
                        borderRadius: e.borderRadiusXS,
                      },
                    },
                  },
                ),
                Wc(`&-disabled ${t}-item`, e),
              ),
              Wc(`${t}-item-disabled`, e),
            ),
            {
              [`${t}-thumb-motion-appear-active`]: {
                transition: `transform ${e.motionDurationSlow} ${e.motionEaseInOut}, width ${e.motionDurationSlow} ${e.motionEaseInOut}`,
                willChange: 'transform, width',
              },
              [`&${t}-shape-round`]: {
                borderRadius: 9999,
                [`${t}-item, ${t}-thumb`]: { borderRadius: 9999 },
              },
            },
          ),
        };
      })(
        T(e, {
          segmentedPaddingHorizontal: o(e.controlPaddingHorizontal)
            .sub(t)
            .equal(),
          segmentedPaddingHorizontalSM: o(e.controlPaddingHorizontalSM)
            .sub(t)
            .equal(),
        }),
      );
    },
    (e) => {
      const {
        colorTextLabel: t,
        colorText: o,
        colorFillSecondary: n,
        colorBgElevated: r,
        colorFill: i,
        lineWidthBold: a,
        colorBgLayout: l,
      } = e;
      return {
        trackPadding: a,
        trackBg: l,
        itemColor: t,
        itemHoverColor: o,
        itemHoverBg: n,
        itemSelectedBg: r,
        itemActiveBg: i,
        itemSelectedColor: o,
      };
    },
  );
var Xc = function (e, t) {
  var o = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (o[n] = e[n]);
  if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
    var r = 0;
    for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
      t.indexOf(n[r]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
        (o[n[r]] = e[n[r]]);
  }
  return o;
};
const Vc = le.forwardRef((e, t) => {
    const o = x(),
      {
        prefixCls: n,
        className: r,
        rootClassName: i,
        block: a,
        options: l = [],
        size: s = 'middle',
        style: c,
        vertical: d,
        shape: u = 'default',
        name: p = o,
      } = e,
      m = Xc(e, [
        'prefixCls',
        'className',
        'rootClassName',
        'block',
        'options',
        'size',
        'style',
        'vertical',
        'shape',
        'name',
      ]),
      {
        getPrefixCls: g,
        direction: b,
        className: f,
        style: h,
      } = Lt('segmented'),
      $ = g('segmented', n),
      [v, y, C] = qc($),
      S = hn(s),
      O = le.useMemo(
        () =>
          l.map((e) => {
            if (
              (function (e) {
                return 'object' == typeof e && !!(null == e ? void 0 : e.icon);
              })(e)
            ) {
              const { icon: t, label: o } = e,
                n = Xc(e, ['icon', 'label']);
              return Object.assign(Object.assign({}, n), {
                label: le.createElement(
                  le.Fragment,
                  null,
                  le.createElement('span', { className: `${$}-item-icon` }, t),
                  o && le.createElement('span', null, o),
                ),
              });
            }
            return e;
          }),
        [l, $],
      ),
      k = de(
        r,
        i,
        f,
        {
          [`${$}-block`]: a,
          [`${$}-sm`]: 'small' === S,
          [`${$}-lg`]: 'large' === S,
          [`${$}-vertical`]: d,
          [`${$}-shape-${u}`]: 'round' === u,
        },
        y,
        C,
      ),
      w = Object.assign(Object.assign({}, h), c);
    return v(
      le.createElement(
        Pe,
        Object.assign({}, m, {
          name: p,
          className: k,
          style: w,
          options: O,
          ref: t,
          prefixCls: $,
          direction: b,
          vertical: d,
        }),
      ),
    );
  }),
  Kc = (e) => {
    let t;
    return (
      'object' == typeof e && (null == e ? void 0 : e.clearIcon)
        ? (t = e)
        : e && (t = { clearIcon: se.createElement(F, null) }),
      t
    );
  };
function Uc(e, t) {
  const o = le.useRef([]),
    n = () => {
      o.current.push(
        setTimeout(() => {
          var t, o, n, r;
          (null === (t = e.current) || void 0 === t ? void 0 : t.input) &&
            'password' ===
              (null === (o = e.current) || void 0 === o
                ? void 0
                : o.input.getAttribute('type')) &&
            (null === (n = e.current) || void 0 === n
              ? void 0
              : n.input.hasAttribute('value')) &&
            (null === (r = e.current) ||
              void 0 === r ||
              r.input.removeAttribute('value'));
        }),
      );
    };
  return (
    le.useEffect(
      () => (
        t && n(),
        () =>
          o.current.forEach((e) => {
            e && clearTimeout(e);
          })
      ),
      [],
    ),
    n
  );
}
const Yc = le.forwardRef((e, t) => {
    const {
        prefixCls: o,
        bordered: n = !0,
        status: r,
        size: i,
        disabled: a,
        onBlur: l,
        onFocus: s,
        suffix: d,
        allowClear: u,
        addonAfter: p,
        addonBefore: m,
        className: g,
        style: b,
        styles: f,
        rootClassName: h,
        onChange: $,
        classNames: v,
        variant: y,
        _skipAddonWarning: x,
      } = e,
      C = (function (e, t) {
        var o = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (o[n] = e[n]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            t.indexOf(n[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
              (o[n[r]] = e[n[r]]);
        }
        return o;
      })(e, [
        'prefixCls',
        'bordered',
        'status',
        'size',
        'disabled',
        'onBlur',
        'onFocus',
        'suffix',
        'allowClear',
        'addonAfter',
        'addonBefore',
        'className',
        'style',
        'styles',
        'rootClassName',
        'onChange',
        'classNames',
        'variant',
        '_skipAddonWarning',
      ]),
      {
        getPrefixCls: S,
        direction: O,
        allowClear: k,
        autoComplete: w,
        className: E,
        style: j,
        classNames: I,
        styles: P,
      } = Lt('input'),
      B = S('input', o),
      z = le.useRef(null),
      M = Bo(B),
      [H, T, R] = Ks(B, h),
      [N] = Us(B, M),
      { compactSize: L, compactItemClassnames: F } = Cn(B, O),
      A = hn((e) => {
        var t;
        return null !== (t = null != i ? i : L) && void 0 !== t ? t : e;
      }),
      D = se.useContext(Dt),
      W = null != a ? a : D,
      { status: _, hasFeedback: G, feedbackIcon: q } = le.useContext(ai),
      X = _a(_, r),
      V =
        (function (e) {
          return !!(e.prefix || e.suffix || e.allowClear || e.showCount);
        })(e) || !!G;
    le.useRef(V);
    const K = Uc(z, !0),
      U = (G || d) && se.createElement(se.Fragment, null, d, G && q),
      Y = Kc(null != u ? u : k),
      [Q, Z] = Qa('input', y, n);
    return H(
      N(
        se.createElement(
          Fe,
          Object.assign({ ref: c(t, z), prefixCls: B, autoComplete: w }, C, {
            disabled: W,
            onBlur: (e) => {
              (K(), null == l || l(e));
            },
            onFocus: (e) => {
              (K(), null == s || s(e));
            },
            style: Object.assign(Object.assign({}, j), b),
            styles: Object.assign(Object.assign({}, P), f),
            suffix: U,
            allowClear: Y,
            className: de(g, h, R, M, F, E),
            onChange: (e) => {
              (K(), null == $ || $(e));
            },
            addonBefore: m && se.createElement(ci, { form: !0, space: !0 }, m),
            addonAfter: p && se.createElement(ci, { form: !0, space: !0 }, p),
            classNames: Object.assign(Object.assign(Object.assign({}, v), I), {
              input: de(
                {
                  [`${B}-sm`]: 'small' === A,
                  [`${B}-lg`]: 'large' === A,
                  [`${B}-rtl`]: 'rtl' === O,
                },
                null == v ? void 0 : v.input,
                I.input,
                T,
              ),
              variant: de({ [`${B}-${Q}`]: Z }, Wa(B, X)),
              affixWrapper: de(
                {
                  [`${B}-affix-wrapper-sm`]: 'small' === A,
                  [`${B}-affix-wrapper-lg`]: 'large' === A,
                  [`${B}-affix-wrapper-rtl`]: 'rtl' === O,
                },
                T,
              ),
              wrapper: de({ [`${B}-group-rtl`]: 'rtl' === O }, T),
              groupWrapper: de(
                {
                  [`${B}-group-wrapper-sm`]: 'small' === A,
                  [`${B}-group-wrapper-lg`]: 'large' === A,
                  [`${B}-group-wrapper-rtl`]: 'rtl' === O,
                  [`${B}-group-wrapper-${Q}`]: Z,
                },
                Wa(`${B}-group-wrapper`, X, G),
                T,
              ),
            }),
          }),
        ),
      ),
    );
  }),
  Qc = (e, t, o, n, r) => {
    const { classNames: i, styles: a } = Lt(e),
      [l, s] = Do([i, t], [a, o], { popup: { _default: 'root' } });
    return le.useMemo(() => {
      var e, t;
      return [
        Object.assign(Object.assign({}, l), {
          popup: Object.assign(Object.assign({}, l.popup), {
            root: de(
              null === (e = l.popup) || void 0 === e ? void 0 : e.root,
              n,
            ),
          }),
        }),
        Object.assign(Object.assign({}, s), {
          popup: Object.assign(Object.assign({}, s.popup), {
            root: Object.assign(
              Object.assign(
                {},
                null === (t = s.popup) || void 0 === t ? void 0 : t.root,
              ),
              r,
            ),
          }),
        }),
      ];
    }, [l, s, n, r]);
  };
function Zc(e, t, o) {
  return void 0 !== o
    ? o
    : 'year' === t && e.lang.yearPlaceholder
      ? e.lang.yearPlaceholder
      : 'quarter' === t && e.lang.quarterPlaceholder
        ? e.lang.quarterPlaceholder
        : 'month' === t && e.lang.monthPlaceholder
          ? e.lang.monthPlaceholder
          : 'week' === t && e.lang.weekPlaceholder
            ? e.lang.weekPlaceholder
            : 'time' === t && e.timePickerLocale.placeholder
              ? e.timePickerLocale.placeholder
              : e.lang.placeholder;
}
function Jc(e, t, o) {
  return void 0 !== o
    ? o
    : 'year' === t && e.lang.yearPlaceholder
      ? e.lang.rangeYearPlaceholder
      : 'quarter' === t && e.lang.quarterPlaceholder
        ? e.lang.rangeQuarterPlaceholder
        : 'month' === t && e.lang.monthPlaceholder
          ? e.lang.rangeMonthPlaceholder
          : 'week' === t && e.lang.weekPlaceholder
            ? e.lang.rangeWeekPlaceholder
            : 'time' === t && e.timePickerLocale.placeholder
              ? e.timePickerLocale.rangePlaceholder
              : e.lang.rangePlaceholder;
}
function ed(e, t) {
  const { allowClear: o = !0 } = e,
    { clearIcon: n, removeIcon: r } = Ol(
      Object.assign(Object.assign({}, e), {
        prefixCls: t,
        componentName: 'DatePicker',
      }),
    );
  return [
    le.useMemo(() => {
      if (!1 === o) return !1;
      const e = !0 === o ? {} : o;
      return Object.assign({ clearIcon: n }, e);
    }, [o, n]),
    r,
  ];
}
const [td, od] = ['week', 'WeekPicker'],
  [nd, rd] = ['month', 'MonthPicker'],
  [id, ad] = ['year', 'YearPicker'],
  [ld, sd] = ['quarter', 'QuarterPicker'],
  [cd, dd] = ['time', 'TimePicker'],
  ud = ({ picker: e, hasFeedback: t, feedbackIcon: o, suffixIcon: n }) =>
    null === n || !1 === n
      ? null
      : !0 === n || void 0 === n
        ? se.createElement(
            se.Fragment,
            null,
            e === cd ? se.createElement(V, null) : se.createElement(K, null),
            t && o,
          )
        : n,
  pd = (e) =>
    le.createElement(Jr, Object.assign({ size: 'small', type: 'primary' }, e));
function md(e) {
  return le.useMemo(() => Object.assign({ button: pd }, e), [e]);
}
const gd = (e) =>
  le.forwardRef((t, o) => {
    var n;
    const {
        prefixCls: r,
        getPopupContainer: i,
        components: a,
        className: l,
        style: s,
        placement: c,
        size: d,
        disabled: u,
        bordered: p = !0,
        placeholder: m,
        popupStyle: g,
        popupClassName: b,
        dropdownClassName: f,
        status: h,
        rootClassName: $,
        variant: v,
        picker: y,
        styles: x,
        classNames: C,
        suffixIcon: S,
      } = t,
      O = (function (e, t) {
        var o = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (o[n] = e[n]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            t.indexOf(n[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
              (o[n[r]] = e[n[r]]);
        }
        return o;
      })(t, [
        'prefixCls',
        'getPopupContainer',
        'components',
        'className',
        'style',
        'placement',
        'size',
        'disabled',
        'bordered',
        'placeholder',
        'popupStyle',
        'popupClassName',
        'dropdownClassName',
        'status',
        'rootClassName',
        'variant',
        'picker',
        'styles',
        'classNames',
        'suffixIcon',
      ]),
      k = y === cd ? 'timePicker' : 'datePicker',
      w = le.useRef(null),
      {
        getPrefixCls: E,
        direction: j,
        getPopupContainer: I,
        rangePicker: P,
      } = le.useContext(Tt),
      B = E('picker', r),
      { compactSize: z, compactItemClassnames: M } = Cn(B, j),
      H = E(),
      [T, R] = Qa('rangePicker', v, p),
      N = Bo(B),
      [L, F, A] = ic(B, N),
      [D, W] = Qc(k, C, x, b || f, g),
      [_] = ed(t, B),
      G = md(a),
      q = hn((e) => {
        var t;
        return null !== (t = null != d ? d : z) && void 0 !== t ? t : e;
      }),
      X = le.useContext(Dt),
      V = null != u ? u : X,
      K = le.useContext(ai),
      { hasFeedback: Y, status: Q, feedbackIcon: Z } = K,
      J = le.createElement(ud, {
        picker: y,
        hasFeedback: Y,
        feedbackIcon: Z,
        suffixIcon: S,
      });
    le.useImperativeHandle(o, () => w.current);
    const [ee] = ht('Calendar', ct),
      te = Object.assign(Object.assign({}, ee), t.locale),
      [oe] = Vo(
        'DatePicker',
        null === (n = W.popup.root) || void 0 === n ? void 0 : n.zIndex,
      );
    return L(
      le.createElement(
        ci,
        { space: !0 },
        le.createElement(
          fe,
          Object.assign(
            {
              separator: le.createElement(
                'span',
                { 'aria-label': 'to', className: `${B}-separator` },
                le.createElement(U, null),
              ),
              disabled: V,
              ref: w,
              placement: c,
              placeholder: Jc(te, y, m),
              suffixIcon: J,
              prevIcon: le.createElement('span', {
                className: `${B}-prev-icon`,
              }),
              nextIcon: le.createElement('span', {
                className: `${B}-next-icon`,
              }),
              superPrevIcon: le.createElement('span', {
                className: `${B}-super-prev-icon`,
              }),
              superNextIcon: le.createElement('span', {
                className: `${B}-super-next-icon`,
              }),
              transitionName: `${H}-slide-up`,
              picker: y,
            },
            O,
            {
              className: de(
                { [`${B}-${q}`]: q, [`${B}-${T}`]: R },
                Wa(B, _a(Q, h), Y),
                F,
                M,
                l,
                null == P ? void 0 : P.className,
                A,
                N,
                $,
                D.root,
              ),
              style: Object.assign(
                Object.assign(
                  Object.assign({}, null == P ? void 0 : P.style),
                  s,
                ),
                W.root,
              ),
              locale: te.lang,
              prefixCls: B,
              getPopupContainer: i || I,
              generateConfig: e,
              components: G,
              direction: j,
              classNames: { popup: de(F, A, N, $, D.popup.root) },
              styles: {
                popup: Object.assign(Object.assign({}, W.popup.root), {
                  zIndex: oe,
                }),
              },
              allowClear: _,
            },
          ),
        ),
      ),
    );
  });
const bd = (e) => {
    const t = (t, o) => {
        const n = o === dd ? 'timePicker' : 'datePicker';
        return le.forwardRef((o, r) => {
          var i;
          const {
              prefixCls: a,
              getPopupContainer: l,
              components: s,
              style: c,
              className: d,
              rootClassName: u,
              size: p,
              bordered: m,
              placement: g,
              placeholder: b,
              popupStyle: f,
              popupClassName: h,
              dropdownClassName: $,
              disabled: v,
              status: y,
              variant: x,
              onCalendarChange: C,
              styles: S,
              classNames: O,
              suffixIcon: k,
            } = o,
            w = (function (e, t) {
              var o = {};
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) &&
                  t.indexOf(n) < 0 &&
                  (o[n] = e[n]);
              if (
                null != e &&
                'function' == typeof Object.getOwnPropertySymbols
              ) {
                var r = 0;
                for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                  t.indexOf(n[r]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                    (o[n[r]] = e[n[r]]);
              }
              return o;
            })(o, [
              'prefixCls',
              'getPopupContainer',
              'components',
              'style',
              'className',
              'rootClassName',
              'size',
              'bordered',
              'placement',
              'placeholder',
              'popupStyle',
              'popupClassName',
              'dropdownClassName',
              'disabled',
              'status',
              'variant',
              'onCalendarChange',
              'styles',
              'classNames',
              'suffixIcon',
            ]),
            {
              getPrefixCls: E,
              direction: j,
              getPopupContainer: I,
              [n]: P,
            } = le.useContext(Tt),
            B = E('picker', a),
            { compactSize: z, compactItemClassnames: M } = Cn(B, j),
            H = le.useRef(null),
            [T, R] = Qa('datePicker', x, m),
            N = Bo(B),
            [L, F, A] = ic(B, N);
          le.useImperativeHandle(r, () => H.current);
          const D = t || o.picker,
            W = E(),
            { onSelect: _, multiple: G } = w,
            q = _ && 'time' === t && !G,
            [X, V] = Qc(n, O, S, h || $, f),
            [K, U] = ed(o, B),
            Y = md(s),
            Q = hn((e) => {
              var t;
              return null !== (t = null != p ? p : z) && void 0 !== t ? t : e;
            }),
            Z = le.useContext(Dt),
            J = null != v ? v : Z,
            ee = le.useContext(ai),
            { hasFeedback: te, status: oe, feedbackIcon: ne } = ee,
            re = le.createElement(ud, {
              picker: D,
              hasFeedback: te,
              feedbackIcon: ne,
              suffixIcon: k,
            }),
            [ie] = ht('DatePicker', ct),
            ae = Object.assign(Object.assign({}, ie), o.locale),
            [se] = Vo(
              'DatePicker',
              null === (i = V.popup.root) || void 0 === i ? void 0 : i.zIndex,
            );
          return L(
            le.createElement(
              ci,
              { space: !0 },
              le.createElement(
                he,
                Object.assign(
                  {
                    ref: H,
                    placeholder: Zc(ae, D, b),
                    suffixIcon: re,
                    placement: g,
                    prevIcon: le.createElement('span', {
                      className: `${B}-prev-icon`,
                    }),
                    nextIcon: le.createElement('span', {
                      className: `${B}-next-icon`,
                    }),
                    superPrevIcon: le.createElement('span', {
                      className: `${B}-super-prev-icon`,
                    }),
                    superNextIcon: le.createElement('span', {
                      className: `${B}-super-next-icon`,
                    }),
                    transitionName: `${W}-slide-up`,
                    picker: t,
                    onCalendarChange: (e, t, o) => {
                      (null == C || C(e, t, o), q && _(e));
                    },
                  },
                  { showToday: !0 },
                  w,
                  {
                    locale: ae.lang,
                    className: de(
                      { [`${B}-${Q}`]: Q, [`${B}-${T}`]: R },
                      Wa(B, _a(oe, y), te),
                      F,
                      M,
                      null == P ? void 0 : P.className,
                      d,
                      A,
                      N,
                      u,
                      X.root,
                    ),
                    style: Object.assign(
                      Object.assign(
                        Object.assign({}, null == P ? void 0 : P.style),
                        c,
                      ),
                      V.root,
                    ),
                    prefixCls: B,
                    getPopupContainer: l || I,
                    generateConfig: e,
                    components: Y,
                    direction: j,
                    disabled: J,
                    classNames: { popup: de(F, A, N, u, X.popup.root) },
                    styles: {
                      popup: Object.assign(Object.assign({}, V.popup.root), {
                        zIndex: se,
                      }),
                    },
                    allowClear: K,
                    removeIcon: U,
                  },
                ),
              ),
            ),
          );
        });
      },
      o = t(),
      n = t(td, od),
      r = t(nd, rd),
      i = t(id, ad),
      a = t(ld, sd);
    return {
      DatePicker: o,
      WeekPicker: n,
      MonthPicker: r,
      YearPicker: i,
      TimePicker: t(cd, dd),
      QuarterPicker: a,
    };
  },
  fd = (e) => {
    const {
        DatePicker: t,
        WeekPicker: o,
        MonthPicker: n,
        YearPicker: r,
        TimePicker: i,
        QuarterPicker: a,
      } = bd(e),
      l = gd(e),
      s = t;
    return (
      (s.WeekPicker = o),
      (s.MonthPicker = n),
      (s.YearPicker = r),
      (s.RangePicker = l),
      (s.TimePicker = i),
      (s.QuarterPicker = a),
      s
    );
  },
  hd = fd($e),
  $d = Da(hd, 'popupAlign', 0, 'picker');
hd._InternalPanelDoNotUseOrYouWillBeFired = $d;
const vd = Da(hd.RangePicker, 'popupAlign', 0, 'picker');
function yd(e) {
  return ['small', 'middle', 'large'].includes(e);
}
function xd(e) {
  return !!e && 'number' == typeof e && !Number.isNaN(e);
}
((hd._InternalRangePanelDoNotUseOrYouWillBeFired = vd),
  (hd.generatePicker = fd));
const Cd = (e) => {
    const {
      componentCls: t,
      borderRadius: o,
      paddingSM: n,
      colorBorder: r,
      paddingXS: i,
      fontSizeLG: a,
      fontSizeSM: l,
      borderRadiusLG: s,
      borderRadiusSM: c,
      colorBgContainerDisabled: d,
      lineWidth: u,
    } = e;
    return {
      [t]: [
        {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 0,
          paddingInline: n,
          margin: 0,
          background: d,
          borderWidth: u,
          borderStyle: 'solid',
          borderColor: r,
          borderRadius: o,
          '&-large': { fontSize: a, borderRadius: s },
          '&-small': { paddingInline: i, borderRadius: c, fontSize: l },
          '&-compact-last-item': {
            borderEndStartRadius: 0,
            borderStartStartRadius: 0,
          },
          '&-compact-first-item': {
            borderEndEndRadius: 0,
            borderStartEndRadius: 0,
          },
          '&-compact-item:not(:first-child):not(:last-child)': {
            borderRadius: 0,
          },
          '&-compact-item:not(:last-child)': { borderInlineEndWidth: 0 },
        },
        Vr(e, { focus: !1 }),
      ],
    };
  },
  Sd = lo(['Space', 'Addon'], (e) => [Cd(e)]);
const Od = se.forwardRef((e, t) => {
    const { className: o, children: n, style: r, prefixCls: i } = e,
      a = (function (e, t) {
        var o = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (o[n] = e[n]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            t.indexOf(n[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
              (o[n[r]] = e[n[r]]);
        }
        return o;
      })(e, ['className', 'children', 'style', 'prefixCls']),
      { getPrefixCls: l, direction: s } = se.useContext(Tt),
      c = l('space-addon', i),
      [d, u, p] = Sd(c),
      { compactItemClassnames: m, compactSize: g } = Cn(c, s),
      b = de(c, u, m, p, { [`${c}-${g}`]: g }, o);
    return d(
      se.createElement(
        'div',
        Object.assign({ ref: t, className: b, style: r }, a),
        n,
      ),
    );
  }),
  kd = se.createContext({ latestIndex: 0 }),
  wd = kd.Provider,
  Ed = ({ className: e, index: t, children: o, split: n, style: r }) => {
    const { latestIndex: i } = le.useContext(kd);
    return null == o
      ? null
      : le.createElement(
          le.Fragment,
          null,
          le.createElement('div', { className: e, style: r }, o),
          t < i &&
            n &&
            le.createElement('span', { className: `${e}-split` }, n),
        );
  },
  jd = (e) => {
    const { componentCls: t, antCls: o } = e;
    return {
      [t]: {
        display: 'inline-flex',
        '&-rtl': { direction: 'rtl' },
        '&-vertical': { flexDirection: 'column' },
        '&-align': {
          flexDirection: 'column',
          '&-center': { alignItems: 'center' },
          '&-start': { alignItems: 'flex-start' },
          '&-end': { alignItems: 'flex-end' },
          '&-baseline': { alignItems: 'baseline' },
        },
        [`${t}-item:empty`]: { display: 'none' },
        [`${t}-item > ${o}-badge-not-a-wrapper:only-child`]: {
          display: 'block',
        },
      },
    };
  },
  Id = (e) => {
    const { componentCls: t } = e;
    return {
      [t]: {
        '&-gap-row-small': { rowGap: e.spaceGapSmallSize },
        '&-gap-row-middle': { rowGap: e.spaceGapMiddleSize },
        '&-gap-row-large': { rowGap: e.spaceGapLargeSize },
        '&-gap-col-small': { columnGap: e.spaceGapSmallSize },
        '&-gap-col-middle': { columnGap: e.spaceGapMiddleSize },
        '&-gap-col-large': { columnGap: e.spaceGapLargeSize },
      },
    };
  },
  Pd = lo(
    'Space',
    (e) => {
      const t = T(e, {
        spaceGapSmallSize: e.paddingXS,
        spaceGapMiddleSize: e.padding,
        spaceGapLargeSize: e.paddingLG,
      });
      return [jd(t), Id(t)];
    },
    () => ({}),
    { resetStyle: !1 },
  );
const Bd = le.forwardRef((e, t) => {
  var o;
  const {
      getPrefixCls: n,
      direction: r,
      size: i,
      className: a,
      style: l,
      classNames: s,
      styles: c,
    } = Lt('space'),
    {
      size: d = null != i ? i : 'small',
      align: u,
      className: p,
      rootClassName: m,
      children: b,
      direction: f = 'horizontal',
      prefixCls: h,
      split: $,
      style: v,
      wrap: y = !1,
      classNames: x,
      styles: C,
    } = e,
    S = (function (e, t) {
      var o = {};
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) &&
          t.indexOf(n) < 0 &&
          (o[n] = e[n]);
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var r = 0;
        for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
          t.indexOf(n[r]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
            (o[n[r]] = e[n[r]]);
      }
      return o;
    })(e, [
      'size',
      'align',
      'className',
      'rootClassName',
      'children',
      'direction',
      'prefixCls',
      'split',
      'style',
      'wrap',
      'classNames',
      'styles',
    ]),
    [O, k] = Array.isArray(d) ? d : [d, d],
    w = yd(k),
    E = yd(O),
    j = xd(k),
    I = xd(O),
    P = g(b, { keepEmpty: !0 }),
    B = void 0 === u && 'horizontal' === f ? 'center' : u,
    z = n('space', h),
    [M, H, T] = Pd(z),
    R = de(
      z,
      a,
      H,
      `${z}-${f}`,
      {
        [`${z}-rtl`]: 'rtl' === r,
        [`${z}-align-${B}`]: B,
        [`${z}-gap-row-${k}`]: w,
        [`${z}-gap-col-${O}`]: E,
      },
      p,
      m,
      T,
    ),
    N = de(
      `${z}-item`,
      null !== (o = null == x ? void 0 : x.item) && void 0 !== o ? o : s.item,
    ),
    L = Object.assign(Object.assign({}, c.item), null == C ? void 0 : C.item),
    F = P.map((e, t) => {
      const o = (null == e ? void 0 : e.key) || `${N}-${t}`;
      return le.createElement(
        Ed,
        { className: N, key: o, index: t, split: $, style: L },
        e,
      );
    }),
    A = le.useMemo(
      () => ({ latestIndex: P.reduce((e, t, o) => (null != t ? o : e), 0) }),
      [P],
    );
  if (0 === P.length) return null;
  const D = {};
  return (
    y && (D.flexWrap = 'wrap'),
    !E && I && (D.columnGap = O),
    !w && j && (D.rowGap = k),
    M(
      le.createElement(
        'div',
        Object.assign(
          {
            ref: t,
            className: R,
            style: Object.assign(Object.assign(Object.assign({}, D), l), v),
          },
          S,
        ),
        le.createElement(wd, { value: A }, F),
      ),
    )
  );
});
((Bd.Compact = (e) => {
  const { getPrefixCls: t, direction: o } = le.useContext(Tt),
    {
      size: n,
      direction: r,
      block: i,
      prefixCls: a,
      className: l,
      rootClassName: s,
      children: c,
    } = e,
    d = yn(e, [
      'size',
      'direction',
      'block',
      'prefixCls',
      'className',
      'rootClassName',
      'children',
    ]),
    u = hn((e) => (null != n ? n : e)),
    p = t('space-compact', a),
    [m, b] = vn(p),
    f = de(
      p,
      b,
      {
        [`${p}-rtl`]: 'rtl' === o,
        [`${p}-block`]: i,
        [`${p}-vertical`]: 'vertical' === r,
      },
      l,
      s,
    ),
    h = le.useContext(xn),
    $ = g(c),
    v = le.useMemo(
      () =>
        $.map((e, t) => {
          const o = (null == e ? void 0 : e.key) || `${p}-item-${t}`;
          return le.createElement(
            On,
            {
              key: o,
              compactSize: u,
              compactDirection: r,
              isFirstItem:
                0 === t && (!h || (null == h ? void 0 : h.isFirstItem)),
              isLastItem:
                t === $.length - 1 &&
                (!h || (null == h ? void 0 : h.isLastItem)),
            },
            e,
          );
        }),
      [$, h, r, u, p],
    );
  return 0 === $.length
    ? null
    : m(le.createElement('div', Object.assign({ className: f }, d), v));
}),
  (Bd.Addon = Od));
const zd = lo(
  ['Input', 'OTP'],
  (e) =>
    ((e) => {
      const { componentCls: t, paddingXS: o } = e;
      return {
        [t]: {
          display: 'inline-flex',
          alignItems: 'center',
          flexWrap: 'nowrap',
          columnGap: o,
          [`${t}-input-wrapper`]: {
            position: 'relative',
            [`${t}-mask-icon`]: {
              position: 'absolute',
              zIndex: '1',
              top: '50%',
              right: '50%',
              transform: 'translate(50%, -50%)',
              pointerEvents: 'none',
            },
            [`${t}-mask-input`]: {
              color: 'transparent',
              caretColor: e.colorText,
            },
            [`${t}-mask-input[type=number]::-webkit-inner-spin-button`]: {
              '-webkit-appearance': 'none',
              margin: 0,
            },
            [`${t}-mask-input[type=number]`]: {
              '-moz-appearance': 'textfield',
            },
          },
          '&-rtl': { direction: 'rtl' },
          [`${t}-input`]: { textAlign: 'center', paddingInline: e.paddingXXS },
          [`&${t}-sm ${t}-input`]: {
            paddingInline: e.calc(e.paddingXXS).div(2).equal(),
          },
          [`&${t}-lg ${t}-input`]: { paddingInline: e.paddingXS },
        },
      };
    })(T(e, vs(e))),
  ys,
);
const Md = le.forwardRef((e, t) => {
  const {
      className: o,
      value: n,
      onChange: r,
      onActiveChange: i,
      index: a,
      mask: l,
    } = e,
    c = (function (e, t) {
      var o = {};
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) &&
          t.indexOf(n) < 0 &&
          (o[n] = e[n]);
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var r = 0;
        for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
          t.indexOf(n[r]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
            (o[n[r]] = e[n[r]]);
      }
      return o;
    })(e, [
      'className',
      'value',
      'onChange',
      'onActiveChange',
      'index',
      'mask',
    ]),
    { getPrefixCls: d } = le.useContext(Tt),
    u = d('otp'),
    p = 'string' == typeof l ? l : n,
    m = le.useRef(null);
  le.useImperativeHandle(t, () => m.current);
  const g = () => {
    s(() => {
      var e;
      const t = null === (e = m.current) || void 0 === e ? void 0 : e.input;
      document.activeElement === t && t && t.select();
    });
  };
  return le.createElement(
    'span',
    { className: `${u}-input-wrapper`, role: 'presentation' },
    l &&
      '' !== n &&
      void 0 !== n &&
      le.createElement(
        'span',
        { className: `${u}-mask-icon`, 'aria-hidden': 'true' },
        p,
      ),
    le.createElement(
      Yc,
      Object.assign(
        {
          'aria-label': `OTP Input ${a + 1}`,
          type: !0 === l ? 'password' : 'text',
        },
        c,
        {
          ref: m,
          value: n,
          onInput: (e) => {
            r(a, e.target.value);
          },
          onFocus: g,
          onKeyDown: (e) => {
            const { key: t, ctrlKey: o, metaKey: r } = e;
            ('ArrowLeft' === t
              ? i(a - 1)
              : 'ArrowRight' === t
                ? i(a + 1)
                : 'z' === t && (o || r)
                  ? e.preventDefault()
                  : 'Backspace' !== t || n || i(a - 1),
              g());
          },
          onMouseDown: g,
          onMouseUp: g,
          className: de(o, { [`${u}-mask-input`]: l }),
        },
      ),
    ),
  );
});
function Hd(e) {
  return (e || '').split('');
}
const Td = (e) => {
    const { index: t, prefixCls: o, separator: n } = e,
      r = 'function' == typeof n ? n(t) : n;
    return r
      ? le.createElement('span', { className: `${o}-separator` }, r)
      : null;
  },
  Rd = le.forwardRef((e, t) => {
    const {
        prefixCls: o,
        length: n = 6,
        size: r,
        defaultValue: a,
        value: l,
        onChange: s,
        formatter: c,
        separator: u,
        variant: p,
        disabled: m,
        status: g,
        autoFocus: b,
        mask: f,
        type: h,
        onInput: $,
        inputMode: v,
      } = e,
      y = (function (e, t) {
        var o = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (o[n] = e[n]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            t.indexOf(n[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
              (o[n[r]] = e[n[r]]);
        }
        return o;
      })(e, [
        'prefixCls',
        'length',
        'size',
        'defaultValue',
        'value',
        'onChange',
        'formatter',
        'separator',
        'variant',
        'disabled',
        'status',
        'autoFocus',
        'mask',
        'type',
        'onInput',
        'inputMode',
      ]),
      { getPrefixCls: x, direction: C } = le.useContext(Tt),
      S = x('otp', o),
      O = i(y, { aria: !0, data: !0, attr: !0 }),
      [k, w, E] = zd(S),
      j = hn((e) => (null != r ? r : e)),
      I = le.useContext(ai),
      P = _a(I.status, g),
      B = le.useMemo(
        () =>
          Object.assign(Object.assign({}, I), {
            status: P,
            hasFeedback: !1,
            feedbackIcon: null,
          }),
        [I, P],
      ),
      z = le.useRef(null),
      M = le.useRef({});
    le.useImperativeHandle(t, () => ({
      focus: () => {
        var e;
        null === (e = M.current[0]) || void 0 === e || e.focus();
      },
      blur: () => {
        var e;
        for (let t = 0; t < n; t += 1)
          null === (e = M.current[t]) || void 0 === e || e.blur();
      },
      nativeElement: z.current,
    }));
    const H = (e) => (c ? c(e) : e),
      [T, R] = le.useState(() => Hd(H(a || '')));
    le.useEffect(() => {
      void 0 !== l && R(Hd(l));
    }, [l]);
    const N = d((e) => {
        (R(e),
          $ && $(e),
          s &&
            e.length === n &&
            e.every((e) => e) &&
            e.some((e, t) => T[t] !== e) &&
            s(e.join('')));
      }),
      L = d((e, t) => {
        let o = ze(T);
        for (let n = 0; n < e; n += 1) o[n] || (o[n] = '');
        (t.length <= 1 ? (o[e] = t) : (o = o.slice(0, e).concat(Hd(t))),
          (o = o.slice(0, n)));
        for (let n = o.length - 1; n >= 0 && !o[n]; n -= 1) o.pop();
        const r = H(o.map((e) => e || ' ').join(''));
        return ((o = Hd(r).map((e, t) => (' ' !== e || o[t] ? e : o[t]))), o);
      }),
      F = (e, t) => {
        var o;
        const r = L(e, t),
          i = Math.min(e + t.length, n - 1);
        (i !== e &&
          void 0 !== r[e] &&
          (null === (o = M.current[i]) || void 0 === o || o.focus()),
          N(r));
      },
      A = (e) => {
        var t;
        null === (t = M.current[e]) || void 0 === t || t.focus();
      },
      D = {
        variant: p,
        disabled: m,
        status: P,
        mask: f,
        type: h,
        inputMode: v,
      };
    return k(
      le.createElement(
        'div',
        Object.assign({}, O, {
          ref: z,
          className: de(
            S,
            {
              [`${S}-sm`]: 'small' === j,
              [`${S}-lg`]: 'large' === j,
              [`${S}-rtl`]: 'rtl' === C,
            },
            E,
            w,
          ),
          role: 'group',
        }),
        le.createElement(
          ai.Provider,
          { value: B },
          Array.from({ length: n }).map((e, t) => {
            const o = `otp-${t}`,
              r = T[t] || '';
            return le.createElement(
              le.Fragment,
              { key: o },
              le.createElement(
                Md,
                Object.assign(
                  {
                    ref: (e) => {
                      M.current[t] = e;
                    },
                    index: t,
                    size: j,
                    htmlSize: 1,
                    className: `${S}-input`,
                    onChange: F,
                    value: r,
                    onActiveChange: A,
                    autoFocus: 0 === t && b,
                  },
                  D,
                ),
              ),
              t < n - 1 &&
                le.createElement(Td, { separator: u, index: t, prefixCls: S }),
            );
          }),
        ),
      ),
    );
  });
const Nd = (e) => (e ? le.createElement(Y, null) : le.createElement(Q, null)),
  Ld = { click: 'onClick', hover: 'onMouseOver' },
  Fd = le.forwardRef((e, t) => {
    const {
        disabled: o,
        action: n = 'click',
        visibilityToggle: r = !0,
        iconRender: i = Nd,
        suffix: a,
      } = e,
      l = le.useContext(Dt),
      s = null != o ? o : l,
      d = 'object' == typeof r && void 0 !== r.visible,
      [u, p] = le.useState(() => !!d && r.visible),
      m = le.useRef(null);
    le.useEffect(() => {
      d && p(r.visible);
    }, [d, r]);
    const g = Uc(m),
      b = () => {
        var e;
        if (s) return;
        u && g();
        const t = !u;
        (p(t),
          'object' == typeof r &&
            (null === (e = r.onVisibleChange) || void 0 === e || e.call(r, t)));
      },
      { className: f, prefixCls: $, inputPrefixCls: v, size: y } = e,
      x = (function (e, t) {
        var o = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (o[n] = e[n]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            t.indexOf(n[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
              (o[n[r]] = e[n[r]]);
        }
        return o;
      })(e, ['className', 'prefixCls', 'inputPrefixCls', 'size']),
      { getPrefixCls: C } = le.useContext(Tt),
      S = C('input', v),
      O = C('input-password', $),
      k =
        r &&
        ((e) => {
          const t = Ld[n] || '',
            o = i(u),
            r = {
              [t]: b,
              className: `${e}-icon`,
              key: 'passwordIcon',
              onMouseDown: (e) => {
                e.preventDefault();
              },
              onMouseUp: (e) => {
                e.preventDefault();
              },
            };
          return le.cloneElement(
            le.isValidElement(o) ? o : le.createElement('span', null, o),
            r,
          );
        })(O),
      w = de(O, f, { [`${O}-${y}`]: !!y }),
      E = Object.assign(
        Object.assign({}, h(x, ['suffix', 'iconRender', 'visibilityToggle'])),
        {
          type: u ? 'text' : 'password',
          className: w,
          prefixCls: S,
          suffix: le.createElement(le.Fragment, null, k, a),
        },
      );
    return (
      y && (E.size = y),
      le.createElement(Yc, Object.assign({ ref: c(t, m) }, E))
    );
  });
const Ad = le.forwardRef((e, t) => {
    const {
        prefixCls: o,
        inputPrefixCls: n,
        className: r,
        size: i,
        suffix: a,
        enterButton: l = !1,
        addonAfter: s,
        loading: d,
        disabled: u,
        onSearch: p,
        onChange: m,
        onCompositionStart: g,
        onCompositionEnd: b,
        variant: f,
        onPressEnter: h,
      } = e,
      $ = (function (e, t) {
        var o = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (o[n] = e[n]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            t.indexOf(n[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
              (o[n[r]] = e[n[r]]);
        }
        return o;
      })(e, [
        'prefixCls',
        'inputPrefixCls',
        'className',
        'size',
        'suffix',
        'enterButton',
        'addonAfter',
        'loading',
        'disabled',
        'onSearch',
        'onChange',
        'onCompositionStart',
        'onCompositionEnd',
        'variant',
        'onPressEnter',
      ]),
      { getPrefixCls: v, direction: y } = le.useContext(Tt),
      x = le.useRef(!1),
      C = v('input-search', o),
      S = v('input', n),
      { compactSize: O } = Cn(C, y),
      k = hn((e) => {
        var t;
        return null !== (t = null != i ? i : O) && void 0 !== t ? t : e;
      }),
      w = le.useRef(null),
      E = (e) => {
        var t;
        document.activeElement ===
          (null === (t = w.current) || void 0 === t ? void 0 : t.input) &&
          e.preventDefault();
      },
      j = (e) => {
        var t, o;
        p &&
          p(
            null ===
              (o =
                null === (t = w.current) || void 0 === t ? void 0 : t.input) ||
              void 0 === o
              ? void 0
              : o.value,
            e,
            { source: 'input' },
          );
      },
      I = 'boolean' == typeof l ? le.createElement(_, null) : null,
      P = `${C}-button`;
    let B;
    const z = l || {},
      M = z.type && !0 === z.type.__ANT_BUTTON;
    ((B =
      M || 'button' === z.type
        ? Po(
            z,
            Object.assign(
              {
                onMouseDown: E,
                onClick: (e) => {
                  var t, o;
                  (null ===
                    (o =
                      null === (t = null == z ? void 0 : z.props) ||
                      void 0 === t
                        ? void 0
                        : t.onClick) ||
                    void 0 === o ||
                    o.call(t, e),
                    j(e));
                },
                key: 'enterButton',
              },
              M ? { className: P, size: k } : {},
            ),
          )
        : le.createElement(
            Jr,
            {
              className: P,
              color: l ? 'primary' : 'default',
              size: k,
              disabled: u,
              key: 'enterButton',
              onMouseDown: E,
              onClick: j,
              loading: d,
              icon: I,
              variant:
                'borderless' === f || 'filled' === f || 'underlined' === f
                  ? 'text'
                  : l
                    ? 'solid'
                    : void 0,
            },
            l,
          )),
      s && (B = [B, Po(s, { key: 'addonAfter' })]));
    const H = de(
        C,
        {
          [`${C}-rtl`]: 'rtl' === y,
          [`${C}-${k}`]: !!k,
          [`${C}-with-button`]: !!l,
        },
        r,
      ),
      T = Object.assign(Object.assign({}, $), {
        className: H,
        prefixCls: S,
        type: 'search',
        size: k,
        variant: f,
        onPressEnter: (e) => {
          x.current || d || (null == h || h(e), j(e));
        },
        onCompositionStart: (e) => {
          ((x.current = !0), null == g || g(e));
        },
        onCompositionEnd: (e) => {
          ((x.current = !1), null == b || b(e));
        },
        addonAfter: B,
        suffix: a,
        onChange: (e) => {
          ((null == e ? void 0 : e.target) &&
            'click' === e.type &&
            p &&
            p(e.target.value, e, { source: 'clear' }),
            null == m || m(e));
        },
        disabled: u,
        _skipAddonWarning: !0,
      });
    return le.createElement(Yc, Object.assign({ ref: c(w, t) }, T));
  }),
  Dd = lo(
    ['Input', 'TextArea'],
    (e) =>
      ((e) => {
        const { componentCls: t, paddingLG: o } = e,
          n = `${t}-textarea`;
        return {
          [`textarea${t}`]: {
            maxWidth: '100%',
            height: 'auto',
            minHeight: e.controlHeight,
            lineHeight: e.lineHeight,
            verticalAlign: 'bottom',
            transition: `all ${e.motionDurationSlow}`,
            resize: 'vertical',
            [`&${t}-mouse-active`]: {
              transition: `all ${e.motionDurationSlow}, height 0s, width 0s`,
            },
          },
          [`${t}-textarea-affix-wrapper-resize-dirty`]: { width: 'auto' },
          [n]: {
            position: 'relative',
            '&-show-count': {
              [`${t}-data-count`]: {
                position: 'absolute',
                bottom: e.calc(e.fontSize).mul(e.lineHeight).mul(-1).equal(),
                insetInlineEnd: 0,
                color: e.colorTextDescription,
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
              },
            },
            [`\n        &-allow-clear > ${t},\n        &-affix-wrapper${n}-has-feedback ${t}\n      `]:
              { paddingInlineEnd: o },
            [`&-affix-wrapper${t}-affix-wrapper`]: {
              padding: 0,
              [`> textarea${t}`]: {
                fontSize: 'inherit',
                border: 'none',
                outline: 'none',
                background: 'transparent',
                minHeight: e
                  .calc(e.controlHeight)
                  .sub(e.calc(e.lineWidth).mul(2))
                  .equal(),
                '&:focus': { boxShadow: 'none !important' },
              },
              [`${t}-suffix`]: {
                margin: 0,
                '> *:not(:last-child)': { marginInline: 0 },
                [`${t}-clear-icon`]: {
                  position: 'absolute',
                  insetInlineEnd: e.paddingInline,
                  insetBlockStart: e.paddingXS,
                },
                [`${n}-suffix`]: {
                  position: 'absolute',
                  top: 0,
                  insetInlineEnd: e.paddingInline,
                  bottom: 0,
                  zIndex: 1,
                  display: 'inline-flex',
                  alignItems: 'center',
                  margin: 'auto',
                  pointerEvents: 'none',
                },
              },
            },
            [`&-affix-wrapper${t}-affix-wrapper-rtl`]: {
              [`${t}-suffix`]: {
                [`${t}-data-count`]: { direction: 'ltr', insetInlineStart: 0 },
              },
            },
            [`&-affix-wrapper${t}-affix-wrapper-sm`]: {
              [`${t}-suffix`]: {
                [`${t}-clear-icon`]: { insetInlineEnd: e.paddingInlineSM },
              },
            },
          },
        };
      })(T(e, vs(e))),
    ys,
    { resetFont: !1 },
  );
const Wd = le.forwardRef((e, t) => {
    var o;
    const {
        prefixCls: n,
        bordered: r = !0,
        size: i,
        disabled: a,
        status: l,
        allowClear: s,
        classNames: c,
        rootClassName: d,
        className: u,
        style: p,
        styles: m,
        variant: g,
        showCount: b,
        onMouseDown: f,
        onResize: h,
      } = e,
      $ = (function (e, t) {
        var o = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (o[n] = e[n]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            t.indexOf(n[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
              (o[n[r]] = e[n[r]]);
        }
        return o;
      })(e, [
        'prefixCls',
        'bordered',
        'size',
        'disabled',
        'status',
        'allowClear',
        'classNames',
        'rootClassName',
        'className',
        'style',
        'styles',
        'variant',
        'showCount',
        'onMouseDown',
        'onResize',
      ]),
      {
        getPrefixCls: v,
        direction: y,
        allowClear: x,
        autoComplete: C,
        className: S,
        style: O,
        classNames: k,
        styles: w,
      } = Lt('textArea'),
      E = le.useContext(Dt),
      j = null != a ? a : E,
      { status: I, hasFeedback: P, feedbackIcon: B } = le.useContext(ai),
      z = _a(I, l),
      M = le.useRef(null);
    le.useImperativeHandle(t, () => {
      var e;
      return {
        resizableTextArea:
          null === (e = M.current) || void 0 === e
            ? void 0
            : e.resizableTextArea,
        focus: (e) => {
          var t, o;
          Ae(
            null ===
              (o =
                null === (t = M.current) || void 0 === t
                  ? void 0
                  : t.resizableTextArea) || void 0 === o
              ? void 0
              : o.textArea,
            e,
          );
        },
        blur: () => {
          var e;
          return null === (e = M.current) || void 0 === e ? void 0 : e.blur();
        },
      };
    });
    const H = v('input', n),
      T = Bo(H),
      [R, N, L] = Ks(H, d),
      [F] = Dd(H, T),
      { compactSize: A, compactItemClassnames: D } = Cn(H, y),
      W = hn((e) => {
        var t;
        return null !== (t = null != i ? i : A) && void 0 !== t ? t : e;
      }),
      [_, G] = Qa('textArea', g, r),
      q = Kc(null != s ? s : x),
      [X, V] = le.useState(!1),
      [K, U] = le.useState(!1);
    return R(
      F(
        le.createElement(
          ot,
          Object.assign({ autoComplete: C }, $, {
            style: Object.assign(Object.assign({}, O), p),
            styles: Object.assign(Object.assign({}, w), m),
            disabled: j,
            allowClear: q,
            className: de(
              L,
              T,
              u,
              d,
              D,
              S,
              K && `${H}-textarea-affix-wrapper-resize-dirty`,
            ),
            classNames: Object.assign(Object.assign(Object.assign({}, c), k), {
              textarea: de(
                { [`${H}-sm`]: 'small' === W, [`${H}-lg`]: 'large' === W },
                N,
                null == c ? void 0 : c.textarea,
                k.textarea,
                X && `${H}-mouse-active`,
              ),
              variant: de({ [`${H}-${_}`]: G }, Wa(H, z)),
              affixWrapper: de(
                `${H}-textarea-affix-wrapper`,
                {
                  [`${H}-affix-wrapper-rtl`]: 'rtl' === y,
                  [`${H}-affix-wrapper-sm`]: 'small' === W,
                  [`${H}-affix-wrapper-lg`]: 'large' === W,
                  [`${H}-textarea-show-count`]:
                    b ||
                    (null === (o = e.count) || void 0 === o ? void 0 : o.show),
                },
                N,
              ),
            }),
            prefixCls: H,
            suffix:
              P &&
              le.createElement(
                'span',
                { className: `${H}-textarea-suffix` },
                B,
              ),
            showCount: b,
            ref: M,
            onResize: (e) => {
              var t, o;
              if (
                (null == h || h(e), X && 'function' == typeof getComputedStyle)
              ) {
                const e =
                  null ===
                    (o =
                      null === (t = M.current) || void 0 === t
                        ? void 0
                        : t.nativeElement) || void 0 === o
                    ? void 0
                    : o.querySelector('textarea');
                e && 'both' === getComputedStyle(e).resize && U(!0);
              }
            },
            onMouseDown: (e) => {
              (V(!0), null == f || f(e));
              const t = () => {
                (V(!1), document.removeEventListener('mouseup', t));
              };
              document.addEventListener('mouseup', t);
            },
          }),
        ),
      ),
    );
  }),
  _d = Yc;
((_d.Group = (e) => {
  const { getPrefixCls: t, direction: o } = le.useContext(Tt),
    { prefixCls: n, className: r } = e,
    i = t('input-group', n),
    a = t('input'),
    [l, s, c] = Us(a),
    d = de(
      i,
      c,
      {
        [`${i}-lg`]: 'large' === e.size,
        [`${i}-sm`]: 'small' === e.size,
        [`${i}-compact`]: e.compact,
        [`${i}-rtl`]: 'rtl' === o,
      },
      s,
      r,
    ),
    u = le.useContext(ai),
    p = le.useMemo(
      () => Object.assign(Object.assign({}, u), { isFormItemInput: !1 }),
      [u],
    );
  return l(
    le.createElement(
      'span',
      {
        className: d,
        style: e.style,
        onMouseEnter: e.onMouseEnter,
        onMouseLeave: e.onMouseLeave,
        onFocus: e.onFocus,
        onBlur: e.onBlur,
      },
      le.createElement(ai.Provider, { value: p }, e.children),
    ),
  );
}),
  (_d.Search = Ad),
  (_d.TextArea = Wd),
  (_d.Password = Fd),
  (_d.OTP = Rd));
const Gd = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-disabled`]: {
        '&, &:hover': {
          cursor: 'not-allowed',
          [`${t}-item-link`]: {
            color: e.colorTextDisabled,
            cursor: 'not-allowed',
          },
        },
        '&:focus-visible': {
          cursor: 'not-allowed',
          [`${t}-item-link`]: {
            color: e.colorTextDisabled,
            cursor: 'not-allowed',
          },
        },
      },
      [`&${t}-disabled`]: {
        cursor: 'not-allowed',
        [`${t}-item`]: {
          cursor: 'not-allowed',
          backgroundColor: 'transparent',
          '&:hover, &:active': { backgroundColor: 'transparent' },
          a: {
            color: e.colorTextDisabled,
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'not-allowed',
          },
          '&-active': {
            borderColor: e.colorBorder,
            backgroundColor: e.itemActiveBgDisabled,
            '&:hover, &:active': { backgroundColor: e.itemActiveBgDisabled },
            a: { color: e.itemActiveColorDisabled },
          },
        },
        [`${t}-item-link`]: {
          color: e.colorTextDisabled,
          cursor: 'not-allowed',
          '&:hover, &:active': { backgroundColor: 'transparent' },
          [`${t}-simple&`]: {
            backgroundColor: 'transparent',
            '&:hover, &:active': { backgroundColor: 'transparent' },
          },
        },
        [`${t}-simple-pager`]: { color: e.colorTextDisabled },
        [`${t}-jump-prev, ${t}-jump-next`]: {
          [`${t}-item-link-icon`]: { opacity: 0 },
          [`${t}-item-ellipsis`]: { opacity: 1 },
        },
      },
    };
  },
  qd = (e) => {
    const { componentCls: t } = e;
    return {
      [`&${t}-mini ${t}-total-text, &${t}-mini ${t}-simple-pager`]: {
        height: e.itemSizeSM,
        lineHeight: I(e.itemSizeSM),
      },
      [`&${t}-mini ${t}-item`]: {
        minWidth: e.itemSizeSM,
        height: e.itemSizeSM,
        margin: 0,
        lineHeight: I(e.calc(e.itemSizeSM).sub(2).equal()),
      },
      [`&${t}-mini ${t}-prev, &${t}-mini ${t}-next`]: {
        minWidth: e.itemSizeSM,
        height: e.itemSizeSM,
        margin: 0,
        lineHeight: I(e.itemSizeSM),
      },
      [`&${t}-mini:not(${t}-disabled)`]: {
        [`${t}-prev, ${t}-next`]: {
          [`&:hover ${t}-item-link`]: { backgroundColor: e.colorBgTextHover },
          [`&:active ${t}-item-link`]: { backgroundColor: e.colorBgTextActive },
          [`&${t}-disabled:hover ${t}-item-link`]: {
            backgroundColor: 'transparent',
          },
        },
      },
      [`\n    &${t}-mini ${t}-prev ${t}-item-link,\n    &${t}-mini ${t}-next ${t}-item-link\n    `]:
        {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          '&::after': { height: e.itemSizeSM, lineHeight: I(e.itemSizeSM) },
        },
      [`&${t}-mini ${t}-jump-prev, &${t}-mini ${t}-jump-next`]: {
        height: e.itemSizeSM,
        marginInlineEnd: 0,
        lineHeight: I(e.itemSizeSM),
      },
      [`&${t}-mini ${t}-options`]: {
        marginInlineStart: e.paginationMiniOptionsMarginInlineStart,
        '&-size-changer': { top: e.miniOptionsSizeChangerTop },
        '&-quick-jumper': {
          height: e.itemSizeSM,
          lineHeight: I(e.itemSizeSM),
          input: Object.assign(Object.assign({}, Fs(e)), {
            width: e.paginationMiniQuickJumperInputWidth,
            height: e.controlHeightSM,
          }),
        },
      },
    };
  },
  Xd = (e) => {
    const { componentCls: t } = e;
    return {
      [`&${t}-simple`]: {
        [`${t}-prev, ${t}-next`]: {
          height: e.itemSize,
          lineHeight: I(e.itemSize),
          verticalAlign: 'top',
          [`${t}-item-link`]: {
            height: e.itemSize,
            backgroundColor: 'transparent',
            border: 0,
            '&:hover': { backgroundColor: e.colorBgTextHover },
            '&:active': { backgroundColor: e.colorBgTextActive },
            '&::after': { height: e.itemSize, lineHeight: I(e.itemSize) },
          },
        },
        [`${t}-simple-pager`]: {
          display: 'inline-flex',
          alignItems: 'center',
          height: e.itemSize,
          marginInlineEnd: e.marginXS,
          input: {
            boxSizing: 'border-box',
            height: '100%',
            width: e.quickJumperInputWidth,
            padding: `0 ${I(e.paginationItemPaddingInline)}`,
            textAlign: 'center',
            backgroundColor: e.itemInputBg,
            border: `${I(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
            borderRadius: e.borderRadius,
            outline: 'none',
            transition: `border-color ${e.motionDurationMid}`,
            color: 'inherit',
            '&:hover': { borderColor: e.colorPrimary },
            '&:focus': {
              borderColor: e.colorPrimaryHover,
              boxShadow: `${I(e.inputOutlineOffset)} 0 ${I(e.controlOutlineWidth)} ${e.controlOutline}`,
            },
            '&[disabled]': {
              color: e.colorTextDisabled,
              backgroundColor: e.colorBgContainerDisabled,
              borderColor: e.colorBorder,
              cursor: 'not-allowed',
            },
          },
        },
        [`&${t}-disabled`]: {
          [`${t}-prev, ${t}-next`]: {
            [`${t}-item-link`]: {
              '&:hover, &:active': { backgroundColor: 'transparent' },
            },
          },
        },
        [`&${t}-mini`]: {
          [`${t}-prev, ${t}-next`]: {
            height: e.itemSizeSM,
            lineHeight: I(e.itemSizeSM),
            [`${t}-item-link`]: {
              height: e.itemSizeSM,
              '&::after': { height: e.itemSizeSM, lineHeight: I(e.itemSizeSM) },
            },
          },
          [`${t}-simple-pager`]: {
            height: e.itemSizeSM,
            input: { width: e.paginationMiniQuickJumperInputWidth },
          },
        },
      },
    };
  },
  Vd = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-jump-prev, ${t}-jump-next`]: {
        outline: 0,
        [`${t}-item-container`]: {
          position: 'relative',
          [`${t}-item-link-icon`]: {
            color: e.colorPrimary,
            fontSize: e.fontSizeSM,
            opacity: 0,
            transition: `all ${e.motionDurationMid}`,
            '&-svg': {
              top: 0,
              insetInlineEnd: 0,
              bottom: 0,
              insetInlineStart: 0,
              margin: 'auto',
            },
          },
          [`${t}-item-ellipsis`]: {
            position: 'absolute',
            top: 0,
            insetInlineEnd: 0,
            bottom: 0,
            insetInlineStart: 0,
            display: 'block',
            margin: 'auto',
            color: e.colorTextDisabled,
            letterSpacing: e.paginationEllipsisLetterSpacing,
            textAlign: 'center',
            textIndent: e.paginationEllipsisTextIndent,
            opacity: 1,
            transition: `all ${e.motionDurationMid}`,
          },
        },
        '&:hover': {
          [`${t}-item-link-icon`]: { opacity: 1 },
          [`${t}-item-ellipsis`]: { opacity: 0 },
        },
      },
      [`\n    ${t}-prev,\n    ${t}-jump-prev,\n    ${t}-jump-next\n    `]: {
        marginInlineEnd: e.marginXS,
      },
      [`\n    ${t}-prev,\n    ${t}-next,\n    ${t}-jump-prev,\n    ${t}-jump-next\n    `]:
        {
          display: 'inline-block',
          minWidth: e.itemSize,
          height: e.itemSize,
          color: e.colorText,
          fontFamily: e.fontFamily,
          lineHeight: I(e.itemSize),
          textAlign: 'center',
          verticalAlign: 'middle',
          listStyle: 'none',
          borderRadius: e.borderRadius,
          cursor: 'pointer',
          transition: `all ${e.motionDurationMid}`,
        },
      [`${t}-prev, ${t}-next`]: {
        outline: 0,
        button: { color: e.colorText, cursor: 'pointer', userSelect: 'none' },
        [`${t}-item-link`]: {
          display: 'block',
          width: '100%',
          height: '100%',
          padding: 0,
          fontSize: e.fontSizeSM,
          textAlign: 'center',
          backgroundColor: 'transparent',
          border: `${I(e.lineWidth)} ${e.lineType} transparent`,
          borderRadius: e.borderRadius,
          outline: 'none',
          transition: `all ${e.motionDurationMid}`,
        },
        [`&:hover ${t}-item-link`]: { backgroundColor: e.colorBgTextHover },
        [`&:active ${t}-item-link`]: { backgroundColor: e.colorBgTextActive },
        [`&${t}-disabled:hover`]: {
          [`${t}-item-link`]: { backgroundColor: 'transparent' },
        },
      },
      [`${t}-slash`]: {
        marginInlineEnd: e.paginationSlashMarginInlineEnd,
        marginInlineStart: e.paginationSlashMarginInlineStart,
      },
      [`${t}-options`]: {
        display: 'inline-block',
        marginInlineStart: e.margin,
        verticalAlign: 'middle',
        '&-size-changer': { display: 'inline-block', width: 'auto' },
        '&-quick-jumper': {
          display: 'inline-block',
          height: e.controlHeight,
          marginInlineStart: e.marginXS,
          lineHeight: I(e.controlHeight),
          verticalAlign: 'top',
          input: Object.assign(
            Object.assign(
              Object.assign({}, As(e)),
              Ss(e, {
                borderColor: e.colorBorder,
                hoverBorderColor: e.colorPrimaryHover,
                activeBorderColor: e.colorPrimary,
                activeShadow: e.activeShadow,
              }),
            ),
            {
              '&[disabled]': Object.assign({}, Cs(e)),
              width: e.quickJumperInputWidth,
              height: e.controlHeight,
              boxSizing: 'border-box',
              margin: 0,
              marginInlineStart: e.marginXS,
              marginInlineEnd: e.marginXS,
            },
          ),
        },
      },
    };
  },
  Kd = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-item`]: {
        display: 'inline-block',
        minWidth: e.itemSize,
        height: e.itemSize,
        marginInlineEnd: e.marginXS,
        fontFamily: e.fontFamily,
        lineHeight: I(e.calc(e.itemSize).sub(2).equal()),
        textAlign: 'center',
        verticalAlign: 'middle',
        listStyle: 'none',
        backgroundColor: e.itemBg,
        border: `${I(e.lineWidth)} ${e.lineType} transparent`,
        borderRadius: e.borderRadius,
        outline: 0,
        cursor: 'pointer',
        userSelect: 'none',
        a: {
          display: 'block',
          padding: `0 ${I(e.paginationItemPaddingInline)}`,
          color: e.colorText,
          '&:hover': { textDecoration: 'none' },
        },
        [`&:not(${t}-item-active)`]: {
          '&:hover': {
            transition: `all ${e.motionDurationMid}`,
            backgroundColor: e.colorBgTextHover,
          },
          '&:active': { backgroundColor: e.colorBgTextActive },
        },
        '&-active': {
          fontWeight: e.fontWeightStrong,
          backgroundColor: e.itemActiveBg,
          borderColor: e.colorPrimary,
          a: { color: e.itemActiveColor },
          '&:hover': { borderColor: e.colorPrimaryHover },
          '&:hover a': { color: e.itemActiveColorHover },
        },
      },
    };
  },
  Ud = (e) => {
    const { componentCls: t } = e;
    return {
      [t]: Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(Object.assign({}, oo(e)), {
                    display: 'flex',
                    flexWrap: 'wrap',
                    rowGap: e.paddingXS,
                    '&-start': { justifyContent: 'start' },
                    '&-center': { justifyContent: 'center' },
                    '&-end': { justifyContent: 'end' },
                    'ul, ol': { margin: 0, padding: 0, listStyle: 'none' },
                    '&::after': {
                      display: 'block',
                      clear: 'both',
                      height: 0,
                      overflow: 'hidden',
                      visibility: 'hidden',
                      content: '""',
                    },
                    [`${t}-total-text`]: {
                      display: 'inline-block',
                      height: e.itemSize,
                      marginInlineEnd: e.marginXS,
                      lineHeight: I(e.calc(e.itemSize).sub(2).equal()),
                      verticalAlign: 'middle',
                    },
                  }),
                  Kd(e),
                ),
                Vd(e),
              ),
              Xd(e),
            ),
            qd(e),
          ),
          Gd(e),
        ),
        {
          [`@media only screen and (max-width: ${e.screenLG}px)`]: {
            [`${t}-item`]: {
              '&-after-jump-prev, &-before-jump-next': { display: 'none' },
            },
          },
          [`@media only screen and (max-width: ${e.screenSM}px)`]: {
            [`${t}-options`]: { display: 'none' },
          },
        },
      ),
      [`&${e.componentCls}-rtl`]: { direction: 'rtl' },
    };
  },
  Yd = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}:not(${t}-disabled)`]: {
        [`${t}-item`]: Object.assign({}, ro(e)),
        [`${t}-jump-prev, ${t}-jump-next`]: {
          '&:focus-visible': Object.assign(
            {
              [`${t}-item-link-icon`]: { opacity: 1 },
              [`${t}-item-ellipsis`]: { opacity: 0 },
            },
            no(e),
          ),
        },
        [`${t}-prev, ${t}-next`]: { [`&:focus-visible ${t}-item-link`]: no(e) },
      },
    };
  },
  Qd = (e) =>
    Object.assign(
      {
        itemBg: e.colorBgContainer,
        itemSize: e.controlHeight,
        itemSizeSM: e.controlHeightSM,
        itemActiveBg: e.colorBgContainer,
        itemActiveColor: e.colorPrimary,
        itemActiveColorHover: e.colorPrimaryHover,
        itemLinkBg: e.colorBgContainer,
        itemActiveColorDisabled: e.colorTextDisabled,
        itemActiveBgDisabled: e.controlItemBgActiveDisabled,
        itemInputBg: e.colorBgContainer,
        miniOptionsSizeChangerTop: 0,
      },
      ys(e),
    ),
  Zd = (e) =>
    T(
      e,
      {
        inputOutlineOffset: 0,
        quickJumperInputWidth: e.calc(e.controlHeightLG).mul(1.25).equal(),
        paginationMiniOptionsMarginInlineStart: e
          .calc(e.marginXXS)
          .div(2)
          .equal(),
        paginationMiniQuickJumperInputWidth: e
          .calc(e.controlHeightLG)
          .mul(1.1)
          .equal(),
        paginationItemPaddingInline: e.calc(e.marginXXS).mul(1.5).equal(),
        paginationEllipsisLetterSpacing: e.calc(e.marginXXS).div(2).equal(),
        paginationSlashMarginInlineStart: e.marginSM,
        paginationSlashMarginInlineEnd: e.marginSM,
        paginationEllipsisTextIndent: '0.13em',
      },
      vs(e),
    ),
  Jd = lo(
    'Pagination',
    (e) => {
      const t = Zd(e);
      return [Ud(t), Yd(t)];
    },
    Qd,
  ),
  eu = co(
    ['Pagination', 'bordered'],
    (e) =>
      ((e) => {
        const { componentCls: t } = e;
        return {
          [`${t}${t}-bordered${t}-disabled:not(${t}-mini)`]: {
            '&, &:hover': {
              [`${t}-item-link`]: { borderColor: e.colorBorder },
            },
            '&:focus-visible': {
              [`${t}-item-link`]: { borderColor: e.colorBorder },
            },
            [`${t}-item, ${t}-item-link`]: {
              backgroundColor: e.colorBgContainerDisabled,
              borderColor: e.colorBorder,
              [`&:hover:not(${t}-item-active)`]: {
                backgroundColor: e.colorBgContainerDisabled,
                borderColor: e.colorBorder,
                a: { color: e.colorTextDisabled },
              },
              [`&${t}-item-active`]: {
                backgroundColor: e.itemActiveBgDisabled,
              },
            },
            [`${t}-prev, ${t}-next`]: {
              '&:hover button': {
                backgroundColor: e.colorBgContainerDisabled,
                borderColor: e.colorBorder,
                color: e.colorTextDisabled,
              },
              [`${t}-item-link`]: {
                backgroundColor: e.colorBgContainerDisabled,
                borderColor: e.colorBorder,
              },
            },
          },
          [`${t}${t}-bordered:not(${t}-mini)`]: {
            [`${t}-prev, ${t}-next`]: {
              '&:hover button': {
                borderColor: e.colorPrimaryHover,
                backgroundColor: e.itemBg,
              },
              [`${t}-item-link`]: {
                backgroundColor: e.itemLinkBg,
                borderColor: e.colorBorder,
              },
              [`&:hover ${t}-item-link`]: {
                borderColor: e.colorPrimary,
                backgroundColor: e.itemBg,
                color: e.colorPrimary,
              },
              [`&${t}-disabled`]: {
                [`${t}-item-link`]: {
                  borderColor: e.colorBorder,
                  color: e.colorTextDisabled,
                },
              },
            },
            [`${t}-item`]: {
              backgroundColor: e.itemBg,
              border: `${I(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
              [`&:hover:not(${t}-item-active)`]: {
                borderColor: e.colorPrimary,
                backgroundColor: e.itemBg,
                a: { color: e.colorPrimary },
              },
              '&-active': { borderColor: e.colorPrimary },
            },
          },
        };
      })(Zd(e)),
    Qd,
  );
function tu(e) {
  return le.useMemo(
    () =>
      'boolean' == typeof e
        ? [e, {}]
        : e && 'object' == typeof e
          ? [!0, e]
          : [void 0, void 0],
    [e],
  );
}
const ou = (e) => {
    const {
        align: t,
        prefixCls: o,
        selectPrefixCls: n,
        className: r,
        rootClassName: i,
        style: a,
        size: l,
        locale: s,
        responsive: c,
        showSizeChanger: d,
        selectComponentClass: u,
        pageSizeOptions: p,
      } = e,
      m = (function (e, t) {
        var o = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (o[n] = e[n]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            t.indexOf(n[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
              (o[n[r]] = e[n[r]]);
        }
        return o;
      })(e, [
        'align',
        'prefixCls',
        'selectPrefixCls',
        'className',
        'rootClassName',
        'style',
        'size',
        'locale',
        'responsive',
        'showSizeChanger',
        'selectComponentClass',
        'pageSizeOptions',
      ]),
      { xs: g } = Bl(c),
      [, b] = eo(),
      {
        getPrefixCls: f,
        direction: h,
        showSizeChanger: $,
        className: v,
        style: y,
      } = Lt('pagination'),
      x = f('pagination', o),
      [C, S, O] = Jd(x),
      k = hn(l),
      w = 'small' === k || !(!g || k || !c),
      [E] = ht('Pagination', De),
      j = Object.assign(Object.assign({}, E), s),
      [I, P] = tu(d),
      [B, z] = tu($),
      M = null != I ? I : B,
      H = null != P ? P : z,
      T = u || El,
      R = le.useMemo(() => (p ? p.map((e) => Number(e)) : void 0), [p]),
      N = le.useMemo(() => {
        const e = le.createElement(
          'span',
          { className: `${x}-item-ellipsis` },
          '•••',
        );
        return {
          prevIcon: le.createElement(
            'button',
            { className: `${x}-item-link`, type: 'button', tabIndex: -1 },
            'rtl' === h
              ? le.createElement(te, null)
              : le.createElement(ee, null),
          ),
          nextIcon: le.createElement(
            'button',
            { className: `${x}-item-link`, type: 'button', tabIndex: -1 },
            'rtl' === h
              ? le.createElement(ee, null)
              : le.createElement(te, null),
          ),
          jumpPrevIcon: le.createElement(
            'a',
            { className: `${x}-item-link` },
            le.createElement(
              'div',
              { className: `${x}-item-container` },
              'rtl' === h
                ? le.createElement(J, { className: `${x}-item-link-icon` })
                : le.createElement(Z, { className: `${x}-item-link-icon` }),
              e,
            ),
          ),
          jumpNextIcon: le.createElement(
            'a',
            { className: `${x}-item-link` },
            le.createElement(
              'div',
              { className: `${x}-item-container` },
              'rtl' === h
                ? le.createElement(Z, { className: `${x}-item-link-icon` })
                : le.createElement(J, { className: `${x}-item-link-icon` }),
              e,
            ),
          ),
        };
      }, [h, x]),
      L = f('select', n),
      F = de(
        {
          [`${x}-${t}`]: !!t,
          [`${x}-mini`]: w,
          [`${x}-rtl`]: 'rtl' === h,
          [`${x}-bordered`]: b.wireframe,
        },
        v,
        r,
        i,
        S,
        O,
      ),
      A = Object.assign(Object.assign({}, y), a);
    return C(
      le.createElement(
        le.Fragment,
        null,
        b.wireframe && le.createElement(eu, { prefixCls: x }),
        le.createElement(
          We,
          Object.assign({}, N, m, {
            style: A,
            prefixCls: x,
            selectPrefixCls: L,
            className: F,
            locale: j,
            pageSizeOptions: R,
            showSizeChanger: M,
            sizeChangerRender: (e) => {
              var t;
              const {
                  disabled: o,
                  size: n,
                  onSizeChange: r,
                  'aria-label': i,
                  className: a,
                  options: l,
                } = e,
                { className: s, onChange: c } = H || {},
                d =
                  null === (t = l.find((e) => String(e.value) === String(n))) ||
                  void 0 === t
                    ? void 0
                    : t.value;
              return le.createElement(
                T,
                Object.assign(
                  {
                    disabled: o,
                    showSearch: !0,
                    popupMatchSelectWidth: !1,
                    getPopupContainer: (e) => e.parentNode,
                    'aria-label': i,
                    options: l,
                  },
                  H,
                  {
                    value: d,
                    onChange: (e, t) => {
                      (null == r || r(e), null == c || c(e, t));
                    },
                    size: w ? 'small' : 'middle',
                    className: de(a, s),
                  },
                ),
              );
            },
          }),
        ),
      ),
    );
  },
  nu = 80 * Math.PI,
  ru = (e) => {
    const { dotClassName: t, style: o, hasCircleCls: n } = e;
    return le.createElement('circle', {
      className: de(`${t}-circle`, { [`${t}-circle-bg`]: n }),
      r: 40,
      cx: 50,
      cy: 50,
      strokeWidth: 20,
      style: o,
    });
  },
  iu = ({ percent: e, prefixCls: t }) => {
    const o = `${t}-dot`,
      n = `${o}-holder`,
      r = `${n}-hidden`,
      [i, a] = le.useState(!1);
    f(() => {
      0 !== e && a(!0);
    }, [0 !== e]);
    const l = Math.max(Math.min(e, 100), 0);
    if (!i) return null;
    const s = {
      strokeDashoffset: '' + nu / 4,
      strokeDasharray: `${(nu * l) / 100} ${(nu * (100 - l)) / 100}`,
    };
    return le.createElement(
      'span',
      { className: de(n, `${o}-progress`, l <= 0 && r) },
      le.createElement(
        'svg',
        {
          viewBox: '0 0 100 100',
          role: 'progressbar',
          'aria-valuemin': 0,
          'aria-valuemax': 100,
          'aria-valuenow': l,
        },
        le.createElement(ru, { dotClassName: o, hasCircleCls: !0 }),
        le.createElement(ru, { dotClassName: o, style: s }),
      ),
    );
  };
function au(e) {
  const { prefixCls: t, percent: o = 0 } = e,
    n = `${t}-dot`,
    r = `${n}-holder`,
    i = `${r}-hidden`;
  return le.createElement(
    le.Fragment,
    null,
    le.createElement(
      'span',
      { className: de(r, o > 0 && i) },
      le.createElement(
        'span',
        { className: de(n, `${t}-dot-spin`) },
        [1, 2, 3, 4].map((e) =>
          le.createElement('i', { className: `${t}-dot-item`, key: e }),
        ),
      ),
    ),
    le.createElement(iu, { prefixCls: t, percent: o }),
  );
}
function lu(e) {
  var t;
  const { prefixCls: o, indicator: n, percent: r } = e,
    i = `${o}-dot`;
  return n && le.isValidElement(n)
    ? Po(n, {
        className: de(
          null === (t = n.props) || void 0 === t ? void 0 : t.className,
          i,
        ),
        percent: r,
      })
    : le.createElement(au, { prefixCls: o, percent: r });
}
const su = new R('antSpinMove', { to: { opacity: 1 } }),
  cu = new R('antRotate', { to: { transform: 'rotate(405deg)' } }),
  du = lo(
    'Spin',
    (e) =>
      ((e) => {
        const { componentCls: t, calc: o } = e;
        return {
          [t]: Object.assign(Object.assign({}, oo(e)), {
            position: 'absolute',
            display: 'none',
            color: e.colorPrimary,
            fontSize: 0,
            textAlign: 'center',
            verticalAlign: 'middle',
            opacity: 0,
            transition: `transform ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`,
            '&-spinning': {
              position: 'relative',
              display: 'inline-block',
              opacity: 1,
            },
            [`${t}-text`]: {
              fontSize: e.fontSize,
              paddingTop: o(o(e.dotSize).sub(e.fontSize)).div(2).add(2).equal(),
            },
            '&-fullscreen': {
              position: 'fixed',
              width: '100vw',
              height: '100vh',
              backgroundColor: e.colorBgMask,
              zIndex: e.zIndexPopupBase,
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
              opacity: 0,
              visibility: 'hidden',
              transition: `all ${e.motionDurationMid}`,
              '&-show': { opacity: 1, visibility: 'visible' },
              [t]: {
                [`${t}-dot-holder`]: { color: e.colorWhite },
                [`${t}-text`]: { color: e.colorTextLightSolid },
              },
            },
            '&-nested-loading': {
              position: 'relative',
              [`> div > ${t}`]: {
                position: 'absolute',
                top: 0,
                insetInlineStart: 0,
                zIndex: 4,
                display: 'block',
                width: '100%',
                height: '100%',
                maxHeight: e.contentHeight,
                [`${t}-dot`]: {
                  position: 'absolute',
                  top: '50%',
                  insetInlineStart: '50%',
                  margin: o(e.dotSize).mul(-1).div(2).equal(),
                },
                [`${t}-text`]: {
                  position: 'absolute',
                  top: '50%',
                  width: '100%',
                  textShadow: `0 1px 2px ${e.colorBgContainer}`,
                },
                [`&${t}-show-text ${t}-dot`]: {
                  marginTop: o(e.dotSize).div(2).mul(-1).sub(10).equal(),
                },
                '&-sm': {
                  [`${t}-dot`]: {
                    margin: o(e.dotSizeSM).mul(-1).div(2).equal(),
                  },
                  [`${t}-text`]: {
                    paddingTop: o(o(e.dotSizeSM).sub(e.fontSize))
                      .div(2)
                      .add(2)
                      .equal(),
                  },
                  [`&${t}-show-text ${t}-dot`]: {
                    marginTop: o(e.dotSizeSM).div(2).mul(-1).sub(10).equal(),
                  },
                },
                '&-lg': {
                  [`${t}-dot`]: {
                    margin: o(e.dotSizeLG).mul(-1).div(2).equal(),
                  },
                  [`${t}-text`]: {
                    paddingTop: o(o(e.dotSizeLG).sub(e.fontSize))
                      .div(2)
                      .add(2)
                      .equal(),
                  },
                  [`&${t}-show-text ${t}-dot`]: {
                    marginTop: o(e.dotSizeLG).div(2).mul(-1).sub(10).equal(),
                  },
                },
              },
              [`${t}-container`]: {
                position: 'relative',
                transition: `opacity ${e.motionDurationSlow}`,
                '&::after': {
                  position: 'absolute',
                  top: 0,
                  insetInlineEnd: 0,
                  bottom: 0,
                  insetInlineStart: 0,
                  zIndex: 10,
                  width: '100%',
                  height: '100%',
                  background: e.colorBgContainer,
                  opacity: 0,
                  transition: `all ${e.motionDurationSlow}`,
                  content: '""',
                  pointerEvents: 'none',
                },
              },
              [`${t}-blur`]: {
                clear: 'both',
                opacity: 0.5,
                userSelect: 'none',
                pointerEvents: 'none',
                '&::after': { opacity: 0.4, pointerEvents: 'auto' },
              },
            },
            '&-tip': { color: e.spinDotDefault },
            [`${t}-dot-holder`]: {
              width: '1em',
              height: '1em',
              fontSize: e.dotSize,
              display: 'inline-block',
              transition: `transform ${e.motionDurationSlow} ease, opacity ${e.motionDurationSlow} ease`,
              transformOrigin: '50% 50%',
              lineHeight: 1,
              color: e.colorPrimary,
              '&-hidden': { transform: 'scale(0.3)', opacity: 0 },
            },
            [`${t}-dot-progress`]: { position: 'absolute', inset: 0 },
            [`${t}-dot`]: {
              position: 'relative',
              display: 'inline-block',
              fontSize: e.dotSize,
              width: '1em',
              height: '1em',
              '&-item': {
                position: 'absolute',
                display: 'block',
                width: o(e.dotSize).sub(o(e.marginXXS).div(2)).div(2).equal(),
                height: o(e.dotSize).sub(o(e.marginXXS).div(2)).div(2).equal(),
                background: 'currentColor',
                borderRadius: '100%',
                transform: 'scale(0.75)',
                transformOrigin: '50% 50%',
                opacity: 0.3,
                animationName: su,
                animationDuration: '1s',
                animationIterationCount: 'infinite',
                animationTimingFunction: 'linear',
                animationDirection: 'alternate',
                '&:nth-child(1)': {
                  top: 0,
                  insetInlineStart: 0,
                  animationDelay: '0s',
                },
                '&:nth-child(2)': {
                  top: 0,
                  insetInlineEnd: 0,
                  animationDelay: '0.4s',
                },
                '&:nth-child(3)': {
                  insetInlineEnd: 0,
                  bottom: 0,
                  animationDelay: '0.8s',
                },
                '&:nth-child(4)': {
                  bottom: 0,
                  insetInlineStart: 0,
                  animationDelay: '1.2s',
                },
              },
              '&-spin': {
                transform: 'rotate(45deg)',
                animationName: cu,
                animationDuration: '1.2s',
                animationIterationCount: 'infinite',
                animationTimingFunction: 'linear',
              },
              '&-circle': {
                strokeLinecap: 'round',
                transition: [
                  'stroke-dashoffset',
                  'stroke-dasharray',
                  'stroke',
                  'stroke-width',
                  'opacity',
                ]
                  .map((t) => `${t} ${e.motionDurationSlow} ease`)
                  .join(','),
                fillOpacity: 0,
                stroke: 'currentcolor',
              },
              '&-circle-bg': { stroke: e.colorFillSecondary },
            },
            [`&-sm ${t}-dot`]: { '&, &-holder': { fontSize: e.dotSizeSM } },
            [`&-sm ${t}-dot-holder`]: {
              i: {
                width: o(o(e.dotSizeSM).sub(o(e.marginXXS).div(2)))
                  .div(2)
                  .equal(),
                height: o(o(e.dotSizeSM).sub(o(e.marginXXS).div(2)))
                  .div(2)
                  .equal(),
              },
            },
            [`&-lg ${t}-dot`]: { '&, &-holder': { fontSize: e.dotSizeLG } },
            [`&-lg ${t}-dot-holder`]: {
              i: {
                width: o(o(e.dotSizeLG).sub(e.marginXXS)).div(2).equal(),
                height: o(o(e.dotSizeLG).sub(e.marginXXS)).div(2).equal(),
              },
            },
            [`&${t}-show-text ${t}-text`]: { display: 'block' },
          }),
        };
      })(T(e, { spinDotDefault: e.colorTextDescription })),
    (e) => {
      const { controlHeightLG: t, controlHeight: o } = e;
      return {
        contentHeight: 400,
        dotSize: t / 2,
        dotSizeSM: 0.35 * t,
        dotSizeLG: o,
      };
    },
  ),
  uu = [
    [30, 0.05],
    [70, 0.03],
    [96, 0.01],
  ];
let pu;
const mu = (e) => {
  var t;
  const {
      prefixCls: o,
      spinning: n = !0,
      delay: r = 0,
      className: i,
      rootClassName: a,
      size: l = 'default',
      tip: s,
      wrapperClassName: c,
      style: d,
      children: u,
      fullscreen: p = !1,
      indicator: m,
      percent: g,
    } = e,
    b = (function (e, t) {
      var o = {};
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) &&
          t.indexOf(n) < 0 &&
          (o[n] = e[n]);
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var r = 0;
        for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
          t.indexOf(n[r]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
            (o[n[r]] = e[n[r]]);
      }
      return o;
    })(e, [
      'prefixCls',
      'spinning',
      'delay',
      'className',
      'rootClassName',
      'size',
      'tip',
      'wrapperClassName',
      'style',
      'children',
      'fullscreen',
      'indicator',
      'percent',
    ]),
    {
      getPrefixCls: f,
      direction: h,
      className: $,
      style: v,
      indicator: y,
    } = Lt('spin'),
    x = f('spin', o),
    [C, S, O] = du(x),
    [k, w] = le.useState(
      () =>
        n &&
        !(function (e, t) {
          return !!e && !!t && !Number.isNaN(Number(t));
        })(n, r),
    ),
    E = (function (e, t) {
      const [o, n] = le.useState(0),
        r = le.useRef(null),
        i = 'auto' === t;
      return (
        le.useEffect(
          () => (
            i &&
              e &&
              (n(0),
              (r.current = setInterval(() => {
                n((e) => {
                  const t = 100 - e;
                  for (let o = 0; o < uu.length; o += 1) {
                    const [n, r] = uu[o];
                    if (e <= n) return e + t * r;
                  }
                  return e;
                });
              }, 200))),
            () => {
              r.current && (clearInterval(r.current), (r.current = null));
            }
          ),
          [i, e],
        ),
        i ? o : t
      );
    })(k, g);
  le.useEffect(() => {
    if (n) {
      const e = Ye(r, () => {
        w(!0);
      });
      return (
        e(),
        () => {
          var t;
          null === (t = null == e ? void 0 : e.cancel) ||
            void 0 === t ||
            t.call(e);
        }
      );
    }
    w(!1);
  }, [r, n]);
  const j = le.useMemo(() => void 0 !== u && !p, [u, p]),
    I = de(
      x,
      $,
      {
        [`${x}-sm`]: 'small' === l,
        [`${x}-lg`]: 'large' === l,
        [`${x}-spinning`]: k,
        [`${x}-show-text`]: !!s,
        [`${x}-rtl`]: 'rtl' === h,
      },
      i,
      !p && a,
      S,
      O,
    ),
    P = de(`${x}-container`, { [`${x}-blur`]: k }),
    B = null !== (t = null != m ? m : y) && void 0 !== t ? t : pu,
    z = Object.assign(Object.assign({}, v), d),
    M = le.createElement(
      'div',
      Object.assign({}, b, {
        style: z,
        className: I,
        'aria-live': 'polite',
        'aria-busy': k,
      }),
      le.createElement(lu, { prefixCls: x, indicator: B, percent: E }),
      s && (j || p)
        ? le.createElement('div', { className: `${x}-text` }, s)
        : null,
    );
  return C(
    j
      ? le.createElement(
          'div',
          Object.assign({}, b, {
            className: de(`${x}-nested-loading`, c, S, O),
          }),
          k && le.createElement('div', { key: 'loading' }, M),
          le.createElement('div', { className: P, key: 'container' }, u),
        )
      : p
        ? le.createElement(
            'div',
            {
              className: de(
                `${x}-fullscreen`,
                { [`${x}-fullscreen-show`]: k },
                a,
                S,
                O,
              ),
            },
            M,
          )
        : M,
  );
};
mu.setDefaultIndicator = (e) => {
  pu = e;
};
const gu = se.createContext({});
gu.Consumer;
var bu = function (e, t) {
  var o = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (o[n] = e[n]);
  if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
    var r = 0;
    for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
      t.indexOf(n[r]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
        (o[n[r]] = e[n[r]]);
  }
  return o;
};
const fu = se.forwardRef((e, t) => {
  const {
      prefixCls: o,
      children: n,
      actions: r,
      extra: i,
      styles: a,
      className: l,
      classNames: s,
      colStyle: c,
    } = e,
    d = bu(e, [
      'prefixCls',
      'children',
      'actions',
      'extra',
      'styles',
      'className',
      'classNames',
      'colStyle',
    ]),
    { grid: u, itemLayout: p } = le.useContext(gu),
    { getPrefixCls: m, list: g } = le.useContext(Tt),
    b = (e) => {
      var t, o;
      return de(
        null ===
          (o =
            null === (t = null == g ? void 0 : g.item) || void 0 === t
              ? void 0
              : t.classNames) || void 0 === o
          ? void 0
          : o[e],
        null == s ? void 0 : s[e],
      );
    },
    f = (e) => {
      var t, o;
      return Object.assign(
        Object.assign(
          {},
          null ===
            (o =
              null === (t = null == g ? void 0 : g.item) || void 0 === t
                ? void 0
                : t.styles) || void 0 === o
            ? void 0
            : o[e],
        ),
        null == a ? void 0 : a[e],
      );
    },
    h = m('list', o),
    $ =
      r &&
      r.length > 0 &&
      se.createElement(
        'ul',
        {
          className: de(`${h}-item-action`, b('actions')),
          key: 'actions',
          style: f('actions'),
        },
        r.map((e, t) =>
          se.createElement(
            'li',
            { key: `${h}-item-action-${t}` },
            e,
            t !== r.length - 1 &&
              se.createElement('em', { className: `${h}-item-action-split` }),
          ),
        ),
      ),
    v = u ? 'div' : 'li',
    y = se.createElement(
      v,
      Object.assign({}, d, u ? {} : { ref: t }, {
        className: de(
          `${h}-item`,
          {
            [`${h}-item-no-flex`]: !('vertical' === p
              ? i
              : !(() => {
                  let e = !1;
                  return (
                    le.Children.forEach(n, (t) => {
                      'string' == typeof t && (e = !0);
                    }),
                    e && le.Children.count(n) > 1
                  );
                })()),
          },
          l,
        ),
      }),
      'vertical' === p && i
        ? [
            se.createElement(
              'div',
              { className: `${h}-item-main`, key: 'content' },
              n,
              $,
            ),
            se.createElement(
              'div',
              {
                className: de(`${h}-item-extra`, b('extra')),
                key: 'extra',
                style: f('extra'),
              },
              i,
            ),
          ]
        : [n, $, Po(i, { key: 'extra' })],
    );
  return u ? se.createElement(Hc, { ref: t, flex: 1, style: c }, y) : y;
});
fu.Meta = (e) => {
  var { prefixCls: t, className: o, avatar: n, title: r, description: i } = e,
    a = bu(e, ['prefixCls', 'className', 'avatar', 'title', 'description']);
  const { getPrefixCls: l } = le.useContext(Tt),
    s = l('list', t),
    c = de(`${s}-item-meta`, o),
    d = se.createElement(
      'div',
      { className: `${s}-item-meta-content` },
      r && se.createElement('h4', { className: `${s}-item-meta-title` }, r),
      i &&
        se.createElement('div', { className: `${s}-item-meta-description` }, i),
    );
  return se.createElement(
    'div',
    Object.assign({}, a, { className: c }),
    n && se.createElement('div', { className: `${s}-item-meta-avatar` }, n),
    (r || i) && d,
  );
};
const hu = (e) => {
    const {
        listBorderedCls: t,
        componentCls: o,
        paddingLG: n,
        margin: r,
        itemPaddingSM: i,
        itemPaddingLG: a,
        marginLG: l,
        borderRadiusLG: s,
      } = e,
      c = I(e.calc(s).sub(e.lineWidth).equal());
    return {
      [t]: {
        border: `${I(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
        borderRadius: s,
        [`${o}-header`]: { borderRadius: `${c} ${c} 0 0` },
        [`${o}-footer`]: { borderRadius: `0 0 ${c} ${c}` },
        [`${o}-header,${o}-footer,${o}-item`]: { paddingInline: n },
        [`${o}-pagination`]: { margin: `${I(r)} ${I(l)}` },
      },
      [`${t}${o}-sm`]: {
        [`${o}-item,${o}-header,${o}-footer`]: { padding: i },
      },
      [`${t}${o}-lg`]: {
        [`${o}-item,${o}-header,${o}-footer`]: { padding: a },
      },
    };
  },
  $u = (e) => {
    const {
      componentCls: t,
      screenSM: o,
      screenMD: n,
      marginLG: r,
      marginSM: i,
      margin: a,
    } = e;
    return {
      [`@media screen and (max-width:${n}px)`]: {
        [t]: {
          [`${t}-item`]: { [`${t}-item-action`]: { marginInlineStart: r } },
        },
        [`${t}-vertical`]: {
          [`${t}-item`]: { [`${t}-item-extra`]: { marginInlineStart: r } },
        },
      },
      [`@media screen and (max-width: ${o}px)`]: {
        [t]: {
          [`${t}-item`]: {
            flexWrap: 'wrap',
            [`${t}-action`]: { marginInlineStart: i },
          },
        },
        [`${t}-vertical`]: {
          [`${t}-item`]: {
            flexWrap: 'wrap-reverse',
            [`${t}-item-main`]: { minWidth: e.contentWidth },
            [`${t}-item-extra`]: { margin: `auto auto ${I(a)}` },
          },
        },
      },
    };
  },
  vu = (e) => {
    const {
      componentCls: t,
      antCls: o,
      controlHeight: n,
      minHeight: r,
      paddingSM: i,
      marginLG: a,
      padding: l,
      itemPadding: s,
      colorPrimary: c,
      itemPaddingSM: d,
      itemPaddingLG: u,
      paddingXS: p,
      margin: m,
      colorText: g,
      colorTextDescription: b,
      motionDurationSlow: f,
      lineWidth: h,
      headerBg: $,
      footerBg: v,
      emptyTextPadding: y,
      metaMarginBottom: x,
      avatarMarginRight: C,
      titleMarginBottom: S,
      descriptionFontSize: O,
    } = e;
    return {
      [t]: Object.assign(Object.assign({}, oo(e)), {
        position: 'relative',
        '--rc-virtual-list-scrollbar-bg': e.colorSplit,
        '*': { outline: 'none' },
        [`${t}-header`]: { background: $ },
        [`${t}-footer`]: { background: v },
        [`${t}-header, ${t}-footer`]: { paddingBlock: i },
        [`${t}-pagination`]: {
          marginBlockStart: a,
          [`${o}-pagination-options`]: { textAlign: 'start' },
        },
        [`${t}-spin`]: { minHeight: r, textAlign: 'center' },
        [`${t}-items`]: { margin: 0, padding: 0, listStyle: 'none' },
        [`${t}-item`]: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: s,
          color: g,
          [`${t}-item-meta`]: {
            display: 'flex',
            flex: 1,
            alignItems: 'flex-start',
            maxWidth: '100%',
            [`${t}-item-meta-avatar`]: { marginInlineEnd: C },
            [`${t}-item-meta-content`]: { flex: '1 0', width: 0, color: g },
            [`${t}-item-meta-title`]: {
              margin: `0 0 ${I(e.marginXXS)} 0`,
              color: g,
              fontSize: e.fontSize,
              lineHeight: e.lineHeight,
              '> a': {
                color: g,
                transition: `all ${f}`,
                '&:hover': { color: c },
              },
            },
            [`${t}-item-meta-description`]: {
              color: b,
              fontSize: O,
              lineHeight: e.lineHeight,
            },
          },
          [`${t}-item-action`]: {
            flex: '0 0 auto',
            marginInlineStart: e.marginXXL,
            padding: 0,
            fontSize: 0,
            listStyle: 'none',
            '& > li': {
              position: 'relative',
              display: 'inline-block',
              padding: `0 ${I(p)}`,
              color: b,
              fontSize: e.fontSize,
              lineHeight: e.lineHeight,
              textAlign: 'center',
              '&:first-child': { paddingInlineStart: 0 },
            },
            [`${t}-item-action-split`]: {
              position: 'absolute',
              insetBlockStart: '50%',
              insetInlineEnd: 0,
              width: h,
              height: e
                .calc(e.fontHeight)
                .sub(e.calc(e.marginXXS).mul(2))
                .equal(),
              transform: 'translateY(-50%)',
              backgroundColor: e.colorSplit,
            },
          },
        },
        [`${t}-empty`]: {
          padding: `${I(l)} 0`,
          color: b,
          fontSize: e.fontSizeSM,
          textAlign: 'center',
        },
        [`${t}-empty-text`]: {
          padding: y,
          color: e.colorTextDisabled,
          fontSize: e.fontSize,
          textAlign: 'center',
        },
        [`${t}-item-no-flex`]: { display: 'block' },
      }),
      [`${t}-grid ${o}-col > ${t}-item`]: {
        display: 'block',
        maxWidth: '100%',
        marginBlockEnd: m,
        paddingBlock: 0,
        borderBlockEnd: 'none',
      },
      [`${t}-vertical ${t}-item`]: {
        alignItems: 'initial',
        [`${t}-item-main`]: { display: 'block', flex: 1 },
        [`${t}-item-extra`]: { marginInlineStart: a },
        [`${t}-item-meta`]: {
          marginBlockEnd: x,
          [`${t}-item-meta-title`]: {
            marginBlockStart: 0,
            marginBlockEnd: S,
            color: g,
            fontSize: e.fontSizeLG,
            lineHeight: e.lineHeightLG,
          },
        },
        [`${t}-item-action`]: {
          marginBlockStart: l,
          marginInlineStart: 'auto',
          '> li': {
            padding: `0 ${I(l)}`,
            '&:first-child': { paddingInlineStart: 0 },
          },
        },
      },
      [`${t}-split ${t}-item`]: {
        borderBlockEnd: `${I(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
        '&:last-child': { borderBlockEnd: 'none' },
      },
      [`${t}-split ${t}-header`]: {
        borderBlockEnd: `${I(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
      },
      [`${t}-split${t}-empty ${t}-footer`]: {
        borderTop: `${I(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
      },
      [`${t}-loading ${t}-spin-nested-loading`]: { minHeight: n },
      [`${t}-split${t}-something-after-last-item ${o}-spin-container > ${t}-items > ${t}-item:last-child`]:
        { borderBlockEnd: `${I(e.lineWidth)} ${e.lineType} ${e.colorSplit}` },
      [`${t}-lg ${t}-item`]: { padding: u },
      [`${t}-sm ${t}-item`]: { padding: d },
      [`${t}:not(${t}-vertical)`]: {
        [`${t}-item-no-flex`]: { [`${t}-item-action`]: { float: 'right' } },
      },
    };
  },
  yu = lo(
    'List',
    (e) => {
      const t = T(e, {
        listBorderedCls: `${e.componentCls}-bordered`,
        minHeight: e.controlHeightLG,
      });
      return [vu(t), hu(t), $u(t)];
    },
    (e) => ({
      contentWidth: 220,
      itemPadding: `${I(e.paddingContentVertical)} 0`,
      itemPaddingSM: `${I(e.paddingContentVerticalSM)} ${I(e.paddingContentHorizontal)}`,
      itemPaddingLG: `${I(e.paddingContentVerticalLG)} ${I(e.paddingContentHorizontalLG)}`,
      headerBg: 'transparent',
      footerBg: 'transparent',
      emptyTextPadding: e.padding,
      metaMarginBottom: e.padding,
      avatarMarginRight: e.padding,
      titleMarginBottom: e.paddingSM,
      descriptionFontSize: e.fontSize,
    }),
  );
function xu(e, t) {
  const {
      pagination: o = !1,
      prefixCls: n,
      bordered: r = !1,
      split: i = !0,
      className: a,
      rootClassName: l,
      style: s,
      children: c,
      itemLayout: d,
      loadMore: u,
      grid: p,
      dataSource: m = [],
      size: g,
      header: b,
      footer: f,
      loading: h = !1,
      rowKey: $,
      renderItem: v,
      locale: y,
    } = e,
    x = (function (e, t) {
      var o = {};
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) &&
          t.indexOf(n) < 0 &&
          (o[n] = e[n]);
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var r = 0;
        for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
          t.indexOf(n[r]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
            (o[n[r]] = e[n[r]]);
      }
      return o;
    })(e, [
      'pagination',
      'prefixCls',
      'bordered',
      'split',
      'className',
      'rootClassName',
      'style',
      'children',
      'itemLayout',
      'loadMore',
      'grid',
      'dataSource',
      'size',
      'header',
      'footer',
      'loading',
      'rowKey',
      'renderItem',
      'locale',
    ]),
    C = o && 'object' == typeof o ? o : {},
    [S, O] = le.useState(C.defaultCurrent || 1),
    [k, w] = le.useState(C.defaultPageSize || 10),
    { getPrefixCls: E, direction: j, className: I, style: P } = Lt('list'),
    { renderEmpty: B } = le.useContext(Tt),
    z = (e) => (t, n) => {
      var r;
      (O(t),
        w(n),
        o &&
          (null === (r = null == o ? void 0 : o[e]) ||
            void 0 === r ||
            r.call(o, t, n)));
    },
    M = z('onChange'),
    H = z('onShowSizeChange'),
    T = (e, t) => {
      if (!v) return null;
      let o;
      return (
        (o = 'function' == typeof $ ? $(e) : $ ? e[$] : e.key),
        o || (o = `list-item-${t}`),
        le.createElement(le.Fragment, { key: o }, v(e, t))
      );
    },
    R = !!(u || o || f),
    N = E('list', n),
    [L, F, A] = yu(N);
  let D = h;
  'boolean' == typeof D && (D = { spinning: D });
  const W = !!(null == D ? void 0 : D.spinning);
  let _ = '';
  switch (hn(g)) {
    case 'large':
      _ = 'lg';
      break;
    case 'small':
      _ = 'sm';
  }
  const G = de(
      N,
      {
        [`${N}-vertical`]: 'vertical' === d,
        [`${N}-${_}`]: _,
        [`${N}-split`]: i,
        [`${N}-bordered`]: r,
        [`${N}-loading`]: W,
        [`${N}-grid`]: !!p,
        [`${N}-something-after-last-item`]: R,
        [`${N}-rtl`]: 'rtl' === j,
      },
      I,
      a,
      l,
      F,
      A,
    ),
    q = zo(
      { current: 1, total: 0, position: 'bottom' },
      { total: m.length, current: S, pageSize: k },
      o || {},
    ),
    X = Math.ceil(q.total / q.pageSize);
  q.current = Math.min(q.current, X);
  const V =
    o &&
    le.createElement(
      'div',
      { className: de(`${N}-pagination`) },
      le.createElement(
        ou,
        Object.assign({ align: 'end' }, q, {
          onChange: M,
          onShowSizeChange: H,
        }),
      ),
    );
  let K = ze(m);
  o &&
    m.length > (q.current - 1) * q.pageSize &&
    (K = ze(m).splice((q.current - 1) * q.pageSize, q.pageSize));
  const U = Bl(
      Object.keys(p || {}).some((e) =>
        ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].includes(e),
      ),
    ),
    Y = le.useMemo(() => {
      for (let e = 0; e < Il.length; e += 1) {
        const t = Il[e];
        if (U[t]) return t;
      }
    }, [U]),
    Q = le.useMemo(() => {
      if (!p) return;
      const e = Y && p[Y] ? p[Y] : p.column;
      return e ? { width: 100 / e + '%', maxWidth: 100 / e + '%' } : void 0;
    }, [JSON.stringify(p), Y]);
  let Z = W && le.createElement('div', { style: { minHeight: 53 } });
  if (K.length > 0) {
    const e = K.map(T);
    Z = p
      ? le.createElement(
          Rc,
          { gutter: p.gutter },
          le.Children.map(e, (e) =>
            le.createElement(
              'div',
              { key: null == e ? void 0 : e.key, style: Q },
              e,
            ),
          ),
        )
      : le.createElement('ul', { className: `${N}-items` }, e);
  } else
    c ||
      W ||
      (Z = le.createElement(
        'div',
        { className: `${N}-empty-text` },
        (null == y ? void 0 : y.emptyText) ||
          (null == B ? void 0 : B('List')) ||
          le.createElement(Ya, { componentName: 'List' }),
      ));
  const J = q.position,
    ee = le.useMemo(() => ({ grid: p, itemLayout: d }), [JSON.stringify(p), d]);
  return L(
    le.createElement(
      gu.Provider,
      { value: ee },
      le.createElement(
        'div',
        Object.assign(
          {
            ref: t,
            style: Object.assign(Object.assign({}, P), s),
            className: G,
          },
          x,
        ),
        ('top' === J || 'both' === J) && V,
        b && le.createElement('div', { className: `${N}-header` }, b),
        le.createElement(mu, Object.assign({}, D), Z, c),
        f && le.createElement('div', { className: `${N}-footer` }, f),
        u || (('bottom' === J || 'both' === J) && V),
      ),
    ),
  );
}
const Cu = le.forwardRef(xu);
Cu.Item = fu;
let Su = null,
  Ou = (e) => e(),
  ku = [],
  wu = {};
function Eu() {
  const { getContainer: e, duration: t, rtl: o, maxCount: n, top: r } = wu,
    i = (null == e ? void 0 : e()) || document.body;
  return { getContainer: () => i, duration: t, rtl: o, maxCount: n, top: r };
}
const ju = se.forwardRef((e, t) => {
    const { messageConfig: o, sync: n } = e,
      { getPrefixCls: r } = le.useContext(Tt),
      i = wu.prefixCls || r('message'),
      a = le.useContext(Ra),
      [l, s] = nn(
        Object.assign(
          Object.assign(Object.assign({}, o), { prefixCls: i }),
          a.message,
        ),
      );
    return (
      se.useImperativeHandle(t, () => {
        const e = Object.assign({}, l);
        return (
          Object.keys(e).forEach((t) => {
            e[t] = (...e) => (n(), l[t].apply(l, e));
          }),
          { instance: e, sync: n }
        );
      }),
      s
    );
  }),
  Iu = se.forwardRef((e, t) => {
    const [o, n] = se.useState(Eu),
      r = () => {
        n(Eu);
      };
    se.useEffect(r, []);
    const i = ko(),
      a = i.getRootPrefixCls(),
      l = i.getIconPrefixCls(),
      s = i.getTheme(),
      c = se.createElement(ju, { ref: t, sync: r, messageConfig: o });
    return se.createElement(
      Eo,
      { prefixCls: a, iconPrefixCls: l, theme: s },
      i.holderRender ? i.holderRender(c) : c,
    );
  }),
  Pu = () => {
    if (!Su) {
      const e = document.createDocumentFragment(),
        t = { fragment: e };
      return (
        (Su = t),
        void Ou(() => {
          ln()(
            se.createElement(Iu, {
              ref: (e) => {
                const { instance: o, sync: n } = e || {};
                Promise.resolve().then(() => {
                  !t.instance && o && ((t.instance = o), (t.sync = n), Pu());
                });
              },
            }),
            e,
          );
        })
      );
    }
    Su.instance &&
      (ku.forEach((e) => {
        const { type: t, skipped: o } = e;
        if (!o)
          switch (t) {
            case 'open':
              Ou(() => {
                const t = Su.instance.open(
                  Object.assign(Object.assign({}, wu), e.config),
                );
                (null == t || t.then(e.resolve), e.setCloseFn(t));
              });
              break;
            case 'destroy':
              Ou(() => {
                null == Su || Su.instance.destroy(e.key);
              });
              break;
            default:
              Ou(() => {
                var o;
                const n = (o = Su.instance)[t].apply(o, ze(e.args));
                (null == n || n.then(e.resolve), e.setCloseFn(n));
              });
          }
      }),
      (ku = []));
  };
const Bu = {
  open: function (e) {
    const t = Qo((t) => {
      let o;
      const n = {
        type: 'open',
        config: e,
        resolve: t,
        setCloseFn: (e) => {
          o = e;
        },
      };
      return (
        ku.push(n),
        () => {
          o
            ? Ou(() => {
                o();
              })
            : (n.skipped = !0);
        }
      );
    });
    return (Pu(), t);
  },
  destroy: (e) => {
    (ku.push({ type: 'destroy', key: e }), Pu());
  },
  config: function (e) {
    ((wu = Object.assign(Object.assign({}, wu), e)),
      Ou(() => {
        var e;
        null === (e = null == Su ? void 0 : Su.sync) ||
          void 0 === e ||
          e.call(Su);
      }));
  },
  useMessage: rn,
  _InternalPanelDoNotUseOrYouWillBeFired: (e) => {
    const { prefixCls: t, className: o, type: n, icon: r, content: i } = e,
      a = (function (e, t) {
        var o = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (o[n] = e[n]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            t.indexOf(n[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
              (o[n[r]] = e[n[r]]);
        }
        return o;
      })(e, ['prefixCls', 'className', 'type', 'icon', 'content']),
      { getPrefixCls: l } = le.useContext(Tt),
      s = t || l('message'),
      c = Bo(s),
      [d, u, p] = Ko(s, c);
    return d(
      le.createElement(
        Qe,
        Object.assign({}, a, {
          prefixCls: s,
          className: de(o, u, `${s}-notice-pure-panel`, p, c),
          eventKey: 'pure',
          duration: null,
          content: le.createElement(Yo, { prefixCls: s, type: n, icon: r }, i),
        }),
      ),
    );
  },
};
['success', 'info', 'warning', 'error', 'loading'].forEach((e) => {
  Bu[e] = (...t) =>
    (function (e, t) {
      const o = Qo((o) => {
        let n;
        const r = {
          type: e,
          args: t,
          resolve: o,
          setCloseFn: (e) => {
            n = e;
          },
        };
        return (
          ku.push(r),
          () => {
            n
              ? Ou(() => {
                  n();
                })
              : (r.skipped = !0);
          }
        );
      });
      return (Pu(), o);
    })(e, t);
});
const zu = Aa((e) => {
  const {
      prefixCls: t,
      className: o,
      closeIcon: n,
      closable: r,
      type: i,
      title: a,
      children: l,
      footer: s,
    } = e,
    c = (function (e, t) {
      var o = {};
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) &&
          t.indexOf(n) < 0 &&
          (o[n] = e[n]);
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var r = 0;
        for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
          t.indexOf(n[r]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
            (o[n[r]] = e[n[r]]);
      }
      return o;
    })(e, [
      'prefixCls',
      'className',
      'closeIcon',
      'closable',
      'type',
      'title',
      'children',
      'footer',
    ]),
    { getPrefixCls: d } = le.useContext(Tt),
    u = d(),
    p = t || d('modal'),
    m = Bo(u),
    [g, b, f] = Vi(p, m),
    h = `${p}-confirm`;
  let $ = {};
  return (
    ($ = i
      ? {
          closable: null != r && r,
          title: '',
          footer: '',
          children: le.createElement(
            Zi,
            Object.assign({}, e, {
              prefixCls: p,
              confirmPrefixCls: h,
              rootPrefixCls: u,
              content: l,
            }),
          ),
        }
      : {
          closable: null == r || r,
          title: a,
          footer: null !== s && le.createElement(Hi, Object.assign({}, e)),
          children: l,
        }),
    g(
      le.createElement(
        Le,
        Object.assign(
          {
            prefixCls: p,
            className: de(
              b,
              `${p}-pure-panel`,
              i && h,
              i && `${h}-${i}`,
              o,
              f,
              m,
            ),
          },
          c,
          { closeIcon: Mi(p, n), closable: r },
          $,
        ),
      ),
    )
  );
});
function Mu(e) {
  return ia(aa(e));
}
const Hu = Yi;
((Hu.useModal = ba),
  (Hu.info = function (e) {
    return ia(la(e));
  }),
  (Hu.success = function (e) {
    return ia(sa(e));
  }),
  (Hu.error = function (e) {
    return ia(ca(e));
  }),
  (Hu.warning = Mu),
  (Hu.warn = Mu),
  (Hu.confirm = function (e) {
    return ia(da(e));
  }),
  (Hu.destroyAll = function () {
    for (; ta.length; ) {
      const e = ta.pop();
      e && e();
    }
  }),
  (Hu.config = function ({ rootPrefixCls: e }) {
    oa = e;
  }),
  (Hu._InternalPanelDoNotUseOrYouWillBeFired = zu));
let Tu = null,
  Ru = (e) => e(),
  Nu = [],
  Lu = {};
function Fu() {
  const {
      getContainer: e,
      rtl: t,
      maxCount: o,
      top: n,
      bottom: r,
      showProgress: i,
      pauseOnHover: a,
    } = Lu,
    l = (null == e ? void 0 : e()) || document.body;
  return {
    getContainer: () => l,
    rtl: t,
    maxCount: o,
    top: n,
    bottom: r,
    showProgress: i,
    pauseOnHover: a,
  };
}
const Au = se.forwardRef((e, t) => {
    const { notificationConfig: o, sync: n } = e,
      { getPrefixCls: r } = le.useContext(Tt),
      i = Lu.prefixCls || r('notification'),
      a = le.useContext(Ra),
      [l, s] = Ha(
        Object.assign(
          Object.assign(Object.assign({}, o), { prefixCls: i }),
          a.notification,
        ),
      );
    return (
      se.useEffect(n, []),
      se.useImperativeHandle(t, () => {
        const e = Object.assign({}, l);
        return (
          Object.keys(e).forEach((t) => {
            e[t] = (...e) => (n(), l[t].apply(l, e));
          }),
          { instance: e, sync: n }
        );
      }),
      s
    );
  }),
  Du = se.forwardRef((e, t) => {
    const [o, n] = se.useState(Fu),
      r = () => {
        n(Fu);
      };
    se.useEffect(r, []);
    const i = ko(),
      a = i.getRootPrefixCls(),
      l = i.getIconPrefixCls(),
      s = i.getTheme(),
      c = se.createElement(Au, { ref: t, sync: r, notificationConfig: o });
    return se.createElement(
      Eo,
      { prefixCls: a, iconPrefixCls: l, theme: s },
      i.holderRender ? i.holderRender(c) : c,
    );
  }),
  Wu = () => {
    if (!Tu) {
      const e = document.createDocumentFragment(),
        t = { fragment: e };
      return (
        (Tu = t),
        void Ru(() => {
          ln()(
            se.createElement(Du, {
              ref: (e) => {
                const { instance: o, sync: n } = e || {};
                Promise.resolve().then(() => {
                  !t.instance && o && ((t.instance = o), (t.sync = n), Wu());
                });
              },
            }),
            e,
          );
        })
      );
    }
    Tu.instance &&
      (Nu.forEach((e) => {
        switch (e.type) {
          case 'open':
            Ru(() => {
              Tu.instance.open(Object.assign(Object.assign({}, Lu), e.config));
            });
            break;
          case 'destroy':
            Ru(() => {
              var t;
              null === (t = null == Tu ? void 0 : Tu.instance) ||
                void 0 === t ||
                t.destroy(e.key);
            });
        }
      }),
      (Nu = []));
  };
function _u(e) {
  (Nu.push({ type: 'open', config: e }), Wu());
}
const Gu = {
  open: _u,
  destroy: (e) => {
    (Nu.push({ type: 'destroy', key: e }), Wu());
  },
  config: function (e) {
    ((Lu = Object.assign(Object.assign({}, Lu), e)),
      Ru(() => {
        var e;
        null === (e = null == Tu ? void 0 : Tu.sync) ||
          void 0 === e ||
          e.call(Tu);
      }));
  },
  useNotification: Ta,
  _InternalPanelDoNotUseOrYouWillBeFired: (e) => {
    const {
        prefixCls: t,
        className: o,
        icon: n,
        type: r,
        message: i,
        description: a,
        btn: l,
        actions: s,
        closable: c = !0,
        closeIcon: d,
        className: u,
      } = e,
      p = (function (e, t) {
        var o = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (o[n] = e[n]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            t.indexOf(n[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
              (o[n[r]] = e[n[r]]);
        }
        return o;
      })(e, [
        'prefixCls',
        'className',
        'icon',
        'type',
        'message',
        'description',
        'btn',
        'actions',
        'closable',
        'closeIcon',
        'className',
      ]),
      { getPrefixCls: m } = le.useContext(Tt),
      g = null != s ? s : l,
      b = t || m('notification'),
      f = `${b}-notice`,
      h = Bo(b),
      [$, v, y] = wa(b, h);
    return $(
      le.createElement(
        'div',
        { className: de(`${f}-pure-panel`, v, o, y, h) },
        le.createElement(Ea, { prefixCls: b }),
        le.createElement(
          Qe,
          Object.assign({}, p, {
            prefixCls: b,
            eventKey: 'pure',
            duration: null,
            closable: c,
            className: de({ notificationClassName: u }),
            closeIcon: ja(b, d),
            content: le.createElement(Pa, {
              prefixCls: f,
              icon: n,
              type: r,
              message: i,
              description: a,
              actions: g,
            }),
          }),
        ),
      ),
    );
  },
};
['success', 'info', 'warning', 'error'].forEach((e) => {
  Gu[e] = (t) => _u(Object.assign(Object.assign({}, t), { type: e }));
});
const qu = lo(
  'Popconfirm',
  (e) =>
    ((e) => {
      const {
        componentCls: t,
        iconCls: o,
        antCls: n,
        zIndexPopup: r,
        colorText: i,
        colorWarning: a,
        marginXXS: l,
        marginXS: s,
        fontSize: c,
        fontWeightStrong: d,
        colorTextHeading: u,
      } = e;
      return {
        [t]: {
          zIndex: r,
          [`&${n}-popover`]: { fontSize: c },
          [`${t}-message`]: {
            marginBottom: s,
            display: 'flex',
            flexWrap: 'nowrap',
            alignItems: 'start',
            [`> ${t}-message-icon ${o}`]: {
              color: a,
              fontSize: c,
              lineHeight: 1,
              marginInlineEnd: s,
            },
            [`${t}-title`]: {
              fontWeight: d,
              color: u,
              '&:only-child': { fontWeight: 'normal' },
            },
            [`${t}-description`]: { marginTop: l, color: i },
          },
          [`${t}-buttons`]: {
            textAlign: 'end',
            whiteSpace: 'nowrap',
            button: { marginInlineStart: s },
          },
        },
      };
    })(e),
  (e) => {
    const { zIndexPopupBase: t } = e;
    return { zIndexPopup: t + 60 };
  },
  { resetStyle: !1 },
);
const Xu = (e) => {
  const {
      prefixCls: t,
      okButtonProps: o,
      cancelButtonProps: n,
      title: r,
      description: i,
      cancelText: a,
      okText: l,
      okType: s = 'primary',
      icon: c = le.createElement(L, null),
      showCancel: d = !0,
      close: u,
      onConfirm: p,
      onCancel: m,
      onPopupClick: g,
    } = e,
    { getPrefixCls: b } = le.useContext(Tt),
    [f] = ht('Popconfirm', ut.Popconfirm),
    h = zl(r),
    $ = zl(i);
  return le.createElement(
    'div',
    { className: `${t}-inner-content`, onClick: g },
    le.createElement(
      'div',
      { className: `${t}-message` },
      c && le.createElement('span', { className: `${t}-message-icon` }, c),
      le.createElement(
        'div',
        { className: `${t}-message-text` },
        h && le.createElement('div', { className: `${t}-title` }, h),
        $ && le.createElement('div', { className: `${t}-description` }, $),
      ),
    ),
    le.createElement(
      'div',
      { className: `${t}-buttons` },
      d &&
        le.createElement(
          Jr,
          Object.assign({ onClick: m, size: 'small' }, n),
          a || (null == f ? void 0 : f.cancelText),
        ),
      le.createElement(
        ti,
        {
          buttonProps: Object.assign(
            Object.assign({ size: 'small' }, jn(s)),
            o,
          ),
          actionFn: p,
          close: u,
          prefixCls: b('btn'),
          quitOnNullishReturnValue: !0,
          emitEvent: !0,
        },
        l || (null == f ? void 0 : f.okText),
      ),
    ),
  );
};
const Vu = le.forwardRef((e, t) => {
  var o, n;
  const {
      prefixCls: r,
      placement: i = 'top',
      trigger: a = 'click',
      okType: l = 'primary',
      icon: s = le.createElement(L, null),
      children: c,
      overlayClassName: d,
      onOpenChange: u,
      onVisibleChange: p,
      overlayStyle: m,
      styles: g,
      classNames: b,
    } = e,
    f = (function (e, t) {
      var o = {};
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) &&
          t.indexOf(n) < 0 &&
          (o[n] = e[n]);
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var r = 0;
        for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
          t.indexOf(n[r]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
            (o[n[r]] = e[n[r]]);
      }
      return o;
    })(e, [
      'prefixCls',
      'placement',
      'trigger',
      'okType',
      'icon',
      'children',
      'overlayClassName',
      'onOpenChange',
      'onVisibleChange',
      'overlayStyle',
      'styles',
      'classNames',
    ]),
    {
      getPrefixCls: $,
      className: y,
      style: x,
      classNames: C,
      styles: S,
    } = Lt('popconfirm'),
    [O, k] = v(!1, {
      value: null !== (o = e.open) && void 0 !== o ? o : e.visible,
      defaultValue:
        null !== (n = e.defaultOpen) && void 0 !== n ? n : e.defaultVisible,
    }),
    w = (e, t) => {
      (k(e, !0), null == p || p(e), null == u || u(e, t));
    },
    E = $('popconfirm', r),
    j = de(E, y, d, C.root, null == b ? void 0 : b.root),
    I = de(C.body, null == b ? void 0 : b.body),
    [P] = qu(E);
  return P(
    le.createElement(
      os,
      Object.assign({}, h(f, ['title']), {
        trigger: a,
        placement: i,
        onOpenChange: (t, o) => {
          const { disabled: n = !1 } = e;
          n || w(t, o);
        },
        open: O,
        ref: t,
        classNames: { root: j, body: I },
        styles: {
          root: Object.assign(
            Object.assign(Object.assign(Object.assign({}, S.root), x), m),
            null == g ? void 0 : g.root,
          ),
          body: Object.assign(
            Object.assign({}, S.body),
            null == g ? void 0 : g.body,
          ),
        },
        content: le.createElement(
          Xu,
          Object.assign({ okType: l, icon: s }, e, {
            prefixCls: E,
            close: (e) => {
              w(!1, e);
            },
            onConfirm: (t) => {
              var o;
              return null === (o = e.onConfirm) || void 0 === o
                ? void 0
                : o.call(void 0, t);
            },
            onCancel: (t) => {
              var o;
              (w(!1, t),
                null === (o = e.onCancel) || void 0 === o || o.call(void 0, t));
            },
          }),
        ),
        'data-popover-inject': !0,
      }),
      c,
    ),
  );
});
Vu._InternalPanelDoNotUseOrYouWillBeFired = (e) => {
  const { prefixCls: t, placement: o, className: n, style: r } = e,
    i = (function (e, t) {
      var o = {};
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) &&
          t.indexOf(n) < 0 &&
          (o[n] = e[n]);
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var r = 0;
        for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
          t.indexOf(n[r]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
            (o[n[r]] = e[n[r]]);
      }
      return o;
    })(e, ['prefixCls', 'placement', 'className', 'style']),
    { getPrefixCls: a } = le.useContext(Tt),
    l = a('popconfirm', t),
    [s] = qu(l);
  return s(
    le.createElement(ts, {
      placement: o,
      className: de(l, n),
      style: r,
      content: le.createElement(Xu, Object.assign({ prefixCls: l }, i)),
    }),
  );
};
const Ku = (e) => {
    const {
      componentCls: t,
      lineHeightHeading3: o,
      iconCls: n,
      padding: r,
      paddingXL: i,
      paddingXS: a,
      paddingLG: l,
      marginXS: s,
      lineHeight: c,
    } = e;
    return {
      [t]: {
        padding: `${I(e.calc(l).mul(2).equal())} ${I(i)}`,
        '&-rtl': { direction: 'rtl' },
      },
      [`${t} ${t}-image`]: {
        width: e.imageWidth,
        height: e.imageHeight,
        margin: 'auto',
      },
      [`${t} ${t}-icon`]: {
        marginBottom: l,
        textAlign: 'center',
        [`& > ${n}`]: { fontSize: e.iconFontSize },
      },
      [`${t} ${t}-title`]: {
        color: e.colorTextHeading,
        fontSize: e.titleFontSize,
        lineHeight: o,
        marginBlock: s,
        textAlign: 'center',
      },
      [`${t} ${t}-subtitle`]: {
        color: e.colorTextDescription,
        fontSize: e.subtitleFontSize,
        lineHeight: c,
        textAlign: 'center',
      },
      [`${t} ${t}-content`]: {
        marginTop: l,
        padding: `${I(l)} ${I(e.calc(r).mul(2.5).equal())}`,
        backgroundColor: e.colorFillAlter,
      },
      [`${t} ${t}-extra`]: {
        margin: e.extraMargin,
        textAlign: 'center',
        '& > *': { marginInlineEnd: a, '&:last-child': { marginInlineEnd: 0 } },
      },
    };
  },
  Uu = (e) => {
    const { componentCls: t, iconCls: o } = e;
    return {
      [`${t}-success ${t}-icon > ${o}`]: { color: e.resultSuccessIconColor },
      [`${t}-error ${t}-icon > ${o}`]: { color: e.resultErrorIconColor },
      [`${t}-info ${t}-icon > ${o}`]: { color: e.resultInfoIconColor },
      [`${t}-warning ${t}-icon > ${o}`]: { color: e.resultWarningIconColor },
    };
  },
  Yu = (e) => ((e) => [Ku(e), Uu(e)])(e),
  Qu = lo(
    'Result',
    (e) => {
      const t = e.colorInfo,
        o = e.colorError,
        n = e.colorSuccess,
        r = e.colorWarning,
        i = T(e, {
          resultInfoIconColor: t,
          resultErrorIconColor: o,
          resultSuccessIconColor: n,
          resultWarningIconColor: r,
          imageWidth: 250,
          imageHeight: 295,
        });
      return [Yu(i)];
    },
    (e) => ({
      titleFontSize: e.fontSizeHeading3,
      subtitleFontSize: e.fontSize,
      iconFontSize: 3 * e.fontSizeHeading3,
      extraMargin: `${e.paddingLG}px 0 0 0`,
    }),
  ),
  Zu = { success: A, error: F, info: L, warning: oe },
  Ju = {
    404: () =>
      le.createElement(
        'svg',
        { width: '252', height: '294' },
        le.createElement('title', null, 'No Found'),
        le.createElement(
          'g',
          { fill: 'none', fillRule: 'evenodd' },
          le.createElement('circle', {
            cx: '126.75',
            cy: '128.1',
            r: '126',
            fill: '#E4EBF7',
          }),
          le.createElement('circle', {
            cx: '31.55',
            cy: '130.8',
            r: '8.3',
            fill: '#FFF',
          }),
          le.createElement('path', {
            stroke: '#FFF',
            d: 'm37 134.3 10.5 6m.9 6.2-12.7 10.8',
            strokeWidth: '2',
          }),
          le.createElement('path', {
            fill: '#FFF',
            d: 'M39.9 159.4a5.7 5.7 0 1 1-11.3-1.2 5.7 5.7 0 0 1 11.3 1.2m17.7-16.2a5.7 5.7 0 1 1-11.4-1.1 5.7 5.7 0 0 1 11.4 1.1M99 27h29.8a4.6 4.6 0 1 0 0-9.2H99a4.6 4.6 0 1 0 0 9.2m11.4 18.3h29.8a4.6 4.6 0 0 0 0-9.2h-29.8a4.6 4.6 0 1 0 0 9.2',
          }),
          le.createElement('path', {
            fill: '#FFF',
            d: 'M112.8 26.9h15.8a4.6 4.6 0 1 0 0 9.1h-15.8a4.6 4.6 0 0 0 0-9.1m71.7 108.8a10 10 0 1 1-19.8-2 10 10 0 0 1 19.8 2',
          }),
          le.createElement('path', {
            stroke: '#FFF',
            d: 'm179.3 141.8 12.6 7.1m1.1 7.6-15.2 13',
            strokeWidth: '2',
          }),
          le.createElement('path', {
            fill: '#FFF',
            d: 'M184.7 170a6.8 6.8 0 1 1-13.6-1.3 6.8 6.8 0 0 1 13.6 1.4m18.6-16.8a6.9 6.9 0 1 1-13.7-1.4 6.9 6.9 0 0 1 13.7 1.4',
          }),
          le.createElement('path', {
            stroke: '#FFF',
            d: 'M152 192.3a2.2 2.2 0 1 1-4.5 0 2.2 2.2 0 0 1 4.4 0zm73.3-76.2a2.2 2.2 0 1 1-4.5 0 2.2 2.2 0 0 1 4.5 0zm-9 35a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.5 0zM177 107.6a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0zm18.4-15.4a2.2 2.2 0 1 1-4.5 0 2.2 2.2 0 0 1 4.5 0zm6.8 88.5a2.2 2.2 0 1 1-4.5 0 2.2 2.2 0 0 1 4.5 0z',
            strokeWidth: '2',
          }),
          le.createElement('path', {
            stroke: '#FFF',
            d: 'm214.4 153.3-2 20.2-10.8 6m-28-4.7-6.3 9.8H156l-4.5 6.5m23.5-66v-15.7m46 7.8-13 8-15.2-8V94.4',
            strokeWidth: '2',
          }),
          le.createElement('path', {
            fill: '#FFF',
            d: 'M166.6 66h-4a4.8 4.8 0 0 1-4.7-4.8 4.8 4.8 0 0 1 4.7-4.7h4a4.8 4.8 0 0 1 4.7 4.7 4.8 4.8 0 0 1-4.7 4.7',
          }),
          le.createElement('circle', {
            cx: '204.3',
            cy: '30',
            r: '29.5',
            fill: '#1677ff',
          }),
          le.createElement('path', {
            fill: '#FFF',
            d: 'M206 38.4c.5.5.7 1.1.7 2s-.2 1.4-.7 1.9a3 3 0 0 1-2 .7c-.8 0-1.5-.3-2-.8s-.8-1.1-.8-1.9.3-1.4.8-2c.5-.4 1.2-.7 2-.7.7 0 1.4.3 2 .8m4.2-19.5c1.5 1.3 2.2 3 2.2 5.2a7.2 7.2 0 0 1-1.5 4.5l-3 2.7a5 5 0 0 0-1.3 1.7 5.2 5.2 0 0 0-.6 2.4v.5h-4v-.5c0-1.4.1-2.5.6-3.5s1.9-2.5 4.2-4.5l.4-.5a4 4 0 0 0 1-2.6c0-1.2-.4-2-1-2.8-.7-.6-1.6-1-2.9-1-1.5 0-2.6.5-3.3 1.5-.4.5-.6 1-.8 1.9a2 2 0 0 1-2 1.6 2 2 0 0 1-2-2.4c.4-1.6 1-2.8 2.1-3.8a8.5 8.5 0 0 1 6.3-2.3c2.3 0 4.2.6 5.6 2',
          }),
          le.createElement('path', {
            fill: '#FFB594',
            d: 'M52 76.1s21.8 5.4 27.3 16c5.6 10.7-6.3 9.2-15.7 5C52.8 92 39 85 52 76',
          }),
          le.createElement('path', {
            fill: '#FFC6A0',
            d: 'm90.5 67.5-.5 2.9c-.7.5-4.7-2.7-4.7-2.7l-1.7.8-1.3-5.7s6.8-4.6 9-5c2.4-.5 9.8 1 10.6 2.3 0 0 1.3.4-2.2.6-3.6.3-5 .5-6.8 3.2l-2.4 3.6',
          }),
          le.createElement('path', {
            fill: '#FFF',
            d: 'M128 111.4a36.7 36.7 0 0 0-8.9-15.5c-3.5-3-9.3-2.2-11.3-4.2-1.3-1.2-3.2-1.2-3.2-1.2L87.7 87c-2.3-.4-2.1-.7-6-1.4-1.6-1.9-3-1.1-3-1.1l-7-1.4c-1-1.5-2.5-1-2.5-1l-2.4-.9C65 91.2 59 95 59 95c1.8 1.1 15.7 8.3 15.7 8.3l5.1 37.1s-3.3 5.7 1.4 9.1c0 0 19.9-3.7 34.9-.3 0 0 3-2.6 1-8.8.5-3 1.4-8.3 1.7-11.6.4.7 2 1.9 3.1 3.4 0 0 9.4-7.3 11-14a17 17 0 0 1-2.2-2.4c-.5-.8-.3-2-.7-2.8-.7-1-1.8-1.3-2-1.6',
          }),
          le.createElement('path', {
            fill: '#CBD1D1',
            d: 'M101 290s4.4 2 7.4 1c2.9-1 4.6.7 7.1 1.2 2.6.5 6.9 1.1 11.7-1.3 0-5.5-6.9-4-12-6.7-2.5-1.4-3.7-4.7-3.5-8.8h-9.5s-1.2 10.6-1 14.6',
          }),
          le.createElement('path', {
            fill: '#2B0849',
            d: 'M101 289.8s2.5 1.3 6.8.7c3-.5 3.7.5 7.4 1 3.8.6 10.8 0 11.9-.9.4 1.1-.4 2-.4 2s-1.5.7-4.8.9c-2 .1-5.8.3-7.6-.5-1.8-1.4-5.2-1.9-5.7-.2-4 1-7.4-.3-7.4-.3l-.1-2.7z',
          }),
          le.createElement('path', {
            fill: '#A4AABA',
            d: 'M108.3 276h3.1s0 6.7 4.6 8.6c-4.7.6-8.6-2.3-7.7-8.6',
          }),
          le.createElement('path', {
            fill: '#CBD1D1',
            d: 'M57.5 272.4s-2 7.4-4.4 12.3c-1.8 3.7-4.3 7.5 5.4 7.5 6.7 0 9-.5 7.4-6.6-1.5-6.1.3-13.2.3-13.2h-8.7z',
          }),
          le.createElement('path', {
            fill: '#2B0849',
            d: 'M51.5 289.8s2 1.2 6.6 1.2c6 0 8.3-1.7 8.3-1.7s.6 1.1-.7 2.2c-1 .8-3.6 1.6-7.4 1.5-4.1 0-5.8-.5-6.7-1.1-.8-.6-.7-1.6-.1-2.1',
          }),
          le.createElement('path', {
            fill: '#A4AABA',
            d: 'M58.4 274.3s0 1.5-.3 3c-.3 1.4-1 3-1.1 4 0 1.2 4.5 1.7 5.1.1.6-1.5 1.3-6.4 2-7.2.6-.9-5-2.2-5.7.1',
          }),
          le.createElement('path', {
            fill: '#7BB2F9',
            d: 'm99.7 278.5 13.3.1s1.3-54.5 1.9-64.4c.5-9.9 3.8-43.4 1-63.1l-12.6-.7-22.8.8-1.2 10c0 .5-.7.8-.7 1.4-.1.5.4 1.3.3 2-2.4 14-6.4 33-8.8 46.6 0 .7-1.2 1-1.4 2.7 0 .3.2 1.5 0 1.8-6.8 18.7-10.9 47.8-14.2 61.9h14.6s2.2-8.6 4-17c2.9-12.9 23.2-85 23.2-85l3-.5 1 46.3s-.2 1.2.4 2c.5.8-.6 1.1-.4 2.3l.4 1.8-1 11.8c-.4 4.8 0 39.2 0 39.2',
          }),
          le.createElement('path', {
            stroke: '#648BD8',
            d: 'M76 221.6c1.2.1 4.1-2 7-5m23.4 8.5s2.7-1 6-3.8',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.1',
          }),
          le.createElement('path', {
            stroke: '#648BD8',
            d: 'M107.3 222.1s2.7-1.1 6-3.9',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }),
          le.createElement('path', {
            stroke: '#648BD8',
            d: 'M74.7 224.8s2.7-.6 6.5-3.4m4.8-69.8c-.2 3.1.3 8.6-4.3 9.2m22-11s0 14-1.4 15.1a15 15 0 0 1-3 2m.5-16.5s0 13-1.2 24.4m-5 1.1s7.3-1.7 9.5-1.7M74.3 206a212 212 0 0 1-1 4.5s-1.4 1.9-1 3.8c.5 2-1 2-5 15.4A353 353 0 0 0 61 257l-.2 1.2m14.9-60.5a321 321 0 0 1-.9 4.8m7.8-50.4-1.2 10.5s-1.1.1-.5 2.2c.1 1.4-2.7 15.8-5.2 30.5m-19.6 79h13.3',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.1',
          }),
          le.createElement('path', {
            fill: '#192064',
            d: 'M116.2 148.2s-17-3-35.9.2c.2 2.5 0 4.2 0 4.2s14.7-2.8 35.7-.3c.3-2.4.2-4 .2-4',
          }),
          le.createElement('path', {
            fill: '#FFF',
            d: 'M106.3 151.2v-5a.8.8 0 0 0-.8-.8h-7.8a.8.8 0 0 0-.8.8v5a.8.8 0 0 0 .8.8h7.8a.8.8 0 0 0 .8-.8',
          }),
          le.createElement('path', {
            fill: '#192064',
            d: 'M105.2 150.2v-3a.6.6 0 0 0-.6-.7 94.3 94.3 0 0 0-5.9 0 .7.7 0 0 0-.6.6v3.1a.6.6 0 0 0 .6.7 121.1 121.1 0 0 1 5.8 0c.4 0 .7-.3.7-.7',
          }),
          le.createElement('path', {
            stroke: '#648BD8',
            d: 'M100.3 275.4h12.3m-11.2-4.9.1 6.5m0-12.5a915.8 915.8 0 0 0 0 4.4m-.5-94 .9 44.7s.7 1.6-.2 2.7c-1 1.1 2.4.7.9 2.2-1.6 1.6.9 1.2 0 3.4-.6 1.5-1 21.1-1.1 35.2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.1',
          }),
          le.createElement('path', {
            fill: '#FFC6A0',
            d: 'M46.9 83.4s-.5 6 7.2 5.6c11.2-.7 9.2-9.4 31.5-21.7-.7-2.7-2.4-4.7-2.4-4.7s-11 3-22.6 8c-6.8 3-13.4 6.4-13.7 12.8m57.6 7.7.9-5.4-8.9-11.4-5 5.3-1.8 7.9a.3.3 0 0 0 .1.3c1 .8 6.5 5 14.4 3.5a.3.3 0 0 0 .3-.2',
          }),
          le.createElement('path', {
            fill: '#FFC6A0',
            d: 'M94 79.4s-4.6-2.9-2.5-6.9c1.6-3 4.5 1.2 4.5 1.2s.5-3.7 3.1-3.7c.6-1 1.6-4.1 1.6-4.1l13.5 3c0 5.3-2.3 19.5-7.8 20-8.9.6-12.5-9.5-12.5-9.5',
          }),
          le.createElement('path', {
            fill: '#520038',
            d: 'M113.9 73.4c2.6-2 3.4-9.7 3.4-9.7s-2.4-.5-6.6-2c-4.7-2.1-12.8-4.8-17.5 1-9.6 3.2-2 19.8-2 19.8l2.7-3s-4-3.3-2-6.3c2-3.5 3.8 1 3.8 1s.7-2.3 3.6-3.3c.4-.7 1-2.6 1.4-3.8a1 1 0 0 1 1.3-.7l11.4 2.6c.5.2.8.7.8 1.2l-.3 3.2z',
          }),
          le.createElement('path', {
            fill: '#552950',
            d: 'M105 76c-.1.7-.6 1.1-1 1-.6 0-.9-.6-.8-1.2.1-.6.6-1 1-1 .6 0 .9.7.8 1.3m7.1 1.6c0 .6-.5 1-1 1-.5-.1-.8-.7-.7-1.3 0-.6.5-1 1-1 .5.1.8.7.7 1.3',
          }),
          le.createElement('path', {
            stroke: '#DB836E',
            d: 'm110.1 74.8-.9 1.7-.3 4.3h-2.2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.1',
          }),
          le.createElement('path', {
            stroke: '#5C2552',
            d: 'M110.8 74.5s1.8-.7 2.6.5',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.1',
          }),
          le.createElement('path', {
            stroke: '#DB836E',
            d: 'M92.4 74.3s.5-1.1 1.1-.7c.6.4 1.3 1.4.6 2-.8.5.1 1.6.1 1.6',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.1',
          }),
          le.createElement('path', {
            stroke: '#5C2552',
            d: 'M103.3 73s1.8 1 4.1.9',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.1',
          }),
          le.createElement('path', {
            stroke: '#DB836E',
            d: 'M103.7 81.8s2.2 1.2 4.4 1.2m-3.5 1.3s1 .4 1.6.3m-11.5-3.4s2.3 7.4 10.4 7.6',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.1',
          }),
          le.createElement('path', {
            stroke: '#E4EBF7',
            d: 'M81.5 89.4s.4 5.6-5 12.8M69 82.7s-.7 9.2-8.2 14.2m68.6 26s-5.3 7.4-9.4 10.7m-.7-26.3s.5 4.4-2.1 32',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.1',
          }),
          le.createElement('path', {
            fill: '#F2D7AD',
            d: 'M150 151.2h-49.8a1 1 0 0 1-1-1v-31.7c0-.5.4-1 1-1H150c.6 0 1 .5 1 1v31.7a1 1 0 0 1-1 1',
          }),
          le.createElement('path', {
            fill: '#F4D19D',
            d: 'M150.3 151.2h-19.9v-33.7h20.8v32.8a1 1 0 0 1-1 1',
          }),
          le.createElement('path', {
            fill: '#F2D7AD',
            d: 'M123.6 127.9H92.9a.5.5 0 0 1-.4-.8l6.4-9.1c.2-.3.5-.5.8-.5h31.1l-7.2 10.4z',
          }),
          le.createElement('path', {
            fill: '#CC9B6E',
            d: 'M123.7 128.4H99.2v-.5h24.2l7.2-10.2.4.3z',
          }),
          le.createElement('path', {
            fill: '#F4D19D',
            d: 'M158.3 127.9h-18.7a2 2 0 0 1-1.6-.8l-7.2-9.6h20c.5 0 1 .3 1.2.6l6.7 9a.5.5 0 0 1-.4.8',
          }),
          le.createElement('path', {
            fill: '#CC9B6E',
            d: 'M157.8 128.5h-19.3l-7.9-10.5.4-.3 7.7 10.3h19.1zm-27.2 22.2v-8.2h.4v8.2zm-.1-10.9v-21.4h.4l.1 21.4zm-18.6 1.1-.5-.1 1.5-5.2.5.2zm-3.5.2-2.6-3 2.6-3.4.4.3-2.4 3.1 2.4 2.6zm8.2 0-.4-.4 2.4-2.6-2.4-3 .4-.4 2.7 3.4z',
          }),
          le.createElement('path', {
            fill: '#FFC6A0',
            d: 'm154.3 131.9-3.1-2v3.5l-1 .1a85 85 0 0 1-4.8.3c-1.9 0-2.7 2.2 2.2 2.6l-2.6-.6s-2.2 1.3.5 2.3c0 0-1.6 1.2.6 2.6-.6 3.5 5.2 4 7 3.6a6.1 6.1 0 0 0 4.6-5.2 8 8 0 0 0-3.4-7.2',
          }),
          le.createElement('path', {
            stroke: '#DB836E',
            d: 'M153.7 133.6s-6.5.4-8.4.3c-1.8 0-1.9 2.2 2.4 2.3 3.7.2 5.4 0 5.4 0',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.1',
          }),
          le.createElement('path', {
            stroke: '#DB836E',
            d: 'M145.2 135.9c-1.9 1.3.5 2.3.5 2.3s3.5 1 6.8.6m-.6 2.9s-6.3.1-6.7-2.1c-.3-1.4.4-1.4.4-1.4m.5 2.7s-1 3.1 5.5 3.5m-.4-14.5v3.5M52.8 89.3a18 18 0 0 0 13.6-7.8',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.1',
          }),
          le.createElement('path', {
            fill: '#5BA02E',
            d: 'M168.6 248.3a6.6 6.6 0 0 1-6.7-6.6v-66.5a6.6 6.6 0 1 1 13.3 0v66.5a6.6 6.6 0 0 1-6.6 6.6',
          }),
          le.createElement('path', {
            fill: '#92C110',
            d: 'M176.5 247.7a6.6 6.6 0 0 1-6.6-6.7v-33.2a6.6 6.6 0 1 1 13.3 0V241a6.6 6.6 0 0 1-6.7 6.7',
          }),
          le.createElement('path', {
            fill: '#F2D7AD',
            d: 'M186.4 293.6H159a3.2 3.2 0 0 1-3.2-3.2v-46.1a3.2 3.2 0 0 1 3.2-3.2h27.5a3.2 3.2 0 0 1 3.2 3.2v46.1a3.2 3.2 0 0 1-3.2 3.2',
          }),
          le.createElement('path', {
            stroke: '#E4EBF7',
            d: 'M89 89.5s7.8 5.4 16.6 2.8',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.1',
          }),
        ),
      ),
    500: () =>
      le.createElement(
        'svg',
        { width: '254', height: '294' },
        le.createElement('title', null, 'Server Error'),
        le.createElement(
          'g',
          { fill: 'none', fillRule: 'evenodd' },
          le.createElement('path', {
            fill: '#E4EBF7',
            d: 'M0 128.1v-2C0 56.5 56.3.2 125.7.2h2.1C197.2.3 253.5 56.6 253.5 126v2.1c0 69.5-56.3 125.7-125.7 125.7h-2.1A125.7 125.7 0 0 1 0 128.1',
          }),
          le.createElement('path', {
            fill: '#FFF',
            d: 'M40 132.1a8.3 8.3 0 1 1-16.6-1.7 8.3 8.3 0 0 1 16.6 1.7',
          }),
          le.createElement('path', {
            stroke: '#FFF',
            d: 'm37.2 135.6 10.5 6m1 6.3-12.8 10.8',
            strokeWidth: '2',
          }),
          le.createElement('path', {
            fill: '#FFF',
            d: 'M40.1 160.8a5.7 5.7 0 1 1-11.3-1.1 5.7 5.7 0 0 1 11.3 1.1M58 144.6a5.7 5.7 0 1 1-11.4-1.2 5.7 5.7 0 0 1 11.4 1.2M99.7 27.4h30a4.6 4.6 0 1 0 0-9.2h-30a4.6 4.6 0 0 0 0 9.2M111 46h30a4.6 4.6 0 1 0 0-9.3h-30a4.6 4.6 0 1 0 0 9.3m2.5-18.6h16a4.6 4.6 0 1 0 0 9.3h-16a4.6 4.6 0 0 0 0-9.3m36.7 42.7h-4a4.8 4.8 0 0 1-4.8-4.8 4.8 4.8 0 0 1 4.8-4.8h4a4.8 4.8 0 0 1 4.7 4.8 4.8 4.8 0 0 1-4.7 4.8',
          }),
          le.createElement('circle', {
            cx: '201.35',
            cy: '30.2',
            r: '29.7',
            fill: '#FF603B',
          }),
          le.createElement('path', {
            fill: '#FFF',
            d: 'm203.6 19.4-.7 15a1.5 1.5 0 0 1-3 0l-.7-15a2.2 2.2 0 1 1 4.4 0m-.3 19.4c.5.5.8 1.1.8 1.9s-.3 1.4-.8 1.9a3 3 0 0 1-2 .7 2.5 2.5 0 0 1-1.8-.7c-.6-.6-.8-1.2-.8-2 0-.7.2-1.3.8-1.8.5-.5 1.1-.7 1.8-.7.8 0 1.5.2 2 .7',
          }),
          le.createElement('path', {
            fill: '#FFB594',
            d: 'M119.3 133.3c4.4-.6 3.6-1.2 4-4.8.8-5.2-3-17-8.2-25.1-1-10.7-12.6-11.3-12.6-11.3s4.3 5 4.2 16.2c1.4 5.3.8 14.5.8 14.5s5.3 11.4 11.8 10.5',
          }),
          le.createElement('path', {
            fill: '#FFF',
            d: 'M101 91.6s1.4-.6 3.2.6c8 1.4 10.3 6.7 11.3 11.4 1.8 1.2 1.8 2.3 1.8 3.5l1.5 3s-7.2 1.7-11 6.7c-1.3-6.4-6.9-25.2-6.9-25.2',
          }),
          le.createElement('path', {
            fill: '#FFB594',
            d: 'm94 90.5 1-5.8-9.2-11.9-5.2 5.6-2.6 9.9s8.4 5 16 2.2',
          }),
          le.createElement('path', {
            fill: '#FFC6A0',
            d: 'M83 78.2s-4.6-2.9-2.5-6.9c1.6-3 4.5 1.2 4.5 1.2s.5-3.7 3.2-3.7c.5-1 1.5-4.2 1.5-4.2l13.6 3.2c0 5.2-2.3 19.5-7.9 20-8.9.6-12.5-9.6-12.5-9.6',
          }),
          le.createElement('path', {
            fill: '#520038',
            d: 'M103 72.2c2.6-2 3.5-9.7 3.5-9.7s-2.5-.5-6.7-2c-4.7-2.2-12.9-4.9-17.6.9-9.5 4.4-2 20-2 20l2.7-3.1s-4-3.3-2.1-6.3c2.2-3.5 4 1 4 1s.6-2.3 3.5-3.3c.4-.7 1-2.7 1.5-3.8A1 1 0 0 1 91 65l11.5 2.7c.5.1.8.6.8 1.2l-.3 3.2z',
          }),
          le.createElement('path', {
            fill: '#552950',
            d: 'M101.2 76.5c0 .6-.6 1-1 1-.5-.1-.9-.7-.8-1.3.1-.6.6-1 1.1-1 .5.1.8.7.7 1.3m-7-1.4c0 .6-.5 1-1 1-.5-.1-.8-.7-.7-1.3 0-.6.6-1 1-1 .5.1.9.7.8 1.3',
          }),
          le.createElement('path', {
            stroke: '#DB836E',
            d: 'm99.2 73.6-.9 1.7-.3 4.3h-2.2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.1',
          }),
          le.createElement('path', {
            stroke: '#5C2552',
            d: 'M100 73.3s1.7-.7 2.4.5',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.1',
          }),
          le.createElement('path', {
            stroke: '#DB836E',
            d: 'M81.4 73s.4-1 1-.6c.7.4 1.4 1.4.6 2s.2 1.6.2 1.6',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.1',
          }),
          le.createElement('path', {
            stroke: '#5C2552',
            d: 'M92.3 71.7s1.9 1.1 4.2 1',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.1',
          }),
          le.createElement('path', {
            stroke: '#DB836E',
            d: 'M92.7 80.6s2.3 1.2 4.4 1.2m-3.4 1.4s1 .4 1.5.3M83.7 80s1.8 6.6 9.2 8',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.1',
          }),
          le.createElement('path', {
            stroke: '#E4EBF7',
            d: 'M95.5 91.7s-1 2.8-8.2 2c-7.3-.6-10.3-5-10.3-5',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.1',
          }),
          le.createElement('path', {
            fill: '#FFF',
            d: 'M78.1 87.5s6.6 5 16.5 2.5c0 0 9.6 1 11.5 5.3 5.4 11.8.6 36.8 0 40 3.5 4-.4 8.4-.4 8.4-15.7-3.5-35.8-.6-35.8-.6-4.9-3.5-1.3-9-1.3-9l-6.2-23.8c-2.5-15.2.8-19.8 3.5-20.7 3-1 8-1.3 8-1.3.6 0 1.1 0 1.4-.2 2.4-1.3 2.8-.6 2.8-.6',
          }),
          le.createElement('path', {
            fill: '#FFC6A0',
            d: 'M65.8 89.8s-6.8.5-7.6 8.2c-.4 8.8 3 11 3 11s6.1 22 16.9 22.9c8.4-2.2 4.7-6.7 4.6-11.4-.2-11.3-7-17-7-17s-4.3-13.7-9.9-13.7',
          }),
          le.createElement('path', {
            fill: '#FFC6A0',
            d: 'M71.7 124.2s.9 11.3 9.8 6.5c4.8-2.5 7.6-13.8 9.8-22.6A201 201 0 0 0 94 96l-5-1.7s-2.4 5.6-7.7 12.3c-4.4 5.5-9.2 11.1-9.5 17.7',
          }),
          le.createElement('path', {
            stroke: '#E4EBF7',
            d: 'M108.5 105.2s1.7 2.7-2.4 30.5c2.4 2.2 1 6-.2 7.5',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.1',
          }),
          le.createElement('path', {
            fill: '#FFC6A0',
            d: 'M123.3 131.5s-.5 2.8-11.8 2c-15.2-1-25.3-3.2-25.3-3.2l.9-5.8s.7.2 9.7-.1c11.9-.4 18.7-6 25-1 4 3.2 1.5 8.1 1.5 8.1',
          }),
          le.createElement('path', {
            fill: '#FFF',
            d: 'M70.2 91s-5.6-4.8-11 2.7c-3.3 7.2.5 15.2 2.6 19.5-.3 3.8 2.4 4.3 2.4 4.3s0 1 1.5 2.7c4-7 6.7-9.1 13.7-12.5-.3-.7-1.9-3.3-1.8-3.8.2-1.7-1.3-2.6-1.3-2.6s-.3-.2-1.2-2.8c-.8-2.3-2-5.1-4.9-7.5',
          }),
          le.createElement('path', {
            fill: '#CBD1D1',
            d: 'M90.2 288s4.9 2.3 8.3 1.2c3.2-1 5.2.7 8 1.3a20 20 0 0 0 13.3-1.4c-.2-6.2-7.8-4.5-13.6-7.6-2.9-1.6-4.2-5.3-4-10H91.5s-1.5 12-1.3 16.5',
          }),
          le.createElement('path', {
            fill: '#2B0849',
            d: 'M90.2 287.8s2.8 1.5 7.6.8c3.5-.5 3.3.6 7.5 1.3 4.2.6 13-.2 14.3-1.2.5 1.3-.4 2.4-.4 2.4s-1.7.6-5.4.9c-2.3.1-8.1.3-10.2-.6-2-1.6-4.9-1.5-6-.3-4.5 1.1-7.2-.3-7.2-.3l-.2-3z',
          }),
          le.createElement('path', {
            fill: '#A4AABA',
            d: 'M98.4 272.3h3.5s0 7.5 5.2 9.6c-5.3.7-9.7-2.6-8.7-9.6',
          }),
          le.createElement('path', {
            fill: '#CBD1D1',
            d: 'M44.4 272s-2.2 7.8-4.7 13c-1.9 3.8-4.4 7.8 5.8 7.8 7 0 9.3-.5 7.7-7-1.6-6.3.3-13.8.3-13.8h-9z',
          }),
          le.createElement('path', {
            fill: '#2B0849',
            d: 'M38 290.3s2.3 1.2 7 1.2c6.4 0 8.7-1.7 8.7-1.7s.6 1.1-.7 2.2c-1 1-3.8 1.7-7.7 1.7-4.4 0-6.1-.6-7-1.3-1-.5-.8-1.6-.2-2.1',
          }),
          le.createElement('path', {
            fill: '#A4AABA',
            d: 'M45.3 274s0 1.6-.3 3.1-1.1 3.3-1.2 4.4c0 1.2 4.8 1.6 5.4 0 .7-1.6 1.4-6.8 2-7.6.7-.9-5.1-2.2-5.9.1',
          }),
          le.createElement('path', {
            fill: '#7BB2F9',
            d: 'M89.5 277.6h13.9s1.3-56.6 1.9-66.8c.6-10.3 4-45.1 1-65.6l-13-.7-23.7.8-1.3 10.4c0 .5-.7.9-.8 1.4 0 .6.5 1.4.4 2L59.6 206c-.1.7-1.3 1-1.5 2.8 0 .3.2 1.6.1 1.8-7.1 19.5-12.2 52.6-15.6 67.2h15.1L62 259c3-13.3 24-88.3 24-88.3l3.2-1-.2 48.6s-.2 1.3.4 2.1c.5.8-.6 1.2-.4 2.4l.4 1.8-1 12.4c-.4 4.9 1.2 40.7 1.2 40.7',
          }),
          le.createElement('path', {
            stroke: '#648BD8',
            d: 'M64.6 218.9c1.2 0 4.2-2.1 7.2-5.1m24.2 8.7s3-1.1 6.4-4',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.1',
          }),
          le.createElement('path', {
            stroke: '#648BD8',
            d: 'M97 219.4s2.9-1.2 6.3-4',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1',
          }),
          le.createElement('path', {
            stroke: '#648BD8',
            d: 'M63.2 222.1s2.7-.6 6.7-3.5m5-72.4c-.3 3.2.3 8.8-4.5 9.4m22.8-11.3s.1 14.6-1.4 15.7c-2.3 1.7-3 2-3 2m.4-17s.3 13-1 25m-4.7.7s6.8-1 9.1-1M46 270l-.9 4.6m1.8-11.3-.8 4.1m16.6-64.9c-.3 1.6 0 2-.4 3.4 0 0-2.8 2-2.3 4s-.3 3.4-4.5 17.2c-1.8 5.8-4.3 19-6.2 28.3l-1.1 5.8m16-67-1 4.9m8.1-52.3-1.2 10.9s-1.2.1-.5 2.3c0 1.4-2.8 16.4-5.4 31.6m-20 82.1h13.9',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.1',
          }),
          le.createElement('path', {
            fill: '#192064',
            d: 'M106.2 142.1c-3-.5-18.8-2.7-36.2.2a.6.6 0 0 0-.6.7v3a.6.6 0 0 0 .8.6c3.3-.5 17-2.4 35.6-.3.4 0 .7-.2.7-.5.2-1.4.2-2.5.2-3a.6.6 0 0 0-.5-.7',
          }),
          le.createElement('path', {
            fill: '#FFF',
            d: 'M96.4 145.3v-5.1a.8.8 0 0 0-.8-.9 114.1 114.1 0 0 0-8.1 0 .8.8 0 0 0-.9.8v5.1c0 .5.4.9.9.9h8a.8.8 0 0 0 .9-.8',
          }),
          le.createElement('path', {
            fill: '#192064',
            d: 'M95.2 144.3v-3.2a.7.7 0 0 0-.6-.7h-6.1a.7.7 0 0 0-.6.7v3.2c0 .4.3.7.6.7h6c.4 0 .7-.3.7-.7',
          }),
          le.createElement('path', {
            stroke: '#648BD8',
            d: 'M90.1 273.5h12.8m-11.7-3.7v6.3m-.3-12.6v4.5m-.5-97.6 1 46.4s.7 1.6-.3 2.8c-.9 1.1 2.6.7 1 2.3-1.7 1.6.9 1.2 0 3.5-.6 1.6-1 22-1.2 36.5',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.1',
          }),
          le.createElement('path', {
            stroke: '#E4EBF7',
            d: 'M73.7 98.7 76 103s2 .8 1.8 2.7l.8 2.2m-14.3 8.7c.2-1 2.2-7.1 12.6-10.5m.7-16s7.7 6 16.5 2.7',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.1',
          }),
          le.createElement('path', {
            fill: '#FFC6A0',
            d: 'M92 87s5.5-.9 7.5-4.6c1.3-.3.8 2.2-.3 3.7l-1 1.5s.2.3.2.9c0 .6-.2.6-.3 1v1l-.4 1c-.1.2 0 .6-.2.9-.2.4-1.6 1.8-2.6 2.8-3.8 3.6-5 1.7-6-.4-1-1.8-.7-5.1-.9-6.9-.3-2.9-2.6-3-2-4.4.4-.7 3 .7 3.4 1.8.7 2 2.9 1.8 2.6 1.7',
          }),
          le.createElement('path', {
            stroke: '#DB836E',
            d: 'M99.8 82.4c-.5.1-.3.3-1 1.3-.6 1-4.8 2.9-6.4 3.2-2.5.5-2.2-1.6-4.2-2.9-1.7-1-3.6-.6-1.4 1.4 1 1 1 1.1 1.4 3.2.3 1.5-.7 3.7.7 5.6',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '.8',
          }),
          le.createElement('path', {
            stroke: '#E59788',
            d: 'M79.5 108.7c-2 2.9-4.2 6.1-5.5 8.7',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '.8',
          }),
          le.createElement('path', {
            fill: '#FFC6A0',
            d: 'M87.7 124.8s-2-2-5.1-2.8c-3-.7-3.6-.1-5.5.1-2 .3-4-.9-3.7.7.3 1.7 5 1 5.2 2.1.2 1.1-6.3 2.8-8.3 2.2-.8.8.5 1.9 2 2.2.3 1.5 2.3 1.5 2.3 1.5s.7 1 2.6 1.1c2.5 1.3 9-.7 11-1.5 2-.9-.5-5.6-.5-5.6',
          }),
          le.createElement('path', {
            stroke: '#E59788',
            d: 'M73.4 122.8s.7 1.2 3.2 1.4c2.3.3 2.6.6 2.6.6s-2.6 3-9.1 2.3m2.3 2.2s3.8 0 5-.7m-2.4 2.2s2 0 3.3-.6m-1 1.7s1.7 0 2.8-.5m-6.8-9s-.6-1.1 1.3-.5c1.7.5 2.8 0 5.1.1 1.4.1 3-.2 4 .2 1.6.8 3.6 2.2 3.6 2.2s10.6 1.2 19-1.1M79 108s-8.4 2.8-13.2 12.1',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '.8',
          }),
          le.createElement('path', {
            stroke: '#E4EBF7',
            d: 'M109.3 112.5s3.4-3.6 7.6-4.6',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.1',
          }),
          le.createElement('path', {
            stroke: '#E59788',
            d: 'M107.4 123s9.7-2.7 11.4-.9',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '.8',
          }),
          le.createElement('path', {
            stroke: '#BFCDDD',
            d: 'm194.6 83.7 4-4M187.2 91l3.7-3.6m.9-3-4.5-4.7m11.2 11.5-4.2-4.3m-65 76.3 3.7-3.7M122.3 170l3.5-3.5m.8-2.9-4.3-4.2M133 170l-4-4',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '2',
          }),
          le.createElement('path', {
            fill: '#A3B4C6',
            d: 'M190.2 211.8h-1.6a4 4 0 0 1-4-4v-32.1a4 4 0 0 1 4-4h1.6a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4',
          }),
          le.createElement('path', {
            fill: '#A3B4C6',
            d: 'M237.8 213a4.8 4.8 0 0 1-4.8 4.8h-86.6a4.8 4.8 0 0 1 0-9.6H233a4.8 4.8 0 0 1 4.8 4.8',
          }),
          le.createElement('path', {
            fill: '#A3B4C6',
            d: 'M154.1 190.1h70.5v-84.6h-70.5z',
          }),
          le.createElement('path', {
            fill: '#BFCDDD',
            d: 'M225 190.1h-71.2a3.2 3.2 0 0 1-3.2-3.2v-19a3.2 3.2 0 0 1 3.2-3.2h71.1a3.2 3.2 0 0 1 3.2 3.2v19a3.2 3.2 0 0 1-3.2 3.2m0-59.3h-71.1a3.2 3.2 0 0 1-3.2-3.2v-19a3.2 3.2 0 0 1 3.2-3.2h71.1a3.2 3.2 0 0 1 3.2 3.3v19a3.2 3.2 0 0 1-3.2 3.1',
          }),
          le.createElement('path', {
            fill: '#FFF',
            d: 'M159.6 120.5a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8m7.4 0a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8m7.4 0a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8m48.1 0h-22.4a.8.8 0 0 1-.8-.8v-3.2c0-.4.3-.8.8-.8h22.4c.5 0 .8.4.8.8v3.2c0 .5-.3.8-.8.8',
          }),
          le.createElement('path', {
            fill: '#BFCDDD',
            d: 'M225 160.5h-71.2a3.2 3.2 0 0 1-3.2-3.2v-19a3.2 3.2 0 0 1 3.2-3.2h71.1a3.2 3.2 0 0 1 3.2 3.2v19a3.2 3.2 0 0 1-3.2 3.2',
          }),
          le.createElement('path', {
            stroke: '#7C90A5',
            d: 'M173.5 130.8h49.3m-57.8 0h6m-15 0h6.7m11.1 29.8h49.3m-57.7 0h6m-15.8 0h6.7',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.1',
          }),
          le.createElement('path', {
            fill: '#FFF',
            d: 'M159.6 151a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8m7.4 0a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8m7.4 0a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8m48.1 0h-22.4a.8.8 0 0 1-.8-.8V147c0-.4.3-.8.8-.8h22.4c.5 0 .8.4.8.8v3.2c0 .5-.3.8-.8.8m-63 29a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8m7.5 0a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8m7.4 0a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8m48.1 0h-22.4a.8.8 0 0 1-.8-.8V176c0-.5.3-.8.8-.8h22.4c.5 0 .8.3.8.8v3.2c0 .4-.3.8-.8.8',
          }),
          le.createElement('path', {
            fill: '#BFCDDD',
            d: 'M203 221.1h-27.3a2.4 2.4 0 0 1-2.4-2.4v-11.4a2.4 2.4 0 0 1 2.4-2.5H203a2.4 2.4 0 0 1 2.4 2.5v11.4a2.4 2.4 0 0 1-2.4 2.4',
          }),
          le.createElement('path', {
            stroke: '#A3B4C6',
            d: 'M177.3 207.2v11.5m23.8-11.5v11.5',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.1',
          }),
          le.createElement('path', {
            fill: '#5BA02E',
            d: 'M162.9 267.9a9.4 9.4 0 0 1-9.4-9.4v-14.8a9.4 9.4 0 0 1 18.8 0v14.8a9.4 9.4 0 0 1-9.4 9.4',
          }),
          le.createElement('path', {
            fill: '#92C110',
            d: 'M171.2 267.8a9.4 9.4 0 0 1-9.4-9.4V255a9.4 9.4 0 0 1 18.8 0v3.4a9.4 9.4 0 0 1-9.4 9.4',
          }),
          le.createElement('path', {
            fill: '#F2D7AD',
            d: 'M181.3 293.7h-27.7a3.2 3.2 0 0 1-3.2-3.2v-20.7a3.2 3.2 0 0 1 3.2-3.2h27.7a3.2 3.2 0 0 1 3.2 3.2v20.7a3.2 3.2 0 0 1-3.2 3.2',
          }),
        ),
      ),
    403: () =>
      le.createElement(
        'svg',
        { width: '251', height: '294' },
        le.createElement('title', null, 'Unauthorized'),
        le.createElement(
          'g',
          { fill: 'none', fillRule: 'evenodd' },
          le.createElement('path', {
            fill: '#E4EBF7',
            d: 'M0 129v-2C0 58.3 55.6 2.7 124.2 2.7h2c68.6 0 124.2 55.6 124.2 124.1v2.1c0 68.6-55.6 124.2-124.1 124.2h-2.1A124.2 124.2 0 0 1 0 129',
          }),
          le.createElement('path', {
            fill: '#FFF',
            d: 'M41.4 133a8.2 8.2 0 1 1-16.4-1.7 8.2 8.2 0 0 1 16.4 1.6',
          }),
          le.createElement('path', {
            stroke: '#FFF',
            d: 'm38.7 136.4 10.4 5.9m.9 6.2-12.6 10.7',
            strokeWidth: '2',
          }),
          le.createElement('path', {
            fill: '#FFF',
            d: 'M41.5 161.3a5.6 5.6 0 1 1-11.2-1.2 5.6 5.6 0 0 1 11.2 1.2m17.7-16a5.7 5.7 0 1 1-11.3-1.2 5.7 5.7 0 0 1 11.3 1.2m41.2-115.8H130a4.6 4.6 0 1 0 0-9.1h-29.6a4.6 4.6 0 0 0 0 9.1m11.3 18.3h29.7a4.6 4.6 0 1 0 0-9.2h-29.7a4.6 4.6 0 1 0 0 9.2',
          }),
          le.createElement('path', {
            fill: '#FFF',
            d: 'M114 29.5h15.8a4.6 4.6 0 1 0 0 9.1H114a4.6 4.6 0 0 0 0-9.1m71.3 108.2a10 10 0 1 1-19.8-2 10 10 0 0 1 19.8 2',
          }),
          le.createElement('path', {
            stroke: '#FFF',
            d: 'm180.2 143.8 12.5 7.1m1.1 7.5-15.1 13',
            strokeWidth: '2',
          }),
          le.createElement('path', {
            fill: '#FFF',
            d: 'M185.6 172a6.8 6.8 0 1 1-13.6-1.4 6.8 6.8 0 0 1 13.5 1.3m18.6-16.6a6.8 6.8 0 1 1-13.6-1.4 6.8 6.8 0 0 1 13.6 1.4',
          }),
          le.createElement('path', {
            stroke: '#FFF',
            d: 'M153 194a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0zm73-75.8a2.2 2.2 0 1 1-4.5 0 2.2 2.2 0 0 1 4.4 0zm-9 34.9a2.2 2.2 0 1 1-4.3 0 2.2 2.2 0 0 1 4.4 0zm-39.2-43.3a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0zm18.3-15.3a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0zm6.7 88a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0z',
            strokeWidth: '2',
          }),
          le.createElement('path', {
            stroke: '#FFF',
            d: 'm215.1 155.3-1.9 20-10.8 6m-27.8-4.7-6.3 9.8H157l-4.5 6.4m23.4-65.5v-15.7m45.6 7.8-12.8 7.9-15.2-7.9V96.7',
            strokeWidth: '2',
          }),
          le.createElement('path', {
            fill: '#A26EF4',
            d: 'M180.7 29.3a29.3 29.3 0 1 1 58.6 0 29.3 29.3 0 0 1-58.6 0',
          }),
          le.createElement('path', {
            fill: '#FFF',
            d: 'm221.4 41.7-21.5-.1a1.7 1.7 0 0 1-1.7-1.8V27.6a1.7 1.7 0 0 1 1.8-1.7h21.5c1 0 1.8.9 1.8 1.8l-.1 12.3a1.7 1.7 0 0 1-1.7 1.7',
          }),
          le.createElement('path', {
            fill: '#FFF',
            d: 'M215.1 29.2c0 2.6-2 4.6-4.5 4.6a4.6 4.6 0 0 1-4.5-4.7v-6.9c0-2.6 2-4.6 4.6-4.6 2.5 0 4.5 2 4.4 4.7v6.9zm-4.5-14a6.9 6.9 0 0 0-7 6.8v7.3a6.9 6.9 0 0 0 13.8.1V22a6.9 6.9 0 0 0-6.8-6.9zm-43 53.2h-4a4.7 4.7 0 0 1-4.7-4.8 4.7 4.7 0 0 1 4.7-4.7h4a4.7 4.7 0 0 1 4.7 4.8 4.7 4.7 0 0 1-4.7 4.7',
          }),
          le.createElement('path', {
            fill: '#5BA02E',
            d: 'M168.2 248.8a6.6 6.6 0 0 1-6.6-6.6v-66a6.6 6.6 0 0 1 13.2 0v66a6.6 6.6 0 0 1-6.6 6.6',
          }),
          le.createElement('path', {
            fill: '#92C110',
            d: 'M176.1 248.2a6.6 6.6 0 0 1-6.6-6.6v-33a6.6 6.6 0 1 1 13.3 0v33a6.6 6.6 0 0 1-6.7 6.6',
          }),
          le.createElement('path', {
            fill: '#F2D7AD',
            d: 'M186 293.9h-27.4a3.2 3.2 0 0 1-3.2-3.2v-45.9a3.2 3.2 0 0 1 3.2-3.1H186a3.2 3.2 0 0 1 3.2 3.1v46a3.2 3.2 0 0 1-3.2 3',
          }),
          le.createElement('path', {
            fill: '#FFF',
            d: 'M82 147.7s6.3-1 17.5-1.3c11.8-.4 17.6 1 17.6 1s3.7-3.8 1-8.3c1.3-12.1 6-32.9.3-48.3-1.1-1.4-3.7-1.5-7.5-.6-1.4.3-7.2-.2-8-.1l-15.3-.4-8-.5c-1.6-.1-4.3-1.7-5.5-.3-.4.4-2.4 5.6-2 16l8.7 35.7s-3.2 3.6 1.2 7',
          }),
          le.createElement('path', {
            fill: '#FFC6A0',
            d: 'm75.8 73.3-1-6.4 12-6.5s7.4-.1 8 1.2c.8 1.3-5.5 1-5.5 1s-1.9 1.4-2.6 2.5c-1.7 2.4-1 6.5-8.4 6-1.7.3-2.5 2.2-2.5 2.2',
          }),
          le.createElement('path', {
            fill: '#FFB594',
            d: 'M52.4 77.7S66.7 87 77.4 92c1 .5-2 16.2-11.9 11.8-7.4-3.3-20.1-8.4-21.5-14.5-.7-3.2 2.6-7.6 8.4-11.7M142 80s-6.7 3-13.9 6.9c-3.9 2.1-10.1 4.7-12.3 8-6.2 9.3 3.5 11.2 13 7.5 6.6-2.7 29-12.1 13.2-22.4',
          }),
          le.createElement('path', {
            fill: '#FFC6A0',
            d: 'm76.2 66.4 3 3.8S76.4 73 73 76c-7 6.2-12.8 14.3-16 16.4-4 2.7-9.7 3.3-12.2 0-3.5-5.1.5-14.7 31.5-26',
          }),
          le.createElement('path', {
            fill: '#FFF',
            d: 'M64.7 85.1s-2.4 8.4-9 14.5c.7.5 18.6 10.5 22.2 10 5.2-.6 6.4-19 1.2-20.5-.8-.2-6-1.3-8.9-2.2-.9-.2-1.6-1.7-3.5-1l-2-.8zm63.7.7s5.3 2 7.3 13.8c-.6.2-17.6 12.3-21.8 7.8-6.6-7-.8-17.4 4.2-18.6 4.7-1.2 5-1.4 10.3-3',
          }),
          le.createElement('path', {
            stroke: '#E4EBF7',
            d: 'M78.2 94.7s.9 7.4-5 13',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.1',
          }),
          le.createElement('path', {
            stroke: '#E4EBF7',
            d: 'M87.4 94.7s3.1 2.6 10.3 2.6c7.1 0 9-3.5 9-3.5',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '.9',
          }),
          le.createElement('path', {
            fill: '#FFC6A0',
            d: 'm117.2 68.6-6.8-6.1s-5.4-4.4-9.2-1c-3.9 3.5 4.4 2.2 5.6 4.2 1.2 2.1.9 1.2-2 .5-5.7-1.4-2.1.9 3 5.3 2 1.9 7 1 7 1l2.4-3.9z',
          }),
          le.createElement('path', {
            fill: '#FFB594',
            d: 'm105.3 91.3-.3-11H89l-.5 10.5c0 .4.2.8.6 1 2 1.3 9.3 5 15.8.4.2-.2.4-.5.4-.9',
          }),
          le.createElement('path', {
            fill: '#5C2552',
            d: 'M107.6 74.2c.8-1.1 1-9 1-11.9a1 1 0 0 0-1-1l-4.6-.4c-7.7-1-17 .6-18.3 6.3-5.4 5.9-.4 13.3-.4 13.3s2 3.5 4.3 6.8c.8 1 .4-3.8 3-6a47.9 47.9 0 0 1 16-7',
          }),
          le.createElement('path', {
            fill: '#FFC6A0',
            d: 'M88.4 83.2s2.7 6.2 11.6 6.5c7.8.3 9-7 7.5-17.5l-1-5.5c-6-2.9-15.4.6-15.4.6s-.6 2-.2 5.5c-2.3 2-1.8 5.6-1.8 5.6s-1-2-2-2.3c-.9-.3-2 0-2.3 2-1 4.6 3.6 5.1 3.6 5.1',
          }),
          le.createElement('path', {
            stroke: '#DB836E',
            d: 'm100.8 77.1 1.7-1-1-4.3.7-1.4',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.1',
          }),
          le.createElement('path', {
            fill: '#552950',
            d: 'M105.5 74c0 .8-.4 1.4-1 1.4-.4 0-.8-.7-.8-1.4s.5-1.2 1-1.2.9.6.8 1.3m-8 .2c0 .8-.4 1.3-.9 1.3s-.9-.6-.9-1.3c0-.7.5-1.3 1-1.3s1 .6.9 1.3',
          }),
          le.createElement('path', {
            stroke: '#DB836E',
            d: 'M91.1 86.8s5.3 5 12.7 2.3',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.1',
          }),
          le.createElement('path', {
            fill: '#DB836E',
            d: 'M99.8 81.9s-3.6.2-1.5-2.8c1.6-1.5 5-.4 5-.4s1 3.9-3.5 3.2',
          }),
          le.createElement('path', {
            stroke: '#5C2552',
            d: 'M102.9 70.6s2.5.8 3.4.7m-12.4.7s2.5-1.2 4.8-1.1',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.5',
          }),
          le.createElement('path', {
            stroke: '#DB836E',
            d: 'M86.3 77.4s1 .9 1.5 2c-.4.6-1 1.2-.3 1.9m11.8 2.4s2 .2 2.5-.2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.1',
          }),
          le.createElement('path', {
            stroke: '#E4EBF7',
            d: 'm87.8 115.8 15.7-3m-3.3 3 10-2m-43.7-27s-1.6 8.8-6.7 14M128.3 88s3 4 4 11.7',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.1',
          }),
          le.createElement('path', {
            stroke: '#DB836E',
            d: 'M64 84.8s-6 10-13.5 10',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '.8',
          }),
          le.createElement('path', {
            fill: '#FFC6A0',
            d: 'm112.4 66-.2 5.2 12 9.2c4.5 3.6 8.9 7.5 11 8.7 4.8 2.8 8.9 3.3 11 1.8 4.1-2.9 4.4-9.9-8.1-15.3-4.3-1.8-16.1-6.3-25.7-9.7',
          }),
          le.createElement('path', {
            stroke: '#DB836E',
            d: 'M130.5 85.5s4.6 5.7 11.7 6.2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '.8',
          }),
          le.createElement('path', {
            stroke: '#E4EBF7',
            d: 'M121.7 105.7s-.4 8.6-1.3 13.6',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.1',
          }),
          le.createElement('path', {
            stroke: '#648BD8',
            d: 'M115.8 161.5s-3.6-1.5-2.7-7.1',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.1',
          }),
          le.createElement('path', {
            fill: '#CBD1D1',
            d: 'M101.5 290.2s4.3 2.1 7.4 1c2.9-.9 4.6.7 7.2 1.3 2.5.5 6.9 1 11.7-1.3 0-5.6-7-4-12-6.8-2.6-1.4-3.8-4.7-3.6-8.8h-9.5s-1.4 10.6-1.2 14.6',
          }),
          le.createElement('path', {
            fill: '#2B0849',
            d: 'M101.5 290s2.4 1.4 6.8.7c3-.4 3.7.5 7.5 1 3.7.6 10.8 0 11.9-.8.4 1-.4 2-.4 2s-1.5.7-4.8.9c-2 .1-5.8.3-7.7-.5-1.8-1.4-5.2-2-5.7-.3-4 1-7.4-.3-7.4-.3l-.2-2.6z',
          }),
          le.createElement('path', {
            fill: '#A4AABA',
            d: 'M108.8 276.2h3.1s0 6.7 4.6 8.6c-4.7.6-8.6-2.3-7.7-8.6',
          }),
          le.createElement('path', {
            fill: '#CBD1D1',
            d: 'M57.6 272.5s-2 7.5-4.5 12.4c-1.8 3.7-4.2 7.6 5.5 7.6 6.7 0 9-.5 7.5-6.7-1.5-6.1.3-13.3.3-13.3h-8.8z',
          }),
          le.createElement('path', {
            fill: '#2B0849',
            d: 'M51.5 290s2.2 1.2 6.7 1.2c6.1 0 8.3-1.6 8.3-1.6s.6 1-.6 2.1c-1 .9-3.6 1.6-7.4 1.6-4.2 0-6-.6-6.8-1.2-.9-.5-.7-1.6-.2-2',
          }),
          le.createElement('path', {
            fill: '#A4AABA',
            d: 'M58.5 274.4s0 1.6-.3 3-1 3.1-1.1 4.2c0 1.1 4.5 1.5 5.2 0 .6-1.6 1.3-6.5 1.9-7.3.6-.8-5-2.1-5.7.1',
          }),
          le.createElement('path', {
            fill: '#7BB2F9',
            d: 'm100.9 277 13.3.1s1.3-54.2 1.8-64c.6-9.9 3.8-43.2 1-62.8l-12.4-.7-22.8.8-1.2 10c0 .4-.6.8-.7 1.3 0 .6.4 1.3.3 2-2.3 14-6.3 32.9-8.7 46.4-.1.6-1.2 1-1.4 2.6 0 .3.2 1.6 0 1.8-6.8 18.7-10.8 47.6-14.1 61.6h14.5s2.2-8.6 4-17a3984 3984 0 0 1 23-84.5l3-.5 1 46.1s-.2 1.2.4 2c.5.8-.6 1.1-.4 2.3l.4 1.7-1 11.9c-.4 4.6 0 39 0 39',
          }),
          le.createElement('path', {
            stroke: '#648BD8',
            d: 'M77.4 220.4c1.2.1 4-2 7-4.9m23.1 8.4s2.8-1 6.1-3.8',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.1',
          }),
          le.createElement('path', {
            stroke: '#648BD8',
            d: 'M108.5 221s2.7-1.2 6-4',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }),
          le.createElement('path', {
            stroke: '#648BD8',
            d: 'M76.1 223.6s2.6-.6 6.5-3.4m4.7-69.4c-.2 3.1.3 8.5-4.3 9m21.8-10.7s.1 14-1.3 15c-2.2 1.6-3 1.9-3 1.9m.5-16.4s0 12.8-1.2 24.3m-4.9 1s7.2-1.6 9.4-1.6m-28.6 31.5-1 4.5s-1.5 1.8-1 3.7c.4 2-1 2-5 15.3-1.7 5.6-4.4 18.5-6.3 27.5l-4 18.4M77 196.7a313.3 313.3 0 0 1-.8 4.8m7.7-50-1.2 10.3s-1 .2-.5 2.3c.1 1.3-2.6 15.6-5.1 30.2M57.6 273h13.2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.1',
          }),
          le.createElement('path', {
            fill: '#192064',
            d: 'M117.4 147.4s-17-3-35.7.2v4.2s14.6-2.9 35.5-.4l.2-4',
          }),
          le.createElement('path', {
            fill: '#FFF',
            d: 'M107.5 150.4v-5a.8.8 0 0 0-.8-.7H99a.8.8 0 0 0-.7.8v4.8c0 .5.3.9.8.8a140.8 140.8 0 0 1 7.7 0 .8.8 0 0 0 .8-.7',
          }),
          le.createElement('path', {
            fill: '#192064',
            d: 'M106.4 149.4v-3a.6.6 0 0 0-.6-.7 94.1 94.1 0 0 0-5.8 0 .6.6 0 0 0-.7.7v3c0 .4.3.7.7.7h5.7c.4 0 .7-.3.7-.7',
          }),
          le.createElement('path', {
            stroke: '#648BD8',
            d: 'M101.5 274h12.3m-11.1-5v6.5m0-12.4v4.3m-.5-93.4.9 44.4s.7 1.6-.2 2.7c-1 1.1 2.4.7.9 2.2-1.6 1.6.9 1.1 0 3.4-.6 1.5-1 21-1.1 35',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.1',
          }),
        ),
      ),
  },
  ep = Object.keys(Ju),
  tp = ({ prefixCls: e, icon: t, status: o }) => {
    const n = de(`${e}-icon`);
    if (ep.includes(`${o}`)) {
      const t = Ju[o];
      return le.createElement(
        'div',
        { className: `${n} ${e}-image` },
        le.createElement(t, null),
      );
    }
    const r = le.createElement(Zu[o]);
    return null === t || !1 === t
      ? null
      : le.createElement('div', { className: n }, t || r);
  },
  op = ({ prefixCls: e, extra: t }) =>
    t ? le.createElement('div', { className: `${e}-extra` }, t) : null,
  np = ({
    prefixCls: e,
    className: t,
    rootClassName: o,
    subTitle: n,
    title: r,
    style: i,
    children: a,
    status: l = 'info',
    icon: s,
    extra: c,
  }) => {
    const { getPrefixCls: d, direction: u, result: p } = le.useContext(Tt),
      m = d('result', e),
      [g, b, f] = Qu(m),
      h = de(
        m,
        `${m}-${l}`,
        t,
        null == p ? void 0 : p.className,
        o,
        { [`${m}-rtl`]: 'rtl' === u },
        b,
        f,
      ),
      $ = Object.assign(Object.assign({}, null == p ? void 0 : p.style), i);
    return g(
      le.createElement(
        'div',
        { className: h, style: $ },
        le.createElement(tp, { prefixCls: m, status: l, icon: s }),
        le.createElement('div', { className: `${m}-title` }, r),
        n && le.createElement('div', { className: `${m}-subtitle` }, n),
        le.createElement(op, { prefixCls: m, extra: c }),
        a && le.createElement('div', { className: `${m}-content` }, a),
      ),
    );
  };
((np.PRESENTED_IMAGE_403 = Ju[403]),
  (np.PRESENTED_IMAGE_404 = Ju[404]),
  (np.PRESENTED_IMAGE_500 = Ju[500]));
const rp = (e) => {
    const { lineWidth: t, fontSizeIcon: o, calc: n } = e,
      r = e.fontSizeSM;
    return T(e, {
      tagFontSize: r,
      tagLineHeight: I(n(e.lineHeightSM).mul(r).equal()),
      tagIconSize: n(o).sub(n(t).mul(2)).equal(),
      tagPaddingHorizontal: 8,
      tagBorderlessBg: e.defaultBg,
    });
  },
  ip = (e) => ({
    defaultBg: new S(e.colorFillQuaternary)
      .onBackground(e.colorBgContainer)
      .toHexString(),
    defaultColor: e.colorText,
  }),
  ap = lo(
    'Tag',
    (e) =>
      ((e) => {
        const {
            paddingXXS: t,
            lineWidth: o,
            tagPaddingHorizontal: n,
            componentCls: r,
            calc: i,
          } = e,
          a = i(n).sub(o).equal(),
          l = i(t).sub(o).equal();
        return {
          [r]: Object.assign(Object.assign({}, oo(e)), {
            display: 'inline-block',
            height: 'auto',
            marginInlineEnd: e.marginXS,
            paddingInline: a,
            fontSize: e.tagFontSize,
            lineHeight: e.tagLineHeight,
            whiteSpace: 'nowrap',
            background: e.defaultBg,
            border: `${I(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
            borderRadius: e.borderRadiusSM,
            opacity: 1,
            transition: `all ${e.motionDurationMid}`,
            textAlign: 'start',
            position: 'relative',
            [`&${r}-rtl`]: { direction: 'rtl' },
            '&, a, a:hover': { color: e.defaultColor },
            [`${r}-close-icon`]: {
              marginInlineStart: l,
              fontSize: e.tagIconSize,
              color: e.colorIcon,
              cursor: 'pointer',
              transition: `all ${e.motionDurationMid}`,
              '&:hover': { color: e.colorTextHeading },
            },
            [`&${r}-has-color`]: {
              borderColor: 'transparent',
              [`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]: {
                color: e.colorTextLightSolid,
              },
            },
            '&-checkable': {
              backgroundColor: 'transparent',
              borderColor: 'transparent',
              cursor: 'pointer',
              [`&:not(${r}-checkable-checked):hover`]: {
                color: e.colorPrimary,
                backgroundColor: e.colorFillSecondary,
              },
              '&:active, &-checked': { color: e.colorTextLightSolid },
              '&-checked': {
                backgroundColor: e.colorPrimary,
                '&:hover': { backgroundColor: e.colorPrimaryHover },
              },
              '&:active': { backgroundColor: e.colorPrimaryActive },
            },
            '&-hidden': { display: 'none' },
            [`> ${e.iconCls} + span, > span + ${e.iconCls}`]: {
              marginInlineStart: a,
            },
          }),
          [`${r}-borderless`]: {
            borderColor: 'transparent',
            background: e.tagBorderlessBg,
          },
        };
      })(rp(e)),
    ip,
  );
const lp = le.forwardRef((e, t) => {
    const {
        prefixCls: o,
        style: n,
        className: r,
        checked: i,
        children: a,
        icon: l,
        onChange: s,
        onClick: c,
      } = e,
      d = (function (e, t) {
        var o = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (o[n] = e[n]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            t.indexOf(n[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
              (o[n[r]] = e[n[r]]);
        }
        return o;
      })(e, [
        'prefixCls',
        'style',
        'className',
        'checked',
        'children',
        'icon',
        'onChange',
        'onClick',
      ]),
      { getPrefixCls: u, tag: p } = le.useContext(Tt),
      m = u('tag', o),
      [g, b, f] = ap(m),
      h = de(
        m,
        `${m}-checkable`,
        { [`${m}-checkable-checked`]: i },
        null == p ? void 0 : p.className,
        r,
        b,
        f,
      );
    return g(
      le.createElement(
        'span',
        Object.assign({}, d, {
          ref: t,
          style: Object.assign(
            Object.assign({}, n),
            null == p ? void 0 : p.style,
          ),
          className: h,
          onClick: (e) => {
            (null == s || s(!i), null == c || c(e));
          },
        }),
        l,
        le.createElement('span', null, a),
      ),
    );
  }),
  sp = co(
    ['Tag', 'preset'],
    (e) =>
      ((e) =>
        uo(
          e,
          (
            t,
            { textColor: o, lightBorderColor: n, lightColor: r, darkColor: i },
          ) => ({
            [`${e.componentCls}${e.componentCls}-${t}`]: {
              color: o,
              background: r,
              borderColor: n,
              '&-inverse': {
                color: e.colorTextLightSolid,
                background: i,
                borderColor: i,
              },
              [`&${e.componentCls}-borderless`]: { borderColor: 'transparent' },
            },
          }),
        ))(rp(e)),
    ip,
  );
const cp = (e, t, o) => {
    const n =
      'string' != typeof (r = o) ? r : r.charAt(0).toUpperCase() + r.slice(1);
    var r;
    return {
      [`${e.componentCls}${e.componentCls}-${t}`]: {
        color: e[`color${o}`],
        background: e[`color${n}Bg`],
        borderColor: e[`color${n}Border`],
        [`&${e.componentCls}-borderless`]: { borderColor: 'transparent' },
      },
    };
  },
  dp = co(
    ['Tag', 'status'],
    (e) => {
      const t = rp(e);
      return [
        cp(t, 'success', 'Success'),
        cp(t, 'processing', 'Info'),
        cp(t, 'error', 'Error'),
        cp(t, 'warning', 'Warning'),
      ];
    },
    ip,
  );
const up = le.forwardRef((e, t) => {
  const {
      prefixCls: o,
      className: n,
      rootClassName: r,
      style: i,
      children: a,
      icon: l,
      color: s,
      onClose: c,
      bordered: d = !0,
      visible: u,
    } = e,
    p = (function (e, t) {
      var o = {};
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) &&
          t.indexOf(n) < 0 &&
          (o[n] = e[n]);
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var r = 0;
        for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
          t.indexOf(n[r]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
            (o[n[r]] = e[n[r]]);
      }
      return o;
    })(e, [
      'prefixCls',
      'className',
      'rootClassName',
      'style',
      'children',
      'icon',
      'color',
      'onClose',
      'bordered',
      'visible',
    ]),
    { getPrefixCls: m, direction: g, tag: b } = le.useContext(Tt),
    [f, $] = le.useState(!0),
    v = h(p, ['closeIcon', 'closable']);
  le.useEffect(() => {
    void 0 !== u && $(u);
  }, [u]);
  const y = Vl(s),
    x = (function (e) {
      return Xl.includes(e);
    })(s),
    C = y || x,
    S = Object.assign(
      Object.assign(
        { backgroundColor: s && !C ? s : void 0 },
        null == b ? void 0 : b.style,
      ),
      i,
    ),
    O = m('tag', o),
    [k, w, E] = ap(O),
    j = de(
      O,
      null == b ? void 0 : b.className,
      {
        [`${O}-${s}`]: C,
        [`${O}-has-color`]: s && !C,
        [`${O}-hidden`]: !f,
        [`${O}-rtl`]: 'rtl' === g,
        [`${O}-borderless`]: !d,
      },
      n,
      r,
      w,
      E,
    ),
    I = (e) => {
      (e.stopPropagation(), null == c || c(e), e.defaultPrevented || $(!1));
    },
    [, P] = Ro(Mo(e), Mo(b), {
      closable: !1,
      closeIconRender: (e) =>
        Io(
          e,
          le.createElement(
            'span',
            { className: `${O}-close-icon`, onClick: I },
            e,
          ),
          (e) => ({
            onClick: (t) => {
              var o;
              (null === (o = null == e ? void 0 : e.onClick) ||
                void 0 === o ||
                o.call(e, t),
                I(t));
            },
            className: de(null == e ? void 0 : e.className, `${O}-close-icon`),
          }),
        ),
    }),
    B = 'function' == typeof p.onClick || (a && 'a' === a.type),
    z = l || null,
    M = z
      ? le.createElement(
          le.Fragment,
          null,
          z,
          a && le.createElement('span', null, a),
        )
      : a,
    H = le.createElement(
      'span',
      Object.assign({}, v, { ref: t, className: j, style: S }),
      M,
      P,
      y && le.createElement(sp, { key: 'preset', prefixCls: O }),
      x && le.createElement(dp, { key: 'status', prefixCls: O }),
    );
  return k(B ? le.createElement(fn, { component: 'Tag' }, H) : H);
});
up.CheckableTag = lp;
const pp = (e, t) => new S(e).setA(t).toRgbString(),
  mp = (e, t) => new S(e).lighten(t).toHexString(),
  gp = (e) => {
    const t = O(e, { theme: 'dark' });
    return {
      1: t[0],
      2: t[1],
      3: t[2],
      4: t[3],
      5: t[6],
      6: t[5],
      7: t[4],
      8: t[6],
      9: t[5],
      10: t[4],
    };
  },
  bp = (e, t) => {
    const o = e || '#000',
      n = t || '#fff';
    return {
      colorBgBase: o,
      colorTextBase: n,
      colorText: pp(n, 0.85),
      colorTextSecondary: pp(n, 0.65),
      colorTextTertiary: pp(n, 0.45),
      colorTextQuaternary: pp(n, 0.25),
      colorFill: pp(n, 0.18),
      colorFillSecondary: pp(n, 0.12),
      colorFillTertiary: pp(n, 0.08),
      colorFillQuaternary: pp(n, 0.04),
      colorBgSolid: pp(n, 0.95),
      colorBgSolidHover: pp(n, 1),
      colorBgSolidActive: pp(n, 0.9),
      colorBgElevated: mp(o, 12),
      colorBgContainer: mp(o, 8),
      colorBgLayout: mp(o, 0),
      colorBgSpotlight: mp(o, 26),
      colorBgBlur: pp(n, 0.04),
      colorBorder: mp(o, 26),
      colorBorderSecondary: mp(o, 19),
    };
  },
  fp = {
    defaultSeed: Pt.token,
    defaultAlgorithm: jt,
    darkAlgorithm: (e, t) => {
      const o = Object.keys(vt)
          .map((t) => {
            const o = O(e[t], { theme: 'dark' });
            return Array.from({ length: 10 }, () => 1).reduce(
              (e, n, r) => (
                (e[`${t}-${r + 1}`] = o[r]),
                (e[`${t}${r + 1}`] = o[r]),
                e
              ),
              {},
            );
          })
          .reduce((e, t) => (e = Object.assign(Object.assign({}, e), t)), {}),
        n = null != t ? t : jt(e),
        r = xt(e, {
          generateColorPalettes: gp,
          generateNeutralColorPalettes: bp,
        });
      return Object.assign(
        Object.assign(Object.assign(Object.assign({}, n), o), r),
        {
          colorPrimaryBg: r.colorPrimaryBorder,
          colorPrimaryBgHover: r.colorPrimaryBorderHover,
        },
      );
    },
  },
  hp = (e) => {
    const t = {};
    return (
      [1, 2, 3, 4, 5].forEach((o) => {
        t[
          `\n      h${o}&,\n      div&-h${o},\n      div&-h${o} > textarea,\n      h${o}\n    `
        ] = ((e, t, o, n) => {
          const { titleMarginBottom: r, fontWeightStrong: i } = n;
          return {
            marginBottom: r,
            color: o,
            fontWeight: i,
            fontSize: e,
            lineHeight: t,
          };
        })(
          e[`fontSizeHeading${o}`],
          e[`lineHeightHeading${o}`],
          e.colorTextHeading,
          e,
        );
      }),
      t
    );
  },
  $p = (e) => {
    const { componentCls: t } = e;
    return {
      'a&, a': Object.assign(Object.assign({}, ao(e)), {
        userSelect: 'text',
        [`&[disabled], &${t}-disabled`]: {
          color: e.colorTextDisabled,
          cursor: 'not-allowed',
          '&:active, &:hover': { color: e.colorTextDisabled },
          '&:active': { pointerEvents: 'none' },
        },
      }),
    };
  },
  vp = (e) => ({
    code: {
      margin: '0 0.2em',
      paddingInline: '0.4em',
      paddingBlock: '0.2em 0.1em',
      fontSize: '85%',
      fontFamily: e.fontFamilyCode,
      background: 'rgba(150, 150, 150, 0.1)',
      border: '1px solid rgba(100, 100, 100, 0.2)',
      borderRadius: 3,
    },
    kbd: {
      margin: '0 0.2em',
      paddingInline: '0.4em',
      paddingBlock: '0.15em 0.1em',
      fontSize: '90%',
      fontFamily: e.fontFamilyCode,
      background: 'rgba(150, 150, 150, 0.06)',
      border: '1px solid rgba(100, 100, 100, 0.2)',
      borderBottomWidth: 2,
      borderRadius: 3,
    },
    mark: { padding: 0, backgroundColor: ne[2] },
    'u, ins': { textDecoration: 'underline', textDecorationSkipInk: 'auto' },
    's, del': { textDecoration: 'line-through' },
    strong: { fontWeight: e.fontWeightStrong },
    'ul, ol': {
      marginInline: 0,
      marginBlock: '0 1em',
      padding: 0,
      li: {
        marginInline: '20px 0',
        marginBlock: 0,
        paddingInline: '4px 0',
        paddingBlock: 0,
      },
    },
    ul: { listStyleType: 'circle', ul: { listStyleType: 'disc' } },
    ol: { listStyleType: 'decimal' },
    'pre, blockquote': { margin: '1em 0' },
    pre: {
      padding: '0.4em 0.6em',
      whiteSpace: 'pre-wrap',
      wordWrap: 'break-word',
      background: 'rgba(150, 150, 150, 0.1)',
      border: '1px solid rgba(100, 100, 100, 0.2)',
      borderRadius: 3,
      fontFamily: e.fontFamilyCode,
      code: {
        display: 'inline',
        margin: 0,
        padding: 0,
        fontSize: 'inherit',
        fontFamily: 'inherit',
        background: 'transparent',
        border: 0,
      },
    },
    blockquote: {
      paddingInline: '0.6em 0',
      paddingBlock: 0,
      borderInlineStart: '4px solid rgba(100, 100, 100, 0.2)',
      opacity: 0.85,
    },
  }),
  yp = (e) => {
    const { componentCls: t, paddingSM: o } = e,
      n = o;
    return {
      '&-edit-content': {
        position: 'relative',
        'div&': {
          insetInlineStart: e.calc(e.paddingSM).mul(-1).equal(),
          insetBlockStart: e.calc(n).div(-2).add(1).equal(),
          marginBottom: e.calc(n).div(2).sub(2).equal(),
        },
        [`${t}-edit-content-confirm`]: {
          position: 'absolute',
          insetInlineEnd: e.calc(e.marginXS).add(2).equal(),
          insetBlockEnd: e.marginXS,
          color: e.colorIcon,
          fontWeight: 'normal',
          fontSize: e.fontSize,
          fontStyle: 'normal',
          pointerEvents: 'none',
        },
        textarea: {
          margin: '0!important',
          MozTransition: 'none',
          height: '1em',
        },
      },
    };
  },
  xp = (e) => ({
    [`${e.componentCls}-copy-success`]: {
      '\n    &,\n    &:hover,\n    &:focus': { color: e.colorSuccess },
    },
    [`${e.componentCls}-copy-icon-only`]: { marginInlineStart: 0 },
  }),
  Cp = lo(
    'Typography',
    (e) => {
      const { componentCls: t, titleMarginTop: o } = e;
      return {
        [t]: Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(
                          {
                            color: e.colorText,
                            wordBreak: 'break-word',
                            lineHeight: e.lineHeight,
                            [`&${t}-secondary`]: {
                              color: e.colorTextDescription,
                            },
                            [`&${t}-success`]: { color: e.colorSuccessText },
                            [`&${t}-warning`]: { color: e.colorWarningText },
                            [`&${t}-danger`]: {
                              color: e.colorErrorText,
                              'a&:active, a&:focus': {
                                color: e.colorErrorTextActive,
                              },
                              'a&:hover': { color: e.colorErrorTextHover },
                            },
                            [`&${t}-disabled`]: {
                              color: e.colorTextDisabled,
                              cursor: 'not-allowed',
                              userSelect: 'none',
                            },
                            '\n        div&,\n        p\n      ': {
                              marginBottom: '1em',
                            },
                          },
                          hp(e),
                        ),
                        {
                          [`\n      & + h1${t},\n      & + h2${t},\n      & + h3${t},\n      & + h4${t},\n      & + h5${t}\n      `]:
                            { marginTop: o },
                          '\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5':
                            {
                              '\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ':
                                { marginTop: o },
                            },
                        },
                      ),
                      vp(e),
                    ),
                    $p(e),
                  ),
                  {
                    [`\n        ${t}-expand,\n        ${t}-collapse,\n        ${t}-edit,\n        ${t}-copy\n      `]:
                      Object.assign(Object.assign({}, ao(e)), {
                        marginInlineStart: e.marginXXS,
                      }),
                  },
                ),
                yp(e),
              ),
              xp(e),
            ),
            {
              '\n  a&-ellipsis,\n  span&-ellipsis\n  ': {
                display: 'inline-block',
                maxWidth: '100%',
              },
              '&-ellipsis-single-line': {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                'a&, span&': { verticalAlign: 'bottom' },
                '> code': {
                  paddingBlock: 0,
                  maxWidth: 'calc(100% - 1.2em)',
                  display: 'inline-block',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  verticalAlign: 'bottom',
                  boxSizing: 'content-box',
                },
              },
              '&-ellipsis-multiple-line': {
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
              },
            },
          ),
          { '&-rtl': { direction: 'rtl' } },
        ),
      };
    },
    () => ({ titleMarginTop: '1.2em', titleMarginBottom: '0.5em' }),
  ),
  Sp = (e) => {
    const {
        prefixCls: t,
        'aria-label': o,
        className: n,
        style: r,
        direction: i,
        maxLength: a,
        autoSize: l = !0,
        value: s,
        onSave: c,
        onCancel: d,
        onEnd: u,
        component: p,
        enterIcon: m = le.createElement(re, null),
      } = e,
      g = le.useRef(null),
      b = le.useRef(!1),
      f = le.useRef(null),
      [h, $] = le.useState(s);
    (le.useEffect(() => {
      $(s);
    }, [s]),
      le.useEffect(() => {
        var e;
        if (
          null === (e = g.current) || void 0 === e
            ? void 0
            : e.resizableTextArea
        ) {
          const { textArea: e } = g.current.resizableTextArea;
          e.focus();
          const { length: t } = e.value;
          e.setSelectionRange(t, t);
        }
      }, []));
    const v = () => {
        c(h.trim());
      },
      [x, C, S] = Cp(t),
      O = de(
        t,
        `${t}-edit-content`,
        { [`${t}-rtl`]: 'rtl' === i, [`${t}-${p}`]: !!p },
        n,
        C,
        S,
      );
    return x(
      le.createElement(
        'div',
        { className: O, style: r },
        le.createElement(Wd, {
          ref: g,
          maxLength: a,
          value: h,
          onChange: ({ target: e }) => {
            $(e.value.replace(/[\n\r]/g, ''));
          },
          onKeyDown: ({ keyCode: e }) => {
            b.current || (f.current = e);
          },
          onKeyUp: ({
            keyCode: e,
            ctrlKey: t,
            altKey: o,
            metaKey: n,
            shiftKey: r,
          }) => {
            f.current !== e ||
              b.current ||
              t ||
              o ||
              n ||
              r ||
              (e === y.ENTER ? (v(), null == u || u()) : e === y.ESC && d());
          },
          onCompositionStart: () => {
            b.current = !0;
          },
          onCompositionEnd: () => {
            b.current = !1;
          },
          onBlur: () => {
            v();
          },
          'aria-label': o,
          rows: 1,
          autoSize: l,
        }),
        null !== m ? Po(m, { className: `${t}-edit-content-confirm` }) : null,
      ),
    );
  };
var Op = function (e, t, o, n) {
  return new (o || (o = Promise))(function (r, i) {
    function a(e) {
      try {
        s(n.next(e));
      } catch (t) {
        i(t);
      }
    }
    function l(e) {
      try {
        s(n.throw(e));
      } catch (t) {
        i(t);
      }
    }
    function s(e) {
      var t;
      e.done
        ? r(e.value)
        : ((t = e.value),
          t instanceof o
            ? t
            : new o(function (e) {
                e(t);
              })).then(a, l);
    }
    s((n = n.apply(e, t || [])).next());
  });
};
const kp = ({ copyConfig: e, children: t }) => {
  const [o, n] = le.useState(!1),
    [r, i] = le.useState(!1),
    a = le.useRef(null),
    l = () => {
      a.current && clearTimeout(a.current);
    },
    s = {};
  (e.format && (s.format = e.format), le.useEffect(() => l, []));
  return {
    copied: o,
    copyLoading: r,
    onClick: d((o) =>
      Op(void 0, void 0, void 0, function* () {
        var r;
        (null == o || o.preventDefault(),
          null == o || o.stopPropagation(),
          i(!0));
        try {
          const c = 'function' == typeof e.text ? yield e.text() : e.text;
          (nt(
            c ||
              ((e, t = !1) =>
                t && null == e ? [] : Array.isArray(e) ? e : [e])(t, !0).join(
                '',
              ) ||
              '',
            s,
          ),
            i(!1),
            n(!0),
            l(),
            (a.current = setTimeout(() => {
              n(!1);
            }, 3e3)),
            null === (r = e.onCopy) || void 0 === r || r.call(e, o));
        } catch (c) {
          throw (i(!1), c);
        }
      }),
    ),
  };
};
function wp(e, t) {
  return le.useMemo(() => {
    const o = !!e;
    return [
      o,
      Object.assign(Object.assign({}, t), o && 'object' == typeof e ? e : null),
    ];
  }, [e]);
}
const Ep = le.forwardRef((e, t) => {
  const {
      prefixCls: o,
      component: n = 'article',
      className: r,
      rootClassName: i,
      setContentRef: a,
      children: l,
      direction: s,
      style: d,
    } = e,
    u = (function (e, t) {
      var o = {};
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) &&
          t.indexOf(n) < 0 &&
          (o[n] = e[n]);
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var r = 0;
        for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
          t.indexOf(n[r]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
            (o[n[r]] = e[n[r]]);
      }
      return o;
    })(e, [
      'prefixCls',
      'component',
      'className',
      'rootClassName',
      'setContentRef',
      'children',
      'direction',
      'style',
    ]),
    {
      getPrefixCls: p,
      direction: m,
      className: g,
      style: b,
    } = Lt('typography'),
    f = null != s ? s : m,
    h = a ? c(t, a) : t,
    $ = p('typography', o),
    [v, y, x] = Cp($),
    C = de($, g, { [`${$}-rtl`]: 'rtl' === f }, r, i, y, x),
    S = Object.assign(Object.assign({}, b), d);
  return v(
    le.createElement(
      n,
      Object.assign({ className: C, style: S, ref: h }, u),
      l,
    ),
  );
});
function jp(e) {
  return !1 === e ? [!1, !1] : Array.isArray(e) ? e : [e];
}
function Ip(e, t, o) {
  return !0 === e || void 0 === e ? t : e || (o && t);
}
const Pp = (e) => ['string', 'number'].includes(typeof e),
  Bp = ({
    prefixCls: e,
    copied: t,
    locale: o,
    iconOnly: n,
    tooltips: r,
    icon: i,
    tabIndex: a,
    onCopy: l,
    loading: s,
  }) => {
    const c = jp(r),
      d = jp(i),
      { copied: u, copy: p } = null != o ? o : {},
      m = t ? u : p,
      g = Ip(c[t ? 1 : 0], m),
      b = 'string' == typeof g ? g : m;
    return le.createElement(
      Ul,
      { title: g },
      le.createElement(
        'button',
        {
          type: 'button',
          className: de(`${e}-copy`, {
            [`${e}-copy-success`]: t,
            [`${e}-copy-icon-only`]: n,
          }),
          onClick: l,
          'aria-label': b,
          tabIndex: a,
        },
        t
          ? Ip(d[1], le.createElement(W, null), !0)
          : Ip(
              d[0],
              s ? le.createElement(N, null) : le.createElement(ie, null),
              !0,
            ),
      ),
    );
  },
  zp = le.forwardRef(({ style: e, children: t }, o) => {
    const n = le.useRef(null);
    return (
      le.useImperativeHandle(o, () => ({
        isExceed: () => {
          const e = n.current;
          return e.scrollHeight > e.clientHeight;
        },
        getHeight: () => n.current.clientHeight,
      })),
      le.createElement(
        'span',
        {
          'aria-hidden': !0,
          ref: n,
          style: Object.assign(
            {
              position: 'fixed',
              display: 'block',
              left: 0,
              top: 0,
              pointerEvents: 'none',
              backgroundColor: 'rgba(255, 0, 0, 0.65)',
            },
            e,
          ),
        },
        t,
      )
    );
  });
function Mp(e, t) {
  let o = 0;
  const n = [];
  for (let r = 0; r < e.length; r += 1) {
    if (o === t) return n;
    const i = e[r],
      a = o + (Pp(i) ? String(i).length : 1);
    if (a > t) {
      const e = t - o;
      return (n.push(String(i).slice(0, e)), n);
    }
    (n.push(i), (o = a));
  }
  return e;
}
const Hp = 0,
  Tp = 4,
  Rp = {
    display: '-webkit-box',
    overflow: 'hidden',
    WebkitBoxOrient: 'vertical',
  };
function Np(e) {
  const {
      enableMeasure: t,
      width: o,
      text: n,
      children: r,
      rows: i,
      expanded: a,
      miscDeps: l,
      onEllipsis: s,
    } = e,
    c = le.useMemo(() => g(n), [n]),
    d = le.useMemo(
      () =>
        ((e) => e.reduce((e, t) => e + (Pp(t) ? String(t).length : 1), 0))(c),
      [n],
    ),
    u = le.useMemo(() => r(c, !1), [n]),
    [p, m] = le.useState(null),
    b = le.useRef(null),
    h = le.useRef(null),
    $ = le.useRef(null),
    v = le.useRef(null),
    y = le.useRef(null),
    [x, C] = le.useState(!1),
    [S, O] = le.useState(Hp),
    [k, w] = le.useState(0),
    [E, j] = le.useState(null);
  (f(() => {
    O(t && o && d ? 1 : Hp);
  }, [o, n, i, t, c]),
    f(() => {
      var e, t, o, n;
      if (1 === S) {
        O(2);
        const e = h.current && getComputedStyle(h.current).whiteSpace;
        j(e);
      } else if (2 === S) {
        const r = !!(null === (e = $.current) || void 0 === e
          ? void 0
          : e.isExceed());
        (O(r ? 3 : Tp), m(r ? [0, d] : null), C(r));
        const a =
            (null === (t = $.current) || void 0 === t
              ? void 0
              : t.getHeight()) || 0,
          l =
            1 === i
              ? 0
              : (null === (o = v.current) || void 0 === o
                  ? void 0
                  : o.getHeight()) || 0,
          c =
            (null === (n = y.current) || void 0 === n
              ? void 0
              : n.getHeight()) || 0,
          u = Math.max(a, l + c);
        (w(u + 1), s(r));
      }
    }, [S]));
  const I = p ? Math.ceil((p[0] + p[1]) / 2) : 0;
  f(() => {
    var e;
    const [t, o] = p || [0, 0];
    if (t !== o) {
      const n =
        ((null === (e = b.current) || void 0 === e ? void 0 : e.getHeight()) ||
          0) > k;
      let r = I;
      (o - t === 1 && (r = n ? t : o), m(n ? [t, r] : [r, o]));
    }
  }, [p, I]);
  const P = le.useMemo(
      () => {
        if (!t) return r(c, !1);
        if (3 !== S || !p || p[0] !== p[1]) {
          const e = r(c, !1);
          return [Tp, Hp].includes(S)
            ? e
            : le.createElement(
                'span',
                {
                  style: Object.assign(Object.assign({}, Rp), {
                    WebkitLineClamp: i,
                  }),
                },
                e,
              );
        }
        return r(a ? c : Mp(c, p[0]), x);
      },
      [a, S, p, c].concat(ze(l)),
    ),
    B = {
      width: o,
      margin: 0,
      padding: 0,
      whiteSpace: 'nowrap' === E ? 'normal' : 'inherit',
    };
  return le.createElement(
    le.Fragment,
    null,
    P,
    2 === S &&
      le.createElement(
        le.Fragment,
        null,
        le.createElement(
          zp,
          {
            style: Object.assign(Object.assign(Object.assign({}, B), Rp), {
              WebkitLineClamp: i,
            }),
            ref: $,
          },
          u,
        ),
        le.createElement(
          zp,
          {
            style: Object.assign(Object.assign(Object.assign({}, B), Rp), {
              WebkitLineClamp: i - 1,
            }),
            ref: v,
          },
          u,
        ),
        le.createElement(
          zp,
          {
            style: Object.assign(Object.assign(Object.assign({}, B), Rp), {
              WebkitLineClamp: 1,
            }),
            ref: y,
          },
          r([], !0),
        ),
      ),
    3 === S &&
      p &&
      p[0] !== p[1] &&
      le.createElement(
        zp,
        { style: Object.assign(Object.assign({}, B), { top: 400 }), ref: b },
        r(Mp(c, I), !0),
      ),
    1 === S &&
      le.createElement('span', { style: { whiteSpace: 'inherit' }, ref: h }),
  );
}
const Lp = ({
  enableEllipsis: e,
  isEllipsis: t,
  children: o,
  tooltipProps: n,
}) =>
  (null == n ? void 0 : n.title) && e
    ? le.createElement(Ul, Object.assign({ open: !!t && void 0 }, n), o)
    : o;
const Fp = [
    'delete',
    'mark',
    'code',
    'underline',
    'strong',
    'keyboard',
    'italic',
  ],
  Ap = le.forwardRef((e, t) => {
    var o;
    const {
        prefixCls: n,
        className: r,
        style: i,
        type: a,
        disabled: l,
        children: s,
        ellipsis: d,
        editable: u,
        copyable: p,
        component: m,
        title: b,
      } = e,
      $ = (function (e, t) {
        var o = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (o[n] = e[n]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            t.indexOf(n[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
              (o[n[r]] = e[n[r]]);
        }
        return o;
      })(e, [
        'prefixCls',
        'className',
        'style',
        'type',
        'disabled',
        'children',
        'ellipsis',
        'editable',
        'copyable',
        'component',
        'title',
      ]),
      { getPrefixCls: y, direction: x } = le.useContext(Tt),
      [S] = ht('Text'),
      O = le.useRef(null),
      k = le.useRef(null),
      w = y('typography', n),
      E = h($, Fp),
      [j, I] = wp(u),
      [P, B] = v(!1, { value: I.editing }),
      { triggerType: z = ['icon'] } = I,
      M = (e) => {
        var t;
        (e && (null === (t = I.onStart) || void 0 === t || t.call(I)), B(e));
      },
      H = ((e) => {
        const t = le.useRef(void 0);
        return (
          le.useEffect(() => {
            t.current = e;
          }),
          t.current
        );
      })(P);
    f(() => {
      var e;
      !P && H && (null === (e = k.current) || void 0 === e || e.focus());
    }, [P]);
    const T = (e) => {
        (null == e || e.preventDefault(), M(!0));
      },
      R = (e) => {
        var t;
        (null === (t = I.onChange) || void 0 === t || t.call(I, e), M(!1));
      },
      N = () => {
        var e;
        (null === (e = I.onCancel) || void 0 === e || e.call(I), M(!1));
      },
      [L, F] = wp(p),
      {
        copied: A,
        copyLoading: D,
        onClick: W,
      } = kp({ copyConfig: F, children: s }),
      [_, G] = le.useState(!1),
      [q, X] = le.useState(!1),
      [V, K] = le.useState(!1),
      [U, Y] = le.useState(!1),
      [Q, Z] = le.useState(!0),
      [J, ee] = wp(d, {
        expandable: !1,
        symbol: (e) =>
          e ? (null == S ? void 0 : S.collapse) : null == S ? void 0 : S.expand,
      }),
      [te, oe] = v(ee.defaultExpanded || !1, { value: ee.expanded }),
      ne = J && (!te || 'collapsible' === ee.expandable),
      { rows: re = 1 } = ee,
      ie = le.useMemo(
        () =>
          ne &&
          (void 0 !== ee.suffix || ee.onEllipsis || ee.expandable || j || L),
        [ne, ee, j, L],
      );
    f(() => {
      J && !ie && (G(C('webkitLineClamp')), X(C('textOverflow')));
    }, [ie, J]);
    const [se, ce] = le.useState(ne),
      pe = le.useMemo(() => !ie && (1 === re ? q : _), [ie, q, _]);
    f(() => {
      ce(pe && ne);
    }, [pe, ne]);
    const me = ne && (se ? U : V),
      ge = ne && 1 === re && se,
      be = ne && re > 1 && se,
      [fe, he] = le.useState(0),
      $e = (e) => {
        var t;
        (K(e),
          V !== e &&
            (null === (t = ee.onEllipsis) || void 0 === t || t.call(ee, e)));
      };
    (le.useEffect(() => {
      const e = O.current;
      if (J && se && e) {
        const t = (function (e) {
          const t = document.createElement('em');
          e.appendChild(t);
          const o = e.getBoundingClientRect(),
            n = t.getBoundingClientRect();
          return (
            e.removeChild(t),
            o.left > n.left ||
              n.right > o.right ||
              o.top > n.top ||
              n.bottom > o.bottom
          );
        })(e);
        U !== t && Y(t);
      }
    }, [J, se, s, be, Q, fe]),
      le.useEffect(() => {
        const e = O.current;
        if ('undefined' == typeof IntersectionObserver || !e || !se || !ne)
          return;
        const t = new IntersectionObserver(() => {
          Z(!!e.offsetParent);
        });
        return (
          t.observe(e),
          () => {
            t.disconnect();
          }
        );
      }, [se, ne]));
    const ve = ((e, t, o) =>
        le.useMemo(
          () =>
            !0 === e
              ? { title: null != t ? t : o }
              : le.isValidElement(e)
                ? { title: e }
                : 'object' == typeof e
                  ? Object.assign({ title: null != t ? t : o }, e)
                  : { title: e },
          [e, t, o],
        ))(ee.tooltip, I.text, s),
      ye = le.useMemo(() => {
        if (J && !se) return [I.text, s, b, ve.title].find(Pp);
      }, [J, se, b, ve.title, me]);
    if (P)
      return le.createElement(Sp, {
        value:
          null !== (o = I.text) && void 0 !== o
            ? o
            : 'string' == typeof s
              ? s
              : '',
        onSave: R,
        onCancel: N,
        onEnd: I.onEnd,
        prefixCls: w,
        className: r,
        style: i,
        direction: x,
        component: m,
        maxLength: I.maxLength,
        autoSize: I.autoSize,
        enterIcon: I.enterIcon,
      });
    const xe = () => {
        const { expandable: e, symbol: t } = ee;
        return e
          ? le.createElement(
              'button',
              {
                type: 'button',
                key: 'expand',
                className: `${w}-${te ? 'collapse' : 'expand'}`,
                onClick: (e) =>
                  ((e, t) => {
                    var o;
                    (oe(t.expanded),
                      null === (o = ee.onExpand) ||
                        void 0 === o ||
                        o.call(ee, e, t));
                  })(e, { expanded: !te }),
                'aria-label': te ? S.collapse : null == S ? void 0 : S.expand,
              },
              'function' == typeof t ? t(te) : t,
            )
          : null;
      },
      Ce = () => {
        if (!j) return;
        const { icon: e, tooltip: t, tabIndex: o } = I,
          n = g(t)[0] || (null == S ? void 0 : S.edit),
          r = 'string' == typeof n ? n : '';
        return z.includes('icon')
          ? le.createElement(
              Ul,
              { key: 'edit', title: !1 === t ? '' : n },
              le.createElement(
                'button',
                {
                  type: 'button',
                  ref: k,
                  className: `${w}-edit`,
                  onClick: T,
                  'aria-label': r,
                  tabIndex: o,
                },
                e || le.createElement(ae, { role: 'button' }),
              ),
            )
          : null;
      },
      Se = (e) => [
        e && xe(),
        Ce(),
        L
          ? le.createElement(
              Bp,
              Object.assign({ key: 'copy' }, F, {
                prefixCls: w,
                copied: A,
                locale: S,
                onCopy: W,
                loading: D,
                iconOnly: null == s,
              }),
            )
          : null,
      ];
    return le.createElement(
      ue,
      {
        onResize: ({ offsetWidth: e }) => {
          he(e);
        },
        disabled: !ne,
      },
      (o) =>
        le.createElement(
          Lp,
          { tooltipProps: ve, enableEllipsis: ne, isEllipsis: me },
          le.createElement(
            Ep,
            Object.assign(
              {
                className: de(
                  {
                    [`${w}-${a}`]: a,
                    [`${w}-disabled`]: l,
                    [`${w}-ellipsis`]: J,
                    [`${w}-ellipsis-single-line`]: ge,
                    [`${w}-ellipsis-multiple-line`]: be,
                  },
                  r,
                ),
                prefixCls: n,
                style: Object.assign(Object.assign({}, i), {
                  WebkitLineClamp: be ? re : void 0,
                }),
                component: m,
                ref: c(o, O, t),
                direction: x,
                onClick: z.includes('text') ? T : void 0,
                'aria-label': null == ye ? void 0 : ye.toString(),
                title: b,
              },
              E,
            ),
            le.createElement(
              Np,
              {
                enableMeasure: ne && !se,
                text: s,
                rows: re,
                width: fe,
                onEllipsis: $e,
                expanded: te,
                miscDeps: [A, te, D, j, L, S].concat(ze(Fp.map((t) => e[t]))),
              },
              (t, o) =>
                (function (
                  {
                    mark: e,
                    code: t,
                    underline: o,
                    delete: n,
                    strong: r,
                    keyboard: i,
                    italic: a,
                  },
                  l,
                ) {
                  let s = l;
                  function c(e, t) {
                    t && (s = le.createElement(e, {}, s));
                  }
                  return (
                    c('strong', r),
                    c('u', o),
                    c('del', n),
                    c('code', t),
                    c('mark', e),
                    c('kbd', i),
                    c('i', a),
                    s
                  );
                })(
                  e,
                  le.createElement(
                    le.Fragment,
                    null,
                    t.length > 0 && o && !te && ye
                      ? le.createElement(
                          'span',
                          { key: 'show-content', 'aria-hidden': !0 },
                          t,
                        )
                      : t,
                    ((e) => [
                      e &&
                        !te &&
                        le.createElement(
                          'span',
                          { 'aria-hidden': !0, key: 'ellipsis' },
                          '...',
                        ),
                      ee.suffix,
                      Se(e),
                    ])(o),
                  ),
                ),
            ),
          ),
        ),
    );
  });
const Dp = le.forwardRef((e, t) => {
  const { ellipsis: o, rel: n, children: r, navigate: i } = e,
    a = (function (e, t) {
      var o = {};
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) &&
          t.indexOf(n) < 0 &&
          (o[n] = e[n]);
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var r = 0;
        for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
          t.indexOf(n[r]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
            (o[n[r]] = e[n[r]]);
      }
      return o;
    })(e, ['ellipsis', 'rel', 'children', 'navigate']),
    l = Object.assign(Object.assign({}, a), {
      rel: void 0 === n && '_blank' === a.target ? 'noopener noreferrer' : n,
    });
  return le.createElement(
    Ap,
    Object.assign({}, l, { ref: t, ellipsis: !!o, component: 'a' }),
    r,
  );
});
const Wp = le.forwardRef((e, t) => {
  const { children: o } = e,
    n = (function (e, t) {
      var o = {};
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) &&
          t.indexOf(n) < 0 &&
          (o[n] = e[n]);
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var r = 0;
        for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
          t.indexOf(n[r]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
            (o[n[r]] = e[n[r]]);
      }
      return o;
    })(e, ['children']);
  return le.createElement(
    Ap,
    Object.assign({ ref: t }, n, { component: 'div' }),
    o,
  );
});
const _p = (e, t) => {
    const { ellipsis: o, children: n } = e,
      r = (function (e, t) {
        var o = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (o[n] = e[n]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            t.indexOf(n[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
              (o[n[r]] = e[n[r]]);
        }
        return o;
      })(e, ['ellipsis', 'children']),
      i = le.useMemo(
        () => (o && 'object' == typeof o ? h(o, ['expandable', 'rows']) : o),
        [o],
      );
    return le.createElement(
      Ap,
      Object.assign({ ref: t }, r, { ellipsis: i, component: 'span' }),
      n,
    );
  },
  Gp = le.forwardRef(_p);
const qp = [1, 2, 3, 4, 5],
  Xp = le.forwardRef((e, t) => {
    const { level: o = 1, children: n } = e,
      r = (function (e, t) {
        var o = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (o[n] = e[n]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            t.indexOf(n[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
              (o[n[r]] = e[n[r]]);
        }
        return o;
      })(e, ['level', 'children']),
      i = qp.includes(o) ? `h${o}` : 'h1';
    return le.createElement(
      Ap,
      Object.assign({ ref: t }, r, { component: i }),
      n,
    );
  }),
  Vp = Ep;
((Vp.Text = Gp), (Vp.Link = Dp), (Vp.Title = Xp), (Vp.Paragraph = Wp));
var Kp,
  Up,
  Yp,
  Qp,
  Zp = {},
  Jp = {},
  em = {},
  tm = {};
function om() {
  if (Kp) return tm;
  ((Kp = 1),
    Object.defineProperty(tm, '__esModule', { value: !0 }),
    (tm.default = void 0));
  return (
    (tm.default = {
      placeholder: 'Hora',
      rangePlaceholder: ['Hora de início', 'Hora de término'],
    }),
    tm
  );
}
function nm() {
  if (Up) return em;
  Up = 1;
  var e = Te().default;
  (Object.defineProperty(em, '__esModule', { value: !0 }),
    (em.default = void 0));
  var t = e(ve()),
    o = e(om());
  const n = {
    lang: Object.assign(
      {
        placeholder: 'Selecionar data',
        rangePlaceholder: ['Data inicial', 'Data final'],
      },
      t.default,
    ),
    timePickerLocale: Object.assign({}, o.default),
  };
  return ((em.default = n), em);
}
function rm() {
  if (Yp) return Jp;
  Yp = 1;
  var e = Te().default;
  (Object.defineProperty(Jp, '__esModule', { value: !0 }),
    (Jp.default = void 0));
  var t = e(nm());
  return ((Jp.default = t.default), Jp);
}
function im() {
  if (Qp) return Zp;
  Qp = 1;
  var e = Te().default;
  (Object.defineProperty(Zp, '__esModule', { value: !0 }),
    (Zp.default = void 0));
  var t = e(_e()),
    o = e(rm()),
    n = e(nm()),
    r = e(om());
  const i = '${label} não é um ${type} válido',
    a = {
      locale: 'pt-br',
      Pagination: t.default,
      DatePicker: n.default,
      TimePicker: r.default,
      Calendar: o.default,
      global: { placeholder: 'Por favor escolha', close: 'Fechar' },
      Table: {
        filterTitle: 'Menu de Filtro',
        filterConfirm: 'OK',
        filterReset: 'Resetar',
        filterEmptyText: 'Sem filtros',
        filterCheckAll: 'Selecionar todos os itens',
        filterSearchPlaceholder: 'Pesquisar nos filtros',
        emptyText: 'Sem conteúdo',
        selectAll: 'Selecionar página atual',
        selectInvert: 'Inverter seleção',
        selectNone: 'Apagar todo o conteúdo',
        selectionAll: 'Selecionar todo o conteúdo',
        sortTitle: 'Ordenar título',
        expand: 'Expandir linha',
        collapse: 'Colapsar linha',
        triggerDesc: 'Clique organiza por descendente',
        triggerAsc: 'Clique organiza por ascendente',
        cancelSort: 'Clique para cancelar organização',
      },
      Tour: { Next: 'Próximo', Previous: 'Anterior', Finish: 'Finalizar' },
      Modal: { okText: 'OK', cancelText: 'Cancelar', justOkText: 'OK' },
      Popconfirm: { okText: 'OK', cancelText: 'Cancelar' },
      Transfer: {
        titles: ['', ''],
        searchPlaceholder: 'Procurar',
        itemUnit: 'item',
        itemsUnit: 'items',
        remove: 'Remover',
        selectCurrent: 'Selecionar página atual',
        removeCurrent: 'Remover página atual',
        selectAll: 'Selecionar todos',
        removeAll: 'Remover todos',
        selectInvert: 'Inverter seleção atual',
      },
      Upload: {
        uploading: 'Enviando...',
        removeFile: 'Remover arquivo',
        uploadError: 'Erro no envio',
        previewFile: 'Visualizar arquivo',
        downloadFile: 'Baixar arquivo',
      },
      Empty: { description: 'Não há dados' },
      Icon: { icon: 'ícone' },
      Text: {
        edit: 'editar',
        copy: 'copiar',
        copied: 'copiado',
        expand: 'expandir',
      },
      Form: {
        optional: '(opcional)',
        defaultValidateMessages: {
          default: 'Erro ${label} na validação de campo',
          required: 'Por favor, insira ${label}',
          enum: '${label} deve ser um dos seguinte: [${enum}]',
          whitespace: '${label} não pode ser um carácter vazio',
          date: {
            format: ' O formato de data ${label} é inválido',
            parse: '${label} não pode ser convertido para uma data',
            invalid: '${label} é uma data inválida',
          },
          types: {
            string: i,
            method: i,
            array: i,
            object: i,
            number: i,
            date: i,
            boolean: i,
            integer: i,
            float: i,
            regexp: i,
            email: i,
            url: i,
            hex: i,
          },
          string: {
            len: '${label} deve possuir ${len} caracteres',
            min: '${label} deve possuir ao menos ${min} caracteres',
            max: '${label} deve possuir no máximo ${max} caracteres',
            range: '${label} deve possuir entre ${min} e ${max} caracteres',
          },
          number: {
            len: '${label} deve ser igual à ${len}',
            min: 'O valor mínimo de ${label} é ${min}',
            max: 'O valor máximo de ${label} é ${max}',
            range: '${label} deve estar entre ${min} e ${max}',
          },
          array: {
            len: 'Deve ser ${len} ${label}',
            min: 'No mínimo ${min} ${label}',
            max: 'No máximo ${max} ${label}',
            range: 'A quantidade de ${label} deve estar entre ${min} e ${max}',
          },
          pattern: { mismatch: '${label} não se encaixa no padrão ${pattern}' },
        },
      },
      Image: { preview: 'Pré-visualização' },
    };
  return ((Zp.default = a), Zp);
}
const am = Re(im());
var lm,
  sm,
  cm,
  dm,
  um,
  pm,
  mm = {},
  gm = {},
  bm = {},
  fm = {};
function hm() {
  if (lm) return fm;
  ((lm = 1),
    Object.defineProperty(fm, '__esModule', { value: !0 }),
    (fm.default = void 0));
  return (
    (fm.default = {
      placeholder: 'Zeit auswählen',
      rangePlaceholder: ['Startzeit', 'Endzeit'],
    }),
    fm
  );
}
function $m() {
  if (sm) return bm;
  sm = 1;
  var e = Te().default;
  (Object.defineProperty(bm, '__esModule', { value: !0 }),
    (bm.default = void 0));
  var t = e(ye()),
    o = e(hm());
  const n = {
    lang: Object.assign(
      {
        placeholder: 'Datum auswählen',
        rangePlaceholder: ['Startdatum', 'Enddatum'],
        shortWeekDays: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
        shortMonths: [
          'Jan',
          'Feb',
          'Mär',
          'Apr',
          'Mai',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Okt',
          'Nov',
          'Dez',
        ],
      },
      t.default,
    ),
    timePickerLocale: Object.assign({}, o.default),
  };
  return ((bm.default = n), bm);
}
function vm() {
  if (cm) return gm;
  cm = 1;
  var e = Te().default;
  (Object.defineProperty(gm, '__esModule', { value: !0 }),
    (gm.default = void 0));
  var t = e($m());
  return ((gm.default = t.default), gm);
}
function ym() {
  if (dm) return mm;
  dm = 1;
  var e = Te().default;
  (Object.defineProperty(mm, '__esModule', { value: !0 }),
    (mm.default = void 0));
  var t = e(Ge()),
    o = e(vm()),
    n = e($m()),
    r = e(hm());
  const i = '${label} ist nicht gültig. ${type} erwartet',
    a = {
      locale: 'de',
      Pagination: t.default,
      DatePicker: n.default,
      TimePicker: r.default,
      Calendar: o.default,
      global: { placeholder: 'Bitte auswählen', close: 'Schließen' },
      Table: {
        filterTitle: 'Filter-Menü',
        filterConfirm: 'OK',
        filterReset: 'Zurücksetzen',
        filterEmptyText: 'Keine Filter',
        filterSearchPlaceholder: 'Suche in Filtern',
        filterCheckAll: 'Alle auswählen',
        selectAll: 'Selektiere Alle',
        selectInvert: 'Selektion Invertieren',
        selectionAll: 'Wählen Sie alle Daten aus',
        sortTitle: 'Sortieren',
        emptyText: 'Keine Daten',
        expand: 'Zeile erweitern',
        collapse: 'Zeile reduzieren',
        triggerDesc: 'Klicken zur absteigenden Sortierung',
        triggerAsc: 'Klicken zur aufsteigenden Sortierung',
        cancelSort: 'Klicken zum Abbrechen der Sortierung',
      },
      Tour: { Next: 'Weiter', Previous: 'Zurück', Finish: 'Fertig' },
      Modal: { okText: 'OK', cancelText: 'Abbrechen', justOkText: 'OK' },
      Popconfirm: { okText: 'OK', cancelText: 'Abbrechen' },
      Transfer: {
        titles: ['', ''],
        searchPlaceholder: 'Suchen',
        itemUnit: 'Eintrag',
        itemsUnit: 'Einträge',
        remove: 'Entfernen',
        selectCurrent: 'Alle auf aktueller Seite auswählen',
        removeCurrent: 'Auswahl auf aktueller Seite aufheben',
        selectAll: 'Alle auswählen',
        deselectAll: 'Alle abwählen',
        removeAll: 'Auswahl aufheben',
        selectInvert: 'Auswahl umkehren',
      },
      Upload: {
        uploading: 'Hochladen...',
        removeFile: 'Datei entfernen',
        uploadError: 'Fehler beim Hochladen',
        previewFile: 'Dateivorschau',
        downloadFile: 'Download-Datei',
      },
      Empty: { description: 'Keine Daten' },
      Text: {
        edit: 'Bearbeiten',
        copy: 'Kopieren',
        copied: 'Kopiert',
        expand: 'Erweitern',
      },
      Form: {
        defaultValidateMessages: {
          default: 'Feld-Validierungsfehler: ${label}',
          required: 'Bitte geben Sie ${label} an',
          enum: '${label} muss eines der folgenden sein [${enum}]',
          whitespace: '${label} darf kein Leerzeichen sein',
          date: {
            format: '${label} ist ein ungültiges Datumsformat',
            parse: '${label} kann nicht in ein Datum umgewandelt werden',
            invalid: '${label} ist ein ungültiges Datum',
          },
          types: {
            string: i,
            method: i,
            array: i,
            object: i,
            number: i,
            date: i,
            boolean: i,
            integer: i,
            float: i,
            regexp: i,
            email: i,
            url: i,
            hex: i,
          },
          string: {
            len: '${label} muss genau ${len} Zeichen lang sein',
            min: '${label} muss mindestens ${min} Zeichen lang sein',
            max: '${label} darf höchstens ${max} Zeichen lang sein',
            range: '${label} muss zwischen ${min} und ${max} Zeichen lang sein',
          },
          number: {
            len: '${label} muss gleich ${len} sein',
            min: '${label} muss mindestens ${min} sein',
            max: '${label} darf maximal ${max} sein',
            range: '${label} muss zwischen ${min} und ${max} liegen',
          },
          array: {
            len: 'Es müssen ${len} ${label} sein',
            min: 'Es müssen mindestens ${min} ${label} sein',
            max: 'Es dürfen maximal ${max} ${label} sein',
            range:
              'Die Anzahl an ${label} muss zwischen ${min} und ${max} liegen',
          },
          pattern: {
            mismatch: '${label} entspricht nicht dem ${pattern} Muster',
          },
        },
      },
      Image: { preview: 'Vorschau' },
      QRCode: { expired: 'QR-Code abgelaufen', refresh: 'Aktualisieren' },
    };
  return ((mm.default = a), mm);
}
function xm() {
  return pm ? um : ((pm = 1), (um = ym()));
}
const Cm = Re(xm());
var Sm,
  Om,
  km,
  wm,
  Em,
  jm,
  Im = {},
  Pm = {},
  Bm = {},
  zm = {};
function Mm() {
  if (Sm) return zm;
  ((Sm = 1),
    Object.defineProperty(zm, '__esModule', { value: !0 }),
    (zm.default = void 0));
  return (
    (zm.default = {
      placeholder: 'Select time',
      rangePlaceholder: ['Start time', 'End time'],
    }),
    zm
  );
}
function Hm() {
  if (Om) return Bm;
  Om = 1;
  var e = Te().default;
  (Object.defineProperty(Bm, '__esModule', { value: !0 }),
    (Bm.default = void 0));
  var t = e(xe()),
    o = e(Mm());
  const n = {
    lang: Object.assign(
      {
        placeholder: 'Select date',
        yearPlaceholder: 'Select year',
        quarterPlaceholder: 'Select quarter',
        monthPlaceholder: 'Select month',
        weekPlaceholder: 'Select week',
        rangePlaceholder: ['Start date', 'End date'],
        rangeYearPlaceholder: ['Start year', 'End year'],
        rangeQuarterPlaceholder: ['Start quarter', 'End quarter'],
        rangeMonthPlaceholder: ['Start month', 'End month'],
        rangeWeekPlaceholder: ['Start week', 'End week'],
      },
      t.default,
    ),
    timePickerLocale: Object.assign({}, o.default),
  };
  return ((Bm.default = n), Bm);
}
function Tm() {
  if (km) return Pm;
  km = 1;
  var e = Te().default;
  (Object.defineProperty(Pm, '__esModule', { value: !0 }),
    (Pm.default = void 0));
  var t = e(Hm());
  return ((Pm.default = t.default), Pm);
}
function Rm() {
  if (wm) return Im;
  wm = 1;
  var e = Te().default;
  (Object.defineProperty(Im, '__esModule', { value: !0 }),
    (Im.default = void 0));
  var t = e(qe()),
    o = e(Tm()),
    n = e(Hm()),
    r = e(Mm());
  const i = '${label} is not a valid ${type}',
    a = {
      locale: 'en',
      Pagination: t.default,
      DatePicker: n.default,
      TimePicker: r.default,
      Calendar: o.default,
      global: { placeholder: 'Please select', close: 'Close' },
      Table: {
        filterTitle: 'Filter menu',
        filterConfirm: 'OK',
        filterReset: 'Reset',
        filterEmptyText: 'No filters',
        filterCheckAll: 'Select all items',
        filterSearchPlaceholder: 'Search in filters',
        emptyText: 'No data',
        selectAll: 'Select current page',
        selectInvert: 'Invert current page',
        selectNone: 'Clear all data',
        selectionAll: 'Select all data',
        sortTitle: 'Sort',
        expand: 'Expand row',
        collapse: 'Collapse row',
        triggerDesc: 'Click to sort descending',
        triggerAsc: 'Click to sort ascending',
        cancelSort: 'Click to cancel sorting',
      },
      Tour: { Next: 'Next', Previous: 'Previous', Finish: 'Finish' },
      Modal: { okText: 'OK', cancelText: 'Cancel', justOkText: 'OK' },
      Popconfirm: { okText: 'OK', cancelText: 'Cancel' },
      Transfer: {
        titles: ['', ''],
        searchPlaceholder: 'Search here',
        itemUnit: 'item',
        itemsUnit: 'items',
        remove: 'Remove',
        selectCurrent: 'Select current page',
        removeCurrent: 'Remove current page',
        selectAll: 'Select all data',
        deselectAll: 'Deselect all data',
        removeAll: 'Remove all data',
        selectInvert: 'Invert current page',
      },
      Upload: {
        uploading: 'Uploading...',
        removeFile: 'Remove file',
        uploadError: 'Upload error',
        previewFile: 'Preview file',
        downloadFile: 'Download file',
      },
      Empty: { description: 'No data' },
      Icon: { icon: 'icon' },
      Text: {
        edit: 'Edit',
        copy: 'Copy',
        copied: 'Copied',
        expand: 'Expand',
        collapse: 'Collapse',
      },
      Form: {
        optional: '(optional)',
        defaultValidateMessages: {
          default: 'Field validation error for ${label}',
          required: 'Please enter ${label}',
          enum: '${label} must be one of [${enum}]',
          whitespace: '${label} cannot be a blank character',
          date: {
            format: '${label} date format is invalid',
            parse: '${label} cannot be converted to a date',
            invalid: '${label} is an invalid date',
          },
          types: {
            string: i,
            method: i,
            array: i,
            object: i,
            number: i,
            date: i,
            boolean: i,
            integer: i,
            float: i,
            regexp: i,
            email: i,
            url: i,
            hex: i,
          },
          string: {
            len: '${label} must be ${len} characters',
            min: '${label} must be at least ${min} characters',
            max: '${label} must be up to ${max} characters',
            range: '${label} must be between ${min}-${max} characters',
          },
          number: {
            len: '${label} must be equal to ${len}',
            min: '${label} must be minimum ${min}',
            max: '${label} must be maximum ${max}',
            range: '${label} must be between ${min}-${max}',
          },
          array: {
            len: 'Must be ${len} ${label}',
            min: 'At least ${min} ${label}',
            max: 'At most ${max} ${label}',
            range: 'The amount of ${label} must be between ${min}-${max}',
          },
          pattern: {
            mismatch: '${label} does not match the pattern ${pattern}',
          },
        },
      },
      Image: { preview: 'Preview' },
      QRCode: {
        expired: 'QR code expired',
        refresh: 'Refresh',
        scanned: 'Scanned',
      },
      ColorPicker: {
        presetEmpty: 'Empty',
        transparent: 'Transparent',
        singleColor: 'Single',
        gradientColor: 'Gradient',
      },
    };
  return ((Im.default = a), Im);
}
function Nm() {
  return jm ? Em : ((jm = 1), (Em = Rm()));
}
const Lm = Re(Nm());
var Fm,
  Am,
  Dm,
  Wm,
  _m,
  Gm,
  qm = {},
  Xm = {},
  Vm = {},
  Km = {};
function Um() {
  if (Fm) return Km;
  ((Fm = 1),
    Object.defineProperty(Km, '__esModule', { value: !0 }),
    (Km.default = void 0));
  return (
    (Km.default = {
      placeholder: 'Выберите время',
      rangePlaceholder: ['Время начала', 'Время окончания'],
    }),
    Km
  );
}
function Ym() {
  if (Am) return Vm;
  Am = 1;
  var e = Te().default;
  (Object.defineProperty(Vm, '__esModule', { value: !0 }),
    (Vm.default = void 0));
  var t = e(Ce()),
    o = e(Um());
  const n = {
    lang: Object.assign(
      {
        placeholder: 'Выберите дату',
        yearPlaceholder: 'Выберите год',
        quarterPlaceholder: 'Выберите квартал',
        monthPlaceholder: 'Выберите месяц',
        weekPlaceholder: 'Выберите неделю',
        rangePlaceholder: ['Начальная дата', 'Конечная дата'],
        rangeYearPlaceholder: ['Начальный год', 'Год окончания'],
        rangeMonthPlaceholder: ['Начальный месяц', 'Конечный месяц'],
        rangeWeekPlaceholder: ['Начальная неделя', 'Конечная неделя'],
        shortWeekDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        shortMonths: [
          'Янв',
          'Фев',
          'Мар',
          'Апр',
          'Май',
          'Июн',
          'Июл',
          'Авг',
          'Сен',
          'Окт',
          'Ноя',
          'Дек',
        ],
      },
      t.default,
    ),
    timePickerLocale: Object.assign({}, o.default),
  };
  return ((Vm.default = n), Vm);
}
function Qm() {
  if (Dm) return Xm;
  Dm = 1;
  var e = Te().default;
  (Object.defineProperty(Xm, '__esModule', { value: !0 }),
    (Xm.default = void 0));
  var t = e(Ym());
  return ((Xm.default = t.default), Xm);
}
function Zm() {
  if (Wm) return qm;
  Wm = 1;
  var e = Te().default;
  (Object.defineProperty(qm, '__esModule', { value: !0 }),
    (qm.default = void 0));
  var t = e(Xe()),
    o = e(Qm()),
    n = e(Ym()),
    r = e(Um());
  const i = '${label} не является типом ${type}',
    a = {
      locale: 'ru',
      Pagination: t.default,
      DatePicker: n.default,
      TimePicker: r.default,
      Calendar: o.default,
      global: { placeholder: 'Пожалуйста выберите', close: 'Закрыть' },
      Table: {
        filterTitle: 'Фильтр',
        filterConfirm: 'OK',
        filterReset: 'Сбросить',
        filterEmptyText: 'Без фильтров',
        filterCheckAll: 'Выбрать все элементы',
        filterSearchPlaceholder: 'Поиск в фильтрах',
        emptyText: 'Нет данных',
        selectAll: 'Выбрать всё',
        selectInvert: 'Инвертировать выбор',
        selectNone: 'Очистить все данные',
        selectionAll: 'Выбрать все данные',
        sortTitle: 'Сортировка',
        expand: 'Развернуть строку',
        collapse: 'Свернуть строку',
        triggerDesc: 'Нажмите для сортировки по убыванию',
        triggerAsc: 'Нажмите для сортировки по возрастанию',
        cancelSort: 'Нажмите, чтобы отменить сортировку',
      },
      Tour: { Next: 'Далее', Previous: 'Назад', Finish: 'Завершить' },
      Modal: { okText: 'OK', cancelText: 'Отмена', justOkText: 'OK' },
      Popconfirm: { okText: 'OK', cancelText: 'Отмена' },
      Transfer: {
        titles: ['', ''],
        searchPlaceholder: 'Поиск',
        itemUnit: 'элем.',
        itemsUnit: 'элем.',
        remove: 'Удалить',
        selectAll: 'Выбрать все данные',
        deselectAll: 'Очистить все данные',
        selectCurrent: 'Выбрать текущую страницу',
        selectInvert: 'Инвертировать выбор',
        removeAll: 'Удалить все данные',
        removeCurrent: 'Удалить текущую страницу',
      },
      Upload: {
        uploading: 'Загрузка...',
        removeFile: 'Удалить файл',
        uploadError: 'При загрузке произошла ошибка',
        previewFile: 'Предпросмотр файла',
        downloadFile: 'Загрузить файл',
      },
      Empty: { description: 'Нет данных' },
      Icon: { icon: 'иконка' },
      Text: {
        edit: 'Редактировать',
        copy: 'Копировать',
        copied: 'Скопировано',
        expand: 'Раскрыть',
        collapse: 'Свернуть',
      },
      Form: {
        optional: '(необязательно)',
        defaultValidateMessages: {
          default: 'Ошибка проверки поля ${label}',
          required: 'Пожалуйста, введите ${label}',
          enum: '${label} должен быть одним из [${enum}]',
          whitespace: '${label} не может быть пустым',
          date: {
            format: '${label} не правильный формат даты',
            parse: '${label} не может быть преобразовано в дату',
            invalid: '${label} не является корректной датой',
          },
          types: {
            string: i,
            method: i,
            array: i,
            object: i,
            number: i,
            date: i,
            boolean: i,
            integer: i,
            float: i,
            regexp: i,
            email: i,
            url: i,
            hex: i,
          },
          string: {
            len: '${label} должна быть ${len} символов',
            min: '${label} должна быть больше или равна ${min} символов',
            max: '${label} должна быть меньше или равна ${max} символов',
            range: 'Длина ${label} должна быть между ${min}-${max} символами',
          },
          number: {
            len: '${label} должна быть равна ${len}',
            min: '${label} должна быть больше или равна ${min}',
            max: '${label} должна быть меньше или равна ${max}',
            range: '${label} должна быть между ${min}-${max}',
          },
          array: {
            len: 'Количество элементов ${label} должно быть равно ${len}',
            min: 'Количество элементов ${label} должно быть больше или равно ${min}',
            max: 'Количество элементов ${label} должно быть меньше или равно ${max}',
            range:
              'Количество элементов ${label} должно быть между ${min} и ${max}',
          },
          pattern: { mismatch: '${label} не соответствует шаблону ${pattern}' },
        },
      },
      Image: { preview: 'Предпросмотр' },
      QRCode: { expired: 'QR-код устарел', refresh: 'Обновить' },
      ColorPicker: {
        presetEmpty: 'Пустой',
        transparent: 'Прозрачный',
        singleColor: 'Один цвет',
        gradientColor: 'Градиент',
      },
    };
  return ((qm.default = a), qm);
}
function Jm() {
  return Gm ? _m : ((Gm = 1), (_m = Zm()));
}
const eg = Re(Jm());
var tg,
  og,
  ng,
  rg,
  ig,
  ag,
  lg = {},
  sg = {},
  cg = {},
  dg = {};
function ug() {
  if (tg) return dg;
  ((tg = 1),
    Object.defineProperty(dg, '__esModule', { value: !0 }),
    (dg.default = void 0));
  return (
    (dg.default = {
      placeholder: 'Chọn thời gian',
      rangePlaceholder: ['Bắt đầu', 'Kết thúc'],
    }),
    dg
  );
}
function pg() {
  if (og) return cg;
  og = 1;
  var e = Te().default;
  (Object.defineProperty(cg, '__esModule', { value: !0 }),
    (cg.default = void 0));
  var t = e(Se()),
    o = e(ug());
  const n = {
    lang: Object.assign(
      {
        placeholder: 'Chọn thời điểm',
        yearPlaceholder: 'Chọn năm',
        quarterPlaceholder: 'Chọn quý',
        monthPlaceholder: 'Chọn tháng',
        weekPlaceholder: 'Chọn tuần',
        rangePlaceholder: ['Ngày bắt đầu', 'Ngày kết thúc'],
        rangeYearPlaceholder: ['Năm bắt đầu', 'Năm kết thúc'],
        rangeQuarterPlaceholder: ['Quý bắt đầu', 'Quý kết thúc'],
        rangeMonthPlaceholder: ['Tháng bắt đầu', 'Tháng kết thúc'],
        rangeWeekPlaceholder: ['Tuần bắt đầu', 'Tuần kết thúc'],
        shortMonths: [
          'Th 01',
          'Th 02',
          'Th 03',
          'Th 04',
          'Th 05',
          'Th 06',
          'Th 07',
          'Th 08',
          'Th 09',
          'Th 10',
          'Th 11',
          'Th 12',
        ],
        shortWeekDays: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
      },
      t.default,
    ),
    timePickerLocale: Object.assign({}, o.default),
  };
  return ((cg.default = n), cg);
}
function mg() {
  if (ng) return sg;
  ng = 1;
  var e = Te().default;
  (Object.defineProperty(sg, '__esModule', { value: !0 }),
    (sg.default = void 0));
  var t = e(pg());
  return ((sg.default = t.default), sg);
}
function gg() {
  if (rg) return lg;
  rg = 1;
  var e = Te().default;
  (Object.defineProperty(lg, '__esModule', { value: !0 }),
    (lg.default = void 0));
  var t = e(Ve()),
    o = e(mg()),
    n = e(pg()),
    r = e(ug());
  const i = '${label} không phải kiểu ${type} hợp lệ',
    a = {
      locale: 'vi',
      Pagination: t.default,
      DatePicker: n.default,
      TimePicker: r.default,
      Calendar: o.default,
      global: { placeholder: 'Vui lòng chọn', close: 'Đóng' },
      Table: {
        filterTitle: 'Bộ lọc',
        filterConfirm: 'Đồng ý',
        filterReset: 'Bỏ lọc',
        filterEmptyText: 'Không có bộ lọc',
        filterCheckAll: 'Chọn tất cả',
        filterSearchPlaceholder: 'Tìm kiếm bộ lọc',
        emptyText: 'Trống',
        selectAll: 'Chọn tất cả',
        selectInvert: 'Chọn ngược lại',
        selectNone: 'Bỏ chọn tất cả',
        selectionAll: 'Chọn tất cả',
        sortTitle: 'Sắp xếp',
        expand: 'Mở rộng dòng',
        collapse: 'Thu gọn dòng',
        triggerDesc: 'Nhấp để sắp xếp giảm dần',
        triggerAsc: 'Nhấp để sắp xếp tăng dần',
        cancelSort: 'Nhấp để hủy sắp xếp',
      },
      Tour: { Next: 'Tiếp', Previous: 'Trước', Finish: 'Hoàn thành' },
      Modal: { okText: 'Đồng ý', cancelText: 'Hủy', justOkText: 'OK' },
      Popconfirm: { okText: 'Đồng ý', cancelText: 'Hủy' },
      Transfer: {
        titles: ['', ''],
        searchPlaceholder: 'Tìm ở đây',
        itemUnit: 'mục',
        itemsUnit: 'mục',
        remove: 'Gỡ bỏ',
        selectCurrent: 'Chọn trang hiện tại',
        removeCurrent: 'Gỡ bỏ trang hiện tại',
        selectAll: 'Chọn tất cả',
        removeAll: 'Gỡ bỏ tất cả',
        selectInvert: 'Đảo ngược trang hiện tại',
        deselectAll: 'Bỏ chọn tất cả',
      },
      Upload: {
        uploading: 'Đang tải lên...',
        removeFile: 'Gỡ bỏ tập tin',
        uploadError: 'Lỗi tải lên',
        previewFile: 'Xem trước tập tin',
        downloadFile: 'Tải tập tin',
      },
      Empty: { description: 'Trống' },
      Icon: { icon: 'icon' },
      Text: {
        edit: 'Chỉnh sửa',
        copy: 'Sao chép',
        copied: 'Đã sao chép',
        expand: 'Mở rộng',
        collapse: 'Thu gọn',
      },
      Form: {
        optional: '(Tùy chọn)',
        defaultValidateMessages: {
          default: '${label} không đáp ứng điều kiện quy định',
          required: 'Hãy nhập thông tin cho trường ${label}',
          enum: '${label} phải có giá trị nằm trong tập [${enum}]',
          whitespace: '${label} không được chứa khoảng trắng',
          date: {
            format: '${label} sai định dạng ngày tháng',
            parse: 'Không thể chuyển ${label} sang kiểu Ngày tháng',
            invalid: '${label} không phải giá trị Ngày tháng hợp lệ',
          },
          types: {
            string: i,
            method: i,
            array: i,
            object: i,
            number: i,
            date: i,
            boolean: i,
            integer: i,
            float: i,
            regexp: i,
            email: i,
            url: i,
            hex: i,
          },
          string: {
            len: '${label} phải dài đúng ${len} ký tự',
            min: 'Độ dài tối thiểu trường ${label} là ${min} ký tự',
            max: 'Độ dài tối đa trường ${label} là ${max} ký tự',
            range: 'Độ dài trường ${label} phải từ ${min} đến ${max} ký tự',
          },
          number: {
            len: '${label} phải bằng ${len}',
            min: '${label} phải lớn hơn hoặc bằng ${min}',
            max: '${label} phải nhỏ hơn hoặc bằng ${max}',
            range: '${label} phải nằm trong khoảng ${min}-${max}',
          },
          array: {
            len: 'Mảng ${label} phải có ${len} phần tử ',
            min: 'Mảng ${label} phải chứa tối thiểu ${min} phần tử ',
            max: 'Mảng ${label} phải chứa tối đa ${max} phần tử ',
            range: 'Mảng ${label} phải chứa từ ${min}-${max} phần tử',
          },
          pattern: {
            mismatch: '${label} không thỏa mãn mẫu kiểm tra ${pattern}',
          },
        },
      },
      Image: { preview: 'Xem trước' },
      QRCode: {
        expired: 'Mã QR hết hạn',
        refresh: 'Làm mới',
        scanned: 'Đã quét',
      },
      ColorPicker: {
        presetEmpty: 'Trống',
        transparent: 'Trong suốt',
        singleColor: 'Màu đơn',
        gradientColor: 'Màu chuyển sắc',
      },
    };
  return ((lg.default = a), lg);
}
function bg() {
  return ag ? ig : ((ag = 1), (ig = gg()));
}
const fg = Re(bg());
var hg,
  $g,
  vg,
  yg,
  xg,
  Cg,
  Sg = {},
  Og = {},
  kg = {},
  wg = {};
function Eg() {
  if (hg) return wg;
  ((hg = 1),
    Object.defineProperty(wg, '__esModule', { value: !0 }),
    (wg.default = void 0));
  return (
    (wg.default = {
      placeholder: '请选择时间',
      rangePlaceholder: ['开始时间', '结束时间'],
    }),
    wg
  );
}
function jg() {
  if ($g) return kg;
  $g = 1;
  var e = Te().default;
  (Object.defineProperty(kg, '__esModule', { value: !0 }),
    (kg.default = void 0));
  var t = e(Oe()),
    o = e(Eg());
  const n = {
    lang: Object.assign(
      {
        placeholder: '请选择日期',
        yearPlaceholder: '请选择年份',
        quarterPlaceholder: '请选择季度',
        monthPlaceholder: '请选择月份',
        weekPlaceholder: '请选择周',
        rangePlaceholder: ['开始日期', '结束日期'],
        rangeYearPlaceholder: ['开始年份', '结束年份'],
        rangeMonthPlaceholder: ['开始月份', '结束月份'],
        rangeQuarterPlaceholder: ['开始季度', '结束季度'],
        rangeWeekPlaceholder: ['开始周', '结束周'],
      },
      t.default,
    ),
    timePickerLocale: Object.assign({}, o.default),
  };
  return ((n.lang.ok = '确定'), (kg.default = n), kg);
}
function Ig() {
  if (vg) return Og;
  vg = 1;
  var e = Te().default;
  (Object.defineProperty(Og, '__esModule', { value: !0 }),
    (Og.default = void 0));
  var t = e(jg());
  return ((Og.default = t.default), Og);
}
function Pg() {
  if (yg) return Sg;
  yg = 1;
  var e = Te().default;
  (Object.defineProperty(Sg, '__esModule', { value: !0 }),
    (Sg.default = void 0));
  var t = e(Ke()),
    o = e(Ig()),
    n = e(jg()),
    r = e(Eg());
  const i = '${label}不是一个有效的${type}',
    a = {
      locale: 'zh-cn',
      Pagination: t.default,
      DatePicker: n.default,
      TimePicker: r.default,
      Calendar: o.default,
      global: { placeholder: '请选择', close: '关闭' },
      Table: {
        filterTitle: '筛选',
        filterConfirm: '确定',
        filterReset: '重置',
        filterEmptyText: '无筛选项',
        filterCheckAll: '全选',
        filterSearchPlaceholder: '在筛选项中搜索',
        emptyText: '暂无数据',
        selectAll: '全选当页',
        selectInvert: '反选当页',
        selectNone: '清空所有',
        selectionAll: '全选所有',
        sortTitle: '排序',
        expand: '展开行',
        collapse: '关闭行',
        triggerDesc: '点击降序',
        triggerAsc: '点击升序',
        cancelSort: '取消排序',
      },
      Modal: { okText: '确定', cancelText: '取消', justOkText: '知道了' },
      Tour: { Next: '下一步', Previous: '上一步', Finish: '结束导览' },
      Popconfirm: { cancelText: '取消', okText: '确定' },
      Transfer: {
        titles: ['', ''],
        searchPlaceholder: '请输入搜索内容',
        itemUnit: '项',
        itemsUnit: '项',
        remove: '删除',
        selectCurrent: '全选当页',
        removeCurrent: '删除当页',
        selectAll: '全选所有',
        deselectAll: '取消全选',
        removeAll: '删除全部',
        selectInvert: '反选当页',
      },
      Upload: {
        uploading: '文件上传中',
        removeFile: '删除文件',
        uploadError: '上传错误',
        previewFile: '预览文件',
        downloadFile: '下载文件',
      },
      Empty: { description: '暂无数据' },
      Icon: { icon: '图标' },
      Text: {
        edit: '编辑',
        copy: '复制',
        copied: '复制成功',
        expand: '展开',
        collapse: '收起',
      },
      Form: {
        optional: '（可选）',
        defaultValidateMessages: {
          default: '字段验证错误${label}',
          required: '请输入${label}',
          enum: '${label}必须是其中一个[${enum}]',
          whitespace: '${label}不能为空字符',
          date: {
            format: '${label}日期格式无效',
            parse: '${label}不能转换为日期',
            invalid: '${label}是一个无效日期',
          },
          types: {
            string: i,
            method: i,
            array: i,
            object: i,
            number: i,
            date: i,
            boolean: i,
            integer: i,
            float: i,
            regexp: i,
            email: i,
            url: i,
            hex: i,
          },
          string: {
            len: '${label}须为${len}个字符',
            min: '${label}最少${min}个字符',
            max: '${label}最多${max}个字符',
            range: '${label}须在${min}-${max}字符之间',
          },
          number: {
            len: '${label}必须等于${len}',
            min: '${label}最小值为${min}',
            max: '${label}最大值为${max}',
            range: '${label}须在${min}-${max}之间',
          },
          array: {
            len: '须为${len}个${label}',
            min: '最少${min}个${label}',
            max: '最多${max}个${label}',
            range: '${label}数量须在${min}-${max}之间',
          },
          pattern: { mismatch: '${label}与模式不匹配${pattern}' },
        },
      },
      Image: { preview: '预览' },
      QRCode: { expired: '二维码过期', refresh: '点击刷新', scanned: '已扫描' },
      ColorPicker: {
        presetEmpty: '暂无',
        transparent: '无色',
        singleColor: '单色',
        gradientColor: '渐变色',
      },
    };
  return ((Sg.default = a), Sg);
}
function Bg() {
  return Cg ? xg : ((Cg = 1), (xg = Pg()));
}
const zg = Re(Bg());
var Mg,
  Hg,
  Tg,
  Rg,
  Ng,
  Lg,
  Fg = {},
  Ag = {},
  Dg = {},
  Wg = {};
function _g() {
  if (Mg) return Wg;
  ((Mg = 1),
    Object.defineProperty(Wg, '__esModule', { value: !0 }),
    (Wg.default = void 0));
  return (
    (Wg.default = {
      placeholder: '請選擇時間',
      rangePlaceholder: ['開始時間', '結束時間'],
    }),
    Wg
  );
}
function Gg() {
  if (Hg) return Dg;
  Hg = 1;
  var e = Te().default;
  (Object.defineProperty(Dg, '__esModule', { value: !0 }),
    (Dg.default = void 0));
  var t = e(ke()),
    o = e(_g());
  const n = {
    lang: Object.assign(
      {
        placeholder: '請選擇日期',
        yearPlaceholder: '請選擇年份',
        quarterPlaceholder: '請選擇季度',
        monthPlaceholder: '請選擇月份',
        weekPlaceholder: '請選擇周',
        rangePlaceholder: ['開始日期', '結束日期'],
        rangeYearPlaceholder: ['開始年份', '結束年份'],
        rangeMonthPlaceholder: ['開始月份', '結束月份'],
        rangeQuarterPlaceholder: ['開始季度', '結束季度'],
        rangeWeekPlaceholder: ['開始周', '結束周'],
      },
      t.default,
    ),
    timePickerLocale: Object.assign({}, o.default),
  };
  return ((n.lang.ok = '確 定'), (Dg.default = n), Dg);
}
function qg() {
  if (Tg) return Ag;
  Tg = 1;
  var e = Te().default;
  (Object.defineProperty(Ag, '__esModule', { value: !0 }),
    (Ag.default = void 0));
  var t = e(Gg());
  return ((Ag.default = t.default), Ag);
}
function Xg() {
  if (Rg) return Fg;
  Rg = 1;
  var e = Te().default;
  (Object.defineProperty(Fg, '__esModule', { value: !0 }),
    (Fg.default = void 0));
  var t = e(Ue()),
    o = e(qg()),
    n = e(Gg()),
    r = e(_g());
  const i = '${label}不是一個有效的${type}',
    a = {
      locale: 'zh-hk',
      Pagination: t.default,
      DatePicker: n.default,
      TimePicker: r.default,
      Calendar: o.default,
      global: { placeholder: '請選擇', close: '關閉' },
      Table: {
        filterTitle: '篩選器',
        filterConfirm: '確定',
        filterReset: '重置',
        filterEmptyText: '無篩選項',
        filterCheckAll: '全選',
        filterSearchPlaceholder: '在篩選項中搜尋',
        emptyText: '暫無數據',
        selectAll: '全部選取',
        selectInvert: '反向選取',
        selectNone: '清空所有',
        selectionAll: '全選所有',
        sortTitle: '排序',
        expand: '展開行',
        collapse: '關閉行',
        triggerDesc: '點擊降序',
        triggerAsc: '點擊升序',
        cancelSort: '取消排序',
      },
      Modal: { okText: '確定', cancelText: '取消', justOkText: '知道了' },
      Tour: { Next: '下一步', Previous: '上一步', Finish: '結束導覽' },
      Popconfirm: { okText: '確定', cancelText: '取消' },
      Transfer: {
        titles: ['', ''],
        searchPlaceholder: '搜尋資料',
        itemUnit: '項目',
        itemsUnit: '項目',
        remove: '刪除',
        selectCurrent: '全選當頁',
        removeCurrent: '刪除當頁',
        selectAll: '全選所有',
        removeAll: '刪除全部',
        selectInvert: '反選當頁',
      },
      Upload: {
        uploading: '正在上傳...',
        removeFile: '刪除檔案',
        uploadError: '上傳失敗',
        previewFile: '檔案預覽',
        downloadFile: '下载文件',
      },
      Empty: { description: '無此資料' },
      Icon: { icon: '圖標' },
      Text: {
        edit: '編輯',
        copy: '複製',
        copied: '複製成功',
        expand: '展開',
        collapse: '收起',
      },
      Form: {
        defaultValidateMessages: {
          default: '字段驗證錯誤${label}',
          required: '請輸入${label}',
          enum: '${label}必須是其中一個[${enum}]',
          whitespace: '${label}不能為空字符',
          date: {
            format: '${label}日期格式無效',
            parse: '${label}不能轉換為日期',
            invalid: '${label}是一個無效日期',
          },
          types: {
            string: i,
            method: i,
            array: i,
            object: i,
            number: i,
            date: i,
            boolean: i,
            integer: i,
            float: i,
            regexp: i,
            email: i,
            url: i,
            hex: i,
          },
          string: {
            len: '${label}須為${len}個字符',
            min: '${label}最少${min}個字符',
            max: '${label}最多${max}個字符',
            range: '${label}須在${min}-${max}字符之間',
          },
          number: {
            len: '${label}必須等於${len}',
            min: '${label}最小值為${min}',
            max: '${label}最大值為${max}',
            range: '${label}須在${min}-${max}之間',
          },
          array: {
            len: '須為${len}個${label}',
            min: '最少${min}個${label}',
            max: '最多${max}個${label}',
            range: '${label}數量須在${min}-${max}之間',
          },
          pattern: { mismatch: '${label}與模式不匹配${pattern}' },
        },
      },
      Image: { preview: '預覽' },
      QRCode: { expired: '二維碼過期', refresh: '點擊刷新', scanned: '已掃描' },
      ColorPicker: {
        presetEmpty: '暫無',
        transparent: '透明',
        singleColor: '單色',
        gradientColor: '漸變色',
      },
    };
  return ((Fg.default = a), Fg);
}
function Vg() {
  return Lg ? Ng : ((Lg = 1), (Ng = Xg()));
}
const Kg = Re(Vg());
export {
  Fa as A,
  Jr as B,
  Eo as C,
  hd as D,
  Ua as E,
  _d as I,
  Cu as L,
  Hu as M,
  Vu as P,
  np as R,
  ji as S,
  Ul as T,
  zg as a,
  $s as b,
  Vc as c,
  Cm as d,
  Lm as e,
  Vp as f,
  Rc as g,
  Hc as h,
  Dc as i,
  Bd as j,
  Gu as k,
  El as l,
  mu as m,
  Pc as n,
  up as o,
  am as p,
  eg as r,
  Bu as s,
  fp as t,
  fg as v,
  Kg as z,
};
//# sourceMappingURL=antd-B0kpwJle.js.map
