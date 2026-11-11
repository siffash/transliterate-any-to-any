export const latnDaRules = `
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

[:Lu:] { C > TS;
C } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > TS;
C } [:Lu:] > TS;
C > Ts;
c > ts;

č } č > t;
Č } Č > T;
ć } ć > t;
Ć } Ć > T;
đ } đ > d;
Đ } Đ > D;
ǯ } ǯ > d;
Ǯ } Ǯ > D;
[Šš] { [Šš] > ;

::Null;

[Tt] [Ss] { [Tt] [Ss] > ;

[:Lu:] { Ǯ > DJ;
Ǯ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > DJ;
Ǯ } [:Lu:] > DJ;
Ǯ > Dj;
ǯ > dj;

[:Lu:] { Ẑ > DS;
Ẑ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > DS;
Ẑ } [:Lu:] > DS;
Ẑ > Ds;
ẑ > ds;

IJ > EJ;
Ij > Ej;
iJ > eJ;
ij > ej;

Þ > T;
þ > t;

Ɣ > G;
ɣ > g;

::Null;

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
· > ;

[:Lu:] { [ĆČ] > TJ;
[ĆČ] } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > TJ;
[ĆČ] } [:Lu:] > TJ;
[ĆČ] > Tj;
[ćč] > tj;

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

[:Lu:] { X > KH;
X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KH;
X } [:Lu:] > KH;
X > Kh;
x > kh;

Q > K;
q > k;

W > V;
w > v;

Ä > Æ;
ä > æ;

Ö > Ø;
ö > ø;

Ï > Y;
ï > y;

Y > J;
y > j;

[ÜŸ] > Y;
[üÿ] > y;

::Null;

[bcdfghklmnpqrstvwxzBCDFGHKLMNPQRSTVWXZ] [jJ] { [jJ]+ > ;
`;
