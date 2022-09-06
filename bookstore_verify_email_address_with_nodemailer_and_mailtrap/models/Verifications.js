const {Schema, model} = require('mongoose')

const verificationSchema = new Schema({
    userId: {
        type: String,
        unique: true,
        required: true
    },
    secretKey: {
        type: String,
        unique: true,
        required: true
    }
}, {collection: "verification"})

const Verification = model('Verification', verificationSchema)

module.exports = Verification