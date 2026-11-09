export const plLatnRuRules = `
::Null;

[ľĽ] { o > ö;
[ľĽ] { O > Ö;

ʲ A > Я;
ʲ E > Е;
ʲ O > Ё;
ʲ U > Ю;
ʲ [aA] > я;
ʲ [eE] > е;
ʲ [oO] > ё;
ʲ [uU] > ю;
[:Lu:] { ʲ > Ь;
ʲ } [:Lu:] > Ь;
ʲ > ь;
`;
