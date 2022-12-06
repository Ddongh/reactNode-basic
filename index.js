const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 3000
const { User } = require("./models/User");
const bodyParser = require('body-parser');
const config = require('./config/key');

// application/s-www-form-urlencoded
app.use(bodyParser.urlencoded({extended : true}));
// application/json
app.use(bodyParser.json());

const mongoose = require('mongoose')
//mongoose.connect('mongodb+srv://dong:1234@boilerplate.4k1r6l8.mongodb.net/?retryWrites=true&w=majority')
mongoose.connect(config.mongoURI, {
    //usernewUrlParser : true, useUninfiedtopology : true, useCreateIndex : true, useFindAndModify : false
}).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err)) 

app.get('/', (req, res) => res.send("Hello world~~~##"))
 
app.post('/register', (req, res) => {
    //화원 가입할 때 필요한 정보들을 client에서 가져오면
    //그것들을 데이터 베이스에 넣어준다.
    const user = new User(req.body)

    user.save((err, userInfo) => {
        if(err) return res.json({ success : false, err})
        return res.status(200).json({
            success : true
        })
    })
})
app.listen(port, () => console.log("Example app listening on port ${port}!"))


