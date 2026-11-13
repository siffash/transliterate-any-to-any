export const deLatnEiRestoreRules = `
::Null;

Ɛ > E;
ɛ > e;

[aeAE] { Y } [^aeiouäöüyAEIOUÄÖÜY] > I;
[aeAE] { y } [^aeiouäöüyAEIOUÄÖÜY] > i;
`;
