Core Types

1. number || ex. 1, 5.3, -10 || All Numbers, no differentiation between integers or floats
2. string || 'Hi', "Hi",  || All text values
3. boolean || true, false || Just these two, no truthy or falsy values

4. Object || {age: 30} || Any Javascript object, more specific types (type of object) are possible.

5. Array || [1,2,3] || Any javascript array, type can be flexible or strict 

6. Tuple || [1, '2'] || Added by TypeScript: Fixed Length Array

7. Enum || enum { NEW, OLD } || added by typescript: automatically enumerated global constant identifiers

8. Union Types || combine(input1: number | string, input2: number | string) || combining either or types in a variable

9. Literal Types || resultConversion: "as-number" | "as-text" || mix of union types

10. Type Alias/ Custom Types || 
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

|| 