function isEnoughCapacity(products, containerSize) {
  const kei = Object.values(products);
  let total = 0;
  {
    for (const ke of kei) {
      total += ke;
    }
    return total <= containerSize;
  }
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); //
