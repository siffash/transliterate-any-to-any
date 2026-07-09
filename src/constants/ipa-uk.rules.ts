export const ipaUkRules = `
::Null;
::NFD;

$vowel_a = [aâăɐɑɒʌ];
$vowel_ae = [æ];
$vowel_e = [eêęœɛɘəẽ];
$vowel_i = [iĩyʏ];
$vowel_y = [ɨɪɯ];
$vowel_o = [oôõøơɔɤɵ];
$vowel_u = [uũưʉʊ];
$j = [jʝ];
$soft_j = ʲ;
$pal_l = ʎ;
$pal_n = ɲ;
$pal_s = ɕ;
$pal_z = ʑ;
$pal_d = [ďɟ];
$pal_t = ť;

[͈̚ʔʕʰʱʷˈ̇ˌː̧ˠˤ˥˧˩̝̟̥̩̪̯̃̊͡] > ;

::Null;

tʃ > ч;
dʒ > дж;
ts > ц;
dz > дз;
[:^Letter:] { ʼ > ;
ʼ } [:^Letter:] > ;
$pal_l $vowel_a > ля;
$pal_l $vowel_ae > ля;
$pal_l $vowel_e > лє;
$pal_l $vowel_u > лю;
$pal_l $vowel_o > льо;
$pal_l $vowel_i > лі;
$pal_l $vowel_y > лі;
$pal_n $vowel_a > ня;
$pal_n $vowel_ae > ня;
$pal_n $vowel_e > нє;
$pal_n $vowel_u > ню;
$pal_n $vowel_o > ньо;
$pal_n $vowel_i > ні;
$pal_n $vowel_y > ні;
$pal_s $vowel_a > ся;
$pal_s $vowel_ae > ся;
$pal_s $vowel_e > сє;
$pal_s $vowel_u > сю;
$pal_s $vowel_o > сьо;
$pal_s $vowel_i > сі;
$pal_s $vowel_y > сі;
$pal_z $vowel_a > зя;
$pal_z $vowel_ae > зя;
$pal_z $vowel_e > зє;
$pal_z $vowel_u > зю;
$pal_z $vowel_o > зьо;
$pal_z $vowel_i > зі;
$pal_z $vowel_y > зі;
$pal_d $vowel_a > дя;
$pal_d $vowel_ae > дя;
$pal_d $vowel_e > дє;
$pal_d $vowel_u > дю;
$pal_d $vowel_o > дьо;
$pal_d $vowel_i > ді;
$pal_d $vowel_y > ді;
$pal_t $vowel_a > тя;
$pal_t $vowel_ae > тя;
$pal_t $vowel_e > тє;
$pal_t $vowel_u > тю;
$pal_t $vowel_o > тьо;
$pal_t $vowel_i > ті;
$pal_t $vowel_y > ті;
$j $vowel_a > я;
$j $vowel_ae > я;
$j $vowel_e > є;
$j $vowel_u > ю;
$j $vowel_o > йо;
$j $vowel_i > ї;
$j $vowel_y > ї;
$soft_j $vowel_a > я;
$soft_j $vowel_ae > я;
$soft_j $vowel_e > є;
$soft_j $vowel_u > ю;
$soft_j $vowel_o > ьо;
$soft_j $vowel_i > і;
$soft_j $vowel_y > і;
[bɓ] > б;
[vwɥʋβ] > в;
[gɡɢ] > ґ;
[hɣɰɦ] > г;
[dðɖɗ] > д;
$pal_d > дь;
[žʐʒ] > ж;
z > з;
$pal_z > зь;
$j > й;
[ckq] > к;
[lɫɭ] > л;
$pal_l > ль;
[mɱ] > м;
[nŋɳ] > н;
$pal_n > нь;
p > п;
[rɹɽɾʀʁ] > р;
s > с;
$pal_s > сь;
[tʈθ] > т;
$pal_t > ть;
[fɸ] > ф;
[xçχħ] > х;
č > ч;
[ɧʂʃ] > ш;
$soft_j > ь;
ʼ > \\';
$vowel_a > а;
$vowel_ae > е;
$vowel_e > е;
$vowel_i > і;
$vowel_y > и;
$vowel_o > о;
$vowel_u > у;
[ɚɝ] > ер;

::Null;

шч > щ;
й { й > ;

[бпвмфгґкхр] { йа > \\'я;
[бпвмфгґкхр] { йе > \\'є;
[бпвмфгґкхр] { йі > \\'ї;
[бпвмфгґкхр] { йу > \\'ю;

йа > я;
йе > є;
йі > ї;
йу > ю;

::Null;

[:^Letter:] { й } [бвгґджзклмнпрстфхцчшщ] > і;
[бвгґджзклмнпрстфхцчшщ] { й } [бвгґджзклмнпрстфхцчшщ] > і;

::Null;

[жчшщ] { я > а;
[жчшщ] { ю > у;
[жчшщ] { є > е;

[бпвмфгґкхр] { ь } [яюєї] > \\';
[бпвмфгґкхр] { Ь } [яюєї] > \\';

[аеєиіїоуюя] { ь > ;
[:^Letter:] { ь > ;
[жчшщ] { ь > ;
ь } ь > ;

[:^Letter:] { \\' > ;
[аеєиіїоуюя] { \\' > ;
\\' { ь > ;
ь } \\' > ;
\\' { \\' > ;
`;
