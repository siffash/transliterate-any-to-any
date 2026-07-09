export const latnItRules = `
::Null;

DŽ } [EIÏŸY] > G;
DŽ } [eiïÿy] > G;
DŽ } [:Upper:] > GI;
DŽ > Gi;
Dž } [EIÏŸY] > G;
Dž } [eiïÿy] > G;
Dž } [:Upper:] > Gi;
Dž > Gi;
dž } [EIÏŸYeiïÿy] > g;
dž > gi;

Đ } [EIÏŸY] > G;
Đ } [eiïÿy] > G;
Đ } [:Upper:] > GI;
Đ > Gi;
đ } [EIÏŸYeiïÿy] > g;
đ > gi;

TS > Z;
Ts > Z;
ts > z;
DZ > Z;
Dz > Z;
dz > z;

TH > T;
Th > T;
th > t;
DH > D;
Dh > D;
dh > d;

KH } [EIÏŸY] > CH;
KH } [eiïÿy] > CH;
KH } [:Upper:] > C;
KH > C;
Kh } [EIÏŸY] > Ch;
Kh } [eiïÿy] > Ch;
Kh } [:Upper:] > C;
Kh > C;
kh } [EIÏŸYeiïÿy] > ch;
kh > c;

GH } [EIÏŸY] > GH;
GH } [eiïÿy] > Gh;
GH } [:Upper:] > G;
GH > G;
Gh } [EIÏŸY] > Gh;
Gh } [eiïÿy] > Gh;
Gh } [:Upper:] > G;
Gh > G;
gh } [EIÏŸYeiïÿy] > gh;
gh > g;

IJ > EI;
Ij > Ei;
ij > ei;

[ČĆ] } [EIÏŸY] > C;
[ČĆ] } [eiïÿy] > C;
[ČĆ] } [:Upper:] > CI;
[ČĆ] > Ci;
[čć] } [EIÏŸYeiïÿy] > c;
[čć] > ci;

Š } [EIÏŸY] > SC;
Š } [eiïÿy] > Sc;
Š } [:Upper:] > SCI;
Š > Sci;
š } [EIÏŸYeiïÿy] > sc;
š > sci;

Ľ } [IÏŸY] > GL;
Ľ } [iïÿy] > Gl;
Ľ } [:Upper:] > GLI;
Ľ > Gli;
ľ } [IÏŸYiïÿy] > gl;
ľ > gli;

[KQX] } [EIÏŸY] > CH;
[KQX] } [eiïÿy] > Ch;
[KQX] > C;
[kqx] } [EIÏŸYeiïÿy] > ch;
[kqx] > c;

G } [EIÏŸY] > GH;
G } [eiïÿy] > Gh;
g } [EIÏŸYeiïÿy] > gh;

Ń } [:Upper:] > GN;
Ń > Gn;
ń > gn;

Ž > J;
ž > j;

W > V;
w > v;

Z > S;
z > s;

h > ;
H ([:Letter:]) > &Any-Upper($1);
H > ;

[YÏŸ] > I;
[yïÿ] > i;
Ä > A;
ä > a;
Ö > O;
ö > o;
Ü > U;
ü > u;

['·] > ;

::Null;

[cCgG] { [iI] } [eEèéÈÉiIìíÌÍ] > ;
[gG] [nN] { [iI] } [aAàáÀÁeEèéÈÉiIìíÌÍoOòóÒÓuUùúÙÚ] > ;
[gG] [lL] { [iI] } [iIìíÌÍ] > ;
`;
