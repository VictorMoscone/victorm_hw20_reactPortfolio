const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// After you run it, creates index.html file inside the "Build" folder.
if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
};

app.use("/", require("./routes/clientRoutes"));

app.listen(PORT, () => 
    console.log(`Listening at http://localhost:${PORT}`)
);