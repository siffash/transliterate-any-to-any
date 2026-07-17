export const latnSlRules = `
::Null;

TS > C;
Ts > C;
tS > c;
ts > c;

TH > T;
Th > T;
tH > t;
th > t;

GH > G;
Gh > G;
gH > g;
gh > g;

KH > H;
Kh > H;
kH > h;
kh > h;

IJ > EJ;
Ij > Ej;
iJ > ej;
ij > ej;

[A-ZÄÏÖÜŸĆČĐĽŃŠŽ] { Đ } [:^Letter:] > DŽ;
Đ } [A-ZÄÏÖÜŸĆČĐĽŃŠŽ] > DŽ;
Đ > Dž;
đ > dž;

[A-ZÄÏÖÜŸĆČĐĽŃŠŽ] { Ľ } [:^Letter:] > LJ;
Ľ } [A-ZÄÏÖÜŸĆČĐĽŃŠŽ] > LJ;
Ľ > Lj;
ľ > lj;

[A-ZÄÏÖÜŸĆČĐĽŃŠŽ] { Ń } [:^Letter:] > NJ;
Ń } [A-ZÄÏÖÜŸĆČĐĽŃŠŽ] > NJ;
Ń > Nj;
ń > nj;

Ć > Č;
ć > č;

Q > K;
q > k;

W > V;
w > v;

X > H;
x > h;

Y > J;
y > j;

Ä > E;
ä > e;

Ö > E;
ö > e;

[ÏÜŸ] > I;
[ïüÿ] > i;

['·] > ;

::Null;

[:^Letter:] { i } [aeouAEOU] > j;
[:^Letter:] { I } [aeouAEOU] > J;

::Null;

ia > ija;
ie > ije;
io > ijo;
iu > iju;
iA > ijA;
iE > ijE;
iO > ijO;
iU > ijU;
Ia > Ija;
Ie > Ije;
Io > Ijo;
Iu > Iju;
IA > IJA;
IE > IJE;
IO > IJO;
IU > IJU;

::Null;

[čšžcČŠŽC] { [jJ] > ;

::Null;

[bB] { [bB] > ;
[cC] { [cC] > ;
[čČ] { [čČ] > ;
[dD] { [dD] > ;
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
