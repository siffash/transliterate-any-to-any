export const ukLatnRules = `
$boundary=[:^Letter:];
$upper=[АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ[:Upper:]];

['’ʼ‘´\`] > ;

ЗГ>ZH;
Зг>Zh;
зГ>zH;
зг>zh;

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

$upper{Щ}>ŠČ;
Щ}$upper>ŠČ;
Щ>Šč;
щ>šč;

$upper{Ц}>TS;
Ц}$upper>TS;
Ц>Ts;
ц>ts;

А>A;
Б>B;
В>V;
Г>H;
Ґ>G;
Д>D;
Е>E;
Ж>Ž;
З>Z;
И>Ï;
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
Х>X;
Ч>Č;
Ш>Š;
Ь>;
а>a;
б>b;
в>v;
г>h;
ґ>g;
д>d;
е>e;
ж>ž;
з>z;
и>ï;
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
х>x;
ч>č;
ш>š;
ь>;
`;
