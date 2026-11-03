export const slLatnRules = `
::NFC;

[[:L:][:M:]] { \\' } [[:L:][:M:]] > ’;

N [jJ] > Ń;
n [jJ] > ń;

L [jJ] > Ľ;
l [jJ] > ľ;

[:L:] { C } SS > K;
[:L:] { c } ss > k;

[:Lu:] { X > KS;
X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KS;
X } [:Lu:] > KS;
X > Ks;
x > ks;

H > X;
h > x;

J > Y;
j > y;

::Null;

[^[:L:][:M:]] { T [Ss] > C;
[^[:L:][:M:]] { t [Ss] > c;
D [Žž] > Ǯ;
d [Žž] > ǯ;
`;
