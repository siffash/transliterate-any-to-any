export const latnSrRules = `
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

[:Lu:] { Ń > NJ;
Ń } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > NJ;
Ń } [:Lu:] > NJ;
Ń > Nj;
ń > nj;

[:Lu:] { Ľ > LJ;
Ľ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > LJ;
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

[ÏÜŸ] > I;
[ïüÿ] > i;

[^[:L:][:M:]] { [\\'’] > ;
[\\'’] } [^[:L:][:M:]] > ;
· > ;



::Null;

[aA] { [aA]+ > ;
[eE] { [eE]+ > ;
[iI] { [iI]+ > ;
[oO] { [oO]+ > ;
[uU] { [uU]+ > ;
[bB] { [bB]+ > ;
[cC] { [cC]+ > ;
[čČ] { [čČ]+ > ;
[ćĆ] { [ćĆ]+ > ;
[dD] { [dD]+ > ;
[đĐ] { [đĐ]+ > ;
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

::Null;

[dD] [zZ] { ([dD] [zZ])+ > ;
[dD] [žŽ] { ([dD] [žŽ])+ > ;
[lL] [jJ] { ([lL] [jJ])+ > ;
[nN] [jJ] { ([nN] [jJ])+ > ;

::Null;

[iI] { a > ja;
[iI] { A > JA;
[iI] { e > je;
[iI] { E > JE;
[iI] { u > ju;
[iI] { U > JU;
`;
