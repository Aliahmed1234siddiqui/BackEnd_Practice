import express from "express"
// import cors from "cors"
import router from "./Routers/index.js"

const app = express()



// console.log("hello world")


// app.use(express.cors())
app.use(express.json())

app.use('/api',router)

const Port = 8000
app.listen(Port,()=>{
    console.log(`Server Run At our Port ${Port}`)
})