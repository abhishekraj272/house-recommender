export function paintCell(id, color) {
  document.getElementById(id).style.backgroundColor = color;
}

export function distanceBw(p1, p2) {
  return Math.sqrt(Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2));
}

export function isNotHouse(s) {
  if (!s || isHouse(s)) return false;
  return true;
}

export function isHouse(s) {
  if (s.toLowerCase().includes("house")) return true;
  return false;
}
