export const deLatnRules = `
::NFC;

[[:L:][:M:]] { \\' } [[:L:][:M:]] > ’;

[^[:L:][:M:]] [sS] [oO] { [eE] } [sS] [tT] > ;
[^[:L:][:M:]] [cC] [oO] { [eE] } [sS] [fF] [eE] [lL] [dD] > ;
[^[:L:][:M:]] [cC] [oO] { [eE] } [rR] [dD] [eE] > ;
[^[:L:][:M:]] [vV] [oO] { [eE] } [rR] [dD] [eE] > ;
[^[:L:][:M:]] [oO] { [eE] } [rR] [^[:L:][:M:]] > ;
[^[:L:][:M:]] [kK] [eE] [vV] [eE] [lL] [aA] { [eE] } [rR] > ;
[^[:L:][:M:]] [lL] [aA] { [eE] } [rR] [^[:L:][:M:]] > ;
[^[:L:][:M:]] [sS] [tT] [rR] [aA] { [eE] } [lL] [eE] [nN] > ;
[^[:L:][:M:]] [bB] [aA] { [eE] } [sS] [wW] [eE] [iI] [lL] [eE] [rR] > ;
[^[:L:][:M:]] [rR] [aA] { [eE] } [sS] [fF] [eE] [lL] [dD] > ;
[^[:L:][:M:]] [bB] [uU] { [eE] } [rR] [^[:L:][:M:]] > ;
[^[:L:][:M:]] [kK] [uU] { [eE] } [sS] [^[:L:][:M:]] > ;
[^[:L:][:M:]] [gG] { [uU] } [eE] [rR] [iI] [cC] [kK] [eE] > ;
[^[:L:][:M:]] [bB] [aA] { [eE] } [yY] [eE] [rR] > ;

::Null;

[^[:L:][:M:]] [nN] { o } [eE] [mM] [iI] > o;
[^[:L:][:M:]] [nN] { O } [eE] [mM] [iI] > O;
[^[:L:][:M:]] [jJ] { o } [eE] [lL] [lL] [eE] > o;
[^[:L:][:M:]] [jJ] { O } [eE] [lL] [lL] [eE] > O;

o } [eE] [lL]? [^[:L:][:M:]] > o;
O } [eE] [lL]? [^[:L:][:M:]] > O;
C } [oO] [eE] > K;
c } [oO] [eE] > k;
OE > Ö;
Oe > Ö;
oe > ö;

AEU > ÄU;
Aeu > Äu;
aeu > äu;
a } [eE] [lL] [iI]? [sS]? [aA]? [^[:L:][:M:]] > a;
A } [eE] [lL] [iI]? [sS]? [aA]? [^[:L:][:M:]] > A;
a } [eE] [lL] [sS] [eEoO] [nN] [^[:L:][:M:]] > a;
A } [eE] [lL] [sS] [eEoO] [nN] [^[:L:][:M:]] > A;
AE > Ä;
Ae > Ä;
ae > ä;

[aAeEäÄqQ] { u } [eE] > u;
[aAeEäÄqQ] { U } [eE] > U;
u } [eE] [lL] [sS]? [aA]? [^[:L:][:M:]] > u;
U } [eE] [lL] [sS]? [aA]? [^[:L:][:M:]] > U;
u } [eE] [lL] [sS] [sS]? [oO] [nN] [^[:L:][:M:]] > u;
U } [eE] [lL] [sS] [sS]? [oO] [nN] [^[:L:][:M:]] > U;
UE > Ü;
Ue > Ü;
ue > ü;

::Null;

C [hH] } [aA] [rR] [lL] [oO] [tT] [tT] [eE] > Š;
c [hH] } [aA] [rR] [lL] [oO] [tT] [tT] [eE] > š;

S } [tT] [aA] [dD] [tT] > Š;
s } [tT] [aA] [dD] [tT] > š;

[^[:L:][:M:]] { S } [tTpP] > Š;
[^[:L:][:M:]] { s } [tTpP] > š;
[bdfgklmnprtzBDFGKLMNPRTZẑẐ] { s } t [eE] [iI] [nN] > š;
[bdfgklmnprtzBDFGKLMNPRTZẑẐ] { s } t [rR] [aA] [ßẞ] [eE] > š;
[bdfgklmnprtzBDFGKLMNPRTZẑẐ] { s } t [rR] [aA] [sS] [sS] [eE] > š;
[bdfgklmnprtzBDFGKLMNPRTZẑẐ] { s } t [eE] [dD] [tT] > š;
[bdfgklmnprtzBDFGKLMNPRTZẑẐ] { s } t [äÄ] [tT] [tT] > š;
[bdfgklmnprtzBDFGKLMNPRTZẑẐ] { s } t [aA] [tT] [tT] > š;
[bdfgklmnprtzBDFGKLMNPRTZẑẐ] { s } t [uU] [hH] [lL] > š;
[bdfgklmnprtzBDFGKLMNPRTZẑẐ] { s } t [eE] [rR] [nN] > š;
[bdfgklmnprtzBDFGKLMNPRTZẑẐ] { s } p [iI] [eE] [lL] > š;
[bdfgklmnprtzBDFGKLMNPRTZẑẐ] { s } p [iI] [tT] [zZ] > š;

TSCH > Č;
TSch > Č;
Tsch > Č;
tsch > č;

SCH > Š;
Sch > Š;
sCh > š;
sch > š;

[:Lu:] { X > KS;
X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KS;
X } [:Lu:] > KS;
X > Ks;
x > ks;

[^[:L:][:M:]] { C [hH] } [rR] > K;
[^[:L:][:M:]] { c [hH] } [rR] > k;
C [hH] } [sS] [^tT] > K;
c [hH] } [sS] [^tT] > k;
C [hH] > X;
c [hH] > x;

D [sS] [cC] [hH] > Ǯ;
d [sS] [cC] [hH] > ǯ;

T [zZ] > C;
t [zZ] > c;

Z > C;
z > c;

[^[:L:][:M:]] { S } [AEIOUÄÖÜYaeiouäöüy] > Z;
[^[:L:][:M:]] { s } [AEIOUÄÖÜYaeiouäöüy] > z;
[AEIOUÄÖÜYaeiouäöüy] { S } [AEIOUÄÖÜYaeiouäöüy] > Z;
[AEIOUÄÖÜYaeiouäöüy] { s } [AEIOUÄÖÜYaeiouäöüy] > z;
[uU] [rR] { S } [uU] [lL] [aA] > S;
[uU] [rR] { s } [uU] [lL] [aA] > s;
[nN] { S } [eE] [lL] [mM] > S;
[nN] { s } [eE] [lL] [mM] > s;
[lLnNrR] { S } [eE] [nN] [^[:L:][:M:]] > S;
[lLnNrR] { s } [eE] [nN] [^[:L:][:M:]] > s;
[lLnNrR] { S } [AEIOUÄÖÜYaeiouäöüy] > Z;
[lLnNrR] { s } [AEIOUÄÖÜYaeiouäöüy] > z;

[Pp] { P } [hH] > P;
[Pp] { p } [hH] > p;
P [hH] > F;
p [hH] > f;

[:L:] { T } [hH] [aA] [uU] [sS] > T;
[:L:] { t } [hH] [aA] [uU] [sS] > t;
[:L:] { T } [hH] [oO] [fF] > T;
[:L:] { t } [hH] [oO] [fF] > t;
[:L:] { T } [hH] [eE] [iI] [mM] > T;
[:L:] { t } [hH] [eE] [iI] [mM] > t;
[:L:] { T } [hH] [oO] [vV] [eE] [nN] > T;
[:L:] { t } [hH] [oO] [vV] [eE] [nN] > t;
[:L:] { T } [hH] [aA] [nN] [sS] [aA] > T;
[:L:] { t } [hH] [aA] [nN] [sS] [aA] > t;
[:L:] { T } [hH] [aA] [gG] [eE] [nN] > T;
[:L:] { t } [hH] [aA] [gG] [eE] [nN] > t;
[:L:] { T } [hH] [eE] [lL] [mM] > T;
[:L:] { t } [hH] [eE] [lL] [mM] > t;
[:L:] { T } [hH] [aA] [rR] [dDtT] > T;
[:L:] { t } [hH] [aA] [rR] [dDtT] > t;
[tT] { T } [hH] [oO] [lL] [dD] > T;
[tT] { t } [hH] [oO] [lL] [dD] > t;
[tT] { T } [hH] [eEiI] [lL] [fF] > T;
[tT] { t } [hH] [eEiI] [lL] [fF] > t;
T [hH] > T;
t [hH] > t;
[^[:L:][:M:]] { R [hH] > R;
[^[:L:][:M:]] { r [hH] > r;
R [hH] } [eE] [iI] [nN] > R;
R [hH] } [öÖ] [nN] > R;
r [hH] } [eE] [iI] [nN] > r;
r [hH] } [öÖ] [nN] > r;

[AEIOUÄÖÜYaeiouäöüy] [BCDFGHJKLMNPQRSTVWXZßŠŽČbcdfghjklmnpqrstvwxzßšžčǯǮẑẐ]* { e } [uU] [sSmM] [^[:L:][:M:]] > e;
[AEIOUÄÖÜYaeiouäöüy] [BCDFGHJKLMNPQRSTVWXZßŠŽČbcdfghjklmnpqrstvwxzßšžčǯǮẑẐ]* { E } [uU] [sSmM] [^[:L:][:M:]] > E;
[AEIOUÄÖÜYaeiouäöüy] [BCDFGHJKLMNPQRSTVWXZßŠŽČbcdfghjklmnpqrstvwxzßšžčǯǮẑẐ]* { ä } [uU] [sSmM] [^[:L:][:M:]] > ä;
[AEIOUÄÖÜYaeiouäöüy] [BCDFGHJKLMNPQRSTVWXZßŠŽČbcdfghjklmnpqrstvwxzßšžčǯǮẑẐ]* { Ä } [uU] [sSmM] [^[:L:][:M:]] > Ä;
[EA] [IY] > AY;
[ea] [iy] > ay;
[EA] [iy] > Ay;
[ÄE] U > OY;
[äe] u > oy;
[ÄE] u > Oy;

[aeiouäöüAEIOUÄÖÜ] { [hH] } [^aeiouäöüyAEIOUÄÖÜY] > ;
A { [aA] > ;
a { a > ;
E { [eE] > ;
e { e > ;
O { [oO] > ;
o { o > ;

[AEOUaeou] [UYIuyi] { ẞ > S;
[AEOUaeou] [UYIuyi] { ß > s;

V > F;
v > f;

W > V;
w > v;

QU } [aeiouäöüyAEIOUÄÖÜY] > KV;
Qu } [aeiouäöüyAEIOUÄÖÜY] > Kv;
qU } [aeiouäöüyAEIOUÄÖÜY] > kV;
qu } [aeiouäöüyAEIOUÄÖÜY] > kv;

C [kK] > K;
c [kK] > k;

C } [eiyäöüEIYÄÖÜ] > C;
c } [eiyäöüEIYÄÖÜ] > c;

C > K;
c > k;

[^aeiouäöüAEIOUÄÖÜ] { Y } [^aeiouäöüAEIOUÄÖÜ] > I;
[^aeiouäöüAEIOUÄÖÜ] { y } [^aeiouäöüAEIOUÄÖÜ] > i;

J > Y;
j > y;

[:Lu:] { [ẞß] > SS;
[ẞß] } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > SS;
[ẞß] } [:Lu:] > SS;
[ẞß] > ss;

I [eE] > I;
i [eE] > i;

::Null;

[^[:L:][:M:]] { T [Ss] > C;
[^[:L:][:M:]] { t [Ss] > c;
N [Gg] > Ŋ;
n [Gg] > ŋ;
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
