export const fiLatnRules = `
::NFC;

S [cC] [hH] > Š;
s [cC] [hH] > š;
S [hH] > Š;
s [hH] > š;

Z [hH] > Ž;
z [hH] > ž;

C [hH] > Č;
c [hH] > č;

C } [EIYÄÖeiyäö] > S;
c } [EIYÄÖeiyäö] > s;

C > K;
c > k;

X } [:Lu:] > KS;
[:Lu:] { X > KS;
X > Ks;
x > ks;

Z } [:Lu:] > TS;
[:Lu:] { Z > TS;
Z > Ts;
z > ts;

Q > K;
q > k;

W > V;
w > v;

Å > O;
å > o;

Y > Ü;
y > ü;

J > Y;
j > y;
`;
