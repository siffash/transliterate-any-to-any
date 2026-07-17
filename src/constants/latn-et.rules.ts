export const latnEtRules = `
::Null;

['·] > ;

IJ > EI;
Ij > Ei;
ij > ei;

TH > T;
Th > T;
th > t;

GH > G;
Gh > G;
gh > g;

[AÄEIÏOÖUÜŸÕõaäeiïoöuüÿ] { KH } [:^Letter:] > HH;
[AÄEIÏOÖUÜŸÕõaäeiïoöuüÿ] { KH } [AÄEIÏOÖUÜŸÕõaäeiïoöuüÿ] > HH;
[AÄEIÏOÖUÜŸÕõaäeiïoöuüÿ] { Kh } [:^Letter:] > Hh;
[AÄEIÏOÖUÜŸÕõaäeiïoöuüÿ] { Kh } [AÄEIÏOÖUÜŸÕõaäeiïoöuüÿ] > Hh;
[AÄEIÏOÖUÜŸÕõaäeiïoöuüÿ] { kh } [:^Letter:] > hh;
[AÄEIÏOÖUÜŸÕõaäeiïoöuüÿ] { kh } [AÄEIÏOÖUÜŸÕõaäeiïoöuüÿ] > hh;
KH > H;
Kh > H;
kh > h;

[AÄEIÏOÖUÜŸÕõaäeiïoöuüÿ] { X } [:^Letter:] > HH;
[AÄEIÏOÖUÜŸÕõaäeiïoöuüÿ] { X } [AÄEIÏOÖUÜŸÕõaäeiïoöuüÿ] > HH;
[AÄEIÏOÖUÜŸÕõaäeiïoöuüÿ] { x } [:^Letter:] > hh;
[AÄEIÏOÖUÜŸÕõaäeiïoöuüÿ] { x } [AÄEIÏOÖUÜŸÕõaäeiïoöuüÿ] > hh;
X > H;
x > h;

[:Upper:] { Č > TŠ;
Č } [:Upper:] > TŠ;
Č > Tš;
č > tš;

[:Upper:] { Ć > TŠ;
Ć } [:Upper:] > TŠ;
Ć > Tš;
ć > tš;

[:Upper:] { Đ > DŽ;
Đ } [:Upper:] > DŽ;
Đ > Dž;
đ > dž;

[:Upper:] { Ń > NJ;
Ń } [:Upper:] > NJ;
Ń > Nj;
ń > nj;

[:Upper:] { Ľ > LJ;
Ľ } [:Upper:] > LJ;
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
[iI] { [jJ] } [:^Letter:] > ;
[õÕ] { j } [:^Letter:] > i;
[õÕ] { J } [:^Letter:] > I;
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
