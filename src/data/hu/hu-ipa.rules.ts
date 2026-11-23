export const huIpaRules = `
::Lower;
::NFC;

szombathely > sombɑthɛj;

e } [öő] > ;

ddzs > d͡ʒː;
ccs > t͡ʃː;
ddz > d͡zː;
ggy > d͡ʑː;
ngy > nd͡ʑ;
lly > jː;
nny > ɲː;
ssz > sː;
tty > t͡ɕː;
zzs > ʒː;

sch > ʃ;

cs > t͡ʃ;
dzs > d͡ʒ;
dz > d͡z;
gy > d͡ʑ;
ly > j;
ny > ɲ;
sz > s;
ty } [^[:L:][:M:]] > ti;
ty > t͡ɕ;
zs > ʒ;

dj > d͡ʑː;
nj > ɲː;
tj > t͡ɕː;
[lj] j > jː;

ách } [^[:L:][:M:]] > aːt͡ʃ;
ich } [^[:L:][:M:]] > it͡ʃ;
ch } y > t͡ʃ;
ch } [eé] ny > t͡ʃ;
ch > x;
cz > t͡s;
gh > ɡ;
ph > f;
qu > kv;
th > t;

bb > bː;
cc > t͡sː;
dd > dː;
ff > fː;
gg > ɡː;
hh > hː;
kk > kː;
ll > lː;
mm > mː;
nn > nː;
pp > pː;
rr > rː;
ss > ʃː;
tt > tː;
vv > vː;
ww > vː;
xx > ksː;
yy > jː;
zz > zː;

a > ɑ;
á > aː;
e > ɛ;
é > eː;
i > i;
í > iː;
o > o;
ó > oː;
ö > ø;
ő > øː;
u > u;
ú > uː;
ü > y;
ű > yː;

b > b;
c > t͡s;
d > d;
f > f;
g > ɡ;
h > h;
[kq] > k;
l > l;
m > m;
nb > mb;
np > mp;
ng > ŋɡ;
nk > ŋk;
n > n;
p > p;
r > r;
s > ʃ;
t > t;
[vw] > v;
x > ks;

y } [^aáeéiíoóöőuúüű] > i;
[jy] > j;
z > z;

::Null;

[^tʈ͡] ʃ { ː } [^[:L:][:M:]] > ;
`;
