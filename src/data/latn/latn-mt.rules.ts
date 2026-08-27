export const latnMtRules = `
::Null;

GH > GĦ;
Gh > Għ;
gh > għ;

KH > Ħ;
Kh > Ħ;
kh > ħ;

TH > T;
Th > T;
th > t;

DŽ > Ġ;
Dž > Ġ;
dž > ġ;

DZ > Z;
Dz > Z;
dz > z;

TS > Z;
Ts > Z;
ts > z;

IJ > EJ;
Ij > Ej;
ij > ej;

::Null;

Ľ } [:Lu:] > LJ;
Ľ > Lj;
ľ > lj;

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

Ü > U;
ü > u;

Ÿ > J;
ÿ > j;

[:^Letter:] { \\' > ;
\\' } [:^Letter:] > ;
\\' } [:Lu:] > Q;
\\' > q;
· > ;
`;
