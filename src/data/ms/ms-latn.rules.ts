export const msLatnRules = `
::NFC;

S [yhjYHJ] > Š;
s [yhjYHJ] > š;

N [yjYJ] > Ń;
n [yjYJ] > ń;

K [hH] > X;
k [hH] > x;

C [hH] > Č;
c [hH] > č;
C > Č;
c > č;

T [jJ] > Č;
t [jJ] > č;

D [jJ] > DŽ;
d [jJ] > dž;

[:Lu:] { J > DŽ;
J } [:Lu:] > DŽ;
J > Dž;
j > dž;
`;
