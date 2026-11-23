export const trIpaRules = `
::Lower;
::NFC;

i̇ > i;

::Null;

[aâ] ğ > aː;
eğ > eː;
ığ > ɯː;
[iî] ğ > iː;
oğ > oː;
öğ > œː;
[uû] ğ > uː;
üğ > yː;

k } [âûeiöœüyî] > c;
g } [âûeiöœüyî] > ɟ;
l } [âûeiöœüyî] > l;

[eiöœüyâûî] [rɾlns] { k > c;
[eiöœüyâûî] [rɾlns] { g > ɟ;
[eiöœüyâûî] [rɾ] { l > l;
k } [aıou] > k;
g } [aıou] > ɡ;
l } [aıou] > ɫ;
[eiöœüyâûî] { k > c;
[eiöœüyâûî] { g > ɟ;
[eiöœüyâûî] { l > l;
[eiöœüyâûî] l { l > l;

â > aː;
û > uː;
î > iː;
a > a;
b > b;
c > dʒ;
ç > tʃ;
d > d;
e > e;
f > f;
g > ɡ;
ğ > ɣ;
h > h;
ı > ɯ;
i > i;
j > ʒ;
k > k;
l > ɫ;
m > m;
n > n;
o > o;
ö > œ;
p > p;
r > ɾ;
s > s;
ş > ʃ;
t > t;
u > u;
ü > y;
v > v;
y > j;
z > z;
`;
