export const latnIdRules = `
::Null;

[:Lu:] { Ḫ > KH;
Ḫ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KH;
Ḫ } [:Lu:] > KH;
Ḫ > Kh;
ḫ > kh;

[:Lu:] { Ŋ > NG;
Ŋ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > NG;
Ŋ } [:Lu:] > NG;
Ŋ > Ng;
ŋ > ng;

[:Lu:] { C > TS;
C } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > TS;
C } [:Lu:] > TS;
C > Ts;
c > ts;

::Null;

[Tt] [Ss] { [Tt] [Ss] > ;

IJ > EI;
iJ > eI;
Ij > Ei;
ij > ei;

Ǯ > J;
ǯ > j;

Ẑ > Z;
ẑ > z;

Þ > T;
þ > t;

Ɣ > G;
ɣ > g;

::Null;

[:Lu:] { X > KH;
X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KH;
X } [:Lu:] > KH;
X > Kh;
x > kh;

Ń } [^[:L:][:M:]] > N;
ń } [^[:L:][:M:]] > n;
Ń } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > N;
ń } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > n;
Ń } [Yy] > N;
ń } [Yy] > n;
[:Lu:] { Ń > NY;
Ń } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > NY;
Ń } [:Lu:] > NY;
Ń > Ny;
ń > ny;

[:Lu:] { Š > SY;
Š } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > SY;
Š } [:Lu:] > SY;
Š > Sy;
š > sy;

[ČĆ] > C;
[čć] > c;

[ŽĐ] > J;
[žđ] > j;

Ï > I;
ï > i;

Ä > E;
ä > e;
Ö > O;
ö > o;
[ÜŸ] > U;
[üÿ] > u;
Q > K;
q > k;
Ľ > L;
ľ > l;

[^[:L:][:M:]] { ['·] > ;
['·] } [^[:L:][:M:]] > ;
· > \\-;

::Null;

sh > sy;
Sh > Sy;
SH > SY;
sH > sY;

c [hH] > c;
C [hH] > C;

p [hH] > f;
P [hH] > F;

z [hH] > z;
Z [hH] > Z;

::Null;

[bB] { [bB]+ > ;
[cC] { [cC]+ > ;
[dD] { [dD]+ > ;
[fF] { [fF]+ > ;
[gG] { [gG]+ > ;
[hH] { [hH]+ > ;
[jJ] { [jJ]+ > ;
[kK] { [kK]+ > ;
[lL] { [lL]+ > ;
[mM] { [mM]+ > ;
[nN] { [nN]+ > ;
[pP] { [pP]+ > ;
[qQ] { [qQ]+ > ;
[rR] { [rR]+ > ;
[sS] { [sS]+ > ;
[tT] { [tT]+ > ;
[vV] { [vV]+ > ;
[wW] { [wW]+ > ;
[xX] { [xX]+ > ;
[yY] { [yY]+ > ;
[zZ] { [zZ]+ > ;

[sS] [yY] { [sS]+ [yY]+ > ;
[kK] [hH] { [kK]+ [hH]+ > ;
[nN] [yY] { [nN]+ [yY]+ > ;
`;
