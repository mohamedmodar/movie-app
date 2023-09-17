// required
require("dotenv").config();
const express = require("express");
const port = process.env.port || 3000 ;
const app = express();
const fs = require('fs');
const mongoose = require("mongoose");
const moiveRouter = require("./routes/movie");

//middleWare.
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//log.txt
app.use((req, res, next) => {
    const logFilePath = './log.txt'
    const log = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
    // to print the log
    console.log(log);
     // Append the log entry to the file
    fs.access(logFilePath, fs.constants.F_OK, (err) => {  
        fs.appendFile(logFilePath, log, (err) => {
            if (err) {
                console.error('Error writing to log file:', err);
            }
        });
    });

    next();
});
app.use("/movies", moiveRouter);

//connect data base.
mongoose
.connect(process.env.CONNECTION_STRING, {})
.then(() => {
    console.log("connected to mongo");
})
.catch((e) => {
console.log(e);
});
//connect to the server.
app.listen(port, () => {
    console.log(`server is up and runing on ${port}`)
});