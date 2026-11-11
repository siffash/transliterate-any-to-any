export const latnSvRules = `
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

::Null;

[Šš] { [Šš] > ;
č } č > t;
Č } Č > T;
ć } ć > t;
Ć } Ć > T;
đ } đ > d;
Đ } Đ > D;
ǯ } ǯ > d;
Ǯ } Ǯ > D;

[Tt] [Ss] { [Tt] [Ss] > ;

[:Lu:] { Ǯ > DJ;
Ǯ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > DJ;
Ǯ } [:Lu:] > DJ;
Ǯ > Dj;
ǯ > dj;

Þ > T;
þ > t;

Ɣ > G;
ɣ > g;

[:Lu:] { Ḫ > CH;
Ḫ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > CH;
Ḫ } [:Lu:] > CH;
Ḫ > Ch;
ḫ > ch;

IJ > EJ;
iJ > eJ;
Ij > Ej;
ij > ej;

::Null;

[:Lu:] { [ČĆ] > TJ;
[ČĆ] } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > TJ;
[ČĆ] } [:Lu:] > TJ;
[ČĆ] > Tj;
[čć] > tj;

[:Lu:] { Đ > DJ;
Đ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > DJ;
Đ } [:Lu:] > DJ;
Đ > Dj;
đ > dj;

Ľ } [^[:L:][:M:]] > L;
ľ } [^[:L:][:M:]] > l;
Ľ } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > L;
ľ } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > l;
Ľ } [Jj] > L;
ľ } [Jj] > l;
Ľ } [Yy] > L;
ľ } [Yy] > l;
Ľ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > LJ;
Ľ } [:Lu:] > LJ;
[:Lu:] { Ľ > LJ;
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
Ń } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > NJ;
Ń } [:Lu:] > NJ;
[:Lu:] { Ń > NJ;
Ń > Nj;
ń > nj;

[:Lu:] { Š > SJ;
Š } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > SJ;
Š } [:Lu:] > SJ;
Š > Sj;
š > sj;

[:Lu:] { Ž > ZJ;
Ž } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > ZJ;
Ž } [:Lu:] > ZJ;
Ž > Zj;
ž > zj;

[:Lu:] { X > CH;
X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > CH;
X } [:Lu:] > CH;
X > Ch;
x > ch;

Q > K;
q > k;

W > V;
w > v;

Y > J;
y > j;

[ÜŸ] > Y;
[üÿ] > y;

Ï > Y;
ï > y;

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
· > ;

::Null;

[bcdfghklmnpqrstvwxzBCDFGHKLMNPQRSTVWXZ] [jJ] { [jJ]+ > ;
`;
