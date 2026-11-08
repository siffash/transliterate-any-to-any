export const latnViRules = `
::Null;

[Ŋŋ] { [hH] > ;
[gG] { [hH] } [^EeÄäIiYy] > ;

::Null;

[:Lu:] { Ŋ > NG;
Ŋ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > NG;
Ŋ } [:Lu:] > NG;
Ŋ > Ng;
ŋ > ng;

[:Lu:] { Þ > TH;
Þ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > TH;
Þ } [:Lu:] > TH;
Þ > Th;
þ > th;

::Null;

[Ff] { [Ff] > ;
D [Dd]* ǯ > Ǯ;
[Dd]+ Ǯ > Ǯ;
d [Dd]* ǯ > ǯ;
D [Dd]* ẑ > Ẑ;
[Dd]+ Ẑ > Ẑ;
d [Dd]* ẑ > ẑ;
[Nn] { G [Gg]* } [ɣƔ] > G;
[Nn] { g [Gg]* } [ɣƔ] > g;
G [Gg]* ɣ > Ɣ;
[Gg]+ Ɣ > Ɣ;
g [Gg]* ɣ > ɣ;
[Dd] { [Dd] > ;
[Čč] { [Čč] > ;
[Ćć] { [Ćć] > ;
[Đđ] { [Đđ] > ;
[ŽžǯǮ] { [Žž] > ;
[Xx] { [Xx] > ;
[Bb] { [Bb] > ;
[Nn] [Gg] { G > G;
[Nn] [Gg] { g > g;
[Gg] { [Gg] > ;
[LlĽľ] { [LlĽľ] > ;
[Rr] { [Rr] > ;
[SscC] { [Ss] > ;
[Šš] { [Šš] > ;
[Vv] { [Vv] > ;
[Ww] { [Ww] > ;
[ZzẑẐ] { [Zz] > ;
[Ǯǯ] { [Ǯǯ] > ;

[BbĆćČčDdĐđFfGgHhKkLlĽľMmNnŃńPpQqRrSsŠšTtVvWwXxZzŽžǯǮẑẐcCɣƔḫḪ] { Y > I;
[BbĆćČčDdĐđFfGgHhKkLlĽľMmNnŃńPpQqRrSsŠšTtVvWwXxZzŽžǯǮẑẐcCɣƔḫḪ] { y > i;

::Null;

ǮH > GI;
Ǯ [Hh] } [Ii] > G;
ǯ [Hh] } [Ii] > g;
Ǯ [Hh] > Gi;
ǯ [Hh] > gi;

Ǯ } [Ii] > G;
ǯ } [Ii] > g;

[:Lu:] { Ǯ > GI;
Ǯ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > GI;
Ǯ } [:Lu:] > GI;
Ǯ > Gi;
ǯ > gi;

Ẑ > D;
ẑ > d;
D [Zz] > D;
d [Zz] > d;

C > X;
c > x;

IJ > AY;
iJ > aY;
Ij > Ay;
ij > ay;

NG } [eäiy] > NGh;
NG } [EÄIY] > NGH;
Ng } [EeÄäIiYy] > Ngh;
ng } [EeÄäIiYy] > ngh;

[:Lu:] { Ɣ } [EeÄäIiYy] > GH;
Ɣ } [EIYÄ] > GH;
Ɣ } [EeÄäIiYy] > Gh;
ɣ } [EeÄäIiYy] > gh;
Ɣ > G;
ɣ > g;

G } [EÄIY] > GH;
G } [eäiy] > Gh;
g } [EÄIY] > gH;
g } [eäiy] > gh;

[:Lu:] { Ḫ > KH;
Ḫ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KH;
Ḫ } [:Lu:] > KH;
Ḫ > Kh;
ḫ > kh;
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
Ń } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁǯǮẑẐɣƔḫḪ] > N;
ń } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁǯǮẑẐɣƔḫḪ] > n;
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
Y } [BbĆćČčDdĐđFfGgHhKkLlĽľMmNnŃńPpQqRrSsŠšTtVvWwXxZzŽžǯǮẑẐcCɣƔḫḪ] > I;
y } [BbĆćČčDdĐđFfGgHhKkLlĽľMmNnŃńPpQqRrSsŠšTtVvWwXxZzŽžǯǮẑẐcCɣƔḫḪ] > i;

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

::Null;

[Xx] { [Xx] > ;
`;
