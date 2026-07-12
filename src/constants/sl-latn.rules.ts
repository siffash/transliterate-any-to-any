export const slLatnRules = `
::NFC;

NJ > Ń;
Nj > Ń;
nj > ń;

LJ > Ľ;
Lj > Ľ;
lj > ľ;

[:Upper:] { C > TS;
C } [:Upper:] > TS;
C > Ts;
c > ts;

H > X;
h > x;

J > Y;
j > y;
`;
