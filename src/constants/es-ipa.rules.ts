export const esIpaRules = `
::Lower;

m [ée] xic > mexik;

[^[:Letter:][:Mark:]] { ps > s;
[^[:Letter:][:Mark:]] { gn > n;
[^[:Letter:][:Mark:]] { mn > n;
[^[:Letter:][:Mark:]] { pt > t;

ch > t͡ʃ;
ll > ʎ;
rr > r;
qu } [eéií] > k;
q > k;
gu } [eéií] > ɣ;
gü > ɣw;

[bv] > β;
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

[^[:Letter:][:Mark:]] { r > r;
[lns] { r > r;
r > ɾ;

s } [bβdðɡɣmnɲŋlʎrɾʝz] > z;
s > s;
x } [aáeéiíoóuúü] > ks;
x } [^[:Letter:][:Mark:]] > ks;
x > s;

hi } [aáeéiíoóuúü] > ʝ;
h > ;
y } [aáeéiíoóuúü] > ʝ;
[aáeéoó] { y > i̯;
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

n } [bβpvm] > m;
n } [f] > ɱ;
n } [{t͡ʃ}ʎʝ] > ɲ;
n } [tdð] > n̪;
n } [θ] > n̟;
n } [gɡɣkx] > ŋ;

[^[:Letter:][:Mark:]] { β > b;
[mnɲŋ] { β > b;

[^[:Letter:][:Mark:]] { ð > d;
[mnɲŋl{n̪}] { ð > d;

[^[:Letter:][:Mark:]] { ɣ > ɡ;
[mnɲŋ] { ɣ > ɡ;
`;
