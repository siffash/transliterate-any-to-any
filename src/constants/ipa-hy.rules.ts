export const ipaHyRules = `
::Null;

$vowels_e = [eêęẽœøɛ];
$vowels_o = [oôõơɒɔɵ];
$vowels_a = [aâæăɐɑʌ];
$vowels_i = [iĩɨɪyʏ];
$vowels_u = [uũưɯʉʊ];
$vowels_schwa = [əɘɚɝɤ];
$stops_p = [pɓ];
$stops_b = [bβ];
$stops_t = [tťʈ];
$stops_d = [dďðɖɗ];
$stops_k = [kc];
$stops_g = [gɡɢɟ];
$fric_s = [sɕʂ];
$fric_z = [zʑʐ];
$fric_sh = [ʃɧ];
$fric_zh = [ʒž];

[:^Letter:] { $vowels_e } > ե;
$vowels_e > է;
[:^Letter:] { $vowels_o } > ո;
$vowels_o > օ;
$vowels_a > ա;
$vowels_i > ի;
$vowels_u > ու;
$vowels_schwa > ը;

[tťʈ]͡[sɕʂ]ʰ > ց;
[tťʈ][sɕʂ]ʰ > ց;
[tťʈ]͡[ʃɧ]ʰ > չ;
[tťʈ][ʃɧ]ʰ > չ;
[tťʈ]͡[sɕʂ] > ծ;
[tťʈ][sɕʂ] > ծ;
[tťʈ]͡[ʃɧ] > ճ;
[tťʈ][ʃɧ] > ճ;
[dďðɖɗ]͡[zʑʐ] > ձ;
[dďðɖɗ][zʑʐ] > ձ;
[dďðɖɗ]͡[ʒž] > ջ;
[dďðɖɗ][ʒž] > ջ;

čʰ > չ;
č > ճ;

$stops_p ʰ > փ;
$stops_t ʰ > թ;
$stops_k ʰ > ք;
qʰ > ք;

$stops_p > պ;
$stops_b > բ;
$stops_t > տ;
$stops_d > դ;
$stops_k > կ;
$stops_g > գ;
q > ք;

[fɸ] > ֆ;
[vʋw] > վ;
[hɦħ] > հ;
[xχç] > խ;
[ɣɰʁʕ] > ղ;
θ > թ;

$fric_s > ս;
$fric_z > զ;
$fric_sh > շ;
$fric_zh > ժ;

[mɱ] > մ;
[nŋɲɳ] > ն;
[lɫɭʎ] > լ;
[rʀ] > ռ;
[ɾɽɹ] > ր;
[jɥʝ] > յ;

ʲ > յ;
ʷ > վ;
ˠ > ղ;
ʰ > հ;

[͈̚ʔʱʼˈ̇ˌːˤ˥˧˩̝̟̥̩̪̯̃̊͡] > ;

::Null;

[:^Letter:] { ր > ռ;
[:^Letter:] { ո > օ;
[:^Letter:] { ե > է;
[:^Letter:] { յի > ի;
յէ > յե;
յօ > յո;
եօ > եո;
րր > ռռ;
յյ > յ;
[:^Letter:] { ւ > վ;
[^ոՈ] { ւ > վ;
`;
