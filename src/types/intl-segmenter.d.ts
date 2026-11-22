declare module "intl-segmenter" {
  export interface SegmenterOptions extends Intl.SegmenterOptions {
    maxChunkLength?: number;
  }

  export class Segmenter {
    constructor(language?: string | string[] | Intl.Locale, options?: SegmenterOptions);

    segment(input: string): Iterable<Intl.SegmentData>;

    static getSegments(
      input: string,
      language?: string | string[] | Intl.Locale,
      options?: SegmenterOptions,
    ): Intl.SegmentData[];

    findSafeBreakPoint(chunk: string, granularity: string): number;
  }
}
