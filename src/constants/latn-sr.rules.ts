export const latnSrRules = `
::Null;

TH > T;
Th > T;
tH > t;
th > t;

DH > D;
Dh > D;
dH > d;
dh > d;

GH > G;
Gh > G;
gH > g;
gh > g;

KH > H;
Kh > H;
kH > h;
kh > h;

TS > C;
Ts > C;
tS > c;
ts > c;

IJ > EJ;
Ij > Ej;
iJ > eJ;
ij > ej;

[:Upper:] { Ń > NJ;
Ń } [:Upper:] > NJ;
Ń > Nj;
ń > nj;

[:Upper:] { Ľ > LJ;
Ľ } [:Upper:] > LJ;
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

[ÜÏŸ] > I;
[üïÿ] > i;

['·] > ;

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

[dD] [žŽ] { [dD] [žŽ] > ;
[lL] [jJ] { [lL] [jJ] > ;
[nN] [jJ] { [nN] [jJ] > ;

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
`;
