
var data = '%data%';
var url = '%url%';

// inicio do Work

var work = {
  "jobs": [
    {
      "employer": "Apois à Processamento",
      "title": "Politec LTDA / Indra Company.",
      "url": "http://www.indracompany.com/",
      "location": "Maceió-AL",
      "datesWorked": "2006",
      "description": "Prestador de serviço à Secretaria de Estado da Fazenda de Alagoas"
    },
    {
      "employer": "Técnico de Infra-estrutura",
      "title": "CPM Braxis",
      "url": "http://www.capgemini.com",
      "location": "Maceió-AL",
      "datesWorked": "2010",
      "description": "Prestador de serviço à Secretaria de Estado da Fazenda de Alagoas"
    },
    {
      "employer": "Técnico de Infra-estrutura PL",
      "title": "Capgemini",
      "url": "http://www.capgemini.com",
      "location": "Maceió-AL",
      "datesWorked": "2011",
      "description": "Prestador de serviço ao Detran do estado de Alagoas"
    }
  ]
};
work.display = function(){    // === function displayWork (){}
  for(var job in work.jobs){
    if (work.jobs.hasOwnProperty(job)){

      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[job].employer).replace(url, work.jobs[job].url);
      var formattedTitle = HTMLworkTitle.replace(data, work.jobs[job].title).replace(url, work.jobs[job].url);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);
      var formattedWorkLocation = HTMLworkLocation.replace(data, work.jobs[job].location);
      $(".work-entry:last").append(formattedWorkLocation);
      var formattedDate = HTMLworkDates.replace(data, work.jobs[job].datesWorked);
      $(".work-entry:last").append(formattedDate);
      var formattedDescription = HTMLworkDescription.replace(data, work.jobs[job].description);
      $(".work-entry:last").append(formattedDescription);

    }
  }
};
work.display();   // notação de ponto (.).

// fim do work

// inicio do projects

var projects = {
  "myProjects": [
    {
      "title": "Home Town",
      "github": "https://github.com/irvingmarcel/home-town",
      "description": "Projeto de conclusão do curso de HTML e CSS " +
      "oferecido pela Udacity no Nanodegree Desenvolvedor Web Front-End.",
      "images": [
        "images/proj01_1x.jpg"
      ]
    },
    {
      "title": "Projeto Portfolio",
      "github": "https://github.com/irvingmarcel/projeto-portfolio",
      "description": "Projeto de conclusão do curso de Imagens Responsivas " +
      "oferecido pela Udacity no Nanodegree Desenvolvedor Web Front-End.",
      "images": [
        "images/proj02_1x.jpg"
      ]
    }
  ]
};
projects.display = function() {
  for (var project in projects.myProjects) {
    if (projects.myProjects.hasOwnProperty(project)){

      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace(data, projects.myProjects[project].title).replace(url, projects.myProjects[project].github);
      $(".project-entry:last").append(formattedTitle);

      var formattedprojectURL = HTMLprojectURL.replace(data, projects.myProjects[project].github).replace(url, projects.myProjects[project].github);
      $(".project-entry:last").append(formattedprojectURL);

      var formattedDescription = HTMLprojectDescription.replace(data, projects.myProjects[project].description);
      $(".project-entry:last").append(formattedDescription);

      if (projects.myProjects[project].images.length > 0) {
        for (var image in projects.myProjects[project].images) {
          if (projects.myProjects[project].images.hasOwnProperty(image)){

            var formattedImage = HTMLprojectImage.replace(data, projects.myProjects[project].images[image]);
            $(".project-entry:last").append(formattedImage);
          }

          }
      }

    }
  }
};
projects.display();

// fim do projects

// inicio do bio

var bio = {
  "name": "Irving Marcel",
  "contacts": {
    "mobile": "55(082)988259050",
    "email": "irvingmarcel@gmail.com",
    "github": "irvingmarcel",
    "twitter": "@irvingmarcel",
    "location": "Maceió-AL - Brasil"
  },
  "skills": ["HTML", "CSS", "JavaScript", "Java"],
  "interesses": ["Desenvolvimento Front-End"]
};
bio.display = function(){
  var formattedName = HTMLheaderName.replace(data, bio.name);
  $("#header").prepend(formattedName);

  var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
  $("#topContacts").append(formattedMobile);
  var formattesEmail = HTMLemail.replace(data, bio.contacts.email);
  $("#topContacts").append(formattesEmail);
  var formattedGit = HTMLgithub.replace(data, bio.contacts.github);
  $("#topContacts").append(formattedGit);
  var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
  $("#topContacts").append(formattedTwitter);
  var formatterdLocation = HTMLlocation.replace(data, bio.contacts.location);
  $("#topContacts").append(formatterdLocation);

  $("#header").append(HTMLskillsStart);
  for (skill in bio.skills){
    if (bio.skills.hasOwnProperty(skill)){
      if(bio.skills[skill].length > 0){
        var formattedSkill = HTMLskills.replace(data, bio.skills[skill]);
        $(".center-content:last").append(formattedSkill);
      }
    }
  }
  var formattedInteresses = HTMLAboutMe.replace(data, bio.interesses);
  $("#aboutMe").append(formattedInteresses);
};
bio.display();

// fim da bio

// inicio do education OK

var education = {
  "schools": [
    {
      "name": "Conhecimento Digital",
      "location": "Maceió-AL",
      "degree": "Intermediário",
      "majors": ["Java", "Orientação à Objeto"],
      "dates": "2007",
      "url": "http://www.conhecimentodigital.com.br",
      "onlineCourses": [
        {
          "title": "Nanodegree Desenvolvedor Web Front-End",
          "school": "Udacity",
          "date": "2016",
          "url": "http://www.udacity.com"
        }
      ]
    },
    {
      "name": "FAL - Faculdade de Alagoas",
      "location": "Maceió-AL",
      "degree": "Superior",
      "majors": ["Sistemas de Informação"],
      "dates": "2008",
      "url": "http://www.estacio.br"
    }
  ]
};
education.display = function (){
  for (var school in education.schools){
    if (education.schools.hasOwnProperty(school)){
      $("#education").append(HTMLschoolStart);


      var formattedSchoolName = HTMLschoolName.replace(url, education.schools[school].url).replace(data, education.schools[school].name);
      $(".education-entry:last").append(formattedSchoolName);

      var formattedSchoolLocation = HTMLschoolLocation.replace(data, education.schools[school].location);
      $(".education-entry:last").append(formattedSchoolLocation);

      var formattedSchoolDegree = HTMLschoolDegree.replace(data, education.schools[school].degree);
      $(".education-entry:last").append(formattedSchoolDegree);

      if(education.schools[school].majors.length > 0){
        for(var major in education.schools[school].majors){
          var formatedMajors = HTMLschoolMajor.replace(data, education.schools[school].majors[major]);
          $(".education-entry:last").append(formatedMajors);
        }
      }

      var formattedSchoolDates = HTMLschoolDates.replace(data, education.schools[school].dates);
      $(".education-entry:last").append(formattedSchoolDates);
      var formattedSchoolsURL = HTMLschoolsURL.replace(url, education.schools[school].url).replace(data, education.schools[school].url);
      $(".education-entry:last").append(formattedSchoolsURL);

      if(education.schools[school].onlineCourses.length > 0){
        for(var course in education.schools[school].onlineCourses){
          var formattedonlineSchool = HTMLonlineSchool.replace(url, education.schools[school].onlineCourses[course].url).replace(data, education.schools[school].onlineCourses[course].school);
          $(".education-entry:last").append(formattedonlineSchool);
          var formattedonlineTitle = HTMLonlineTitle.replace(data, education.schools[school].onlineCourses[course].title);
          $(".education-entry:last").append(formattedonlineTitle);
          var formattedonlineDate = HTMLonlineDates.replace(data, education.schools[school].onlineCourses[course].date);
          $(".education-entry:last").append(formattedonlineDate);
          var formattedonlineURL = HTMLonlineURL.replace(url, education.schools[school].onlineCourses[course].url).replace(data, education.schools[school].onlineCourses[course].url);
          $(".education-entry:last").append(formattedonlineURL);
        }
      }

    }
  }
};
education.display();

//fim do Education
