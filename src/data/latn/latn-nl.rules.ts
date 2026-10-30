export const latnNlRules = `
::Null;

[Čč] { [Čč] > ;
[Dd] [Žž] { [Dd] [Žž] > ;

::Null;

ts } ts > ;
TS } TS > ;

DŽ > DJ;
dŽ > dJ;
Dž > Dj;
dž > dj;

[nN] { G } [hH] > G;
[nN] { g } [hH] > g;
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
Š } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > SJ;
Š } [:Lu:] > SJ;
Š > Sj;
š > sj;

[:Lu:] { [ČĆ] > TSJ;
[ČĆ] } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > TSJ;
[ČĆ] } [:Lu:] > TSJ;
[ČĆ] > Tsj;
[čć] > tsj;

[:Lu:] { Ž > ZJ;
Ž } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > ZJ;
Ž } [:Lu:] > ZJ;
Ž > Zj;
ž > zj;

[:Lu:] { Đ > DJ;
Đ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > DJ;
Đ } [:Lu:] > DJ;
Đ > Dj;
đ > dj;

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

Q > K;
q > k;

[:Lu:] { U > OE;
U } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > OE;
U } [:Lu:] > OE;
O· } [uU] > O;
o· } [uU] > o;
OU > OU;
Ou > Ou;
ou > ou;

U > Oe;
u > oe;

[:Lu:] { Ö > EU;
Ö } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > EU;
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

[aA] { [aA]+ } [^[:L:][:M:]] > ;
[oO] { [oO]+ } [^[:L:][:M:]] > ;
[uU] { [uU]+ } [^[:L:][:M:]] > ;

[cC] [hH] { ([cC] [hH])+ > ;
[sS] [jJ] { ([sS] [jJ])+ > ;
[zZ] [jJ] { ([zZ] [jJ])+ > ;
[nN] [gG] { ([nN] [gG])+ > ;

[tT] [sS] [jJ] { ([tT] [sS] [jJ])+ > ;
[dD] [zZ] [jJ] { ([dD] [zZ] [jJ])+ > ;

[aA] [aA] { [aA]+ > ;
[eE] [eE] { [eE]+ > ;
[iI] [iI] { [iI]+ > ;
[oO] [oO] { [oO]+ > ;
[uU] [uU] { [uU]+ > ;

::Null;

[bcdfghklmnpqrstvwxzBCDFGHKLMNPQRSTVWXZ] [jJ] { [jJ]+ > ;
`;
