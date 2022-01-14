export const getMonthDifference = (from: Date, to: Date): number => to.getMonth() - from.getMonth() + (12 * (to.getFullYear() - from.getFullYear()))
export const dateToString = (date: Date) => date.toLocaleDateString("sv-SE")
export const monthsAndYearsToString = (months: number): string => months <= 12 ? `${months} months` : `${Math.floor(months / 12)} years and ${months % 12} months`