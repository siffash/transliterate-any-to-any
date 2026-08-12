export const ipaNlRules = `
::Null;

b } [:^Letter:] > p;
d͡ʒ > dj;
d͡z > dz;
d̪ > t;
d } [:^Letter:] > t;
v } [:^Letter:] > f;
z } [:^Letter:] > s;
ẽ > en;
ĩ > in;
õ > on;
ũ > oen;
[aâæăɐɑʌ] ː > aa;
[eêęẽɘəɛɜ] ː > ee;
[iĩɨɪ] ː > ie;
[oôõɒɔɤơ] ː > oo;
[aâæăɐɑʌeêęẽɘəɛɜoôõɒɔɤơ] { [uũưɯʉʊ] > u;
[uũưʉʊɯ] ː > oe;
y } [aâæăɐɑʌeêęẽɘəɛɜiĩɨɪoôõɒɔɤơuũưɯʉʊyʏøœɵ] > j;
[yʏ] ː > uu;
[øœɵ] ː > eu;
[ɚɝ] > er;
[çχx] > ch;
[ðď] > d;
č > tsj;
[ħɦ] > h;
ŋ > ng;
[ťʈθ] > t;
ɓ > b;
[ɕɧʂʃ] > sj;
[ʐʑʒž] > zj;
ʎ > lj;
ɟ > dj;
[ɖɗ] > d;
[ɡɢɣɰ] > g;
[ɥʋ] > w;
[ɫɭ] > l;
ɱ > m;
ɲ > nj;
ɳ > n;
[ɹɽɾʀʁ] > r;
ʝ > j;
β > v;
[cq] > k;
ɸ > f;
[âæăɐɑʌ] > a;
[êęẽɘəɛɜ] > e;
[ĩɨɪ] > i;
[ôõɒɔɤơ] > o;
[uũưɯʉʊ] > oe;
[yʏ] > u;
[øœɵ] > eu;
̃ > n;

[͈̚ʔʕʰʱʲʷ'’ʼˈ̇ˌ̧ːˠˤ˥˧˩̝̟̥̩̪̯̊͡] > ;

::Null;

a { a } [:^Letter:] > ;
o { o } [:^Letter:] > ;
u { u } [:^Letter:] > ;

ch { ch > ;
sj { sj > ;
zj { zj > ;
ng { ng > ;

tsj { tsj > ;
dzj { dzj > ;

aa { a > ;
ee { e > ;
ii { i > ;
oo { o > ;
uu { u > ;
`;
