export const ipaHeRules = `
::Null;
::NFD;

ç } [:^Letter:] > ך;
ç > כ;

[ˈ ˌ ː ˑ ˥ ˦ ˧ ˨ ˩ ˤ ʷ ʲ ʱ ʰ ˠ ⁿ ˡ ̚ ̪ ̺ ̻ ̥ ̬ ʴ ʵ ʶ ˢ ˣ ꜛ ꜜ ↑ ↓ ↗ ↘ ʼ ͜ ͡ ‖ | ̩ ̯ ̧ ̟ ̊ ˞ ̂ ̆ ̨ ̛ ̝] > ;

::Null;

tʃ } [:^Letter:] > ץ׳;
tɕ } [:^Letter:] > ץ׳;
ʈʂ } [:^Letter:] > ץ׳;
tʃ > צ׳;
dʒ > ג׳;
ts } [:^Letter:] > ץ;
ts > צ;
dz > ז;
tɕ > צ׳;
dʑ > ג׳;
ʈʂ > צ׳;
ɖʐ > ג׳;
č } [:^Letter:] > ץ׳;
č > צ׳;
ž > ז׳;
ď > ג;
ť > ק;

[bβɓʙ] > ב;
[pɸƥ] > פ;
[vʋʍwɥ] > ו;
[f] } [:^Letter:] > ף;
[f] > פ;
[mɱ] } [:^Letter:] > ם;
[mɱ] > מ;
[tʈt̪] > ט;
[dɖd̪dʱɗ] > ד;
[θ] > ת;
[ð] > ד;
[nɲɳɴ] } [:^Letter:] > ן;
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
[xχ] } [:^Letter:] > ך;
[xχ] > כ;
[ħʜ] > ח;
[ʕʢ] > ע;
[ʔʡ] > א;

̃ } [:^Letter:] > ן;
̃ > נ;

$vowel_a = [aɑæɒɐʌəɤɵɞ];
$vowel_e = [eɛɘɜɝɚ];
$vowel_i = [iɪyʏɨɯ];
$vowel_u = [uʊoɔœøʉ];

[:^Letter:] { $vowel_a > א;
[:^Letter:] { $vowel_e > א;
[:^Letter:] { $vowel_i > אי;
[:^Letter:] { $vowel_u > או;

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

$vowel_a } [:^Letter:] > ה;
$vowel_e } [:^Letter:] > ה;
$vowel_i } [:^Letter:] > י;
$vowel_u } [:^Letter:] > ו;

$vowel_a > ;
$vowel_e > ;
$vowel_i > י;
$vowel_u > ו;

::Null;

יי { י > ;
וו { ו > ;
`;
