function props([prop1, name, prop2, age, prop3, gender]) {

    let obj = {};
    obj[prop1] = name;
    obj[prop2] = age;
    obj[prop3] = gender;

    console.log(obj);
}

props(['name', 'Pesho', 'age', '23', 'gender', 'male']);