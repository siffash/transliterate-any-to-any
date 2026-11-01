export const deLatnUkHRules = `
::NFC;

[fF] [gG] { h > h;
[fF] [gG] { H > H;
[gGkK] { h } [aeiouäöüyAEIOUÄÖÜY] > г;
[gGkK] { H } [aeiouäöüyAEIOUÄÖÜY] > Г;

[:L:] [tT] { h } [aA] [uU] [sS] > г;
[:L:] [tT] { H } [aA] [uU] [sS] > Г;
[:L:] [tT] { h } [oO] [fF] > г;
[:L:] [tT] { H } [oO] [fF] > Г;
[:L:] [tT] { h } [eE] [iI] [mM] > г;
[:L:] [tT] { H } [eE] [iI] [mM] > Г;
[:L:] [tT] { h } [oO] [vV] [eE] [nN] > г;
[:L:] [tT] { H } [oO] [vV] [eE] [nN] > Г;
[:L:] [tT] { h } [aA] [nN] [sS] [aA] > г;
[:L:] [tT] { H } [aA] [nN] [sS] [aA] > Г;
[:L:] [tT] { h } [aA] [gG] [eE] [nN] > г;
[:L:] [tT] { H } [aA] [gG] [eE] [nN] > Г;
[:L:] [tT] { h } [eE] [lL] [mM] > г;
[:L:] [tT] { H } [eE] [lL] [mM] > Г;
[:L:] [tT] { h } [aA] [rR] [dDtT] > г;
[:L:] [tT] { H } [aA] [rR] [dDtT] > Г;
[tT] [tT] { h } [oO] [lL] [dD] > г;
[tT] [tT] { H } [oO] [lL] [dD] > Г;
[tT] [tT] { h } [eEiI] [lL] [fF] > г;
[tT] [tT] { H } [eEiI] [lL] [fF] > Г;
`;
