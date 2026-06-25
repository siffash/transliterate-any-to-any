export const ipaViRules = `
::Null;

$frontVowel = [ieêyɪɨĩęɛæœøʏɵʉ];

[ʔʕˈˌːˠˤ˥˧˩̝̟̥̩̪̯̃̊͡ʼ̧̇] > ;

::Null;

ŋ } $frontVowel > ngh;
ŋ > ng;
[gɡɢɟɣʁ] } $frontVowel > gh;
[gɡɢɟɣʁ] > g;
[kq] } $frontVowel > k;
[kq] } [wʷuʊũ] > q;
[kq] > c;
[:^Letter:] { [jʝ] > gi;
[jʝ] > y;
[:^Letter:] { [wɥ] > v;
[wɥ] > o;
[ɑɐæ] > a;
[ɛęẽ] > e;
[ɪɨĩʲ] > i;
[ɔɒõ] > o;
[ʊũʷ] > u;
[ɯ] > ư;
[ɤʌəɘɚɜɝ] > ơ;
[yʏøœɵʉ] > uy;
[ɓ] > b;
[cčç] > ch;
[dɖďɗð] > đ;
[f] > ph;
[ɦɧħʰʱ] > h;
[ɫɭʎ] > l;
[ɱ] > m;
[ɳ] > n;
[ɲ] > nh;
[ɹɽɾʀʐ] > r;
[sɕʃθ] > x;
[ʂ] > s;
[ťʈ] > t;
[ʋβ] > v;
[xχ] > kh;
[zʑʒž] > d;
`;
