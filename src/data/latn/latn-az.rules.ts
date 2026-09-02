export const latnAzRules = `
::Null;

DŽ > C;
Dž > C;
dž > c;

IJ > EY;
Ij > Ey;
ij > ey;

TH > T;
Th > T;
th > t;

GH > Ğ;
Gh > Ğ;
gh > ğ;

KH > X;
Kh > X;
kh > x;

::Null;

[ĆČ] > Ç;
[ćč] > ç;

Đ > C;
đ > c;

Š > Ş;
š > ş;

Ž > J;
ž > j;

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

Ä > Ə;
ä > ə;

Ï > I;
ï > ı;
I > İ;

W > V;
w > v;

Ÿ > Ü;
ÿ > ü;

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
· > ;

::Null;

[^[:L:][:M:]] { ı > i;
[^[:L:][:M:]] { I > İ;
[^[:L:][:M:]] { ğ > q;
[^[:L:][:M:]] { Ğ > Q;
[aıouAIOU] { q } [aıouAIOU] > ğ;
[aıouAIOU] { Q } [aıouAIOU] > Ğ;
[eəiöüEƏİÖÜ] { k } [eəiöüEƏİÖÜ] > y;
[eəiöüEƏİÖÜ] { K } [eəiöüEƏİÖÜ] > Y;
`;
