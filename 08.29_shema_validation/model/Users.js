const {Schema, model} = require('mongoose') 

const userSchema = new Schema({
    name : {
        type:String,
        minlength:3,
        maxlength:10
    },
    age: {
        type:Number,
        // min:[18,"You still young"],
        // max: 60,
        validate:[(val)=>{
            if(val % 2 == 0 && val > 18 && val < 60) return true;
            else return false
        }, "We need even number between 18 and 60"]
    },
    /**
     * with validation:
     * FIELD_NAME: {type: TYPE, STUFF1: [validate, 'ERROR_MESSAGE'] , .... OTHER STUFF}
     * 
     */
    married: {
        type: Boolean,
        default: false
    },
    email: {
        type:String,
        unique:true,
        validate: val=> /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)
    },
    address: {
        type: {
        country: {type: String, required: true},
        city: String,
        zipcode: {
            type: Number,
            max: 99999,
            min: 9999
        }
    }, 
    // required: true
    },
    birthDate:Date,
    hobbies: [{
        type:String,
        maxlength:15
    }]
}, {collection: "usersNice"})

const Users = model('users', userSchema)

module.exports = Users