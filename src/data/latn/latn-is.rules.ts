export const latnIsRules = `
::Null;

IJ > EI;
Ij > Ei;
ij > ei;

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

[:Lu:] { [ČĆ] > TSJ;
[ČĆ] } [:Lu:] > TSJ;
[ČĆ] > Tsj;
[čć] > tsj;

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

[:Lu:] { [ŠŽ] > SJ;
[ŠŽ] } [:Lu:] > SJ;
[ŠŽ] > Sj;
[šž] > sj;

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

QU } [aeiouyáéíóúýæööäïüÿAEIOUYÁÉÍÓÚÝÆÖÖÄÏÜŸ] > KV;
Qu } [aeiouyáéíóúýæööäïüÿAEIOUYÁÉÍÓÚÝÆÖÖÄÏÜŸ] > Kv;
qU } [aeiouyáéíóúýæööäïüÿAEIOUYÁÉÍÓÚÝÆÖÖÄÏÜŸ] > kV;
qu } [aeiouyáéíóúýæööäïüÿAEIOUYÁÉÍÓÚÝÆÖÖÄÏÜŸ] > kv;

[QX] > K;
[qx] > k;

W > V;
w > v;

Y > J;
y > j;

Z > S;
z > s;

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
· > ;

::Null;

[kKgGhH] { [jJ] } [eEéÉiIíÍyYýÝæÆ] > ;
[^[:L:][:M:]] { ð > d;
[^[:L:][:M:]] { Ð > D;

qu } [aeiouyáéíóúýæööAEIOUYÁÉÍÓÚÝÆÖÖ] > kv;
Qu } [aeiouyáéíóúýæööAEIOUYÁÉÍÓÚÝÆÖÖ] > Kv;
qU } [aeiouyáéíóúýæööAEIOUYÁÉÍÓÚÝÆÖÖ] > kV;
QU } [aeiouyáéíóúýæööAEIOUYÁÉÍÓÚÝÆÖÖ] > KV;

c } [eEéÉiIíÍyYýÝæÆ] > s;
C } [eEéÉiIíÍyYýÝæÆ] > S;

[cq] > k;
[CQ] > K;

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

[öÖ] { [öÖ] > ;
[æÆ] { [æÆ] > ;
`;
