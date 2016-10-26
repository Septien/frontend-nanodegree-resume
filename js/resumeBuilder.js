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
    "contact": {
        "mobil": "473-738-5512",
        "email": "jaseptienh@gmail.com",
        "twitter": "@jaSeptienh",
        "github": "Septien",
        "location": "Guanajuato"
    },
    "picture": "./images/fry.jpg",
    "welcomeMessage": "Welcome! This is my resume.",
    "skills": [
        "C/C++", "Pyhton", "JS", "Processing", "HTML/CSS", "Ruby"
    ]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobil);
var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);

$("#header").append(formattedPicture);
$("#header").append(formattedWelcomeMsg);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    console.log(HTMLskillsStart);
    for (var skill in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        console.log(formattedSkill);
        $("#skills").append(formattedSkill);
    }
}

var work = {
    "jobs": [
        {
            "employer": "Cyber-Café LanHouse",
            "title": "Clerk attendance",
            "location": "Guanajuato",
            "dates": "August 2010 - August 2012",
            "description": "In charge of recieving money. Help the client with any technical issue \
            and give/help them with whatever they need."
        }
    ]
};

function displayWork() {
    if (work.jobs.length > 0) {
        if (work.hasOwnProperty('jobs')) {
            for (job in work.jobs) {
                $("#workExperience").append(HTMLworkStart);

                var formattedEmployer = "";
                if (work.jobs[job].hasOwnProperty('employer'))
                    formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
                var formattedTitle = "";
                if (work.jobs[job].hasOwnProperty('title'))
                    formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
                var formattedEmployerTitle = formattedEmployer + formattedTitle;
                $(".work-entry:last").append(formattedEmployerTitle);

                var formattedLocation = "";
                if (work.jobs[job].hasOwnProperty('location'))
                    formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
                $(".work-entry:last").append(formattedLocation);

                var formatterDates = "";
                if (work.jobs[job].hasOwnProperty('dates'))
                    formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
                $(".work-entry:last").append(formattedDates);

                var formatterDescription = "";
                if (work.jobs[job].hasOwnProperty('description'))
                    formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
                $(".work-entry:last").append(formattedDescription);
            }
        }
    }
}

displayWork();

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
    },
    {
        "title": "Intro to Relational Databases.",
        "school": "Udacity",
        "dates": 2016,
        "url": "https://www.udacity.com/course/intro-to-relational-databases--ud197"
    }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Use of neural networks to detect RGB colors.",
            "dates": 2014,
            "description": "Use a neural network to detect whether the predominant \
            color of a pixel was R, G or B.",
            "images": [
            "None",
            "None"
            ]
        }
    ]
};