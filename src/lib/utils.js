// Petit helper de concaténation de classes, sans dépendance externe.
export function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}