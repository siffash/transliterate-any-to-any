export const latnDaRules = `
::Null;

$boundary = [:^Letter:];

Č } [:Lower:] > Tj;
Č } $boundary > Tj;
Č > TJ;
č > tj;

Đ } [:Lower:] > Dj;
Đ } $boundary > Dj;
Đ > DJ;
đ > dj;

Ľ } [:Lower:] > Lj;
Ľ } $boundary > Lj;
Ľ > LJ;
ľ > lj;

Ń } [:Lower:] > Nj;
Ń } $boundary > Nj;
Ń > NJ;
ń > nj;

Š } [:Lower:] > Sj;
Š } $boundary > Sj;
Š > SJ;
š > sj;

Ž } [:Lower:] > Zj;
Ž } $boundary > Zj;
Ž > ZJ;
ž > zj;

X } [:Lower:] > Kh;
X } $boundary > Kh;
X > KH;
x > kh;

Ć > C;
ć > c;

Ä > Æ;
ä > æ;

Ï > I;
ï > i;

Ö > Ø;
ö > ø;

Ü > Y;
ü > y;

Ÿ > Y;
ÿ > y;

Y > J;
y > j;

· > ;
`;
