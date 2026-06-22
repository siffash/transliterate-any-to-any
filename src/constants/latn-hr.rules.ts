export const latnHrRules = `
::Null;

$boundary = [:^Letter:];

TS > C;
Ts > C;
tS > C;
ts > c;
Ľ } [:Upper:] > LJ;
[:Upper:] { Ľ } $boundary > LJ;
Ľ > Lj;
ľ > lj;
Ń } [:Upper:] > NJ;
[:Upper:] { Ń } $boundary > NJ;
Ń > Nj;
ń > nj;
W > V;
w > v;
X > H;
x > h;
Y > J;
y > j;
Q > K;
q > k;
Ä > E;
ä > e;
Ï > I;
ï > i;
Ö > O;
ö > o;
Ü > U;
ü > u;
Ÿ > I;
ÿ > i;
`;
