export const latnPtRules = `
::Null;

$boundary = [:^Letter:];
$upper = [ABDEFGHIKLMNOPQRSTUVWXYZÄÏÖÜŸĆČĐĽŃŠŽ];
$lower = [abdefghiklmnopqrstuvwxyzäïöüÿćčđľńšž];
$vowel = [AEIOUYÄÏÖÜŸaeiouyäïöüÿ];
$front_upper = [EIYÄÏÖÜŸ];
$front_lower = [eiyäïöüÿ];

$upper { Ć } $boundary > TCH;
Ć } $upper > TCH;
Ć > Tch;
ć > tch;

$upper { Č } $boundary > TCH;
Č } $upper > TCH;
Č > Tch;
č > tch;

$upper { Đ } $boundary > DJ;
Đ } $upper > DJ;
Đ > Dj;
đ > dj;

$upper { Ľ } $boundary > LH;
Ľ } $upper > LH;
Ľ > Lh;
ľ > lh;

$upper { Ń } $boundary > NH;
Ń } $upper > NH;
Ń > Nh;
ń > nh;

$upper { Š } $boundary > CH;
Š } $upper > CH;
Š > Ch;
š > ch;

$upper { X } $boundary > KH;
X } $upper > KH;
X > Kh;
x > kh;

Ž > J;
ž > j;

G } $front_upper > GU;
G } $front_lower > Gu;
g } $front_upper > gu;
g } $front_lower > gu;

K } $front_upper > QU;
K } $front_lower > Qu;
k } $front_upper > qu;
k } $front_lower > qu;
K > C;
k > c;

$vowel { S } $vowel > SS;
$vowel { s } $vowel > ss;

W > V;
w > v;

Y > I;
y > i;

Ä > A;
ä > a;

Ï > I;
ï > i;

Ö > O;
ö > o;

Ü > U;
ü > u;

Ÿ > I;
ÿ > i;
`;
