const calculateSubTotalsPrice = (books) => {
  return books.reduce((totalAmount, book) => totalAmount + book.quantity * book.price, 0);
}

const calculateDiscount = () => {
  return 0
}

export const calculateCartTotals = (books) => {
  if (books.length === 0) return { subTotal: 0, discount: 0, total: 0 };
  const subTotal = calculateSubTotalsPrice(books);
  const discount = calculateDiscount(books);
  const total = subTotal - discount;
  return { subTotal: subTotal , discount: discount, total: total };
}