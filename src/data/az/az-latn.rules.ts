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

C } [:Ll:] > Dž;
C > DŽ;
c > dž;

Ş > Š;
ş > š;

Ğ } [:Ll:] > Gh;
Ğ > GH;
ğ > gh;

J > Ž;
j > ž;
`;
