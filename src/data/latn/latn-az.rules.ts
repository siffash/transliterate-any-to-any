export const latnAzRules = `
::Null;

[iI] { [yY] } [^[:L:][:M:]] > ;

[:Lu:] { Ŋ > NG;
Ŋ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > NG;
Ŋ } [:Lu:] > NG;
Ŋ > Ng;
ŋ > ng;

[:Lu:] { C > TS;
C } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > TS;
C } [:Lu:] > TS;
C > Ts;
c > ts;

[:Lu:] { Ẑ > DZ;
Ẑ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > DZ;
Ẑ } [:Lu:] > DZ;
Ẑ > Dz;
ẑ > dz;

::Null;

[Tt] [Ss] { [Tt] [Ss] > ;

Ǯ > C;
ǯ > c;

IJ > EY;
iJ > eY;
Ij > Ey;
ij > ey;

Þ > T;
þ > t;

Ɣ > Ğ;
ɣ > ğ;

Ḫ > X;
ḫ > x;

[aeouäöüëïyAEOUÄÖÜËÏYjJđĐćĆśŚźŹ] [iI] { a } [^[:L:][:M:]] > a;
[aeouäöüëïyAEOUÄÖÜËÏYjJđĐćĆśŚźŹ] [iI] { A } [^[:L:][:M:]] > A;
[:L:] [iI] { a } [^[:L:][:M:]] > ya;
[:L:] [iI] { A } [^[:L:][:M:]] > YA;

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
`;
