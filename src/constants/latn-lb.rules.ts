export const latnLbRules = `
::Null;

[:^Letter:] { Š } [Tt] > S;
[:^Letter:] { š } [Tt] > s;
[:^Letter:] { Š } [Pp] > S;
[:^Letter:] { š } [Pp] > s;

[aäeiïoöuüÿAÄEIÏOÖUÜŸ] { S } [aäeiïoöuüÿAÄEIÏOÖUÜŸ] > SS;
[aäeiïoöuüÿAÄEIÏOÖUÜŸ] { s } [aäeiïoöuüÿAÄEIÏOÖUÜŸ] > ss;

DŽ } [:Lower:] > Dsch;
DŽ > DSCH;
Dž > Dsch;
dž > dsch;

DZ } [:Lower:] > Ds;
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

[ČĆ] } [:Lower:] > Tsch;
[ČĆ] > TSCH;
[čć] > tsch;

Đ } [:Lower:] > Dsch;
Đ > DSCH;
đ > dsch;

Š } [:Lower:] > Sch;
Š > SCH;
š > sch;

X } [:Lower:] > Ch;
X > CH;
x > ch;

Ń } [:Lower:] > Nj;
Ń > NJ;
ń > nj;

Ľ } [:Lower:] > Lj;
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

[:Upper:] { ß } [:Upper:] > SS;
ß } [:Upper:] > SS;
ß > ss;

[cC] [hH] { [cC] [hH] > ;
[sS] [cC] [hH] { [sS] [cC] [hH] > ;
[nN] [gG] { [nN] [gG] > ;

[:^Letter:] { sch } [pPtT] > s;
[:^Letter:] { Sch } [pPtT] > S;
[:^Letter:] { SCH } [pPtT] > S;
`;
