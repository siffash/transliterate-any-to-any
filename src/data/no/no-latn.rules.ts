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
C [Hh] > Ḫ;
c [Hh] > ḫ;

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

EI > IJ;
eI > iJ;
Ei > Ij;
ei > ij;

Æ > Ä;
æ > ä;

Ø > Ö;
ø > ö;

Å > O;
å > o;

J > Y;
j > y;

::Null;

[^[:L:][:M:]] { T [Ss] > C;
[^[:L:][:M:]] { t [Ss] > c;
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
G [Hh] > Ɣ;
g [Hh] > ɣ;
`;
