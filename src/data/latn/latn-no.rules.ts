export const latnNoRules = `
::Null;

IJ > EI;
Ij > Ei;
ij > ei;

TH > T;
Th > T;
th > t;

GH > G;
Gh > G;
gh > g;

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

[^[:L:][:M:]] { [ČĆ] } [^[:L:][:M:]] > Tsj;
[ČĆ] } [:Ll:] > Tsj;
[ČĆ] > TSJ;
[čć] > tsj;

[^[:L:][:M:]] { Đ } [^[:L:][:M:]] > Dj;
Đ } [:Ll:] > Dj;
Đ > DJ;
đ > dj;

[^[:L:][:M:]] { Ľ } [^[:L:][:M:]] > Lj;
Ľ } [:Ll:] > Lj;
Ľ > LJ;
ľ > lj;

[^[:L:][:M:]] { Ń } [^[:L:][:M:]] > Nj;
Ń } [:Ll:] > Nj;
Ń > NJ;
ń > nj;

[^[:L:][:M:]] { Š } [^[:L:][:M:]] > Sj;
Š } [:Ll:] > Sj;
Š > SJ;
š > sj;

[^[:L:][:M:]] { Ž } [^[:L:][:M:]] > Sj;
Ž } [:Ll:] > Sj;
Ž > SJ;
ž > sj;

[^[:L:][:M:]] { X } [^[:L:][:M:]] > Kh;
X } [:Ll:] > Kh;
X > KH;
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
