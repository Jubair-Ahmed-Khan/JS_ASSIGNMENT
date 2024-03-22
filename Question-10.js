// function to group students by name
function groupStudentsByName(studentsList) {

    const studentNames = []
    const groupStudentsByName = {}

    for (const student of studentsList) {
        if (!studentNames.includes(student.name)) {
            studentNames.push(student.name);
        }
    }

    for (const name of studentNames) {
        let studentsByName = groupStudents(studentsList, name);
        groupStudentsByName[name] = studentsByName;
    }

    return groupStudentsByName;
}

// function to generate array of student ojects with same name
function groupStudents(studentList, name) {

    let groupedStudents = [];

    for (const student of studentList) {
        if (student.name === name)
            groupedStudents.push(student);
    }

    return groupedStudents;
}


// array of student objects
const students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Alice", age: 23 },
    { name: "Charlie", age: 21 },
];


console.log("Grouped Students:", groupStudentsByName(students));

/*
    Output : 

        Grouped Students: {
            Alice: [ { name: 'Alice', age: 20 }, { name: 'Alice', age: 23 } ],
            Bob: [ { name: 'Bob', age: 22 } ],
            Charlie: [ { name: 'Charlie', age: 21 } ]
        }
*/