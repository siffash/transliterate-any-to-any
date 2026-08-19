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

['·] > ;

::Null;

Ä > Æ;
ä > æ;
Ö > Ø;
ö > ø;
[ÜŸ] > Y;
[üÿ] > y;
Ï > I;
ï > i;

[:^Letter:] { Ć } [:^Letter:] > Tsj;
Ć } [:Ll:] > Tsj;
Ć > TSJ;
ć > tsj;

[:^Letter:] { Č } [:^Letter:] > Tsj;
Č } [:Ll:] > Tsj;
Č > TSJ;
č > tsj;

[:^Letter:] { Đ } [:^Letter:] > Dj;
Đ } [:Ll:] > Dj;
Đ > DJ;
đ > dj;

[:^Letter:] { Ľ } [:^Letter:] > Lj;
Ľ } [:Ll:] > Lj;
Ľ > LJ;
ľ > lj;

[:^Letter:] { Ń } [:^Letter:] > Nj;
Ń } [:Ll:] > Nj;
Ń > NJ;
ń > nj;

[:^Letter:] { Š } [:^Letter:] > Sj;
Š } [:Ll:] > Sj;
Š > SJ;
š > sj;

[:^Letter:] { Ž } [:^Letter:] > Sj;
Ž } [:Ll:] > Sj;
Ž > SJ;
ž > sj;

[:^Letter:] { X } [:^Letter:] > Kh;
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
