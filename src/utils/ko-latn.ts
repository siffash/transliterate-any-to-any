export const koLatn = async (text: string) => {
  const Aromanize = (await import("aromanize")).default;
  return Aromanize.romanize(text);
};
