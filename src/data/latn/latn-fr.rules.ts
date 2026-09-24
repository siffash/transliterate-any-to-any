export const latnFrRules = `
::Null;

IJ > EI;
iJ > eI;
Ij > Ei;
ij > ei;

::Null;

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
· > ;

[:Lu:] { Š > CH;
Š } [:Lu:] > CH;
Š > Ch;
š > ch;

[:Lu:] { [ČĆ] > TCH;
[ČĆ] } [:Lu:] > TCH;
[ČĆ] > Tch;
[čć] > tch;

[:Lu:] { Đ > DJ;
Đ } [:Lu:] > DJ;
Đ > Dj;
đ > dj;

Ľ } [^[:L:][:M:]] > ILLE;
ľ } [^[:L:][:M:]] > ille;
Ľ } [IÏiï] > L;
ľ } [IÏiï] > l;
[:Lu:] { Ľ > LI;
Ľ } [:Lu:] > LI;
Ľ > Li;
ľ > li;

[:Lu:] { Ń > GN;
Ń } [:Lu:] > GN;
Ń > Gn;
ń > gn;

[:Lu:] { X > KH;
X } [:Lu:] > KH;
X > Kh;
x > kh;

Ž > J;
ž > j;

[AEIOUYÄÏÖÜŸaeiouyäïöüÿ] { S } [AEIOUYÄÏÖÜŸ] > SS;
[AEIOUYÄÏÖÜŸaeiouyäïöüÿ] { S } [aeiouyäïöüÿ] > Ss;
[AEIOUYÄÏÖÜŸaeiouyäïöüÿ] { s } [AEIOUYÄÏÖÜŸaeiouyäïöüÿ] > ss;

[:Lu:] { S } [^[:L:][:M:]] > SSE;
S } [^[:L:][:M:]] > Sse;
s } [^[:L:][:M:]] > sse;

G } [EIYÖÏ] > GU;
G } [eiyöï] > Gu;
g } [EIYÖÏ] > gU;
g } [eiyöï] > gu;

[:Lu:] { Ä > AE;
Ä } [:Lu:] > AE;
Ä > Ae;
ä > ae;

[:Lu:] { Ö > EU;
Ö } [:Lu:] > EU;
Ö > Eu;
ö > eu;

[:Lu:] { U > OU;
U } [:Lu:] > OU;
U > Ou;
u > ou;

[ÜŸ] > U;
[üÿ] > u;

Ï > I;
ï > i;

::Null;

ç } [eéèêëiîïyEÉÈÊËIÎÏY] > c;
Ç } [eéèêëiîïyEÉÈÊËIÎÏY] > C;
`;
