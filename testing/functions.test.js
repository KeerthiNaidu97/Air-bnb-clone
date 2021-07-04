const functions = require("./functions");

test("2 + 2 to be equal to 4", () => {
    expect(functions.add(2,2)).toBe(4);
});

test("Should return null", () => {
    expect(functions.isNull()).toBeNull();
});

test("Should be a Falsy value", () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});

test("Username should be Keerthi Naidu", () => {
    expect(functions.createUser()).toEqual({
        firstName: "Keerthi",
        lastName: "Naidu",
    });
});

test ("Admin should be in the list of names", () => {
    const usernames = ["Brad, " Peter". "Admin"];
    expect(usernames).toContain("Admin";)
})