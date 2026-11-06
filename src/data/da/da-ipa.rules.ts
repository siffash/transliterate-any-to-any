export const daIpaRules = `
::Lower;
::NFC;

aa { r } [^aeiouyæøåː] > ;
[:L:] [ouå] { g } [^[:L:][:M:]] > w;
[ar] { g } [^[:L:][:M:]] > ;
jeg } [^[:L:][:M:]] > jɑj;
mig } [^[:L:][:M:]] > mɑj;
[^[:L:][:M:]] jo { h } n > ;
[^[:L:][:M:]] r { h } > ;
rr { h } > ;
[aeiouyæøåäöüéèêóòôàâ] [aeiouyæøåäöüéèêóòôàâ] { h } [bcdfgklmnpqrstxz] > ;
[aeiouyæøåäöüéèêóòôàâ] { h } [bcdfgklmnpqrstxz] > ː;
[aeiouyæøåäöüéèêóòôàâ] { h } [^[:L:][:M:]] > ;
[dg] { h } [^[:L:][:M:]] > ;

::Null;

[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzŋɕʁ]* { ie } [bcdfgjklmpqstvwxz] > iː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzŋɕʁ]* { ie } n [[:L:][:M:]] > iː;

aa > ɔː;
ee > eː;
ii > iː;
oo > oː;
uu > uː;

a } [bcdfghjklmnpqrstvwxz] [aeiouyæøåː] > ɑː;
e } [bcdfghjklmnpqrstvwxz] [aeiouyæøåː] > eː;
i } [bcdfghjklmnpqrstvwxz] [aeiouyæøåː] > iː;
o } [bcdfghjklmnpqrstvwxz] [aeiouyæøåː] > oː;
u } [bcdfghjklmnpqrstvwxz] [aeiouyæøåː] > uː;
y } [bcdfghjklmnpqrstvwxz] [aeiouyæøåː] > yː;
æ } [bcdfghjklmnpqrstvwxz] [aeiouyæøåː] > ɛː;
ø } [bcdfghjklmnpqrstvwxz] [aeiouyæøåː] > øː;
å } [bcdfghjklmnpqrstvwxz] [aeiouyæøåː] > ɔː;

a } [^[:L:][:M:]] > ɑː;
i } [^[:L:][:M:]] > iː;
o } [^[:L:][:M:]] > oː;
u } [^[:L:][:M:]] > uː;
y } [^[:L:][:M:]] > yː;
æ } [^[:L:][:M:]] > ɛː;
ø } [^[:L:][:M:]] > øː;
å } [^[:L:][:M:]] > ɔː;

i } g [^[:L:][:M:]] > iː;
e } g [^[:L:][:M:]] > eː;

[{iː}{eː}] { g } [^[:L:][:M:]] > ;

tion > sjon;
[:L:] { t } himm > t;
[:L:] { t } havn > t;
[:L:] { t } hus > t;
[:L:] { t } holm > t;
[:L:] { t } høj > t;
[:L:] { t } hage > t;
th > t;
p { p } h > p;
ph > f;
qu > kv;
ld > l;
nd > n;
rd > ʁ;
sch > s;
ds > s;
dt > t;
hj > j;
hv > v;
sj > ɕ;
tj > tɕ;
ch } [rl] > k;
[^[:L:][:M:]] mi { ch } a > k;
[^[:L:][:M:]] mi { ch } els > k;
mi { ch } ell > ɕ;
[^[:L:][:M:]] { ch } [aeiouyæøåäöü] > ɕ;
ch > k;
ng > ŋ;
nk > ŋk;

er } [^[:L:][:M:]] > ɛʁ;
e } [^[:L:][:M:]] > ə;
a [vf] n } [^[:L:][:M:]] > ɑʊ̯n;
a [vf] } [^[:L:][:M:]] > ɑʊ̯;

[aɑ] ː { r } [^aeiouyæøåː] > ʁ;
[aɑ] ː { r } [^[:L:][:M:]] > ʁ;
[aeiouyæøåː] { r } [^aeiouyæøåː] > ɐ̯;
[aeiouyæøåː] { r } [^[:L:][:M:]] > ɐ̯;

j } eg > ɑɪ̯;
eg > eːɡ;
og > ɔʊ̯;
øg > øj;
en } [^[:L:][:M:]] > ən;

c } [eiyæø] > s;
c > k;
g } [eiyæø] > j;

a > ɑ;
e > ɛ;
i > i;
o > o;
u > u;
y > y;
æ > ɛ;
ø > œ;
å > ɔ;

b > b;
d > d;
f > f;
h > h;
j > j;
k > k;
l > l;
m > m;
n > n;
p > p;
q > k;
r > ʁ;
s > s;
t > t;
v > v;
w > v;
x > ks;
z > s;

::Null;

k { k+ > ;
t { t+ > ;
l { l+ > ;
n { n+ > ;
m { m+ > ;
p { p+ > ;
s { s+ > ;
f { f+ > ;

[^[:L:][:M:]] { p > pʰ;
p } [aeiouyæøåːlrj] > pʰ;

[^[:L:][:M:]] { t > tʰ;
t } [aeiouyæøåːlrj] > tʰ;

[^[:L:][:M:]] { k > kʰ;
k } [aeiouyæøåːlrj] > kʰ;

g > ɡ;
`;
