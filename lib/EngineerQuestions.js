module.exports = [
    {
    type: 'input', 
    name: 'engineerName',
    message: "Please enter Engineer's name.",
    validate: engineerNameInput => {
            if(engineerNameInput && engineerNameInput.trim ().length > 0) {
                return true;
            } else {
                console.log("Must enter engineer's name!");
                return false;
            };
        },
    },
    {
        type: 'input',
        name: 'engineerID',
        message: "Please enter in Engineer's ID.",
        validate: engineerIdInput => {
           if (engineerIdInput && engineerIdInput.trim().length > 0) {
               return true;
           } else {
               console.log("Must enter engineer's ID number!");
               return false;
           };
        },
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "Please enter in engineer's email address.",
        validate: engineerEmailInput => {
            if (engineerEmailInput && engineerEmailInput.trim ().length > 0) {
                 if(/^.+@.+\..+$/gi.test(engineerEmailInput)) {
                return true;
            };
         } else {
                console.log("Must enter engineer's email address!");
                return false;
            };
        },
    },
    {
        type: 'input',
        name: 'engineerGithub',
        mesage: "Please enter in engineer's github username.",
        validate: engineerGithubInput => {
            if (engineerGithubInput && engineerGithubInput.trim().length > 0) {
                return true;
            } else {
                console.log("Enter engineer's github username!");
                return false;
            };
        },
    },
];