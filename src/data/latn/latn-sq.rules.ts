export const latnSqRules = `
::Null;

DŽ > XH;
Dž > Xh;
dŽ > xH;
dž > xh;

DZ > X;
Dz > X;
dZ > x;
dz > x;

TS > C;
Ts > C;
tS > c;
ts > c;

KH > H;
Kh > H;
kH > h;
kh > h;

GH > G;
Gh > G;
gH > g;
gh > g;

IJ > EJ;
Ij > Ej;
iJ > eJ;
ij > ej;

::Null;

Š } [:Ll:] > Sh;
Š > SH;
š > sh;

Ž } [:Ll:] > Zh;
Ž > ZH;
ž > zh;

Đ } [:Ll:] > Gj;
Đ > GJ;
đ > gj;

Ń } [^[:L:][:M:]] > N;
ń } [^[:L:][:M:]] > n;
Ń } [Jj] > N;
ń } [Jj] > n;
Ń } [:Lu:] > NJ;
[:Lu:] { Ń > NJ;
Ń > Nj;
ń > nj;

Ľ } [^[:L:][:M:]] > L;
ľ } [^[:L:][:M:]] > l;
Ľ } [Jj] > L;
ľ } [Jj] > l;
Ľ } [:Lu:] > LJ;
[:Lu:] { Ľ > LJ;
Ľ > Lj;
ľ > lj;

Č > Ç;
č > ç;

Ć > Q;
ć > q;

X > H;
x > h;

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

[bB] { [bB] > ;
[cC] { [cC] > ;
[çÇ] { [çÇ] > ;
[dD] { [dD] > ;
[fF] { [fF] > ;
[gG] { [gG] > ;
[hH] { [hH] > ;
[jJ] { [jJ] > ;
[kK] { [kK] > ;
[lL] { [lL] > ;
[mM] { [mM] > ;
[nN] { [nN] > ;
[pP] { [pP] > ;
[qQ] { [qQ] > ;
[rR] { [rR] > ;
[sS] { [sS] > ;
[tT] { [tT] > ;
[vV] { [vV] > ;
[xX] { [xX] > ;
[zZ] { [zZ] > ;
`;
