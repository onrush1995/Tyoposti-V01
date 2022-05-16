import validator from 'validator';
import mongoose from 'mongoose';

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

// Client will create a database in mongoDb
export default mongoose.model('Client', ClientSchema);
