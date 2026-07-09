export const latnFrRules = `
::Null;

['·] > ;

DZ > DZ; Dz > Dz; dz > dz;
TS > TS; Ts > Ts; ts > ts;
TH > TH; Th > Th; th > th;
DH > DH; Dh > Dh; dh > dh;
KH > KH; Kh > Kh; kh > kh;
GH > GH; Gh > Gh; gh > gh;

NG } [EIYÖÏ] > NGU;
NG } [eiyöï] > NGu;
Ng } [EIYÖÏeiyöï] > Ngu;
ng } [EIYÖÏeiyöï] > ngu;
NG > NG; Ng > Ng; ng > ng;

IJ } [ABDEFGHIKLMNOPQRSTUVWXYZÄÏÖÜŸĆČĐĽŃŠŽ] > EI;
IJ > Ei;
Ij > Ei;
ij > ei;

Š } [ABDEFGHIKLMNOPQRSTUVWXYZÄÏÖÜŸĆČĐĽŃŠŽ] > CH;
Š > Ch;
š > ch;

Č } [ABDEFGHIKLMNOPQRSTUVWXYZÄÏÖÜŸĆČĐĽŃŠŽ] > TCH;
Č > Tch;
č > tch;

Ć } [ABDEFGHIKLMNOPQRSTUVWXYZÄÏÖÜŸĆČĐĽŃŠŽ] > TCH;
Ć > Tch;
ć > tch;

Đ } [ABDEFGHIKLMNOPQRSTUVWXYZÄÏÖÜŸĆČĐĽŃŠŽ] > DJ;
Đ > Dj;
đ > dj;

Ľ } [:^Letter:] > ILLE;
ľ } [:^Letter:] > ille;
Ľ } [ABDEFGHIKLMNOPQRSTUVWXYZÄÏÖÜŸĆČĐĽŃŠŽ] > LI;
Ľ > Li;
ľ > li;

Ń } [ABDEFGHIKLMNOPQRSTUVWXYZÄÏÖÜŸĆČĐĽŃŠŽ] > GN;
Ń > Gn;
ń > gn;

X } [ABDEFGHIKLMNOPQRSTUVWXYZÄÏÖÜŸĆČĐĽŃŠŽ] > KH;
X > Kh;
x > kh;

Ž > J;
ž > j;

[AEIOUYÄÏÖÜŸJaeiouyäïöüÿj] { S } [AEIOUYÄÏÖÜŸaeiouyäïöüÿ] > SS;
[AEIOUYÄÏÖÜŸJaeiouyäïöüÿj] { S } [aeiouyäïöüÿ] > Ss;
[AEIOUYÄÏÖÜŸJaeiouyäïöüÿj] { s } [AEIOUYÄÏÖÜŸaeiouyäïöüÿ] > ss;

S } [:^Letter:] > SSE;
s } [:^Letter:] > sse;

G } [EIYÖÏ] > GU;
G } [eiyöï] > Gu;
g } [EIYÖÏeiyöï] > gu;

Ä } [ABDEFGHIKLMNOPQRSTUVWXYZÄÏÖÜŸĆČĐĽŃŠŽ] > AE;
Ä > Ae;
ä > ae;

Ö } [ABDEFGHIKLMNOPQRSTUVWXYZÄÏÖÜŸĆČĐĽŃŠŽ] > EU;
Ö > Eu;
ö > eu;

U } [ABDEFGHIKLMNOPQRSTUVWXYZÄÏÖÜŸĆČĐĽŃŠŽ] > OU;
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
