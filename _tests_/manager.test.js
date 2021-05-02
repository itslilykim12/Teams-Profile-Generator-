const Manager = require('../lib/Manager');
//getName, getId, getEmail, getOfficeNumber

test("creates Manager Object", () => {
    const manager = new Manager ("Rachel", 1, "rachel@gmail.com", 100);

    expect(manager.name).toBe("Rachel");
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
    
});

test("get manager's name", () => {
    const manager = new Manager ("Rachel", 1, "rachel@gmail.com", 100);

    expect(manager.getName()).toBe("Rachel");
});

test("get manager's id", () => {
    const manager = new Manager ("Rachel", 1, "rachel@gmail.com", 100);

    expect(manager.getId()).toEqual(1);
});

test("get manager's email", () => {
    const manager = new Manager ("Rachel", 1, "rachel@gmail.com", 100);

    expect(manager.getEmail()).toEqual("rachel@gmail.com");
}); 

test("get manager's office number", () => {
    const manager = new Manager ("Rachel", 1, "rachel@gmail.com", 100);

    expect(manager.getOfficeNumber()).toEqual(100);
});