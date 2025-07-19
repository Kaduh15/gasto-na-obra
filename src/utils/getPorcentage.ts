export function getPorcentage(value: number, total: number): string {
  return ((value / total) * 100).toFixed(2) + '%';
}