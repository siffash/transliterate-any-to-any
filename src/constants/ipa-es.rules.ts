export const ipaEsRules = `
::Null;

$vowel = [a â ă æ ɐ ɑ ɒ e ê ę ɛ ɘ ə ɜ ẽ i ĩ ɪ ɨ y o ô õ ø œ ơ ɔ ɤ ɵ u ũ ʊ ʉ ɯ ư ʌ y ʏ];
$front = [e ê ę ɛ ɘ ə ɜ ẽ i ĩ ɪ ɨ y ʏ œ];

[ʰ ʱ ʲ ʷ ʼ ˈ ̇ ˌ ̧ ː ˠ ˤ ˥ ˧ ˩ ̝ ̟ ̥ ̩ ̪ ̯ ̃ ̊ ͡] > ;
[ʔ ʕ] > ;

::Null;

t [ʃ ɕ ʂ] > ch;
d [ʒ ʐ ʑ ž ʝ] > y;

$vowel { [r ʀ ɹ ʁ] } $vowel > rr;
$vowel { [i ɪ ɨ ĩ] } [:^Letter:] > y;

[:^Letter:] { w } $front > hu;
w > gu;

[c k q] } $front > qu;
[k q] > c;

[g ɡ ɢ ɟ ɣ] } $front > gu;
[ɡ ɢ ɟ ɣ] > g;

θ } $front > c;
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

[ʀ ɹ ʁ ɾ ɽ] > r;

[â æ ă ɐ ɑ ɒ ʌ] > a;
[ê ę ɛ ɘ ə ɜ ẽ œ] > e;
[ɚ ɝ] > er;
[ĩ ɪ ɨ y ʏ] > i;
[ô õ ø ơ ɔ ɤ ɵ] > o;
[ũ ʊ ʉ ɯ ư] > u;
`;
