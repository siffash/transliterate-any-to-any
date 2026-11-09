export const lbLatnRules = `
::NFC;

[[:L:][:M:]] { \\' } [[:L:][:M:]] > ’;

I [eE] > I;
i [eE] > i;

D [sS] [cC] [hH] > Ǯ;
d [sS] [cC] [hH] > ǯ;

T [sS] [cC] [hH] > Č;
t [sS] [cC] [hH] > č;

S [cC] [hH] > Š;
s [cC] [hH] > š;

[:Lu:] { X > KS;
X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KS;
X } [:Lu:] > KS;
X > Ks;
x > ks;

[^[:L:][:M:]] { C [hH] } [rRlL] > K;
[^[:L:][:M:]] { c [hH] } [rRlL] > k;
[^[:L:][:M:]] { C [hH] } [AÄEËÉÈÊIÏOÖUÜYaäeëéèêiïoöuüy] > Š;
[^[:L:][:M:]] { c [hH] } [AÄEËÉÈÊIÏOÖUÜYaäeëéèêiïoöuüy] > š;

[AOUaou] { C [hH] > Ḫ;
[AOUaou] { c [hH] > ḫ;

C [hH] > X;
c [hH] > x;

C [kK] > K;
c [kK] > k;

P [hH] > F;
p [hH] > f;

T [hH] > T;
t [hH] > t;

D [jJ] > Ǯ;
d [jJ] > ǯ;

Q [uU] [eE] } [^[:L:][:M:]] > K;
q [uU] [eE] } [^[:L:][:M:]] > k;

QU > KV;
qU > kV;
Qu > Kv;
qu > kv;

Q > K;
q > k;

[^[:L:][:M:]] { ST > ŠT;
[^[:L:][:M:]] { sT > šT;
[^[:L:][:M:]] { St > Št;
[^[:L:][:M:]] { st > št;

[^[:L:][:M:]] { SP > ŠP;
[^[:L:][:M:]] { sP > šP;
[^[:L:][:M:]] { Sp > Šp;
[^[:L:][:M:]] { sp > šp;

[AÄEÉÈÊËIÏOÖUÜYaäeéèêëiïoöuüy] { s } [AÄEÉÈÊËIÏOÖUÜYaäeéèêëiïoöuüy] > z;
[AÄEÉÈÊËIÏOÖUÜYaäeéèêëiïoöuüy] { S } [AÄEÉÈÊËIÏOÖUÜYaäeéèêëiïoöuüy] > Z;

C } [eéèêëiïyäöüEÉÈÊËIÏYÄÖÜ] > C;
c } [eéèêëiïyäöüEÉÈÊËIÏYÄÖÜ] > c;

C > K;
c > k;

T [zZ] > C;
t [zZ] > c;

Z > C;
z > c;

W > V;
w > v;

Ç > S;
ç > s;

[ÄEÉ] [IY] > IJ;
[äeé] [IY] > iJ;
[ÄEÉ] [iy] > Ij;
[äeé] [iy] > ij;

[AÄEËÉÈÊIÏOÖUÜaäeëéèêiïoöuü] { Y > Y;
[AÄEËÉÈÊIÏOÖUÜaäeëéèêiïoöuü] { y > y;
Y } [AÄEËÉÈÊIÏOÖUÜaäeëéèêiïoöuü] > Y;
y } [AÄEËÉÈÊIÏOÖUÜaäeëéèêiïoöuü] > y;
Y > I;
y > i;

J > Y;
j > y;

[eE] [eE] { [ëË]+ > ;
Ë > E;
ë > e;

[ÉÈÊ] > E;
[éèê] > e;

Â > A;
â > a;
Î > I;
î > i;
Ô > O;
ô > o;
Û > U;
û > u;

::Null;

[kK] { [kK]+ > ;

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
