

module.exports = (err, req, res, next) => {
    const statusCode = err.status || 500;
    const message = err.message || 'Internal Server Error';

    console.error(err.stack);

    res.status(statusCode).json({ error: message });
};