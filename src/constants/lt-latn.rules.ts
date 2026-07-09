export const ltLatnRules = `
::NFC;

X } [:UppercaseLetter:] > KS;
[:UppercaseLetter:] { X > KS;
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

C } [EĘĖIĮYeęėiįy] > Ć;
c } [EĘĖIĮYeęėiįy] > ć;

L } [EĘĖIĮYeęėiįy] > Ľ;
l } [EĘĖIĮYeęėiįy] > ľ;

N } [EĘĖIĮYeęėiįy] > Ń;
n } [EĘĖIĮYeęėiįy] > ń;

N } [KkGg] > NG;
n } [KkGg] > ng;

C } [:UppercaseLetter:] > TS;
[:UppercaseLetter:] { C > TS;
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
