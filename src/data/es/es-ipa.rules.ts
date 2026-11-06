export const esIpaRules = `
::Lower;
::NFC;

m [ée] xic > mexik;

[^[:L:][:M:]] { ps > s;
[^[:L:][:M:]] { gn > n;
[^[:L:][:M:]] { mn > n;
[^[:L:][:M:]] { pt > t;

ch > t͡ʃ;
ll > ʎ;
rr > r;
qu } [eéií] > k;
q > k;
gu } [eéií] > ɡ;
gü > ɡw;

b > b;
v > β;
c } [eéií] > θ;
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
z > θ;

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

n } [bβpm] > m;
n } [f] > ɱ;
n } [{t͡ʃ}ʎʝ] > ɲ;
n } [td] > n̪;
n } [θ] > n̟;
n } [ɡkx] > ŋ;
`;
