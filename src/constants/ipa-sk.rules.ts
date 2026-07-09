export const ipaSkRules = `
::Null;

$vowel_a = [aɑɐɒăâ];
$vowel_e = [eɛɜɘəɚɝêęẽ];
$vowel_i = [iɪɨĩyʏ];
$vowel_o = [oɔœøɵơõɤʌ];
$vowel_u = [uʊʉɯưũ];
$cons_l = [lɫɭ];
$cons_r = [rɾɹɽʀʁ];

t͡s > c;
ts > c;
t͡ʃ > č;
tʃ > č;
d͡z > dz;
dz > dz;
d͡ʒ > dž;
dʒ > dž;
t͡ɕ > č;
tɕ > č;
d͡ʑ > dž;
dʑ > dž;
t͡ʂ > č;
tʂ > č;
d͡ʐ > dž;
dʐ > dž;

$vowel_a ː > á;
$vowel_e ː > é;
$vowel_i ː > í;
$vowel_o ː > ó;
$vowel_u ː > ú;
$cons_l ː > ĺ;
$cons_r ː > ŕ;

[͈̚ːʰʱʲʷʼˈ̇ˌ̧ˠˤ˥˧˩̝̟̥̩̪̯̃̊͡ʔ] > ;

::Null;

$vowel_a > a;
æ > ä;
$vowel_e > e;
$vowel_i > i;
$vowel_o > o;
$vowel_u > u;

ɓ > b;
[çχħɧx] > ch;
[ɖɗð] > d;
ɟ > ď;
[ɡɢɣɰ] > g;
[ɦʕ] > h;
[ɥʝ] > j;
ɱ > m;
[ŋɳ] > n;
ɲ > ň;
$cons_l > l;
ʎ > ľ;
$cons_r > r;
[ʂʃɕ] > š;
ʈ > t;
[ʋβw] > v;
[ʐʑʒ] > ž;
θ > s;
ɸ > f;

::Null;

[ďťňľ] { y > i;
[ďťňľ] { ý > í;

::Null;

ď } [iíeé] > d;
ť } [iíeé] > t;
ň } [iíeé] > n;
ľ } [iíeé] > l;
`;
