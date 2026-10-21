export const slIpaRules = `
::Lower;
::NFC;

dž > d͡ʒ;
lj > ʎ;
nj > ɲ;

z } [ptksšcčfhx] > s;
ž } [ptksšcčfhx] > ʃ;

z } [^[:L:][:M:]] > s;
ž } [^[:L:][:M:]] > ʃ;

[bcčdfghjklmnpqrsštvwxzžʋʎɲ] { r } [bcčdfghjklmnpqrsštvwxzžʋʎɲ] > r̩;
[bcčdfghjklmnpqrsštvwxzžʋʎɲ] { ŕ } [bcčdfghjklmnpqrsštvwxzžʋʎɲ] > r̩ː;
[bcčdfghjklmnpqrsštvwxzžʋʎɲ] { r̀ } [bcčdfghjklmnpqrsštvwxzžʋʎɲ] > r̩;
[bcčdfghjklmnpqrsštvwxzžʋʎɲ] { r } [^[:L:][:M:]] > r̩;
[bcčdfghjklmnpqrsštvwxzžʋʎɲ] { ŕ } [^[:L:][:M:]] > r̩ː;
[bcčdfghjklmnpqrsštvwxzžʋʎɲ] { r̀ } [^[:L:][:M:]] > r̩;
[^[:L:][:M:]] { r } [bcčdfghjklmnpqrsštvwxzžʋʎɲ] > r̩;
[^[:L:][:M:]] { ŕ } [bcčdfghjklmnpqrsštvwxzžʋʎɲ] > r̩ː;
[^[:L:][:M:]] { r̀ } [bcčdfghjklmnpqrsštvwxzžʋʎɲ] > r̩;

[^[:L:][:M:]] { v } r > ʋ;
[^[:L:][:M:]] { v } l > ʋ;
v } [bcčdfghjklmnpqrsštvwxzžʋʎɲ] > w;
v } [^[:L:][:M:]] > w;

b > b;
[:L:] { css > ks;
c > t͡s;
č > t͡ʃ;
d > d;
f > f;
g > ɡ;
h > x;
j > j;
k > k;
l > l;
m > m;
n > n;
p > p;
q > k;
r > ɾ;
s > s;
š > ʃ;
t > t;
v > ʋ;
w > ʋ;
x > ks;
z > z;
ž > ʒ;

á > aː;
â > aː;
à > a;
a > a;
é > eː;
ê > ɛː;
è > ɛ;
ẹ > e;
e > ɛ;
í > iː;
î > iː;
ì > i;
i > i;
y > i;
ó > oː;
ô > ɔː;
ò > ɔ;
ọ > o;
o > o;
ú > uː;
û > uː;
ù > u;
u > u;
`;
