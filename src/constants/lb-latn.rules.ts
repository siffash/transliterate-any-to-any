export const lbLatnRules = `
$boundary = [:^Letter:];
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

QUE } $boundary > K;
Que } $boundary > K;
que } $boundary > k;

QU > KV;
Qu > Kv;
qu > kv;

Q > K;
q > k;

$boundary { ST > ŠT;
$boundary { St > Št;
$boundary { st > št;

$boundary { SP > ŠP;
$boundary { Sp > Šp;
$boundary { sp > šp;

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
