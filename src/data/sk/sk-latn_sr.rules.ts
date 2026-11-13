export const skLatnSrRules = `
::NFC;

D { E > JE;
[dD] { E } [:Lu:] > JE;
[dD] { E > Je;
[dD] { e > je;

D { É > JÉ;
[dD] { É } [:Lu:] > JÉ;
[dD] { É > Jé;
[dD] { é > jé;

T { E > JE;
[tT] { E } [:Lu:] > JE;
[tT] { E > Je;
[tT] { e > je;

L } [eéEÉ] > Ľ;
l } [eéEÉ] > ľ;

N } [eéiíEÉIÍ] > Ň;
n } [eéiíEÉIÍ] > ň;

[[:L:]-[aeiouyáéíóúýäôAEIOUYÁÉÍÓÚÝÄÔ]] { I } [aeuAEU] > J;
[[:L:]-[aeiouyáéíóúýäôAEIOUYÁÉÍÓÚÝÄÔ]] { i } [aeuAEU] > j;
`;
