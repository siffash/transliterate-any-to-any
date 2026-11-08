// Administrative units, which Revised Romanization writes after a hyphen (Eumseong-gun, Seoul-teukbyeolsi).
// Not 리: the villages known by name are written as one word (Cheongnyangni, Gwangalli)
export const UNITS = [
  "특별자치시",
  "특별자치도",
  "특별시",
  "광역시",
  "시",
  "군",
  "구",
  "읍",
  "면",
  "동",
  "도",
];

// The provinces, whose 도 is a unit (Gyeonggi-do); in other names it is an island (Ulleungdo).
// Most of them are split into a northern and a southern one (경상북도, 경상남도)
export const PROVINCES = new Set([
  "경기",
  "강원",
  "충청",
  "전라",
  "경상",
  "황해",
  "평안",
  "함경",
  "자강",
  "양강",
]);

// Words that end in a unit but are not one: 도시 (city), 장군 (general), 볶음면 (fried noodles)
export const NOT_UNITS = ["도시", "장군", "볶음면"];
