// 모듈
const express = require('express');
const app = express();

// 라우팅
const home = require('./src/routes/home'); // 해당 경로에 있는 js 파일을 읽어옴

// 앱 세팅
app.set('views', './src/views');
app.set('view engine', 'ejs'); // ejs 엔진을 사용하기 위한 set

// index.js 에서 exports한 router를 app.js에서 받아온다.
// use는 미들웨어를 등록해주는 메서드
app.use('/', home); // root 경로로 접근하면 home로 이동

module.exports = app;
