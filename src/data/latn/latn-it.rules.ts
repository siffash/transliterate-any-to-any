export const latnItRules = `
::Null;

D [zZ] > Z;
d [zZ] > z;

KH } [EIÏYeiïy] > CH;
kH } [EIÏYeiïy] > cH;
Kh } [EIÏYeiïy] > Ch;
kh } [EIÏYeiïy] > ch;

K [hH] > C;
k [hH] > c;

[nN] { G } [hH] > G;
[nN] { g } [hH] > g;
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

[čćšžđČĆŠŽĐ] { [hH] } [EIÏYeiïy] > ;

::Null;

D [žŽ] } [EIÏYeiïy] > G;
d [žŽ] } [EIÏYeiïy] > g;

DŽ > GI;
dŽ > gI;
Dž > Gi;
dž > gi;

Đ } [EIÏYeiïy] > G;
đ } [EIÏYeiïy] > g;

[:Lu:] { Đ > GI;
Đ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > GI;
Đ } [:Lu:] > GI;
Đ > Gi;
đ > gi;

[ČĆ] } [EIÏYeiïy] > C;
[čć] } [EIÏYeiïy] > c;

[:Lu:] { [ČĆ] > CI;
[ČĆ] } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > CI;
[ČĆ] } [:Lu:] > CI;
[ČĆ] > Ci;
[čć] > ci;

Š } [EIÏY] > SC;
Š } [eiïy] > Sc;
š } [EIÏY] > sC;
š } [eiïy] > sc;

[:Lu:] { Š > SCI;
Š } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > SCI;
Š } [:Lu:] > SCI;
Š > Sci;
š > sci;

Ľ } [IÏY] > GL;
Ľ } [iïy] > Gl;
ľ } [IÏY] > gL;
ľ } [iïy] > gl;

Ľ } [^[:L:][:M:]] > L;
ľ } [^[:L:][:M:]] > l;
Ľ } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > L;
ľ } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > l;
[:Lu:] { Ľ > GLI;
Ľ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > GLI;
Ľ } [:Lu:] > GLI;
Ľ > Gli;
ľ > gli;

[KQX] } [EIÏY] > CH;
[KQX] } [eiïy] > Ch;
[kqx] } [EIÏY] > cH;
[kqx] } [eiïy] > ch;

[KQX] > C;
[kqx] > c;

[nN] { G [hH] } [EIÏY] > GH;
[nN] { G [hH] } [eiïy] > Gh;
[nN] { g [hH] } [EIÏY] > gH;
[nN] { g [hH] } [eiïy] > gh;
G } [EIÏY] > GH;
G } [eiïy] > Gh;
g } [EIÏY] > gH;
g } [eiïy] > gh;

Ń } [^[:L:][:M:]] > N;
ń } [^[:L:][:M:]] > n;
Ń } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > N;
ń } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > n;
[:Lu:] { Ń > GN;
Ń } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > GN;
Ń } [:Lu:] > GN;
Ń > Gn;
ń > gn;

Ž > J;
ž > j;

W > V;
w > v;

T [hH] > T;
t [hH] > t;

T [sS] > Z;
t [sS] > z;

Z > S;
z > s;

h > ;
H ([:L:]) >| &Any-Upper($1);
H > ;

[cCgG] [iIïÏ] { Y } [AEOUÄÖÜaeouäöü] > I;
[cCgG] [iIïÏ] { y } [AEOUÄÖÜaeouäöü] > i;
[iI] { [yY] > ;
Y [iï] > I;
[yY] } [iIïÏ] > ;

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

[cCgG] { [iI] } [eEèéÈÉ] > ;
[gG] [nN] { [iI] } [aAàáÀÁeEèéÈÉiIìíÌÍoOòóÒÓuUùúÙÚyYïÏÿŸäÄöÖüÜ] > ;
[gG] [lL] { [iI] } [iIìíÌÍyYïÏ] > ;

::Null;

[iI] [iI] { [iI]+ > ;
[uU] [uU] { [uU]+ > ;
`;
