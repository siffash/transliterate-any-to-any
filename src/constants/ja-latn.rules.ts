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

n ['’‘\`´ʼ"] y > ny;
n ['’‘\`´ʼ"] } [:^Letter:] > n;
['’‘\`´ʼ"] > ;

tch > ćć;
cch > ćć;
ssh > šš;
sh > š;
ch > ć;
ny > ń;
j > đ;

[āâ] > a;
[īî] > i;
[ūû] > u;
[ēê] > e;
[ōô] > o;

･ > ' ';

::Title;
`;
