export const latnFrRules = `
::Null;

['·] > ;

DZ > DZ; Dz > Dz; dz > dz;
TS > TS; Ts > Ts; ts > ts;
TH > TH; Th > Th; th > th;
KH > KH; Kh > Kh; kh > kh;
GH > GH; Gh > Gh; gh > gh;

NG } [EIYÖÏ] > NGU;
NG } [eiyöï] > NGu;
Ng } [EIYÖÏeiyöï] > Ngu;
ng } [EIYÖÏeiyöï] > ngu;
NG > NG; Ng > Ng; ng > ng;

IJ > EI;
Ij > Ei;
ij > ei;

Š } [ABDEFGHIKLMNOPQRSTUVWXYZÄÏÖÜŸĆČĐĽŃŠŽJ] > CH;
Š > Ch;
š > ch;

Č } [ABDEFGHIKLMNOPQRSTUVWXYZÄÏÖÜŸĆČĐĽŃŠŽJ] > TCH;
Č > Tch;
č > tch;

Ć } [ABDEFGHIKLMNOPQRSTUVWXYZÄÏÖÜŸĆČĐĽŃŠŽJ] > TCH;
Ć > Tch;
ć > tch;

Đ } [ABDEFGHIKLMNOPQRSTUVWXYZÄÏÖÜŸĆČĐĽŃŠŽJ] > DJ;
Đ > Dj;
đ > dj;

Ľ } [:^Letter:] > ILLE;
ľ } [:^Letter:] > ille;
Ľ } [ABDEFGHIKLMNOPQRSTUVWXYZÄÏÖÜŸĆČĐĽŃŠŽJ] > LI;
Ľ > Li;
ľ > li;

Ń } [ABDEFGHIKLMNOPQRSTUVWXYZÄÏÖÜŸĆČĐĽŃŠŽJ] > GN;
Ń > Gn;
ń > gn;

X } [ABDEFGHIKLMNOPQRSTUVWXYZÄÏÖÜŸĆČĐĽŃŠŽJ] > KH;
X > Kh;
x > kh;

Ž > J;
ž > j;

[AEIOUYÄÏÖÜŸaeiouyäïöüÿ] { S } [AEIOUYÄÏÖÜŸ] > SS;
[AEIOUYÄÏÖÜŸaeiouyäïöüÿ] { S } [aeiouyäïöüÿ] > Ss;
[AEIOUYÄÏÖÜŸaeiouyäïöüÿ] { s } [AEIOUYÄÏÖÜŸaeiouyäïöüÿ] > ss;

S } [:^Letter:] > SSE;
s } [:^Letter:] > sse;

G } [EIYÖÏ] > GU;
G } [eiyöï] > Gu;
g } [EIYÖÏeiyöï] > gu;

Ä } [ABDEFGHIKLMNOPQRSTUVWXYZÄÏÖÜŸĆČĐĽŃŠŽJ] > AE;
Ä > Ae;
ä > ae;

Ö } [ABDEFGHIKLMNOPQRSTUVWXYZÄÏÖÜŸĆČĐĽŃŠŽJ] > EU;
Ö > Eu;
ö > eu;

U } [ABDEFGHIKLMNOPQRSTUVWXYZÄÏÖÜŸĆČĐĽŃŠŽJ] > OU;
U > Ou;
u > ou;

Ü > U;
ü > u;

Ÿ > U;
ÿ > u;

Ï > I;
ï > i;

::Null;

ç } [eéèêëiîïyEÉÈÊËIÎÏY] > c;
Ç } [eéèêëiîïyEÉÈÊËIÎÏY] > C;
`;
