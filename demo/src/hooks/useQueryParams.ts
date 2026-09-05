import { useEffect, useState } from "react";
import { Language } from "transliterate-any-to-any";

const getParams = () => {
  const params = new URLSearchParams(window.location.search);
  const paramFrom = params.get("from") as Language;
  const paramTo = params.get("to") as Language;
  const paramText = params.get("text") || "";
  return { paramFrom, paramTo, paramText };
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
