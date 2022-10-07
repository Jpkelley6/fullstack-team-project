// importing cors 
const cors = require('cors')
//importing express
const express = require('express')
//invoking express
const app = express()
//importing pg
const {Client} =  require('pg')
//connection string
const connectionString = 'postgresql://postgres:docker@127.0.0.1:5432/sports_team'
//connection string connection 
const client = new Client({
    connectionString: connectionString
})
//connect the client 
client.connect()
//using express.json
app.use(express.json())
//using cors
app.use(cors())
// our port
const PORT = process.env.PORT || 3000
const {response} = require('express')
// app.use(next())

//GET route 
app.get('/api/sportsteam', (req, res, next) => {
    return res.headersSent == true ? next() :
    client.query('SELECT * FROM sports_tb')
    .then(results => res.send(results.rows))
})

app.get('/api/sportsteam/:id', (req, res, next) => {
    let id = req.params.id
    client.query('SELECT * FROM sports_tb WHERE sport_id = $1', [id])
    .then(results => 
        results.rows.length === 0 ? res.send(next()) :
        res.send(results.rows))
})

app.post('/api/sportsteam', (req, res) => {
    const {city, sports_type, team_name} = req.body
    client.query(`INSERT INTO sports_tb (city, sports_type, team_name) VALUES ('${city}', '${sports_type}', '${team_name}')`)
    res.send('Added your team!')
})

app.patch('/api/sportsteam/:id', (req, res) => {
    const {city, sports_type, team_name} = req.body
    city ? client.query(`UPDATE sports_tb SET city='${city}' WHERE sport_id=${req.params.id}`) : ''
    sports_type ? client.query(`UPDATE sports_tb SET sports_type='${sports_type}' WHERE sport_id=${req.params.id}`) : ''
    team_name ? client.query(`UPDATE sports_tb SET team_name='${team_name}' WHERE sport_id=${req.params.id}`) : ''
    res.send('Updated your team')
})

app.delete('/api/sportsteam/:id', (req, res)=> {
    client.query(`DELETE FROM sports_tb WHERE sport_id= ${req.params.id}`)
    res.send('Deleted')
})


app.use((req, res, next) => {
    res.status(404).send('Not found')
})
    
app.use((req, res, next, error) => {
    console.error(error.stack)
    res.status(500).send('Internal server error')    
})

//port listening
app.listen(PORT ,()=> {
console.log('ITS WORKING', PORT)
})