export const esLatnLvRules = `
::Null;

[bcdfgklmnprstvxzčšžBCDFGKLMNPRSTVXZČŠŽ] { i } [aA] [^[:L:][:M:]] > i;
[bcdfgklmnprstvxzčšžBCDFGKLMNPRSTVXZČŠŽ] { I } [aA] [^[:L:][:M:]] > I;

[bcdfgklmnprstvxzčšžBCDFGKLMNPRSTVXZČŠŽ] { i } [aeoAEO] > y;
[bcdfgklmnprstvxzčšžBCDFGKLMNPRSTVXZČŠŽ] { I } [aeoAEO] > Y;

Ľ } [AEIOUƗ] > LY;
Ľ } [aeiouɨ] > Ly;
ľ } [aeiouɨAEIOUƗ] > ly;

Ľ > L;
ľ > l;

[:Lu:] { Ń > NY;
Ń } [:Lu:] > NY;
Ń > Ny;
ń > ny;
`;
