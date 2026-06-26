export const ukIpaRules = `
::Lower;

$dentals = [д т з с л н ц в];
$voiced = [б г ґ д ж з];
$vowel = [а е є и і ї о у ю я];

дж > d͡ʒ;
дз > d͡z;
щ > ʃt͡ʃ;

п } $voiced > b;
к } $voiced > ɡ;
с } $voiced > z;
т } $voiced > d;
ф } $voiced > v;
х } $voiced > ɦ;
ц } $voiced > d͡z;
ч } $voiced > d͡ʒ;
ш } $voiced > ʒ;

г } [к т] > x;

бб > bː;
вв > vː;
гг > ɦː;
ґґ > ɡː;
дд > dː;
жж > ʒː;
зз > zː;
кк > kː;
лл > lː;
мм > mː;
нн > nː;
пп > pː;
рр > rː;
сс > sː;
тт > tː;
фф > fː;
хх > xː;
цц > t͡sː;
чч > t͡ʃː;
шш > ʃː;

$dentals { я > ʲa;
$dentals { ю > ʲu;
$dentals { є > ʲɛ;
$dentals { і > ʲi;
$dentals { ь > ʲ;

d͡z { я > ʲa;
d͡z { ю > ʲu;
d͡z { є > ʲɛ;
d͡z { і > ʲi;
d͡z { ь > ʲ;

[:^Letter:] { в } [^$vowel] > w;
в } [^$vowel] > w;
в } [:^Letter:] > w;

::Null;

я > ja;
ю > ju;
є > jɛ;
ї > ji;
і > i;
ь > ;
['’‘\`´ʼ"] > ;

а > a;
б > b;
в > v;
г > ɦ;
ґ > ɡ;
д > d;
е > ɛ;
ж > ʒ;
з > z;
и > ɪ;
й > j;
к > k;
л > l;
м > m;
н > n;
о > ɔ;
п > p;
р > r;
с > s;
т > t;
у > u;
ф > f;
х > x;
ц > t͡s;
ч > t͡ʃ;
ш > ʃ;
`;
