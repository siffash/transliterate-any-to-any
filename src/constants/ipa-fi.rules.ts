export const ipaFiRules = `
::Null;

$vowel_fi = [aeiouyäö];

c > k;
q > k;
w > v;
x > ks;

[âăɐɑʌ] > a;
æ > ä;
ɓ > b;
[ðďɖɗ] > d;
[êęɘəɚɛɜɝẽ] > e;
[ɡɢɣɰ] > g;
[ħɦɧχ] > h;
[ĩɨɪ] > i;
[ɟʝʲ] > j;
[ɫɭ] > l;
ɱ > m;
ɲ > nj;
ɳ > n;
ŋ } k > n;
ŋ > ng;
[ôõơɒɔɤ] > o;
[øœɵ] > ö;
[ɹɽɾʀʁ] > r;
[çɕʂʃ] > s;
č > ts;
[ťʈθ] > t;
[ũưɯʊ] > u;
[ʋβʷ] > v;
[ɥʉʏ] > y;
[žʐʑʒ] > z;
ʎ > lj;
ɸ > f;

[:^Letter:] { ʔ } > ;
ʔ } [:^Letter:] > ;
$vowel_fi { ʔ } $vowel_fi > \\';
ʔ > ;

([a-zäö]) { ː } > $1;
ː > ;

[͈̚ʕʰʱʼˈ̇ˌ̧ˠˤ˥˧˩̝̟̥̩̪̯̃̊͡] > ;

::Null;

j } [bcdfghklmnpqrstvwxzšž] > i;
j } [:^Letter:] > i;
`;
