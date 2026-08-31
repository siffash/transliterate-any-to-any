export const viLatnRules = `
::NFD;

[̣̀́̃̉] > ;

::NFC;

Ngh > Ng;
NGH > NG;
NGh > NG;
ngh > ng;

Ng > Ng;
NG > NG;
ng > ng;

Nh > Ń;
NH > Ń;
nh > ń;

Kh > X;
KH > X;
kh > x;

Ph > F;
PH > F;
ph > f;

Ch > Ć;
CH > Ć;
ch > ć;

Tr > Č;
TR > Č;
tr > č;

Gh > Gh;
GH > GH;
gh > gh;

Gi } [AĂÂEOÔƠUƯaăâeoôơuư] > Z;
GI } [AĂÂEOÔƠUƯaăâeoôơuư] > Z;
gi } [AĂÂEOÔƠUƯaăâeoôơuư] > z;
gI } [AĂÂEOÔƠUƯaăâeoôơuư] > z;

Gi > Zi;
GI > ZI;
gi > zi;
gI > zI;

G > Gh;
g > gh;

D > Z;
d > z;

Đ > D;
đ > d;

Qu } [AĂÂEÊIOÔƠUƯYaăâeêioôơuưy] > Kw;
QU } [AĂÂEÊIOÔƠUƯYaăâeêioôơuưy] > KW;
qu } [AĂÂEÊIOÔƠUƯYaăâeêioôơuưy] > kw;
qU } [AĂÂEÊIOÔƠUƯYaăâeêioôơuưy] > kW;

[QC] > K;
[qc] > k;

X > S;
x > s;

[ĂÂ] > A;
[ăâ] > a;
Ê > E;
ê > e;
[ÔƠ] > O;
[ôơ] > o;
Ư > Ï;
ư > ï;
`;
