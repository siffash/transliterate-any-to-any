export const sqLatnRules = `
::NFC;

XH > DŽ;
xH > dŽ;
Xh > Dž;
xh > dž;

S [hH] > Š;
s [hH] > š;

Z [hH] > Ž;
z [hH] > ž;

G [jJ] > Đ;
g [jJ] > đ;

N [jJ] > Ń;
n [jJ] > ń;

[lL] { [lL] > ;
[rR] { [rR] > ;

[:Lu:] { C > TS;
C } [:Lu:] > TS;
C > Ts;
c > ts;

[:Lu:] { X > DZ;
X } [:Lu:] > DZ;
X > Dz;
x > dz;

Ç > Č;
ç > č;

Y > Ü;
y > ü;

J > Y;
j > y;

Ë > E;
ë > e;
`;
