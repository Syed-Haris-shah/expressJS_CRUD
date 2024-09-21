import express from 'express'

const PORT = 3000

const app = express()
app.use(express.json())

app.get('/api/users', (req, res)=>{
    res.status(200).json({message: `users data fetched`})
})


app.listen(PORT, ()=>{
    console.log(`server in listning on http://localhost:${PORT}`)
})