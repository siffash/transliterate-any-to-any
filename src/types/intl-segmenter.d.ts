declare module "intl-segmenter" {
  /**
   * Extends the native Intl.SegmenterOptions with the custom
   * maxChunkLength property provided by the wrapper.
   */
  export interface SegmenterOptions extends Intl.SegmenterOptions {
    maxChunkLength?: number;
  }

  export class Segmenter {
    /**
     * A high-performance wrapper around Intl.Segmenter.
     * * @param language A BCP 47 language tag, an array of tags, or an Intl.Locale instance.
     * @param options Supports all native Intl.Segmenter options, plus maxChunkLength (defaults to 100).
     */
    constructor(language?: string | string[] | Intl.Locale, options?: SegmenterOptions);

    /**
     * Lazily iterates over segments in the input string.
     * * @param input The string to be segmented.
     * @returns An iterable of segment data objects.
     */
    segment(input: string): Iterable<Intl.SegmentData>;

    /**
     * Static method that creates a Segmenter instance and eagerly returns all segments as an array.
     * * @param input The string to be segmented.
     * @param language A BCP 47 language tag, an array of tags, or an Intl.Locale instance.
     * @param options Intl.Segmenter options, including maxChunkLength.
     * @returns An array of segment data objects.
     */
    static getSegments(
      input: string,
      language?: string | string[] | Intl.Locale,
      options?: SegmenterOptions,
    ): Intl.SegmentData[];

    /**
     * Internal method used to safely chunk strings without breaking characters.
     * Exposed here in case it needs to be overridden in a subclass.
     * * @param chunk The string chunk being processed.
     * @param granularity The segmentation granularity (e.g., 'word', 'grapheme').
     */
    findSafeBreakPoint(chunk: string, granularity: string): number;
  }
}
