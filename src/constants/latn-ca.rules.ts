export const latnCaRules = `
::Null;

KH } [:Upper:] > KH;
KH > Kh;
Kh > Kh;
kh > kh;
IJ } [:Upper:] > EI;
IJ > Ei;
Ij > Ei;
ij > ei;
GH > G;
Gh > G;
gh > g;
TH > Z;
Th > Z;
th > z;
DŽ } [:Upper:] > TJ;
DŽ > Tj;
Dž > Tj;
dž > tj;
DZ } [:Upper:] > TZ;
DZ > Tz;
Dz > Tz;
dz > tz;
Đ } [:Upper:] > TJ;
Đ > Tj;
đ > tj;
Ž > J;
ž > j;
Č } [:Upper:] > TX;
Č > Tx;
č > tx;
Ć } [:Upper:] > TX;
Ć > Tx;
ć > tx;
[aAeEiIoOuUäÄöÖüÜïÏÿŸ] { Š } [:Upper:] > IX;
[aAeEiIoOuUäÄöÖüÜïÏÿŸ] { Š > Ix;
[aAeEiIoOuUäÄöÖüÜïÏÿŸ] { š > ix;
Š > X;
š > x;
[aAeEiIoOuUäÄöÖüÜïÏÿŸ] { S } [AEIOUÄÖÜÏŸ] > SS;
[aAeEiIoOuUäÄöÖüÜïÏÿŸ] { S } [aeiouäöüïÿ] > Ss;
[aAeEiIoOuUäÄöÖüÜïÏÿŸ] { s } [aAeEiIoOuUäÄöÖüÜïÏÿŸ] > ss;
[aAeEiIoOuUäÄöÖüÜïÏÿŸ] { Z } [aAeEiIoOuUäÄöÖüÜïÏÿŸ] > S;
[aAeEiIoOuUäÄöÖüÜïÏÿŸ] { z } [aAeEiIoOuUäÄöÖüÜïÏÿŸ] > s;
Z } [:^Letter:] > S;
z } [:^Letter:] > s;
K > C;
k > c;
Ń } [:Upper:] > NY;
Ń > Ny;
ń > ny;
Ľ } [:Upper:] > LL;
Ľ > Ll;
ľ > ll;
X } [:Upper:] > KH;
X > Kh;
x > kh;
y > i;
Y > I;
ÿ > i;
Ÿ > I;
ä > e;
Ä > E;
ö > o;
Ö > O;
ü > u;
Ü > U;
ï > i;
Ï > I;

::Null;

C } [EI] > QU;
C } [ei] > Qu;
c } [eEiI] > qu;
G } [EI] > GU;
G } [ei] > Gu;
g } [eEiI] > gu;
J } [EI] > G;
J } [ei] > G;
j } [eEiI] > g;

::Null;

n } [bBpPmM] > m;
N } [bBpPmM] > M;
m } [fFvV] > n;
M } [fFvV] > N;

::Null;

[:^Letter:] { ç } [eEiIéÉíÍèÈ] > c;
[:^Letter:] { Ç } [eEiIéÉíÍèÈ] > C;
[:^Letter:] { ç > s;
[:^Letter:] { Ç > S;
ç } [eEiIéÉíÍèÈ] > c;
Ç } [eEiIéÉíÍèÈ] > C;

::Null;

[:^Letter:] { ss > s;
[:^Letter:] { Ss > S;
[:^Letter:] { SS > S;
ss } [:^Letter:] > s;
Ss } [:^Letter:] > S;
SS } [:^Letter:] > S;

[:^Letter:] { rr > r;
[:^Letter:] { Rr > R;
[:^Letter:] { RR > R;
rr } [:^Letter:] > r;
Rr } [:^Letter:] > R;
RR } [:^Letter:] > R;

[:^Letter:] { l·l > l;
[:^Letter:] { L·l > L;
[:^Letter:] { L·L > L;
l·l } [:^Letter:] > l;
L·l } [:^Letter:] > L;
L·L } [:^Letter:] > L;

[:^Letter:] { l.l > l;
[:^Letter:] { L.l > L;
[:^Letter:] { L.L > L;
l.l } [:^Letter:] > l;
L.l } [:^Letter:] > L;
L.L } [:^Letter:] > L;

::Null;

[tT] { g } [aAàÀoOòÒóÓuUúÚüÜ] > j;
[tT] { G } [aAàÀoOòÒóÓuUúÚüÜ] > J;
[tT] { j } [eEéÉèÈiIíÍïÏ] > g;
[tT] { J } [eEéÉèÈiIíÍïÏ] > G;

::Null;

[:^Letter:] { y > i;
[:^Letter:] { Y > I;
[^nN] { y > i;
[^nN] { Y > I;

::Null;

[:^Letter:] { ix > x;
[:^Letter:] { Ix > X;
[:^Letter:] { IX > X;
[bBcCdDfFgGhHjJkKlLmMnNpPqQrRsStTvVwWxXyYzZçÇ] { ix > x;
[bBcCdDfFgGhHjJkKlLmMnNpPqQrRsStTvVwWxXyYzZçÇ] { Ix > X;
[bBcCdDfFgGhHjJkKlLmMnNpPqQrRsStTvVwWxXyYzZçÇ] { IX > X;
`;
