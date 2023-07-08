const express = require("express")
const app = express();
const PORT= 8000;


//? MIDDLE WEAR
// express doesn't understand json this will help
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


// IMPORTING OUR ROUTES:

require("./Config/mongoose.config")
require("./routes/hero.route")(app)

app.listen(PORT, ()=>
console.log(`Server is locked and loaded on port${PORT} 🚀!`)
)