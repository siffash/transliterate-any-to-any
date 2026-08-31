export const latnFrRules = `
::Null;

IJ > EI;
Ij > Ei;
ij > ei;

::Null;

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
· > ;

Š } [:Lu:] > CH;
Š > Ch;
š > ch;

[ČĆ] } [:Lu:] > TCH;
[ČĆ] > Tch;
[čć] > tch;

Đ } [:Lu:] > DJ;
Đ > Dj;
đ > dj;

Ľ } [^[:L:][:M:]] > ILLE;
ľ } [^[:L:][:M:]] > ille;
Ľ } [:Lu:] > LI;
Ľ > Li;
ľ > li;

Ń } [:Lu:] > GN;
Ń > Gn;
ń > gn;

X } [:Lu:] > KH;
X > Kh;
x > kh;

Ž > J;
ž > j;

[AEIOUYÄÏÖÜŸaeiouyäïöüÿ] { S } [AEIOUYÄÏÖÜŸ] > SS;
[AEIOUYÄÏÖÜŸaeiouyäïöüÿ] { S } [aeiouyäïöüÿ] > Ss;
[AEIOUYÄÏÖÜŸaeiouyäïöüÿ] { s } [AEIOUYÄÏÖÜŸaeiouyäïöüÿ] > ss;

S } [^[:L:][:M:]] > SSE;
s } [^[:L:][:M:]] > sse;

G } [EIYÖÏ] > GU;
G } [eiyöï] > Gu;
g } [EIYÖÏeiyöï] > gu;

Ä } [:Lu:] > AE;
Ä > Ae;
ä > ae;

Ö } [:Lu:] > EU;
Ö > Eu;
ö > eu;

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
