export const huLatnRules = `
::NFC;

[[:L:][:M:]] { \\' } [[:L:][:M:]] > ’;

[aeiouáéíóöőúüűAEIOUÁÉÍÓÖŐÚÜŰ] { y } [^[:L:][:M:]] > i;
[aeiouáéíóöőúüűAEIOUÁÉÍÓÖŐÚÜŰ] { Y } [^[:L:][:M:]] > I;

L [yY] > Y;
l [yY] > y;

G } [gG] [yY] [AÁEÉIÍOÓÖŐUÚÜŰaáeéiíoóöőuúüű] > D;
g } [gG] [yY] [AÁEÉIÍOÓÖŐUÚÜŰaáeéiíoóöőuúüű] > d;
G } [yY] [AÁEÉIÍOÓÖŐUÚÜŰaáeéiíoóöőuúüű] > D;
g } [yY] [AÁEÉIÍOÓÖŐUÚÜŰaáeéiíoóöőuúüű] > d;

Á > A;
á > a;
É > E;
é > e;
Í > I;
í > i;
Ó > O;
ó > o;
Ő > Ö;
ő > ö;
Ú > U;
ú > u;
Ű > Ü;
ű > ü;
W > V;
w > v;

::Null;

C } [cC] [sS] > Č;
c } [cC] [sS] > č;

D } DZS > Ǯ;
d } DZS > ǯ;
D } [dD] [zZ] [sS] > Ǯ;
d } [dD] [zZ] [sS] > ǯ;

D } DZ > Ẑ;
d } DZ > ẑ;
D } [dD] [zZ] > Ẑ;
d } [dD] [zZ] > ẑ;

L } [lL] [yY] > Ľ;
l } [lL] [yY] > ľ;

N } [nN] [yY] [aeiouAEIOU] > N;
n } [nN] [yY] [aeiouAEIOU] > n;
N } [nN] [yY] > Ń;
n } [nN] [yY] > ń;

S } [sS] [zZ] > S;
s } [sS] [zZ] > s;

Z } [zZ] [sS] > Ž;
z } [zZ] [sS] > ž;

DZS > Ǯ;
D [zZ] [sS] > Ǯ;
d [zZ] [sS] > ǯ;
D [zZ] > Ẑ;
d [zZ] > ẑ;

C [sS] > Č;
c [sS] > č;

L [yY] } [^aeiouAEIOU] > Ľ;
l [yY] } [^aeiouAEIOU] > ľ;

N [yY] } [^aeiouAEIOU] > Ń;
n [yY] } [^aeiouAEIOU] > ń;

S [zZ] > S;
s [zZ] > s;

Z [sS] > Ž;
z [sS] > ž;

C } CZ > C;
c } CZ > c;
C } [cC] [zZ] > C;
c } [cC] [zZ] > c;

C [zZ] > C;
c [zZ] > c;

[:Lu:] { X > KS;
X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KS;
X } [:Lu:] > KS;
X > Ks;
x > ks;

J > Y;
j > y;

S [cC] [hH] > Š;
s [cC] [hH] > š;

S > Š;
s > š;

::Null;

[Šš] { [Šš] } [^[:L:][:M:]] > ;

::Null;

[:L:] { T } [hH] [eE] [gG]? [yY] > T;
[:L:] { t } [hH] [eE] [gG]? [yY] > t;
[:L:] { T } [hH] [aA] [zZlL] > T;
[:L:] { t } [hH] [aA] [zZlL] > t;
[:L:] { T } [hH] [aA] [rR] [oOdD] > T;
[:L:] { t } [hH] [aA] [rR] [oOdD] > t;
[:L:] { T } [hH] [iI] [dD] > T;
[:L:] { t } [hH] [iI] [dD] > t;
T [Hh] > Þ;
t [Hh] > þ;
[:L:] { K } [hH] [aeiouyäöüåæøáéíóúýőűıâêîôûàèìòùëïõAEIOUYÄÖÜÅÆØÁÉÍÓÚÝŐŰIİÂÊÎÔÛÀÈÌÒÙËÏÕ] > K;
[:L:] { k } [hH] [aeiouyäöüåæøáéíóúýőűıâêîôûàèìòùëïõAEIOUYÄÖÜÅÆØÁÉÍÓÚÝŐŰIİÂÊÎÔÛÀÈÌÒÙËÏÕ] > k;
K [Hh] > Ḫ;
k [Hh] > ḫ;
[nN] { G } [hH] > G;
[nN] { g } [hH] > g;
[fF] { G [Hh] > Ɣ;
[fF] { g [Hh] > ɣ;
[:L:] { G } [hH] [aeiouyäöüåæøáéíóúýőűıâêîôûàèìòùëïõAEIOUYÄÖÜÅÆØÁÉÍÓÚÝŐŰIİÂÊÎÔÛÀÈÌÒÙËÏÕ] > G;
[:L:] { g } [hH] [aeiouyäöüåæøáéíóúýőűıâêîôûàèìòùëïõAEIOUYÄÖÜÅÆØÁÉÍÓÚÝŐŰIİÂÊÎÔÛÀÈÌÒÙËÏÕ] > g;
G [Hh] > Ɣ;
g [Hh] > ɣ;
`;
