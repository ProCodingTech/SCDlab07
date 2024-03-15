const express = require('express');
const app = express();
const port =  3000;
app.use(express.json());
app.get('/', (req, res) => {
res.send('Hello from the Microservices Tasks!');
});
let Users=[
    {id:"1",name:"Usman",email:"usman@gmail.com"},
    {id:"2",name:"Ali",email:"ali@gmail.com"},
    ] ;
let Tasks=[
    {id:"1",userid:"1",title:"Task 1",priority:1,category:"Personal",description:"description",duedate:"01/01/2024"},
    {id:"2",userid:"2",title:"Task 2",priority:2,category:"Personal",description:"description",duedate:"01/01/2024"},
    ] ;
app.post('/addnewtask', (req, res) => {
const newobj=req.body;
Tasks.push(newobj)
    res.status(200).json(Tasks);
    });

app.post('/addanewuser', (req, res) => {
    const newobj=req.body;
    Users.push(newobj)
        res.status(200).json(Users);
        });
    
    app.get('/getuserdetail/:id', (req, res) => {
        let id =req.params.id;
        const obj=Users.find((element)=>element.id===id);
        if(obj){
            res.status(200).json(obj);
        }else{
            res.status(200).json("Not found");
        }
       
    });
    app.get('/getallofthetasks', (req, res) => {
        let temp=Tasks;
        temp.sort((a,b)=>a.priority-b.priority)
         res.status(200).json(temp);
    });
app.listen(port, () => {
console.log(`Microservice listening on port ${port}`);
});