Core Types

1. number || ex. 1, 5.3, -10 || All Numbers, no differentiation between integers or floats
2. string || 'Hi', "Hi",  || All text values
3. boolean || true, false || Just these two, no truthy or falsy values

Typescript's type system only helps you during development. Before the code gets compiled using tsc app.ts in CLI. 

In this lesson we created another simple add function but didnt define the core type for the inputs. if we introduce a string instead of a number as we expect then it breaks. To fix this we add the type to the input using the : number 

ex. function add(n1: number, n2: number){
    return n1 + n2;
}