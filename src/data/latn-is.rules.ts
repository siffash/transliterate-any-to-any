export const latnIsRules = `
::Null;

IJ > EI;
Ij > Ei;
ij > ei;

[:Lu:] { DŽ > DSJ;
DŽ } [:Lu:] > DSJ;
DŽ > Dsj;
Dž > Dsj;
dž > dsj;

DZ > DS;
Dz > Ds;
dz > ds;

TH > Þ;
Th > Þ;
th > þ;

NGH > NGH;
NGh > NGh;
Ngh > Ngh;
ngh > ngh;

GH > G;
Gh > G;
gh > g;

KH > K;
Kh > K;
kh > k;

::Null;

[:Lu:] { Ć > TSJ;
Ć } [:Lu:] > TSJ;
Ć > Tsj;
ć > tsj;

[:Lu:] { Č > TSJ;
Č } [:Lu:] > TSJ;
Č > Tsj;
č > tsj;

[:Lu:] { Đ > DJ;
Đ } [:Lu:] > DJ;
Đ > Dj;
đ > dj;

[:Lu:] { Ľ > LJ;
Ľ } [:Lu:] > LJ;
Ľ > Lj;
ľ > lj;

[:Lu:] { Ń > NJ;
Ń } [:Lu:] > NJ;
Ń > Nj;
ń > nj;

[:Lu:] { Š > SJ;
Š } [:Lu:] > SJ;
Š > Sj;
š > sj;

[:Lu:] { Ž > SJ;
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

QU > KV;
Qu > Kv;
qu > kv;

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
aA > Á;
Aa > Á;
AA > Á;
ee > é;
eE > É;
Ee > É;
EE > É;
ii > í;
iI > Í;
Ii > Í;
II > Í;
oo > ó;
oO > Ó;
Oo > Ó;
OO > Ó;
uu > ú;
uU > Ú;
Uu > Ú;
UU > Ú;
yy > ý;
yY > Ý;
Yy > Ý;
YY > Ý;
öö > ö;
öÖ > Ö;
Öö > Ö;
ÖÖ > Ö;
ææ > æ;
æÆ > Æ;
Ææ > Æ;
ÆÆ > Æ;
`;
