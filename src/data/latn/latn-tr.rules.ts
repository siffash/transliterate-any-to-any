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

IJ } [:Ll:] > Ey;
IJ > EY;
Ij > Ey;
ij > ey;

::Null;

Ń > N;
ń > n;

Ľ > L;
ľ > l;

Š > Ş;
š > ş;

[ČĆ] > Ç;
[čć] > ç;

Ž > J;
ž > j;

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

[:^Letter:] { \\' > ;
\\' } [:^Letter:] > ;
· > ;

::Null;

[:^Letter:] { ğ > g;
[:^Letter:] { Ğ > G;
[bcçdfgğhjklmnprsştvyzBCÇDFGĞHJKLMNPRSŞTVYZ] { ğ > g;
[bcçdfgğhjklmnprsştvyzBCÇDFGĞHJKLMNPRSŞTVYZ] { Ğ > G;
`;
