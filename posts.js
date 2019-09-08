let express = require("express");
let app = express();
let bp = require("body-parser");
let morgan = require("morgan");

app.use(bp.json());
app.use(morgan("dev"));

let index = require("./index");
let store = index.store;
let findPostInd = index.findPostInd;

app.get("/posts", (req, res) => {
	console.log(store);
	return res.status(200).json({msg: "JSON sent", store});
});
app.post("/posts", (req, res) => {
	res.set("Content-Type", "application/json");
	store.posts.push(req.body);
	console.log(store);
	return res.status(201).json({msg: "JSON received", store});
});
app.put("/posts/:id", (req, res) => {
	// let post = store.posts.filter(p => p.id == req.params.id)[0];
	let ind = findPostInd(req.params.id);
	if (ind === -1)
		return res.send("No such post present");
	store.posts[ind] = req.body;  // complete replacement for put
	console.log(store)
	return res.status(201).json({msg: "JSON modified", store});
});
app.delete("/posts/:id", (req, res) => {
	// let post = store.posts.filter(p => p.id == req.params.id)[0];
	let ind = findPostInd(req.params.id);
	if (ind === -1)
		return res.send("No such post present\n");
	store.posts.splice(ind, 1);
	console.log(store);
	return res.json({msg: "JSON deleted", store});
});

let [port, ip] = [process.env.PORT, process.env.IP];
if (!port || !ip)
	app.listen(4200, () => console.log(`Server running at localhost:4200`));
else app.listen(port, ip, () => console.log(`Server running at ${ip}:${port}`));
