export const latnNlRules = `
::Null;

DŽ > DJ;
Dž > Dj;
dž > dj;

GH > G;
Gh > G;
gh > g;

KH > CH;
Kh > Ch;
kh > ch;

TH > T;
Th > T;
th > t;

::Null;

Š } [:Ll:] > Sj;
Š > SJ;
š > sj;

[ČĆ] } [:Ll:] > Tsj;
[ČĆ] > TSJ;
[čć] > tsj;

Ž } [:Ll:] > Zj;
Ž > ZJ;
ž > zj;

Đ } [:Ll:] > Dj;
Đ > DJ;
đ > dj;

X } [:Ll:] > Ch;
X > CH;
x > ch;

Ń } [:Ll:] > Nj;
Ń > NJ;
ń > nj;

Ľ } [:Ll:] > Lj;
Ľ > LJ;
ľ > lj;

Q > K;
q > k;

U } [:Ll:] > Oe;
U > OE;
u > oe;

Ö } [:Ll:] > Eu;
Ö > EU;
ö > eu;

[ŸÜ] > U;
[ÿü] > u;

Ä > E;
ä > e;

Ï > I;
ï > i;

Y > J;
y > j;

[:^Letter:] { ['·] > ;
['·] } [:^Letter:] > ;
· > \\-;

::Null;

[aA] { [aA] } [:^Letter:] > ;
[oO] { [oO] } [:^Letter:] > ;
[uU] { [uU] } [:^Letter:] > ;

[cC] [hH] { [cC] [hH] > ;
[sS] [jJ] { [sS] [jJ] > ;
[zZ] [jJ] { [zZ] [jJ] > ;
[nN] [gG] { [nN] [gG] > ;

[tT] [sS] [jJ] { [tT] [sS] [jJ] > ;
[dD] [zZ] [jJ] { [dD] [zZ] [jJ] > ;

[aA] [aA] { [aA] > ;
[eE] [eE] { [eE] > ;
[iI] [iI] { [iI] > ;
[oO] [oO] { [oO] > ;
[uU] [uU] { [uU] > ;
`;
