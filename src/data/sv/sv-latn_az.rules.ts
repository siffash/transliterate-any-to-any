export const svLatnAzRules = `
::Null;

[^aeiouyæøåAEIOUYÆØÅ] { o } [bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ] [aeiouyæøåAEIOUYÆØÅ] > u;
[^aeiouyæøåAEIOUYÆØÅ] { O } [bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ] [aeiouyæøåAEIOUYÆØÅ] > U;

[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ]+ { o } [^[:L:][:M:]] > u;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ]+ { O } [^[:L:][:M:]] > U;
`;
