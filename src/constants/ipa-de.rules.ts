export const ipaDeRules = `
::Null;

[͈̚ʔʕʰʱʼˈ̇ˌ̧ːˠˤ˥˧˩̝̟̥̩̪̯̃̊͡] > ;

::Null;

[:^Letter:] { ʃ } [pt] > s;
[âăɐɑɒʌ] > a;
[æɛ] > ä;
[êęẽɘəɜ] > e;
[ɚɝ] > er;
[ĩɨɪ] > i;
[ôõơɔɤɵ] > o;
[øœ] > ö;
[ũưʉʊɯ] > u;
[yʏ] > ü;
[ɓβ] > b;
[cq] > k;
[çxχ] > ch;
[č] > tsch;
[ďðɖɗ] > d;
[ɟɡɢɣɰ] > g;
[ħɦ] > h;
[ɥʝʲ] > j;
[ɫɭ] > l;
[ʎ] > lj;
[ɱ] > m;
[ɳ] > n;
[ɲ] > nj;
[ŋ] > ng;
[ɾʀʁɹɽ] > r;
[zʐʑ] > s;
[ťʈθ] > t;
[vʋʷ] > w;
[ɕɧʂʃʒž] > sch;
ts > z;
ɸ > f;

::Null;

[:^Letter:] { ß > ss;
[:^Letter:] { ck > k;

::Null;

[aeiouäöüy] [aeiouäöüy] { tz > z;
[aeiouäöüy] [aeiouäöüy] { ck > k;

::Null;

[bcdfghjklmnpqrstvwxzß] { tz > z;
[bcdfghjklmnpqrstvwxzß] { ck > k;

::Null;

q } [^u] > k;
q } [:^Letter:] > k;

::Null;

w { w > ;
y { y > ;
j { j > ;
`;
