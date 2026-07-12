export const skLatnRules = `
::NFC;

rne } [:^Letter:] > rńe;
RNE } [:^Letter:] > RŃE;

ch > x;
Ch > X;
CH > X;

c > ts;
C } [:Lower:] > Ts;
C > TS;
x > ks;
X } [:Lower:] > Ks;
X > KS;
q > kv;
Q } [:Lower:] > Kv;
Q > KV;
ô > uo;
Ô } [:Lower:] > Uo;
Ô > UO;
ř > rž;
Ř } [:Lower:] > Rž;
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
ý > i;
Ý > I;
y > i;
Y > I;
á > a;
Á > A;
é > e;
É > E;
í > i;
Í > I;
ó > o;
Ó > O;
ú > u;
Ú > U;
ĺ > l;
Ĺ > L;
ŕ > r;
Ŕ > R;
`;
