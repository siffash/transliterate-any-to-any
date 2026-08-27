export const isLatnRules = `
::NFC;

x > ks;
X } [:Ll:] > Ks;
X > KS;

[aáeéiíoóuúyýæöAÁEÉIÍOÓUÚYÝÆÖrRlL] { g } [^gG] > gh;
[aáeéiíoóuúyýæöAÁEÉIÍOÓUÚYÝÆÖrRlL] { G } [^gG] > Gh;
[aáeéiíoóuúyýæöAÁEÉIÍOÓUÚYÝÆÖrRlL] { g } [:^Letter:] > gh;
[aáeéiíoóuúyýæöAÁEÉIÍOÓUÚYÝÆÖrRlL] { G } [:^Letter:] > Gh;

[aáeéiíoóuúyýæöAÁEÉIÍOÓUÚYÝÆÖrRlL] { f } [lnLN] > p;
[aáeéiíoóuúyýæöAÁEÉIÍOÓUÚYÝÆÖrRlL] { F } [lnLN] > P;

::Null;

au > öÿ;
Au > Öÿ;
AU > ÖŸ;

e [iy] > ij;
E [iy] > Ij;
E [IY] > IJ;

á > au;
Á } [:Lu:] > AU;
Á > Au;

é > ye;
É } [:Lu:] > YE;
É > Ye;

í > i;
Í > I;

ó > ou;
Ó } [:Lu:] > OU;
Ó > Ou;

ú > u;
Ú > U;

ý > i;
Ý > I;

æ > ai;
Æ } [:Lu:] > AI;
Æ > Ai;

y > i;
Y > I;

þ > th;
Þ } [:Lu:] > TH;
Þ > Th;

ð > d;
Ð > D;

sj > š;
Sj > Š;
SJ > Š;

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
