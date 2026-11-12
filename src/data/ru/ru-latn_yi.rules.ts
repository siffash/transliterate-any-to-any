export const ruLatnYiRules = `
::Null;

[Ïï] { Y } [^[:L:][:M:]] > I;
[Ïï] { y } [^[:L:][:M:]] > i;

[Ii] { Y } [bcdfghklmnprstvxzBCDFGHKLMNPRSTVXZ] > Ɉ;
[Ii] { y } [bcdfghklmnprstvxzBCDFGHKLMNPRSTVXZ] > ɉ;
`;
