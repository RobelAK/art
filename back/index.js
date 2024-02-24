import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import jwt from 'jsonwebtoken'
// import bcrypt from 'bcrypt'

const app = express()
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ['GET', 'POST', 'PUT'],   
    credentials: true
}))
app.use(express.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'art'
})



app.post('/signup', (req,res) => {
    const check = "SELECT * From users where email = ?";
    db.query(check,[req.body.email], (err,result) =>{
        if(err) return res.json({Error: "Query error"})
        if(result.length == 0){
            const sql = "INSERT INTO users (`name`,`email`,`password`) Values (?,?,?)"; 
            db.query(sql,[req.body.name, req.body.email, req.body.password], (err,data) =>{
                if(err) return res.json({Error: "query error"});
                return res.json({data});
                
            })
        }
        else{
            return res.json({Error: "Email already exist"})
        }
    })
})
app.post('/login', (req,res) =>{
    const email = req.body.email
    const password = req.body.password
    const sql = "SELECT * From users Where email = ? and password = ?";
    db.query(sql,[email, password], async (err,result) =>{
        if(err) return res.json({loginStatus: false, Error: "Query error"})
        if(result.length > 0){
            const id = result[0].id;
            const token = jwt.sign(
                {role: "user", id: id},
                "jwt_secret_key",
                {expiresIn: "1d"}
            );
            res.cookie("token", token)
            return res.json({loginStatus: true}) 

        }
        else{
            return res.json({loginStatus: false, Error: "Wrong email or password"}) 
        }
    })
})






app.listen(8081,()=> {
    console.log("server is running")
})