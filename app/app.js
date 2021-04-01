// 모듈
const express = require('express');
const bodyParser = require('body-parser'); // body를 파싱해오기 위한 모듈
const app = express();

// 라우팅
const home = require('./src/routes/home'); // 해당 경로에 있는 js 파일을 읽어옴

// 앱 세팅
app.set('views', './src/views');
app.set('view engine', 'ejs'); // ejs 엔진을 사용하기 위한 set
app.use(express.static(`${__dirname}/src/public`));

// body-parser모듈을 사용하기 위한 미들웨어 등록
app.use(bodyParser.json());
// URL을 통해 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', home);

module.exports = app;
