const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const chefData = require("./data/chef.json");
const recipeData = require("./data/recipe.json");
dotenv.config();
const app = express();
app.use(cors({ origin: "*", methods: ["GET"] }));

app.get("/", async (req, res) => {
	res.send("Welcome to chef server");
});

app.get("/chef", async (req, res) => {
	res.send(chefData);
});
app.get("/chef/:id", async (req, res) => {
	res.send(chefData.find((i) => i.id.toString() === req.params.id));
});
app.get("/recipe/:id", async (req, res) => {
	res.send(recipeData.find((i) => i.id.toString() === req.params.id));
});
app.get("/recipe/chef/:chefId", async (req, res) => {
	res.send(
		recipeData.filter((i) => i.chef_id.toString() == req.params.chefId)
	);
});

app.listen(process.env.PORT, (err, info) => {
	if (err) throw err;
	console.log("server runnign on port" + " " + process.env.PORT);
});
