export const jaUkRules = `
tōkyōto > токіо;
kyōtofu > кіото;

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

ssh $a > шша;
ssh $i > шші;
ssh $u > шшу;
ssh $e > шше;
ssh $o > шшо;

cch $a > чча;
cch $i > ччі;
cch $u > ччу;
cch $e > чче;
cch $o > ччо;

tch $a > чча;
tch $i > ччі;
tch $u > ччу;
tch $e > чче;
tch $o > ччо;

tts $a > цца;
tts $i > цці;
tts $u > ццу;
tts $e > цце;
tts $o > ццо;

sh $a > ша;
sh $i > ші;
sh $u > шу;
sh $e > ше;
sh $o > шо;

ch $a > ча;
ch $i > чі;
ch $u > чу;
ch $e > че;
ch $o > чо;

ts $a > ца;
ts $i > ці;
ts $u > цу;
ts $e > це;
ts $o > цо;

dz $a > дза;
dz $i > дзі;
dz $u > дзу;
dz $e > дзе;
dz $o > дзо;

jj $a > джджа;
jj $i > джджі;
jj $u > джджу;
jj $e > дждже;
jj $o > джджо;

j $a > джа;
j $i > джі;
j $u > джу;
j $e > дже;
j $o > джо;

n $apos y $a > н''я;
n $apos y $u > н''ю;
n $apos y $o > н''йо;
n $apos y $e > н''є;
n $apos y $i > н''ї;
n $apos $a > н''а;
n $apos $i > н''і;
n $apos $u > н''у;
n $apos $e > н''е;
n $apos $o > н''о;
n $apos > н'';

[бвгґджзклмнпрстфхцчшщ] } y $o > ьо;
y $a > я;
y $u > ю;
y $o > йо;
y $e > є;
y $i > ї;

b > б;
c > к;
d > д;
f > ф;
g > ґ;
h > х;
j > дж;
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
$i > і;
$u > у;
$e > е;
$o > о;

::Null;

йа > я;
йе > є;
йі > ї;
йу > ю;

::Title;
`;
