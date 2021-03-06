require('dotenv').config()
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;
const authController = require('./controllers/authController')
const gauntletController = require('./controllers/theGauntletController')
const leaderboardController = require('./controllers/leaderboardController')
const path = require('path')

const app = express();

app.use(express.json())


app.use(
    session({
        resave:false,
        saveUninitialized:true,
        rejectUnauthorized:false,
        cookie:{maxAge: 1000*60*60},
        secret:SESSION_SECRET
    })
)
massive({
    connectionString:CONNECTION_STRING,
    ssl:{
        rejectUnauthorized:false
    }
}).then(db => {
    const port = SERVER_PORT
    app.set('db',db)
    app.listen(port || 6542, () => console.log(`The Gauntlet is running on ${port}`))
})

// User Stuff:
app.post('/api/login', authController.login)
app.post('/api/register', authController.register)
app.post('/api/logout', authController.logout)
// LeaderBoard Stuff:
app.get('/api/leaderboard/byscore', leaderboardController.fetchLeaderboardByScore)
app.get('/api/leaderboard/byfloor', leaderboardController.fetchLeaderboardByFloors)
app.post('/api/myleaderboard', leaderboardController.fetchMyLeaderboard)
app.post('/api/leaderboard', leaderboardController.uploadToLeaderboard)
// TheGauntlet Stuff:
app.get('/api/classes', gauntletController.fetchClasses)
app.get('/api/monsters', gauntletController.fetchMonsters)
app.get('/api/bosses', gauntletController.fetchBosses)
app.get('/api/usermonsters', gauntletController.fetchUserMonsters)
app.post('/api/monstercreator', gauntletController.createMonster)
app.post('/api/mymonsters', gauntletController.fetchMyMonsters)
app.delete('/api/mymonsters/:id', gauntletController.deleteMonster)
app.put('/api/mymonsters/confirmchanges', gauntletController.editMonster)


app.use(express.static(__dirname + '/../build'))

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))

})

