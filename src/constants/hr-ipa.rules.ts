export const hrIpaRules = `
::Lower;

ts > t͡s;
dž > d͡ʒ;
lj > ʎ;
nj > ɲ;

{ d } [s š c č ć] > t;
{ n } [k g] > ŋ;
{ n } [b p] > m;

$not_v = [^aeioujy];

$not_v { r } $not_v > r̩;
[:^Letter:] { r } $not_v > r̩;
$not_v { r } [:^Letter:] > r̩;
$not_v { r } $ > r̩;
[:^Letter:] { r } [:^Letter:] > r̩;
[:^Letter:] { r } $ > r̩;
{ v } [p t k s š c č ć f h] > f;

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
q > k ʋ;
r > r;
s > s;
š > ʃ;
t > t;
u > u;
v > ʋ;
w > ʋ;
x > k s;
y > i;
z > z;
ž > ʒ;
`;
