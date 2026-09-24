export const latnSlRules = `
::Null;

T [sS] > C;
t [sS] > c;

T [hH] > T;
t [hH] > t;

G [hH] > G;
g [hH] > g;

K [hH] > H;
k [hH] > h;

IJ > EJ;
Ij > Ej;
iJ > eJ;
ij > ej;

::Null;

[:Lu:] { Đ > DŽ;
Đ } [:Lu:] > DŽ;
Đ > Dž;
đ > dž;

[:Lu:] { Ľ > LJ;
Ľ } [:Lu:] > LJ;
Ľ > Lj;
ľ > lj;

[:Lu:] { Ń > NJ;
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

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
· > ;

::Null;

[^[:L:][:M:]] { i } [aeouAEOU] > j;
[^[:L:][:M:]] { I } [aeouAEOU] > J;
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
