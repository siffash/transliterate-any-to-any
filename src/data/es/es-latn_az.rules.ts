export const esLatnAzRules = `
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
