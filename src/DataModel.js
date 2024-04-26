const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("DataModel", dataSchema);
