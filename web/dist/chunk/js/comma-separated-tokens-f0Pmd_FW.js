function t(t){const n=[],e=String(t||"");let i=e.indexOf(","),r=0,o=!1;for(;!o;){-1===i&&(i=e.length,o=!0);const t=e.slice(r,i).trim();!t&&o||n.push(t),r=i+1,i=e.indexOf(",",r)}return n}function n(t,n){const e=n||{};return(""===t[t.length-1]?[...t,""]:t).join((e.padRight?" ":"")+","+(!1===e.padLeft?"":" ")).trim()}export{t as p,n as s};
//# sourceMappingURL=comma-separated-tokens-f0Pmd_FW.js.map
