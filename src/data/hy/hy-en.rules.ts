export const hyEnRules = `
::NFD;

Ո [Ււ] > U;
ո [Ււ] > u;

[^[:L:][:M:]] { Ե } [:Lu:] > YE;
[^[:L:][:M:]] { Ե > Ye;
[^[:L:][:M:]] { ե > ye;

[^[:L:][:M:]] { Ո } [:Lu:] > VO;
[^[:L:][:M:]] { Ո > Vo;
[^[:L:][:M:]] { ո > vo;

[^[:L:][:M:]] { և > yev;
և > ev;

::Null;

[:Lu:] { Ժ > ZH;
Ժ } [:Lu:] > ZH;
Ժ > Zh;
ժ > zh;

[:Lu:] { Խ > KH;
Խ } [:Lu:] > KH;
Խ > Kh;
խ > kh;

[:Lu:] { Ծ > TS;
Ծ } [:Lu:] > TS;
Ծ > Ts;
ծ > ts;

[:Lu:] { Ձ > DZ;
Ձ } [:Lu:] > DZ;
Ձ > Dz;
ձ > dz;

[:Lu:] { Ղ > GH;
Ղ } [:Lu:] > GH;
Ղ > Gh;
ղ > gh;

[:Lu:] { Ճ > CH;
Ճ } [:Lu:] > CH;
Ճ > Ch;
ճ > ch;

[:Lu:] { Շ > SH;
Շ } [:Lu:] > SH;
Շ > Sh;
շ > sh;

[:Lu:] { Չ > CH’;
Չ } [:Lu:] > CH’;
Չ > Ch’;
չ > ch’;

[:Lu:] { Ց > TS’;
Ց } [:Lu:] > TS’;
Ց > Ts’;
ց > ts’;

Ա > A;
ա > a;

Բ > B;
բ > b;

Գ > G;
գ > g;

Դ > D;
դ > d;

[ԵԷ] > E;
[եէ] > e;

Զ > Z;
զ > z;

[ԸՅ] > Y;
[ըյ] > y;

Թ > T’;
թ > t’;

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

Ն > N;
ն > n;

[ՈՕ] > O;
[ոօ] > o;

Պ > P;
պ > p;

Ջ > J;
ջ > j;

[ՌՐ] > R;
[ռր] > r;

Ս > S;
ս > s;

Վ > V;
վ > v;

Տ > T;
տ > t;

Ւ > W;
ւ > w;

Փ > P’;
փ > p’;

Ք > K’;
ք > k’;

Ֆ > F;
ֆ > f;

::NFC;
::Null;

[wW] { [wW] > ;
[yY] { [yY] > ;
[hH] { [hH] > ;
[iI] { [iIyY] } [^[:L:][:M:]] > ;
[yY] { [iIyY] } [^[:L:][:M:]] > ;
[^[:L:][:M:]] { [cC] } [kK] > ;

::Null;

[kK] { [kK] } [hH] > ;
[gG] { [gG] } [hH] > ;
`;
