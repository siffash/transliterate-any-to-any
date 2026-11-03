export const latnMsRules = `
::Null;

[:Lu:] { Ḫ > KH;
Ḫ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KH;
Ḫ } [:Lu:] > KH;
Ḫ > Kh;
ḫ > kh;

[:Lu:] { Ŋ > NG;
Ŋ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > NG;
Ŋ } [:Lu:] > NG;
Ŋ > Ng;
ŋ > ng;

[:Lu:] { Ɣ > GH;
Ɣ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > GH;
Ɣ } [:Lu:] > GH;
Ɣ > Gh;
ɣ > gh;

[Čč] { [Čč] > ;
[Šš] { [Šš] > ;
[Ǯǯ] { [Ǯǯ] > ;

::NFC;

IJ > EI;
Ij > Ei;
iJ > eI;
ij > ei;

Ǯ > J;
ǯ > j;

Ẑ > Z;
ẑ > z;

[CÞ] > S;
[cþ] > s;

::Null;

[ÄÏ] > E;
[äï] > e;

Ö > O;
ö > o;

[ÜŸ] > U;
[üÿ] > u;

Q > K;
q > k;

[:Lu:] { X > KH;
X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KH;
X } [:Lu:] > KH;
X > Kh;
x > kh;

Ľ } [^[:L:][:M:]] > L;
ľ } [^[:L:][:M:]] > l;
Ľ } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > L;
ľ } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > l;
Ľ } [Yy] > L;
ľ } [Yy] > l;
[:Lu:] { Ľ > LY;
Ľ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > LY;
Ľ } [:Lu:] > LY;
Ľ > Ly;
ľ > ly;

Ń } [^[:L:][:M:]] > N;
ń } [^[:L:][:M:]] > n;
Ń } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > N;
ń } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > n;
Ń } [Yy] > N;
ń } [Yy] > n;
[:Lu:] { Ń > NY;
Ń } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > NY;
Ń } [:Lu:] > NY;
Ń > Ny;
ń > ny;

[:Lu:] { Š > SY;
Š } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > SY;
Š } [:Lu:] > SY;
Š > Sy;
š > sy;

Ž > Z;
ž > z;

Đ > J;
đ > j;

[ČĆ] > C;
[čć] > c;

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
· > ;

::Null;

\\' > ;

[sSnN] [yY] { [yY]+ > ;
`;
