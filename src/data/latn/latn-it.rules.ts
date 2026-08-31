export const latnItRules = `
::Null;

DŽ } [EIÏY] > G;
DŽ } [eiïy] > G;
DŽ } [:Lu:] > GI;
DŽ > Gi;
Dž } [EIÏY] > G;
Dž } [eiïy] > G;
Dž } [:Lu:] > Gi;
Dž > Gi;
dž } [EIÏYeiïy] > g;
dž > gi;

TS > Z;
Ts > Z;
ts > z;

DZ > Z;
Dz > Z;
dz > z;

TH > T;
Th > T;
th > t;

KH } [EIÏY] > CH;
KH } [eiïy] > CH;
KH } [:Lu:] > C;
KH > C;
Kh } [EIÏY] > Ch;
Kh } [eiïy] > Ch;
Kh } [:Lu:] > C;
Kh > C;
kh } [EIÏYeiïy] > ch;
kh > c;

GH } [EIÏY] > GH;
GH } [eiïy] > Gh;
GH } [:Lu:] > G;
GH > G;
Gh } [EIÏY] > Gh;
Gh } [eiïy] > Gh;
Gh } [:Lu:] > G;
Gh > G;
gh } [EIÏYeiïy] > gh;
gh > g;

IJ > EI;
Ij > Ei;
ij > ei;

::Null;

Đ } [EIÏY] > G;
Đ } [eiïy] > G;
Đ } [:Lu:] > GI;
Đ > Gi;
đ } [EIÏYeiïy] > g;
đ > gi;

[ČĆ] } [EIÏY] > C;
[ČĆ] } [eiïy] > C;
[ČĆ] } [:Lu:] > CI;
[ČĆ] > Ci;
[čć] } [EIÏYeiïy] > c;
[čć] > ci;

Š } [EIÏY] > SC;
Š } [eiïy] > Sc;
Š } [:Lu:] > SCI;
Š > Sci;
š } [EIÏYeiïy] > sc;
š > sci;

Ľ } [IÏY] > GL;
Ľ } [iïy] > Gl;
Ľ } [:Lu:] > GLI;
Ľ > Gli;
ľ } [IÏYiïy] > gl;
ľ > gli;

[KQX] } [EIÏY] > CH;
[KQX] } [eiïy] > Ch;
[KQX] > C;
[kqx] } [EIÏYeiïy] > ch;
[kqx] > c;

G } [EIÏY] > GH;
G } [eiïy] > Gh;
g } [EIÏYeiïy] > gh;

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
