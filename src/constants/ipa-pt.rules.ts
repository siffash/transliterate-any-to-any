export const ipaPtRules = `
::Null;

$vowel_ipa = [a e i o u â ê ô õ æ ø ă ę ĩ œ ũ ơ ư ɐ ɑ ɒ ɔ ɘ ə ɚ ɛ ɜ ɝ ɨ ɪ ɯ ɵ ʉ ʊ ʌ ʏ ẽ y w];
$front_vowel = [e i ê æ ø ę ĩ œ ɘ ə ɚ ɛ ɜ ɝ ɨ ɪ ʏ ẽ y];
$bilabial = [p b ɓ β m ɱ];

[͈̚ʔʕʰʱʲʷʼˈ̇ˌ̧ːˠˤ˥˧˩̝̟̥̩̪̯̃̊͡] > ;

::Null;

[g ɡ ɟ ɢ ɣ ɰ ɤ] } $front_vowel > gu;
[ɡ ɟ ɢ ɣ ɰ ɤ] > g;

[c k q] } $front_vowel > qu;
[k q] > c;

ẽ } $bilabial > em;
ẽ } [:^Letter:] > em;
ẽ > en;

ĩ } $bilabial > im;
ĩ } [:^Letter:] > im;
ĩ > in;

ũ } $bilabial > um;
ũ } [:^Letter:] > um;
ũ > un;

$vowel_ipa { s } $vowel_ipa > ss;
$vowel_ipa { [r ʀ ʁ] } $vowel_ipa > rr;

[ɓ β] > b;
č > ch;
[ď ɖ ɗ ð] > d;
[ħ ɦ ɧ χ h x] > r;
[ŋ ɳ] > n;
ɲ > nh;
[ɫ ɭ] > l;
ʎ > lh;
ɱ > m;
[ʀ ʁ ɹ ɽ ɾ] > r;
[ɕ ʂ ʃ] > x;
[ť ʈ] > t;
ʋ > v;
[w ɥ] > u;
[y ʏ ʝ j] > i;
[ʐ ʑ ʒ ž] > j;
θ > s;
ɸ > f;

[ɑ ɐ ɒ ă æ ʌ] > a;
[ɛ ə ɘ ɚ ɜ ɝ ę] > e;
[ɪ ɨ] > i;
[ơ ø œ ɵ ɔ] > o;
[ư ʉ ʊ ɯ] > u;

::Null;

ç } [eéêiíy] > c;
ç } [bcdfghjklmnpqrstvwxz] > s;
[bcdfghjklmnpqrstvwxz] { ç > s;
[:^Letter:] { ç > s;
ç } [:^Letter:] > s;

[:^Letter:] { rr > r;
rr } [:^Letter:] > r;
[bcdfghjklmnpqstvwxz] { rr > r;
rr } [bcdfghjklmnpqstvwxz] > r;

[:^Letter:] { ss > s;
ss } [:^Letter:] > s;
[bcdfghjklmnpqrtvwxz] { ss > s;
ss } [bcdfghjklmnpqrtvwxz] > s;
`;
