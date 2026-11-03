export const bsLatnRules = `
::NFC;

[[:L:][:M:]] { \\' } [[:L:][:M:]] > ’;

Ǆ > Ǯ;
ǅ > Ǯ;
ǆ > ǯ;

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
