export const lbLatnRules = `
$v = [eéèêëiïyäöüEÉÈÊËIÏYÄÖÜ];

TSCH > Č;
Tsch > Č;
tsch > č;

SCH > Š;
Sch > Š;
sch > š;

CH > X;
Ch > X;
ch > x;

DJ > DŽ;
Dj > Dž;
dj > dž;

QUE } [:^Letter:] > K;
Que } [:^Letter:] > K;
que } [:^Letter:] > k;

QU > KV;
Qu > Kv;
qu > kv;

Q > K;
q > k;

[:^Letter:] { ST > ŠT;
[:^Letter:] { St > Št;
[:^Letter:] { st > št;

[:^Letter:] { SP > ŠP;
[:^Letter:] { Sp > Šp;
[:^Letter:] { sp > šp;

[:Upper:] { C } $v > TS;
C } $v > Ts;
c } $v > ts;

C > K;
c > k;

[:Upper:] { Z > TS;
Z } [:Upper:] > TS;
Z > Ts;
z > ts;

[:Upper:] { X > KS;
X } [:Upper:] > KS;
X > Ks;
x > ks;

W > V;
w > v;

ç > s;
Ç > S;

J > Y;
j > y;

Ë > Ï;
ë > ï;

É > E;
é > e;
È > E;
è > e;
Ê > E;
ê > e;
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
