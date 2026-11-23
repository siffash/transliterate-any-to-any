export const slIpaRules = `
::Lower;
::NFC;

dž > d͡ʒ;
lj > ʎ;
nj > ɲ;

[tsc] { z } [^[:L:][:M:]] > s;

[bcčdfghjklmnpqrsštvwxzžʋʎɲ] { r } [bcčdfghjklmnpqrsštvwxzžʋʎɲ] > r̩;
[bcčdfghjklmnpqrsštvwxzžʋʎɲ] { ŕ } [bcčdfghjklmnpqrsštvwxzžʋʎɲ] > r̩ː;
[bcčdfghjklmnpqrsštvwxzžʋʎɲ] { r̀ } [bcčdfghjklmnpqrsštvwxzžʋʎɲ] > r̩;
[bcčdfghjklmnpqrsštvwxzžʋʎɲ] { r } [^[:L:][:M:]] > r̩;
[bcčdfghjklmnpqrsštvwxzžʋʎɲ] { ŕ } [^[:L:][:M:]] > r̩ː;
[bcčdfghjklmnpqrsštvwxzžʋʎɲ] { r̀ } [^[:L:][:M:]] > r̩;
[^[:L:][:M:]] { r } [bcčdfghjklmnpqrsštvwxzžʋʎɲ] > r̩;
[^[:L:][:M:]] { ŕ } [bcčdfghjklmnpqrsštvwxzžʋʎɲ] > r̩ː;
[^[:L:][:M:]] { r̀ } [bcčdfghjklmnpqrsštvwxzžʋʎɲ] > r̩;

b > b;
[:L:] { css > ks;
c > t͡s;
č > t͡ʃ;
d > d;
f > f;
g > ɡ;
h > x;
j > j;
[kq] > k;
l > l;
m > m;
n > n;
p > p;
r > ɾ;
s > s;
š > ʃ;
t > t;
[vw] > ʋ;
x > ks;
z > z;
ž > ʒ;

[áâ] > aː;
[àa] > a;
é > eː;
ê > ɛː;
[èe] > ɛ;
ẹ > e;
[íî] > iː;
[ìiy] > i;
ó > oː;
ô > ɔː;
ò > ɔ;
[ọo] > o;
[úû] > uː;
[ùu] > u;
`;
