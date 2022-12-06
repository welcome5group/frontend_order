
export const useDateFilter = (data: any, num: number) => {
  const paymentDate = data.map((item: { date: any; }) => item.date.split('-')[num]);
  const paymentDateFiltered: string[] = paymentDate.filter((item: string, idx: number) => paymentDate.indexOf(item) === idx)

  return paymentDateFiltered
}