export const svIpaRules = `
::Lower;

$softv = [e i y ä ö];
$hardv = [a o u å];
$vowel_sv = [a e i o u y å ä ö];
$cons = [b c d f g h j k l m n p q r s t v w x z ʈ ɖ ɳ ɭ ʂ ɧ ɕ ŋ];
$bound = [^a-zåäö];

kristian > krɪɧan;
tion > ɧuːn;
sch > ɧ;
stj > ɧ;
skj > ɧ;
sj > ɧ;
sh > ɧ;
dj > j;
gj > j;
hj > j;
lj > j;
tj > ɕ;
kj > ɕ;
th > t;
ch > ɕ;

rt > ʈ;
rd > ɖ;
rn > ɳ;
rl > ɭ;
rs > ʂ;

ng > ŋ;
enkø > ɛnɕø;
nk > ŋk;
gn > ŋn;

sk } $softv > ɧ;
falk > falk;
k } $softv > ɕ;
g } $softv > j;
c } $softv > s;

rg } $bound > rj;
lg } $bound > lj;

ck > k;
qu > kv;
q > k;
w > v;
ex > ɛks;
x > ks;
z > s;
c > k;

ese } $bound > eːs;
nne } $bound > n;
ice } $bound > ɪs;
au > aʊ;
oy > ɔj;
a } $cons $cons > a;
e } $cons $cons > ɛ;
i } $cons $cons > ɪ;
oo > uː;
o } $cons $cons > ɔ;
u } $cons $cons > ɵ;
y } $cons $cons > ʏ;
å } $cons $cons > ɔ;
ei > ɛj;
ä } $cons $cons > ɛ;
ö } $cons $cons > œ;

a } $cons $bound > a;
e } $cons $bound > ɛ;
i } $cons $bound > ɪ;
o } $cons $bound > ɔ;
u } $cons $bound > ɵ;
y } $cons $bound > ʏ;
å } $cons $bound > ɔ;
ä } $cons $bound > ɛ;
ö } $cons $bound > œ;
a } $bound > a;

a > ɑː;
e > eː;
i > iː;
o > uː;
u > ʉː;
y > yː;
å > oː;
ä > ɛː;
ö > øː;

bb > b;
dd > d;
ff > f;
gg > ɡ;
kk > k;
ll > l;
mm > m;
nn > n;
pp > p;
rr > r;
ss > s;
tt > t;
vv > v;

b > b;
d > d;
f > f;
g > ɡ;
hl > l;
h > h;
j > j;
k > k;
l > l;
m > m;
n > n;
p > p;
r > r;
s > s;
t > t;
v > v;
`;
