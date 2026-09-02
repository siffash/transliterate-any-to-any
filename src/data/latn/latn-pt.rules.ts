export const latnPtRules = `
::Null;

IJ > EI;
Ij > Ei;
ij > ei;

KH > KH;
Kh > Kh;
kh > kh;

GH } [EIYÏ] > GU;
Gh } [eiyï] > Gu;
gh } [eiyï] > gu;

GH > G;
Gh > G;
gh > g;

TH > T;
Th > T;
th > t;

::Null;

[:Lu:] { [ČĆ] } [^[:L:][:M:]] > TCH;
[ČĆ] } [:Lu:] > TCH;
[ČĆ] > Tch;
[čć] > tch;

[:Lu:] { Đ } [^[:L:][:M:]] > DJ;
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

[:Lu:] { Š } [^[:L:][:M:]] > CH;
Š } [:Lu:] > CH;
Š > Ch;
š > ch;

[:Lu:] { X } [^[:L:][:M:]] > KH;
X } [:Lu:] > KH;
X > Kh;
x > kh;

Ž > J;
ž > j;

[KQ] } [EIYÏ] > QU;
[KQ] } [eiyï] > Qu;
[kq] } [eiyï] > qu;

[KQ] > C;
[kq] > c;

G } [EIYÏ] > GU;
G } [eiyï] > Gu;
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

[^[:L:][:M:]] { rr > r;
[^[:L:][:M:]] { Rr > R;
[^[:L:][:M:]] { rR > R;
[^[:L:][:M:]] { RR > R;
rr } [^[:L:][:M:]] > r;
Rr } [^[:L:][:M:]] > r;
rR } [^[:L:][:M:]] > R;
RR } [^[:L:][:M:]] > R;
[bBcCdDfFgGhHjJkKlLmMnNpPqQsStTvVwWxXzZ] { rr > r;
[bBcCdDfFgGhHjJkKlLmMnNpPqQsStTvVwWxXzZ] { Rr > R;
[bBcCdDfFgGhHjJkKlLmMnNpPqQsStTvVwWxXzZ] { rR > R;
[bBcCdDfFgGhHjJkKlLmMnNpPqQsStTvVwWxXzZ] { RR > R;
rr } [bBcCdDfFgGhHjJkKlLmMnNpPqQsStTvVwWxXzZ] > r;
Rr } [bBcCdDfFgGhHjJkKlLmMnNpPqQsStTvVwWxXzZ] > r;
rR } [bBcCdDfFgGhHjJkKlLmMnNpPqQsStTvVwWxXzZ] > R;
RR } [bBcCdDfFgGhHjJkKlLmMnNpPqQsStTvVwWxXzZ] > R;

[^[:L:][:M:]] { ss > s;
[^[:L:][:M:]] { Ss > S;
[^[:L:][:M:]] { sS > S;
[^[:L:][:M:]] { SS > S;
ss } [^[:L:][:M:]] > s;
Ss } [^[:L:][:M:]] > s;
sS } [^[:L:][:M:]] > S;
SS } [^[:L:][:M:]] > S;
[bBcCdDfFgGhHjJkKlLmMnNpPqQrRtTvVwWxXzZ] { ss > s;
[bBcCdDfFgGhHjJkKlLmMnNpPqQrRtTvVwWxXzZ] { Ss > S;
[bBcCdDfFgGhHjJkKlLmMnNpPqQrRtTvVwWxXzZ] { sS > S;
[bBcCdDfFgGhHjJkKlLmMnNpPqQrRtTvVwWxXzZ] { SS > S;
ss } [bBcCdDfFgGhHjJkKlLmMnNpPqQrRtTvVwWxXzZ] > s;
Ss } [bBcCdDfFgGhHjJkKlLmMnNpPqQrRtTvVwWxXzZ] > s;
sS } [bBcCdDfFgGhHjJkKlLmMnNpPqQrRtTvVwWxXzZ] > S;
SS } [bBcCdDfFgGhHjJkKlLmMnNpPqQrRtTvVwWxXzZ] > S;
`;
