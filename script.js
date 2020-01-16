// Defines Object
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

// Creates h1 element for each student
const h1 = (student) => {
    if (student.score >= 60) {
        return  `<h1 class="xx-large passing">${student.name}</h1>`
    } else {
        return  `<h1 class="xx-large failing">${student.name}</h1>`
    }   
};

// Creates section element for each student
const section = (studentSubj) => `<section class="bordered dashed section--padded">${studentSubj}</section>`

// Creates aside element for each student
const aside = (studentInfo) => `<aside class="pushRight">${studentInfo}</aside>`



// Calls functions to create individual elements in a #student div for each student
const createStudentComponent = (student) => `
    <div id="student">
        ${h1(student)}
        ${section(student.subject)}
        ${aside(student.info)}
    </div>
`

//Outputs HTML to the DOM
const studentComponent = document.querySelector("#container");

// Calls function to create #divs for each student in students array
students.forEach(item => studentComponent.innerHTML += createStudentComponent(item));
