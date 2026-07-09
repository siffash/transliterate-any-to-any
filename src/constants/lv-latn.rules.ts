export const lvLatnRules = `
::NFC;

Ā > A;
ā > a;
Ē > E;
ē > e;
Ī > I;
ī > i;
Ū > U;
ū > u;
Ō > O;
ō > o;

::Null;

E } [BCDFGHKLMNPRSTVZbcdfghklmnprstvz] [AOUaou] > Ä;
E } [BCDFGHKLMNPRSTVZbcdfghklmnprstvz] [BCDFGHKLMNPRSTVZbcdfghklmnprstvz] [AOUaou] > Ä;
e } [BCDFGHKLMNPRSTVZbcdfghklmnprstvz] [AOUaou] > ä;
e } [BCDFGHKLMNPRSTVZbcdfghklmnprstvz] [BCDFGHKLMNPRSTVZbcdfghklmnprstvz] [AOUaou] > ä;

CH > X;
Ch > X;
cH > x;
ch > x;

C } [:Upper:] > TS;
C } [:^Letter:] > TS;
C > Ts;
c > ts;

J > Y;
j > y;

H > X;
h > x;

Ņ > Ń;
ņ > ń;

Ļ > Ľ;
ļ > ľ;

Ķ > K;
ķ > k;

Ģ > G;
ģ > g;

Ŗ > R;
ŗ > r;
`;
