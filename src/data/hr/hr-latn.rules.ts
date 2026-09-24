export const hrLatnRules = `
::NFC;

J } [aeiouAEIOU] > Y;
j } [aeiouAEIOU] > y;

::Null;

L [jJ] > Ľ;
l [jJ] > ľ;

N [jJ] > Ń;
n [jJ] > ń;

[:Lu:] { C > TS;
C } [:Lu:] > TS;
C > Ts;
c > ts;

H > X;
h > x;

J > Y;
j > y;
`;
