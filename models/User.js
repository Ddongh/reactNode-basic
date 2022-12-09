const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema

const userSchema = mongoose.Schema ({
    name : {
        type : String,
        maxlength : 50
    },
    email : {
        type : String,
        trim : true,
        unique : 1
    },
    password : {
        type : String,
        minlength : 5
    },
    lastname : {
        type : String,
        maxlength : 50
    },
    role : {
        type : Number,
        default : 0
    },
    image : String,
    token : {
        type : String
    },
    tokenExp : {
        type : Number
    }

})

userSchema.pre('save', function(next) {
    var user = this;
    if(user.isModified('password')){
        //비밀번호를 암호화한다.
        bcrypt.genSalt(saltRounds, function(err, salt){
            if(err) return next(err)

            bcrypt.hash(user.password, salt, function(err, hash) {
                if(err) return next(err)
                user.password = hash
                next()
            })
        })
    } else {
        next()
    }
})

userSchema.methods.comparePassword = function(plainPassword, cb) {
    //plainPassword 1234567     암호화된 비밀번호 $2b$10$.DmdZ8aLbi/1yWfxuh4VLOXPFYiGoS5lKBjjqpu..BTwXslUQ4ttO
    bcrypt.compare(plainPassword, this.password, function(err, isMach) {
        if(err) return cb(err)
        cb(null, isMach)
    })
}

userSchema.methods.generateToken = function(cb) {
    //jsonwebtoken을 사용해서 token을 생성하기
    var user = this;
    var token = jwt.sign(user._id.toHexString(), 'secretToken')
    // user._id + 'secretToken' -> Token
    // -> 'secretToken' -> user._id

    user.token = token 
    user.save(function(err, user) {
        if(err) return cb(err) 
        cb(null, user)
    })

}

const User = mongoose.model('User', userSchema)

module.exports = { User }