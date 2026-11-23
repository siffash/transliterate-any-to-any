export const ipaNlRules = `
::Null;

d͡ʒ > dj;
d͡z > dz;
d̪ > d;
ẽ > en;
ĩ > in;
õ > on;
ũ > oen;
[aâæăɐɑʌ] ː > aa;
[eêęɘəɛɜ] ː > ee;
[iɨɪ] ː > ie;
[oôɒɔɤơ] ː > oo;
[aâæăɐɑʌeêęẽɘəɛɜoôõɒɔɤơ] { [uưɯʉʊ] > u;
[uưʉʊɯ] ː > oe;
y } [aâæăɐɑʌeêęẽɘəɛɜiĩɨɪoôõɒɔɤơuũưɯʉʊyʏøœɵ] > j;
[yʏ] ː > uu;
[øœɵ] ː > eu;
[ɚɝ] > er;
[çχx] > ch;
[ðďɖɗ] > d;
č > tsj;
[ħɦ] > h;
ŋ } [ɡgkq] > n;
ŋ > ng;
[ťʈθ] > t;
ɓ > b;
[ɕɧʂʃ] > sj;
[ʐʑʒž] > zj;
ʎ > lj;
ɟ > dj;
[ɡɢɣɰ] > g;
[ɥʋ] > w;
[ɫɭ] > l;
ɱ > m;
ɲ > nj;
[ɳ̃] > n;
[ɹɽɾʀʁ] > r;
ʝ > j;
β > v;
[cq] > k;
ɸ > f;
[âæăɐɑʌ] > a;
[êęɘəɛɜ] > e;
[ɨɪ] > i;
[ôɒɔɤơ] > o;
[uưɯʉʊ] > oe;
[yʏ] > u;
[øœɵ] > eu;

[͈̚ʔʕʰʱʲʷ'’ʼˈ̇ˌ̧ːˠˤ˥˧˩̝̟̥̩̪̯̊͡] > ;

::Null;

a { a+ } [^[:L:][:M:]] > ;
o { o+ } [^[:L:][:M:]] > ;
u { u+ } [^[:L:][:M:]] > ;

ch { (ch)+ > ;
sj { (sj)+ > ;
zj { (zj)+ > ;
ng { (ng)+ > ;

tsj { (tsj)+ > ;
dzj { (dzj)+ > ;

aa { a+ > ;
ee { e+ > ;
ii { i+ > ;
oo { o+ > ;
uu { u+ > ;

::Null;

[bcdfghklmnpqrstvwxzBCDFGHKLMNPQRSTVWXZ] [jJ] { [jJ]+ > ;
`;
