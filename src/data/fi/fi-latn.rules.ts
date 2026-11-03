export const fiLatnRules = `
::NFC;

[[:L:][:M:]] { \\' } [[:L:][:M:]] > ’;

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

X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KS;
X } [:Lu:] > KS;
[:Lu:] { X > KS;
X > Ks;
x > ks;

Z > C;
z > c;

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

::Null;

[^[:L:][:M:]] { T [Ss] > C;
[^[:L:][:M:]] { t [Ss] > c;
T [Šš] > Č;
t [Šš] > č;
D [Žž] > Ǯ;
d [Žž] > ǯ;
N [Gg] > Ŋ;
n [Gg] > ŋ;
T [Hh] > Þ;
t [Hh] > þ;
[:L:] { K } [hH] [aeiouyäöüåæøáéíóúýőűıâêîôûàèìòùëïõAEIOUYÄÖÜÅÆØÁÉÍÓÚÝŐŰIİÂÊÎÔÛÀÈÌÒÙËÏÕ] > K;
[:L:] { k } [hH] [aeiouyäöüåæøáéíóúýőűıâêîôûàèìòùëïõAEIOUYÄÖÜÅÆØÁÉÍÓÚÝŐŰIİÂÊÎÔÛÀÈÌÒÙËÏÕ] > k;
K [Hh] > Ḫ;
k [Hh] > ḫ;
[fF] { G [Hh] > Ɣ;
[fF] { g [Hh] > ɣ;
[:L:] { G } [hH] [aeiouyäöüåæøáéíóúýőűıâêîôûàèìòùëïõAEIOUYÄÖÜÅÆØÁÉÍÓÚÝŐŰIİÂÊÎÔÛÀÈÌÒÙËÏÕ] > G;
[:L:] { g } [hH] [aeiouyäöüåæøáéíóúýőűıâêîôûàèìòùëïõAEIOUYÄÖÜÅÆØÁÉÍÓÚÝŐŰIİÂÊÎÔÛÀÈÌÒÙËÏÕ] > g;
G [Hh] > Ɣ;
g [Hh] > ɣ;
`;
