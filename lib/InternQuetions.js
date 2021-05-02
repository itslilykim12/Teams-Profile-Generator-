module.exports = [
    {
        type: 'input',
        name: 'intern name',
        message: "Please enter the intern's name.",
        validate: internNameInput => {
            if (internNameInput && internNameInput.trim().length > 0) {
                return true;
            } else {
                console.log("Enter intern's name!");
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'intern id',
        message: "Please enter intern's id number.",
        validate: internIdInput => {
           if(internIdInput && internIdInput.trim().length > 0){
               return true;
           } else {
               console.log("Must enter in numerical value!");
               return false;
           };
        },
    },
    {
        type: 'input',
        name: 'intern email',
        message: "Please enter intern's email",
        validate: internEmailInput => {
            if (internEmailInput && internEmailInput.trim().length > 0 ) {
                if(/^.+@.+\..+$/gi.test(internEmailInput)) {
                    return true;
                };
            } else {
                console.log("Enter intern's email!");
                return false;
            };
        },
    },
    {
        type: 'input',
        name: 'school',
        message: "Please enter the school the intern attends.",
        validate: internSchoolInput => {
            if (internSchoolInput && internSchoolInput.trim().length > 0) {
                return true;
            } else {
                console.log("Enter intern's school!");
                return false;
            };
        },
    },
];