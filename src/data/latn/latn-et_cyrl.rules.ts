export const latnEtCyrlRules = `
::Null;

[Nn] [Oo] [Vv] [Oo] { S } [AEIOUÏ] > S;
[Nn] [Oo] [Vv] [Oo] { s } [AaEeIiOoUuÏï] > s;
[Aa] [Ss] [Nn] [Oo] { S } [AEIOUÏ] > S;
[Aa] [Ss] [Nn] [Oo] { s } [AaEeIiOoUuÏï] > s;

[AaEeIiOoUuÏï] { S } [AaEeIiOoUuÏï] > SS;
[AaEeIiOoUuÏï] { s } [AaEeIiOoUuÏï] > ss;

[AEIOUÏ] { S } [^[:L:][:M:]] > SS;
[aeiouï] { S } [^[:L:][:M:]] > sS;
[AEIOUÏ] { s } [^[:L:][:M:]] > Ss;
[aeiouï] { s } [^[:L:][:M:]] > ss;

[Ii] { Y } [AaEeIiOoUu] > Ɉ;
[Ii] { y } [AaEeIiOoUu] > ɉ;
`;
