export const esLatnLtHoldRules = `
::NFC;

[bBcCdDfFgGjJkKmMpPrRsStTvVwWxXzZ] { h > h;
[bBcCdDfFgGjJkKmMpPrRsStTvVwWxXzZ] { H > H;
h > ħ;
H > Ħ;

[aeouáéóúAEOUÁÉÓÚ] { y } [^[:L:][:M:]] > ɏ;
[aeouáéóúAEOUÁÉÓÚ] { Y } [^[:L:][:M:]] > Ɏ;
`;
