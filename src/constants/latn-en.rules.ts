export const latnEnRules = `
::Null;

$upper = [:Upper:];

Ä > A;
ä > a;
Ï > I;
ï > i;
Ö > O;
ö > o;
Ü > U;
ü > u;
Ÿ > Y;
ÿ > y;
Ć > C;
ć > c;
Ľ > L;
ľ > l;
Ń > N;
ń > n;

$upper { Č > CH;
Č } $upper > CH;
Č > Ch;
č > ch;

$upper { Đ > DJ;
Đ } $upper > DJ;
Đ > Dj;
đ > dj;

$upper { Š > SH;
Š } $upper > SH;
Š > Sh;
š > sh;

$upper { Ž > ZH;
Ž } $upper > ZH;
Ž > Zh;
ž > zh;

· > ;
`;
