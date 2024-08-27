export function kebabToTitleCase(sentence: string) {
  return sentence
    .split("-")
    .map(
      (word) =>
        word.substring(0, 1).toUpperCase() + word.substring(1, word.length)
    )
    .join(" ");
}
