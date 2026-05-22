export const isIpaRules = `
::Lower;

$V = [a á e é i í o ó u ú y ý æ ö au ei ey ɔ ʏ œ ː];
$front = [e é i í y ý æ ei ey];
$voicedC = [b d ð g ɣ j l m n r v];
$singleC = [b c d f g h j k l m n p q r s t v w x z þ ð ʰ ̥];
$stop = [p t k c];
$longtrigger = [p t k s];
$longtrigger_follow = [v j r];
$boundary = [:^Letter:];

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
$V { f } $boundary > v;
$V { f } $ > v;
f > f;

$V { ð } $V > ð;
$V { ð } $voicedC > ð;
$V { ð } $boundary > θ;
$V { ð } $ > θ;
ð > ð;

{ k } j > c;
s { k } $front > c;
{ g g } j > cc;
g g > kk;
{ g } j > c;
$V { g } $V > ɣ;
$V { g } $voicedC > ɣ;
$V { g } $boundary > x;
$V { g } $ > x;

{ g } [ieíyýæé] > c;
{ k } [ieíyýæé] > cʰ;

$boundary { p } > pʰ;
$boundary { t } > tʰ;
$boundary { k } $front > cʰ;
{ k } $front > c;
$boundary { k } > kʰ;

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

{ æ } r $boundary > aiː;
{ æ } r$ > aiː;

$boundary { á } $singleC $V > auː;
$boundary $singleC { á } $singleC $V > auː;
$boundary $singleC $singleC { á } $singleC $V > auː;
$boundary { á } $singleC $boundary > auː;
$boundary $singleC { á } $singleC $boundary > auː;
$boundary $singleC $singleC { á } $singleC $boundary > auː;

$boundary { é } $singleC $V > jɛː;
$boundary $singleC { é } $singleC $V > jɛː;
$boundary $singleC $singleC { é } $singleC $V > jɛː;
$boundary { é } $singleC $boundary > jɛː;
$boundary $singleC { é } $singleC $boundary > jɛː;
$boundary $singleC $singleC { é } $singleC $boundary > jɛː;

$boundary { í } $singleC $V > iː;
$boundary $singleC { í } $singleC $V > iː;
$boundary $singleC $singleC { í } $singleC $V > iː;
$boundary { í } $singleC $boundary > iː;
$boundary $singleC { í } $singleC $boundary > iː;
$boundary $singleC $singleC { í } $singleC $boundary > iː;

$boundary { ó } $singleC $V > ouː;
$boundary $singleC { ó } $singleC $V > ouː;
$boundary $singleC $singleC { ó } $singleC $V > ouː;
$boundary { ó } $singleC $boundary > ouː;
$boundary $singleC { ó } $singleC $boundary > ouː;
$boundary $singleC $singleC { ó } $singleC $boundary > ouː;

$boundary { ú } $singleC $V > uː;
$boundary $singleC { ú } $singleC $V > uː;
$boundary $singleC $singleC { ú } $singleC $V > uː;
$boundary { ú } $singleC $boundary > uː;
$boundary $singleC { ú } $singleC $boundary > uː;
$boundary $singleC $singleC { ú } $singleC $boundary > uː;

$boundary { ý } $singleC $V > iː;
$boundary $singleC { ý } $singleC $V > iː;
$boundary $singleC $singleC { ý } $singleC $V > iː;
$boundary { ý } $singleC $boundary > iː;
$boundary $singleC { ý } $singleC $boundary > iː;
$boundary $singleC $singleC { ý } $singleC $boundary > iː;

$boundary { a } $singleC $V > aː;
$boundary $singleC { a } $singleC $V > aː;
$boundary $singleC $singleC { a } $singleC $V > aː;
$boundary { a } $singleC $boundary > aː;
$boundary $singleC { a } $singleC $boundary > aː;
$boundary $singleC $singleC { a } $singleC $boundary > aː;

$boundary { e } $singleC $V > ɛː;
$boundary $singleC { e } $singleC $V > ɛː;
$boundary $singleC $singleC { e } $singleC $V > ɛː;
$boundary { e } $singleC $boundary > ɛː;
$boundary $singleC { e } $singleC $boundary > ɛː;
$boundary $singleC $singleC { e } $singleC $boundary > ɛː;

$boundary { i } $singleC $V > ɪː;
$boundary $singleC { i } $singleC $V > ɪː;
$boundary $singleC $singleC { i } $singleC $V > ɪː;
$boundary { i } $singleC $boundary > ɪː;
$boundary $singleC { i } $singleC $boundary > ɪː;
$boundary $singleC $singleC { i } $singleC $boundary > ɪː;

$boundary { o } $singleC $V > ɔː;
$boundary $singleC { o } $singleC $V > ɔː;
$boundary $singleC $singleC { o } $singleC $V > ɔː;
$boundary { o } $singleC $boundary > ɔː;
$boundary $singleC { o } $singleC $boundary > ɔː;
$boundary $singleC $singleC { o } $singleC $boundary > ɔː;

$boundary { u } $singleC $V > ʏː;
$boundary $singleC { u } $singleC $V > ʏː;
$boundary $singleC $singleC { u } $singleC $V > ʏː;
$boundary { u } $singleC $boundary > ʏː;
$boundary $singleC { u } $singleC $boundary > ʏː;
$boundary $singleC $singleC { u } $singleC $boundary > ʏː;

$boundary { y } $singleC $V > ɪː;
$boundary $singleC { y } $singleC $V > ɪː;
$boundary $singleC $singleC { y } $singleC $V > ɪː;
$boundary { y } $singleC $boundary > ɪː;
$boundary $singleC { y } $singleC $boundary > ɪː;
$boundary $singleC $singleC { y } $singleC $boundary > ɪː;

$boundary { ö } $singleC $V > œː;
$boundary $singleC { ö } $singleC $V > œː;
$boundary $singleC $singleC { ö } $singleC $V > œː;
$boundary { ö } $singleC $boundary > œː;
$boundary $singleC { ö } $singleC $boundary > œː;
$boundary $singleC $singleC { ö } $singleC $boundary > œː;

au > œy;
ei > ei;
ey > ei;
æ > ai;
á > au;
é > jɛ;
v { í } k $boundary > iː;
v { í } k $ > iː;
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
sːɔːn $boundary > sːɔn;
sːɔːn $ > sːɔn;
sɔːn $boundary > sɔn;
sɔːn $ > sɔn;
`;
