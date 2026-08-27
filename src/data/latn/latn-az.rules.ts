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

Ń > N;
ń > n;

Ľ > L;
ľ > l;

Ä > Ə;
ä > ə;

Ï > I;
ï > ı;
I > İ;

W > V;
w > v;

Ÿ > Ü;
ÿ > ü;

[:^Letter:] { \\' > ;
\\' } [:^Letter:] > ;
· > ;

::Null;

[:^Letter:] { ı > i;
[:^Letter:] { I > İ;
[:^Letter:] { ğ > q;
[:^Letter:] { Ğ > Q;
[aıouAIOU] { q } [aıouAIOU] > ğ;
[aıouAIOU] { Q } [aıouAIOU] > Ğ;
[eəiöüEƏİÖÜ] { k } [eəiöüEƏİÖÜ] > y;
[eəiöüEƏİÖÜ] { K } [eəiöüEƏİÖÜ] > Y;
`;
