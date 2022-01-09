const express=require("express");
const bodyparser=require("body-parser");
const nodemailer=require("nodemailer");
const cors=require("cors");

const app=express();

const port=process.env.PORT || 6002;

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.use(cors());

app.use(express.static(__dirname+"/public"));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.get('/home',(req,res)=>{
    res.sendFile(__dirname+"/form.html");
})

//email sending
app.post('/mailer',(req,res)=>{
    var data1=req.body.email;
    var data2=req.body.message;
    console.log(data1 + data2);
 var transporter=nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "tojina1395@gmail.com",
        pass: "tojina123*"
    }
 });

var mailoptions={
     from: "tojina1395@gmail.com",
     to: data1,
     subject: "sending email from node",
     text: data2
};

transporter.sendMail(mailoptions,function(err,info){
if(err){
    console.log("something went wrong");
    res.send("something went wrong");
}
else{
    res.sendFile(__dirname+"/sucess.html");
    console.log("email send successfully");
}

});

});

app.listen(port,()=>{
    console.log("server running at "+port);
})

