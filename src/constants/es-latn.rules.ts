export const esLatnRules = `
$boundary = [:^Letter:];
$frontVowel = [eéiíEÉIÍ];

á > a;
Á > A;
é > e;
É > E;
í > i;
Í > I;
ó > o;
Ó > O;
ú > u;
Ú > U;
ü > u;
Ü > U;

ch > č;
Ch > Č;
CH > Č;

ll > ľ;
Ll > Ľ;
LL > Ľ;

gu } $frontVowel > g;
Gu } $frontVowel > G;
GU } $frontVowel > G;

gü } $frontVowel > gu;
Gü } $frontVowel > Gu;
GÜ } $frontVowel > GU;

qu } $frontVowel > k;
Qu } $frontVowel > K;
QU } $frontVowel > K;

q > k;
Q > K;

$boundary { x > s;
$boundary { X > S;

x > ks;
X > Ks;

g } $frontVowel > x;
G } $frontVowel > X;

c } $frontVowel > s;
C } $frontVowel > S;
c > k;
C > K;

y } $boundary > i;
Y } $boundary > I;

ñ > ń;
Ñ > Ń;

j > x;
J > X;

z > s;
Z > S;
`;
