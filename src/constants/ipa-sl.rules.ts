export const ipaSlRules = `
::Null;

t͡s > c;
ts > c;
t͡ʃ > č;
tʃ > č;
t͡ɕ > č;
tɕ > č;
d͡ʒ > dž;
dʒ > dž;
d͡ʑ > dž;
dʑ > dž;
[ɓ β] > b;
[c q] > k;
[ç ɕ ʃ ʂ ɧ] > š;
[ď ɖ ɗ ð] > d;
ɟ > dj;
[ɡ ɢ ɣ ɰ] > g;
[ħ ɦ ʕ χ x] > h;
[ʝ ʲ ɥ] > j;
ʎ > lj;
[ɫ ɭ] > l;
ɱ > m;
ɲ > nj;
[ɳ ŋ] > n;
[ɹ ɽ ɾ ʀ ʁ] > r;
[θ ť ʈ] > t;
[ʋ w] > v;
ɸ > f;
[y ɨ ɪ ʏ] > i;
[ʐ ʑ ʒ] > ž;
[â ă ɐ ɑ ʌ] > a;
[æ ê œ ɘ ə ɛ ɜ] > e;
ę > en;
[ô ø ơ ɒ ɔ ɵ ɤ] > o;
[ư ʉ ʊ ɯ] > u;
ɚ > er;
ɝ > er;
ẽ > en;
ĩ > in;
õ > on;
ũ > un;
̃ > n;
[͈̚ʰ ʱ ʷ '’ʼ ˈ ̇ ˌ ̧ ː ˠ ˤ ˥ ˧ ˩ ̝ ̟ ̥ ̩ ̪ ̯ ̊ ͡ ʔ] > ;

::Null;

[:^Letter:] { i } [aeou] > j;

::Null;

ia > ija;
ie > ije;
io > ijo;
iu > iju;

::Null;

[čšžc] { j > ;

::Null;

b { b > ;
c { c > ;
č { č > ;
d { d > ;
f { f > ;
g { g > ;
h { h > ;
j { j > ;
k { k > ;
l { l > ;
m { m > ;
n { n > ;
p { p > ;
r { r > ;
s { s > ;
š { š > ;
t { t > ;
v { v > ;
z { z > ;
ž { ž > ;
`;
