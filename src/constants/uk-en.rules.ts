// Ukrainian National (2010) transliteration system

export const ukEnRules = `
$upper = [АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ[:Upper:]];

['’‘\`´ʼ"] > ;

ЗГ > ZGH;
Зг > Zgh;
зГ > zGH;
зг > zgh;

[:^Letter:] { Є } $upper > YE;
[:^Letter:] { Є } > Ye;
$upper { Є } > IE;
Є } $upper > IE;
Є > Ie;
[:^Letter:] { є } > ye;
є > ie;

[:^Letter:] { Ю } $upper > YU;
[:^Letter:] { Ю } > Yu;
$upper { Ю } > IU;
Ю } $upper > IU;
Ю > Iu;
[:^Letter:] { ю } > yu;
ю > iu;

[:^Letter:] { Я } $upper > YA;
[:^Letter:] { Я } > Ya;
$upper { Я } > IA;
Я } $upper > IA;
Я > Ia;
[:^Letter:] { я } > ya;
я > ia;

[:^Letter:] { Ї } $upper > YI;
[:^Letter:] { Ї } > Yi;
$upper { Ї } > I;
Ї } $upper > I;
Ї > I;
[:^Letter:] { ї } > yi;
ї > i;

[:^Letter:] { Й } $upper > Y;
[:^Letter:] { Й } > Y;
$upper { Й } > I;
Й } $upper > I;
Й > I;
[:^Letter:] { й } > y;
й > i;

$upper { Щ } > SHCH;
Щ } $upper > SHCH;
Щ > Shch;
щ > shch;

$upper { Ж } > ZH;
Ж } $upper > ZH;
Ж > Zh;
ж > zh;

$upper { Х } > KH;
Х } $upper > KH;
Х > Kh;
х > kh;

$upper { Ц } > TS;
Ц } $upper > TS;
Ц > Ts;
ц > ts;

$upper { Ч } > CH;
Ч } $upper > CH;
Ч > Ch;
ч > ch;

$upper { Ш } > SH;
Ш } $upper > SH;
Ш > Sh;
ш > sh;

А > A;
Б > B;
В > V;
Г > H;
Ґ > G;
Д > D;
Е > E;
З > Z;
И > Y;
І > I;
К > K;
Л > L;
М > M;
Н > N;
О > O;
П > P;
Р > R;
С > S;
Т > T;
У > U;
Ф > F;
Ь > ;
а > a;
б > b;
в > v;
г > h;
ґ > g;
д > d;
е > e;
з > z;
и > y;
і > i;
к > k;
л > l;
м > m;
н > n;
о > o;
п > p;
р > r;
с > s;
т > t;
у > u;
ф > f;
ь > ;
`;
