export const latnFiRules = `
::Null;

č } č > t;
Č } Č > T;
dž } dž > d;
DŽ } DŽ > D;

::Null;

ts } ts > ;
TS } TS > ;

IJ > EI;
iJ > eI;
Ij > Ei;
ij > ei;

T [hH] > T;
t [hH] > t;

[nN] { G } [hH] > G;
[nN] { g } [hH] > g;
G [hH] > G;
g [hH] > g;

K [hH] > H;
k [hH] > h;

::Null;

[:Lu:] { [ČĆ] > TŠ;
[ČĆ] } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > TŠ;
[ČĆ] } [:Lu:] > TŠ;
[ČĆ] > Tš;
[čć] > tš;

[:Lu:] { Đ > DŽ;
Đ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > DŽ;
Đ } [:Lu:] > DŽ;
Đ > Dž;
đ > dž;

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

X > H;
x > h;

Y > J;
y > j;

[ÜŸ] > Y;
[üÿ] > y;

Ï > I;
ï > i;

Q > K;
q > k;

W > V;
w > v;

[^[:L:][:M:]] { ['·] > ;
['·] } [^[:L:][:M:]] > ;
· > \\-;

::Null;

j } [bcdfghklmnpqrstvwxzšžBCDFGHKLMNPQRSTVWXZŠŽ] > i;
J } [bcdfghklmnpqrstvwxzšžBCDFGHKLMNPQRSTVWXZŠŽ] > I;
j } [^[:L:][:M:]] > i;
J } [^[:L:][:M:]] > I;
`;
