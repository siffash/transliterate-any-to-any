export const latnPtRules = `
::Null;

[:Lu:] { Ŋ > NG;
Ŋ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > NG;
Ŋ } [:Lu:] > NG;
Ŋ > Ng;
ŋ > ng;

[:Lu:] { C > TS;
C } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > TS;
C } [:Lu:] > TS;
C > Ts;
c > ts;

[:Lu:] { Ẑ > DZ;
Ẑ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > DZ;
Ẑ } [:Lu:] > DZ;
Ẑ > Dz;
ẑ > dz;

[:Lu:] { Ǯ > DŽ;
Ǯ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > DŽ;
Ǯ } [:Lu:] > DŽ;
Ǯ > Dž;
ǯ > dž;

::Null;

[Čč] { [Čč] > ;
[Ćć] { [Ćć] > ;
[Đđ] { [Đđ] > ;
[Šš] { [Šš] > ;
[Dd] [Žž] { [Dd] [Žž] > ;

[Tt] [Ss] { [Tt] [Ss] > ;

IJ > EI;
iJ > eI;
Ij > Ei;
ij > ei;

[:Lu:] { Ḫ > KH;
Ḫ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KH;
Ḫ } [:Lu:] > KH;
Ḫ > Kh;
ḫ > kh;
KH > KH;
kH > kH;
Kh > Kh;
kh > kh;

[:Lu:] { Ɣ } [EIYÏeiyï] > GU;
Ɣ } [EIYÏ] > GU;
Ɣ } [EIYÏeiyï] > Gu;
ɣ } [EIYÏeiyï] > gu;

Ɣ > G;
ɣ > g;

Þ > T;
þ > t;

::Null;

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

Ľ } [^[:L:][:M:]] > L;
ľ } [^[:L:][:M:]] > l;
Ľ } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > L;
ľ } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > l;
Ľ } [Hh] > L;
ľ } [Hh] > l;
Ľ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > LH;
Ľ } [:Lu:] > LH;
[:Lu:] { Ľ > LH;
Ľ > Lh;
ľ > lh;

Ń } [^[:L:][:M:]] > N;
ń } [^[:L:][:M:]] > n;
Ń } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > N;
ń } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > n;
Ń } [Hh] > N;
ń } [Hh] > n;
Ń } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > NH;
Ń } [:Lu:] > NH;
[:Lu:] { Ń > NH;
Ń > Nh;
ń > nh;

[:Lu:] { Š > CH;
Š } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > CH;
Š } [:Lu:] > CH;
Š > Ch;
š > ch;

[:Lu:] { X > KH;
X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KH;
X } [:Lu:] > KH;
X > Kh;
x > kh;

Ž > J;
ž > j;

Q } [EIYÏ] > QU;
Q } [eiyï] > Qu;
q } [EIYÏ] > qU;
q } [eiyï] > qu;

Q > C;
q > c;

G } [EIYÏ] > GU;
G } [eiyï] > Gu;
g } [EIYÏ] > gU;
g } [eiyï] > gu;

[AEIOUYÄÏÖÜŸaeiouyäïöüÿ] { S } [AEIOUYÄÏÖÜŸaeiouyäïöüÿ] > SS;
[AEIOUYÄÏÖÜŸaeiouyäïöüÿ] { s } [AEIOUYÄÏÖÜŸaeiouyäïöüÿ] > ss;

W > V;
w > v;

[iI] { [yY] > ;
Y [iï] > I;
[yY] } [iIïÏ] > ;

Y > I;
y > i;

Ï > Y;
ï > y;

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

[iI] [iI] { [iI]+ > ;
[uU] [uU] { [uU]+ > ;
`;
