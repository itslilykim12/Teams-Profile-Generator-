//Application Dependencies
const inquirer = require('inquirer');
//importing constructor functions
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
//importing questions 
const EmployeeQuestions = require('./lib/EmployeeQuestions');
const EngineerQuestions = require('./lib/EngineerQuestions');
const ManagerQuestions = require('./lib/ManagerQuestions');
const InternQuestions = require('./lib/InternQuetions');
const pageHtml = require('./lib/html-template');

const { writeFile, copyFile } = require('./util/generate-site');

//importing layout template file
const generatePage = require('./src/page-template');
//Array to hold team members
let teamProfileArr = [];
//Add intern profile 
function addIntern () {
    inquirer.prompt (InternQuestions)
    .then(function(data) {
        const internName = data.internName;
        const internId = data. internId;
        const internEmail = data.internEmail;
        const internSchool = data.internSchool;
        const intern = new Intern (
            internName,
            internId,
            internEmail,
            internSchool,
        );
        teamProfileArr.push(intern);

        addOptions()
    });
};

//add engineer profiles to the team profile array
function addEngineer () {
    inquirer.prompt(EngineerQuestions)
    .then(function(data) {
        const engineerName = data.engineerName; 
        const engineerId = data.engineerId;
        const engineerEmail = data.engineerEmail;
        const engineerGithub = data.engineerGithub;
        const engineer = new Engineer (
            engineerName,
            engineerId, 
            engineerEmail,
            engineerGithub,
        );
        teamProfileArr.push(engineer);
        
        addOptions()
    });
};
//add manager profiles to team profile array 
function addManager () {
    inquirer.prompt(ManagerQuestions)
    .then(function(data) {
        const managerName = data.managerName;
        const managerId = data.managerId;
        const managerEmail = data.managerEmail;
        const managerOfficeNum = data.managerOfficeNum;
        const manager = new Manager (
            managerName,
            managerId,
            managerEmail,
            managerOfficeNum,
        );
        teamProfileArr.push(manager);

        addOptions()

    });
};
//call the appropriate function based on the user's choice
function addOptions () {
    inquirer.prompt(EmployeeQuestions)
    .then(function(data){
        switch(data.Choices){
            case "Add an Engineer":
                addEngineer ();
            break;
            case "Add an Intern":
                addIntern ();
            break;
            case "None":
                generateHtmlFile ();
            break;
        };
    });
};

 function init () {
     inquirer.prompt ([
         {
             type: "input",
             name: "team Name",
             message: "Welcome to Team Profile Generator!",
             validate: teamNameInput => {
                 if(teamNameInput && teamNameInput.trim().length > 0) {
                     return true;
                 } else {
                     console.log("Must enter in Team Name!");
                     return false;
                 };
             },
            
             },

         
     ])
     .then(function(data) {
         const teamName = data.teamName;
         teamProfileArr.push(teamName);
         addManager();
     });
 };

 init ();


       
