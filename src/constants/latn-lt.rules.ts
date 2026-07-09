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

DH > D;
Dh > D;
dH > d;
dh > d;

GH > G;
Gh > G;
gH > g;
gh > g;

[:Upper:] { KH > CH;
KH } [:Upper:] > CH;
KH > Ch;
Kh > Ch;
kH > ch;
kh > ch;

[:Upper:] { IJ > EI;
IJ } [:Upper:] > EI;
IJ > Ei;
Ij > Ei;
iJ > ei;
ij > ei;

[:^Letter:] { Ö } [:Upper:] > JO;
[:^Letter:] { Ö > Jo;
[:^Letter:] { ö > jo;

[:Upper:] { Ö > IO;
Ö } [:Upper:] > IO;
Ö > Io;
ö > io;

[:^Letter:] { Ü } [:Upper:] > JU;
[:^Letter:] { Ü > Ju;
[:^Letter:] { ü > ju;

[:Upper:] { Ü > IU;
Ü } [:Upper:] > IU;
Ü > Iu;
ü > iu;

[:Upper:] { Đ > DŽ;
Đ } [:Upper:] > DŽ;
Đ > Dž;
đ > dž;

[:Upper:] { X > CH;
X } [:Upper:] > CH;
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

['·] > ;

::Null;

[cCčČšŠžŽ] { [iI] } [aąouųūAĄOUŲŪ] > ;
[dD] [zZ] { [iI] } [aąouųūAĄOUŲŪ] > ;
[jJ] { [iI] } [aąouųūAĄOUŲŪ] > ;
[:^Letter:] { i } [aąouųūAĄOUŲŪ] > j;
[:^Letter:] { I } [aąouųūAĄOUŲŪ] > J;
j } [bcčdfghklmnprsštvzžBCČDFGHKLMNPRSŠTVZŽ] > i;
J } [bcčdfghklmnprsštvzžBCČDFGHKLMNPRSŠTVZŽ] > I;
j } [:^Letter:] > i;
J } [:^Letter:] > I;
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
