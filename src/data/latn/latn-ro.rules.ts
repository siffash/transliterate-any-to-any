export const latnRoRules = `
::Null;

[:Lu:] { Ŋ > NG;
Ŋ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > NG;
Ŋ } [:Lu:] > NG;
Ŋ > Ng;
ŋ > ng;

[Čč] { [Čč] > ;
[Ǯǯ] { [Ǯǯ] > ;

IJ > EI;
iJ > eI;
Ij > Ei;
ij > ei;

Ẑ > Z;
ẑ > z;

Þ > T;
þ > t;

Ɣ > G;
ɣ > g;

Ḫ > H;
ḫ > h;

C > Ț;
c > ț;

::Null;

Q > C;
q > c;

W > V;
w > v;

X > H;
x > h;

[čćđžČĆĐŽǯǮ] [iI] { Y > I;
[čćđžČĆĐŽǯǮ] [iI] { y > i;
[iI] { [yY] > ;
Y } I > ;
Yi > I;
y } [iI] > ;

Y > I;
y > i;

Ä > Ă;
ä > ă;

Ö > O;
ö > o;

[ÜŸ] > U;
[üÿ] > u;

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
· > ;

::Null;

K } [EI] > CH;
K } [ei] > Ch;
k } [EI] > cH;
k } [ei] > ch;
K > C;
k > c;

G } [EI] > GH;
G } [ei] > Gh;
g } [EI] > gH;
g } [ei] > gh;

Ǯ } [EeIi] > G;
ǯ } [EeIi] > g;
Ǯ } A > GE;
Ǯ } a > Ge;
ǯ } [Aa] > ge;
[:Lu:] { Ǯ > GI;
Ǯ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > GI;
Ǯ } [:Lu:] > GI;
Ǯ > Gi;
ǯ > gi;

Đ } [EeIi] > G;
đ } [EeIi] > g;
Đ } A > GE;
Đ } a > Ge;
đ } [Aa] > ge;
[:Lu:] { Đ > GI;
Đ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > GI;
Đ } [:Lu:] > GI;
Đ > Gi;
đ > gi;

[ČĆ] } [EeIi] > C;
[čć] } [EeIi] > c;
[ČĆ] } A > CE;
[ČĆ] } a > Ce;
[čć] } [Aa] > ce;
[:Lu:] { [ČĆ] > CI;
[ČĆ] } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > CI;
[ČĆ] } [:Lu:] > CI;
[ČĆ] > Ci;
[čć] > ci;

Š > Ș;
š > ș;

Ž > J;
ž > j;

Ľ } [^[:L:][:M:]] > L;
ľ } [^[:L:][:M:]] > l;
Ľ } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁǯǮ] > L;
ľ } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁǯǮ] > l;
Ľ } [Ii] > L;
ľ } [Ii] > l;
[:Lu:] { Ľ > LI;
Ľ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > LI;
Ľ } [:Lu:] > LI;
Ľ > Li;
ľ > li;

Ń } [^[:L:][:M:]] > N;
ń } [^[:L:][:M:]] > n;
Ń } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁǯǮ] > N;
ń } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁǯǮ] > n;
Ń } [Ii] > N;
ń } [Ii] > n;
[:Lu:] { Ń > NI;
Ń } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > NI;
Ń } [:Lu:] > NI;
Ń > Ni;
ń > ni;



::Null;

[^[:L:][:M:]] { Ï > Î;
Ï } [^[:L:][:M:]] > Î;
[^[:L:][:M:]] { ï > î;
ï } [^[:L:][:M:]] > î;
Ï > Â;
ï > â;

[^[:L:][:M:]] { â > î;
[^[:L:][:M:]] { Â > Î;
â } [^[:L:][:M:]] > î;
Â } [^[:L:][:M:]] > Î;
[:L:] { î } [:L:] > â;
[:L:] { Î } [:L:] > Â;

[iI] [iI] { [iI]+ > ;
[uU] [uU] { [uU]+ > ;
`;
