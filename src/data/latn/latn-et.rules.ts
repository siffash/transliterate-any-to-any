export const latnEtRules = `
::Null;

IJ > EI;
Ij > Ei;
ij > ei;

TH > T;
Th > T;
th > t;

GH > G;
Gh > G;
gh > g;

[AÄEIÏOÖUÜŸÕõaäeiïoöuüÿ] { KH } [^[:L:][:M:]] > HH;
[AÄEIÏOÖUÜŸÕõaäeiïoöuüÿ] { KH } [AÄEIÏOÖUÜŸÕõaäeiïoöuüÿ] > HH;
[AÄEIÏOÖUÜŸÕõaäeiïoöuüÿ] { Kh } [^[:L:][:M:]] > Hh;
[AÄEIÏOÖUÜŸÕõaäeiïoöuüÿ] { Kh } [AÄEIÏOÖUÜŸÕõaäeiïoöuüÿ] > Hh;
[AÄEIÏOÖUÜŸÕõaäeiïoöuüÿ] { kh } [^[:L:][:M:]] > hh;
[AÄEIÏOÖUÜŸÕõaäeiïoöuüÿ] { kh } [AÄEIÏOÖUÜŸÕõaäeiïoöuüÿ] > hh;
KH > H;
Kh > H;
kh > h;

::Null;

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
· > ;

[AÄEIÏOÖUÜŸÕõaäeiïoöuüÿ] { X } [^[:L:][:M:]] > HH;
[AÄEIÏOÖUÜŸÕõaäeiïoöuüÿ] { X } [AÄEIÏOÖUÜŸÕõaäeiïoöuüÿ] > HH;
[AÄEIÏOÖUÜŸÕõaäeiïoöuüÿ] { x } [^[:L:][:M:]] > hh;
[AÄEIÏOÖUÜŸÕõaäeiïoöuüÿ] { x } [AÄEIÏOÖUÜŸÕõaäeiïoöuüÿ] > hh;
X > H;
x > h;

[:Lu:] { [ČĆ] > TŠ;
[ČĆ] } [:Lu:] > TŠ;
[ČĆ] > Tš;
[čć] > tš;

[:Lu:] { Đ > DŽ;
Đ } [:Lu:] > DŽ;
Đ > Dž;
đ > dž;

[:Lu:] { Ń > NJ;
Ń } [:Lu:] > NJ;
Ń > Nj;
ń > nj;

[:Lu:] { Ľ > LJ;
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
