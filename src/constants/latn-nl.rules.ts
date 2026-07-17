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

Š } [:Lower:] > Sj;
Š > SJ;
š > sj;

Č } [:Lower:] > Tsj;
Č > TSJ;
č > tsj;

Ž } [:Lower:] > Zj;
Ž > ZJ;
ž > zj;

Ć } [:Lower:] > Tj;
Ć > TJ;
ć > tj;

Đ } [:Lower:] > Dj;
Đ > DJ;
đ > dj;

X } [:Lower:] > Ch;
X > CH;
x > ch;

Ń } [:Lower:] > Nj;
Ń > NJ;
ń > nj;

Ľ } [:Lower:] > Lj;
Ľ > LJ;
ľ > lj;

Q > K;
q > k;

U } [:Lower:] > Oe;
U > OE;
u > oe;

Ö } [:Lower:] > Eu;
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

\\' > ;
· > \\-;

::Null;

[aA] { [aA] } [:^Letter:] > ;
[oO] { [oO] } [:^Letter:] > ;
[uU] { [uU] } [:^Letter:] > ;

[cC] [hH] { [cC] [hH] } > ;
[sS] [jJ] { [sS] [jJ] } > ;
[zZ] [jJ] { [zZ] [jJ] } > ;
[nN] [gG] { [nN] [gG] } > ;

[tT] [sS] [jJ] { [tT] [sS] [jJ] } > ;
[dD] [zZ] [jJ] { [dD] [zZ] [jJ] } > ;

[aA] [aA] { [aA] } > ;
[eE] [eE] { [eE] } > ;
[iI] [iI] { [iI] } > ;
[oO] [oO] { [oO] } > ;
[uU] [uU] { [uU] } > ;
`;
