export const ipaFrRules = `
::Null;

$vowel_fr = [aeiouyâæêôõøăęĩœũơưɐɑɒɔɘəɚɛɜɝɤɨɪɯɵʉʊʌʏẽ];
$consonant_fr = [bcdfɸghjklmnpqrstvwxzçðčďħŋťžɓɕɖɗɟɡɢɣɰɥɦɧɫɭɱɲɳɹɽɾʀʁʂʃʈʋʎʐʑʒʔʕʝβθχ];
$frontVowel_fr = [eêiyɛɪɨɘəɜøɵœęĩẽ];

[͈̚ʰʱʲʷʼˈ̇ˌ̧ːˠˤ˥˧˩̝̟̥̩̪̯̃̊͡ʔ] > ;

::Null;

$vowel_fr { s } $vowel_fr > ss;
ɲ } [:^Letter:] > gne;
k } $frontVowel_fr > qu;
k > c;
ɡ } $frontVowel_fr > gu;
[ɡɢ] > g;
[ɣɰ] > gh;
[ęẽĩ] > in;
õ > on;
ũ > un;
[ɑɐɒăʌ] > a;
æ > ae;
[ɚɝ] > er;
[ɘəɜ] > e;
ɛ > è;
e > é;
[ɪɨ] > i;
[ɔơɤ] > o;
[uʊɯưw] > ou;
[yʏʉɥ] > u;
[øɵœ] > eu;
[ɓβ] > b;
č > tch;
[ɖɗðď] > d;
[ɦħʕ] > h;
[ɫɭ] > l;
ɱ > m;
ɳ > n;
ɲ > gn;
ŋ > ng;
[ɹɽɾʀʁ] > r;
[ʂʃɕɧ] > ch;
[ʈťθ] > t;
ʋ > v;
ʎ > ill;
[ʐʑʒž] > j;
[ʝɟj] > y;
[χx] > kh;
ɸ > f;

::Null;

ç } [eéèêëiîïy] > c;
`;
