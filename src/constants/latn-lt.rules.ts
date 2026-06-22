export const latnLtRules = `
::Null;

$upper = [:Upper:];
$boundary = [:^Letter:];

TS > C;
Ts > C;
tS > c;
ts > c;

$boundary { Ö } $upper > JO;
$boundary { Ö > Jo;
$boundary { ö > jo;

$upper { Ö > IO;
Ö } $upper > IO;
Ö > Io;
ö > io;

$boundary { Ü } $upper > JU;
$boundary { Ü > Ju;
$boundary { ü > ju;

$upper { Ü > IU;
Ü } $upper > IU;
Ü > Iu;
ü > iu;

$upper { Đ > DŽ;
Đ } $upper > DŽ;
Đ > Dž;
đ > dž;

$upper { X > CH;
X } $upper > CH;
X > Ch;
x > ch;

Ć > Č;
ć > č;
Ń > N;
ń > n;
Ľ > L;
ľ > l;
Ä > E;
ä > e;
Ï > Y;
ï > y;
Ÿ > I;
ÿ > i;
Q > K;
q > k;
W > V;
w > v;
Y > J;
y > j;
`;
