const {Schema, model} = require("mongoose")

const userSchema = new Schema({
    name: String,
    email: String,
    reletions_id:{
        type: Schema.Types.ObjectId,
        ref:"users"
    }
})

const UserModel = new model("user", userSchema)

module.exports = UserModel