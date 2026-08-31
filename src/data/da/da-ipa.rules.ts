export const daIpaRules = `
::Lower;

aa { r } [^aeiouyæøåː] > ;
[:L:] [ouå] { g } [^[:L:][:M:]] > w;
[ar] { g } [^[:L:][:M:]] > ;
jeg } [^[:L:][:M:]] > jɑj;
mig } [^[:L:][:M:]] > mɑj;

::Null;

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
th > t;
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
ch > ɕ;
ng > ŋ;
nk > ŋk;

er } [^[:L:][:M:]] > ɐ;
e } [^[:L:][:M:]] > ə;
a [vf] n } [^[:L:][:M:]] > ɑʊ̯n;
a [vf] } [^[:L:][:M:]] > ɑʊ̯;

[aeiouyæøåː] { r } [^aeiouyæøåː] > ɐ̯;
[aeiouyæøåː] { r } [^[:L:][:M:]] > ɐ̯;

[aeiouyæøåː] { d } [aeiouyæøåːlrn] > ð;
[aeiouyæøåː] { d } [^[:L:][:M:]] > ð;
[aeiouyæøåː] { t } [aeiouyæøåːɐ] > ð;

j } eg > ɑɪ̯;
eg > eːɡ;
og > ɔʊ̯;
øg > øj;
en } [^[:L:][:M:]] > n̩;

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

b > p;
d > t;
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

k { k > ;
t { t > ;
l { l > ;
n { n > ;
m { m > ;
p { p > ;
s { s > ;
f { f > ;

[^[:L:][:M:]] { p > pʰ;
p } [aeiouyæøåːlrj] > pʰ;

[^[:L:][:M:]] { t > tʰ;
t } [aeiouyæøåːlrj] > tʰ;

[^[:L:][:M:]] { k > kʰ;
k } [aeiouyæøåːlrj] > kʰ;

g > k;
`;
