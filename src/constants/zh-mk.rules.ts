export const zhMkRules = `
$apos = ['’‘\`´ʼ"];

[āáǎàɑɐæ] > a;
[ēéěèê] > e;
[īíǐì] > i;
[ōóǒò] > o;
[ūúǔù] > u;
[ǖǘǚǜv] > ü;

[:^Letter:] { $apos > ;
$apos } [:^Letter:] > ;

::Null;

yang > јанг;
ying > јинг;
yong > јонг;
yuan > јуан;
yue > јуе;
yun > јун;
yao > јао;
yan > јан;
you > јоу;
ya > ја;
ye > је;
yin > јин;
yi > ји;
yu > ју;
yo > јо;

wang > ванг;
weng > венг;
wai > вај;
wei > веј;
wan > ван;
wen > вен;
wa > ва;
wo > во;
wu > ву;

jiang > ѓанг;
qiang > ќанг;
xiang > сјанг;
jiong > ѓонг;
qiong > ќонг;
xiong > сјонг;
jian > ѓан;
qian > ќан;
xian > сјан;
jiao > ѓао;
qiao > ќао;
xiao > сјао;
juan > ѓуан;
quan > ќуан;
xuan > сјуан;
jing > ѓинг;
qing > ќинг;
xing > синг;
jia > ѓа;
qia > ќа;
xia > сја;
jie > ѓе;
qie > ќе;
xie > сје;
jiu > ѓу;
qiu > ќу;
xiu > сју;
jin > ѓин;
qin > ќин;
xin > син;
jue > ѓуе;
que > ќуе;
xue > сјуе;
jun > ѓун;
qun > ќун;
xun > сјун;
ji > ѓи;
qi > ќи;
xi > си;
ju > ѓу;
qu > ќу;
xu > сју;
jü > ѓу;
qü > ќу;
xü > сју;

zhi > џи;
chi > чи;
shi > ши;
ri > жи;
zi > ци;
ci > ци;
si > си;

hui > хуеј;

iang > јанг;
iong > јонг;
uang > уанг;
ueng > уенг;

ang > анг;
eng > енг;
ing > инг;
ong > онг;
ian > јан;
iao > јао;
uai > уај;
uan > уан;
üan > јуан;

ai > ај;
ei > еј;
ui > уеј;
ao > ао;
ou > оу;
iu > ју;
ie > је;
ia > ја;
in > ин;
un > ун;
ün > јун;
ua > уа;
uo > уо;
ue > уе;
üe > јуе;
er > ер;
an > ан;
en > ен;

ng > нг;

zh > џ;
ch > ч;
sh > ш;
r > ж;
z > ц;
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
j > ѓ;
q > ќ;
x > с;
w > в;
y > ј;

a > а;
o > о;
e > е;
i > и;
u > у;
ü > ју;

$apos > ;

::Null;

аа > а;
бб > б;
вв > в;
гг > г;
дд > д;
ѓѓ > ѓ;
ее > е;
жж > ж;
зз > з;
ѕѕ > ѕ;
ии > и;
јј > ј;
кк > к;
лл > л;
љљ > љ;
мм > м;
нн > н;
њњ > њ;
оо > о;
пп > п;
рр > р;
сс > с;
тт > т;
ќќ > ќ;
уу > у;
фф > ф;
хх > х;
цц > ц;
чч > ч;
џџ > џ;
шш > ш;

::Null;

дз > ѕ;
дж > џ;
лј > љ;
нј > њ;

::Title;
`;
