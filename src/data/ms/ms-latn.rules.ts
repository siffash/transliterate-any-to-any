export const msLatnRules = `
::NFC;

S [YH] > Š;
S [yh] > Š;
s [YH] > š;
s [yh] > š;

NY > Ń;
Ny > Ń;
nY > ń;
ny > ń;

KH > X;
Kh > X;
kH > x;
kh > x;

CH > Č;
Ch > Č;
cH > č;
ch > č;
C > Č;
c > č;

[:Lu:] { J > DŽ;
J } [:Lu:] > DŽ;
J > Dž;
j > dž;
`;
