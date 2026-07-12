export const esLatnRules = `
::NFC;

ch > č;
Ch > Č;
CH > Č;

ll > ľ;
Ll > Ľ;
LL > Ľ;

qu } [eéiíEÉIÍ] > k;
Qu } [eéiíEÉIÍ] > K;
QU } [eéiíEÉIÍ] > K;

gu } [eéiíEÉIÍ] > g;
Gu } [eéiíEÉIÍ] > G;
GU } [eéiíEÉIÍ] > G;

gü } [eéiíEÉIÍ] > gu;
Gü } [eéiíEÉIÍ] > Gu;
GÜ } [eéiíEÉIÍ] > GU;

c } [eéiíEÉIÍ] > s;
C } [eéiíEÉIÍ] > S;

g } [eéiíEÉIÍ] > x;
G } [eéiíEÉIÍ] > X;

[:^Letter:] { x > s;
[:^Letter:] { X > S;

y } [:^Letter:] > i;
Y } [:^Letter:] > I;

x > ks;
X > Ks;

[cq] > k;
[CQ] > K;

j > x;
J > X;

z > s;
Z > S;

ñ > ń;
Ñ > Ń;

v > b;
V > B;

h > ;
H ([:Letter:]) > &Any-Upper($1);
H > ;

á > a;
Á > A;
é > e;
É > E;
í > i;
Í > I;
ó > o;
Ó > O;
[úü] > u;
[ÚÜ] > U;
`;
