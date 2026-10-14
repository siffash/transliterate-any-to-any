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
Š } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > CH;
Š } [:Lu:] > CH;
Š > Ch;
š > ch;

[:Lu:] { [ČĆ] > TCH;
[ČĆ] } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > TCH;
[ČĆ] } [:Lu:] > TCH;
[ČĆ] > Tch;
[čć] > tch;

[:Lu:] { Đ > DJ;
Đ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > DJ;
Đ } [:Lu:] > DJ;
Đ > Dj;
đ > dj;

[^[:L:][:M:]] { Ľ } [^[:L:][:M:]] > L;
[^[:L:][:M:]] { ľ } [^[:L:][:M:]] > l;
[:Lu:] { Ľ } [^[:L:][:M:]] > ILLE;
Ľ } [^[:L:][:M:]] > Ille;
ľ } [^[:L:][:M:]] > ille;

Ľ } [IÏiï] > L;
ľ } [IÏiï] > l;

[:Lu:] { Ľ > LI;
Ľ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > LI;
Ľ } [:Lu:] > LI;
Ľ > Li;
ľ > li;

[:Lu:] { Ń > GN;
Ń } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > GN;
Ń } [:Lu:] > GN;
Ń > Gn;
ń > gn;

[:Lu:] { X > KH;
X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KH;
X } [:Lu:] > KH;
X > Kh;
x > kh;

Ž > J;
ž > j;

[AEIOUYÄÏÖÜŸ] { S } [AEIOUYÄÏÖÜŸaeiouyäïöüÿ] > SS;
[AEIOUYÄÏÖÜŸaeiouyäïöüÿ] { S } [AEIOUYÄÏÖÜŸ] > SS;
[AEIOUYÄÏÖÜŸaeiouyäïöüÿ] { S } [AEIOUYÄÏÖÜŸaeiouyäïöüÿ] > Ss;
[AEIOUYÄÏÖÜŸaeiouyäïöüÿ] { s } [AEIOUYÄÏÖÜŸaeiouyäïöüÿ] > ss;

[^[:L:][:M:]] { S } [^[:L:][:M:]] > S;
[^[:L:][:M:]] { s } [^[:L:][:M:]] > s;
[:Lu:] { S } [^[:L:][:M:]] > SSE;
S } [^[:L:][:M:]] > Sse;
s } [^[:L:][:M:]] > sse;

G } [EIYÖÏ] > GU;
G } [eiyöï] > Gu;
g } [EIYÖÏ] > gU;
g } [eiyöï] > gu;

[:Lu:] { Ä > AE;
Ä } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > AE;
Ä } [:Lu:] > AE;
Ä > Ae;
ä > ae;

[:Lu:] { Ö > EU;
Ö } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > EU;
Ö } [:Lu:] > EU;
Ö > Eu;
ö > eu;

[:Lu:] { U > OU;
U } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > OU;
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
