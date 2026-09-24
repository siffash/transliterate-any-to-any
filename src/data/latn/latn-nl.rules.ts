export const latnNlRules = `
::Null;

DŽ > DJ;
dŽ > dJ;
Dž > Dj;
dž > dj;

G [hH] > G;
g [hH] > g;

KH > CH;
kH > cH;
Kh > Ch;
kh > ch;

T [hH] > T;
t [hH] > t;

::Null;

[:Lu:] { Š > SJ;
Š } [:Lu:] > SJ;
Š > Sj;
š > sj;

[:Lu:] { [ČĆ] > TSJ;
[ČĆ] } [:Lu:] > TSJ;
[ČĆ] > Tsj;
[čć] > tsj;

[:Lu:] { Ž > ZJ;
Ž } [:Lu:] > ZJ;
Ž > Zj;
ž > zj;

[:Lu:] { Đ > DJ;
Đ } [:Lu:] > DJ;
Đ > Dj;
đ > dj;

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

Q > K;
q > k;

[:Lu:] { U > OE;
U } [:Lu:] > OE;
U > Oe;
u > oe;

[:Lu:] { Ö > EU;
Ö } [:Lu:] > EU;
Ö > Eu;
ö > eu;

[ŸÜ] > U;
[ÿü] > u;

Ä > E;
ä > e;

Ï > I;
ï > i;

Y > J;
y > j;

[^[:L:][:M:]] { ['·] > ;
['·] } [^[:L:][:M:]] > ;
· > \\-;

::Null;

[aA] { [aA] } [^[:L:][:M:]] > ;
[oO] { [oO] } [^[:L:][:M:]] > ;
[uU] { [uU] } [^[:L:][:M:]] > ;

[cC] [hH] { [cC] [hH] > ;
[sS] [jJ] { [sS] [jJ] > ;
[zZ] [jJ] { [zZ] [jJ] > ;
[nN] [gG] { [nN] [gG] > ;

[tT] [sS] [jJ] { [tT] [sS] [jJ] > ;
[dD] [zZ] [jJ] { [dD] [zZ] [jJ] > ;

[aA] [aA] { [aA] > ;
[eE] [eE] { [eE] > ;
[iI] [iI] { [iI] > ;
[oO] [oO] { [oO] > ;
[uU] [uU] { [uU] > ;
`;
