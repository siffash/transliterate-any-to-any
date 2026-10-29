export const azLatnRules = `
::NFC;

Q } [aəeıioöuüAƏEIİOÖUÜ] > G;
q } [aəeıioöuüAƏEIİOÖUÜ] > g;
Q > X;
q > x;

I > Ï;
ı > ï;
İ > I;

Ə > Ä;
ə > ä;

Ç > Č;
ç > č;

[:Lu:] { C > DŽ;
C } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > DŽ;
C } [:Lu:] > DŽ;
C > Dž;
c > dž;

Ş > Š;
ş > š;

[nN] { Ğ > G;
[nN] { ğ > g;
[:Lu:] { Ğ > GH;
Ğ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > GH;
Ğ } [:Lu:] > GH;
Ğ > GH;
ğ > gh;

J > Ž;
j > ž;
`;
