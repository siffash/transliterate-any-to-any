export const trLatnRules = `
::NFC;

Â > A;
â > a;
Î > I;
î > i;
Û > U;
û > u;

C } [:Upper:] > DŽ;
[:Upper:] { C } [:^Letter:] > DŽ;
[:Upper:] { C } [:Lower:] > Dž;
[:Upper:] { C > DŽ;
C > Dž;
c > dž;

Ç > Č;
ç > č;

[e i ö ü E İ Ö Ü] { Ğ > Y;
[e i ö ü E İ Ö Ü] { ğ > y;

Ğ } [:Upper:] > GH;
[:Upper:] { Ğ } [:^Letter:] > GH;
[:Upper:] { Ğ } [:Lower:] > Gh;
[:Upper:] { Ğ > GH;
Ğ > Gh;
ğ > gh;

I > Ï;
ı > ï;
İ > I;

J > Ž;
j > ž;

Ş > Š;
ş > š;
`;
