export const noSvLatnLtRules = `
::Null;

[^aeiouyæøåAEIOUYÆØÅ] { o } [bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ] [aeiouyæøåüAEIOUYÆØÅÜ] > u;
[^aeiouyæøåAEIOUYÆØÅ] { O } [bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ] [aeiouyæøåüAEIOUYÆØÅÜ] > U;

[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ]+ { o } [^[:L:][:M:]] > u;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ]+ { O } [^[:L:][:M:]] > U;

[bcdfghjklmnpqrstvwxz] { ø } [^[:L:][:M:]] > ė;
[BCDFGHJKLMNPQRSTVWXZ] { Ø } [^[:L:][:M:]] > Ė;
`;
