const express = require('express')

const userRoutes = require('./routes/user.router')
const messageRoutes = require('./routes/message.router')
const errorHandleMiddleware = require('./middleware/error-handler.middleware')
const { sequelize } = require('./models/db');

const app = express()
app.use(express.json())

sequelize.sync().then(() => {
    console.log('Database synced');
}).catch((err) => {
    console.error('Error syncing database:', err);
})

app.get('/', (_req, res) => {
    res.send("The app is working!")
})
app.use('/user', userRoutes)
app.use('/message', messageRoutes)

app.use(errorHandleMiddleware);

const PORT = 3000
app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    }
    console.log("Server listening on PORT", PORT)
})
