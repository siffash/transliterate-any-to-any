export const ptLatnReductionRules = `
::Null;

ÃO > AN;
Ão > An;
ãO > aN;
ão > an;

[:L:] { o } [^[:L:][:M:]] > u;
[:L:] { O } [^[:L:][:M:]] > U;

[:L:] { o } [sS] [^[:L:][:M:]] > u;
[:L:] { O } [sS] [^[:L:][:M:]] > U;
`;
