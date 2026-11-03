export const viLatnRules = `
::NFD;

[[:L:][:M:]] { \\' } [[:L:][:M:]] > ’;

[̣̀́̃̉] > ;

::NFC;

N [gG] [hH]? > Ŋ;
n [gG] [hH]? > ŋ;

N [hH] > Ń;
n [hH] > ń;

K [hH] > X;
k [hH] > x;

T [hH] > Þ;
t [hH] > þ;

P [hH] > F;
p [hH] > f;

C [hH] > Ć;
c [hH] > ć;

T [rR] > Č;
t [rR] > č;

G [hH] > Ɣ;
g [hH] > ɣ;

G [iI] } [AĂÂEOÔƠUƯaăâeoôơuư] > Z;
g [iI] } [AĂÂEOÔƠUƯaăâeoôơuư] > z;

Gi > Zi;
GI > ZI;
gi > zi;
gI > zI;

G > Ɣ;
g > ɣ;

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

[^aeioïAEIOÏ] { Y } [^AĂÂEÊIOÔƠUƯaăâeêioôơuư] > I;
[^aeioïAEIOÏ] { y } [^AĂÂEÊIOÔƠUƯaăâeêioôơuư] > i;

J > Y;
j > y;
`;
