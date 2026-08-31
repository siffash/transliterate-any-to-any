export const latnDaRules = `
::Null;

DŽ > DJ;
Dž > Dj;
dž > dj;

DZ > DS;
Dz > Ds;
dz > ds;

IJ > EJ;
Ij > Ej;
ij > ej;

TH > T;
Th > T;
th > t;

GH > G;
Gh > G;
gh > g;

::Null;

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
· > ;

[ĆČ] } [:Ll:] > Tj;
[ĆČ] } [^[:L:][:M:]] > Tj;
[ĆČ] > TJ;
[ćč] > tj;

Đ } [:Ll:] > Dj;
Đ } [^[:L:][:M:]] > Dj;
Đ > DJ;
đ > dj;

Ľ } [:Ll:] > Lj;
Ľ } [^[:L:][:M:]] > Lj;
Ľ > LJ;
ľ > lj;

Ń } [:Ll:] > Nj;
Ń } [^[:L:][:M:]] > Nj;
Ń > NJ;
ń > nj;

Š } [:Ll:] > Sj;
Š } [^[:L:][:M:]] > Sj;
Š > SJ;
š > sj;

Ž } [:Ll:] > Zj;
Ž } [^[:L:][:M:]] > Zj;
Ž > ZJ;
ž > zj;

X } [:Ll:] > Kh;
X } [^[:L:][:M:]] > Kh;
X > KH;
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
