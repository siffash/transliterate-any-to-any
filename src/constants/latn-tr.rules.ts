export const latnTrRules = `
::Null;

$lower = [:LowercaseLetter:];

DŽ > C;
Dž > C;
dž > c;

Ń } $lower > Ny;
Ń > NY;
ń > ny;

Ľ } $lower > Ly;
Ľ > LY;
ľ > ly;

Š > Ş;
š > ş;
Č > Ç;
č > ç;
Ž > J;
ž > j;
Ć > Ç;
ć > ç;
Đ > C;
đ > c;
X > H;
x > h;

Ä > E;
ä > e;
Ï > I;
ï > ı;
Ÿ > Y;
ÿ > y;

I > İ;
W > V;
w > v;
Q > K;
q > k;
`;
