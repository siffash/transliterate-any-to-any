export const zhRuRules = `
::Any-Latin;

::Latin-ASCII;
::Lower();

yuan > юань;
qian > цянь;
shen > шэнь;
zhen > чжэнь;
sh > ш;
zh > чж;
ch > ч;
xi > си;
ji > цзи;
qi > ци;
ju > цзю;
qu > цю;
xu > сю;

ian > янь;
ong > ун;
ai > ай;
ei > эй;
ui > уй;
w > в;

lu } $ > лю;
nu } $ > ню;
ng } [^[:L:]] > н;
ng } $ > н;
n } [^[:L:]] > нь; 
n } $ > нь;

y } a > я;
y } u > ю;
y } e > е;
y > и;

::Any-Cyrillic;

ньнь > нь;
ннь > нь;
ывань > айвань;
иуань > юань;

::Title();
`;
