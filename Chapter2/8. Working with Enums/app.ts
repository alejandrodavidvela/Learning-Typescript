// const person: {
//     name: string;
//     age: number;
// } = {

enum Role { ADMIN, READ_ONLY, AUTHOR };

    const person = {
        name: 'Alex',
        age: 30,
        hobbies: ['Sports', 'Cooking'],
        role: Role.ADMIN
    };

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN){
    console.log('is Admin')
}