export const bgIpaRules = `
::Lower;

$c_pal = [бвгдзклмнпрстфх];
$voiceless = [пфктшсцчщ];
$voiced = [бгджз];

б } $voiceless > п;
в } $voiceless > ф;
г } $voiceless > к;
д } $voiceless > т;
ж } $voiceless > ш;
з } $voiceless > с;

п } $voiced > б;
ф } $voiced > в;
к } $voiced > г;
т } $voiced > д;
ш } $voiced > ж;
с } $voiced > з;

б } [:^Letter:] > п;
в } [:^Letter:] > ф;
г } [:^Letter:] > к;
д } [:^Letter:] > т;
ж } [:^Letter:] > ш;
з } [:^Letter:] > с;

::Null;

щ > ʃt;
ч > t͡ʃ;
ц > t͡s;
дж > d͡ʒ;
дз > d͡z;

$c_pal { я > ʲa;
$c_pal { ю > ʲu;
ь о > ʲo;
я > ja;
ю > ju;

л } [еи] > l;

а > a;
б > b;
в > v;
г > ɡ;
д > d;
е > ɛ;
ж > ʒ;
з > z;
и > i;
й > j;
к > k;
л > ɫ;
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
ш > ʃ;
ъ > ɤ;
ь > ʲ;
`;
