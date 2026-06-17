export const ipaHeRules = `
::Null;
::NFD;

$boundary = [:^Letter:];

ç } $boundary > ך;
ç > כ;

[ˈ ˌ ː ˑ ˥ ˦ ˧ ˨ ˩ ˤ ʷ ʲ ʱ ʰ ˠ ⁿ ˡ ̚ ̪ ̺ ̻ ̥ ̬ ʴ ʵ ʶ ˢ ˣ ꜛ ꜜ ↑ ↓ ↗ ↘ ʼ ͜ ͡ ‖ | ̩ ̯ ̧ ̟ ̊ ˞ ̂ ̆ ̨ ̛ ̝] > ;

::Null;

tʃ } $boundary > ץ׳;
tɕ } $boundary > ץ׳;
ʈʂ } $boundary > ץ׳;
tʃ > צ׳;
dʒ > ג׳;
ts } $boundary > ץ;
ts > צ;
dz > ז;
tɕ > צ׳;
dʑ > ג׳;
ʈʂ > צ׳;
ɖʐ > ג׳;
č } $boundary > ץ׳;
č > צ׳;
ž > ז׳;
ď > ג;
ť > ק;

[bβɓʙ] > ב;
[pɸƥ] > פ;
[vʋʍwɥ] > ו;
[f] } $boundary > ף;
[f] > פ;
[mɱ] } $boundary > ם;
[mɱ] > מ;
[tʈt̪] > ט;
[dɖd̪dʱɗ] > ד;
[θ] > ת;
[ð] > ד;
[nɲɳɴ] } $boundary > ן;
[nɲɳɴ] > נ;
ŋ } [ɡgɢɠɟʄɣ] > נ;
ŋ > נג;
[sʂɕ] > ס;
[zʐʑ] > ז;
[ʃɧ] > ש;
[ʒ] > ז׳;
[rɾɹʀʁɻɽ] > ר;
[lɫʎɭʟ] > ל;
[jʝɰ] > י;
[kqc] > ק;
[ɡgɢɠɟʄɣ] > ג;
[hɦ] > ה;
[xχ] } $boundary > ך;
[xχ] > כ;
[ħʜ] > ח;
[ʕʢ] > ע;
[ʔʡ] > א;

̃ } $boundary > ן;
̃ > נ;

$vowel_a = [aɑæɒɐʌəɤɵɞ];
$vowel_e = [eɛɘɜɝɚ];
$vowel_i = [iɪyʏɨɯ];
$vowel_u = [uʊoɔœøʉ];

$boundary { $vowel_a > א;
$boundary { $vowel_e > א;
$boundary { $vowel_i > אי;
$boundary { $vowel_u > או;

$vowel_a } $vowel_a > א;
$vowel_a } $vowel_e > א;
$vowel_a } $vowel_i > א;
$vowel_a } $vowel_u > א;

$vowel_e } $vowel_a > א;
$vowel_e } $vowel_e > א;
$vowel_e } $vowel_i > י;
$vowel_e } $vowel_u > א;

$vowel_i } $vowel_a > יא;
$vowel_i } $vowel_e > יא;
$vowel_i } $vowel_i > י;
$vowel_i } $vowel_u > י;

$vowel_u } $vowel_a > וא;
$vowel_u } $vowel_e > וא;
$vowel_u } $vowel_i > וא;
$vowel_u } $vowel_u > ;

$vowel_a } $boundary > ה;
$vowel_e } $boundary > ה;
$vowel_i } $boundary > י;
$vowel_u } $boundary > ו;

$vowel_a > ;
$vowel_e > ;
$vowel_i > י;
$vowel_u > ו;

::Null;

יי { י > ;
וו { ו > ;
`;
