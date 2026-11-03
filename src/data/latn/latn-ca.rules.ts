export const latnCaRules = `
::Null;

[:Lu:] { Ŋ > NG;
Ŋ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > NG;
Ŋ } [:Lu:] > NG;
Ŋ > Ng;
ŋ > ng;

[:Lu:] { C > TS;
C } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > TS;
C } [:Lu:] > TS;
C > Ts;
c > ts;

[Čč] { [Čč] > ;
[Šš] { [Šš] > ;
[Ǯǯ] { [Ǯǯ] > ;

::Null;

[Tt] [Ss] { [Tt] [Ss] > ;

[:Lu:] { Ḫ > KH;
Ḫ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KH;
Ḫ } [:Lu:] > KH;
Ḫ > Kh;
ḫ > kh;

KH > KH;
Kh > Kh;
kH > kH;
kh > kh;

IJ > EI;
Ij > Ei;
iJ > eI;
ij > ei;

Ɣ > G;
ɣ > g;

Þ > T;
þ > t;

[:Lu:] { Ǯ > TJ;
Ǯ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > TJ;
Ǯ } [:Lu:] > TJ;
Ǯ > Tj;
ǯ > tj;

[:Lu:] { Ẑ > TZ;
Ẑ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > TZ;
Ẑ } [:Lu:] > TZ;
Ẑ > Tz;
ẑ > tz;

::Null;

[:Lu:] { Đ > TJ;
Đ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > TJ;
Đ } [:Lu:] > TJ;
Đ > Tj;
đ > tj;

Ž > J;
ž > j;

[:Lu:] { [ČĆ] > TX;
[ČĆ] } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > TX;
[ČĆ] } [:Lu:] > TX;
[ČĆ] > Tx;
[čć] > tx;

[iI] { Š > X;
[iI] { š > x;
[AEIOUÄÖÜÏŸ] { Š > IX;
[aAeEiIoOuUäÄöÖüÜïÏÿŸ] { Š > Ix;
[aAeEiIoOuUäÄöÖüÜïÏÿŸ] { š > ix;
Š > X;
š > x;

[aAeEiIoOuUäÄöÖüÜïÏÿŸ] { S } [AEIOUÄÖÜÏŸ] > SS;
[aAeEiIoOuUäÄöÖüÜïÏÿŸ] { S } [aeiouäöüïÿ] > Ss;
[aAeEiIoOuUäÄöÖüÜïÏÿŸ] { s } [aAeEiIoOuUäÄöÖüÜïÏÿŸ] > ss;

K > C;
k > c;

Ń } [^[:L:][:M:]] > N;
ń } [^[:L:][:M:]] > n;
Ń } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > N;
ń } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > n;
Ń } [Yy] > N;
ń } [Yy] > n;
[:Lu:] { Ń > NY;
Ń } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > NY;
Ń } [:Lu:] > NY;
Ń > Ny;
ń > ny;

Ľ } [^[:L:][:M:]] > L;
ľ } [^[:L:][:M:]] > l;
Ľ } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > L;
ľ } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > l;
Ľ } [Ll] > L;
ľ } [Ll] > l;
[:Lu:] { Ľ > LL;
Ľ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > LL;
Ľ } [:Lu:] > LL;
Ľ > Ll;
ľ > ll;

[:Lu:] { X > KH;
X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KH;
X } [:Lu:] > KH;
X > Kh;
x > kh;

[iI] { [yY] > ;
Y [iï] > I;
[yY] } [iIïÏ] > ;

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

n } [bBpPmM] > m;
N } [bBpPmM] > M;
m } [fFvV] > n;
M } [fFvV] > N;

[^[:L:][:M:]] { ç } [eEiIéÉíÍèÈ] > c;
[^[:L:][:M:]] { Ç } [eEiIéÉíÍèÈ] > C;
[^[:L:][:M:]] { ç > s;
[^[:L:][:M:]] { Ç > S;
ç } [eEiIéÉíÍèÈ] > c;
Ç } [eEiIéÉíÍèÈ] > C;



::Null;

[^[:L:][:M:]] { s [sS] > s;
[^[:L:][:M:]] { S [sS] > S;
s [sS] } [^[:L:][:M:]] > s;
S [sS] } [^[:L:][:M:]] > S;

[^[:L:][:M:]] { r [rR] > r;
[^[:L:][:M:]] { R [rR] > R;
r [rR] } [^[:L:][:M:]] > r;
R [rR] } [^[:L:][:M:]] > R;

[^[:L:][:M:]] { l [·.] [lL] > l;
[^[:L:][:M:]] { L [·.] [lL] > L;
l [·.] [lL] } [^[:L:][:M:]] > l;
L [·.] [lL] } [^[:L:][:M:]] > L;

[tT] { g } [aAàÀoOòÒóÓuUúÚüÜ] > j;
[tT] { G } [aAàÀoOòÒóÓuUúÚüÜ] > J;
[tT] { j } [eEéÉèÈiIíÍïÏ] > g;
[tT] { J } [eEéÉèÈiIíÍïÏ] > G;

[^[:L:][:M:]] { y > i;
[^[:L:][:M:]] { Y > I;
[^nN] { y > i;
[^nN] { Y > I;

[^[:L:][:M:]] { ['·] > ;
['·] } [^[:L:][:M:]] > ;

[iI] [iI] { [iI]+ > ;
[uU] [uU] { [uU]+ > ;
`;
