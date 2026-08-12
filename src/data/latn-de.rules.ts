export const latnDeRules = `
::Null;

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

::Null;

\\' > ;
· > \\-;

[:^Letter:] { š } [pPtT] > s;
[:^Letter:] { Š } [pPtT] > S;
[aäeiïoöuüÿAÄEIÏOÖUÜŸ] { s } [aäeiïoöuüÿAÄEIÏOÖUÜŸ] > ss;
[aäeiïoöuüÿAÄEIÏOÖUÜŸ] { S } [aäeiïoöuüÿ] > Ss;
[aäeiïoöuüÿAÄEIÏOÖUÜŸ] { S } [AÄEIÏOÖUÜŸ] > SS;
đ > dsch;
Đ } [:Ll:] > Dsch;
Đ > DSCH;
č > tsch;
Č } [:Ll:] > Tsch;
Č > TSCH;
ć > tsch;
Ć } [:Ll:] > Tsch;
Ć > TSCH;
š > sch;
Š } [:Ll:] > Sch;
Š > SCH;
ž > sch;
Ž } [:Ll:] > Sch;
Ž > SCH;
x > ch;
X } [:Ll:] > Ch;
X > CH;
ń > nj;
Ń } [:Ll:] > Nj;
Ń > NJ;
ľ > lj;
Ľ } [:Ll:] > Lj;
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

[:^Letter:] { [ßẞ] } [:Lu:] > SS;
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
