export const ipaCaRules = `
::Null;

[͈̚ʰʱʲʷʼˈ̇ˌ̧ːˠˤ˥˧˩̝̟̥̩̪̯̃̊͡] > ;

::Null;

[âæăɐɑɒ] > a;
[êęẽɛɜɝɘəɚ] > e;
[ĩɨɪ] > i;
[ôõøœơɔɵɤʌ] > o;
[ũưʉʊɯʏɥy] > u;

t [ʃʂɕχ] } [:^Letter:] > ig;
t [ʃʂɕχ] > tx;
č } [:^Letter:] > ig;
č > tx;

d [ʒžʐʑ] } [ei] > tg;
d [ʒžʐʑ] > tj;

[aeiou] { [ʃʂɕχx] > ix;
[ʃʂɕχ] > x;

[ʒžʐʑʝ] } [ei] > g;
[ʒžʐʑʝ] > j;

k } [ei] > qu;
k > c;

[ɡɟɢɣɰ] } [ei] > gu;
[ɡɟɢɣɰ] > g;
g } [ei] > gu;

[ɲɳ] > ny;
ʎ > ll;
[ɫɭ] > l;
ŋ > ng;
ɱ > m;

[ɓβ] > b;
[ðɖɗď] > d;
[ʈť] > t;
[ɹɽɾʀʁ] > r;
ʋ > v;
θ > z;
[ħɦɧʔʕ] > h;

j > i;
w > u;
ɸ > f;

::Null;

n } [bpm] > m;
m } [fv] > n;

::Null;

[:^Letter:] { ç } [eiéíè] > c;
[:^Letter:] { ç > s;
ç } [eiéíè] > c;

::Null;

[:^Letter:] { ss > s;
ss } [:^Letter:] > s;

[:^Letter:] { rr > r;
rr } [:^Letter:] > r;

[:^Letter:] { l·l > l;
l·l } [:^Letter:] > l;

[:^Letter:] { l.l > l;
l.l } [:^Letter:] > l;

::Null;

t { g } [aàoòóuúü] > j;
t { j } [eéèiíï] > g;

::Null;

[:^Letter:] { y > i;
[^n] { y > i;

::Null;

[:^Letter:] { ix > x;
[bcdfghjklmnpqrstvwxyzç] { ix > x;
`;
