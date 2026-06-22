export const latnEnRules = `
::Null;

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

[:Upper:] { Č > CH;
Č } [:Upper:] > CH;
Č > Ch;
č > ch;

[:Upper:] { Đ > DJ;
Đ } [:Upper:] > DJ;
Đ > Dj;
đ > dj;

[:Upper:] { Š > SH;
Š } [:Upper:] > SH;
Š > Sh;
š > sh;

[:Upper:] { Ž > ZH;
Ž } [:Upper:] > ZH;
Ž > Zh;
ž > zh;

· > ;
`;
