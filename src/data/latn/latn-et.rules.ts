export const latnEtRules = `
::Null;

č } č > t;
Č } Č > T;
dž } dž > d;
DŽ } DŽ > D;

::Null;

ts } ts > ;
TS } TS > ;

IJ > EI;
iJ > eI;
Ij > Ei;
ij > ei;

T [hH] > T;
t [hH] > t;

[nN] { G } [hH] > G;
[nN] { g } [hH] > g;
G [hH] > G;
g [hH] > g;

[AÄEIÏOÖUÜŸÕaäeiïoöuüÿõ] { KH } [^[:L:][:M:]] > HH;
[AÄEIÏOÖUÜŸÕaäeiïoöuüÿõ] { KH } [AÄEIÏOÖUÜŸÕaäeiïoöuüÿõ] > HH;
[AÄEIÏOÖUÜŸÕaäeiïoöuüÿõ] { Kh } [^[:L:][:M:]] > Hh;
[AÄEIÏOÖUÜŸÕaäeiïoöuüÿõ] { Kh } [AÄEIÏOÖUÜŸÕaäeiïoöuüÿõ] > Hh;
[AÄEIÏOÖUÜŸÕaäeiïoöuüÿõ] { kH } [^[:L:][:M:]] > hH;
[AÄEIÏOÖUÜŸÕaäeiïoöuüÿõ] { kH } [AÄEIÏOÖUÜŸÕaäeiïoöuüÿõ] > hH;
[AÄEIÏOÖUÜŸÕaäeiïoöuüÿõ] { kh } [^[:L:][:M:]] > hh;
[AÄEIÏOÖUÜŸÕaäeiïoöuüÿõ] { kh } [AÄEIÏOÖUÜŸÕaäeiïoöuüÿõ] > hh;
K [hH] > H;
k [hH] > h;

::Null;

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
· > ;

[AÄEIÏOÖUÜŸÕaäeiïoöuüÿõ] { X } [^[:L:][:M:]] > HH;
[AÄEIÏOÖUÜŸÕaäeiïoöuüÿõ] { X } [AÄEIÏOÖUÜŸÕaäeiïoöuüÿõ] > HH;
[AÄEIÏOÖUÜŸÕaäeiïoöuüÿõ] { x } [^[:L:][:M:]] > hh;
[AÄEIÏOÖUÜŸÕaäeiïoöuüÿõ] { x } [AÄEIÏOÖUÜŸÕaäeiïoöuüÿõ] > hh;
X > H;
x > h;

[:Lu:] { [ČĆ] > TŠ;
[ČĆ] } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > TŠ;
[ČĆ] } [:Lu:] > TŠ;
[ČĆ] > Tš;
[čć] > tš;

[:Lu:] { Đ > DŽ;
Đ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > DŽ;
Đ } [:Lu:] > DŽ;
Đ > Dž;
đ > dž;

Ń } [^[:L:][:M:]] > N;
ń } [^[:L:][:M:]] > n;
Ń } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > N;
ń } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > n;
Ń } [Jj] > N;
ń } [Jj] > n;
Ń } [Yy] > N;
ń } [Yy] > n;
[:Lu:] { Ń > NJ;
Ń } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > NJ;
Ń } [:Lu:] > NJ;
Ń > Nj;
ń > nj;

Ľ } [^[:L:][:M:]] > L;
ľ } [^[:L:][:M:]] > l;
Ľ } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > L;
ľ } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > l;
Ľ } [Jj] > L;
ľ } [Jj] > l;
Ľ } [Yy] > L;
ľ } [Yy] > l;
[:Lu:] { Ľ > LJ;
Ľ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > LJ;
Ľ } [:Lu:] > LJ;
Ľ > Lj;
ľ > lj;

Ï > Õ;
ï > õ;

Ÿ > Ü;
ÿ > ü;

Q > K;
q > k;

W > V;
w > v;

Y > J;
y > j;

::Null;

[iI] { [jJ] } [aeiouõäöüAEIOUÕÄÖÜ] > ;
[iI] { [jJ] } [^[:L:][:M:]] > ;
[õÕ] { j } [^[:L:][:M:]] > i;
[õÕ] { J } [^[:L:][:M:]] > I;
[iI] { j } [bcdfghjklmnprstvwxzžšBCDFGHJKLMNPRSTVWXZŽŠ] > i;
[iI] { J } [bcdfghjklmnprstvwxzžšBCDFGHJKLMNPRSTVWXZŽŠ] > I;
[šŠžŽ] { [jJ] > ;
[bcdfghjklmnprstvwxzžšBCDFGHJKLMNPRSTVWXZŽŠ] { šš > š;
[bcdfghjklmnprstvwxzžšBCDFGHJKLMNPRSTVWXZŽŠ] { Šš > Š;
[bcdfghjklmnprstvwxzžšBCDFGHJKLMNPRSTVWXZŽŠ] { ŠŠ > Š;
[bcdfghjklmnprstvwxzžšBCDFGHJKLMNPRSTVWXZŽŠ] { žž > ž;
[bcdfghjklmnprstvwxzžšBCDFGHJKLMNPRSTVWXZŽŠ] { Žž > Ž;
[bcdfghjklmnprstvwxzžšBCDFGHJKLMNPRSTVWXZŽŠ] { ŽŽ > Ž;
[bcdfghjklmnprstvwxzžšBCDFGHJKLMNPRSTVWXZŽŠ] { ff > f;
[bcdfghjklmnprstvwxzžšBCDFGHJKLMNPRSTVWXZŽŠ] { Ff > F;
[bcdfghjklmnprstvwxzžšBCDFGHJKLMNPRSTVWXZŽŠ] { FF > F;
[šŠ] { [šŠ] } [bcdfghjklmnprstvwxzžšBCDFGHJKLMNPRSTVWXZŽŠ] > ;
[žŽ] { [žŽ] } [bcdfghjklmnprstvwxzžšBCDFGHJKLMNPRSTVWXZŽŠ] > ;
[fF] { [fF] } [bcdfghjklmnprstvwxzžšBCDFGHJKLMNPRSTVWXZŽŠ] > ;
`;
