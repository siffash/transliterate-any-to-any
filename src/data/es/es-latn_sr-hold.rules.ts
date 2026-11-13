export const esLatnSrHoldRules = `
::NFC;

T [zZ] > Ƶ;
t [zZ] > ƶ;
Z } [^cptkqCPTKQ] > Ƶ;
z } [^cptkqCPTKQ] > ƶ;

[aeiouáéíóúAEIOUÁÉÍÓÚ] { x } [bcdfgklmnpqrstvzBCDFGKLMNPQRSTVZ] > s;
[aeiouáéíóúAEIOUÁÉÍÓÚ] { X } [bcdfgklmnpqrstvzBCDFGKLMNPQRSTVZ] > S;

[aeouáéóúAEOUÁÉÓÚ] { y } [^[:L:][:M:]] > ɏ;
[aeouáéóúAEOUÁÉÓÚ] { Y } [^[:L:][:M:]] > Ɏ;

[^cC] { H [uUúÚ] } [aAáÁ] > W;
[^cC] { h [uUúÚ] } [aAáÁ] > w;
`;
