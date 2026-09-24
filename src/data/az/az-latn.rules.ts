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
C } [:Lu:] > DŽ;
C > Dž;
c > dž;

Ş > Š;
ş > š;

[:Lu:] { Ğ > GH;
Ğ } [:Lu:] > GH;
Ğ > GH;
ğ > gh;

J > Ž;
j > ž;
`;
