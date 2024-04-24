
const successRes = ({ message = "success", data = {} }) => {
    return {
        message,
        data,
    }
}

const errorRes = ({ message = "error", error = "" }) => {
    return {
        message,
        error
    }
}


module.exports = {
    successRes,
    errorRes
}