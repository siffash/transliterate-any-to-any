export const hrLatnRules = `
::NFC;

LJ > Ľ;
Lj > Ľ;
lJ > Ľ;
lj > ľ;

NJ > Ń;
Nj > Ń;
nJ > Ń;
nj > ń;

C } [:Upper:] > TS;
[:Upper:] { C } [:^Letter:] > TS;
C > Ts;
c > ts;

H > X;
h > x;

J > Y;
j > y;
`;
