export const daLatnRules = `
::NFC;

[[:L:][:M:]] { \\' } [[:L:][:M:]] > ’;

A [aA] > O;
a [aA] > o;

Å > O;
å > o;

Æ > Ä;
æ > ä;

Ø > Ö;
ø > ö;

Y > Ü;
y > ü;

EG } [bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZǯǮẑẐ] > IJ;
Eg } [bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZǯǮẑẐ] > Ij;
eG } [bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZǯǮẑẐ] > iJ;
eg } [bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZǯǮẑẐ] > ij;

EJ > IJ;
Ej > Ij;
eJ > iJ;
ej > ij;

[Ii] { J > J;
[Ii] { j > j;

CHR > KR;
CHr > Kr;
Chr > Kr;
chr > kr;

S [Cc] [Hh] > Š;
s [Cc] [Hh] > š;

S [jJ] > Š;
s [jJ] > š;

[Mm] [Ii] { c [hH] } [aA] > k;
[Mm] [Ii] { C [hH] } [aA] > K;
[Mm] [Ii] { c [hH] } [eE] [lL] [sS] > k;
[Mm] [Ii] { C [hH] } [eE] [lL] [sS] > K;

[Jj] [oO] [aA] { c [hH] } [iI] > k;
[Jj] [oO] [aA] { C [hH] } [iI] > K;

C [hH] > Š;
c [hH] > š;

C [kK] > K;
c [kK] > k;

C } [EIYÆØÄÖÜeiyæøäöü] > S;
c } [EIYÆØÄÖÜeiyæøäöü] > s;
C > K;
c > k;

[Pp] { P } [hH] > P;
[Pp] { p } [hH] > p;
P [hH] > F;
p [hH] > f;

[:L:] { T } [hH] [iI] [mM] [mM] > T;
[:L:] { t } [hH] [iI] [mM] [mM] > t;
[:L:] { T } [hH] [aA] [vV] [nN] > T;
[:L:] { t } [hH] [aA] [vV] [nN] > t;
[:L:] { T } [hH] [uU] [sS] > T;
[:L:] { t } [hH] [uU] [sS] > t;
[:L:] { T } [hH] [oO] [lL] [mM] > T;
[:L:] { t } [hH] [oO] [lL] [mM] > t;
[:L:] { T } [hH] [øØ] [jJ] > T;
[:L:] { t } [hH] [øØ] [jJ] > t;
[:L:] { T } [hH] [aA] [gG] [eE] > T;
[:L:] { t } [hH] [aA] [gG] [eE] > t;
T [hH] > T;
t [hH] > t;

J > Y;
j > y;

[:Lu:] { X > KS;
X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KS;
X } [:Lu:] > KS;
X > Ks;
x > ks;

::Null;

[^[:L:][:M:]] { T [Ss] > C;
[^[:L:][:M:]] { t [Ss] > c;
N [Gg] > Ŋ;
n [Gg] > ŋ;
[:L:] { T } [hH] [iI] [mM] [mM] > T;
[:L:] { t } [hH] [iI] [mM] [mM] > t;
[:L:] { T } [hH] [aA] [vV] [nN] > T;
[:L:] { t } [hH] [aA] [vV] [nN] > t;
[:L:] { T } [hH] [uU] [sS] > T;
[:L:] { t } [hH] [uU] [sS] > t;
[:L:] { T } [hH] [oO] [lL] [mM] > T;
[:L:] { t } [hH] [oO] [lL] [mM] > t;
[:L:] { T } [hH] [øØ] [jJ] > T;
[:L:] { t } [hH] [øØ] [jJ] > t;
[:L:] { T } [hH] [aA] [gG] [eE] > T;
[:L:] { t } [hH] [aA] [gG] [eE] > t;
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
