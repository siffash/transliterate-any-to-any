export const hrLatnRules = `
::NFC;

[[:L:][:M:]] { \\' } [[:L:][:M:]] > ’;

L [jJ] > Ľ;
l [jJ] > ľ;

N [jJ] > Ń;
n [jJ] > ń;

J } [aeiouAEIOU] > Y;
j } [aeiouAEIOU] > y;

::Null;

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
