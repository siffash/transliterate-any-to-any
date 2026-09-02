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

[^[:L:][:M:]] { Ö } [:Lu:] > JO;
[^[:L:][:M:]] { Ö > Jo;
[^[:L:][:M:]] { ö > jo;

[:Lu:] { Ö > IO;
Ö } [:Lu:] > IO;
Ö > Io;
ö > io;

[^[:L:][:M:]] { [ÜŸ] } [:Lu:] > JU;
[^[:L:][:M:]] { [ÜŸ] > Ju;
[^[:L:][:M:]] { [üÿ] > ju;

[:Lu:] { [ÜŸ] > IU;
[ÜŸ] } [:Lu:] > IU;
[ÜŸ] > Iu;
[üÿ] > iu;

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
Ń } [eEęĘėĖiIįĮyY] > N;
ń } [eEęĘėĖiIįĮyY] > n;

Ľ } [AĄOUŲŪ] > LI;
ľ } [AĄOUŲŪ] > lI;
Ń } [AĄOUŲŪ] > NI;
ń } [AĄOUŲŪ] > nI;

Ľ } [aąouųū] > Li;
ľ } [aąouųū] > li;
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
