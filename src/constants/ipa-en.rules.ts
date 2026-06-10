export const ipaEnRules = `
$boundary = [:^Letter:];

[ˈˌːˑ͡ ͜ ˤ] > ;

dʒ > j;
tʃ > ch;
ʦ > ts;
ʧ > ch;
ʤ > j;

$boundary { ʔa } > a;
$boundary { ʔi } > i;
$boundary { ʔu } > u;
$boundary { ʔe } > e;
$boundary { ʔo } > o;
$boundary { ʔ } > ;
$boundary { ʕa } > a;
$boundary { ʕi } > i;
$boundary { ʕu } > u;
$boundary { ʕe } > e;
$boundary { ʕo } > o;
$boundary { ʕ } > a;

ʔ > \\';
ʕ > \\';

χ > kh;
x > kh;
ɣ > gh;
ħ > h;
θ > th;
ð > dh;
ʃ > sh;
ʒ > zh;
ʁ > r;
ɡ > g;
ŋ > ng;
ɲ > ny;
j > y;
æ > a;
œ > oe;
ø > oe;
ɔ > o;
ɛ > e;
ə > e;
ɪ > i;
ʊ > u;
ʌ > u;
ɑ > a;
ɒ > o;
c > k;

::Title;
`;
