export const ltLatnRules = `
::NFC;

[[:L:][:M:]] { \\' } [[:L:][:M:]] > ’;

[aA] { i } [tT] [ėeĖE] > y;
[aA] { I } [tT] [ėeĖE] > Y;
[^[:L:][:M:]] { i } [ėeęouųūaąĖEĘOUŲŪAĄ] > y;
[^[:L:][:M:]] { I } [ėeęouųūaąĖEĘOUŲŪAĄ] > Y;

X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KS;
X } [:Lu:] > KS;
[:Lu:] { X > KS;
X > Ks;
x > ks;

Q > K;
q > k;

W > V;
w > v;

C [hH] > X;
c [hH] > x;

D [zZ] } [EĘĖIĮYeęėiįy] > Đ;
d [zZ] } [EĘĖIĮYeęėiįy] > đ;

[:L:] { C } SS > K;
[:L:] { c } ss > k;

Y > I;
y > i;

J > Y;
j > y;

EI > IJ;
eI > iJ;
Ei > Ij;
ei > ij;

Ą > A;
ą > a;

Ę > Ä;
ę > ä;

Ė > E;
ė > e;

Į > I;
į > i;

[ŲŪ] > U;
[ųū] > u;

::Null;

[^[:L:][:M:]] { T [Ss] > C;
[^[:L:][:M:]] { t [Ss] > c;
D [Žž] > Ǯ;
d [Žž] > ǯ;
D [Zz] > Ẑ;
d [Zz] > ẑ;
[:L:] { K } [hH] [aeiouyäöüåæøáéíóúýőűıâêîôûàèìòùëïõAEIOUYÄÖÜÅÆØÁÉÍÓÚÝŐŰIİÂÊÎÔÛÀÈÌÒÙËÏÕ] > K;
[:L:] { k } [hH] [aeiouyäöüåæøáéíóúýőűıâêîôûàèìòùëïõAEIOUYÄÖÜÅÆØÁÉÍÓÚÝŐŰIİÂÊÎÔÛÀÈÌÒÙËÏÕ] > k;
K [Hh] > Ḫ;
k [Hh] > ḫ;
[nN] { G } [hH] > G;
[nN] { g } [hH] > g;
G [Hh] > Ɣ;
g [Hh] > ɣ;
`;
