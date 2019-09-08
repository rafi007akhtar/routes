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
	console.log(store);
	return res.status(200).send("JSON sent\n");
});
app.post("/posts", (req, res) => {
	res.set("Content-Type", "application/json");
	store.posts.push(req.body);
	console.log(store);
	return res.status(201).send("JSON received\n")
});
app.put("/posts/:id", (req, res) => {
	let post = store.posts.filter(p => p.id == req.params.id)[0];
	let ind = store.posts.indexOf(post);
	if (ind === -1)
		return res.send("No such post present\n");
	store.posts[ind] = req.body;  // complete replacement for put
	console.log(store)
	return res.status(201).send("JSON modified\n");
});
app.delete("/posts/:id", (req, res) => {
	let post = store.posts.filter(p => p.id == req.params.id)[0];
	let ind = store.posts.indexOf(post);
	if (ind === -1)
		return res.send("No such post present\n");
	store.posts.splice(ind, 1);
	console.log(store);
	return res.send("JSON deleted\n");
});

let [port, ip] = [process.env.PORT, process.env.IP];
if (!port || !ip)
	app.listen(4200, () => console.log(`Server running at localhost:4200`));
else app.listen(port, ip, () => console.log(`Server running at ${ip}:${port}`));
