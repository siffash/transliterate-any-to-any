import { useEffect, useState } from "react";
import { Language, languages, Spelling } from "transliterate-any-to-any";
import { AUTO_DETECT, type SourceLanguage } from "../constants";

// Whether a code from the URL or localStorage is one of ours (rather than,
// e.g., a mistyped link's, which the language selects can't show)
export const isLanguage = (code: string | null): code is Language =>
  !!code && Object.hasOwn(languages, code);

export const isSourceLanguage = (code: string | null): code is SourceLanguage =>
  code === AUTO_DETECT || isLanguage(code);

export const isSpelling = (value: string | null): value is Spelling =>
  value === "orthographic" || value === "established";

const getParams = () => {
  const params = new URLSearchParams(window.location.search);
  const from = params.get("from");
  const to = params.get("to");
  const paramFrom = isSourceLanguage(from) ? from : null;
  const paramTo = isLanguage(to) ? to : null;
  const paramText = params.get("text") || "";
  // The app's own URLs have the spelling exactly where it matters (see getUrlParams)
  const spelling = params.get("spelling");
  const paramSpelling = isSpelling(spelling) ? spelling : null;
  return { paramFrom, paramTo, paramText, paramSpelling };
};

export function useQueryParams() {
  const [params, setParams] = useState(getParams);
  const [paramsChanged, setParamsChanged] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setParams(getParams());
      setParamsChanged(true);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return { params, paramsChanged, setParamsChanged };
}
