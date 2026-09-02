export const latnViRules = `
::Null;

[BbĆćČčDdĐđFfGgHhKkLlĽľMmNnŃńPpQqRrSsŠšTtVvWwXxZzŽž] { Y > I;
[BbĆćČčDdĐđFfGgHhKkLlĽľMmNnŃńPpQqRrSsŠšTtVvWwXxZzŽž] { y > i;

::Null;

DŽ } [Ii] > G;
Dž } [Ii] > G;
dž } [Ii] > g;

DŽ } [:Lu:] > GI;
DŽ > Gi;
Dž > Gi;
dž > gi;

DZ } [:Lu:] > D;
DZ > D;
Dz > D;
dz > d;

TS } [:Lu:] > X;
TS > X;
Ts > X;
ts > x;

IJ } [:Lu:] > AY;
IJ > Ay;
Ij > Ay;
ij > ay;

NG } [eäiy] > Ngh;
NG } [EÄIY] > NGH;
Ng } [EeÄäIiYy] > Ngh;
ng } [EeÄäIiYy] > ngh;

GH } [EeÄäIiYy] > GH;
Gh } [EeÄäIiYy] > Gh;
gH } [EeÄäIiYy] > gH;
gh } [EeÄäIiYy] > gh;
GH > G;
Gh > G;
gH > g;
gh > g;

G } [eäiy] > Gh;
G } [EÄIY] > GH;
g } [EeÄäIiYy] > gh;

KH } [:Lu:] > KH;
KH > Kh;
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

[ČĆ] } [:Lu:] > CH;
[ČĆ] > Ch;
[čć] > ch;

Ń } [^[:L:][:M:]] > N;
ń } [^[:L:][:M:]] > n;
Ń } [Hh] > N;
ń } [Hh] > n;
Ń } [:Lu:] > NH;
[:Lu:] { Ń > NH;
Ń > Nh;
ń > nh;

Ľ > L;
ľ > l;

Ž } [Ii] > G;
ž } [Ii] > g;

Ž } [:Lu:] > GI;
Ž > Gi;
ž > gi;

Š } [:Lu:] > S;
Š > S;
š > s;

Đ } [:Lu:] > D;
Đ > D;
đ > d;

D > Đ;
d > đ;

F } [:Lu:] > PH;
F > Ph;
f > ph;

X } [:Lu:] > KH;
X > Kh;
x > kh;

[ÜŸ] } [:Lu:] > UY;
[ÜŸ] > Uy;
[üÿ] > uy;

Y } [AaÄäEeIiÏïOoÖöUuÜüŸÿ] > Y;
y } [AaÄäEeIiÏïOoÖöUuÜüŸÿ] > y;
Y } [^[:L:][:M:]] > I;
y } [^[:L:][:M:]] > i;
Y } [BbĆćČčDdĐđFfGgHhKkLlĽľMmNnŃńPpQqRrSsŠšTtVvWwXxZzŽž] > I;
y } [BbĆćČčDdĐđFfGgHhKkLlĽľMmNnŃńPpQqRrSsŠšTtVvWwXxZzŽž] > i;

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
