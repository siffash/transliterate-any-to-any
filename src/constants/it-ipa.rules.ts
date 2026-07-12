export const itIpaRules = `
::Lower;

à > a;
è > ɛ;
é > e;
ì > i;
í > i;
ò > ɔ;
ó > o;
ù > u;
ú > u;

[aàeèéiìíoòóuùúɛɔ] { sci } [aàeèéiìíoòóuùúɛɔ] > ʃː;
sci } [aàeèéiìíoòóuùúɛɔ] > ʃ;
[aàeèéiìíoòóuùúɛɔ] { sc } [eèéiìíɛ] > ʃː;
sc } [eèéiìíɛ] > ʃ;
sci > ʃi;

[aàeèéiìíoòóuùúɛɔ] { gli } [aàeèéiìíoòóuùúɛɔ] > ʎː;
gli } [aàeèéiìíoòóuùúɛɔ] > ʎ;
[aàeèéiìíoòóuùúɛɔ] { gli > ʎː i;
gli > ʎi;

[aàeèéiìíoòóuùúɛɔ] { gn > ɲː;
gn > ɲ;

cci } [aàeèéiìíoòóuùúɛɔ] > tːʃ;
cc } [eèéiìíɛ] > tːʃ;
ci } [aàeèéiìíoòóuùúɛɔ] > tʃ;
c } [eèéiìíɛ] > tʃ;

ggi } [aàeèéiìíoòóuùúɛɔ] > dːʒ;
gg } [eèéiìíɛ] > dːʒ;
gi } [aàeèéiìíoòóuùúɛɔ] > dʒ;
g } [eèéiìíɛ] > dʒ;

ch > k;
gh > g;

bb > bː;
cc > kː;
dd > dː;
ff > fː;
gg > gː;
ll > lː;
mm > mː;
nn > nː;
pp > pː;
qq > kː;
cq > kː;
rr > rː;
ss > sː;
tt > tː;
vv > vː;
zz > tːs;

n } [pb{pː}{bː}] > m;
n } [fv{fː}{vː}] > ɱ;
n } c [aàoòóuùúhrl] > ŋ;
n } g [aàoòóuùúhrl] > ŋ;
n } [kq] > ŋ;

[aàeèéiìíoòóuùúɛɔ] { s } [aàeèéiìíoòóuùúɛɔ] > z;
s } [bdgjlmnrvwz{dʒ}ɲʎ] > z;

[aàeèéiìíoòóuùúɛɔ] { z } [aàeèéiìíoòóuùúɛɔ] > tːs;

qu } [aàeèéiìíoòóuùúɛɔ] > kw;
gu } [aàeèéiìíoòóuùúɛɔ] > gw;

i } [aàeèéiìíoòóuùúɛɔ] > j;
u } [aàeèéiìíoòóuùúɛɔ] > w;

\\' > ;
b > b;
c > k;
d > d;
f > f;
g > g;
h > ;
j > j;
k > k;
l > l;
m > m;
n > n;
p > p;
q > k;
r > r;
s > s;
t > t;
v > v;
w > w;
x > ks;
y > i;
z > ts;
`;
