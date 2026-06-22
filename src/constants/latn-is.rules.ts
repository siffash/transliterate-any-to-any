export const latnIsRules = `
::Null;

$boundary = [:^Letter:];
$upper = [ABDEFGHIKLMNOPQRSTUVWXYZÄÏÖÜŸĆČĐĽŃŠŽ];

$upper { Ć } $boundary > TSJ;
Ć } $upper > TSJ;
Ć > Tsj;
ć > tsj;

$upper { Č } $boundary > TSJ;
Č } $upper > TSJ;
Č > Tsj;
č > tsj;

$upper { Đ } $boundary > DJ;
Đ } $upper > DJ;
Đ > Dj;
đ > dj;

$upper { Ľ } $boundary > LJ;
Ľ } $upper > LJ;
Ľ > Lj;
ľ > lj;

$upper { Ń } $boundary > NJ;
Ń } $upper > NJ;
Ń > Nj;
ń > nj;

$upper { Š } $boundary > SJ;
Š } $upper > SJ;
Š > Sj;
š > sj;

$upper { Ž } $boundary > SJ;
Ž } $upper > SJ;
Ž > Sj;
ž > sj;

Ä > Æ;
ä > æ;
Ï > Í;
ï > í;
Ü > Y;
ü > y;
Ÿ > Ý;
ÿ > ý;

Q > K;
q > k;
W > V;
w > v;
X > K;
x > k;
Y > J;
y > j;
Z > S;
z > s;
`;
