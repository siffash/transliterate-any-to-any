export { supportedLanguages } from "constants/languages";
export { Language } from "types/languages";
export { transliterate } from "utils/transliterate";

// *** EXPERIMENTS ***
import { RBT } from "icu-transliterator";
import { ipaZhRules } from "constants/ipa-zh.rules";
const test = async () => {
  const transliterator = RBT.fromRules(ipaZhRules);
  console.log(
    transliterator.transliterate(`
ˈlɪvərpul ˈlʌndən ˈɛdɪnbərə ˈɡlɑsgəʊ ˈkɑrdɪf ˈbɜrmɪŋəm ˈmæntʃɛstər ˈnju jɔrk ˈlɔs ˈændʒələs ˈtʃɪkəɡoʊ ˈwɑʃɪŋtən ˈsɪdnɪ ˈmɛlˌbɔrn ˈtɔkiˌoʊ ˈpɛrɪs ˈbɜrliŋ ˈbeɪdʒɪŋ ˈtʃɑrli ˈdʒoʊn ˈmɛri ˈdʒeɪms ˈeɪlɪks ˈsəˈfɪə ˈðeɪvɪd ˈændru ˈˈoʊlɪviər ˈnəʊə ˈˈɪzəbɛl ˈˈsɑfɪə ˈˈwɪljəm ˈˈoʊlɪvɪə ˈkəʊkəˈkoʊlə ˈnɑɪki ˈˈædɪdæs ˈˈstɑrbʌks ˈˈmækdənəldz ˈˈpɛpsi ˈˈɡuɡəl ˈˈæpl ˈˈæməzən ˈˈmɑɪkrəˌsɔft ˈˈfɛɪsbʊk ˈˈtʃɪpˌoʊtleɪ ˈˈkəʊstˌkoʊ ˈˈdʌŋkɪn ˈˈʃəˈnɛl ˈˈkəʊlɡeɪt ˈtəˈɹɑntoʊ ˈvænˈkuvɚ maɪˈæmi ˈhjustən siˈæɾəl ˈdæləs ˈfɪləˌdɛlfiə ˈbɜrlɪn məˈdrɪd roʊm ˈkaɪɹoʊ ˈmɑskoʊ ˈɔklənd dʒoʊˈhænɪsˌbɝɡ ˈbɹʌsəlz ˈviːnə ˈɛməli ˈmaɪkəl ˈbɛndʒəmɪn ˈʃɑɹlət ˈhɛnɹi ˈeɪvə ˈluːkəs ˈmeɪsən ˈskɑɹlət ˈeɪθən ˈævɚi ˈlɪli ˈdʒæk ˈoʊlaɪˈviə ˈeɪlɪksˈændɚ ˈtɛslə aɪˈkiə ˈsæmsʌŋ ˈsoʊni ˈnɛtˌflɪks ˈdɪzni ˈspɑɾəˌfaɪ ˈpfaɪzɚ ˈʃɛvrəˌleɪ toʊˈjoʊɾə ˈleɡoʊ ˈhʌndə ˈmeɾə ˈtɪkˌtɑk ˈsnæpˌtʃæt ˈjuːbɚ ˈɹeɪbæn ˈbɜɡɚkɪŋ ˈsʌbweɪ ˈoʊsləʊ ˈkɑpənˈheɪɡən ˈkjuˈbɛk ˈmɪlɑn ˈbjuːnəsˈaɪɹɪs mʊmˈbaɪ ˈdɛli ˈdʒəˈkɑɹtə ˈməˈnɪlə ˈkaɪɹoʊ ˈdubaɪ ˈsɪŋəˌpɔɹ ˈhɑŋˈkɑŋ ˈsoʊl ˈbæŋkɑk ˈkeɪtlɪn ˈeθən ˈdʒɛsɪkə soʊˈfiə ˌælɪɡˈzændɚ ˈpeɪpəl ˈædoʊbi ˈɔɹəkəl ˈvɛɹɪzɑn ˈnəʊkɪə ˈbɑːkˌleɪz ˈʃɛl ˈdʒɑn ˈeɪmɪ ˈtɑməs ˈhɑɹpɚ ˈluːis ˈɹaɪli ˈeɪvɚi ˈkæmɪlə ˈæbɪɡeɪl ˈɛmɪli ˈɪzəbɛl ˈmɛɹək ˈfɔɹd ˈhɒndə ˈbɛmˈweɪ ˈmɜɹsəˌdiz ˈsæmsʌŋ ˈɪntɛl ˈɔɹəkəl ˈsɪskoʊ ˈpɪksɑɹ ˈmɑɹvəl ˈnɛtfɪks ˈjuːbɚ ˈeɪɹbɪˈɛnˈbi ˈspɒtəˌfaɪ ˈɹeɪbæn ˈleɡoʊ ˈtɪkˌtɑk ˈsnæpˌtʃæt ˈhɔɹheɪ
`),
  );
  // const text = "钱";
  // console.log(await zhMk(text));
};
test();
