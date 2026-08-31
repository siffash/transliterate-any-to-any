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

::Null;

[:Lu:] { Đ } [:^Letter:] > DŽ;
Đ } [:Lu:] > DŽ;
Đ > Dž;
đ > dž;

[:Lu:] { Ľ } [:^Letter:] > LJ;
Ľ } [:Lu:] > LJ;
Ľ > Lj;
ľ > lj;

[:Lu:] { Ń } [:^Letter:] > NJ;
Ń } [:Lu:] > NJ;
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

[ÄÖ] > E;
[äö] > e;

Ï > I;
ï > i;

[ÜŸ] > U;
[üÿ] > u;

[:^Letter:] { \\' > ;
\\' } [:^Letter:] > ;
· > ;

::Null;

[:^Letter:] { i } [aeouAEOU] > j;
[:^Letter:] { I } [aeouAEOU] > J;
[aeouAEOU] { i > j;
[aeouAEOU] { I > J;

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
