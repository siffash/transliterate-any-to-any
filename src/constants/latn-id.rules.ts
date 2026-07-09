export const latnIdRules = `
::Null;

[:^Letter:] { \\' > ;

I[Jj] } [:Lower:] > Ei;
IJ > EI;
Ij > Ei;
ij > ei;

DŽ > J;
Dž > J;
dž > j;

DZ > Z;
Dz > Z;
dz > z;

TS > C;
Ts > C;
ts > c;

TH > T;
Th > T;
th > t;

DH > D;
Dh > D;
dh > d;

GH > G;
Gh > G;
gh > g;

X } [:Lower:] > Kh;
X > KH;
x > kh;

Ń } [:Lower:] > Ny;
Ń > NY;
ń > ny;

Š } [:Lower:] > Sy;
Š > SY;
š > sy;

[ČĆ] > C;
[čć] > c;

[ŽĐ] > J;
[žđ] > j;

[ÏŸ] > I;
[ïÿ] > i;

Ä > E;
ä > e;
Ö > O;
ö > o;
Ü > U;
ü > u;
Q > K;
q > k;
Ľ > L;
ľ > l;

· > \\-;

::Null;

sh > sy;
Sh > Sy;
SH > SY;
sH > sY;

ch > c;
Ch > C;
CH > C;
cH > c;

ph > f;
Ph > F;
PH > F;
pH > f;

th > t;
Th > T;
TH > T;
tH > t;

zh > z;
Zh > Z;
ZH > Z;
zH > z;

::Null;

[bB] { [bB] > ;
[cC] { [cC] > ;
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
[wW] { [wW] > ;
[xX] { [xX] > ;
[yY] { [yY] > ;
[zZ] { [zZ] > ;
`;
