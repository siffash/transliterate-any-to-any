export const latnFiRules = `
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

KH > H;
Kh > H;
kh > h;

::Null;

[ČĆ] } [:Ll:] > Tš;
[ČĆ] > TŠ;
[čć] > tš;

Đ } [:Ll:] > Dž;
Đ > DŽ;
đ > dž;

Ń } [:Ll:] > Nj;
Ń > NJ;
ń > nj;

Ľ } [:Ll:] > Lj;
Ľ > LJ;
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
