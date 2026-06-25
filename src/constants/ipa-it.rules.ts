export const ipaItRules = `
::Null;

[ʕʔˈ̇ˌ̧ːˠˤ˥˧˩̝̟̥̩̪̯̃̊͡ʰʱʲʷʼ] > ;

::Null;

[ɑɐæʌăâ] > a;
[ɛɘəɚɜɝẽêę] > e;
[yɪɨĩʏjʝ] > i;
[ɔɵɒœõôøơɤ] > o;
[ʊʉɯũưɥw] > u;

::Null;

$front = [e i];

[k q x χ] } $front > ch;
[k q x χ] > c;
[ɡ ɢ ɣ] } $front > gh;
[ɡ ɢ ɣ] > g;
g } $front > gh;
tʃ } $front > c;
tʃ > ci;
č } $front > c;
č > ci;
c } [^e i] > ci;
dʒ } $front > g;
dʒ > gi;
ɟ } $front > g;
ɟ > gi;
[ʃ ʂ ɕ ç] } $front > sc;
[ʃ ʂ ɕ ç] > sci;
[ʒ ʐ ʑ ž] } $front > g;
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
`;
