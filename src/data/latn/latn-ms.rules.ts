export const latnMsRules = `
::NFC;

IJ > EI;
Ij > Ei;
iJ > eI;
ij > ei;

D [žŽ] > J;
d [žŽ] > j;

D [zZ] > Z;
d [zZ] > z;

T [sS] > S;
t [sS] > s;

T [hH] > S;
t [hH] > s;

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

[^[:L:][:M:]] { \\' > ;
\\' } [AEIOUaeiou] > ;
[:Lu:] { \\' } [:Lu:] > K;
[:Lu:] { \\' } [^[:L:][:M:]] > K;
\\' > k;

::Null;

[sSnN] [yY] { [yY]+ > ;
`;
