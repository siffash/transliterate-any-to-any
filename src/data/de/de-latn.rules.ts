export const deLatnRules = `
::NFC;

[fF] [gG] { h > h;
[fF] [gG] { H > H;
[:L:] [gGkK] { h } [aeiouyäöüåæøáéíóúýőűıâêîôûàèìòùëïõAEIOUYÄÖÜÅÆØÁÉÍÓÚÝŐŰIİÂÊÎÔÛÀÈÌÒÙËÏÕ] > ӽ;
[:L:] [gGkK] { H } [aeiouyäöüåæøáéíóúýőűıâêîôûàèìòùëïõAEIOUYÄÖÜÅÆØÁÉÍÓÚÝŐŰIİÂÊÎÔÛÀÈÌÒÙËÏÕ] > Ӽ;

[:L:] [tT] { h } [aA] [uU] [sS] > ӽ;
[:L:] [tT] { H } [aA] [uU] [sS] > Ӽ;
[:L:] [tT] { h } [oO] [fF] > ӽ;
[:L:] [tT] { H } [oO] [fF] > Ӽ;
[:L:] [tT] { h } [eE] [iI] [mM] > ӽ;
[:L:] [tT] { H } [eE] [iI] [mM] > Ӽ;
[:L:] [tT] { h } [oO] [vV] [eE] [nN] > ӽ;
[:L:] [tT] { H } [oO] [vV] [eE] [nN] > Ӽ;
[:L:] [tT] { h } [aA] [nN] [sS] [aA] > ӽ;
[:L:] [tT] { H } [aA] [nN] [sS] [aA] > Ӽ;
[:L:] [tT] { h } [aA] [gG] [eE] [nN] > ӽ;
[:L:] [tT] { H } [aA] [gG] [eE] [nN] > Ӽ;
[:L:] [tT] { h } [eE] [lL] [mM] > ӽ;
[:L:] [tT] { H } [eE] [lL] [mM] > Ӽ;
[:L:] [tT] { h } [aA] [rR] [dDtT] > ӽ;
[:L:] [tT] { H } [aA] [rR] [dDtT] > Ӽ;
[tT] [tT] { h } [oO] [lL] [dD] > ӽ;
[tT] [tT] { H } [oO] [lL] [dD] > Ӽ;
[tT] [tT] { h } [eEiI] [lL] [fF] > ӽ;
[tT] [tT] { H } [eEiI] [lL] [fF] > Ӽ;

::Null;

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
[bdfgklmnprtzBDFGKLMNPRTZ] { s } t [eE] [iI] [nN] > š;
[bdfgklmnprtzBDFGKLMNPRTZ] { s } t [rR] [aA] [ßẞ] [eE] > š;
[bdfgklmnprtzBDFGKLMNPRTZ] { s } t [rR] [aA] [sS] [sS] [eE] > š;
[bdfgklmnprtzBDFGKLMNPRTZ] { s } t [eE] [dD] [tT] > š;
[bdfgklmnprtzBDFGKLMNPRTZ] { s } t [äÄ] [tT] [tT] > š;
[bdfgklmnprtzBDFGKLMNPRTZ] { s } t [aA] [tT] [tT] > š;
[bdfgklmnprtzBDFGKLMNPRTZ] { s } t [uU] [hH] [lL] > š;
[bdfgklmnprtzBDFGKLMNPRTZ] { s } t [eE] [rR] [nN] > š;
[bdfgklmnprtzBDFGKLMNPRTZ] { s } p [iI] [eE] [lL] > š;
[bdfgklmnprtzBDFGKLMNPRTZ] { s } p [iI] [tT] [zZ] > š;

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

DSCH > DŽ;
D [sS] [cC] [hH] > Dž;
dsch > dž;

TZ > TS;
Tz > Ts;
tZ > tS;
tz > ts;

[:Lu:] { Z > TS;
Z } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > TS;
Z } [:Lu:] > TS;
Z > Ts;
z > ts;

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

P [hH] > F;
p [hH] > f;

T [hH] > T;
t [hH] > t;
[^[:L:][:M:]] { R [hH] > R;
[^[:L:][:M:]] { r [hH] > r;
R [hH] } [eE] [iI] [nN] > R;
R [hH] } [öÖ] [nN] > R;
r [hH] } [eE] [iI] [nN] > r;
r [hH] } [öÖ] [nN] > r;

[AEIOUÄÖÜYaeiouäöüy] [BCDFGHJKLMNPQRSTVWXZßŠŽČbcdfghjklmnpqrstvwxzßšžč]* { e } [uU] [sSmM] [^[:L:][:M:]] > e;
[AEIOUÄÖÜYaeiouäöüy] [BCDFGHJKLMNPQRSTVWXZßŠŽČbcdfghjklmnpqrstvwxzßšžč]* { E } [uU] [sSmM] [^[:L:][:M:]] > E;
[AEIOUÄÖÜYaeiouäöüy] [BCDFGHJKLMNPQRSTVWXZßŠŽČbcdfghjklmnpqrstvwxzßšžč]* { ä } [uU] [sSmM] [^[:L:][:M:]] > ä;
[AEIOUÄÖÜYaeiouäöüy] [BCDFGHJKLMNPQRSTVWXZßŠŽČbcdfghjklmnpqrstvwxzßšžč]* { Ä } [uU] [sSmM] [^[:L:][:M:]] > Ä;
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

C } [EIYÄÖÜ] > TS;
C } [eiyäöü] > Ts;
c } [eiyäöüEIYÄÖÜ] > ts;

C > K;
c > k;

J > Y;
j > y;

[:Lu:] { [ẞß] > SS;
[ẞß] } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > SS;
[ẞß] } [:Lu:] > SS;
[ẞß] > ss;

I [eE] > I;
i [eE] > i;
`;
