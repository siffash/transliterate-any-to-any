export const noLatnRules = `
::NFC;

[[:L:][:M:]] { \\' } [[:L:][:M:]] > ’;

[ÉÈÊ] > E;
[éèê] > e;

[ÓÒÔ] > O;
[óòô] > o;

[ÀÂ] > A;
[àâ] > a;

::Null;

[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZšŠčČćĆ]* [iI] { [eE] } [bcdfgjkmpqstvwxzBCDFGJKMPQSTVWXZ] > ;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZšŠčČćĆ]* [iI] { [eE] } [lL] [^lL] > ;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZšŠčČćĆ]* [iI] { [eE] } [nN] [[:L:][:M:]] > ;

[:Lu:] { X > KS;
X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KS;
X } [:Lu:] > KS;
X > Ks;
x > ks;

S [Cc] [Hh] > Š;
s [Cc] [Hh] > š;

S [Kk] [Jj] > Š;
s [Kk] [Jj] > š;

T [Ss] [Jj] > Č;
t [Ss] [Jj] > č;

S [Jj] > Š;
s [Jj] > š;

[KT] [Jj] > Ć;
[kt] [Jj] > ć;

[GHL] [Jj] > J;
[ghl] [Jj] > j;

H [Vv] > V;
h [Vv] > v;

S [Kk] } [IYiy] > Š;
s [Kk] } [IYiy] > š;

S [Kk] } [Ee] [Ii] > Š;
s [Kk] } [Ee] [Ii] > š;

S [Kk] } [Øø] [Yy] > Š;
s [Kk] } [Øø] [Yy] > š;

G } [IYiy] > J;
g } [IYiy] > j;

G } [Ee] [Ii] > J;
g } [Ee] [Ii] > j;

G } [Øø] [Yy] > J;
g } [Øø] [Yy] > j;

[^[:L:][:M:]] { C [Hh] } [RrLl] > K;
[^[:L:][:M:]] { c [Hh] } [RrLl] > k;
[^[:L:][:M:]] [Mm] [Ii] { C [Hh] } [Aa] > K;
[^[:L:][:M:]] [Mm] [Ii] { c [Hh] } [Aa] > k;
[^[:L:][:M:]] [Mm] [Ii] { C [Hh] } [Ee] [Ll] [Ss] > K;
[^[:L:][:M:]] [Mm] [Ii] { c [Hh] } [Ee] [Ll] [Ss] > k;
[Mm] [Ii] { C [Hh] } [Ee] [Ll] [Ll] > Š;
[Mm] [Ii] { c [Hh] } [Ee] [Ll] [Ll] > š;
[^[:L:][:M:]] { C [Hh] } [AEIOUYÆØÅÄÖÜaeiouyæøåäöü] > Š;
[^[:L:][:M:]] { c [Hh] } [AEIOUYÆØÅÄÖÜaeiouyæøåäöü] > š;
C [Hh] > K;
c [Hh] > k;

[^[:L:][:M:]] { P [Hh] > F;
[^[:L:][:M:]] { p [Hh] > f;
[SsTt] [OoEe] { P [Hh] > F;
[SsTt] [OoEe] { p [hH] > f;
[Ll] { P [Hh] > F;
[Ll] { p [hH] > f;
C } [EIYÆØÄÖÜeiyæøäöü] > S;
c } [EIYÆØÄÖÜeiyæøäöü] > s;
C > K;
c > k;

::Null;

AU > ÄU;
aU > äU;
Au > Äu;
au > äu;

E [IY] > IJ;
e [IY] > iJ;
E [iy] > Ij;
e [iy] > ij;

Æ > Ä;
æ > ä;

Ø > Ö;
ø > ö;

Å > O;
å > o;

[Bb] [Bb] { Y } [^[:L:][:M:]] > I;
[Bb] [Bb] { y } [^[:L:][:M:]] > i;
[Dd] [Dd] { Y } [^[:L:][:M:]] > I;
[Dd] [Dd] { y } [^[:L:][:M:]] > i;
[Ff] [Ff] { Y } [^[:L:][:M:]] > I;
[Ff] [Ff] { y } [^[:L:][:M:]] > i;
[Gg] [Gg] { Y } [^[:L:][:M:]] > I;
[Gg] [Gg] { y } [^[:L:][:M:]] > i;
[Kk] [Kk] { Y } [^[:L:][:M:]] > I;
[Kk] [Kk] { y } [^[:L:][:M:]] > i;
[Ll] [Ll] { Y } [^[:L:][:M:]] > I;
[Ll] [Ll] { y } [^[:L:][:M:]] > i;
[Mm] [Mm] { Y } [^[:L:][:M:]] > I;
[Mm] [Mm] { y } [^[:L:][:M:]] > i;
[Nn] [Nn] { Y } [^[:L:][:M:]] > I;
[Nn] [Nn] { y } [^[:L:][:M:]] > i;
[Pp] [Pp] { Y } [^[:L:][:M:]] > I;
[Pp] [Pp] { y } [^[:L:][:M:]] > i;
[Rr] [Rr] { Y } [^[:L:][:M:]] > I;
[Rr] [Rr] { y } [^[:L:][:M:]] > i;
[Ss] [Ss] { Y } [^[:L:][:M:]] > I;
[Ss] [Ss] { y } [^[:L:][:M:]] > i;
[Tt] [Tt] { Y } [^[:L:][:M:]] > I;
[Tt] [Tt] { y } [^[:L:][:M:]] > i;
[AaEeOoÖöUu] { Y > Y;
[AaEeOoÖöUu] { y > y;
[^[:L:][:M:]] { Y } [AEIOUÄÖÅaeiouäöå] > Y;
[^[:L:][:M:]] { y } [AEIOUÄÖÅaeiouäöå] > y;
Y > Ü;
y > ü;

W > V;
w > v;

J > Y;
j > y;

::Null;

[^[:L:][:M:]] { T [Ss] > C;
[^[:L:][:M:]] { t [Ss] > c;
N [Gg] [Hh] } [^[:L:][:M:]] > Ŋ;
n [Gg] [Hh] } [^[:L:][:M:]] > ŋ;
N [Gg] > Ŋ;
n [Gg] > ŋ;
[:L:] { T } [hH] [aA] [gG] [eE] > T;
[:L:] { t } [hH] [aA] [gG] [eE] > t;
[:L:] { T } [hH] [aA] [vV] > T;
[:L:] { t } [hH] [aA] [vV] > t;
[:L:] { T } [hH] [uU] [sS] > T;
[:L:] { t } [hH] [uU] [sS] > t;
[:L:] { T } [hH] [oO] [lL] [mM] > T;
[:L:] { t } [hH] [oO] [lL] [mM] > t;
[:L:] { T } [hH] [eE] [iI] [mM] > T;
[:L:] { t } [hH] [eE] [iI] [mM] > t;
[:L:] { T } [hH] [aA] [uU] [gG] > T;
[:L:] { t } [hH] [aA] [uU] [gG] > t;
[:L:] { T } [hH] [äÄ] [uU] [gG] > T;
[:L:] { t } [hH] [äÄ] [uU] [gG] > t;
[:L:] { T } [hH] [iI] [jJ] [mM] > T;
[:L:] { t } [hH] [iI] [jJ] [mM] > t;
T [Hh] > Þ;
t [Hh] > þ;
[:L:] { K } [hH] [aeiouyäöüåæøáéíóúýőűıâêîôûàèìòùëïõAEIOUYÄÖÜÅÆØÁÉÍÓÚÝŐŰIİÂÊÎÔÛÀÈÌÒÙËÏÕ] > K;
[:L:] { k } [hH] [aeiouyäöüåæøáéíóúýőűıâêîôûàèìòùëïõAEIOUYÄÖÜÅÆØÁÉÍÓÚÝŐŰIİÂÊÎÔÛÀÈÌÒÙËÏÕ] > k;
K [Hh] > Ḫ;
k [Hh] > ḫ;
[fF] { G [Hh] > Ɣ;
[fF] { g [Hh] > ɣ;
[:L:] { G } [hH] [aeiouyäöüåæøáéíóúýőűıâêîôûàèìòùëïõAEIOUYÄÖÜÅÆØÁÉÍÓÚÝŐŰIİÂÊÎÔÛÀÈÌÒÙËÏÕ] > G;
[:L:] { g } [hH] [aeiouyäöüåæøáéíóúýőűıâêîôûàèìòùëïõAEIOUYÄÖÜÅÆØÁÉÍÓÚÝŐŰIİÂÊÎÔÛÀÈÌÒÙËÏÕ] > g;
G [Hh] } [^[:L:][:M:]] > G;
g [Hh] } [^[:L:][:M:]] > g;
G [Hh] > Ɣ;
g [Hh] > ɣ;
`;
