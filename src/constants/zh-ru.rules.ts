export const zhRuRules = `
$apos = ['’];
$v = [aeiouü];

[āáǎàɑɐæ] > a;
[ēéěèê] > e;
[īíǐì] > i;
[ōóǒò] > o;
[ūúǔù] > u;
[ǖǘǚǜv] > ü;

[:^Letter:] { $apos > ;
$apos } [:^Letter:] > ;

::Null;

iang } $v > яньг;
uang } $v > уаньг;
ang } $v > аньг;
eng } $v > эньг;
ing } $v > иньг;

ang $apos > анъ;
eng $apos > энъ;
ing $apos > инъ;
ong $apos > унъ;
iang $apos > янъ;
iong $apos > юнъ;
uang $apos > уанъ;

yang > ян;
ying > ин;
yong > юн;
yuan > юань;
yue > юэ;
yun > юнь;
yao > яо;
yan > янь;
you > ю;
ya > я;
ye > е;
yin > инь;
yi > и;
yu > юй;
yo > йо;

wang > ван;
weng > вэн;
wai > вай;
wei > вэй;
wan > вань;
wen > вэнь;
wa > ва;
wo > во;
wu > у;

juan > цзюань;
quan > цюань;
xuan > сюань;
jue > цзюэ;
que > цюэ;
xue > сюэ;
jun > цзюнь;
qun > цюнь;
xun > сюнь;
ju > цзюй;
qu > цюй;
xu > сюй;
jü > цзюй;
qü > цюй;
xü > сюй;

zhi > чжи;
chi > чи;
shi > ши;
ri > жи;
zi > цзы;
ci > цы;
si > сы;

hui > хуэй;

iang > ян;
iong > юн;
uang > уан;
ueng > уэн;

ang > ан;
eng > эн;
ing > ин;
ong > ун;
ian > янь;
iao > яо;
uai > уай;
uan > уань;
üan > юань;

ai > ай;
ei > эй;
ui > уй;
ao > ао;
ou > оу;
iu > ю;
ie > е;
ia > я;
in > инь;
un > унь;
ün > юнь;
ua > уа;
uo > о;
ue > юэ;
üe > юэ;
er > эр;
an > ань;
en > энь;

ng > н;

zh > чж;
ch > ч;
sh > ш;
r > ж;
z > цз;
c > ц;
s > с;
b > б;
p > п;
m > м;
f > ф;
d > д;
t > т;
n > н;
l > л;
g > г;
k > к;
h > х;
j > цз;
q > ц;
x > с;
w > в;
y > й;

a > а;
o > о;
e > э;
i > и;
u > у;
ü > юй;

$apos > ;

::Title;
`;
