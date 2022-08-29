const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    name:{
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters long"]
    },
    email:{
        type: String,
        required: [true, "Email is required"],
        unique: [true, "This email address is already exist"],
        validate: [val=>/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val), "This email is not valid"]
    },
    password:{
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters long"]
    },
    age: {
        type: Number,
        required: [true, "Age is required"],
        min: [18, "Age must be at least 18 years old"],
        max: [65, "Age must be at most 65 years old"]
    },
    gender: {
        type: String,
        default: null,
        validate: [val=> val == "male" || val == "female" || val == "other" || val == null, "Gender can be null, female, male or other"],
        // enum: {
        //     values: ["male", "female", "other", null],
        //     message: "Gender can be null, female, male or other"
        // }
    },
    phone: {
        type: String,
        default: null,
        minlength: [10, "phone must be at least 10 characters long"]
    },
    address: {
        type: {
            country: {
                type: String,
                required: true,
                minlength: [3, "country must be at least 3 characters long"]
            },
            city: {
                type: String,
                required: true,
                minlength: [3, "city must be at least 3 characters long"]
            },
            street: {
                type: String,
                required: true,
                minlength: [3, "street must be at least 3 characters long"]
            }
        },
        default: null
    },
    hobbies: {
        type: Array,
        default: [],
        validate: [arr=>{
            if(Array.isArray(arr)) {
                if(arr.length == 0 || arr.every(st=> typeof st == "string")) return true
            }  
            return false           
        } ,"hobbies must be an array of strings"]
    }

}, {collection: 'exercise_users'}) 

const Users = model('users', userSchema)

module.exports = Users