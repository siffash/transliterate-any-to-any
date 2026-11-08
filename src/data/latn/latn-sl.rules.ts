export const latnSlRules = `
::Null;

[:Lu:] { Ŋ > NG;
Ŋ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > NG;
Ŋ } [:Lu:] > NG;
Ŋ > Ng;
ŋ > ng;

[:Lu:] { Ẑ > DZ;
Ẑ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > DZ;
Ẑ } [:Lu:] > DZ;
Ẑ > Dz;
ẑ > dz;

[:Lu:] { Ǯ > DŽ;
Ǯ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > DŽ;
Ǯ } [:Lu:] > DŽ;
Ǯ > Dž;
ǯ > dž;

::Null;

[Čč] { [Čč] > ;
[Đđ] { [Đđ] > ;
[Dd] [Žž] { [Dd] [Žž] > ;

Þ > T;
þ > t;

Ɣ > G;
ɣ > g;

Ḫ > H;
ḫ > h;

IJ > EJ;
Ij > Ej;
iJ > eJ;
ij > ej;

::Null;

[:Lu:] { Đ > DŽ;
Đ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > DŽ;
Đ } [:Lu:] > DŽ;
Đ > Dž;
đ > dž;

[:Lu:] { Ľ > LJ;
Ľ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > LJ;
Ľ } [:Lu:] > LJ;
Ľ > Lj;
ľ > lj;

[:Lu:] { Ń > NJ;
Ń } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > NJ;
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

[bB] { [bB]+ > ;
[cC] { [cC]+ > ;
[čČ] { [čČ]+ > ;
[dD] { [dD]+ > ;
[fF] { [fF]+ > ;
[gG] { [gG]+ > ;
[hH] { [hH]+ > ;
[jJ] { [jJ]+ > ;
[kK] { [kK]+ > ;
[lL] { [lL]+ > ;
[mM] { [mM]+ > ;
[nN] { [nN]+ > ;
[pP] { [pP]+ > ;
[rR] { [rR]+ > ;
[sS] { [sS]+ > ;
[šŠ] { [šŠ]+ > ;
[tT] { [tT]+ > ;
[vV] { [vV]+ > ;
[zZ] { [zZ]+ > ;
[žŽ] { [žŽ]+ > ;
`;
