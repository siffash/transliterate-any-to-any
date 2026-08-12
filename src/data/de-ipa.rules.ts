export const deIpaRules = `
::Lower;

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
ah } [aäeéiíoöuúüyə] > aːh;
ah > aː;
äh } [aäeéiíoöuúüyə] > ɛːh;
äh > ɛː;
eh } [aäeéiíoöuúüyə] > eːh;
eh > eː;
ih } [aäeéiíoöuúüyə] > iːh;
ih > iː;
oh } [aäeéiíoöuúüyə] > oːh;
oh > oː;
öh } [aäeéiíoöuúüyə] > øːh;
öh > øː;
uh } [aäeéiíoöuúüyə] > uːh;
uh > uː;
üh } [aäeéiíoöuúüyə] > yːh;
üh > yː;
ie } [aäeéiíoöuúüyə] > iːh;
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
en } [bcdfghjklmnpqrstvwxz] > ən;
el } [bcdfghjklmnpqrstvwxz] > əl;

g } [ptkçxfsʃ] > k;
b } [ptkçxfsʃ] > p;
d } [ptkçxfsʃ] > t;

a } [bcdfghjklmnpqrstvwxz] [bcdfghjklmnpqrstvwxz] > a;
a } [bcdfghjklmnpqrstvwxz] [:^Letter:] > a;
a } [bcdfghjklmnpqrstvwxz] [aäeéiíoöuúüyə] > aː;
a > a;
ä } [bcdfghjklmnpqrstvwxz] [bcdfghjklmnpqrstvwxz] > ɛ;
ä > ɛː;
e } [bcdfghjklmnpqrstvwxz] [bcdfghjklmnpqrstvwxz] > ɛ;
e > eː;
i } [bcdfghjklmnpqrstvwxz] [bcdfghjklmnpqrstvwxz] > ɪ;
i > iː;
o } [bcdfghjklmnpqrstvwxz] [bcdfghjklmnpqrstvwxz] > ɔ;
o > oː;
ö } [bcdfghjklmnpqrstvwxz] [bcdfghjklmnpqrstvwxz] > œ;
ö > øː;
u } [bcdfghjklmnpqrstvwxz] [bcdfghjklmnpqrstvwxz] > ʊ;
u > uː;
ü } [bcdfghjklmnpqrstvwxz] [bcdfghjklmnpqrstvwxz] > ʏ;
ü > yː;

b > b;
c } [eiyäöü] > ts;
c > k;
d > d;
f > f;
g > ɡ;
[aäeéiíoöuúüyərʁ] { h >;
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
