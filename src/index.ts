export { supportedLanguages } from "helpers/languages";
export { Language } from "types";
export { transliterate } from "transliterate";

// *** EXPERIMENTS ***

import { transliterate } from "transliterate";
const test = async () => {
  console.log(
    await transliterate(
      "서울, 부산, 대구, 인천, 광주, 대전, 울산, 세종, 경주, 전주, 제주, 평창, 여수, 독도, 한라산, 낙동강, 설악산, 강화도, 수원, 남산, 김철수, 이영희, 박지민, 정민준, 최서연, 강도윤, 조하윤, 윤지후, 임서윤, 한주원, 오지유, 서준호, 권다은, 황현우, 안지민, 송예준, 전하은, 홍지훈, 유서진, 양민재, 삼성전자, 현대자동차, 에스케이하이닉스, 엘지전자, 네이버, 카카오, 포스코, 대한항공, 아모레퍼시픽, 케이티, 신세계, 넷마블, 엔씨소프트, 쿠팡, 오뚜기, 농심, 한화솔루션, 씨제이제일제당, 이마트, 하이브",
      { from: "ko", to: "ka" },
    ),
  );
  //
  // console.log(
  //   checkAllSymbolsToBePresentInString(
  //     "abcdefghijklmnopqrstuvwxyzâæçêðôõøăčďęħĩŋœťũžơưɐɑɒɓɔɕɖɗɘəɚɛɜɝɟɡɢɣɤɥɦɧɨɪɫɭɯɱɲɳɵɹɽɾʀʁʂʃʈʉʊʋʌʎʏʐʑʒʔʕʝʰʱʲʷʼˈ̇ˌ̧ːˠˤ˥˧˩̝̟̥̩̪̯̃̊͡βθχẽ",
  //     ``,
  //   ),
  // );
};
test();
