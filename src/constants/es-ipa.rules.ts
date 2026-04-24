export const esIpaRules = `
::Lower;

$vowel = [a á e é i í o ó u ú ü];
$voiced_cons = [b β d ð ɡ ɣ m n ɲ ŋ l ʎ r ɾ ʝ z];
$boundary = [:^Letter:];

^ps > s;
^gn > n;
^mn > n;
^pt > t;

ch > t͡ʃ;
ll > ʎ;
rr > r;
qu } [e é i í] > k;
gu } [e é i í] > ɡ;
gü > ɡw;

b > β;
v > β;
c } [e é i í] > θ;
c > k;
d > ð;
f > f;
g } [e é i í] > x;
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

$boundary { r > r;
[l n s] { r > r;
^r > r;
[r] } $boundary > ɾ;
r > ɾ;

s } $voiced_cons > z;
s > s;
x } $vowel > ks;
^x > s;
x > s;

hi } $vowel > ʝ;
h > ;
y } $vowel > ʝ;
y > i;

i } $vowel > j;
u } [a á e é i í o ó] > w;
[a á e é o ó] { i > i̯;
[a á e é o ó] { u > u̯;

[a á] > a;
[e é] > e;
[i í] > i;
[o ó] > o;
[u ú] > u;

::Null;

n } [g ɡ ɣ k x] > ŋ;
n } [{t͡ʃ} ʎ ʝ] > ɲ;
n } [d ð] > n̪;
n } [b β] > m;
n } [t d] > n̪;

$boundary { β > b;
[m n ɲ ŋ] { β > b;
^β > b;

$boundary { ð > d;
[m n ɲ ŋ l] { ð > d;
^ð > d;

$boundary { ɣ > ɡ;
[m n ɲ ŋ] { ɣ > ɡ;
^ɣ > ɡ;

n } [p b v m] > m;
n } [f] > ɱ;
n } [t d] > n̪;
n } [θ] > n̟;
n } [t͡ʃ ʎ ʝ] > ɲ;
n } [k ɡ x] > ŋ;
`;
