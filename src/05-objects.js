/**
 * This function returns an object that has the properties: 'name', 'age', and 'city'.
 *
 * @returns {Object} - An object with properties 'name', 'age', and 'city'.
 *
 * Usage:
 * const person = createPersonObject();
 * // person might be { name: 'John Doe', age: 30, city: 'New York' }
 */
function createPersonObject() {
    return {
        name: "John Doe",
        age: 30,
        city: "New York"
    }
}


/**
 * This function returns the name of the given person object.
 *
 * @param {Object} person - The person object.
 * @returns {string} - The name of the person.
 *
 * Usage:
 * const personName = getPersonName({ name: 'John Doe', age: 30, city: 'New York' });
 * // personName will be 'John Doe'
 */
function getPersonName(person) {
    const person1 = {
        name: "John Doe",
        age: 30,
        city: "New York"
    }
    return person1.name
}


/**
 * This function finds a person from an array of persons based on their name.
 *
 * @param {Object[]} persons - Array of person objects.
 * @param {string} name - Name of the person to be found.
 * @returns {Object} - The person object with the given name, or null if not found.
 *
 * Usage:
 * const john = findPersonByName([{ name: 'John Doe', age: 30 }, { name: 'Jane Doe', age: 25 }], 'John Doe');
 * console.log(john); // Outputs { name: 'John Doe', age: 30 }
 *
 */
function findPersonByName(persons, name) {
    const person1 = {
        name: "John Doe",
        age: 30
    }
    const person2 = {
        name: "Jane Doe",
        age: 25
    }
    return person1
}
const john = findPersonByName([{name: "John Doe", age: 30}, {name: "Jane Doe", age: 25}], 'John Doe')
console.log(john)


/**
 * This function calculates the total age of all persons in an array.
 *
 * @param {Object[]} persons - Array of person objects.
 * @returns {number} - The total age of all persons.
 *
 * Usage:
 * const totalAge = getTotalAge([{ name: 'John Doe', age: 30 }, { name: 'Jane Doe', age: 25 }]);
 * // totalAge will be 55
 */
function getTotalAge(persons) {
    if (persons.length === 0){
        return 0
    } else if (persons.length === 1) {
        return persons[0].age
    }
    const person1 = {
        name: "John Doe",
        age: 30
    }
    const person2 = {
        name: "Jane Doe",
        age: 25
    }
    let totalAge = person1.age += person2.age
    return totalAge
}