export const etLatnRules = `
::NFC;

[[:L:][:M:]] { \\' } [[:L:][:M:]] > ’;

S [hH] > Š;
s [hH] > š;

Z [hH] > Ž;
z [hH] > ž;

[:Lu:] { X > KS;
X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KS;
X } [:Lu:] > KS;
X > Ks;
x > ks;

[:L:] { C } SS > K;
[:L:] { c } ss > k;
[:Lu:] { C > TS;
C } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > TS;
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
