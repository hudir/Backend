run MongoDB with localhost:27017
```
sudo mongod
mongosh => for shell
```

schema validation
```
const userSchema = new Schema({
    field_name: {
        type: TYPE,
        unique: boolean,
        required: boolean,
        default: default value

        // for type == Number
        min: number,
        max: number,

        // for type == String
        minlength: number,
        maxlength: number,

        // for customer validation function
        validate: val=>{
            return val ? true : false
        }
    }
})
```

in schema object, if you want customer error message, just change the value from obj_key_value to array, arr[0] is the origin value, arr[1] is a String=> error message

### Email validation from w3c school
```
validate: val=>/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)
```
[https://www.w3resource.com/javascript/form/email-validation.php]