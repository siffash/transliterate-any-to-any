// Ukrainian National (2010) transliteration system

export const ukEnRules = `
$boundary=[:^Letter:];
$upper=[АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ[:Lu:]];

['’ʼ‘´\`] > ;

ЗГ>ZGH;
Зг>Zgh;
зГ>zGH;
зг>zgh;

$boundary{Є}$upper>YE;
$boundary{Є}>Ye;
$upper{Є}>IE;
Є}$upper>IE;
Є>Ie;
$boundary{є}>ye;
є>ie;

$boundary{Ю}$upper>YU;
$boundary{Ю}>Yu;
$upper{Ю}>IU;
Ю}$upper>IU;
Ю>Iu;
$boundary{ю}>yu;
ю>iu;

$boundary{Я}$upper>YA;
$boundary{Я}>Ya;
$upper{Я}>IA;
Я}$upper>IA;
Я>Ia;
$boundary{я}>ya;
я>ia;

$boundary{Ї}$upper>YI;
$boundary{Ї}>Yi;
$upper{Ї}>I;
Ї}$upper>I;
Ї>I;
$boundary{ї}>yi;
ї>i;

$boundary{Й}$upper>Y;
$boundary{Й}>Y;
$upper{Й}>I;
Й}$upper>I;
Й>I;
$boundary{й}>y;
й>i;

$upper{Щ}>SHCH;
Щ}$upper>SHCH;
Щ>Shch;
щ>shch;

$upper{Ж}>ZH;
Ж}$upper>ZH;
Ж>Zh;
ж>zh;

$upper{Х}>KH;
Х}$upper>KH;
Х>Kh;
х>kh;

$upper{Ц}>TS;
Ц}$upper>TS;
Ц>Ts;
ц>ts;

$upper{Ч}>CH;
Ч}$upper>CH;
Ч>Ch;
ч>ch;

$upper{Ш}>SH;
Ш}$upper>SH;
Ш>Sh;
ш>sh;

А>A;
Б>B;
В>V;
Г>H;
Ґ>G;
Д>D;
Е>E;
З>Z;
И>Y;
І>I;
К>K;
Л>L;
М>M;
Н>N;
О>O;
П>P;
Р>R;
С>S;
Т>T;
У>U;
Ф>F;
Ь>;
а>a;
б>b;
в>v;
г>h;
ґ>g;
д>d;
е>e;
з>z;
и>y;
і>i;
к>k;
л>l;
м>m;
н>n;
о>o;
п>p;
р>r;
с>s;
т>t;
у>u;
ф>f;
ь>;
`;
