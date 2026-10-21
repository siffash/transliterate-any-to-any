export const idLatnRules = `
::NFC;

S [yhjYHJ] > Š;
s [yhjYHJ] > š;

N [yjYJ] > Ń;
n [yjYJ] > ń;

[:Lu:] { X > KS;
X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KS;
X } [:Lu:] > KS;
X > Ks;
x > ks;

K [hH] > X;
k [hH] > x;

C [hH] > Č;
c [hH] > č;
C > Č;
c > č;

T [jJ] > Č;
t [jJ] > č;

DJ > DŽ;
Dj > Dž;
dJ > dŽ;
dj > dž;

[:Lu:] { J > DŽ;
J } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > DŽ;
J } [:Lu:] > DŽ;
J > Dž;
j > dž;
`;
