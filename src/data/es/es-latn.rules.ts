export const esLatnRules = `
::NFC;

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

::Null;

[mM] [eE] { x } [iI] [cC] [oO] > x;
[mM] [eE] { X } [iI] [cC] [oO] > X;
[mM] [eE] { x } [iI] [cC] [aA] [nN] [aoAO] > x;
[mM] [eE] { X } [iI] [cC] [aA] [nN] [aoAO] > X;
[tT] [eE] { x } [aA] [sS] > x;
[tT] [eE] { X } [aA] [sS] > X;
[oO] [aA] { x } [aA] [cC] [aA] > x;
[oO] [aA] { X } [aA] [cC] [aA] > X;
x } [aA] [lL] [aA] [pP] [aA] > x;
X } [aA] [lL] [aA] [pP] [aA] > X;
x } [aA] [vV] [iI] [eE] [rR] > x;
X } [aA] [vV] [iI] [eE] [rR] > X;
x } [iI] [mM] [eE] [nN] [aA] > x;
X } [iI] [mM] [eE] [nN] [aA] > X;
x } [oO] [cC] [hH] [iI] [mM] [iI] [lL] [cC] [oO] > s;
X } [oO] [cC] [hH] [iI] [mM] [iI] [lL] [cC] [oO] > S;

[^[:L:][:M:]] { x > s;
[^[:L:][:M:]] { X > S;

[:Lu:] { X > KS;
X } [:Lu:] > KS;
X > Ks;
x > ks;

c [hH] > č;
C [hH] > Č;

l [lL] > ľ;
L [lL] > Ľ;

q [uU] } [eiEI] > k;
Q [uU] } [eiEI] > K;

QU } [aoAO] > KW;
qU } [aoAO] > kW;
Qu } [aoAO] > Kw;
qu } [aoAO] > kw;

g [uU] } [eiEI] > g;
G [uU] } [eiEI] > G;

gü } [eiEI] > gu;
Gü } [eiEI] > Gu;
gÜ } [eiEI] > gU;
GÜ } [eiEI] > GU;

GU } [aoAO] > GW;
gU } [aoAO] > gW;
Gu } [aoAO] > Gw;
gu } [aoAO] > gw;

y } [^[:L:][:M:]] > i;
Y } [^[:L:][:M:]] > I;

c } [eiEI] > s;
C } [eiEI] > S;

g } [eiEI] > x;
G } [eiEI] > X;

j > x;
J > X;

[cq] > k;
[CQ] > K;

z > s;
Z > S;

ñ > ń;
Ñ > Ń;

h > ;
H ([:L:]) >| &Any-Upper($1);
H > ;
`;
