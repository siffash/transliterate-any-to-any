export const csLatnRules = `
::NFC;

x > ks;
X } [:Lower:] > Ks;
X > KS;

q > kv;
Q } [:Lower:] > Kv;
Q > KV;

w > v;
W > V;

ch > x;
Ch > X;
cH > X;
CH > X;

[ptkfsšcčxPTKFSŠCČX] { ř > rš;
[ptkfsšcčxPTKFSŠCČX] { Ř > RŠ;

ř } [ptkfsšcčxPTKFSŠCČX] > rš;
Ř } [ptkfsšcčxPTKFSŠCČX] > RŠ;

ř } [:^Letter:] > rš;
[:Upper:] { Ř } [:^Letter:] > RŠ;
Ř } [:^Letter:] > Rš;

ř > rž;
[:Upper:] { Ř > RŽ;
Ř > Rž;

c > ts;
C } [:Lower:] > Ts;
C > TS;

dě > đe;
Dě > Đe;
DĚ > ĐE;

tě > će;
Tě > Će;
TĚ > ĆE;

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

t } [ií] > ć;
T } [ií] > Ć;
T } [IÍ] > Ć;

n } [ií] > ń;
N } [ií] > Ń;
N } [IÍ] > Ń;

ď > đ;
Ď > Đ;

ť > ć;
Ť > Ć;

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
