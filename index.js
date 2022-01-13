// Write your solution in this file!
const employee = {
    name: "Mike",
    streetAddress: "3 Square Circle"
}

function updateEmployeeWithKeyAndValue (employee, key, value) {
    const newObj = {...employee};
    newObj[key] = value;
    return newObj;
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}



function deleteFromEmployeeByKey (employee, key, value) {
    const otherObj = {...employee};
    delete otherObj[key];
    return otherObj
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    employee[key] = value;
    delete employee[key];
    return employee
}