export const mtIpaRules = `
::Lower;
::NFC;

[àáâ] > a;
[èéê] > e;
[ìíî] > i;
[òóô] > o;
[ùúû] > u;
[[:L:][:M:]] { [\\'’] } [[:L:][:M:]] > ;

::Null;

għi > aɪ̯;
għaj > aːɪ̯;
għej > ɛɪ̯;
għaw > aʊ̯;
għew > ɛʊ̯;
għoj > ɔɪ̯;
għum > ɔʊ̯m;
għa > aː;
għe > ɛː;
għo > ɔː;
għu > ʊː;
għ } [aeiou] > aː;

agħ > aː;
egħ > ɛː;
igħ > iː;
ogħ > ɔː;
ugħ > uː;

cch > kː;
ch > k;
qu } [aeiou] > kw;
ph > f;
sh > ʃ;
th > t;
għh > ħː;
għ } [^[:L:][:M:]] > ħ;
h } [^[:L:][:M:]] > ħ;

ah > aː;
eh > ɛː;
ih > iː;
oh > ɔː;
uh > uː;

aħ > aːħ;
eħ > ɛːħ;
iħ > iːħ;
oħ > ɔːħ;
uħ > uːħ;

ie > ɪː;

a } [jw] [aeiou] > a;
e } [jw] [aeiou] > ɛ;
i } w [aeiou] > ɪ;
o } [jw] [aeiou] > ɔ;

aj > aɪ̯;
a [wu] > aʊ̯;
ej > ɛɪ̯;
ew > ɛʊ̯;
iw > ɪʊ̯;
oj > ɔɪ̯;
ow > ɔʊ̯;
ou > aʊ̯;

bb > bː;
ċċ > t͡ʃː;
dd > dː;
ff > fː;
ġġ > d͡ʒː;
gg } [eiyɛɪ] > d͡ʒː;
gg > ɡː;
ħħ > ħː;
kk > kː;
ll > lː;
mm > mː;
nn > nː;
pp > pː;
qq > ʔ;
rr > rː;
ss > sː;
tt > tː;
vv > vː;
ww > wː;
xx > ʃː;
jj > jː;
zz > t͡sː;
żż > zː;

sci } [aou] > ʃ;
sc } [eiy] > ʃ;
ci } [aou] > t͡ʃ;
gi } [aou] > d͡ʒ;
d͡ʒɪː { g } [^[:L:][:M:]] > d͡ʒ;
g } [eiyɛɪ] > d͡ʒ;
z } [^[:L:][:M:]] > t͡s;

a > a;
e > ɛ;
[iy] > ɪ;
o > ɔ;
u > ʊ;

c } [eiyɛɪ] > t͡ʃ;
[ck] > k;
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
l > l;
m > m;
n } [ckg] [^eiyɛɪ] > ŋ;
n } [ckg] [^[:L:][:M:]] > ŋ;
n } k > ŋ;
n > n;
p > p;
r > r;
s > s;
t > t;
v > v;
w > w;
`;
