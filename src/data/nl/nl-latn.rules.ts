export const nlLatnRules = `
::NFC;

[[:L:][:M:]] { \\' } [[:L:][:M:]] > ’;
[^[:L:][:M:]] { \\' } [sStT] [^[:L:][:M:]] > ’;

[aeiouyAEIOUY] { Ë > Ë;
[aeiouyAEIOUY] { ë > ë;
[ËÉÈÊ] > E;
[ëéèê] > e;
[ÍÎ] > I;
[íî] > i;
[ÚÜÛ] > Ü;
[úüû] > ü;
[ÁÄÀÂ] > A;
[áäàâ] > a;
[ÓÖÔ] > O;
[óöô] > o;
Ç > S;
ç > s;
Ñ > Ń;
ñ > ń;
[ĲI] [Jj] } [:Ll:] > Ij;
Ĳ } [:Ll:] > Ij;
Ĳ > IJ;
ĳ > ij;

::Null;

SCH } [^[:L:][:M:]] > S;
Sch } [^[:L:][:M:]] > S;
sch } [^[:L:][:M:]] > s;

SCH > SḪ;
Sch > Sḫ;
sch > sḫ;

TIE } [^[:L:][:M:]] > CI;
Tie } [^[:L:][:M:]] > Ci;
tie } [^[:L:][:M:]] > ci;

S [jJ] > Š;
s [jJ] > š;

D [jJ] > Ǯ;
d [jJ] > ǯ;

[^[:L:][:M:]] { C [hH] } [rR] > K;
[^[:L:][:M:]] { c [hH] } [rR] > k;
C [hH] > X;
c [hH] > x;

[^[:L:][:M:]] { S [hH] > Š;
[^[:L:][:M:]] { s [hH] > š;

Z [hH] > Ž;
z [hH] > ž;

N [jJ] > Ń;
n [jJ] > ń;

[:L:] { T } [hH] [uU] [iI] [zZ] > T;
[:L:] { t } [hH] [uU] [iI] [zZ] > t;
[:L:] { T } [hH] [uU] [iI] [sS] > T;
[:L:] { t } [hH] [uU] [iI] [sS] > t;
[:L:] { T } [hH] [oO] [oO] [rR] [nN] > T;
[:L:] { t } [hH] [oO] [oO] [rR] [nN] > t;
[:L:] { T } [hH] [oO] [eE] [kK] > T;
[:L:] { t } [hH] [oO] [eE] [kK] > t;
[:L:] { T } [hH] [oO] [fF] > T;
[:L:] { t } [hH] [oO] [fF] > t;
[:L:] { T } [hH] [aA] [vV] [eE] [nN] > T;
[:L:] { t } [hH] [aA] [vV] [eE] [nN] > t;
[:L:] { T } [hH] [oO] [rR] [sS] [tT] > T;
[:L:] { t } [hH] [oO] [rR] [sS] [tT] > t;
[:L:] { T } [hH] [oO] [uU] [tT] > T;
[:L:] { t } [hH] [oO] [uU] [tT] > t;
[:L:] { T } [hH] [oO] [vV] [eE] > T;
[:L:] { t } [hH] [oO] [vV] [eE] > t;
[:L:] { T } [hH] [öÖ] [yY] [zZ] > T;
[:L:] { t } [hH] [öÖ] [yY] [zZ] > t;
[:L:] { T } [hH] [öÖ] [yY] [sS] > T;
[:L:] { t } [hH] [öÖ] [yY] [sS] > t;
[:L:] { T } [hH] [uU] [kK] > T;
[:L:] { t } [hH] [uU] [kK] > t;
T [hH] > T;
t [hH] > t;

P [hH] > F;
p [hH] > f;

QU } [aeiouAEIOU] > KW;
Qu } [aeiouAEIOU] > Kw;
qU } [aeiouAEIOU] > kW;
qu } [aeiouAEIOU] > kw;

OOIJ > OOY;
Ooij > Ooy;
ooij > ooy;

OOI > OOY;
Ooi > Ooy;
ooi > ooy;

AAIJ > AAY;
Aaij > Aay;
aaij > aay;

AAI > AAY;
Aai > Aay;
aai > aay;

OEIJ > UY;
Oeij > Uy;
oeij > uy;

OEI > UY;
Oei > Uy;
oei > uy;

EAU > O;
Eau > O;
eau > o;

O [eE] > U;
o [eE] > u;

E [uU] > Ö;
e [uU] > ö;

U [uU] > Ü;
u [uU] > ü;

I [eE] > I;
i [eE] > i;

EIJ > IJ;
Eij > Ij;
eij > ij;

EI > IJ;
eI > iJ;
Ei > Ij;
ei > ij;

UIJ > ÖY;
Uij > Öy;
uij > öy;

UI > ÖY;
uI > öY;
Ui > Öy;
ui > öy;

[cC] } [kK] > ;
[kK] } [xX] > ;
C } [eéiíyýEÉIÍYÝ] > S;
c } [eéiíyýEÉIÍYÝ] > s;
C > K;
c > k;

[:Lu:] { X > KS;
X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KS;
X } [:Lu:] > KS;
X > Ks;
x > ks;

[^[:L:][:M:]] { U > Ÿ;
[^[:L:][:M:]] { u > ÿ;
[^AaOoÁáÓó] { U > Ÿ;
[^AaOoÁáÓó] { u > ÿ;

[^Nn] { G > Ɣ;
[^Nn] { g > ɣ;

[^aeiouäöüÿïéèëáóúíAEIOUÄÖÜŸÏÉÈËÁÓÚÍ] { Y } [bcdfghjklmnpqrstvwxzšžčćńľđBCDFGHJKLMNPQRSTVWXZŠŽČĆŃĽĐ] > I;
[^aeiouäöüÿïéèëáóúíAEIOUÄÖÜŸÏÉÈËÁÓÚÍ] { y } [bcdfghjklmnpqrstvwxzšžčćńľđBCDFGHJKLMNPQRSTVWXZŠŽČĆŃĽĐ] > i;
[bcdfghjklmnpqrstvwxzšžčćńľđɣBCDFGHJKLMNPQRSTVWXZŠŽČĆŃĽĐƔ] { Y } [^[:L:][:M:]] > I;
[bcdfghjklmnpqrstvwxzšžčćńľđɣBCDFGHJKLMNPQRSTVWXZŠŽČĆŃĽĐƔ] { y } [^[:L:][:M:]] > i;

[^[:L:][:M:]] { J > Y;
[^[:L:][:M:]] { j > y;
[^IiÍí] { J > Y;
[^IiÍí] { j > y;

Ï > I;
ï > i;
Ë > E;
ë > e;

::Null;

[^[:L:][:M:]] { T [Ss] > C;
[^[:L:][:M:]] { t [Ss] > c;
N [Gg] > Ŋ;
n [Gg] > ŋ;
[ɣƔ] { [hH] } [^aeiouyäöüÿáéíóúèëïAEIOUYÄÖÜŸÁÉÍÓÚÈËÏ] > ;
[:L:] { T } [hH] [uU] [iI] [zZ] > T;
[:L:] { t } [hH] [uU] [iI] [zZ] > t;
[:L:] { T } [hH] [uU] [iI] [sS] > T;
[:L:] { t } [hH] [uU] [iI] [sS] > t;
[:L:] { T } [hH] [oO] [oO] [rR] [nN] > T;
[:L:] { t } [hH] [oO] [oO] [rR] [nN] > t;
[:L:] { T } [hH] [oO] [eE] [kK] > T;
[:L:] { t } [hH] [oO] [eE] [kK] > t;
[:L:] { T } [hH] [oO] [fF] > T;
[:L:] { t } [hH] [oO] [fF] > t;
[:L:] { T } [hH] [aA] [vV] [eE] [nN] > T;
[:L:] { t } [hH] [aA] [vV] [eE] [nN] > t;
[:L:] { T } [hH] [oO] [rR] [sS] [tT] > T;
[:L:] { t } [hH] [oO] [rR] [sS] [tT] > t;
[:L:] { T } [hH] [oO] [uU] [tT] > T;
[:L:] { t } [hH] [oO] [uU] [tT] > t;
[:L:] { T } [hH] [oO] [vV] [eE] > T;
[:L:] { t } [hH] [oO] [vV] [eE] > t;
[:L:] { T } [hH] [öÖ] [yY] [zZ] > T;
[:L:] { t } [hH] [öÖ] [yY] [zZ] > t;
[:L:] { T } [hH] [öÖ] [yY] [sS] > T;
[:L:] { t } [hH] [öÖ] [yY] [sS] > t;
[:L:] { T } [hH] [uU] [kK] > T;
[:L:] { t } [hH] [uU] [kK] > t;
T [Hh] > Þ;
t [Hh] > þ;
[:L:] { K } [hH] [aeiouyäöüåæøáéíóúýőűıâêîôûàèìòùëïõAEIOUYÄÖÜÅÆØÁÉÍÓÚÝŐŰIİÂÊÎÔÛÀÈÌÒÙËÏÕ] > K;
[:L:] { k } [hH] [aeiouyäöüåæøáéíóúýőűıâêîôûàèìòùëïõAEIOUYÄÖÜÅÆØÁÉÍÓÚÝŐŰIİÂÊÎÔÛÀÈÌÒÙËÏÕ] > k;
K [Hh] > Ḫ;
k [Hh] > ḫ;
`;
