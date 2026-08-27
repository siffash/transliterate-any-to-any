export const huLatnRules = `
::NFC;

Á > A;
á > a;
É > E;
é > e;
Í > I;
í > i;
[ÓŐ] > O;
[óő] > o;
[ÚŰ] > U;
[úű] > u;

::Null;

C } CS > Č;
C } Cs > Č;
c } cs > č;

D } DZS > DŽ;
D } Dzs > Dž;
d } dzs > dž;

D } DZ > DZ;
D } Dz > Dz;
d } dz > dz;

L } LY > Ľ;
L } Ly > Ľ;
l } ly > ľ;

N } NY > Ń;
N } Ny > Ń;
n } ny > ń;

S } SZ > S;
S } Sz > S;
s } sz > s;

Z } ZS > Ž;
Z } Zs > Ž;
z } zs > ž;

DZS > DŽ;
Dzs > Dž;
dzs > dž;

CS > Č;
Cs > Č;
cs > č;

LY } [^aeiouAEIOU] > Ľ;
Ly } [^aeiouAEIOU] > Ľ;
ly } [^aeiouAEIOU] > ľ;

NY } [^aeiouAEIOU] > Ń;
Ny } [^aeiouAEIOU] > Ń;
ny } [^aeiouAEIOU] > ń;

SZ > S;
Sz > S;
sz > s;

ZS > Ž;
Zs > Ž;
zs > ž;

C } CZ > TS;
C } Cz > TS;
c } cz > ts;

CZ > TS;
Cz > Ts;
cz > ts;

C } [:Lu:] > TS;
[:Lu:] { C } [:^Letter:] > TS;
C > Ts;
c > ts;

[:Lu:] { X > KS;
X } [:Lu:] > KS;
X > Ks;
x > ks;

J > Y;
j > y;

S > Š;
s > š;
`;
