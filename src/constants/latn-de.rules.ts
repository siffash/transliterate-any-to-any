export const latnDeRules = `
::Null;

$boundary = [:^Letter:];
$vowel = [aeiouäöüïÿAEIOUÄÖÜÏŸ];

dž > dsch;
Dž > Dsch;
DŽ > DSCH;

ts > z;
Ts > Z;
TS > Z;

$boundary { š } [pPtT] > s;
$boundary { Š } [pPtT] > S;

$vowel { s } $vowel > ss;
$vowel { S } [aeiouäöüïÿ] > Ss;
$vowel { S } [AEIOUÄÖÜÏŸ] > SS;

đ > dsch;
Đ } [:Lower:] > Dsch;
Đ > DSCH;

č > tsch;
Č } [:Lower:] > Tsch;
Č > TSCH;

ć > tsch;
Ć } [:Lower:] > Tsch;
Ć > TSCH;

š > sch;
Š } [:Lower:] > Sch;
Š > SCH;

ž > sch;
Ž } [:Lower:] > Sch;
Ž > SCH;

x > ch;
X } [:Lower:] > Ch;
X > CH;

ń > nj;
Ń } [:Lower:] > Nj;
Ń > NJ;

ľ > lj;
Ľ } [:Lower:] > Lj;
Ľ > LJ;

v > w;
V > W;

y > j;
Y > J;

z > s;
Z > S;

ï > i;
Ï > I;

ÿ > i;
Ÿ > I;
`;
