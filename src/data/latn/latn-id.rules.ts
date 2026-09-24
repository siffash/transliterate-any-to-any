export const latnIdRules = `
::Null;

IJ > EI;
iJ > eI;
Ij > Ei;
ij > ei;

D [žŽ] > J;
d [žŽ] > j;

D [zZ] > Z;
d [zZ] > z;

T [hH] > T;
t [hH] > t;

[nN] { GH > GH;
[nN] { gH > gH;
[nN] { Gh > Gh;
[nN] { gh > gh;
G [hH] > G;
g [hH] > g;

::Null;

[:Lu:] { X > KH;
X } [:Lu:] > KH;
X > Kh;
x > kh;

Ń } [^[:L:][:M:]] > N;
ń } [^[:L:][:M:]] > n;
Ń } [Yy] > N;
ń } [Yy] > n;
[:Lu:] { Ń > NY;
Ń } [:Lu:] > NY;
Ń > Ny;
ń > ny;

[:Lu:] { Š > SY;
Š } [:Lu:] > SY;
Š > Sy;
š > sy;

[ČĆ] > C;
[čć] > c;

[ŽĐ] > J;
[žđ] > j;

Ï > I;
ï > i;

Ä > E;
ä > e;
Ö > O;
ö > o;
[ÜŸ] > U;
[üÿ] > u;
Q > K;
q > k;
Ľ > L;
ľ > l;

[^[:L:][:M:]] { ['·] > ;
['·] } [^[:L:][:M:]] > ;
· > \\-;

::Null;

sh > sy;
Sh > Sy;
SH > SY;
sH > sY;

c [hH] > c;
C [hH] > C;

p [hH] > f;
P [hH] > F;

t [hH] > t;
T [hH] > T;

z [hH] > z;
Z [hH] > Z;

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

[sS] [yY] { [sS] [yY] > ;
[kK] [hH] { [kK] [hH] > ;
[nN] [yY] { [nN] [yY] > ;
`;
