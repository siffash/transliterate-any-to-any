export const latnDaRules = `
::Null;

DŽ > DJ;
Dž > Dj;
dŽ > dJ;
dž > dj;

DZ > DS;
Dz > Ds;
dZ > dS;
dz > ds;

IJ > EJ;
Ij > Ej;
iJ > eJ;
ij > ej;

T [hH] > T;
t [hH] > t;

G [hH] > G;
g [hH] > g;

::Null;

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
· > ;

[:Lu:] { [ĆČ] > TJ;
[ĆČ] } [:Lu:] > TJ;
[ĆČ] > Tj;
[ćč] > tj;

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

[:Lu:] { Ž > ZJ;
Ž } [:Lu:] > ZJ;
Ž > Zj;
ž > zj;

[:Lu:] { X > KH;
X } [:Lu:] > KH;
X > Kh;
x > kh;

Q > K;
q > k;

W > V;
w > v;

Z > S;
z > s;

Ä > Æ;
ä > æ;

Ö > Ø;
ö > ø;

Ï > I;
ï > i;

Y > J;
y > j;

[ÜŸ] > Y;
[üÿ] > y;
`;
