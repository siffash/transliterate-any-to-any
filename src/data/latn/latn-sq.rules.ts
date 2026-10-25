export const latnSqRules = `
::Null;

DŽ > XH;
Dž > Xh;
dŽ > xH;
dž > xh;

D [zZ] > X;
d [zZ] > x;

T [sS] > C;
t [sS] > c;

K [hH] > H;
k [hH] > h;

G [hH] > G;
g [hH] > g;

IJ > EJ;
Ij > Ej;
iJ > eJ;
ij > ej;

X > H;
x > h;

::Null;

[:Lu:] { Š > SH;
Š } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > SH;
Š } [:Lu:] > SH;
Š > Sh;
š > sh;

[:Lu:] { Ž > ZH;
Ž } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > ZH;
Ž } [:Lu:] > ZH;
Ž > Zh;
ž > zh;

[:Lu:] { Đ > GJ;
Đ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > GJ;
Đ } [:Lu:] > GJ;
Đ > Gj;
đ > gj;

Ń } [^[:L:][:M:]] > N;
ń } [^[:L:][:M:]] > n;
Ń } [Jj] > N;
ń } [Jj] > n;
Ń } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > NJ;
Ń } [:Lu:] > NJ;
[:Lu:] { Ń > NJ;
Ń > Nj;
ń > nj;

Ľ } [^[:L:][:M:]] > L;
ľ } [^[:L:][:M:]] > l;
Ľ } [Jj] > L;
ľ } [Jj] > l;
Ľ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > LJ;
Ľ } [:Lu:] > LJ;
[:Lu:] { Ľ > LJ;
Ľ > Lj;
ľ > lj;

Č > Ç;
č > ç;

Ć > Q;
ć > q;

Q > K;
q > k;

W > V;
w > v;

Y > J;
y > j;

[ŸÜ] > Y;
[ÿü] > y;

Ï > Ë;
ï > ë;

Ä > E;
ä > e;

Ö > O;
ö > o;

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
· > ;

::Null;

[^[:L:][:M:]] { I } [aAeEëËiIoOuUyY] > J;
[^[:L:][:M:]] { i } [aAeEëËiIoOuUyY] > j;

[dD] [hH] { [dD] [hH] > ;
[gG] [jJ] { [gG] [jJ] > ;
[nN] [jJ] { [nN] [jJ] > ;
[sS] [hH] { [sS] [hH] > ;
[tT] [hH] { [tT] [hH] > ;
[xX] [hH] { [xX] [hH] > ;
[zZ] [hH] { [zZ] [hH] > ;

[bB] { [bB]+ > ;
[cC] { [cC]+ > ;
[çÇ] { [çÇ]+ > ;
[dD] { [dD]+ > ;
[fF] { [fF]+ > ;
[gG] { [gG]+ > ;
[hH] { [hH]+ > ;
[jJ] { [jJ]+ > ;
[kK] { [kK]+ > ;
[lL] { [lL]+ > ;
[mM] { [mM]+ > ;
[nN] { [nN]+ > ;
[pP] { [pP]+ > ;
[qQ] { [qQ]+ > ;
[rR] { [rR]+ > ;
[sS] { [sS]+ > ;
[tT] { [tT]+ > ;
[vV] { [vV]+ > ;
[xX] { [xX]+ > ;
[zZ] { [zZ]+ > ;
`;
