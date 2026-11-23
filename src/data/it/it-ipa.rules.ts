export const itIpaRules = `
::Lower;
::NFC;

à > a;
è > ɛ;
é > e;
[ìíy] > i;
ò > ɔ;
ó > o;
[ùú] > u;

[aàeèéiìíoòóuùúɛɔ] { sci } [aàeèéiìíoòóuùúɛɔ] > ʃː;
sci } [aàeèéiìíoòóuùúɛɔ] > ʃ;
[aàeèéiìíoòóuùúɛɔ] { sc } [eèéiìíɛ] > ʃː;
sc } [eèéiìíɛ] > ʃ;

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
c [cq] > kː;
dd > dː;
ff > fː;
gg > gː;
ll > lː;
mm > mː;
nn > nː;
pp > pː;
qq > kː;
rr > rː;
ss > sː;
tt > tː;
vv > vː;
zz > tːs;

n } [pb{pː}{bː}] > m;
n } [fv{fː}{vː}] > ɱ;
n } [cg] [aàoòóuùúhrl] > ŋ;
n } [kq] > ŋ;

[aàeèéiìíoòóuùúɛɔ] { s } [aàeèéiìíoòóuùúɛɔ] > z;
s } [bdgjlmnrvwz{dʒ}ɲʎ] > z;

[aàeèéiìíoòóuùúɛɔ] { z } [aàeèéiìíoòóuùúɛɔ] > tːs;

qu } [aàeèéiìíoòóuùúɛɔ] > kw;
gu } [aàeèéiìíoòóuùúɛɔ] > gw;

[^[:L:][:M:]] { i } [aàeèéiìíoòóuùúɛɔ] > j;
u } [aàeèéiìíoòóuùúɛɔ] > w;

ph > f;
[\\'h] > ;
b > b;
[ckq] > k;
d > d;
f > f;
g > g;
j > j;
l > l;
m > m;
n > n;
p > p;
r > r;
s > s;
t > t;
v > v;
w > w;
x > ks;
z > ts;
`;
