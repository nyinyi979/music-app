export default function getDuration(duration: number | string) {
  const dur = Number(duration) / 1000;
  const div = dur / 60;
  const rem = dur % 60;
  return `${div > 1 ? (div < 10 ? `0${Math.floor(div)}` : Math.floor(div)) : "00"}:${rem > 1 ? (rem < 10 ? `0${Math.floor(rem)}` : Math.floor(rem)) : "00"}`;
}
