export const latnHuRules = `
::Null;

DŽDŽ > DDZS;
Dždž > Ddzs;
dždž > ddzs;

DZDZ > DDZ;
Dzdz > Ddz;
dzdz > ddz;

NGNG > NNG;
Ngng > Nng;
ngng > nng;

KHKH > CHCH;
Khkh > Chch;
khkh > chch;

TSTS > CC;
Tsts > Cc;
tsts > cc;

DZ > DZ;
dZ > dZ;
Dz > Dz;
dz > dz;

DŽ > DZS;
dŽ > dZS;
Dž > Dzs;
dž > dzs;

KH > CH;
kH > cH;
Kh > Ch;
kh > ch;

T [sS] > C;
t [sS] > c;

T [hH] > T;
t [hH] > t;

G [hH] > G;
g [hH] > g;

IJ > EJ;
iJ > eJ;
Ij > Ej;
ij > ej;

::Null;

ČČ > CCS;
čČ > cCS;
Čč > Ccs;
čč > ccs;

ĆĆ > CCS;
ćĆ > cCS;
Ćć > Ccs;
ćć > ccs;

ŽŽ > ZZS;
žŽ > zZS;
Žž > Zzs;
žž > zzs;

SS > SSZ;
sS > sSZ;
Ss > Ssz;
ss > ssz;

ĐĐ > GGY;
đĐ > gGY;
Đđ > Ggy;
đđ > ggy;

XX > CHCH;
xX > chCH;
Xx > Chch;
xx > chch;

ŃŃ > NNY;
ńŃ > nNY;
Ńń > Nny;
ńń > nny;

ĽĽ > LLY;
ľĽ > lLY;
Ľľ > Lly;
ľľ > lly;

[:Lu:] { [ČĆ] > CS;
[ČĆ] } [:Lu:] > CS;
[ČĆ] > Cs;
[čć] > cs;

[:Lu:] { Ž > ZS;
Ž } [:Lu:] > ZS;
Ž > Zs;
ž > zs;

[:Lu:] { Đ > GY;
Đ } [:Lu:] > GY;
Đ > Gy;
đ > gy;

[:Lu:] { X > CH;
X } [:Lu:] > CH;
X > Ch;
x > ch;

Ń } [^[:L:][:M:]] > N;
ń } [^[:L:][:M:]] > n;
Ń } [Yy] > N;
ń } [Yy] > n;
[:Lu:] { Ń > NY;
Ń } [:Lu:] > NY;
Ń > Ny;
ń > ny;

Ľ } [^[:L:][:M:]] > L;
ľ } [^[:L:][:M:]] > l;
Ľ } [Yy] > L;
ľ } [Yy] > l;
[:Lu:] { Ľ > LY;
Ľ } [:Lu:] > LY;
Ľ > Ly;
ľ > ly;

[:Lu:] { S > SZ;
S } [:Lu:] > SZ;
S > Sz;
s > sz;

Š > S;
š > s;

Q > K;
q > k;

W > V;
w > v;

Y > J;
y > j;

Ä > E;
ä > e;

Ï > I;
ï > i;

Ÿ > Ü;
ÿ > ü;

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
· > ;

::Null;

[^[:L:][:M:]] [dD] [zZ] [sS] { [dD] [zZ] [sS] > ;
[^[:L:][:M:]] [dD] [zZ] { [dD] [zZ] > ;
[^[:L:][:M:]] [sS] [zZ] { [sS] [zZ] > ;
[^[:L:][:M:]] [cC] [sS] { [cC] [sS] > ;
[^[:L:][:M:]] [zZ] [sS] { [zZ] [sS] > ;
[^[:L:][:M:]] [gG] [yY] { [gG] [yY] > ;
[^[:L:][:M:]] [nN] [yY] { [nN] [yY] > ;
[^[:L:][:M:]] [tT] [yY] { [tT] [yY] > ;
[^[:L:][:M:]] [lL] [yY] { [lL] [yY] > ;
[^[:L:][:M:]] [bB] { [bB] > ;
[^[:L:][:M:]] [cC] { [cC] > ;
[^[:L:][:M:]] [dD] { [dD] > ;
[^[:L:][:M:]] [fF] { [fF] > ;
[^[:L:][:M:]] [gG] { [gG] > ;
[^[:L:][:M:]] [hH] { [hH] > ;
[^[:L:][:M:]] [jJ] { [jJ] > ;
[^[:L:][:M:]] [kK] { [kK] > ;
[^[:L:][:M:]] [lL] { [lL] > ;
[^[:L:][:M:]] [mM] { [mM] > ;
[^[:L:][:M:]] [nN] { [nN] > ;
[^[:L:][:M:]] [pP] { [pP] > ;
[^[:L:][:M:]] [qQ] { [qQ] > ;
[^[:L:][:M:]] [rR] { [rR] > ;
[^[:L:][:M:]] [sS] { [sS] > ;
[^[:L:][:M:]] [tT] { [tT] > ;
[^[:L:][:M:]] [vV] { [vV] > ;
[^[:L:][:M:]] [wW] { [wW] > ;
[^[:L:][:M:]] [xX] { [xX] > ;
[^[:L:][:M:]] [yY] { [yY] > ;
[^[:L:][:M:]] [zZ] { [zZ] > ;

::Null;

d [zZ] [sS] } [dD] [zZ] [sS] > d;
D [zZ] [sS] } [dD] [zZ] [sS] > D;
d [zZ] } [dD] [zZ] > d;
D [zZ] } [dD] [zZ] > D;
s [zZ] } [sS] [zZ] > s;
S [zZ] } [sS] [zZ] > S;
c [sS] } [cC] [sS] > c;
C [sS] } [cC] [sS] > C;
z [sS] } [zZ] [sS] > z;
Z [sS] } [zZ] [sS] > Z;
g [yY] } [gG] [yY] > g;
G [yY] } [gG] [yY] > G;
n [yY] } [nN] [yY] > n;
N [yY] } [nN] [yY] > N;
t [yY] } [tT] [yY] > t;
T [yY] } [tT] [yY] > T;
l [yY] } [lL] [yY] > l;
L [yY] } [lL] [yY] > L;

::Null;

[bB] [bB] { [bB] > ;
[cC] [cC] { [cC] > ;
[dD] [dD] { [dD] > ;
[fF] [fF] { [fF] > ;
[gG] [gG] { [gG] > ;
[hH] [hH] { [hH] > ;
[jJ] [jJ] { [jJ] > ;
[kK] [kK] { [kK] > ;
[lL] [lL] { [lL] > ;
[mM] [mM] { [mM] > ;
[nN] [nN] { [nN] > ;
[pP] [pP] { [pP] > ;
[qQ] [qQ] { [qQ] > ;
[rR] [rR] { [rR] > ;
[sS] [sS] { [sS] > ;
[tT] [tT] { [tT] > ;
[vV] [vV] { [vV] > ;
[wW] [wW] { [wW] > ;
[xX] [xX] { [xX] > ;
[yY] [yY] { [yY] > ;
[zZ] [zZ] { [zZ] > ;
`;
