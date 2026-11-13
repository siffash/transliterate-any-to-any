export const latnSqErRules = `
::Null;

[^aeiouAEIOU[^[:L:][:M:]]] { r } [^aeiouAEIOU[^[:L:][:M:]]] > ër;
[^aeiouAEIOU[^[:L:][:M:]]] { R } [^aeiouAEIOU[^[:L:][:M:]]] > ËR;
[^[:L:][:M:]] { r } [^aeiouAEIOU[^[:L:][:M:]]] > ër;
[^[:L:][:M:]] { R } [BCČĆDĐFGHJKLMNPSŠTVZŽ] > ËR;
[^[:L:][:M:]] { R } [^aeiouAEIOU[^[:L:][:M:]]] > Ër;
`;
