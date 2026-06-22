export const slIpaRules = `
::Lower;

$vowel = [a e i o u á â à é ê è ẹ í î ì ó ô ò ọ ú û ù y ŕ r̀];
$cons = [b c č d f g h j k l m n p q r s š t v w x z ž ʋ ʎ ɲ];
$voiced = [b d g z ž];
$voiceless = [p t k s š c č f h x];

d ž > d͡ʒ;
l j > ʎ;
n j > ɲ;

{ p } $voiced > b;
{ t } $voiced > d;
{ k } $voiced > ɡ;
{ s } $voiced > z;
{ š } $voiced > ʒ;
{ c } $voiced > d͡z;
{ č } $voiced > d͡ʒ;
{ f } $voiced > v;

{ b } $voiceless > p;
{ d } $voiceless > t;
{ g } $voiceless > k;
{ z } $voiceless > s;
{ ž } $voiceless > ʃ;

{ b } [:^Letter:] > p;
{ b } $ > p;
{ d } [:^Letter:] > t;
{ d } $ > t;
{ g } [:^Letter:] > k;
{ g } $ > k;
{ z } [:^Letter:] > s;
{ z } $ > s;
{ ž } [:^Letter:] > ʃ;
{ ž } $ > ʃ;

$cons { r } $cons > r̩;
$cons { ŕ } $cons > r̩ː;
$cons { r̀ } $cons > r̩;
$cons { r } [:^Letter:] > r̩;
$cons { ŕ } [:^Letter:] > r̩ː;
$cons { r̀ } [:^Letter:] > r̩;
$cons { ŕ } $ > r̩ː;
$cons { r̀ } $ > r̩;
$cons { r } $ > r̩;
[:^Letter:] { r } $cons > r̩;
[:^Letter:] { ŕ } $cons > r̩ː;
[:^Letter:] { r̀ } $cons > r̩;

[:^Letter:] { v } r > ʋ ;
[:^Letter:] { v } l > ʋ ;
{ v } $cons > w ;
{ v } [:^Letter:] > w ;
{ v } $ > w ;

b > b;
c > t͡s;
č > t͡ʃ;
d > d;
f > f;
g > ɡ;
h > x;
j > j;
k > k;
l > l;
m > m;
n > n;
p > p;
q > k;
r > ɾ;
s > s;
š > ʃ;
t > t;
v > ʋ;
w > ʋ;
x > k s;
z > z;
ž > ʒ;

á > aː;
â > aː;
à > a;
a > a;
é > eː;
ê > ɛː;
è > ɛ;
ẹ > e;
e > ɛ;
í > iː;
î > iː;
ì > i;
i > i;
y > i;
ó > oː;
ô > ɔː;
ò > ɔ;
ọ > o;
o > ɔ;
ú > uː;
û > uː;
ù > u;
u > u;
`;
