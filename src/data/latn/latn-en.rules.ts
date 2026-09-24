export const latnEnRules = `
::Null;

D [žŽ] > J;
d [žŽ] > j;

Đ > J;
đ > j;

IJ } [^[:L:][:M:]] > AY;
Ij } [^[:L:][:M:]] > Ay;
iJ } [^[:L:][:M:]] > aY;
ij } [^[:L:][:M:]] > ay;
IJ > EY;
Ij > Ey;
iJ > eY;
ij > ey;

::Null;

Ä > A;
ä > a;
Ï > I;
ï > i;
Ö > O;
ö > o;
[ÜŸ] > U;
[üÿ] > u;

Ľ } [AOU] > LY;
Ľ } [aou] > Ly;
ľ } [AOU] > lY;
ľ } [aou] > ly;
Ľ > L;
ľ > l;

Ń } [AOU] > NY;
Ń } [aou] > Ny;
ń } [AOU] > nY;
ń } [aou] > ny;
Ń > N;
ń > n;

[:Lu:] { [ČĆ] > CH;
[ČĆ] } [:Lu:] > CH;
[ČĆ] > Ch;
[čć] > ch;

[:Lu:] { Š > SH;
Š } [:Lu:] > SH;
Š > Sh;
š > sh;

[:Lu:] { Ž > ZH;
Ž } [:Lu:] > ZH;
Ž > Zh;
ž > zh;

S { X > KH;
[sS] { X } [:Lu:] > KH;
[sS] { X > Kh;
[sS] { x > kh;
X > H;
x > h;

K [sS] > X;
k [sS] > x;

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
· > ;

::Null;

[wW] { [wW] > ;
[yY] { [yY] > ;
[hH] { [hH] > ;
[iI] { [iIyY] } [^[:L:][:M:]] > ;
[yY] { [iIyY] } [^[:L:][:M:]] > ;
[^[:L:][:M:]] { [cC] } [kK] > ;

::Null;

[kK] { [kK] } [hH] > ;
[gG] { [gG] } [hH] > ;
`;
