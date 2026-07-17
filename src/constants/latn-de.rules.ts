export const latnDeRules = `
::Null;

\\' > ;
· > \\-;

dž > dsch;
Dž > Dsch;
DŽ > DSCH;
dz > ds;
Dz > Ds;
DZ > DS;
ij > ei;
Ij > Ei;
IJ > EI;
th > t;
Th > T;
TH > T;
gh > g;
Gh > G;
GH > G;
kh > ch;
Kh > Ch;
KH > CH;
ts > z;
Ts > Z;
TS > Z;
[:^Letter:] { š } [pPtT] > s;
[:^Letter:] { Š } [pPtT] > S;
[aäeiïoöuüÿAÄEIÏOÖUÜŸ] { s } [aäeiïoöuüÿAÄEIÏOÖUÜŸ] > ss;
[aäeiïoöuüÿAÄEIÏOÖUÜŸ] { S } [aäeiïoöuüÿ] > Ss;
[aäeiïoöuüÿAÄEIÏOÖUÜŸ] { S } [AÄEIÏOÖUÜŸ] > SS;
đ > dsch;
Đ } [:Lower:] > Dsch;
Đ > DSCH;
č > tsch;
Č } [:Lower:] > Tsch;
Č > TSCH;
ć > tsch;
Ć } [:Lower:] > Tsch;
Ć > TSCH;
š > sch;
Š } [:Lower:] > Sch;
Š > SCH;
ž > sch;
Ž } [:Lower:] > Sch;
Ž > SCH;
x > ch;
X } [:Lower:] > Ch;
X > CH;
ń > nj;
Ń } [:Lower:] > Nj;
Ń > NJ;
ľ > lj;
Ľ } [:Lower:] > Lj;
Ľ > LJ;
q > k;
Q > K;
v > w;
V > W;
y > j;
Y > J;
z > s;
Z > S;
ï > i;
Ï > I;
ÿ > ü;
Ÿ > Ü;

::Null;

[:^Letter:] { [ßẞ] } [:Upper:] > SS;
[:^Letter:] { [ßẞ] > Ss;
[:^Letter:] { ck > k;
[:^Letter:] { Ck > K;
[:^Letter:] { CK > K;

::Null;

[aAeEiIoOuUäÄöÖüÜyY] [aAeEiIoOuUäÄöÖüÜyY] { tz > z;
[aAeEiIoOuUäÄöÖüÜyY] [aAeEiIoOuUäÄöÖüÜyY] { Tz > Z;
[aAeEiIoOuUäÄöÖüÜyY] [aAeEiIoOuUäÄöÖüÜyY] { TZ > Z;
[aAeEiIoOuUäÄöÖüÜyY] [aAeEiIoOuUäÄöÖüÜyY] { ck > k;
[aAeEiIoOuUäÄöÖüÜyY] [aAeEiIoOuUäÄöÖüÜyY] { Ck > K;
[aAeEiIoOuUäÄöÖüÜyY] [aAeEiIoOuUäÄöÖüÜyY] { CK > K;

::Null;

[bcdfghjklmnpqrstvwxzßBCDFGHJKLMNPQRSTVWXZẞ] { tz > z;
[bcdfghjklmnpqrstvwxzßBCDFGHJKLMNPQRSTVWXZẞ] { Tz > Z;
[bcdfghjklmnpqrstvwxzßBCDFGHJKLMNPQRSTVWXZẞ] { TZ > Z;
[bcdfghjklmnpqrstvwxzßBCDFGHJKLMNPQRSTVWXZẞ] { ck > k;
[bcdfghjklmnpqrstvwxzßBCDFGHJKLMNPQRSTVWXZẞ] { Ck > K;
[bcdfghjklmnpqrstvwxzßBCDFGHJKLMNPQRSTVWXZẞ] { CK > K;

::Null;

q } [^uU] > k;
q } [:^Letter:] > k;
Q } [^uU] > K;
Q } [:^Letter:] > K;

::Null;

[Ww] { [Ww] > ;
[Yy] { [Yy] > ;
[Jj] { [Jj] > ;
[Dd] [Ss] [Cc] [Hh] { [Dd] [Ss] [Cc] [Hh] > ;
[Tt] [Ss] [Cc] [Hh] { [Tt] [Ss] [Cc] [Hh] > ;
`;
