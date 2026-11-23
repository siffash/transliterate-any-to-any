export const esLatnAzRules = `
::Null;

[gG] { w > u;
[gG] { W > U;

::Null;

[bcdfgklmnprstvxzčšžBCDFGKLMNPRSTVXZČŠŽ] { i } [aA] [^[:L:][:M:]] > i;
[bcdfgklmnprstvxzčšžBCDFGKLMNPRSTVXZČŠŽ] { I } [aA] [^[:L:][:M:]] > I;

[bcdfgklmnprstvxzčšžBCDFGKLMNPRSTVXZČŠŽ] { i } [aeAE] > y;
[bcdfgklmnprstvxzčšžBCDFGKLMNPRSTVXZČŠŽ] { I } [aeAE] > Y;

[:Lu:] { Ń > NY;
Ń } [:Lu:] > NY;
Ń > Ny;
ń > ny;
`;
