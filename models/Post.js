const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
desc: {
    type: String,
    required: true,
},
title: {
    type: String,
    required: true,
},


});

module.exports = mongoose.model('Post', PostSchema);