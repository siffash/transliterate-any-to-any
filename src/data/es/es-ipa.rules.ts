export const esIpaRules = `
::Lower;
::NFC;

m [ée] xic > mexik;

[^[:L:][:M:]] { ps > s;
[^[:L:][:M:]] { gn > n;
[^[:L:][:M:]] { mn > n;
[^[:L:][:M:]] { pt > t;

oa { x } aca > x;
x } alapa > x;
x } avier > x;
x } imena > x;
[^[:L:][:M:]] { x > s;
tx > t͡ʃ;
ch > t͡ʃ;
ll > ʎ;
rr > r;
qu } [eéií] > k;
q > k;
gu } [eéií] > ɡ;
gü > ɡw;

b > b;
v > β;
c } [eéií] > s;
c > k;
d > d;
f > f;
g } [eéií] > x;
g > ɡ;
j > x;
k > k;
l > l;
m > m;
n > n;
ñ > ɲ;
p > p;
t > t;
ż > z;
z > s;

[^[:L:][:M:]] { r > r;
[lns] { r > r;
r > ɾ;

s > s;
x } [aáeéiíoóuúü] > ks;
x } [^[:L:][:M:]] > ks;
x > s;

hi } [aáeéiíoóuúü] > ʝ;
h > ;
y } [aáeéiíoóuúü] > ʝ;
[aáeéoó] { y > i̯;
y > i;

[^[:L:][:M:]] { i } [aáeéiíoóuúü] > j;
u } [aáeéiíoó] > w;
[aáeéoó] { i > i̯;
[aáeéoó] { u > u̯;

[aá] > a;
[eé] > e;
[ií] > i;
[oó] > o;
[uúü] > u;

::Null;

n } [ɡkx] > ŋ;
`;
