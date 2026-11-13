export const ptLatnSaoRules = `
::NFC;

[^[:L:][:M:]] { São } [^[:L:][:M:]] > San;
[^[:L:][:M:]] { SÃO } [^[:L:][:M:]] > SAN;
[^[:L:][:M:]] { são } [^[:L:][:M:]] > san;
`;
