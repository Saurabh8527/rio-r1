
const validationMiddleware = (validatePart) => async (req, res, next) => {
    try {
        let data = {}
        if (validatePart == 'params') {
            data = req.params
        } else if (validatePart == 'query') {
            data = req.query
        } else if (validatePart == 'body') {
            data = req.body
        }
        const value = await schema.validateAsync({});
    }
    catch (err) { next(err) }
}