import express from 'express'

import projectRouter from './routes/projects.js'
import users from './utils/data.js'

const app = express()
// const projectRouter = require('./routes/projects').default

app.use(express.json())
app.use(setUser)
app.use('/projects', projectRouter)

app.get('/', (req, res) => {
    res.send('Home Page, its runningy')
})

app.get('/dashboard', (req, res) => {
    res.send('Dashboard Page')
})

app.get('/admin', (req, res) => {
    res.send('Admin Page')
})

function setUser(req, res, next) {
    const userId = req.body.userId
    if (userId) {
        req.user = users.find(user => user.id === userId)
    }
    next()
}

app.listen(8000)