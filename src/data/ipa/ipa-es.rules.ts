export const ipaEsRules = `
::Null;

[͈̚ʔʕʰʱʲʷ'’ʼˈ̇ˌ̧ːˠˤ˥˧˩̝̟̥̩̪̯̃̊͡] > ;

::Null;

d [ʒʑʐžʝ] > j;

::Null;

[^[:L:][:M:]] { w } [eêęɛɘəɜẽiĩɪɨyʏœ] > hu;
[aâăæɐɑɒeêęɛɘəɜẽiĩɪɨyoôõøœơɔɤɵuũʊʉɯưʌyʏ] { w > gu;
[^[:L:][:M:]] { w > gu;
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
t [ʃɕ] > ch;
[ʃɕʂ] > s;
[ʒʐʑžʝ] > y;
[ʈť] > t;
ɥ > u;
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

b { b+ > ;
c { c+ } [^eéií] > ;
d { d+ > ;
f { f+ > ;
g { g+ > ;
h { h+ > ;
j { j+ > ;
k { k+ > ;
m { m+ > ;
p { p+ > ;
q { q+ > ;
s { s+ > ;
t { t+ > ;
v { v+ > ;
w { w+ > ;
x { x+ > ;
z { z+ > ;

[^[:L:][:M:]] { rr > r;
rr } [^[:L:][:M:]] > r;
[bcdfghjklmnñpqstvwxz] { rr > r;
rr } [bcdfghjklmnñpqstvwxz] > r;

n } [bp] > m;
m } v > n;

q } [eéií] > qu;
q } ü [eéií] > c;
q } [uúü] [aáoóuú] > c;
q } [uúü] [bcdfghjklmnñpqrstvwxyz] > c;
q } [uúü] [^[:L:][:M:]] > c;
q } [aáAÁoóOÓ] > c;
q } [bcdfghjklmnñpqrstvwxyz] > c;
q } [^[:L:][:M:]] > c;

[bcdfghjklmnñpqrstvwxyz] { y } [^[:L:][:M:]] > i;
[bcdfghjklmnñpqrstvwxz] { y } [bcdfghjklmnñpqrstvwxz] > i;
[^[:L:][:M:]] { y } [bcdfghjklmnñpqrstvwxz] > i;
[aeo] { y } y > i;
`;
