export const etLatnAzRules = `
::Null;

[yY] { ä [äÄ]? > a;
[yY] { Ä [äÄ]? > A;

[bcdfghklmnprstvzšžBCDFGHKLMNPRSTVZŠŽ] { ä [äÄ]? > ya;
[bcdfghklmnprstvzšžBCDFGHKLMNPRSTVZŠŽ] { Ä [äÄ]? > YA;
`;
