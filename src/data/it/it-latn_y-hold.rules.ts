export const itLatnYHoldRules = `
::NFC;

[^aeiouAEIOU] { y } [^aeiouAEIOU] > ɏ;
[^aeiouAEIOU] { Y } [^aeiouAEIOU] > Ɏ;
`;
