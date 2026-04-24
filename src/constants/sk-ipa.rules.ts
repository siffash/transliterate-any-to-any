export const skIpaRules = `
::Lower;
$boundary = [:^Letter:];

t } islav > t;
t } er > t;
r { t } in > t;
t } ína > t;
t } el > t;
t } ika > t;
n } ika > n;
n } er > n;
l } ektr > l;
l } en > l;
l } evi > l;
d } el > d;
c } om > k;
ou } p > u;
ou } v > u;
t } efan > t;
l { n } e > n;
th > t;
sz > s;
gy > ɟ;
ř > r̝;
ch > x;

$voiceless = [p t ť c č k f s š ʃ x];
$voiced = [b d ď g z ž ʒ h ɦ];

b } $voiceless > p;
d } $voiceless > t;
ď } $voiceless > ť;
dz } $voiceless > c;
dž } $voiceless > č;
g } $voiceless > k;
z } $voiceless > s;
ž } $voiceless > ʃ;
h } $voiceless > x;
v } $voiceless > f;

b } $boundary > p;
d } $boundary > t;
ď } $boundary > ť;
dz } $boundary > c;
dž } $boundary > č;
g } $boundary > k;
z } $boundary > s;
ž } $boundary > ʃ;
h } $boundary > x;

p } $voiced > b;
t } $voiced > d;
ť } $voiced > ď;
k } $voiced > g;
s } $voiced > z;
š } $voiced > ʒ;
f } $voiced > v;
c } $voiced > d͡z;
č } $voiced > d͡ʒ;
x } $voiced > ɦ;

p } dz > b;
t } dz > d;
ť } dz > ď;
k } dz > g;
s } dz > z;
š } dz > ʒ;
f } dz > v;
c } dz > d͡z;
č } dz > d͡ʒ;
x } dz > ɦ;

p } dž > b;
t } dž > d;
ť } dž > ď;
k } dž > g;
s } dž > z;
š } dž > ʒ;
f } dž > v;
c } dž > d͡z;
č } dž > d͡ʒ;
x } dž > ɦ;
  
dz > d͡z;
dž > d͡ʒ;

dia > ɟɪa;
die > ɟɪɛ;
diu > ɟɪu;
di > ɟi;
dí > ɟiː;
de > ɟɛ;

tia > cɪa;
tie > cɪɛ;
tiu > cɪu;
ti > ci;
tí > ciː;
te > cɛ;

nia > ɲɪa;
nie > ɲɪɛ;
niu > ɲɪu;
ni > ɲi;
ní > ɲiː;
ne > ɲɛ;

lia > ʎɪa;
lie > ʎɪɛ;
liu > ʎɪu;
li > ʎi;
lí > ʎiː;
le > ʎɛ;

ia > ɪa;
ie > ɪɛ;
iu > ɪu;
ou > ɔu;

{ v } $boundary > u̯;

a > a;
á > aː;
ä > ɛ;
b > b;
c > t͡s;
č > t͡ʃ;
d > d;
ď > ɟ;
e > ɛ;
é > ɛː;
f > f;
g > ɡ;
h > ɦ;
i > i;
í > iː;
j > j;
k > k;
l > l;
ľ > ʎ;
ĺ > lː;
m > m;
n > n;
ň > ɲ;
o > ɔ;
ó > ɔː;
ô > uɔ;
p > p;
q > kv;
r > r;
ŕ > rː;
s > s;
š > ʃ;
t > t;
ť > c;
u > u;
ú > uː;
v > v;
w > v;
x > ks;
y > i;
ý > iː;
z > z;
ž > ʒ;
`;
