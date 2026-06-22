export const latnEtRules = `
::Null;

$boundary = [:^Letter:];
$upper = [:Upper:];
$lower = [:Lower:];
$vowel = [AEIOUÄÖÜÏŸaeiouäöüïÿ];

$upper { Č > TŠ;
Č } $upper > TŠ;
Č > Tš;
č > tš;

$upper { Ć > TŠ;
Ć } $upper > TŠ;
Ć > Tš;
ć > tš;

$upper { Đ > DŽ;
Đ } $upper > DŽ;
Đ > Dž;
đ > dž;

$upper { Ń > NJ;
Ń } $upper > NJ;
Ń > Nj;
ń > nj;

$upper { Ľ > LJ;
Ľ } $upper > LJ;
Ľ > Lj;
ľ > lj;

$vowel { X } $boundary > HH;
$vowel { x } $boundary > hh;
$vowel { X } $vowel > HH;
$vowel { x } $vowel > hh;
X > H;
x > h;

Y > J;
y > j;

Ï > Õ;
ï > õ;
`;
