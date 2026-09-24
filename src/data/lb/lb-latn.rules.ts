export const lbLatnRules = `
::NFC;

DSCH > DŽ;
Dsch > Dž;
d [sS] [cC] [hH] > dž;

TSCH > Č;
Tsch > Č;
t [sS] [cC] [hH] > č;

SCH > Š;
Sch > Š;
s [cC] [hH] > š;

[:Lu:] { X > KS;
X } [:Lu:] > KS;
X > Ks;
x > ks;

[AOUaou] { CH > KH;
[AOUaou] { cH > kH;
[AOUaou] { Ch > Kh;
[AOUaou] { ch > kh;

C [hH] > X;
c [hH] > x;

C [kK] > K;
c [kK] > k;

P [hH] > F;
p [hH] > f;

T [hH] > T;
t [hH] > t;

DJ > DŽ;
dJ > dŽ;
Dj > Dž;
dj > dž;

Q [uU] [eE] } [^[:L:][:M:]] > K;
q [uU] [eE] } [^[:L:][:M:]] > k;

QU > KV;
qU > kV;
Qu > Kv;
qu > kv;

Q > K;
q > k;

[^[:L:][:M:]] { ST > ŠT;
[^[:L:][:M:]] { sT > šT;
[^[:L:][:M:]] { St > Št;
[^[:L:][:M:]] { st > št;

[^[:L:][:M:]] { SP > ŠP;
[^[:L:][:M:]] { sP > šP;
[^[:L:][:M:]] { Sp > Šp;
[^[:L:][:M:]] { sp > šp;

[:Lu:] { C } [eéèêëiïyäöüEÉÈÊËIÏYÄÖÜ] > TS;
C } [EÉÈÊËIÏYÄÖÜ] > TS;
C } [eéèêëiïyäöü] > Ts;
c } [eéèêëiïyäöüEÉÈÊËIÏYÄÖÜ] > ts;

C > K;
c > k;

TZ > TS;
tZ > tS;
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
[äeé] I > iJ;
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

[kK] { [kK] > ;
`;
