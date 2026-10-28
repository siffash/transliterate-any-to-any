export const latnMtRules = `
::Null;

GH > GĦ;
gH > gĦ;
Gh > Għ;
gh > għ;

K [hH] > Ħ;
k [hH] > ħ;

D [žŽ] > Ġ;
d [žŽ] > ġ;

D [zZ] > Z;
d [zZ] > z;

IJ > EJ;
iJ > eJ;
Ij > Ej;
ij > ej;

::Null;

Ľ } [^[:L:][:M:]] > L;
ľ } [^[:L:][:M:]] > l;
Ľ } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > L;
ľ } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > l;
Ľ } [Jj] > L;
ľ } [Jj] > l;
Ľ } [Yy] > L;
ľ } [Yy] > l;
[:Lu:] { Ľ > LJ;
Ľ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > LJ;
Ľ } [:Lu:] > LJ;
Ľ > Lj;
ľ > lj;

Ń } [^[:L:][:M:]] > N;
ń } [^[:L:][:M:]] > n;
Ń } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > N;
ń } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > n;
Ń } [Jj] > N;
ń } [Jj] > n;
Ń } [Yy] > N;
ń } [Yy] > n;
[:Lu:] { Ń > NJ;
Ń } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > NJ;
Ń } [:Lu:] > NJ;
Ń > Nj;
ń > nj;

[ČĆ] > Ċ;
[čć] > ċ;

Đ > Ġ;
đ > ġ;

[ŠŽ] > X;
[šž] > x;

X > Ħ;
x > ħ;

Y > J;
y > j;

T [hH] > T;
t [hH] > t;

T [sS] > Z;
t [sS] > z;

Z > Ż;
z > ż;

Q > K;
q > k;

Ä > A;
ä > a;

Ï > I;
ï > i;

Ö > O;
ö > o;

[ÜŸ] > U;
[üÿ] > u;

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
\\' } [:Lu:] > Q;
\\' > q;
· > ;
`;
