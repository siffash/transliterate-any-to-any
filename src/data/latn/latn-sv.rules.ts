export const latnSvRules = `
::Null;

DŽ > DJ;
dŽ > dJ;
Dž > Dj;
dž > dj;

T [hH] > T;
t [hH] > t;

G [hH] > G;
g [hH] > g;

KH > CH;
kH > cH;
Kh > Ch;
kh > ch;

IJ > EJ;
iJ > eJ;
Ij > Ej;
ij > ej;

::Null;

[:Lu:] { [ČĆ] > TJ;
[ČĆ] } [:Lu:] > TJ;
[ČĆ] > Tj;
[čć] > tj;

[:Lu:] { Đ > DJ;
Đ } [:Lu:] > DJ;
Đ > Dj;
đ > dj;

Ľ } [^[:L:][:M:]] > L;
ľ } [^[:L:][:M:]] > l;
Ľ } [Jj] > L;
ľ } [Jj] > l;
Ľ } [:Lu:] > LJ;
[:Lu:] { Ľ > LJ;
Ľ > Lj;
ľ > lj;

Ń } [^[:L:][:M:]] > N;
ń } [^[:L:][:M:]] > n;
Ń } [Jj] > N;
ń } [Jj] > n;
Ń } [:Lu:] > NJ;
[:Lu:] { Ń > NJ;
Ń > Nj;
ń > nj;

[:Lu:] { Š > SJ;
Š } [:Lu:] > SJ;
Š > Sj;
š > sj;

[:Lu:] { Ž > ZJ;
Ž } [:Lu:] > ZJ;
Ž > Zj;
ž > zj;

X > H;
x > h;

Q > K;
q > k;

W > V;
w > v;

Y > J;
y > j;

[ÜŸ] > Y;
[üÿ] > y;

Ï > I;
ï > i;

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
· > ;
`;
