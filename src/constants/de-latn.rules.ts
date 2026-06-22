export const deLatnRules = `
$upper = [A-ZÄÖÜ];

TSCH > Č;
Tsch > Č;
tsch > č;

SCH > Š;
Sch > Š;
sch > š;

[:^Letter:] { S } T > Š;
[:^Letter:] { S } t > Š;
[:^Letter:] { s } t > š;

[:^Letter:] { S } P > Š;
[:^Letter:] { S } p > Š;
[:^Letter:] { s } p > š;

CH > X;
Ch > X;
ch > x;

TZ > TS;
Tz > Ts;
tz > ts;

PH > F;
Ph > F;
ph > f;

QU > KV;
Qu > Kv;
qu > kv;

CK > K;
Ck > K;
ck > k;

C } [E I Y Ä Ö Ü] > TS;
C } [e i y ä ö ü] > Ts;
c } [e i y ä ö ü E I Y Ä Ö Ü] > ts;

C > K;
c > k;

Z } $upper > TS;
Z > Ts;
z > ts;

X } $upper > KS;
X > Ks;
x > ks;

W > V;
w > v;

J > Y;
j > y;

ẞ > SS;
ß > ss;
`;
