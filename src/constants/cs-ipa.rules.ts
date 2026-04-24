export const csIpaRules = `
::Lower;

$vowel = [a á e é ě i í o ó u ú ů y ý];
$cons = [b c č d ď f g h ch j k l m n ň p q r ř s š t ť v w x z ž];
$voiced = [b d ď g z ž ɦ h];
$voiceless = [p t ť k s š f c č x];
$obstruent = [b d ď g z ž h p t ť k s š f c č x];
$boundary = [:^Letter:];

ch } [b d ď g z ž h] > ɣ;
ch > x;

ou > oʊ̯;
au > aʊ̯;
eu > ɛʊ̯;

d ě > ɟɛ;
t ě > cɛ;
n ě > ɲɛ;
m ě > mɲɛ;
b ě > bjɛ;
p ě > pjɛ;
v ě > vjɛ;
f ě > fjɛ;

{ d } [i í] > ɟ;
{ t } [i í] > c;
{ n } [i í] > ɲ;

dž > d͡ʒ;
dz > d͡z;

$cons {r} [$cons $boundary] > r̩;
^ {r} [$cons $boundary] > r̩;
$cons {l} [$cons $boundary] > l̩;
^ {l} [$cons $boundary] > l̩;

b } $boundary > p;
d } $boundary > t;
ď } $boundary > c;
g } $boundary > k;
z } $boundary > s;
ž } $boundary > ʃ;
h } $boundary > x;
v } $boundary > f;
ř } $boundary > r̝̊;

b } $voiceless > p;
d } $voiceless > t;
ď } $voiceless > c;
g } $voiceless > k;
z } $voiceless > s;
ž } $voiceless > ʃ;
h } $voiceless > x;
v } $voiceless > f;
ř } $voiceless > r̝̊;
$voiceless { ř } > r̝̊;

p } $voiced > b;
t } $voiced > d;
ť } $voiced > ď;
k } $voiced > g;
s } $voiced > z;
š } $voiced > ž;
f } $voiced > ɦ;
x } $voiced > ɦ;
c } $voiced > d͡z;
č } $voiced > d͡ʒ;

a > a;
á > aː;
b > b;
c > t͡s;
č > t͡ʃ;
d > d;
ď > ɟ;
e > ɛ;
é > ɛː;
ě > jɛ;
f > f;
g > ɡ;
h > ɦ;
i > ɪ;
í > iː;
j > j;
k > k;
l > l;

m } [f v] > ɱ;
m > m;

n } [g k x] > ŋ;
n > n;
ň > ɲ;

o > o;
ó > oː;
p > p;
q > kv;
r > r;
ř > r̝;
s > s;
š > ʃ;
t > t;
ť > c;
u > u;
ú > uː;
ů > uː;
v > v;
w > v;
x > ks;
y > ɪ;
ý > iː;
z > z;
ž > ʒ;
`;
