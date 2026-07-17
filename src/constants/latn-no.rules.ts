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
Ć } [:Lower:] > Tsj;
Ć > TSJ;
ć > tsj;

[:^Letter:] { Č } [:^Letter:] > Tsj;
Č } [:Lower:] > Tsj;
Č > TSJ;
č > tsj;

[:^Letter:] { Đ } [:^Letter:] > Dj;
Đ } [:Lower:] > Dj;
Đ > DJ;
đ > dj;

[:^Letter:] { Ľ } [:^Letter:] > Lj;
Ľ } [:Lower:] > Lj;
Ľ > LJ;
ľ > lj;

[:^Letter:] { Ń } [:^Letter:] > Nj;
Ń } [:Lower:] > Nj;
Ń > NJ;
ń > nj;

[:^Letter:] { Š } [:^Letter:] > Sj;
Š } [:Lower:] > Sj;
Š > SJ;
š > sj;

[:^Letter:] { Ž } [:^Letter:] > Sj;
Ž } [:Lower:] > Sj;
Ž > SJ;
ž > sj;

[:^Letter:] { X } [:^Letter:] > Kh;
X } [:Lower:] > Kh;
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
