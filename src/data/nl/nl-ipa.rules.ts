export const nlIpaRules = `
::Lower;

['’‘\`´ʼ] s [-] > s;

::Null;

{lijken} [^[:L:][:M:]] > ləkən;
{lijks} [^[:L:][:M:]] > ləks;
{lijke} [^[:L:][:M:]] > ləkə;
{lijk} [^[:L:][:M:]] > lək;
{ische} [^[:L:][:M:]] > ɪsə;
{isch} [^[:L:][:M:]] > ɪs;
{ige} [^[:L:][:M:]] > əɣə;
{ig} [^[:L:][:M:]] > əx;
{ties} [^[:L:][:M:]] > tsis;
{tie} [^[:L:][:M:]] > tsi;

eeuw > eːu;
ieuw > iu;
aai > aːi;
ooi > oːi;
oei > ui;

{sch} [^[:L:][:M:]] > s;
sch > sx;
ch > x;
ng > ŋ;
nk > ŋk;
nj > ɲ;
sj > ʃ;
tj > c;
qu > kʋ;
ph > f;
th > t;
rh > ʁ;

ij > ɛi;
ui > œy;
eij > ɛi;
ei > ɛi;
eau > oː;
au > ɑu;
ou > ɑu;
eu > øː;
oe > u;
ae > eː;
aa > aː;
ee > eː;
oo > oː;
uu > yː;
ie > i;
ai > ɑi;
oi > ɔi;
uw > yʋ;

{c}[eiy] > s;
{c} > k;

{a} [bcdfghjklmnpqrstvwxz] [aeiouy] > aː;
{e} [bcdfghjklmnpqrstvwxz] [aeiouy] > eː;
{o} [bcdfghjklmnpqrstvwxz] [aeiouy] > oː;
{u} [bcdfghjklmnpqrstvwxz] [aeiouy] > yː;

bb > b;
dd > d;
ff > f;
gg > ɣ;
kk > k;
ll > l;
mm > m;
nn > n;
pp > p;
rr > ʁ;
ss > s;
tt > t;
vv > v;
ww > ʋ;
zz > z;

{en} [^[:L:][:M:]] > ən;
{e} [^[:L:][:M:]] > ə;

{b} [c f h k p s t] > p;
{d} [c f h k p s t] > t;
{v} [st] > f;
{z} [st] > s;
{g} [st] > x;

{a} [^[:L:][:M:]] > aː;
{o} [^[:L:][:M:]] > oː;
{u} [^[:L:][:M:]] > yː;
{b} [^[:L:][:M:]] > p;
{d} [^[:L:][:M:]] > t;
{v} [^[:L:][:M:]] > f;
{z} [^[:L:][:M:]] > s;
{g} [^[:L:][:M:]] > x;

b > b;
d > d;
f > f;
g > ɣ;
h > ɦ;
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
w > ʋ;
x > ks;
z > z;

a > ɑ;
e > ɛ;
i > ɪ;
o > ɔ;
u > ʏ;
y > i;
`;
