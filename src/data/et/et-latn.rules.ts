export const etLatnRules = `
::NFC;

S [hH] > Š;
s [hH] > š;

Z [hH] > Ž;
z [hH] > ž;

[:Lu:] { X > KS;
X } [:Lu:] > KS;
X > Ks;
x > ks;

[:Lu:] { C > TS;
C } [:Lu:] > TS;
C > Ts;
c > ts;

W > V;
w > v;

Q > K;
q > k;

Y > I;
y > i;

J > Y;
j > y;

Õ > Ï;
õ > ï;
`;
