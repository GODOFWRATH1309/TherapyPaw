// I did the comment out coding
// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const UserSchema = new Schema({
//     name:{
//         type: string,
//         require:true
//     },
//     email:{
//         type: string,
//         require:true,
//         unique:true
//     },
//     password:{
//         type: string,
//         require:true
//     },
//     date:{
//         type:date,
//         default : Date.now
//     }
// });

// module.export = mongoose.model('user',UserSchema);

const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = new Schema({

    name:{
        type: String,
        required: true
        },

    email: {
        type:String,
        required: true,
        unique: true
        },
    password: {
        type: String,
        required: true
        },
    date:{
        type: Date,
        default: Date.now
        },
});
const User = mongoose.model('user', UserSchema);

module.exports = User
