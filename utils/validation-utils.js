const isPositiveNumber = (value) => {
    if(typeof value === 'number') {
        return (Number.isInteger(value) && value > 0);
    } else if(typeof value === 'string') {
        const num = Number(value);
        return (Number.isInteger(value) && num > 0);
    } else {
        return false;
    }
}

const isBlank = (str) => {
    return (!str || /^\s*$/.test(str));
}

const isNotNullNorEmpty = (value) => {
    return (value && !isBlank(value));
}

module.exports = { isNotNullNorEmpty, isPositiveNumber };