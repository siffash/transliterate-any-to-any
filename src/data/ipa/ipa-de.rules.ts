export const ipaDeRules = `
::Null;

[ʃʂ] { [ʃʂ] > ;
[ʒʐ] { [ʒʐ] > ;

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
[yʏɥ] > ü;
ɓ > b;
[cq] > k;
[çxχ] > ch;
[č] > tsch;
[ďðɖɗ] > d;
[ɟɡɢɣɰ] > g;
[ħɦ] > h;
[ʝʲ] > j;
[ɫɭ] > l;
[ʎ] > lj;
[ɱ] > m;
[ɳ] > n;
[ɲ] > nj;
ŋ } [ɡgkq] > n;
[ŋ] > ng;
[ɾʀʁɹɽ] > r;
z > s;
[ťʈθ] > t;
[vʋʷβ] > w;
[ɕɧʂʃʒžʐʑ] > sch;
ts > z;
ɸ > f;



::Null;

[^[:L:][:M:]] { ß > ss;
[^[:L:][:M:]] { ck > k;

[aeiouäöüy] [aeiouäöüy] { tz > z;
[aeiouäöüy] [aeiouäöüy] { ck > k;

[bcdfghjklmnpqrstvwxzß] { tz > z;
[bcdfghjklmnpqrstvwxzß] { ck > k;

q } [^u] > k;
q } [^[:L:][:M:]] > k;

w { w+ > ;
y { y+ > ;
j { j+ > ;
dsch { (dsch)+ > ;
tsch { (tsch)+ > ;
`;
