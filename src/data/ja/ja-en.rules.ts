export const jaEnRules = `
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
ジェ > je;
じぇ > je;
チェ > che;
ちぇ > che;
シェ > she;
しぇ > she;
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

･ > ' ';

::Title;
`;
