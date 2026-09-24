export const latnDeRules = `
::Null;

dž > dsch;
dŽ > dSCH;
Dž > Dsch;
DŽ > DSCH;

dz > ds;
dZ > dS;
Dz > Ds;
DZ > DS;

ij > ei;
iJ > eI;
Ij > Ei;
IJ > EI;

t [hH] > t;
T [hH] > T;

g [hH] > g;
G [hH] > G;

kh > ch;
kH > cH;
Kh > Ch;
KH > CH;

t [sS] > z;
T [sS] > Z;

::Null;

[^[:L:][:M:]] { ['·] > ;
['·] } [^[:L:][:M:]] > ;
· > \\-;

[^[:L:][:M:]] { š } [pPtT] > s;
[^[:L:][:M:]] { Š } [pPtT] > S;

[aäeiïoöuüÿAÄEIÏOÖUÜŸ] { S } [AÄEIÏOÖUÜŸ] > SS;
[aäeiïoöuüÿAÄEIÏOÖUÜŸ] { S } [aäeiïoöuüÿ] > Ss;
[aäeiïoöuüÿAÄEIÏOÖUÜŸ] { s } [aäeiïoöuüÿAÄEIÏOÖUÜŸ] > ss;

[:Lu:] { Đ > DSCH;
Đ } [:Lu:] > DSCH;
Đ > Dsch;
đ > dsch;

[:Lu:] { [ČĆ] > TSCH;
[ČĆ] } [:Lu:] > TSCH;
[ČĆ] > Tsch;
[čć] > tsch;

[:Lu:] { [ŠŽ] > SCH;
[ŠŽ] } [:Lu:] > SCH;
[ŠŽ] > Sch;
[šž] > sch;

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

[^[:L:][:M:]] { [ßẞ] } [:Lu:] > SS;
[^[:L:][:M:]] { [ßẞ] > Ss;
[^[:L:][:M:]] { c [kK] > k;
[^[:L:][:M:]] { C [kK] > K;

::Null;

[aAeEiIoOuUäÄöÖüÜyY] [aAeEiIoOuUäÄöÖüÜyY] { t [zZ] > z;
[aAeEiIoOuUäÄöÖüÜyY] [aAeEiIoOuUäÄöÖüÜyY] { T [zZ] > Z;
[aAeEiIoOuUäÄöÖüÜyY] [aAeEiIoOuUäÄöÖüÜyY] { c [kK] > k;
[aAeEiIoOuUäÄöÖüÜyY] [aAeEiIoOuUäÄöÖüÜyY] { C [kK] > K;

::Null;

[bcdfghjklmnpqrstvwxzßBCDFGHJKLMNPQRSTVWXZẞ] { t [zZ] > z;
[bcdfghjklmnpqrstvwxzßBCDFGHJKLMNPQRSTVWXZẞ] { T [zZ] > Z;
[bcdfghjklmnpqrstvwxzßBCDFGHJKLMNPQRSTVWXZẞ] { c [kK] > k;
[bcdfghjklmnpqrstvwxzßBCDFGHJKLMNPQRSTVWXZẞ] { C [kK] > K;

::Null;

q } [^uU] > k;
Q } [^uU] > K;
q } [^[:L:][:M:]] > k;
Q } [^[:L:][:M:]] > K;

::Null;

[Ww] { [Ww] > ;
[Yy] { [Yy] > ;
[Jj] { [Jj] > ;
[Dd] [Ss] [Cc] [Hh] { [Dd] [Ss] [Cc] [Hh] > ;
[Tt] [Ss] [Cc] [Hh] { [Tt] [Ss] [Cc] [Hh] > ;
`;
