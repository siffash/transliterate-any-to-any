export const itIpaRules = `
::Lower;

$vowel = [a à e è é i ì í o ò ó u ù ú ɛ ɔ];
$frontv = [e è é i ì í ɛ];
$voiced_cons = [b d g j l m n r v w z dʒ ɲ ʎ];
$velar = [k q g];

à > a;
è > ɛ;
é > e;
ì > i;
í > i;
ò > ɔ;
ó > o;
ù > u;
ú > u;

$vowel { s c i } $vowel > ʃː;
s c i } $vowel > ʃ;
$vowel { s c } $frontv > ʃː;
s c } $frontv > ʃ;
s c i > ʃ i;

$vowel { g l i } $vowel > ʎː;
g l i } $vowel > ʎ;
$vowel { g l i > ʎː i;
g l i > ʎ i;

$vowel { g n > ɲː;
g n > ɲ;

c c i } $vowel > tːʃ;
c c } $frontv > tːʃ;
c i } $vowel > tʃ;
c } $frontv > tʃ;

g g i } $vowel > dːʒ;
g g } $frontv > dːʒ;
g i } $vowel > dʒ;
g } $frontv > dʒ;

c h > k;
g h > g;

b b > bː;
c c > kː;
d d > dː;
f f > fː;
g g > gː;
l l > lː;
m m > mː;
n n > nː;
p p > pː;
q q > kː;
c q > kː;
r r > rː;
s s > sː;
t t > tː;
v v > vː;
z z > tːs;

n } [p b pː bː] > m;
n } [f v fː vː] > ɱ;
n } c [a à o ò ó u ù ú h r l] > ŋ;
n } g [a à o ò ó u ù ú h r l] > ŋ;
n } [k q] > ŋ;

$vowel { s } $vowel > z;
s } $voiced_cons > z;

$vowel { z } $vowel > tːs;

q u } $vowel > k w;
g u } $vowel > g w;

i } $vowel > j;
u } $vowel > w;

'' > ;
b > b;
c > k;
d > d;
f > f;
g > g;
h > ;
j > j;
k > k;
l > l;
m > m;
n > n;
p > p;
q > k;
r > r;
s > s;
t > t;
v > v;
w > w;
x > ks;
y > i;
z > ts;
`;
