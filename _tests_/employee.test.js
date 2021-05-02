const Employee = require('../lib/Employee');
//getName, getId, getEmail
test("creates an employee object", () => {
    const employee = new Employee ("Madison", 5, "madison@gmail.com");

    expect(employee.name).toBe("Madison");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("gets the Employee's name", () =>{
    const employee = new Employee ("Madison", 5, "madison@gmail.com");

    expect(employee.getName()).toBe("Madison");
});

test("gets Employee's ID", () =>{
    const employee = new Employee ("Madison", 5, "madison@gmail.com");

    expect(employee.getId()).toEqual(5);
});

test("gets Employee's email", () => {
    const employee = new Employee ("Madison", 5, "madison@gmail.com");

    expect(employee.getEmail()).toEqual('madison@gmail.com');
});