
export const toEuros = (value) => Number((value / 100).toFixed(2));

export const updateBookCounts = (BookCountsArray, subsetIndex) => {
  const nextBookCountArray = [...BookCountsArray];
  subsetIndex.forEach(index => { nextBookCountArray[index] -= 1; });
  return nextBookCountArray;
};

export const makeBookSubsets = (uniqueBookCount) => {
  const uniqueBookCountIndexArray = Array.from({ length: uniqueBookCount }, (_, i) => i);
  return uniqueBookCountIndexArray
    .reduce((previousBookIndexArray, index) => previousBookIndexArray.concat(previousBookIndexArray.map(previousBookIndexValue => previousBookIndexValue.concat(index))), [[]])
    .slice(1); 
};
