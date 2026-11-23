export const latnRoRules = `
::Null;

[:Lu:] { Ŋ > NG;
Ŋ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > NG;
Ŋ } [:Lu:] > NG;
Ŋ > Ng;
ŋ > ng;

[Čč] { [Čč] > ;
[Ćć] { [Ćć] > ;
[Đđ] { [Đđ] > ;
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

G } [EI] > GH;
G } [ei] > Gh;
g } [EI] > gH;
g } [ei] > gh;

[ǮĐ] } [EeIi] > G;
[ǯđ] } [EeIi] > g;
[ǮĐ] } A > GE;
[ǮĐ] } a > Ge;
[ǯđ] } [Aa] > ge;
[:Lu:] { [ǮĐ] > GI;
[ǮĐ] } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > GI;
[ǮĐ] } [:Lu:] > GI;
[ǮĐ] > Gi;
[ǯđ] > gi;

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
Ľ } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁǯǮIi] > L;
ľ } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁǯǮIi] > l;
[:Lu:] { Ľ > LI;
Ľ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > LI;
Ľ } [:Lu:] > LI;
Ľ > Li;
ľ > li;

Ń } [^[:L:][:M:]] > N;
ń } [^[:L:][:M:]] > n;
Ń } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁǯǮIi] > N;
ń } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁǯǮIi] > n;
[:Lu:] { Ń > NI;
Ń } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > NI;
Ń } [:Lu:] > NI;
Ń > Ni;
ń > ni;

::Null;

Ï > Î;
ï > î;

[^[:L:][:M:]] { â > î;
[^[:L:][:M:]] { Â > Î;
â } [^[:L:][:M:]] > î;
Â } [^[:L:][:M:]] > Î;
[:L:] { î } [:L:] > â;
[:L:] { Î } [:L:] > Â;

[iI] [iI] { [iI]+ > ;
[uU] [uU] { [uU]+ > ;
`;
