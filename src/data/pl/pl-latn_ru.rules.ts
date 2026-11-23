export const plLatnRuRules = `
::Null;

[ľĽ] { o > ö;
[ľĽ] { O > Ö;

ʲ A > Я;
ʲ E > Е;
ʲ O > Ё;
ʲ U > Ю;
ʲ a > я;
ʲ e > е;
ʲ o > ё;
ʲ u > ю;
[:Lu:] { ʲ > Ь;
ʲ } [:Lu:] > Ь;
ʲ > ь;
`;
