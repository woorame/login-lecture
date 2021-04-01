// 모듈
const express = require('express');
const app = express();

// 라우팅
const home = require('./src/routes/home'); // 해당 경로에 있는 js 파일을 읽어옴

// 앱 세팅
app.set('views', './src/views');
app.set('view engine', 'ejs'); // ejs 엔진을 사용하기 위한 set

app.use(express.static(`${__dirname}/src/public`));

app.use('/', home);

module.exports = app;
