export const hrLatnRules = `
::NFC;

J } [aeiouAEIOU] > Y;
j } [aeiouAEIOU] > y;

::Null;

LJ > Ľ;
Lj > Ľ;
lJ > Ľ;
lj > ľ;

NJ > Ń;
Nj > Ń;
nJ > Ń;
nj > ń;

C } [:Lu:] > TS;
[:Lu:] { C } [:^Letter:] > TS;
C > Ts;
c > ts;

H > X;
h > x;

J > Y;
j > y;
`;
