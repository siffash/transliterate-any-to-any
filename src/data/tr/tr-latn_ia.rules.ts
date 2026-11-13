export const trLatnIaRules = `
::Null;

[^aeiouıöüəAEIOUIİÖÜƏ[^[:L:][:M:]]] { y } [aA] [^[:L:][:M:]] > i;
[^aeiouıöüəAEIOUIİÖÜƏ[^[:L:][:M:]]] { Y } [aA] [^[:L:][:M:]] > I;
`;
