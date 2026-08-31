export const jaLatnRules = `
::Lower;
::NFC;

ファ > fa;
ふぁ > fa;
フィ > fi;
ふぃ > fi;
フェ > fe;
ふぇ > fe;
フォ > fo;
ふぉ > fo;
フュ > fyu;
ふゅ > fyu;
ヴァ > va;
ゔぁ > va;
ヴィ > vi;
ゔぃ > vi;
ヴェ > ve;
ゔぇ > ve;
ヴォ > vo;
ゔぉ > vo;
ヴュ > vyu;
ゔゅ > vyu;
ティ > ti;
てぃ > ti;
トゥ > tu;
とぅ > tu;
テュ > tyu;
てゅ > tyu;
ディ > di;
でぃ > di;
ドゥ > du;
どぅ > du;
デュ > dyu;
でゅ > dyu;
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
[^[:L:][:M:]] { [ヴゔ] } [^[:L:][:M:]] > vu;
[ヴゔ] > v;
[ぁァ] > a;
[ぃィ] > i;
[ぅゥ] > u;
[ぇェ] > e;
[ぉォ] > o;
[ャゃ] > ya;
[ュゅ] > yu;
[ョょ] > yo;

::Null;

[^[:L:][:M:]] { ['’‘\`´ʼ] > ;
['’‘\`´ʼ] } [^[:L:][:M:]] > ;

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
