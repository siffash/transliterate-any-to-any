export const latnEnRules = `
::Null;

ts } ts > ;
TS } TS > ;

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
[ČĆ] } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > CH;
[ČĆ] } [:Lu:] > CH;
[ČĆ] > Ch;
[čć] > ch;

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

S { X > KH;
[sS] { X } [:Lu:] > KH;
[sS] { X > Kh;
[sS] { x > kh;
X > H;
x > h;

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
· > ;



::Null;

[wW] { [wW]+ > ;
[yY] { [yY]+ > ;
[cC][hH] { h > h;
[cC][hH] { H > H;
[hH] { [hH]+ > ;
[iI] { [iI]+ } [^[:L:][:M:]] > ;
[^[:L:][:M:]] { [cC]+ } [kK] > ;

::Null;

[kK] { [kK]+ } [hH] > ;
[gG] { [gG]+ } [hH] > ;
`;
