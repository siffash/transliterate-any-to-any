export const latnLbRules = `
::Null;

DŽ > DSCH;
dŽ > dSCH;
Dž > Dsch;
dž > dsch;

DZ > DS;
dZ > dS;
Dz > Ds;
dz > ds;

T [sS] > Z;
t [sS] > z;

T [hH] > T;
t [hH] > t;

G [hH] > G;
g [hH] > g;

K [hH] > CH;
k [hH] > ch;

IJ > EI;
iJ > eI;
Ij > Ei;
ij > ei;

::Null;

[^[:L:][:M:]] { Š } [Tt] > S;
[^[:L:][:M:]] { š } [Tt] > s;
[^[:L:][:M:]] { Š } [Pp] > S;
[^[:L:][:M:]] { š } [Pp] > s;

[aäeiïoöuüÿAÄEIÏOÖUÜŸ] { S } [aäeiïoöuüÿAÄEIÏOÖUÜŸ] > SS;
[aäeiïoöuüÿAÄEIÏOÖUÜŸ] { s } [aäeiïoöuüÿAÄEIÏOÖUÜŸ] > ss;

[:Lu:] { [ČĆ] > TSCH;
[ČĆ] } [:Lu:] > TSCH;
[ČĆ] > Tsch;
[čć] > tsch;

[:Lu:] { Đ > DSCH;
Đ } [:Lu:] > DSCH;
Đ > Dsch;
đ > dsch;

[:Lu:] { Š > SCH;
Š } [:Lu:] > SCH;
Š > Sch;
š > sch;

[:Lu:] { X > CH;
X } [:Lu:] > CH;
X > Ch;
x > ch;

Ń } [^[:L:][:M:]] > N;
ń } [^[:L:][:M:]] > n;
Ń } [Jj] > N;
ń } [Jj] > n;
[:Lu:] { Ń > NJ;
Ń } [:Lu:] > NJ;
Ń > Nj;
ń > nj;

Ľ } [^[:L:][:M:]] > L;
ľ } [^[:L:][:M:]] > l;
Ľ } [Jj] > L;
ľ } [Jj] > l;
[:Lu:] { Ľ > LJ;
Ľ } [:Lu:] > LJ;
Ľ > Lj;
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

Ï > I;
ï > i;

Ÿ > U;
ÿ > u;

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
· > ;

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

[:Lu:] { [ẞß] > SS;
[ẞß] } [:Lu:] > SS;
[ẞß] > ss;

[cC] [hH] { [cC] [hH] > ;
[sS] [cC] [hH] { [sS] [cC] [hH] > ;
[nN] [gG] { [nN] [gG] > ;

[^[:L:][:M:]] { s [cC] [hH] } [pPtT] > s;
[^[:L:][:M:]] { S [cC] [hH] } [pPtT] > S;
`;
