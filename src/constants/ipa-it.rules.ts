export const ipaItRules = `
::Null;

[͈̚ʕʔˈ̇ˌ̧ːˠˤ˥˧˩̝̟̥̩̪̯̃̊͡ʰʱʲʷʼ] > ;

::Null;

[ɑɐæʌăâ] > a;
[ɛɘəɚɜɝẽêę] > e;
[yɪɨĩʏjʝ] > i;
[ɔɵɒœõôøơɤ] > o;
[ʊʉɯũưɥw] > u;

::Null;

$front_it = [e i];

[k q x χ] } $front_it > ch;
[k q x χ] > c;
[ɡ ɢ ɣ ɰ] } $front_it > gh;
[ɡ ɢ ɣ ɰ] > g;
g } $front_it > gh;
tʃ } $front_it > c;
tʃ > ci;
č } $front_it > c;
č > ci;
c } [^e i] > ci;
dʒ } $front_it > g;
dʒ > gi;
ɟ } $front_it > g;
ɟ > gi;
[ʃ ʂ ɕ ç] } $front_it > sc;
[ʃ ʂ ɕ ç] > sci;
[ʒ ʐ ʑ ž] } $front_it > g;
[ʒ ʐ ʑ ž] > gi;
ʎ } i > gl;
ʎ > gli;
ɲ > gn;
[ʈ θ ť] > t;
[ɖ ɗ ď ð] > d;
ɓ > b;
β > v;
[ɫ ɭ] > l;
[ɽ ɾ ʀ ʁ ɹ] > r;
[ŋ ɳ] > n;
ɱ > m;
ʋ > v;
[ɦ ɧ ħ] > h;
ɸ > f;

::Null;

[cg] { i } [eèéiìí] > ;
g n { i } [aàáeèéiìíoòóuùú] > ;
g l { i } [iìí] > ;
`;
