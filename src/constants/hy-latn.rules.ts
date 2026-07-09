export const hyLatnRules = `
::NFD;

ՈՒ > U;
Ու > U;
ու > u;

[:^Letter:] { Ե } [:Upper:] > YE;
[:^Letter:] { Ե } > Ye;
[:^Letter:] { ե } > ye;

[:^Letter:] { Ո } [:Upper:] > VO;
[:^Letter:] { Ո } > Vo;
[:^Letter:] { ո } > vo;

[:^Letter:] { և } > yev;
և > ev;

::Null;

[:Upper:] { Ծ } > TS;
Ծ } [:Upper:] > TS;
Ծ > Ts;
ծ > ts;

[:Upper:] { Ձ } > DZ;
Ձ } [:Upper:] > DZ;
Ձ > Dz;
ձ > dz;

[:Upper:] { Ղ } > GH;
Ղ } [:Upper:] > GH;
Ղ > Gh;
ղ > gh;

[:Upper:] { Ց } > TS;
Ց } [:Upper:] > TS;
Ց > Ts;
ց > ts;

[:Upper:] { Ջ } > DŽ;
Ջ } [:Upper:] > DŽ;
Ջ > Dž;
ջ > dž;

[:Upper:] { Թ } > TH;
Թ } [:Upper:] > TH;
Թ > Th;
թ > th;

Ժ > Ž;
ժ > ž;

Խ > X;
խ > x;

Ճ > Ć;
ճ > ć;

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
Ւ > W;
ւ > w;
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
