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

[:Lu:] { X > KS;
X } [:Lu:] > KS;
X > Ks;
x > ks;

[:Lu:] { C > TS;
C } [:Lu:] > TS;
C > Ts;
c > ts;

H > X;
h > x;

J > Y;
j > y;
`;
