export const ipaSqRules = `
::Null;

t ͡ [ʃʂɕ] > ç;
t͡s > c;
d ͡ [ʒʐʑ] > xh;
d͡z > x;
t [ʃʂɕ] > ç;
ts > c;
d [ʒʐʑ] > xh;
dz > x;
ŋ [ɡɢɣɰg] > ng;
ŋ > ng;
[cťç] > q;
[ħɦχx] > h;

[͈̚ʔʕʰʱʲʷ'’ʼˈ̇ˌ̧ːˠˤ˥˧˩̝̟̥̩̪̯̃̊͡] > ;

::Null;

[ɐɑɒâăʌ] > a;
[æɛẽęê] > e;
[ɚɝ] > ër;
[əɘɜɤơɯ] > ë;
[ɪĩɨ] > i;
[ɔôõøœɵ] > o;
[ʊʉũ] > u;
[ʏưɥ] > y;
ɓ > b;
[ɖɗ] > d;
[ďɟ] > gj;
ð > dh;
θ > th;
[ɡɢɣɰ] > g;
ʝ > j;
[ɫɭ] > l;
ɱ > m;
ɲ > nj;
ɳ > n;
q > k;
[ʀʁɹɽɾ] > r;
[ʂʃɕɧ] > sh;
ʈ > t;
[ʋwβ] > v;
ʎ > lj;
[ʐʑʒž] > zh;
č > ç;
ɸ > f;

::Null;

[^[:L:][:M:]] { i } [aeëiouy] > j;

dh { dh > ;
gj { gj > ;
nj { nj > ;
sh { sh > ;
th { th > ;
xh { xh > ;
zh { zh > ;

b { b+ > ;
c { c+ > ;
ç { ç+ > ;
d { d+ > ;
f { f+ > ;
g { g+ > ;
h { h+ > ;
j { j+ > ;
k { k+ > ;
l { l+ > ;
m { m+ > ;
n { n+ > ;
p { p+ > ;
q { q+ > ;
r { r+ > ;
s { s+ > ;
t { t+ > ;
v { v+ > ;
x { x+ > ;
z { z+ > ;
`;
