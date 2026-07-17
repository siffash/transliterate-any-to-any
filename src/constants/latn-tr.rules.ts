export const latnTrRules = `
::Null;

DŽ > C;
Dž > C;
dž > c;

TH > T;
Th > T;
th > t;

GH > Ğ;
Gh > Ğ;
gh > ğ;

KH > H;
Kh > H;
kh > h;

IJ } [:Lower:] > Ey;
IJ > EY;
Ij > Ey;
ij > ey;

Ń } [:Lower:] > Ny;
Ń > NY;
ń > ny;

Ľ } [:Lower:] > Ly;
Ľ > LY;
ľ > ly;

Š > Ş;
š > ş;
Č > Ç;
č > ç;
Ž > J;
ž > j;
Ć > Ç;
ć > ç;
Đ > C;
đ > c;
X > H;
x > h;

Ä > E;
ä > e;
Ï > I;
ï > ı;
Ÿ > Ü;
ÿ > ü;

I > İ;
W > V;
w > v;
Q > K;
q > k;

· > ;

::Null;

[:^Letter:] { ğ > g;
[:^Letter:] { Ğ > G;
[bcçdfgğhjklmnprsştvyzBCÇDFGĞHJKLMNPRSŞTVYZ] { ğ > g;
[bcçdfgğhjklmnprsştvyzBCÇDFGĞHJKLMNPRSŞTVYZ] { Ğ > G;
`;
