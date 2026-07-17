export const latnEnRules = `
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

DŽ > J;
Dž > J;
dŽ > j;
dž > j;

DZ > Z;
Dz > Z;
dZ > z;
dz > z;

[:Upper:] { Č > CH;
Č } [:Upper:] > CH;
Č > Ch;
č > ch;

[:Upper:] { Đ > DJ;
Đ } [:Upper:] > DJ;
Đ > Dj;
đ > dj;

[:Upper:] { Š > SH;
Š } [:Upper:] > SH;
Š > Sh;
š > sh;

[:Upper:] { Ž > ZH;
Ž } [:Upper:] > ZH;
Ž > Zh;
ž > zh;

[AaÄäEeIiÏïOoÖöUuÜüŸÿ] { X } [AaÄäEeIiÏïOoÖöUuÜüŸÿ] > H;
[AaÄäEeIiÏïOoÖöUuÜüŸÿ] { x } [AaÄäEeIiÏïOoÖöUuÜüŸÿ] > h;
[:Upper:] { X > KH;
X } [:Upper:] > KH;
X > Kh;
x > kh;

IJ } [:^Letter:] > AY;
Ij } [:^Letter:] > Ay;
ij } [:^Letter:] > ay;
IJ > AI;
Ij > Ai;
ij > ai;

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
