export const azLatnRules = `
::NFC;

[eəiöüEƏİÖÜ] { K > Ć;
[eəiöüEƏİÖÜ] { k > ć;
K } [eəiöüEƏİÖÜ] > Ć;
k } [eəiöüEƏİÖÜ] > ć;

Q } [:^Letter:] > X;
q } [:^Letter:] > x;
Q > G;
q > g;

I > Ï;
ı > ï;
İ > I;

Ə > Ä;
ə > ä;

Ç > Č;
ç > č;

C } [:Lower:] > Dž;
C > DŽ;
c > dž;

Ş > Š;
ş > š;

Ğ } [:Lower:] > Gh;
Ğ > GH;
ğ > gh;

G > Đ;
g > đ;

J > Ž;
j > ž;
`;
