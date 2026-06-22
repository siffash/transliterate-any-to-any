export const latnEtRules = `
::Null;

$vowel = [AEIOUÄÖÜÏŸaeiouäöüïÿ];

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

$vowel { X } [:^Letter:] > HH;
$vowel { x } [:^Letter:] > hh;
$vowel { X } $vowel > HH;
$vowel { x } $vowel > hh;
X > H;
x > h;

Y > J;
y > j;

Ï > Õ;
ï > õ;
`;
