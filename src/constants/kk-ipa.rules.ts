export const kkIpaRules = `
::Lower;

tş > t͡ɕ;
ts > t͡s;
ch > t͡ɕ;
sh > ɕ;

n } [b p m] > m;
n } [g k ğ q] > ŋ;
z } [s ş] > s;

b } [:^Letter:] > p;
d } [:^Letter:] > t;
g } [:^Letter:] > k;
ğ } [:^Letter:] > q;
v } [:^Letter:] > f;
z } [:^Letter:] > s;
j } [:^Letter:] > ɕ;

ó > ɵ;
ú > ʉ;
ù > ʉ;
í > ɪ;
ì > ɪ;
ý > w;
i } [a ä e ı o ö u ū ü y] > j;
[ɑ æ e ɪ ɘ o ɵ ʊ ʉ ə] { i > j;
u } [a ä e i ı o ö ū ü y] > w;
[ɑ æ e ɪ ɘ o ɵ ʊ ʉ ə] { u > w;

a > ɑ;
ä > æ;
b > b;
c > t͡s;
d > d;
[:^Letter:] { e > je;
e > e;
f > f;
g > ɡ;
ğ > ʁ;
h > χ;
x > χ;
ı > ɘ;
i > ɪ;
j > ʒ;
k > k;
l > l;
m > m;
n > n;
ñ > ŋ;
o > o;
ö > ɵ;
p > p;
q > q;
r > r;
s > s;
ş > ɕ;
t > t;
u > ʊ;
ū > ʊ;
ü > ʉ;
v > v;
w > w;
y > ə;
z > z;
`;
