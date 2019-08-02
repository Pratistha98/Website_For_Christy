var express = require ("express"), 
	app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
//==========================================
app.get("/", function(req,res){
	res.redirect("home");
});

app.get("/home", function(req,res){
	res.render("landing");
});

app.get("/play", function(req,res){
	res.render("play");
});
		
 app.get("/about", function(req,res){
	res.render("about"); 
 });

//========================================
app.get("/mxtea", function(req,res){
	res.render("projects/mxtea");
});
app.get("/inspireoakland", function(req,res){
	res.render("projects/2019InspireOakland");
});
app.get("/fontdesign", function(req,res){
	res.render("projects/SubwayMemory");
});
app.get("/demandposter", function(req,res){
	res.render("projects/DemandPosterSeries");
});
app.get("/WebKaleGallery", function(req,res){
	res.render("projects/WebKaleGallery");
});
app.get("/WebMarianaTrench", function(req,res){
	res.render("projects/WebMarianaTrench");
});

// Mx.Tea
// 2019 Inspire Oakland
// Subway Memory
// Demand Poster Series
// Web: Kale Gallery
// Web: Mariana Trench
//===========================================
app.listen(3000,() => {
	console.log("Connecting to Christyhu");
});