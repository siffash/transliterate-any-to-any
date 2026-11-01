export const deLatnRuHRules = `
::NFC;

[fF] [gG] { h > h;
[fF] [gG] { H > H;
[gGkK] { h } [aeiouäöüyAEIOUÄÖÜY] > х;
[gGkK] { H } [aeiouäöüyAEIOUÄÖÜY] > Х;

[:L:] [tT] { h } [aA] [uU] [sS] > х;
[:L:] [tT] { H } [aA] [uU] [sS] > Х;
[:L:] [tT] { h } [oO] [fF] > х;
[:L:] [tT] { H } [oO] [fF] > Х;
[:L:] [tT] { h } [eE] [iI] [mM] > х;
[:L:] [tT] { H } [eE] [iI] [mM] > Х;
[:L:] [tT] { h } [oO] [vV] [eE] [nN] > х;
[:L:] [tT] { H } [oO] [vV] [eE] [nN] > Х;
[:L:] [tT] { h } [aA] [nN] [sS] [aA] > х;
[:L:] [tT] { H } [aA] [nN] [sS] [aA] > Х;
[:L:] [tT] { h } [aA] [gG] [eE] [nN] > х;
[:L:] [tT] { H } [aA] [gG] [eE] [nN] > Х;
[:L:] [tT] { h } [eE] [lL] [mM] > х;
[:L:] [tT] { H } [eE] [lL] [mM] > Х;
[:L:] [tT] { h } [aA] [rR] [dDtT] > х;
[:L:] [tT] { H } [aA] [rR] [dDtT] > Х;
[tT] [tT] { h } [oO] [lL] [dD] > х;
[tT] [tT] { H } [oO] [lL] [dD] > Х;
[tT] [tT] { h } [eEiI] [lL] [fF] > х;
[tT] [tT] { H } [eEiI] [lL] [fF] > Х;
`;
