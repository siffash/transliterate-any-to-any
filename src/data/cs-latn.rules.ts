export const csLatnRules = `
::NFC;

x > ks;
X } [:Ll:] > Ks;
X > KS;

q > kv;
Q } [:Ll:] > Kv;
Q > KV;

w > v;
W > V;

ch > x;
Ch > X;
cH > X;
CH > X;

[ptkfsšcčxťPTKFSŠCČXŤ] { ř > rš;
[ptkfsšcčxťPTKFSŠCČXŤ] { Ř } [:Ll:] > Rš;
[ptkfsšcčxťPTKFSŠCČXŤ] { Ř > RŠ;

ř } [ptkfsšcčxťPTKFSŠCČXŤ] > rš;
Ř } [ptkfsšcčxť] > Rš;
Ř } [PTKFSŠCČXŤ] > RŠ;

ř } [:^Letter:] > rš;
[:Lu:] { Ř } [:^Letter:] > RŠ;
Ř } [:^Letter:] > Rš;

ř > rž;
Ř } [:Ll:] > Rž;
Ř > RŽ;

c > ts;
C } [:Ll:] > Ts;
C > TS;

dě > đe;
Dě > Đe;
DĚ > ĐE;

ně > ńe;
Ně > Ńe;
NĚ > ŃE;

mě > mńe;
Mě > Mńe;
MĚ > MŃE;

bě > bye;
Bě > Bye;
BĚ > BYE;

pě > pye;
Pě > Pye;
PĚ > PYE;

vě > vye;
Vě > Vye;
VĚ > VYE;

fě > fye;
Fě > Fye;
FĚ > FYE;

d } [ií] > đ;
D } [ií] > Đ;
D } [IÍ] > Đ;

n } [ií] > ń;
N } [ií] > Ń;
N } [IÍ] > Ń;

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
