const express = require('express');
const app = express();
const {addNewVisitor,listAllVisitors,deleteVisitor,deleteVisitors,viewVisitor,updateVisitor} = require('./app');

app.use(express.json());
app.use(express.urlencoded());

app.post('/addNewVisitor',async(req,res)=>{
    const name = req.body.name
    const age = req.body.age
    const dateOfVisit = req.body.dateOfVisit
    const timeOfVisit = req.body.timeOfVisit
    const nameOfAssistant = req.body.nameOfAssistant
    const comments = req.body.comments
    const visitor = await addNewVisitor(name,age,dateOfVisit,timeOfVisit,nameOfAssistant,comments)
    res.send(JSON.stringify(visitor));
    res.end();
})

app.delete('/deleteVisitor/:id',async(req,res)=>{
    const visitor = await deleteVisitor(req.params.id);
    res.send(JSON.stringify(visitor));
    res.end();
})

app.get('/viewVisitors',async(req,res)=>{
    const visitor = await deleteVisitors();
    res.send(JSON.stringify(visitor));
    res.end();
})

app.get('/viewVisitor/:id',async(req,res)=>{
    const visitor = await viewVisitor(req.params.id);
    res.send(visitor);
    res.end();
    
})

app.put('/updateVisitor/:id',async(req,res)=>{
    const id = req.params.id
    const name = req.body.name
    const age = req.body.age
    const dateOfVisit = req.body.dateOfVisit
    const timeOfVisit = req.body.timeOfVisit
    const nameOfAssistant = req.body.nameOfAssistant
    const comments = req.body.comments
    const visitor = await updateVisitor(id,name,age,dateOfVisit,timeOfVisit,nameOfAssistant,comments)
    res.send(JSON.stringify(visitor));
    res.end();
})

const server = app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})

