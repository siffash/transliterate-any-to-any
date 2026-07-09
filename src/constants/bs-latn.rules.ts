export const bsLatnRules = `
::NFC;

Ǆ > DŽ;
ǅ > Dž;
ǆ > dž;

Ǉ > Ľ;
ǈ > Ľ;
ǉ > ľ;

Ǌ > Ń;
ǋ > Ń;
ǌ > ń;

LJ > Ľ;
Lj > Ľ;
lj > ľ;

NJ > Ń;
Nj > Ń;
nj > ń;

[A-ZĆČĐŠŽĽŃ] { X > KS;
X } [A-ZĆČĐŠŽĽŃ] > KS;
X > Ks;
x > ks;

[A-ZĆČĐŠŽĽŃ] { C > TS;
C } [A-ZĆČĐŠŽĽŃ] > TS;
C > Ts;
c > ts;

H > X;
h > x;

J > Y;
j > y;
`;
