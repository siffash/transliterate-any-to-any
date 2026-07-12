export const hrIpaRules = `
::Lower;

ts > t͡s;
dž > d͡ʒ;
lj > ʎ;
nj > ɲ;

{ d } [sšcčć] > t;
{ n } [kg] > ŋ;
{ n } [bp] > m;

[^aeioujy] { r } [^aeioujy] > r̩;
[:^Letter:] { r } [^aeioujy] > r̩;
[^aeioujy] { r } [:^Letter:] > r̩;
[:^Letter:] { r } [:^Letter:] > r̩;
{ v } [ptksšcčćfh] > f;

a > a;
b > b;
c > t͡s;
ć > t͡ɕ;
č > t͡ʃ;
d > d;
đ > d͡ʑ;
e > e;
f > f;
g > ɡ;
h > x;
i > i;
j > j;
k > k;
l > l;
m > m;
n > n;
o > o;
p > p;
q > kʋ;
r > r;
s > s;
š > ʃ;
t > t;
u > u;
v > ʋ;
w > ʋ;
x > ks;
y > i;
z > z;
ž > ʒ;
`;
