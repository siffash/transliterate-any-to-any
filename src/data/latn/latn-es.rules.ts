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

[^[:L:][:M:]] { I } [^[:L:][:M:]] > Y;
[^[:L:][:M:]] { i } [^[:L:][:M:]] > y;
[aAeEoO] { I } [^[:L:][:M:]] > Y;
[aAeEoO] { i } [^[:L:][:M:]] > y;

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
