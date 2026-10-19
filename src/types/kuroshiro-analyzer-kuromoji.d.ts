declare module "kuroshiro-analyzer-kuromoji" {
  export interface KuromojiToken {
    surface_form: string;
    pos: string;
    pos_detail_1: string;
    basic_form: string;
    reading?: string;
    pronunciation?: string;
  }

  export default class KuromojiAnalyzer {
    constructor(config?: unknown);
    parse(text: string): Promise<KuromojiToken[]>;
  }
}
