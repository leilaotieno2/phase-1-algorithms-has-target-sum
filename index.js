function hasTargetSum(array, target) {
  const seen = new Set();
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    if (seen.has(complement)) {
      return true;
    }
    seen.add(array[i]);
  }
  return false;
}

/* 
  Time complexity: O(n), where n is the length of the input array.
    The algorithm iterates through the array once, performing constant time
    operations (hash table insertions and lookups) on each element. Thus, the
    overall time complexity is linear in the size of the input.
*/

/* 
  Pseudocode:
  - Initialize a new empty hash set called "seen".
  - For each element "x" in the input array:
    - Calculate the complement of "x" with respect to the target value.
    - If the complement is in the "seen" hash set, return true.
    - Otherwise, add "x" to the "seen" hash set.
  - If we haven't found a complement for any element in the input array, return false.
*/

/*
  Explanation:
  This algorithm uses a hash set to keep track of previously-seen elements in the input array.
  For each element "x" in the input array, we calculate the complement of "x" with respect to
  the target value by subtracting "x" from the target. We then check if the complement is already
  in the hash set; if it is, we've found two elements that sum to the target, and we can return true.
  If the complement isn't in the hash set, we add "x" to the hash set and continue iterating through
  the input array. If we haven't found a complement for any element in the input array, we return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
