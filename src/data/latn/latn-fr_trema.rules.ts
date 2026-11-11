export const latnFrTremaRules = `
::Null;

[aAeEoO] { I [iI] > Ï;
[aAeEoO] { i [iI] > ï;

[oO] [uU] { I [iI] > Ï;
[oO] [uU] { i [iI] > ï;

[aAeEoO] { I > Ï;
[aAeEoO] { i > ï;

[oO] [uU] { I } [^aeiouyAEIOUY] > Ï;
[oO] [uU] { i } [^aeiouyAEIOUY] > ï;

[iIyY] { I [iI] > Ï;
[iIyY] { i [iI] > ï;

Ꞽ > Ï;
ꞽ > ï;
`;
