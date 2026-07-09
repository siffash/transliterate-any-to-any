export const ipaRoRules = `
::Null;

$vowelFront = [eiɛɪĩẽêęæœyʏjɥ];

[͈̚ʰʱʲʷʼˈ̇ˌ̧ːˠˤ˥˧˩̝̟̥̩̪̯̃̊͡ʔʕ] > ;

::Null;

tʃ } $vowelFront > c;
tʃ > ci;
dʒ } $vowelFront > g;
dʒ > gi;
ts > ț;
dz > z;

[cč] } $vowelFront > c;
[cč] > ci;
ɟ } $vowelFront > g;
ɟ > gi;

[kq] } $vowelFront > ch;
[kq] > c;
[gɡɢɣɰ] } $vowelFront > gh;
[ɡɢɣɰ] > g;

[:^Letter:] { [ɨɯư] > î;
[ɨɯư] } [:^Letter:] > î;
[ɨɯư] > â;

ɓ > b;
[ďɖɗð] > d;
[ħɦɧχçx] > h;
[ɫɭ] > l;
ʎ > li;
ɱ > m;
[ɳŋ] > n;
ɲ > ni;
[ɹɽɾʀʁ] > r;
[ɕʂʃ] > ș;
[ťʈθ] > t;
[ʋβ] > v;
ɸ > f;
w > u;
[žʐʑʒʝ] > j;

[jyɪĩɥʏ] > i;
[ɐɑɒʌ] > a;
[ɘəɚɜɝơ] > ă;
[æɛẽêęœ] > e;
[ɔôõøɤɵ] > o;
[ũʉʊ] > u;

::Null;

[:^Letter:] { â > î;
â } [:^Letter:] > î;
[:Letter:] { î } [:Letter:] > â;
`;
