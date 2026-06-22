export const latnIsRules = `
::Null;

$upper = [ABDEFGHIKLMNOPQRSTUVWXYZÄÏÖÜŸĆČĐĽŃŠŽ];

$upper { Ć } [:^Letter:] > TSJ;
Ć } $upper > TSJ;
Ć > Tsj;
ć > tsj;

$upper { Č } [:^Letter:] > TSJ;
Č } $upper > TSJ;
Č > Tsj;
č > tsj;

$upper { Đ } [:^Letter:] > DJ;
Đ } $upper > DJ;
Đ > Dj;
đ > dj;

$upper { Ľ } [:^Letter:] > LJ;
Ľ } $upper > LJ;
Ľ > Lj;
ľ > lj;

$upper { Ń } [:^Letter:] > NJ;
Ń } $upper > NJ;
Ń > Nj;
ń > nj;

$upper { Š } [:^Letter:] > SJ;
Š } $upper > SJ;
Š > Sj;
š > sj;

$upper { Ž } [:^Letter:] > SJ;
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
