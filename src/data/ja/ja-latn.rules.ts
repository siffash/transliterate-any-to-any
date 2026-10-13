export const jaLatnRules = `
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
[ぃィゐ以] > i;
[ぅゥ] > u;
[ぇェ] > e;
[ぉォ] > o;
[ャゃ] > ya;
[ュゅ] > yu;
[ョょ予] > yo;
[亡剖] > bo;
[交勾] > ko;
企 > ki;
伺 > shi;
侶 > ryo;
促 > soku;
[俸倣] > ho;
倹 > ken;
偶 > gu;
備 > bi;
傲 > go;
傾 > kei;
冗 > jo;
凡 > bon;
刹 > satsu;
剥 > haku;
励 > rei;
劾 > gai;
匿 > toku;
受 > ju;

::Null;
::NFC;

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
