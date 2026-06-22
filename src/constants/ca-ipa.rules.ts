export const caIpaRules = `
::Lower;

['] > ;

::Null;

$front = [e è é i í ï];
$vowel = [a à e è é i í ï o ò ó u ú ü];
$voiced_cons = [b d g v z ʒ d͡ʒ];
$voiceless_cons = [p t k f s ʃ t͡ʃ];

ll > ʎ;
ny > ɲ;
tx > t͡ʃ;
tj > d͡ʒ;
tg } $front > d͡ʒ;
ix > ʃ;
rr > r;
ss > s;
ç > s;
l·l > ɫː;
m m > mː;
n n > nː;
y > j;
i g } n > i ɡ;
i g } m > i ɡ;
i g } l > i ɡ;
i g } r > i ɡ;
i g } [^aàeèéiíïoòóuúü] > t͡ʃ;
i g } [:^Letter:] > t͡ʃ;
qu } $front > k;
gu } $front > ɡ;
gü > ɡw;
tz > d͡z;
ds > t͡s;
ts > t͡s;

c } $front > s;
c > k;
g } $front > ʒ;
j > ʒ;
h > ;

[:^Letter:] { r > r;
[r] } [:^Letter:] > r;
$vowel { r } $vowel > ɾ;
r > r;

$vowel { s } $vowel > z;

x } [:^Letter:] > ʃ;
$vowel { x } $vowel > ks;
x > ʃ;

b } $voiceless_cons > p;
d } $voiceless_cons > t;
g } $voiceless_cons > k;
v } $voiceless_cons > f;
z } $voiceless_cons > s;
ʒ } $voiceless_cons > ʃ;
d͡ʒ } $voiceless_cons > t͡ʃ;

p } $voiced_cons > b;
t } $voiced_cons > d;
k } $voiced_cons > g;
f } $voiced_cons > v;
s } $voiced_cons > z;
ʃ } $voiced_cons > ʒ;
t͡ʃ } $voiced_cons > d͡ʒ;

b } [:^Letter:] > p;
d } [:^Letter:] > t;
g } [:^Letter:] > k;
v } [:^Letter:] > f;
z } [:^Letter:] > s;
ʒ } [:^Letter:] > ʃ;
d͡ʒ } [:^Letter:] > t͡ʃ;

v > b;
l > ɫ;

[a à] > a;
è > ɛ;
é > e;
[i í ï] > i;
ò > ɔ;
ó > o;
[u ú ü] > u;

[:^Letter:] [^$vowel]* { e } [^$vowel]* [àèéíòóú] > ə;
e } [^$vowel]* [àèéíòóú] > ə;
[a e] } [^$vowel]* [:^Letter:] > ə;
o } [^$vowel]* [àèéíòóú] > u;
o } [^$vowel]* [:^Letter:] > u;

e > ɛ;
o > ɔ;
g > ɡ;
`;
