export const latnLbRules = `
::Null;

DŽ > DSCH;
Dž > Dsch;
dž > dsch;

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

::Null;

[^[:L:][:M:]] { Š } [Tt] > S;
[^[:L:][:M:]] { š } [Tt] > s;
[^[:L:][:M:]] { Š } [Pp] > S;
[^[:L:][:M:]] { š } [Pp] > s;

[aäeiïoöuüÿAÄEIÏOÖUÜŸ] { S } [aäeiïoöuüÿAÄEIÏOÖUÜŸ] > SS;
[aäeiïoöuüÿAÄEIÏOÖUÜŸ] { s } [aäeiïoöuüÿAÄEIÏOÖUÜŸ] > ss;

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

Ń } [^[:L:][:M:]] > N;
ń } [^[:L:][:M:]] > n;
Ń } [Jj] > N;
ń } [Jj] > n;
Ń } [:Ll:] > Nj;
Ń > NJ;
ń > nj;

Ľ } [^[:L:][:M:]] > L;
ľ } [^[:L:][:M:]] > l;
Ľ } [Jj] > L;
ľ } [Jj] > l;
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

[:Lu:] { ß } [:Lu:] > SS;
ß } [:Lu:] > SS;
ß > ss;

[cC] [hH] { [cC] [hH] > ;
[sS] [cC] [hH] { [sS] [cC] [hH] > ;
[nN] [gG] { [nN] [gG] > ;

[^[:L:][:M:]] { sch } [pPtT] > s;
[^[:L:][:M:]] { Sch } [pPtT] > S;
[^[:L:][:M:]] { SCH } [pPtT] > S;
`;
