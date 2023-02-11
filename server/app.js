const express = require ("express");
const app = express();
const cors = require ("cors");
const bodyParser = require("body-parser");
const mongoose = require ("mongoose");
const path = require ("path");
mongoose.connect("mongodb+srv://Bharath:Test-123@testing.frw4bzn.mongodb.net/usersDB", {useNewUrlParser: true});

const _dirname = path.dirname("");
const buildPath = path.join(_dirname , "../client/build");

app.use(express.static(buildPath));

app.get("/", function(req,res){
    res.sendFile(
        path.join(__dirname, "../client/build/index.html"),
        function (err){
            if (err){
                res.status(500).send(err);
            }
        }
    )
})

const userSchema = mongoose.Schema({
    name : String,
    role : String
});

const User = new mongoose.model("user", userSchema);

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const port = process.env.PORT || 4000

app.get("/users", function(req,res){

    User.find((err, users) => {
        if (!err){
            res.send(users)
        } else {
            res.send(err)
        }
    })  
});

app.post("/users", function(req,res){
    const body = new User(req.body);
    body.save((err) => {
        if (!err){
            User.find((err, users) => {
                res.send(users);
            })
        } else {
            console.log(err)
        }
    });
    
})



app.listen(port, function(){
console.log(path.join(__dirname, "../client/build/index.html"));

    console.log(`PORT : ${port}`)
})