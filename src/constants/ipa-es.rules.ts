export const ipaEsRules = `
::Null;


[͈̚ʔʕʰʱʲʷ'’ʼˈ̇ˌ̧ːˠˤ˥˧˩̝̟̥̩̪̯̃̊͡] > ;

::Null;

t [ʃɕʂ] > ch;
d [ʒʐʑžʝ] > y;

[aâăæɐɑɒeêęɛɘəɜẽiĩɪɨyoôõøœơɔɤɵuũʊʉɯưʌyʏ] { [r ʀ ɹ ʁ] } [aâăæɐɑɒeêęɛɘəɜẽiĩɪɨyoôõøœơɔɤɵuũʊʉɯưʌyʏ] > rr;
[aâăæɐɑɒeêęɛɘəɜẽiĩɪɨyoôõøœơɔɤɵuũʊʉɯưʌyʏ] { [i ɪ ɨ ĩ] } [:^Letter:] > y;

[:^Letter:] { w } [eêęɛɘəɜẽiĩɪɨyʏœ] > hu;
w > gu;

[ckq] } [eêęɛɘəɜẽiĩɪɨyʏœ] > qu;
[kq] > c;

[gɡɢɟɣɰ] } [eêęɛɘəɜẽiĩɪɨyʏœ] > gu;
[ɡɢɟɣɰ] > g;

θ } [eêęɛɘəɜẽiĩɪɨyʏœ] > c;
θ > z;

[čç] > ch;
[xχħɦɧh] > j;
[ðɖďɗ] > d;
[ɓβ] > b;
ɱ > m;
[ŋɳ] > n;
ɲ > ñ;
[ɫɭ] > l;
ʎ > ll;
[ʃɕʂ] > s;
[ʒʐʑžʝ] > y;
[ʈť] > t;
ʋ > v;
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
