export const skLatnSrRules = `
::NFC;

D { E > JE;
d { E } [:Lu:] > JE;
d { E > Je;
[dDtT] { e > je;

D { É > JÉ;
d { É } [:Lu:] > JÉ;
d { É > Jé;
[dD] { é > jé;

T { E > JE;
t { E } [:Lu:] > JE;
t { E > Je;

L } [eéEÉ] > Ľ;
l } [eéEÉ] > ľ;

N } [eéiíEÉIÍ] > Ň;
n } [eéiíEÉIÍ] > ň;

[[:L:]-[aeiouyáéíóúýäôAEIOUYÁÉÍÓÚÝÄÔ]] { I } [aeuAEU] > J;
[[:L:]-[aeiouyáéíóúýäôAEIOUYÁÉÍÓÚÝÄÔ]] { i } [aeuAEU] > j;
`;
