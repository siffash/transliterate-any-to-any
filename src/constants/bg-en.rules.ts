// Streamlined System with -ia-exception (2009 Transliteration Act)

export const bgEnRules = `
ия } [:^Letter:] > ia;
Ия } [:^Letter:] > Ia;
ИЯ } [:^Letter:] > IA;
иЯ } [:^Letter:] > iA;

[:Upper:] { Ж > ZH;
Ж } [:Upper:] > ZH;
Ж > Zh;
ж > zh;

[:Upper:] { Ц > TS;
Ц } [:Upper:] > TS;
Ц > Ts;
ц > ts;

[:Upper:] { Ч > CH;
Ч } [:Upper:] > CH;
Ч > Ch;
ч > ch;

[:Upper:] { Ш > SH;
Ш } [:Upper:] > SH;
Ш > Sh;
ш > sh;

[:Upper:] { Щ > SHT;
Щ } [:Upper:] > SHT;
Щ > Sht;
щ > sht;

[:Upper:] { Ю > YU;
Ю } [:Upper:] > YU;
Ю > Yu;
ю > yu;

[:Upper:] { Я > YA;
Я } [:Upper:] > YA;
Я > Ya;
я > ya;

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
Е > E;
е > e;
З > Z;
з > z;
И > I;
и > i;
Ѝ > I;
ѝ > i;
Й > Y;
й > y;
К > K;
к > k;
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
У > U;
у > u;
Ф > F;
ф > f;
Х > H;
х > h;
Ъ > A;
ъ > a;
Ь > Y;
ь > y;
`;
