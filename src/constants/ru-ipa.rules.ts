export const ruIpaRules = `
::Lower;

$soft_cons = [б в г д з к л м н п р с т ф х];
$hard_cons = [ж ш ц];
$voiceless = [п ф к т с ш х ц ч щ];
$voiced = [б в г д з ж];
$boundary = [:^Letter:];

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

б } $boundary > п;
в } $boundary > ф;
г } $boundary > к;
д } $boundary > т;
ж } $boundary > ш;
з } $boundary > с;

::Null;

$soft_cons { я > ʲa;
$soft_cons { ю > ʲu;
$soft_cons { ё > ʲo;
$soft_cons { е > ʲɛ;
$soft_cons { и > ʲi;
$soft_cons { ь > ʲ;

$hard_cons { и > ɨ;
$hard_cons { е > ɛ;
$hard_cons { ё > o;

[ч щ] { е > ɛ;
[ч щ] { и > i;
[ч щ] { ё > o;
[ч щ] { ю > u;
[ч щ] { я > a;

::Null;

л } ʲ > l;

я > ja;
ю > ju;
ё > jo;
е > jɛ;
и > i;

ь > ;
ъ > ;

щ > ɕː;
ч > t͡ɕ;
ц > t͡s;

а > a;
б > b;
в > v;
г > ɡ;
д > d;
ж > ʐ;
з > z;
й > j;
к > k;
л > ɫ;
м > m;
н > n;
о > o;
п > p;
р > r;
с > s;
т > t;
у > u;
ф > f;
х > x;
ш > ʂ;
ы > ɨ;
э > ɛ;
`;
