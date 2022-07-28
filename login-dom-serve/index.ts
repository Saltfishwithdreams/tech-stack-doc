const express = require("express");
const bodyParser = require('body-parser');

const cors = require('cors')
const app = express();
app.get('/', function(req, res){
    res.send('hello world');
});

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const postLogin = function (req, res) {
    console.log(req.body)
    const username = req.body.username;
    const password = req.body.password;
    if (username !== 'jack' || password !== 'redballoon'){
        return res.json({
            code:1,
            msg:'账号或密码错误，请重新输入...'
        })
    }
    res.json({
        code:20000,
        msg:'登录成功'
    })
}
app.use('/user/login',postLogin)

app.listen(8080, () => {
    console.log("http://localhost:8080已经打开")
});
