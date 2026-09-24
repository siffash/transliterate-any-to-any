export const latnIsRules = `
::Null;

IJ > EI;
iJ > eI;
Ij > Ei;
ij > ei;

DŽ > DSJ;
dŽ > dSJ;
Dž > Dsj;
dž > dsj;

DZ > DS;
dZ > dS;
Dz > Ds;
dz > ds;

T [hH] > Þ;
t [hH] > þ;

NGH > NGH;
NGh > NGh;
Ngh > Ngh;
ngh > ngh;

G [hH] > G;
g [hH] > g;

K [hH] > K;
k [hH] > k;

::Null;

[:Lu:] { [ČĆ] > TSJ;
[ČĆ] } [:Lu:] > TSJ;
[ČĆ] > Tsj;
[čć] > tsj;

[:Lu:] { Đ > DJ;
Đ } [:Lu:] > DJ;
Đ > Dj;
đ > dj;

Ľ } [^[:L:][:M:]] > L;
ľ } [^[:L:][:M:]] > l;
Ľ } [Jj] > L;
ľ } [Jj] > l;
[:Lu:] { Ľ > LJ;
Ľ } [:Lu:] > LJ;
Ľ > Lj;
ľ > lj;

Ń } [^[:L:][:M:]] > N;
ń } [^[:L:][:M:]] > n;
Ń } [Jj] > N;
ń } [Jj] > n;
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

a [aA] > á;
A [aA] > Á;
e [eE] > é;
E [eE] > É;
i [iI] > í;
I [iI] > Í;
o [oO] > ó;
O [oO] > Ó;
u [uU] > ú;
U [uU] > Ú;
y [yY] > ý;
Y [yY] > Ý;

[öÖ] { [öÖ] > ;
[æÆ] { [æÆ] > ;
`;
