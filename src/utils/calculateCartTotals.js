import { DISCOUNT_TIERS } from "../common/constants";
import { computeBestPriceCents } from "./getMinimumPrice";
import { toEuros } from "./mathUtils";

export const getDiscountRate = (size) => {
  switch (true) {
  case size >= DISCOUNT_TIERS[0].size:
    return DISCOUNT_TIERS[0].rate;
  case size === DISCOUNT_TIERS[1].size:
    return DISCOUNT_TIERS[1].rate;
  case size === DISCOUNT_TIERS[2].size:
    return DISCOUNT_TIERS[2].rate;
  case size === DISCOUNT_TIERS[3].size:
    return DISCOUNT_TIERS[3].rate;
  default:
    return 0;
  }
};


const calculateSubTotalsPrice = (books) => {
  const subTotal =books.reduce((totalAmount, book) => totalAmount + book.quantity * book.price, 0);
  return Math.round(subTotal * 100);
}


export const calculateCartTotals = (books) => {
  if (books.length === 0) return { subTotal: 0, discount: 0, total: 0 };

  const subTotalCents = calculateSubTotalsPrice(books);

  const pricesCents = books.map(book => Math.round((book.price || 0) * 100));
  const bookCounts = books.map(book => book.quantity || 0);

  const minPrice = computeBestPriceCents(bookCounts, pricesCents);

  const discount = subTotalCents - minPrice;
  
  return {
    subTotal: toEuros(subTotalCents),
    total: toEuros(minPrice),
    discount: toEuros(discount),
  };
}