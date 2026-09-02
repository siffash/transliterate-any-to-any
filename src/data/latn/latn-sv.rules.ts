export const latnSvRules = `
::Null;

DŽ > DJ;
Dž > Dj;
dž > dj;

TH > T;
Th > T;
th > t;

GH > G;
Gh > G;
gh > g;

KH > CH;
Kh > Ch;
kh > ch;

IJ > EJ;
Ij > Ej;
ij > ej;

::Null;

[ČĆ] } [:Ll:] > Tj;
[ČĆ] > TJ;
[čć] > tj;

Đ } [:Ll:] > Dj;
Đ > DJ;
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

Š } [:Ll:] > Sj;
Š > SJ;
š > sj;

Ž } [:Ll:] > Zj;
Ž > ZJ;
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
