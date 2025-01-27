const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: { type: String, required: true, minLnegth: 3, maxLength: 100 },
});

//virtual for GenreSchema's URL
GenreSchema.virtual("url").get(function () {
  return `/catalog/genre/${this._id}`;
});

//Export model
module.exports = mongoose.model("Genre", GenreSchema);
