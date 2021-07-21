//Generate the HTML texts for the HTML output file 
module.exports = { 
    generateHtml (teamProfileArr) {
        const holdHtmlArr = [];

        const htmlHeaderAndTitleBar = `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital@1&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../src/style.css">
</head>

<body>
    <div class="title-bar">
        <h1> ${teamProfileArr[0]} Roster</h1>
    </div>
    <div class="card-container">
    `;
        holdHtmlArr.push(htmlHeaderAndTitleBar);

        for(let i =1; i < teamProfileArr.length; i++) {
            let teamMemberHtml = ` 
            <div class="team-member-card">
            <div class="team-member-card-top">
            <h2>${teamProfileArr[i].name}</h2>
            `;

            if(teamProfileArr[i].role === "Manager") {
                teamMemberHtml += `<h2 class="bi bi-cup">${teamProfileArr[i].role}</h2>`;
            } else if (teamProfileArr[i].role === "Engineer") {
                teamMemberHtml += `<h2 class="bi bi-lightbulb">${teamProfileArr[i].role}</h2>`;
            } else if (teamProfileArr[i].role === "Intern") {
                teamMemberHtml += `<h2 class="bi bi-eyeglasses">${teamProfileArr[i].role}</h2>`;
            };
            teamMemberHtml +=`
            </div>
            <div class="team-member-card-bottom">
            <p>Employee ID: ${teamProfileArr[i].id}</p>
            <p>Email: <a href="mailto: ${teamProfileArr[i].email}">${teamProfileArr[i].email}</a></p>
            `;
            if(teamProfileArr[i].officeNumber) {
                teamMemberHtml += `<p>Office Number:${teamProfileArr[ i ].officeNumber}</p>`;
            } else if (teamProfileArr[i].githubUsername) {
                teamMemberHtml += `<p>GitHub: <a href = "https://github.com/${teamProfileArr[ i ].githubUsername}">${teamProfileArr[ i ].githubUsername}</a></p>`;
            } else if (teamProfileArr[i].school) {
                teamMemberHtml += `<p>School:<br>${teamProfileArr[ i ].school}</p>`;
            };
            teamMemberHtml += `
                </div>
            </div>
            `;
            holdHtmlArr.push(teamMemberHtml);   
        };
        const htmlFooter = `
                </div>   
            </body>
         </html>
            `;
             holdHtmlArr.push(htmlFooter);

             return holdHtmlArr;
            
    }
};