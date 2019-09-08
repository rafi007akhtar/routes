let express = require("express");
let app = express();
let bp = require("body-parser");
let morgan = require("morgan");

app.use(bp.json());
app.use(morgan("dev"));

let store = {
	posts: [{
		id: 1,
		user: "rafi007akhtar",
		text: "Traught, whelmed and feeling the aster",
		comments: [
			"today is the day",
			"i hacked the mainframe"
		]
	}]
};

app.get("/posts", (req, res) => {
	res.status(200).json(store);
});
app.post("/posts", (req, res) => {
	res.set("Content-Type", "application/json");
	store.posts.push(req.body);
	res.send(store)
	console.log(store);
});
app.put("/posts/:id", (req, res) => {
	// res.set("Content-Type", "application/json");
	console.log("yooooooo");
	let post = store.posts.filter(p => p.id == req.params.id)[0];
	let ind = store.posts.indexOf(post);
	// res.send(ind);
	// console.log(ind);
	store.posts[ind] = req.body;  // complete replacement for put
	res.send(store);
});
app.delete("/posts/:id", (req, res) => {
	let post = store.posts.filter(p => p.id == req.params.id)[0];
	let ind = store.posts.indexOf(post);
	store.posts.splice(ind, 1);
	res.send(store);
	console.log(store);
});

// let [port, ip] = [process.env.PORT, process.env.IP];
app.listen(4200, () => console.log(`Server running at localhost:4200`));
