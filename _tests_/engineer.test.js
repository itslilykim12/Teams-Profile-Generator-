const Engineer = require('../lib/Engineer');
//getName, getId, getEmail, getGithub
test("creates engineer object", () => {
    const engineer = new Engineer ("Matt", 2, "matt@gmail.com", "matt123");

    expect(engineer.name).toBe("Matt");
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toBe("matt123");
});

test("to get engineer's name", () => {
    const engineer = new Engineer ("Matt", 2, "matt@gmail.com", "matt123");

    expect(engineer.getName()).toBe("Matt");
});

test("get engineer's id", () => {
    const engineer = new Engineer ("Matt", 2, "matt@gmail.com", "matt123");

    expect(engineer.getId()).toEqual(2);
});

test("get engineer's email", () =>{
    const engineer = new Engineer ("Matt", 2, "matt@gmail.com", "matt123");

    expect(engineer.getEmail()).toEqual("matt@gmail.com");
});

test("get engineer's github username", () =>{
    const engineer = new Engineer ("Matt", 2, "matt@gmail.com", "matt123");

    expect(engineer.getGithub()).toBe("matt123");
});