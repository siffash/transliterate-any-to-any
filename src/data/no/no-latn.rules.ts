export const noLatnRules = `
::NFC;

É > E;
é > e;
È > E;
è > e;
Ê > E;
ê > e;
Ó > O;
ó > o;
Ò > O;
ò > o;
Ô > O;
ô > o;
À > A;
à > a;
Â > A;
â > a;

::Null;

SCH > Š;
Sch > Š;
sch > š;
SKJ > Š;
SKj > Š;
Skj > Š;
skj > š;

SJ > Š;
Sj > Š;
sJ > Š;
sj > š;

KJ > Ć;
Kj > Ć;
kj > ć;

TJ > Ć;
Tj > Ć;
tj > ć;

[GHL] J > J;
[GHL] j > J;
[ghl] J > J;
[ghl] j > j;

HV > V;
Hv > V;
hv > v;

RS > Š;
Rs > Š;
rS > Š;
rs > š;

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

ØY > ÖŸ;
Øy > Öÿ;
øy > öÿ;

Æ > Ä;
æ > ä;

Ø > Ö;
ø > ö;

Å > O;
å > o;

[^[:Letter:][:Mark:]] { Y } [AÆEIOUÅÄÖaæeiouåäö] > Y;
[^[:Letter:][:Mark:]] { y } [AÆEIOUÅÄÖaæeiouåäö] > y;
Y > Ü;
y > ü;

J > Y;
j > y;
`;
