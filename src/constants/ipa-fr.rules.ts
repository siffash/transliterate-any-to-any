export const ipaFrRules = `
::Null;

$vowel = [aeiouyâæêôõøăęĩœũơưɐɑɒɔɘəɚɛɜɝɤɨɪɯɵʉʊʌʏẽ];
$consonant = [bcdfghjklmnpqrstvwxzçðčďħŋťžɓɕɖɗɟɡɢɣɥɦɧɫɭɱɲɳɹɽɾʀʁʂʃʈʋʎʐʑʒʔʕʝβθχ];
$frontVowel = [eêiyɛɪɨɘəɜøɵœęĩẽ];

[ʰʱʲʷʼˈ̇ˌ̧ːˠˤ˥˧˩̝̟̥̩̪̯̃̊͡ʔ] > ;

::Null;

$vowel { s } $vowel > ss;
ɲ } [:^Letter:] > gne;
k } $frontVowel > qu;
k > c;
ɡ } $frontVowel > gu;
[ɡɢ] > g;
ɣ > gh;
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
`;
