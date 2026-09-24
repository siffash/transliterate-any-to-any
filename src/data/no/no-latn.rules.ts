export const noLatnRules = `
::NFC;

[ÉÈÊ] > E;
[éèê] > e;

[ÓÒÔ] > O;
[óòô] > o;

[ÀÂ] > A;
[àâ] > a;

::Null;

S [Cc] [Hh] > Š;
s [Cc] [Hh] > š;

S [Kk] [Jj] > Š;
s [Kk] [Jj] > š;

T [Ss] [Jj] > Č;
t [Ss] [Jj] > č;

S [Jj] > Š;
s [Jj] > š;

[KT] [Jj] > Ć;
[kt] [Jj] > ć;

[GHL] [Jj] > J;
[ghl] [Jj] > j;

H [Vv] > V;
h [Vv] > v;

S [Kk] } [IYiy] > Š;
s [Kk] } [IYiy] > š;

S [Kk] } [Ee] [Ii] > Š;
s [Kk] } [Ee] [Ii] > š;

S [Kk] } [Øø] [Yy] > Š;
s [Kk] } [Øø] [Yy] > š;

G } [IYiy] > J;
g } [IYiy] > j;

G } [Ee] [Ii] > J;
g } [Ee] [Ii] > j;

G } [Øø] [Yy] > J;
g } [Øø] [Yy] > j;

C } [EIYÆØÄÖÜeiyæøäöü] > S;
c } [EIYÆØÄÖÜeiyæøäöü] > s;
C > K;
c > k;

::Null;

AU > ÄU;
aU > äU;
Au > Äu;
au > äu;

EI > IJ;
eI > iJ;
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
