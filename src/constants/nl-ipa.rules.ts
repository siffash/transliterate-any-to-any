export const nlIpaRules = `
::Lower;

[’'] s [-] > s;
::Null;

$c = [bcdfghjklmnpqrstvwxz];
$v = [aeiouy];
$boundary = [:^Letter:];

{lijken} $boundary > ləkən;
{lijken} $ > ləkən;
{lijks} $boundary > ləks;
{lijks} $ > ləks;
{lijke} $boundary > ləkə;
{lijke} $ > ləkə;
{lijk} $boundary > lək;
{lijk} $ > lək;
{ische} $boundary > ɪsə;
{ische} $ > ɪsə;
{isch} $boundary > ɪs;
{isch} $ > ɪs;
{ige} $boundary > əɣə;
{ige} $ > əɣə;
{ig} $boundary > əx;
{ig} $ > əx;
{ties} $boundary > tsis;
{ties} $ > tsis;
{tie} $boundary > tsi;
{tie} $ > tsi;

eeuw > eːu;
ieuw > iu;
aai > aːi;
ooi > oːi;
oei > ui;

{sch} $boundary > s;
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

{en} $boundary > ən;
{en} $ > ən;
{e} $boundary > ə;
{e} $ > ə;

{b} [c f h k p s t] > p;
{d} [c f h k p s t] > t;
{v} [st] > f;
{z} [st] > s;
{g} [st] > x;

{a} $boundary > aː;
{a} $ > aː;
{o} $boundary > oː;
{o} $ > oː;
{u} $boundary > yː;
{u} $ > yː;
{b} $boundary > p;
{b} $ > p;
{d} $boundary > t;
{d} $ > t;
{v} $boundary > f;
{v} $ > f;
{z} $boundary > s;
{z} $ > s;
{g} $boundary > x;
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
