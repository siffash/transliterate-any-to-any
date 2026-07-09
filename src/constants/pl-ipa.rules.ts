export const plIpaRules = `
::Lower;

$vowel_pl = [a ą e ę i o ó u y];
$fric = [f w s z ś ź ż x h];

c i } $vowel_pl > t͡ɕ;
d z i } $vowel_pl > d͡ʑ;
s i } $vowel_pl > ɕ;
z i } $vowel_pl > ʑ;
n i } $vowel_pl > ɲ;

c i > t͡ɕi;
d z i > d͡ʑi;
s i > ɕi;
z i > ʑi;
n i > ɲi;
i } $vowel_pl > j;

ą } [p b] > ɔm;
ą } [t d c] > ɔn;
ą } d z > ɔn;
ą } d ź > ɔɲ;
ą } d ż > ɔn;
ą } c z > ɔn;
ą } [k g] > ɔŋ;
ą } [ć {dź}] > ɔɲ;
ą } [ł l] > ɔ;
ą } $fric > ɔ̃;
ą } s z > ɔ̃;
ą } c h > ɔ̃;
ą } r z > ɔ̃;
ą > ɔ̃w̃;

ę } [p b] > ɛm;
ę } [t d c] > ɛn;
ę } d z > ɛn;
ę } d ź > ɛɲ;
ę } d ż > ɛn;
ę } c z > ɛn;
ę } [k g] > ɛŋ;
ę } [ć {dź}] > ɛɲ;
ę } [ł l] > ɛ;
ę } $fric > ɛ̃;
ę } s z > ɛ̃;
ę } c h > ɛ̃;
ę } r z > ɛ̃;
ę } [:^Letter:] > ɛ;
ę > ɛ̃w̃;

chrz > xʂ;
trz > t͡ʂ;
drz > d͡ʐ;
prz > pʂ;
krz > kʂ;

[p t k c f s ś ć x] { r z > ʂ;

t͡ʂ { w > f;
ʂ { w > f;
[p t k c f s ś ć x] { w > f;
w } [p t k c f s ś ć x] > f;
w } [:^Letter:] > f;
w > v;

cz } [b d g z ź ż] > d͡ʐ;
sz } [b d g z ź ż] > ʐ;
ch } [b d g z ź ż] > ɣ;
p } [b d g z ź ż] > b;
t } [b d g z ź ż] > d;
k } [b d g z ź ż] > g;
c } [b d g ź ż] > d͡z;
ć } [b d g z ź ż] > d͡ʑ;
s } [b d g ź ż] > z;
ś } [b d g z ź ż] > ʑ;
f } [b d g z ź ż] > v;
x } [b d g z ź ż] > ɣ;
dz } [p t k c f s ś ć x] > t͡s;
dź } [p t k c f s ś ć x] > t͡ɕ;
dż } [p t k c f s ś ć x] > t͡ʂ;
rz } [p t k c f s ś ć x] > ʂ;
b } [p t k c f s ś ć x] > p;
d } [p t k c f s ś ć x] > t;
g } [p t k c f s ś ć x] > k;
z } [p t k c f s ś ć x] > s;
ź } [p t k c f s ś ć x] > ɕ;
ż } [p t k c f s ś ć x] > ʂ;

dź } [:^Letter:] > t͡ɕ;
dż } [:^Letter:] > t͡ʂ;
dz } [:^Letter:] > t͡s;
rz } [:^Letter:] > ʂ;

cz > t͡ʂ;
dź > d͡ʑ;
dż > d͡ʐ;
dz > d͡z;
sz > ʂ;
rz > ʐ;
ch > x;

b } [:^Letter:] > p;
d } [:^Letter:] > t;
g } [:^Letter:] > k;
z } [:^Letter:] > s;
ź } [:^Letter:] > ɕ;
ż } [:^Letter:] > ʂ;

a > a;
b > b;
c > t͡s;
ć > t͡ɕ;
d > d;
e > ɛ;
f > f;
g > g;
h > x;
i > i;
j > j;
k > k;
l > l;
ł > w;
m > m;
n } [k g] > ŋ;
n > n;
ń > ɲ;
o > ɔ;
ó > u;
p > p;
r > r;
s > s;
ś > ɕ;
t > t;
u > u;
x > ks;
y > ɨ;
z > z;
ź > ʑ;
ż > ʐ;
`;
