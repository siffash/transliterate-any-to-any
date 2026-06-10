export const zhUkRules = `
::Any-Latn;
::Latn-ASCII;
::Lower();

'' > ;
lü > лю;
nü > ню;
lyu > лю;
nyu > ню;
lu } $ > лю;
nu } $ > ню;
xie > сє;
jie > цзіє;
qie > ціє;
ye > є;
shen > шень;
zhen > чжень;
zhe > чже;
che > че;
she > ше;
re > же;
ian > янь;
i } $ > і;
ping } $ > пін;
ping > пінь;
jing } $ > цзін;
jing > цзінь;
ning } $ > нін;
ning > нінь;

yuan > юань;
qian > цянь;
sh > ш;
zh > чж;
ch > ч;
xi > сі;
ji > цзі;
qi > ці;
ju > цзю;
qu > цю;
xu > сю;

ong > ун;
ai > ай;
ei > ей;
ui > уй;
w > в;
g } [aeiou] > ґ;

ng } [^[:L:]] > н;
ng } $ > н;
n } [^[:L:]] > нь; 
n } $ > нь;

y } a > я;
y } u > ю;
y } e > є;
y > і;

::Any-Cyrillic;

ци > ці;
зи > зі;
пи > пі;
ли > лі;
ми > мі;
ни > ні;
ньг > нг;
ннь > нь;

::Title;
`;
