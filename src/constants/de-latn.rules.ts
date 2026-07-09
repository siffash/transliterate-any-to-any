export const deLatnRules = `
::NFC;

$vowel = [AEIOUÄÖÜYaeiouäöüy];

[:^Letter:] { S } T > Š;
[:^Letter:] { S } t > Š;
[:^Letter:] { s } t > š;
[:^Letter:] { S } P > Š;
[:^Letter:] { S } p > Š;
[:^Letter:] { s } p > š;

TSCH > Č;
Tsch > Č;
tsch > č;

SCH > Š;
Sch > Š;
sch > š;

X } [:Lowercase_Letter:] > Ks;
X > KS;
x > ks;

CH > X;
Ch > X;
ch > x;

DSCH } [:Lowercase_Letter:] > Dž;
DSCH > DŽ;
Dsch > Dž;
dsch > dž;

TZ } [:Lowercase_Letter:] > Ts;
TZ > TS;
Tz > Ts;
tz > ts;

Z } [:Lowercase_Letter:] > Ts;
Z > TS;
z > ts;

[:^Letter:] { S } $vowel > Z;
[:^Letter:] { s } $vowel > z;
$vowel { S } $vowel > Z;
$vowel { s } $vowel > z;

PH > F;
Ph > F;
ph > f;

V > F;
v > f;

W > V;
w > v;

QU } [:Lowercase_Letter:] > Kv;
QU > KV;
Qu > Kv;
qu > kv;

CK > K;
Ck > K;
ck > k;

C } [eiyäöü] > Ts;
C } [EIYÄÖÜ] > TS;
c } [eiyäöüEIYÄÖÜ] > ts;

C > K;
c > k;

J > Y;
j > y;

ẞ > SS;
ß > ss;
`;
