export const latnViRules = `
::Null;

[BbĆćČčDdĐđFfGgHhKkLlĽľMmNnŃńPpQqRrSsŠšTtVvWwXxZzŽž] { Y > I;
[BbĆćČčDdĐđFfGgHhKkLlĽľMmNnŃńPpQqRrSsŠšTtVvWwXxZzŽž] { y > i;

::Null;

D [Žž] } [Ii] > G;
d [Žž] } [Ii] > g;

DŽ > GI;
dŽ > gI;
Dž > Gi;
dž > gi;

D [Zz] > D;
d [Zz] > d;

T [Ss] > X;
t [Ss] > x;

IJ > AY;
iJ > aY;
Ij > Ay;
ij > ay;

NG } [eäiy] > NGh;
NG } [EÄIY] > NGH;
Ng } [EeÄäIiYy] > Ngh;
ng } [EeÄäIiYy] > ngh;

GH } [EeÄäIiYy] > GH;
Gh } [EeÄäIiYy] > Gh;
gH } [EeÄäIiYy] > gH;
gh } [EeÄäIiYy] > gh;
G [Hh] > G;
g [Hh] > g;

G } [EÄIY] > GH;
G } [eäiy] > Gh;
g } [EÄIY] > gH;
g } [eäiy] > gh;

KH > KH;
kH > kH;
Kh > Kh;
kh > kh;

K } [Ww] > Q;
k } [Ww] > q;

[QGqg] { W > U;
[QGqg] { w > u;

Q } [Ww] > Q;
q } [Ww] > q;
Q } [EeÄäIiYy] > K;
q } [EeÄäIiYy] > k;
Q > C;
q > c;

K } [EeÄäIiYy] > K;
k } [EeÄäIiYy] > k;
K > C;
k > c;

[:Lu:] { [ČĆ] > CH;
[ČĆ] } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > CH;
[ČĆ] } [:Lu:] > CH;
[ČĆ] > Ch;
[čć] > ch;

Ń } [^[:L:][:M:]] > N;
ń } [^[:L:][:M:]] > n;
Ń } [Hh] > N;
ń } [Hh] > n;
Ń } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > NH;
Ń } [:Lu:] > NH;
[:Lu:] { Ń > NH;
Ń > Nh;
ń > nh;

Ľ > L;
ľ > l;

Ž } [Ii] > G;
ž } [Ii] > g;

[:Lu:] { Ž > GI;
Ž } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > GI;
Ž } [:Lu:] > GI;
Ž > Gi;
ž > gi;

[:Lu:] { Š > S;
Š } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > S;
Š } [:Lu:] > S;
Š > S;
š > s;

[:Lu:] { Đ > D;
Đ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > D;
Đ } [:Lu:] > D;
Đ > D;
đ > d;

D > Đ;
d > đ;

[:Lu:] { F > PH;
F } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > PH;
F } [:Lu:] > PH;
F > Ph;
f > ph;

[:Lu:] { X > KH;
X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KH;
X } [:Lu:] > KH;
X > Kh;
x > kh;

[:Lu:] { [ÜŸ] > UY;
[ÜŸ] } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > UY;
[ÜŸ] } [:Lu:] > UY;
[ÜŸ] > Uy;
[üÿ] > uy;

Y } [AaÄäEeIiÏïOoÖöUuÜüŸÿ] > Y;
y } [AaÄäEeIiÏïOoÖöUuÜüŸÿ] > y;
Y } [^[:L:][:M:]] > I;
y } [^[:L:][:M:]] > i;
Y } [BbĆćČčDdĐđFfGgHhKkLlĽľMmNnŃńPpQqRrSsŠšTtVvWwXxZzŽž] > I;
y } [BbĆćČčDdĐđFfGgHhKkLlĽľMmNnŃńPpQqRrSsŠšTtVvWwXxZzŽž] > i;

[:Lu:] { Y > GI;
Y } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > GI;
Y } [:Lu:] > GI;
Y > Gi;
y > gi;

Z > D;
z > d;

S > X;
s > x;

W > V;
w > v;

Ä > E;
ä > e;

Ï > Ư;
ï > ư;

Ö > Ơ;
ö > ơ;

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
· > ;
`;
