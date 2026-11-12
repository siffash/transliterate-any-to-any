export const latnEnRules = `
::Null;

[:Lu:] { Ḫ > KH;
Ḫ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KH;
Ḫ } [:Lu:] > KH;
Ḫ > Kh;
ḫ > kh;

[:Lu:] { Ŋ > NG;
Ŋ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > NG;
Ŋ } [:Lu:] > NG;
Ŋ > Ng;
ŋ > ng;

[:Lu:] { Ɣ > GH;
Ɣ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > GH;
Ɣ } [:Lu:] > GH;
Ɣ > Gh;
ɣ > gh;

[:Lu:] { Þ > TH;
Þ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > TH;
Þ } [:Lu:] > TH;
Þ > Th;
þ > th;

[:Lu:] { C > TS;
C } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > TS;
C } [:Lu:] > TS;
C > Ts;
c > ts;

[:Lu:] { Ẑ > DZ;
Ẑ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > DZ;
Ẑ } [:Lu:] > DZ;
Ẑ > Dz;
ẑ > dz;

[Šš] { [Šš] > ;
[Čč] { [Čč] > ;
[Ǯǯ] { [Ǯǯ] > ;

::Null;

[Tt] [Ss] { [Tt] [Ss] > ;

Ǯ > J;
ǯ > j;

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
[cszkCSZK] [hH] { h > h;
[cszkCSZK] [hH] { H > H;
[hH] { [hH]+ > ;
[^[:L:][:M:]] { [cC]+ } [kK] > ;

[kK] { [kK]+ } [hH] > ;
[gG] { [gG]+ } [hH] > ;
`;
