export const sqLatnRules = `
::NFC;

XH > DŽ;
Xh > Dž;
xh > dž;

SH > Š;
Sh > Š;
sh > š;

ZH > Ž;
Zh > Ž;
zh > ž;

GJ > Đ;
Gj > Đ;
gj > đ;

NJ > Ń;
Nj > Ń;
nj > ń;

[lL] { [lL] > ;
[rR] { [rR] > ;

C } [:Ll:] > Ts;
[^[:L:][:M:]] { C } [^[:L:][:M:]] > Ts;
C > TS;
c > ts;

X } [:Ll:] > Dz;
[^[:L:][:M:]] { X } [^[:L:][:M:]] > Dz;
X > DZ;
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
