export const fiLatnRules = `
::NFC;

SCH > Š;
SCh > Š;
Sch > Š;
sch > š;
SH > Š;
Sh > Š;
sh > š;

ZH > Ž;
Zh > Ž;
zh > ž;

CH > Č;
Ch > Č;
ch > č;

C } [EIYÄÖeiyäö] > S;
c } [EIYÄÖeiyäö] > s;

C > K;
c > k;

X } [:Ll:] > Ks;
[:Ll:] { X > Ks;
[^[:L:][:M:]] { X } [^[:L:][:M:]] > KS;
X > KS;
x > ks;

Z } [:Ll:] > Ts;
[:Ll:] { Z > Ts;
[^[:L:][:M:]] { Z } [^[:L:][:M:]] > TS;
Z > TS;
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
