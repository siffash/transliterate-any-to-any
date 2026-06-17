export const hrLatnRules = `
$boundary = [:^Letter:];
$upper = [:Lu:];

LJ > Ľ;
Lj > Ľ;
lj > ľ;

NJ > Ń;
Nj > Ń;
nj > ń;

C } $upper > TS;
$upper { C } $boundary > TS;
C > Ts;
c > ts;

H > X;
h > x;

J > Y;
j > y;
`;
