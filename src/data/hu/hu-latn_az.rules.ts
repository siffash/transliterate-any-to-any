export const huLatnAzRules = `
::NFC;

G [gG]? [yY] } [AÁEÉOÓÖŐUÚÜŰ] > DY;
G [gG]? [yY] } [aáeéoóöőuúüű] > Dy;
g [gG]? [yY] } [aáeéoóöőuúüűAÁEÉOÓÖŐUÚÜŰ] > dy;

G [gG]? [yY] > D;
g [gG]? [yY] > d;

N [nN]? [yY] } [AÁEÉOÓÖŐUÚÜŰ] > NY;
N [nN]? [yY] } [aáeéoóöőuúüű] > Ny;
n [nN]? [yY] } [aáeéoóöőuúüűAÁEÉOÓÖŐUÚÜŰ] > ny;

N [nN]? [yY] > N;
n [nN]? [yY] > n;
`;
