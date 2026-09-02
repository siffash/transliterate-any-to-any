export const msLatnRules = `
::NFC;

S [YHJ] > Š;
S [yhj] > Š;
s [YHJ] > š;
s [yhj] > š;

N [YJ] > Ń;
N [yj] > Ń;
n [YJ] > ń;
n [yj] > ń;

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

TJ > Č;
Tj > Č;
tJ > č;
tj > č;

DJ > DŽ;
Dj > DŽ;
dJ > dž;
dj > dž;

[:Lu:] { J > DŽ;
J } [:Lu:] > DŽ;
J > Dž;
j > dž;
`;
