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
Dz > Dz;
dz > dz;

DŽ > DZS;
Dž > Dzs;
dž > dzs;

KH > CH;
Kh > Ch;
kh > ch;

TS > C;
Ts > C;
ts > c;

TH > T;
Th > T;
th > t;

GH > G;
Gh > G;
gh > g;

IJ > EJ;
Ij > Ej;
ij > ej;

::Null;

ČČ > CCS;
Čč > Ccs;
čč > ccs;

ĆĆ > CCS;
Ćć > Ccs;
ćć > ccs;

ŽŽ > ZZS;
Žž > Zzs;
žž > zzs;

SS > SSZ;
Ss > Ssz;
ss > ssz;

ĐĐ > GGY;
Đđ > Ggy;
đđ > ggy;

XX > CHCH;
Xx > Chch;
xx > chch;

ŃŃ > NNY;
Ńń > Nny;
ńń > nny;

ĽĽ > LLY;
Ľľ > Lly;
ľľ > lly;

[ČĆ] } [:Ll:] > Cs;
[ČĆ] > CS;
[čć] > cs;

Ž } [:Ll:] > Zs;
Ž > ZS;
ž > zs;

Đ } [:Ll:] > Gy;
Đ > GY;
đ > gy;

X } [:Ll:] > Ch;
X > CH;
x > ch;

Ń } [:Ll:] > Ny;
Ń > NY;
ń > ny;

Ľ } [:Ll:] > Ly;
Ľ > LY;
ľ > ly;

S } [:Ll:] > Sz;
S > SZ;
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

dzs } dzs > d;
Dzs } dzs > D;
DZS } DZS > D;
DZS } dzs > D;
dz } dz > d;
Dz } dz > D;
DZ } DZ > D;
DZ } dz > D;
sz } sz > s;
Sz } sz > S;
SZ } SZ > S;
SZ } sz > S;
cs } cs > c;
Cs } cs > C;
CS } CS > C;
CS } cs > C;
zs } zs > z;
Zs } zs > Z;
ZS } ZS > Z;
ZS } zs > Z;
gy } gy > g;
Gy } gy > G;
GY } GY > G;
GY } gy > G;
ny } ny > n;
Ny } ny > N;
NY } NY > N;
NY } ny > N;
ty } ty > t;
Ty } ty > T;
TY } TY > T;
TY } ty > T;
ly } ly > l;
Ly } ly > L;
LY } LY > L;
LY } ly > L;

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
