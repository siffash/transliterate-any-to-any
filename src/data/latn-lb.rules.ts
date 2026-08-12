export const latnLbRules = `
::Null;

[:^Letter:] { Š } [Tt] > S;
[:^Letter:] { š } [Tt] > s;
[:^Letter:] { Š } [Pp] > S;
[:^Letter:] { š } [Pp] > s;

[aäeiïoöuüÿAÄEIÏOÖUÜŸ] { S } [aäeiïoöuüÿAÄEIÏOÖUÜŸ] > SS;
[aäeiïoöuüÿAÄEIÏOÖUÜŸ] { s } [aäeiïoöuüÿAÄEIÏOÖUÜŸ] > ss;

DŽ } [:Ll:] > Dsch;
DŽ > DSCH;
Dž > Dsch;
dž > dsch;

DZ } [:Ll:] > Ds;
DZ > DS;
Dz > Ds;
dz > ds;

TS > Z;
Ts > Z;
ts > z;

TH > T;
Th > T;
th > t;

GH > G;
Gh > G;
gh > g;

KH > CH;
Kh > Ch;
kh > ch;

IJ > EI;
Ij > Ei;
ij > ei;

[ČĆ] } [:Ll:] > Tsch;
[ČĆ] > TSCH;
[čć] > tsch;

Đ } [:Ll:] > Dsch;
Đ > DSCH;
đ > dsch;

Š } [:Ll:] > Sch;
Š > SCH;
š > sch;

X } [:Ll:] > Ch;
X > CH;
x > ch;

Ń } [:Ll:] > Nj;
Ń > NJ;
ń > nj;

Ľ } [:Ll:] > Lj;
Ľ > LJ;
ľ > lj;

[ŽY] > J;
[žy] > j;

Q > K;
q > k;

V > W;
v > w;

Z > S;
z > s;

Ö > Ë;
ö > ë;

[ÏŸ] > I;
[ïÿ] > i;

['·] > ;

::Null;

[iI] { [iI] > ;
[uU] { [uU] > ;
[äÄ] { [äÄ] > ;
[ëË] { [ëË] > ;
[éÉ] { [éÉ] > ;

[uU] { o > e;
[uU] { O > E;

[kK] } k > c;
[kK] } K > C;

[zZ] } z > t;
[zZ] } Z > T;

[sS] { z > s;
[sS] { Z > S;

[:Lu:] { ß } [:Lu:] > SS;
ß } [:Lu:] > SS;
ß > ss;

[cC] [hH] { [cC] [hH] > ;
[sS] [cC] [hH] { [sS] [cC] [hH] > ;
[nN] [gG] { [nN] [gG] > ;

[:^Letter:] { sch } [pPtT] > s;
[:^Letter:] { Sch } [pPtT] > S;
[:^Letter:] { SCH } [pPtT] > S;
`;
