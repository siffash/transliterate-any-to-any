export const latnNoRules = `
::Null;

IJ > EI;
iJ > eI;
Ij > Ei;
ij > ei;

T [hH] > T;
t [hH] > t;

G [hH] > G;
g [hH] > g;

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
· > ;

::Null;

Ä > Æ;
ä > æ;

Ö > Ø;
ö > ø;

[ÜŸ] > Y;
[üÿ] > y;

Ï > I;
ï > i;

[:Lu:] { [ČĆ] > TSJ;
[ČĆ] } [:Lu:] > TSJ;
[ČĆ] > Tsj;
[čć] > tsj;

[:Lu:] { Đ > DJ;
Đ } [:Lu:] > DJ;
Đ > Dj;
đ > dj;

Ľ } [^[:L:][:M:]] > L;
ľ } [^[:L:][:M:]] > l;
Ľ } [Jj] > L;
ľ } [Jj] > l;
[:Lu:] { Ľ > LJ;
Ľ } [:Lu:] > LJ;
Ľ > Lj;
ľ > lj;

Ń } [^[:L:][:M:]] > N;
ń } [^[:L:][:M:]] > n;
Ń } [Jj] > N;
ń } [Jj] > n;
[:Lu:] { Ń > NJ;
Ń } [:Lu:] > NJ;
Ń > Nj;
ń > nj;

[:Lu:] { Š > SJ;
Š } [:Lu:] > SJ;
Š > Sj;
š > sj;

[:Lu:] { Ž > SJ;
Ž } [:Lu:] > SJ;
Ž > Sj;
ž > sj;

[:Lu:] { X > KH;
X } [:Lu:] > KH;
X > Kh;
x > kh;

Y > J;
y > j;

Z > S;
z > s;

W > V;
w > v;

Q > K;
q > k;
`;
