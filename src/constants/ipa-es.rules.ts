export const ipaEsRules = `
::Null;

$vowel_ipa = [a â ă æ ɐ ɑ ɒ e ê ę ɛ ɘ ə ɜ ẽ i ĩ ɪ ɨ y o ô õ ø œ ơ ɔ ɤ ɵ u ũ ʊ ʉ ɯ ư ʌ y ʏ];
$front_ipa = [e ê ę ɛ ɘ ə ɜ ẽ i ĩ ɪ ɨ y ʏ œ];

[͈̚ ʔ ʕ ʰ ʱ ʲ ʷ ʼ ˈ ̇ ˌ ̧ ː ˠ ˤ ˥ ˧ ˩ ̝ ̟ ̥ ̩ ̪ ̯ ̃ ̊ ͡] > ;

::Null;

t [ʃ ɕ ʂ] > ch;
d [ʒ ʐ ʑ ž ʝ] > y;

$vowel_ipa { [r ʀ ɹ ʁ] } $vowel_ipa > rr;
$vowel_ipa { [i ɪ ɨ ĩ] } [:^Letter:] > y;

[:^Letter:] { w } $front_ipa > hu;
w > gu;

[c k q] } $front_ipa > qu;
[k q] > c;

[g ɡ ɢ ɟ ɣ ɰ] } $front_ipa > gu;
[ɡ ɢ ɟ ɣ ɰ] > g;

θ } $front_ipa > c;
θ > z;

[č ç] > ch;
[x χ ħ ɦ ɧ h] > j;
[ð ɖ ď ɗ] > d;
[ɓ β] > b;
[ɱ] > m;
[ŋ ɳ] > n;
[ɲ] > ñ;
[ɫ ɭ] > l;
[ʎ] > ll;
[ʃ ɕ ʂ] > s;
[ʒ ʐ ʑ ž ʝ] > y;
[ʈ ť] > t;
[ʋ] > v;
[ɥ] > hu;
j > y;
ɸ > f;

[ʀ ɹ ʁ ɾ ɽ] > r;

[â æ ă ɐ ɑ ɒ ʌ] > a;
[ê ę ɛ ɘ ə ɜ ẽ œ] > e;
[ɚ ɝ] > er;
[ĩ ɪ ɨ y ʏ] > i;
[ô õ ø ơ ɔ ɤ ɵ] > o;
[ũ ʊ ʉ ɯ ư] > u;

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
