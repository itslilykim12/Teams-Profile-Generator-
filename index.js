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
const holdHtml = require('./util/generate-site');

//Array to hold team members
const teamProfile = {
    manager: [],
    engineer: [],
    intern: [],
};
//function that write the output HTML file 
const writeToFile = (holdHtmlArr) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('.')
    })
}


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
        teamProfile.engineer.push(engineer);
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
        teamProfile.intern.push(intern);
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
        teamProfile.manager.push(manager);
    });
};
promptManager ()
.then(promptEmployeeQuestion)
.then(teamProfile => {
    return generatePage(teamProfile);
})
.then( pageHTML => {
    return writeFile(pageHTML);
})
    .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
})
.then((copyFileReponse) => {
    console.log(copyFileReponse);
})
.catch((err) => {
    console.log(err);
});
 
 
