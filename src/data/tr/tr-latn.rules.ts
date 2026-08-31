export const trLatnRules = `
::NFC;

Â > A;
â > a;
Î > I;
î > i;
Û > U;
û > u;

C } [:Lu:] > DŽ;
[:Lu:] { C } [^[:L:][:M:]] > DŽ;
[:Lu:] { C } [:Ll:] > Dž;
[:Lu:] { C > DŽ;
C > Dž;
c > dž;

Ç > Č;
ç > č;

[eiöüEIÖÜ] { Ğ > Y;
[eiöüEIÖÜ] { ğ > y;

Ğ } [:Lu:] > GH;
[:Lu:] { Ğ } [^[:L:][:M:]] > GH;
[:Lu:] { Ğ } [:Ll:] > Gh;
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
