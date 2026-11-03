export const msIdLatnRules = `
::NFC;

S [yhjYHJ] > Š;
s [yhjYHJ] > š;

N [yjYJ] > Ń;
n [yjYJ] > ń;

[:Lu:] { X > KS;
X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KS;
X } [:Lu:] > KS;
X > Ks;
x > ks;

K [hH] > X;
k [hH] > x;

C [hH] > Č;
c [hH] > č;
C > Č;
c > č;

T [jJ] > Č;
t [jJ] > č;

D [jJ] > Ǯ;
d [jJ] > ǯ;

J > Ǯ;
j > ǯ;

::Null;

[^[:L:][:M:]] { T [Ss] > C;
[^[:L:][:M:]] { t [Ss] > c;
N [Gg] > Ŋ;
n [Gg] > ŋ;
K [Hh] > Ḫ;
k [Hh] > ḫ;
G [Hh] > Ɣ;
g [Hh] > ɣ;
T [Hh] > Þ;
t [Hh] > þ;
`;
