const Joi = require('joi')

const schema = Joi.object({
    first_name: Joi.string()
        .min(3)
        .max(30)
        .required(),

    last_name: Joi.string()
        .min(1)
        .max(30),

    mobile: Joi.integer(),
})
