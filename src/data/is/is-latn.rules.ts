export const isLatnRules = `
::NFC;

[[:L:][:M:]] { \\' } [[:L:][:M:]] > ’;

[:Lu:] { X > KS;
X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KS;
X } [:Lu:] > KS;
X > Ks;
x > ks;

[aáeéiíoóuúyýæöAÁEÉIÍOÓUÚYÝÆÖrRlL] { G } [hH] [aeiouyäöüåæøáéíóúýőűıâêîôûàèìòùëïõAEIOUYÄÖÜÅÆØÁÉÍÓÚÝŐŰIİÂÊÎÔÛÀÈÌÒÙËÏÕ] > G;
[aáeéiíoóuúyýæöAÁEÉIÍOÓUÚYÝÆÖrRlL] { g } [hH] [aeiouyäöüåæøáéíóúýőűıâêîôûàèìòùëïõAEIOUYÄÖÜÅÆØÁÉÍÓÚÝŐŰIİÂÊÎÔÛÀÈÌÒÙËÏÕ] > g;
[AÁEÉIÍOÓUÚYÝÆÖRL] { G } [^gG] > Ɣ;
[aáeéiíoóuúyýæöAÁEÉIÍOÓUÚYÝÆÖrRlL] { G } [^gG] > Ɣ;
[aáeéiíoóuúyýæöAÁEÉIÍOÓUÚYÝÆÖrRlL] { g } [^gG] > ɣ;
[AÁEÉIÍOÓUÚYÝÆÖRL] { G } [^[:L:][:M:]] > Ɣ;
[aáeéiíoóuúyýæöAÁEÉIÍOÓUÚYÝÆÖrRlL] { G } [^[:L:][:M:]] > Ɣ;
[aáeéiíoóuúyýæöAÁEÉIÍOÓUÚYÝÆÖrRlL] { g } [^[:L:][:M:]] > ɣ;

[aáeéiíoóuúyýæöAÁEÉIÍOÓUÚYÝÆÖrRlL] { F } [lnLN] > P;
[aáeéiíoóuúyýæöAÁEÉIÍOÓUÚYÝÆÖrRlL] { f } [lnLN] > p;

::Null;

au > öÿ;
Au > Öÿ;
aU > öŸ;
AU > ÖŸ;

e [iy] > ij;
E [iy] > Ij;
e [IY] > iJ;
E [IY] > IJ;

[:Lu:] { Á > AU;
Á } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > AU;
Á } [:Lu:] > AU;
Á > Au;
á > au;

[:Lu:] { É > YE;
É } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > YE;
É } [:Lu:] > YE;
É > Ye;
é > ye;

í > i;
Í > I;

[:Lu:] { Ó > OU;
Ó } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > OU;
Ó } [:Lu:] > OU;
Ó > Ou;
ó > ou;

ú > u;
Ú > U;

ý > i;
Ý > I;

[:Lu:] { Æ > AI;
Æ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > AI;
Æ } [:Lu:] > AI;
Æ > Ai;
æ > ai;

y > i;
Y > I;

ð > d;
Ð > D;

S [jJ] > Š;
s [jJ] > š;

j > y;
J > Y;

z > s;
Z > S;

q > k;
Q > K;

w > v;
W > V;

C [Hh] > Ḫ;
c [Hh] > ḫ;
c > k;
C > K;

::Null;

[^[:L:][:M:]] { T [Ss] > C;
[^[:L:][:M:]] { t [Ss] > c;
N [Gg] > Ŋ;
n [Gg] > ŋ;
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
