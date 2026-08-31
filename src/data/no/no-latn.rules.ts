export const noLatnRules = `
::NFC;

[ÉÈÊ] > E;
[éèê] > e;
[ÓÒÔ] > O;
[óòô] > o;
[ÀÂ] > A;
[àâ] > a;

::Null;

SCH > Š;
Sch > Š;
sch > š;

SKJ > Š;
Skj > Š;
skj > š;

TSJ > Č;
Tsj > Č;
tsJ > Č;
tsj > č;

SJ > Š;
Sj > Š;
sJ > Š;
sj > š;

[KT] J > Ć;
[KT] j > Ć;
[kt] j > ć;

[GHL] J > J;
[GHL] j > J;
[ghl] J > J;
[ghl] j > j;

HV > V;
Hv > V;
hv > v;

SK } [IYiy] > Š;
Sk } [IYiy] > Š;
sk } [IYiy] > š;
SK } EI > Š;
Sk } Ei > Š;
Sk } ei > Š;
sk } ei > š;
SK } ØY > Š;
Sk } Øy > Š;
Sk } øy > Š;
sk } øy > š;

G } [IYiy] > J;
g } [IYiy] > j;
G } EI > J;
G } Ei > J;
G } ei > J;
g } ei > j;
G } ØY > J;
G } Øy > J;
G } øy > J;
g } øy > j;

C } [EIYÆØÄÖÜeiyæøäöü] > S;
c } [EIYÆØÄÖÜeiyæøäöü] > s;
C > K;
c > k;

::Null;

AU > ÄU;
Au > Äu;
au > äu;

EI > IJ;
Ei > Ij;
ei > ij;

Æ > Ä;
æ > ä;

Ø > Ö;
ø > ö;

Å > O;
å > o;

J > Y;
j > y;
`;
