export const noIpaRules = `
::Lower;
::NFC;

[[:L:][:M:]] { que } [^[:L:][:M:]] > k;

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
[aeiouyæøåäöüéèêóòôàâdg] { h } [^[:L:][:M:]] > ;

::Null;

[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzçŋɖɭɳɾʂʃʈʋ]* i { e } [bcdfgjkmpqstvwxz] > ;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzçŋɖɭɳɾʂʃʈʋ]* i { e } l [^l] > ;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzçŋɖɭɳɾʂʃʈʋ]* i { e } n [[:L:][:M:]] > ;

ige } [^[:L:][:M:]] > iə;
ig } [^[:L:][:M:]] > i;
et } [^[:L:][:M:]] > ɛ;
er } [^[:L:][:M:]] > əɾ;

hv > ʋ;
[hg] j > j;
olde > ɔldɛ;
l [dl] > l;
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
ssj > sʃ;
sj > ʃ;
sk } [eiy] > ʃ;
nkj > nç;
tion > ʃun;
tth > t;
[:L:] { t } hage > t;
[:L:] { t } hav > t;
[:L:] { t } hus > t;
[:L:] { t } holm > t;
[:L:] { t } heim > t;
[:L:] { t } haug > t;
th > t;
[^[:L:][:M:]] { ph > f;
[st] [ɔɛoe] { ph > f;
l { ph > f;
[kt] j > ç;
a { k } er > k;
aker > ɑkəɾ;
[:L:] { k } e > k;
k } [eiy] > ç;
[:L:] { g } ei > j;
[:L:] { g } e > g;
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

[eæ] } r > æ;
ø } r > œ;

bb > b;
dd > d;
ff > f;
gg > g;
kk > k;
mm > m;
nn > n;
pp > p;
ss > s;
tt > t;

o } [bcdfghjklmnpqrstvwxz] [bcdfghjklmnpqrstvwxz] > ɔ;

aa > ɔ;
a > ɑ;
b > b;
d > d;
e > ɛ;
f > f;
g > g;
hl > l;
[rh] r > ɾ;
h > h;
i > i;
j > j;
l > l;
m > m;
n } k [eiy] > n;
n } k > ŋ;
n > n;
o > u;
p > p;
qu > kʋ;
[ckq] > k;
r > ɾ;
[sz] > s;
t > t;
uu > ʉ;
u > ʉ;
[vw] > ʋ;
x > ks;
y > y;
æ > æ;
ø > ø;
å > ɔ;
`;
