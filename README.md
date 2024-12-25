# TypeScript Type Coercion Runtime Error

This example demonstrates a common issue in TypeScript where type coercion can lead to runtime errors that are not caught during compilation.

The `add` function is declared to accept two numbers and return a number. However, it is called with a number and a string. TypeScript's type system doesn't catch this error because it implicitly attempts type coercion. This results in a runtime error instead of a compile-time error.

The solution provides a more robust type checking approach using type guards or more restrictive function signatures to prevent such runtime errors.