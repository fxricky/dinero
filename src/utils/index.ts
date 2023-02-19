export const extractEmojiCodeFrmString = (str: string) => {
  const emojiPattern =
    /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F900}-\u{1F9FF}\u{1F1E6}-\u{1F1FF}]/gu;

  return str.match(emojiPattern)?.map(emoji => {
    return emoji.codePointAt(0);
  });
};

export const convertEmojiCodeToEmoji = (emojiCode: number) => {
  return String.fromCodePoint(emojiCode);
};
