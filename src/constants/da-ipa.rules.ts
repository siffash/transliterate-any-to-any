export const daIpaRules = `
::Lower;

$c = [b c d f g h j k l m n p q r s t v w x z];
$voiced_c = [l m n ŋ r v d ð];
$v = [a e i o u y æ ø å ː];
$letter = [:Letter:];

aa { r } [^ $v] > ;
[$letter] [o u å] { g } [:^Letter:] > w;
[a r] { g } [:^Letter:] > ;
jeg } [:^Letter:] > jɑj;
mig } [:^Letter:] > mɑj;

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
a [v f] n } [:^Letter:] > ɑʊ̯n;
a [v f] } [:^Letter:] > ɑʊ̯;

$v { r } [^ $v] > ɐ̯;
$v { r } [:^Letter:] > ɐ̯;

$v { d } [$v l r n] > ð;
$v { d } [:^Letter:] > ð;
$v { t } [$v ɐ] > ð;

{ j } eg > ɑɪ̯;
eg > eːɡ;
og > ɔʊ̯;
øg > øj;
en } [:^Letter:] > n̩;

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

[:^Letter:] { p } > pʰ;
{ p } [$v l r j] > pʰ;

[:^Letter:] { t } > tʰ;
{ t } [$v l r j] > tʰ;

[:^Letter:] { k } > kʰ;
{ k } [$v l r j] > kʰ;

g > k;
`;
