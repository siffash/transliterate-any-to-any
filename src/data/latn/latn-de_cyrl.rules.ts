export const latnDeCyrlRules = `
::Null;

[Nn] [Oo] [Vv] [Oo] { S } [AaEeIiOoUuÏï] > Ꞅ;
[Nn] [Oo] [Vv] [Oo] { s } [AaEeIiOoUuÏï] > ꞅ;
[Aa] [Ss] [Nn] [Oo] { S } [AaEeIiOoUuÏï] > Ꞅ;
[Aa] [Ss] [Nn] [Oo] { s } [AaEeIiOoUuÏï] > ꞅ;

Ï { S } [AaEeIiOoUuÏï] > SS;
[Ïï] { S } [AEIOUÏ] > SS;
[Ïï] { S } [AaEeIiOoUuÏï] > Ss;
[Ïï] { s } [AaEeIiOoUuÏï] > ss;
`;
