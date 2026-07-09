export const jaRuRules = `
ファ > fa;
ふぁ > fa;
フィ > fi;
ふぃ > fi;
フェ > fe;
ふぇ > fe;
フォ > fo;
ふぉ > fo;
ヴァ > va;
ゔぁ > va;
ヴィ > vi;
ゔぃ > vi;
ヴェ > ve;
ゔぇ > ve;
ヴォ > vo;
ゔぉ > vo;
ティ > ti;
てぃ > ti;
ディ > di;
でぃ > di;
ジェ > je;
じぇ > je;
チェ > che;
ちぇ > che;
シェ > she;
しぇ > she;
ウィ > wi;
うぃ > wi;
ウェ > we;
うぇ > we;
ウォ > wo;
うぉ > wo;
デュ > dyu;
[ヴゔ] > vu;
[ぁァ] > a;
[ぃィ] > i;
[ぅゥ] > u;
[ぇェ] > e;
[ぉォ] > o;
ャ > ya;
ュ > yu;
ョ > yo;

::Null;

tōkyōto > токио;
kyōtofu > киото;

$apos = ['’‘\`´ʼ"];
$a = [aāâɑɐæ];
$i = [iīî];
$u = [uūû];
$e = [eēê];
$o = [oōô];
$cons = [bcdfghjklmnpqrstvwxyz];

$a $i } [:^Letter:] > ай;
$a $i } $cons > ай;
$e $i } [:^Letter:] > эй;
$e $i } $cons > эй;
$o $i } [:^Letter:] > ой;
$o $i } $cons > ой;
$u $i } [:^Letter:] > уй;
$u $i } $cons > уй;

ssh $a > сся;
ssh $i > сси;
ssh $u > ссю;
ssh $e > ссэ;
ssh $o > ссё;

cch $a > ття;
cch $i > тти;
cch $u > ттю;
cch $e > ттэ;
cch $o > ттё;

tch $a > ття;
tch $i > тти;
tch $u > ттю;
tch $e > ттэ;
tch $o > ттё;

tts $a > цца;
tts $i > цци;
tts $u > ццу;
tts $e > ццэ;
tts $o > ццо;

sh $a > ся;
sh $i > си;
sh $u > сю;
sh $e > сэ;
sh $o > сё;

ch $a > тя;
ch $i > ти;
ch $u > тю;
ch $e > тэ;
ch $o > тё;

ts $a > ца;
ts $i > ци;
ts $u > цу;
ts $e > цэ;
ts $o > цо;

dz $a > дза;
dz $i > дзи;
dz $u > дзу;
dz $e > дзэ;
dz $o > дзо;

jj $a > дздзя;
jj $i > дздзи;
jj $u > дздзю;
jj $e > дздзэ;
jj $o > дздзё;

j $a > дзя;
j $i > дзи;
j $u > дзю;
j $e > дзэ;
j $o > дзё;

n $apos y $a > нъя;
n $apos y $u > нъю;
n $apos y $o > нъё;
n $apos y $e > нъе;
n $apos y $i > нъйи;
n $apos $a > нъа;
n $apos $i > нъи;
n $apos $u > нъу;
n $apos $e > нъэ;
n $apos $o > нъо;
n $apos > нъ;

y $a > я;
y $u > ю;
y $o > ё;
y $e > е;
y $i > йи;

b > б;
c > к;
d > д;
f > ф;
g > г;
h > х;
j > дз;
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
z > дз;

$a > а;
$i > и;
$u > у;
$e > э;
$o > о;

::Null;

[жшчщ] { ы > и;
йй > й;

::Null;

[:^Letter:] { й } [бвгджзйклмнпрстфхцчшщ] > и;
[бвгджзйклмнпрстфхцчшщ] { й } [бвгджзйклмнпрстфхцчшщ] > и;

[:^Letter:] { [ъь] > ;
ъ } [:^Letter:] > ;
[ьъй] { [ьъ] > ;

::Title;
`;
