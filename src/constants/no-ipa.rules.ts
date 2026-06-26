export const noIpaRules = `
::Lower;
$vowel = [aeiouyæøå];
$cons = [bcdfghjklmnpqrstvwxz];
$pal = [eiy];

ige } [:^Letter:] > iə;
ig } [:^Letter:] > i;
et } [:^Letter:] > ɛ;
er } [:^Letter:] > əɾ;

hv > ʋ;
hj > j;
o l d e > ɔldɛ;
ld > l;
e n d a > ɛndɑ;
nd > n;

ai > ɑɪ;
ei > æɪ;
au > æʉ;
øy > œʏ;
oy > ɔʏ;

sch > ʂ;
skj > ʂ;
sj > ʂ;
sk } $pal > ʂ;
sl > ʂl;
nkj > nç;
kj > ç;
tion > ʂun;
th > t;
tj > ç;
a { k } er > k;
aker > ɑkəɾ;
k } $pal > ç;
gj > j;
r { g } e > g;
bergen > bæɾgɛn;
holger > hɔlgəɾ;
g } $pal > j;

rt > ʈ;
rd > ɖ;
rn > ɳ;
rl > ɭ;
rs > ʂ;

ng > ŋ;
gn > ŋn;

e } r > æ;
æ } r > æ;
ø } r > œ;

bb > b;
dd > d;
ff > f;
gg > g;
kk > k;
ll > l;
mm > m;
nn > n;
pp > p;
rr > ɾ;
ss > s;
tt > t;

o } $cons $cons > ɔ;

aa > ɔ;
a > ɑ;
b > b;
c > k;
d > d;
e > ɛ;
f > f;
g > g;
hl > l;
hr > ɾ;
h > h;
i > i;
j > j;
k > k;
l > l;
m > m;
n } k j > n;
n } k $pal > n;
n } k > ŋ;
n > n;
o > u;
p > p;
qu > kʋ;
q > k;
r > ɾ;
s > s;
t > t;
uu > ʉ;
u > ʉ;
v > ʋ;
w > ʋ;
x > ks;
y > y;
z > s;
æ > æ;
ø > ø;
å > ɔ;
`;
