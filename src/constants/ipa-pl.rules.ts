export const ipaPlRules = `
::Null;

$vowel_ipa = [a ą e ę i o ó u y â æ ê ô õ ø ă ĩ œ ũ ơ ư ɐ ɑ ɒ ɔ ɘ ə ɚ ɛ ɜ ɝ ɤ ɨ ɪ ɯ ɵ ʉ ʊ ʌ ʏ ẽ];

[͈̚ ʔ ʕ ˈ ˌ ː ˥ ˧ ˩ ʰ ʱ ʷ ʼ ̇ ̧ ˠ ˤ ̝ ̟ ̥ ̩ ̪ ̯ ̊ ͡] > ;

::Null;

o ̃ > ą;
e ̃ > ę;
a ̃ > ą;
ɔ ̃ > ą;
ɛ ̃ > ę;
[̃] > ;

::Null;

[:^Letter:] { [ɪ ɨ ʏ ɵ] > i;

t [ɕ ç] } $vowel_ipa > ci;
d [ʑ ʝ] } $vowel_ipa > dzi;
t s ʲ } $vowel_ipa > ci;
d z ʲ } $vowel_ipa > dzi;
s ʲ } $vowel_ipa > si;
z ʲ } $vowel_ipa > zi;
n ʲ } $vowel_ipa > ni;
[ɕ ç] } $vowel_ipa > si;
[ʑ ʝ] } $vowel_ipa > zi;
ɲ } $vowel_ipa > ni;
ɟ } $vowel_ipa > dzi;

t [ɕ ç] > ć;
d [ʑ ʝ] > dź;
t s ʲ > ć;
d z ʲ > dź;
s ʲ > ś;
z ʲ > ź;
n ʲ > ń;
[ɕ ç] > ś;
[ʑ ʝ] > ź;
ɲ > ń;
ɟ > dź;

t [ʃ ʂ] > cz;
d [ʒ ʐ] > dż;
t s > c;
d z > dz;

õ > ą;
ẽ > ę;

[æ ă â ɐ ɑ ɒ ʌ] > a;
[ê ɘ ə ɚ ɛ ɜ ɝ œ] > e;
[ɪ ɨ] > y;
[ô ø ơ ɔ ɤ] > o;
[ũ ʉ ʊ ɯ ư] > u;
[ʏ ɵ] > y;
ĩ > i;

[č ʈ ť] > t;
[ď ɖ ɗ ð] > d;
[ħ χ x] > ch;
[ŋ ɳ] > n;
[ɡ ɢ ɣ ɰ] > g;
[ɥ ɦ ɧ] > h;
[ɫ w] > ł;
[ɭ ʎ] > l;
ɱ > m;
[ɹ ɽ ɾ ʀ ʁ] > r;
[ʂ ʃ] > sz;
[ʋ v] > w;
[ʐ ʒ ž] > ż;
[ɓ β] > b;
θ > t;
q > k;
ɸ > f;
ʲ > i;

::Null;

[ćśźńji] { y > i;

::Null;

ć } [aąeęoóu] > ci;
ć } i > c;

ś } [aąeęoóu] > si;
ś } i > s;

ź } [aąeęoóu] > zi;
ź } i > z;

ń } [aąeęoóu] > ni;
ń } i > n;
`;
