export const latnEsRules = `
::Null;

DŽ > CH;
Dž > Ch;
dž > ch;

DZ > Z;
Dz > Z;
dz > z;

TH > Z;
Th > Z;
th > z;

GH > G;
Gh > G;
gh > g;

KH > J;
Kh > J;
kh > j;

IJ > EI;
Ij > Ei;
ij > ei;

::Null;

[:^Letter:] { \\' > ;
\\' } [:^Letter:] > ;
· > ;

Ä > E;
ä > e;
Ö > O;
ö > o;
[ÜŸ] > U;
[üÿ] > u;
Ï > I;
ï > i;

[ČĆ] } [:Ll:] > Ch;
[ČĆ] > CH;
[čć] > ch;

Đ } [:Ll:] > Ch;
Đ > CH;
đ > ch;

Ľ } [:Ll:] > Ll;
Ľ > LL;
ľ > ll;

Ń > Ñ;
ń > ñ;

Š > S;
š > s;

Ž } [:Ll:] > Zh;
Ž > ZH;
ž > zh;

KS > X;
Ks > X;
kS > x;
ks > x;

Q > K;
q > k;

[XH] > J;
[xh] > j;

::Null;

[:^Letter:] { I } [:^Letter:] > Y;
[:^Letter:] { i } [:^Letter:] > y;
[aAeEoO] { I } [:^Letter:] > Y;
[aAeEoO] { i } [:^Letter:] > y;

K } [EI] > QU;
K } [ei] > Qu;
k } [EIei] > qu;
K > C;
k > c;

G } [EI] > GU;
G } [ei] > Gu;
g } [EIei] > gu;

::Null;

[bB] { [bB] > ;
[cC] { [cC] } [^eéiíEÉIÍ] > ;
[dD] { [dD] > ;
[fF] { [fF] > ;
[gG] { [gG] > ;
[hH] { [hH] > ;
[jJ] { [jJ] > ;
[kK] { [kK] > ;
[mM] { [mM] > ;
[pP] { [pP] > ;
[qQ] { [qQ] > ;
[sS] { [sS] > ;
[tT] { [tT] > ;
[vV] { [vV] > ;
[wW] { [wW] > ;
[xX] { [xX] > ;
[zZ] { [zZ] > ;

::Null;

n } [bpBP] > m;
N } [bpBP] > M;
m } [vV] > n;
M } [vV] > N;

Q } [EÉIÍ] > QU;
Q } [eéií] > Qu;
q } [eéEÉiíIÍ] > qu;
q } [üÜ] [eéEÉiíIÍ] > c;
Q } [üÜ] [eéEÉiíIÍ] > C;
q } [uúüÜUÚ] [aáAÁoóOÓuúUÚ] > c;
Q } [uúüÜUÚ] [aáAÁoóOÓuúUÚ] > C;
q } [uúüÜUÚ] [bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPQRSTVWXYZ] > c;
Q } [uúüÜUÚ] [bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPQRSTVWXYZ] > C;
q } [uúüÜUÚ] [:^Letter:] > c;
Q } [uúüÜUÚ] [:^Letter:] > C;
q } [aáAÁoóOÓ] > c;
Q } [aáAÁoóOÓ] > C;
q } [bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPQRSTVWXYZ] > c;
Q } [bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPQRSTVWXYZ] > C;
q } [:^Letter:] > c;
Q } [:^Letter:] > C;

[bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPQRSTVWXYZ] { y } [:^Letter:] > i;
[bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPQRSTVWXYZ] { Y } [:^Letter:] > I;

[aAeEoO] { y } [yY] > i;
[aAeEoO] { Y } [yY] > I;
`;
