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

C } [cC] [sS] > Č;
c } [cC] [sS] > č;

D } DZS > DŽ;
d } DZS > dŽ;
D } [dD] [zZ] [sS] > Dž;
d } [dD] [zZ] [sS] > dž;

D } DZ > DZ;
d } DZ > dZ;
D } [dD] [zZ] > Dz;
d } [dD] [zZ] > dz;

L } [lL] [yY] > Ľ;
l } [lL] [yY] > ľ;

N } [nN] [yY] > Ń;
n } [nN] [yY] > ń;

S } [sS] [zZ] > S;
s } [sS] [zZ] > s;

Z } [zZ] [sS] > Ž;
z } [zZ] [sS] > ž;

DZS > DŽ;
D [zZ] [sS] > Dž;
d [zZ] [sS] > dž;

C [sS] > Č;
c [sS] > č;

L [yY] } [^aeiouAEIOU] > Ľ;
l [yY] } [^aeiouAEIOU] > ľ;

N [yY] } [^aeiouAEIOU] > Ń;
n [yY] } [^aeiouAEIOU] > ń;

S [zZ] > S;
s [zZ] > s;

Z [sS] > Ž;
z [sS] > ž;

C } CZ > TS;
c } CZ > tS;
C } [cC] [zZ] > Ts;
c } [cC] [zZ] > ts;

CZ > TS;
cZ > tS;
Cz > Ts;
cz > ts;

C } [:Lu:] > TS;
[:Lu:] { C > TS;
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
