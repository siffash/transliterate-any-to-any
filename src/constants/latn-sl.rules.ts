export const latnSlRules = `
::Null;

$boundary = [:^Letter:];
$upper = [A-ZÄÏÖÜŸĆČĐĽŃŠŽ];

TS > C;
Ts > C;
ts > c;

$upper { Đ } $boundary > DŽ;
Đ } $upper > DŽ;
Đ > Dž;
đ > dž;

$upper { Ľ } $boundary > LJ;
Ľ } $upper > LJ;
Ľ > Lj;
ľ > lj;

$upper { Ń } $boundary > NJ;
Ń } $upper > NJ;
Ń > Nj;
ń > nj;

Ć > Č;
ć > č;

Q > K;
q > k;

W > V;
w > v;

X > H;
x > h;

Y > J;
y > j;

Ä > E;
ä > e;

Ï > I;
ï > i;

Ö > E;
ö > e;

Ü > I;
ü > i;

Ÿ > J;
ÿ > j;
`;
