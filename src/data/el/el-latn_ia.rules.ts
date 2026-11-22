export const elLatnIaRules = `
::NFD;

[^[:L:][:M:]] { Ι } [ΑΕαε] > Y;
[^[:L:][:M:]] { ι } [ΑΕαε] > y;
`;
