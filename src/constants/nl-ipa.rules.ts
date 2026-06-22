export const nlIpaRules = `
::Lower;

[’'] s [-] > s;
::Null;

$c = [bcdfghjklmnpqrstvwxz];
$v = [aeiouy];

{lijken} [:^Letter:] > ləkən;
{lijken} $ > ləkən;
{lijks} [:^Letter:] > ləks;
{lijks} $ > ləks;
{lijke} [:^Letter:] > ləkə;
{lijke} $ > ləkə;
{lijk} [:^Letter:] > lək;
{lijk} $ > lək;
{ische} [:^Letter:] > ɪsə;
{ische} $ > ɪsə;
{isch} [:^Letter:] > ɪs;
{isch} $ > ɪs;
{ige} [:^Letter:] > əɣə;
{ige} $ > əɣə;
{ig} [:^Letter:] > əx;
{ig} $ > əx;
{ties} [:^Letter:] > tsis;
{ties} $ > tsis;
{tie} [:^Letter:] > tsi;
{tie} $ > tsi;

eeuw > eːu;
ieuw > iu;
aai > aːi;
ooi > oːi;
oei > ui;

{sch} [:^Letter:] > s;
{sch} $ > s;
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

{a} $c $v > aː;
{e} $c $v > eː;
{o} $c $v > oː;
{u} $c $v > yː;

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

{en} [:^Letter:] > ən;
{en} $ > ən;
{e} [:^Letter:] > ə;
{e} $ > ə;

{b} [c f h k p s t] > p;
{d} [c f h k p s t] > t;
{v} [st] > f;
{z} [st] > s;
{g} [st] > x;

{a} [:^Letter:] > aː;
{a} $ > aː;
{o} [:^Letter:] > oː;
{o} $ > oː;
{u} [:^Letter:] > yː;
{u} $ > yː;
{b} [:^Letter:] > p;
{b} $ > p;
{d} [:^Letter:] > t;
{d} $ > t;
{v} [:^Letter:] > f;
{v} $ > f;
{z} [:^Letter:] > s;
{z} $ > s;
{g} [:^Letter:] > x;
{g} $ > x;

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
