export const ltLatnRules = `
$boundary = [:^Letter:];

C } H > X;
C } h > X;
c } h > x;

X } [:UppercaseLetter:] > KS;
X > Ks;
x > ks;

C } [:UppercaseLetter:] > TS;
C > Ts;
c > ts;

J > Y;
j > y;

Y > I;
y > i;

W > V;
w > v;

Q > K;
q > k;

Ą > A;
ą > a;

Ę > E;
ę > e;

Ė > E;
ė > e;

Į > I;
į > i;

Ų > U;
ų > u;

Ū > U;
ū > u;
`;
