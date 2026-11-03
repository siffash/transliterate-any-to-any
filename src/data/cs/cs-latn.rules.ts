export const csLatnRules = `
::NFC;

[[:L:][:M:]] { \\' } [[:L:][:M:]] > ’;

[:Lu:] { X > KS;
X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KS;
X } [:Lu:] > KS;
X > Ks;
x > ks;

qu } [aeiouáéěíóúůyýAEIOUÁÉĚÍÓÚŮYÝ] > kv;
qU } [aeiouáéěíóúůyýAEIOUÁÉĚÍÓÚŮYÝ] > kV;
Qu } [aeiouáéěíóúůyýAEIOUÁÉĚÍÓÚŮYÝ] > Kv;
QU } [aeiouáéěíóúůyýAEIOUÁÉĚÍÓÚŮYÝ] > KV;

q > k;
Q > K;

w > v;
W > V;

C [hH] > X;
c [hH] > x;

[PTKFSŠCČXŤ] { Ř > RŠ;
[ptkfsšcčxťPTKFSŠCČXŤ] { Ř } [:Lu:] > RŠ;
[ptkfsšcčxťPTKFSŠCČXŤ] { Ř > Rš;
[ptkfsšcčxťPTKFSŠCČXŤ] { ř > rš;

Ř } [PTKFSŠCČXŤ] > RŠ;
Ř } [ptkfsšcčxť] > Rš;
ř } [ptkfsšcčxťPTKFSŠCČXŤ] > rš;

[:Lu:] { Ř } [^[:L:][:M:]] > RŠ;
Ř } [^[:L:][:M:]] > Rš;
ř } [^[:L:][:M:]] > rš;

[:Lu:] { Ř > RŽ;
Ř } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > RŽ;
Ř } [:Lu:] > RŽ;
Ř > Rž;
ř > rž;

[:L:] { C } SS > K;
[:L:] { c } ss > k;

ď > d;
Ď > D;

ť > t;
Ť > T;

ň > ń;
Ň > Ń;

j > y;
J > Y;

á > a;
Á > A;

ó > o;
Ó > O;

[éě] > e;
[ÉĚ] > E;

[íýy] > i;
[ÍÝY] > I;

[úů] > u;
[ÚŮ] > U;

::Null;

[^[:L:][:M:]] { T [Ss] > C;
[^[:L:][:M:]] { t [Ss] > c;
D [Žž] > Ǯ;
d [Žž] > ǯ;
D [Zz] > Ẑ;
d [Zz] > ẑ;
T [Hh] > Þ;
t [Hh] > þ;
[nN] { G } [hH] > G;
[nN] { g } [hH] > g;
G [Hh] > Ɣ;
g [Hh] > ɣ;
`;
