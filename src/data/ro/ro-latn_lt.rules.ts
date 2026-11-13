export const roLatnLtRules = `
::NFC;

ă > e;
Ă > E;

[^cgCG] { ea } [:L:] > ia;
[^cgCG] { Ea } [:L:] > Ia;
[^cgCG] { eA } [:L:] > iA;
[^cgCG] { EA } [:L:] > IA;
`;
