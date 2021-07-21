//will need individual functions to take in team member and return the appropiate info
const createManager = function(manager) {
    return `<div class="card border-dark mb-3" style="max-width: 18rem;">
    <div class="card-header"><h2>Manager</h2></div>
    <div class="card-body text-dark">
    <h5 class="card-title">Manager: ${manager.name}</h5>
    <p class="card-text">employee id: ${manager.id}<br>email: ${manager.email}<br>extension number: ${manager.officeNumber}</p>
    </div>
</div>`
}

const createIntern = function(intern) {
    return `<div class="card border-dark mb-3" style="max-width: 18rem;">
    <div class="card-header"><h2>Intern</h2></div>
    <div class="card-body text-dark">
    <h5 class="card-title">Intern: ${intern.name}</h5>
    <p class="card-text">employee id: ${intern.id}<br>email: ${intern.email}<br>extension number: ${intern.school}</p>
    </div>
</div>`
}

const createEngineer = function(engineer) {
    return `<div class="card border-dark mb-3" style="max-width: 18rem;">
    <div class="card-header"><h2>Engineer</h2></div>
    <div class="card-body text-dark">
    <h5 class="card-title">${engineer.name}</h5>
    <p class="card-text">employee id: ${engineer.id}<br>email: ${engineer.email}<br>extension number: ${engineer.github}</p>
    </div>
</div>`
}

//create function that organizes information for the team and returns html for each type of team member inside a html template
function generateHTML(team) {

    const managerArray = [];
    const internArray = [];
    const engineerArray = [];

    for (let i = 0; i < team.length; i++) {
        let employee = team[i];
        let role = employee.getRole();

        switch (role) {
            case "Manager":
                managerArray.push(createManager(employee))
                break;

            case "Intern":
                internArray.push(createIntern(employee))
                break;

            case "Engineer":
                engineerArray.push(createEngineer(employee))
                break;
        }
    }

    return `<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="/styles.css"/>    
    <title>Employees</title>
</head>
<body>
<main>
<section>
    ${managerArray.join()}
    <hr>
    ${internArray.join()}
    <hr>
    ${engineerArray.join()}
    <hr>
</section>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>`
}

module.exports = generateHTML;