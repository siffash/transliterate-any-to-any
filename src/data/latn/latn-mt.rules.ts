export const latnMtRules = `
::Null;

GH > GĦ;
gH > gĦ;
Gh > Għ;
gh > għ;

K [hH] > Ħ;
k [hH] > ħ;

T [hH] > T;
t [hH] > t;

D [žŽ] > Ġ;
d [žŽ] > ġ;

D [zZ] > Z;
d [zZ] > z;

T [sS] > Z;
t [sS] > z;

IJ > EJ;
iJ > eJ;
Ij > Ej;
ij > ej;

::Null;

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

[ČĆ] > Ċ;
[čć] > ċ;

Đ > Ġ;
đ > ġ;

[ŠŽ] > X;
[šž] > x;

X > Ħ;
x > ħ;

Y > J;
y > j;

Z > Ż;
z > ż;

Q > K;
q > k;

Ä > A;
ä > a;

Ï > I;
ï > i;

Ö > O;
ö > o;

[ÜŸ] > U;
[üÿ] > u;

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
\\' } [:Lu:] > Q;
\\' > q;
· > ;
`;
