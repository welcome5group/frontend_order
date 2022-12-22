export const useDateFilter = (data: any, num: number) => {
  if (num === 2) {
    const paymentDate = data?.map((item: { createdAt: string; }) => item.createdAt.split('T')[0].split('-')[2]);
    const paymentDateFiltered: string[] = paymentDate.filter((item: string, idx: number) => paymentDate.indexOf(item) === idx)

    return paymentDateFiltered
  } else {
    const paymentDate = data?.map((item: { createdAt: string; }) => item.createdAt.split('-')[num]);
    const paymentDateFiltered: string[] = paymentDate.filter((item: string, idx: number) => paymentDate.indexOf(item) === idx)

    return paymentDateFiltered
  }
}