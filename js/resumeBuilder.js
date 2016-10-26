/*var awesomeThougths = "I am Jose and I am AWESOME!";
console.log(awesomeThougths);

funThoughts = awesomeThougths.replace("AWESOME", "FUN");
$("#main").append(funThoughts);*/

//var name = "Jose Septien";
//var formatterdName = HTMLheaderName.replace("%data%", name);
//var role = "Student and Programer";
//var formatterdRole = HTMLheaderRole.replace("%data%", role);

/*$("#main").prepend(formatterdRole);
$("#main").prepend(formatterdName);*/

var bio = {
    "name": "Jose Septien",
    "role": "Student and Programer",
    "contacts": {
        "mobil": "473-738-5512",
        "email": "jaseptienh@gmail.com",
        "twitter": "@jaSeptienh"
        "github": "Septien",
        "location": "Guanajuato"
    },
    "picture": "./images/fry.jpg",
    "welcomeMessage": "Welcome! This is my resume.",
    "skills": [
        "C/C++", "Pyhton", "JS", "Processing", "HTML/CSS."
    ]
};

var formatterdName = HTMLheaderName.replace("%data%", bio.name);
var formatterdRole = HTMLheaderRole.replace("%data%", bio.role);

var work = {};

work.position = "Student";
work.employer = "None";
work.years = 5;
work.city = "Salamanca";

var education = {
    "schools": [
    {
        "name": "University of Guanajuato",
        "location": "Guanajuato, Gto.",
        "degree": "BA",
        "majors": ["Eng"],
        "dates": 2016,
        "url": "http://www.ugto.mx"
    }
    ],
    "onlineCourses": [
    {
        "title": "6.00.1x: Introduction to Computer Science and Programming using Pyhton.",
        "school": "MITx",
        "dates": 2016,
        "url": "https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-8"
    },
    {
        "title": "JavaScript Basics",
        "school": "Udacity",
        "dates": 2016,
        "url": "https://www.udacity.com/course/javascript-basics--ud804"
    },
    {
        "title": "6.00.2x: Introduction to Coputational Thinking and Data Science",
        "school": "MITx",
        "dates": 2016,
        "url": "https://www.edx.org/course/introduction-computational-thinking-data-mitx-6-00-2x-4"
    }
    ]
}