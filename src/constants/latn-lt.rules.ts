export const latnLtRules = `
::Null;

TS > C;
Ts > C;
tS > c;
ts > c;

[:^Letter:] { Ö } [:Upper:] > JO;
[:^Letter:] { Ö > Jo;
[:^Letter:] { ö > jo;

[:Upper:] { Ö > IO;
Ö } [:Upper:] > IO;
Ö > Io;
ö > io;

[:^Letter:] { Ü } [:Upper:] > JU;
[:^Letter:] { Ü > Ju;
[:^Letter:] { ü > ju;

[:Upper:] { Ü > IU;
Ü } [:Upper:] > IU;
Ü > Iu;
ü > iu;

[:Upper:] { Đ > DŽ;
Đ } [:Upper:] > DŽ;
Đ > Dž;
đ > dž;

[:Upper:] { X > CH;
X } [:Upper:] > CH;
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
