export const ipaBgRules = `
::Null;

$a = [aɑɐăâæ];
$e = [eɛęẽêœø];
$i = [iɪĩɨyʏ];
$o = [oɔôõɵɒ];
$u = [uʊũʉɯư];
$schwa = [əɘʌɤơɜ];
$rhotic_schwa = [ɚɝ];
$palatal = [jʝɥʲ];

[ʔʕʰʱʷʼˈ̇ˌ̧ːˠˤ˥˧˩̝̟̥̩̪̯̃̊͡] > ;

$palatal $a > я;
$palatal $u > ю;
[:^Letter:] { $palatal $o > йо;
$palatal $o > ьо;
[:^Letter:] { $palatal $e > йе;
$palatal $e > е;
[:^Letter:] { $palatal $i > йи;
$palatal $i > и;
$palatal $schwa > йъ;
$palatal $rhotic_schwa > йър;
$palatal > й;
$rhotic_schwa > ър;

[tʈť][sɕʂ] > ц;
[dɖɗď][z] > дз;
[tʈť][ʃ] > ч;
[dɖɗď][ʒʐʑž] > дж;
[ʃ][tʈťθ] > щ;

$a > а;
$e > е;
$i > и;
$o > о;
$u > у;
$schwa > ъ;

[bɓβ] > б;
[vʋw] > в;
[gɡɢɣɟ] > г;
[dɖɗďð] > д;
[ʒʐʑž] > ж;
[z] > з;
[ckq] > к;
[lɫɭʎ] > л;
[mɱ] > м;
[nɲɳŋ] > н;
[p] > п;
[rɾɹɽʀ] > р;
[sɕʂ] > с;
[tʈťθ] > т;
[f] > ф;
[hxχħɦɧʁç] > х;
[ʃ] > ш;
[č] > ч;
`;
