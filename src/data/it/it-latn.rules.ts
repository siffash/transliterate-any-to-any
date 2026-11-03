export const itLatnRules = `
::NFC;

[[:L:][:M:]] { \\' } [[:L:][:M:]] > ’;

[àá] > a;
[ÀÁ] > A;
[èé] > e;
[ÈÉ] > E;
[ìí] > i;
[ÌÍ] > I;
[òó] > o;
[ÒÓ] > O;
[ùú] > u;
[ÙÚ] > U;

::Null;

sci } [aouAOU] > š;
Sci } [aouAOU] > Š;
SCI } [AOU] > Š;

cci } [aouAOU] > čč;
Cci } [aouAOU] > Čč;
CCI } [AOU] > ČČ;

ggi } [aouAOU] > ǯǯ;
Ggi } [aouAOU] > Ǯǯ;
GGI } [AOU] > ǮǮ;

gli } [aeouAEOU] > ľ;
Gli } [aeouAEOU] > Ľ;
GLI } [AEOU] > Ľ;

gl } [iI] > ľ;
Gl } [iI] > Ľ;
GL } [I] > Ľ;

sc } [eiEI] > š;
Sc } [eiEI] > Š;
SC } [EI] > Š;

cc } [eiEI] > čč;
Cc } [eiEI] > Čč;
CC } [EI] > ČČ;

gg } [eiEI] > ǯǯ;
Gg } [eiEI] > Ǯǯ;
GG } [EI] > ǮǮ;

ci } [aouAOU] > č;
Ci } [aouAOU] > Č;
CI } [AOU] > Č;

g [iI] } [aouAOU] > ǯ;
G [iI] } [aouAOU] > Ǯ;

gn } [aeiouAEIOU] > ny;
Gn } [aeiouAEIOU] > Ny;
GN } [aeiouAEIOU] > NY;
g [nN] > ń;
G [nN] > Ń;

c [hH] > k;
C [hH] > K;

g [hH] > g;
G [hH] > G;

c } [eiEI] > č;
C } [eiEI] > Č;

g } [eiEI] > ǯ;
G } [eiEI] > Ǯ;

[aeiouAEIOU] { s } [aeiouAEIOU] > z;
[aeiouAEIOU] { S } [aeiouAEIOU] > Z;
s } [bdgvlmnrǯẑBDGVLMNRǮẐ] > z;
S } [bdgvlmnrǯẑBDGVLMNRǮẐ] > Z;

p [hH] > f;
P [hH] > F;

c > k;
C > K;

[:Lu:] { X > KS;
X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KS;
X } [:Lu:] > KS;
X > Ks;
x > ks;

Z > C;
z > c;

j > y;
J > Y;

h > ;
H ([:L:]) >| &Any-Upper($1);
H > ;

::Null;

[^[:L:][:M:]] { T [Ss] > C;
[^[:L:][:M:]] { t [Ss] > c;
`;
