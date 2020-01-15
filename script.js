const students = [{
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
];

const createStudentComponentPassing = (studentsObj) => {
    return `
    <div class="student">
        <h1 class="xx-large passing">${name}</h1>
        <section class="bordered dashed section--padded">${subject}</section>
        <aside class="pushRight">${info}</aside>
    </div>
    `
};
const studentComponent = document.querySelector("#container");


const createStudentComponent = (studentsObj) => {

    for (let i = 0; i < students.length; i++) {
    
        let student = students[i];
        console.log(studentComponent);
        if (student.score >= 60) {
            studentComponent.innerHTML +=`
            <div class="student">
                <h1 class="xx-large passing">${student.name}</h1>
                <section class="bordered dashed section--padded">${student.subject}</section>
                <aside class="pushRight">${student.info}</aside>
            </div>`
            console.log(studentComponent + "passing");
        } else {

            studentComponent.innerHTML += `
            <div class="student">
                <h1 class="xx-large failing">${student.name}</h1>
                <section class="bordered dashed section--padded">${student.subject}</section>
                <aside class="pushRight">${student.info}</aside>
            </div>`
        }
    }
    

};

createStudentComponent(students);


// for (let i = 0; i < students.length; i++) {
    
//     let student = students[i];
//     console.log(studentComponent);
//     if (student.score >= 60) {
//         studentComponent.innerHTML += createStudentComponentPassing(
//             student.name,
//             student.subject,
//             student.info
//         );
//         console.log(studentComponent + "passing");
//     } else {
//         studentComponent.innerHTML += createStudentComponentFailing(
//             student.name,
//             student.subject,
//             student.info
//         );
//     }
// }

