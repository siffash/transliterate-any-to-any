export const isIpaRules = `
::Lower;
::NFC;

nn > nː;
ss > sː;

a } n [gk] > au;
e } n [gk] > ei;
[iy] } n [gk] > i;
o } n [gk] > ou;
u } n [gk] > u;
ö } n [gk] > œy;

pp > ʰp;
tt > ʰt;
kk > ʰk;
[aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] { pl > ʰpl;
[aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] { pn > ʰpn;
[aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] { pm > ʰpm;
[aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] { tl > ʰtl;
[aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] { tn > ʰtn;
[aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] { tm > ʰtm;
[aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] { kl > ʰkl;
[aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] { kn > ʰkn;
[aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] { km > ʰkm;

ll } [dts] > l;
ll > dl;
rl > rdl;
rn > rdn;

hnj > ɲ̊;
hl > l̥;
hn > n̥;
hr > r̥;
hm > m̥;
hj > ç;
hv > xʷ;
nj > ɲ;

f } [ln] > p;
[aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] { f } [já] > f;
[aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] { f } [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœːbdðgɣmrv] > v;
[aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] { f } [^[:L:][:M:]] > v;
f > f;

ð > ð;

k } j > c;
s { k } [eéiíyýæ{ei}{ey}] > c;
gg } j > ɡɡ;
gg > ɡɡ;
g } j > ɡ;
[aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] { g } [ií] > ɡ;
[aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] { g } [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœːbdðɣlmnrv] > ɣ;
[aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] { g } [^[:L:][:M:]] > ɣ;

g } [ieíyýæé] > ɡ;
k } [ieíyýæé] > cʰ;

[^[:L:][:M:]] { p > pʰ;
[^[:L:][:M:]] { t > tʰ;
[^[:L:][:M:]] { k } [eéiíyýæ{ei}{ey}] > cʰ;
k } [eéiíyýæ{ei}{ey}] > c;
[^[:L:][:M:]] { k > kʰ;

[ptk] { n > n̥;

l } [ptkc] > l̥;
r } [ptkc] > r̥;
m } [ptkc] > m̥;
n } [pt] > n̥;

ng } t > ŋ̊;
ng } [dls] > ŋ;
ng } [eéiíyýæ{ei}{ey}] > ŋc;
ng > ŋk;
nk } [eéiíyýæ{ei}{ey}] > ŋ̊c;
nk > ŋ̊k;

æ } r [^[:L:][:M:]] > ai;

[^[:L:][:M:]] { á } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > au;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { á } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > au;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { á } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > au;
[^[:L:][:M:]] { á } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > au;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { á } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > au;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { á } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > au;

[^[:L:][:M:]] { é } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > jɛː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { é } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > jɛː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { é } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > jɛː;
[^[:L:][:M:]] { é } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > jɛː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { é } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > jɛː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { é } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > jɛː;

[^[:L:][:M:]] { [íý] } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > iː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { [íý] } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > iː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { [íý] } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > iː;
[^[:L:][:M:]] { [íý] } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > iː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { [íý] } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > iː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { [íý] } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > iː;

[^[:L:][:M:]] { ó } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > oː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { ó } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > oː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { ó } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > oː;
[^[:L:][:M:]] { ó } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > oː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { ó } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > oː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { ó } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > oː;

[^[:L:][:M:]] { ú } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > uː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { ú } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > uː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { ú } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > uː;
[^[:L:][:M:]] { ú } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > uː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { ú } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > uː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { ú } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > uː;

[^[:L:][:M:]] { a } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > aː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { a } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > aː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { a } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > aː;
[^[:L:][:M:]] { a } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > aː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { a } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > aː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { a } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > aː;

[^[:L:][:M:]] { e } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ɛː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { e } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ɛː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { e } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ɛː;
[^[:L:][:M:]] { e } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > ɛː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { e } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > ɛː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { e } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > ɛː;

[^[:L:][:M:]] { [iy] } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ɪː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { [iy] } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ɪː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { [iy] } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ɪː;
[^[:L:][:M:]] { [iy] } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > ɪː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { [iy] } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > ɪː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { [iy] } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > ɪː;

[^[:L:][:M:]] { o } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ɔː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { o } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ɔː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { o } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ɔː;
[^[:L:][:M:]] { o } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > ɔː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { o } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > ɔː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { o } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > ɔː;

[^[:L:][:M:]] { u } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ʏː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { u } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ʏː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { u } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ʏː;
[^[:L:][:M:]] { u } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > ʏː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { u } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > ʏː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { u } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > ʏː;

[^[:L:][:M:]] { ö } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > œː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { ö } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > œː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { ö } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > œː;
[^[:L:][:M:]] { ö } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > œː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { ö } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > œː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { ö } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > œː;

au > œi;
e [iy] > ei;
æ > ai;
á > au;
é > jɛ;
v { í } k [^[:L:][:M:]] > iː;
[íý] > i;
ó > o;
ú > u;
g > ɡ;
a > a;
b > b;
c > c;
d > d;
e > ɛ;
[iy] > ɪ;
j > j;
o > ɔ;
q > k;
[sz] > s;
u > ʏ;
[vw] > v;
x > xs;
þ > θ;
ö > œ;

::Null;

sːɔːn } [^[:L:][:M:]] > sːɔn;
sɔːn } [^[:L:][:M:]] > sɔn;
`;
