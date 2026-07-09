export const latnEtRules = `
::Null;

['·] > ;

IJ > EI;
Ij > Ei;
ij > ei;

TH > T;
Th > T;
th > t;

DH > D;
Dh > D;
dh > d;

GH > G;
Gh > G;
gh > g;

[AÄEIÏOÖUÜŸaäeiïoöuüÿ] { KH } [:^Letter:] > HH;
[AÄEIÏOÖUÜŸaäeiïoöuüÿ] { KH } [AÄEIÏOÖUÜŸaäeiïoöuüÿ] > HH;
[AÄEIÏOÖUÜŸaäeiïoöuüÿ] { Kh } [:^Letter:] > Hh;
[AÄEIÏOÖUÜŸaäeiïoöuüÿ] { Kh } [AÄEIÏOÖUÜŸaäeiïoöuüÿ] > Hh;
[AÄEIÏOÖUÜŸaäeiïoöuüÿ] { kh } [:^Letter:] > hh;
[AÄEIÏOÖUÜŸaäeiïoöuüÿ] { kh } [AÄEIÏOÖUÜŸaäeiïoöuüÿ] > hh;
KH > H;
Kh > H;
kh > h;

[AÄEIÏOÖUÜŸaäeiïoöuüÿ] { X } [:^Letter:] > HH;
[AÄEIÏOÖUÜŸaäeiïoöuüÿ] { X } [AÄEIÏOÖUÜŸaäeiïoöuüÿ] > HH;
[AÄEIÏOÖUÜŸaäeiïoöuüÿ] { x } [:^Letter:] > hh;
[AÄEIÏOÖUÜŸaäeiïoöuüÿ] { x } [AÄEIÏOÖUÜŸaäeiïoöuüÿ] > hh;
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
[iI] { j } [bcdfghjklmnprstvwxzžBCDFGHJKLMNPRSTVWXZŽ] > i;
[iI] { J } [bcdfghjklmnprstvwxzžBCDFGHJKLMNPRSTVWXZŽ] > I;
[šŠžŽ] { [jJ] > ;
[bcdfghjklmnprstvwxzžBCDFGHJKLMNPRSTVWXZŽ] { šš > š;
[bcdfghjklmnprstvwxzžBCDFGHJKLMNPRSTVWXZŽ] { Šš > Š;
[bcdfghjklmnprstvwxzžBCDFGHJKLMNPRSTVWXZŽ] { ŠŠ > Š;
[bcdfghjklmnprstvwxzžBCDFGHJKLMNPRSTVWXZŽ] { žž > ž;
[bcdfghjklmnprstvwxzžBCDFGHJKLMNPRSTVWXZŽ] { Žž > Ž;
[bcdfghjklmnprstvwxzžBCDFGHJKLMNPRSTVWXZŽ] { ŽŽ > Ž;
[bcdfghjklmnprstvwxzžBCDFGHJKLMNPRSTVWXZŽ] { ff > f;
[bcdfghjklmnprstvwxzžBCDFGHJKLMNPRSTVWXZŽ] { Ff > F;
[bcdfghjklmnprstvwxzžBCDFGHJKLMNPRSTVWXZŽ] { FF > F;
[šŠ] { [šŠ] } [bcdfghjklmnprstvwxzžBCDFGHJKLMNPRSTVWXZŽ] > ;
[žŽ] { [žŽ] } [bcdfghjklmnprstvwxzžBCDFGHJKLMNPRSTVWXZŽ] > ;
[fF] { [fF] } [bcdfghjklmnprstvwxzžBCDFGHJKLMNPRSTVWXZŽ] > ;
`;
