import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'art'
})



app.post('/signup', (req,res) => {
    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
    ]
    const sql = "INSERT INTO users (`name`,`email`,`password`) Values (?)";
    db.query(sql,[values], (err,data) =>{
        if(err) return res.json(err);
        return res.json(data);
    })
})
app.post('/login', (req,res) =>{
    const values = [
        req.body.email,
        req.body.password,
    ]
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    db.query(sql,[email,password], (err,result) =>{
        if(err) res.send(err)
        if(result){
            const id = result[0].id;
        }
    })
})






app.listen(8081,()=> {
    console.log("server is running")
})