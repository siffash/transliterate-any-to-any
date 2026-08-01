export const msLatnRules = `
::NFC;

SY > Š;
Sy > Š;
sY > š;
sy > š;

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

[A-Z] { J > DŽ;
J } [A-Z] > DŽ;
J > Dž;
j > dž;

[aeiouAEIOU] { [Kk] } [:^Letter:] > \\';
`;
