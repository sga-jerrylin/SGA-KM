function n(n){return"children"in n?t(n):"value"in n?n.value:""}function e(n){return"text"===n.type?n.value:"children"in n?t(n):""}function t(n){let t=-1;const r=[];for(;++t<n.children.length;)r[t]=e(n.children[t]);return r.join("")}export{n as t};
//# sourceMappingURL=hast-util-to-string-C8D5Qmjx.js.map
