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

[:Lu:] { [ČĆ] } [:^Letter:] > TCH;
[ČĆ] } [:Lu:] > TCH;
[ČĆ] > Tch;
[čć] > tch;

[:Lu:] { Đ } [:^Letter:] > DJ;
Đ } [:Lu:] > DJ;
Đ > Dj;
đ > dj;

[:Lu:] { Ľ } [:^Letter:] > LH;
Ľ } [:Lu:] > LH;
Ľ > Lh;
ľ > lh;

[:Lu:] { Ń } [:^Letter:] > NH;
Ń } [:Lu:] > NH;
Ń > Nh;
ń > nh;

[:Lu:] { Š } [:^Letter:] > CH;
Š } [:Lu:] > CH;
Š > Ch;
š > ch;

[:Lu:] { X } [:^Letter:] > KH;
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

[:^Letter:] { ['·] > ;
['·] } [:^Letter:] > ;
· > \\-;

::Null;

ç } [eEéÉêÊiIíÍyY] > c;
Ç } [eEéÉêÊiIíÍyY] > C;
ç } [bBcCdDfFgGhHjJkKlLmMnNpPqQrRsStTvVwWxXzZ] > s;
Ç } [bBcCdDfFgGhHjJkKlLmMnNpPqQrRsStTvVwWxXzZ] > S;
[bBcCdDfFgGhHjJkKlLmMnNpPqQrRsStTvVwWxXzZ] { ç > s;
[bBcCdDfFgGhHjJkKlLmMnNpPqQrRsStTvVwWxXzZ] { Ç > S;
[:^Letter:] { ç > s;
[:^Letter:] { Ç > S;
ç } [:^Letter:] > s;
Ç } [:^Letter:] > S;

[:^Letter:] { rr > r;
[:^Letter:] { Rr > R;
[:^Letter:] { rR > R;
[:^Letter:] { RR > R;
rr } [:^Letter:] > r;
Rr } [:^Letter:] > r;
rR } [:^Letter:] > R;
RR } [:^Letter:] > R;
[bBcCdDfFgGhHjJkKlLmMnNpPqQsStTvVwWxXzZ] { rr > r;
[bBcCdDfFgGhHjJkKlLmMnNpPqQsStTvVwWxXzZ] { Rr > R;
[bBcCdDfFgGhHjJkKlLmMnNpPqQsStTvVwWxXzZ] { rR > R;
[bBcCdDfFgGhHjJkKlLmMnNpPqQsStTvVwWxXzZ] { RR > R;
rr } [bBcCdDfFgGhHjJkKlLmMnNpPqQsStTvVwWxXzZ] > r;
Rr } [bBcCdDfFgGhHjJkKlLmMnNpPqQsStTvVwWxXzZ] > r;
rR } [bBcCdDfFgGhHjJkKlLmMnNpPqQsStTvVwWxXzZ] > R;
RR } [bBcCdDfFgGhHjJkKlLmMnNpPqQsStTvVwWxXzZ] > R;

[:^Letter:] { ss > s;
[:^Letter:] { Ss > S;
[:^Letter:] { sS > S;
[:^Letter:] { SS > S;
ss } [:^Letter:] > s;
Ss } [:^Letter:] > s;
sS } [:^Letter:] > S;
SS } [:^Letter:] > S;
[bBcCdDfFgGhHjJkKlLmMnNpPqQrRtTvVwWxXzZ] { ss > s;
[bBcCdDfFgGhHjJkKlLmMnNpPqQrRtTvVwWxXzZ] { Ss > S;
[bBcCdDfFgGhHjJkKlLmMnNpPqQrRtTvVwWxXzZ] { sS > S;
[bBcCdDfFgGhHjJkKlLmMnNpPqQrRtTvVwWxXzZ] { SS > S;
ss } [bBcCdDfFgGhHjJkKlLmMnNpPqQrRtTvVwWxXzZ] > s;
Ss } [bBcCdDfFgGhHjJkKlLmMnNpPqQrRtTvVwWxXzZ] > s;
sS } [bBcCdDfFgGhHjJkKlLmMnNpPqQrRtTvVwWxXzZ] > S;
SS } [bBcCdDfFgGhHjJkKlLmMnNpPqQrRtTvVwWxXzZ] > S;
`;
