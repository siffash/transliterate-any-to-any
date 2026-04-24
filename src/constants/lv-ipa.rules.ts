export const lvIpaRules = `
::Lower;

$vl = [p t k ķ c č s š f h];
$vd = [b d g ģ z ž];
$nonletter = [^a-zāčēģīķļņšūž];

dž } $vl > t͡ʃ;
dz } $vl > t͡s;

p } dz > b;
p } dž > b;
t } dz > d;
t } dž > d;
k } dz > ɡ;
k } dž > ɡ;
c } dz > d͡z;
c } dž > d͡z;
č } dz > d͡ʒ;
č } dž > d͡ʒ;
s } dz > z;
s } dž > z;
š } dz > ʒ;
š } dž > ʒ;
ķ } dz > ɟ;
ķ } dž > ɟ;

b } $vl > p;
d } $vl > t;
g } $vl > k;
ģ } $vl > c;
z } $vl > s;
ž } $vl > ʃ;
v } $vl > f;

p } $vd > b;
t } $vd > d;
k } $vd > ɡ;
c } $vd > d͡z;
č } $vd > d͡ʒ;
s } $vd > z;
š } $vd > ʒ;
ķ } $vd > ɟ;

n } k > ŋ;
n } g > ŋ;
n } ķ > ɲ;
n } ģ > ɲ;

ie > iɛ;
ai > ai;
au > au;
ei > ɛi;
ui > ui;

dž > d͡ʒ;
dz > d͡z;
ds > t͡s;
dš > t͡ʃ;
ts > t͡s;
tš > t͡ʃ;

q > k;
w > v;
x > ks;
y > i;
a > a;
ā > aː;
b > b;
c > t͡s;
č > t͡ʃ;
d > d;
e > ɛ;
ē > ɛː;
f > f;
g > ɡ;
ģ > ɟ;
h > x;
i > i;
ī > iː;
j > j;
k > k;
ķ > c;
l > l;
ļ > ʎ;
m > m;
n > n;
ņ > ɲ;
o > uɔ;
p > p;
r > r;
s > s;
š > ʃ;
t > t;
u > u;
ū > uː;
v > v;
z > z;
ž > ʒ;
`;
