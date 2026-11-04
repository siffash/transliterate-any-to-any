export const sqLatnFinalERules = `
::NFC;

ë } [^[:L:][:M:][:P:]]* [\\-]? [^[:L:][:M:][:P:]]* [[:L:]] > ë;
Ë } [^[:L:][:M:][:P:]]* [\\-]? [^[:L:][:M:][:P:]]* [[:L:]] > Ë;
[aeiouyëAEIOUYË] [bcçdfghjklmnpqrstvxzBCÇDFGHJKLMNPQRSTVXZ]* { ë } [^[:L:][:M:]’] > a;
[aeiouyëAEIOUYË] [bcçdfghjklmnpqrstvxzBCÇDFGHJKLMNPQRSTVXZ]* { Ë } [^[:L:][:M:]’] > A;
`;
