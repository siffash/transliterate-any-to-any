export const ltLatnRules = `
::NFC;

[aA] { i } [tT] [ėeĖE] > y;
[aA] { I } [tT] [ėeĖE] > Y;
[^[:L:][:M:]] { i } [ėeęouųūaąĖEĘOUŲŪAĄ] > y;
[^[:L:][:M:]] { I } [ėeęouųūaąĖEĘOUŲŪAĄ] > Y;

X } [:Lu:] > KS;
[:Lu:] { X > KS;
X > Ks;
x > ks;

Q > K;
q > k;

W > V;
w > v;

C [hH] > X;
c [hH] > x;

D [zZ] } [EĘĖIĮYeęėiįy] > Đ;
d [zZ] } [EĘĖIĮYeęėiįy] > đ;

C } [:Lu:] > TS;
[:Lu:] { C > TS;
C > Ts;
c > ts;

Y > I;
y > i;

J > Y;
j > y;

EI > IJ;
eI > iJ;
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
