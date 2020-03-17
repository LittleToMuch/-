function deepFreeze(obj) {
    if(obj !== null && typeof obj === 'object') {
        let keys = Object.keys(obj)
        for(key of keys) {
            if(obj[key] !== null && typeof obj[key] === 'object') {
                deepFreeze(obj[key])
            }
        }
        Object.freeze(obj)
    }
}

let person = {
    name: "Leonardo",
    profession: {
        name: "developer"
    }
};

deepFreeze(person);

person.profession.name = "doctor";

console.log(person)