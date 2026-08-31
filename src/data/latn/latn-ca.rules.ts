export const latnCaRules = `
::Null;

KH > KH;
Kh > Kh;
kh > kh;

IJ > EI;
Ij > Ei;
ij > ei;

GH > G;
Gh > G;
gh > g;

TH > Z;
Th > Z;
th > z;

DŽ > TJ;
Dž > Tj;
dž > tj;

DZ > TZ;
Dz > Tz;
dz > tz;

::Null;

Đ } [:Lu:] > TJ;
Đ > Tj;
đ > tj;

Ž > J;
ž > j;

[ČĆ] } [:Lu:] > TX;
[ČĆ] > Tx;
[čć] > tx;

[aAeEiIoOuUäÄöÖüÜïÏÿŸ] { Š } [:Lu:] > IX;
[aAeEiIoOuUäÄöÖüÜïÏÿŸ] { Š > Ix;
[aAeEiIoOuUäÄöÖüÜïÏÿŸ] { š > ix;
Š > X;
š > x;

[aAeEiIoOuUäÄöÖüÜïÏÿŸ] { S } [AEIOUÄÖÜÏŸ] > SS;
[aAeEiIoOuUäÄöÖüÜïÏÿŸ] { S } [aeiouäöüïÿ] > Ss;
[aAeEiIoOuUäÄöÖüÜïÏÿŸ] { s } [aAeEiIoOuUäÄöÖüÜïÏÿŸ] > ss;

[aAeEiIoOuUäÄöÖüÜïÏÿŸ] { Z } [aAeEiIoOuUäÄöÖüÜïÏÿŸ] > S;
[aAeEiIoOuUäÄöÖüÜïÏÿŸ] { z } [aAeEiIoOuUäÄöÖüÜïÏÿŸ] > s;
Z } [^[:L:][:M:]] > S;
z } [^[:L:][:M:]] > s;

K > C;
k > c;

Ń } [:Lu:] > NY;
Ń > Ny;
ń > ny;

Ľ } [:Lu:] > LL;
Ľ > Ll;
ľ > ll;

X } [:Lu:] > KH;
X > Kh;
x > kh;

[yï] > i;
[YÏ] > I;

ä > e;
Ä > E;

ö > o;
Ö > O;

[üÿ] > u;
[ÜŸ] > U;

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

[^[:L:][:M:]] { ç } [eEiIéÉíÍèÈ] > c;
[^[:L:][:M:]] { Ç } [eEiIéÉíÍèÈ] > C;
[^[:L:][:M:]] { ç > s;
[^[:L:][:M:]] { Ç > S;
ç } [eEiIéÉíÍèÈ] > c;
Ç } [eEiIéÉíÍèÈ] > C;

::Null;

[^[:L:][:M:]] { ss > s;
[^[:L:][:M:]] { Ss > S;
[^[:L:][:M:]] { SS > S;
ss } [^[:L:][:M:]] > s;
Ss } [^[:L:][:M:]] > S;
SS } [^[:L:][:M:]] > S;

[^[:L:][:M:]] { rr > r;
[^[:L:][:M:]] { Rr > R;
[^[:L:][:M:]] { RR > R;
rr } [^[:L:][:M:]] > r;
Rr } [^[:L:][:M:]] > R;
RR } [^[:L:][:M:]] > R;

[^[:L:][:M:]] { l[·.]l > l;
[^[:L:][:M:]] { L[·.]l > L;
[^[:L:][:M:]] { L[·.]L > L;
l[·.]l } [^[:L:][:M:]] > l;
L[·.]l } [^[:L:][:M:]] > L;
L[·.]L } [^[:L:][:M:]] > L;

::Null;

[tT] { g } [aAàÀoOòÒóÓuUúÚüÜ] > j;
[tT] { G } [aAàÀoOòÒóÓuUúÚüÜ] > J;
[tT] { j } [eEéÉèÈiIíÍïÏ] > g;
[tT] { J } [eEéÉèÈiIíÍïÏ] > G;

::Null;

[^[:L:][:M:]] { y > i;
[^[:L:][:M:]] { Y > I;
[^nN] { y > i;
[^nN] { Y > I;

::Null;

[^[:L:][:M:]] { ['·] > ;
['·] } [^[:L:][:M:]] > ;
`;
