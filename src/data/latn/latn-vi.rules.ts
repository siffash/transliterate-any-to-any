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
Ǯh } [Ii] > G;
ǯ [Hh] } [Ii] > g;
Ǯh > Gi;
ǯ [Hh] > gi;

[ǮŽ] } [Ii] > G;
[ǯž] } [Ii] > g;

[ẑđz] > d;
D [Zz] > D;
d [Zz] > d;

[CS] > X;
[cs] > x;

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
Ɣ } [eäiy] > Gh;
ɣ } [EeÄäIiYy] > gh;
Ɣ > G;
ɣ > g;

G } [EÄIY] > GH;
G } [eäiy] > Gh;
g } [EÄIY] > gH;
g } [eäiy] > gh;

[:Lu:] { [ḪX] > KH;
[ḪX] } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KH;
[ḪX] } [:Lu:] > KH;
[ḪX] > Kh;
[ḫx] > kh;
KH > KH;
kH > kH;
Kh > Kh;
kh > kh;

[KQ] } [Ww] > Q;
[kq] } [Ww] > q;

[QGqg] { W > U;
[QGqg] { w > u;

[QK] } [EeÄäIiYy] > K;
[qk] } [EeÄäIiYy] > k;
[QK] > C;
[qk] > c;

[:Lu:] { [ČĆ] > CH;
[ČĆ] } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > CH;
[ČĆ] } [:Lu:] > CH;
[ČĆ] > Ch;
[čć] > ch;

Ń } [^[:L:][:M:]] > N;
ń } [^[:L:][:M:]] > n;
Ń } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁǯǮẑẐɣƔḫḪ] > N;
ń } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁǯǮẑẐɣƔḫḪ] > n;
Ń } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > NH;
Ń } [:Lu:] > NH;
[:Lu:] { Ń > NH;
Ń > Nh;
ń > nh;

Ľ > L;
ľ > l;

[:Lu:] { Š > S;
Š } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > S;
Š } [:Lu:] > S;
Š > S;
š > s;

[:Lu:] { Đ > D;
Đ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > D;
Đ } [:Lu:] > D;
[ẐZĐ] > D;

D > Đ;
d > đ;

[:Lu:] { F > PH;
F } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > PH;
F } [:Lu:] > PH;
F > Ph;
f > ph;

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

[:Lu:] { [ǮŽY] > GI;
[ǮŽY] } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > GI;
[ǮŽY] } [:Lu:] > GI;
[ǮŽY] > Gi;
[ǯžy] > gi;

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
