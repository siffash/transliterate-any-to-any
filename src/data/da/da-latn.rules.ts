export const daLatnRules = `
::NFC;

A [aA] > O;
a [aA] > o;

Å > O;
å > o;

Æ > Ä;
æ > ä;

Ø > Ö;
ø > ö;

Y > Ü;
y > ü;

EG } [bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ] > IJ;
Eg } [bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ] > Ij;
eG } [bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ] > iJ;
eg } [bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ] > ij;

EJ > IJ;
Ej > Ij;
eJ > iJ;
ej > ij;

[Ii] { J > J;
[Ii] { j > j;

CHR > KR;
CHr > Kr;
Chr > Kr;
chr > kr;

SCH > Š;
Sch > Š;
sch > š;

S [jJ] > Š;
s [jJ] > š;

[Mm] i { ch } [aA] > k;
[Mm] i { Ch } [aA] > K;
MI { CH } A > K;

[Jj] oa { ch } i > k;
[Jj] oa { Ch } i > K;
JOA { CH } I > K;

C [hH] > Š;
c [hH] > š;

C [kK] > K;
c [kK] > k;

C } [EIYÆØÄÖÜeiyæøäöü] > S;
c } [EIYÆØÄÖÜeiyæøäöü] > s;
C > K;
c > k;

P [hH] > F;
p [hH] > f;

T [hH] > T;
t [hH] > t;

J > Y;
j > y;

[:Lu:] { X > KS;
X } [:Lu:] > KS;
X > Ks;
x > ks;
`;
