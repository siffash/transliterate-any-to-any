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

NG } [eäiÿy] > Ngh;
NG } [EÄIŸY] > NGH;
Ng } [EeÄäIiŸÿYy] > Ngh;
ng } [EeÄäIiŸÿYy] > ngh;

GH } [EeÄäIiŸÿYy] > GH;
Gh } [EeÄäIiŸÿYy] > Gh;
gH } [EeÄäIiŸÿYy] > gH;
gh } [EeÄäIiŸÿYy] > gh;
GH > G;
Gh > G;
gH > g;
gh > g;

G } [eäiÿy] > Gh;
G } [EÄIŸY] > GH;
g } [EeÄäIiŸÿYy] > gh;

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
Q } [EeÄäIiŸÿYy] > K;
q } [EeÄäIiŸÿYy] > k;
Q > C;
q > c;

K } [EeÄäIiŸÿYy] > K;
k } [EeÄäIiŸÿYy] > k;

K > C;
k > c;

Č } [:Lu:] > TR;
Č > Tr;
č > tr;

Ć } [:Lu:] > CH;
Ć > Ch;
ć > ch;

Ń } [:Lu:] > NH;
Ń > Nh;
ń > nh;

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

Ü } [:Lu:] > UY;
Ü > Uy;
ü > uy;

Y } [AaÄäEeIiÏïOoÖöUuÜüŸÿ] > Y;
y } [AaÄäEeIiÏïOoÖöUuÜüŸÿ] > y;
Y } [:^Letter:] > I;
y } [:^Letter:] > i;
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

Ÿ > Y;
ÿ > y;

Ľ > L;
ľ > l;

['·] > ;
`;
