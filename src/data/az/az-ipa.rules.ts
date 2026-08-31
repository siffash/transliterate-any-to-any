export const azIpaRules = `
::Lower;

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

b } [ [pfktsşxçh] [^[:L:][:M:]] ] > p;
v } [ [pfktsşxçh] [^[:L:][:M:]] ] > f;
g } [ [pfktsşxçh] [^[:L:][:M:]] ] > k;
ğ } [ [pfktsşxçh] [^[:L:][:M:]] ] > x;
d } [ [pfktsşxçh] [^[:L:][:M:]] ] > t;
z } [ [pfktsşxçh] [^[:L:][:M:]] ] > s;
c } [ [pfktsşxçh] [^[:L:][:M:]] ] > t͡ʃ;
j } [ [pfktsşxçh] [^[:L:][:M:]] ] > ʃ;

p } [bvgğdzcjlmnry] > b;
f } [bvgğdzcjlmnry] > v;
k } [bvgğdzcjlmnry] > ɡ;
x } [bvgğdzcjlmnry] > ɣ;
t } [bvgğdzcjlmnry] > d;
s } [bvgğdzcjlmnry] > z;
ç } [bvgğdzcjlmnry] > d͡ʒ;
ş } [bvgğdzcjlmnry] > ʒ;

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
