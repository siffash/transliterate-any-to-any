export const etLatnRules = `
::NFC;

N } k > Ng;
N } K > NG;
n } [kK] > ng;

[AEIOUÕÄÖÜYaeiouõäöüy] { S } [AEIOUÕÄÖÜYaeiouõäöüy] > Z;
[AEIOUÕÄÖÜYaeiouõäöüy] { s } [AEIOUÕÄÖÜYaeiouõäöüy] > z;

B } [:^Letter:] > P;
b } [:^Letter:] > p;
D } [:^Letter:] > T;
d } [:^Letter:] > t;
G } [:^Letter:] > K;
g } [:^Letter:] > k;

Sh > Š;
SH > Š;
sh > š;

Zh > Ž;
ZH > Ž;
zh > ž;

X } [:Lower:] > Ks;
X > KS;
x > ks;

C } [:Lower:] > Ts;
C > TS;
c > ts;

W > V;
w > v;

Q > K;
q > k;

Y > I;
y > i;

J > Y;
j > y;

Õ > Ï;
õ > ï;
`;
