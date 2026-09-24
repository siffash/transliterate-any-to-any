export const slLatnRules = `
::NFC;

N [jJ] > Ń;
n [jJ] > ń;

L [jJ] > Ľ;
l [jJ] > ľ;

[:Lu:] { C > TS;
C } [:Lu:] > TS;
C > Ts;
c > ts;

H > X;
h > x;

J > Y;
j > y;
`;
