export const isIpaRules = `
::Lower;

á { nn > tn;
é { nn > tn;
í { nn > tn;
ó { nn > tn;
ú { nn > tn;
ý { nn > tn;
æ { nn > tn;
au { nn > tn;
ei { nn > tn;
ey { nn > tn;
nn > nː;
ss > sː;

a } ng > au;
a } nk > au;
e } ng > ei;
e } nk > ei;
i } ng > i;
i } nk > i;
o } ng > ou;
o } nk > ou;
u } ng > u;
u } nk > u;
y } ng > i;
y } nk > i;
ö } ng > œy;
ö } nk > œy;

augi > œyijɪ;
eygi > eijɪ;
eigi > eijɪ;
agi > aijɪ;
egi > eijɪ;
igi > ijɪ;
ogi > ɔijɪ;
ugi > ujɪ;
ygi > ʏijɪ;
ægi > aijɪ;
ögi > œyjɪ;

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

ll > tl;
rl > rtl;
rn > rtn;

hnj > ɲ̊;
hl > l̥;
hn > n̥;
hr > r̥;
hm > m̥;
hj > ç;
hv > xʷ;
nj > ɲ;

f } l > p;
f } n > p;
[aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] { f } [já] > f;
[aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] { f } [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > v;
[aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] { f } [bdðgɣjlmnrv] > v;
[aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] { f } [:^Letter:] > v;
f > f;

[aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] { ð } [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ð;
[aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] { ð } [bdðgɣjlmnrv] > ð;
[aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] { ð } [:^Letter:] > θ;
ð > ð;

k } j > c;
s { k } [eéiíyýæ{ei}{ey}] > c;
gg } j > cc;
gg > kk;
g } j > c;
[aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] { g } [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ɣ;
[aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] { g } [bdðgɣjlmnrv] > ɣ;
[aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] { g } [:^Letter:] > x;

g } [ieíyýæé] > c;
k } [ieíyýæé] > cʰ;

[:^Letter:] { p > pʰ;
[:^Letter:] { t > tʰ;
[:^Letter:] { k } [eéiíyýæ{ei}{ey}] > cʰ;
k } [eéiíyýæ{ei}{ey}] > c;
[:^Letter:] { k > kʰ;

p { n > n̥;
t { n > n̥;
k { n > n̥;

l { [ptkc] > l̥;
r { [ptkc] > r̥;
m { [ptkc] > m̥;
n { [ptkc] > n̥;
ŋ { [ptkc] > ŋ̊;

ng } [eéiíyýæ{ei}{ey}] > ŋc;
ng > ŋk;
nk } [eéiíyýæ{ei}{ey}] > ŋ̊c;
nk > ŋ̊k;

æ } r [:^Letter:] > aiː;

[:^Letter:] { á } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > auː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { á } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > auː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { á } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > auː;
[:^Letter:] { á } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > auː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { á } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > auː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { á } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > auː;

[:^Letter:] { é } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > jɛː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { é } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > jɛː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { é } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > jɛː;
[:^Letter:] { é } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > jɛː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { é } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > jɛː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { é } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > jɛː;

[:^Letter:] { í } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > iː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { í } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > iː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { í } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > iː;
[:^Letter:] { í } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > iː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { í } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > iː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { í } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > iː;

[:^Letter:] { ó } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ouː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { ó } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ouː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { ó } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ouː;
[:^Letter:] { ó } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > ouː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { ó } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > ouː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { ó } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > ouː;

[:^Letter:] { ú } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > uː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { ú } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > uː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { ú } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > uː;
[:^Letter:] { ú } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > uː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { ú } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > uː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { ú } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > uː;

[:^Letter:] { ý } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > iː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { ý } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > iː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { ý } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > iː;
[:^Letter:] { ý } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > iː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { ý } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > iː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { ý } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > iː;

[:^Letter:] { a } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > aː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { a } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > aː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { a } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > aː;
[:^Letter:] { a } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > aː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { a } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > aː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { a } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > aː;

[:^Letter:] { e } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ɛː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { e } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ɛː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { e } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ɛː;
[:^Letter:] { e } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > ɛː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { e } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > ɛː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { e } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > ɛː;

[:^Letter:] { i } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ɪː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { i } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ɪː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { i } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ɪː;
[:^Letter:] { i } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > ɪː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { i } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > ɪː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { i } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > ɪː;

[:^Letter:] { o } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ɔː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { o } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ɔː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { o } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ɔː;
[:^Letter:] { o } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > ɔː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { o } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > ɔː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { o } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > ɔː;

[:^Letter:] { u } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ʏː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { u } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ʏː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { u } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ʏː;
[:^Letter:] { u } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > ʏː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { u } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > ʏː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { u } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > ʏː;

[:^Letter:] { y } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ɪː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { y } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ɪː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { y } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ɪː;
[:^Letter:] { y } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > ɪː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { y } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > ɪː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { y } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > ɪː;

[:^Letter:] { ö } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > œː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { ö } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > œː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { ö } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > œː;
[:^Letter:] { ö } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > œː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { ö } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > œː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { ö } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > œː;

au > œy;
ei > ei;
ey > ei;
æ > ai;
á > au;
é > jɛ;
v { í } k [:^Letter:] > iː;
í > i;
ó > ou;
ú > u;
ý > i;
g > k;
a > a;
b > p;
c > c;
d > t;
e > ɛ;
i > ɪ;
j > j;
o > ɔ;
q > k;
s > s;
u > ʏ;
v > v;
w > v;
x > xs;
y > ɪ;
z > s;
þ > θ;
ö > œ;

::Null;

sːɔːn } [:^Letter:] > sːɔn;
sɔːn } [:^Letter:] > sɔn;
`;
