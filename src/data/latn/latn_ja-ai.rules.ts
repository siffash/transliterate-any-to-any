export const latnJaAiRules = `
::Null;

[aeouAEOU] { j } [^aeiouAEIOU] > i;
[aeouAEOU] { J } [^aeiouAEIOU] > I;
[aeouAEOU] { j } [^[:L:][:M:]] > i;
[aeouAEOU] { J } [^[:L:][:M:]] > I;
`;
