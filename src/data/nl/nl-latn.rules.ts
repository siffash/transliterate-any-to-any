export const nlLatnRules = `
::NFC;

SCH } [:^Letter:] > S;
Sch } [:^Letter:] > S;
sch } [:^Letter:] > s;

SCH > SKH;
Sch > Skh;
sch > skh;

TIE } [:^Letter:] > TSI;
Tie } [:^Letter:] > Tsi;
tie } [:^Letter:] > tsi;

SJ > Š;
Sj > Š;
sj > š;

DJ > DŽ;
Dj > Dž;
dj > dž;

CH > X;
Ch > X;
ch > x;

SH > Š;
Sh > Š;
sh > š;

ZH > Ž;
Zh > Ž;
zh > ž;

NJ > Ń;
Nj > Ń;
nj > ń;

TH > T;
Th > T;
th > t;

PH > F;
Ph > F;
ph > f;

EAU > O;
Eau > O;
eau > o;

OE > U;
Oe > U;
oe > u;

EU > Ö;
Eu > Ö;
eu > ö;

UU > Ü;
Uu > Ü;
uu > ü;

IE > I;
Ie > I;
ie > i;

EIJ > IJ;
Eij > Ij;
eij > ij;

EI > IJ;
Ei > Ij;
ei > ij;

UIJ > ÖY;
Uij > Öy;
uij > öy;

UI > ÖY;
Ui > Öy;
ui > öy;

C } [eéiíyýEÉIÍYÝ] > S;
c } [eéiíyýEÉIÍYÝ] > s;
C > K;
c > k;

[:Lu:] { X > KS;
X } [:Lu:] > KS;
X > Ks;
x > ks;

[:^Letter:] { U > Ÿ;
[:^Letter:] { u > ÿ;
[^AaOoÁáÓó] { U > Ÿ;
[^AaOoÁáÓó] { u > ÿ;

[:^Letter:] { G > Gh;
[:^Letter:] { g > gh;
[^Nn] { G > Gh;
[^Nn] { g > gh;

[:^Letter:] { J > Y;
[:^Letter:] { j > y;
[^IiÍí] { J > Y;
[^IiÍí] { j > y;
`;
