var bio = {
    name: "Hamza Ali TAS",
    role: "Software Devoloper",
    contacts: {
        mobile: "+905545077657",
        email: "hamzalitas95@gmail.com",
        github: "hamzali",
        twitter: "@hamzali",
        location: "Istanbul/Turkey"
    },
    imageURL: "images/profile.jpg",
    message: "Hey dudes!",
    skills: [
        "love",
        "magic",
        "ice"
    ]
};

var education = {
    schools: [{
            name: "Istanbul Technical University",
            degree: "BS",
            dates: "2015 - 2020",
            location: "Istanbul",
            majors: ["Comp. eng."],
            url: "http://www.itu.edu.tr"
        },

        {
            name: "Selcuk University",
            degree: "BS",
            dates: "2013 - 2015",
            location: "Konya",
            majors: ["Comp. eng."],
            url: "http://www.selcuk.edu.tr"
        }
    ],

    onlineClasses: [{
            title: "JavaScript",
            school: "Udacity",
            dates: "10 march - 20 august",
            url: "http://www.udacity.com"
        },

        {
            title: "Python",
            school: "Coursera",
            dates: "15 may - 20 march",
            url: "http://www.coursera.com"
        }

    ]
};

var projects = {
    projects: [{
        title: "Race Game",
        dates: "2013 - 2014",
        description: "a race game in unity",
        images: [
            "images/fry.jpg"
        ]
    }]
};


var formated;

projects.display = function() {

    for (project in projects.projects) {

        $("#projects").append(HTMLprojectStart);
        formated = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        formated += HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        formated += HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        for (img in projects.projects[project].images) {
            formated += HTMLprojectImage.replace("%data%", projects.projects[project].images[img]);
        }

        $(".project-entry").append(formated);
    }
};



var works = {
    jobs: [{
        employer: "Pixar",
        url: "http://www.pixar.com",
        title: "Lead Graphics Programmer",
        location: "California",
        dates: "2017 - 2020",
        description: "Lovely awesome job"
    }]
};

var displayBio = function() {
    formatedName = HTMLheaderName.replace("%data%", bio.name);
    formatedRole = HTMLheaderRole.replace("%data%", bio.role);
    image = HTMLbioPic.replace("%data%", bio.imageURL);
    formatedMsg = HTMLwelcomeMsg.replace("%data%", bio.message);
    // contacts info
    formatedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    formatedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    formatedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    formatedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    formatedLoc = HTMLlocation.replace("%data%", bio.contacts.location);
    // ~

    $("#header").append(formatedMsg);
    $("#header").prepend(image);
    $("#header").prepend(formatedRole);
    $("#header").prepend(formatedName);

    $("#topContacts").prepend(formatedLoc);
    $("#topContacts").prepend(formatedTwitter);
    $("#topContacts").prepend(formatedGithub);
    $("#topContacts").prepend(formatedEmail);
    $("#topContacts").prepend(formatedmobile);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var i = 0;
        while (i < bio.skills.length) {
            formated = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formated);
            i++;
        }
    }
};

var displayWork = function() {
    for (job in works.jobs) {
        $("#workExperience").append(HTMLworkStart);
        formated = HTMLworkEmployer.replace("%data%", works.jobs[job].employer);
        formated = formated.replace("#", works.jobs[job].url);
        formated += HTMLworkTitle.replace("%data%", works.jobs[job].title);
        formated += HTMLworkDates.replace("%data%", works.jobs[job].dates);
        formated += HTMLworkLocation.replace("%data%", works.jobs[job].location);
        formated += HTMLworkDescription.replace("%data%", works.jobs[job].description);

        $(".work-entry").append(formated);
    }
};


displayBio();
displayWork();
projects.display();


$("#mapDiv").append(googleMap);
initializeMap();


/*
    https://d3js.org/
*/
