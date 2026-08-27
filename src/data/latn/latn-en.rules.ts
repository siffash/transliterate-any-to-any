export const latnEnRules = `
::Null;

DŽ > J;
Dž > J;
dŽ > j;
dž > j;

Đ > J;
đ > j;

IJ } [:^Letter:] > AY;
Ij } [:^Letter:] > Ay;
iJ } [:^Letter:] > aY;
ij } [:^Letter:] > ay;
IJ > EY;
Ij > Ey;
iJ > eY;
ij > ey;

::Null;

Ä > A;
ä > a;
Ï > I;
ï > i;
Ö > O;
ö > o;
[ÜŸ] > U;
[üÿ] > u;

[:Lu:] { Ć > CH;
Ć } [:Lu:] > CH;
Ć > Ch;
ć > ch;

Ľ } [AOU] > LY;
Ľ } [aou] > Ly;
ľ } [AOU] > lY;
ľ } [aou] > ly;
Ľ > L;
ľ > l;

Ń } [AOU] > NY;
Ń } [aou] > Ny;
ń } [AOU] > nY;
ń } [aou] > ny;
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

S { X > KH;
[sS] { X } [:Lu:] > KH;
[sS] { X > Kh;
[sS] { x > kh;
X > H;
x > h;

KS > X;
Ks > X;
kS > x;
ks > x;

[:^Letter:] { \\' > ;
\\' } [:^Letter:] > ;
· > ;

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
