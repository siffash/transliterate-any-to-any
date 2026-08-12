export const jaLatnRules = `
::NFC;

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
ジェ > dže;
じぇ > dže;
チェ > če;
ちぇ > če;
シェ > še;
しぇ > še;
ウィ > wi;
うぃ > wi;
ウェ > we;
うぇ > we;
ウォ > wo;
うぉ > wo;
デュ > dyu;
[ヴゔ] > v;
[ぁァ] > a;
[ぃィ] > i;
[ぅゥ] > u;
[ぇェ] > e;
[ぉォ] > o;
ャ > ya;
ュ > yu;
ョ > yo;

::Null;
::Lower;

[:^Letter:] { ['’‘\`´ʼ] > ;
['’‘\`´ʼ] } [:^Letter:] > ;

[āâ] > a;
[īî] > i;
[ūû] > u;
[ēê] > e;
[ōô] > o;

::Null;

[aeiou] { g } [aeiouy] > ng;

tch } e > čč;
cch } e > čč;
tch > ćć;
cch > ćć;
ssh > šš;
sh > š;
ch } e > č;
ch > ć;
n } i > ń;
ny > ń;
j } e > dž;
j > đ;

e { i > j;

::Null;

n } ń > ń;
e } j > i;

･ > ' ';

::Title;
`;
