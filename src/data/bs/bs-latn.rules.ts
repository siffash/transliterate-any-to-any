export const bsLatnRules = `
::NFC;

[[:L:][:M:]] { \\' } [[:L:][:M:]] > ’;

Ǆ > DŽ;
ǅ > Dž;
ǆ > dž;

Ǉ > Ľ;
ǈ > Ľ;
ǉ > ľ;

Ǌ > Ń;
ǋ > Ń;
ǌ > ń;

L [jJ] > Ľ;
l [jJ] > ľ;

N [jJ] > Ń;
n [jJ] > ń;

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

H > X;
h > x;

J > Y;
j > y;
`;
