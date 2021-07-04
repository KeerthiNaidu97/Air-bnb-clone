const { default: axios } = require("axios");

const functions = {
    add: (num1,num2) => num1 + num2,
    isNull: () => null,
    checkValue: (x) => x,
    createUser: () => {
        const user = {
            firstName = 'Keerthi',
        };
        user.lastName = 'Naidu';
        return user;
    },
    fetchUser: () => {
        axios
        .
    }
};

module.exports = functions;