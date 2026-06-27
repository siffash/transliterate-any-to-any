export const jaBgRules = `
tōkyōto > токио;
tōkyō > токио;
kyōtofu > киото;
kyōto > киото;

$apos = ['’‘\`´ʼ"];
$a = [aāâɑɐæ];
$i = [iīî];
$u = [uūû];
$e = [eēê];
$o = [oōô];
$cons = [bcdfghjklmnpqrstvwxyz];

$a $i } [:^Letter:] > ай;
$a $i } $cons > ай;
$e $i } [:^Letter:] > ей;
$e $i } $cons > ей;
$o $i } [:^Letter:] > ой;
$o $i } $cons > ой;
$u $i } [:^Letter:] > уй;
$u $i } $cons > уй;

ssh > шш;
cch > тч;
tch > тч;
tts > цц;

sh > ш;
ch > ч;
ts > ц;
dz > дз;
j > дж;

n $apos y $a > н'я;
n $apos y $u > н'ю;
n $apos y $o > н'йо;
n $apos y $e > н'е;
n $apos y $i > н'и;
n $apos $a > н'а;
n $apos $i > н'и;
n $apos $u > н'у;
n $apos $e > н'е;
n $apos $o > н'о;
n $apos > н;

[аеиоуйяю] { y $o > йо;
[:^Letter:] { y $o > йо;
y $o > ьо;

y $a > я;
y $u > ю;
y $e > е;
y $i > йи;

b > б;
c > к;
d > д;
f > ф;
g > г;
h > х;
k > к;
l > л;
m > м;
n > н;
p > п;
q > к;
r > р;
s > с;
t > т;
v > в;
w > в;
x > кс;
y > й;
z > з;

$a > а;
$i > и;
$u > у;
$e > е;
$o > о;

::Null;

аа > а;
бб > б;
вв > в;
гг > г;
дд > д;
ее > е;
жж > ж;
зз > з;
ии > и;
йй > й;
кк > к;
лл > л;
мм > м;
нн > н;
оо > о;
пп > п;
рр > р;
сс > с;
тт > т;
уу > у;
фф > ф;
хх > х;
цц > ц;
чч > ч;
шш > ш;
щщ > щ;
ъъ > ъ;
ьь > ь;
юю > ю;
яя > я;

::Null;

йа > я;
йу > ю;
шт > щ;

[:Letter:] [:Letter:] { ъ } [:^Letter:] > ;

::Title;
`;
