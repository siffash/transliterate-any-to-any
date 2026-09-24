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

L [jJ] > Ľ;
l [jJ] > ľ;

N [jJ] > Ń;
n [jJ] > ń;

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
