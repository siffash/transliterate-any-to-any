export const latnSvRules = `
::Null;


[:Upper:] { DŽ > DJ;
DŽ } [:Upper:] > DJ;
DŽ > Dj;
Dž > Dj;
dž > dj;

[:Upper:] { DZ > DS;
DZ } [:Upper:] > DS;
DZ > Ds;
Dz > Ds;
dz > ds;

[:Upper:] { TH > T;
TH } [:Upper:] > T;
TH > T;
Th > T;
th > t;

[:Upper:] { DH > D;
DH } [:Upper:] > D;
DH > D;
Dh > D;
dh > d;

[:Upper:] { GH > G;
GH } [:Upper:] > G;
GH > G;
Gh > G;
gh > g;

[:Upper:] { KH > CH;
KH } [:Upper:] > CH;
KH > Ch;
Kh > Ch;
kh > ch;

[:Upper:] { IJ > EJ;
IJ } [:Upper:] > EJ;
IJ > Ej;
Ij > Ej;
ij > ej;

[:Upper:] { Ć > TJ;
Ć } [:Upper:] > TJ;
Ć > Tj;
ć > tj;

[:Upper:] { Č > CH;
Č } [:Upper:] > CH;
Č > Ch;
č > ch;

[:Upper:] { Đ > DJ;
Đ } [:Upper:] > DJ;
Đ > Dj;
đ > dj;

[:Upper:] { Ľ > LJ;
Ľ } [:Upper:] > LJ;
Ľ > Lj;
ľ > lj;

[:Upper:] { Ń > NJ;
Ń } [:Upper:] > NJ;
Ń > Nj;
ń > nj;

[:Upper:] { Š > SJ;
Š } [:Upper:] > SJ;
Š > Sj;
š > sj;

[:Upper:] { Ž > ZJ;
Ž } [:Upper:] > ZJ;
Ž > Zj;
ž > zj;

[:Upper:] { X > CH;
X } [:Upper:] > CH;
X > Ch;
x > ch;

::Null;

Q > K;
q > k;

W > V;
w > v;

Y > J;
y > j;

Z > S;
z > s;

Ü > Y;
ü > y;

Ï > I;
ï > i;

Ÿ > Y;
ÿ > y;

['·] > ;
`;
