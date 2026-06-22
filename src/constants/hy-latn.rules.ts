export const hyLatnRules = `
::NFD;

$boundary = [:^Letter:];
$upper = [:Upper:];

ՈՒ > U;
Ու > U;
ու > u;

$boundary { Ե } $upper > YE;
$boundary { Ե } > Ye;
$boundary { ե } > ye;

$boundary { Ո } $upper > VO;
$boundary { Ո } > Vo;
$boundary { ո } > vo;

$boundary { և } > yev;
և > ev;

::Null;

$upper { Ծ } > TS;
Ծ } $upper > TS;
Ծ > Ts;
ծ > ts;

$upper { Ձ } > DZ;
Ձ } $upper > DZ;
Ձ > Dz;
ձ > dz;

$upper { Ղ } > GH;
Ղ } $upper > GH;
Ղ > Gh;
ղ > gh;

$upper { Ց } > TS;
Ց } $upper > TS;
Ց > Ts;
ց > ts;

$upper { Ջ } > DŽ;
Ջ } $upper > DŽ;
Ջ > Dž;
ջ > dž;

Ժ > Ž;
ժ > ž;

Խ > X;
խ > x;

Ճ > Č;
ճ > č;

Շ > Š;
շ > š;

Չ > Č;
չ > č;

Ա > A;
ա > a;
Բ > B;
բ > b;
Գ > G;
գ > g;
Դ > D;
դ > d;
Ե > E;
ե > e;
Զ > Z;
զ > z;
Է > E;
է > e;
Ը > Ï;
ը > ï;
Թ > T;
թ > t;
Ի > I;
ի > i;
Լ > L;
լ > l;
Կ > K;
կ > k;
Հ > H;
հ > h;
Մ > M;
մ > m;
Յ > Y;
յ > y;
Ն > N;
ն > n;
Ո > O;
ո > o;
Պ > P;
պ > p;
Ռ > R;
ռ > r;
Ս > S;
ս > s;
Վ > V;
վ > v;
Տ > T;
տ > t;
Ր > R;
ր > r;
Ւ > V;
ւ > v;
Փ > P;
փ > p;
Ք > K;
ք > k;
Օ > O;
օ > o;
Ֆ > F;
ֆ > f;

::NFC;
`;
