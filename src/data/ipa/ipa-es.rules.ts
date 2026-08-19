export const ipaEsRules = `
::Null;

[͈̚ʔʕʰʱʲʷ'’ʼˈ̇ˌ̧ːˠˤ˥˧˩̝̟̥̩̪̯̃̊͡] > ;

::Null;

d [ʒʑ] > i;
d [ʐžʝ] > y;

[aâăæɐɑɒeêęɛɘəɜẽiĩɪɨyoôõøœơɔɤɵuũʊʉɯưʌyʏ] { [rʀɹʁ] } [aâăæɐɑɒeêęɛɘəɜẽiĩɪɨyoôõøœơɔɤɵuũʊʉɯưʌyʏ] > rr;

::Null;

[:^Letter:] { w } [eêęɛɘəɜẽiĩɪɨyʏœ] > hu;
[aâăæɐɑɒeêęɛɘəɜẽiĩɪɨyoôõøœơɔɤɵuũʊʉɯưʌyʏ] { w > gu;
[:^Letter:] { w > gu;
w > u;

[ckq] } [eêęɛɘəɜẽiĩɪɨyʏœ] > qu;
[kq] > c;

[gɡɢɟɣɰ] } [eêęɛɘəɜẽiĩɪɨyʏœ] > gu;
[ɡɢɟɣɰ] > g;

θ } [eêęɛɘəɜẽiĩɪɨyʏœ] > c;
θ > z;

[čç] > ch;
[xχħɦɧh] > j;
[ðɖďɗ] > d;
ɓ > b;
[βʋ] > v;
ɱ > m;
[ŋɳ] > n;
ɲ > ñ;
[ɫɭ] > l;
ʎ > ll;
t [ʃɕ] > cj;
[ʃɕʂ] > s;
[ʒʐʑžʝ] > y;
[ʈť] > t;
ɥ > hu;
j > y;
ɸ > f;

[ʀɹʁɾɽ] > r;

[âæăɐɑɒʌ] > a;
[êęɛɘəɜẽœ] > e;
[ɚɝ] > er;
[ĩɪɨyʏ] > i;
[ôõøơɔɤɵ] > o;
[ũʊʉɯư] > u;

::Null;

b { b > ;
c { c } [aáoóuúübcdfghjklmnñpqrstvwxyz] > ;
c { c } [:^Letter:] > ;
d { d > ;
f { f > ;
g { g > ;
h { h > ;
j { j > ;
k { k > ;
m { m > ;
p { p > ;
q { q > ;
s { s > ;
t { t > ;
v { v > ;
w { w > ;
x { x > ;
z { z > ;

::Null;

n } [bp] > m;
m } v > n;

q } [eéií] > qu;
q } ü [eéií] > c;
q } [uúü] [aáoóuú] > c;
q } [uúü] [bcdfghjklmnñpqrstvwxyz] > c;
q } [uúü] [:^Letter:] > c;
q } [aáAÁoóOÓ] > c;
q } [bcdfghjklmnñpqrstvwxyz] > c;
q } [:^Letter:] > c;

[bcdfghjklmnñpqrstvwxyz] { y } [:^Letter:] > i;
`;
