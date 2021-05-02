module.exports = [ 
    {
        type:'input',
        name: 'manager name',
        message: "Please enter in Manager's name.",
        validate: managerNameInput => {
            if (managerNameInput && managerNameInput.trim().length > 0 ) {
                return true;
            } else {
                console.log("Must enter in name!");
                return false;
            };
        },
    },
    {
        type:"input",
        name:"Manager's ID",
        message: "Please enter in Manager's ID",
        validate: managerIdInput => {
            if(managerIdInput && managerIdInput.trim().length > 0) {
                return true;
            } else {
                console.log("Must enter in numerical value");
                return false;
            };
        },
    },

    {
        type:"input",
        name:"Manager's email",
        message: "Please enter in Manager's email address.",
        validate: managerEmailInput => {
            if (managerEmailInput && managerEmailInput.trim().length > 0) {
                if(/^.+@.+\..+$/gi.test(managerEmailInput)) {
                    return true;
                }
            } else {
                console.log("Must enter in email address!");
                return false;
            };
        },
    },
    {
        type:"input",
        name: "Manager's Office Number",
        message: "Please enter in Manager's Office Number.",
        validate: managerOfficeNumInput => {
            if (managerOfficeNumInput && managerOfficeNumInput.trim().length > 0) {
                return true;
            } else {
                console.log("Must enter in a numerical value!");
                return false;
            };
        },
    },
];