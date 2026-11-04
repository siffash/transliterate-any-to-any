export const noIpaRules = `
::Lower;
::NFC;

[éèê] > e;
[óòô] > o;
[àâ] > a;
ä > æ;
ö > ø;
ü > y;

bb { y } [^[:L:][:M:]] > i;
dd { y } [^[:L:][:M:]] > i;
ff { y } [^[:L:][:M:]] > i;
gg { y } [^[:L:][:M:]] > i;
kk { y } [^[:L:][:M:]] > i;
ll { y } [^[:L:][:M:]] > i;
mm { y } [^[:L:][:M:]] > i;
nn { y } [^[:L:][:M:]] > i;
pp { y } [^[:L:][:M:]] > i;
rr { y } [^[:L:][:M:]] > i;
ss { y } [^[:L:][:M:]] > i;
tt { y } [^[:L:][:M:]] > i;
[^[:L:][:M:]] jo { h } n > ;
[^[:L:][:M:]] r { h } > ;
rr { h } > ;
[aeiouyæøåäöüéèêóòôàâ] [aeiouyæøåäöüéèêóòôàâ] { h } [bcdfgklmnpqrstxz] > ;
[aeiouyæøåäöüéèêóòôàâ] { h } [bcdfgklmnpqrstxz] > ː;
[aeiouyæøåäöüéèêóòôàâ] { h } [^[:L:][:M:]] > ;
[dg] { h } [^[:L:][:M:]] > ;

::Null;

ige } [^[:L:][:M:]] > iə;
ig } [^[:L:][:M:]] > i;
et } [^[:L:][:M:]] > ɛ;
er } [^[:L:][:M:]] > əɾ;

hv > ʋ;
hj > j;
olde > ɔldɛ;
ld > l;
enda > ɛndɑ;
nd > n;

ai > ɑɪ;
ei > æɪ;
au > æʉ;
øy > œʏ;
oy > ɔʏ;

[^[:L:][:M:]] mi { ch } a > k;
[^[:L:][:M:]] mi { ch } els > k;
sch > ʃ;
mi { ch } ell > ʃ;
[^[:L:][:M:]] { ch } [aeiouyæøåäöü] > ʃ;
ch > k;
skj > ʃ;
sj > ʃ;
sk } [eiy] > ʃ;
nkj > nç;
kj > ç;
tion > ʃun;
th > t;
[^[:L:][:M:]] { ph > f;
[st] [ɔɛoe] { ph > f;
l { ph > f;
tj > ç;
a { k } er > k;
aker > ɑkəɾ;
k } [eiy] > ç;
gj > j;
r { g } e > g;
bergen > bæɾgɛn;
holger > hɔlgəɾ;
g } [eiy] > j;

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

o } [bcdfghjklmnpqrstvwxz] [bcdfghjklmnpqrstvwxz] > ɔ;

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
n } k [eiy] > n;
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
