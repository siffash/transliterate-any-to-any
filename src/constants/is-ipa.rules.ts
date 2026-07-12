export const isIpaRules = `
::Lower;

á { n n } > t n;
é { n n } > t n;
í { n n } > t n;
ó { n n } > t n;
ú { n n } > t n;
ý { n n } > t n;
æ { n n } > t n;
au { n n } > t n;
ei { n n } > t n;
ey { n n } > t n;
n n > nː;
s s > sː;

{ a } n g > au;
{ a } n k  > au;
{ e } n g > ei;
{ e } n k > ei;
{ i } n g > i;
{ i } n k > i;
{ o } n g > ou;
{ o } n k > ou;
{ u } n g > u;
{ u } n k > u;
{ y } n g > i;
{ y } n k > i;
{ ö } n g > œy;
{ ö } n k > œy;

{ au g i } > œyij ɪ;
{ ey g i } > eij ɪ;
{ ei g i } > eij ɪ;
{ a g i } > aij ɪ;
{ e g i } > eij ɪ;
{ i g i } > ij ɪ;
{ o g i } > ɔij ɪ;
{ u g i } > uj ɪ;
{ y g i } > ʏij ɪ;
{ æ g i } > aij ɪ;
{ ö g i } > œyj ɪ;

p p > ʰp;
t t > ʰt;
k k > ʰk;
[a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] { p l } > ʰp l;
[a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] { p n } > ʰp n;
[a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] { p m } > ʰp m;
[a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] { t l } > ʰt l;
[a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] { t n } > ʰt n;
[a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] { t m } > ʰt m;
[a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] { k l } > ʰk l;
[a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] { k n } > ʰk n;
[a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] { k m } > ʰk m;

l l > t l;
r l > r t l;
r n > r t n;

h n j > ɲ̊;
h l > l̥;
h n > n̥;
h r > r̥;
h m > m̥;
h j > ç;
h v > xʷ;
n j > ɲ;

{ f } l > p;
{ f } n > p;
[a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] { f } [j á] > f;
[a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] { f } [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > v;
[a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] { f } [bdðgɣjlmnrv] > v;
[a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] { f } [:^Letter:] > v;
f > f;

[a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] { ð } [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > ð;
[a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] { ð } [bdðgɣjlmnrv] > ð;
[a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] { ð } [:^Letter:] > θ;
ð > ð;

{ k } j > c;
s { k } [e é i í y ý æ {ei} {ey}] > c;
{ g g } j > cc;
g g > kk;
{ g } j > c;
[a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] { g } [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > ɣ;
[a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] { g } [bdðgɣjlmnrv] > ɣ;
[a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] { g } [:^Letter:] > x;

{ g } [ieíyýæé] > c;
{ k } [ieíyýæé] > cʰ;

[:^Letter:] { p } > pʰ;
[:^Letter:] { t } > tʰ;
[:^Letter:] { k } [e é i í y ý æ {ei} {ey}] > cʰ;
{ k } [e é i í y ý æ {ei} {ey}] > c;
[:^Letter:] { k } > kʰ;

p { n } > n̥;
t { n } > n̥;
k { n } > n̥;

l { [ptkc] } > l̥;
r { [ptkc] } > r̥;
m { [ptkc] } > m̥;
n { [ptkc] } > n̥;
ŋ { [ptkc] } > ŋ̊;

{ n g } [e é i í y ý æ {ei} {ey}] > ŋ c;
{ n g } > ŋ k;
{ n k } [e é i í y ý æ {ei} {ey}] > ŋ̊ c;
{ n k } > ŋ̊ k;

{ æ } r [:^Letter:] > aiː;

[:^Letter:] { á } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > auː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { á } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > auː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { á } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > auː;
[:^Letter:] { á } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > auː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { á } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > auː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { á } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > auː;

[:^Letter:] { é } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > jɛː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { é } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > jɛː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { é } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > jɛː;
[:^Letter:] { é } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > jɛː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { é } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > jɛː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { é } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > jɛː;

[:^Letter:] { í } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > iː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { í } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > iː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { í } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > iː;
[:^Letter:] { í } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > iː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { í } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > iː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { í } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > iː;

[:^Letter:] { ó } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > ouː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { ó } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > ouː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { ó } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > ouː;
[:^Letter:] { ó } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > ouː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { ó } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > ouː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { ó } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > ouː;

[:^Letter:] { ú } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > uː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { ú } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > uː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { ú } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > uː;
[:^Letter:] { ú } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > uː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { ú } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > uː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { ú } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > uː;

[:^Letter:] { ý } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > iː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { ý } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > iː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { ý } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > iː;
[:^Letter:] { ý } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > iː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { ý } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > iː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { ý } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > iː;

[:^Letter:] { a } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > aː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { a } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > aː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { a } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > aː;
[:^Letter:] { a } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > aː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { a } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > aː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { a } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > aː;

[:^Letter:] { e } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > ɛː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { e } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > ɛː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { e } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > ɛː;
[:^Letter:] { e } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > ɛː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { e } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > ɛː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { e } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > ɛː;

[:^Letter:] { i } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > ɪː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { i } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > ɪː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { i } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > ɪː;
[:^Letter:] { i } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > ɪː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { i } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > ɪː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { i } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > ɪː;

[:^Letter:] { o } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > ɔː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { o } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > ɔː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { o } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > ɔː;
[:^Letter:] { o } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > ɔː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { o } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > ɔː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { o } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > ɔː;

[:^Letter:] { u } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > ʏː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { u } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > ʏː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { u } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > ʏː;
[:^Letter:] { u } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > ʏː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { u } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > ʏː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { u } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > ʏː;

[:^Letter:] { y } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > ɪː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { y } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > ɪː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { y } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > ɪː;
[:^Letter:] { y } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > ɪː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { y } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > ɪː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { y } [bcdfghjklmnpqrstvwxzþðʰ̥] [:^Letter:] > ɪː;

[:^Letter:] { ö } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > œː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] { ö } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > œː;
[:^Letter:] [bcdfghjklmnpqrstvwxzþðʰ̥] [bcdfghjklmnpqrstvwxzþðʰ̥] { ö } [bcdfghjklmnpqrstvwxzþðʰ̥] [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː] > œː;
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
