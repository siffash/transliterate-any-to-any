export const esIpaRules = `
::Lower;
::NFC;

m [ée] xic > mexik;

[^[:L:][:M:]] { ps > s;
[^[:L:][:M:]] { [gm] n > n;
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
gu } [eéií] > ɡ;
gü > ɡw;

b > b;
v > β;
c } [eéií] > s;
[qkc] > k;
d > d;
f > f;
g } [eéií] > x;
g > ɡ;
j > x;
l > l;
m > m;
n > n;
ñ > ɲ;
p > p;
t > t;
ż > z;

[^[:L:][:M:]] { r > r;
[lns] { r > r;
r > ɾ;

x } [aáeéiíoóuúü] > ks;
x } [^[:L:][:M:]] > ks;
[zsx] > s;

hi } [aáeéiíoóuúü] > ʝ;
h > ;
y } [aáeéiíoóuúü] > ʝ;

[^[:L:][:M:]] { i } [aáeéiíoóuúü] > j;
u } [aáeéiíoó] > w;
[aáeéoó] { [yi] > i̯;
[aáeéoó] { u > u̯;

[aá] > a;
[eé] > e;
[yií] > i;
[oó] > o;
[uúü] > u;

::Null;

n } [ɡkx] > ŋ;
`;
