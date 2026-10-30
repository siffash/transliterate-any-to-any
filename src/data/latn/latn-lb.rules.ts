export const latnLbRules = `
::Null;

[Čč] { [Čč] > ;
[Dd] [Žž] { [Dd] [Žž] > ;

::Null;

DŽ > DSCH;
dŽ > dSCH;
Dž > Dsch;
dž > dsch;

DZ > DS;
dZ > dS;
Dz > Ds;
dz > ds;

[nN] { G } [hH] > G;
[nN] { g } [hH] > g;
G [hH] > G;
g [hH] > g;

KH > CH;
kH > cH;
Kh > Ch;
kh > ch;

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
[ČĆ] } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > TSCH;
[ČĆ] } [:Lu:] > TSCH;
[ČĆ] > Tsch;
[čć] > tsch;

[:Lu:] { Đ > DSCH;
Đ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > DSCH;
Đ } [:Lu:] > DSCH;
Đ > Dsch;
đ > dsch;

[:Lu:] { Š > SCH;
Š } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > SCH;
Š } [:Lu:] > SCH;
Š > Sch;
š > sch;

[:Lu:] { X > CH;
X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > CH;
X } [:Lu:] > CH;
X > Ch;
x > ch;

Ń } [^[:L:][:M:]] > N;
ń } [^[:L:][:M:]] > n;
Ń } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > N;
ń } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > n;
Ń } [Jj] > N;
ń } [Jj] > n;
Ń } [Yy] > N;
ń } [Yy] > n;
[:Lu:] { Ń > NJ;
Ń } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > NJ;
Ń } [:Lu:] > NJ;
Ń > Nj;
ń > nj;

Ľ } [^[:L:][:M:]] > L;
ľ } [^[:L:][:M:]] > l;
Ľ } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > L;
ľ } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > l;
Ľ } [Jj] > L;
ľ } [Jj] > l;
Ľ } [Yy] > L;
ľ } [Yy] > l;
[:Lu:] { Ľ > LJ;
Ľ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > LJ;
Ľ } [:Lu:] > LJ;
Ľ > Lj;
ľ > lj;

[ŽY] > J;
[žy] > j;

Q > K;
q > k;

V > W;
v > w;

T [hH] > T;
t [hH] > t;

T [sS] > Z;
t [sS] > z;

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

[iI] { [iI]+ > ;
[uU] { [uU]+ > ;
[äÄ] { [äÄ]+ > ;
[ëË] { [ëË]+ > ;
[éÉ] { [éÉ]+ > ;

[uU] { o+ > e;
[uU] { O+ > E;

[sS] { z+ > s;
[sS] { Z+ > S;

[:Lu:] { [ẞß]+ > SS;
[ẞß]+ } [:Lu:] > SS;
[ẞß]+ > ss;

[cC] [hH] { ([cC] [hH])+ > ;
[sS] [cC] [hH] { ([sS] [cC] [hH])+ > ;
[nN] [gG] { ([nN] [gG])+ > ;

[^[:L:][:M:]] { s [cC] [hH] } [pPtT] > s;
[^[:L:][:M:]] { S [cC] [hH] } [pPtT] > S;
`;
