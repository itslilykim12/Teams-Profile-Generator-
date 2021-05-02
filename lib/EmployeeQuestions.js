module.exports = [
    {
        type: 'list',
        name: "Choices",
        message: "Please choose an option below.",
        choices: ["Add an Engineer", "Add an Intern", "None"],
        validate: ChoicesInput => {
            if(ChoicesInput === "Add an Engineer " || ChoicesInput === "Add an Intern"){
                return true;
            } else if(ChoicesInput === "None") {
                return true;
            } else {
                console.log("Must choose an option!");
                return false;
            };
        },

    },
];