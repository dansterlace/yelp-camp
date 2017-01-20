var mongoose = require("mongoose");

// initial schema setup
var campsroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

module.exports = mongoose.model("Campground", campsroundSchema);