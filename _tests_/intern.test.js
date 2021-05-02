const Intern = require('../lib/Intern');
//getName, getId, getEmail, getSchool

test("creates intern object", () => {
    const intern = new Intern ("Hannah", 3, "hannah@gmail.com", "Western");

    expect(intern.name).toBe("Hannah");
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toBe("Western");
});

test("get Intern's name" , () => {
    const intern = new Intern ("Hannah", 3, "hannah@gmail.com", "Western");

    expect(intern.getName()).toBe("Hannah");
});

test("get intern's id", () =>{
    const intern = new Intern ("Hannah", 3, "hannah@gmail.com", "Western");

    expect(intern.getId()).toEqual(3);
});

test("get intern's email", () =>{
    const intern = new Intern ("Hannah", 3, "hannah@gmail.com", "Western");

    expect(intern.getEmail()).toEqual("hannah@gmail.com");
}); 

test("get the school name the intern attends to", () => {
    const intern = new Intern ("Hannah", 3, "hannah@gmail.com", "Western");

    expect(intern.getSchool()).toBe("Western");
});