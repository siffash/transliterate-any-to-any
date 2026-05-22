export const daIpaRules = `
::Lower;

$c = [b c d f g h j k l m n p q r s t v w x z];
$voiced_c = [l m n ŋ r v d ð];
$v = [a e i o u y æ ø å ː];
$boundary = [:^Letter:];
$letter = [:Letter:];

aa { r } [^ $v] > ;
[$letter] [o u å] { g } $boundary > w;
[a r] { g } $boundary > ;
jeg } $boundary > jɑj;
mig } $boundary > mɑj;

::Null;

aa > ɔː;
ee > eː;
ii > iː;
oo > oː;
uu > uː;

{ a } $c $v > ɑː;
{ e } $c $v > eː;
{ i } $c $v > iː;
{ o } $c $v > oː;
{ u } $c $v > uː;
{ y } $c $v > yː;
{ æ } $c $v > ɛː;
{ ø } $c $v > øː;
{ å } $c $v > ɔː;

{ a } $boundary > ɑː;
{ i } $boundary > iː;
{ o } $boundary > oː;
{ u } $boundary > uː;
{ y } $boundary > yː;
{ æ } $boundary > ɛː;
{ ø } $boundary > øː;
{ å } $boundary > ɔː;

{ i } g $boundary > iː;
{ e } g $boundary > eː;

[{iː} {eː}] { g } $boundary > ;

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

er } $boundary > ɐ;
{ e } $boundary > ə;
a [v f] n } $boundary > ɑʊ̯n;
a [v f] } $boundary > ɑʊ̯;

$v { r } [^ $v] > ɐ̯;
$v { r } $boundary > ɐ̯;

$v { d } [ $v l r n ] > ð;
$v { d } $boundary > ð;
$v { t } [ $v ɐ ] > ð;

{ j } eg > ɑɪ̯;
eg > eːɡ;
og > ɔʊ̯;
øg > øj;
en } $boundary > n̩;

c } [e i y æ ø] > s;
c > k;
g } [e i y æ ø] > j;

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

$boundary { p } > pʰ;
{ p } [$v l r j] > pʰ;

$boundary { t } > tʰ;
{ t } [$v l r j] > tʰ;

$boundary { k } > kʰ;
{ k } [$v l r j] > kʰ;

g > k;
`;
