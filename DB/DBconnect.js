let mongoose = require("mongoose");

function DBconnect (){
    mongoose.connect(process.env.DB_URL)
    .then(()=>{
        console.log("data base connect");
    })
    .catch((err)=>{
       console.log(err);
    });
}
module.exports = DBconnect;