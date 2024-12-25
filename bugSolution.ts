function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both parameters must be numbers');
  }
  return a + b;
}

let result1 = addSafe(1, 2); // Correct usage

//The following line throws an error because of the type guard in addSafe function.
//let result2 = addSafe(1, "2"); 