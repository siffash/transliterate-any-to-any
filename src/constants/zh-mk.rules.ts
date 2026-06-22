export const zhMkRules = `
::Any-Latn;
::Latn-ASCII;
::Lower;

yuan > јуан;
qian > ќен;
xian > сян;
jian > џијан;

ong > онг;
eng > енг;
ian > јан;
ai > ај;
ei > еј;
ui > уј;

sh > ш;
zh > џ;
ch > ч;
xi > си;
ji > џи;
qi > ќи;
ju > џу;
qu > ќу;
xu > сју;

lü > љу;
nü > њу;
lu } $ > љу;
nu } $ > њу;

y } a > ја;
y } u > ју;
y } e > је;
y > ј;
w > в;

ng } [^[:L:]] > нг;
ng } $ > нг;
n } [^[:L:]] > н;
n } $ > н;

::Any-Cyrillic;

й > ј;

::Title;
`;
