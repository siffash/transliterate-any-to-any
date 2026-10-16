export const tgEnRules = `
::NFC;

[^[:L:][:M:]] { Е } [:Lu:] > YE;
[^[:L:][:M:]] { Е > Ye;
[^[:L:][:M:]] { е > ye;

[AEIOUY] { Е > YE;
[aeiouy\\'] { Е } [:Lu:] > YE;
[aeiouy\\'] { Е > Ye;
[AEIOUYaeiouy\\'] { е > ye;

[:Lu:] { Ё > YO;
Ё } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > YO;
Ё } [:Lu:] > YO;
Ё > Yo;
ё > yo;

[:Lu:] { Ю > YU;
Ю } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > YU;
Ю } [:Lu:] > YU;
Ю > Yu;
ю > yu;

[:Lu:] { Я > YA;
Я } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > YA;
Я } [:Lu:] > YA;
Я > Ya;
я > ya;

[:Lu:] { Ғ > GH;
Ғ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > GH;
Ғ } [:Lu:] > GH;
Ғ > Gh;
ғ > gh;

[:Lu:] { Ш > SH;
Ш } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > SH;
Ш } [:Lu:] > SH;
Ш > Sh;
ш > sh;

[:Lu:] { Щ > SHCH;
Щ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > SHCH;
Щ } [:Lu:] > SHCH;
Щ > Shch;
щ > shch;

[:Lu:] { Ц > TS;
Ц } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > TS;
Ц } [:Lu:] > TS;
Ц > Ts;
ц > ts;

[:Lu:] { Ж > ZH;
Ж } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > ZH;
Ж } [:Lu:] > ZH;
Ж > Zh;
ж > zh;

[:Lu:] { Х > KH;
Х } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KH;
Х } [:Lu:] > KH;
Х > Kh;
х > kh;

[:Lu:] { Ч > CH;
Ч } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > CH;
Ч } [:Lu:] > CH;
Ч > Ch;
ч > ch;

А > A;
а > a;

Б > B;
б > b;

В > V;
в > v;

Г > G;
г > g;

Д > D;
д > d;

[ЕЭ] > E;
[еэ] > e;

З > Z;
з > z;

[ИӢ] > I;
[иӣ] > i;

[ЙЫ] > Y;
[йы] > y;

К > K;
к > k;

Қ > Q;
қ > q;

Л > L;
л > l;

М > M;
м > m;

Н > N;
н > n;

О > O;
о > o;

П > P;
п > p;

Р > R;
р > r;

С > S;
с > s;

Т > T;
т > t;

[УӮ] > U;
[уӯ] > u;

Ф > F;
ф > f;

Ҳ > H;
ҳ > h;

Ҷ > J;
ҷ > j;

[ЪЬъь] > \\';

::Null;

[:Cyrillic:] > ;



::Null;

[wW] { [wW]+ > ;
[yY] { [yY]+ > ;
[hH] { [hH]+ > ;
[iIyY] { [iIyY]+ } [^[:L:][:M:]] > ;
[^[:L:][:M:]] { [cC]+ } [kK] > ;

::Null;

[kK] { [kK]+ } [hH] > ;
[gG] { [gG]+ } [hH] > ;
`;
