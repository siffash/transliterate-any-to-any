export const latnSrRules = `
::Null;

T [hH] > T;
t [hH] > t;

NGH > NGH;
NGh > NGh;
NgH > NgH;
Ngh > Ngh;
nGH > nGH;
nGh > nGh;
ngH > ngH;
ngh > ngh;

G [hH] > G;
g [hH] > g;

K [hH] > H;
k [hH] > h;

T [sS] > C;
t [sS] > c;

IJ > EJ;
Ij > Ej;
iJ > eJ;
ij > ej;

::Null;

[:Lu:] { Ń > NJ;
Ń } [:Lu:] > NJ;
Ń > Nj;
ń > nj;

[:Lu:] { Ľ > LJ;
Ľ } [:Lu:] > LJ;
Ľ > Lj;
ľ > lj;

W > V;
w > v;

X > H;
x > h;

Y > J;
y > j;

Q > K;
q > k;

[ÄÖ] > E;
[äö] > e;

Ï > I;
ï > i;

[ÜŸ] > U;
[üÿ] > u;

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
· > ;

::Null;

[iI] { a > ja;
[iI] { A > JA;
[iI] { e > je;
[iI] { E > JE;
[iI] { u > ju;
[iI] { U > JU;

::Null;

[dD] [zZ] { [dD] [zZ] > ;
[dD] [žŽ] { [dD] [žŽ] > ;
[lL] [jJ] { [lL] [jJ] > ;
[nN] [jJ] { [nN] [jJ] > ;

::Null;

[aA] { [aA] > ;
[eE] { [eE] > ;
[iI] { [iI] > ;
[oO] { [oO] > ;
[uU] { [uU] > ;
[bB] { [bB] > ;
[cC] { [cC] > ;
[čČ] { [čČ] > ;
[ćĆ] { [ćĆ] > ;
[dD] { [dD] > ;
[đĐ] { [đĐ] > ;
[fF] { [fF] > ;
[gG] { [gG] > ;
[hH] { [hH] > ;
[jJ] { [jJ] > ;
[kK] { [kK] > ;
[lL] { [lL] > ;
[mM] { [mM] > ;
[nN] { [nN] > ;
[pP] { [pP] > ;
[rR] { [rR] > ;
[sS] { [sS] > ;
[šŠ] { [šŠ] > ;
[tT] { [tT] > ;
[vV] { [vV] > ;
[zZ] { [zZ] > ;
[žŽ] { [žŽ] > ;
`;
