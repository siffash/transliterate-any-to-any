export const nlLatnRules = `
::NFC;

SCH } [^[:L:][:M:]] > S;
Sch } [^[:L:][:M:]] > S;
sch } [^[:L:][:M:]] > s;

SCH > SKH;
Sch > Skh;
sch > skh;

TIE } [^[:L:][:M:]] > TSI;
Tie } [^[:L:][:M:]] > Tsi;
tie } [^[:L:][:M:]] > tsi;

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

QU } [aeiouAEIOU] > KW;
Qu } [aeiouAEIOU] > Kw;
qU } [aeiouAEIOU] > kW;
qu } [aeiouAEIOU] > kw;

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

[^[:L:][:M:]] { U > Ÿ;
[^[:L:][:M:]] { u > ÿ;
[^AaOoÁáÓó] { U > Ÿ;
[^AaOoÁáÓó] { u > ÿ;

[^[:L:][:M:]] { G > Gh;
[^[:L:][:M:]] { g > gh;
[^Nn] { G > Gh;
[^Nn] { g > gh;

[^[:L:][:M:]] { J > Y;
[^[:L:][:M:]] { j > y;
[^IiÍí] { J > Y;
[^IiÍí] { j > y;
`;
