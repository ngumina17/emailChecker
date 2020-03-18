const express = require("express");
const app = express();
const parser = require("body-parser");


app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());


const emailController = require("./controllers/emailController")
app.use("/emails", emailController);

app.get("/", (req, res) => {
  res.send("hitting default route");
});

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
