export const esIpaRules = `
::Lower;

[:^Letter:] { ps > s;
[:^Letter:] { gn > n;
[:^Letter:] { mn > n;
[:^Letter:] { pt > t;

ch > t͡ʃ;
ll > ʎ;
rr > r;
qu } [eéií] > k;
gu } [eéií] > ɡ;
gü > ɡw;

b > β;
v > β;
c } [eéií] > θ;
c > k;
d > ð;
f > f;
g } [eéií] > x;
g > ɣ;
j > x;
k > k;
l > l;
m > m;
n > n;
ñ > ɲ;
p > p;
t > t;
z > θ;

[:^Letter:] { r > r;
[lns] { r > r;
[r] } [:^Letter:] > ɾ;
r > ɾ;

s } [bβdðɡɣmnɲŋlʎrɾʝz] > z;
s > s;
x } [aáeéiíoóuúü] > ks;
x > s;

hi } [aáeéiíoóuúü] > ʝ;
h > ;
y } [aáeéiíoóuúü] > ʝ;
y > i;

i } [aáeéiíoóuúü] > j;
u } [aáeéiíoó] > w;
[aáeéoó] { i > i̯;
[aáeéoó] { u > u̯;

[aá] > a;
[eé] > e;
[ií] > i;
[oó] > o;
[uú] > u;

::Null;

n } [gɡɣkx] > ŋ;
n } [{t͡ʃ}ʎʝ] > ɲ;
n } [dð] > n̪;
n } [bβ] > m;
n } [td] > n̪;

[:^Letter:] { β > b;
[mnɲŋ] { β > b;

[:^Letter:] { ð > d;
[mnɲŋl] { ð > d;

[:^Letter:] { ɣ > ɡ;
[mnɲŋ] { ɣ > ɡ;

n } [pbvm] > m;
n } [f] > ɱ;
n } [td] > n̪;
n } [θ] > n̟;
n } [{t͡ʃ}ʎʝ] > ɲ;
n } [kɡx] > ŋ;
`;
