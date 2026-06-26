export const jaMkRules = `
tōkyōto > токио;
kyōtofu > киото;

$apos = [' ’ ‘ \` ´ "];
$a = [aāâɑɐæ];
$i = [iīî];
$u = [uūû];
$e = [eēê];
$o = [oōô];

$a $i } [:^Letter:] > ај;
$e $i } [:^Letter:] > еј;
$o $i } [:^Letter:] > ој;
$u $i } [:^Letter:] > уј;

ssh > шш;
cch > чч;
tch > чч;
tts > цц;

sh > ш;
ch > ч;
ts > ц;
dz > ѕ;

jj > џџ;
j > џ;
ny > њ;

n $apos y > нј;
n $apos > н;

y > ј;

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
z > з;

$a > а;
$i > и;
$u > у;
$e > е;
$o > о;

::Title;
`;
