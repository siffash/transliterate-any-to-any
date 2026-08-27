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
ć } [aäeïoöu] > ci;
ć } [AÄEÏOÖU] > cI;
Ć } [aäeïoöu] > Ci;
Ć } [AÄEÏOÖU] > CI;

đ } [iIüÜÿŸ] > dz;
Đ } [iüÿ] > Dz;
Đ } [IÜŸ] > DZ;
đ } [aäeïoöu] > dzi;
đ } [AÄEÏOÖU] > dzI;
Đ } [aäeïoöu] > Dzi;
Đ } [AÄEÏOÖU] > DZI;
Đ } [:Lu:] > DŹ;
[:Lu:] { Đ > DŹ;
Đ > Dź;
đ > dź;

ń } [iIüÜÿŸ] > n;
Ń } [iIüÜÿŸ] > N;
ń } [aäeïoöu] > ni;
ń } [AÄEÏOÖU] > nI;
Ń } [aäeïoöu] > Ni;
Ń } [AÄEÏOÖU] > NI;

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

[üÿ] > i;
[ÜŸ] > I;

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
