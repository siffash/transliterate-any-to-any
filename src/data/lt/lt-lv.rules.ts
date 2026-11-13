export const ltLvRules = `
::NFC;

[[:L:][:M:]] { \\' } [[:L:][:M:]] > ’;

liai } [^[:L:][:M:]] > ļi;
LIAI } [^[:L:][:M:]] > ĻI;

niai } [^[:L:][:M:]] > ņi;
NIAI } [^[:L:][:M:]] > ŅI;

kiai } [^[:L:][:M:]] > ķi;
KIAI } [^[:L:][:M:]] > ĶI;

giai } [^[:L:][:M:]] > ģi;
GIAI } [^[:L:][:M:]] > ĢI;

[:L:] { iai } [^[:L:][:M:]] > i;
[:L:] { IAI } [^[:L:][:M:]] > I;

[:L:] { ai } [^[:L:][:M:]] > i;
[:L:] { AI } [^[:L:][:M:]] > I;

[:L:] { ius } [^[:L:][:M:]] > s;
[:L:] { IUS } [^[:L:][:M:]] > S;

[:L:] { as } [^[:L:][:M:]] > s;
[:L:] { AS } [^[:L:][:M:]] > S;

[:L:] { iškis } [^[:L:][:M:]] > išķi;
[:L:] { IŠKIS } [^[:L:][:M:]] > IŠĶI;

[:L:] { [iy] s } [^[:L:][:M:]] > e;
[:L:] { [IY] S } [^[:L:][:M:]] > E;

[:L:] { ės } [^[:L:][:M:]] > es;
[:L:] { ĖS } [^[:L:][:M:]] > ES;

[:L:] { os } [^[:L:][:M:]] > as;
[:L:] { OS } [^[:L:][:M:]] > AS;

[:L:] { [iI]? ų } [^[:L:][:M:]] > u;
[:L:] { [iI]? Ų } [^[:L:][:M:]] > U;

[:L:] { ė } [^[:L:][:M:]] > e;
[:L:] { Ė } [^[:L:][:M:]] > E;

::Null;

U [oO] > O;
u [oO] > o;
C [hH] > H;
c [hH] > h;

L [iI] } [aouąųūAOUĄŲŪ] > Ļ;
l [iI] } [aouąųūAOUĄŲŪ] > ļ;

N [iI] } [aouąųūAOUĄŲŪ] > Ņ;
n [iI] } [aouąųūAOUĄŲŪ] > ņ;

K [iI] } [aouąųūAOUĄŲŪ] > Ķ;
k [iI] } [aouąųūAOUĄŲŪ] > ķ;

G [iI] } [aouąųūAOUĄŲŪ] > Ģ;
g [iI] } [aouąųūAOUĄŲŪ] > ģ;

[čšžČŠŽ] { [iI] } [aouąųūAOUĄŲŪ] > ;

K } [iI] [^[:L:][:M:]] > K;
k } [iI] [^[:L:][:M:]] > k;

G } [iI] [^[:L:][:M:]] > G;
g } [iI] [^[:L:][:M:]] > g;

K } [eE] [vV] [iI] [čČ] > K;
k } [eE] [vV] [iI] [čČ] > k;

K } [eęėiįyEĘĖIĮY] > Ķ;
k } [eęėiįyEĘĖIĮY] > ķ;

G } [eęėiįyEĘĖIĮY] > Ģ;
g } [eęėiįyEĘĖIĮY] > ģ;

Ė > Ē;
ė > ē;

[YĮ] > Ī;
[yį] > ī;

[ŲŪ] > Ū;
[ųū] > ū;

Ą > A;
ą > a;

Ę > E;
ę > e;

W > V;
w > v;

Q > K;
q > k;

[:Lu:] { X > KS;
X } [:Lu:] > KS;
X > Ks;
x > ks;

::Null;

L } [ĶĢķģ] > Ļ;
l } [ĶĢķģ] > ļ;

N } [ĶĢķģ] > Ņ;
n } [ĶĢķģ] > ņ;
`;
