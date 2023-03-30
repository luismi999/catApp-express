const { Schema, model } = require("mongoose");

const catSchema = Schema({
    pedigree: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
});

catSchema.method('toJSON', function() {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object; 
});

module.exports = model("Cat", catSchema);