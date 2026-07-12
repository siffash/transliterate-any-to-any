export const daIpaRules = `
::Lower;

aa { r } [^aeiouyæøåː] > ;
[:Letter:] [ouå] { g } [:^Letter:] > w;
[ar] { g } [:^Letter:] > ;
jeg } [:^Letter:] > jɑj;
mig } [:^Letter:] > mɑj;

::Null;

aa > ɔː;
ee > eː;
ii > iː;
oo > oː;
uu > uː;

{ a } [bcdfghjklmnpqrstvwxz] [aeiouyæøåː] > ɑː;
{ e } [bcdfghjklmnpqrstvwxz] [aeiouyæøåː] > eː;
{ i } [bcdfghjklmnpqrstvwxz] [aeiouyæøåː] > iː;
{ o } [bcdfghjklmnpqrstvwxz] [aeiouyæøåː] > oː;
{ u } [bcdfghjklmnpqrstvwxz] [aeiouyæøåː] > uː;
{ y } [bcdfghjklmnpqrstvwxz] [aeiouyæøåː] > yː;
{ æ } [bcdfghjklmnpqrstvwxz] [aeiouyæøåː] > ɛː;
{ ø } [bcdfghjklmnpqrstvwxz] [aeiouyæøåː] > øː;
{ å } [bcdfghjklmnpqrstvwxz] [aeiouyæøåː] > ɔː;

{ a } [:^Letter:] > ɑː;
{ i } [:^Letter:] > iː;
{ o } [:^Letter:] > oː;
{ u } [:^Letter:] > uː;
{ y } [:^Letter:] > yː;
{ æ } [:^Letter:] > ɛː;
{ ø } [:^Letter:] > øː;
{ å } [:^Letter:] > ɔː;

{ i } g [:^Letter:] > iː;
{ e } g [:^Letter:] > eː;

[{iː} {eː}] { g } [:^Letter:] > ;

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

er } [:^Letter:] > ɐ;
{ e } [:^Letter:] > ə;
a [vf] n } [:^Letter:] > ɑʊ̯n;
a [vf] } [:^Letter:] > ɑʊ̯;

[aeiouyæøåː] { r } [^aeiouyæøåː] > ɐ̯;
[aeiouyæøåː] { r } [:^Letter:] > ɐ̯;

[aeiouyæøåː] { d } [aeiouyæøåːlrn] > ð;
[aeiouyæøåː] { d } [:^Letter:] > ð;
[aeiouyæøåː] { t } [aeiouyæøåːɐ] > ð;

{ j } eg > ɑɪ̯;
eg > eːɡ;
og > ɔʊ̯;
øg > øj;
en } [:^Letter:] > n̩;

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

k { k } > ;
t { t } > ;
l { l } > ;
n { n } > ;
m { m } > ;
p { p } > ;
s { s } > ;
f { f } > ;

[:^Letter:] { p } > pʰ;
{ p } [aeiouyæøåːlrj] > pʰ;

[:^Letter:] { t } > tʰ;
{ t } [aeiouyæøåːlrj] > tʰ;

[:^Letter:] { k } > kʰ;
{ k } [aeiouyæøåːlrj] > kʰ;

g > k;
`;
