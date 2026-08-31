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
[aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] { f } [^[:L:][:M:]] > v;
f > f;

[aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] { ð } [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ð;
[aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] { ð } [bdðgɣjlmnrv] > ð;
[aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] { ð } [^[:L:][:M:]] > θ;
ð > ð;

k } j > c;
s { k } [eéiíyýæ{ei}{ey}] > c;
gg } j > cc;
gg > kk;
g } j > c;
[aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] { g } [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ɣ;
[aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] { g } [bdðgɣjlmnrv] > ɣ;
[aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] { g } [^[:L:][:M:]] > x;

g } [ieíyýæé] > c;
k } [ieíyýæé] > cʰ;

[^[:L:][:M:]] { p > pʰ;
[^[:L:][:M:]] { t > tʰ;
[^[:L:][:M:]] { k } [eéiíyýæ{ei}{ey}] > cʰ;
k } [eéiíyýæ{ei}{ey}] > c;
[^[:L:][:M:]] { k > kʰ;

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

æ } r [^[:L:][:M:]] > aiː;

[^[:L:][:M:]] { á } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > auː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { á } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > auː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { á } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > auː;
[^[:L:][:M:]] { á } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > auː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { á } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > auː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { á } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > auː;

[^[:L:][:M:]] { é } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > jɛː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { é } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > jɛː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { é } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > jɛː;
[^[:L:][:M:]] { é } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > jɛː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { é } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > jɛː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { é } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > jɛː;

[^[:L:][:M:]] { í } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > iː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { í } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > iː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { í } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > iː;
[^[:L:][:M:]] { í } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > iː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { í } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > iː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { í } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > iː;

[^[:L:][:M:]] { ó } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ouː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { ó } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ouː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { ó } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ouː;
[^[:L:][:M:]] { ó } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > ouː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { ó } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > ouː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { ó } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > ouː;

[^[:L:][:M:]] { ú } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > uː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { ú } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > uː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { ú } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > uː;
[^[:L:][:M:]] { ú } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > uː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { ú } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > uː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { ú } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > uː;

[^[:L:][:M:]] { ý } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > iː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { ý } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > iː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { ý } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > iː;
[^[:L:][:M:]] { ý } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > iː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { ý } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > iː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { ý } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > iː;

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

[^[:L:][:M:]] { i } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ɪː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { i } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ɪː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { i } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ɪː;
[^[:L:][:M:]] { i } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > ɪː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { i } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > ɪː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { i } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > ɪː;

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

[^[:L:][:M:]] { y } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ɪː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { y } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ɪː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { y } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > ɪː;
[^[:L:][:M:]] { y } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > ɪː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { y } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > ɪː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { y } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > ɪː;

[^[:L:][:M:]] { ö } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > œː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { ö } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > œː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { ö } [bcdfghjklmnpqrstvwxzþðʰ̥] [aáeéiíoóuúyýæö{au}{ei}{ey}ɔʏœː] > œː;
[^[:L:][:M:]] { ö } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > œː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] { ö } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > œː;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { ö } [bcdfghjklmnpqrstvwxzþðʰ̥] [^[:L:][:M:]] > œː;

au > œy;
ei > ei;
ey > ei;
æ > ai;
á > au;
é > jɛ;
v { í } k [^[:L:][:M:]] > iː;
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

sːɔːn } [^[:L:][:M:]] > sːɔn;
sɔːn } [^[:L:][:M:]] > sɔn;
`;
