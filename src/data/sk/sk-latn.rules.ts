export const skLatnRules = `
::NFC;

rne } [:^Letter:] > rńe;
RNE } [:^Letter:] > RŃE;

ch > x;
Ch > X;
CH > X;

c > ts;
C } [:Ll:] > Ts;
C > TS;

x > ks;
X } [:Ll:] > Ks;
X > KS;

q > k;
Q > K;

ô > o;
Ô > O;

ř > rž;
Ř } [:Ll:] > Rž;
Ř > RŽ;

ď > đ;
Ď > Đ;
ť > ć;
Ť > Ć;
ň > ń;
Ň > Ń;
j > y;
J > Y;
w > v;
W > V;
á > a;
Á > A;
é > e;
É > E;
[íýy] > i;
[ÍÝY] > I;
ó > o;
Ó > O;
ú > u;
Ú > U;
ĺ > l;
Ĺ > L;
ŕ > r;
Ŕ > R;
`;
