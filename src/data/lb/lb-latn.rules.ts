export const lbLatnRules = `
::NFC;

DSCH > DŽ;
Dsch > Dž;
dsch > dž;

TSCH > Č;
Tsch > Č;
tsch > č;

SCH > Š;
Sch > Š;
sch > š;

[:Lu:] { X > KS;
X } [:Lu:] > KS;
X > Ks;
x > ks;

[AOUaou] { CH > KH;
[AOUaou] { Ch > Kh;
[AOUaou] { ch > kh;

CH > X;
Ch > X;
ch > x;

CK > K;
Ck > K;
ck > k;

PH > F;
Ph > F;
ph > f;

TH > T;
Th > T;
th > t;

DJ > DŽ;
Dj > Dž;
dj > dž;

QUE } [^[:L:][:M:]] > K;
Que } [^[:L:][:M:]] > K;
que } [^[:L:][:M:]] > k;

QU > KV;
Qu > Kv;
qu > kv;

Q > K;
q > k;

[^[:L:][:M:]] { ST > ŠT;
[^[:L:][:M:]] { St > Št;
[^[:L:][:M:]] { st > št;

[^[:L:][:M:]] { SP > ŠP;
[^[:L:][:M:]] { Sp > Šp;
[^[:L:][:M:]] { sp > šp;

[:Lu:] { C } [eéèêëiïyäöüEÉÈÊËIÏYÄÖÜ] > TS;
C } [EÉÈÊËIÏYÄÖÜ] > TS;
C } [eéèêëiïyäöü] > Ts;
c } [eéèêëiïyäöüEÉÈÊËIÏYÄÖÜ] > ts;

C > K;
c > k;

TZ > TS;
Tz > Ts;
tz > ts;

[:Lu:] { Z > TS;
Z } [:Lu:] > TS;
Z > Ts;
z > ts;

W > V;
w > v;

Ç > S;
ç > s;

[ÄEÉ] I > IJ;
[ÄEÉ] i > Ij;
[äeé] i > ij;

Y > Ü;
y > ü;

J > Y;
j > y;

Ë > Ï;
ë > ï;

[ÉÈÊ] > E;
[éèê] > e;

Â > A;
â > a;
Î > I;
î > i;
Ô > O;
ô > o;
Û > U;
û > u;

::Null;

KK > K;
Kk > K;
kk > k;
`;
