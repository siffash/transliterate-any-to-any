export const svLatnBalticPreRules = `
::NFC;

[^[:L:][:M:]] { G } [eiyäöEIYÄÖ] > J;
[^[:L:][:M:]] { g } [eiyäöEIYÄÖ] > j;
`;
