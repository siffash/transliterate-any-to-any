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

S [jJ] > Š;
s [jJ] > š;

DJ > DŽ;
dJ > dŽ;
Dj > Dž;
dj > dž;

C [hH] > X;
c [hH] > x;

S [hH] > Š;
s [hH] > š;

Z [hH] > Ž;
z [hH] > ž;

N [jJ] > Ń;
n [jJ] > ń;

T [hH] > T;
t [hH] > t;

P [hH] > F;
p [hH] > f;

QU } [aeiouAEIOU] > KW;
Qu } [aeiouAEIOU] > Kw;
qU } [aeiouAEIOU] > kW;
qu } [aeiouAEIOU] > kw;

EAU > O;
Eau > O;
eau > o;

O [eE] > U;
o [eE] > u;

E [uU] > Ö;
e [uU] > ö;

U [uU] > Ü;
u [uU] > ü;

I [eE] > I;
i [eE] > i;

EIJ > IJ;
Eij > Ij;
eij > ij;

EI > IJ;
eI > iJ;
Ei > Ij;
ei > ij;

UIJ > ÖY;
Uij > Öy;
uij > öy;

UI > ÖY;
uI > öY;
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

[^[:L:][:M:]] { G } [:Lu:] > GH;
[^[:L:][:M:]] { G > Gh;
[^[:L:][:M:]] { g } [:Lu:] > gH;
[^[:L:][:M:]] { g > gh;
[^Nn] { G } [:Lu:] > GH;
[^Nn] { G > Gh;
[^Nn] { g } [:Lu:] > gH;
[^Nn] { g > gh;

[^[:L:][:M:]] { J > Y;
[^[:L:][:M:]] { j > y;
[^IiÍí] { J > Y;
[^IiÍí] { j > y;
`;
