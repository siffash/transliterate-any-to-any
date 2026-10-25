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

::Null;

[zcshr] { i > ï;
[jqxy] { ue > üö;
ü { e > ö;
[jqxy] { uan > üän;
[jqxy] { u > ü;

::Null;

zh > dž;
ch > č;
sh > š;
c > ts;
z > dz;
q > ć;
j > đ;
x > s;
h > x;

ei > ij;

['’‘\`´ʼ] > ;

::Title;
`;
