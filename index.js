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

//importing generate function
const { writeFile, copyFile } = require('./util/generate-site');
const generatePage = require('./src/page-template');
//Array to hold team members
let teamProfileArr = [];
