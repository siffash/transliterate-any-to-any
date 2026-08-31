export const latnLtRules = `
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

KH > CH;
Kh > Ch;
kH > cH;
kh > ch;

IJ > EI;
Ij > Ei;
iJ > eI;
ij > ei;

::Null;

[:^Letter:] { Ö } [:Lu:] > JO;
[:^Letter:] { Ö > Jo;
[:^Letter:] { ö > jo;

[:Lu:] { Ö > IO;
Ö } [:Lu:] > IO;
Ö > Io;
ö > io;

[:^Letter:] { Ü } [:Lu:] > JU;
[:^Letter:] { Ü > Ju;
[:^Letter:] { ü > ju;

[:Lu:] { Ü > IU;
Ü } [:Lu:] > IU;
Ü > Iu;
ü > iu;

[:Lu:] { Đ > DŽ;
Đ } [:Lu:] > DŽ;
Đ > Dž;
đ > dž;

[:Lu:] { X > CH;
X } [:Lu:] > CH;
X > Ch;
x > ch;

Ć > Č;
ć > č;

Ń > N;
ń > n;

Ľ > L;
ľ > l;

Ä > E;
ä > e;

Ï > Y;
ï > y;

Ÿ > I;
ÿ > i;

Q > K;
q > k;

W > V;
w > v;

Y > J;
y > j;

[:^Letter:] { \\' > ;
\\' } [:^Letter:] > ;
· > ;

::Null;

[jJ] { [iI] } [aąouųūAĄOUŲŪ] > ;
[:^Letter:] { i } [aąouųūAĄOUŲŪ] > j;
[:^Letter:] { I } [aąouųūAĄOUŲŪ] > J;
j } [bcčdfghklmnprsštvzžBCČDFGHKLMNPRSŠTVZŽ] > i;
J } [bcčdfghklmnprsštvzžBCČDFGHKLMNPRSŠTVZŽ] > I;
[aąeęėiįouųūyAĄEĘĖIĮOUŲŪY] { y > i;
[aąeęėiįouųūyAĄEĘĖIĮOUŲŪY] { Y > I;

::Null;

[aA] { [aA] > ;
[bB] { [bB] > ;
[cC] { [cC] > ;
[čČ] { [čČ] > ;
[dD] { [dD] > ;
[eE] { [eE] > ;
[fF] { [fF] > ;
[gG] { [gG] > ;
[hH] { [hH] > ;
[iI] { [iI] > ;
[jJ] { [jJ] > ;
[kK] { [kK] > ;
[lL] { [lL] > ;
[mM] { [mM] > ;
[nN] { [nN] > ;
[oO] { [oO] > ;
[pP] { [pP] > ;
[qQ] { [qQ] > ;
[rR] { [rR] > ;
[sS] { [sS] > ;
[šŠ] { [šŠ] > ;
[tT] { [tT] > ;
[uU] { [uU] > ;
[vV] { [vV] > ;
[wW] { [wW] > ;
[xX] { [xX] > ;
[yY] { [yY] > ;
[zZ] { [zZ] > ;
[žŽ] { [žŽ] > ;
`;
