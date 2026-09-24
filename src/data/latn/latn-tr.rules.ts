export const latnTrRules = `
::Null;

D [žŽ] > C;
d [žŽ] > c;

T [hH] > T;
t [hH] > t;

G [hH] > Ğ;
g [hH] > ğ;

K [hH] > H;
k [hH] > h;

IJ > EY;
iJ > eY;
Ij > Ey;
ij > ey;

::Null;

Ľ } [AOUÏ] > LY;
Ľ } [aouï] > Ly;
ľ } [AOUÏ] > lY;
ľ } [aouï] > ly;
Ľ > L;
ľ > l;

Ń } [AOUÏ] > NY;
Ń } [aouï] > Ny;
ń } [AOUÏ] > nY;
ń } [aouï] > ny;
Ń > N;
ń > n;

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

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
· > ;

::Null;

[^[:L:][:M:]] { ğ > g;
[^[:L:][:M:]] { Ğ > G;
[bcçdfgğhjklmnprsştvyzBCÇDFGĞHJKLMNPRSŞTVYZ] { ğ > g;
[bcçdfgğhjklmnprsştvyzBCÇDFGĞHJKLMNPRSŞTVYZ] { Ğ > G;
`;
