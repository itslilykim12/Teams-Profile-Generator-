const fs = require('fs');

//this function writes the html file 
const writeFile = (fileContent) => {
    return new Promise ((resolve, reject) => {
        fs.writeFile("./dist/index.html", fileContent, (err) => {
            //if there is an error, reject the Promise and send the error to the Promise's `.catch ()` method
            if (err) {
                reject (err);
                return;
            }
            //if everything went well, resolve the Promise and send the successful data to the `.then ()` method
            resolve ({
                ok: true,
                message: "File Created!",
            });
        });
    });
};
//copying file 
const copyFile = () => {
    return new Promise ((resolve, reject) => {
        fs.copyFile('./src/style.css','./dist/style.css', err => {
            if (err) {
                reject (err);
                return;
            }
            resolve ({
                ok: true,
                message: "Stylesheet Created!"
            });
        });
    });
};

module.exports = { writeFile, copyFile };