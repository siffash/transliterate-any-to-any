export const latnEsRules = `
::Null;

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

[Čč] { [Čč] > ;
[Ćć] { [Ćć] > ;
[Đđ] { [Đđ] > ;
[Ǯǯ] { [Ǯǯ] > ;

::Null;

[Tt] [Ss] { [Tt] [Ss] > ;

[ẐÞ] > Z;
[ẑþ] > z;

Ɣ > G;
ɣ > g;

Ḫ > J;
ḫ > j;

IJ > EI;
iJ > eI;
Ij > Ei;
ij > ei;

::Null;

[:Lu:] { Ǯ > CH;
Ǯ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > CH;
Ǯ } [:Lu:] > CH;
Ǯ > Ch;
ǯ > ch;

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
· > ;

Ä > E;
ä > e;
Ö > O;
ö > o;
[ÜŸ] > U;
[üÿ] > u;
Ï > I;
ï > i;

[:Lu:] { [ČĆ] > CH;
[ČĆ] } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > CH;
[ČĆ] } [:Lu:] > CH;
[ČĆ] > Ch;
[čć] > ch;

[:Lu:] { Đ > CH;
Đ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > CH;
Đ } [:Lu:] > CH;
Đ > Ch;
đ > ch;

Ľ } [Ll] > L;
ľ } [Ll] > l;
Ľ } [Yy] > L;
ľ } [Yy] > l;
Ľ } [^[:L:][:M:]] > L;
ľ } [^[:L:][:M:]] > l;
Ľ } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁǯǮ] > L;
ľ } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁǯǮ] > l;
[:Lu:] { Ľ > LL;
Ľ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > LL;
Ľ } [:Lu:] > LL;
Ľ > Ll;
ľ > ll;

Ń } [Yy] > N;
ń } [Yy] > n;
Ń } [^[:L:][:M:]] > N;
ń } [^[:L:][:M:]] > n;
Ń } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁǯǮ] > N;
ń } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁǯǮ] > n;
Ń > Ñ;
ń > ñ;

Š > S;
š > s;

[:Lu:] { Ž > ZH;
Ž } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > ZH;
Ž } [:Lu:] > ZH;
Ž > Zh;
ž > zh;

K } [sS][sS] > K;
k } [sS][sS] > k;
K [sS] > X;
k [sS] > x;

Q > K;
q > k;

[XH] > J;
[xh] > j;

::Null;

[^[:L:][:M:]] { I } [^[:L:][:M:]] > Y;
[^[:L:][:M:]] { i } [^[:L:][:M:]] > y;
[aAeEoO] { I } [^[:L:][:M:]] > Y;
[aAeEoO] { i } [^[:L:][:M:]] > y;

K } [EI] > QU;
K } [ei] > Qu;
k } [EI] > qU;
k } [ei] > qu;
K > C;
k > c;

G } [EI] > GU;
G } [ei] > Gu;
g } [EI] > gU;
g } [ei] > gu;



::Null;

[bB] { [bB]+ > ;
[cC] { [cC]+ } [^eéiíEÉIÍ] > ;
[dD] { [dD]+ > ;
[fF] { [fF]+ > ;
[gG] { [gG]+ > ;
[hH] { [hH]+ > ;
[jJ] { [jJ]+ > ;
[kK] { [kK]+ > ;
[mM] { [mM]+ > ;
[pP] { [pP]+ > ;
[qQ] { [qQ]+ > ;
[sS] { [sS]+ > ;
[tT] { [tT]+ > ;
[vV] { [vV]+ > ;
[wW] { [wW]+ > ;
[xX] { [xX]+ > ;
[zZ] { [zZ]+ > ;

n } [bpBP] > m;
N } [bpBP] > M;
m } [vV] > n;
M } [vV] > N;

Q } [EÉIÍ] > QU;
Q } [eéií] > Qu;
q } [EÉIÍ] > qU;
q } [eéií] > qu;
q } [üÜ] [eéEÉiíIÍ] > c;
Q } [üÜ] [eéEÉiíIÍ] > C;
q } [uúüÜUÚ] [aáAÁoóOÓuúUÚ] > c;
Q } [uúüÜUÚ] [aáAÁoóOÓuúUÚ] > C;
q } [uúüÜUÚ] [bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPQRSTVWXYZ] > c;
Q } [uúüÜUÚ] [bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPQRSTVWXYZ] > C;
q } [uúüÜUÚ] [^[:L:][:M:]] > c;
Q } [uúüÜUÚ] [^[:L:][:M:]] > C;
q } [aáAÁoóOÓ] > c;
Q } [aáAÁoóOÓ] > C;
q } [bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPQRSTVWXYZ] > c;
Q } [bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPQRSTVWXYZ] > C;
q } [^[:L:][:M:]] > c;
Q } [^[:L:][:M:]] > C;

[bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPQRSTVWXYZ] { y } [^[:L:][:M:]] > i;
[bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPQRSTVWXYZ] { Y } [^[:L:][:M:]] > I;

[aAeEoO] { y } [yY] > i;
[aAeEoO] { Y } [yY] > I;
`;
