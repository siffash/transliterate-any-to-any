export const ipaEnRules = `
::Null;

[͈̚ˈ̇ˌ̧ːˠˤ˥˧˩̝̟̥̩̪̯̃̊͡ʰʱ] > ;

::Null;

dʒ > j;
tʃ > ch;

[:^Letter:] { [ʔʕ] } > ;
[ʔʕʼ] > \\';

[ʲʏjʝ] > y;
[ʷɥ] > w;
[χx] > kh;
[ɣɰ] > gh;
[ħɦ] > h;
θ > th;
ð > dh;
[ʃɕɧʂç] > sh;
[ʒʐʑž] > zh;
č > ch;
[ʁʀɹɽɾ] > r;
[ɡɢ] > g;
ŋ > ng;
ɲ > ny;
ɓ > b;
[ɖɗď] > d;
ɟ > j;
[ɫɭ] > l;
ɱ > m;
ɳ > n;
[ʈť] > t;
[ʋβ] > v;
ʎ > ly;
[cq] > k;

[æɑɐâă] > a;
[œøɔɒơôõɤɵ] > o;
[ɛəɘɜêęẽ] > e;
[ɚɝ] > er;
[ɪɨĩ] > i;
[ʊʌɯʉũư] > u;
ɸ > f;

::Null;

w { w > ;
y { y > ;
h { h > ;
i { [iy] } [:^Letter:] > ;
y { [iy] } [:^Letter:] > ;
[:^Letter:] { c } k > ;

::Null;

k { k } h > ;
g { g } h > ;
`;
