export const esLatnRules = `
::NFC;

[[:L:][:M:]] { \\' } [[:L:][:M:]] > ’;

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

T [xX] > Č;
t [xX] > č;
T [zZ] > C;
t [zZ] > c;

[^[:L:][:M:]] { x > s;
[^[:L:][:M:]] { X > S;

[:Lu:] { X > KS;
X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KS;
X } [:Lu:] > KS;
X > Ks;
x > ks;

c [hH] > č;
C [hH] > Č;

l [lL] > ľ;
L [lL] > Ľ;

q [uU] } [eiɨEIƗ] > k;
Q [uU] } [eiɨEIƗ] > K;

QU } [aoAO] > KW;
qU } [aoAO] > kW;
Qu } [aoAO] > Kw;
qu } [aoAO] > kw;

g [uU] } [eiɨEIƗ] > g;
G [uU] } [eiɨEIƗ] > G;

gü } [eiɨEIƗ] > gu;
Gü } [eiɨEIƗ] > Gu;
gÜ } [eiɨEIƗ] > gU;
GÜ } [eiɨEIƗ] > GU;

GU } [aoAO] > GW;
gU } [aoAO] > gW;
Gu } [aoAO] > Gw;
gu } [aoAO] > gw;

y } [^[:L:][:M:]] > i;
Y } [^[:L:][:M:]] > I;

c } [eiɨEIƗ] > s;
C } [eiɨEIƗ] > S;

g } [eiɨEIƗ] > x;
G } [eiɨEIƗ] > X;

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

::Null;

[^[:L:][:M:]] { T [Ss] > C;
[^[:L:][:M:]] { t [Ss] > c;
`;
