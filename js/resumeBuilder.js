var bio = {
    "name" : "Hamza Ali TAS",
    "role" : "Software Devoloper",
    "contacts" : {
        "mobile" : "+905545077657",
        "email" : "hamzalitas95@gmail.com",
        "github" : "hamzali",
        "twitter" : "@hamzali",
        "location" : "Istanbul/Turkey"
    },
    "imageURL" : "images/profile.jpg",
    "message" : "Hey dudes!",
    "skills" : [
        "love",
        "magic",
        "ice"
    ]
};

var education = {
    "schools" : [
        {
            "name" : "Istanbul Technical University",
            "degree" : "BS",
            "dates" : "2015 - 2020",
            "location" : "Istanbul",
            "majors" : ["Comp. eng."],
            "url" : "https://www.itu.edu.tr"
        },

        {
            "name" : "Selcuk University",
            "degree" : "BS",
            "dates" : "2013 - 2015",
            "location" : "Konya",
            "majors" : ["Comp. eng."],
            "url" : "https://www.selcuk.edu.tr"
        }
    ],

    "onlineClasses" : [
        {
            "title" : "JavaScript",
            "school" : "Udacity",
            "dates" : "10 march - 20 august",
            "url" : "https://www.udacity.com"
        },

        {
            "title" : "Python",
            "school" : "Coursera",
            "dates" : "15 may - 20 march",
            "url" : "https://www.coursera.com"
        }

    ]
};


var projects = {
    "projects" : [
        {
            "title" : "Race Game",
            "dates" : "2013 - 2014",
            "description" : "a race game in unity",
            "image" : [
                    "images/fry.jpg"
            ]
        }
    ]
};

var work  = {
    "jobs" : [
        {
            "employer" : "Pixar",
            "title" : "Lead Graphics Programmer",
            "location" : "California",
            "dates" : "2017 - 2020",
            "description" : "Lovely awesome job"

        }
    ]
};











/*
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
formatedSkills = HTMLskills.replace("%data%", bio.skills.join(' '));

$("#header").prepend(formatedSkills);
$("#header").prepend(formatedLoc);
$("#header").prepend(formatedTwitter);
$("#header").prepend(formatedGithub);
$("#header").prepend(formatedEmail);
$("#header").prepend(formatedmobile);
$("#header").prepend(HTMLcontactGeneric);
$("#header").prepend(formatedMsg);
$("#header").prepend(image);
$("#header").prepend(formatedRole);
$("#header").prepend(formatedName);
*/
