// Importing the route whith the controller
const HeroController = require("../controllers/hero.controller");
console.log("HeroController is=>", HeroController);

module.exports=(app)=> {
    app.get("/api/heroes", HeroController.readAll)
    app.post("/api/heroes", HeroController.create)
    app.get("/api/heroes/:id", HeroController.findOnehero)
    app.put("/api/heroes/:id", HeroController.update)
    app.delete("/api/heroes/:id", HeroController.delete)
}

