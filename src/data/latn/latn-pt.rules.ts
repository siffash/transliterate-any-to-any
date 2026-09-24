export const latnPtRules = `
::Null;

IJ > EI;
iJ > eI;
Ij > Ei;
ij > ei;

KH > KH;
kH > kH;
Kh > Kh;
kh > kh;

GH } [EIYÏeiyï] > GU;
gH } [EIYÏeiyï] > gU;
Gh } [EIYÏeiyï] > Gu;
gh } [EIYÏeiyï] > gu;

G [hH] > G;
g [hH] > g;

T [hH] > T;
t [hH] > t;

::Null;

[:Lu:] { [ČĆ] > TCH;
[ČĆ] } [:Lu:] > TCH;
[ČĆ] > Tch;
[čć] > tch;

[:Lu:] { Đ > DJ;
Đ } [:Lu:] > DJ;
Đ > Dj;
đ > dj;

Ľ } [^[:L:][:M:]] > L;
ľ } [^[:L:][:M:]] > l;
Ľ } [Hh] > L;
ľ } [Hh] > l;
Ľ } [:Lu:] > LH;
[:Lu:] { Ľ > LH;
Ľ > Lh;
ľ > lh;

Ń } [^[:L:][:M:]] > N;
ń } [^[:L:][:M:]] > n;
Ń } [Hh] > N;
ń } [Hh] > n;
Ń } [:Lu:] > NH;
[:Lu:] { Ń > NH;
Ń > Nh;
ń > nh;

[:Lu:] { Š > CH;
Š } [:Lu:] > CH;
Š > Ch;
š > ch;

[:Lu:] { X > KH;
X } [:Lu:] > KH;
X > Kh;
x > kh;

Ž > J;
ž > j;

[KQ] } [EIYÏ] > QU;
[KQ] } [eiyï] > Qu;
[kq] } [EIYÏ] > qU;
[kq] } [eiyï] > qu;

[KQ] > C;
[kq] > c;

G } [EIYÏ] > GU;
G } [eiyï] > Gu;
g } [EIYÏ] > gU;
g } [eiyï] > gu;

[AEIOUYÄÏÖÜŸaeiouyäïöüÿ] { S } [AEIOUYÄÏÖÜŸaeiouyäïöüÿ] > SS;
[AEIOUYÄÏÖÜŸaeiouyäïöüÿ] { s } [AEIOUYÄÏÖÜŸaeiouyäïöüÿ] > ss;

W > V;
w > v;

[YÏ] > I;
[yï] > i;

Ä > A;
ä > a;

Ö > O;
ö > o;

[ÜŸ] > U;
[üÿ] > u;

[^[:L:][:M:]] { ['·] > ;
['·] } [^[:L:][:M:]] > ;
· > \\-;

::Null;

ç } [eEéÉêÊiIíÍyY] > c;
Ç } [eEéÉêÊiIíÍyY] > C;
ç } [bBcCdDfFgGhHjJkKlLmMnNpPqQrRsStTvVwWxXzZ] > s;
Ç } [bBcCdDfFgGhHjJkKlLmMnNpPqQrRsStTvVwWxXzZ] > S;
[bBcCdDfFgGhHjJkKlLmMnNpPqQrRsStTvVwWxXzZ] { ç > s;
[bBcCdDfFgGhHjJkKlLmMnNpPqQrRsStTvVwWxXzZ] { Ç > S;
[^[:L:][:M:]] { ç > s;
[^[:L:][:M:]] { Ç > S;
ç } [^[:L:][:M:]] > s;
Ç } [^[:L:][:M:]] > S;

[^[:L:][:M:]] { r [rR] > r;
[^[:L:][:M:]] { R [rR] > R;
r [rR] } [^[:L:][:M:]] > r;
R [rR] } [^[:L:][:M:]] > R;
[bBcCdDfFgGhHjJkKlLmMnNpPqQsStTvVwWxXzZ] { r [rR] > r;
[bBcCdDfFgGhHjJkKlLmMnNpPqQsStTvVwWxXzZ] { R [rR] > R;
r [rR] } [bBcCdDfFgGhHjJkKlLmMnNpPqQsStTvVwWxXzZ] > r;
R [rR] } [bBcCdDfFgGhHjJkKlLmMnNpPqQsStTvVwWxXzZ] > R;

[^[:L:][:M:]] { s [sS] > s;
[^[:L:][:M:]] { S [sS] > S;
s [sS] } [^[:L:][:M:]] > s;
S [sS] } [^[:L:][:M:]] > S;
[bBcCdDfFgGhHjJkKlLmMnNpPqQrRtTvVwWxXzZ] { s [sS] > s;
[bBcCdDfFgGhHjJkKlLmMnNpPqQrRtTvVwWxXzZ] { S [sS] > S;
s [sS] } [bBcCdDfFgGhHjJkKlLmMnNpPqQrRtTvVwWxXzZ] > s;
S [sS] } [bBcCdDfFgGhHjJkKlLmMnNpPqQrRtTvVwWxXzZ] > S;
`;
