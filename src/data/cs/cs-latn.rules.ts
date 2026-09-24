export const csLatnRules = `
::NFC;

[:Lu:] { X > KS;
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
Ř } [:Lu:] > RŽ;
Ř > Rž;
ř > rž;

[:Lu:] { C > TS;
C } [:Lu:] > TS;
C > Ts;
c > ts;

dě > đe;
Dě > Đe;
dĚ > đE;
DĚ > ĐE;

ně > ńe;
Ně > Ńe;
nĚ > ńE;
NĚ > ŃE;

mě > mńe;
Mě > Mńe;
mĚ > mńE;
MĚ > MŃE;

bě > bye;
Bě > Bye;
bĚ > byE;
BĚ > BYE;

pě > pye;
Pě > Pye;
pĚ > pyE;
PĚ > PYE;

vě > vye;
Vě > Vye;
vĚ > vyE;
VĚ > VYE;

fě > fye;
Fě > Fye;
fĚ > fyE;
FĚ > FYE;

d } [iíIÍ] > đ;
D } [iíIÍ] > Đ;

n } [iíIÍ] > ń;
N } [iíIÍ] > Ń;

ď > đ;
Ď > Đ;

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
`;
