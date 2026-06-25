export const ipaCsRules = `
::Null;

$a_non = [ɐ ɑ ɒ ă â æ ʌ];
$a_all = [a ɐ ɑ ɒ ă â æ ʌ];
$e_non = [ɛ ɜ ɝ ə ɘ ɚ ê ę ẽ];
$e_all = [e ɛ ɜ ɝ ə ɘ ɚ ê ę ẽ];
$i_non = [ɪ ɨ ĩ];
$i_all = [i ɪ ɨ ĩ];
$o_non = [ɔ œ ɵ ô õ ø ơ ɤ];
$o_all = [o ɔ œ ɵ ô õ ø ơ ɤ];
$u_non = [ʊ ʉ ɯ ũ ư];
$u_all = [u ʊ ʉ ɯ ũ ư];
$y_non = [ʏ];
$y_all = [y ʏ];

$a_all ː > á;
$e_all ː > é;
$i_all ː > í;
$o_all ː > ó;
[:^Letter:] { $u_all ː } > ú;
$u_all ː > ů;
$y_all ː > ý;

$a_non > a;
$e_non > e;
$i_non > i;
$o_non > o;
$u_non > u;
$y_non > y;

dʲ > ď;
tʲ > ť;
nʲ > ň;
t [ʃ ɕ ʂ] > č;
d [ʒ ʑ ʐ] > dž;
ts > c;
dz > dz;

[ɓ β] > b;
c > ť;
[ç ɕ ʃ ʂ] > š;
[ɖ ɗ ð] > d;
ɟ > ď;
[ɡ ɢ ɣ] > g;
[ɥ ɦ ɧ ħ] > h;
ʝ > j;
[ɫ ɭ ʎ] > l;
ɱ > m;
[ŋ ɳ] > n;
ɲ > ň;
q > k;
[ɹ ɽ ɾ ʀ ʁ] > r;
[ʈ θ] > t;
[ʋ w] > v;
[χ x] > ch;
[ʐ ʑ ʒ] > ž;

[ʰ ʱ ʲ ʷ ʼ ˈ ̇ ˌ ̧ ˠ ˤ ˥ ˧ ˩ ̝ ̟ ̥ ̩ ̪ ̯ ̃ ̊ ͡ ʔ ʕ] > ;
`;
