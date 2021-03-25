// eslint-disable-next-line no-unused-vars
const $ = require("jquery")

function findAllUser() {
    return $.ajax({
        type: "GET",
        url: "https://reqres.in/api/users?",
        async: false
    }).responseJSON.data
}
export {findAllUser}