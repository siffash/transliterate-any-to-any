export const sqLatnLRules = `
::Null;

[aeiouyëçbcdfghjkmnpqstvxzAEIOUYËÇBCDFGHJKMNPQSTVXZ[:M:]] { l } [^[:L:][:M:]’] > ľ;
[aeiouyëçbcdfghjkmnpqstvxzAEIOUYËÇBCDFGHJKMNPQSTVXZ] { L } [^[:L:][:M:]’] > Ľ;
[aeiouyëçbcdfghjkmnpqstvxzAEIOUYËÇBCDFGHJKMNPQSTVXZ[:M:]] { l } [bcçdfghkmnpqstvxzBCÇDFGHKMNPQSTVXZ] > ľ;
[aeiouyëçbcdfghjkmnpqstvxzAEIOUYËÇBCDFGHJKMNPQSTVXZ] { L } [BCÇDFGHKMNPQSTVXZ] > Ľ;
`;
