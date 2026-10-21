export const csIpaRules = `
::Lower;
::NFC;

ch > x;

ou > oʊ̯;
au > aʊ̯;
eu > ɛʊ̯;

dě > d͡ʑɛ;
tě > t͡ɕɛ;
ně > ɲɛ;
mě > mɲɛ;
bě > bjɛ;
pě > pjɛ;
vě > vjɛ;
fě > fjɛ;

d } [ií] > d͡ʑ;
t } [ií] > t͡ɕ;
n } [ií] > ɲ;

dž > d͡ʒ;
dz > d͡z;

[bcčdďfgh{ch}jklmnňpqrřsštťvwxzž] { r } [bcčdďfgh{ch}jklmnňpqrřsštťvwxzž] > r̩;
[bcčdďfgh{ch}jklmnňpqrřsštťvwxzž] { r } [^[:L:][:M:]] > r̩;
[bcčdďfgh{ch}jklmnňpqrřsštťvwxzž] { l } [bcčdďfgh{ch}jklmnňpqrřsštťvwxzž] > l̩;
[bcčdďfgh{ch}jklmnňpqrřsštťvwxzž] { l } [^[:L:][:M:]] > l̩;

b } [^[:L:][:M:]] > p;
d } [^[:L:][:M:]] > t;
ď } [^[:L:][:M:]] > t͡ɕ;
g } [^[:L:][:M:]] > k;
z } [^[:L:][:M:]] > s;
ž } [^[:L:][:M:]] > ʃ;
h } [^[:L:][:M:]] > x;
v } [^[:L:][:M:]] > f;
ř } [^[:L:][:M:]] > r̝̊;

b } [ptťksšfcčx] > p;
d } [ptťksšfcčx] > t;
ď } [ptťksšfcčx] > t͡ɕ;
g } [ptťksšfcčx] > k;
z } [ptťksšfcčx] > s;
ž } [ptťksšfcčx] > ʃ;
h } [ptťksšfcčx] > x;
v } [ptťksšfcčx] > f;
ř } [ptťksšfcčx] > r̝̊;
[ptťksšfcčx] { ř > r̝̊;

a > a;
á > aː;
b > b;
[:L:] { css > ks;
c > t͡s;
č > t͡ʃ;
d > d;
ď > d͡ʑ;
e > ɛ;
é > ɛː;
ě > jɛ;
f > f;
g > ɡ;
h > ɦ;
i > ɪ;
í > iː;
j > j;
k > k;
l > l;

m } [fv] > ɱ;
m > m;

n } [gkx] > ŋ;
n > n;
ň > ɲ;

o > o;
ó > oː;
p > p;
q > k;
r > r;
ř > r̝;
s > s;
š > ʃ;
t > t;
ť > t͡ɕ;
u > u;
ú > uː;
ů > uː;
v > v;
w > v;
x > ks;
y > ɪ;
ý > iː;
z > z;
ž > ʒ;
`;
