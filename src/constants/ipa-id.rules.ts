export const ipaIdRules = `
::Null;

ŋ > ng;
ɲ > ny;
ʃ > sy;
ʂ > sy;
[χx] > kh;
[:^Letter:] { [ʕʔ] > ;
[ʕʔ] } [:^Letter:] > k;
[ʕʔqʼ] > k;
[jʲ] > y;
[çɕθ] > s;
č > c;
[ťʈ] > t;
[ɓβ] > b;
[ɖɗďð] > d;
[ɟʒʝ] > j;
[ɡɢɣɰ] > g;
[ɥʷ] > w;
[ɦɧħʰʱ] > h;
[ɫɭʎ] > l;
ɱ > m;
ɳ > n;
[ɹɽɾʀʁ] > r;
ʋ > v;
[ʐʑž] > z;
[âæăɐɑɒʌ] > a;
[êøęœɘəɚɛɜɝẽ] > e;
[ĩɨɪʏy] > i;
[ôõơɔɵɤ] > o;
[ũưɯʉʊ] > u;
ɸ > f;

[͈̚ˈ̇ˌ̧ːˠˤ˥˧˩̝̟̥̩̪̯̃̊͡] > ;

::Null;

sh > sy;
ch > c;
ph > f;
th > t;
zh > z;

::Null;

b { b > ;
c { c > ;
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
q { q > ;
r { r > ;
s { s > ;
t { t > ;
v { v > ;
w { w > ;
x { x > ;
y { y > ;
z { z > ;

sy { sy > ;
kh { kh > ;
ny { ny > ;
`;
