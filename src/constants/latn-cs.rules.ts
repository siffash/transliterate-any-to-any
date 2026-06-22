export const latnCsRules = `
::Null;

TS > C;
Ts > C;
ts > c;

ĆE > TĚ;
Će > Tě;
će > tě;

ĐE > DĚ;
Đe > Dě;
đe > dě;

ŃE > NĚ;
Ńe > Ně;
ńe > ně;

[:Upper:] { X > CH;
X } [:Upper:] > CH;
X > Ch;
x > ch;

[:Upper:] { Q > KV;
Q } [:Upper:] > KV;
Q > Kv;
q > kv;

W > V;
w > v;

Ć } [iI] > T;
ć } [iI] > t;

Đ } [iI] > D;
đ } [iI] > d;

Ń } [iI] > N;
ń } [iI] > n;

Ć > Ť;
ć > ť;

Đ > Ď;
đ > ď;

Ń > Ň;
ń > ň;

Y > J;
y > j;

Ï > Y;
ï > y;

Ÿ > Y;
ÿ > y;

Ä > E;
ä > e;

Ö > O;
ö > o;

Ü > U;
ü > u;

Ľ > L;
ľ > l;
`;
