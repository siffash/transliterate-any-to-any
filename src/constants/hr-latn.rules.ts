export const hrLatnRules = `
LJ > Ľ;
Lj > Ľ;
lj > ľ;

NJ > Ń;
Nj > Ń;
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
