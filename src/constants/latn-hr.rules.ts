export const latnHrRules = `
::Null;

TS > C;
Ts > C;
tS > C;
ts > c;
TH > T;
Th > T;
tH > T;
th > t;
GH > G;
Gh > G;
gH > G;
gh > g;
KH > H;
Kh > H;
kH > H;
kh > h;
IJ > EJ;
Ij > Ej;
iJ > eJ;
ij > ej;
Ľ } [:Lu:] > LJ;
[:Lu:] { Ľ } [:^Letter:] > LJ;
Ľ > Lj;
ľ > lj;
Ń } [:Lu:] > NJ;
[:Lu:] { Ń } [:^Letter:] > NJ;
Ń > Nj;
ń > nj;
W > V;
w > v;
X > H;
x > h;
Y > J;
y > j;
Q > K;
q > k;
Ä > E;
ä > e;
Ï > I;
ï > i;
Ö > O;
ö > o;
Ü > U;
ü > u;
Ÿ > I;
ÿ > i;
['·] > ;

::Null;

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
[dD][žŽ] { [dD][žŽ] > ;

::Null;

[iI] { a > ja;
[iI] { A > JA;
[iI] { e > je;
[iI] { E > JE;
[iI] { u > ju;
[iI] { U > JU;

::Null;

[iI] { [jJ] } [oO] > ;

::Null;

[čČćĆđĐšŠžŽ] { [jJ] > ;
[dD][žŽ] { [jJ] > ;
`;
