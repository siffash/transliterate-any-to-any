export const esLatnYHoldRules = `
::NFC;

[aeouáéóúAEOUÁÉÓÚ] { y } [^[:L:][:M:]] > ɏ;
[aeouáéóúAEOUÁÉÓÚ] { Y } [^[:L:][:M:]] > Ɏ;

í > ɨ;
Í > Ɨ;
`;
