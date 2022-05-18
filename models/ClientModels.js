import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import OAuth from 'jsonwebtoken';

const ClientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            'Name is required'
        ],
        maxlength: 30,
        minlength: 2,
        trim: true
    },
    email: {
        type: String,
        required: [
            true,
            'Email is required'
        ],

        // ***** validator package confirmation*****///
        //  var validator = require('validator');
        // validator.isEmail('foo@bar.com'); //=> true

        validate: {
            validator: validator.isEmail,
            message: 'Please use a current email address.'
        },
        unique: true
    },
    password: {
        type: String,
        required: [
            true,
            'Please provide password'
        ],
        minlength: 4,
        select: false
    },
    lastName: {
        type: String,
        trim: true,
        maxlength: 30,
        default: 'lastName'
    },
    location: {
        type: String,
        trim: true,
        maxlength: 30,
        default: 'your city'
    }
});

// ClientSchema.pre('save', function() {
//     console.log(this.password);
// });

// Hashing password with the help of bcrypt
ClientSchema.pre('save', async function() {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
});

//JSON web Token creation for authentication purposes
ClientSchema.methods.createOAuth = function() {
    return OAuth.sign({ clientId: this._id }, 'OAuthsecret', { expiresIn: '1d' });
};

// User will create a database in mongoDb
export default mongoose.model('User', ClientSchema);
