export const caLatnRules = `
$boundary = [:^Letter:];
$vowel = [a e i o u A E I O U à è é í ò ó ú À È É Í Ò Ó Ú];
$front_vowel = [e i é è í E I É È Í];

l l > ľ;
L l > Ľ;
L L > Ľ;

l·l > ll;
L·l > Ll;
L·L > LL;

$vowel { i g } $boundary > č;
$vowel { I g } $boundary > Č;
$vowel { I G } $boundary > Č;

i { g } $boundary > č;
I { g } $boundary > Č;
I { G } $boundary > Č;

$vowel { i x > š;
$vowel { I x > Š;
$vowel { I X > Š;

n y > ń;
N y > Ń;
N Y > Ń;

t x > č;
T x > Č;
T X > Č;

t g } $front_vowel > dž;
T g } $front_vowel > Dž;
T G } $front_vowel > DŽ;

t j > dž;
T j > Dž;
T J > DŽ;

q u } $front_vowel > k;
Q u } $front_vowel > K;
Q U } $front_vowel > K;

g u } $front_vowel > g;
G u } $front_vowel > G;
G U } $front_vowel > G;

g } $front_vowel > ž;
G } $front_vowel > Ž;

c } $front_vowel > s;
C } $front_vowel > S;

x > š;
X > Š;

j > ž;
J > Ž;

ç > s;
Ç > S;

c > k;
C > K;

q > k;
Q > K;

h > ;
H ([:Letter:]) > &Any-Upper($1);
H > ;

à > a;
À > A;
è > e;
È > E;
é > e;
É > E;
í > i;
Í > I;
ï > i;
Ï > I;
ò > o;
Ò > O;
ó > o;
Ó > O;
ú > u;
Ú > U;
ü > u;
Ü > U;
`;
