const express = require("express");
const app = express();
let port=4000;

//get products
app.get('/products',(req,res) =>{
    res.send("Here is the list of all products.");
})

//post products
app.post("/products", (req, res) => {
  res.send("A new product has been added.");
});

//get categories
app.get('/categories',(req,res) =>{
    res.send("Here is the list of all categories");
})
//post categories
app.post("/categories", (req, res) => {
  res.send("A new category has been created.");
});

//wilcard route
app.use((req,res)=>{
  res.status(404).send("<h1>404 - Page Not Found</h1>")
})

app.listen(port,()=>{
    console.log(`Server is up and running on port ${port}! Ready to handle requests.`);
})