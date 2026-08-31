export const deLatnRules = `
::NFC;

[^[:L:][:M:]] { S } T > Š;
[^[:L:][:M:]] { S } t > Š;
[^[:L:][:M:]] { s } t > š;
[^[:L:][:M:]] { S } P > Š;
[^[:L:][:M:]] { S } p > Š;
[^[:L:][:M:]] { s } p > š;

TSCH > Č;
TSch > Č;
Tsch > Č;
tsch > č;

SCH > Š;
Sch > Š;
sCh > š;
sch > š;

X } [:Ll:] > Ks;
X > KS;
x > ks;

CH > X;
Ch > X;
cH > x;
ch > x;

DSCH } [:Ll:] > Dž;
DSCH > DŽ;
DSch > Dž;
Dsch > Dž;
dsch > dž;

TZ > TS;
Tz > Ts;
tZ > ts;
tz > ts;

Z } [:Ll:] > Ts;
Z > TS;
z > ts;

[^[:L:][:M:]] { S } [AEIOUÄÖÜYaeiouäöüy] > Z;
[^[:L:][:M:]] { s } [AEIOUÄÖÜYaeiouäöüy] > z;
[AEIOUÄÖÜYaeiouäöüy] { S } [AEIOUÄÖÜYaeiouäöüy] > Z;
[AEIOUÄÖÜYaeiouäöüy] { s } [AEIOUÄÖÜYaeiouäöüy] > z;

PH > F;
Ph > F;
pH > f;
ph > f;

V > F;
v > f;

W > V;
w > v;

QU } [aeiouäöüyAEIOUÄÖÜY] > KV;
Qu } [aeiouäöüyAEIOUÄÖÜY] > Kv;
qU } [aeiouäöüyAEIOUÄÖÜY] > kV;
qu } [aeiouäöüyAEIOUÄÖÜY] > kv;

CK > K;
Ck > K;
cK > k;
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

IE > I;
Ie > I;
iE > i;
ie > i;
`;
