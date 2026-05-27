const express = require('express');
const app = express();
let port=3000;

//get orders
app.get('/orders',(req,res) =>{
    res.send("Here is the list of all orders.");
})
//post orders
app.post("/orders", (req, res) => {
  res.send("A new order has been created.");
});

//get users
app.get('/users',(req,res) =>{
    res.send("Here is the list of all users");
})
//post users
app.post("/users", (req, res) => {
  res.send("A new user has been created.");
});


app.listen(port,()=>{
    console.log(`Server is up and running on port ${port}! Ready to handle requests.`);
})