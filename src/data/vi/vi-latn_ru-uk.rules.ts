export const viLatnRuUkRules = `
::Null;

[:Lu:] { TH > ТХ;
TH } [:Lu:] > ТХ;
T [hH] > Тх;
t [hH] > тх;

[:Lu:] { X > КХ;
X } [:Lu:] > КХ;
X > Кх;
x > кх;

[gG] { h > h;
[gG] { H > H;
H > Х;
h > х;
`;
