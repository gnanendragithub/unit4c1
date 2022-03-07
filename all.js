const express=required("express");
const app=books();
app.get("/books",(req,res)=>{
    console.log("books");
    return res.send({ route:"/books"});
});
app.get("/libraries",(req,res)=>{
    console.log("libraries");
    return req.send({route:"/libraries",Permission:true});
});
app.get("/authors",(req,res)=>{
    console.log("authors");
    return req.send({route:"/autors",Permission:true})
});
app.listen(5000,()=>{
    console.log("listing on the port 5000")
});
