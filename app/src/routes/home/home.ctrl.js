const output = {
  home: (req, res) => {
    res.render('home/index'); // index.ejs
  },
  login: (req, res) => {
    res.render('home/login'); // login.ejs
  }
};

const users = {
  id: ['kwrm', '나개발', '김팀장'],
  password: ['1234', '5678', '0000']
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      password = req.body.password;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.password[idx] === password) {
        return res.json({
          success: true
        });
      }
    }
    return res.json({
      success: false,
      msg: '로그인에 실패하셨습니다.'
    });
  }
};

module.exports = {
  output,
  process
};
