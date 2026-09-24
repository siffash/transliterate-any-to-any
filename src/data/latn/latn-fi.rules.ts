export const latnFiRules = `
::Null;

IJ > EI;
iJ > eI;
Ij > Ei;
ij > ei;

T [hH] > T;
t [hH] > t;

G [hH] > G;
g [hH] > g;

K [hH] > H;
k [hH] > h;

::Null;

[:Lu:] { [ČĆ] > TŠ;
[ČĆ] } [:Lu:] > TŠ;
[ČĆ] > Tš;
[čć] > tš;

[:Lu:] { Đ > DŽ;
Đ } [:Lu:] > DŽ;
Đ > Dž;
đ > dž;

Ń } [^[:L:][:M:]] > N;
ń } [^[:L:][:M:]] > n;
Ń } [Jj] > N;
ń } [Jj] > n;
[:Lu:] { Ń > NJ;
Ń } [:Lu:] > NJ;
Ń > Nj;
ń > nj;

Ľ } [^[:L:][:M:]] > L;
ľ } [^[:L:][:M:]] > l;
Ľ } [Jj] > L;
ľ } [Jj] > l;
[:Lu:] { Ľ > LJ;
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
