export const mtIpaRules = `
::Lower;
$v = [aeiou];
$cons = [bcdfghjklmnpqrstvwxzċġħż];
$voicedfinal = [bdgġvżz];

[:^Letter:] { m } $cons > im;
[:^Letter:] { n } $cons > in;
[:^Letter:] { s } $cons > is;
[:^Letter:] { x } $cons > iʃ;

għi > ɐɪ̯;
għaj > ɐːɪ̯;
għej > ɛɪ̯;
għaw > ɐʊ̯;
għew > ɛʊ̯;
għoj > ɔɪ̯;
għum > ɔʊ̯m;
għa > ɐː;
għe > ɛː;
għo > ɔː;
għu > ʊː;
għ } $v > ɐː;

agħ > ɐː;
egħ > ɛː;
igħ > iː;
ogħ > ɔː;
ugħ > uː;

ch > k;
ph > f;
sh > ʃ;
th > t;
għh > ħː;
{ għ } [:^Letter:] > ħ;
{ għ } $ > ħ;
{ h } [:^Letter:] > ħ;
{ h } $ > ħ;

ah > ɐː;
eh > ɛː;
ih > iː;
oh > ɔː;
uh > uː;

aħ > ɐːħ;
eħ > ɛːħ;
iħ > iːħ;
oħ > ɔːħ;
uħ > uːħ;

aq > ɐːʔ;
eq > ɛːʔ;
iq > iːʔ;
oq > ɔːʔ;
uq > uːʔ;

ie > ɪː;

aj > ɐɪ̯;
aw > ɐʊ̯;
ej > ɛɪ̯;
ew > ɛʊ̯;
iw > ɪʊ̯;
oj > ɔɪ̯;
ow > ɔʊ̯;
au > ɐʊ̯;
ou > ɐʊ̯;

bb > bː;
ċċ > t͡ʃː;
dd > dː;
ff > fː;
ġġ > d͡ʒː;
gg } [e i y ɛ ɪ] > d͡ʒː;
gg > ɡː;
ħħ > ħː;
kk > kː;
ll > lː;
mm > mː;
nn > nː;
pp > pː;
qq > ʔː;
rr > rː;
ss > sː;
tt > tː;
vv > vː;
ww > wː;
xx > ʃː;
jj > jː;
zz > t͡sː;
żż > zː;

{ b } [:^Letter:] > p;
{ b } $ > p;
{ d } [:^Letter:] > t;
{ d } $ > t;
{ g } [e i y ɛ ɪ] > d͡ʒ;
{ g } [:^Letter:] > k;
{ g } $ > k;
{ ġ } [:^Letter:] > t͡ʃ;
{ ġ } $ > t͡ʃ;
{ v } [:^Letter:] > f;
{ v } $ > f;
{ ż } [:^Letter:] > s;
{ ż } $ > s;
{ z } [:^Letter:] > t͡s;
{ z } $ > t͡s;

a > ɐ;
e > ɛ;
i > ɪ;
o > ɔ;
u > ʊ;

c } [e i y ɛ ɪ] > s;
c > k;
y > ɪ;
ċ > t͡ʃ;
ġ > d͡ʒ;
ħ > ħ;
q > ʔ;
x > ʃ;
ż > z;
z > t͡s;

b > b;
d > d;
f > f;
g > ɡ;
h > ;
j > j;
k > k;
l > l;
m > m;
n > n;
p > p;
r > r;
s > s;
t > t;
v > v;
w > w;
`;
