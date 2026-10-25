export const ipaSqRules = `
::Null;

t͡ʃ > ç;
t͡ʂ > ç;
t͡ɕ > ç;
t͡s > c;
d͡ʒ > xh;
d͡ʐ > xh;
d͡ʑ > xh;
d͡z > x;
tʃ > ç;
tʂ > ç;
tɕ > ç;
ts > c;
dʒ > xh;
dʐ > xh;
dʑ > xh;
dz > x;
ŋ [ɡɢɣɰg] > ng;
ŋ > ng;
[cťç] > q;
[ħɦʕχx] > h;

[͈̚ʔʰʱʲʷ'’ʼˈ̇ˌ̧ːˠˤ˥˧˩̝̟̥̩̪̯̃̊͡] > ;

::Null;

[ɐɑɒâăʌ] > a;
[æɛẽęê] > e;
[ɚɝ] > ër;
[əɘɜɤơɯ] > ë;
[ɪĩɨ] > i;
[ɔôõøœɵ] > o;
[ʊʉũ] > u;
[ʏư] > y;
ɓ > b;
[ɖɗ] > d;
ď > gj;
ð > dh;
θ > th;
ɟ > gj;
[ɡɢɣɰ] > g;
[ʝɥ] > j;
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
