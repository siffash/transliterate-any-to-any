export const ipaHrRules = `
::Null;

c > ć;
t͡ʃ > č;
d͡ʒ > dž;
t͡s > c;
d͡z > dz;
ʈʂ > č;
ɖʐ > dž;
tʃ > č;
dʒ > dž;
tɕ > ć;
dʑ > đ;
ts > c;
dz > dz;

[:^Letter:] { ʲ > ;
ʲ } [:^Letter:] > ;
ʲ > j;

[͈̚ʔʕʰʱʷ'’ʼˈ̇ˌ̧ːˠˤ˥˧˩̝̟̥̩̪̯̃̊͡] > ;

::Null;

[âæăɐɑʌ] > a;
ə } [:^Letter:] > a;
[êęẽɛɜɘəœøɵ] > e;
[ĩɨɪʏ] > i;
[ôõơɒɔɤ] > o;
[ũưʉʊɯ] > u;
[ɚɝ] > er;

ɓ > b;
ť > ć;
[ďɖɗð] > d;
ɟ > đ;
[ɡɢɣɰ] > g;
[ħɦχxç] > h;
[ɥʝy] > j;
q > k;
[ɫɭ] > l;
ʎ > lj;
ɱ > m;
ŋ } [kq] > n;
ŋ > ng;
ɳ > n;
ɲ > nj;
[ɹɽɾʀʁ] > r;
[ʂʃɕɧ] > š;
[ʈθ] > t;
[ʋwβ] > v;
[ʐʑʒ] > ž;
ɸ > f;

::Null;

[aeo] { i > j;
i { a > ja;
i { e > je;
i { u > ju;

::Null;

b { b > ;
c { c > ;
č { č > ;
ć { ć > ;
d { d > ;
đ { đ > ;
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
dž { dž > ;

::Null;

i { j } o > ;

::Null;

[čćđšž] { j > ;
dž { j > ;
`;
