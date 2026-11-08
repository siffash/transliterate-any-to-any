export const zhLatnRules = `
::NFC;

０ > 0;
１ > 1;
２ > 2;
３ > 3;
４ > 4;
５ > 5;
６ > 6;
７ > 7;
８ > 8;
９ > 9;

[:Han:] > ;

::Null;

[āáǎà] > a;
[ēéěèêếềễệ] > e;
[īíǐì] > i;
[ōóǒò] > o;
[ūúǔù] > u;
[ǖǘǚǜ] > ü;
[ńňǹ] > n;
ḿ > m;

::Null;

[zcshr] { i > ï;
[jqxy] { u > ü;

::Null;

zh > ǯ;
ch > č;
sh > š;
z > ẑ;
q > ć;
j > đ;
x > s;
h > x;

ei > ij;
ng > ŋ;

['’‘\`´ʼ] > ;

::Title;
`;
