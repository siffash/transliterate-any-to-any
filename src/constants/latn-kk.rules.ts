export const latnKkRules = `
::Null;

$lower = [a-zäöüïščžćđńľÿ];

Č } $lower > Tş;
Č > TŞ;
č > tş;

Ć } $lower > Tş;
Ć > TŞ;
ć > tş;

Đ } $lower > Dj;
Đ > DJ;
đ > dj;

Š > Ş;
š > ş;
Ž > J;
ž > j;
X > H;
x > h;

Ń > N;
ń > n;
Ľ > L;
ľ > l;

Ï > I;
ï > ı;
I > İ;

Ÿ > Y;
ÿ > y;
`;
