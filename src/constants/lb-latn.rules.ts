export const lbLatnRules = `
$boundary = [:^Letter:];

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

QU > KV;
Qu > Kv;
qu > kv;

$boundary { ST > ŠT;
$boundary { St > Št;
$boundary { st > št;

$boundary { SP > ŠP;
$boundary { Sp > Šp;
$boundary { sp > šp;

[:Uppercase:] { Z > TS;
Z } [:Uppercase:] > TS;
Z > Ts;
z > ts;

[:Uppercase:] { X > KS;
X } [:Uppercase:] > KS;
X > Ks;
x > ks;

W > V;
w > v;

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
`;
