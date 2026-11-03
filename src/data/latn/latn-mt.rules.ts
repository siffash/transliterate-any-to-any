export const latnMtRules = `
::Null;

[:Lu:] { Ŋ > NG;
Ŋ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > NG;
Ŋ } [:Lu:] > NG;
Ŋ > Ng;
ŋ > ng;

[:Lu:] { Ɣ > GĦ;
Ɣ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > GĦ;
Ɣ } [:Lu:] > GĦ;
Ɣ > Għ;
ɣ > għ;

Ḫ > Ħ;
ḫ > ħ;

Ǯ > Ġ;
ǯ > ġ;

Ẑ > Z;
ẑ > z;

IJ > EJ;
iJ > eJ;
Ij > Ej;
ij > ej;

::Null;

Ľ } [^[:L:][:M:]] > L;
ľ } [^[:L:][:M:]] > l;
Ľ } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁþÞ] > L;
ľ } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁþÞ] > l;
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
Ń } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁþÞ] > N;
ń } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁþÞ] > n;
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

Þ > T;
þ > t;

C > Z;
c > z;

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
