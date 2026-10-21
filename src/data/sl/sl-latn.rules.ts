export const slLatnRules = `
::NFC;

N [jJ] > Ń;
n [jJ] > ń;

L [jJ] > Ľ;
l [jJ] > ľ;

[:L:] { C } SS > K;
[:L:] { c } ss > k;
[:Lu:] { C > TS;
C } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > TS;
C } [:Lu:] > TS;
C > Ts;
c > ts;

[:Lu:] { X > KS;
X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KS;
X } [:Lu:] > KS;
X > Ks;
x > ks;

H > X;
h > x;

J > Y;
j > y;
`;
