export const latnItRules = `
::Null;

[:Lu:] { Ŋ [hH] } [EIÏYeiïy] > NG;
ŊH } [EIÏY] > NG;
Ŋ [hH] } [EIÏYeiïy] > Ng;
ŋ [hH] } [EIÏYeiïy] > ng;
[:Lu:] { Ŋ > NG;
Ŋ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > NG;
Ŋ } [:Lu:] > NG;
Ŋ > Ng;
ŋ > ng;

[:Lu:] { C > TS;
C } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > TS;
C } [:Lu:] > TS;
C > Ts;
c > ts;

[Šš] { [Šš] > ;
Č } [Čč] > C;
č } [Čč] > c;
Ǯ } [Ǯǯ] > G;
ǯ } [Ǯǯ] > g;
Ć } [Ćć] > C;
ć } [Ćć] > c;
Đ } [Đđ] > G;
đ } [Đđ] > g;

Ẑ > Z;
ẑ > z;

[:Lu:] { Ḫ } [EIÏYeiïy] > CH;
Ḫ } [EIYÏ] > CH;
Ḫ } [EIÏYeiïy] > Ch;
ḫ } [EIÏYeiïy] > ch;

Ḫ > C;
ḫ > c;

[:Lu:] { Ɣ } [EIÏYeiïy] > GH;
Ɣ } [EIYÏ] > GH;
Ɣ } [EIÏYeiïy] > Gh;
ɣ } [EIÏYeiïy] > gh;

Ɣ > G;
ɣ > g;

IJ > EI;
iJ > eI;
Ij > Ei;
ij > ei;

[čćšžđČĆŠŽĐǯǮ] { [hH] } [EIÏYeiïy] > ;

::Null;

Ǯ } [EIÏYeiïy] > G;
ǯ } [EIÏYeiïy] > g;

[:Lu:] { Ǯ > GI;
Ǯ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > GI;
Ǯ } [:Lu:] > GI;
Ǯ > Gi;
ǯ > gi;

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
Ľ } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁǯǮþÞ] > L;
ľ } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁǯǮþÞ] > l;
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
Ń } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁǯǮþÞ] > N;
ń } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁǯǮþÞ] > n;
[:Lu:] { Ń > GN;
Ń } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > GN;
Ń } [:Lu:] > GN;
Ń > Gn;
ń > gn;

Ž > J;
ž > j;

W > V;
w > v;

Þ > T;
þ > t;

T [sS] > Z;
t [sS] > z;

Z > S;
z > s;

[cCgG] { h } [EIÏYeiïy] > h;
[cCgG] { H } [EIÏYeiïy] > H;
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
