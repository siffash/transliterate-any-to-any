export const slLatnRules = `
::NFC;

NJ > Ń;
Nj > Ń;
nj > ń;

LJ > Ľ;
Lj > Ľ;
lj > ľ;

[:Lu:] { C > TS;
C } [:Lu:] > TS;
C > Ts;
c > ts;

H > X;
h > x;

J > Y;
j > y;
`;
