import express from "express";
import axios from "axios";
import bodyParser from "body-parser";


const app=express();
const port=3000;
const apikey = "b6e239fa";
const url = "http://www.omdbapi.com/?apikey=" + apikey;


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",(req,res)=>{
   res.render("index.ejs",{ stuff1:"Waiting..",stuff2:".."});
});

// app.get("/",async(req,res)=>{
//     try{
//         const response=await axios.get(url+"&i=tt3896198")
//         // console.log(response);
//         res.render("index.ejs",{stuff1:response.data.Title,stuff2:})

//     }catch (error){
//         res.render("index.ejs",{stuff:error})
//     }
// })
app.post("/get-film",async(req,res)=>{
    const title=req.body.t;
    const year=req.body.y;
    try{
        const response=await axios.get(url+"&t="+title)
        console.log(response.data);
        res.render("index.ejs",{stuff1:response.data.Title,stuff2:response.data.Year,stuff3:response.data.Type,stuff4:response.data.Genre,stuff5:response.data.Website});

    }catch(error){
        res.render("index.ejs",{stuff1:error})

    }
})





app.listen(port,() =>{
    console.log(`server is running at port ${port}.`)
})