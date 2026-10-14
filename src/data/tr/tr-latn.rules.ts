export const trLatnRules = `
::NFC;

Â > A;
â > a;

Î > I;
î > i;

Û > U;
û > u;

C } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > DŽ;
C } [:Lu:] > DŽ;
[:Lu:] { C > DŽ;
C > Dž;
c > dž;

Ç > Č;
ç > č;

[eiöüEIÖÜ] { Ğ > Y;
[eiöüEIÖÜ] { ğ > y;

Ğ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > GH;
Ğ } [:Lu:] > GH;
[:Lu:] { Ğ > GH;
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
