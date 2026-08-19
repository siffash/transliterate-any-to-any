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

LL > L;
Ll > L;
ll > l;

RR > R;
Rr > R;
rr > r;

C } [:Ll:] > Ts;
[:^Letter:] { C } [:^Letter:] > Ts;
C > TS;
c > ts;

X } [:Ll:] > Dz;
[:^Letter:] { X } [:^Letter:] > Dz;
X > DZ;
x > dz;

Ç > Č;
ç > č;

Q > Ć;
q > ć;

Y > Ü;
y > ü;

J > Y;
j > y;

Ë > Ï;
ë > ï;
`;
