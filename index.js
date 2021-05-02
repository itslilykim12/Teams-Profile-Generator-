//Application Dependencies
const fs = require('fs');
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

//importing layout template file
const generatePage = require('./src/page-template');
//Array to hold team members
const teamProfileArr = {
    manager: [],
    engineer: [],
    intern: [],
}
const InternQuestions = () => {
    console.log(`
	=================
	Add a New Intern
	=================`);
    return inquirer.prompt(InternQuestions)
    .then((internData) => {
        const {
            internName, 
            internId, 
            internEmail, 
            internSchool,
        } = internData;
        const intern = new Intern(internName, internId, internEmail, internSchool);

        teamProfileArr.interns.push(intern);
    })
    .then(EmployeeQuestions);
};

//add engineer profiles to the team profile array
const EngineerQuestions = () => {
    console.log(`
	==================
	Add a New Engineer
	==================`);
    return inquirer.prompt(EngineerQuestions)
    .then((engineerData) => {
        const {
            engineerName,
            engineerId,
            engineerEmail,
            engineerGithub,
        } = engineerData;
        const engineer = new Engineer (
            engineerName, 
            engineerId,
            engineerEmail,
            engineerGithub,
        );

        teamProfileArr.engineers.push(engineer);
    })
    .then(EmployeeQuestions);
};

const ManagerQuestions = () => {
    console.log(`
	=============
	Add a Manager
	=============`);
    return inquirer.prompt(ManagerQuestions)
    .then((managerData) => {
        const {
            managerName, 
            managerId,
            managerEmail,
            managerOfficeNum,
        } = managerData;
        const manager = new Manager (
            managerName, 
            managerId,
            managerEmail,
            managerOfficeNum,

        );
        teamProfileArr.managers.push(manager);
    });
};

 


       
function init () {
    inquirer.prompt ([
        {
            type: "input",
            message: "Welcome to Team Profile Generator!",
            name: "teamName",
            validate: teamNameInput => {
                if(teamNameInput && teamNameInput.trim().length > 0){
                    return true;
                } else {
                    console.log("Must enter your team Name!");
                    return false;
                };
            }
        }
    ])
    .then(function(data) {
        const teamName = data.teamName;
        teamProfileArr.push(teamName);
        addManager ();

    });
};
//function call to initialize application 
init ();