function n(n,r){const t=Number.parseInt(n,r);return t<9||11===t||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||!(65535&~t)||65534==(65535&t)||t>1114111?"�":String.fromCodePoint(t)}export{n as d};
//# sourceMappingURL=micromark-util-decode-numeric-character-reference-DA7xEauU.js.map
