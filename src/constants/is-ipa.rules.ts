export const isIpaRules = `
::Lower;

$V = [a á e é i í o ó u ú y ý æ ö {au} {ei} {ey} ɔ ʏ œ ː];
$front = [e é i í y ý æ {ei} {ey}];
$voicedC = [b d ð g ɣ j l m n r v];
$singleC = [b c d f g h j k l m n p q r s t v w x z þ ð ʰ ̥];
$stop = [p t k c];
$longtrigger = [p t k s];
$longtrigger_follow = [v j r];

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
$V { p l } > ʰp l;
$V { p n } > ʰp n;
$V { p m } > ʰp m;
$V { t l } > ʰt l;
$V { t n } > ʰt n;
$V { t m } > ʰt m;
$V { k l } > ʰk l;
$V { k n } > ʰk n;
$V { k m } > ʰk m;

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
$V { f } [j á] > f;
$V { f } $V > v;
$V { f } $voicedC > v;
$V { f } [:^Letter:] > v;
f > f;

$V { ð } $V > ð;
$V { ð } $voicedC > ð;
$V { ð } [:^Letter:] > θ;
ð > ð;

{ k } j > c;
s { k } $front > c;
{ g g } j > cc;
g g > kk;
{ g } j > c;
$V { g } $V > ɣ;
$V { g } $voicedC > ɣ;
$V { g } [:^Letter:] > x;

{ g } [ieíyýæé] > c;
{ k } [ieíyýæé] > cʰ;

[:^Letter:] { p } > pʰ;
[:^Letter:] { t } > tʰ;
[:^Letter:] { k } $front > cʰ;
{ k } $front > c;
[:^Letter:] { k } > kʰ;

p { n } > n̥;
t { n } > n̥;
k { n } > n̥;

l { $stop } > l̥;
r { $stop } > r̥;
m { $stop } > m̥;
n { $stop } > n̥;
ŋ { $stop } > ŋ̊;

{ n g } $front > ŋ c;
{ n g } > ŋ k;
{ n k } $front > ŋ̊ c;
{ n k } > ŋ̊ k;

{ æ } r [:^Letter:] > aiː;

[:^Letter:] { á } $singleC $V > auː;
[:^Letter:] $singleC { á } $singleC $V > auː;
[:^Letter:] $singleC $singleC { á } $singleC $V > auː;
[:^Letter:] { á } $singleC [:^Letter:] > auː;
[:^Letter:] $singleC { á } $singleC [:^Letter:] > auː;
[:^Letter:] $singleC $singleC { á } $singleC [:^Letter:] > auː;

[:^Letter:] { é } $singleC $V > jɛː;
[:^Letter:] $singleC { é } $singleC $V > jɛː;
[:^Letter:] $singleC $singleC { é } $singleC $V > jɛː;
[:^Letter:] { é } $singleC [:^Letter:] > jɛː;
[:^Letter:] $singleC { é } $singleC [:^Letter:] > jɛː;
[:^Letter:] $singleC $singleC { é } $singleC [:^Letter:] > jɛː;

[:^Letter:] { í } $singleC $V > iː;
[:^Letter:] $singleC { í } $singleC $V > iː;
[:^Letter:] $singleC $singleC { í } $singleC $V > iː;
[:^Letter:] { í } $singleC [:^Letter:] > iː;
[:^Letter:] $singleC { í } $singleC [:^Letter:] > iː;
[:^Letter:] $singleC $singleC { í } $singleC [:^Letter:] > iː;

[:^Letter:] { ó } $singleC $V > ouː;
[:^Letter:] $singleC { ó } $singleC $V > ouː;
[:^Letter:] $singleC $singleC { ó } $singleC $V > ouː;
[:^Letter:] { ó } $singleC [:^Letter:] > ouː;
[:^Letter:] $singleC { ó } $singleC [:^Letter:] > ouː;
[:^Letter:] $singleC $singleC { ó } $singleC [:^Letter:] > ouː;

[:^Letter:] { ú } $singleC $V > uː;
[:^Letter:] $singleC { ú } $singleC $V > uː;
[:^Letter:] $singleC $singleC { ú } $singleC $V > uː;
[:^Letter:] { ú } $singleC [:^Letter:] > uː;
[:^Letter:] $singleC { ú } $singleC [:^Letter:] > uː;
[:^Letter:] $singleC $singleC { ú } $singleC [:^Letter:] > uː;

[:^Letter:] { ý } $singleC $V > iː;
[:^Letter:] $singleC { ý } $singleC $V > iː;
[:^Letter:] $singleC $singleC { ý } $singleC $V > iː;
[:^Letter:] { ý } $singleC [:^Letter:] > iː;
[:^Letter:] $singleC { ý } $singleC [:^Letter:] > iː;
[:^Letter:] $singleC $singleC { ý } $singleC [:^Letter:] > iː;

[:^Letter:] { a } $singleC $V > aː;
[:^Letter:] $singleC { a } $singleC $V > aː;
[:^Letter:] $singleC $singleC { a } $singleC $V > aː;
[:^Letter:] { a } $singleC [:^Letter:] > aː;
[:^Letter:] $singleC { a } $singleC [:^Letter:] > aː;
[:^Letter:] $singleC $singleC { a } $singleC [:^Letter:] > aː;

[:^Letter:] { e } $singleC $V > ɛː;
[:^Letter:] $singleC { e } $singleC $V > ɛː;
[:^Letter:] $singleC $singleC { e } $singleC $V > ɛː;
[:^Letter:] { e } $singleC [:^Letter:] > ɛː;
[:^Letter:] $singleC { e } $singleC [:^Letter:] > ɛː;
[:^Letter:] $singleC $singleC { e } $singleC [:^Letter:] > ɛː;

[:^Letter:] { i } $singleC $V > ɪː;
[:^Letter:] $singleC { i } $singleC $V > ɪː;
[:^Letter:] $singleC $singleC { i } $singleC $V > ɪː;
[:^Letter:] { i } $singleC [:^Letter:] > ɪː;
[:^Letter:] $singleC { i } $singleC [:^Letter:] > ɪː;
[:^Letter:] $singleC $singleC { i } $singleC [:^Letter:] > ɪː;

[:^Letter:] { o } $singleC $V > ɔː;
[:^Letter:] $singleC { o } $singleC $V > ɔː;
[:^Letter:] $singleC $singleC { o } $singleC $V > ɔː;
[:^Letter:] { o } $singleC [:^Letter:] > ɔː;
[:^Letter:] $singleC { o } $singleC [:^Letter:] > ɔː;
[:^Letter:] $singleC $singleC { o } $singleC [:^Letter:] > ɔː;

[:^Letter:] { u } $singleC $V > ʏː;
[:^Letter:] $singleC { u } $singleC $V > ʏː;
[:^Letter:] $singleC $singleC { u } $singleC $V > ʏː;
[:^Letter:] { u } $singleC [:^Letter:] > ʏː;
[:^Letter:] $singleC { u } $singleC [:^Letter:] > ʏː;
[:^Letter:] $singleC $singleC { u } $singleC [:^Letter:] > ʏː;

[:^Letter:] { y } $singleC $V > ɪː;
[:^Letter:] $singleC { y } $singleC $V > ɪː;
[:^Letter:] $singleC $singleC { y } $singleC $V > ɪː;
[:^Letter:] { y } $singleC [:^Letter:] > ɪː;
[:^Letter:] $singleC { y } $singleC [:^Letter:] > ɪː;
[:^Letter:] $singleC $singleC { y } $singleC [:^Letter:] > ɪː;

[:^Letter:] { ö } $singleC $V > œː;
[:^Letter:] $singleC { ö } $singleC $V > œː;
[:^Letter:] $singleC $singleC { ö } $singleC $V > œː;
[:^Letter:] { ö } $singleC [:^Letter:] > œː;
[:^Letter:] $singleC { ö } $singleC [:^Letter:] > œː;
[:^Letter:] $singleC $singleC { ö } $singleC [:^Letter:] > œː;

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
