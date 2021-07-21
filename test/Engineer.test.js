//require Manager 
const Manager = require("../lib/Manager");

// for consistancy, the properties being tested will have these defaults values:

// name = "Groovy Tom" (string)
// id = 27001 (number)
// email = "groovy@gmail.com" (string)
// github = "groovytom13" (number)
// getGithub() (returns github aka 13) (number)
// getRole (returns "Engineer") (string)
//--------------------------------------------------------------------------------

test("create github method prop on Manager subclass", () => {
    const githubTest = "groovytom13";
    const managerTest = new Manager("Groovy Tom", 27001, "groovy@gmail.com", githubTest)
    expect(managerTest.github).toEqual(githubTest);
});

test("set getRole() method prop on new manager class", () => {
    const getRoleTest = "Manager";
    const managerTest = new Manager("Groovy Tom", 27001, "groovy@gmail.com", getRoleTest);
    expect(managerTest.getRole()).toBe(getRoleTest);
});

test("set getOfficeNumber() method prop on new manager class", () => {
    const getOfficeNumberTest = 13;
    const managerTest = new Manager("Groovy Tom", 27001, "groovy@gmail.com", getOfficeNumberTest);
    expect(managerTest.getOfficeNumber()).toBe(getOfficeNumberTest);
});