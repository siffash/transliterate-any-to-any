export const nlLatnCyrlRules = `
::Null;

[aA] { [aA] > ;
[eE] { [eE] > ;
[oO] { [oO] > ;
[bB] { ÿ } [rR] [ɣƔ] [^[:L:][:M:]] > u;
[bB] { Ÿ } [rR] [ɣƔ] [^[:L:][:M:]] > U;
`;
