export const ipaDeRules = `
::Null;

[͈̚ʔʕʰʱ'’ʼˈ̇ˌ̧ːˠˤ˥˧˩̝̟̥̩̪̯̃̊͡] > ;

::Null;

[âăɐɑɒʌ] > a;
[æɛ] > ä;
[êęẽɘəɜ] > e;
[ɚɝ] > er;
[ĩɨɪ] > i;
[ôõơɔɤɵ] > o;
[øœ] > ö;
[ũưʉʊɯ] > u;
[yʏ] > ü;
ɓ > b;
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
z > s;
[ťʈθ] > t;
[vʋʷβ] > w;
[ɕɧʂʃʒžʐʑ] > sch;
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
dsch { dsch > ;
tsch { tsch > ;
`;
