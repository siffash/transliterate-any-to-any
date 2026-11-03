export const lvLatnRules = `
::NFC;

[[:L:][:M:]] { \\' } [[:L:][:M:]] > ’;

Ā > A;
ā > a;
Ē > E;
ē > e;
Ī > I;
ī > i;
Ū > U;
ū > u;
Ō > O;
ō > o;

::Null;

[:Lu:] { X > KS;
X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KS;
X } [:Lu:] > KS;
X > Ks;
x > ks;

CH > X;
Ch > X;
cH > x;
ch > x;

[:L:] { C } SS > K;
[:L:] { c } ss > k;

J > Y;
j > y;

H > X;
h > x;

Ņ > Ń;
ņ > ń;

Ļ > Ľ;
ļ > ľ;

Ķ > K;
ķ > k;

Ģ > G;
ģ > g;

Ŗ > R;
ŗ > r;

::Null;

[^[:L:][:M:]] { T [Ss] > C;
[^[:L:][:M:]] { t [Ss] > c;
D [Žž] > Ǯ;
d [Žž] > ǯ;
D [Zz] > Ẑ;
d [Zz] > ẑ;
`;
