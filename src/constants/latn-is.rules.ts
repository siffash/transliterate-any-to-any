export const latnIsRules = `
::Null;

[:Lu:] { IJ } [:Lu:] > EI;
[:Lu:] { IJ } [:^Letter:] > EI;
IJ } [:Lu:] > EI;
IJ > Ei;
Ij > Ei;
ij > ei;

[:Lu:] { DŽ } [:Lu:] > DSJ;
[:Lu:] { DŽ } [:^Letter:] > DSJ;
DŽ } [:Lu:] > DSJ;
DŽ > Dsj;
Dž > Dsj;
dž > dsj;

[:Lu:] { DZ } [:Lu:] > DS;
[:Lu:] { DZ } [:^Letter:] > DS;
DZ } [:Lu:] > DS;
DZ > Ds;
Dz > Ds;
dz > ds;

TH > Þ;
Th > Þ;
th > þ;

DH > Ð;
Dh > Ð;
dh > ð;

GH > G;
Gh > G;
gh > g;

KH > K;
Kh > K;
kh > k;

[:Lu:] { Ć } [:Lu:] > TSJ;
[:Lu:] { Ć } [:^Letter:] > TSJ;
Ć } [:Lu:] > TSJ;
Ć > Tsj;
ć > tsj;

[:Lu:] { Č } [:Lu:] > TSJ;
[:Lu:] { Č } [:^Letter:] > TSJ;
Č } [:Lu:] > TSJ;
Č > Tsj;
č > tsj;

[:Lu:] { Đ } [:Lu:] > DJ;
[:Lu:] { Đ } [:^Letter:] > DJ;
Đ } [:Lu:] > DJ;
Đ > Dj;
đ > dj;

[:Lu:] { Ľ } [:Lu:] > LJ;
[:Lu:] { Ľ } [:^Letter:] > LJ;
Ľ } [:Lu:] > LJ;
Ľ > Lj;
ľ > lj;

[:Lu:] { Ń } [:Lu:] > NJ;
[:Lu:] { Ń } [:^Letter:] > NJ;
Ń } [:Lu:] > NJ;
Ń > Nj;
ń > nj;

[:Lu:] { Š } [:Lu:] > SJ;
[:Lu:] { Š } [:^Letter:] > SJ;
Š } [:Lu:] > SJ;
Š > Sj;
š > sj;

[:Lu:] { Ž } [:Lu:] > SJ;
[:Lu:] { Ž } [:^Letter:] > SJ;
Ž } [:Lu:] > SJ;
Ž > Sj;
ž > sj;

Ä > Æ;
ä > æ;
Ï > Í;
ï > í;
U > Ú;
u > ú;
Ü > Y;
ü > y;
Ÿ > U;
ÿ > u;

Q > K;
q > k;
W > V;
w > v;
X > K;
x > k;
Y > J;
y > j;
Z > S;
z > s;

['·] > ;

::Null;

[kKgGhH] { [jJ] } [eEéÉiIíÍyYýÝæÆ] > ;
[:^Letter:] { ð > d;
[:^Letter:] { Ð > D;
qu > kv;
Qu > Kv;
QU > KV;
q > k;
Q > K;
c } [eEéÉiIíÍyYýÝæÆ] > s;
C } [eEéÉiIíÍyYýÝæÆ] > S;
c > k;
C > K;
w > v;
W > V;
z > s;
Z > S;
aa > á;
Aa > Á;
AA > Á;
ee > é;
Ee > É;
EE > É;
ii > í;
Ii > Í;
II > Í;
oo > ó;
Oo > Ó;
OO > Ó;
uu > ú;
Uu > Ú;
UU > Ú;
yy > ý;
Yy > Ý;
YY > Ý;
öö > ö;
Öö > Ö;
ÖÖ > Ö;
ææ > æ;
Ææ > Æ;
ÆÆ > Æ;
`;
