const express = require('express');
const app = express();
const port = 2000;

app.use(express.json());

let details = [
    {
        "id": 1,
        "username": "Rjesh Sir",
        "role": "Mentor"
    },
    {
        "id": 2,
        "username": "Ajay",
        "role": "Trainee"
    },
    {
        "id": 3,
        "username": "Abheejit",
        "role": "Trainee"
    }
];



app.get('/:id', (req, res) => {
    try{
        const id = Number(req.params.id);
        const user = details.find((find_id) => find_id.id === id);
        if(user){
            res.json(user);
        }
        else{
            res.status(500).send("User Not Found");
        }
        // res.json(details);
        // console.log(req);
    }
    catch{
        res.send("Bad Request");
    }
});

app.post('/', (req, res) => {
    try{
    const add_data = req.body;
    details.push(add_data);
    res.send(details);
    }
    catch{
        res.status(5001).send("server error");
    }
});

app.put('/:id', (req, res) => {
    const id = Number(req.params.id);
    const body = req.body;
    
    const person = details.find((account) => account.id === id);
    const index = details.indexOf(person);

    console.log(person);
    console.log(index);
    const updatedAccount = {...person,...body };

    console.log(updatedAccount);
    details[index] = updatedAccount;

    res.send(details);

});

app.delete('/:id', (req,res) => {
    const id = Number(req.params.id);
    const newDetail = details.filter((find_id) => find_id.id != id);

    console.log(newDetail);

    if(!newDetail){
        res.send("error");
    }
    else{
        details = newDetail;
        res.send(details);
    }
});

app.patch('/:id', (req, res) => {
    const id = Number(req.params.id);
    const body = req.body;
    const person = details.find((account) => account.id === id);
    const index = details.indexOf(person);

    console.log(person);
    console.log(index);
    const updatedUser = {...person,...body};

    console.log(updatedUser);
    details[index] = updatedUser;

    res.send(details);

});
app.get('/new', (req,res) => {
    res.send()
})

app.listen(port, () => {
    console.log(`listening at: ${port}`);
});