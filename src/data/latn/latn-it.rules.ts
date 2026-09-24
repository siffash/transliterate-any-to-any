export const latnItRules = `
::Null;

D [žŽ] } [EIÏYeiïy] > G;
d [žŽ] } [EIÏYeiïy] > g;

DŽ > GI;
dŽ > gI;
Dž > Gi;
dž > gi;

T [sS] > Z;
t [sS] > z;

D [zZ] > Z;
d [zZ] > z;

T [hH] > T;
t [hH] > t;

KH } [EIÏYeiïy] > CH;
kH } [EIÏYeiïy] > cH;
Kh } [EIÏYeiïy] > Ch;
kh } [EIÏYeiïy] > ch;

K [hH] > C;
k [hH] > c;

GH } [EIÏYeiïy] > GH;
gH } [EIÏYeiïy] > gH;
Gh } [EIÏYeiïy] > Gh;
gh } [EIÏYeiïy] > gh;

G [hH] > G;
g [hH] > g;

IJ > EI;
iJ > eI;
Ij > Ei;
ij > ei;

::Null;

Đ } [EIÏYeiïy] > G;
đ } [EIÏYeiïy] > g;

[:Lu:] { Đ > GI;
Đ } [:Lu:] > GI;
Đ > Gi;
đ > gi;

[ČĆ] } [EIÏYeiïy] > C;
[čć] } [EIÏYeiïy] > c;

[:Lu:] { [ČĆ] > CI;
[ČĆ] } [:Lu:] > CI;
[ČĆ] > Ci;
[čć] > ci;

Š } [EIÏY] > SC;
Š } [eiïy] > Sc;
š } [EIÏY] > sC;
š } [eiïy] > sc;

[:Lu:] { Š > SCI;
Š } [:Lu:] > SCI;
Š > Sci;
š > sci;

Ľ } [IÏY] > GL;
Ľ } [iïy] > Gl;
ľ } [IÏY] > gL;
ľ } [iïy] > gl;

[:Lu:] { Ľ > GLI;
Ľ } [:Lu:] > GLI;
Ľ > Gli;
ľ > gli;

[KQX] } [EIÏY] > CH;
[KQX] } [eiïy] > Ch;
[kqx] } [EIÏY] > cH;
[kqx] } [eiïy] > ch;

[KQX] > C;
[kqx] > c;

G } [EIÏY] > GH;
G } [eiïy] > Gh;
g } [EIÏY] > gH;
g } [eiïy] > gh;

[:Lu:] { Ń > GN;
Ń } [:Lu:] > GN;
Ń > Gn;
ń > gn;

Ž > J;
ž > j;

W > V;
w > v;

Z > S;
z > s;

h > ;
H ([:L:]) >| &Any-Upper($1);
H > ;

[YÏ] > I;
[yï] > i;
Ä > A;
ä > a;
Ö > O;
ö > o;
[ÜŸ] > U;
[üÿ] > u;

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
· > ;

::Null;

[cCgG] { [iI] } [eEèéÈÉiIìíÌÍyYïÏ] > ;
[gG] [nN] { [iI] } [aAàáÀÁeEèéÈÉiIìíÌÍoOòóÒÓuUùúÙÚyYïÏÿŸäÄöÖüÜ] > ;
[gG] [lL] { [iI] } [iIìíÌÍyYïÏ] > ;
`;
