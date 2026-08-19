export const ltLatnRules = `
::NFC;

X } [:Lu:] > KS;
[:Lu:] { X > KS;
X > Ks;
x > ks;

Q > K;
q > k;

W > V;
w > v;

CH > X;
Ch > X;
ch > x;

DZ } [EĘĖIĮYeęėiįy] > Đ;
Dz } [EĘĖIĮYeęėiįy] > Đ;
dz } [EĘĖIĮYeęėiįy] > đ;

L } [EĘĖIĮYeęėiįy] > Ľ;
l } [EĘĖIĮYeęėiįy] > ľ;

N } [EĘĖIĮYeęėiįy] > Ń;
n } [EĘĖIĮYeęėiįy] > ń;

N } [KkGg] > NG;
n } [KkGg] > ng;

C } [:Lu:] > TS;
[:Lu:] { C > TS;
C > Ts;
c > ts;

Y > I;
y > i;

J > Y;
j > y;

EI > IJ;
Ei > Ij;
ei > ij;

Ą > A;
ą > a;

Ę > Ä;
ę > ä;

Ė > E;
ė > e;

Į > I;
į > i;

[ŲŪ] > U;
[ųū] > u;
`;
