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
ɓ > b;
[cq] > k;
[çɕʃʂɧ] > š;
[ďɖɗð] > d;
ɟ > dj;
[ɡɢɣɰ] > g;
[ħɦʕχx] > h;
[ʝʲɥ] > j;
ʎ > lj;
[ɫɭ] > l;
ɱ > m;
ɲ > nj;
[ɳŋ] > n;
[ɹɽɾʀʁ] > r;
ʈ͡ʂ > č;
ʈʂ > č;
d͡ʐ > dž;
dʐ > dž;
[θťʈ] > t;
[ʋwβ] > v;
ɸ > f;
[yɨɪʏ] > i;
[ʐʑʒ] > ž;
[âăɐɑʌ] > a;
[æêœɘəɛɜ] > e;
ę > en;
[ôøơɒɔɵɤ] > o;
[ưʉʊɯ] > u;
ɚ > er;
ɝ > er;
ẽ > en;
ĩ > in;
õ > on;
ũ > un;
̃ > n;
[͈̚ʰʱʷ'’ʼˈ̇ˌ̧ːˠˤ˥˧˩̝̟̥̩̪̯̊͡ʔ] > ;

::Null;

[:^Letter:] { i } [aeou] > j;
[aeou] { i > j;

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
