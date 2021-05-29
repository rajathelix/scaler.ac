const express = require('express')
const { db } = require('./models/db')
const linksroute = require('./routes/links')
const app = express()
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/links', linksroute)

//Never force: true in production as it drops tables
db.sync(/*{ force: true }*/).then(() => {
    console.log('DB works!!!')
}).catch((err) => {
    console.error(err)
})
app.listen(4445, () => {
    console.log('Server started on http://localhost:4445')
})