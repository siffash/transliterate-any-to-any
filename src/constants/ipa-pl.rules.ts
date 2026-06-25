export const ipaPlRules = `
::Null;

$vowel = [a ą e ę i o ó u y â æ ê ô õ ø ă ĩ œ ũ ơ ư ɐ ɑ ɒ ɔ ɘ ə ɚ ɛ ɜ ɝ ɤ ɨ ɪ ɯ ɵ ʉ ʊ ʌ ʏ ẽ];

[ʔ ʕ ˈ ˌ ː ˥ ˧ ˩ ʰ ʱ ʷ ʼ ̇ ̧ ˠ ˤ ̝ ̟ ̥ ̩ ̪ ̯ ̊ ͡] > ;

::Null;

o ̃ > ą;
e ̃ > ę;
a ̃ > ą;
ɔ ̃ > ą;
ɛ ̃ > ę;
[̃] > ;

::Null;

[:^Letter:] { [ɪ ɨ ʏ ɵ] > i;

t [ɕ ç] } $vowel > ci;
d [ʑ ʝ] } $vowel > dzi;
t s ʲ } $vowel > ci;
d z ʲ } $vowel > dzi;
s ʲ } $vowel > si;
z ʲ } $vowel > zi;
n ʲ } $vowel > ni;
[ɕ ç] } $vowel > si;
[ʑ ʝ] } $vowel > zi;
ɲ } $vowel > ni;
ɟ } $vowel > dzi;

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
[ɡ ɢ ɣ] > g;
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
ʲ > i;
`;
