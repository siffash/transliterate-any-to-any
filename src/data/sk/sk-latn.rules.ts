export const skLatnRules = `
::NFC;

[[:L:][:M:]] { \\' } [[:L:][:M:]] > ’;

[rR] { n } [eE] [^[:L:][:M:]] > ń;
[rR] { N } [eE] [^[:L:][:M:]] > Ń;

c [hH] > x;
C [hH] > X;

[:L:] { C } SS > K;
[:L:] { c } ss > k;

[:Lu:] { X > KS;
X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KS;
X } [:Lu:] > KS;
X > Ks;
x > ks;

q > k;
Q > K;

ô > o;
Ô > O;

[:Lu:] { Ř > RŽ;
Ř } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > RŽ;
Ř } [:Lu:] > RŽ;
Ř > Rž;
ř > rž;

ď > d;
Ď > D;

ť > t;
Ť > T;

ň > ń;
Ň > Ń;

j > y;
J > Y;

w > v;
W > V;

á > a;
Á > A;

é > e;
É > E;

[íýy] > i;
[ÍÝY] > I;

ó > o;
Ó > O;

ú > u;
Ú > U;

ĺ > l;
Ĺ > L;

ŕ > r;
Ŕ > R;

::Null;

[^[:L:][:M:]] { T [Ss] > C;
[^[:L:][:M:]] { t [Ss] > c;
D [Žž] > Ǯ;
d [Žž] > ǯ;
D [Zz] > Ẑ;
d [Zz] > ẑ;
T [Hh] > Þ;
t [Hh] > þ;
[nN] { G } [hH] > G;
[nN] { g } [hH] > g;
G [Hh] > Ɣ;
g [Hh] > ɣ;
`;
