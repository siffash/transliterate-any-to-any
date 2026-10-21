export const azIpaRules = `
::Lower;
::NFC;

i̇ > i;

::Null;

bb > bː;
cc > d͡ʒː;
çç > t͡ʃː;
dd > dː;
ff > fː;
gg > ɡː;
ğğ > ɣː;
jj > ʒː;
kk > kː;
ll > lː;
mm > mː;
nn > nː;
pp > pː;
rr > ɾː;
ss > sː;
şş > ʃː;
tt > tː;
vv > vː;
zz > zː;

v } [ [pfktsşxçh] [^[:L:][:M:]] ] > f;

q } [pfktsşxçh] > x;
q } [^[:L:][:M:]] > x;
q > ɡ;

k } [eəiöü] > c;
k } [pfktsşxçh] > ç;
k } [^[:L:][:M:]] > ç;

l } [aıou] > ɫ;

g } [eəiöü] > ɟ;

c > d͡ʒ;
ç > t͡ʃ;
ş > ʃ;
j > ʒ;
ğ > ɣ;
x > χ;
r > ɾ;
y > j;

a > ɑ;
ə > æ;
e > e;
i > i;
ı > ɯ;
o > o;
ö > œ;
u > u;
ü > y;

b > b;
d > d;
f > f;
g > ɡ;
h > h;
k > k;
l > l;
m > m;
n > n;
p > p;
s > s;
t > t;
v > v;
z > z;
`;
