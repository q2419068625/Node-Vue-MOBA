const mongoose = require('mongoose')

const schema =  mongoose.Schema({
    categories:[{type:mongoose.SchemaTypes.ObjectId,ref:'Category'}],
    title:{type:String},
    body:{type:String}
},{
    timestamps:true
})

module.exports = mongoose.model('Article ',schema,'articles')