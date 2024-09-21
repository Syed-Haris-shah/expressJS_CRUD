import express from 'express'

const PORT = 3000

const app = express()
app.use(express.json())

let users = [
    { id: 1, name: 'Hairs', email: 'haris@gmail.com' },
    { id: 2, name: 'hamza', email: 'hamza@gmail.com' }
];

app.get('/api/users', (req, res)=>{
    res.status(200).json({message: `users data fetched`, data: users})
})

app.post('/api/users', (req, res) => {

    const addUser = {

        id: users.length + 1,
        name: req.body.name,
        emai: req.body.email
    }
    users.push(addUser)
    res.status(201).json({message: 'users added', addUser});
});

app.put('/api/users/:id', (req, res) => {
    
    const userId = parseInt(req.params.id);
    const user = users.find(user => user.id === userId);

    if (user) {
        user.name = req.body.name;
        res.status(201).json({message: 'users updated', user });
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

app.listen(PORT, ()=>{
    console.log(`server in listning on http://localhost:${PORT}`)
})