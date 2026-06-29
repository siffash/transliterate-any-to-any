export { scripts, languages } from "helpers/constants";
export { Script, Language } from "types";
export { transliterate } from "transliterate";

// *** EXPERIMENTS ***

import { transliterate } from "transliterate";
const test = async () => {
  console.log(
    await transliterate(
      "北京, 上海, 广州, 深圳, 成都, 杭州, 西安, 武汉, 南京, 重庆, 苏州, 天津, 长沙, 青岛, 昆明, 沈阳, 济南, 郑州, 福州, 厦门, 张伟杰, 李美玲, 王建国, 刘小龙, 陈志强, 杨淑珍, 赵子涵, 黄俊豪, 周嘉怡, 吴明辉, 徐婉莹, 孙博文, 马晓燕, 朱宇轩, 胡瑞麟, 郭梦琪, 何正平, 林依诺, 高振宇, 罗永康, 腾讯科技股份有限公司, 阿里巴巴集团控股有限公司, 华为技术有限公司, 百度在线网络技术有限公司, 京东集团股份有限公司, 美团点评技术有限公司, 字节跳动科技有限公司, 中国移动通信集团有限公司, 中国建设银行股份有限公司, 中国石油天然气集团有限公司, 中国平安保险集团股份有限公司, 小米科技有限责任公司, 联想集团有限公司, 比亚迪股份有限公司, 格力电器股份有限公司, 海尔智家股份有限公司, 万科企业股份有限公司, 贵州茅台酒股份有限公司, 宁德时代新能源科技股份有限公司, 携程计算机技术上海有限公司",
      { from: "zh", to: "fr" },
    ),
  );
};
test();
