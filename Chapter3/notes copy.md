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

Functions as Types:
Lets us define which types of functions we want to use somehwere.

Callback:
function addAndHandle(n1: number, n2: number, cb: (num: number) => void){
  const result = n1 + n2;
  cb(result);
}

Unknown Type:

NEver Type: added to functions that is never intended to return anything. just to end or crash. usually an error. 

Summary:
1. How do we create and assign types
2. how we assign types to variables 
3. how types differ from runtime checks
4. describing the type of an overall function
5. enums and there helpful
