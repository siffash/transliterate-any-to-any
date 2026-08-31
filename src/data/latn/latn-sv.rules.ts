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

Ľ } [:Ll:] > Lj;
Ľ > LJ;
ľ > lj;

Ń } [:Ll:] > Nj;
Ń > NJ;
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
