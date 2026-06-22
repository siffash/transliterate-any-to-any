export const deIpaRules = `
::Lower;

$v = [aäeéiíoöuúüyə];
$c = [bcdfghjklmnpqrstvwxz];
$letter = [:Letter:];

ch } arlotte > ʃ;

ng } [:^Letter:] > ŋ;
ig } [:^Letter:] > ɪç;
er } [:^Letter:] > ɐ;
en } [:^Letter:] > ən;
el } [:^Letter:] > ə;
e } [:^Letter:] > ə;
g } [:^Letter:] > k;
b } [:^Letter:] > p;
d } [:^Letter:] > t;

o } tt > '_ɔ_';
a } tt > '_a_';
e } ll > '_ɛ_';
e } ck > '_ɛ_';
i } mm > '_ɪ_';
i } tt > '_ɪ_';
ü } ll > '_ʏ_';

bb > b;
cc > c;
dd > d;
ff > f;
gg > g;
hh > h;
jj > j;
kk > k;
ll > l;
mm > m;
nn > n;
pp > p;
qq > q;
rr > r;
ss > s;
tt > t;
vv > v;
ww > w;
xx > x;
zz > z;

::Null;

äu > ɔʏ;
eu > ɔʏ;
ei > aɪ;
ai > aɪ;
ay > aɪ;
ey > aɪ;
au > aʊ;

aa > aː;
ee > eː;
oo > oː;
uu > uː;
ah } $v > aːh;
ah > aː;
äh } $v > ɛːh;
äh > ɛː;
eh } $v > eːh;
eh > eː;
ih } $v > iːh;
ih > iː;
oh } $v > oːh;
oh > oː;
öh } $v > øːh;
öh > øː;
uh } $v > uːh;
uh > uː;
üh } $v > yːh;
üh > yː;
ie } $v > iːh;
ie > iː;

chs > ks;
chr > kʁ;
ch } [aou] > x;
ch > ç;
sch > ʃ;
[:^Letter:] { sp > ʃp;
[:^Letter:] { st > ʃt;
ng > ŋ;
nk > ŋk;
ck > k;
tz > ts;
qu > kv;
ph > f;
th > t;

i } k [:^Letter:] > ɪ;
a } l [:^Letter:] > a;

er } [iɪ] > əʁ;
en } $c > ən;
el } $c > əl;

g } [ptkçxfsʃ] > k;
b } [ptkçxfsʃ] > p;
d } [ptkçxfsʃ] > t;

a } $c $c > a;
a } $c [:^Letter:] > a;
a } $c $v > aː;
a > a;
ä } $c $c > ɛ;
ä > ɛː;
e } $c $c > ɛ;
e > eː;
i } $c $c > ɪ;
i > iː;
o } $c $c > ɔ;
o > oː;
ö } $c $c > œ;
ö > øː;
u } $c $c > ʊ;
u > uː;
ü } $c $c > ʏ;
ü > yː;

b > b;
c } [eiyäöü] > ts;
c > k;
d > d;
f > f;
g > ɡ;
[$v r ʁ] { h >;
h > h;
j > j;
k > k;
l > l;
m > m;
n } [kqx] > ŋ;
n > n;
p > p;
q > k;
r > ʁ;
s } [ptkçxfsʃ] > s;
s { ti > ti;
ti } [aeo] > tsi;
s > z;
ß > s;
t > t;
v > f;
w > v;
x > ks;
y > ʏ;
z > ts;

::Null;

bb > b;
cc > c;
dd > d;
ff > f;
gg > g;
hh > h;
jj > j;
kk > k;
ll > l;
mm > m;
nn > n;
pp > p;
qq > q;
rr > r;
ss > s;
tt > t;
vv > v;
ww > w;
xx > x;
zz > z;

'_' > ;
`;
