const { User } = require('../models');

const valueNotNullNorEmpty = (value) => {
    return (value && value.trim() !== "");
}

const checkIfNewUsername = (username) => {
    User.findOne({ 
        where: {
                 username: username
        }
    }).then((user) => {
        if(user)
          return false;
        return true;
    }).catch((error) => {
        console.error(error);
        return false;
    });
}

const isUsernameValid = (username) => {
    return valueNotNullNorEmpty(username) && checkIfNewUsername(username);
}

const isPasswordValid = (password) => {
    return valueNotNullNorEmpty(password);
}

const isFirstNameValid = (firstname) => {
    return valueNotNullNorEmpty(firstname);
}

const isLastNameValid = (lastname) => {
    return valueNotNullNorEmpty(lastname);
}

const createUser = (username, password, firstname, lastname) => {
    if(isUsernameValid(username) && 
       isPasswordValid(password) && 
       isFirstNameValid(firstname) && 
       isLastNameValid(lastname)) {
        User.create({
            username: username,
            password: password,
            firstname: firstname,
            lastname: lastname
        }).then((user) => {
            return({ user: user });
        }).catch((error) => {
            return({ error: error });
        });
    } else {
        return({ error: "Values provided are incorrect" });
    }
};

const findUsernameAndPassword = (username, password) => {
    if(valueNotNullNorEmpty(username) && 
       isPasswordValid(password)) {
        User.findOne({
            where: {
                username: username,
                password: password
            }
        }).then((user) => {
            if(user) 
                return({ user: user });
            return({ error: "User not found" });
        }).catch((error) => {
            console.error(error);
            return({ error: error });
        })
    } else {
        return({ error: "Information provided is not valid" });
    }
}

module.exports = { createUser, findUsernameAndPassword };