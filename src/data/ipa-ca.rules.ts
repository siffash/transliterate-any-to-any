export const ipaCaRules = `
::Null;

[͈̚ʰʱʲʷ'’ʼˈ̇ˌ̧ːˠˤ˥˧˩̝̟̥̩̪̯̃̊͡] > ;

::Null;

[âæăɐɑɒ] > a;
[ɚɝ] > er;
[êęẽɛɜɘə] > e;
[ĩɨɪ] > i;
[ôõøœơɔɵɤʌ] > o;
[ũưʉʊɯʏɥy] > u;

::Null;

t [ʃʂɕ] } [:^Letter:] > ig;
t [ʃʂɕ] > tx;
č } [:^Letter:] > ig;
č > tx;

d [ʒžʐʑ] } [ei] > tg;
d [ʒžʐʑ] } [:^Letter:] > ig;
[ʒžʐʑʝ] } [:^Letter:] > ig;
d [ʒžʐʑ] > tj;

[aeou] { [ʃʂɕ] > ix;
[ʃʂɕ] > x;

[ʒžʐʑʝ] } [ei] > g;
[ʒžʐʑʝ] > j;

[kcq] } [ei] > qu;
[kcq] > c;

[ɡɟɢɣɰ] } [ei] > gu;
[ɡɟɢɣɰ] > g;
g } [ei] > gu;

[ɲɳ] > ny;
ʎ > ll;
[ɫɭ] > l;
ŋ > ng;
ɱ > m;

ɓ > b;
[ðɖɗď] > d;
[ʈť] > t;
[aeiou] { r } [aeiou] > rr;
[ɹɽɾʀʁ] > r;
[ʋβ] > v;
θ > z;
[ħɦɧʔʕçχx] > h;
[aeiou] { s } [aeiou] > ss;

j > i;
w > u;
ɸ > f;

::Null;

n } [bpm] > m;
m } [fv] > n;

::Null;

[:^Letter:] { ss > s;
ss } [:^Letter:] > s;

[:^Letter:] { rr > r;
rr } [:^Letter:] > r;

[:^Letter:] { l[·.]l > l;
l[·.]l } [:^Letter:] > l;

::Null;

[:^Letter:] { y > i;
[^n] { y > i;
`;
