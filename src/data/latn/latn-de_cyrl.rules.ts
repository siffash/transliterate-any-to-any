export const latnDeCyrlRules = `
::Null;

[Nn] [Oo] [Vv] [Oo] { S } [AaEeIiOoUuÏï] > Ꞅ;
[Nn] [Oo] [Vv] [Oo] { s } [AaEeIiOoUuÏï] > ꞅ;
[Aa] [Ss] [Nn] [Oo] { S } [AaEeIiOoUuÏï] > Ꞅ;
[Aa] [Ss] [Nn] [Oo] { s } [AaEeIiOoUuÏï] > ꞅ;

Ï { S } [AaEeIiOoUuÏï] > SS;
ï { S } [AEIOUÏ] > SS;
ï { S } [aeiouï] > Ss;
[Ïï] { s } [AaEeIiOoUuÏï] > ss;
`;
