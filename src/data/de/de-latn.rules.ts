export const deLatnRules = `
::NFC;

C [hH] } [aA] [rR] [lL] [oO] [tT] [tT] [eE] > Š;
c [hH] } [aA] [rR] [lL] [oO] [tT] [tT] [eE] > š;

S } [tT] [aA] [dD] [tT] > Š;
s } [tT] [aA] [dD] [tT] > š;

[^[:L:][:M:]] { S } [tTpP] > Š;
[^[:L:][:M:]] { s } [tTpP] > š;

TSCH > Č;
TSch > Č;
Tsch > Č;
tsch > č;

SCH > Š;
Sch > Š;
sCh > š;
sch > š;

[:Lu:] { X > KS;
X } [:Lu:] > KS;
X > Ks;
x > ks;

C [hH] > X;
c [hH] > x;

DSCH > DŽ;
D [sS] [cC] [hH] > Dž;
dsch > dž;

TZ > TS;
Tz > Ts;
tZ > tS;
tz > ts;

[:Lu:] { Z > TS;
Z } [:Lu:] > TS;
Z > Ts;
z > ts;

[^[:L:][:M:]] { S } [AEIOUÄÖÜYaeiouäöüy] > Z;
[^[:L:][:M:]] { s } [AEIOUÄÖÜYaeiouäöüy] > z;
[AEIOUÄÖÜYaeiouäöüy] { S } [AEIOUÄÖÜYaeiouäöüy] > Z;
[AEIOUÄÖÜYaeiouäöüy] { s } [AEIOUÄÖÜYaeiouäöüy] > z;

P [hH] > F;
p [hH] > f;

V > F;
v > f;

W > V;
w > v;

QU } [aeiouäöüyAEIOUÄÖÜY] > KV;
Qu } [aeiouäöüyAEIOUÄÖÜY] > Kv;
qU } [aeiouäöüyAEIOUÄÖÜY] > kV;
qu } [aeiouäöüyAEIOUÄÖÜY] > kv;

C [kK] > K;
c [kK] > k;

C } [EIYÄÖÜ] > TS;
C } [eiyäöü] > Ts;
c } [eiyäöüEIYÄÖÜ] > ts;

C > K;
c > k;

J > Y;
j > y;

[:Lu:] { [ẞß] > SS;
[ẞß] } [:Lu:] > SS;
[ẞß] > ss;

I [eE] > I;
i [eE] > i;
`;
