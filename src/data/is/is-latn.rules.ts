export const isLatnRules = `
::NFC;

[[:L:][:M:]] { \\' } [[:L:][:M:]] > ’;

[:Lu:] { X > KS;
X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KS;
X } [:Lu:] > KS;
X > Ks;
x > ks;

[AÁEÉIÍOÓUÚYÝÆÖRL] { G } [^gG] > GH;
[aáeéiíoóuúyýæöAÁEÉIÍOÓUÚYÝÆÖrRlL] { G } [^gG] > Gh;
[aáeéiíoóuúyýæöAÁEÉIÍOÓUÚYÝÆÖrRlL] { g } [^gG] > gh;
[AÁEÉIÍOÓUÚYÝÆÖRL] { G } [^[:L:][:M:]] > GH;
[aáeéiíoóuúyýæöAÁEÉIÍOÓUÚYÝÆÖrRlL] { G } [^[:L:][:M:]] > Gh;
[aáeéiíoóuúyýæöAÁEÉIÍOÓUÚYÝÆÖrRlL] { g } [^[:L:][:M:]] > gh;

[aáeéiíoóuúyýæöAÁEÉIÍOÓUÚYÝÆÖrRlL] { F } [lnLN] > P;
[aáeéiíoóuúyýæöAÁEÉIÍOÓUÚYÝÆÖrRlL] { f } [lnLN] > p;

::Null;

au > öÿ;
Au > Öÿ;
aU > öŸ;
AU > ÖŸ;

e [iy] > ij;
E [iy] > Ij;
e [IY] > iJ;
E [IY] > IJ;

[:Lu:] { Á > AU;
Á } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > AU;
Á } [:Lu:] > AU;
Á > Au;
á > au;

[:Lu:] { É > YE;
É } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > YE;
É } [:Lu:] > YE;
É > Ye;
é > ye;

í > i;
Í > I;

[:Lu:] { Ó > OU;
Ó } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > OU;
Ó } [:Lu:] > OU;
Ó > Ou;
ó > ou;

ú > u;
Ú > U;

ý > i;
Ý > I;

[:Lu:] { Æ > AI;
Æ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > AI;
Æ } [:Lu:] > AI;
Æ > Ai;
æ > ai;

y > i;
Y > I;

[:Lu:] { Þ > TH;
Þ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > TH;
Þ } [:Lu:] > TH;
Þ > Th;
þ > th;

ð > d;
Ð > D;

S [jJ] > Š;
s [jJ] > š;

j > y;
J > Y;

z > s;
Z > S;

q > k;
Q > K;

w > v;
W > V;

c > k;
C > K;
`;
