import { makeBookSubsets, updateBookCounts } from './mathUtils';
import { getDiscountRate } from './calculateCartTotals';

const checkBookCountIsZero = (subset, bookCurrentCountsArray ) => {
  return subset.every(subset => bookCurrentCountsArray[subset] > 0)
}

export const computeBestPriceCents = (uniqueBookCountsArray, pricesCentsArray) => {
  const lookUpKey = new Map();
  const booksAllPossibleSubsetsOfIndex = makeBookSubsets(uniqueBookCountsArray.length);

  const findCheapestCombination = (bookCurrentCountsArray) => {
    const bookCurrentCountsArrayKey = bookCurrentCountsArray.join(',');
    if (lookUpKey.has(bookCurrentCountsArrayKey)) return lookUpKey.get(bookCurrentCountsArrayKey);
    
    if (bookCurrentCountsArray.every(bookCount => bookCount === 0)) {
      return 0;
    }
    
    let minPrice = Infinity;

    for (const subset of booksAllPossibleSubsetsOfIndex) {
      
      if (!checkBookCountIsZero(subset, bookCurrentCountsArray )) continue;

      const bookSubsetSize = subset.length;
      const bookSubsetPrice = subset.reduce((previousBookSum, index) => previousBookSum + pricesCentsArray[index], 0);
      
      const percent = getDiscountRate(bookSubsetSize);
      const discounted = Math.round(bookSubsetPrice * (100 - percent) / 100);

      const total = discounted + findCheapestCombination(updateBookCounts(bookCurrentCountsArray, subset));
      
      if (total < minPrice) {
        minPrice = total;
      }
    }

    lookUpKey.set(bookCurrentCountsArrayKey, minPrice);
    return minPrice;
  };

  return findCheapestCombination(uniqueBookCountsArray);
};
