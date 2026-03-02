import { c as a, a as l, S as r } from '../../entry/js/index-DO2-PIoQ.js';
import { a as i, C as o } from './card-Doa30pA9.js';
import { a as m, C as n } from './confirm-delete-dialog-BaRkfMsN.js';
import { t as c } from './i18next-DnPY2Eh-.js';
import { aY as d } from './lucide-react-B0vpjdIH.js';
import { r as s, j as t } from './react-Clxusn8M.js';
import { J as e } from './utils-Czs-Tae-.js';
function j() {
  const [t, a] = s.useState({}),
    r = s.useCallback(() => {
      a({});
    }, []),
    l = s.useMemo(() => Object.keys(t).length, [t]);
  return {
    rowSelection: t,
    setRowSelection: a,
    rowSelectionIsEmpty: e.isEmpty(t),
    clearRowSelection: r,
    selectedCount: l,
  };
}
function u(e, t) {
  return {
    selectedIds: s.useMemo(() => {
      const s = Object.keys(e);
      return t
        .filter((e, t) => s.some((e) => Number(e) === t))
        .map((e) => e.id);
    }, [t, e]),
  };
}
function x({ list: e, count: j, className: u }) {
  const x = s.useCallback((e) => 'delete' === e, []);
  return t.jsx(o, {
    className: a('mb-4', u),
    children: t.jsxs(i, {
      className: 'p-1 pl-5 flex items-center gap-6',
      children: [
        t.jsxs('section', {
          className: 'text-text-sub-title-invert flex items-center gap-2',
          children: [
            t.jsxs('span', { children: ['Selected: ', j, ' Files'] }),
            t.jsx(d, { className: 'size-3' }),
          ],
        }),
        t.jsx(r, { orientation: 'vertical', className: 'h-3' }),
        t.jsx('ul', {
          className: 'flex gap-2',
          children: e.map((e) =>
            t.jsx(
              'li',
              {
                className: a({ 'text-state-error': x(e.id) }),
                children: t.jsx(n, {
                  hidden: !x(e.id),
                  onOk: e.onClick,
                  title: c('deleteModal.delFiles'),
                  content: {
                    title: c('common.deleteThem'),
                    node: t.jsx(m, {
                      name: `${c('deleteModal.delFilesContent', { count: j })}`,
                    }),
                  },
                  children: t.jsxs(l, {
                    variant: x(e.id) ? 'delete' : 'ghost',
                    onClick: x(e.id) ? () => {} : e.onClick,
                    className: a({
                      'text-state-error border border-state-error bg-state-error/5':
                        x(e.id),
                    }),
                    children: [e.icon, ' ', e.label],
                  }),
                }),
              },
              e.id,
            ),
          ),
        }),
      ],
    }),
  });
}
export { j as a, x as B, u };
//# sourceMappingURL=bulk-operate-bar-Bavsx9F_.js.map
