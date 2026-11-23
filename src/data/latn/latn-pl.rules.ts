export const latnPlRules = `
::Null;

[:Lu:] { Ŋ > NG;
Ŋ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > NG;
Ŋ } [:Lu:] > NG;
Ŋ > Ng;
ŋ > ng;

[:Lu:] { Ẑ > DZ;
Ẑ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > DZ;
Ẑ } [:Lu:] > DZ;
Ẑ > Dz;
ẑ > dz;

[Šš] { [Šš] > ;
[Čč] { [Čč] > ;
[Ćć] { [Ćć] > ;
[Đđ] { [Đđ] > ;
[Ǯǯ] { [Ǯǯ] > ;

::Null;

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
· > ;

IJ > EJ;
iJ > eJ;
Ij > Ej;
ij > ej;

[:Lu:] { Ǯ > DŻ;
Ǯ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > DŻ;
Ǯ } [:Lu:] > DŻ;
Ǯ > Dż;
ǯ > dż;

Þ > T;
þ > t;

Ɣ > G;
ɣ > g;

[:Lu:] { Ḫ > CH;
Ḫ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > CH;
Ḫ } [:Lu:] > CH;
Ḫ > Ch;
ḫ > ch;

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
Đ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > DŹ;
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

Š } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > SZ;
Š } [:Lu:] > SZ;
[:Lu:] { Š > SZ;
Š > Sz;
š > sz;

Č } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > CZ;
Č } [:Lu:] > CZ;
[:Lu:] { Č > CZ;
Č > Cz;
č > cz;

X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > CH;
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
ć } [iI] > c;
Ć } [iI] > C;

ś } [aąeęoóu] > si;
Ś } [aąeęoóu] > Si;
Ś } [AĄEĘOÓU] > SI;
ś } [iI] > s;
Ś } [iI] > S;

ź } [aąeęoóu] > zi;
Ź } [aąeęoóu] > Zi;
Ź } [AĄEĘOÓU] > ZI;
ź } [iI] > z;
Ź } [iI] > Z;

ń } [aąeęoóu] > ni;
Ń } [aąeęoóu] > Ni;
Ń } [AĄEĘOÓU] > NI;
ń } [iI] > n;
Ń } [iI] > N;
`;
