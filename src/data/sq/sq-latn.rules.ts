export const sqLatnRules = `
::NFC;

[[:L:][:M:]] { \\' } [[:L:][:M:]] > ’;

X [hH] > Ǯ;
x [hH] > ǯ;

S [hH] > Š;
s [hH] > š;

Z [hH] > Ž;
z [hH] > ž;

G [jJ] > Đ;
g [jJ] > đ;

N [jJ] > Ń;
n [jJ] > ń;

[lL] { [lL]+ > ;
[rR] { [rR]+ > ;

[:L:] { C } SS > K;
[:L:] { c } ss > k;

X > Ẑ;
x > ẑ;

Ç > Č;
ç > č;

Y > Ü;
y > ü;

J > Y;
j > y;

Ë > E;
ë > e;

::Null;

[^[:L:][:M:]] { T [Ss] > C;
[^[:L:][:M:]] { t [Ss] > c;
T [Hh] > Þ;
t [Hh] > þ;
[:L:] { K } [hH] [aeiouyäöüåæøáéíóúýőűıâêîôûàèìòùëïõAEIOUYÄÖÜÅÆØÁÉÍÓÚÝŐŰIİÂÊÎÔÛÀÈÌÒÙËÏÕ] > K;
[:L:] { k } [hH] [aeiouyäöüåæøáéíóúýőűıâêîôûàèìòùëïõAEIOUYÄÖÜÅÆØÁÉÍÓÚÝŐŰIİÂÊÎÔÛÀÈÌÒÙËÏÕ] > k;
K [Hh] > Ḫ;
k [Hh] > ḫ;
[nN] { G } [hH] > G;
[nN] { g } [hH] > g;
G [Hh] > Ɣ;
g [Hh] > ɣ;
`;
