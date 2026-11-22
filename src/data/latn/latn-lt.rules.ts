export const latnLtRules = `
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

[:Lu:] { Ḫ > CH;
Ḫ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > CH;
Ḫ } [:Lu:] > CH;
Ḫ > Ch;
ḫ > ch;

IJ > EI;
Ij > Ei;
iJ > eI;
ij > ei;

[aeouäöüëïyAEOUÄÖÜËÏYjJđĐćĆśŚźŹ] [iI] { a } [^[:L:][:M:]] > a;
[aeouäöüëïyAEOUÄÖÜËÏYjJđĐćĆśŚźŹ] [iI] { A } [^[:L:][:M:]] > A;
[:L:] [iI] { a } [^[:L:][:M:]] > ja;
[:L:] [iI] { A } [^[:L:][:M:]] > JA;

::Null;

[^[:L:][:M:]] { Ö } [:Lu:] > JO;
[^[:L:][:M:]] { Ö > Jo;
[^[:L:][:M:]] { ö > jo;

[iI] { Ö > O;
[iI] { ö > o;

[:Lu:] { Ö > IO;
Ö } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > IO;
Ö } [:Lu:] > IO;
Ö > Io;
ö > io;

[^[:L:][:M:]] { [ÜŸ] } [:Lu:] > JU;
[^[:L:][:M:]] { [ÜŸ] > Ju;
[^[:L:][:M:]] { [üÿ] > ju;

[iI] { [ÜŸ] > U;
[iI] { [üÿ] > u;

[:Lu:] { [ÜŸ] > IU;
[ÜŸ] } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > IU;
[ÜŸ] } [:Lu:] > IU;
[ÜŸ] > Iu;
[üÿ] > iu;

[:Lu:] { Đ > DŽ;
Đ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > DŽ;
Đ } [:Lu:] > DŽ;
Đ > Dž;
đ > dž;

[:Lu:] { X > CH;
X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > CH;
X } [:Lu:] > CH;
X > Ch;
x > ch;

Ć > Č;
ć > č;

Ä > E;
ä > e;

Ï > Y;
ï > y;

Q > K;
q > k;

W > V;
w > v;

Y > J;
y > j;

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
· > ;

::Null;

Ľ } [eEęĘėĖiIįĮyY] > L;
ľ } [eEęĘėĖiIįĮyY] > l;

Ľ } [AĄOUŲŪ] > LI;
ľ } [AĄOUŲŪ] > lI;
Ľ } [aąouųū] > Li;
ľ } [aąouųū] > li;

Ń } [eEęĘėĖiIįĮyY] > N;
ń } [eEęĘėĖiIįĮyY] > n;

Ń } [AĄOUŲŪ] > NI;
ń } [AĄOUŲŪ] > nI;
Ń } [aąouųū] > Ni;
ń } [aąouųū] > ni;

Ľ > L;
ľ > l;
Ń > N;
ń > n;

::Null;

[jJ] { [iI] } [aąouųūAĄOUŲŪ] > ;
[^[:L:][:M:]] { i } [aąouųūAĄOUŲŪ] > j;
[^[:L:][:M:]] { I } [aąouųūAĄOUŲŪ] > J;
[iI] { [jJ] } [bcčdfghklmnprsštvzžBCČDFGHKLMNPRSŠTVZŽ] > ;
j } [bcčdfghklmnprsštvzžBCČDFGHKLMNPRSŠTVZŽ] > i;
J } [bcčdfghklmnprsštvzžBCČDFGHKLMNPRSŠTVZŽ] > I;
[aąeęėiįouųūyAĄEĘĖIĮOUŲŪY] { y > i;
[aąeęėiįouųūyAĄEĘĖIĮOUŲŪY] { Y > I;

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
[qQ] { [qQ]+ > ;
[rR] { [rR]+ > ;
[sS] { [sS]+ > ;
[šŠ] { [šŠ]+ > ;
[tT] { [tT]+ > ;
[vV] { [vV]+ > ;
[wW] { [wW]+ > ;
[xX] { [xX]+ > ;
[yY] { [yY]+ > ;
[zZ] { [zZ]+ > ;
[žŽ] { [žŽ]+ > ;
`;
