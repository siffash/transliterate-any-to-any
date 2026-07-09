export const ipaIsRules = `
::Null;

[͈̚ ʔ ʰ ʱ ʼ ˈ ̇ ˌ ̧ ː ˠ ˤ ˥ ˧ ˩ ̝ ̟ ̥ ̩ ̪ ̯ ̃ ̊ ͡] > ;

::Null;

[:^Letter:] { r ̥ } > h r;
[:^Letter:] { l ̥ } > h l;
[:^Letter:] { n ̥ } > h n;
[:^Letter:] { m ̥ } > h m;

a [u ʊ] > á;
o [u ʊ] > ó;
œ [y ʏ] > a u;
a [i ɪ] > æ;
e { [i ɪ] } > i;
j [e ɛ] > é;
p ʰ > p;
t ʰ > t;
k ʰ > k;
c ʰ > k j;
t ʃ > s;
d ʒ > s;
ʲ > j;
ʷ > v;
[c ɟ] > g j;
[q ɡ ɢ] > g;
k > g;
t > d;
[p ɓ] > b;
[w ɥ ʋ] > v;
[βɸ] > f;
θ > þ;
[ď ʈ ɖ ɗ ť] > d;
[ç ɦ ɧ ħ ʕ χ] > h;
[ɣ ɰ ʝ] > j;
ɱ > m;
ɲ > n j;
ŋ > n g;
ɳ > n;
ʎ > l j;
[ɫ ɭ] > l;
[ɹ ɽ ɾ ʀ ʁ] > r;
[ɕ ʂ ʃ ʒ ʐ ʑ č ž z] > s;
[ɚ ɝ] > e r;
[ɐ ɑ ɒ ă â] > a;
[ɛ ɜ ɘ ə ê ę ẽ] > e;
[ɪ ɨ ĩ] > i;
i > í;
[ɔ ô õ ɤ ơ] > o;
o > ó;
[ʊ ʉ ũ ư ʌ ɯ] > u;
u > ú;
ʏ > y;
y > ý;
[œ ø ɵ] > ö;

::Null;

[kgh] { j } [eéiíyýæ] > ;
[:^Letter:] { ð > d;
qu > kv;
q > k;
c } [eéiíyýæ] > s;
c > k;
w > v;
z > s;
aa > á;
ee > é;
ii > í;
oo > ó;
uu > ú;
yy > ý;
öö > ö;
ææ > æ;
`;
