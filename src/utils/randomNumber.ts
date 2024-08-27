function randomNumber(from: number, to: number) {
  const range = to - from + 1;
  const random = Math.floor(Math.random() * range) + from;
  return random;
}

export default randomNumber;
