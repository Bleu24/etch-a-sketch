let checkNaN = (num) => {
    if (isNaN(num) && typeof num === 'string') {
        console.log("Just Ignore, Debugging Purposes");
        return true;
    } else {
        return false;
    }
}

module.exports = checkNaN;