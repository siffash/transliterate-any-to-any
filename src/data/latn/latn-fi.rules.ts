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

Ń } [^[:L:][:M:]] > N;
ń } [^[:L:][:M:]] > n;
Ń } [Jj] > N;
ń } [Jj] > n;
Ń } [:Ll:] > Nj;
Ń > NJ;
ń > nj;

Ľ } [^[:L:][:M:]] > L;
ľ } [^[:L:][:M:]] > l;
Ľ } [Jj] > L;
ľ } [Jj] > l;
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
