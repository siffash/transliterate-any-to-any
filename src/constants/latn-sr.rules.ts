export const latnSrRules = `
::Null;

TS > C;
Ts > C;
tS > c;
ts > c;

[:Upper:] { Ń > NJ;
Ń } [:Upper:] > NJ;
Ń > Nj;
ń > nj;

[:Upper:] { Ľ > LJ;
Ľ } [:Upper:] > LJ;
Ľ > Lj;
ľ > lj;

X > H;
x > h;

Y > J;
y > j;

Q > K;
q > k;

Ä > E;
ä > e;

Ö > E;
ö > e;

Ü > I;
ü > i;

Ï > I;
ï > i;

Ÿ > I;
ÿ > i;
`;
