export const nlLatnRules = `
::NFC;

TSJ > Č;
Tsj > Č;
tsj > č;

SCH } [:^Letter:] > S;
Sch } [:^Letter:] > S;
sch } [:^Letter:] > s;

SCH > SX;
Sch > Sx;
sch > sx;

TIE } [:^Letter:] > TSI;
Tie } [:^Letter:] > Tsi;
tie } [:^Letter:] > tsi;

SJ > Š;
Sj > Š;
sj > š;

TJ > Ć;
Tj > Ć;
tj > ć;

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

QU > KW;
Qu > Kw;
qu > kw;

TH > T;
Th > T;
th > t;

PH > F;
Ph > F;
ph > f;

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

EI > IJ;
Ei > Ij;
ei > ij;

UI > ÖY;
Ui > Öy;
ui > öy;

C } [eéiíyýEÉIÍYÝ] > S;
c } [eéiíyýEÉIÍYÝ] > s;
C > K;
c > k;

X } [:Uppercase:] > KS;
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
