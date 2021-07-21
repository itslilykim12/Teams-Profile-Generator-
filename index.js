//Application Dependencies
const fs = require('fs');
const inquirer = require('inquirer');
//importing constructor functions
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
//importing questions 
const EngineerQuestions = require('./lib/EngineerQuestions');
const ManagerQuestions = require('./lib/ManagerQuestions');
const InternQuestions = require('./lib/InternQuetions');
const holdHtml = require('./lib/html-template');

//Array to hold team members
let teamProfileArr = [];

//function that write the output HTML file 
const writeToFile = (holdHtmlArr) => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/team-profile.html", holdHtmlArr.join(""), function(err) {
            if (err) {
                reject(err);
                return;
            };
            resolve({ 
                ok: true,
                message: "File created! "
            });
        });
    });
};

function generateHtmlFile () {
    const holdHtmlArr = holdHtml.generateHtml(teamProfileArr);
    writeToFile(holdHtmlArr);
};


//Add an additional Employee questions: 
const promptEmployeeQuestion = () => {
    return inquirer.prompt([
    {
        type: 'list',
        name: "add Employees",
        message: "Please choose an option below.",
        choices: ["Add an Engineer", "Add an Intern", "None"],
    },
    ])
    .then((addEmployeesData) => { 
        if(addEmployeesData.addEmployee === "Add an Engineer") {
            return promptEngineer(teamProfile);
        } else if (addEmployeesData.addEmployee === "Add an Intern"){
            return promptIntern(teamProfile);
        } else {
            return teamProfile;
        }
    });
};
//function that prompt user answers the engineer's questions 
const promptEngineer = () => {
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
        teamProfileArr.engineer.push(engineer);
    })
    .then(promptEmployeeQuestion);
};
//prompts users with intern questions 
const promptIntern = () => {
    return inquirer.prompt(InternQuestions)
    .then((internData) => {
        const {
            internName, 
            internId, 
            internEmail,
            internSchool,
        } = internData;
        const intern = new Intern (
            internName,
            internId,
            internEmail,
            internSchool,
        );
        teamProfileArr.intern.push(intern);
    })
    .then(promptEmployeeQuestion);
};


//user prompts with manager questions 
const promptManager = () => {
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
        teamProfileArr.manager.push(manager);

        
    });
};


 
 
function init () {
    inquirer.prompt([
        {
            message: "Welcome to Team Profile Generator! Input your team name: ",
            name: "teamname"
        }
    ])
    .then(function (data) {
        const teamName = data.teamName;
        teamProfileArr.push(teamName);
        promptManager();
    });
};

init();