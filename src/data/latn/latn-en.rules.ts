export const latnEnRules = `
::Null;

DŽ > J;
Dž > J;
dŽ > j;
dž > j;

Đ > J;
đ > j;

DZ > Z;
Dz > Z;
dZ > z;
dz > z;

IJ } [:^Letter:] > AY;
Ij } [:^Letter:] > Ay;
iJ } [:^Letter:] > aY;
ij } [:^Letter:] > ay;
IJ > EI;
Ij > Ei;
iJ > eI;
ij > ei;

::Null;

Ä > A;
ä > a;
Ï > I;
ï > i;
Ö > O;
ö > o;
Ü > U;
ü > u;
Ÿ > Y;
ÿ > y;

Ć > C;
ć > c;
Ľ > L;
ľ > l;
Ń > N;
ń > n;

[:Lu:] { Č > CH;
Č } [:Lu:] > CH;
Č > Ch;
č > ch;

[:Lu:] { Š > SH;
Š } [:Lu:] > SH;
Š > Sh;
š > sh;

[:Lu:] { Ž > ZH;
Ž } [:Lu:] > ZH;
Ž > Zh;
ž > zh;

X > H;
x > h;

['·] > ;

::Null;

[wW] { [wW] > ;
[yY] { [yY] > ;
[hH] { [hH] > ;
[iI] { [iIyY] } [:^Letter:] > ;
[yY] { [iIyY] } [:^Letter:] > ;
[:^Letter:] { [cC] } [kK] > ;

::Null;

[kK] { [kK] } [hH] > ;
[gG] { [gG] } [hH] > ;
`;
