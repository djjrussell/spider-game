export const isValid = (input) => {

return input == "" ||
    input == "undefined" ||
    input == undefined ||
    input == "null" ||
    input == null ?
    false : true

};