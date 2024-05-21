export function sinceToYears(since?: number) {
  const sinceYear = (since ?? 0)
  if (sinceYear === 0) return 0
  
  return 2024 - (since ?? 0)
}
