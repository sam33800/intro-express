const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

require("./db/sequelizeSetup")

app
    .use(morgan('dev'))
    .use(express.json())

const coworkingRouter = require('./routes/coworkingRoutes')
const userRouter = require('./routes/userRoutes')

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' })
})

app.use('/api/coworkings', coworkingRouter)
app.use('/api/users', userRouter)
  

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})