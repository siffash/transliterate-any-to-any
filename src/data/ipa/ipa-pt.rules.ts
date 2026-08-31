export const ipaPtRules = `
::Null;

[͈̚ʔʕʰʱʲʷ'’ʼˈ̇ˌ̧ːˠˤ˥˧˩̝̟̥̩̪̯̃̊͡] > ;

::Null;

[gɡɟɢɣɰ] } [eiêęĩɘəɚɛɜɝɨɪʏẽyjʝ] > gu;
[ɡɟɢɣɰ] > g;

[ckq] } [eiêęĩɘəɚɛɜɝɨɪʏẽyjʝ] > qu;
[kq] > c;

ẽ } [pbɓmɱ] > em;
ẽ } [^[:L:][:M:]] > em;
ẽ > en;

ĩ } [pbɓmɱ] > im;
ĩ } [^[:L:][:M:]] > im;
ĩ > in;

ũ } [pbɓmɱ] > um;
ũ } [^[:L:][:M:]] > um;
ũ > un;

[aeiouâêôõæøăęĩœũơưɐɑɒɔɘəɚɛɜɝɨɪɯɵʉʊʌʏẽywɤɥjʝ] { [sθ] } [aeiouâêôõæøăęĩœũơưɐɑɒɔɘəɚɛɜɝɨɪɯɵʉʊʌʏẽywɤɥjʝ] > ss;
[aeiouâêôõæøăęĩœũơưɐɑɒɔɘəɚɛɜɝɨɪɯɵʉʊʌʏẽywɤɥjʝ] { [rʀʁħɦɧχhx] } [aeiouâêôõæøăęĩœũơưɐɑɒɔɘəɚɛɜɝɨɪɯɵʉʊʌʏẽywɤɥjʝ] > rr;

ɓ > b;
č > ch;
[ďɖɗð] > d;
[ħɦɧχhx] > r;
[ŋɳ] > n;
ɲ > nh;
[ɫɭ] > l;
ʎ > lh;
ɱ > m;
[ʀʁɹɽɾ] > r;
[ɕʂʃ] > x;
[ťʈ] > t;
[ʋβ] > v;
[wɥ] > u;
[yʏʝj] > i;
[ʐʑʒž] > j;
θ > s;
ɸ > f;

[ɑɐɒăæʌ] > a;
[ɚɝ] > er;
[ɛəɘɜę] > e;
[ɪɨ] > i;
[ơøœɵɔɤ] > o;
[ưʉʊɯ] > u;

::Null;

ç } [eéêiíy] > c;
ç } [bcdfghjklmnpqrstvwxz] > s;
[bcdfghjklmnpqrstvwxz] { ç > s;
[^[:L:][:M:]] { ç > s;
ç } [^[:L:][:M:]] > s;

[^[:L:][:M:]] { rr > r;
rr } [^[:L:][:M:]] > r;
[bcdfghjklmnpqstvwxz] { rr > r;
rr } [bcdfghjklmnpqstvwxz] > r;

[^[:L:][:M:]] { ss > s;
ss } [^[:L:][:M:]] > s;
[bcdfghjklmnpqrtvwxz] { ss > s;
ss } [bcdfghjklmnpqrtvwxz] > s;
`;
