export const noSvLatnLvRules = `
::Null;

[^aeiouyæøåAEIOUYÆØÅ] { o } [bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ] [aeiouyæøåAEIOUYÆØÅ] > ū;
[^aeiouyæøåAEIOUYÆØÅ] { O } [bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ] [aeiouyæøåAEIOUYÆØÅ] > Ū;

[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ]+ { o } [^[:L:][:M:]] > ū;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ]+ { O } [^[:L:][:M:]] > Ū;
`;
