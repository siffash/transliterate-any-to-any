export const huLatnRules = `
::NFC;

C } CS > Č;
C } Cs > Č;
c } cs > č;

D } DZS > DŽ;
D } Dzs > Dž;
d } dzs > dž;

D } DZ > DZ;
D } Dz > Dz;
d } dz > dz;

G } GY > Đ;
G } Gy > Đ;
g } gy > đ;

L } LY > Ľ;
L } Ly > Ľ;
l } ly > ľ;

N } NY > Ń;
N } Ny > Ń;
n } ny > ń;

S } SZ > S;
S } Sz > S;
s } sz > s;

T } TY > Ć;
T } Ty > Ć;
t } ty > ć;

Z } ZS > Ž;
Z } Zs > Ž;
z } zs > ž;

DZS > DŽ;
Dzs > Dž;
dzs > dž;

CS > Č;
Cs > Č;
cs > č;

GY > Đ;
Gy > Đ;
gy > đ;

LY > Ľ;
Ly > Ľ;
ly > ľ;

NY > Ń;
Ny > Ń;
ny > ń;

SZ > S;
Sz > S;
sz > s;

TY > Ć;
Ty > Ć;
ty > ć;

ZS > Ž;
Zs > Ž;
zs > ž;

C } [:Upper:] > TS;
[:Upper:] { C } [:^Letter:] > TS;
C > Ts;
c > ts;

J > Y;
j > y;

S > Š;
s > š;

Á > A;
á > a;
É > E;
é > e;
Í > I;
í > i;
Ó > O;
ó > o;
Ő > Ö;
ő > ö;
Ú > U;
ú > u;
Ű > Ü;
ű > ü;
`;
