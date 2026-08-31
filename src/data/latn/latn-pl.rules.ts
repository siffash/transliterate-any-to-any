export const latnPlRules = `
::Null;

[:^Letter:] { \\' > ;
\\' } [:^Letter:] > ;
· > ;

IJ > EJ;
Ij > Ej;
ij > ej;

TS > C;
Ts > C;
ts > c;

DŽ > DŻ;
Dž > Dż;
dž > dż;

TH > T;
Th > T;
th > t;

GH > G;
Gh > G;
gh > g;

KH > CH;
Kh > Ch;
kh > ch;

::Null;

ć } [iIüÜÿŸ] > c;
Ć } [iIüÜÿŸ] > C;
ć } [aäeïoöuüÿ] > ci;
ć } [AÄEÏOÖUÜŸ] > cI;
Ć } [aäeïoöuüÿ] > Ci;
Ć } [AÄEÏOÖUÜŸ] > CI;

đ } [iIüÜÿŸ] > dz;
Đ } [iüÿ] > Dz;
Đ } [IÜŸ] > DZ;
đ } [aäeïoöuüÿ] > dzi;
đ } [AÄEÏOÖUÜŸ] > dzI;
Đ } [aäeïoöuüÿ] > Dzi;
Đ } [AÄEÏOÖUÜŸ] > DZI;
Đ } [:Lu:] > DŹ;
[:Lu:] { Đ > DŹ;
Đ > Dź;
đ > dź;

ń } [iIüÜÿŸ] > n;
Ń } [iIüÜÿŸ] > N;
ń } [aäeïoöuüÿ] > ni;
ń } [AÄEÏOÖUÜŸ] > nI;
Ń } [aäeïoöuüÿ] > Ni;
Ń } [AÄEÏOÖUÜŸ] > NI;

Š } [:Lu:] > SZ;
[:Lu:] { Š > SZ;
Š > Sz;
š > sz;

Č } [:Lu:] > CZ;
[:Lu:] { Č > CZ;
Č > Cz;
č > cz;

X } [:Lu:] > CH;
[:Lu:] { X > CH;
X > Ch;
x > ch;

ž > ż;
Ž > Ż;

ľ > l;
Ľ > L;

y > j;
Y > J;

w > ł;
W > Ł;

v > w;
V > W;

ï > y;
Ï > Y;

q > k;
Q > K;

[äö] > e;
[ÄÖ] > E;

[üÿ] > u;
[ÜŸ] > U;

::Null;

[ćśźńĆŚŹŃjJiI] { y > i;
[ćśźńĆŚŹŃjJiI] { Y > I;

::Null;

ć } [aąeęoóu] > ci;
Ć } [aąeęoóu] > Ci;
Ć } [AĄEĘOÓU] > CI;
ć } i > c;
Ć } i > C;
Ć } I > C;

ś } [aąeęoóu] > si;
Ś } [aąeęoóu] > Si;
Ś } [AĄEĘOÓU] > SI;
ś } i > s;
Ś } i > S;
Ś } I > S;

ź } [aąeęoóu] > zi;
Ź } [aąeęoóu] > Zi;
Ź } [AĄEĘOÓU] > ZI;
ź } i > z;
Ź } i > Z;
Ź } I > Z;

ń } [aąeęoóu] > ni;
Ń } [aąeęoóu] > Ni;
Ń } [AĄEĘOÓU] > NI;
ń } i > n;
Ń } i > N;
Ń } I > N;
`;
