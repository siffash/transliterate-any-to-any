export const fiLatnRules = `
::NFC;

SCH > Š;
SCh > Š;
Sch > Š;
sch > š;
SH > Š;
Sh > Š;
sh > š;

CH > Č;
Ch > Č;
ch > č;

C } [EIYÄÖeiyäö] > S;
c } [EIYÄÖeiyäö] > s;

C > K;
c > k;

N } [KCQ] > NG;
N } [kcq] > Ng;
n } [KkCcQq] > ng;

[:Uppercase:] { X > KS;
X } [:Uppercase:] > KS;
X > Ks;
x > ks;

[:Uppercase:] { Z > TS;
Z } [:Uppercase:] > TS;
Z > Ts;
z > ts;

Q > K;
q > k;
W > V;
w > v;
Å > O;
å > o;
Y > Ü;
y > ü;
J > Y;
j > y;
`;
